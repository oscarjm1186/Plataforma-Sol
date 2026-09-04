export interface AstronomicalTelemetry {
  // Julian Date
  julianDate: number;
  julianDateFormatted: string; // "JD 2461286.6398"
  unixTimestamp: number;
  utcString: string;
  greenwichSiderealTime: string; // "14h 22m 10s"

  // Location Hierarchy
  locationHierarchy: {
    supercluster: string;
    localGroup: string;
    galaxy: string;
    galacticArm: string;
    distanceToCenter: string;
    system: string;
    planetaryPosition: string;
    surfaceCoordinates: string;
    station: string;
  };

  // Heliocentric Position Vector (AU & km)
  positionVector: {
    xAU: number;
    yAU: number;
    zAU: number;
    distanceAU: number;
    distanceMillionKm: number;
    meanAnomalyDeg: number;
    equationOfCenterDeg: number;
    eclipticLongitudeDeg: number;
  };

  // Orbital Velocity Vector (km/s)
  orbitalVelocity: {
    speedKmS: number;
    vxKmS: number;
    vyKmS: number;
    vzKmS: number;
    direction: string;
  };

  // Celestial Coordinates (RA & DEC)
  celestialCoordinates: {
    rightAscension: {
      hours: number;
      minutes: number;
      seconds: number;
      formatted: string; // e.g. "11h 24m 18s"
    };
    declination: {
      degrees: number;
      arcminutes: number;
      arcseconds: number;
      sign: string;
      formatted: string; // e.g. "+06° 42' 15\""
    };
    eclipticObliquity: number; // ~23.439°
  };
}

/**
 * Calculates high-precision astronomical telemetry in real time
 * based on Keplerian orbital elements and the equation of center.
 */
export function calculateAstronomicalTelemetry(date: Date = new Date()): AstronomicalTelemetry {
  const timeMs = date.getTime();

  // Julian Date: Unix epoch (1970-01-01 00:00 UTC) = JD 2440587.5
  const jd = 2440587.5 + timeMs / 86400000;
  const julianDateFormatted = `JD ${jd.toFixed(4)}`;

  // Days since J2000.0 (2000-01-01 12:00 UTC = JD 2451545.0)
  const d = jd - 2451545.0;

  // Greenwich Mean Sidereal Time (GMST) in hours
  let gmst = (18.697374558 + 24.06570982441908 * d) % 24;
  if (gmst < 0) gmst += 24;
  const gmstH = Math.floor(gmst);
  const gmstM = Math.floor((gmst - gmstH) * 60);
  const gmstS = Math.floor(((gmst - gmstH) * 60 - gmstM) * 60);
  const greenwichSiderealTime = `${String(gmstH).padStart(2, '0')}h ${String(gmstM).padStart(2, '0')}m ${String(gmstS).padStart(2, '0')}s`;

  // Mean anomaly of the Earth (degrees)
  let M = (357.5291 + 0.98560028 * d) % 360;
  if (M < 0) M += 360;
  const mRad = (M * Math.PI) / 180;

  // Equation of center (degrees)
  const C = 1.9148 * Math.sin(mRad) + 0.0200 * Math.sin(2 * mRad) + 0.0003 * Math.sin(3 * mRad);

  // Mean longitude of the Sun (degrees)
  let L0 = (280.4665 + 0.98564736 * d) % 360;
  if (L0 < 0) L0 += 360;

  // Apparent Ecliptic Longitude of the Sun (degrees)
  let lambdaSun = (L0 + C) % 360;
  if (lambdaSun < 0) lambdaSun += 360;
  const lambdaSunRad = (lambdaSun * Math.PI) / 180;

  // Heliocentric Longitude of Earth (Sun's longitude + 180°)
  let lambdaEarth = (lambdaSun + 180) % 360;
  if (lambdaEarth < 0) lambdaEarth += 360;
  const lambdaEarthRad = (lambdaEarth * Math.PI) / 180;

  // Earth-Sun Distance in AU (Keplerian elliptic approximation)
  const rAU = 1.00014061 - 0.01670862 * Math.cos(mRad) - 0.00013959 * Math.cos(2 * mRad);
  const distanceMillionKm = rAU * 149.5978707;

  // Obliquity of the Ecliptic (degrees)
  const epsDeg = 23.4392911 - 0.0000004 * d;
  const epsRad = (epsDeg * Math.PI) / 180;

  // 3D Cartesian Coordinates in AU (heliocentric equatorial coordinates)
  const xAU = rAU * Math.cos(lambdaEarthRad);
  const yAU = rAU * Math.sin(lambdaEarthRad) * Math.cos(epsRad);
  const zAU = rAU * Math.sin(lambdaEarthRad) * Math.sin(epsRad);

  // Orbital Velocity magnitude in km/s (using vis-viva equation: v = v0 * sqrt(2/r - 1/a))
  // Average orbital velocity v0 ~ 29.784 km/s
  const speedKmS = 29.784 * Math.sqrt(Math.max(0.5, (2 / rAU) - 1));

  // Tangential velocity components (perpendicular to radius vector in orbital plane)
  const vxKmS = -speedKmS * Math.sin(lambdaEarthRad);
  const vyKmS = speedKmS * Math.cos(lambdaEarthRad) * Math.cos(epsRad);
  const vzKmS = speedKmS * Math.cos(lambdaEarthRad) * Math.sin(epsRad);

  // Celestial Coordinates (Apparent Geocentric Right Ascension & Declination of Sun)
  let alpha = Math.atan2(Math.sin(lambdaSunRad) * Math.cos(epsRad), Math.cos(lambdaSunRad));
  if (alpha < 0) alpha += 2 * Math.PI;

  const raHoursTotal = (alpha * 12) / Math.PI;
  const raH = Math.floor(raHoursTotal);
  const raM = Math.floor((raHoursTotal - raH) * 60);
  const raS = Math.floor(((raHoursTotal - raH) * 60 - raM) * 60);
  const raFormatted = `${String(raH).padStart(2, '0')}h ${String(raM).padStart(2, '0')}m ${String(raS).padStart(2, '0')}s`;

  const deltaRad = Math.asin(Math.sin(lambdaSunRad) * Math.sin(epsRad));
  const deltaDegTotal = (deltaRad * 180) / Math.PI;
  const decSign = deltaDegTotal >= 0 ? '+' : '-';
  const decAbs = Math.abs(deltaDegTotal);
  const decD = Math.floor(decAbs);
  const decM = Math.floor((decAbs - decD) * 60);
  const decS = Math.floor(((decAbs - decD) * 60 - decM) * 60);
  const decFormatted = `${decSign}${String(decD).padStart(2, '0')}° ${String(decM).padStart(2, '0')}' ${String(decS).padStart(2, '0')}"`;

  return {
    julianDate: jd,
    julianDateFormatted,
    unixTimestamp: timeMs,
    utcString: date.toUTCString(),
    greenwichSiderealTime,
    locationHierarchy: {
      supercluster: 'Laniakea (Cúmulo de Virgo)',
      localGroup: 'Grupo Local (Galaxia Andrómeda, Triángulo, Vía Láctea)',
      galaxy: 'Vía Láctea (Espiral Barrada SBbc, Ø ~105,700 ly)',
      galacticArm: 'Brazo de Orión-Cisne (Espolón de Orión)',
      distanceToCenter: '~26,670 años luz (~8.18 kpc) del agujero negro supermasivo Sagitario A*',
      system: 'Sistema Solar (Estrella Tipo Espectral G2V Helios)',
      planetaryPosition: '3er Planeta (Tierra / Gaia), Órbita Elíptica e = 0.0167',
      surfaceCoordinates: '19°29\'58.2" N, 99°10\'07.4" W • Altitud 2,240 msnm',
      station: 'Laboratorio Técnico CECyT 11 Wilfrido Massieu (IPN, CDMX)',
    },
    positionVector: {
      xAU,
      yAU,
      zAU,
      distanceAU: rAU,
      distanceMillionKm,
      meanAnomalyDeg: M,
      equationOfCenterDeg: C,
      eclipticLongitudeDeg: lambdaEarth,
    },
    orbitalVelocity: {
      speedKmS,
      vxKmS,
      vyKmS,
      vzKmS,
      direction: 'Vector Progrado Tangencial a la Eclíptica (Antihorario desde polo norte celeste)',
    },
    celestialCoordinates: {
      rightAscension: {
        hours: raH,
        minutes: raM,
        seconds: raS,
        formatted: raFormatted,
      },
      declination: {
        degrees: decD,
        arcminutes: decM,
        arcseconds: decS,
        sign: decSign,
        formatted: decFormatted,
      },
      eclipticObliquity: epsDeg,
    },
  };
}

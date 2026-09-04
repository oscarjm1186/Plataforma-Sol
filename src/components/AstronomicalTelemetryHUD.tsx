import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Compass, 
  Orbit, 
  Radio, 
  Globe, 
  Navigation, 
  Clock, 
  Gauge, 
  Info,
  Maximize2
} from 'lucide-react';
import { calculateAstronomicalTelemetry, AstronomicalTelemetry } from '../utils/astronomicalData';

export const AstronomicalTelemetryHUD: React.FC = () => {
  const [telemetry, setTelemetry] = useState<AstronomicalTelemetry>(() => calculateAstronomicalTelemetry());
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Update telemetry every 1000ms
  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetry(calculateAstronomicalTelemetry());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* Permanent Capsule / Compact HUD Pill */}
      <button
        type="button"
        id="telemetry-hud-toggle"
        onClick={() => setIsExpanded(prev => !prev)}
        className={`group flex items-center gap-3 px-3.5 py-1.5 rounded-2xl border transition-all duration-300 cursor-pointer select-none text-left backdrop-blur-xl ${
          isExpanded 
            ? 'bg-[#0a1024]/95 border-cyan-500/50 shadow-lg shadow-cyan-500/15 ring-1 ring-cyan-500/30' 
            : 'bg-[#060a18]/85 hover:bg-[#0b122c]/90 border-cyan-900/40 hover:border-cyan-500/40 shadow-md shadow-black/60'
        }`}
        title="Clic para desplegar telemetría astronómica orbital en tiempo real"
      >
        {/* Pulsing Green Beacon */}
        <div className="relative flex items-center justify-center shrink-0">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-sm shadow-emerald-400"></span>
        </div>

        {/* Permanent Summary Telemetry Line */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs">
          {/* Location Summary */}
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold hidden md:inline">
              UBICACIÓN:
            </span>
            <span className="text-[11px] font-medium text-slate-200 tracking-tight flex items-center gap-1">
              <Globe className="w-3 h-3 text-cyan-400 shrink-0 inline sm:hidden" />
              <span className="truncate max-w-[210px] sm:max-w-none text-[#a6b9cc]">
                Vía Láctea, Brazo de Orión, Sistema Solar, Planeta Tierra
              </span>
            </span>
          </div>

          <span className="hidden sm:inline text-cyan-900 font-mono">|</span>

          {/* Real-time Astronomical Julian Date */}
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold hidden md:inline">
              FECHA ESTELAR:
            </span>
            <span className="text-cyan-300 font-bold tracking-wider tabular-nums bg-[#030612] px-2 py-0.5 rounded border border-cyan-950/80">
              {telemetry.julianDateFormatted}
            </span>
          </div>
        </div>

        {/* Expand / Collapse Icon */}
        <div className="shrink-0 text-slate-400 group-hover:text-cyan-300 transition-colors ml-1">
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-cyan-400" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </div>
      </button>

      {/* Expandable Technical Telemetry Accordion Panel */}
      {isExpanded && (
        <div 
          id="telemetry-hud-details-panel"
          className="absolute right-0 top-full mt-2 w-[92vw] sm:w-[580px] md:w-[720px] max-w-[760px] z-50 bg-[#060a18]/95 border border-cyan-500/30 rounded-3xl p-5 md:p-6 shadow-2xl shadow-black/90 backdrop-blur-2xl text-slate-200 animate-in fade-in slide-in-from-top-2 duration-200"
          style={{ backdropFilter: 'blur(20px)' }}
        >
          {/* Header of Modal / Drawer */}
          <div className="flex items-center justify-between border-b border-cyan-950/90 pb-3 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Orbit className="w-4 h-4 animate-spin" style={{ animationDuration: '24s' }} />
              </div>
              <div>
                <h4 className="font-mono text-xs md:text-sm font-extrabold uppercase tracking-widest text-cyan-300 flex items-center gap-2">
                  <span>TELEMETRÍA ASTRONÓMICA & COORDENADAS ORBITALES</span>
                  <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                    LIVE
                  </span>
                </h4>
                <p className="text-[10px] font-mono text-[#a6b9cc]">
                  Cálculo de Efemérides Keplerianas en Tiempo Real • Época J2000.0
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsExpanded(false)}
              className="text-xs font-mono text-slate-400 hover:text-white px-2.5 py-1 rounded-lg bg-[#030612] border border-cyan-950 hover:border-cyan-800 transition cursor-pointer"
            >
              [CERRAR]
            </button>
          </div>

          {/* Grid Layout of the 5 Telemetry Sections */}
          <div className="space-y-4 font-mono text-xs">
            {/* Section 1: Detailed Galactic & Planetary Location */}
            <div className="bg-[#030614]/90 rounded-2xl border border-cyan-950/80 p-4">
              <div className="flex items-center gap-2 text-cyan-400 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Globe className="w-3.5 h-3.5" />
                <span>1. Ubicación Galáctica y Planetaria Detallada</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-[11px] text-[#a6b9cc]">
                <div className="bg-[#05091e]/60 p-2.5 rounded-xl border border-indigo-950/60">
                  <span className="text-slate-400 text-[10px] block uppercase tracking-wider">Supercúmulo & Cúmulo</span>
                  <span className="text-slate-100 font-semibold">{telemetry.locationHierarchy.supercluster}</span>
                </div>
                <div className="bg-[#05091e]/60 p-2.5 rounded-xl border border-indigo-950/60">
                  <span className="text-slate-400 text-[10px] block uppercase tracking-wider">Galaxia & Brazo Espiral</span>
                  <span className="text-slate-100 font-semibold">{telemetry.locationHierarchy.galaxy}</span>
                  <span className="text-cyan-300 block text-[10px] mt-0.5">{telemetry.locationHierarchy.galacticArm}</span>
                </div>
                <div className="bg-[#05091e]/60 p-2.5 rounded-xl border border-indigo-950/60">
                  <span className="text-slate-400 text-[10px] block uppercase tracking-wider">Sistema Solar & Órbita</span>
                  <span className="text-slate-100 font-semibold">{telemetry.locationHierarchy.system}</span>
                  <span className="text-slate-300 block text-[10px] mt-0.5">{telemetry.locationHierarchy.planetaryPosition}</span>
                </div>
                <div className="bg-[#05091e]/60 p-2.5 rounded-xl border border-indigo-950/60">
                  <span className="text-slate-400 text-[10px] block uppercase tracking-wider">Centro de Control Terrestre</span>
                  <span className="text-amber-300 font-semibold">{telemetry.locationHierarchy.station}</span>
                  <span className="text-slate-400 block text-[10px] mt-0.5">{telemetry.locationHierarchy.surfaceCoordinates}</span>
                </div>
              </div>
            </div>

            {/* Section 2: Stardate & Julian Astronomical Date Explanation */}
            <div className="bg-[#030614]/90 rounded-2xl border border-cyan-950/80 p-4">
              <div className="flex items-center justify-between gap-2 text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-2">
                <span className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>2. Fecha Estelar & Tiempo Sidéreo de Greenwich</span>
                </span>
                <span className="text-[10px] text-cyan-400 font-normal">
                  Ref: UTC {telemetry.utcString.slice(17, 25)}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-[11px]">
                <div className="bg-[#05091e]/60 p-2.5 rounded-xl border border-indigo-950/60">
                  <span className="text-slate-400 text-[10px] block uppercase tracking-wider">Día Juliano (JD)</span>
                  <span className="text-lg font-bold text-cyan-300 tabular-nums">{telemetry.julianDateFormatted}</span>
                  <span className="text-slate-400 block text-[10px] mt-1">Días continuos desde 1 Ene 4713 a.C.</span>
                </div>
                <div className="bg-[#05091e]/60 p-2.5 rounded-xl border border-indigo-950/60">
                  <span className="text-slate-400 text-[10px] block uppercase tracking-wider">Tiempo Sidéreo (GMST)</span>
                  <span className="text-lg font-bold text-slate-100 tabular-nums">{telemetry.greenwichSiderealTime}</span>
                  <span className="text-slate-400 block text-[10px] mt-1">Ángulo horario del punto vernal</span>
                </div>
                <div className="bg-[#05091e]/60 p-2.5 rounded-xl border border-indigo-950/60">
                  <span className="text-slate-400 text-[10px] block uppercase tracking-wider">Época Estelar</span>
                  <span className="text-sm font-bold text-amber-300">J2000.0 + {( (telemetry.julianDate - 2451545.0) / 365.25 ).toFixed(2)} años</span>
                  <span className="text-slate-400 block text-[10px] mt-1">Marco inercial celeste ICRS</span>
                </div>
              </div>
            </div>

            {/* Section 3 & 4: Position Vector (3D AU) and Orbital Velocity Vector */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 3. 3D Heliocentric Position Vector */}
              <div className="bg-[#030614]/90 rounded-2xl border border-cyan-950/80 p-4">
                <div className="flex items-center gap-2 text-cyan-300 text-[11px] font-bold uppercase tracking-wider mb-2">
                  <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                  <span>3. Vector de Posición Tridimensional (AU)</span>
                </div>
                <p className="text-[10px] text-slate-400 mb-2.5">
                  Calculado mediante anomalía media ({telemetry.positionVector.meanAnomalyDeg.toFixed(2)}°) y ecuación de centro ({telemetry.positionVector.equationOfCenterDeg.toFixed(4)}°):
                </p>
                <div className="grid grid-cols-3 gap-2 text-center text-[11px] mb-2.5">
                  <div className="bg-[#05091e]/80 p-2 rounded-xl border border-cyan-950">
                    <span className="text-cyan-400 font-bold block text-[10px]">X (AU)</span>
                    <span className="text-slate-100 font-semibold tabular-nums">
                      {telemetry.positionVector.xAU >= 0 ? '+' : ''}{telemetry.positionVector.xAU.toFixed(5)}
                    </span>
                  </div>
                  <div className="bg-[#05091e]/80 p-2 rounded-xl border border-cyan-950">
                    <span className="text-cyan-400 font-bold block text-[10px]">Y (AU)</span>
                    <span className="text-slate-100 font-semibold tabular-nums">
                      {telemetry.positionVector.yAU >= 0 ? '+' : ''}{telemetry.positionVector.yAU.toFixed(5)}
                    </span>
                  </div>
                  <div className="bg-[#05091e]/80 p-2 rounded-xl border border-cyan-950">
                    <span className="text-cyan-400 font-bold block text-[10px]">Z (AU)</span>
                    <span className="text-slate-100 font-semibold tabular-nums">
                      {telemetry.positionVector.zAU >= 0 ? '+' : ''}{telemetry.positionVector.zAU.toFixed(5)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] bg-[#05091e]/80 p-2 rounded-xl border border-indigo-950/60">
                  <span className="text-slate-400 text-[10px]">Distancia Heliocéntrica:</span>
                  <span className="text-cyan-300 font-bold">
                    {telemetry.positionVector.distanceMillionKm.toFixed(3)} millones de km ({telemetry.positionVector.distanceAU.toFixed(5)} AU)
                  </span>
                </div>
              </div>

              {/* 4. Orbital Velocity Vector */}
              <div className="bg-[#030614]/90 rounded-2xl border border-cyan-950/80 p-4">
                <div className="flex items-center gap-2 text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-2">
                  <Gauge className="w-3.5 h-3.5" />
                  <span>4. Vector de Velocidad Orbital</span>
                </div>
                <div className="flex items-center justify-between mb-2.5 bg-[#05091e]/80 p-2 rounded-xl border border-emerald-950/60">
                  <span className="text-slate-400 text-[10px]">Magnitud Orbital:</span>
                  <span className="text-emerald-300 font-bold text-sm">
                    {telemetry.orbitalVelocity.speedKmS.toFixed(3)} km/s (~107,200 km/h)
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[11px] mb-2.5">
                  <div className="bg-[#05091e]/80 p-2 rounded-xl border border-emerald-950/40">
                    <span className="text-emerald-400 font-bold block text-[10px]">Vx (km/s)</span>
                    <span className="text-slate-100 font-semibold tabular-nums">
                      {telemetry.orbitalVelocity.vxKmS >= 0 ? '+' : ''}{telemetry.orbitalVelocity.vxKmS.toFixed(2)}
                    </span>
                  </div>
                  <div className="bg-[#05091e]/80 p-2 rounded-xl border border-emerald-950/40">
                    <span className="text-emerald-400 font-bold block text-[10px]">Vy (km/s)</span>
                    <span className="text-slate-100 font-semibold tabular-nums">
                      {telemetry.orbitalVelocity.vyKmS >= 0 ? '+' : ''}{telemetry.orbitalVelocity.vyKmS.toFixed(2)}
                    </span>
                  </div>
                  <div className="bg-[#05091e]/80 p-2 rounded-xl border border-emerald-950/40">
                    <span className="text-emerald-400 font-bold block text-[10px]">Vz (km/s)</span>
                    <span className="text-slate-100 font-semibold tabular-nums">
                      {telemetry.orbitalVelocity.vzKmS >= 0 ? '+' : ''}{telemetry.orbitalVelocity.vzKmS.toFixed(2)}
                    </span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400">
                  {telemetry.orbitalVelocity.direction}
                </p>
              </div>
            </div>

            {/* Section 5: Real-time Celestial Coordinates (RA & DEC) */}
            <div className="bg-[#030614]/90 rounded-2xl border border-cyan-950/80 p-4">
              <div className="flex items-center justify-between gap-2 text-purple-400 text-[11px] font-bold uppercase tracking-wider mb-2">
                <span className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-purple-400" />
                  <span>5. Coordenadas Celestes Ecuatoriales en Tiempo Real (Aparente)</span>
                </span>
                <span className="text-[10px] text-slate-400 font-normal">
                  Oblicuidad Eclíptica: {telemetry.celestialCoordinates.eclipticObliquity.toFixed(4)}°
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                <div className="bg-[#05091e]/80 p-3 rounded-xl border border-purple-950/60 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-[10px] block uppercase tracking-wider">
                      Ascensión Recta (AR / α)
                    </span>
                    <span className="text-base font-bold text-purple-300 tracking-wider">
                      {telemetry.celestialCoordinates.rightAscension.formatted}
                    </span>
                  </div>
                  <div className="text-right text-[10px] text-slate-400">
                    <span>Horas : Min : Seg</span>
                  </div>
                </div>

                <div className="bg-[#05091e]/80 p-3 rounded-xl border border-purple-950/60 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-[10px] block uppercase tracking-wider">
                      Declinación (DEC / δ)
                    </span>
                    <span className="text-base font-bold text-purple-300 tracking-wider">
                      {telemetry.celestialCoordinates.declination.formatted}
                    </span>
                  </div>
                  <div className="text-right text-[10px] text-slate-400">
                    <span>Grados : Min' : Seg"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

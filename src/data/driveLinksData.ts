/**
 * =========================================================================
 * ENLACES DE GOOGLE DRIVE Y YOUTUBE PARA LAS 11 MATERIAS (CECYT 11)
 * =========================================================================
 * 
 * Aquí se configuran las URLs de las carpetas de Google Drive y las listas
 * de reproducción de YouTube para cada una de las 11 materias de 3er Semestre.
 */

export interface SubjectDriveLinks {
  // Enlace a la carpeta principal de la materia en Google Drive (libros, guías y apuntes)
  mainFolderUrl: string;
  // Enlace a la subcarpeta de libros y guías de estudio en PDF
  booksPdfFolderUrl: string;
  // Enlace a la carpeta de apuntes y ejercicios
  solvedExercisesUrl: string;
}

/**
 * Enlaces oficiales de carpetas de Google Drive proporcionados para cada materia.
 */
export const OFFICIAL_DRIVE_LINKS: Record<string, string> = {
  // 1. Comunicación Científica
  'comunicacion-cientifica': 'https://drive.google.com/drive/folders/1T26cF0RPkH_03kaq0S6syBhks-fnFKba?usp=sharing',
  
  // 2. Entorno Socioeconómico de México
  'entorno-socioeconomico': 'https://drive.google.com/drive/folders/1hyBrzeUBaadjHljnQoGG5Teh33-M3kvz?usp=drive_link',
  
  // 3. Física I
  'fisica-1': 'https://drive.google.com/drive/folders/1bmUZe8Zwkr3-iOXzkTxMRwvmRwvYTn9A?usp=drive_link',
  
  // 4. Geometría Analítica
  'geometria-analitica': 'https://drive.google.com/drive/folders/1L1wMiPAkwFkD-luVK9DZAEPrmqphfKr2?usp=drive_link',
  
  // 5. Inglés III
  'ingles-3': 'https://drive.google.com/drive/folders/1g5TgeQFQ5oLNLDztgGOq3CFzfsbLPm6q?usp=drive_link',
  
  // 6. Legislación en la Construcción (Normas y Tramitaciones)
  'normas-tramitaciones': 'https://drive.google.com/drive/folders/1pf1eWl64VoaE1iDNUmWiCIUQFNt9wbUO?usp=drive_link',
  'legislacion-construccion': 'https://drive.google.com/drive/folders/1pf1eWl64VoaE1iDNUmWiCIUQFNt9wbUO?usp=drive_link',
  
  // 7. Materiales Sustentables
  'materiales-sustentables': 'https://drive.google.com/drive/folders/1VfrQ8p1xSW_NSxN-3OQk3qyRefZINy2A?usp=drive_link',
  
  // 8. Obra Negra
  'obra-negra': 'https://drive.google.com/drive/folders/1J7yLvPd-K_IfIJwlYnqu8LIDppFkjTdE?usp=drive_link',
  
  // 9. Planimetría Aplicada
  'planimetria-aplicada': 'https://drive.google.com/drive/folders/17J46DQjWxRNFutkMWLi9KCY6CINoNfQY?usp=drive_link',
  
  // 10. Química I
  'quimica-1': 'https://drive.google.com/drive/folders/1Zsmz2n-6CYpWETssuH2aduiin9rExfIk?usp=drive_link',

  // 11. Dibujo Técnico I
  'dibujo-tecnico-1': 'https://drive.google.com/drive/folders/1-SOL-DIBUJO-TECNICO1-CECYT11-OFICIAL',
};

/**
 * Mapeo de carpetas de Drive completas por materia
 */
export const GHOST_DRIVE_LINKS: Record<string, SubjectDriveLinks> = {
  'comunicacion-cientifica': {
    mainFolderUrl: OFFICIAL_DRIVE_LINKS['comunicacion-cientifica'],
    booksPdfFolderUrl: OFFICIAL_DRIVE_LINKS['comunicacion-cientifica'],
    solvedExercisesUrl: OFFICIAL_DRIVE_LINKS['comunicacion-cientifica'],
  },
  'entorno-socioeconomico': {
    mainFolderUrl: OFFICIAL_DRIVE_LINKS['entorno-socioeconomico'],
    booksPdfFolderUrl: OFFICIAL_DRIVE_LINKS['entorno-socioeconomico'],
    solvedExercisesUrl: OFFICIAL_DRIVE_LINKS['entorno-socioeconomico'],
  },
  'fisica-1': {
    mainFolderUrl: OFFICIAL_DRIVE_LINKS['fisica-1'],
    booksPdfFolderUrl: OFFICIAL_DRIVE_LINKS['fisica-1'],
    solvedExercisesUrl: OFFICIAL_DRIVE_LINKS['fisica-1'],
  },
  'geometria-analitica': {
    mainFolderUrl: OFFICIAL_DRIVE_LINKS['geometria-analitica'],
    booksPdfFolderUrl: OFFICIAL_DRIVE_LINKS['geometria-analitica'],
    solvedExercisesUrl: OFFICIAL_DRIVE_LINKS['geometria-analitica'],
  },
  'ingles-3': {
    mainFolderUrl: OFFICIAL_DRIVE_LINKS['ingles-3'],
    booksPdfFolderUrl: OFFICIAL_DRIVE_LINKS['ingles-3'],
    solvedExercisesUrl: OFFICIAL_DRIVE_LINKS['ingles-3'],
  },
  'normas-tramitaciones': {
    mainFolderUrl: OFFICIAL_DRIVE_LINKS['normas-tramitaciones'],
    booksPdfFolderUrl: OFFICIAL_DRIVE_LINKS['normas-tramitaciones'],
    solvedExercisesUrl: OFFICIAL_DRIVE_LINKS['normas-tramitaciones'],
  },
  'materiales-sustentables': {
    mainFolderUrl: OFFICIAL_DRIVE_LINKS['materiales-sustentables'],
    booksPdfFolderUrl: OFFICIAL_DRIVE_LINKS['materiales-sustentables'],
    solvedExercisesUrl: OFFICIAL_DRIVE_LINKS['materiales-sustentables'],
  },
  'obra-negra': {
    mainFolderUrl: OFFICIAL_DRIVE_LINKS['obra-negra'],
    booksPdfFolderUrl: OFFICIAL_DRIVE_LINKS['obra-negra'],
    solvedExercisesUrl: OFFICIAL_DRIVE_LINKS['obra-negra'],
  },
  'planimetria-aplicada': {
    mainFolderUrl: OFFICIAL_DRIVE_LINKS['planimetria-aplicada'],
    booksPdfFolderUrl: OFFICIAL_DRIVE_LINKS['planimetria-aplicada'],
    solvedExercisesUrl: OFFICIAL_DRIVE_LINKS['planimetria-aplicada'],
  },
  'quimica-1': {
    mainFolderUrl: OFFICIAL_DRIVE_LINKS['quimica-1'],
    booksPdfFolderUrl: OFFICIAL_DRIVE_LINKS['quimica-1'],
    solvedExercisesUrl: OFFICIAL_DRIVE_LINKS['quimica-1'],
  },
  'dibujo-tecnico-1': {
    mainFolderUrl: OFFICIAL_DRIVE_LINKS['dibujo-tecnico-1'],
    booksPdfFolderUrl: OFFICIAL_DRIVE_LINKS['dibujo-tecnico-1'],
    solvedExercisesUrl: OFFICIAL_DRIVE_LINKS['dibujo-tecnico-1'],
  },
};

/**
 * Obtiene los enlaces de Drive para una materia específica.
 */
export function getSubjectDriveLinks(subjectId: string): SubjectDriveLinks {
  const normalized = subjectId.replace(/_/g, '-');
  const directLink = OFFICIAL_DRIVE_LINKS[subjectId] || OFFICIAL_DRIVE_LINKS[normalized];
  
  if (directLink) {
    return {
      mainFolderUrl: directLink,
      booksPdfFolderUrl: directLink,
      solvedExercisesUrl: directLink,
    };
  }

  if (GHOST_DRIVE_LINKS[subjectId]) return GHOST_DRIVE_LINKS[subjectId];
  if (GHOST_DRIVE_LINKS[normalized]) return GHOST_DRIVE_LINKS[normalized];

  const defaultUrl = `https://drive.google.com/drive/folders/1-SOL-${subjectId.toUpperCase()}-CECYT11-OFICIAL`;
  return {
    mainFolderUrl: defaultUrl,
    booksPdfFolderUrl: defaultUrl,
    solvedExercisesUrl: defaultUrl,
  };
}

/**
 * Mapa plano de enlaces principales por materia para compatibilidad con el almacenamiento y panel.
 */
export function getDefaultDriveLinksMap(): Record<string, string> {
  const map: Record<string, string> = {};
  Object.keys(OFFICIAL_DRIVE_LINKS).forEach(key => {
    map[key] = OFFICIAL_DRIVE_LINKS[key];
  });
  return map;
}

/**
 * =========================================================================
 * LISTAS DE REPRODUCCIÓN DE YOUTUBE POR MATERIA (REF EDITABLE)
 * =========================================================================
 * 
 * Puedes colocar o actualizar directamente aquí los links de tus listas
 * de reproducción de YouTube para cada materia.
 */
export const GHOST_YOUTUBE_PLAYLISTS: Record<string, string> = {
  // Comunicación Científica
  'comunicacion-cientifica': 'https://www.youtube.com/playlist?list=PLComunicacionCientificaIPN',
  comunicacion_cientifica: 'https://www.youtube.com/playlist?list=PLComunicacionCientificaIPN',

  // Entorno Socioeconómico de México
  'entorno-socioeconomico': 'https://www.youtube.com/playlist?list=PLEntornoSocioeconomicoMexico',
  entorno_socioeconomico: 'https://www.youtube.com/playlist?list=PLEntornoSocioeconomicoMexico',

  // Física I
  'fisica-1': 'https://www.youtube.com/playlist?list=PLFisica1MassieuIPN',
  fisica_1: 'https://www.youtube.com/playlist?list=PLFisica1MassieuIPN',

  // Geometría Analítica
  'geometria-analitica': 'https://www.youtube.com/playlist?list=PLGeometriaAnaliticaIPN',
  geometria_analitica: 'https://www.youtube.com/playlist?list=PLGeometriaAnaliticaIPN',

  // Inglés III
  'ingles-3': 'https://www.youtube.com/playlist?list=PLIngles3TecnicoIPN',
  ingles_3: 'https://www.youtube.com/playlist?list=PLIngles3TecnicoIPN',

  // Legislación en la Construcción
  'normas-tramitaciones': 'https://www.youtube.com/playlist?list=PLNormasTramitacionesCDMX',
  'legislacion-construccion': 'https://www.youtube.com/playlist?list=PLNormasTramitacionesCDMX',
  normas_tramitaciones: 'https://www.youtube.com/playlist?list=PLNormasTramitacionesCDMX',

  // Materiales Sustentables
  'materiales-sustentables': 'https://www.youtube.com/playlist?list=PLSustentabilidadConstruccion',
  materiales_sustentables: 'https://www.youtube.com/playlist?list=PLSustentabilidadConstruccion',

  // Obra Negra
  'obra-negra': 'https://www.youtube.com/playlist?list=PLObraNegraConstruccion',
  obra_negra: 'https://www.youtube.com/playlist?list=PLObraNegraConstruccion',

  // Planimetría Aplicada
  'planimetria-aplicada': 'https://www.youtube.com/playlist?list=PLPlanimetriaTopografia',
  planimetria_aplicada: 'https://www.youtube.com/playlist?list=PLPlanimetriaTopografia',

  // Química I
  'quimica-1': 'https://www.youtube.com/playlist?list=PLQuimicaInorganicaIPN',
  quimica_1: 'https://www.youtube.com/playlist?list=PLQuimicaInorganicaIPN',

  // Dibujo Técnico I
  'dibujo-tecnico-1': 'https://www.youtube.com/playlist?list=PLDibujoTecnicoMassieu',
  dibujo_tecnico_1: 'https://www.youtube.com/playlist?list=PLDibujoTecnicoMassieu',
};

export function getSubjectYoutubePlaylist(subjectId: string): string {
  const normalized = subjectId.replace(/_/g, '-');
  return GHOST_YOUTUBE_PLAYLISTS[subjectId] || 
         GHOST_YOUTUBE_PLAYLISTS[normalized] || 
         `https://www.youtube.com/results?search_query=cecyt+11+${encodeURIComponent(subjectId)}`;
}

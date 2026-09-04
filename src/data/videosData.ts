import { VideoLesson } from '../types';

export const DEFAULT_VIDEOS_DATA: VideoLesson[] = [
  // --- GEOMETRÍA ANALÍTICA ---
  {
    id: 'vid-geo-1',
    subjectId: 'geometria-analitica',
    title: 'Distancia entre dos puntos y división de segmentos en una razón dada',
    parcialNumber: 1,
    duration: '18:45',
    youtubeId: 'kDzTto2P0Zw',
    youtubeUrl: 'https://www.youtube.com/watch?v=kDzTto2P0Zw',
    channel: 'Matemáticas Profe Alex',
    description: 'Explicación gráfica y ejercicios paso a paso de distancia cartesiana y coordenadas de puntos medios y puntos que dividen en razón r.'
  },
  {
    id: 'vid-geo-2',
    subjectId: 'geometria-analitica',
    title: 'Ecuación de la recta: punto-pendiente, general y simétrica',
    parcialNumber: 1,
    duration: '22:10',
    youtubeId: 'bOCqVz27g70',
    youtubeUrl: 'https://www.youtube.com/watch?v=bOCqVz27g70',
    channel: 'Julioprofe',
    description: 'Deducción de la pendiente, ángulos de inclinación, condiciones de paralelismo y perpendicularidad, y cálculo de distancia punto a recta.'
  },
  {
    id: 'vid-geo-3',
    subjectId: 'geometria-analitica',
    title: 'La Circunferencia: Ecuación ordinaria con centro (h, k) y general',
    parcialNumber: 2,
    duration: '19:30',
    youtubeId: 'v8-Pjhq9q1U',
    youtubeUrl: 'https://www.youtube.com/watch?v=v8-Pjhq9q1U',
    channel: 'Matemáticas Profe Alex',
    description: 'Cómo completar trinomios cuadrados perfectos para pasar de la ecuación general a la ordinaria y hallar centro y radio.'
  },
  {
    id: 'vid-geo-4',
    subjectId: 'geometria-analitica',
    title: 'La Parábola con vértice fuera del origen V(h, k)',
    parcialNumber: 2,
    duration: '25:15',
    youtubeId: 'F5W5W9W8j1k',
    youtubeUrl: 'https://www.youtube.com/watch?v=F5W5W9W8j1k',
    channel: 'Julioprofe',
    description: 'Cálculo de foco, directriz, parámetro p y longitud del lado recto |4p| con ejemplos de aplicación a arcos.'
  },
  {
    id: 'vid-geo-5',
    subjectId: 'geometria-analitica',
    title: 'La Elipse y la Hipérbola: Elementos, excentricidad y gráficas',
    parcialNumber: 3,
    duration: '26:40',
    youtubeId: '4iZJ-v1rQ2Y',
    youtubeUrl: 'https://www.youtube.com/watch?v=4iZJ-v1rQ2Y',
    channel: 'Academia Internet',
    description: 'Comparativa gráfica y analítica entre elipse e hipérbola, relaciones a, b, c y ecuaciones de las asíntotas.'
  },
  {
    id: 'vid-geo-6',
    subjectId: 'geometria-analitica',
    title: 'Coordenadas Polares y Transformación a Rectangulares',
    parcialNumber: 3,
    duration: '16:50',
    youtubeId: 'Y9jG5X_dF4A',
    youtubeUrl: 'https://www.youtube.com/watch?v=Y9jG5X_dF4A',
    channel: 'Ingeniería y Matemáticas',
    description: 'Paso de coordenadas cartesianas a polares r y θ y transformación de ecuaciones de curvas.'
  },

  // --- FÍSICA I ---
  {
    id: 'vid-fis-1',
    subjectId: 'fisica-1',
    title: 'Conversión de Unidades y Factores de Conversión (SI e Inglés)',
    parcialNumber: 1,
    duration: '14:20',
    youtubeId: 'qjX4wHgJtAE',
    youtubeUrl: 'https://www.youtube.com/watch?v=qjX4wHgJtAE',
    channel: 'Cursos de Física CECyT',
    description: 'Método de cancelación por factor unitario aplicado a longitudes, áreas, volúmenes y velocidades.'
  },
  {
    id: 'vid-fis-2',
    subjectId: 'fisica-1',
    title: 'Suma de Vectores por el Método de Componentes Rectangulares',
    parcialNumber: 2,
    duration: '24:10',
    youtubeId: 'C7I3e74rF6M',
    youtubeUrl: 'https://www.youtube.com/watch?v=C7I3e74rF6M',
    channel: 'Julioprofe',
    description: 'Procedimiento paso a paso para descomponer fuerzas en Fx y Fy, calcular resultante y equilibrante con ángulo de dirección.'
  },
  {
    id: 'vid-fis-3',
    subjectId: 'fisica-1',
    title: 'Primera y Segunda Condición de Equilibrio: Vigas y Momentos de Torsión',
    parcialNumber: 2,
    duration: '28:50',
    youtubeId: 'xP8l3Y7R9vU',
    youtubeUrl: 'https://www.youtube.com/watch?v=xP8l3Y7R9vU',
    channel: 'Física con Juan',
    description: 'Cálculo de reacciones en apoyos de vigas con cargas puntuales, Teorema de Varignon y diagramas de cuerpo libre.'
  },
  {
    id: 'vid-fis-4',
    subjectId: 'fisica-1',
    title: 'Tiro Parabólico y Cinemática de Proyectiles',
    parcialNumber: 3,
    duration: '21:15',
    youtubeId: 'M9Vv7o4qT2c',
    youtubeUrl: 'https://www.youtube.com/watch?v=M9Vv7o4qT2c',
    channel: 'Física en Segundos',
    description: 'Descomposición en movimiento horizontal a velocidad constante y vertical acelerado por la gravedad.'
  },

  // --- OBRA NEGRA ---
  {
    id: 'vid-on-1',
    subjectId: 'obra-negra',
    title: 'Trazo y Nivelación de Casa Habitación: Escuadra 3-4-5 y Manguera',
    parcialNumber: 1,
    duration: '17:35',
    youtubeId: 'T8gH9wN2x4E',
    youtubeUrl: 'https://www.youtube.com/watch?v=T8gH9wN2x4E',
    channel: 'Arquitectura & Obra',
    description: 'Cómo colocar caballetes de madera, estacas, hilos reventones y comprobar 90 grados con el método 3-4-5 en campo.'
  },
  {
    id: 'vid-on-2',
    subjectId: 'obra-negra',
    title: 'Proceso Constructivo de Zapatas Corridas y Aisladas de Concreto',
    parcialNumber: 2,
    duration: '23:40',
    youtubeId: 'Z9pB4mX1y8Q',
    youtubeUrl: 'https://www.youtube.com/watch?v=Z9pB4mX1y8Q',
    channel: 'Técnicas de Construcción',
    description: 'Excavación, plantilla de concreto pobre, armado de varilla, calzas de recubrimiento y colado de cimientos.'
  },
  {
    id: 'vid-on-3',
    subjectId: 'obra-negra',
    title: 'Pegado de Muros: Aparejos al Hilo, Tizón y Castillos de Confinamiento',
    parcialNumber: 2,
    duration: '20:10',
    youtubeId: 'P7nL2kR5v3T',
    youtubeUrl: 'https://www.youtube.com/watch?v=P7nL2kR5v3T',
    channel: 'Construir Bien',
    description: 'Alineación de hiladas con plomada, espesor de junta de mortero y anclaje de castillos de amarre.'
  },
  {
    id: 'vid-on-4',
    subjectId: 'obra-negra',
    title: 'Armado, Cimbrado y Colado de Losa Maciza vs Vigueta y Bovedilla',
    parcialNumber: 3,
    duration: '27:15',
    youtubeId: 'L5vR8mP2k9W',
    youtubeUrl: 'https://www.youtube.com/watch?v=L5vR8mP2k9W',
    channel: 'Ingeniería Civil Práctica',
    description: 'Diferencias constructivas, apuntalamiento, tendido de instalaciones eléctricas/hidráulicas y vibrado del concreto.'
  },

  // --- NORMAS Y TRAMITACIONES ---
  {
    id: 'vid-nt-1',
    subjectId: 'normas-tramitaciones',
    title: 'Reglamento de Construcciones CDMX: Trámite de Manifestación Tipo A y B',
    parcialNumber: 1,
    duration: '16:20',
    youtubeId: 'N6vT9kP2m4A',
    youtubeUrl: 'https://www.youtube.com/watch?v=N6vT9kP2m4A',
    channel: 'Gestoría Urbana CDMX',
    description: 'Formatos oficiales, requisitos para casa habitación menor a 200 m², uso de suelo y plano de alineamiento y número oficial.'
  },
  {
    id: 'vid-nt-2',
    subjectId: 'normas-tramitaciones',
    title: 'El papel del D.R.O. y los Corresponsables en obra según RCDF',
    parcialNumber: 2,
    duration: '18:40',
    youtubeId: 'D8kR2mP7v5T',
    youtubeUrl: 'https://www.youtube.com/watch?v=D8kR2mP7v5T',
    channel: 'Colegio de Ingenieros y Arquitectos',
    description: 'Responsabilidades legales, llenado de la bitácora de obra y responsiva de seguridad estructural.'
  },

  // --- MATERIALES Y TECNOLOGÍAS SUSTENTABLES ---
  {
    id: 'vid-sus-1',
    subjectId: 'materiales-sustentables',
    title: 'Estrategias de Arquitectura Bioclimática y Diseño Pasivo en México',
    parcialNumber: 1,
    duration: '24:30',
    youtubeId: 'S7vM9pT2k4R',
    youtubeUrl: 'https://www.youtube.com/watch?v=S7vM9pT2k4R',
    channel: 'Arquitectura Sostenible MX',
    description: 'Asoleamiento, orientación sur, cálculo de aleros y ventilación cruzada natural para vivienda residencial.'
  },
  {
    id: 'vid-sus-2',
    subjectId: 'materiales-sustentables',
    title: 'Sistemas de Captación de Agua de Lluvia (SCAPT) y Filtros Tláloc',
    parcialNumber: 2,
    duration: '19:15',
    youtubeId: 'W6mT8vP3k5Y',
    youtubeUrl: 'https://www.youtube.com/watch?v=W6mT8vP3k5Y',
    channel: 'Isla Urbana',
    description: 'Instalación paso a paso de separador de primeras lluvias, cisterna pluvial y bombeo para vivienda urbana.'
  },
  {
    id: 'vid-sus-3',
    subjectId: 'materiales-sustentables',
    title: 'Construcción con Bloques de Tierra Comprimida (BTC) y Bambú Estructural',
    parcialNumber: 3,
    duration: '22:45',
    youtubeId: 'B8kP4mX2y6T',
    youtubeUrl: 'https://www.youtube.com/watch?v=B8kP4mX2y6T',
    channel: 'EcoTecnologías México',
    description: 'Fabricación con prensa Cinva-Ram, estabilización con cal y uniones estructurales con bambú Guadua.'
  },

  // --- PLANIMETRÍA APLICADA ---
  {
    id: 'vid-pla-1',
    subjectId: 'planimetria-aplicada',
    title: 'Manejo de Tránsito y Estación Total: Montaje, Nivelación y Centrado',
    parcialNumber: 1,
    duration: '21:00',
    youtubeId: 'P9kT4vM2x8R',
    youtubeUrl: 'https://www.youtube.com/watch?v=P9kT4vM2x8R',
    channel: 'Topografía Paso a Paso',
    description: 'Puesta en estación sobre el punto de control, nivelación tubular y esférica, y enfoque del retículo.'
  },
  {
    id: 'vid-pla-2',
    subjectId: 'planimetria-aplicada',
    title: 'Cálculo de Poligonal Cerrada: Cierre Angular, Rumbos y Coordenadas',
    parcialNumber: 3,
    duration: '31:20',
    youtubeId: 'T7mX2vP9k4W',
    youtubeUrl: 'https://www.youtube.com/watch?v=T7mX2vP9k4W',
    channel: 'Ingeniería y Topografía',
    description: 'Llenado de planilla de cálculo, compensación de errores angulares y cálculo de superficie por coordenadas de Gauss.'
  }
];

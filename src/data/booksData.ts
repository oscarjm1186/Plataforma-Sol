import { BookReference } from '../types';

export const BOOKS_DATA: { [subjectId: string]: BookReference[] } = {
  'geometria-analitica': [
    {
      id: 'geo-1',
      title: 'Geometría Analítica',
      authors: 'Charles H. Lehmann',
      editorial: 'Limusa (15ª Edición)',
      year: '1990',
      type: 'Básico',
      units: 'Unidades 1, 2 y 3',
      description: 'El clásico indiscutible del IPN para el estudio riguroso de la línea recta, lugares geométricos, cónicas con y sin rotación de ejes, y coordenadas polares.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-geometria-sol',
      previewNote: 'Capítulos clave: Distancia entre puntos, división de segmentos, formas de la recta, circunferencia, parábola, elipse e hipérbola.'
    },
    {
      id: 'geo-2',
      title: 'Geometría Analítica',
      authors: 'Juan Antonio Cuéllar Carvajal',
      editorial: 'McGraw-Hill (2ª Edición)',
      year: '2008',
      type: 'Consulta',
      units: 'Unidades 1 y 2',
      description: 'Excelente para ejercicios prácticos aplicados a bachillerato tecnológico con explicaciones paso a paso y gráficas claras.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-geometria-sol',
      previewNote: 'Incluye problemas resueltos de modelado de arcos parabólicos y semielípticos aplicados a la construcción.'
    },
    {
      id: 'geo-3',
      title: 'Geometría Analítica',
      authors: 'Gordon Fuller & Dalton Tarwater',
      editorial: 'Pearson Educación (7ª Edición)',
      year: '2005',
      type: 'Consulta',
      units: 'Unidad 3',
      description: 'Capítulos dedicados a coordenadas polares, transformación de ecuaciones cartesianas a polares y ecuaciones paramétricas.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-geometria-sol'
    },
    {
      id: 'geo-4',
      title: 'Apuntes de Geometría Analítica CECyT 11',
      authors: 'Ing. J. Ventura Ángel Felícitos',
      editorial: 'Academia de Matemáticas CECyT 11 "Wilfrido Massieu"',
      year: '2016',
      type: 'Apuntes',
      units: 'Unidades 1, 2 y 3',
      description: 'Guía oficial de problemas y exámenes departamentales del turno matutino del CECyT 11, base directa de las evaluaciones.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-geometria-sol',
      previewNote: 'Contiene los 150 ejercicios tipo examen de la academia.'
    }
  ],

  'fisica-1': [
    {
      id: 'fis-1',
      title: 'Física: Conceptos y Aplicaciones',
      authors: 'Paul E. Tippens',
      editorial: 'McGraw-Hill (7ª Edición)',
      year: '2001',
      type: 'Básico',
      units: 'Unidades I, II, III y IV',
      description: 'Texto fundamental para vectores, equilibrio de partículas, momento de torsión, vigas en equilibrio y cinemática en 1 y 2 dimensiones.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-fisica-sol'
    },
    {
      id: 'fis-2',
      title: 'Física General',
      authors: 'Carlos Gutiérrez Aranzeta',
      editorial: 'McGraw-Hill / IPN',
      year: '2009',
      type: 'Básico',
      units: 'Unidades I a IV',
      description: 'Libro insignia de los CECyTs del IPN escrito por profesores politécnicos, alineado con las unidades del programa oficial.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-fisica-sol'
    },
    {
      id: 'fis-3',
      title: 'Fundamentos de Física',
      authors: 'Frank J. Blatt',
      editorial: 'Prentice Hall Hispanoamericana',
      year: '1990',
      type: 'Consulta',
      units: 'Unidades II y III',
      description: 'Tratamiento conceptual muy visual sobre estática, sistemas de fuerzas concurrentes y movimiento circular.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-fisica-sol'
    },
    {
      id: 'fis-4',
      title: 'Crucigramas y Problemas de Física',
      authors: 'Carlos Gutiérrez Aranzeta',
      editorial: 'Instituto Politécnico Nacional',
      year: '2001',
      type: 'Apuntes',
      units: 'Todas las unidades',
      description: 'Colección de actividades lúdicas, crucigramas y reactivos de práctica de la Academia de Física del CECyT 11.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-fisica-sol'
    }
  ],

  'quimica-1': [
    {
      id: 'qui-1',
      title: 'Fundamentos de Química',
      authors: 'Morris Hein & Susan Arena',
      editorial: 'Thomson Editores / Cengage',
      year: '2008',
      type: 'Básico',
      units: 'Unidades 1, 2, 3 y 4',
      description: 'Estructura de la materia, modelos atómicos de Bohr y cuántico, periodicidad química y enlaces iónicos y covalentes.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-quimica-sol'
    },
    {
      id: 'qui-2',
      title: 'Nomenclatura Química Inorgánica',
      authors: 'Xavier Rodríguez',
      editorial: 'Trillas',
      year: '2005',
      type: 'Básico',
      units: 'Unidad 5',
      description: 'Manual indispensable para dominar el lenguaje químico: óxidos, hidróxidos, hidrácidos, oxiácidos, sales haloideas y oxisales.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-quimica-sol'
    },
    {
      id: 'qui-3',
      title: 'Fundamentos de Química 1',
      authors: 'R. Ralph Burns',
      editorial: 'Prentice Hall',
      year: '2003',
      type: 'Consulta',
      units: 'Unidades 1 a 4',
      description: 'Explicaciones claras y didácticas sobre números cuánticos, configuración electrónica y regla de las diagonales.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-quimica-sol'
    },
    {
      id: 'qui-4',
      title: 'Principios de Química 1',
      authors: 'José Mariano Bravo Trejo',
      editorial: 'Éxodo / IPN',
      year: '2008',
      type: 'Apuntes',
      units: 'Unidades 1 a 5',
      description: 'Enfoque de competencias del Nivel Medio Superior del IPN con ejercicios y tablas periódicas esquematizadas.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-quimica-sol'
    }
  ],

  'dibujo-tecnico-1': [
    {
      id: 'dib-1',
      title: 'Normas Mexicanas de Dibujo Técnico (DGN y NMX)',
      authors: 'Dirección General de Normas (SECOFI / Secretaría de Economía)',
      editorial: 'Diario Oficial de la Federación',
      year: '1970 - 1998',
      type: 'Normatividad',
      units: 'Unidades 1 y 2',
      description: 'Normas oficiales vigentes: NMX-Z-065 (Formatos de papel), DGN 21-022 (Líneas), 21-023 (Escalas), 21-024 (Acotaciones), 21-025 (Cortes y secciones).',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-dibujo-sol'
    },
    {
      id: 'dib-2',
      title: 'Apuntes de Dibujo Técnico I y II',
      authors: 'Academia de Dibujo Técnico CECyT 11 "Wilfrido Massieu"',
      editorial: 'Instituto Politécnico Nacional, SEP',
      year: '2011',
      type: 'Apuntes',
      units: 'Competencias I, II y III',
      description: 'Láminas tipo de rotulación, uso del escalímetro, enlaces geométricos, tangencias y vistas axonométricas.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-dibujo-sol'
    },
    {
      id: 'dib-3',
      title: 'Dibujo Técnico Básico',
      authors: 'Lázaro Moisés Mercado Ramírez',
      editorial: 'Trillas',
      year: '1998',
      type: 'Consulta',
      units: 'Unidad 3',
      description: 'Construcción de isométricos, caballera y militar a partir de las proyecciones ortogonales.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-dibujo-sol'
    }
  ],

  'obra-negra': [
    {
      id: 'on-1',
      title: 'Manos a la Obra: Manual de Autoconstrucción',
      authors: 'Arq. Vicente Pérez Alamá',
      editorial: 'Trillas (Edición mexicana)',
      year: '2008',
      type: 'Básico',
      units: 'Unidades 1, 2 y 3',
      description: 'Guía práctica fundamental para trazo, nivelación 3-4-5, zapatas, colocación de tabique rojo al hilo y tizón, castillos y losas.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-obranegra-sol'
    },
    {
      id: 'on-2',
      title: 'Manual de Albañilería y Autoconstrucción (Tomos I, II y III)',
      authors: 'Fernando Barbará Zetina & Arq. Descalzo',
      editorial: 'Herrero / Alfa-Omega',
      year: '2008',
      type: 'Básico',
      units: 'Unidad 2 y 3',
      description: 'Enciclopedia clásica con despieces constructivos, cimbrados, armados de acero y dosificaciones de concreto por m3.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-obranegra-sol'
    },
    {
      id: 'on-3',
      title: 'Normas Técnicas Complementarias para Diseño de Cimentaciones y Estructuras de Concreto',
      authors: 'Dr. Roberto Meli Piralla & José Creixel',
      editorial: 'Limusa / CECSA',
      year: '2008',
      type: 'Normatividad',
      units: 'Unidades 1 y 2',
      description: 'Cálculo de resistencias, recubrimientos de acero, bastones de continuidad y apoyos en vigas y trabes.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-obranegra-sol'
    },
    {
      id: 'on-4',
      title: 'El Arte de Proyectar en Arquitectura',
      authors: 'Ernst Neufert',
      editorial: 'Gustavo Gili (16ª Edición)',
      year: '2008',
      type: 'Consulta',
      units: 'Unidades 1 y 2',
      description: 'Medidas antropométricas universales, funcionamiento espacial y dimensionamiento de locales habitacionales.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-obranegra-sol'
    }
  ],

  'normas-tramitaciones': [
    {
      id: 'nt-1',
      title: 'Reglamento de Construcciones para el Distrito Federal (Comentado e Ilustrado)',
      authors: 'Arq. Luis Arnal Simón & Arq. Max Betancourt Suárez',
      editorial: 'Trillas (Edición actualizada)',
      year: '2009',
      type: 'Básico',
      units: 'Unidades 1 y 2',
      description: 'El libro de cabecera en el CECyT 11 para comprender los artículos del RCDF comentados con planos y diagramas explicativos.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-normas-sol'
    },
    {
      id: 'nt-2',
      title: 'Reglamento de Construcciones del D.F. y sus Normas Técnicas Complementarias',
      authors: 'Gobierno del Distrito Federal',
      editorial: 'Gaceta Oficial del D.F. / Diario Oficial',
      year: '2004 - Vigente',
      type: 'Normatividad',
      units: 'Unidad 1 y 2',
      description: 'Texto legal completo con las especificaciones de D.R.O., Corresponsables, tapiales, vía pública y licencias.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-normas-sol'
    },
    {
      id: 'nt-3',
      title: 'Ley de Desarrollo Urbano del D.F. y Reglamento de Zonificación',
      authors: 'Secretaría de Desarrollo Urbano y Vivienda (SEDUVI)',
      editorial: 'Gaceta Oficial del D.F.',
      year: '1996 - 2009',
      type: 'Consulta',
      units: 'Unidad 2',
      description: 'Requisitos para Licencia de Uso de Suelo, Certificado Único de Zonificación y Programas Delegacionales.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-normas-sol'
    }
  ],

  'planimetria-aplicada': [
    {
      id: 'pla-1',
      title: 'Métodos Topográficos',
      authors: 'Cesáreo Bas Vivanco & José Cordero García',
      editorial: 'Bas Editores',
      year: '2008',
      type: 'Básico',
      units: 'Unidades 1, 2, 3 y 4',
      description: 'Levantamientos con cinta y tránsito, cálculo analítico de ángulos interiores, corrección angular y coordenadas.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-planimetria-sol'
    },
    {
      id: 'pla-2',
      title: 'Manual de Topografía',
      authors: 'Rosario Contreras Alonso & Amparo Verdu Vázquez',
      editorial: 'Bellisco',
      year: '2006',
      type: 'Consulta',
      units: 'Unidades 2 y 3',
      description: 'Cálculo de errores accidentales y sistemáticos, lados de liga y levantamiento con cinta y brújula.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-planimetria-sol'
    },
    {
      id: 'pla-3',
      title: 'Curso Básico de Topografía',
      authors: 'Fernando García Márquez',
      editorial: 'Pax México',
      year: '2007',
      type: 'Básico',
      units: 'Unidades 3 y 4',
      description: 'Llenado de la libreta de tránsito (lado izquierdo y derecho) y elaboración de planillas de cálculo de poligonales cerradas.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-planimetria-sol'
    }
  ],

  'materiales-sustentables': [
    {
      id: 'sus-1',
      title: 'Arquitectura Bioclimática y Sustentabilidad',
      authors: 'Manuel Rodríguez Viqueira & Víctor Fuentes Freixanet',
      editorial: 'UAM Azcapotzalco / Trillas',
      year: '2015',
      type: 'Básico',
      units: 'Módulos 1 y 2',
      description: 'Diseño pasivo adaptado al clima mexicano: asoleamiento, ventilación natural, materiales de inercia térmica y confort.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-sustentables-sol',
      previewNote: 'Materia especializada desarrollada para Sol Mariana.'
    },
    {
      id: 'sus-2',
      title: 'Norma Mexicana de Edificación Sustentable NMX-AA-164-SCFI-2013',
      authors: 'SEMARNAT / Secretaría de Economía',
      editorial: 'Diario Oficial de la Federación',
      year: '2013',
      type: 'Normatividad',
      units: 'Módulos 3 y 4',
      description: 'Criterios oficiales mexicanos sobre uso eficiente de agua, energía, materiales y manejo de residuos en construcciones.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-sustentables-sol'
    },
    {
      id: 'sus-3',
      title: 'Construcción con Bambú y Materiales Naturales',
      authors: 'Jules Janssen & Oscar Hidalgo López',
      editorial: 'Eindhoven University / CIBAM',
      year: '2012',
      type: 'Consulta',
      units: 'Módulo 2',
      description: 'Propiedades físico-mecánicas del bambú Guadua aculeata en México, adobes estabilizados y blocks de tierra comprimida (BTC).',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-sustentables-sol'
    },
    {
      id: 'sus-4',
      title: 'Manual de Ecotécnias e Instalaciones Hidrosanitarias Sustentables',
      authors: 'Instituto Mexicano de Tecnología del Agua (IMTA)',
      editorial: 'IMTA / CONAGUA',
      year: '2018',
      type: 'Consulta',
      units: 'Módulo 3',
      description: 'Sistemas de captación de agua de lluvia (SCAPT), biofiltros para aguas grises, biodigestores autolimpiables y calentadores solares.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-sustentables-sol'
    }
  ],

  'entorno-socioeconomico': [
    {
      id: 'soc-1',
      title: 'Entorno Socioeconómico de México',
      authors: 'Alejandro Monroy Palma & Francisco Berdeja Hernández',
      editorial: 'Éxodo / IPN',
      year: '2008',
      type: 'Básico',
      units: 'Unidades 1, 2 y 3',
      description: 'Modos de producción, Milagro Mexicano, Desarrollo Compartido, Neoliberalismo y estructura del Estado Mexicano.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-socioeconomico-sol'
    },
    {
      id: 'soc-2',
      title: 'La Guerra Fría',
      authors: 'Manuel Pareja Ortiz',
      editorial: 'Ariel Historia',
      year: '2006',
      type: 'Consulta',
      units: 'Unidad 1',
      description: 'División de bloques capitalista y socialista, Plan Marshall, Doctrina Truman y acuerdos de Bretton Woods.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-socioeconomico-sol'
    },
    {
      id: 'soc-3',
      title: 'Constitución Política de los Estados Unidos Mexicanos',
      authors: 'H. Congreso de la Unión',
      editorial: 'Cámara de Diputados / Diario Oficial',
      year: 'Actualizada',
      type: 'Normatividad',
      units: 'Unidad 3',
      description: 'Parte dogmática (Artículos 1° al 29°: Derechos Humanos y Garantías) y parte orgánica (Artículos 30° al 136°: Estructura del Estado).',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-socioeconomico-sol'
    }
  ],

  'comunicacion-cientifica': [
    {
      id: 'hum-1',
      title: 'Metodología de la Investigación (Bibliográfica, Archivística y Documental)',
      authors: 'Ernesto de la Torre Villar & Ramiro Navarro',
      editorial: 'McGraw-Hill México',
      year: '1990',
      type: 'Básico',
      units: 'Unidades 1, 2 y 3',
      description: 'Técnicas de registro en tarjetas de 7.5x12.5cm, fichas de trabajo (resumen, transcripción, evaluación) y aparato crítico.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-comunicacion-sol'
    },
    {
      id: 'hum-2',
      title: 'Cómo Hacer una Tesis',
      authors: 'Huascar Taborga',
      editorial: 'Grijalbo',
      year: '1982',
      type: 'Consulta',
      units: 'Unidad 2 y 3',
      description: 'Estructuración del marco teórico, planteamiento del problema, hipótesis y esquema temático o índice provisional.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-comunicacion-sol'
    },
    {
      id: 'hum-3',
      title: 'Guía para Realizar Investigaciones Sociales',
      authors: 'Raúl Rojas Soriano',
      editorial: 'UNAM (Facultad de Ciencias Políticas)',
      year: '1981',
      type: 'Consulta',
      units: 'Unidad 2',
      description: 'Técnicas de recopilación empírica y documental, validez y confiabilidad de las fuentes bibliográficas.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-comunicacion-sol'
    }
  ],

  'ingles-3': [
    {
      id: 'ing-1',
      title: 'University Grammar of English',
      authors: 'Randolph Quirk & Sidney Greenbaum',
      editorial: 'Longman Group (Essex, England)',
      year: '1993',
      type: 'Básico',
      units: 'Units 1 to 4',
      description: 'Grammar reference cited in CECyT 11 guide for coordinating conjunctions, past continuous interruption clauses and adjectives comparison.',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-ingles-sol'
    },
    {
      id: 'ing-2',
      title: 'English Grammar in Use (with Answers)',
      authors: 'Raymond Murphy',
      editorial: 'Cambridge University Press',
      year: '2019',
      type: 'Consulta',
      units: 'Units 1 to 4',
      description: 'Essential self-study and practice book for intermediate learners of English (Units: Used to, Past Continuous, Comparatives, Future forms).',
      driveUrl: 'https://drive.google.com/drive/folders/ejemplo-ingles-sol'
    }
  ]
};

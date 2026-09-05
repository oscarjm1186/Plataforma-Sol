import { StudyModule } from '../../types';

export const COMUNICACION_GUIDES: StudyModule[] = [
  {
    id: 'hum-mod-1',
    title: 'Parcial 1: El Discurso Científico, Lenguaje Técnico, Clasificación y Propiedades del Texto',
    parcialNumber: 1,
    competence: 'Aplica las propiedades semánticas, léxicas y estructurales del discurso científico, distinguiendo la tipología de textos especializados y las funciones del lenguaje en la técnica.',
    topics: [
      {
        id: 'hum-top-1',
        title: 'Características Fundamentales del Lenguaje y Discurso Científico',
        rap: 'RAP 1: Identifica los rasgos lingüísticos del texto científico frente al texto literario y coloquial.',
        summary: 'El discurso científico es la modalidad comunicativa empleada por la comunidad académica y técnica para transmitir conocimientos comprobables sobre la realidad natural y social. Se caracteriza por su rigor metodológico y la eliminación de cualquier ambigüedad.',
        keyPoints: [
          'Objetividad: neutralidad axiológica, ausencia de opiniones subjetivas, emociones o juicios de valor infundados.',
          'Universalidad: el significado de las proposiciones y símbolos debe ser unívoco y comprensible en cualquier parte del mundo (ej., nomenclatura química IUPAC, fórmulas físicas, unidades del SI).',
          'Denotación: predominio del significado literal y estricto de las palabras (función referencial del lenguaje), erradicando las connotaciones metafóricas o poéticas.',
          'Precisión y claridad: oraciones enunciativas, sintaxis directa (sujeto + verbo + complementos) y preferencia por la voz pasiva con "se" o primera persona del plural formal ("se determinó la resistencia del cilindro").',
          'Verificabilidad: todo enunciado debe ser susceptible de comprobación empírica o demostración lógica.'
        ],
        constructionApplication: 'Redacción impersonal y objetiva en bitácoras de obra y reportes de ensaye de probetas de laboratorio.',
        practiceExercises: [
          {
            prompt: 'Corregir la siguiente frase coloquial para convertirla en una proposición con lenguaje científico y técnico adecuado: "El concreto quedó muy aguado y tardó un montón en ponerse duro".',
            hint: 'Usa términos como revenimiento elevado, exceso de agua de mezclado y tiempo de fraguado prolongado.',
            solution: 'Propuesta técnica: "La mezcla de concreto presentó un revenimiento excesivo superior a 18 cm debido a una alta relación agua/cemento, lo que incrementó significativamente el tiempo de fraguado inicial y redujo su resistencia potencial a compresión".'
          }
        ]
      },
      {
        id: 'hum-top-2',
        title: 'Tecnicismos, Neologismos y Vocabulario Técnico en la Industria de la Edificación',
        rap: 'RAP 2: Emplea con precisión el vocabulario y tecnicismos propios de la ingeniería civil y la construcción.',
        summary: 'Los tecnicismos son términos unívocos propios de una ciencia, arte u oficio que carecen de sinonimia en el lenguaje ordinario. La adopción de nuevas tecnologías constructivas introduce continuamente neologismos normalizados.',
        keyPoints: [
          'Tecnicismos de la construcción: revenimiento, fraguado, zapata, alidada, contratrabe, escarpio, acartelamiento, transmitancia, ductilidad, puzolana.',
          'Neologismos y extranjerismos adaptados: BIM (Building Information Modeling), renderizado, pilote, ademe, geotextil, clinkerización.',
          'Monosemia: cada tecnicismo posee un único significado preciso dentro del contexto técnico, impidiendo confusiones operativas en obra.',
          'Prefijos y sufijos grecolatinos comunes en ingeniería: hidro- (agua), termo- (calor), baro- (presión), -metría (medición).'
        ],
        constructionApplication: 'Elaboración de especificaciones técnicas claras en catálogos de conceptos de obra para evitar discrepancias contractuales.',
        practiceExercises: [
          {
            prompt: '¿Por qué en un plano estructural es indispensable escribir "estribos de alambrón de 1/4" a cada 15 cm" en lugar de "alambres amarrados para juntar varillas"?',
            hint: 'Principio de monosemia y especificación técnica contractual.',
            solution: 'Porque el tecnicismo "estribo" define con exactitud un elemento estructural de confinamiento transversal diseñado para resistir fuerzas de cortante sísmico, mientras que la frase coloquial es ambigua y no garantiza el cumplimiento de la norma técnica.'
          }
        ]
      },
      {
        id: 'hum-top-3',
        title: 'Clasificación de los Textos Científicos según su Nivel de Especialización',
        rap: 'RAP 3: Clasifica los textos de orden científico conforme a su emisor, receptor y propósito comunicativo.',
        summary: 'Dependiendo del público al que van dirigidos y del nivel de profundidad conceptual, los textos científicos se categorizan en cinco clases formales.',
        keyPoints: [
          '1) Textos Científicos Especializados: dirigidos a científicos e ingenieros pares expertos; emplean terminología ultraespecializada y formalismos matemáticos sin explicaciones introductorias (ej., artículos de investigación en revistas indexadas como Journal of Structural Engineering).',
          '2) Textos Didácticos: diseñados para el proceso de enseñanza-aprendizaje de bachillerato o universidad; explican conceptos paso a paso con definiciones, ejemplos resueltos, gráficos y ejercicios (ej., libros de texto de Geometría Analítica o Resistencia de Materiales).',
          '3) Textos de Divulgación: dirigidos al público general sin preparación técnica previa; adaptan el vocabulario haciéndolo accesible, ameno y comprensible sin perder veracidad científica (ej., artículos de la revista ¿Cómo ves? de la UNAM o National Geographic).',
          '4) Textos de Consulta: obras organizadas alfabética o temáticamente para resolver dudas puntuales con rapidez (ej., diccionarios de arquitectura, enciclopedias, tablas de perfiles de acero del IMCA).',
          '5) Textos Técnicos y Normativos: documentos de aplicación práctica inmediata que dictan especificaciones, tolerancias y procedimientos de ejecución (ej., el Reglamento de Construcciones RCDF, catálogos de conceptos y manuales de instalación).'
        ],
        constructionApplication: 'Selección de fuentes bibliográficas idóneas para fundamentar el marco teórico de un proyecto de titulación en el IPN.',
        practiceExercises: [
          {
            prompt: '¿A qué categoría de texto científico corresponde una "Norma Técnica Complementaria para Diseño por Sismo del RCDF" y por qué?',
            hint: 'Contiene especificaciones obligatorias para la práctica profesional.',
            solution: 'Corresponde a un TEXTO TÉCNICO Y NORMATIVO, ya que establece especificaciones obligatorias, métodos de cálculo y criterios de diseño aplicables a la práctica profesional de la ingeniería estructural.'
          }
        ]
      },
      {
        id: 'hum-top-4',
        title: 'Propiedades del Texto Escrito: Cohesión, Coherencia, Adecuación y Variación Léxica',
        rap: 'RAP 4: Redacta textos expositivos respetando los mecanismos gramaticales de cohesión y coherencia lineal y global.',
        summary: 'Un texto no es una simple suma de oraciones aisladas, sino una unidad comunicativa integral que debe satisfacer cuatro propiedades textuales básicas para ser eficaz.',
        keyPoints: [
          'Adecuación: adaptación del registro lingüístico al contexto comunicativo, al destinatario formal y al canal utilizado (registro formal técnico).',
          'Coherencia: unidad temática y lógica interna; la información se organiza en torno a un eje central sin contradicciones ni digresiones irrelevantes (coherencia global y lineal).',
          'Cohesión: articulación gramatical visible entre oraciones y párrafos mediante el uso correcto de conectores lógicos (causa: "debido a que"; consecuencia: "por consiguiente"; contraste: "no obstante"; adición: "asimismo"), pronombres anafóricos y elipsis para evitar repeticiones viciosas.',
          'Variación léxica y precisión: uso de sinónimos adecuados y eliminación de palabras comodín ("cosa", "hacer", "tener").'
        ],
        constructionApplication: 'Redacción de informes periciales y dictámenes de seguridad estructural que puedan ser comprendidos con claridad en juzgados civiles.',
        practiceExercises: [
          {
            prompt: 'Identificar el defecto textual y corregir: "Se coló la trabe. La trabe quedó mal. El supervisor revisó la trabe y la trabe tenía huecos".',
            hint: 'Falta de cohesión y uso excesivo de repetición léxica.',
            solution: 'Corrección con cohesión: "Tras efectuar el colado de la trabe, la supervisión detectó oquedades en su estructura como consecuencia de un vibrado deficiente, motivo por el cual se ordenó su demolición parcial".'
          }
        ]
      },
      {
        id: 'hum-top-5',
        title: 'Funciones del Lenguaje en la Comunicación Técnica (Jakobson)',
        rap: 'RAP 5: Reconoce y aplica las funciones del lenguaje predominantes en la documentación técnica.',
        summary: 'Roman Jakobson identificó seis funciones del lenguaje en función del elemento del circuito comunicativo en el que se centra el emisor: Referencial (contexto), Apelativa (receptor), Emotiva (emisor), Fática (canal), Metalingüística (código) y Poética (mensaje).',
        keyPoints: [
          'Función Referencial o Representativa: es la función predominante absoluta en textos científicos y manuales técnicos; transmite información objetiva y verificable sobre la realidad exterior.',
          'Función Apelativa o Conativa: predomina en manuales de operación, instructivos de seguridad industrial y reglamentos de obra ("Use casco obligatorio", "No desmolde antes de 72 horas").',
          'Función Metalingüística: se utiliza al definir tecnicismos o aclarar el significado de un término en glosarios ("Por fraguado se entiende el paso del estado plástico al sólido").',
          'Función Fática: verifica el canal de comunicación ("¿Se escucha con claridad la presentación?").'
        ],
        constructionApplication: 'Diseño de señalética de seguridad en obra utilizando la función apelativa directa para salvaguardar la integridad de los trabajadores.',
        practiceExercises: [
          {
            prompt: 'En el enunciado: "Prohibido el paso a personal sin equipo de protección personal completo en el área de excavación", ¿qué función del lenguaje predomina?',
            hint: 'Busca influir en la conducta del receptor emitiendo una orden preventiva.',
            solution: 'Predomina la FUNCIÓN APELATIVA O CONATIVA, orientada a dirigir la conducta del trabajador para prevenir accidentes de trabajo.'
          }
        ]
      }
    ]
  },
  {
    id: 'hum-mod-2',
    title: 'Parcial 2: Metodología de la Investigación Documental, Protocolo y Normas APA (7ª Ed.)',
    parcialNumber: 2,
    competence: 'Diseña el protocolo de investigación documental, elabora fichas de trabajo y redacta citas y referencias aplicando el manual de estilo APA 7ª edición.',
    topics: [
      {
        id: 'hum-top-6',
        title: 'Etapas de la Investigación Documental y Delimitación del Tema',
        rap: 'RAP 1: Delimita el objeto de estudio en tiempo, espacio y alcance temático.',
        summary: 'La investigación documental es el proceso sistemático de indagación, recolección, organización, análisis e interpretación de información registrada en documentos físicos o electrónicos.',
        keyPoints: [
          'Fases del protocolo: 1) Elección del tema preliminar; 2) Delimitación espacial (lugar geográfico), temporal (periodo histórico o años de estudio) y temática (enfoque específico disciplinar); 3) Justificación (conveniencia, relevancia social, implicaciones prácticas y valor teórico); 4) Cronograma de actividades (Gráfica de Gantt para planificar los tiempos de ejecución).',
          'Criterios para delimitar: viabilidad de acceso a fuentes bibliográficas confiables, pertinencia para el área técnica de la construcción y originalidad de la aportación.'
        ],
        constructionApplication: 'Delimitación del proyecto de titulación: "Comportamiento sismorresistente de muros de BTC estabilizados con mucílago de nopal en la alcaldía Milpa Alta (2020-2024)".',
        practiceExercises: [
          {
            prompt: '¿Por qué el tema general "El concreto en México" es inadecuado como tema de investigación técnica y cómo debe delimitarse?',
            hint: 'Es excesivamente amplio e inabarcable en un ciclo escolar.',
            solution: 'Es inadecuado por ser excesivamente vago y general; debe delimitarse especificando tipo de concreto, propiedad mecánica analizada, región geográfica y periodo temporal (ej., "Resistencia a la compresión de concretos con agregados reciclados de demolición en obras de la Ciudad de México durante 2024").'
          }
        ]
      },
      {
        id: 'hum-top-7',
        title: 'Planteamiento del Problema, Preguntas de Investigación y Objetivos',
        rap: 'RAP 2: Formula preguntas de investigación viables y redacta objetivos taxonómicos con verbos en infinitivo.',
        summary: 'El planteamiento del problema es el corazón de la investigación; describe la discrepancia entre el estado actual (la deficiencia observada) y el estado deseado (la solución técnica esperada).',
        keyPoints: [
          'Estructura del planteamiento: descripción contextual del problema, consecuencias de no resolverlo y pregunta central de investigación formulada sin juicios de valor moral.',
          'Objetivo General: meta global e integradora del estudio que responde directamente a la pregunta de investigación; se redacta con un verbo en infinitivo de alta jerarquía taxonómica (Diseñar, Evaluar, Determinar, Comparar).',
          'Objetivos Específicos: pasos metodológicos secuenciales necesarios para alcanzar el objetivo general (generalmente 3 o 4 objetivos: 1. Diagnosticar; 2. Calcular/Experimentar; 3. Analizar resultados; 4. Proponer recomendaciones).'
        ],
        constructionApplication: 'Redacción rigurosa de los objetivos del proyecto de residencia profesional en empresas constructoras.',
        practiceExercises: [
          {
            prompt: 'Identificar el error metodológico en el siguiente objetivo: "Crear conciencia en los albañiles para que quieran usar su casco en la obra".',
            hint: 'Falta verbo taxonómico medible y contiene aspiraciones morales subjetivas.',
            solution: 'El objetivo es subjetivo, moralizante y no medible. Una redacción técnica adecuada es: "Evaluar el impacto de un programa de capacitación sobre la tasa de cumplimiento del uso obligatorio de equipo de protección personal en cuadrillas de edificación".'
          }
        ]
      },
      {
        id: 'hum-top-8',
        title: 'Formulación de Hipótesis Científica y Operacionalización de Variables',
        rap: 'RAP 3: Plantea hipótesis causales identificando variables independientes, dependientes e intervinientes.',
        summary: 'La hipótesis es una respuesta tentativa y anticipada a la pregunta de investigación, formulada como una proposición declarativa que relaciona dos o más variables verificables empíricamente.',
        keyPoints: [
          'Estructura de la hipótesis: Unidad de análisis (sujetos u objetos estudiados), Variable Independiente (la causa que el investigador manipula), Variable Dependiente (el efecto o resultado que se mide) y Término lógico de enlace.',
          'Variables Intervinientes o de Control: factores externos que podrían alterar los resultados si no se mantienen constantes (ej., temperatura ambiental en el fraguado, humedad del aire).',
          'Operacionalización: definición conceptual y operacional (indicadores cuantitativos, unidades de medición e instrumentos empleados para medir cada variable).'
        ],
        constructionApplication: 'Planteamiento de ensayos de laboratorio de resistencia de materiales para probar nuevos aditivos químicos.',
        practiceExercises: [
          {
            prompt: 'En la hipótesis: "La adición de un 10% de ceniza volante como sustituto parcial del cemento incrementa en un 15% la resistencia a compresión del concreto a los 28 días", ¿cuál es la variable independiente y cuál la dependiente?',
            hint: 'La variable independiente es la causa que se manipula; la dependiente es el efecto que se mide.',
            solution: 'Variable Independiente (Causa): Porcentaje de adición de ceniza volante (10%).\nVariable Dependiente (Efecto medible): Resistencia mecánica a la compresión a los 28 días (incremento del 15%).'
          }
        ]
      },
      {
        id: 'hum-top-9',
        title: 'Fuentes de Información Científica: Primarias, Secundarias y Bases de Datos',
        rap: 'RAP 4: Discrimina la confiabilidad de fuentes bibliográficas consultando repositorios académicos indexados.',
        summary: 'El valor de una investigación descansa en la solidez de sus fuentes de información. Se clasifican según su grado de proximidad con el hecho u objeto estudiado.',
        keyPoints: [
          'Fuentes Primarias: contienen información original de primera mano no interpretada (patentes de invención, artículos científicos indexados, censos del INEGI, bitácoras de obra, tesis de grado, normativas oficiales vigentes).',
          'Fuentes Secundarias: procesan, analizan, comparan o sintetizan fuentes primarias (libros de texto universitarios, enciclopedias especializadas, biografías de arquitectos, manuales de diseño).',
          'Fuentes Terciarias: recopilaciones de referencias que auxilian a localizar fuentes primarias y secundarias (catálogos de bibliotecas, índices de revistas).',
          'Bases de datos confiables: SciELO, Redalyc, Dialnet, Google Académico, repositorios institucionales del IPN y de la UNAM (evitando blogs anónimos o Wikipedia).'
        ],
        constructionApplication: 'Búsqueda de artículos científicos recientes sobre cimentaciones profundas en suelos blandos para sustentar un proyecto constructivo.',
        practiceExercises: [
          {
            prompt: '¿Por qué una página web comercial o un blog personal sin autor no es aceptable como fuente bibliográfica en un proyecto técnico del IPN?',
            hint: 'Falta de arbitraje por pares, respaldo institucional y rigor científico.',
            solution: 'Porque carece de rigor metodológico, no ha pasado por un proceso de arbitraje por pares que verifique sus afirmaciones y no ofrece respaldo institucional ni permanencia en el tiempo, pudiendo contener errores técnicos graves.'
          }
        ]
      },
      {
        id: 'hum-top-10',
        title: 'Fichas de Registro, Fichas de Trabajo y Normas APA (7ª Edición)',
        rap: 'RAP 5: Elabora fichas de contenido y estructura referencias conforme al manual internacional APA.',
        summary: 'Las fichas son instrumentos que organizan la información documental recabada para facilitar la redacción del marco teórico evitando la pérdida de fuentes y el plagio involuntario.',
        keyPoints: [
          'Fichas de Registro (7.5 × 12.5 cm): Bibliográficas, Hemerográficas y Cibergráficas (con enlace permanente o código DOI).',
          'Fichas de Trabajo (12.5 × 20.5 cm): encabezado con Tema, referencia abreviada (Autor, Año, Página) y contenido analítico.',
          'Tipos de fichas de contenido: 1) Textual (copia literal idéntica entre comillas; si se omiten palabras se usa corchete con elipsis [...]); 2) Resumen (ideas principales resumidas); 3) Paráfrasis (reformulación con vocabulario propio); 4) Comentario o Crítica (reflexión personal del investigador).',
          'Normas APA 7ª Edición: Formato de libro: Apellido, Inicial. (Año). Título del libro en cursivas. Editorial. Formato de artículo: Apellido, Inicial. (Año). Título del artículo. Nombre de la Revista en Cursivas, volumen(número), páginas. DOI/URL.'
        ],
        constructionApplication: 'Organización del fichero de investigación para la memoria técnica de titulación del CECyT 11.',
        practiceExercises: [
          {
            prompt: 'Redactar la referencia bibliográfica completa según normas APA 7ª edición del libro de texto: Geometría Analítica, escrito por René Jiménez, publicado en el año 2018 por la editorial Pearson Educación en la Ciudad de México.',
            hint: 'Formato: Apellido, Inicial. (Año). Título del libro en cursivas. Editorial.',
            solution: 'Jiménez, R. (2018). Geometría analítica. Pearson Educación.'
          }
        ]
      }
    ]
  },
  {
    id: 'hum-mod-3',
    title: 'Parcial 3: Estructura del Informe Técnico, Memoria de Titulación y Exposición Oral',
    parcialNumber: 3,
    competence: 'Redacta un informe técnico de investigación con rigor metodológico, previene el plagio académico y sustenta su presentación oral empleando modelos expositivos estructurados.',
    topics: [
      {
        id: 'hum-top-11',
        title: 'Estructura Canónica del Reporte Técnico y Memoria de Residencia / Titulación',
        rap: 'RAP 1: Organiza las secciones preliminares, cuerpo y secciones terminales de un reporte formal del IPN.',
        summary: 'El informe técnico es el documento profesional que reporta de manera formal, detallada y sistemática las fases, resultados y conclusiones de un proyecto de ingeniería o investigación.',
        keyPoints: [
          'Secciones Preliminares: 1) Portada oficial (escudo del IPN, nombre del Centro de Estudios Científicos y Tecnológicos No. 11 "Wilfrido Massieu", especialidad técnica, título del proyecto, autor, director de proyecto, lugar y fecha); 2) Dictamen de aprobación del jurado; 3) Agradecimientos y dedicatorias (opcional); 4) Índice General, Índice de Tablas e Índice de Figuras; 5) Resumen ejecutivo (máximo 250 palabras en español e inglés "Abstract") y Palabras Clave (Keywords).',
          'Cuerpo del Trabajo: 1) Introducción (antecedentes, justificación y alcance); 2) Planteamiento del problema y objetivos; 3) Marco Teórico (estado del arte y fundamentos científicos); 4) Metodología o Ingeniería del Proyecto (memorias de cálculo, planos, especificaciones de catálogo de conceptos); 5) Análisis y Discusión de Resultados.',
          'Secciones Terminales: 1) Conclusiones y Recomendaciones; 2) Glosario de términos técnicos; 3) Referencias bibliográficas (ordenadas alfabéticamente estilo APA); 4) Anexos (estudios de laboratorio, cotizaciones de materiales, fichas técnicas de maquinaria).'
        ],
        constructionApplication: 'Estructuración formal de la Memoria Técnica de Titulación para la obtención del título de Técnico en Construcción ante la academia del IPN.',
        practiceExercises: [
          {
            prompt: '¿Cuál es la diferencia sustancial entre la sección de "Resultados" y la sección de "Conclusiones" en un informe técnico de ingeniería?',
            hint: 'Los resultados presentan datos objetivos; las conclusiones interpretan el cumplimiento de los objetivos.',
            solution: 'La sección de Resultados presenta objetivamente los datos cuantitativos obtenidos (tablas de esfuerzo, gráficas de deformación, volúmenes de obra), mientras que las Conclusiones evalúan si se demostró la hipótesis, si se alcanzaron los objetivos propuestos y señalan el impacto y limitaciones de la propuesta técnica.'
          }
        ]
      },
      {
        id: 'hum-top-12',
        title: 'Redacción del Resumen Ejecutivo (Abstract) y Palabras Clave (Keywords)',
        rap: 'RAP 2: Sintetiza en un solo bloque textual los objetivos, metodología, hallazgos y conclusión principal del proyecto.',
        summary: 'El resumen o Abstract es la carta de presentación de cualquier documento técnico. Permite a los evaluadores e investigadores conocer en menos de dos minutos el contenido sustancial de la obra sin leerla íntegramente.',
        keyPoints: [
          'Estructura interna obligatoria: 1) Contexto y objetivo del trabajo (1 a 2 oraciones); 2) Metodología e instrumentos empleados (2 a 3 oraciones); 3) Principales resultados obtenidos cuantitativamente (2 oraciones); 4) Conclusión general o aportación relevante (1 oración).',
          'Extensión reglamentaria: entre 150 y 250 palabras redactadas en un único párrafo continuo sin sangría ni puntos y aparte.',
          'Estilo: redactado en pasado formal ("se analizó", "se determinó"), sin citas bibliográficas ni abreviaturas no definidas.',
          'Palabras clave (Keywords): 4 a 6 tecnicismos esenciales para indexar el documento en bibliotecas digitales.'
        ],
        constructionApplication: 'Elaboración del resumen ejecutivo requerido por la Dirección de Educación Media Superior del IPN para el registro oficial de memorias técnicas.',
        practiceExercises: [
          {
            prompt: '¿Cuál es la función específica del "Resumen o Abstract" al inicio de una memoria técnica y qué extensión máxima en palabras se recomienda internacionalmente?',
            hint: 'Síntesis ultra condensada de objetivos, metodología y principales hallazgos.',
            solution: 'Su función es brindar al lector un panorama rápido y autónomo del problema, la metodología aplicada, los resultados más relevantes y la conclusión principal; su extensión estándar no debe superar las 250 palabras.'
          }
        ]
      },
      {
        id: 'hum-top-13',
        title: 'Citas Textuales, Paráfrasis y Prevención del Plagio Académico (Software Turnitin)',
        rap: 'RAP 3: Incorpora citas directas e indirectas respetando los derechos de autor e integridad académica.',
        summary: 'El plagio académico consiste en presentar ideas, frases, datos o gráficos de otros autores como si fueran propios, constituyendo una falta grave a la ética científica y profesional.',
        keyPoints: [
          'Cita Textual Corta (menos de 40 palabras): se inserta en el flujo regular del párrafo entre comillas dobles, señalando autor, año y número de página específico: Según Smith (2020), "..." (p. 45).',
          'Cita Textual Larga (40 palabras o más): se escribe en un bloque independiente sin comillas, con sangría izquierda de 1.27 cm y manteniendo el número de página al final: (García, 2021, p. 112).',
          'Cita de Paráfrasis: se explica la idea original con vocabulario propio sin comillas, pero acreditando obligatoriamente al autor y año.',
          'Herramientas antiplagio (Turnitin): plataformas digitales que comparan el texto con miles de millones de páginas web y artículos, exigiendo en el IPN índices de similitud no mayores al 15% o 20% excluyendo bibliografía.'
        ],
        constructionApplication: 'Revisión preventiva de reportes técnicos con software antiplagio antes de someterlos a evaluación del sínodo.',
        practiceExercises: [
          {
            prompt: 'Si un estudiante copia textualmente un párrafo de un reglamento técnico, cambia tres palabras por sinónimos y no cita la fuente ni pone comillas, ¿qué falta comete?',
            hint: 'Plagio en modalidad de paráfrasis ilegítima o mosaico.',
            solution: 'Comete plagio académico (paráfrasis deshonesta o plagio tipo "patchwriting"), ya que se apropia de la estructura sintáctica y de las ideas del autor original sin darle el crédito explícito mediante cita reglamentaria.'
          }
        ]
      },
      {
        id: 'hum-top-14',
        title: 'Modelos Expositivos del Discurso Oral y Estructuración Lógica',
        rap: 'RAP 4: Diseña guiones discursivos utilizando patrones de organización causa-efecto y problema-solución.',
        summary: 'La comunicación oral técnica requiere estructurar el mensaje de forma lógica para convencer y transmitir datos complejos con sencillez y autoridad académica ante comités evaluadores.',
        keyPoints: [
          'Modelo Problema-Solución: se describe una deficiencia constructiva o necesidad comunitaria crítica y se presenta la propuesta técnica de ingeniería para resolverla.',
          'Modelo Causa-Efecto: se analiza un fenómeno físico o falla estructural demostrando sus causas originarias (ej. socavación de pilas por crecida hidráulica).',
          'Modelo Cronológico o de Proceso: descripción secuencial de las etapas de ejecución de la obra (excavación, cimentación, estructura, acabados).',
          'Modelo Comparativo: análisis de ventajas y desventajas entre dos sistemas constructivos alternativos (ej., losa maciza de concreto vs losa nervada de vigueta y bovedilla).'
        ],
        constructionApplication: 'Defensa de presupuestos y propuestas de solución ante clientes y comités técnicos vecinales.',
        practiceExercises: [
          {
            prompt: '¿Qué modelo expositivo es el más idóneo para justificar ante un inversionista el cambio de tabique recocido tradicional por bloque de concreto celular curado en autoclave?',
            hint: 'Comparación sistemática de costos, tiempos y aislamiento térmico.',
            solution: 'El MODELO COMPARATIVO (Ventajas-Desventajas), contrastando analíticamente ambos materiales en peso volumétrico, velocidad de colocación, desperdicio y ahorro de energía térmica para demostrar la superioridad del bloque de concreto celular.'
          }
        ]
      },
      {
        id: 'hum-top-15',
        title: 'Técnicas de Presentación Oral, Oratoria, Kinésica y Apoyos Visuales',
        rap: 'RAP 5: Defiende el examen profesional técnico con dicción, dominio kinésico y láminas de apoyo audiovisual sintetizadas.',
        summary: 'El dominio de la expresión oral, el control del lenguaje corporal y el uso estratégico de apoyos gráficos permiten exponer con convicción y claridad durante el examen profesional de titulación.',
        keyPoints: [
          'Voz y lenguaje paraverbal: modulación de volumen, entonación firme, ritmo pausado (130 palabras por minuto), pausas estratégicas de reflexión y erradicación de muletillas ("este", "eh", "bueno").',
          'Comunicación Kinésica y Proxémica: postura erguida, contacto visual directo y alternado con cada uno de los tres sinodales, gesticulación abierta de manos y eliminación de ademanes nerviosos (balanceo de pies o jugar con un bolígrafo).',
          'Regla de diseño de diapositivas (Regla 6×6): máximo 6 viñetas por lámina y no más de 6 palabras por viñeta; evitar párrafos largos; priorizar esquemas, planos isométricos y gráficas de barras con alta resolución.',
          'Gestión de la sesión de preguntas y respuestas: escuchar con atención sin interrumpir al sinodal, tomar notas breves y responder con serenidad y fundamento técnico comprobable.'
        ],
        constructionApplication: 'Sustentación del examen profesional para la obtención de la Cédula Profesional de Técnico en Construcción ante el jurado del CECyT 11.',
        practiceExercises: [
          {
            prompt: '¿Por qué en una presentación ejecutiva ante un jurado de titulación técnica está prohibido leer textualmente el contenido proyectado en las diapositivas?',
            hint: 'Contacto visual, dominio profesional del tema y papel del apoyo visual.',
            solution: 'Porque proyecta falta de preparación y dominio técnico del tema, rompe el contacto visual con el jurado y aburre a la audiencia; las diapositivas son únicamente apoyos visuales sintéticos (gráficas, planos, palabras clave), mientras que la explicación argumentativa profunda debe emanar oralmente del exponente.'
          }
        ]
      }
    ]
  }
];

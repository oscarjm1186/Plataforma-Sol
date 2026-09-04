import { Flashcard } from '../../types';

export const COMUNICACION_FLASHCARDS: Flashcard[] = [
  // --- PARCIAL 1: PROCESO DE COMUNICACIÓN, LENGUAJE CIENTÍFICO Y MÉTODO CIENTÍFICO (17 TARJETAS) ---
  {
    id: 'fc-com-01',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 0,
    category: 'Proceso de Comunicación',
    front: '¿Cuáles son los 7 elementos fundamentales del circuito de la comunicación humana?',
    back: '1. Emisor: quien codifica y emite el mensaje.\n2. Receptor: quien recibe y descodifica el mensaje.\n3. Mensaje: la información, idea o datos transmitidos.\n4. Canal o Medio: soporte físico o tecnológico por el que viaja el mensaje (aire, papel, internet, voz).\n5. Código: sistema de signos y reglas compartidas (idioma español, símbolos matemáticos, simbología gráfica arquitectónica).\n6. Contexto o Situación: entorno físico, social y cultural que rodea la comunicación.\n7. Retroalimentación (Feedback): respuesta del receptor que valida si el mensaje fue comprendido.',
    tip: 'En un plano técnico, el emisor es el proyectista, el código son las normas NMX/ISO de dibujo y el receptor es el residente de obra.'
  },
  {
    id: 'fc-com-02',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 0,
    category: 'Barreras de la Comunicación',
    front: '¿Cuáles son las 4 barreras o ruidos que interfieren en la comunicación técnica?',
    back: '• Físicas: ruidos ambientales de maquinaria en obra, mala iluminación, cortes de internet o estática acústica.\n• Semánticas: incomprensión de palabras técnicas desconocidas o uso de modismos regionales ambiguos.\n• Fisiológicas: problemas auditivos, visuales o fatiga extrema del emisor o receptor.\n• Psicológicas: prejuicios, emociones desbordadas, estrés o falta de empatía entre el supervisor y el trabajador.',
    tip: 'En una obra de construcción, las barreras físicas y semánticas causan graves accidentes de trabajo si las órdenes no son claras.'
  },
  {
    id: 'fc-com-03',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 0,
    category: 'Funciones del Lenguaje',
    front: '¿Cuáles son las funciones del lenguaje según Roman Jakobson y cuál predomina en la ciencia?',
    back: '• Referencial o Informativa (centrada en el contexto): transmite datos objetivos de la realidad (PREDOMINANTE en la ciencia y técnica).\n• Emotiva o Expresiva (centrada en el emisor): comunica sentimientos y estados de ánimo.\n• Apelativa o Conativa (centrada en el receptor): busca influir, convencer o dar órdenes.\n• Fática (centrada en el canal): comprueba que el canal sigue abierto ("¿me escuchas?", "bueno").\n• Metalingüística (centrada en el código): explica el significado de las propias palabras.\n• Poética (centrada en el mensaje): busca la belleza estética del texto.',
    tip: 'El lenguaje científico se enfoca casi al 100% en la función referencial o representativa.'
  },
  {
    id: 'fc-com-04',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 0,
    category: 'Lenguaje Científico',
    front: '¿Cuáles son las 6 características esenciales del lenguaje científico y técnico?',
    back: '1. Objetividad: describe hechos reales comprobables sin sesgos ni juicios de valor subjetivos.\n2. Precisión: usa términos exactos (monosemia) evitando ambigüedades o dobles sentidos.\n3. Claridad: redacción directa, sencilla, con sintaxis lógica y sin adornos retóricos.\n4. Universalidad: términos y nomenclaturas estandarizadas comprensibles internacionalmente (símbolos SI, fórmulas químicas).\n5. Verificabilidad: los datos expuestos deben poder ser replicados y comprobados en laboratorio.\n6. Impersonalidad: se redacta comúnmente en voz pasiva o tercera persona ("se midió", "se observó").',
    tip: 'Nunca escribas en un reporte técnico: "hicimos un colado padrísimo"; escribe: "se efectuó el colado del elemento de concreto".'
  },
  {
    id: 'fc-com-05',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 0,
    category: 'Semántica Lingüística',
    front: '¿Cuál es la diferencia entre significado denotativo y connotativo?',
    back: '• Significado Denotativo: es el significado literal, objetivo, exacto y de diccionario que comparte toda una comunidad lingüística (es el lenguaje OBLIGATORIO en la ciencia y la ingeniería).\n• Significado Connotativo: es el significado figurado, subjetivo, metafórico o emocional atribuido por el contexto cultural o personal (propio de la poesía y la publicidad).\nEjemplo: "Plomada": denotativamente es un peso cónico de metal suspendido de una cuerda; connotativamente en política puede significar "peso muerto".',
    tip: 'El lenguaje técnico es estrictamente denotativo y monosémico.'
  },
  {
    id: 'fc-com-06',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 0,
    category: 'Conocimiento Humano',
    front: '¿En qué se diferencia el Conocimiento Empírico del Conocimiento Científico?',
    back: '• Conocimiento Empírico: surge de la experiencia cotidiana directa, la tradición oral y el ensayo-error; es espontáneo, subjetivo, asistemático y no explica las causas profundas (ej. un albañil sabe por costumbre empírica cuántos botes de arena usar pero ignora la hidratación de los silicatos de calcio).\n• Conocimiento Científico: es metódico, sistemático, comprobable experimentalmente, fundamentado teóricamente, racional y busca leyes universales reproducibles que explican las causas causales de los fenómenos.',
    tip: 'El técnico del IPN combina la destreza empírica con el rigor del conocimiento científico.'
  },
  {
    id: 'fc-com-07',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 0,
    category: 'Método Científico',
    front: '¿Cuáles son las 6 etapas secuenciales del Método Científico experimental?',
    back: '1. Observación sistemática de un fenómeno o anomalía de la realidad.\n2. Planteamiento del problema (pregunta de investigación precisa y delimitada).\n3. Marco Teórico y revisión del estado del arte (literatura previa existente).\n4. Formulación de la Hipótesis explicativa contrastable.\n5. Experimentación controlada y recolección rigurosa de datos.\n6. Análisis de resultados cuantitativos/cualitativos y Conclusiones (aceptación o rechazo de la hipótesis; formulación de teorías o leyes).',
    tip: 'Si el experimento contradice la hipótesis, la hipótesis debe reformularse; ¡nunca alteres los datos experimentales!'
  },
  {
    id: 'fc-com-08',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 0,
    category: 'Planteamiento del Problema',
    front: '¿Qué condiciones debe cumplir un correcto planteamiento del problema en una investigación técnica?',
    back: '• Debe formularse como una pregunta clara, sin ambigüedades y sin dar por sentado la respuesta.\n• Debe expresar una relación medible entre dos o más variables observables.\n• Debe estar delimitado en tiempo, espacio físico y universo poblacional.\n• Debe ser viable y factible de investigarse con los recursos, tecnología y tiempo disponibles.',
    tip: 'Un problema bien planteado tiene ya resuelta la mitad de la investigación.'
  },
  {
    id: 'fc-com-09',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 0,
    category: 'Hipótesis de Investigación',
    front: '¿Qué es una hipótesis científica y qué tipos de variables intervienen en ella?',
    back: 'Es una proposición tentativa de explicación o respuesta provisional al problema planteado, que relaciona causas con efectos y que puede someterse a prueba empírica.\nVariables:\n• Variable Independiente (X): la causa o factor manipulado por el investigador (ej. porcentaje de ceniza volante añadida al cemento).\n• Variable Dependiente (Y): el efecto medido o resultado observado (ej. resistencia a compresión f\'c a los 28 días).\n• Variables Intervinientes o de Control (Z): factores que deben mantenerse constantes para no falsear el resultado (ej. temperatura de curado, relación agua-cemento).',
    tip: 'Estructura lógica: "Si X (causa), entonces ocurrirá Y (efecto), bajo las condiciones Z".'
  },
  {
    id: 'fc-com-10',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 0,
    category: 'Métodos de Razonamiento',
    front: '¿Cuál es la diferencia entre el razonamiento inductivo y el deductivo?',
    back: '• Método Inductivo (de lo particular a lo general): parte de la observación repetida de casos particulares individuales para formular una generalización o principio universal probable (ej. "el ensayo del cilindro 1 resistió 250 kg/cm², el cilindro 2 y 3 también, por tanto este lote de concreto cumple la norma").\n• Método Deductivo (de lo general a lo particular): parte de premisas, leyes o principios teóricos generales aceptados para predecir o deducir un resultado específico particular (ej. "todas las varillas Grado 42 tienen fy = 4200 kg/cm²; esta varilla es Grado 42, por tanto resistirá esa tensión").',
    tip: 'El método científico moderno combina ambos en el enfoque hipotético-deductivo.'
  },
  {
    id: 'fc-com-11',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 0,
    category: 'Enfoques de Investigación',
    front: '¿Qué diferencia a la investigación cuantitativa de la cualitativa y mixta?',
    back: '• Cuantitativa: basada en la medición numérica, el análisis estadístico y la recolección de datos matemáticos medibles con instrumentos precisos para probar hipótesis preestablecidas (típica de la ingeniería, ensayes de materiales y topografía).\n• Cualitativa: explora significados profundos, percepciones humanas, entrevistas y descripciones narrativas sin medición estadística rígida (típica del urbanismo social y sociología).\n• Mixta: integra armónicamente datos cuantitativos y cualitativos para lograr una comprensión integral del fenómeno.',
    tip: 'Un estudio de habitabilidad de vivienda social suele requerir enfoque mixto (resistencia técnica + satisfacción del usuario).'
  },
  {
    id: 'fc-com-12',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 0,
    category: 'Tecnicismos y Neologismos',
    front: '¿Qué es un tecnicismo y cómo se originan en el vocabulario de la construcción?',
    back: 'Es una palabra o término especializado propio de una ciencia, arte u oficio que posee un significado denotativo unívoco y exacto dentro de esa disciplina.\nEn la construcción muchos provienen de raíces grecolatinas (ortogonal, higrométrico), del francés (almena, dintel, brise-soleil) o son neologismos tomados del inglés (nearshoring, drywall, render, masterbatch, clinker).',
    tip: 'Usa los tecnicismos con precisión; no los emplees para impresionar si existe un término en español normalizado.'
  },
  {
    id: 'fc-com-13',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 0,
    category: 'Sistemas de Unidades',
    front: '¿Por qué la comunicación científica exige el uso estricto del Sistema Internacional de Unidades (SI)?',
    back: 'Para garantizar la reproducibilidad y evitar desastres de ingeniería por conversiones erróneas.\nEl Sistema Internacional (NOM-008-SCFI en México) establece 7 unidades fundamentales: metro (m) para longitud, kilogramo (kg) para masa, segundo (s) para tiempo, ampere (A) para corriente eléctrica, kelvin (K) para temperatura termodinámica, mol para cantidad de sustancia y candela (cd) para intensidad luminosa.',
    tip: 'En 1999 la sonda espacial Mars Climate Orbiter de la NASA se estrelló en Marte porque un equipo usó libras-fuerza y otro Newtons del SI.'
  },
  {
    id: 'fc-com-14',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 0,
    category: 'Objetividad y Sesgo',
    front: '¿Qué es el sesgo de confirmación y cómo debe combatirse en la investigación técnica?',
    back: 'Es la tendencia psicológica inconsciente del ser humano a buscar, interpretar y valorar únicamente los datos y pruebas que confirman sus hipótesis previas preconcebidas, ignorando o descartando los datos contrarios.\nSe combate aplicando el principio de reproducibilidad, pruebas a doble ciego, calibración certificada de aparatos y la revisión de pares (peer-review).',
    tip: 'El verdadero científico busca poner a prueba y refutar su hipótesis, no solo autojustificarse.'
  },
  {
    id: 'fc-com-15',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 0,
    category: 'Redacción Técnica',
    front: '¿Cuáles son los 3 vicios del lenguaje más comunes que arruinan un informe técnico?',
    back: '1. Barbarismos: escribir o pronunciar mal las palabras o usar extranjerismos innecesarios (ej. escribir "haiga", "nadien", o "puentear" en vez de derivar).\n2. Pleonasmos o Redundancias: repetición viciosa de conceptos idénticos (ej. "subir para arriba", "lapso de tiempo", "tubo hueco por dentro", "concreto sólido").\n3. Anfibología: redacción confusa que admite dos interpretaciones distintas (ej. "El técnico revisó el muro del ingeniero que estaba cuarteado" —¿quién estaba cuarteado?).',
    tip: 'Relee tus reportes técnicos en voz alta antes de entregarlos para detectar cacofonías y ambigüedades.'
  },
  {
    id: 'fc-com-16',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 0,
    category: 'Comunicación Gráfica',
    front: '¿Por qué las gráficas, tablas y diagramas son considerados un lenguaje científico universal?',
    back: 'Porque sintetizan grandes volúmenes de datos numéricos en una sola representación visual ordenada, facilitando la identificación inmediata de tendencias, correlaciones, máximos y mínimos sin barreras idiomáticas.\nDeben tener siempre título numerado claro (ej. "Tabla 1. Resistencia a compresión de morteros"), unidades de medida en los encabezados y fuente de procedencia de los datos.',
    tip: 'Un reporte con datos tabulados y gráficas profesionales genera credibilidad técnica inmediata.'
  },
  {
    id: 'fc-com-17',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 0,
    category: 'Público Objetivo',
    front: '¿Cómo debe adaptar el emisor su mensaje al comunicar temas de construcción a clientes vs a trabajadores de obra?',
    back: '• Al cliente o usuario final: lenguaje comprensible, empático, sin tecnicismos oscuros innecesarios, enfocándose en beneficios de confort, durabilidad, costos y estética arquitectónica.\n• Al personal de albañilería en obra: instrucciones claras, directas, precisas, en términos de proporciones de obra (botes, carretillas), con apoyo de croquis a mano alzada y demostraciones prácticas de campo.\n• Al perito o profesor: lenguaje técnico riguroso con apego estricto a las normas NMX y RCDF.',
    tip: 'Saber comunicar eficazmente a todos los niveles es la marca del técnico líder politécnico.'
  },

  // --- PARCIAL 2: FUENTES DOCUMENTALES, NORMAS APA 7ª, ÉTICA Y ARTÍCULO CIENTÍFICO (17 TARJETAS) ---
  {
    id: 'fc-com-18',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 1,
    category: 'Fuentes de Información',
    front: '¿Cuál es la clasificación de las fuentes de información científica (primarias, secundarias y terciarias)?',
    back: '• Primarias: contienen información original de primera mano que no ha sido filtrada ni interpretada previamente (artículos en revistas científicas indexadas arbitradas, patentes, tesis doctorales, actas de congresos, normas oficiales NOM/NMX).\n• Secundarias: recopilan, analizan, sintetizan o interpretan fuentes primarias (libros de texto universitarios, manuales de construcción, enciclopedias especializadas, biografías).\n• Terciarias: guías y directorios que facilitan la localización de fuentes secundarias y primarias (catálogos de bibliotecas, índices bibliográficos, bases de datos como SciELO o Scopus).',
    tip: 'Para el marco teórico de un proyecto formal, al menos el 70% de tus referencias deben ser fuentes primarias confiables.'
  },
  {
    id: 'fc-com-19',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 1,
    category: 'Búsqueda de Información Confiable',
    front: '¿Qué criterios diferencian una fuente científica confiable de una página web no académica?',
    back: '1. Autoría identificable: profesionistas, investigadores o instituciones de prestigio con grado académico acreditable (no autores anónimos).\n2. Arbitraje por pares (Peer-Review): el texto fue evaluado y aprobado por un comité de expertos antes de publicarse.\n3. Citas y referencias bibliográficas rigurosas al final del texto.\n4. Actualidad de la publicación (fecha reciente).\n5. Dominio web institucional: .edu, .gob, .org o repositorios indexados (Google Scholar, Redalyc, SciELO, IEEE).',
    tip: 'Nunca cites sitios abiertos no verificables como Wikipedia, Rincón del Vago o blogs personales sin autor.'
  },
  {
    id: 'fc-com-20',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 1,
    category: 'Fichas de Trabajo',
    front: '¿Cuáles son los 4 tipos principales de fichas de trabajo documental y para qué sirve cada una?',
    back: '1. Ficha de Cita Textual: transcribe literalmente entre comillas las palabras exactas del autor original respetando puntuación y ortografía.\n2. Ficha de Paráfrasis: explica la idea del autor original con las propias palabras del estudiante, manteniendo intacto el significado.\n3. Ficha de Resumen: reduce las ideas principales del texto a sus puntos fundamentales usando palabras clave.\n4. Ficha de Comentario o Crítica Personal: registra el análisis crítico, dudas u opiniones del investigador sobre el texto leído.',
    tip: 'Toda ficha debe contener en el encabezado: tema específico, datos del autor, año y número de página.'
  },
  {
    id: 'fc-com-21',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 1,
    category: 'Normas APA 7ª Edición',
    front: '¿Qué es el sistema de citación autor-año en el texto según las Normas APA 7ª edición?',
    back: 'Es el estándar internacional de la American Psychological Association que acredita la fuente mediante el apellido del autor y el año de publicación entre paréntesis dentro del párrafo:\n• Cita narrativa: Según González (2022), el concreto premezclado ofrece mayor homogeneidad...\n• Cita parentética: El concreto premezclado ofrece mayor homogeneidad (González, 2022).\nSi hay dos autores se unen con "y" (o "&" en inglés): (Gómez y López, 2021).\nSi son 3 o más autores se usa "et al.": (Martínez et al., 2023).',
    tip: '"et al." proviene del latín "et alii" que significa "y otros".'
  },
  {
    id: 'fc-com-22',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 1,
    category: 'Citas Textuales en APA',
    front: '¿Cuál es la diferencia de formato entre una cita textual corta y una cita en bloque según APA 7ª edición?',
    back: '• Cita Textual Corta (menos de 40 palabras): se incorpora directamente dentro del texto entre comillas dobles "", finalizando con el autor, año y número de página entre paréntesis: (Pérez, 2020, p. 45).\n• Cita Textual en Bloque (40 palabras o más): se coloca en un párrafo independiente, sin comillas, con una sangría izquierda de 1.27 cm (0.5 pulgadas) en todo el bloque, a doble espacio, cerrando con el paréntesis (p. 45) después del punto final.',
    tip: 'No abuses de las citas textuales; la redacción científica prefiere la paráfrasis explicativa con tu propio análisis.'
  },
  {
    id: 'fc-com-23',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 1,
    category: 'Referencias Bibliográficas APA',
    front: '¿Cuáles son los 4 elementos obligatorios que componen una referencia bibliográfica en la lista final de APA 7?',
    back: '1. ¿Quién es el autor? (Apellido, Inicial del nombre: Smith, J. R.).\n2. ¿Cuándo se publicó? (Año entre paréntesis: (2021)).\n3. ¿Cómo se titula la obra? (Título en letra cursiva o itálica).\n4. ¿Dónde se localiza? (Editorial de procedencia o DOI / enlace URL web).\n\nFormato: Apellido, A. A. (Año). *Título del libro*. Editorial.',
    tip: 'La lista final se ordena alfabéticamente por el apellido del autor y se formatea con sangría francesa (1.27 cm).'
  },
  {
    id: 'fc-com-24',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 1,
    category: 'Referencias de Revistas APA',
    front: '¿Cómo se referencia un artículo de revista científica indexada con código DOI en APA 7?',
    back: 'Estructura estándar:\nApellido, A. A., y Apellido, B. B. (Año). Título del artículo científico. *Nombre de la Revista en Cursiva*, *volumen*(número), páginas inicial-final. https://doi.org/10.xxxx/xxxx\n\nEjemplo:\nRamírez, C., y Sánchez, M. (2023). Comportamiento sísmico de muros de mampostería confinada. *Revista de Ingeniería Sísmica*, *45*(2), 112-128. https://doi.org/10.1016/j.eng.2023.01.005',
    tip: 'El DOI (Digital Object Identifier) es el identificador digital único permanente del artículo en internet.'
  },
  {
    id: 'fc-com-25',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 1,
    category: 'Ética y Plagio',
    front: '¿Qué es el plagio académico y cuáles son sus distintas modalidades?',
    back: 'Es la apropiación indebida y deshonesta de ideas, textos, datos, imágenes o gráficos generados por otra persona haciéndolos pasar como propios sin dar el crédito correspondiente al autor original.\nModalidades:\n• Plagio directo o clonación: copiar y pegar texto íntegro sin comillas ni cita.\n• Plagio mosaico o "parcheo": mezclar frases de varios autores cambiando pocas palabras.\n• Plagio de paráfrasis sin crédito: resumir la idea de otro sin citar la fuente.\n• Autoplagio: reutilizar trabajos propios ya calificados o publicados en otra materia sin avisar.',
    tip: 'El uso de herramientas de detección de plagio (como Turnitin) es estándar en el IPN.'
  },
  {
    id: 'fc-com-26',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 1,
    category: 'Derechos de Autor',
    front: '¿Cuál es la diferencia jurídica entre los Derechos Morales y los Derechos Patrimoniales en México (LFDA)?',
    back: '• Derechos Morales: reconocen la autoría y paternidad de la obra y el derecho a su integridad; son perpetuos, inalienables, imprescriptibles e irrenunciables (siempre serás el autor de tu plano o tesis aunque la vendas).\n• Derechos Patrimoniales: facultan al titular para explotar económicamente la obra, cobrar regalías o autorizar su reproducción, distribución y venta; son transferibles y tienen una vigencia temporal (en México: la vida del autor más 100 años después de su muerte).',
    tip: 'Regulado por el Instituto Nacional del Derecho de Autor (INDAUTOR).'
  },
  {
    id: 'fc-com-27',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 1,
    category: 'Estructura IMRyD',
    front: '¿Qué significa la sigla IMRyD y qué contiene cada una de sus secciones en un artículo científico?',
    back: 'Es el estándar mundial para la estructura de artículos de investigación experimental:\n• I - Introducción: ¿cuál es el problema y por qué es importante investigarlo? (antecedentes y objetivos).\n• M - Métodos: ¿cómo se hizo la investigación y con qué materiales? (reproducibilidad).\n• R - Resultados: ¿qué se encontró o descubrió? (datos brutos, tablas y gráficas sin opiniones).\n• D - Discusión: ¿qué significan los hallazgos? (comparación con otros autores, limitaciones y conclusiones).',
    tip: 'Es la plantilla universal utilizada en revistas indexadas de todo el mundo.'
  },
  {
    id: 'fc-com-28',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 1,
    category: 'Resumen o Abstract',
    front: '¿Qué es el Abstract o Resumen de un artículo científico y cuáles son sus partes?',
    back: 'Es una síntesis compacta y autónoma de 150 a 250 palabras colocada al inicio del artículo que permite al lector decidir si leerá el documento completo.\nPartes obligatorias:\n1. Objetivo general de la investigación.\n2. Metodología y materiales empleados.\n3. Principales resultados cuantitativos alcanzados.\n4. Conclusión primordial.\nSe acompaña al final de 3 a 5 Palabras Clave (Keywords) separadas por comas para su indexación en bases de datos.',
    tip: 'Se redacta siempre en español e inglés y es lo último que se escribe al terminar la investigación.'
  },
  {
    id: 'fc-com-29',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 1,
    category: 'Divulgación Científica',
    front: '¿Cuál es la diferencia entre un artículo de investigación especializada y un artículo de divulgación científica?',
    back: '• Artículo de Investigación: dirigido a la comunidad científica de pares; utiliza lenguaje altamente técnico, fórmulas complejas y estructura IMRyD rigurosa (ej. Revista Ingeniería Sísmica).\n• Artículo de Divulgación: dirigido al público general no especialista; traduce conceptos científicos complejos a un lenguaje ameno, claro, atractivo y metafórico sin perder rigor verídico (ej. Revista ¿Cómo ves? de la UNAM o Selección de Obras).',
    tip: 'Divulgar la ciencia es una responsabilidad social del tecnólogo con su comunidad.'
  },
  {
    id: 'fc-com-30',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 1,
    category: 'Revisión por Pares (Peer Review)',
    front: '¿Cómo funciona el proceso de arbitraje por pares a doble ciego (Double-Blind Peer Review)?',
    back: 'Es el filtro de oro de la ciencia mundial:\n1. El investigador envía su artículo a la revista.\n2. El editor lo turna a dos o tres árbitros expertos en el tema de forma anónima.\n3. En el sistema de "doble ciego", los revisores no saben quién es el autor (se borra su nombre e institución) y el autor desconoce la identidad de los revisores.\n4. Los árbitros emiten dictamen: Aceptado, Aceptado con cambios mayores, o Rechazado.',
    tip: 'Garantiza que el artículo se evalúe con total imparcialidad técnica sin favoritismos.'
  },
  {
    id: 'fc-com-31',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 1,
    category: 'Operadores Booleanos',
    front: '¿Cómo se utilizan los operadores booleanos AND, OR y NOT en la búsqueda de información científica?',
    back: '• AND (Y): une términos obligatorios acotando la búsqueda a documentos que contengan ambas palabras clave (ej. "concreto AND sismo").\n• OR (O): amplía la búsqueda a documentos que contengan cualquiera de los dos sinónimos (ej. "losa OR forjado").\n• NOT (NO): excluye términos no deseados (ej. "cimentaciones NOT pilotes" —busca cimentaciones pero excluye pilotes).',
    tip: 'El uso de comillas " " busca la frase exacta (ej. "mecánica de suelos").'
  },
  {
    id: 'fc-com-32',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 1,
    category: 'Estado del Arte',
    front: '¿Qué es el "Estado del Arte" o "Estado de la Cuestión" en una tesis o protocolo de investigación?',
    back: 'Es el diagnóstico exhaustivo de la literatura técnica más reciente (últimos 3 a 5 años) que describe qué se sabe, qué se ha descubierto y qué vacíos de conocimiento o problemas aún no resueltos existen sobre el tema a nivel mundial.\nDemuestra que la investigación del estudiante es original y no repite lo que ya fue solucionado.',
    tip: 'Evita reinventar la rueda en ingeniería.'
  },
  {
    id: 'fc-com-33',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 1,
    category: 'Textos Científicos',
    front: '¿Cuál es la función de una Ponencia y su Memoria de Congreso?',
    back: '• Ponencia: comunicación oral y escrita breve presentada por un investigador ante la audiencia de un congreso o simposio científico sobre un avance de investigación reciente, con tiempo de réplica para preguntas del público.\n• Memoria de Congreso (Proceedings): libro o compilación digital que reúne todos los trabajos completos aprobados y expuestos en el congreso.',
    tip: 'Es la vía más rápida para difundir hallazgos científicos antes de que salgan en revistas periódicas.'
  },
  {
    id: 'fc-com-34',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 1,
    category: 'Ética y Reproducibilidad',
    front: '¿Qué es la crisis de reproducibilidad en la ciencia y por qué es una falta ética inventar o alterar datos?',
    back: 'Ocurre cuando otros científicos intentan repetir un experimento siguiendo el método publicado y no logran obtener los mismos resultados.\nInventar datos (fabricación), alterarlos para forzar que cuadren con la teoría (falsificación) o recortar muestras disonantes son fraudes científicos graves que ameritan el retiro del artículo (retraction), expulsión académica y desprestigio profesional perpetuo.',
    tip: 'En la construcción, alterar los resultados de resistencia de cilindros de concreto puede costar vidas humanas ante un sismo.'
  },

  // --- PARCIAL 3: TEXTOS TÉCNICOS, FOROS ORALES, EXPOSICIÓN Y ENSAYO (16 TARJETAS) ---
  {
    id: 'fc-com-35',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 2,
    category: 'Textos Técnicos',
    front: '¿Qué es un Informe Técnico o Reporte de Prácticas y cuál es su estructura formal?',
    back: 'Es un documento expositivo objetivo y detallado que registra la ejecución, metodología, mediciones y conclusiones de una actividad experimental o visita de campo en obra.\nEstructura:\n1. Portada institucional con datos de identificación.\n2. Introducción y objetivos (generales y específicos).\n3. Marco contextual o teórico breve.\n4. Desarrollo experimental (materiales, equipo de laboratorio y procedimiento paso a paso).\n5. Registro de datos, cálculos matemáticos y tablas de resultados.\n6. Análisis de resultados e interpretación de gráficos.\n7. Conclusiones y recomendaciones técnicas.\n8. Referencias bibliográficas en formato APA.',
    tip: 'Debe permitir que cualquier otro técnico pueda repetir la práctica exactamente igual.'
  },
  {
    id: 'fc-com-36',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 2,
    category: 'Memoria Descriptiva',
    front: '¿Qué es la Memoria Descriptiva y la Memoria de Cálculo de un proyecto arquitectónico?',
    back: '• Memoria Descriptiva: documento técnico y literario que narra y justifica el concepto de diseño, zonificación, funcionamiento, áreas, acabados, normas aplicadas y especificaciones generales de una edificación.\n• Memoria de Cálculo: documento matemático y de ingeniería firmado por el especialista que detalla las cargas vivas y muertas, análisis sísmico, modelos estructurales, dimensionamiento de vigas, columnas y cimientos que avalan la seguridad estructural del plano.',
    tip: 'Ambas son requisitos legales obligatorios para ingresar la Manifestación de Construcción Tipo B o C ante la alcaldía.'
  },
  {
    id: 'fc-com-37',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 2,
    category: 'Bitácora de Laboratorio',
    front: '¿Cómo debe llevarse una Bitácora de Laboratorio de Control de Calidad en obra?',
    back: 'Libro encuadernado de hojas foliadas e inalterables donde se asienta al instante cada muestra de concreto, acero o suelo tomada en obra:\n• Fecha, hora y temperatura ambiental.\n• Procedencia del camión revolvedor (placa, remisión de planta, dosificación y revenimiento medido in situ).\n• Elemento colado (ej. losa sobre eje 4).\n• Identificación de cilindros o probetas ensayadas y carga de ruptura a compresión.\n• Firmas del laboratorista y del residente de supervisión.',
    tip: 'Los registros se hacen en el momento exacto de la prueba; nunca de memoria horas después.'
  },
  {
    id: 'fc-com-38',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 2,
    category: 'Foros Orales',
    front: '¿Cuáles son las diferencias entre una Mesa Redonda, un Panel de Discusión y un Simposio?',
    back: '• Mesa Redonda: varios expertos con puntos de vista u opiniones divergentes o contradictorias debaten sobre un tema polémico en igualdad de condiciones ante un moderador.\n• Panel de Discusión: un grupo de especialistas dialoga e intercambia ideas entre sí sobre un tema específico de manera informal y conversacional frente a un público que luego hace preguntas.\n• Simposio: serie de exposiciones orales sucesivas donde varios expertos abordan diferentes facetas o subtemas de un mismo problema desde sus respectivas especialidades sin debatir entre sí.',
    tip: 'El simposio es el formato ideal para congresos técnicos de arquitectura y construcción.'
  },
  {
    id: 'fc-com-39',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 2,
    category: 'Debate Académico',
    front: '¿Cuáles son las reglas de un Debate formal y qué función desempeña el Moderador?',
    back: 'Enfrentamiento dialéctico argumentativo entre dos posturas antagónicas (a favor y en contra) sobre una moción controvertida:\n• Reglas: tiempos estrictamente cronometrados por ronda, turnos de réplica y contrarréplica, respeto absoluto a la persona del oponente (prohibidos los insultos) y fundamentación de argumentos con pruebas comprobables.\n• Moderador: presenta el tema y participantes, asigna turnos de voz, controla el cronómetro con rigor, mantiene la disciplina y realiza una síntesis o balance final imparcial.',
    tip: 'En el debate se atacan los argumentos con datos, nunca a las personas (evitar falacias ad hominem).'
  },
  {
    id: 'fc-com-40',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 2,
    category: 'Habilidades de Oratoria',
    front: '¿Qué elementos de la modulación de la voz son cruciales para mantener la atención en una exposición oral?',
    back: '1. Volumen: proyectar la voz desde el diafragma para que llegue nítida hasta la última fila sin gritar.\n2. Tono o Inflexión: alternar tonos graves y agudos para evitar el tono monótono plano que induce al sueño.\n3. Ritmo y Velocidad: hablar a una velocidad moderada (~120-140 palabras por minuto), acelerando en momentos dinámicos y pausando en ideas clave.\n4. Pausas estratégicas: silencios de 2 a 3 segundos después de una idea fuerte para permitir la asimilación mental del público.\n5. Dicción y Vocalización: pronunciar todas las letras y consonantes de cada palabra con claridad.',
    tip: 'Respira con el diafragma (abdomen) para tener aire suficiente y no ahogarte al final de las oraciones.'
  },
  {
    id: 'fc-com-41',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 2,
    category: 'Lenguaje No Verbal',
    front: '¿Qué papel juega el lenguaje corporal y la comunicación kinésica durante una disertación técnica?',
    back: 'Representa más del 55% del impacto del mensaje en la audiencia:\n• Contacto visual: mirar a los ojos a distintos sectores del público (reparto visual en abanico) para conectar y transmitir seguridad (no mirar al piso, al techo o leer la pantalla).\n• Postura: erguida, hombros relajados, pies firmes sobre el piso transmitiendo aplomo.\n• Ademanes con las manos: gestos abiertos acompañando el discurso (evitar manos en los bolsillos, brazos cruzados o jugar con una pluma).\n• Desplazamiento: caminar con propósito por el estrado sin pasearse como león enjaulado.',
    tip: 'Tu cuerpo debe respaldar la autoridad de tus palabras técnicas.'
  },
  {
    id: 'fc-com-42',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 2,
    category: 'Manejo del Miedo Escénico',
    front: '¿Cómo se supera el pánico escénico y la ansiedad previa a una exposición oral técnica?',
    back: '1. Dominio absoluto del tema: la preparación profunda de los datos y el ensaye previo en voz alta es el mejor antídoto contra el nerviosismo.\n2. Respiración diafragmática profunda: inhalar en 4 segundos, retener en 4 y exhalar en 4 segundos (calma la frecuencia cardíaca y la adrenalina).\n3. Visualización positiva del éxito.\n4. Cambiar el foco mental: el centro de atención no eres tú, sino la valiosa información técnica que vas a compartir con tu audiencia.',
    tip: 'El nerviosismo inicial es normal; se disipa tras los primeros 60 segundos si comienzas con paso firme.'
  },
  {
    id: 'fc-com-43',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 2,
    category: 'Diseño de Diapositivas',
    front: '¿Cuáles son las reglas de oro para diseñar presentaciones visuales profesionales (Regla 6×6 y contraste)?',
    back: '• Regla 6×6: máximo 6 líneas de texto por diapositiva y máximo 6 a 8 palabras por línea (¡las diapositivas son apoyos visuales, no pergaminos de lectura para el orador!).\n• Alto Contraste visual: fondos claros con texto oscuro (o fondos oscuros con texto claro blanco/amarillo).\n• Tipografía limpia y legible: fuentes sans-serif (Arial, Roboto, Calibri) con tamaño mínimo de 28-32 puntos para títulos y 20-24 para texto.\n• Predominio de diagramas, fotografías de obra y gráficas sobre bloques de texto plano.',
    tip: '¡Nunca le des la espalda a tu público para leer textualmente una diapositiva llena de letras!'
  },
  {
    id: 'fc-com-44',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 2,
    category: 'El Ensayo Científico',
    front: '¿Qué es un Ensayo Académico y cuál es su estructura tripartita?',
    back: 'Es un texto en prosa reflexivo, analítico y argumentativo donde el autor explora, interpreta o evalúa un tema científico o técnico fijando una postura personal (tesis) fundamentada en fuentes teóricas sólidas.\nEstructura:\n1. Introducción (15-20%): contextualiza el tema, despierta el interés del lector y expone claramente la TESIS central.\n2. Desarrollo argumentativo (70%): expone argumentos lógicos, citas de respaldo, evidencia experimental y contraargumentos refutados.\n3. Conclusión (10-15%): sintetiza los hallazgos principales, reafirma la tesis y plantea interrogantes futuras.',
    tip: 'A diferencia de un reporte que solo describe hechos, el ensayo defiende una postura razonada propia.'
  },
  {
    id: 'fc-com-45',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 2,
    category: 'Argumentación Lógica',
    front: '¿Cómo se estructura un argumento sólido según el modelo de Stephen Toulmin?',
    back: 'Consta de 4 componentes clave:\n1. Aserción o Tesis: la afirmación central que se quiere defender (ej. "La madera laminada CLT es el material idóneo para rascacielos sustentables").\n2. Evidencia o Datos: los hechos empíricos que sustentan la aserción (ej. ensayes de resistencia al fuego y datos de captura de carbono).\n3. Garantía: el principio lógico o ley científica que conecta los datos con la aserción.\n4. Respaldo: citas de autores reconocidos, normas o estudios experimentales publicados que avalan la garantía.',
    tip: 'Un argumento sin evidencia es solo una opinión infundada.'
  },
  {
    id: 'fc-com-46',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 2,
    category: 'Falacias Argumentativas',
    front: '¿Cuáles son las falacias argumentativas más comunes que invalidan un debate técnico?',
    back: '• Falacia Ad Hominem: descalificar el argumento atacando a la persona que lo emite en vez de refutar su idea (ej. "su cálculo estructural está mal porque él es muy joven").\n• Falacia Ad Verecundiam (Apelación a la autoridad): sostener que algo es verdad solo porque lo dijo alguien famoso (ej. "el muro no caerá porque el maestro albañil más viejo de la colonia dice que aguanta").\n• Falacia del Hombre de Paja: caricaturizar o exagerar la postura del oponente para que sea fácil atacarla.\n• Falacia Post Hoc Ergo Propter Hoc: asumir que porque un evento ocurrió antes de otro, fue necesariamente su causa.',
    tip: 'Identificar falacias agudiza el pensamiento crítico y la honestidad científica.'
  },
  {
    id: 'fc-com-47',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 2,
    category: 'Reseña Crítica',
    front: '¿Qué es una Reseña Crítica de una publicación científica y en qué se diferencia del resumen?',
    back: '• El Resumen: se limita a reproducir fielmente las ideas del autor de forma abreviada y neutra sin emitir ninguna opinión propia.\n• La Reseña Crítica: sintetiza el contenido del libro o artículo PERO emite además un juicio de valor valorativo y fundamentado sobre sus fortalezas metodológicas, debilidades, aportaciones al campo técnico y vigencia conceptual.',
    tip: 'Requiere pensamiento crítico profundo y conocimiento del estado del arte.'
  },
  {
    id: 'fc-com-48',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 2,
    category: 'Conferencia Magistral',
    front: '¿Qué características distinguen a una Conferencia Magistral y cómo debe comportarse la audiencia?',
    back: 'Es una disertación oral solemne impartida por un científico o profesionista de amplísima trayectoria y renombre sobre un tema trascendente ante un auditorio amplio:\n• Duración típica: 45 a 60 minutos con sesión posterior de preguntas y respuestas.\n• Rol de la audiencia: silencio respetuoso, toma de notas activas y formulación de preguntas pertinentes, breves y contextualizadas durante el periodo de diálogo (no discursos personales encubiertos de preguntas).',
    tip: 'En el IPN las conferencias magistrales en los auditorios de Zacatecas o CECyT celebran el avance científico.'
  },
  {
    id: 'fc-com-49',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 2,
    category: 'Escucha Activa',
    front: '¿Qué es la Escucha Activa y por qué es indispensable para el trabajo en equipo de ingeniería?',
    back: 'Es la habilidad psicológica de concentrarse de manera plena e intencional no solo en oír los sonidos que emite el interlocutor, sino en comprender el significado cabal de su mensaje verbal y no verbal, sin interrumpir prematuramente ni formular respuestas mentales defensivas mientras la otra persona habla.\nSe valida asintiendo con la cabeza y parafraseando lo entendido ("Si te entiendo bien, sugieres reforzar el armado del eje B...").',
    tip: 'Evita fallas catastróficas en la interpretación de especificaciones en juntas de obra.'
  },
  {
    id: 'fc-com-50',
    subjectId: 'comunicacion-cientifica',
    moduleIndex: 2,
    category: 'Ética de la Comunicación',
    front: '¿Cuál es la responsabilidad ética del politécnico en la comunicación de riesgos y desastres sísmicos?',
    back: 'Comunicar con veracidad, objetividad, sustento técnico riguroso y serenidad:\n• Combatir rumores alarmistas y noticias falsas (fake news) en redes sociales tras un sismo.\n• Emitir dictámenes de seguridad estructural sustentados exclusivamente en inspecciones visuales profundas y pruebas de laboratorio reglamentarias.\n• Velar primordialmente por la preservación de la vida humana y la tranquilidad informada de la población civil.',
    tip: 'El conocimiento técnico es un poder que conlleva la responsabilidad ética de servir con la verdad a la patria.'
  }
];

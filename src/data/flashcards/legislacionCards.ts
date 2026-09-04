import { Flashcard } from '../../types';

export const LEGISLACION_FLASHCARDS: Flashcard[] = [
  // --- PARCIAL 1: MARCO LEGAL, DESARROLLO URBANO, ALINEAMIENTO Y OCHAVO (17 TARJETAS) ---
  {
    id: 'fc-leg-01',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 0,
    category: 'Marco Constitucional',
    front: '¿Qué artículos de la Constitución Política Mexicana fundamentan el marco jurídico de la construcción y el desarrollo urbano?',
    back: '• Artículo 4°: derecho humano fundamental a disfrutar de una vivienda digna y decorosa, y a un medio ambiente sano.\n• Artículo 27°: la propiedad originaria de tierras y aguas corresponde a la Nación, la cual tiene derecho de imponer a la propiedad privada las modalidades que dicte el interés público.\n• Artículo 115°: facultades de los municipios y alcaldías para formular y administrar planes de desarrollo urbano, regular el uso de suelo y otorgar licencias y permisos de construcción.',
    tip: 'El derecho de propiedad privada no es absoluto: está subordinado al orden público y a la planeación urbana.'
  },
  {
    id: 'fc-leg-02',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 0,
    category: 'Desarrollo Urbano',
    front: '¿Qué es el Plan General de Desarrollo Urbano (PGDU) y los Programas Delegacionales/Parciales en la CDMX?',
    back: 'Son los instrumentos jurídicos y de planeación que ordenan el crecimiento territorial de la ciudad, estableciendo la zonificación del suelo, los usos permitidos, las densidades habitacionales, las alturas máximas, las áreas de conservación ecológica y la reserva de infraestructura pública.',
    tip: 'Ninguna construcción puede autorizarse si contraviene el Programa de Desarrollo Urbano de su alcaldía.'
  },
  {
    id: 'fc-leg-03',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 0,
    category: 'Zonificación y Uso de Suelo',
    front: '¿Qué significan las nomenclaturas de uso de suelo H, HC, HM, E y EA en la zonificación urbana?',
    back: '• H: Habitacional unifamiliar o plurifamiliar.\n• HC: Habitacional con Comercio en planta baja.\n• HM: Habitacional Mixto (vivienda combinada con oficinas y servicios).\n• E: Equipamiento público o privado (escuelas, hospitales, templos, bibliotecas).\n• EA: Espacio Abierto y áreas verdes protegidas.',
    tip: 'Una zonificación H/3/20 significa: Uso Habitacional, máximo 3 niveles de altura permitidos y mínimo 20% de área libre de absorción.'
  },
  {
    id: 'fc-leg-04',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 0,
    category: 'Indicadores Urbanísticos',
    front: '¿Qué es el Coeficiente de Ocupación del Suelo (COS) y cómo se calcula?',
    back: 'COS = Área de Desplante de la Edificación / Superficie Total del Terreno\n\nRepresenta el porcentaje máximo de la superficie del lote que puede ser cubierto o techado por la edificación en la planta baja, dejando el resto como área libre permeable.',
    tip: 'Si un terreno mide 200 m² y la norma exige 25% de área libre, el COS máximo es 0.75 (75%), pudiendo desplantar hasta 150 m².',
    formula: 'COS = Área_desplante / Superficie_lote'
  },
  {
    id: 'fc-leg-05',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 0,
    category: 'Indicadores Urbanísticos',
    front: '¿Qué es el Coeficiente de Utilización del Suelo (CUS) y cómo se calcula?',
    back: 'CUS = Superficie Total Construida (suma de todos los niveles) / Superficie Total del Terreno\n\nIndica la cantidad máxima total de metros cuadrados que se pueden construir en todos los pisos de la edificación respecto al tamaño del predio.',
    tip: 'Si un predio de 300 m² tiene un CUS de 2.4, se pueden construir como máximo: 300 × 2.4 = 720 m² de construcción cubierta.',
    formula: 'CUS = M²_totales_construidos / Superficie_lote'
  },
  {
    id: 'fc-leg-06',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 0,
    category: 'Área Libre Permeable',
    front: '¿Por qué la normatividad de CDMX exige un porcentaje mínimo de Área Libre (típicamente 20% a 30%) y qué condición debe cumplir?',
    back: 'Para recargar los mantos acuíferos del Valle de México mediante la infiltración natural de agua de lluvia, reducir el efecto de isla de calor y proveer iluminación y ventilación natural.\nCondición obligatoria: al menos el 50% de esta área libre debe dejarse completamente permeable en tierra natural o jardín (sin pavimento impermeable ni losa de sótano abajo).',
    tip: 'Se permite el uso de adocreto permeable o gravilla con geotextil en áreas vehiculares del área libre.'
  },
  {
    id: 'fc-leg-07',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 0,
    category: 'Alineamiento y Número Oficial',
    front: '¿Qué es la Constancia de Alineamiento y Número Oficial y ante qué autoridad se tramita?',
    back: 'Es el documento oficial emitido por la Alcaldía (Ventanilla Única de Desarrollo Urbano) que delimita formalmente el lindero frontal del predio con la vía pública (calle o banqueta) y le asigna el número oficial catastral correspondiente.\nEs el requisito inicial indispensable antes de elaborar el proyecto ejecutivo y manifestar la obra.',
    tip: 'Tiene una vigencia de 180 días naturales contados a partir de su expedición.'
  },
  {
    id: 'fc-leg-08',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 0,
    category: 'Alineamiento',
    front: '¿Qué ocurre si la Constancia de Alineamiento indica una "afectación por ensanchamiento vial"?',
    back: 'Significa que la vía pública proyectada por el plan de desarrollo urbano es más ancha que la calle actual, por lo que el lindero oficial de alineamiento queda metido dentro del terreno privado.\nLa edificación debe desplantarse obligatoriamente respetando el nuevo alineamiento hacia adentro, quedando esa franja libre como restricción o futura cesión vial.',
    tip: '¡NUNCA construyas sobre la franja de afectación vial señalada en el alineamiento; la alcaldía no otorgará uso y ocupación y puede ordenar la demolición!'
  },
  {
    id: 'fc-leg-09',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 0,
    category: 'Ochavo Reglamentario',
    front: '¿Qué es el ochavo en predios de esquina y cuáles son sus dimensiones normativas?',
    back: 'Es el chaflán o corte oblicuo a 45° que se debe realizar en la esquina de los predios ubicados en intersección de dos vías públicas.\nDimensiones normativas en CDMX: debe medir al menos 2.50 a 3.00 metros de longitud sobre la línea de ochavo (o dejar una catenaria de radio equivalente).\nObjetivo: garantizar la visibilidad de los conductores vehiculares y ampliar el radio de giro peatonal.',
    tip: 'Las construcciones en esquina no pueden tener aristas vivas a 90° en la planta baja colindante con banqueta.'
  },
  {
    id: 'fc-leg-10',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 0,
    category: 'Escritura y Título de Propiedad',
    front: '¿Por qué es indispensable la Escritura Pública inscrita en el RPP para tramitar permisos de obra?',
    back: 'La Escritura Pública pasada ante la fe de Notario Público e inscrita en el Registro Público de la Propiedad y de Comercio (RPPC) es el único instrumento jurídico que acredita fehacientemente la legítima propiedad del inmueble y su libertad de gravámenes, facultando al propietario para solicitar licencias de construcción.',
    tip: 'Un contrato privado de compraventa o una promesa no son suficientes ante la alcaldía.'
  },
  {
    id: 'fc-leg-11',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 0,
    category: 'Catastro y Predial',
    front: '¿Qué es la Boleta Predial y la Clave Catastral de un inmueble?',
    back: 'Es el registro oficial tributario de la Tesorería de la CDMX. La Clave Catastral identifica geográficamente el predio por región, manzana y lote (ej. 054_128_14). La boleta predial al corriente de pago demuestra que el predio está registrado fiscalmente y no tiene adeudos de impuestos inmobiliarios.',
    tip: 'Al tramitar la alineación, la clave catastral debe coincidir exactamente con la escritura.'
  },
  {
    id: 'fc-leg-12',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 0,
    category: 'Servidumbres de Paso',
    front: '¿Qué es una servidumbre legal de paso y cómo afecta al proyecto constructivo?',
    back: 'Es un gravamen real impuesto sobre un predio (predio sirviente) para dar acceso a la vía pública a otro predio que carece de salida propia (predio dominante).\nEn el predio sirviente no se puede edificar ningún elemento permanente que obstruya el ancho del camino de servidumbre establecido contractualmente.',
    tip: 'El Código Civil para el DF regula las servidumbres legales de paso, acueducto y desagüe.'
  },
  {
    id: 'fc-leg-13',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 0,
    category: 'Factibilidad de Servicios',
    front: '¿Qué es el Dictamen de Factibilidad de Servicios de Agua y Drenaje y qué organismo lo emite en CDMX?',
    back: 'Es el documento técnico que certifica que las redes públicas municipales tienen capacidad hidráulica suficiente para dotar de agua potable y desalojar las aguas residuales y pluviales del proyecto.\nEn la CDMX lo emite el Sistema de Aguas de la Ciudad de México (SACMEX).',
    tip: 'Obligatorio en edificaciones medianas y grandes plurifamiliares (Manifestaciones Tipo B y C).'
  },
  {
    id: 'fc-leg-14',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 0,
    category: 'Impacto Ambiental',
    front: '¿Qué es la Declaratoria de Cumplimiento Ambiental (DCA) o Manifestación de Impacto Ambiental (MIA)?',
    back: 'Es la autorización que emite la Secretaría del Medio Ambiente (SEDEMA) tras evaluar las afectaciones que la obra generará en el entorno natural (derribo de arbolado, consumo de agua, emisión de ruido y polvo, y manejo de residuos de la construcción RCD).\nDetermina las medidas de mitigación y compensación ecológica obligatorias.',
    tip: 'Construir sin resolución ambiental favorable amerita clausura inmediata y multas millonarias.'
  },
  {
    id: 'fc-leg-15',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 0,
    category: 'Zonas Patrimoniales',
    front: '¿Qué dependencias federales deben autorizar obras en zonas de monumentos históricos o artísticos?',
    back: '• INAH (Instituto Nacional de Antropología e Historia): para inmuebles construidos del siglo XVI al siglo XIX (hasta el año 1900) y zonas arqueológicas.\n• INBAL (Instituto Nacional de Bellas Artes y Literatura): para arquitectura relevante del siglo XX y XXI (a partir de 1900 con valor artístico).\n• Dirección de Patrimonio Cultural Urbano de SEDUVI en CDMX.',
    tip: 'Incluso para pintar la fachada o cambiar una ventana en el Centro Histórico de la CDMX se requiere permiso previo del INAH.'
  },
  {
    id: 'fc-leg-16',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 0,
    category: 'Restricciones de Colindancia',
    front: '¿Cuáles son las restricciones del Código Civil sobre abrir ventanas hacia predios vecinos?',
    back: '• Vistas directas (ventanas de frente a la colindancia): no pueden abrirse a menos de 2.00 metros de distancia del lindero común.\n• Vistas de costado u oblicuas: no pueden abrirse a menos de 60 centímetros del lindero.\nSi el muro está exactamente sobre el lindero de colindancia, debe ser completamente ciego (sin ventanas ni balcones).',
    tip: 'Previene invasiones a la privacidad acústica y visual entre predios colindantes.'
  },
  {
    id: 'fc-leg-17',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 0,
    category: 'Voladizos en Vía Pública',
    front: '¿Qué dimensiones máximas autoriza el RCDF para balcones y volados sobre la vía pública?',
    back: 'Los balcones o voladizos cerrados sobre la vía pública:\n• Solo se permiten a partir del primer piso con una altura libre mínima de 2.50 m sobre el nivel de la banqueta.\n• Pueden volar como máximo 1.00 metro de la línea de alineamiento, sin exceder nunca de la mitad del ancho de la banqueta.\n• Deben remeterse al menos 1.00 metro de las colindancias laterales para no invadir al vecino.',
    tip: 'En banquetas menores a 1.50 m de ancho no se permiten voladizos.'
  },

  // --- PARCIAL 2: RCDF, DRO, CORRESPONSABLES, BITÁCORA Y MANIFESTACIONES (17 TARJETAS) ---
  {
    id: 'fc-leg-18',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 1,
    category: 'Reglamento de Construcciones',
    front: '¿Cuál es el objeto del Reglamento de Construcciones para el Distrito Federal (RCDF)?',
    back: 'Establecer las disposiciones legales y técnicas mínimas que deben regir en el diseño arquitectónico, cálculo estructural, ejecución de obra, uso, conservación y demolición de edificaciones en la CDMX, con el fin primordial de garantizar la seguridad de la vida humana, la habitabilidad y la sustentabilidad.',
    tip: 'Se complementa operativamente con las Normas Técnicas Complementarias (NTC).'
  },
  {
    id: 'fc-leg-19',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 1,
    category: 'Director Responsable de Obra',
    front: '¿Quién es el Director Responsable de Obra (D.R.O.) y cuáles son los requisitos para obtener su registro?',
    back: 'Es la persona física auxiliar de la administración pública con cédula profesional de Arquitecto, Ingeniero Civil, Ingeniero Militar o Ingeniero Arquitecto (egresado del IPN), que asume la responsabilidad técnica y jurídica de que una edificación cumpla con el RCDF y sus NTC.\nRequisitos:\n1. Cédula profesional legalmente expedida.\n2. Mínimo 5 años de experiencia comprobable en obra.\n3. Aprobar el examen de conocimientos ante la CADRO.\n4. Estar colegiado en el respectivo Colegio Profesional.',
    tip: 'El D.R.O. firma y avala los planos ejecutivos, la memoria de cálculo y la manifestación de obra.'
  },
  {
    id: 'fc-leg-20',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 1,
    category: 'Corresponsables de Obra',
    front: '¿Cuáles son las 3 figuras de Corresponsables de Obra y en qué campo técnico actúa cada una?',
    back: '1. Corresponsable en Seguridad Estructural (CSE): Ingeniero Civil especializado que responde por la memoria de cálculo estructural, análisis sísmico, cimentaciones y comportamiento estructural.\n2. Corresponsable en Diseño Urbano y Arquitectónico (CDUA): Arquitecto que responde por el cumplimiento de uso de suelo, dimensiones de locales, accesibilidad y patrimonio.\n3. Corresponsable en Instalaciones (CI): Ingeniero Mecánico, Eléctrico o Sanitario que responde por instalaciones eléctricas, contra incendios, elevadores y redes hidrosanitarias.',
    tip: 'Son obligatorios en edificaciones de gran tamaño (Grupo A y Subgrupo B1).'
  },
  {
    id: 'fc-leg-21',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 1,
    category: 'Clasificación de Edificaciones',
    front: '¿Cómo clasifica el RCDF a las edificaciones según su riesgo e importancia estructural?',
    back: '• GRUPO A: Edificaciones esenciales cuyo colapso o daño provocaría un desastre social extremo o que deben seguir operando tras un gran sismo (hospitales, escuelas, centrales eléctricas, estaciones de bomberos, aeropuertos, estadios, salas de espectáculos).\n• GRUPO B: Edificaciones comunes destinadas a vivienda, oficinas y comercios.\n  - Subgrupo B1: más de 30 m de altura o más de 6,000 m² de construcción.\n  - Subgrupo B2: vivienda unifamiliar y construcciones habituales menores a 30 m de altura y menores a 6,000 m².',
    tip: 'Las construcciones del Grupo A se calculan con factores de seguridad sísmica y de carga mucho más altos.'
  },
  {
    id: 'fc-leg-22',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 1,
    category: 'Bitácora de Obra',
    front: '¿Qué es la Bitácora de Obra y cuál es su valor jurídico?',
    back: 'Es el instrumento técnico-legal oficial de orden público que registra el desarrollo cronológico de la obra desde el primer día hasta la conclusión.\nEn ella asientan sus firmas el D.R.O., los Corresponsables y el Constructor para validar colados de concreto, cambios al proyecto, pruebas de laboratorio y órdenes técnicas.\nTiene valor de prueba plena ante tribunales judiciales en caso de controversias, siniestros o derrumbes.',
    tip: 'En la CDMX actualmente se lleva en la plataforma digital oficial (Bitácora Electrónica de Obra).'
  },
  {
    id: 'fc-leg-23',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 1,
    category: 'Bitácora de Obra',
    front: '¿Cuáles son las reglas para redactar y validar notas en la bitácora de obra?',
    back: '1. Hojas foliadas foliadas de forma consecutiva e inalterable.\n2. La primera nota es la Nota de Apertura firmada por el D.R.O. y la alcaldía.\n3. Las notas se redactan con tinta indeleble (o firma electrónica e.firma en digital), sin tachaduras ni enmendaduras.\n4. Cada colado estructural debe tener nota de autorización previa del D.R.O. tras revisar el armado de varillas.\n5. Las notas cerradas llevan firma del D.R.O. y del residente de obra.',
    tip: 'Colar una losa o cimiento sin previa nota de autorización del D.R.O. en bitácora es causal de clausura de la obra.'
  },
  {
    id: 'fc-leg-24',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 1,
    category: 'Manifestación de Construcción Tipo A',
    front: '¿Qué obras califican para una Manifestación de Construcción Tipo A en la CDMX?',
    back: '1. Construcción de una sola vivienda unifamiliar de hasta 120 m² en predio con servicios.\n2. Ampliación de vivienda unifamiliar hasta 120 m².\n3. Construcción de bardas perimetrales de hasta 2.50 m de altura.\n4. Excavaciones o zanjas de hasta 1.00 metro de profundidad.\n5. Instalación de cisternas residenciales de hasta 8 m³.',
    tip: 'Es de registro inmediato: se entrega completa la documentación en ventanilla y se puede iniciar la obra al día hábil siguiente.'
  },
  {
    id: 'fc-leg-25',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 1,
    category: 'Manifestación de Construcción Tipo B',
    front: '¿Qué obras requieren Manifestación de Construcción Tipo B?',
    back: 'Edificaciones de uso no habitacional o mixto de hasta 5,000 m² de construcción, o de uso habitacional plurifamiliar (edificios de departamentos) de hasta 5,000 m² o hasta 5 niveles de altura (o hasta 12 m de altura sobre nivel de banqueta), que cuenten con estudio de mecánica de suelos y proyecto avalado por D.R.O.',
    tip: 'La alcaldía tiene un plazo de revisión para verificar la autenticidad técnica antes de ordenar visitas de verificación.'
  },
  {
    id: 'fc-leg-26',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 1,
    category: 'Manifestación de Construcción Tipo C',
    front: '¿Qué obras requieren Manifestación de Construcción Tipo C?',
    back: 'Las obras de gran envergadura urbana:\n• Edificaciones de más de 5,000 m² de construcción.\n• Edificaciones de más de 5 niveles o más de 12 metros de altura.\n• Construcciones con más de 2 sótanos de estacionamiento subterráneo.\n• Edificaciones del Grupo A (escuelas, hospitales, centros comerciales, salas de cine).\nRequiere Dictamen de Impacto Urbano, Estudio de Mecánica de Suelos profundo, D.R.O. y los tres Corresponsables (CSE, CDUA, CI).',
    tip: 'Es el trámite más complejo y fiscalizado del desarrollo inmobiliario.'
  },
  {
    id: 'fc-leg-27',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 1,
    category: 'Licencia de Construcción Especial',
    front: '¿Cuándo se requiere tramitar una Licencia de Construcción Especial en lugar de una manifestación?',
    back: 'Para obras específicas que involucran afectaciones a la vía pública o riesgos particulares:\n1. Demoliciones totales o parciales de edificaciones existentes.\n2. Instalación de tapiales provisionales que invadan banqueta o arroyo vehicular.\n3. Obras en inmuebles catalogados por INAH o INBAL con valor patrimonial.\n4. Excavaciones mayores a 1.00 m de profundidad o cortes de talud en lomeríos.\n5. Instalaciones de torres de telecomunicaciones y anuncios espectaculares.',
    tip: 'A diferencia de las manifestaciones que son avisos de buena fe, la Licencia Especial REQUIERE autorización previa expresa y por escrito de la alcaldía antes de mover un solo tabique.'
  },
  {
    id: 'fc-leg-28',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 1,
    category: 'Obras sin Licencia',
    front: '¿Qué trabajos menores se pueden ejecutar sin necesidad de registrar Manifestación ni Licencia?',
    back: 'Mantenimiento y reparaciones locativas menores que no alteran la estructura ni la fachada:\n• Reposición y aplanado de yeso o mortero interior.\n• Pintura interior y colocación de recubrimientos de piso (loseta, madera).\n• Reparación o cambio de tuberías de fontanería y cableado eléctrico dentro de los muros existentes.\n• Cambio de muebles de baño y tarjas de cocina.\n• Impermeabilización de azoteas (sin sobrecargar con rellenos masivos).',
    tip: 'Si vas a tirar un muro, cambiar trabes o abrir vanos en fachada, ¡SÍ requieres manifestación obligatoria!'
  },
  {
    id: 'fc-leg-29',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 1,
    category: 'Responsabilidad Profesional',
    front: '¿Qué responsabilidades asume el D.R.O. y el Constructor ante la ley en caso de vicios ocultos o colapso?',
    back: '• Responsabilidad Administrativa: suspensión o cancelación definitiva del registro de D.R.O. y multas económicas.\n• Responsabilidad Civil: indemnización por daños y perjuicios a propietarios y terceros durante un plazo de hasta 10 años por vicios de construcción o mala calidad de materiales (Código Civil).\n• Responsabilidad Penal: prisión privativa de la libertad por homicidio imprudencial o culposo si la estructura colapsa por negligencia técnica, dolo o violación al reglamento.',
    tip: 'Tras los sismos de 1985 y 2017 varios D.R.O. fueron procesados penalmente por omisiones en la supervisión.'
  },
  {
    id: 'fc-leg-30',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 1,
    category: 'Vigencia de Manifestaciones',
    front: '¿Cuál es la vigencia de una Manifestación de Construcción y cómo se prorroga?',
    back: '• Tipo A: 1 año de vigencia.\n• Tipo B: 1 a 2 años (según el volumen de obra).\n• Tipo C: hasta 3 años de vigencia.\nSi la obra no concluye en el plazo original, el propietario debe solicitar la PRÓRROGA de la manifestación al menos 15 días hábiles antes de su vencimiento, justificando el avance físico.',
    tip: 'Continuar una obra con la manifestación vencida equivale jurídicamente a construir sin permiso (clausura).'
  },
  {
    id: 'fc-leg-31',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 1,
    category: 'Aviso de Terminación de Obra',
    front: '¿Qué es el Aviso de Terminación de Obra y qué documento oficial emite la Alcaldía como respuesta?',
    back: 'Es la notificación formal firmada por el propietario y el D.R.O. ante la alcaldía informando que la edificación ha concluido totalmente conforme a los planos y licencias autorizados.\nLa Alcaldía realiza una inspección final y expide la AUTORIZACIÓN DE USO Y OCUPACIÓN, que declara al inmueble habitable, legalmente terminado y listo para escriturarse de forma individual o habitarse.',
    tip: 'Sin la Autorización de Uso y Ocupación no se pueden contratar legalmente los servicios definitivos de agua y luz ni vender departamentos.'
  },
  {
    id: 'fc-leg-32',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 1,
    category: 'Inspección y Verificación',
    front: '¿Qué es una orden de visita de verificación del INVEA y qué derechos tiene el responsable de obra?',
    back: 'Es el acto administrativo mediante el cual inspectores del Instituto de Verificación Administrativa (INVEA) se presentan en la obra para corroborar el cumplimiento de la normatividad.\nEl personal de obra tiene derecho a:\n1. Exigir la orden de visita por escrito con firma original y datos del predio.\n2. Identificación oficial con gafete del verificador.\n3. Nombrar dos testigos durante el recorrido.\n4. Asentar observaciones o inconformidades en el Acta de Visita circunstanciada.',
    tip: 'Debes tener en la caseta de obra una copia visible de los planos sellados, alineamiento y carátula de manifestación.'
  },
  {
    id: 'fc-leg-33',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 1,
    category: 'Medidas de Seguridad',
    front: '¿Qué medidas cautelares puede imponer la autoridad en una obra irregular?',
    back: '1. Suspensión temporal de actividades.\n2. Clausura total o parcial de la obra mediante sellos oficiales.\n3. Aseguramiento de maquinaria y herramientas.\n4. Demolición de lo construido indebidamente a costa del propietario.\n5. Revocación de la manifestación de construcción.',
    tip: 'Quebrantar o tapar un sello oficial de clausura es un delito penal federal con pena de cárcel.'
  },
  {
    id: 'fc-leg-34',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 1,
    category: 'Seguridad Estructural',
    front: '¿Qué es la Constancia de Seguridad Estructural (CSE) en edificios del Grupo A y Subgrupo B1?',
    back: 'Es el documento técnico oficial firmado por un Corresponsable en Seguridad Estructural (CSE) nivel 2 que certifica que el inmueble cumple con los requisitos de resistencia sísmica y de cargas vivas del RCDF.\nDebe renovarse obligatoriamente cada 5 años o inmediatamente después de haber ocurrido un sismo de magnitud mayor a 7.0.',
    tip: 'Indispensable para que sigan operando escuelas privadas y edificios de oficinas en CDMX.'
  },

  // --- PARCIAL 3: NORMAS DE PROYECTO ARQUITECTÓNICO (DIMENSIONES MÍNIMAS) (16 TARJETAS) ---
  {
    id: 'fc-leg-35',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 2,
    category: 'Dimensiones Mínimas',
    front: '¿Cuál es la altura libre mínima de entrepiso permitida en locales habitables (recámaras y estancias)?',
    back: 'La altura libre mínima reglamentaria medida de piso terminado a lecho bajo de losa o plafón es de:\n• 2.30 a 2.40 metros en climas templados (como la Ciudad de México).\n• 2.70 metros en climas cálidos y húmedos (para permitir estratificación del calor y ventilación cruzada).',
    tip: 'En sótanos de estacionamiento se permite una altura libre mínima de 2.20 m (y 2.10 m bajo trabes).'
  },
  {
    id: 'fc-leg-36',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 2,
    category: 'Recámaras',
    front: '¿Cuáles son las dimensiones mínimas reglamentarias para recámaras en vivienda de interés social?',
    back: '• Recámara Principal: área mínima neta de 7.00 m², con una dimensión menor de 2.40 metros libres.\n• Recámaras Adicionales: área mínima neta de 6.00 m², con una dimensión menor de 2.00 metros libres.\nAmbas deben contar obligatoriamente con iluminación y ventilación natural directa a la calle o a patio reglamentario.',
    tip: 'Las medidas se calculan entre paños interiores libres de aplanados, sin contar clósets empotrados.'
  },
  {
    id: 'fc-leg-37',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 2,
    category: 'Cocinas y Baños',
    front: '¿Cuáles son las dimensiones mínimas de una cocina y de un baño completo en casa habitación?',
    back: '• Cocina: área mínima de 3.00 m² con lado menor de 1.50 m libres.\n• Baño completo (inodoro, lavabo y regadera): área mínima de 2.00 m² con lado menor de 1.10 m a 1.20 m libres.\n• Regadera: área mínima de 0.90 × 0.90 m (mínimo 0.80 × 0.80 m interior) con cancelería impermeable y altura de azulejo mínima de 2.10 m.',
    tip: 'La regadera debe contar con un desnivel o sardinel de al menos 5 cm para contener el agua hacia la coladera.'
  },
  {
    id: 'fc-leg-38',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 2,
    category: 'Circulaciones y Pasillos',
    front: '¿Cuál es el ancho libre mínimo reglamentario para pasillos interiores y puertas en una vivienda?',
    back: '• Pasillos interiores de casa habitación unifamiliar: mínimo 0.90 metros libres de ancho.\n• Pasillos comunes en edificios plurifamiliares: mínimo 1.20 metros libres.\n• Puerta principal de acceso: mínimo 0.90 m de ancho libre (para permitir paso de personas en silla de ruedas o muebles).\n• Puertas de recámaras: mínimo 0.80 m de ancho libre.\n• Puertas de baños: mínimo 0.70 m de ancho libre.',
    tip: 'La altura libre de toda puerta debe ser de mínimo 2.10 metros.'
  },
  {
    id: 'fc-leg-39',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 2,
    category: 'Escaleras Reglamentarias',
    front: '¿Cuáles son las dimensiones reglamentarias para escaleras de casa habitación unifamiliar (NTC)?',
    back: '• Ancho libre mínimo: 0.90 metros.\n• Huella (H): mínimo 25 cm (medida horizontal donde apoya el pie).\n• Peralte (P): máximo 18 cm y mínimo 10 cm (altura vertical del escalón).\n• Regla ergonómica de Blondel: 2P + H = 63 a 65 cm (ej. 2(17.5) + 28 = 63 cm).\n• Descanso intermedio: obligatorio con ancho igual al de la escalera cada 15 escalones como máximo.',
    tip: 'Las escaleras de caracol solo se permiten como acceso secundario de servicio o azoteas.'
  },
  {
    id: 'fc-leg-40',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 2,
    category: 'Barandales y Protección',
    front: '¿Cuál es la altura mínima reglamentaria para barandales y pasamanos de escaleras y balcones?',
    back: 'La altura vertical mínima del pasamanos debe ser de 90 cm medida desde la arista del escalón (nariz) o nivel de piso.\nEn balcones a doble altura o terrazas superiores a 10 m de altura se exige barandal de 1.00 m a 1.10 m de altura.\nLos barrotes verticales no deben tener separación mayor a 10 cm para evitar que la cabeza de un niño quede atrapada.',
    tip: 'No se permiten barandales con travesaños horizontales tipo "escalerilla" que faciliten que un menor trepe.'
  },
  {
    id: 'fc-leg-41',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 2,
    category: 'Iluminación Natural',
    front: '¿Cuál es el área mínima de ventanas reglamentaria para iluminación natural de locales habitables?',
    back: 'El área neta de cristal transparente de las ventanas debe ser de al menos el 20% (1/5 parte) de la superficie total del piso del local en recámaras y estancias:\nÁrea_ventana_iluminación ≥ Área_piso / 5.',
    tip: 'Si una recámara mide 15 m², su ventana debe tener al menos 3.00 m² de superficie traslúcida.'
  },
  {
    id: 'fc-leg-42',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 2,
    category: 'Ventilación Natural',
    front: '¿Cuál es el área mínima reglamentaria de ventilación natural en locales habitables?',
    back: 'El área efectiva de ventilación (hojas abribles o corredizas que comunican con el aire exterior) debe ser de al menos 1/3 (33%) del área mínima de iluminación calculada (lo que equivale aproximadamente al 5% o 6.6% del área total del piso del local).',
    tip: 'En baños se permite ventilación por extracción mecánica forzada si no hay ventana exterior directa (mínimo 6 renovaciones de aire por hora).'
  },
  {
    id: 'fc-leg-43',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 2,
    category: 'Patios de Iluminación',
    front: '¿Cuáles son las dimensiones mínimas para patios de iluminación y ventilación (cubos de luz)?',
    back: 'En casa habitación de hasta 2 niveles (hasta 8 m de altura):\n• Locales habitables (recámaras, salas): dimensión menor mínima del patio de 2.50 metros libres.\n• Locales de servicio (baños, cocinas, cuartos de lavado): dimensión menor mínima de 2.00 metros libres.\nEn edificios de más niveles, la dimensión mínima del cubo aumenta proporcionalmente en función de la altura del edificio (h/3 o h/4).',
    tip: 'Queda estrictamente prohibido techar o tapar los cubos de luz con losas macizas o láminas no traslúcidas.'
  },
  {
    id: 'fc-leg-44',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 2,
    category: 'Estacionamientos',
    front: '¿Cuáles son las dimensiones mínimas normativas para cajones de estacionamiento en CDMX?',
    back: '• Autos grandes y medianos: 2.50 metros de ancho por 5.00 metros de largo libres.\n• Autos pequeños o compactos: 2.20 metros de ancho por 4.20 o 5.00 metros de largo.\n• Pasillo de maniobra y circulación a 90°: ancho libre mínimo de 5.00 metros.\n• Pendiente máxima de rampas de estacionamiento: 15% (con tramos de transición de 6% al inicio y fin).',
    tip: 'Los cajones para personas con discapacidad deben medir al menos 3.80 × 5.00 m (incluyendo franja peatonal de descenso de 1.20 m).'
  },
  {
    id: 'fc-leg-45',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 2,
    category: 'Rampas de Accesibilidad',
    front: '¿Cuáles son las normas de diseño para rampas peatonales y de accesibilidad universal?',
    back: '• Pendiente máxima: 6% a 8% (máximo 8% en tramos cortos no mayores a 6 m de longitud).\n• Ancho libre mínimo: 1.20 metros.\n• Longitud máxima sin descanso: 6.00 metros; entre tramos debe haber descansos horizontales planos de al menos 1.50 m de longitud.\n• Pasamanos dobles obligatorios a ambos lados a alturas de 75 cm (para niños/sillas de ruedas) y 90 cm.',
    tip: 'El piso de la rampa debe ser estrictamente antiderrapante tanto en seco como en mojado.'
  },
  {
    id: 'fc-leg-46',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 2,
    category: 'Seguridad contra Incendios',
    front: '¿Qué exige el RCDF en materia de prevención y combate de incendios en vivienda y comercios?',
    back: '• Viviendas plurifamiliares: extinguidores de polvo químico seco (ABC) de al menos 4.5 kg colocados en áreas comunes cada 20 m de recorrido, detectores de humo a base de ionización en cada departamento.\n• Edificios de más de 4 niveles: escalera de emergencia presurizada o exterior no ventilada a través del cubo principal, cisterna con reserva de agua exclusiva contra incendios y red de hidrantes.',
    tip: 'Las puertas de salidas de emergencia deben abrir siempre hacia afuera en el sentido de la evacuación y contar con barra antipánico.'
  },
  {
    id: 'fc-leg-47',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 2,
    category: 'Instalaciones Hidráulicas',
    front: '¿Cuál es la dotación de agua potable mínima obligatoria y capacidad de almacenamiento en CDMX?',
    back: '• Dotación diaria: mínimo 150 a 200 litros por habitante al día en vivienda unifamiliar/plurifamiliar.\n• Capacidad de almacenamiento: cisterna y tinacos deben almacenar el volumen equivalente a por lo menos 2 DÍAS de consumo promedio para asegurar la habitabilidad en días de tandeo o desabasto.\n• Cisterna: debe ubicarse a no menos de 3 metros de cualquier tubería de drenaje o fosa séptica para evitar contaminación biológica.',
    tip: 'Las cisternas de agua potable deben tener recubrimiento impermeable liso de fácil limpieza y tapa hermética.'
  },
  {
    id: 'fc-leg-48',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 2,
    category: 'Instalaciones Sanitarias',
    front: '¿Cuáles son las pendientes mínimas y diámetros normativos para tuberías de drenaje sanitario en vivienda?',
    back: '• Pendiente mínima de tuberías de drenaje horizontal: 2.0% (mínimo 1.5% en tubos de gran diámetro) para garantizar la velocidad de autolimpieza de sólidos.\n• Desagüe de inodoros (WC): tubería de PVC sanitario de Ø 100 mm (4").\n• Lavabos y regaderas: tubería de Ø 50 mm (2").\n• Bajadas de aguas negras (BAN): tubo vertical de Ø 100 mm ventilado hacia la azotea con terminal atmosférica.',
    tip: 'Si la pendiente es menor a 1%, el agua se escurre pero los sólidos se sedimentan tapando el caño.'
  },
  {
    id: 'fc-leg-49',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 2,
    category: 'Instalaciones Eléctricas',
    front: '¿Qué norma rige las instalaciones eléctricas y qué dispositivo de seguridad es obligatorio en zonas húmedas?',
    back: 'Se rigen por la NOM-001-SEDE-2012 (Instalaciones Eléctricas - Utilización).\nDispositivo obligatorio en baños, cocinas y exteriores: Interruptor de Circuito por Falla a Tierra (GFCI - Ground Fault Circuit Interrupter), que corta el flujo de corriente en milisegundos si detecta una fuga a tierra de 4 a 6 miliamperes, evitando electrocuciones.',
    tip: 'Todos los contactos residenciales deben tener conexión obligatoria a tierra física (tercer orificio redondo).'
  },
  {
    id: 'fc-leg-50',
    subjectId: 'normas-tramitaciones',
    moduleIndex: 2,
    category: 'Instalaciones de Gas',
    front: '¿Cuáles son las restricciones de seguridad más estrictas para instalaciones de gas L.P. y natural?',
    back: '1. Los tanques estacionarios o cilindros portátiles deben ubicarse obligatoriamente en azoteas o patios al aire libre, a no menos de 3 m de fuentes de ignición o ventilas.\n2. Queda estrictamente PROHIBIDO instalar tanques o calentadores de agua (boilers) dentro de baños o cuartos cerrados sin tiro de chimenea exterior.\n3. Las tuberías de gas deben ser de cobre rígido tipo L o pe al pe (manguera multicapa certificada) pintadas reglamentariamente de color amarillo ocre.',
    tip: 'La acumulación de monóxido de carbono (CO) por boilers mal ubicados en baños provoca asfixia silenciosa mortal.'
  }
];

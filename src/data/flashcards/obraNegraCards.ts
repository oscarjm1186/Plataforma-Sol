import { Flashcard } from '../../types';

export const OBRA_NEGRA_FLASHCARDS: Flashcard[] = [
  // --- PARCIAL 1: PRELIMINARES, TRAZO, NIVELACIÓN Y EXCAVACIÓN (17 TARJETAS) ---
  {
    id: 'fc-obr-01',
    subjectId: 'obra-negra',
    moduleIndex: 0,
    category: 'Trabajos Preliminares',
    front: '¿Cuáles son las actividades que integran los trabajos preliminares en una obra de edificación?',
    back: '1. Limpieza y deshierbe del terreno (retiro de maleza y basura).\n2. Tala y trasplante de árboles (previa autorización ambiental).\n3. Despalme de la capa vegetal (15 a 20 cm de espesor).\n4. Demolición de construcciones existentes y retiro de escombros.\n5. Instalación de tapial perimetral de protección y letrero de obra.\n6. Construcción de caseta para velador, bodega de materiales y letrina.',
    tip: 'La tierra vegetal extraída del despalme nunca debe usarse como material de relleno compactado porque contiene materia orgánica que se descompone y provoca asentamientos.'
  },
  {
    id: 'fc-obr-02',
    subjectId: 'obra-negra',
    moduleIndex: 0,
    category: 'Trazo y Nivelación',
    front: '¿En qué consiste el método del triángulo 3-4-5 para trazar ángulos rectos de 90° en el terreno?',
    back: 'Aplica el Teorema de Pitágoras (3² + 4² = 9 + 16 = 25 = 5²):\nSobre una alineación recta conocida se miden exactamente 3.00 metros; desde ese punto se marca una perpendicular aproximada y se miden 4.00 metros. El ángulo entre ambos lados será de 90° exactos si la hipotenusa diagonal entre los dos extremos mide exactamente 5.00 metros (o sus múltiplos: 6-8-10 m).',
    tip: 'Usa cinta métrica de fibra de vidrio o acero bien tensada para evitar catenaria en el trazo.'
  },
  {
    id: 'fc-obr-03',
    subjectId: 'obra-negra',
    moduleIndex: 0,
    category: 'Nivelación',
    front: '¿Cómo funciona la nivelación con manguera transparente de agua en obra?',
    back: 'Se basa en el principio hidrostático de los VASOS COMUNICANTES: dos columnas de un líquido homogéneo conectadas entre sí alcanzan exactamente la misma altura horizontal respecto al centro de la tierra, independientemente de la forma o distancia de la manguera.',
    tip: 'Asegúrate de que la manguera esté libre de burbujas de aire y que nadie la pise o doble durante la lectura.'
  },
  {
    id: 'fc-obr-04',
    subjectId: 'obra-negra',
    moduleIndex: 0,
    category: 'Trazo y Nivelación',
    front: '¿Qué es un Banco de Nivel (BN) y dónde debe establecerse?',
    back: 'Es un punto fijo de referencia inalterable cuya cota o elevación vertical se conoce o se define arbitrariamente como ±0.00 m (Nivel de Banqueta o Nivel de Piso Terminado NPT).\nSe establece sobre una estructura fija externa inmóvil, como la guarnición de la banqueta pública, una mojonera de concreto colada exprofeso o la base de un poste de luz.',
    tip: 'Todas las alturas, desniveles de excavación y niveles de losas de la casa se referencian a partir de este banco.'
  },
  {
    id: 'fc-obr-05',
    subjectId: 'obra-negra',
    moduleIndex: 0,
    category: 'Trazo y Nivelación',
    front: '¿Qué son las crucetas, estacas y puentes de madera en el trazo de ejes?',
    back: 'Son elementos provisionales de madera de pino (estacas de 2"×2" y travesaños de 1"×4") clavados firmemente en el terreno fuera del perímetro de excavación.\nEn el travesaño superior horizontal nivelado se clavan clavos que sostienen los hilos reventones de nylon para marcar los ejes principales del proyecto y los anchos de cepas de cimentación.',
    tip: 'Deben colocarse al menos a 1.00 m de distancia del borde de la excavación para evitar que colapsen al abrir las zanjas.'
  },
  {
    id: 'fc-obr-06',
    subjectId: 'obra-negra',
    moduleIndex: 0,
    category: 'Trazo y Nivelación',
    front: '¿Qué es un hilo reventón y cómo se transfiere el trazo del aire al fondo de la cepa?',
    back: 'Es una cuerda delgada de polipropileno o nylon tensada entre los clavos de las crucetas que materializa el eje central de un muro o cimiento.\nPara proyectar el punto exacto del hilo hacia el terreno o al fondo de la excavación se utiliza una PLOMADA DE ALBAÑIL de bronce suspendida verticalmente por gravedad.',
    tip: 'La plomada no debe oscilar; se estabiliza con los dedos rozando apenas el suelo.'
  },
  {
    id: 'fc-obr-07',
    subjectId: 'obra-negra',
    moduleIndex: 0,
    category: 'Trazo con Cal',
    front: '¿Para qué se utiliza la calhidra o cal viva en el trazo de cimentaciones?',
    back: 'Para marcar visualmente sobre la superficie del terreno las líneas de excavación (cepas) de los cimientos, midiendo la mitad del ancho de la base a cada lado del hilo de eje y espolvoreando cal blanca a lo largo del cordel.',
    tip: 'La cal no se borra fácilmente con el paso de los albañiles y contrasta nítidamente con la tierra oscura.'
  },
  {
    id: 'fc-obr-08',
    subjectId: 'obra-negra',
    moduleIndex: 0,
    category: 'Excavaciones',
    front: '¿Qué es el coeficiente de abundamiento de un suelo al excavar?',
    back: 'Es el incremento porcentual de volumen que experimenta la tierra o roca al ser removida de su estado natural compacto en el terreno debido a la pérdida de cohesión y entrada de vacíos de aire.\n• Suelos arcillosos/limosos: abundamiento de 20% a 30%.\n• Suelos arenosos: 10% a 15%.\n• Roca tronada: 40% a 50%.',
    tip: 'Si excavas 10 m³ de cepa en banco, necesitarás camiones de volteo para desalojar entre 12.5 y 13 m³ de material suelto.'
  },
  {
    id: 'fc-obr-09',
    subjectId: 'obra-negra',
    moduleIndex: 0,
    category: 'Excavaciones',
    front: '¿Qué es el ángulo de talud natural o ángulo de reposo de un suelo?',
    back: 'Es el ángulo máximo de inclinación que puede mantener un montículo de suelo o las paredes de una zanja sin desmoronarse o deslizarse por su propio peso.\n• Arena seca: ~30° a 35°.\n• Arcilla compacta: ~45° a 60°.\n• Roca sana: casi 90° (vertical).',
    tip: 'Si la zanja supera 1.50 m de profundidad en suelo inestable, es obligatorio afinar taludes o colocar ademes de madera/acero para proteger la vida de los trabajadores.'
  },
  {
    id: 'fc-obr-10',
    subjectId: 'obra-negra',
    moduleIndex: 0,
    category: 'Excavaciones',
    front: '¿Qué son los ademes y troqueles en obras de cimentación profunda?',
    back: '• Ademe: revestimiento o muro provisional de tablones de madera, láminas de acero o concreto lanzado que retiene las paredes verticales de una excavación profunda impidiendo derrumbes.\n• Troqueles o puntales: vigas horizontales o inclinadas que apuntalan y arriostran los ademes opuestos transmitiendo los empujes de tierra.',
    tip: 'Previenen el colapso de zanjas y protegen cimientos de colindancias vecinas.'
  },
  {
    id: 'fc-obr-11',
    subjectId: 'obra-negra',
    moduleIndex: 0,
    category: 'Excavaciones',
    front: '¿Cuándo se clasifica una excavación en Material I, II y III en México?',
    back: '• Material I: tierra blanda, arenas, limos y suelos vegetales que se excavan fácilmente con pala y zapapico manual sin requerir barreta.\n• Material II: tepetate, arcillas duras y conglomerados cementados que requieren barreta, cuña mecánica o retroexcavadora de oruga pesada.\n• Material III: roca viva masiva (basalto, granito) que no puede fragmentarse con maquinaria convencional y requiere compresor con martillo neumático o explosivos controlados.',
    tip: 'El costo por m³ de excavación en Material III puede ser 5 a 10 veces mayor que en Material I.'
  },
  {
    id: 'fc-obr-12',
    subjectId: 'obra-negra',
    moduleIndex: 0,
    category: 'Excavaciones',
    front: '¿Qué es el acarreo libre y el sobreacarreo de material en terracerías?',
    back: '• Acarreo libre: transporte del material excavado en carretilla o camión dentro de una distancia contractual estándar (comúnmente los primeros 20 metros en carretilla, o el primer kilómetro en camión) incluido en el precio unitario de excavación.\n• Sobreacarreo: transporte del material sobrante a distancias mayores hacia el tiro oficial autorizado, cobrado por estación de 20 m o por m³-kilómetro (m³-km).',
    tip: 'Verifica siempre que el tiro de escombros esté registrado ante la Secretaría de Medio Ambiente (SEDEMA en CDMX).'
  },
  {
    id: 'fc-obr-13',
    subjectId: 'obra-negra',
    moduleIndex: 0,
    category: 'Compactación',
    front: '¿Por qué debe compactarse el fondo de la excavación y en qué espesor de capas?',
    back: 'Para eliminar vacíos, incrementar la capacidad de carga del suelo y evitar asentamientos diferenciales posteriores.\nSe realiza con pisón de mano de 10 a 15 kg o bailarina mecánica (apisonador vibratorio) en capas uniformes de máximo 15 a 20 cm de espesor, humedeciendo la tierra a su humedad óptima.',
    tip: 'Si el suelo está muy seco no se compacta; si está lodoso se vuelve plástico y se deforma (debe tener humedad óptima Proctor).'
  },
  {
    id: 'fc-obr-14',
    subjectId: 'obra-negra',
    moduleIndex: 0,
    category: 'Seguridad en Obra',
    front: '¿Qué equipo de protección personal (EPP) es obligatorio para los trabajadores durante la obra negra?',
    back: '1. Casco de seguridad rígido clase E o G con barboquejo.\n2. Botas de trabajo con casquillo de acero o poliamida y suela antiderrapante con plantilla antiperforación (evita heridas por clavos).\n3. Chaleco reflejante de alta visibilidad.\n4. Guantes de carnaza o nitrilo para manipulación de tabique, piedra y acero.\n5. Lentes de seguridad con protección lateral para picado de concreto.\n6. Cubrebocas contra polvos durante el mezclado de cemento y cal.',
    tip: 'Regulado por la norma oficial mexicana NOM-031-STPS-2011 sobre construcción.'
  },
  {
    id: 'fc-obr-15',
    subjectId: 'obra-negra',
    moduleIndex: 0,
    category: 'Preliminares',
    front: '¿Cuál es la función del tapial de madera o lámina perimetral?',
    back: 'Delimita físicamente el predio de construcción, impide el acceso de personas no autorizadas al área de riesgo, previene robos de herramienta y materiales, y protege a peatones en banquetas contra caída de materiales o proyecciones de polvo y escombros.',
    tip: 'El Reglamento de Construcciones de la CDMX exige tapiales de mínimo 2.40 m de altura si la obra colinda con vía pública.'
  },
  {
    id: 'fc-obr-16',
    subjectId: 'obra-negra',
    moduleIndex: 0,
    category: 'Nivelación',
    front: '¿Cómo se comprueba que el trazo rectangular de una casa esté perfectamente a escuadra?',
    back: 'Midiendo con cinta las dos diagonales opuestas del rectángulo trazado entre ejes extremos (D₁ y D₂).\nSi ambas diagonales miden exactamente la misma longitud con precisión milimétrica (D₁ = D₂), el polígono es un rectángulo perfecto a 90° exactos.',
    tip: 'Si una diagonal es más larga que la otra, el trazo está "falso" o en forma de paralelogramo y debe corregirse antes de excavar.'
  },
  {
    id: 'fc-obr-17',
    subjectId: 'obra-negra',
    moduleIndex: 0,
    category: 'Trazo',
    front: '¿Qué es el "eje de trazo" vs el "paño" de un muro?',
    back: '• Eje de trazo: línea imaginaria central que pasa por el centro de gravedad longitudinal del muro o cimiento (ej. a 7 cm del paño en un muro de 14 cm).\n• Paño: cara exterior o interior visible del muro.\nLos ejes de colindancia generalmente coinciden con el paño exterior para no invadir el predio del vecino.',
    tip: 'En planos, las cotas a ejes facilitan el replanteo y las cotas a paños verifican los claros interiores libres.'
  },

  // --- PARCIAL 2: CIMENTACIONES, ZAPATAS, PLANTILLAS Y DALAS (17 TARJETAS) ---
  {
    id: 'fc-obr-18',
    subjectId: 'obra-negra',
    moduleIndex: 1,
    category: 'Mecánica de Suelos',
    front: '¿Cuáles son las 3 zonas geotécnicas en las que se divide el suelo de la Ciudad de México según las NTC?',
    back: '• Zona I (Lomas): suelos firmes formados por tobas volcánicas, gravas y tepetates compactos de alta capacidad de carga (> 20 t/m²).\n• Zona II (Transición): depósitos arcillosos de espesor moderado (menor a 20 m) alternados con estratos de arena.\n• Zona III (Lago): depósitos profundos de arcilla sumamente blanda y compresible de origen lacustre con alto contenido de agua (hasta 400%), baja capacidad de carga (< 5 a 8 t/m²) y alta susceptibilidad a sismos.',
    tip: 'El CECyT 11 en Santo Tomás (Casco de Santo Tomás) se ubica en la Zona II / Zona III de transición-lago.'
  },
  {
    id: 'fc-obr-19',
    subjectId: 'obra-negra',
    moduleIndex: 1,
    category: 'Cimentaciones',
    front: '¿Cuál es la función estructural primaria de los cimientos de una edificación?',
    back: 'Transmitir con seguridad todas las cargas vivas, cargas muertas y accidentales (sismo y viento) generadas por la superestructura hacia los estratos resistentes del suelo, distribuyéndolas en un área suficientemente amplia para no superar la capacidad de carga admisible del terreno y evitar asentamientos excesivos o diferenciales.',
    tip: 'Un buen cimiento nunca debe asentarse más de lo permitido por la norma (máximo 2 a 3 cm uniforme).'
  },
  {
    id: 'fc-obr-20',
    subjectId: 'obra-negra',
    moduleIndex: 1,
    category: 'Plantillas de Cimentación',
    front: '¿Qué es una plantilla de concreto pobre y para qué se coloca en el fondo de las cepas?',
    back: 'Es una capa delgada de 5 a 10 cm de espesor de concreto de baja resistencia (f\'c = 100 kg/cm² elaborado con proporción cemento-arena-grava 1:4:6) colada en el fondo de la zanja excavada.\nFunciones:\n1. Brindar una superficie limpia, uniforme y nivelada para desplantar el cimiento.\n2. Evitar que el acero de refuerzo o mortero se contamine con lodo o tierra del suelo.\n3. Impedir que el terreno natural absorba el agua de mezclado del concreto estructural.',
    tip: 'Nunca se debe colocar el armado de varilla directamente sobre la tierra cruda.'
  },
  {
    id: 'fc-obr-21',
    subjectId: 'obra-negra',
    moduleIndex: 1,
    category: 'Cimientos de Mampostería',
    front: '¿Cuáles son las partes geométricas de un cimiento de mampostería de piedra braza?',
    back: '1. Corona: cara superior horizontal plana donde desplantará la dala; ancho mínimo normativo de 30 cm.\n2. Base: cara inferior apoyada sobre la plantilla; su ancho depende de la carga del muro y la resistencia del suelo (típicamente 60 a 100 cm).\n3. Altura (h): peralte vertical del cimiento (típicamente 80 a 120 cm).\n4. Escarpio: cara inclinada lateral con talud mínimo de 1:1.5 o ángulo de 60° respecto a la horizontal.',
    tip: 'En linderos colindantes con vecinos el cimiento lleva un solo escarpio hacia adentro (cimiento de colindancia); en muros interiores lleva escarpio doble simétrico (cimiento intermedio).'
  },
  {
    id: 'fc-obr-22',
    subjectId: 'obra-negra',
    moduleIndex: 1,
    category: 'Cimientos de Mampostería',
    front: '¿Qué características debe reunir la piedra braza para cimientos y con qué mortero se pega?',
    back: 'Piedra volcánica andesítica o basáltica sana, no intemperizada ni porosa, limpia, de caras angulares rugosas y tamaño de 20 a 30 cm (no piedras bola de río lisas porque no tienen adherencia mecánica).\nSe pega con MORTERO cemento-arena en proporción 1:4 o 1:5, rellenando todos los huecos interiores con rajuela (pedacería de piedra pequeña) para no dejar oquedades de mortero puro.',
    tip: 'Se debe humedecer la piedra antes de colocarla para que no le robe agua al mortero.'
  },
  {
    id: 'fc-obr-23',
    subjectId: 'obra-negra',
    moduleIndex: 1,
    category: 'Zapatas Aisladas',
    front: '¿Qué es una zapata aislada de concreto armado y cuándo se emplea?',
    back: 'Es una losa cuadrada o rectangular de concreto armado con una parrilla de varillas en el lecho inferior sometida a flexión en dos direcciones, que sirve de base puntual a una columna de concreto o acero estructural.\nSe emplea en edificios con estructura a base de marcos rígidos (columnas y trabes) desplantados sobre terrenos de mediana a alta resistencia mecánica.',
    tip: 'Lleva dados de concreto para alojar las anclas de columnas de acero o traslapar las varillas de columnas de concreto.'
  },
  {
    id: 'fc-obr-24',
    subjectId: 'obra-negra',
    moduleIndex: 1,
    category: 'Zapatas Corridas',
    front: '¿Qué es una zapata corrida de concreto armado y cuáles son sus componentes?',
    back: 'Es un elemento de cimentación superficial continuo a lo largo de un eje que soporta una hilera de muros de carga o una serie alineada de columnas cercanas.\nComponentes:\n1. Patín o losa de zapata: base ancha horizontal que distribuye la carga al terreno con parrilla de acero transversal y varillas de temperatura longitudinales.\n2. Contratrabe o nervadura: viga peraltada armada que absorbe los momentos flexionantes y rigidez longitudinal del cimiento.',
    tip: 'Sustituye a la mampostería de piedra cuando el suelo es blando o las cargas superan 2 niveles.'
  },
  {
    id: 'fc-obr-25',
    subjectId: 'obra-negra',
    moduleIndex: 1,
    category: 'Losas de Cimentación',
    front: '¿Qué es una losa de cimentación o cajón de cimentación y cuándo es indispensable?',
    back: 'Es una losa continua de concreto armado que abarca la totalidad del área de desplante de la edificación (como una gran balsa que flota sobre el terreno).\nEs obligatoria en suelos muy blandos y compresibles (Zona III lacustre de CDMX) donde zapatas aisladas sufrirían asentamientos diferenciales catastróficos.\nDistribuye las cargas en toda la huella del edificio reduciendo el esfuerzo a menos de 4 a 6 t/m².',
    tip: 'Un cajón de cimentación hueco desaloja un peso de tierra igual al peso del edificio (cimentación compensada).'
  },
  {
    id: 'fc-obr-26',
    subjectId: 'obra-negra',
    moduleIndex: 1,
    category: 'Cimentaciones Profundas',
    front: '¿Cuál es la diferencia de funcionamiento entre pilotes de punta y pilotes de fricción?',
    back: '• Pilotes de Punta: columnas esbeltas que atraviesan los estratos blandos superficiales hasta hincarse firmemente en el estrato duro resistente o manto rocoso profundo (en CDMX a 30-40 m de profundidad).\n• Pilotes de Fricción: transfieren la carga del edificio a lo largo de su fuste lateral mediante el rozamiento continuo o adherencia entre el concreto y el suelo arcilloso circundante.',
    tip: 'La Torre Latinoamericana en CDMX descansa sobre 361 pilotes de punta apoyados en la primera capa dura a 33 metros.'
  },
  {
    id: 'fc-obr-27',
    subjectId: 'obra-negra',
    moduleIndex: 1,
    category: 'Dalas de Desplante',
    front: '¿Qué es una dala o cadena de desplante (CD) y cuál es su armado estructural típico?',
    back: 'Es una trabe de concreto armado colada horizontalmente sobre la corona del cimiento a todo lo largo de los muros.\nArmado típico para casa de 2 niveles:\n• 4 varillas corrugadas del No. 3 (3/8" o Ø 9.5 mm) longitudinales (dos arriba y dos abajo).\n• Estribos de alambrón del No. 2 (1/4" o Ø 6.4 mm) colocados cada 15 a 20 cm.\n• Sección estándar: 15 × 20 cm colada con concreto f\'c = 200 o 250 kg/cm².',
    tip: 'Distribuye las cargas de los muros uniformemente hacia el cimiento y amarra la base de los castillos.'
  },
  {
    id: 'fc-obr-28',
    subjectId: 'obra-negra',
    moduleIndex: 1,
    category: 'Impermeabilización de Cimientos',
    front: '¿Cómo se impermeabiliza la corona del cimiento y la dala de desplante para evitar humedad?',
    back: 'Para cortar la humedad por capilaridad ascendente:\n1. Se coloca una capa de mortero nivelado sobre la corona de piedra.\n2. Se aplica una capa de emulsión asfáltica o chapopote caliente.\n3. Se coloca una membrana de polietileno negro de calibre 600 o fieltro asfáltico saturado doblado a los lados de la dala.\n4. Se cuela la dala de desplante sobre esta barrera impermeable.',
    tip: 'Si no se impermeabiliza la dala, la humedad del subsuelo subirá por los muros botando pintura y desmoronando aplanados (salitre).'
  },
  {
    id: 'fc-obr-29',
    subjectId: 'obra-negra',
    moduleIndex: 1,
    category: 'Acero de Refuerzo',
    front: '¿Cuál es la designación por número de las varillas corrugadas en México y su diámetro en pulgadas y milímetros?',
    back: 'El número de la varilla indica su diámetro en OCTAVOS DE PULGADA:\n• No. 2: alambrón liso de 1/4" (6.4 mm) para estribos.\n• No. 2.5: varilla de 5/16" (7.9 mm).\n• No. 3: varilla de 3/8" (9.5 mm) - peso 0.557 kg/m.\n• No. 4: varilla de 1/2" (12.7 mm) - peso 0.994 kg/m.\n• No. 5: varilla de 5/8" (15.9 mm) - peso 1.552 kg/m.\n• No. 6: varilla de 3/4" (19.1 mm) - peso 2.235 kg/m.\n• No. 8: varilla de 1" (25.4 mm) - peso 3.973 kg/m.',
    tip: 'El acero corrugado comercial estándar en México es Grado 42 (límite elástico fy = 4200 kg/cm²).'
  },
  {
    id: 'fc-obr-30',
    subjectId: 'obra-negra',
    moduleIndex: 1,
    category: 'Acero de Refuerzo',
    front: '¿Qué es el recubrimiento libre de concreto y cuál es su espesor mínimo en cimentaciones?',
    back: 'Es la distancia libre entre la superficie exterior de la varilla de acero (o estribo) y la cara exterior del concreto colado.\n• En cimentaciones coladas directamente contra el suelo: mínimo 5 a 7.5 cm (protege el acero de sales corrosivas del suelo).\n• En trabes y columnas protegidas: mínimo 2.5 a 3 cm.\n• En losas interiores: mínimo 1.5 a 2 cm.\nSe garantiza usando "pollos" o silletas de mortero.',
    tip: 'Nunca uses pedazos de tabique o madera como separadores de recubrimiento.'
  },
  {
    id: 'fc-obr-31',
    subjectId: 'obra-negra',
    moduleIndex: 1,
    category: 'Acero de Refuerzo',
    front: '¿Cuál es la longitud mínima de traslape reglamentaria para varillas corrugadas a tensión?',
    back: 'Como regla práctica en edificación: mínimo 40 veces el diámetro de la varilla (40 · Ø) o al menos 30 a 40 cm.\n• Varilla #3 (3/8" ≈ 0.95 cm): traslape de 40 cm.\n• Varilla #4 (1/2" ≈ 1.27 cm): traslape de 50 cm.\n• Varilla #5 (5/8" ≈ 1.59 cm): traslape de 65 cm.',
    tip: 'Los traslapes deben amarrarse firmemente con alambre recocido del No. 18 y desfasarse en zonas de bajo esfuerzo.'
  },
  {
    id: 'fc-obr-32',
    subjectId: 'obra-negra',
    moduleIndex: 1,
    category: 'Acero de Refuerzo',
    front: '¿Qué función tienen los ganchos estándar de 90° y 180° en los extremos de las varillas y estribos?',
    back: 'Aseguran el anclaje mecánico por adherencia del acero dentro del núcleo de concreto impidiendo que la varilla se deslice cuando se somete a tensión máxima.\nEn estribos sísmicos (NTC-CDMX) los extremos deben rematarse con ganchos a 135° con prolongación mínima de 6 a 10 diámetros introducidos hacia el centro del concreto.',
    tip: 'Un estribo con gancho cerrado a 90° puede abrirse durante un sismo fuerte provocando el pandeo de las varillas.'
  },
  {
    id: 'fc-obr-33',
    subjectId: 'obra-negra',
    moduleIndex: 1,
    category: 'Mampostería',
    front: '¿Por qué la mampostería de piedra no debe recibir cargas concentradas directas de columnas?',
    back: 'Porque la mampostería de piedra braza resiste muy bien esfuerzos de compresión uniforme y distribuida, pero tiene pésima resistencia a cortante y tensión concentrada.\nPara columnas se debe desplantar una zapata aislada de concreto armado con contratrabes de liga.',
    tip: 'La dala de desplante sobre la piedra ayuda a repartir las cargas lineales de los muros uniformemente.'
  },
  {
    id: 'fc-obr-34',
    subjectId: 'obra-negra',
    moduleIndex: 1,
    category: 'Contratrabes de Cimentación',
    front: '¿Cuál es la función de las contratrabes de liga entre zapatas aisladas?',
    back: 'Amarran monolíticamente todas las zapatas en ambas direcciones ortogonales formando una retícula rígida que absorbe los momentos de volteo causados por sismo, equilibra excentricidades en zapatas de lindero y previene desplazamientos horizontales o giros relativos entre apoyos.',
    tip: 'El armado principal de una contratrabe suele llevar más acero en el lecho superior porque el terreno empuja hacia arriba.'
  },

  // --- PARCIAL 3: MUROS, CASTILLOS, LOSAS, CIMBRAS Y CONCRETO (16 TARJETAS) ---
  {
    id: 'fc-obr-35',
    subjectId: 'obra-negra',
    moduleIndex: 2,
    category: 'Muros de Mampostería',
    front: '¿Cuáles son los 3 aparejos tradicionales de colocación de tabique en muros?',
    back: '1. Al Hilo o a Soga: los tabiques se colocan longitudinalmente a lo largo del muro; espesor resultante de 14 cm (el más común para muros de carga en casa habitación).\n2. A Tizón: los tabiques se colocan perpendiculares al muro; espesor de 28 cm (para muros de gran resistencia o contención).\n3. Capuchino: los tabiques se asientan sobre su canto angosto; espesor de solo 6 a 7 cm (exclusivo para muros divisorios ligeros, ¡NUNCA de carga!).',
    tip: 'El aparejo al hilo debe cuatrapearse a medio tabique en cada hilada sucesiva para que las juntas verticales no coincidan.'
  },
  {
    id: 'fc-obr-36',
    subjectId: 'obra-negra',
    moduleIndex: 2,
    category: 'Muros de Mampostería',
    front: '¿Qué es el cuatrapeo de tabiques y cuál es el espesor normativo de las juntas de mortero?',
    back: '• Cuatrapeo: traslape longitudinal de las piezas entre hiladas sucesivas (mínimo un tercio de la longitud del tabique) para trabar el muro y evitar grietas verticales continuas.\n• Espesor de juntas: debe ser de 1.0 cm a 1.5 cm.\nJuntas mayores a 1.5 cm debilitan el muro y desperdician mortero; juntas menores a 1.0 cm no garantizan adherencia.',
    tip: 'La junta horizontal se llama tendel y la junta vertical entre tabiques se llama llaga.'
  },
  {
    id: 'fc-obr-37',
    subjectId: 'obra-negra',
    moduleIndex: 2,
    category: 'Muros de Mampostería',
    front: '¿Por qué se debe mojar el tabique rojo recocido antes de colocarlo con mortero?',
    back: 'El tabique de barro cocido es muy poroso y tiene una altísima tasa de absorción de agua inicial. Si se coloca seco, succiona inmediatamente el agua de la pasta de mortero impidiendo la hidratación química del cemento, lo que provoca que la junta se "queme", quede arenosa, quebradiza y sin adherencia mecánica.',
    tip: 'El tabique se remoja en botes o por aspersión hasta que sature su succión, pero sin dejar charcos en su superficie al pegarlo.'
  },
  {
    id: 'fc-obr-38',
    subjectId: 'obra-negra',
    moduleIndex: 2,
    category: 'Castillos y Confinamiento',
    front: '¿Cuáles son las reglas normativas para la separación y ubicación de castillos (NTC-CDMX)?',
    back: '1. Debe haber castillos en todos los extremos libres de muros, intersecciones, cruces y esquinas a 90°.\n2. La separación máxima entre castillos no debe exceder de 4.00 metros ni de 1.5 veces la altura del muro (para h = 2.50 m, separación máx = 3.75 m).\n3. En vanos de puertas o ventanas cuyo claro sea mayor a 1.20 m o que abarquen más de un cuarto del claro del muro, se deben colocar castillos a los costados.',
    tip: 'El castillo debe colarse con un dentado en el tabique de 5 cm de saliente alternado en cada hilada para lograr amarre mecánico.'
  },
  {
    id: 'fc-obr-39',
    subjectId: 'obra-negra',
    moduleIndex: 2,
    category: 'Castillos y Confinamiento',
    front: '¿Qué armado mínimo exige la norma para un castillo ahogado vs castillo exterior de concreto armado?',
    back: '• Castillo exterior estándar: sección mínima de 15 × 15 cm colado con concreto f\'c ≥ 150 kg/cm² (común 200 kg/cm²), armado con 4 varillas #3 (3/8") y estribos de alambrón #2 @ 15-20 cm (con estribos más juntos a 10 cm en los extremos superior e inferior).\n• Castillo ahogado: varilla alojada en las celdas huecas de bloques de concreto rellenas con mortero fluido (grout).',
    tip: 'La armadura electrosoldada prefabricada (tipo Armex) solo se permite en edificaciones tipo A de 1 o 2 niveles de baja exigencia sísmica bajo estricto cálculo.'
  },
  {
    id: 'fc-obr-40',
    subjectId: 'obra-negra',
    moduleIndex: 2,
    category: 'Dalas de Cerramiento',
    front: '¿Qué es una dala de cerramiento (DC) o dintel y cuál es su función?',
    back: 'Es una viga de concreto armado colada en la parte superior de los muros que corona los vanos de puertas y ventanas y remata el muro antes de la losa.\nFunciones:\n1. Soportar el peso del muro y la losa que descansan sobre el hueco de puertas y ventanas.\n2. Confinar monolíticamente los muros y castillos en su parte superior formando un anillo perimetral cerrado que resiste torsión y sismos.',
    tip: 'El peralte mínimo de un dintel debe ser de al menos 15 a 20 cm, apoyándose mínimo 20 cm a cada lado del vano sobre los castillos.'
  },
  {
    id: 'fc-obr-41',
    subjectId: 'obra-negra',
    moduleIndex: 2,
    category: 'Losas de Concreto',
    front: '¿Cuáles son las características estructurales de una losa maciza de concreto armado?',
    back: 'Es una placa plana continua de concreto de 10 a 12 cm de espesor colada in situ, reforzada con una malla o emparrillado de varillas de acero corrugado (#3 @ 15 a 20 cm) en ambas direcciones.\nTrabaja por flexión y cortante:\n• Varillas rectas en el lecho inferior al centro del claro (absorben momentos flexionantes positivos +M).\n• Bastones y columpios doblados a 45° en el lecho superior sobre los apoyos (absorben momentos negativos -M).',
    tip: 'En claros mayores a 4.50 m la losa maciza resulta pesada y poco económica, prefiriéndose losas aligeradas.'
  },
  {
    id: 'fc-obr-42',
    subjectId: 'obra-negra',
    moduleIndex: 2,
    category: 'Losas Aligeradas',
    front: '¿Cómo funciona el sistema de losa de Vigueta y Bovedilla?',
    back: 'Es un sistema semi-prefabricado formado por:\n1. Viguetas pretensadas de concreto de alma llena o viguetas de celosía de acero, colocadas cada 60 o 70 cm como vigas portantes.\n2. Bovedillas de poliestireno expandido (EPS) o de barro cocido/cemento-arena que actúan únicamente como elementos aligerantes y cimbra perdida sin función estructural.\n3. Malla electrosoldada 6-6/10-10 por temperatura.\n4. Capa de compresión de concreto de 4 a 5 cm colada encima.',
    tip: 'Ahorra hasta un 80% de madera de cimbra y reduce notablemente el peso propio de la edificación.'
  },
  {
    id: 'fc-obr-43',
    subjectId: 'obra-negra',
    moduleIndex: 2,
    category: 'Cimbras de Madera',
    front: '¿Cuáles son los componentes de la cimbra de madera para una losa de entrepiso?',
    back: '1. Duela o triplay de pino de 16-19 mm: superficie de contacto directo con el concreto.\n2. Yugos o barrotes (2"×4"): rigidizan el triplay por debajo cada 40-50 cm.\n3. Madrinas o vigas maestras (4"×4"): vigas longitudinales que cargan a los barrotes.\n4. Puntales o pies derechos (polines de 4"×4" o puntales metálicos telescópicos): columnas provisionales separadas cada 80-100 cm.\n5. Cuñas de madera: colocadas bajo los puntales para ajustar niveles y facilitar el descimbrado.\n6. Arriostramientos o cruces de San Andrés: amarran los puntales entre sí para evitar pandeo lateral.',
    tip: 'Aplica desmoldante o aceite quemado a la madera antes de armar el acero para que el concreto no se pegue.'
  },
  {
    id: 'fc-obr-44',
    subjectId: 'obra-negra',
    moduleIndex: 2,
    category: 'Descimbrado',
    front: '¿Cuáles son los tiempos mínimos de descimbrado de elementos de concreto?',
    back: '• Costados de trabes, columnas y muros: 24 a 48 horas (el concreto solo debe mantener su forma vertical).\n• Fondos de losas macizas (claros menores a 4 m): 14 a 21 días (dejando puntales de seguridad o recimbra al centro).\n• Fondos de trabes y vigas de claro amplio: 21 a 28 días completos (hasta alcanzar el 100% de la resistencia de diseño f\'c).',
    tip: 'El retiro prematuro de puntales en fondos de losa causa deflexiones excesivas y agrietamientos irreversibles.'
  },
  {
    id: 'fc-obr-45',
    subjectId: 'obra-negra',
    moduleIndex: 2,
    category: 'Dosificación de Concreto',
    front: '¿Cuál es la proporción volumétrica tradicional de concreto f\'c = 200 kg/cm² elaborado en obra?',
    back: 'Proporción 1 : 2 : 3 por cada saco de cemento de 50 kg:\n• 1 saco de cemento gris (50 kg)\n• 2 botes de arena limpia (botes alcoholeros de 19 L)\n• 3 botes de grava triturada de 3/4"\n• Aproximadamente 1.25 botes de agua limpia (~24 litros).',
    tip: 'Rinde aproximadamente 0.10 m³ de concreto colado compactado (se requieren 10 sacos de cemento por m³).'
  },
  {
    id: 'fc-obr-46',
    subjectId: 'obra-negra',
    moduleIndex: 2,
    category: 'Relación Agua-Cemento',
    front: '¿Qué es la relación Agua/Cemento (a/c) y por qué es el factor más crítico en la resistencia del concreto?',
    back: 'Es el cociente en peso entre el agua libre y el cemento de la mezcla (a/c = peso_agua / peso_cemento):\n• A MENOR relación a/c, MAYOR es la resistencia a compresión (f\'c) y menor la porosidad y permeabilidad del concreto.\n• En obras de buena calidad la relación a/c oscila entre 0.45 y 0.55.\n• Cada litro de agua en exceso que se agrega para "hacer más aguada la mezcla" reduce drásticamente la resistencia final del concreto hasta en un 30-40%.',
    tip: 'Si requieres más trabajabilidad o fluidez, usa un aditivo superfluidificante, ¡NUNCA agregues más agua!'
  },
  {
    id: 'fc-obr-47',
    subjectId: 'obra-negra',
    moduleIndex: 2,
    category: 'Control de Calidad',
    front: '¿En qué consiste la prueba de revenimiento con el Cono de Abrams (NMX-C-156)?',
    back: 'Mide la consistencia y trabajabilidad del concreto fresco:\n1. Se llena el cono metálico truncado (30 cm de alto) en 3 capas iguales.\n2. Se varilla cada capa con 25 golpes uniformes con una varilla lisa con punta de bala.\n3. Se enrasa la superficie y se levanta el cono verticalmente con cuidado en 5 segundos.\n4. Se mide con flexómetro el asentamiento o descenso del concreto respecto a la altura del molde.',
    tip: 'Para losas y zapatas el revenimiento estándar oscila entre 8 y 12 cm; para concreto bombeado entre 12 y 16 cm.'
  },
  {
    id: 'fc-obr-48',
    subjectId: 'obra-negra',
    moduleIndex: 2,
    category: 'Control de Calidad',
    front: '¿Cómo se toman y ensayan los cilindros de concreto a compresión (NMX-C-083)?',
    back: 'Se toman muestras en moldes cilíndricos estándar de 15 cm de diámetro por 30 cm de altura (o 10 × 20 cm) varillados en 3 capas. Se desmoldan a las 24 horas y se curan en pileta de agua saturada de cal a 23 °C.\nSe ensayan en prensa hidráulica a los 7 días (debe alcanzar ~70% de f\'c) y a los 28 días (debe alcanzar el 100% de la resistencia f\'c especificada).',
    tip: 'Las probetas determinan formalmente la aceptación o rechazo estructural del colado de la losa.'
  },
  {
    id: 'fc-obr-49',
    subjectId: 'obra-negra',
    moduleIndex: 2,
    category: 'Colado y Vibrado',
    front: '¿Por qué es indispensable el vibrado mecánico del concreto y qué error debe evitarse?',
    back: 'El vibrador de flecha o aguja elimina el aire atrapado y acomoda la grava entre las varillas evitando huecos u oquedades estructurales (ratoneras o panales de abeja).\nError grave a evitar: SOBREVIBRAR o tocar directamente las varillas de acero, ya que provoca segregación (la grava se va al fondo y la pasta de agua y cemento sube a la superficie).',
    tip: 'Introduce la aguja verticalmente por periodos cortos de 5 a 15 segundos y retírala lentamente.'
  },
  {
    id: 'fc-obr-50',
    subjectId: 'obra-negra',
    moduleIndex: 2,
    category: 'Curado del Concreto',
    front: '¿En qué consiste el curado del concreto y durante cuántos días es obligatorio realizarlo?',
    back: 'Consiste en mantener el concreto saturado de humedad a temperatura adecuada durante los primeros días tras el colado para permitir la hidratación completa del cemento Portland.\nMétodos: inundación con bordos de arena (charqueo en losas), riego continuo con manguera 3 veces al día, cubrimiento con costales de yute húmedos o membrana de curado química.\nDuración mínima: 7 días continuos (idealmente 14 días).',
    tip: 'Un concreto sin curar pierde hasta el 50% de su resistencia potencial y se agrieta por contracción plástica superficial.'
  }
];

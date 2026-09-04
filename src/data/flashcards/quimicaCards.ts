import { Flashcard } from '../../types';

export const QUIMICA_FLASHCARDS: Flashcard[] = [
  // --- PARCIAL 1: MATERIA, ENERGÍA, ESTADOS Y MEZCLAS (17 TARJETAS) ---
  {
    id: 'fc-qui-01',
    subjectId: 'quimica-1',
    moduleIndex: 0,
    category: 'Materia y Energía',
    front: '¿Cuál es la definición científica de materia y masa?',
    back: '• Materia: todo aquello que tiene masa, ocupa un lugar en el espacio (volumen) y posee inercia.\n• Masa: cantidad constante de materia que contiene un cuerpo, medida en kilogramos [kg].',
    tip: 'No confundir masa (constante) con peso (fuerza gravitacional variable: W = m·g).'
  },
  {
    id: 'fc-qui-02',
    subjectId: 'quimica-1',
    moduleIndex: 0,
    category: 'Leyes de Conservación',
    front: '¿Qué establece la Ley de Conservación de la Materia de Antoine Lavoisier?',
    back: 'La materia no se crea ni se destruye en una reacción química ordinaria, solo se transforma. La masa total de los reactivos es exactamente igual a la masa total de los productos obtenidos.',
    tip: 'Es la base científica para el balanceo estequiométrico de ecuaciones químicas.'
  },
  {
    id: 'fc-qui-03',
    subjectId: 'quimica-1',
    moduleIndex: 0,
    category: 'Materia y Energía',
    front: '¿Cuál es la diferencia entre propiedades extensivas e intensivas de la materia?',
    back: '• Propiedades Extensivas: dependen de la cantidad de materia presente (masa, peso, volumen, longitud, inercia, capacidad calorífica).\n• Propiedades Intensivas: NO dependen de la cantidad de materia; permiten identificar la sustancia (densidad, punto de fusión, punto de ebullición, viscosidad, dureza, calor específico).',
    tip: '1 litro de agua y 100 litros de agua hierven a la misma temperatura (100 °C a 1 atm); el punto de ebullición es intensivo.'
  },
  {
    id: 'fc-qui-04',
    subjectId: 'quimica-1',
    moduleIndex: 0,
    category: 'Materia y Energía',
    front: '¿Cuál es la diferencia entre un fenómeno físico y un fenómeno químico?',
    back: '• Fenómeno Físico: no altera la estructura molecular ni la identidad química de las sustancias (ej. dilatación térmica del acero, evaporación del agua, trituración de grava).\n• Fenómeno Químico: transforma la estructura molecular formando nuevas sustancias con propiedades diferentes (ej. oxidación/corrosión de la varilla, fraguado del cemento, combustión del gas).',
    tip: 'Los cambios de estado de agregación son siempre fenómenos físicos reversibles.'
  },
  {
    id: 'fc-qui-05',
    subjectId: 'quimica-1',
    moduleIndex: 0,
    category: 'Estados de Agregación',
    front: '¿Cuáles son las características cinético-moleculares de los 3 estados fundamentales de la materia?',
    back: '• Sólido: fuerzas de cohesión predominan sobre repulsión; forma y volumen fijos, partículas vibran en posiciones fijas.\n• Líquido: fuerzas de cohesión y repulsión en equilibrio dinámico; volumen fijo pero forma variable que adopta la del recipiente.\n• Gas: fuerzas de repulsión predominan totalmente; forma y volumen variables, partículas con alta energía cinética y gran separación.',
    tip: 'El plasma es el 4° estado: gas ionizado a altas temperaturas conductor de electricidad (como el sol o una soldadura por arco).'
  },
  {
    id: 'fc-qui-06',
    subjectId: 'quimica-1',
    moduleIndex: 0,
    category: 'Cambios de Estado',
    front: '¿Cómo se llaman los cambios de estado de agregación de la materia?',
    back: '• Sólido a Líquido: Fusión\n• Líquido a Sólido: Solidificación\n• Líquido a Gas: Evaporación o Ebullición\n• Gas a Líquido: Condensación o Licuación\n• Sólido a Gas (sin pasar por líquido): Sublimación progresiva o directa\n• Gas a Sólido: Sublimación regresiva o deposición',
    tip: 'La naftalina y el hielo seco (CO₂ sólido) subliman directamente a temperatura ambiente.'
  },
  {
    id: 'fc-qui-07',
    subjectId: 'quimica-1',
    moduleIndex: 0,
    category: 'Clasificación de la Materia',
    front: '¿Qué es un elemento químico y qué es un compuesto químico?',
    back: 'Ambos son sustancias puras de composición fija y definida:\n• Elemento: sustancia formada por una sola clase de átomos que no puede descomponerse en otra más simple por métodos químicos ordinarios (ej. Fe, Cu, O₂, Al).\n• Compuesto: sustancia formada por la unión química de dos o más elementos diferentes en proporciones de masa definidas (ej. H₂O, NaCl, CaCO₃).',
    tip: 'Un compuesto solo puede separarse en sus elementos constituyentes mediante reacciones químicas (electrólisis, pirólisis).'
  },
  {
    id: 'fc-qui-08',
    subjectId: 'quimica-1',
    moduleIndex: 0,
    category: 'Mezclas',
    front: '¿Cuál es la diferencia entre una mezcla homogénea y una mezcla heterogénea?',
    back: '• Mezcla Homogénea (Solución): presenta una sola fase uniforme; sus componentes no se distinguen a simple vista ni al microscopio óptico (ej. aire limpio, agua potable con sal disuelta, bronce, latón).\n• Mezcla Heterogénea: presenta dos o más fases distinguibles con propiedades diferentes en distintas zonas (ej. concreto hidráulico, mortero de albañilería, agua con aceite, suspensión de cal).',
    tip: 'El concreto es una mezcla heterogénea multifásica de pasta de cemento hidratado, arena, grava y vacíos de aire.'
  },
  {
    id: 'fc-qui-09',
    subjectId: 'quimica-1',
    moduleIndex: 0,
    category: 'Separación de Mezclas',
    front: '¿En qué consiste el método de decantación y para qué mezclas se aplica?',
    back: 'Consiste en separar mezclas basándose en la diferencia de densidades:\n1. Líquido-sólido insoluble: se deja sedimentar el sólido en el fondo por gravedad y se trasvasa el líquido sobrenadante (ej. agua y arena).\n2. Líquido-líquido inmiscible: se emplea un embudo de separación o decantación aprovechando que no se mezclan (ej. agua y aceite).',
    tip: 'Es la primera fase en el tratamiento primario de aguas residuales en fosas sépticas y desarenadores.'
  },
  {
    id: 'fc-qui-10',
    subjectId: 'quimica-1',
    moduleIndex: 0,
    category: 'Separación de Mezclas',
    front: '¿En qué consiste la filtración y qué principio físico utiliza?',
    back: 'Separación mecánica de partículas sólidas insolubles suspendidas en un fluido (líquido o gas) haciéndolo pasar a través de un medio poroso o membrana filtrante (papel filtro, lecho de arena, geotextil) que retiene el sólido y permite el paso del filtrado.',
    tip: 'En edificación sustentable se usa grava y geotextil para filtrar el agua pluvial antes de almacenarla en la cisterna.'
  },
  {
    id: 'fc-qui-11',
    subjectId: 'quimica-1',
    moduleIndex: 0,
    category: 'Separación de Mezclas',
    front: '¿Qué es la destilación y qué diferencia hay entre simple y fraccionada?',
    back: 'Separa mezclas de líquidos miscibles aprovechando sus diferentes puntos de ebullición:\n• Destilación Simple: cuando los puntos de ebullición difieren en más de 30 °C (ej. agua y sal, agua y alcohol concentrado).\n• Destilación Fraccionada: utiliza una columna de fraccionamiento cuando los puntos de ebullición son muy cercanos entre sí (ej. refinación del petróleo para obtener gasolina, diésel y asfalto).',
    tip: 'El asfalto empleado en pavimentación e impermeabilización es el residuo pesado del fondo de la columna de destilación fraccionada del petróleo.'
  },
  {
    id: 'fc-qui-12',
    subjectId: 'quimica-1',
    moduleIndex: 0,
    category: 'Separación de Mezclas',
    front: '¿En qué consiste el tamizado y cuál es su importancia en los agregados de construcción?',
    back: 'Es la separación física de partículas sólidas de diferentes tamaños haciéndolas pasar por una serie de mallas o cedazos con aberturas de tamaño estandarizado (tamices ASTM).\nEn ingeniería civil y construcción determina la granulometría de la arena y grava conforme a la norma NMX-C-077 para lograr un concreto denso y resistente.',
    tip: 'La malla No. 200 (abertura de 0.075 mm) separa las arenas de los finos (limos y arcillas perjudiciales).'
  },
  {
    id: 'fc-qui-13',
    subjectId: 'quimica-1',
    moduleIndex: 0,
    category: 'Separación de Mezclas',
    front: '¿Qué es la cristalización y la centrifugación?',
    back: '• Cristalización: separación de un sólido disuelto en un líquido mediante la evaporación controlada del solvente y enfriamiento, permitiendo que el soluto forme redes cristalinas puras (ej. obtención de sal marina).\n• Centrifugación: método acelerado por fuerza centrífuga que decanta sedimentos coloidales mucho más rápido que la gravedad ordinaria.',
    tip: 'La cristalización es el método de purificación química por excelencia para obtener sustancias de alta pureza.'
  },
  {
    id: 'fc-qui-14',
    subjectId: 'quimica-1',
    moduleIndex: 0,
    category: 'Propiedades de la Materia',
    front: '¿Qué es la densidad absoluta (ρ) y cuál es su fórmula y unidades?',
    back: 'ρ = m / V\n\nEs la cantidad de masa contenida por unidad de volumen de una sustancia. En el SI se mide en [kg/m³] o en [g/cm³].\n• Agua pura: ρ = 1.0 g/cm³ = 1000 kg/m³\n• Concreto normal: ρ ≈ 2400 kg/m³\n• Acero estructural: ρ ≈ 7850 kg/m³',
    formula: 'ρ = m / V'
  },
  {
    id: 'fc-qui-15',
    subjectId: 'quimica-1',
    moduleIndex: 0,
    category: 'Materia y Energía',
    front: '¿Qué relación formuló Albert Einstein entre masa y energía en reacciones nucleares?',
    back: 'E = m · c²\n\nDonde E es la energía liberada, m es la masa que se desintegra o defecto de masa, y c es la velocidad de la luz en el vacío (c ≈ 3 × 10⁸ m/s). Demuestra que la masa es una forma sumamente concentrada de energía.',
    formula: 'E = m · c²'
  },
  {
    id: 'fc-qui-16',
    subjectId: 'quimica-1',
    moduleIndex: 0,
    category: 'Conceptos Químicos',
    front: '¿Qué es la alotropía y qué ejemplos comunes existen?',
    back: 'Es la propiedad que poseen ciertos elementos químicos de presentarse en un mismo estado físico con dos o más estructuras moleculares o cristalinas diferentes, lo que les confiere propiedades físicas muy distintas.\n• Carbono: grafito (blando y conductor) vs diamante (ultraduro y aislante) vs grafeno.\n• Oxígeno: O₂ (gas respirable) vs O₃ (ozono estratosférico).',
    tip: 'El grafito y el diamante están formados 100% por los mismos átomos de carbono puro.'
  },
  {
    id: 'fc-qui-17',
    subjectId: 'quimica-1',
    moduleIndex: 0,
    category: 'Química en la Construcción',
    front: '¿Qué tipo de fenómeno químico ocurre durante el fraguado e hidratación del cemento Portland?',
    back: 'Es una reacción exotérmica de hidratación donde los silicatos de calcio (alita y belita) reaccionan con agua para formar silicato de calcio hidratado (gel C-S-H) y portlandita (Ca(OH)₂), creando una red cristalina entrelazada que endurece y da resistencia mecánica al concreto.',
    tip: 'El curado con agua durante los primeros 7 a 14 días es vital para evitar fisuras por desecación y asegurar la reacción completa.'
  },

  // --- PARCIAL 2: MODELOS ATÓMICOS, NÚMEROS CUÁNTICOS Y TABLA PERIÓDICA (17 TARJETAS) ---
  {
    id: 'fc-qui-18',
    subjectId: 'quimica-1',
    moduleIndex: 1,
    category: 'Modelos Atómicos',
    front: '¿Cuál fue el postulado central del modelo atómico de John Dalton (1808)?',
    back: 'La materia está formada por partículas indivisibles e indestructibles llamadas átomos. Todos los átomos de un mismo elemento son idénticos en masa y propiedades, y se combinan en relaciones numéricas sencillas y enteras para formar compuestos.',
    tip: 'Se le conoce metafóricamente como el modelo de la "esfera compacta o bola de billar".'
  },
  {
    id: 'fc-qui-19',
    subjectId: 'quimica-1',
    moduleIndex: 1,
    category: 'Modelos Atómicos',
    front: '¿Qué partícula subatómica descubrió J.J. Thomson y cómo describió su modelo atómico?',
    back: 'Descubrió el ELECTRÓN (1897) mediante experimentos con tubos de rayos catódicos. Propuso el modelo del "budín con pasas": el átomo es una esfera maciza de carga eléctrica positiva uniforme en la que se encuentran incrustados los electrones negativos en cantidad suficiente para neutralizar la carga.',
    tip: 'Demostró por primera vez que el átomo no era indivisible.'
  },
  {
    id: 'fc-qui-20',
    subjectId: 'quimica-1',
    moduleIndex: 1,
    category: 'Modelos Atómicos',
    front: '¿Qué descubrió Ernest Rutherford con el experimento de la lámina de oro (1911)?',
    back: 'Descubrió el NÚCLEO ATÓMICO y el PROTÓN. La mayor parte del átomo es espacio vacío; casi toda su masa y toda la carga positiva se concentran en una región diminuta y densa central llamada núcleo, mientras los electrones giran alrededor como planetas.',
    tip: 'Explicó por qué la mayoría de las partículas alfa atravesaban la lámina sin desviarse y solo unas pocas rebotaban.'
  },
  {
    id: 'fc-qui-21',
    subjectId: 'quimica-1',
    moduleIndex: 1,
    category: 'Modelos Atómicos',
    front: '¿Qué postuló Niels Bohr (1913) sobre las órbitas de los electrones?',
    back: 'Los electrones giran alrededor del núcleo únicamente en órbitas circulares estacionarias permitidas de energía cuantizada. Mientras permanecen en una órbita no emiten ni absorben radiación; solo emiten un fotón de luz (ΔE = h·ν) al saltar de una órbita superior a una inferior.',
    tip: 'Explicó brillantemente las líneas discretas del espectro de emisión del átomo de hidrógeno.'
  },
  {
    id: 'fc-qui-22',
    subjectId: 'quimica-1',
    moduleIndex: 1,
    category: 'Mecánica Cuántica',
    front: '¿Qué establece el Principio de Incertidumbre de Werner Heisenberg (1927)?',
    back: 'Es físicamente imposible conocer simultáneamente y con precisión absoluta la posición exacta y la cantidad de movimiento (o velocidad) de un electrón o partícula subatómica (Δx · Δp ≥ h / 4π).',
    tip: 'Reemplazó el concepto de "órbita definida" de Bohr por el de "orbital" (zona de probabilidad).'
  },
  {
    id: 'fc-qui-23',
    subjectId: 'quimica-1',
    moduleIndex: 1,
    category: 'Estructura Atómica',
    front: '¿Qué es un orbital atómico según el modelo mecánico cuántico de Schrödinger?',
    back: 'Es una región tridimensional del espacio alrededor del núcleo atómico donde existe la máxima probabilidad (generalmente superior al 90%) de encontrar a un electrón con un determinado nivel de energía.',
    tip: 'Los tipos principales de orbitales son s (esférico), p (lobular en forma de ocho), d y f.'
  },
  {
    id: 'fc-qui-24',
    subjectId: 'quimica-1',
    moduleIndex: 1,
    category: 'Partículas Subatómicas',
    front: '¿Cuáles son las 3 partículas subatómicas fundamentales, su carga y su ubicación?',
    back: '1. Protón (p⁺): carga positiva (+1.6 × 10⁻¹⁹ C), masa ≈ 1 uma, ubicado en el núcleo.\n2. Neutrón (n⁰): carga neutra (0), masa ≈ 1 uma, ubicado en el núcleo.\n3. Electrón (e⁻): carga negativa (-1.6 × 10⁻¹⁹ C), masa despreciable (1/1836 uma), ubicado en la corteza o nube electrónica.',
    tip: 'Los protones y neutrones se denominan conjuntamente nucleones.'
  },
  {
    id: 'fc-qui-25',
    subjectId: 'quimica-1',
    moduleIndex: 1,
    category: 'Estructura Atómica',
    front: '¿Qué representa el Número Atómico (Z) y la Masa Atómica (A)?',
    back: '• Número Atómico (Z): número de protones en el núcleo. Define la identidad del elemento químico (en átomo neutro también es igual al número de electrones).\n• Masa Atómica o Número de Masa (A): suma total de protones y neutrones en el núcleo: A = Z + n.\n• Cantidad de neutrones: n = A - Z.',
    tip: 'En la notación estándar ᴬ_Z X, el número superior es la masa A y el inferior es Z.',
    formula: 'A = Z + n  =>  n = A - Z'
  },
  {
    id: 'fc-qui-26',
    subjectId: 'quimica-1',
    moduleIndex: 1,
    category: 'Estructura Atómica',
    front: '¿Qué son los isótopos e iones (cationes y aniones)?',
    back: '• Isótopos: átomos de un mismo elemento (mismo Z) con diferente número de neutrones y por tanto diferente masa atómica A (ej. ¹H prótio, ²H deuterio, ³H tritio).\n• Catión: ion con carga positiva formado cuando un átomo pierde electrones (ej. Ca²⁺, Na⁺, Fe³⁺).\n• Anión: ion con carga negativa formado cuando un átomo gana electrones (ej. Cl⁻, O²⁻, SO₄²⁻).',
    tip: 'Los metales tienden a perder electrones formando cationes; los no metales tienden a ganar formando aniones.'
  },
  {
    id: 'fc-qui-27',
    subjectId: 'quimica-1',
    moduleIndex: 1,
    category: 'Números Cuánticos',
    front: '¿Cuáles son los 4 números cuánticos y qué característica del electrón describen?',
    back: '1. Principal (n): nivel de energía o tamaño del orbital (valores: 1, 2, 3, 4, 5, 6, 7).\n2. Secundario o Azimutal (l): forma geométrica del subnivel (valores de 0 a n-1: s=0, p=1, d=2, f=3).\n3. Magnético (m o ml): orientación espacial del orbital (valores de -l a +l pasando por 0).\n4. De Spin (ms): sentido de giro del electrón sobre su propio eje (valores: +½ o -½).',
    tip: 'Los 4 números cuánticos funcionan como las "coordenadas postales" únicas de cada electrón en el átomo.'
  },
  {
    id: 'fc-qui-28',
    subjectId: 'quimica-1',
    moduleIndex: 1,
    category: 'Configuración Electrónica',
    front: '¿Cuántos electrones caben como máximo en cada subnivel s, p, d, f?',
    back: '• Subnivel s (l = 0): 1 orbital -> máximo 2 electrones.\n• Subnivel p (l = 1): 3 orbitales -> máximo 6 electrones.\n• Subnivel d (l = 2): 5 orbitales -> máximo 10 electrones.\n• Subnivel f (l = 3): 7 orbitales -> máximo 14 electrones.',
    formula: 'Capacidad máxima de un nivel n = 2n² electrones'
  },
  {
    id: 'fc-qui-29',
    subjectId: 'quimica-1',
    moduleIndex: 1,
    category: 'Configuración Electrónica',
    front: '¿Qué establece el Principio de Exclusión de Wolfgang Pauli?',
    back: 'En un mismo átomo no pueden existir dos electrones que tengan sus cuatro números cuánticos exactamente idénticos. Si dos electrones comparten el mismo orbital (mismos n, l, m), obligatoriamente deben tener spines opuestos (antiparalelos: +½ y -½).',
    tip: 'Por esta razón, cada orbital solo puede albergar un máximo de 2 electrones.'
  },
  {
    id: 'fc-qui-30',
    subjectId: 'quimica-1',
    moduleIndex: 1,
    category: 'Configuración Electrónica',
    front: '¿Qué establece la Regla de Máxima Multiplicidad de Hund?',
    back: 'Al llenar orbitales de igual energía (subniveles degenerados como px, py, pz), los electrones se distribuyen primero desapareados ocupando cada orbital individualmente con el mismo spin (+½) antes de comenzar a aparearse con spin opuesto (-½).',
    tip: 'Regla del autobús: los pasajeros prefieren sentarse solos en asientos vacíos antes de sentarse junto a otra persona.'
  },
  {
    id: 'fc-qui-31',
    subjectId: 'quimica-1',
    moduleIndex: 1,
    category: 'Tabla Periódica',
    front: '¿Cómo está organizada la Tabla Periódica moderna (Ley Periódica de Henry Moseley)?',
    back: 'Los elementos químicos se ordenan en función creciente de su NÚMERO ATÓMICO Z (número de protones).\n• 7 Periodos (filas horizontales): indican el número cuántico principal n (capa más externa).\n• 18 Grupos o Familias (columnas verticales): agrupan elementos con idéntica configuración de electrones de valencia y propiedades químicas análogas.',
    tip: 'Mendeléyev los ordenó originalmente por masa atómica, pero Moseley corrigió la ley basándose en el número atómico Z.'
  },
  {
    id: 'fc-qui-32',
    subjectId: 'quimica-1',
    moduleIndex: 1,
    category: 'Tabla Periódica',
    front: '¿Cuáles son los nombres de las familias representativas principales (Grupos A)?',
    back: '• Grupo IA: Metales Alcalinos (Li, Na, K... muy reactivos, valencia +1)\n• Grupo IIA: Metales Alcalinotérreos (Mg, Ca, Ba... valencia +2)\n• Grupo IIIA: Térreos o Boroideos (Al, Ga...)\n• Grupo IVA: Carbonoideos (C, Si... base de polímeros y minerales)\n• Grupo VA: Nitrogenoideos (N, P...)\n• Grupo VIA: Calcógenos o Anfígenos (O, S...)\n• Grupo VIIA: Halógenos (F, Cl, Br, I... no metales muy reactivos, valencia -1)\n• Grupo VIIIA (18): Gases Nobles o Inertes (He, Ne, Ar, Kr... capa completa, octeto estable).',
    tip: 'El calcio (Ca) del grupo IIA es el componente químico rector del cemento, la cal y el yeso.'
  },
  {
    id: 'fc-qui-33',
    subjectId: 'quimica-1',
    moduleIndex: 1,
    category: 'Propiedades Periódicas',
    front: '¿Qué es la electronegatividad (EN) y cómo varía en la Tabla Periódica?',
    back: 'Es la capacidad o tendencia relativa que tiene un átomo enlazado para atraer hacia sí el par de electrones del enlace químico.\n• Aumenta de izquierda a derecha a lo largo de un periodo.\n• Aumenta de abajo hacia arriba en un grupo.\n• Elemento más electronegativo: Flúor (F = 4.0 en escala Pauling).\n• Elementos menos electronegativos: Francio y Cesio (0.7).',
    tip: 'Los gases nobles no tienen valor significativo de electronegatividad porque no forman enlaces ordinarios.'
  },
  {
    id: 'fc-qui-34',
    subjectId: 'quimica-1',
    moduleIndex: 1,
    category: 'Propiedades Periódicas',
    front: '¿Cómo varían el Radio Atómico y la Energía de Ionización en la Tabla Periódica?',
    back: '• Radio Atómico: aumenta hacia ABAJO en un grupo (más capas) y hacia la IZQUIERDA en un periodo (menor carga nuclear efectiva).\n• Energía de Ionización (energía para arrancar un electrón de un átomo gaseoso neutro): aumenta hacia ARRIBA en un grupo y hacia la DERECHA en un periodo (opuesta al radio atómico).',
    tip: 'Los metales alcalinos tienen el mayor radio atómico y la menor energía de ionización (pierden fácilmente su electrón).'
  },

  // --- PARCIAL 3: ENLACE QUÍMICO Y NOMENCLATURA INORGÁNICA (16 TARJETAS) ---
  {
    id: 'fc-qui-35',
    subjectId: 'quimica-1',
    moduleIndex: 2,
    category: 'Enlace Químico',
    front: '¿Qué establece la Regla del Octeto formulada por Gilbert N. Lewis?',
    back: 'Los átomos tienden a ganar, perder o compartir electrones de valencia durante una reacción química con el objetivo de adquirir una configuración electrónica estable con 8 electrones en su último nivel de energía, idéntica a la del gas noble más próximo.',
    tip: 'Excepciones notables: el Hidrógeno y el Helio completan su nivel con solo 2 electrones (regla del dueto).'
  },
  {
    id: 'fc-qui-36',
    subjectId: 'quimica-1',
    moduleIndex: 2,
    category: 'Enlace Iónico',
    front: '¿Qué es el enlace iónico o electrovalente y entre qué elementos se produce?',
    back: 'Es la fuerza de atracción electrostática entre iones de cargas opuestas (cationes y aniones), producido por la TRANSFERENCIA completa de uno o más electrones de un átomo metálico (baja electronegatividad) a un átomo no metálico (alta electronegatividad).\nOcurre cuando la diferencia de electronegatividad ΔEN ≥ 1.7.',
    tip: 'Ejemplos en construcción: cloruro de sodio NaCl, óxido de calcio CaO (cal viva), sulfato de calcio CaSO₄ (yeso).'
  },
  {
    id: 'fc-qui-37',
    subjectId: 'quimica-1',
    moduleIndex: 2,
    category: 'Enlace Iónico',
    front: '¿Cuáles son las propiedades físicas características de los compuestos iónicos?',
    back: '• Sólidos cristalinos duros pero frágiles a temperatura ambiente.\n• Altos puntos de fusión y ebullición (generalmente > 600 °C) debido a fuertes atracciones en la red cristalina.\n• Buenos conductores de la electricidad cuando están fundidos o disueltos en agua (electrolitos), pero pésimos conductores en estado sólido seco.\n• Generalmente solubles en disolventes polares como el agua.',
    tip: 'Si golpeas un cristal de sal, las capas de iones se desplazan haciendo coincidir cargas iguales que se repelen y fracturan el cristal (fragilidad).'
  },
  {
    id: 'fc-qui-38',
    subjectId: 'quimica-1',
    moduleIndex: 2,
    category: 'Enlace Covalente',
    front: '¿Qué es el enlace covalente y en qué se diferencian el no polar y el polar?',
    back: 'Se forma por la COMPARTICIÓN de pares de electrones entre átomos no metálicos:\n• Covalente No Polar (Puro): los electrones se comparten por igual entre átomos idénticos o con ΔEN < 0.4 (ej. O₂, N₂, Cl₂, CH₄).\n• Covalente Polar: los electrones se comparten de forma asimétrica debido a una diferencia de 0.4 ≤ ΔEN < 1.7; se forman densidades de carga parcial (δ⁺ y δ⁻) generando un dipolo molecular (ej. H₂O, HCl).',
    tip: 'El agua es polar, lo que la convierte en el solvente universal indispensable para hidratar el cemento.'
  },
  {
    id: 'fc-qui-39',
    subjectId: 'quimica-1',
    moduleIndex: 2,
    category: 'Enlace Metálico',
    front: '¿Cómo explica el modelo del "mar de electrones" el enlace metálico?',
    back: 'Los átomos metálicos ceden sus electrones de valencia formando una red rígida y ordenada de cationes positivos inmersos en una nube continua o "mar" de electrones libres deslocalizados que se mueven por todo el cristal.\nExplica la altísima conductividad eléctrica y térmica, el brillo metálico, la maleabilidad (láminas) y ductilidad (alambres del acero).',
    tip: 'A diferencia de los compuestos iónicos, al doblar un metal los cationes se deslizan sin romperse gracias al mar de electrones flexible.'
  },
  {
    id: 'fc-qui-40',
    subjectId: 'quimica-1',
    moduleIndex: 2,
    category: 'Fuerzas Intermoleculares',
    front: '¿Qué son los puentes de hidrógeno y por qué son cruciales para el agua?',
    back: 'Es una fuerza de atracción intermolecular especialmente intensa que se produce entre un átomo de hidrógeno unido covalentemente a un elemento muy pequeño y electronegativo (F, O o N) y el par de electrones no compartidos de otro átomo cercano.\nExplica el elevado punto de ebullición del agua (100 °C), su tensión superficial y que el hielo sea menos denso que el agua líquida.',
    tip: 'Si el hielo no flotara, los ríos se congelarían desde el fondo matando los ecosistemas.'
  },
  {
    id: 'fc-qui-41',
    subjectId: 'quimica-1',
    moduleIndex: 2,
    category: 'Nomenclatura Inorgánica',
    front: '¿Qué es el número de oxidación y cuáles son sus reglas básicas?',
    back: 'Es la carga eléctrica formal aparente que adquiere un átomo al formar un enlace químico.\n• Elementos libres sin combinar: siempre 0 (ej. Fe⁰, O₂⁰, Cu⁰).\n• El Hidrógeno tiene +1 (excepto en hidruros metálicos donde vale -1).\n• El Oxígeno tiene -2 (excepto en peróxidos donde vale -1).\n• En una molécula neutra, la suma algebraica de los números de oxidación es SIEMPRE CERO (Σ = 0).\n• En un ion poliatómico, la suma es igual a la carga del ion.',
    tip: 'Memoriza: O = -2 y H = +1; con esas dos reglas deduces casi cualquier número de oxidación.'
  },
  {
    id: 'fc-qui-42',
    subjectId: 'quimica-1',
    moduleIndex: 2,
    category: 'Nomenclatura Inorgánica',
    front: '¿Qué es un óxido básico y cómo se nombra en la nomenclatura tradicional y Stock?',
    back: 'Combinación química de un Metal + Oxígeno (M + O²⁻).\n• CaO: Óxido de calcio (cal viva).\n• FeO: Óxido ferroso (Tradicional, valencia menor +2) u Óxido de hierro (II) (Stock).\n• Fe₂O₃: Óxido férrico (Tradicional, valencia mayor +3) u Óxido de hierro (III) (Stock).',
    tip: 'En la nomenclatura tradicional: sufijo -oso para la menor valencia y -ico para la mayor.'
  },
  {
    id: 'fc-qui-43',
    subjectId: 'quimica-1',
    moduleIndex: 2,
    category: 'Nomenclatura Inorgánica',
    front: '¿Qué es un óxido ácido o anhídrido y qué efecto tiene en el medio ambiente?',
    back: 'Combinación química de un No Metal + Oxígeno (NM + O²⁻).\n• CO₂: Dióxido de carbono o anhídrido carbónico.\n• SO₃: Trióxido de azufre o anhídrido sulfúrico.\nAl reaccionar con la humedad atmosférica producen lluvia ácida (H₂SO₄ y HNO₃), la cual corroe fachadas de piedra caliza, cantera y armaduras metálicas en edificaciones.',
    tip: 'SO₃ + H₂O -> H₂SO₄ (ácido sulfúrico corrosivo).'
  },
  {
    id: 'fc-qui-44',
    subjectId: 'quimica-1',
    moduleIndex: 2,
    category: 'Nomenclatura Inorgánica',
    front: '¿Qué es un hidróxido o base y cómo se formula el hidróxido de calcio (cal apagada)?',
    back: 'Compuesto formado por un catión metálico y el radical hidroxilo (OH⁻) con valencia -1: Metal + (OH)⁻.\n• Ca(OH)₂: Hidróxido de calcio (cal apagada o cal hidratada para albañilería).\nSe obtiene apagando la cal viva con agua en una reacción sumamente exotérmica: CaO + H₂O -> Ca(OH)₂ + calor.',
    tip: 'Tienen sabor amargo, tacto jabonoso y viran el papel tornasol a color azul (pH > 7).'
  },
  {
    id: 'fc-qui-45',
    subjectId: 'quimica-1',
    moduleIndex: 2,
    category: 'Nomenclatura Inorgánica',
    front: '¿Qué es un hidrácido y cuál es la fórmula del ácido muriático empleado en obra?',
    back: 'Compuesto binario formado por Hidrógeno (+1) y un no metal halógeno o anfígeno en disolución acuosa: H⁺ + No Metal.\n• HCl(ac): Ácido clorhídrico (comercialmente llamado "ácido muriático").\nEn construcción se diluye en agua para desmanchar tabiques y pisos de barro cocido tras el junteo con cemento.',
    tip: 'Al manipular ácido muriático siempre se debe usar guantes, mascarilla y lentes; ¡NUNCA viertas agua sobre el ácido concentrado!'
  },
  {
    id: 'fc-qui-46',
    subjectId: 'quimica-1',
    moduleIndex: 2,
    category: 'Nomenclatura Inorgánica',
    front: '¿Qué es un oxiácido y cuáles son los ejemplos más importantes?',
    back: 'Compuesto ternario formado por Hidrógeno + No Metal + Oxígeno (H + NM + O). Resultan de la reacción de un óxido ácido con agua:\n• H₂SO₄: Ácido sulfúrico (SO₃ + H₂O)\n• HNO₃: Ácido nítrico\n• H₂CO₃: Ácido carbónico (responsable de la carbonatación del concreto)\n• H₃PO₄: Ácido fosfórico',
    tip: 'Los oxiácidos donan protones H⁺ en disolución y poseen pH ácido (< 7).'
  },
  {
    id: 'fc-qui-47',
    subjectId: 'quimica-1',
    moduleIndex: 2,
    category: 'Nomenclatura Inorgánica',
    front: '¿Qué es una sal binaria o hidrosal y cómo se nombra?',
    back: 'Compuesto neutro formado por la unión de un Metal + No Metal (sin oxígeno), obtenido al neutralizar un hidrácido con una base. El no metal toma la terminación "-uro":\n• NaCl: Cloruro de sodio (sal común).\n• CaCl₂: Cloruro de calcio (aditivo acelerante de fraguado para concreto en climas fríos).\n• FeS: Sulfuro ferroso.',
    tip: 'Ácido clorhídrico + Hidróxido de sodio -> Cloruro de sodio + Agua: HCl + NaOH -> NaCl + H₂O.'
  },
  {
    id: 'fc-qui-48',
    subjectId: 'quimica-1',
    moduleIndex: 2,
    category: 'Nomenclatura Inorgánica',
    front: '¿Qué es una oxisal y cuál es la regla nemotécnica para nombrarlas a partir de los oxiácidos?',
    back: 'Compuesto formado por Metal + No Metal + Oxígeno (sustitución de los H⁺ del oxiácido por un catión metálico).\nRegla de terminaciones:\n• El sufijo "-oso" del ácido cambia a "-ito" en la sal.\n• El sufijo "-ico" del ácido cambia a "-ato" en la sal.\n(Nemotecnia: "Cuando el OSO toca el PITO, el mICO toca el silbATO").',
    tip: 'Ácido carbónico -> Carbonato de calcio (CaCO₃, piedra caliza de canteras).'
  },
  {
    id: 'fc-qui-49',
    subjectId: 'quimica-1',
    moduleIndex: 2,
    category: 'Materiales Químicos de Construcción',
    front: '¿Cuál es la fórmula química y el ciclo de transformación del Yeso en construcción?',
    back: '• Yeso natural (roca de cantera): Sulfato de calcio dihidratado -> CaSO₄ · 2H₂O\n• Yeso calcinado (polvo comercial): Sulfato de calcio hemihidratado -> CaSO₄ · ½H₂O (se deshidrata a ~150 °C)\n• Al mezclarlo con agua en obra, reabsorbe el agua perdida y cristaliza de nuevo como dihidrato endurecido.',
    tip: 'El yeso nunca debe usarse en exteriores húmedos porque es soluble en agua.'
  },
  {
    id: 'fc-qui-50',
    subjectId: 'quimica-1',
    moduleIndex: 2,
    category: 'Materiales Químicos de Construcción',
    front: '¿Qué es la corrosión electroquímica del acero de refuerzo en estructuras de concreto?',
    back: 'Es una reacción redox donde el hierro se oxida a ion ferroso en el ánodo (Fe -> Fe²⁺ + 2e⁻) en presencia de agua y oxígeno disuelto. El óxido formado (Fe₂O₃·nH₂O) tiene hasta 6 veces más volumen que el acero original, generando presiones expansivas que fracturan y desprenden el recubrimiento de concreto.',
    tip: 'El pH altamente alcalino del concreto sano (pH 12.5 - 13.5) protege al acero mediante pasivación química.'
  }
];

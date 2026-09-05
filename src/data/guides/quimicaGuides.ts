import { StudyModule } from '../../types';

export const QUIMICA_GUIDES: StudyModule[] = [
  {
    id: 'qui-mod-1',
    title: 'Parcial 1: Materia, Energía, Estados de Agregación, Separación de Mezclas y Modelos Atómicos',
    parcialNumber: 1,
    competence: 'Explica los principios de conservación de la materia y la energía, identifica propiedades intensivas y extensivas, aplica métodos de separación y comprende la evolución cuántica del átomo.',
    topics: [
      {
        id: 'qui-top-1',
        title: 'Materia, Energía y Leyes de Conservación',
        rap: 'RAP 1: Describe las propiedades extensivas e intensivas de la materia y distingue entre fenómenos físicos y químicos.',
        summary: 'La materia es todo aquello que posee masa, inercia y ocupa un lugar en el espacio. La energía es la capacidad de un sistema para realizar trabajo o transferir calor. La Ley de Conservación de la Materia de Lavoisier estipula que en cualquier reacción química la masa total permanece invariable. En la física nuclear, la ecuación de Einstein E = m·c² unifica materia y energía como manifestaciones intercambiables.',
        keyPoints: [
          'Propiedades Generales o Extensivas (dependen de la masa): masa, peso, volumen, inercia, impenetrabilidad, divisibilidad, porosidad.',
          'Propiedades Específicas o Intensivas (no dependen de la masa): densidad, punto de fusión, punto de ebullición, dureza (escala de Mohs), conductividad térmica y eléctrica, viscosidad.',
          'Fenómeno Físico: cambio que no altera la estructura molecular ni crea nuevas sustancias (ej. dilatación térmica de juntas de concreto, corte de perfiles de acero, evaporación del agua de curado).',
          'Fenómeno Químico: alteración íntima de enlaces atómicos que genera nuevas especies químicas con propiedades distintas (ej. hidratación exotérmica del cemento Portland, corrosión u oxidación del acero de refuerzo, carbonatación de la cal viva).'
        ],
        formulas: [
          {
            name: 'Densidad Absoluta',
            formula: 'ρ = m / V',
            explanation: 'Cociente entre la masa de una muestra de material y el volumen geométrico que ocupa.'
          }
        ],
        constructionApplication: 'Cálculo de pesos volumétricos de agregados pétreos (grava y arena) para dosificación de concretos hidráulicos según la norma ASTM C29 / NMX-C-073.',
        practiceExercises: [
          {
            prompt: 'Una probeta cilíndrica de concreto estándar (15 cm de diámetro y 30 cm de altura) pesa 12.72 kg en seco. Calcular su masa volumétrica o densidad en kg/m³.',
            hint: 'Volumen cilindro V = π · r² · h. Radio r = 0.075 m, h = 0.30 m.',
            solution: 'V = π × (0.075 m)² × 0.30 m = 3.1416 × 0.005625 × 0.30 ≈ 0.005301 m³.\nρ = 12.72 kg / 0.005301 m³ ≈ 2,399.5 kg/m³ (típico para concreto estructural convencional de peso normal de 2,400 kg/m³).'
          }
        ]
      },
      {
        id: 'qui-top-2',
        title: 'Estados de Agregación de la Materia y Cambios de Fase',
        rap: 'RAP 2: Analiza las fuerzas intermoleculares en los cambios de estado físico y su influencia térmica en obra.',
        summary: 'La materia se presenta en cuatro estados físicos fundamentales: sólido, líquido, gas y plasma. El estado físico está determinado por el balance termodinámico entre las fuerzas intermoleculares de cohesión molecular (Fc) y las fuerzas de repulsión o agitación cinética térmica (Fr). Los cambios de estado no alteran la composición química, pero involucran intercambio de calor latente.',
        keyPoints: [
          'Sólido: Fc >> Fr (volumen y forma definidos, estructura cristalina o amorfa).',
          'Líquido: Fc ≈ Fr (volumen constante, adopta la forma del recipiente que lo contiene, fluidez).',
          'Gas: Fr >> Fc (partículas muy separadas en rápido movimiento caótico, compresibilidad y expansibilidad totales).',
          'Cambios endotérmicos (absorben calor del entorno): Fusión (sólido a líquido), Evaporación o Ebullición (líquido a vapor), Sublimación progresiva (sólido a gas directo sin fundirse).',
          'Cambios exotérmicos (liberan calor): Solidificación (líquido a sólido), Condensación o Licuefacción (gas a líquido), Sublimación regresiva o Deposición (gas a sólido).'
        ],
        formulas: [
          {
            name: 'Calor Latente de Cambio de Fase',
            formula: 'Q = m · L',
            explanation: 'Calor absorbido o cedido para cambiar de fase a temperatura constante (L_fusión o L_vaporización).'
          }
        ],
        constructionApplication: 'Prevención de fisuras por contracción plástica en losas de concreto: evitar la evaporación rápida del agua por insolación o vientos secos mediante membranas de curado químico.',
        practiceExercises: [
          {
            prompt: '¿Por qué la colocación y compactación de carpetas de asfalto en caliente debe realizarse entre 135°C y 150°C?',
            hint: 'El asfalto es un ligante bituminoso termosensible viscoelástico.',
            solution: 'A alta temperatura el ligante asfáltico reduce su viscosidad pasando al estado de líquido fluido que lubrica los áridos para alcanzar la densidad Proctor exigida; al descender a temperatura ambiente se solidifica, aportando rigidez estructural al pavimento.'
          }
        ]
      },
      {
        id: 'qui-top-3',
        title: 'Sustancias Puras, Mezclas y Métodos de Separación en Laboratorio de Materiales',
        rap: 'RAP 3: Clasifica sustancias puras y mezclas y aplica técnicas de separación física en materiales térreos.',
        summary: 'Una sustancia pura posee composición química definida y constante (elementos como Fe, Al, Cu; compuestos como CaCO₃, SiO₂, H₂O). Una mezcla resulta de la combinación física de dos o más sustancias en proporciones variables sin que ocurra reacción química. Se clasifican en mezclas homogéneas o soluciones (una sola fase microscópicamente uniforme) y mezclas heterogéneas (dos o más fases distinguibles a simple vista o con microscopio).',
        keyPoints: [
          'Tamizado: separación mecánica de partículas sólidas por diferencia de tamaño mediante una serie de mallas graduadas de alambre tejido (ej. mallas ASTM No. 4, No. 8, No. 16, No. 30, No. 50, No. 100, No. 200).',
          'Sedimentación y Decantación: separación por diferencia de densidad bajo la acción de la gravedad (ej. desarenadores y cárcamos pluviales en obras viales).',
          'Filtración: separación de un sólido suspendido insoluble de un fluido a través de un medio poroso permeable.',
          'Destilación: separación de líquidos miscibles aprovechando la discrepancia en sus puntos de ebullición (ej. refinación del crudo petrolero para solventes y alquitranes).'
        ],
        constructionApplication: 'Ensayo de granulometría de agregados finos y gruesos para concreto conforme a la norma ASTM C136 / NMX-C-077 para optimizar el acomodo de partículas y minimizar el consumo de pasta de cemento.',
        practiceExercises: [
          {
            prompt: 'En un ensayo de lavado sobre la malla No. 200 (abertura 0.075 mm) de 1,000 g de arena, se pierden 45 g de material limoso-arcilloso suspendido. ¿Cuál es el porcentaje de finos que pasan la malla 200 y cumple la norma si el límite es 5%?',
            hint: '% finos = (masa lavada / masa inicial) × 100%.',
            solution: '% finos = (45 g / 1,000 g) × 100% = 4.5%. Cumple la norma técnica (4.5% ≤ 5.0%), siendo apta para la elaboración de concreto estructural.'
          }
        ]
      },
      {
        id: 'qui-top-4',
        title: 'Evolución de los Modelos Atómicos y Partículas Subatómicas',
        rap: 'RAP 4: Explica la estructura atómica nuclear a partir de los modelos de Dalton, Thomson, Rutherford y Bohr.',
        summary: 'El entendimiento de la materia evolucionó de la teoría atómica de Dalton (átomo macizo e indivisible), al modelo de pudín de pasas de Thomson (descubrimiento del electrón con rayos catódicos), al modelo nuclear de Rutherford (experimento de la lámina de oro que demostró la existencia de un núcleo positivo diminuto y corteza casi vacía), al modelo de Bohr (órbitas circulares estacionarias con niveles cuantizados de energía).',
        keyPoints: [
          'Protón (p⁺): masa 1.6726 × 10⁻²⁷ kg, carga eléctrica positiva (+1 e = +1.602 × 10⁻¹⁹ C), en el núcleo.',
          'Neutrón (n⁰): masa 1.6749 × 10⁻²⁷ kg, eléctricamente neutro, descubierto por Chadwick en 1932 en el núcleo.',
          'Electrón (e⁻): masa 9.109 × 10⁻³¹ kg (aprox. 1/1836 de la masa del protón), carga negativa (-1 e), en la corteza extranuclear.',
          'Número Atómico (Z): número de protones presentes en el núcleo; define la identidad elemental.',
          'Número de Masa (A): suma total de nucleones: A = Z + N => N = A - Z.',
          'Isótopos: átomos de un mismo elemento con idéntico Z pero distinto número de neutrones N (ej. Carbono-12 y Carbono-14).'
        ],
        constructionApplication: 'Empleo de densímetros nucleares portátiles que utilizan fuentes radiactivas de Cesio-137 (rayos gamma) y Americio-241/Berilio (neutrones rápidos) para medir densidad seca y humedad in situ de terracerías compactadas.',
        practiceExercises: [
          {
            prompt: 'El elemento Hierro tiene número atómico Z = 26 y su isótopo más abundante tiene masa atómica A = 56. Determinar el número de protones, electrones y neutrones en el átomo neutro.',
            hint: 'p⁺ = Z; e⁻ = Z (en átomo neutro); n⁰ = A - Z.',
            solution: 'Protones = 26; Electrones = 26; Neutrones = 56 - 26 = 30 neutrones.'
          }
        ]
      },
      {
        id: 'qui-top-5',
        title: 'Mecánica Cuántica Ondulatoria, Números Cuánticos y Orbitales Atómicos',
        rap: 'RAP 5: Determina los cuatro números cuánticos (n, l, m, s) y describe la geometría de los orbitales atómicos.',
        summary: 'La mecánica cuántica moderna (De Broglie, principio de incertidumbre de Heisenberg y ecuación de onda de Schrödinger) describe al electrón como una onda estacionaria de probabilidad de densidad electrónica en regiones espaciales denominadas orbitales atómicos. El estado energético de cada electrón se define por un conjunto único de cuatro números cuánticos: n, l, m_l y m_s.',
        keyPoints: [
          'Número Cuántico Principal (n): determina el nivel de energía principal y el tamaño del orbital. Valores enteros: n = 1, 2, 3, 4, 5, 6, 7.',
          'Número Cuántico Azimutal o de Momento Angular (l): determina la forma espacial del orbital. Valores enteros de 0 a (n - 1). l=0 (orbital s, esférico), l=1 (orbital p, bilobulado), l=2 (orbital d, tetralobulado), l=3 (orbital f).',
          'Número Cuántico Magnético (m_l): determina la orientación espacial del orbital respecto a un campo magnético. Valores enteros desde -l hasta +l.',
          'Número Cuántico de Spin (m_s): indica el sentido de giro intrínseco del electrón sobre su eje cuántico: +½ (arriba) o -½ (abajo).'
        ],
        formulas: [
          {
            name: 'Capacidad Electrónica Máxima por Nivel',
            formula: 'Electrones_max = 2 · n²',
            explanation: 'Número máximo teórico de electrones que pueden albergarse en el nivel cuántico n.'
          }
        ],
        constructionApplication: 'Comprensión de los estados cuánticos de valencia de metales como el titanio, cromo y níquel que determinan su pasivación y resistencia a la corrosión en aceros inoxidables.',
        practiceExercises: [
          {
            prompt: 'Para el nivel cuántico principal n = 3, ¿cuántos subniveles l existen, cuántos orbitales en total y cuál es la capacidad máxima de electrones?',
            hint: 'Subniveles l van de 0 a n-1. Total orbitales = n². Total electrones = 2n².',
            solution: 'Subniveles: l = 0 (3s), l = 1 (3p), l = 2 (3d) [3 subniveles].\nTotal orbitales = 3² = 9 orbitales (1 orbital s, 3 orbitales p y 5 orbitales d).\nCapacidad máxima = 2(3²) = 2(9) = 18 electrones.'
          }
        ]
      }
    ]
  },
  {
    id: 'qui-mod-2',
    title: 'Parcial 2: Configuración Electrónica, Tabla Periódica y Enlaces Químicos',
    parcialNumber: 2,
    competence: 'Formula configuraciones electrónicas, explica las propiedades periódicas de los elementos y clasifica enlaces químicos en metales, cerámicos y aglutinantes.',
    topics: [
      {
        id: 'qui-top-6',
        title: 'Configuración Electrónica: Aufbau, Pauli y Hund',
        rap: 'RAP 1: Aplica las reglas de llenado electrónico para escribir configuraciones basales de los elementos químicos.',
        summary: 'La configuración electrónica describe la distribución de los electrones de un átomo entre los orbitales disponibles en su estado fundamental o de mínima energía. El llenado orbital se rige por tres leyes: el Principio de Aufbau (las subcapas se llenan en orden creciente de energía según la regla de las diagonales de Moeller), el Principio de Exclusión de Pauli (no pueden coexistir dos electrones con los cuatro números cuánticos idénticos) y la Regla de Hund (en orbitales con igual energía se ubica un electrón con espín paralelo en cada orbital antes de aparearlos).',
        keyPoints: [
          'Regla de las diagonales (Moeller): 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s...',
          'Electrones de valencia: electrones situados en el nivel energético más externo (capa de valencia). Son los responsables directos de los enlaces químicos.',
          'Configuración con Kernel (gas noble previo): notación compacta que sustituye la configuración interna cerrada por el símbolo del gas noble anterior entre corchetes (ej. [Ar] 4s² 3d⁶ para Fe).'
        ],
        constructionApplication: 'Análisis de los 2 electrones de valencia 4s² del Calcio (Ca, Z=20) que reaccionan con el oxígeno y el agua para formar cal hidratada Ca(OH)₂ en estabilización de suelos arcillosos.',
        practiceExercises: [
          {
            prompt: 'Escribir la configuración electrónica completa y abreviada (Kernel) del Calcio (Ca, Z = 20) y señalar sus electrones de valencia.',
            hint: 'Llena secuencialmente: 1s, 2s, 2p, 3s, 3p, 4s.',
            solution: 'Completa: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s².\nAbreviada con Kernel de Argón (Z=18): [Ar] 4s².\nPosee 2 electrones de valencia en el orbital 4s, correspondientes al Grupo IIA.'
          }
        ]
      },
      {
        id: 'qui-top-7',
        title: 'Tabla Periódica Moderna: Periodos, Grupos y Bloques (s, p, d, f)',
        rap: 'RAP 2: Ubica los elementos en la tabla periódica correlacionando su configuración electrónica con familias químicas.',
        summary: 'La Tabla Periódica Moderna se basa en la Ley Periódica enunciada por Henry Moseley (1913): las propiedades físicas y químicas de los elementos varían en función periódica de sus números atómicos Z. Consta de 7 periodos horizontales (que indican el nivel cuántico principal n de valencia) y 18 columnas verticales denominadas grupos o familias (con igual número de electrones de valencia y comportamiento reactivo afín).',
        keyPoints: [
          'Bloque s (Grupos 1 y 2): metales alcalinos (IA) y alcalinotérreos (IIA) muy reactivos, fuertemente electropositivos.',
          'Bloque p (Grupos 13 a 18): metales térreos, carbonoideos, nitrogenoideos, calcógenos, halógenos y gases nobles.',
          'Bloque d (Grupos 3 a 12): metales de transición estructurales (Fe, Cu, Zn, Ni, Cr, Mn, Ti) caracterizados por múltiples estados de oxidación.',
          'Bloque f: elementos de transición interna (lantánidos y actínidos, metales pesados y tierras raras).'
        ],
        constructionApplication: 'Identificación de metales base estructurales (Fe, Al) y metales galvánicos de protección catódica (Zn en láminas galvanizadas, Mg en ánodos de sacrificio).',
        practiceExercises: [
          {
            prompt: '¿A qué periodo, grupo y bloque pertenece el Silicio (Si, Z = 14), componente fundamental de arenas y silicatos del cemento?',
            hint: 'Configuración: 1s² 2s² 2p⁶ 3s² 3p².',
            solution: 'Nivel más externo n = 3 (Periodo 3). Termina en subnivel p (Bloque p). Electrones de valencia 3s² 3p² = 4 (Grupo 14 / IVA).'
          }
        ]
      },
      {
        id: 'qui-top-8',
        title: 'Propiedades Periódicas: Radio Atómico, Electronegatividad y Energía de Ionización',
        rap: 'RAP 3: Predice tendencias periódicas y correlaciona la electronegatividad con la reactividad química de los materiales.',
        summary: 'Las propiedades periódicas varían de manera sistemática a lo largo de la tabla periódica debido a la carga nuclear efectiva (Z_efectiva) y al efecto de apantallamiento de los electrones internos. El radio atómico mide la dimensión del átomo. La electronegatividad de Pauling mide la capacidad de un átomo enlazado para atraer electrones hacia sí. La energía de ionización es la energía mínima necesaria para arrancar el electrón más externo.',
        keyPoints: [
          'Radio Atómico: aumenta hacia abajo en un grupo (más niveles cuánticos) y hacia la izquierda en un periodo (menor atracción nuclear).',
          'Electronegatividad (Escala de Pauling): crece hacia arriba en un grupo y hacia la derecha en un periodo. El elemento más electronegativo es el Flúor (4.0) y los menos son el Cesio y Francio (0.7).',
          'Energía de Ionización: aumenta hacia arriba y hacia la derecha.',
          'Carácter metálico y electropositividad: aumentan hacia abajo y hacia la izquierda.'
        ],
        formulas: [
          {
            name: 'Diferencia de Electronegatividad',
            formula: 'ΔEN = | EN_A - EN_B |',
            explanation: 'Criterio cuantitativo de Pauling para predecir el tipo y porcentaje de carácter iónico de un enlace.'
          }
        ],
        constructionApplication: 'Predicción de la susceptibilidad a la corrosión de armaduras metálicas en presencia de aniones cloruro altamente electronegativos provenientes de agua de mar o sales de deshielo.',
        practiceExercises: [
          {
            prompt: 'Ordenar los siguientes elementos de menor a mayor electronegatividad: Hierro (Fe, EN = 1.83), Oxígeno (O, EN = 3.44), Calcio (Ca, EN = 1.00) y Silicio (Si, EN = 1.90).',
            hint: 'Metales alcalinotérreos < metales de transición < metaloides < no metales halógenos/calcógenos.',
            solution: 'Calcio (1.00) < Hierro (1.83) < Silicio (1.90) < Oxígeno (3.44).'
          }
        ]
      },
      {
        id: 'qui-top-9',
        title: 'Enlace Iónico: Formación de Redes Cristalinas y Propiedades de Aglutinantes',
        rap: 'RAP 4: Modela enlaces iónicos mediante estructuras de Lewis y explica las propiedades de sales y aglutinantes.',
        summary: 'El enlace iónico o electrovalente se produce por la transferencia neta de uno o más electrones desde un átomo de baja electronegatividad (metal) hacia un átomo de alta electronegatividad (no metal), generándose cationes positivos y aniones negativos que se atraen mutuamente mediante intensas fuerzas electrostáticas omnidireccionales conforme a la Ley de Coulomb. Ocurre típicamente cuando ΔEN ≥ 1.7.',
        keyPoints: [
          'Formación de redes cristalinas tridimensionales de alta energía reticular.',
          'Propiedades de los compuestos iónicos: altos puntos de fusión y ebullición (>600°C), gran dureza superficial pero marcada fragilidad mecánica ante esfuerzos cortantes, insolubles en solventes orgánicos y conductores de electricidad solo fundidos o en solución acuosa.',
          'Estructura de Lewis: representación de los electrones de valencia como puntos o cruces alrededor del símbolo del elemento para verificar la regla del octeto (8 electrones de valencia estables).'
        ],
        constructionApplication: 'El óxido de calcio (CaO, cal viva) y el carbonato de calcio (CaCO₃, caliza) son compuestos con predominio de enlace iónico esenciales en la fabricación de clinker para cemento.',
        practiceExercises: [
          {
            prompt: 'Determinar el carácter del enlace químico en el óxido de calcio (CaO) sabiendo que EN(Ca) = 1.00 y EN(O) = 3.44.',
            hint: 'Calcula ΔEN = |3.44 - 1.00| y compara con el umbral 1.7 de Pauling.',
            solution: 'ΔEN = 3.44 - 1.00 = 2.44. Al ser marcadamente superior a 1.7, se trata de un enlace con fuerte carácter iónico (red formada por iones Ca²⁺ y O²⁻).'
          }
        ]
      },
      {
        id: 'qui-top-10',
        title: 'Enlace Covalente y Enlace Metálico en Materiales de Construcción',
        rap: 'RAP 5: Diferencia enlaces covalentes polares y no polares del enlace metálico y justifica la ductilidad del acero.',
        summary: 'El enlace covalente ocurre entre no metales que comparten uno o más pares de electrones para completar su octeto. Si los átomos tienen electronegatividades distintas (0.4 < ΔEN < 1.7), el enlace es covalente polar (densidades de carga asimétricas δ+ y δ-); si ΔEN ≤ 0.4, es covalente no polar. En contraparte, el enlace metálico consiste en una red tridimensional regular de cationes metálicos fijos inmersos en una nube o mar de electrones libres deslocalizados que se mueven libremente por todo el cristal.',
        keyPoints: [
          'Covalente coordinado o dativo: el par electrónico compartido es aportado por un único átomo.',
          'Redes covalentes gigantes: el dióxido de silicio (SiO₂, cuarzo y arenas silíceas) forma una red tetraédrica covalente tridimensional de inmensa dureza y resistencia térmica.',
          'Modelo del mar de electrones en metales: explica la elevada conductividad térmica y eléctrica, el brillo metálico y sobre todo la ductilidad y maleabilidad de los aceros, permitiendo su doblado en ganchos de varillas sin fractura frágil inmediata.'
        ],
        constructionApplication: 'La ductilidad del acero estructural para construcción sismorresistente se debe a la capacidad de los planos de átomos en el enlace metálico para deslizarse unos sobre otros sin romper la cohesión electrónica.',
        practiceExercises: [
          {
            prompt: '¿Por qué una varilla de acero puede doblarse en obra a 90° o 135° sin romperse, mientras que un tabique cerámico se fractura de inmediato al golpearlo?',
            hint: 'Compara el enlace metálico deslocalizado con los enlaces iónicos de planos fijos de carga.',
            solution: 'En el acero el enlace metálico permite el deslizamiento de planos de cationes amortiguados por el mar de electrones libres (deformación plástica dúctil); en el tabique iónico el deslizamiento enfrenta iones del mismo signo repeliéndose violentamente y provocando fractura frágil inmediata.'
          }
        ]
      }
    ]
  },
  {
    id: 'qui-mod-3',
    title: 'Parcial 3: Nomenclatura Inorgánica, Reacciones Químicas, Corrosión y Estequiometría',
    parcialNumber: 3,
    competence: 'Formula y nombra compuestos inorgánicos, balancea ecuaciones de óxido-reducción, analiza la corrosión de armaduras y resuelve cálculos estequiométricos de morteros.',
    topics: [
      {
        id: 'qui-top-11',
        title: 'Nomenclatura Química Inorgánica IUPAC: Óxidos, Hidróxidos y Ácidos',
        rap: 'RAP 1: Nombra y formula óxidos básicos, anhídridos, hidróxidos y ácidos inorgánicos.',
        summary: 'La IUPAC establece normas unificadas para formular y denominar compuestos inorgánicos según los estados de oxidación de los átomos. Las tres nomenclaturas aceptadas son: Sistemática o Estequiométrica (con prefijos mono, di, tri, tetra), Stock (con números romanos del estado de oxidación) y Tradicional (con sufijos oso e ico, hipo- y per-).',
        keyPoints: [
          'Óxidos Básicos (Metal + O²⁻): ej. FeO (Óxido de hierro (II) / óxido ferroso); Fe₂O₃ (Óxido de hierro (III) / óxido férrico); CaO (Óxido de calcio / cal viva).',
          'Óxidos Ácidos o Anhídridos (No metal + O²⁻): ej. SO₃ (Trióxido de azufre); CO₂ (Dióxido de carbono).',
          'Hidróxidos o Bases (Metal + ion OH⁻ con carga -1): ej. Ca(OH)₂ (Hidróxido de calcio / cal apagada); NaOH (Hidróxido de sodio); Al(OH)₃ (Hidróxido de aluminio).',
          'Ácidos Hidrácidos (H⁺ + no metal halógeno o anfígeno): ej. HCl(ac) (Ácido clorhídrico / ácido muriático empleado en limpieza de canteras y fachadas).'
        ],
        constructionApplication: 'Elaboración de pastas y morteros de albañilería mediante la hidratación exotérmica de la cal viva: CaO + H₂O -> Ca(OH)₂.',
        practiceExercises: [
          {
            prompt: 'Nombrar conforme a la nomenclatura Stock los siguientes compuestos de uso común en construcción: Fe₂O₃, Ca(OH)₂ y SiO₂.',
            hint: 'Determina el número de oxidación del elemento catiónico.',
            solution: 'Fe₂O₃: Óxido de hierro (III).\nCa(OH)₂: Hidróxido de calcio.\nSiO₂: Óxido de silicio (IV) o Dióxido de silicio.'
          }
        ]
      },
      {
        id: 'qui-top-12',
        title: 'Nomenclatura de Sales y Química del Yeso y Cemento',
        rap: 'RAP 2: Formula y nombra sales binarias y oxisales y explica las fases minerales del cemento y yeso.',
        summary: 'Las sales resultan de la reacción de neutralización entre un ácido y una base (Ácido + Base -> Sal + Agua). Se clasifican en sales haloideas o binarias (derivadas de hidrácidos, terminación -uro) y oxisales (derivadas de oxiácidos, cambiando sufijos: -oso por -ito, e -ico por -ato). En la construcción, las sales oxisales de calcio y sulfatos son los componentes de mayor relevancia mineralógica.',
        keyPoints: [
          'Carbonato de Calcio (CaCO₃): piedra caliza natural, base del cemento Portland.',
          'Sulfato de Calcio dihidratado (CaSO₄ · 2H₂O): yeso de mina natural.',
          'Sulfato de Calcio hemihidratado (CaSO₄ · ½H₂O): yeso calcinado o yeso de construcción (estuco y molduras) que al mezclarse con agua rehidrata endureciendo rápidamente.',
          'Silicato tricálcico (3CaO · SiO₂ o C₃S / Alita) y Silicato dicálcico (2CaO · SiO₂ o C₂S / Belita): fases mineralógicas activas del clinker del cemento Portland.'
        ],
        constructionApplication: 'Control del tiempo de fraguado del cemento Portland mediante la adición de 3% a 5% de yeso dihidratado (CaSO₄ · 2H₂O) que previene el fraguado instantáneo del aluminato tricálcico (C₃A).',
        practiceExercises: [
          {
            prompt: 'Escribir la fórmula química del Sulfato de Calcio dihidratado y explicar qué reacción ocurre al calentarlo a 120°C en la producción de yeso de obra.',
            hint: 'Pierde 1.5 moléculas de agua por calcinación térmica.',
            solution: 'Fórmula: CaSO₄ · 2H₂O.\nReacción: CaSO₄ · 2H₂O + calor -> CaSO₄ · ½ H₂O (hemihidrato o escayola) + 1.5 H₂O(g).'
          }
        ]
      },
      {
        id: 'qui-top-13',
        title: 'Reacciones Químicas, Balanceo de Ecuaciones y Procesos Redox',
        rap: 'RAP 3: Balancea ecuaciones químicas por tanteo y óxido-reducción reconociendo agentes oxidantes y reductores.',
        summary: 'Una reacción química es un proceso termodinámico en el cual una o más sustancias (reactivos) transforman sus enlaces para dar lugar a nuevas especies (productos). Las ecuaciones químicas deben balancearse rigurosamente para cumplir con la Ley de Conservación de la Masa. En las reacciones Redox, ocurren transferencias de electrones: la oxidación implica pérdida de electrones (aumento del estado de oxidación) y la reducción implica ganancia de electrones (disminución del estado de oxidación).',
        keyPoints: [
          'Tipos de reacciones: Síntesis o combinación (A + B -> AB), Descomposición o análisis (AB -> A + B), Desplazamiento simple (A + BC -> AC + B) y Doble desplazamiento o metátesis (AB + CD -> AD + CB).',
          'Agente Reductor: sustancia que se oxida (cede electrones).',
          'Agente Oxidante: sustancia que se reduce (captura electrones).',
          'Balanceo por tanteo: ajuste sistemático de coeficientes estequiométricos enteros siguiendo el orden: 1° Metales, 2° No metales, 3° Hidrógeno y 4° Oxígeno.'
        ],
        formulas: [
          {
            name: 'Regla Redox de Estados de Oxidación',
            formula: 'Oxidación: e⁻ perdidos  <=>  Reducción: e⁻ ganados',
            explanation: 'El número total de electrones cedidos por el agente reductor es idéntico al absorbido por el agente oxidante.'
          }
        ],
        constructionApplication: 'Reacción de apagado de la cal en obra: CaO(s) + H₂O(l) -> Ca(OH)₂(s) + 15.5 kcal/mol (reacción de combinación fuertemente exotérmica).',
        practiceExercises: [
          {
            prompt: 'Balancear por tanteo la ecuación de combustión completa del gas propano utilizado en sopletes para calentar impermeabilizantes asfálticos: C₃H₈ + O₂ -> CO₂ + H₂O.',
            hint: 'Balancea C (3), luego H (8), y finalmente O.',
            solution: 'C₃H₈ + 5 O₂ -> 3 CO₂ + 4 H₂O.\nComprobación: 3 C, 8 H, 10 O en ambos miembros.'
          }
        ]
      },
      {
        id: 'qui-top-14',
        title: 'Electroquímica y Corrosión del Acero de Refuerzo en Concreto',
        rap: 'RAP 4: Analiza el mecanismo electroquímico de corrosión de varillas de acero y propone técnicas de protección pasiva y catódica.',
        summary: 'La corrosión de las armaduras embebidas en el concreto armado es un fenómeno electroquímico que deteriora gravemente la durabilidad de las estructuras. El concreto sano proporciona una protección pasiva alcalina natural debido al Ca(OH)₂ generado en la hidratación (pH entre 12.5 y 13.5), que crea una película protectora de óxido férrico pasivante sobre el acero. La corrosión se desencadena cuando esta capa se destruye por: 1) Carbonatación (el CO₂ atmosférico reacciona con Ca(OH)₂ bajando el pH a <9) o 2) Penetración de iones cloruro (Cl⁻ de sales marinas o descongelantes).',
        keyPoints: [
          'Pila electroquímica de corrosión: Ánodo (el hierro se oxida cediendo electrones: Fe -> Fe²⁺ + 2e⁻); Cátodo (el oxígeno disuelto se reduce: O₂ + 2H₂O + 4e⁻ -> 4OH⁻); Electrolito (el agua en los poros del concreto); Conductor metálico (la propia varilla de acero).',
          'Los productos de corrosión (óxidos e hidróxidos de hierro como Fe₂O₃ · nH₂O) ocupan de 3 a 6 veces más volumen que el acero original, generando presiones expansivas internas de hasta 30 MPa que fisuran y descascaran el recubrimiento de concreto.',
          'Medidas preventivas: respetar el recubrimiento mínimo de concreto (3 a 5 cm según norma NTC-CDMX), usar bajas relaciones agua/cemento (A/C ≤ 0.45) para reducir porosidad, y aplicar protección catódica con ánodos de sacrificio de Zinc.'
        ],
        constructionApplication: 'Diseño de recubrimientos mínimos de concreto en trabes y columnas de puentes y muelles marítimos para impedir el frente de carbonatación y ataque de cloruros.',
        practiceExercises: [
          {
            prompt: 'Escribir la ecuación química de la carbonatación del concreto y explicar por qué provoca la pérdida de protección del acero.',
            hint: 'El hidróxido de calcio reacciona con el dióxido de carbono del aire formando carbonato de calcio y agua.',
            solution: 'Ca(OH)₂ + CO₂ -> CaCO₃ + H₂O.\nEl Ca(OH)₂ soluble alcalino que mantenía el pH en 13 se neutraliza formando CaCO₃ insoluble, reduciendo el pH a valores menores a 9. En ese medio neutro la capa pasivante se desintegra y el acero comienza a oxidarse activamente.'
          }
        ]
      },
      {
        id: 'qui-top-15',
        title: 'Estequiometría, Soluciones Químicas y Control de Calidad del Agua de Amasado',
        rap: 'RAP 5: Realiza cálculos de reactivo limitante, molaridad y límites permisibles de sulfatos y cloruros en aguas de concreto.',
        summary: 'La estequiometría estudia las relaciones cuantitativas entre reactivos y productos en una reacción química basándose en el concepto de mol (6.022 × 10²³ partículas elementales, Número de Avogadro) y la masa molar (g/mol). Las soluciones químicas son mezclas homogéneas de soluto y solvente. La calidad del agua de mezclado y curado para el concreto hidráulico está regulada por la norma NMX-C-122-ONNCCE para restringir la presencia de impurezas que alteren el fraguado o degraden el acero.',
        keyPoints: [
          'Número de moles: n = masa (g) / Masa Molar (g/mol).',
          'Molaridad: M = moles de soluto / litros de solución (mol/L).',
          'Partes por millón (ppm): 1 ppm = 1 mg de soluto por litro de solución acuosa.',
          'Límites máximos permisibles en agua para concreto según NMX-C-122: Cloruros ≤ 1,000 ppm (para concreto simple) y ≤ 500 ppm (para concreto presforzado o armado expuesto); Sulfatos (como SO₄²⁻) ≤ 1,000 ppm; Sólidos suspendidos ≤ 2,000 ppm; pH admisible entre 6.0 y 8.5 (nunca aguas ácidas ni residuales).'
        ],
        formulas: [
          {
            name: 'Molaridad de una Solución',
            formula: 'M = n / V = m / (PM · V)',
            explanation: 'Concentración molar expresada en moles de soluto por cada litro de solución.'
          },
          {
            name: 'Partes por Millón (ppm)',
            formula: 'ppm = (masa_soluto [mg]) / (Volumen_solución [L])',
            explanation: 'Medida de concentración para sustancias muy diluidas en aguas de obra.'
          }
        ],
        constructionApplication: 'Evaluación fisicoquímica de fuentes de agua de pozo o río para certificar su uso en plantas de concreto premezclado y prevenir el ataque por sulfatos que desintegra el concreto por formación de etringita expansiva.',
        practiceExercises: [
          {
            prompt: 'En un análisis de laboratorio de agua de pozo para una obra se determinan 0.35 g de iones cloruro (Cl⁻) disueltos en una muestra de 500 mL. Calcular la concentración en ppm y determinar si es apta para concreto armado (límite 500 ppm).',
            hint: '1 g = 1,000 mg; Volumen en litros = 0.50 L; ppm = mg / L.',
            solution: '0.35 g = 350 mg.\nConcentración = 350 mg / 0.50 L = 700 ppm.\nConclusión: No es apta para concreto armado, ya que 700 ppm supera el límite de 500 ppm estipulado por la norma NMX-C-122, pudiendo acelerar la corrosión de las varillas.'
          }
        ]
      }
    ]
  }
];

import { StudyModule } from '../../types';

export const OBRA_NEGRA_GUIDES: StudyModule[] = [
  {
    id: 'obr-mod-1',
    title: 'Parcial 1: Trabajos Preliminares, Nivelación, Trazo, Excavaciones y Rellenos Compactados',
    parcialNumber: 1,
    competence: 'Ejecuta y supervisa los trabajos preliminares en el terreno, aplicando técnicas de despalme, nivelación con manguera, trazo con crucetas, excavación, entibados y compactación con tepetate.',
    topics: [
      {
        id: 'obr-top-1',
        title: 'Trabajos Preliminares: Limpieza, Deshierbe y Despalme del Terreno',
        rap: 'RAP 1: Coordina las actividades preliminares de acondicionamiento del predio conforme a especificaciones técnicas.',
        summary: 'Los trabajos preliminares constituyen el conjunto de labores requeridas antes del desplante físico de la estructura para preparar el terreno natural. Comprenden el cercado perimetral provisional, deshierbe, tala controlada con permiso ambiental, demolición de construcciones existentes y el despalme de la capa de tierra vegetal o suelo orgánico (humus de 15 a 30 cm de espesor), el cual carece de capacidad de carga.',
        keyPoints: [
          'Instalaciones provisionales de obra: caseta de vigilancia, almacén de herramientas y materiales (cemento bajo techo sobre tarimas de madera aisladas del suelo), oficina de residencia y letrinas portátiles.',
          'Acometida provisional de energía eléctrica de obra y toma de agua potable para mezclado y curado.',
          'Despalme: remoción mecánica o manual de los primeros 20 a 30 cm de suelo orgánico para evitar asentamientos por descomposición biológica.',
          'Retiro y tiro de escombro y material producto de despalme en bancos de tiro autorizados con manifiesto ambiental de la SEDEMA.'
        ],
        constructionApplication: 'Almacenamiento del cemento en bodega: estiba máxima de 10 sacos de altura, separados 15 cm del piso sobre tarimas y 20 cm de los muros para evitar la absorción prematura de humedad ambiental.',
        practiceExercises: [
          {
            prompt: 'Calcular el volumen de material de despalme a desalojar de un terreno rectangular de 12.00 m de frente por 25.00 m de fondo con un espesor de capa vegetal de 20 cm, considerando un factor de abundamiento del 30%.',
            hint: 'Volumen en banco = Largo × Ancho × Espesor; Volumen suelto = V_banco × (1 + f_abundamiento).',
            solution: 'V_banco = 12.00 m × 25.00 m × 0.20 m = 60.00 m³.\nVolumen suelto con abundamiento (30%): V_suelto = 60.00 m³ × 1.30 = 78.00 m³ de tierra para camiones de volteo de 7 m³ (se requieren 12 viajes).'
          }
        ]
      },
      {
        id: 'obr-top-2',
        title: 'Nivelación con Manguera y Bancos de Nivel de Referencia',
        rap: 'RAP 2: Traslada cotas altimétricas y establece bancos de nivel empleando el principio de vasos comunicantes.',
        summary: 'La nivelación permite establecer cotas horizontales exactas en toda la extensión de la obra. El método tradicional de alta precisión utiliza una manguera de plástico transparente de 1/2 pulgada de diámetro llena de agua limpia y sin burbujas de aire, basada en el principio hidrostático de los vasos comunicantes, donde el nivel libre del líquido se equilibra a la misma cota.',
        keyPoints: [
          'Banco de Nivel (BN): punto físico fijo e inalterable de cota conocida (ej. guarnición de la banqueta municipal o mojonera de concreto), asignado convencionalmente como Cota ±0.00 m.',
          'Nivel de referencia de obra: se marca una línea perimetral a +1.00 m sobre el nivel de piso terminado (NPT) en muros o estacas testigos para verificar niveles de excavación, cerramientos y losas.',
          'Precauciones con la manguera: evitar dobleces que estrangulen el paso del agua, verificar la ausencia total de burbujas y purgar el líquido antes de cada sesión de nivelación.'
        ],
        constructionApplication: 'Marcado del nivel a +1.00 m en las esquinas de la obra para verificar la profundidad de zanjas de cimentación y desplante uniforme de zapatas.',
        practiceExercises: [
          {
            prompt: 'Si el banco de nivel de la banqueta está a cota ±0.00 m y el proyecto indica que el Nivel de Piso Terminado (NPT) de la casa debe quedar a +0.45 m y el desplante de la cimentación a -1.20 m respecto a la banqueta, ¿cuál es la profundidad de excavación desde el NPT?',
            hint: 'Profundidad total desde NPT = NPT - Cota de fondo.',
            solution: 'Profundidad = (+0.45 m) - (-1.20 m) = 1.65 metros de profundidad desde el nivel interior proyectado de piso terminado.'
          }
        ]
      },
      {
        id: 'obr-top-3',
        title: 'Trazo y Replanteo con Crucetas, Hilos y Triángulo Pitagórico 3-4-5',
        rap: 'RAP 3: Replantea en el terreno los ejes estructurales de proyecto utilizando crucetas de madera y escuadra pitagórica.',
        summary: 'El trazo consiste en transferir las dimensiones de los ejes de los planos al terreno natural en escala real 1:1. El replanteo ubica físicamente los anchos de cepa de cimentación y los ejes de muros portantes mediante puentes o crucetas de madera clavadas fuera del perímetro de excavación unidas por hilos reventones.',
        keyPoints: [
          'Crucetas o vallas de trazo: caballetes formados por dos estacas de 2"×2" y un travesaño horizontal de duela de 1"×4" nivelado a cota fija, situados a 1.0 m fuera de la zona de excavación para no perder la referencia.',
          'Hilos de trazo (hilo cáñamo o reventón): se tensan entre clavos colocados en los travesaños marcando el eje del muro y el ancho de la cepa.',
          'Escuadra 3-4-5 (Teorema de Pitágoras: 3² + 4² = 9 + 16 = 25 = 5²): para garantizar ángulos rectos de 90° exactos en las esquinas del predio se miden múltiplos como 3 m en un hilo, 4 m en el hilo perpendicular y la diagonal tensada debe medir exactamente 5 m (o 1.50 - 2.00 - 2.50 m en espacios reducidos).'
        ],
        constructionApplication: 'Verificación de que las esquinas del predio no estén falsas antes de excavar, evitando pleitos de colindancia o invasión de terrenos vecinos.',
        practiceExercises: [
          {
            prompt: 'Al verificar la escuadra de dos hilos de colindancia se miden 6.00 m en el eje X y 8.00 m en el eje Y. ¿Cuánto debe medir la diagonal entre esos dos puntos para asegurar un ángulo recto perfecto de 90°?',
            hint: 'Aplica el triángulo pitagórico proporcional 3-4-5 con factor 2.',
            solution: 'Diagonal = √[6.00² + 8.00²] = √[36 + 64] = √100 = 10.00 metros exactos.'
          }
        ]
      },
      {
        id: 'obr-top-4',
        title: 'Excavaciones, Ángulo de Talud Natural, Ademados y Control Freático',
        rap: 'RAP 4: Determina procedimientos seguros de excavación, estabilización de taludes y control de aguas freáticas.',
        summary: 'La excavación es la remoción de material para alojar la cimentación. Puede ser manual (con pico, pala y marro hasta 1.50 m) o mecánica (retroexcavadora para grandes volúmenes). Para profundidades mayores a 1.50 m es obligatorio proteger las paredes contra deslaves mediante taludes o ademados.',
        keyPoints: [
          'Talud natural de reposo: ángulo máximo que forma un suelo suelto sin deslizarse (roca sana 90°, tepetate firme 60°-70°, arcillas 45°, arenas secas 30°-35°).',
          'Ademados y entibados: estructuras de soporte provisional formadas por tablones verticales apoyados en las paredes de la zanja sostenidos por puntales transversales o codales para proteger la vida de los operarios.',
          'Nivel freático y achique: cuando el agua subterránea aflora en la cepa, se requiere bombeo continuo mediante cárcamos perimetrales de captación y bombas sumergibles loderas.',
          'Plantilla de concreto pobre (f\'c = 100 kg/cm², espesor 5 cm): capa colocada en el fondo de la excavación para aislar el armado de acero del lodo y garantizar una superficie plana y limpia.'
        ],
        constructionApplication: 'Colocación obligatoria de plantilla de concreto de 5 cm antes de armar zapatas para evitar la contaminación del concreto estructural por tierra arcillosa.',
        practiceExercises: [
          {
            prompt: '¿Por qué la norma de seguridad en la construcción prohíbe excavar zanjas verticales de más de 1.50 m de profundidad sin ademe o banqueo en suelos limosos o arcillosos?',
            hint: 'Presión activa lateral del suelo y peso propio sin confinamiento.',
            solution: 'Porque el peso propio del suelo supera la cohesión y resistencia al corte del estrato, provocando el colapso súbito del talud por empuje activo de tierras, sepultando instantáneamente a los trabajadores en el fondo de la zanja.'
          }
        ]
      },
      {
        id: 'obr-top-5',
        title: 'Rellenos Estructurales, Materiales de Banco (Tepetate) y Prueba Proctor',
        rap: 'RAP 5: Supervisa la colocación de rellenos por capas controladas y verifica el grado de compactación de suelos.',
        summary: 'Los rellenos devuelven el terreno a los niveles de proyecto tras colar cimientos y alojar tuberías. Deben ejecutarse con material seleccionado de banco libre de materia orgánica y basura (comúnmente tepetate o material granular limo-arenoso clasificado). El relleno se compacta en capas delgadas mediante pisón de mano, bailarina compactadora (apisonador vertical) o placa vibratoria.',
        keyPoints: [
          'Espesor de capas: capas uniformes no mayores a 15 cm de espesor suelto para pisón manual, o 20 cm para apisonador mecánico de impacto.',
          'Humedad óptima de compactación: se adiciona agua mediante riego uniforme hasta alcanzar la humedad que permite la máxima densidad seca del suelo.',
          'Prueba Proctor Estándar o Modificada: ensayo de laboratorio que determina la densidad seca máxima (γ_d max) y la humedad óptima del material de banco.',
          'Grado de compactación requerido en obra: mínimo 90% a 95% del Proctor bajo pisos interiores y firmes de concreto para evitar agrietamientos por asentamiento postconstructivo.'
        ],
        constructionApplication: 'Relleno y compactación bajo el firme de concreto de la planta baja para evitar que el piso se hunda o fracture ante el peso de los muebles.',
        practiceExercises: [
          {
            prompt: 'Si en el laboratorio se obtuvo una densidad seca máxima Proctor de 1,650 kg/m³ para un tepetate y en obra la prueba del cono de arena arrojó una densidad seca de 1,530 kg/m³, ¿cuál es el porcentaje de compactación alcanzado y cumple la especificación de 90% mínimo?',
            hint: '% Compactación = (γ_obra / γ_lab) × 100%.',
            solution: '% Compactación = (1,530 kg/m³ / 1,650 kg/m³) × 100% = 92.7%. Sí cumple la especificación mínima del 90% exigida para desplante de firmes.'
          }
        ]
      }
    ]
  },
  {
    id: 'obr-mod-2',
    title: 'Parcial 2: Cimentaciones Superficiales y Profundas, Dalas de Desplante e Impermeabilización',
    parcialNumber: 2,
    competence: 'Analiza, cuantifica y supervisa la construcción de cimientos de mampostería, zapatas aisladas y corridas, losas de cimentación y sistemas de impermeabilización de desplante.',
    topics: [
      {
        id: 'obr-top-6',
        title: 'Cimentaciones de Mampostería de Piedra Braza',
        rap: 'RAP 1: Construye y cuantifica cimientos de mampostería de piedra braza según especificaciones de proyecto.',
        summary: 'Cimentación superficial tradicional empleada en terrenos de buena a mediana capacidad portante (terrenos firmes con q_adm ≥ 10 t/m²). Consiste en zanjas trapezoidales rellenas de piedra braza basáltica asentada con mortero cemento-arena 1:4 o 1:5, con un talud o escarpio exterior inclinado entre 60° y 75° respecto a la horizontal.',
        keyPoints: [
          'Partes del cimiento de mampostería: 1) Base o plantilla inferior (ancho B); 2) Escarpio o talud lateral inclinado; 3) Corona superior (ancho b, comúnmente 30 cm para recibir dalas de 15 cm); 4) Altura total H (mínimo 60 a 80 cm).',
          'Tipos: Cimiento Intermedio (doble escarpio simétrico en forma de trapecio) y Cimiento de Lindero o Colindancia (un solo escarpio hacia el interior del predio para no invadir al vecino).',
          'Piedras: deben ser sanas, no intemperizadas, angulosas (para favorecer la trabazón mecánica), lavadas y humedecidas antes de su colocación. No se permiten piedras de canto rodado (redondas de río).'
        ],
        formulas: [
          {
            name: 'Ancho de Base de Cimiento',
            formula: 'B = Carga_Total / (Capacidad_Portante_Suelo × Longitud)',
            explanation: 'Dimensión de la base requerida para no sobrepasar el esfuerzo admisible del terreno.'
          }
        ],
        constructionApplication: 'Cimentación económica y durable en casas habitación de 1 y 2 niveles en zonas con estratos rocosos o tepetatosos (valles del centro de México).',
        practiceExercises: [
          {
            prompt: 'Un muro de carga transmite 4,500 kg por metro lineal de cimiento. Si el suelo tiene una resistencia admisible de 7,500 kg/m² y el cimiento tiene una corona de 30 cm y altura de 80 cm, calcular el ancho mínimo de base B considerando el peso propio del cimiento (estimado en 1,000 kg/m).',
            hint: 'Carga total = 4,500 + 1,000 = 5,500 kg/m. B = Carga total / q_adm.',
            solution: 'B = 5,500 kg / 7,500 kg/m² = 0.733 m. Se adopta una base reglamentaria B = 0.80 m (80 cm).'
          }
        ]
      },
      {
        id: 'obr-top-7',
        title: 'Zapatas de Concreto Armado (Aisladas, Corridas) y Losas de Cimentación',
        rap: 'RAP 2: Diseña y supervisa el armado y colado de zapatas de concreto armado y cajones de cimentación.',
        summary: 'Cuando las cargas son elevadas o el terreno es compresible (ej. arcillas lacustres de la CDMX), se emplean zapatas de concreto reforzado con varilla corrugada. Las zapatas aisladas reciben columnas puntuales; las zapatas corridas reciben muros continuos; las losas de cimentación cubren toda el área de la edificación repartiendo la carga uniformemente y reduciendo asentamientos diferenciales.',
        keyPoints: [
          'Zapata aislada: placa rectangular o cuadrada de concreto con un dado central de unión a la columna.',
          'Parrilla de refuerzo: varillas corrugadas colocadas en dos direcciones ortogonales en el lecho inferior de la losa de zapata, soportadas sobre calzadores o silletas de concreto para garantizar un recubrimiento libre mínimo de 5 cm contra el terreno.',
          'Losa de cimentación (Radier): placa de concreto reforzado de 15 a 30 cm de espesor rigidizada con contratrabes invertidas en retícula.',
          'Cajón de cimentación compensado: excavación que retira un peso de tierra igual al peso del edificio nuevo para equilibrar esfuerzos en suelos blandos.'
        ],
        constructionApplication: 'Uso de losas de cimentación con cajones de compensación huecos en la Zona Lacustre de la Ciudad de México para contrarrestar el hundimiento regional.',
        practiceExercises: [
          {
            prompt: '¿Por qué el recubrimiento libre de concreto para el acero de refuerzo en una zapata colada contra el terreno debe ser de al menos 5 cm a 7.5 cm, mientras que en losas superiores es de solo 2 cm?',
            hint: 'Presencia de humedad edáfica, sales agresivas del subsuelo y rugosidad de la superficie excavada.',
            solution: 'Para proteger el acero de refuerzo contra la corrosión por humedad permanente del subsuelo y la penetración de sulfatos y cloruros agresivos disueltos en el agua subterránea, garantizando la durabilidad estructural.'
          }
        ]
      },
      {
        id: 'obr-top-8',
        title: 'Cimentaciones Profundas: Pilotes de Fricción, Pilotes de Punta y Micropilotes',
        rap: 'RAP 3: Clasifica los sistemas de pilotaje profundo y describe su proceso constructivo en suelos compresibles.',
        summary: 'Cuando la capa superficial de suelo carece de capacidad de carga admisible o presenta asentamientos excesivos a profundidades mayores a 5 metros, es imperativo transmitir las cargas estructurales a estratos profundos más resistentes mediante cimentaciones profundas como pilotes o pilas perforadas.',
        keyPoints: [
          'Pilotes de Punta: elementos esbeltos que atraviesan los estratos compresibles blandos hasta apoyarse sólidamente sobre la capa dura resistente (ej. la primera o segunda capa dura de la CDMX a 30-40 m de profundidad).',
          'Pilotes de Fricción: transmiten la carga mediante la fricción o adherencia tangencial generada entre la superficie lateral del fuste del pilote y el suelo circundante.',
          'Pilotes de Control: dispositivos mecánicos patentados por el Ing. Manuel González Flores que incorporan un gato hidráulico o puente deformable en la cabeza del pilote para permitir que el edificio descienda a la par del hundimiento regional del entorno.',
          'Pilas de concreto: elementos de gran diámetro (≥ 80 cm) excavados in situ con broca y lodos bentoníticos estabilizadores, coladas con tubería Tremie.'
        ],
        constructionApplication: 'Diseño y colocación de pilotes de fricción y control en edificios de gran altura del Paseo de la Reforma en la Ciudad de México para prevenir la emersión relativa del edificio.',
        practiceExercises: [
          {
            prompt: '¿Cuál es la función del lodo bentonítico durante la perforación de una pila profunda de cimentación antes del colado del concreto?',
            hint: 'Presión hidrostática contra las paredes del pozo excavado.',
            solution: 'El lodo bentonítico es una suspensión tixotrópica que ejerce presión hidrostática positiva contra las paredes de la excavación, impidiendo el derrumbe de las paredes del pozo sin necesidad de ademe metálico continuo.'
          }
        ]
      },
      {
        id: 'obr-top-9',
        title: 'Dalas de Desplante, Armado de Acero y Confinamiento según NTC',
        rap: 'RAP 4: Construye dalas de desplante respetando cuantías mínimas de acero, anclajes y traslapes.',
        summary: 'La dala o cadena de desplante es un elemento de concreto reforzado colocado sobre la corona del cimiento para repartir uniformemente la carga del muro, amarrar la cimentación e impedir asentamientos diferenciales. Conecta los castillos y rigidiza la base de todos los muros portantes.',
        keyPoints: [
          'Sección típica de dala de desplante: 15 cm de ancho (igual al muro) por 20 cm de peralte.',
          'Armado reglamentario mínimo según NTC Mampostería: 4 varillas longitudinales de No. 3 (3/8", 9.5 mm) con estribos cerrados de alambrón de 1/4" (No. 2) separados a no más de 20 cm, con ganchos sísmicos a 135° en los remates.',
          'Longitud de desarrollo y traslapes: mínimo 40 veces el diámetro de la varilla (para varilla de 3/8", 40 × 0.95 cm = 38 cm; se utiliza traslape de 40 cm alternado fuera de zonas de momento máximo).',
          'Vaciado de concreto: concreto estructural con resistencia mínima f\'c = 200 o 250 kg/cm² con agregado máximo de 3/4" (19 mm).'
        ],
        constructionApplication: 'Supervisión de estribos en dalas de desplante: rechazar el uso de grapas abiertas o estribos amarrados a 90° que se abren ante sacudidas sísmicas.',
        practiceExercises: [
          {
            prompt: 'Si se tiene un tramo de muro continuo de 18.00 metros de longitud, ¿cuántos estribos de alambrón de 1/4" se requieren para la dala de desplante considerando una separación de 15 cm centro a centro?',
            hint: 'Número de estribos = (Longitud / Separación) + 1.',
            solution: 'Número de estribos = (18.00 m / 0.15 m) + 1 = 120 + 1 = 121 estribos.'
          }
        ]
      },
      {
        id: 'obr-top-10',
        title: 'Sistemas de Impermeabilización de Desplante contra Humedad Capilar',
        rap: 'RAP 5: Aplica barreras hidrófugas e impermeabilizantes sobre cadenas para evitar el salitre en muros.',
        summary: 'La humedad freática del terreno asciende por los poros de la mampostería mediante el fenómeno físico de capilaridad, arrastrando sales disueltas que cristalizan en la superficie del muro destruyendo los aplanados (salitre o eflorescencias). Para erradicar este problema se coloca una barrera impermeable continua sobre la dala de desplante antes de levantar la primera hilada de tabiques.',
        keyPoints: [
          'Fenómeno de ascensión capilar: los tubos capilares microscópicos del concreto y tabique succionan el agua hasta alturas de 1.0 a 1.5 metros sobre el nivel de suelo.',
          'Procedimiento técnico de impermeabilización de corona: 1) Limpieza y aplicación de imprimador asfáltico base agua o solvente; 2) Tendido de membrana de polietileno de alta densidad (calibre 600) o fieltro asfáltico saturado de 15 lb con traslape mínimo de 10 cm; 3) Segunda capa de emulsión asfáltica selladora.',
          'Uso de aditivos hidrófugos integrales en el mortero de asiento de las tres primeras hiladas de tabique.',
          'Canal perimetral de drenaje ciego con tubo perforado y geotextil para desalojar aguas pluviales superficiales lejos del cimiento.'
        ],
        constructionApplication: 'Prevención de eflorescencias salinas y desprendimiento de zoclos de madera en las habitaciones de planta baja.',
        practiceExercises: [
          {
            prompt: '¿Por qué la membrana de impermeabilización sobre la dala de desplante no debe perforarse con anclajes o clavos al colocar la primera hilada de tabique?',
            hint: 'Efecto de puente hidráulico a través de las perforaciones.',
            solution: 'Cualquier perforación en la membrana crea un puente capilar directo por donde el agua del terreno penetra y asciende hacia el muro de tabique, anulando por completo la efectividad de la barrera hidrófuga.'
          }
        ]
      }
    ]
  },
  {
    id: 'obr-mod-3',
    title: 'Parcial 3: Muros de Mampostería Confinada, Castillos, Cimbras, Losas y Control de Concreto',
    parcialNumber: 3,
    competence: 'Supervisa el levantamiento de muros portantes de mampostería confinada, cimbrados de madera y colado de losas macizas y aligeradas, así como el control de calidad del concreto hidráulico.',
    topics: [
      {
        id: 'obr-top-11',
        title: 'Muros de Mampostería Confinada: Aparejos, Plomada y Morteros',
        rap: 'RAP 1: Construye muros de mampostería de tabique rojo y block cumpliendo normas de confinamiento y alineación.',
        summary: 'Los muros portantes soportan cargas verticales de losas y cargas laterales de sismo y viento. Se clasifican según el material en: Tabique rojo recocido (dimensiones nominales 7×14×28 cm), Tabicón de concreto, Block hueco de concreto (12×20×40 cm o 15×20×40 cm). Se asientan con mortero cemento-arena en proporción 1:4 o 1:5 con juntas de espesor entre 1.0 y 1.5 cm.',
        keyPoints: [
          'Aparejos de albañilería: 1) Al hilo (muro de 14 cm de espesor, el más común en vivienda); 2) Al tizón (muro de 28 cm de espesor para mayor resistencia portante o muros de contención); 3) Capuchino (muro de 7 cm, solo para divisiones no estructurales); 4) Palomero (para ventilación de cámaras de aire en azoteas).',
          'Control de verticalidad y alineación: plomada de albañil (tolerancia máxima de desplome: 5 mm por cada metro de altura), regla metálica de 2 m y nivel de gota.',
          'Cuatrapeado: el traslape vertical entre juntas de hiladas contiguas debe ser de al menos 1/4 a 1/2 de la longitud del tabique para trabar la mampostería.',
          'Humectación previa del tabique rojo: indispensable sumergir o mojar los tabiques antes de colocarlos para que no absorban el agua del mortero deshidratando la mezcla.'
        ],
        constructionApplication: 'Verificación de que ningún muro quede desplomado más de 1 cm en toda su altura para no generar excentricidades de carga que induzcan pandeo.',
        practiceExercises: [
          {
            prompt: 'Calcular cuántos tabiques rojos recocidos de 7×14×28 cm se necesitan para levantar 1 m² de muro en aparejo al hilo, considerando una junta de mortero de 1.5 cm y un desperdicio del 5%.',
            hint: 'Dimensiones con junta: Alto = 7 + 1.5 = 8.5 cm (0.085 m); Largo = 28 + 1.5 = 29.5 cm (0.295 m). Piezas/m² = 1 / (0.085 × 0.295).',
            solution: 'Área por pieza con junta = 0.085 m × 0.295 m = 0.025075 m².\nPiezas teóricas = 1 / 0.025075 ≈ 39.88 tabiques/m².\nCon 5% de desperdicio: 39.88 × 1.05 ≈ 42 piezas de tabique por m².'
          }
        ]
      },
      {
        id: 'obr-top-12',
        title: 'Castillos y Cadenas de Cerramiento (Confinamiento Sísmico según NTC)',
        rap: 'RAP 2: Ubica y arma castillos ahogados y exteriores para confinar la mampostería según el Reglamento de Construcciones.',
        summary: 'De acuerdo con las Normas Técnicas Complementarias (NTC) del RCDF, la mampostería confinada debe estar enmarcada en sus cuatro bordes por elementos de concreto reforzado (dalas y castillos) para garantizar un comportamiento dúctil y monolítico ante sismos.',
        keyPoints: [
          'Ubicación obligatoria de castillos: 1) En todas las esquinas y cruces de muros; 2) En los extremos libres de muros; 3) A los lados de vanos de puertas o ventanas cuyo claro sea mayor a 1.20 m; 4) A distancias intermedias no mayores a 1.5 veces la altura del muro ni más de 4.0 metros entre centros.',
          'Dentado del muro: en la unión con el castillo se deben dejar tabiques salientes y entrantes de 3 a 5 cm en cada hilada ("muro dentado") para lograr un amarre mecánico perfecto con el concreto colado.',
          'Armado de castillos: mínimo 4 varillas de No. 3 (3/8") con estribos de alambrón No. 2 (1/4") a cada 20 cm, cerrando la separación a cada 10 cm en los primeros 50 cm superiores e inferiores (zonas de confinamiento plástico).',
          'Cadena de cerramiento: colocada a la altura de dinteles de puertas y ventanas para recibir la losa superior y ligar todo el cajón estructural perimetral.'
        ],
        constructionApplication: 'Inspección de obra: rechazar castillos que no cuenten con estribos cerrados a 135° o cuya separación supere los 20 cm en la zona central.',
        practiceExercises: [
          {
            prompt: 'Un muro perimetral continuo tiene 7.20 m de longitud y 2.60 m de altura libre sin vanos. ¿Cuántos castillos intermedios se deben colocar como mínimo según la norma de espaciamiento máximo (L_max ≤ 1.5 × H o 4.0 m)?',
            hint: '1.5 × 2.60 m = 3.90 m. Como 3.90 m < 4.0 m, la distancia máxima entre castillos es 3.90 m.',
            solution: 'Como 7.20 m > 3.90 m, no se puede dejar sin castillo intermedio. Colocando 1 castillo intermedio al centro se obtienen dos tramos de 3.60 m, los cuales son menores a 3.90 m. Por tanto, se requiere 1 castillo intermedio (más los dos castillos de esquina en los extremos).'
          }
        ]
      },
      {
        id: 'obr-top-13',
        title: 'Cimbras, Encofrados de Madera y Tiempos de Descimbrado',
        rap: 'RAP 3: Diseña y monta moldes de madera para losas y trabes y supervisa los tiempos seguros de descimbrado.',
        summary: 'La cimbra es la estructura provisional de madera o metal destinada a moldear el concreto fresco hasta que alcance la resistencia mecánica necesaria para autosoportarse. Se compone de la obra falsa (puntales, pies derechos, barrotes y contravientos) y el molde de contacto (triplay de pino de 16 mm o duela).',
        keyPoints: [
          'Piezas de madera de cimbra: Polines de 4"×4" (puntales de apoyo vertical espaciados a no más de 80 cm), Madrinas y barrotes de 2"×4", Duela de 1"×4" y Triplay de 16 o 19 mm con recubrimiento fenólico desmoldante.',
          'Nivelación y contraflecha: las trabes y losas de claros mayores a 4 m deben colarse con una contraflecha ascendente al centro de 1 a 2 mm por metro de claro para compensar la deflexión elástica al descimbrar.',
          'Tiempos mínimos reglamentarios de descimbrado (a 20°C con cemento Portland ordinario CPO): Costados de columnas, trabes y muros: 24 a 48 horas (resistencia a compresión superficial); Fondos de losas cortas: 7 a 14 días (mínimo 70% de f\'c); Fondos de trabes principales de claros grandes: 21 a 28 días (100% de f\'c).'
        ],
        constructionApplication: 'Aplicación de aceite quemado o desmoldante ecológico a base de parafina sobre el triplay antes de armar el acero, impidiendo que el concreto se adhiera y permitiendo múltiples usos de la madera.',
        practiceExercises: [
          {
            prompt: '¿Qué consecuencia fatal ocurre si se retiran los puntales de fondo de una losa maciza a los 4 días de colada sin apuntalamiento de seguridad?',
            hint: 'El concreto a los 4 días solo ha desarrollado cerca del 35-40% de su resistencia de proyecto f\'c.',
            solution: 'La losa colapsa súbitamente por falla frágil a tensión y cortante al no resistir su propio peso muerto de 2,400 kg/m³, o sufre flechas permanentes y agrietamientos destructivos irreversibles.'
          }
        ]
      },
      {
        id: 'obr-top-14',
        title: 'Losas de Concreto Armado (Macizas, Reticulares, Vigueta y Bovedilla)',
        rap: 'RAP 4: Cuantifica y supervisa el armado de acero inferior y superior (bastones), colado y vibrado de losas.',
        summary: 'La losa es el elemento estructural plano horizontal que conforma entrepisos y azoteas. Transmite cargas vivas (personas, muebles) y muertas hacia las trabes y muros perimetrales.',
        keyPoints: [
          'Losa Maciza: placa continua de concreto armado de 10 a 15 cm de espesor con doble emparrillado de acero. El acero del lecho inferior resiste momentos flexionantes positivos al centro del claro; los "bastones" o columpios en el lecho superior absorben momentos negativos en los apoyos.',
          'Losa Reticular o Nervada: losa aligerada con casetones de fibra de vidrio o poliestireno (unicel) formando nervaduras de concreto bidireccionales, ideal para claros de 6 a 12 metros.',
          'Losa de Vigueta y Bovedilla: sistema prefabricado de rápida instalación que no requiere cimbra total de fondo, compuesto por viguetas de concreto pretensado y bovedillas de cemento-arena o poliestireno cubiertas con una capa de compresión de 5 cm de concreto colado in situ con malla electrosoldada 6-6/10-10.',
          'Vibrado del concreto: inmersión vertical rápida del vibrador de aguja a 10,000 rpm durante 10 a 15 segundos por punto para eliminar bolsas de aire ("ratoneras") sin provocar segregación de agregados.'
        ],
        constructionApplication: 'Diseño de losas de vigueta y bovedilla en vivienda en serie para reducir hasta un 40% el peso propio de la estructura y abatir costos de cimbrado.',
        practiceExercises: [
          {
            prompt: 'Calcular el volumen de concreto en m³ necesario para colar una losa maciza de entrepiso de 8.00 m × 12.00 m de planta con un espesor de 12 cm, considerando un 5% de tolerancia por irregularidades y bombeo.',
            hint: 'Volumen = Largo × Ancho × Espesor × 1.05.',
            solution: 'Volumen neto = 8.00 m × 12.00 m × 0.12 m = 11.52 m³.\nCon 5% de merma de colado: 11.52 m³ × 1.05 = 12.10 m³ de concreto premezclado f\'c = 250 kg/cm² (se piden dos camiones olla de 6 m³ y 6.5 m³).'
          }
        ]
      },
      {
        id: 'obr-top-15',
        title: 'Control de Calidad del Concreto Hidráulico: Revenimiento, Cilindros y Curado',
        rap: 'RAP 5: Realiza ensayos de revenimiento con el Cono de Abrams, muestrea probetas cilíndricas y verifica el curado húmedo.',
        summary: 'El control de calidad del concreto fresco y endurecido en obra garantiza que la estructura alcance la resistencia a compresión especificada f\'c conforme a la norma NMX-C-156 y ASTM C143. En el momento de arribo de la olla revolvedora se mide la trabajabilidad mediante la prueba de revenimiento y se elaboran probetas cilíndricas de 15×30 cm para ensayar a compresión a los 7, 14 y 28 días.',
        keyPoints: [
          'Prueba de revenimiento (Cono de Abrams): molde cónico truncado de lámina (base 20 cm, boca 10 cm, altura 30 cm) llenado en 3 capas compactadas con 25 golpes de varilla de 5/8" con punta de bala; el asentamiento medido en cm indica la fluidez de la mezcla (normalmente 10 a 12 cm para concreto bombeado).',
          'Toma de probetas cilíndricas (NMX-C-160): moldes cilíndricos de 15 cm de diámetro por 30 cm de alto, compactados en 3 capas con 25 golpes de varilla, desmoldados a las 24 horas y curados en tanque de agua saturada con cal a 23°C ± 2°C.',
          'Proceso de curado in situ: suministro continuo de humedad durante al menos 7 días consecutivos (con agua, costales húmedos o membranas químicas de curado reflectante) para permitir la hidratación completa de los silicatos de calcio y evitar fisuras por secado prematuro.'
        ],
        constructionApplication: 'Rechazo inmediato de cualquier camión revolvedor cuyo revenimiento supere los 18 cm sin justificación o que exceda las 2.5 horas de tiempo de mezclado y traslado desde la planta.',
        practiceExercises: [
          {
            prompt: 'Una probeta cilíndrica estándar de concreto de 15 cm de diámetro falla en la prensa hidráulica a una carga de ruptura de 45,000 kg a los 28 días. Calcular su resistencia a compresión f\'c en kg/cm² y determinar si cumple la especificación de f\'c = 250 kg/cm².',
            hint: 'Área cilindro A = π · r² = π · (7.5 cm)² ≈ 176.71 cm². Resistencia f\'c = Carga / Área.',
            solution: 'Área = 3.1416 × (7.5 cm)² = 176.71 cm².\nf\'c = 45,000 kg / 176.71 cm² = 254.65 kg/cm².\nConclusión: Sí cumple satisfactoriamente la especificación requerida de 250 kg/cm².'
          }
        ]
      }
    ]
  }
];

import { StudyModule } from '../../types';

export const PLANIMETRIA_GUIDES: StudyModule[] = [
  {
    id: 'pla-mod-1',
    title: 'Parcial 1: Fundamentos Topográficos, Medición con Cinta, Correcciones y Triangulación',
    parcialNumber: 1,
    competence: 'Ejecuta mediciones lineales en el terreno empleando cintas métricas, balizas y plomadas, corrigiendo errores sistemáticos y levantando predios por triangulación y diagonales.',
    topics: [
      {
        id: 'pla-top-1',
        title: 'Conceptos Básicos de Topografía, Planimetría y Campo Topográfico Plano',
        rap: 'RAP 1: Diferencia los campos de la planimetría, altimetría y geodesia considerando la curvatura terrestre.',
        summary: 'La Topografía es la ciencia y técnica que mide y representa gráficamente a escala sobre un plano una porción de la superficie terrestre con sus accidentes naturales y artificiales. Se divide en Planimetría (proyección horizontal sin considerar alturas), Altimetría o Nivelación (determinación de cotas verticales y desniveles) y Taquimetría (medición simultánea tridimensional).',
        keyPoints: [
          'Campo topográfico o plano de comparación: se considera la Tierra como plana para extensiones cuyos lados no superen 25 km (o superficies menores a unos 625 km²), donde el error por esfericidad terrestre es despreciable para fines prácticos de ingeniería.',
          'Geoide (superficie equipotencial física del nivel medio del mar en reposo prolongado bajo los continentes) vs Elipsoide de revolución (modelo matemático geométrico de referencia).',
          'Levantamiento: conjunto de operaciones de campo (toma de datos) y gabinete (cálculos matemáticos y dibujo del plano perimétrico).'
        ],
        constructionApplication: 'Levantamiento planimétrico inicial de lotes urbanos para verificar colindancias y elaborar planos para escrituración notarial.',
        practiceExercises: [
          {
            prompt: '¿Por qué en un levantamiento de un terreno urbano de 20 × 50 metros no es necesario aplicar correcciones geodésicas por curvatura terrestre?',
            hint: 'Extensión del campo topográfico plano límite (25 km).',
            solution: 'Porque las dimensiones del predio (50 m) son microscópicas comparadas con el radio medio de la Tierra (6,371 km) y con el límite del campo topográfico plano (25,000 m), resultando en un error por curvatura inferior a fracciones de milímetro.'
          }
        ]
      },
      {
        id: 'pla-top-2',
        title: 'Medición de Distancias con Cinta, Balizas y Plomadas de Gravedad',
        rap: 'RAP 2: Ejecuta mediciones directas y alineaciones con jalones y cinta en terrenos planos y accidentados.',
        summary: 'La medición directa de distancias en campo se realiza con cintas de acero o fibra de vidrio auxiliadas por balizas, jalones de alineación, fichas metálicas de conteo y plomadas de gravedad.',
        keyPoints: [
          'Alineación con jalones: para tramos largos mayores a la longitud de la cinta (30 m o 50 m), se colocan jalones intermedios alineados a ojo por el operador trasero.',
          'Medición escalonada en terreno inclinado: se mide por tramos horizontales cortos sosteniendo la cinta horizontalmente con nivel de mano y bajando la plomada hasta el suelo.',
          'Fichas de agrimensor: juego de 11 agujas metálicas para llevar la cuenta rigurosa de las cintadas completas en recorridos extensos.'
        ],
        constructionApplication: 'Alineación de zanjas para tendido de colectores de drenaje sanitario y tendido de líneas eléctricas subterráneas.',
        practiceExercises: [
          {
            prompt: '¿Cómo se debe medir la distancia horizontal entre dos puntos sobre una ladera pronunciada cuando la cinta no puede apoyarse en el suelo?',
            hint: 'Método del resalto horizontal o medición por escalones.',
            solution: 'Se mide en tramos parciales horizontales (de 5 a 10 m cada uno); el operador superior mantiene el cero de la cinta en el suelo y el operador inferior tensa la cinta a la altura del pecho nivelándola con un nivel de mano y proyectando la distancia al suelo mediante una plomada de gravedad suspendida.'
          }
        ]
      },
      {
        id: 'pla-top-3',
        title: 'Errores Sistemáticos en Medición con Cinta y Ecuaciones de Corrección',
        rap: 'RAP 3: Aplica correcciones matemáticas por temperatura, catenaria, tensión y desnivel.',
        summary: 'En mediciones de alta precisión con cinta de acero, los factores ambientales y mecánicos introducen desviaciones sistemáticas cuantificables que deben corregirse matemáticamente.',
        keyPoints: [
          'Error por longitud nominal de calibración: diferencia entre la longitud real de la cinta y su valor marcado a 20°C y 5 kg de tensión.',
          'Corrección por temperatura: Ct = α · L · (T - T₀), donde α = 0.0000115 /°C (coeficiente de dilatación del acero) y T₀ = 20°C.',
          'Corrección por catenaria (pandeo por gravedad de cinta en el aire): Cc = - (W² · L) / (24 · P²), donde W es el peso de la cinta y P es la tensión aplicada.',
          'Corrección por pendiente (desnivel h): Ch = - h² / (2 · L).'
        ],
        formulas: [
          {
            name: 'Corrección por Desnivel (Pendiente)',
            formula: 'C_h = - h² / (2 · L)',
            explanation: 'Corrección a restar a la distancia inclinada L medida para obtener la proyección horizontal verdadera cuando existe un desnivel h.'
          }
        ],
        constructionApplication: 'Medición precisa de la poligonal base de una nave industrial con cinta de acero estandarizada a 20°C y tensiómetro.',
        practiceExercises: [
          {
            prompt: 'Se midió con cinta una distancia inclinada de L = 30.00 m entre dos vértices con un desnivel vertical de h = 2.40 m. Calcular la distancia horizontal real.',
            hint: 'Aplica Pitágoras: D_h = √(L² - h²) o la corrección Ch = h² / (2L).',
            solution: 'D_h = √[30.00² - 2.40²] = √[900 - 5.76] = √894.24 ≈ 29.904 metros.\nO por aproximación: Ch = -(2.40)² / (2 × 30) = -5.76 / 60 = -0.096 m => D_h = 30.00 - 0.096 = 29.904 m.'
          }
        ]
      },
      {
        id: 'pla-top-4',
        title: 'Levantamiento de Poligonales con Cinta: Método de Diagonales y Fórmula de Herón',
        rap: 'RAP 4: Levanta predios irregulares exclusivamente con cinta mediante descomposición en triángulos.',
        summary: 'Cuando no se cuenta con teodolito ni estación total, una poligonal cerrada de n lados se descompone en (n - 2) triángulos mediante el trazo y medición de diagonales internas que unen vértices opuestos. Midiendo las tres longitudes de cada triángulo (a, b, c), se calcula su área mediante la Fórmula de Herón y se trazan sus ángulos por compás.',
        keyPoints: [
          'Condición geométrica: todo triángulo queda unívocamente determinado al conocer la longitud de sus tres lados.',
          'Número de diagonales requeridas para un polígono de n lados: D = n - 3.',
          'Fórmula de Herón: Área = √[ s · (s - a) · (s - b) · (s - c) ], donde s = (a + b + c) / 2 es el semiperímetro del triángulo.',
          'Para comprobar el levantamiento se mide una diagonal de verificación auxiliar.'
        ],
        formulas: [
          {
            name: 'Fórmula de Herón',
            formula: 'Área = √[ s · (s - a) · (s - b) · (s - c) ]',
            explanation: 'Superficie de un triángulo en función exclusiva de sus tres lados y el semiperímetro s.'
          }
        ],
        constructionApplication: 'Levantamiento de predios ejidales o terrenos campestres para cercados perimetrales con equipo accesible de bajo costo.',
        practiceExercises: [
          {
            prompt: 'Un triángulo de una poligonal levantada con cinta tiene lados a = 13.00 m, b = 14.00 m y c = 15.00 m. Calcular su semiperímetro y su superficie exacta por la fórmula de Herón.',
            hint: 's = (13 + 14 + 15) / 2 = 42 / 2 = 21.',
            solution: 's = 21 m.\ns - a = 21 - 13 = 8 m;\ns - b = 21 - 14 = 7 m;\ns - c = 21 - 15 = 6 m.\nÁrea = √[ 21 × 8 × 7 × 6 ] = √[ 7,056 ] = 84.00 m² exactos.'
          }
        ]
      },
      {
        id: 'pla-top-5',
        title: 'Método de Cuerdas para Medir y Replantear Ángulos con Cinta',
        rap: 'RAP 5: Determina ángulos horizontales utilizando el método de la cuerda isométrica con cinta métrica.',
        summary: 'El método de la cuerda permite medir o trazar cualquier ángulo horizontal θ entre dos alineaciones que concurren en un vértice V empleando únicamente cinta métrica y balizas, sin instrumental óptico.',
        keyPoints: [
          'Procedimiento: Desde el vértice V se miden dos distancias exactamente iguales R (radio, típicamente R = 5.00 m o 10.00 m) sobre cada una de las dos alineaciones, marcando los puntos A y B.',
          'Se mide con precisión la cuerda C = AB que une ambos puntos.',
          'Ecuación trigonométrica del ángulo: sen(θ / 2) = (C / 2) / R  =>  θ = 2 · arcsen[ C / (2 · R) ].'
        ],
        formulas: [
          {
            name: 'Ángulo por Método de la Cuerda',
            formula: 'θ = 2 · arcsen( C / (2 · R) )',
            explanation: 'Deducción del ángulo horizontal a partir de un radio constante R y la cuerda medida C.'
          }
        ],
        constructionApplication: 'Replanteo rápido de desvíos angulares de bardas perimetrales y entronques viales cuando no se dispone de equipo topográfico electrónico en campo.',
        practiceExercises: [
          {
            prompt: 'Para medir el ángulo entre dos linderos, se midieron radios de R = 10.00 m a lo largo de cada lindero desde la esquina y la distancia de la cuerda entre las marcas resultó C = 10.00 m. ¿Cuál es el ángulo horizontal exacto?',
            hint: 'Los dos radios y la cuerda miden exactamente lo mismo (10 m).',
            solution: 'El triángulo formado por el vértice y las dos marcas es un triángulo equilátero con tres lados iguales a 10.00 m. Por lo tanto, el ángulo es de exactamente 60° 00\' 00" (o aplicando sen(θ/2) = 5/10 = 0.5 => θ/2 = 30° => θ = 60°).'
          }
        ]
      }
    ]
  },
  {
    id: 'pla-mod-2',
    title: 'Parcial 2: Direcciones Topográficas, Rumbos, Azimuts, Teodolito y Estación Total',
    parcialNumber: 2,
    competence: 'Mide ángulos horizontales y rumbos magnéticos, convirtiendo entre sistemas angulares y operando el teodolito óptico y la estación total.',
    topics: [
      {
        id: 'pla-top-6',
        title: 'Meridianos, Declinación Magnética, Rumbos y Azimuts',
        rap: 'RAP 1: Convierte rumbos en azimuts y viceversa y efectúa correcciones por declinación magnética.',
        summary: 'La dirección de una línea topográfica se define respecto a un meridiano de referencia: Meridiano Verdadero o Astronómico (eje geográfico norte-sur de rotación terrestre), Meridiano Magnético (definido por las líneas del campo geomagnético que orientan la aguja de la brújula) o Meridiano Arbitrario. La Declinación Magnética (δ) es el ángulo horizontal que forman el Norte Verdadero y el Norte Magnético.',
        keyPoints: [
          'Azimut (Az): ángulo horizontal medido invariablemente en sentido de las manecillas del reloj (horario) a partir del Norte. Su valor varía de 0° a 360° (o de 0 a 400 gradianes).',
          'Rumbo (Rb): ángulo agudo formado por la línea respecto al semieje Norte o Sur (hacia el Este o el Oeste). Su valor varía entre 0° y 90° y requiere cuadrante: NE, SE, SW, NW.',
          'Conversión Cuadrante I (NE): Az = Rb  =>  Rb = N Az E.',
          'Conversión Cuadrante II (SE): Az = 180° - Rb  =>  Rb = S (180° - Az) E.',
          'Conversión Cuadrante III (SW): Az = 180° + Rb  =>  Rb = S (Az - 180°) W.',
          'Conversión Cuadrante IV (NW): Az = 360° - Rb  =>  Rb = N (360° - Az) W.',
          'Contrarrumbo y Contra-azimut: dirección de regreso de la misma línea (desfasada 180°).'
        ],
        formulas: [
          {
            name: 'Contra-azimut',
            formula: 'Contra-Az = Az ± 180°',
            explanation: 'Se suma 180° si Az < 180°; se resta 180° si Az ≥ 180°.'
          }
        ],
        constructionApplication: 'Orientación de fachadas respecto al asoleamiento y cálculo de sombras proyectadas en proyectos bioclimáticos.',
        practiceExercises: [
          {
            prompt: 'Convertir a rumbo los siguientes tres azimuts: a) Az₁ = 62° 30\'; b) Az₂ = 135° 15\'; c) Az₃ = 240° 45\'.',
            hint: 'Identifica el cuadrante: I (0-90°), II (90-180°), III (180-270°).',
            solution: 'a) 62° 30\' está en el 1er cuadrante: Rb₁ = N 62° 30\' E.\nb) 135° 15\' está en el 2do cuadrante: Rb₂ = S (180° - 135° 15\') E = S 44° 45\' E.\nc) 240° 45\' está en el 3er cuadrante: Rb₃ = S (240° 45\' - 180°) W = S 60° 45\' W.'
          }
        ]
      },
      {
        id: 'pla-top-7',
        title: 'La Brújula Topográfica y Levantamientos con Brújula y Cinta',
        rap: 'RAP 2: Opera la brújula tipo Brunton reconociendo la atracción local de metales y cercas.',
        summary: 'La brújula topográfica (como la clásica brújula de bolsillo geológica Brunton o brújula de agrimensor) permite medir el rumbo magnético de líneas topográficas directamente en campo gracias a una aguja imantada que se alinea libremente con el campo magnético terrestre.',
        keyPoints: [
          'Partes de la brújula Brunton: caja no magnética (aluminio o bronce), limbo graduado en cuatro cuadrantes de 0° a 90°, aguja magnética con contrapeso en el hemisferio norte para contrarrestar la inclinación magnética, pínulas de puntería y nivel esférico.',
          'Inversión Este-Oeste en el limbo de la brújula: el cuadrante Este se sitúa a la izquierda del Norte para leer directamente el rumbo con la punta norte de la aguja.',
          'Atracción local: desviación de la aguja magnética provocada por la cercanía de masas metálicas (vías de ferrocarril, postes de alta tensión, varillas de refuerzo o relojes del operador); se detecta comprobando si el rumbo directo y el contrarrumbo difieren en exactamente 180°.'
        ],
        constructionApplication: 'Levantamientos perimétricos preliminares de predios rústicos y reconocimiento previo de rutas para líneas de transmisión eléctrica.',
        practiceExercises: [
          {
            prompt: 'Al visar una línea de A hacia B con brújula se lee un rumbo de N 35° E, pero al visar de B hacia A se lee S 31° W. ¿Qué fenómeno ocurre y cómo se detecta?',
            hint: 'La diferencia angular entre rumbo y contrarrumbo debe ser de exactamente 180°.',
            solution: 'Existe una anomalía de atracción local en al menos uno de los dos vértices (A o B) debida a objetos ferromagnéticos cercanos, provocando un desvío de 4° en la lectura de la aguja magnética.'
          }
        ]
      },
      {
        id: 'pla-top-8',
        title: 'El Teodolito Óptico y Electrónico: Estacionamiento y Centrado',
        rap: 'RAP 3: Centra, nivela y calibra teodolitos con plomada óptica y niveles tubulares de alidada.',
        summary: 'El teodolito es el instrumento topográfico de precisión por excelencia para medir ángulos horizontales (acimutales) y verticales (zenitales). Consta de tres ejes principales de rotación que deben guardar rigurosa perpendicularidad.',
        keyPoints: [
          'Ejes fundamentales: 1) Eje vertical o principal de rotación de la alidada; 2) Eje horizontal o secundario de rotación del anteojo telescópico; 3) Eje óptico o línea de colimación.',
          'Pasos de estacionamiento: 1) Clavar firmemente las patas del trípode sobre el trompo o estaca; 2) Centrar el punto con la plomada óptica; 3) Nivelar el nivel esférico (ojo de pollo) modificando la longitud de las patas del trípode; 4) Nivelar con precisión el nivel tubular mediante los tres tornillos de la base nivelante girando en dos posiciones ortogonales a 90°; 5) Comprobar que no se haya desfasado la plomada sobre la marca del clavo.',
          'Tornillos de movimiento general (bloquean el limbo) y movimiento tangencial o fino (permiten ajustes micrométricos de puntería).'
        ],
        constructionApplication: 'Trazo de ejes de columnas en edificios de gran altura garantizando verticalidad absoluta.',
        practiceExercises: [
          {
            prompt: '¿Cuál es la función del tornillo de coincidencia o movimiento fino horizontal en un teodolito?',
            hint: 'Permite apuntar con el hilo vertical de la retícula exactamente al centro del jalón.',
            solution: 'Permite realizar giros angulares micrométricos suaves y lentos de la alidada una vez que se apretó el tornillo de fijación general, facilitando hacer coincidir el hilo vertical de la retícula del anteojo telescópico exactamente sobre el centro de la marca o baliza de puntería.'
          }
        ]
      },
      {
        id: 'pla-top-9',
        title: 'Métodos de Medición de Ángulos Horizontales: Simple, Repetición y Reiteración',
        rap: 'RAP 4: Aplica métodos angulares de repetición y reiteración para eliminar errores instrumentales.',
        summary: 'Para alcanzar la máxima exactitud angular y eliminar errores residuales de excentricidad del limbo y colimación del teodolito, se emplean procedimientos sistemáticos de lectura angular múltiple.',
        keyPoints: [
          'Medición Simple: una sola visada a la referencia (origen 0° 00\' 00") y una visada al punto de adelante.',
          'Método de Repetición: aplicable en teodolitos repetidores. Se acumula n veces la lectura del mismo ángulo en el limbo horizontal arrastrando el círculo graduado con el movimiento general y volviendo a visar con el movimiento particular. Se divide la lectura final entre n: θ = (Lectura_final - Lectura_inicial) / n.',
          'Método de Reiteración (Bessel): se mide el ángulo con el anteojo en posición Directa (disco a la izquierda) y luego con el anteojo en posición Invertida (vuelta de campana con disco a la derecha) distribuyendo las lecturas en diferentes sectores del limbo para cancelar el error de colimación horizontal.'
        ],
        constructionApplication: 'Medición de la red de triangulación geodésica base para el replanteo de las pilas y estribos de puentes vehiculares atirantados.',
        practiceExercises: [
          {
            prompt: 'Al medir un ángulo horizontal por el método de 4 repeticiones, la lectura inicial en ceros fue 0° 00\' 00" y la lectura acumulada en el limbo tras la 4ª repetición marcó 183° 42\' 20". ¿Cuál es el valor del ángulo promedio medido?',
            hint: 'Divide la lectura final entre 4.',
            solution: '183° 42\' 20" / 4 = 45° 55\' 35". El método elimina errores de apreciación del observador aumentando la precisión de la lectura angular.'
          }
        ]
      },
      {
        id: 'pla-top-10',
        title: 'La Estación Total y Distanciómetros Electrónicos (EDM)',
        rap: 'RAP 5: Configura la estación total, introduce constantes de prisma y obtiene coordenadas digitales.',
        summary: 'La Estación Total combina en un solo instrumento electro-óptico un teodolito electrónico digital, un distanciómetro electro-óptico (EDM por rayo infrarrojo o láser pulsado), sensores de compensación de doble eje y un microprocesador integrado que registra automáticamente lecturas angulares, distancias inclinadas y calcula coordenadas tridimensionales UTM.',
        keyPoints: [
          'Principio del Distanciómetro Electrónico: emisión de un haz electromagnético modulado que viaja hacia un prisma reflector de vidrio óptico y regresa al emisor; el tiempo de vuelo o desfasamiento de fase determina la distancia milimétrica.',
          'Constante del prisma: desfase geométrico propio del prisma de reflexión que debe configurarse en el menú del equipo (ej. 0 mm o -30 mm).',
          'Modo sin prisma (láser de rebote directo): permite medir puntos inaccesibles (cables de alta tensión, fachadas altas, bóvedas de túneles) hasta 500 o 1,000 metros.',
          'Exportación de archivos de puntos (PNEZD: Punto, Norte, Este, Elevación, Código) para su procesamiento directo en software CAD.'
        ],
        constructionApplication: 'Monitoreo de deformaciones y desplomes milimétricos en excavaciones profundas y muros Milán en zonas urbanas densas.',
        practiceExercises: [
          {
            prompt: '¿Por qué la estación total moderna reemplazó casi totalmente al teodolito óptico mecánico tradicional en las obras de infraestructura urbana?',
            hint: 'Velocidad, alcance, registro automático de datos y eliminación del error humano de lectura.',
            solution: 'Porque combina en un solo paso la lectura angular y la medición de distancias milimétricas por haz láser reflector hasta 3,000 m, almacena miles de puntos en memoria digital sin errores de transcripción en libreta y exporta directamente a AutoCAD Civil 3D.'
          }
        ]
      }
    ]
  },
  {
    id: 'pla-mod-3',
    title: 'Parcial 3: Cálculo y Compensación de Poligonales Cerradas y Cálculo de Superficies',
    parcialNumber: 3,
    competence: 'Calcula y compensa el error angular y lineal de poligonales topográficas cerradas por el método de Bowditch y obtiene las coordenadas absolutas y superficie por determinantes.',
    topics: [
      {
        id: 'pla-top-11',
        title: 'Condición Geométrica Angular, Error de Cierre Angular y Tolerancia',
        rap: 'RAP 1: Evalúa el cierre angular de una poligonal cerrada y distribuye el error dentro de la tolerancia permitida.',
        summary: 'En toda poligonal cerrada de n vértices, la suma teórica de sus ángulos interiores debe cumplir la ley de la geometría euclidiana: Σθ_teorica = (n - 2) × 180°. La discrepancia entre la suma observada en campo y la suma teórica es el Error de Cierre Angular (Ea = Σθ_observada - Σθ_teorica).',
        keyPoints: [
          'Suma de ángulos exteriores: Σθ_ext = (n + 2) × 180°.',
          'Tolerancia angular admisible: Ta = a · √n, donde a es la aproximación nominal del instrumento (ej. 10" o 20") y n es el número de vértices. Si |Ea| ≤ Ta el trabajo de campo se acepta; si |Ea| > Ta se debe repetir la medición en campo.',
          'Compensación angular: se distribuye la corrección c = -Ea / n en partes iguales (o con signo contrario) entre todos los ángulos de la poligonal para que la suma corregida sea exactamente igual a la teórica.'
        ],
        formulas: [
          {
            name: 'Suma Teórica de Ángulos Interiores',
            formula: 'Σ θ_int = (n - 2) · 180°',
            explanation: 'Condición geométrica obligatoria en polígonos cerrados de n lados.'
          },
          {
            name: 'Tolerancia Angular',
            formula: 'Ta = a · √n',
            explanation: 'Límite máximo tolerable de error angular según la precisión del instrumento.'
          }
        ],
        constructionApplication: 'Verificación inmediata en la libreta de campo de la brigada topográfica antes de levantar el campamento y desestacionar el equipo.',
        practiceExercises: [
          {
            prompt: 'En un pentágono (n = 5 lados), los ángulos interiores medidos suman 539° 59\' 40". Con un teodolito de precisión a = 20", determinar el error angular, verificar si cumple la tolerancia y calcular la corrección por ángulo.',
            hint: 'Suma teórica = (5 - 2) × 180° = 540° 00\' 00". Ta = 20" × √5.',
            solution: 'Ea = 539° 59\' 40" - 540° 00\' 00" = -20" (faltaron 20 segundos).\nTa = 20" × √5 = 20" × 2.236 ≈ 44.7". Como |-20"| ≤ 44.7", se ACEPTA el levantamiento.\nCorrección c = -(-20") / 5 = +4" a sumar a cada uno de los 5 ángulos interiores.'
          }
        ]
      },
      {
        id: 'pla-top-12',
        title: 'Cálculo de Rumbos y Azimuts de los Lados de la Poligonal',
        rap: 'RAP 2: Deduce analíticamente los azimuts de todos los lados de la poligonal a partir de un azimut base.',
        summary: 'Una vez compensados los ángulos interiores de la poligonal, se calculan progresivamente los azimuts de cada uno de los lados a partir de una dirección base conocida (generalmente obtenida con brújula, GPS geodésico o enlace con dos vértices de la red geodésica del INEGI).',
        keyPoints: [
          'Regla general para cálculo de azimuts: Az_(i+1) = Az_i ± 180° + Ángulo_compensado.',
          'Si el resultado excede 360°, se restan 360°.',
          'Control de cierre de azimuts: al recorrer todos los lados y regresar al primer lado de partida, el azimut calculado debe ser exactamente igual al azimut inicial.'
        ],
        constructionApplication: 'Orientación unívoca del plano de lotificación para el Registro Público de la Propiedad.',
        practiceExercises: [
          {
            prompt: 'Se tiene un lado AB con Az = 45° 00\'. En el vértice B se mide un ángulo interior hacia C de 110° 00\'. Calcular el azimut del lado BC si el recorrido es en sentido horario.',
            hint: 'Contra-azimut de AB = 45° + 180° = 225°. Az_BC = 225° - ángulo interior.',
            solution: 'Contra-azimut de AB = 225° 00\'.\nAz_BC = 225° 00\' - 110° 00\' = 115° 00\' (ubicado en el segundo cuadrante, rumbo S 65° E).'
          }
        ]
      },
      {
        id: 'pla-top-13',
        title: 'Cálculo de Proyecciones Ortogonales y Error Lineal de Cierre',
        rap: 'RAP 3: Descompone los lados en proyecciones cartesianas y evalúa la precisión relativa del polígono.',
        summary: 'A partir de los azimuts corregidos y las distancias horizontales medidas de cada lado, se calculan sus proyecciones sobre los ejes cartesianos: Proyección en X (ΔX = Distancia · sen(Az)) y Proyección en Y (ΔY = Distancia · cos(Az)). En una poligonal cerrada perfecta ΣΔX = 0 y ΣΔY = 0.',
        keyPoints: [
          'Signos de las proyecciones: Cuadrante NE (ΔX +, ΔY +); SE (ΔX +, ΔY -); SW (ΔX -, ΔY -); NW (ΔX -, ΔY +).',
          'Errores de cierre en los ejes: ex = ΣΔX  y  ey = ΣΔY.',
          'Error lineal total de cierre: e = √[ (ex)² + (ey)² ].',
          'Precisión relativa de la poligonal: P = 1 / (Perímetro / e). En trabajos de construcción y urbanización se exige una precisión mínima de 1:5,000 o 1:10,000.'
        ],
        formulas: [
          {
            name: 'Error Lineal Total',
            formula: 'e = √[ (ΣΔX)² + (ΣΔY)² ]',
            explanation: 'Discrepancia lineal de cierre del polígono en metros.'
          },
          {
            name: 'Precisión Relativa',
            formula: 'P = 1 / (Perímetro / e)',
            explanation: 'Razón que expresa el error de un metro cometido por cada N metros recorridos.'
          }
        ],
        constructionApplication: 'Validación de la calidad métrica del levantamiento antes de emitir la memoria técnica oficial.',
        practiceExercises: [
          {
            prompt: 'Una poligonal con un perímetro total de 800.00 m arroja un error en X de ex = +0.06 m y un error en Y de ey = -0.08 m. Calcular el error de cierre lineal total e y la precisión relativa P.',
            hint: 'e = √[ex² + ey²]. Precisión P = 1 / (800 / e).',
            solution: 'e = √[(0.06)² + (-0.08)²] = √[0.0036 + 0.0064] = √0.01 = 0.10 m (10 cm).\nPrecisión relativa P = 1 / (800.00 / 0.10) = 1 : 8,000. Cumple holgadamente la tolerancia para obras de edificación (mínimo 1:5,000).'
          }
        ]
      },
      {
        id: 'pla-top-14',
        title: 'Compensación de Poligonales por la Regla de Bowditch y Coordenadas Absolutas',
        rap: 'RAP 4: Distribuye el error lineal proporcionalmente a las longitudes de los lados y obtiene coordenadas finales.',
        summary: 'La compensación lineal distribuye algebraicamente los errores ex y ey entre todos los lados del polígono. La Regla de la Brújula o de Bowditch asume que los errores en los ángulos y en las distancias tienen el mismo peso, por lo que la corrección aplicada a cada lado es directamente proporcional a su longitud.',
        keyPoints: [
          'Corrección en X para el lado i: Cx_i = - ex · (L_i / Perímetro).',
          'Corrección en Y para el lado i: Cy_i = - ey · (L_i / Perímetro).',
          'Proyecciones corregidas: ΔX_corr = ΔX + Cx  ;  ΔY_corr = ΔY + Cy. La suma de las proyecciones corregidas debe dar estrictamente 0.00 m.',
          'Coordenadas absolutas: se parte de un vértice con coordenadas asignadas (ej. V1: X = 1,000.00 m, Y = 1,000.00 m) y se suman sucesivamente las proyecciones corregidas.'
        ],
        formulas: [
          {
            name: 'Regla de Bowditch (Corrección de Proyecciones)',
            formula: 'Cx_i = - ex · (L_i / ΣL)  ;  Cy_i = - ey · (L_i / ΣL)',
            explanation: 'Compensación lineal ponderada por la longitud del lado relativo al perímetro total.'
          }
        ],
        constructionApplication: 'Cálculo de la plantilla de coordenadas para cargar al computador de a bordo de la estación total para replanteo de cimentaciones.',
        practiceExercises: [
          {
            prompt: 'Si el error total en X es ex = +0.10 m, el perímetro del polígono es 1,000 m y un lado mide L = 200 m, ¿cuál es la corrección Cx que se le debe sumar a la proyección ΔX de ese lado?',
            hint: 'Cx = - ex × (L / Perímetro).',
            solution: 'Cx = - (0.10 m) × (200 m / 1,000 m) = -0.10 × 0.20 = -0.02 m (-2 cm).'
          }
        ]
      },
      {
        id: 'pla-top-15',
        title: 'Cálculo de Superficies por Determinantes (Gauss) y Cuadro de Construcción Oficial',
        rap: 'RAP 5: Calcula la superficie exacta del terreno mediante el método matricial de Gauss y diseña el plano perimétrico.',
        summary: 'El cálculo del área de una poligonal cerrada a partir de sus coordenadas rectangulares (X, Y) es el método analítico más exacto y generalizado en topografía digital. Se conoce como el Algoritmo de Gauss o la Fórmula de los Trapecios / Determinantes.',
        keyPoints: [
          'Fórmula de Gauss en topografía: 2 · Área = | Σ [ X_i · (Y_(i+1) - Y_(i-1)) ] |.',
          'Cuadro de construcción reglamentario: tabla técnica normalizada que se inserta en el plano oficial con columnas: Estación, Punto Visado, Rumbo, Distancia horizontal, Coordenadas X (Este), Coordenadas Y (Norte) y Área en m² o hectáreas con 4 decimales.',
          'Elementos complementarios del plano: Norte astronómico y magnético con declinación anual, escala gráfica y numérica, croquis de localización, notas de vértices (mojoneras de concreto o clavos en asfalto) y firma del perito topógrafo con cédula profesional.'
        ],
        formulas: [
          {
            name: 'Área por Coordenadas (Gauss Topográfico)',
            formula: 'Área = ½ | Σ [ X_i · (Y_(i+1) - Y_(i-1)) ] |',
            explanation: 'Cálculo analítico computarizado de la superficie exacta del terreno.'
          }
        ],
        constructionApplication: 'Generación del cuadro de construcción perimétrico que se inserta obligatoriamente en la primera lámina de todo plano catastral y de subdivisión de predios.',
        practiceExercises: [
          {
            prompt: 'Si un terreno tiene cuatro vértices con coordenadas A(10, 10), B(10, 40), C(50, 40) y D(50, 10) expresadas en metros, calcular directamente su superficie.',
            hint: 'Es un rectángulo con base ΔX = 40 m y altura ΔY = 30 m.',
            solution: 'Base = 50 - 10 = 40 m. Altura = 40 - 10 = 30 m.\nÁrea = 40 m × 30 m = 1,200.00 m² (0.12 hectáreas).'
          }
        ]
      }
    ]
  }
];

import { StudyModule } from '../../types';

export const GEOMETRIA_GUIDES: StudyModule[] = [
  {
    id: 'geo-mod-1',
    title: 'Parcial 1: Lugares Geométricos, Distancia, División de Segmentos y Línea Recta',
    parcialNumber: 1,
    competence: 'Resuelve problemas referentes a lugares geométricos en el plano cartesiano, en particular la línea recta en sus distintas formas algebraicas y vectoriales, aplicándolos a situaciones de diseño arquitectónico y topográfico.',
    topics: [
      {
        id: 'geo-top-1',
        title: 'Sistema Cartesiano, Plano R² y Distancia entre Dos Puntos',
        rap: 'RAP 1: Describe lugares geométricos mediante la localización de puntos y el cálculo de distancias en el plano cartesiano.',
        summary: 'El plano cartesiano se estructura mediante dos ejes ortogonales graduados: el eje de abscisas (X) y el eje de ordenadas (Y), que se intersecan perpendicularmente en el origen O(0,0). La distancia euclidiana entre dos puntos P₁(x₁, y₁) y P₂(x₂, y₂) se deduce mediante el Teorema de Pitágoras en el triángulo rectángulo formado por los catetos Δx = (x₂ - x₁) y Δy = (y₂ - y₁).',
        keyPoints: [
          'Cuadrantes: I (+, +), II (-, +), III (-, -), IV (+, -). Sentido trigonométrico antihorario.',
          'La distancia d es un invariante métrico estrictamente real y no negativo (d ≥ 0).',
          'Condición de colinealidad: Tres puntos A, B, C son colineales si d(A,B) + d(B,C) = d(A,C).',
          'Clasificación de triángulos por distancias: equilátero (3 lados iguales), isósceles (2 iguales), escaleno (ninguno igual); y rectángulo si cumple el Teorema de Pitágoras recíproco: c² = a² + b².'
        ],
        formulas: [
          {
            name: 'Distancia Euclidiana',
            formula: 'd = √[(x₂ - x₁)² + (y₂ - y₁)²]',
            explanation: 'Longitud del segmento rectilíneo entre dos puntos en coordenadas cartesianas.'
          }
        ],
        practicalApplication: 'Verificación de linderos en planos perimétricos y cálculo de diagonales para comprobar el escuadre de excavaciones y zapatas en campo.',
        practiceExercises: [
          {
            prompt: 'Demostrar analíticamente si los vértices A(-2, -1), B(2, 2) y C(5, -2) forman un triángulo rectángulo.',
            hint: 'Calcula d(A,B), d(B,C) y d(A,C) y verifica si la suma de cuadrados de dos lados es igual al cuadrado del mayor.',
            solution: 'd(A,B) = √[(2 - (-2))² + (2 - (-1))²] = √[16 + 9] = √25 = 5.\nd(B,C) = √[(5 - 2)² + (-2 - 2)²] = √[9 + 16] = √25 = 5.\nd(A,C) = √[(5 - (-2))² + (-2 - (-1))²] = √[49 + 1] = √50.\nComo [d(A,B)]² + [d(B,C)]² = 5² + 5² = 25 + 25 = 50 = [d(A,C)]², se cumple Pitágoras: es un triángulo rectángulo e isósceles con ángulo recto en el vértice B.'
          }
        ]
      },
      {
        id: 'geo-top-2',
        title: 'División de un Segmento en una Razón Dada, Punto Medio y Puntos de Trisección',
        rap: 'RAP 1: Obtiene las coordenadas del punto divisor de un segmento según una razón dada y determina puntos notables.',
        summary: 'Si un punto P(x, y) divide al segmento dirigido P₁P₂ en la razón geométrica r = P₁P / PP₂, sus coordenadas se obtienen proyectando sobre los ejes coordenados mediante semejanza de triángulos. El punto medio corresponde al caso particular donde r = 1. Los puntos de trisección dividen al segmento en tres partes iguales con r = 1/2 y r = 2.',
        keyPoints: [
          'Fórmulas: x = (x₁ + r·x₂) / (1 + r) y y = (y₁ + r·y₂) / (1 + r), siempre que r ≠ -1.',
          'Si r > 0, el punto de división P es interior al segmento.',
          'Si r < 0, el punto P es exterior al segmento (prolongación de la recta).',
          'Punto medio: xm = (x₁ + x₂) / 2 ; ym = (y₁ + y₂) / 2.'
        ],
        formulas: [
          {
            name: 'Punto Divisor en Razón r',
            formula: 'x = (x₁ + r·x₂) / (1 + r) ,  y = (y₁ + r·y₂) / (1 + r)',
            explanation: 'Coordenadas del punto que divide un segmento orientado en una proporción geométrica.'
          },
          {
            name: 'Punto Medio',
            formula: 'x_m = (x₁ + x₂) / 2 ,  y_m = (y₁ + y₂) / 2',
            explanation: 'Punto equidistante de los dos extremos del segmento.'
          }
        ],
        practicalApplication: 'Cálculo de apoyos intermedios en trabes, juntas constructivas a tercios de claro y modulación de columnas.',
        practiceExercises: [
          {
            prompt: 'Hallar el punto P que divide al segmento de P₁(1, 7) a P₂(6, -3) en la razón r = 2/3.',
            hint: 'Sustituye x₁=1, x₂=6, y₁=7, y₂=-3 en las ecuaciones con r = 2/3.',
            solution: 'x = [1 + (2/3)(6)] / [1 + 2/3] = [1 + 4] / [5/3] = 5 / (5/3) = 3.\ny = [7 + (2/3)(-3)] / [1 + 2/3] = [7 - 2] / [5/3] = 5 / (5/3) = 3.\nEl punto es P(3, 3).'
          }
        ]
      },
      {
        id: 'geo-top-3',
        title: 'Centroide o Baricentro de Triángulos y Polígonos Planos',
        rap: 'RAP 1: Calcula el centro de masa geométrico de figuras poligonales para análisis de cargas.',
        summary: 'El baricentro o centroide G de un triángulo es el punto de concurrencia de sus tres medianas (segmentos que unen cada vértice con el punto medio del lado opuesto). El baricentro divide a cada mediana en la razón 2:1 (la distancia del baricentro al vértice es el doble que al punto medio opuesto).',
        keyPoints: [
          'Coordenadas de G: media aritmética de las coordenadas de sus tres vértices.',
          'Propiedad física: es el centro de gravedad de una lámina homogénea de espesor uniforme.',
          'En polígonos de n lados, el centroide general se obtiene por descomposición en triángulos ponderados por sus áreas.'
        ],
        formulas: [
          {
            name: 'Baricentro de un Triángulo',
            formula: 'x_G = (x₁ + x₂ + x₃) / 3 ,  y_G = (y₁ + y₂ + y₃) / 3',
            explanation: 'Promedio de las abscisas y ordenadas de los tres vértices.'
          }
        ],
        practicalApplication: 'Determinación del centro de rigidez y centro de masas en el diseño sismorresistente de losas de edificación.',
        practiceExercises: [
          {
            prompt: 'Encontrar el centroide del triángulo cuyos vértices son A(-3, 2), B(5, 6) y C(1, -2).',
            hint: 'Aplica la fórmula promediando las tres coordenadas.',
            solution: 'x_G = (-3 + 5 + 1) / 3 = 3 / 3 = 1.\ny_G = (2 + 6 - 2) / 3 = 6 / 3 = 2.\nEl baricentro es G(1, 2).'
          }
        ]
      },
      {
        id: 'geo-top-4',
        title: 'Superficie y Área de Polígonos por el Algoritmo de Determinantes (Fórmula de Gauss)',
        rap: 'RAP 1: Calcula analíticamente la superficie exacta de predios y poligonales topográficas.',
        summary: 'El área de cualquier polígono simple de n vértices se calcula analíticamente disponiendo las coordenadas en una matriz ordenada en sentido antihorario. Se suman los productos de las diagonales descendentes (xᵢ·yᵢ₊₁) y se restan los de las ascendentes (yᵢ·xᵢ₊₁), dividiendo el valor absoluto entre dos.',
        keyPoints: [
          'Los vértices deben listarse obligatoriamente en sentido contrario a las manecillas del reloj para garantizar signo positivo.',
          'El primer vértice se repite al final del arreglo matricial para cerrar el polígono.',
          'Fórmula de Gauss (fórmula de la lazada): Área = (1/2) |(x₁y₂ + x₂y₃ + ... + xₙy₁) - (y₁x₂ + y₂x₃ + ... + yₙx₁)|.'
        ],
        formulas: [
          {
            name: 'Fórmula de Gauss para Polígonos',
            formula: 'Área = ½ | Σ(xᵢ · yᵢ₊₁) - Σ(yᵢ · xᵢ₊₁) |',
            explanation: 'Algoritmo matricial para calcular la superficie exacta de cualquier figura plana poligonal.'
          }
        ],
        practicalApplication: 'Cálculo de la superficie de predios irregulares en planos catastrales, subdivisiones y memorias descriptivas topográficas.',
        practiceExercises: [
          {
            prompt: 'Calcular el área del triángulo con vértices A(2, 4), B(-3, 1) y C(4, -2).',
            hint: 'Organiza el determinante en sentido antihorario y repite el punto A al final.',
            solution: 'Diagonales descendentes: (2)(1) + (-3)(-2) + (4)(4) = 2 + 6 + 16 = 24.\nDiagonales ascendentes: (4)(-3) + (1)(4) + (-2)(2) = -12 + 4 - 4 = -12.\nÁrea = (1/2) |24 - (-12)| = (1/2) |36| = 18 unidades cuadradas.'
          }
        ]
      },
      {
        id: 'geo-top-5',
        title: 'Pendiente de una Recta, Ángulo de Inclinación y Ángulo entre Dos Rectas',
        rap: 'RAP 2: Deduce la pendiente y calcula el ángulo de intersección entre alineaciones rectas.',
        summary: 'La pendiente m de una recta no vertical es la razón del cambio vertical al cambio horizontal: m = tan θ = (y₂ - y₁) / (x₂ - x₁). Si m > 0 la recta asciende de izquierda a derecha; si m < 0 desciende; si m = 0 es horizontal; si no está definida (división entre cero), la recta es vertical.',
        keyPoints: [
          'Ángulo de inclinación θ: medido desde el semieje X positivo en sentido antihorario (0° ≤ θ < 180°). Si m < 0, θ = 180° + arctan(m).',
          'El ángulo α entre dos rectas que se cortan con pendientes m₁ y m₂ se calcula mediante la fórmula: tan α = (m₂ - m₁) / (1 + m₁·m₂).',
          'La pendiente m es equivalente al porcentaje de pendiente en construcción: % Pendiente = m × 100.'
        ],
        formulas: [
          {
            name: 'Pendiente y Ángulo de Inclinación',
            formula: 'm = (y₂ - y₁) / (x₂ - x₁) = tan(θ)',
            explanation: 'Tangente trigonométrica del ángulo de inclinación de la recta.'
          },
          {
            name: 'Ángulo entre Dos Rectas',
            formula: 'tan(α) = (m₂ - m₁) / (1 + m₁ · m₂)',
            explanation: 'Ángulo medido en sentido antihorario desde la recta de pendiente m₁ hacia la de m₂.'
          }
        ],
        practicalApplication: 'Determinación de la pendiente de rampas de acceso peatonal (máx 8%) y vehicular (máx 15%) según el RCDF.',
        practiceExercises: [
          {
            prompt: 'Hallar el ángulo agudo que forman las rectas L₁ con m₁ = 3 y L₂ con m₂ = -2.',
            hint: 'Usa tan α = |(m₂ - m₁) / (1 + m₁·m₂)|.',
            solution: 'tan α = |(-2 - 3) / (1 + (3)(-2))| = |-5 / (1 - 6)| = |-5 / -5| = 1.\nα = arctan(1) = 45°.'
          }
        ]
      },
      {
        id: 'geo-top-6',
        title: 'Condiciones Analíticas de Paralelismo y Perpendicularidad',
        rap: 'RAP 2: Aplica los criterios analíticos de paralelismo y ortogonalidad en el diseño geométrico.',
        summary: 'Dos rectas no verticales son paralelas si y sólo si tienen exactamente la misma pendiente (m₁ = m₂). Dos rectas son perpendiculares si y sólo si el producto de sus pendientes es igual a -1 (m₁ · m₂ = -1), lo que significa que sus pendientes son recíprocas y de signo contrario (m₂ = -1/m₁).',
        keyPoints: [
          'Paralelismo: m₁ = m₂ ⇔ No tienen puntos de intersección o son coincidentes.',
          'Perpendicularidad: m₁ · m₂ = -1 ⇔ Forman un ángulo de 90° exactos.',
          'Si una recta es horizontal (m = 0), su perpendicular es vertical (pendiente indeterminada) y su ecuación es x = k.',
          'En la forma general Ax + By + C = 0: las paralelas tienen coeficientes A y B proporcionales; las perpendiculares intercambian coeficientes y uno cambia de signo: Bx - Ay + K = 0.'
        ],
        formulas: [
          {
            name: 'Criterio de Paralelismo',
            formula: 'm₁ = m₂',
            explanation: 'Igualdad de inclinaciones en el plano.'
          },
          {
            name: 'Criterio de Perpendicularidad',
            formula: 'm₁ · m₂ = -1   ó   m₂ = -1 / m₁',
            explanation: 'Pendientes ortogonales opuestas y recíprocas.'
          }
        ],
        practicalApplication: 'Verificación analítica del escuadre en esquinas de muros y trazo de ejes paralelos de cimentación.',
        practiceExercises: [
          {
            prompt: 'Determinar la ecuación de la recta que pasa por P(2, -3) y es perpendicular a la recta 4x - 6y + 7 = 0.',
            hint: 'Calcula la pendiente de la recta dada (m₁ = -A/B = 4/6 = 2/3) y obtén su recíproca negativa.',
            solution: 'Pendiente de la recta dada: m₁ = 4/6 = 2/3.\nPendiente perpendicular: m₂ = -3/2.\nEcuación punto-pendiente: y - (-3) = -3/2 (x - 2)  =>  y + 3 = -3/2 x + 3  =>  3x + 2y = 0.'
          }
        ]
      },
      {
        id: 'geo-top-7',
        title: 'Formas de la Ecuación de la Recta: Punto-Pendiente, Dos Puntos, Pendiente-Ordenada y Simétrica',
        rap: 'RAP 2: Deduce y transforma entre las distintas representaciones canónicas de la recta.',
        summary: 'Dependiendo de los datos geométricos disponibles, la ecuación de la recta adopta diferentes formas canónicas: Punto-Pendiente [y - y₁ = m(x - x₁)]; Dos Puntos [(y - y₁) = ((y₂ - y₁)/(x₂ - x₁))(x - x₁)]; Pendiente-Ordenada al Origen [y = mx + b]; y Simétrica o Canónica [x/a + y/b = 1], donde a y b son las intersecciones con los ejes coordenados.',
        keyPoints: [
          'Forma Pendiente-Ordenada: m es la pendiente y b es la ordenada al origen (corta al eje Y en (0, b)).',
          'Forma Simétrica: a es la abscisa al origen (a, 0) y b es la ordenada al origen (0, b). No aplica si la recta pasa por el origen.',
          'Cualquier forma se puede transformar algebraicamente a la forma general igualando a cero.'
        ],
        formulas: [
          {
            name: 'Punto-Pendiente',
            formula: 'y - y₁ = m (x - x₁)',
            explanation: 'Recta conocida su pendiente m y un punto P₁(x₁, y₁).'
          },
          {
            name: 'Forma Simétrica o Canónica',
            formula: 'x / a + y / b = 1',
            explanation: 'Recta conocidas sus intersecciones con los ejes X e Y.'
          }
        ],
        practicalApplication: 'Modelado de pendientes de techumbres donde se conocen los apoyos en los extremos (forma simétrica).',
        practiceExercises: [
          {
            prompt: 'Escribir en forma simétrica la ecuación de la recta 3x + 4y - 12 = 0.',
            hint: 'Pasa el término independiente al segundo miembro (3x + 4y = 12) y divide toda la ecuación entre 12.',
            solution: '3x/12 + 4y/12 = 12/12  =>  x/4 + y/3 = 1.\nIntersecciones: a = 4 con el eje X y b = 3 con el eje Y.'
          }
        ]
      },
      {
        id: 'geo-top-8',
        title: 'Ecuación General de la Recta (Ax + By + C = 0) y Haz de Rectas',
        rap: 'RAP 2: Resuelve sistemas lineales y determina familias o haces de rectas concurrentes.',
        summary: 'La ecuación lineal de primer grado Ax + By + C = 0 representa siempre una línea recta en el plano (con A y B no simultáneamente nulos). A partir de sus coeficientes se deduce directamente: pendiente m = -A/B, intersección con Y: b = -C/B, intersección con X: a = -C/A. Un haz o familia de rectas que pasan por un punto común P₀(x₀, y₀) se expresa como y - y₀ = k(x - x₀).',
        keyPoints: [
          'Si A = 0: la recta es horizontal (By + C = 0 => y = -C/B), con m = 0.',
          'Si B = 0: la recta es vertical (Ax + C = 0 => x = -C/A), con m indeterminada.',
          'Si C = 0: la recta pasa por el origen (0,0).',
          'Haz de rectas paralelas a Ax + By + C = 0: Ax + By + k = 0, donde k es el parámetro de la familia.'
        ],
        formulas: [
          {
            name: 'Forma General',
            formula: 'Ax + By + C = 0',
            explanation: 'Ecuación lineal con m = -A/B, b = -C/B.'
          }
        ],
        practicalApplication: 'Trazo de ejes de columnas repetitivas a distancias constantes (haz de rectas paralelas).',
        practiceExercises: [
          {
            prompt: 'Encontrar el haz de rectas paralelas a 2x - 5y + 3 = 0 que pasa por el punto P(3, 4).',
            hint: 'Conserva los coeficientes A=2 y B=-5, y calcula el nuevo término independiente k.',
            solution: 'La familia es 2x - 5y + k = 0. Sustituyendo P(3,4): 2(3) - 5(4) + k = 0  =>  6 - 20 + k = 0  =>  -14 + k = 0  =>  k = 14.\nLa recta requerida es 2x - 5y + 14 = 0.'
          }
        ]
      },
      {
        id: 'geo-top-9',
        title: 'Forma Normal de Hesse de la Recta y Distancia de un Punto a una Recta',
        rap: 'RAP 2: Aplica la forma trigonométrica normal para deducir distancias mínimas y semiespacios.',
        summary: 'La Forma Normal de Hesse de la recta es x·cos(ω) + y·sen(ω) - p = 0, donde p es la longitud del segmento perpendicular trazado desde el origen a la recta (p ≥ 0) y ω es el ángulo positivo de dicho vector normal (0° ≤ ω < 360°). Para reducir Ax + By + C = 0 a la forma normal se divide entre ±√(A² + B²), tomando el signo contrario a C.',
        keyPoints: [
          'El vector normal unitario a la recta es n = (cos ω, sen ω).',
          'Distancia de un punto P(x₀, y₀) a la recta Ax + By + C = 0: d = |A·x₀ + B·y₀ + C| / √(A² + B²).',
          'Distancia entre dos rectas paralelas Ax + By + C₁ = 0 y Ax + By + C₂ = 0: d = |C₁ - C₂| / √(A² + B²).'
        ],
        formulas: [
          {
            name: 'Distancia de un Punto a una Recta',
            formula: 'd = |A · x₀ + B · y₀ + C| / √(A² + B²)',
            explanation: 'Longitud perpendicular mínima desde el punto (x₀, y₀) hasta la recta.'
          },
          {
            name: 'Distancia entre Rectas Paralelas',
            formula: 'd = |C₁ - C₂| / √(A² + B²)',
            explanation: 'Separación constante entre dos rectas con iguales coeficientes A y B.'
          }
        ],
        practicalApplication: 'Verificación del ancho de servidumbres de paso y distancias mínimas a cables de alta tensión según el RCDF.',
        practiceExercises: [
          {
            prompt: 'Calcular la distancia del punto P(4, -3) a la recta 5x - 12y + 11 = 0.',
            hint: 'A = 5, B = -12, C = 11, x₀ = 4, y₀ = -3.',
            solution: 'd = |5(4) - 12(-3) + 11| / √[5² + (-12)²] = |20 + 36 + 11| / √[25 + 144] = |67| / √169 = 67 / 13 ≈ 5.15 unidades.'
          }
        ]
      },
      {
        id: 'geo-top-10',
        title: 'Ecuaciones de las Rectas Bisectrices y Aplicaciones Topográficas',
        rap: 'RAP 2: Obtiene analíticamente las bisectrices de los ángulos interiores de polígonos.',
        summary: 'La bisectriz es el lugar geométrico de los puntos del plano que equidistan de dos rectas concurrentes L₁ y L₂. Dado que cualquier punto P(x, y) sobre la bisectriz tiene d(P, L₁) = d(P, L₂), existen dos bisectrices ortogonales entre sí (la bisectriz del ángulo agudo y la del ángulo obtuso), que se obtienen igualando las distancias con doble signo.',
        keyPoints: [
          'Ecuación general de las bisectrices: (A₁x + B₁y + C₁) / √(A₁² + B₁²) = ± (A₂x + B₂y + C₂) / √(A₂² + B₂²).',
          'Las dos bisectrices son siempre perpendiculares entre sí (m_b1 · m_b2 = -1).',
          'El incentro de un triángulo es el punto de intersección de sus tres bisectrices interiores, y es el centro de la circunferencia inscrita.'
        ],
        formulas: [
          {
            name: 'Ecuación de Bisectrices',
            formula: '(A₁x + B₁y + C₁) / √(A₁² + B₁²) = ± (A₂x + B₂y + C₂) / √(A₂² + B₂²)',
            explanation: 'Lugares geométricos equidistantes de dos rectas dadas.'
          }
        ],
        practicalApplication: 'Trazo de alineamientos en esquinas de avenidas y diseño de ochavos reglamentarios en esquinas urbanas.',
        practiceExercises: [
          {
            prompt: 'Demostrar analíticamente que las dos bisectrices de dos rectas secantes son ortogonales entre sí.',
            hint: 'Despeja las pendientes de ambas soluciones (+ y -) y multiplica sus valores.',
            solution: 'Al resolver con signo positivo y negativo se obtienen dos rectas B₁ y B₂ cuyas pendientes cumplen m₁ · m₂ = -1, demostrando que forman un ángulo recto de 90°.'
          }
        ]
      }
    ]
  },
  {
    id: 'geo-mod-2',
    title: 'Parcial 2: Secciones Cónicas — La Circunferencia y la Parábola',
    parcialNumber: 2,
    competence: 'Analiza, gráfica y resuelve problemas analíticos que involucren ecuaciones de segundo grado correspondientes a la circunferencia y la parábola con vértice en y fuera del origen, modelando estructuras de construcción.',
    topics: [
      {
        id: 'geo-top-11',
        title: 'Definición Analítica de Secciones Cónicas y Lugares Geométricos',
        rap: 'RAP 1: Clasifica las cónicas a partir del cono de revolución de Apolonio y del concepto de excentricidad.',
        summary: 'Las secciones cónicas son las curvas resultantes de la intersección de un cono circular recto de doble hoja con un plano secante. Si el plano es perpendicular al eje del cono se obtiene una circunferencia; si corta oblicuamente a todas las generatrices es una elipse; si es paralelo a una generatriz es una parábola; y si corta a ambas hojas es una hipérbola.',
        keyPoints: [
          'Definición métrica general: lugar geométrico de los puntos P cuya razón de distancias a un punto fijo (foco) y a una recta fija (directriz) es constante (excentricidad e).',
          'Circunferencia: e = 0.',
          'Elipse: 0 < e < 1.',
          'Parábola: e = 1.',
          'Hipérbola: e > 1.'
        ],
        formulas: [
          {
            name: 'Definición por Excentricidad',
            formula: 'e = d(P, Foco) / d(P, Directriz)',
            explanation: 'Razón constante que define la morfología de la cónica.'
          }
        ],
        practicalApplication: 'Selección de perfiles cónicos para reflectores acústicos, bóvedas y distribución de momentos flectores en vigas.',
        practiceExercises: [
          {
            prompt: 'Si una curva tiene excentricidad e = 1, ¿a qué cónica pertenece y qué relación guardan las distancias al foco y a la directriz?',
            hint: 'Recuerda el valor característico de la parábola.',
            solution: 'Pertenece a una parábola. Como e = 1, la distancia de cualquier punto de la curva al foco es exactamente igual a la distancia perpendicular a la recta directriz.'
          }
        ]
      },
      {
        id: 'geo-top-12',
        title: 'La Circunferencia Canónica C(0,0) y Ordinaria C(h, k)',
        rap: 'RAP 1: Deduce y grafica la circunferencia conocidos su radio y su centro.',
        summary: 'La circunferencia es el lugar geométrico de todos los puntos del plano que equidistan de un punto fijo interior llamado centro C(h, k). La distancia constante se denomina radio r. Si el centro está en el origen C(0,0), la ecuación adopta la forma canónica: x² + y² = r².',
        keyPoints: [
          'Forma canónica: x² + y² = r² (centro en el origen).',
          'Forma ordinaria: (x - h)² + (y - k)² = r² (centro fuera del origen en (h, k)).',
          'El radio r debe ser estrictamente real y positivo (r > 0). Si r = 0 la ecuación representa un punto único; si r² < 0 representa un lugar geométrico imaginario.',
          'La longitud de la circunferencia es P = 2πr y su área interior es A = πr².'
        ],
        formulas: [
          {
            name: 'Forma Ordinaria de la Circunferencia',
            formula: '(x - h)² + (y - k)² = r²',
            explanation: 'Circunferencia con centro en C(h, k) y radio r.'
          }
        ],
        practicalApplication: 'Diseño de glorietas vehiculares, cúpulas semiesféricas y tanques circulares de almacenamiento de agua potable.',
        practiceExercises: [
          {
            prompt: 'Encontrar la ecuación ordinaria y general de la circunferencia con centro en C(-3, 4) y radio r = 5.',
            hint: 'Aplica (x - h)² + (y - k)² = r² con h = -3, k = 4, r = 5.',
            solution: 'Ordinaria: (x - (-3))² + (y - 4)² = 5²  =>  (x + 3)² + (y - 4)² = 25.\nDesarrollando binomios: x² + 6x + 9 + y² - 8y + 16 = 25  =>  x² + y² + 6x - 8y = 0.'
          }
        ]
      },
      {
        id: 'geo-top-13',
        title: 'Ecuación General de la Circunferencia y Completación de Cuadrados Perfectos',
        rap: 'RAP 1: Transforma la ecuación general de segundo grado a la forma ordinaria para extraer C y r.',
        summary: 'Al desarrollar la forma ordinaria e igualar a cero se obtiene la Ecuación General: x² + y² + Dx + Ey + F = 0 (o Ax² + Ay² + Dx + Ey + F = 0 con A = C). Para determinar el centro y el radio a partir de la forma general se aplica el método algebraico de completación de trinomios cuadrados perfectos en x e y.',
        keyPoints: [
          'Condición necesaria: los coeficientes de x² e y² deben ser exactamente iguales (A = C) y no debe existir término en xy (B = 0).',
          'Coordenadas del centro: h = -D / 2, k = -E / 2.',
          'Radio: r = (1/2) √(D² + E² - 4F).',
          'Si D² + E² - 4F > 0 la circunferencia es real; si es igual a 0 representa un punto; si es negativo es imaginaria.'
        ],
        formulas: [
          {
            name: 'Parámetros del Centro y Radio',
            formula: 'C(-D/2, -E/2) ,  r = ½ √(D² + E² - 4F)',
            explanation: 'Deducción del centro y radio a partir de los coeficientes de la forma general.'
          }
        ],
        practicalApplication: 'Análisis de radios de curvatura en entronques carreteros y vías férreas del tren suburbano.',
        practiceExercises: [
          {
            prompt: 'Determinar el centro y radio de la circunferencia x² + y² - 6x + 8y - 11 = 0 mediante completación de cuadrados.',
            hint: 'Agrupa (x² - 6x + ...) + (y² + 8y + ...) = 11 y suma la mitad del coeficiente lineal al cuadrado en ambos miembros.',
            solution: '(x² - 6x + 9) + (y² + 8y + 16) = 11 + 9 + 16  =>  (x - 3)² + (y + 4)² = 36.\nCentro C(3, -4), radio r = √36 = 6.'
          }
        ]
      },
      {
        id: 'geo-top-14',
        title: 'Circunferencia Determinada por Tres Puntos No Colineales y Rectas Tangentes',
        rap: 'RAP 1: Resuelve analíticamente la circunferencia circunscrita a un polígono y tangentes asociadas.',
        summary: 'Tres puntos no colineales determinan de manera única una circunferencia (el circuncentro de un triángulo). Sustituyendo las coordenadas de los tres puntos en la forma general x² + y² + Dx + Ey + F = 0 se obtiene un sistema de tres ecuaciones lineales con tres incógnitas (D, E, F) que se resuelve por determinantes (regla de Cramer) o reducción de Gauss.',
        keyPoints: [
          'La recta tangente a una circunferencia en el punto T(x₁, y₁) es estrictamente perpendicular al radio que une el centro con dicho punto: m_tangente = -1 / m_radio.',
          'Ecuación de la tangente en C(0,0): x₁·x + y₁·y = r².',
          'La distancia perpendicular del centro C a cualquier recta tangente es exactamente igual al radio r.'
        ],
        formulas: [
          {
            name: 'Condición de Tangencia',
            formula: 'd(Centro, Recta Tangente) = r',
            explanation: 'La distancia del centro a la tangente es el radio de la circunferencia.'
          }
        ],
        practicalApplication: 'Trazo de arcos de medio punto sobre muros portantes apoyados en tres puntos conocidos de cantera.',
        practiceExercises: [
          {
            prompt: 'Hallar la ecuación de la recta tangente a la circunferencia x² + y² = 25 en el punto P(3, 4).',
            hint: 'Aplica la fórmula x₁·x + y₁·y = r² o calcula la pendiente del radio.',
            solution: 'Pendiente del radio de (0,0) a (3,4): m_r = 4/3.\nPendiente de la tangente (perpendicular): m_t = -3/4.\nEcuación: y - 4 = -3/4 (x - 3)  =>  4y - 16 = -3x + 9  =>  3x + 4y - 25 = 0.'
          }
        ]
      },
      {
        id: 'geo-top-15',
        title: 'Familia de Circunferencias, Eje Radical y Aplicaciones Hidráulicas',
        rap: 'RAP 1: Determina el eje radical de dos circunferencias secantes o disjuntas.',
        summary: 'El eje radical de dos circunferencias es el lugar geométrico de los puntos que tienen igual potencia respecto a ambas circunferencias. Si se restan miembro a miembro las ecuaciones generales de dos circunferencias C₁ y C₂, los términos cuadráticos se anulan y se obtiene la ecuación lineal de una recta que representa el eje radical: (D₁ - D₂)x + (E₁ - E₂)y + (F₁ - F₂) = 0.',
        keyPoints: [
          'El eje radical es siempre perpendicular al segmento que une los centros de las dos circunferencias.',
          'Si las dos circunferencias se cortan en dos puntos, el eje radical coincide con la recta secante común.',
          'Si son tangentes, el eje radical coincide con la recta tangente común en el punto de contacto.'
        ],
        formulas: [
          {
            name: 'Ecuación del Eje Radical',
            formula: '(D₁ - D₂)x + (E₁ - E₂)y + (F₁ - F₂) = 0',
            explanation: 'Línea recta que une los puntos de igual potencia geométrica de dos circunferencias.'
          }
        ],
        practicalApplication: 'Intersección de conos de abatimiento en pozos de extracción de agua y cobertura de aspersores contra incendios.',
        practiceExercises: [
          {
            prompt: 'Encontrar la ecuación del eje radical de C₁: x² + y² - 4x - 6y + 4 = 0 y C₂: x² + y² - 2x - 2y - 2 = 0.',
            hint: 'Resta C₁ - C₂ miembro a miembro.',
            solution: '(x² + y² - 4x - 6y + 4) - (x² + y² - 2x - 2y - 2) = 0  =>  -2x - 4y + 6 = 0  =>  x + 2y - 3 = 0.'
          }
        ]
      },
      {
        id: 'geo-top-16',
        title: 'La Parábola: Definición, Foco, Directriz, Vértice V(0,0) y Parámetro p',
        rap: 'RAP 2: Deduce los elementos geométricos y formula ecuaciones de parábolas canónicas.',
        summary: 'La parábola es el lugar geométrico de los puntos P(x, y) del plano que equidistan de un punto fijo F (foco) y de una recta fija D (directriz). La distancia del vértice al foco es igual a la distancia del vértice a la directriz y se designa con la letra p (parámetro focal). El segmento perpendicular al eje focal que pasa por el foco y une dos puntos de la parábola es el Lado Recto (LR = |4p|).',
        keyPoints: [
          'Excentricidad de la parábola: e = 1 constante.',
          'Parábola horizontal con vértice en el origen: y² = 4px (abre hacia la derecha si p > 0; hacia la izquierda si p < 0). Foco en (p, 0), directriz x = -p.',
          'Parábola vertical con vértice en el origen: x² = 4py (abre hacia arriba si p > 0; hacia abajo si p < 0). Foco en (0, p), directriz y = -p.',
          'Lado recto: LR = |4p|. Los extremos del lado recto están a distancia 2|p| del foco.'
        ],
        formulas: [
          {
            name: 'Parábola Canónica Horizontal y Vertical',
            formula: 'y² = ±4px   ,   x² = ±4py',
            explanation: 'Ecuaciones canónicas de la parábola con vértice en el origen.'
          },
          {
            name: 'Lado Recto',
            formula: 'LR = |4p|',
            explanation: 'Ancho focal perpendicular que pasa por el foco.'
          }
        ],
        practicalApplication: 'Diseño de reflectores parabólicos de luminarias industriales y antenas de telecomunicación en azoteas.',
        practiceExercises: [
          {
            prompt: 'Dada la parábola y² = 12x, hallar las coordenadas del foco, ecuación de la directriz y longitud del lado recto.',
            hint: 'Compara con y² = 4px para despejar p.',
            solution: '4p = 12  =>  p = 3. Como es horizontal y p > 0, abre a la derecha.\nFoco F(3, 0).\nEcuación de la directriz: x = -p  =>  x = -3 (o x + 3 = 0).\nLado Recto: LR = 4(3) = 12 unidades.'
          }
        ]
      },
      {
        id: 'geo-top-17',
        title: 'La Parábola con Vértice Fuera del Origen V(h, k) y Ecuación General',
        rap: 'RAP 2: Modela parábolas desplazadas en el plano y transforma su expresión analítica.',
        summary: 'Cuando el vértice se traslada al punto V(h, k), las coordenadas x e y se sustituyen por las traslaciones (x - h) y (y - k). Al desarrollar los binomios al cuadrado se obtiene la Ecuación General de la parábola: Ax² + Dx + Ey + F = 0 (parábola de eje vertical) o Cy² + Dx + Ey + F = 0 (parábola de eje horizontal). Solo una de las variables está elevada al cuadrado.',
        keyPoints: [
          'Forma ordinaria horizontal: (y - k)² = 4p(x - h). Eje de simetría horizontal: y = k.',
          'Forma ordinaria vertical: (x - h)² = 4p(y - k). Eje de simetría vertical: x = h.',
          'Para transformar de general a ordinaria: se aísla la variable cuadrática con su término lineal y se completa el trinomio cuadrado perfecto.',
          'Propiedad óptica y acústica: todo rayo emitido desde el foco se refleja paralelamente al eje de simetría.'
        ],
        formulas: [
          {
            name: 'Parábola Ordinaria Vertical',
            formula: '(x - h)² = 4p (y - k)',
            explanation: 'Vértice en V(h, k), foco en F(h, k + p), directriz y = k - p.'
          },
          {
            name: 'Parábola Ordinaria Horizontal',
            formula: '(y - k)² = 4p (x - h)',
            explanation: 'Vértice en V(h, k), foco en F(h + p, k), directriz x = h - p.'
          }
        ],
        practicalApplication: 'Cálculo del gálibo vertical y peralte en puentes vehiculares con rasantes parabólicas.',
        practiceExercises: [
          {
            prompt: 'Reducir a forma ordinaria la parábola y² - 4y - 8x + 28 = 0 y encontrar su vértice y foco.',
            hint: 'Agrupa (y² - 4y + ...) = 8x - 28 y completa el trinomio cuadrado.',
            solution: '(y² - 4y + 4) = 8x - 28 + 4  =>  (y - 2)² = 8x - 24  =>  (y - 2)² = 8(x - 3).\nVértice V(3, 2). 4p = 8  =>  p = 2 (abre a la derecha).\nFoco F(3 + 2, 2) = F(5, 2). Directriz: x = 3 - 2 = 1.'
          }
        ]
      },
      {
        id: 'geo-top-18',
        title: 'Rectas Tangentes a la Parábola y Modelado de Arcos Parabólicos en Puentes y Cubiertas',
        rap: 'RAP 2: Aplica ecuaciones parabólicas en el cálculo de arcos estructurales y cables colgantes.',
        summary: 'Los arcos parabólicos son ampliamente utilizados en ingeniería civil y arquitectura porque bajo una carga uniforme verticalmente distribuida (como el peso propio de una losa o tablero de puente), trabajan exclusivamente a compresión pura, eliminando los esfuerzos de flexión. La ecuación se modela ubicando el origen en la clave del arco V(0, h) o en uno de los apoyos.',
        keyPoints: [
          'Modelado típico de arco: vértice en la clave más alta V(0, H) y apoyos en A(-L/2, 0) y B(L/2, 0): x² = - (L² / 4H) · (y - H).',
          'Los cables de puentes colgantes (como el Golden Gate o los puentes atirantados) adoptan una curva parabólica cuando soportan un tablero horizontal uniforme.',
          'La recta tangente a una parábola y² = 4px en el punto de contacto P₁(x₁, y₁) es: y₁·y = 2p(x + x₁).'
        ],
        formulas: [
          {
            name: 'Ecuación de Arco Parabólico de Claro L y Altura H',
            formula: 'y = H - (4H / L²) · x²',
            explanation: 'Perfil de arco con eje vertical de simetría en x = 0 y apoyos en ±L/2.'
          }
        ],
        practicalApplication: 'Diseño estructural de cubiertas de naves industriales, hangares y arcos de puentes de concreto armado.',
        practiceExercises: [
          {
            prompt: 'Un arco parabólico tiene un claro de 40 metros y una altura máxima de 10 metros en el centro. Hallar la altura del arco a una distancia de 10 metros del centro.',
            hint: 'Usa la ecuación y = H - (4H / L²)·x² con H = 10 m, L = 40 m y evalúa en x = 10 m.',
            solution: 'y = 10 - [4(10) / 40²] · (10)² = 10 - [40 / 1600] · 100 = 10 - [0.025 · 100] = 10 - 2.5 = 7.5 metros.'
          }
        ]
      }
    ]
  },
  {
    id: 'geo-mod-3',
    title: 'Parcial 3: La Elipse, la Hipérbola, Coordenadas Polares y Paramétricas',
    parcialNumber: 3,
    competence: 'Analiza, gráfica y aplica las ecuaciones canónicas, ordinarias y generales de la elipse y la hipérbola, así como la identificación de cónicas generales, sistemas polares y ecuaciones paramétricas.',
    topics: [
      {
        id: 'geo-top-19',
        title: 'La Elipse: Definición Analítica, Focos, Vértices y Relación Pitagórica (a² = b² + c²)',
        rap: 'RAP 1: Deduce los elementos geométricos y relaciones fundamentales de la elipse.',
        summary: 'La elipse es el lugar geométrico de todos los puntos del plano tales que la suma de sus distancias a dos puntos fijos interiores F₁ y F₂ (focos) es una constante positiva igual a 2a (la longitud del eje mayor): d(P, F₁) + d(P, F₂) = 2a. El semieje mayor se designa como a, el semieje menor como b, y la semidistancia focal como c.',
        keyPoints: [
          'Relación pitagórica fundamental de la elipse: a² = b² + c² (donde a es siempre el semieje de mayor longitud: a > b y a > c).',
          'Eje mayor: longitud 2a; Eje menor: longitud 2b; Distancia interfocal: 2c.',
          'Vértices principales: extremos del eje mayor a distancia a del centro.',
          'Covértices: extremos del eje menor a distancia b del centro.'
        ],
        formulas: [
          {
            name: 'Relación Pitagórica en la Elipse',
            formula: 'a² = b² + c²',
            explanation: 'Relación métrica entre semieje mayor (a), semieje menor (b) y semidistancia focal (c).'
          }
        ],
        practicalApplication: 'Trazado tradicional del elipsógrafo de jardinero en canchas deportivas y plazas públicas.',
        practiceExercises: [
          {
            prompt: 'Si una elipse tiene eje mayor de 10 unidades y semidistancia focal c = 4, calcular la longitud de su semieje menor b.',
            hint: 'El semieje mayor es a = 10/2 = 5. Usa b² = a² - c².',
            solution: 'a = 5, c = 4. b² = 5² - 4² = 25 - 16 = 9  =>  b = √9 = 3 unidades.'
          }
        ]
      },
      {
        id: 'geo-top-20',
        title: 'Excentricidad, Lado Recto y Ecuaciones Canónica y Ordinaria de la Elipse',
        rap: 'RAP 1: Formula ecuaciones de elipses horizontales y verticales centradas en el origen y fuera de él.',
        summary: 'La excentricidad de la elipse es e = c / a. Como c < a, se cumple que 0 < e < 1. Mide el grado de aplastamiento de la elipse: si e tiende a 0 la elipse es casi circular; si e tiende a 1 es muy achatada. El lado recto mide la cuerda focal perpendicular: LR = 2b² / a.',
        keyPoints: [
          'Elipse horizontal canónica C(0,0): x² / a² + y² / b² = 1 (el denominador mayor a² está bajo x²).',
          'Elipse vertical canónica C(0,0): x² / b² + y² / a² = 1 (el denominador mayor a² está bajo y²).',
          'Elipse ordinaria horizontal C(h, k): (x - h)² / a² + (y - k)² / b² = 1.',
          'Elipse ordinaria vertical C(h, k): (x - h)² / b² + (y - k)² / a² = 1.',
          'Lado recto: LR = 2b² / a (ancho de la elipse en cada foco).'
        ],
        formulas: [
          {
            name: 'Elipse Ordinaria Horizontal',
            formula: '(x - h)² / a² + (y - k)² / b² = 1',
            explanation: 'Elipse con eje focal paralelo al eje X.'
          },
          {
            name: 'Excentricidad y Lado Recto',
            formula: 'e = c / a < 1   ,   LR = 2b² / a',
            explanation: 'Medida del aplastamiento y longitud de la cuerda perpendicular focal.'
          }
        ],
        practicalApplication: 'Cálculo de bóvedas de galerías de arte que aprovechan las propiedades acústicas de los focos elípticos.',
        practiceExercises: [
          {
            prompt: 'Dada la elipse x² / 25 + y² / 9 = 1, determinar vértices, focos, excentricidad y lado recto.',
            hint: 'a² = 25  =>  a = 5; b² = 9  =>  b = 3; c = √(25 - 9) = 4.',
            solution: 'Elipse horizontal con C(0,0). Vértices V(±5, 0). Focos F(±4, 0).\nExcentricidad: e = 4/5 = 0.8.\nLado recto: LR = 2(9) / 5 = 18/5 = 3.6 unidades.'
          }
        ]
      },
      {
        id: 'geo-top-21',
        title: 'Ecuación General de la Elipse y Modelado de Arcos Semielípticos y Bóvedas',
        rap: 'RAP 1: Transforma la ecuación general cuadrática a la forma ordinaria y modela arcos semielípticos.',
        summary: 'Al desarrollar la forma ordinaria se obtiene la Ecuación General: Ax² + Cy² + Dx + Ey + F = 0, donde A y C tienen el mismo signo pero magnitudes distintas (A ≠ C y A·C > 0). Los arcos semielípticos se emplean en puentes de piedra y mampostería debido a que ofrecen un mayor gálibo libre navegable que los arcos de medio punto.',
        keyPoints: [
          'Criterio de identificación: A y C del mismo signo (ambos positivos) y desiguales.',
          'Completación de cuadrados: factorizar el coeficiente cuadrático en x y en y antes de completar.',
          'Modelado de arco semielíptico: claro L = 2a (semieje a = L/2) y altura en la clave H = b.'
        ],
        formulas: [
          {
            name: 'Arco Semielíptico de Claro L y Altura H',
            formula: 'x² / (L / 2)² + y² / H² = 1  (para y ≥ 0)',
            explanation: 'Modelo analítico para arcos de mampostería y puentes vehiculares.'
          }
        ],
        practicalApplication: 'Construcción de alcantarillas elípticas prefabricadas de concreto y arcos torales en templos históricos.',
        practiceExercises: [
          {
            prompt: 'Un puente tiene forma de arco semielíptico con un claro total de 24 metros y una altura central de 8 metros. Calcular la altura del arco a 6 metros del centro.',
            hint: 'a = 12 m, b = 8 m. Evalúa en x = 6 m en la ecuación x²/12² + y²/8² = 1.',
            solution: '6² / 12² + y² / 8² = 1  =>  36 / 144 + y² / 64 = 1  =>  0.25 + y² / 64 = 1  =>  y² / 64 = 0.75  =>  y² = 48  =>  y = √48 ≈ 6.93 metros.'
          }
        ]
      },
      {
        id: 'geo-top-22',
        title: 'La Hipérbola: Definición, Elementos, Relación (c² = a² + b²) y Ecuaciones Canónica y Ordinaria',
        rap: 'RAP 2: Deduce los elementos de la hipérbola y grafica sus ramas simétricas.',
        summary: 'La hipérbola es el lugar geométrico de los puntos P del plano tales que el valor absoluto de la diferencia de sus distancias a dos focos F₁ y F₂ es constante e igual a 2a: |d(P, F₁) - d(P, F₂)| = 2a. Consta de dos ramas abiertas simétricas. El semieje transverso es a, el semieje conjugado es b, y la semidistancia focal es c.',
        keyPoints: [
          'Relación pitagórica fundamental de la hipérbola: c² = a² + b² (aquí c es siempre el mayor: c > a y c > b).',
          'Eje transverso: longitud 2a (une los dos vértices). Eje conjugado: longitud 2b.',
          'Hipérbola canónica horizontal: x² / a² - y² / b² = 1 (el término positivo indica la dirección del eje transverso).',
          'Hipérbola canónica vertical: y² / a² - x² / b² = 1 (abre hacia arriba y hacia abajo).'
        ],
        formulas: [
          {
            name: 'Relación Pitagórica en la Hipérbola',
            formula: 'c² = a² + b²',
            explanation: 'En la hipérbola la distancia focal c es mayor que los dos semiejes.'
          },
          {
            name: 'Hipérbola Canónica Horizontal',
            formula: 'x² / a² - y² / b² = 1',
            explanation: 'Vértices en V(±a, 0) y focos en F(±c, 0).'
          }
        ],
        practicalApplication: 'Diseño estructural de torres de enfriamiento hiperbólicas en termoeléctricas y sistemas de radiogoniometría LORAN.',
        practiceExercises: [
          {
            prompt: 'Dada la hipérbola x² / 16 - y² / 9 = 1, calcular vértices, focos y distancia focal.',
            hint: 'a² = 16  =>  a = 4; b² = 9  =>  b = 3; c = √(16 + 9) = 5.',
            solution: 'Eje transverso horizontal. Vértices V(±4, 0). Focos F(±5, 0). Distancia focal 2c = 10 unidades.'
          }
        ]
      },
      {
        id: 'geo-top-23',
        title: 'Excentricidad, Lado Recto y Ecuaciones de las Asíntotas de la Hipérbola',
        rap: 'RAP 2: Deduce las ecuaciones de las asíntotas y determina la excentricidad de la hipérbola.',
        summary: 'La excentricidad de la hipérbola es e = c / a > 1. Las asíntotas son dos rectas concurrentes en el centro hacia las cuales las ramas de la hipérbola se aproximan indefinidamente sin llegar a tocarlas. Se obtienen igualando a cero el primer miembro de la forma ordinaria. El lado recto es LR = 2b² / a.',
        keyPoints: [
          'Asíntotas para hipérbola horizontal canónica: y = ± (b / a) x.',
          'Asíntotas para hipérbola vertical canónica: y = ± (a / b) x.',
          'Asíntotas para hipérbola ordinaria: y - k = ± (b / a) (x - h).',
          'Hipérbola equilátera: cuando a = b, sus asíntotas son perpendiculares entre sí (y = ±x) y su excentricidad es e = √2.'
        ],
        formulas: [
          {
            name: 'Asíntotas de la Hipérbola Horizontal',
            formula: 'y - k = ± (b / a) · (x - h)',
            explanation: 'Rectas guía límite de las ramas hiperbólicas.'
          }
        ],
        practicalApplication: 'Diseño de perfiles de cascarones hiperbólicos de concreto armado (paraboloides hiperbólicos) como los creados por Félix Candela.',
        practiceExercises: [
          {
            prompt: 'Determinar las ecuaciones de las asíntotas de la hipérbola 9x² - 16y² = 144.',
            hint: 'Divide entre 144 para obtener x²/16 - y²/9 = 1, donde a = 4 y b = 3.',
            solution: 'Forma canónica: x²/16 - y²/9 = 1. Asíntotas: y = ± (b/a) x  =>  y = ± (3/4) x, es decir: 3x - 4y = 0 y 3x + 4y = 0.'
          }
        ]
      },
      {
        id: 'geo-top-24',
        title: 'Ecuación General de Segundo Grado y el Discriminante (I = B² - 4AC)',
        rap: 'RAP 3: Identifica cualquier cónica general evaluando el indicador invariante.',
        summary: 'Toda ecuación cuadrática en dos variables tiene la forma general Ax² + Bxy + Cy² + Dx + Ey + F = 0. Si no existe término en xy (B = 0), los ejes de la cónica son paralelos a los ejes cartesianos. La naturaleza geométrica de la curva está determinada por el discriminante o indicador invariante I = B² - 4AC.',
        keyPoints: [
          'Si I = B² - 4AC < 0: la cónica es una ELIPSE (o una circunferencia si B = 0 y A = C, o elipse imaginaria/punto).',
          'Si I = B² - 4AC = 0: la cónica es una PARÁBOLA (o dos rectas paralelas/coincidentes).',
          'Si I = B² - 4AC > 0: la cónica es una HIPÉRBOLA (o dos rectas secantes).',
          'Si B ≠ 0, la cónica está rotada un ángulo θ respecto a los ejes X e Y, donde cot(2θ) = (A - C) / B.'
        ],
        formulas: [
          {
            name: 'Discriminante de Cónicas',
            formula: 'I = B² - 4AC',
            explanation: 'Indicador invariante que clasifica la curva en elipse, parábola o hipérbola.'
          }
        ],
        practicalApplication: 'Identificación matemática de curvas en software de modelado arquitectónico CAD/BIM.',
        practiceExercises: [
          {
            prompt: 'Clasificar la curva 3x² - 4xy + 2y² + 6x - 8y + 5 = 0 utilizando el discriminante.',
            hint: 'Identifica A = 3, B = -4, C = 2 y calcula B² - 4AC.',
            solution: 'B² - 4AC = (-4)² - 4(3)(2) = 16 - 24 = -8 < 0.\nComo el discriminante es negativo (I < 0), la curva corresponde a una Elipse rotada.'
          }
        ]
      },
      {
        id: 'geo-top-25',
        title: 'Coordenadas Polares (r, θ), Curvas Notables y Conversión Rectangular-Polar',
        rap: 'RAP 3: Representa puntos y ecuaciones en el sistema de coordenadas polares.',
        summary: 'El sistema polar define la posición de un punto P mediante un radio vector r (distancia dirigida desde el polo u origen O) y un ángulo polar o argumento θ (medido en radianes o grados desde el eje polar horizontal positivo). Las fórmulas de transformación entre coordenadas rectangulares (x, y) y polares (r, θ) se basan en trigonometría circular.',
        keyPoints: [
          'De polar a cartesiana: x = r · cos(θ) ,  y = r · sen(θ).',
          'De cartesiana a polar: r = √(x² + y²) ,  θ = arctan(y / x) (ajustando cuadrante).',
          'Curvas polares notables: r = a (circunferencia centrada en el polo), r = a·cos(nθ) (rosas polares), r = a ± b·cos(θ) (caracoles y cardioides), r = a·θ (espiral de Arquímedes).'
        ],
        formulas: [
          {
            name: 'Transformación Polar-Cartesiana',
            formula: 'x = r · cos(θ)   ,   y = r · sen(θ)',
            explanation: 'Conversión de radio y ángulo a coordenadas rectangulares.'
          },
          {
            name: 'Transformación Cartesiana-Polar',
            formula: 'r = √(x² + y²)   ,   θ = arctan(y / x)',
            explanation: 'Cálculo del módulo y argumento a partir de x e y.'
          }
        ],
        practicalApplication: 'Modelado de escaleras de caracol, levantamientos topográficos con radiaciones y diseño de cúpulas geodésicas.',
        practiceExercises: [
          {
            prompt: 'Convertir el punto en coordenadas polares P(4, 150°) a coordenadas rectangulares (x, y).',
            hint: 'Usa x = r·cos(150°) y y = r·sen(150°). Recuerda cos(150°) = -√3/2 y sen(150°) = 1/2.',
            solution: 'x = 4 · cos(150°) = 4 · (-√3/2) = -2√3 ≈ -3.464.\ny = 4 · sen(150°) = 4 · (1/2) = 2.\nCoordenadas rectangulares: P(-2√3, 2).'
          }
        ]
      },
      {
        id: 'geo-top-26',
        title: 'Ecuaciones Paramétricas de Curvas Planas y Técnicas de Eliminación de Parámetros',
        rap: 'RAP 3: Modela trayectorias y curvas geométricas mediante variables paramétricas continuas.',
        summary: 'En las ecuaciones paramétricas, las coordenadas cartesianas x e y se expresan de manera desacoplada en función de una tercera variable independiente común llamada parámetro t (x = f(t), y = g(t)). Para obtener la ecuación rectangular cartesiana f(x, y) = 0 se elimina el parámetro t mediante sustitución algebraica o identidades trigonométricas pitagóricas.',
        keyPoints: [
          'En física cinemática, el parámetro t suele representar el tiempo, modelando la posición instantánea de un móvil o proyectil.',
          'Eliminación algebraica: despejar t de una de las ecuaciones y sustituir en la otra.',
          'Eliminación trigonométrica: para x = a·cos(t), y = b·sen(t), se despeja cos(t) y sen(t) y se usa cos²(t) + sen²(t) = 1, dando la elipse (x/a)² + (y/b)² = 1.',
          'Para x = a·sec(t), y = b·tan(t), se usa sec²(t) - tan²(t) = 1, dando la hipérbola (x/a)² - (y/b)² = 1.'
        ],
        formulas: [
          {
            name: 'Eliminación Paramétrica Trigonométrica',
            formula: 'cos²(t) + sen²(t) = 1  =>  (x / a)² + (y / b)² = 1',
            explanation: 'Deducción de la ecuación cartesiana de la elipse a partir de su parametrización.'
          }
        ],
        practicalApplication: 'Modelado de trayectorias de grúas torre en obras y cálculo de curvas de nivel cinemáticas en diseño vial.',
        practiceExercises: [
          {
            prompt: 'Eliminar el parámetro t de las ecuaciones paramétricas x = 3t + 2, y = 6t² - 1, e identificar la curva cartesiana.',
            hint: 'Despeja t de la ecuación lineal de x: t = (x - 2)/3 y sustitúyelo en y.',
            solution: 't = (x - 2) / 3. Sustituyendo en y: y = 6[(x - 2) / 3]² - 1 = 6[(x - 2)² / 9] - 1 = (2/3)(x - 2)² - 1.\n(2/3)(x - 2)² = y + 1  =>  (x - 2)² = (3/2)(y + 1).\nRepresenta una parábola vertical con vértice en V(2, -1) que abre hacia arriba.'
          }
        ]
      }
    ]
  }
];

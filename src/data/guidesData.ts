import { StudyModule } from '../types';
import { EXTRA_GUIDES_DATA } from './extraGuidesData';

export const GUIDES_DATA: { [subjectId: string]: StudyModule[] } = {
  'geometria-analitica': [
    {
      id: 'geo-mod-1',
      title: 'Módulo 1: Lugares Geométricos, Distancia y la Línea Recta',
      parcialNumber: 1,
      competence: 'Resuelve problemas de lugares geométricos, en particular de la línea recta, empleando las propiedades del plano cartesiano en situaciones académicas y sociales.',
      topics: [
        {
          id: 'geo-top-1',
          title: 'Sistema Cartesiano y Distancia entre Dos Puntos',
          rap: 'RAP 1: Describe lugares geométricos mediante la localización de puntos en el plano cartesiano.',
          summary: 'El plano cartesiano se forma por dos rectas perpendiculares graduadas: eje X (abscisas) y eje Y (ordenadas). Cualquier punto P se representa como un par ordenado P(x, y). La distancia euclidiana entre dos puntos P1(x1, y1) y P2(x2, y2) es la longitud del segmento que los une.',
          keyPoints: [
            'Los 4 cuadrantes se enumeran en sentido contrario a las manecillas del reloj: I (+,+), II (-,+), III (-,-), IV (+,-).',
            'La distancia d es siempre una cantidad positiva o cero.',
            'Aplicación para triángulos: teorema de Pitágoras para verificar triángulos rectángulos (c² = a² + b²), y triángulos isósceles si dos lados son iguales.'
          ],
          formulas: [
            {
              name: 'Distancia entre dos puntos',
              formula: 'd = √[(x₂ - x₁)² + (y₂ - y₁)²]',
              explanation: 'Deducción a partir del Teorema de Pitágoras en el triángulo rectángulo formado por los catetos Δx y Δy.'
            }
          ],
          practicalApplication: 'En trazo topográfico y delimitación de predios de construcción para verificar dimensiones de linderos a partir de vértices de coordenadas.',
          practiceExercises: [
            {
              prompt: 'Calcular la distancia entre A(3, 7) y B(17, -5).',
              hint: 'Δx = 17 - 3 = 14; Δy = -5 - 7 = -12',
              solution: 'd = √[(14)² + (-12)²] = √[196 + 144] = √340 ≈ 18.44 unidades.'
            }
          ]
        },
        {
          id: 'geo-top-2',
          title: 'División de un Segmento en una Razón Dada y Punto Medio',
          rap: 'RAP 1: Describe lugares geométricos mediante la localización de puntos en el plano cartesiano.',
          summary: 'Si P(x, y) divide al segmento P1P2 en la razón r = P1P / PP2, sus coordenadas se obtienen mediante relaciones proporcionales. Si r = 1, P es el punto medio (Pm). Si r es negativa, el punto de división es exterior al segmento.',
          keyPoints: [
            'Razón r = (x - x₁) / (x₂ - x) = (y - y₁) / (y₂ - y), con r ≠ -1.',
            'Punto medio: xm = (x₁ + x₂)/2 ; ym = (y₁ + y₂)/2.',
            'Centroide o Baricentro de un triángulo de vértices (x₁,y₁), (x₂,y₂), (x₃,y₃): G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3).'
          ],
          formulas: [
            {
              name: 'Coordenadas del punto que divide en razón r',
              formula: 'x = (x₁ + r·x₂) / (1 + r) ,  y = (y₁ + r·y₂) / (1 + r)',
              explanation: 'Determina las coordenadas del punto divisor interno (r > 0) o externo (r < 0).'
            }
          ],
          practicalApplication: 'Cálculo de cotas de desplante, ubicación de apoyos intermedios y repartición de cargas en vigas continuas.',
          practiceExercises: [
            {
              prompt: 'Hallar el punto Q que divide al segmento P1(-2, 3) y P2(3, -2) en la razón r = 2/5.',
              hint: 'x = (-2 + (2/5)(3)) / (1 + 2/5)',
              solution: 'x = (-2 + 6/5) / (7/5) = (-4/5) / (7/5) = -4/7. y = (3 + (2/5)(-2)) / (7/5) = (11/5)/(7/5) = 11/7. Q(-4/7, 11/7).'
            }
          ]
        },
        {
          id: 'geo-top-3',
          title: 'Pendiente, Ángulo de Inclinación y Formas de la Ecuación de la Recta',
          rap: 'RAP 2: Manipula los elementos de la ecuación de la línea recta en sus diferentes expresiones.',
          summary: 'La pendiente m es la tangente trigonométrica del ángulo de inclinación θ respecto al eje horizontal positivo: m = tan(θ). Dos rectas son paralelas si m₁ = m₂, y perpendiculares si m₁ · m₂ = -1.',
          keyPoints: [
            'Forma Punto-Pendiente: y - y₁ = m(x - x₁)',
            'Forma Pendiente-Ordenada al origen: y = mx + b',
            'Forma Simétrica o Canónica: x/a + y/b = 1 (a = abscisa al origen, b = ordenada al origen)',
            'Forma General: Ax + By + C = 0, donde m = -A/B y b = -C/B',
            'Distancia de un punto P(x₀, y₀) a la recta Ax + By + C = 0: d = |A·x₀ + B·y₀ + C| / √(A² + B²)'
          ],
          formulas: [
            {
              name: 'Pendiente de una recta',
              formula: 'm = (y₂ - y₁) / (x₂ - x₁)',
              explanation: 'Relación de elevación sobre avance entre dos puntos.'
            },
            {
              name: 'Ángulo entre dos rectas',
              formula: 'tan(θ) = (m₂ - m₁) / (1 + m₁·m₂)',
              explanation: 'Ángulo medido en sentido antihorario desde la recta inicial con pendiente m₁ hacia la recta final con pendiente m₂.'
            }
          ],
          practicalApplication: 'Cálculo de pendientes reglamentarias en rampas para discapacitados (máximo 6% a 8% según NTC) y tuberías de drenaje pluvial y sanitario (mínimo 2%).',
          practiceExercises: [
            {
              prompt: 'Hallar la distancia de la recta 3x - 4y + 6 = 0 al punto A(7, -3).',
              hint: 'A=3, B=-4, C=6; x₀=7, y₀=-3',
              solution: 'd = |3(7) - 4(-3) + 6| / √(3² + (-4)²) = |21 + 12 + 6| / √25 = 39 / 5 = 7.8 unidades.'
            }
          ]
        }
      ]
    },
    {
      id: 'geo-mod-2',
      title: 'Módulo 2: Circunferencia y Parábola',
      parcialNumber: 2,
      competence: 'Resuelve problemas que involucren ecuaciones de segundo grado y su representación gráfica, identificando los elementos específicos de la circunferencia y la parábola.',
      topics: [
        {
          id: 'geo-top-4',
          title: 'La Circunferencia (Canónica, Ordinaria y General)',
          rap: 'RAP 1 y 2: Ubica los elementos de la circunferencia y obtiene su ecuación ordinaria y general.',
          summary: 'Lugar geométrico de los puntos del plano que equidistan de un punto fijo llamado centro C(h, k) a una distancia constante llamada radio r.',
          keyPoints: [
            'Ecuación canónica (centro en el origen): x² + y² = r²',
            'Ecuación ordinaria (centro fuera del origen): (x - h)² + (y - k)² = r²',
            'Ecuación general: x² + y² + Dx + Ey + F = 0, donde h = -D/2, k = -E/2, r = (1/2)√(D² + E² - 4F)',
            'Si D² + E² - 4F > 0 representa circunferencia real; si = 0 es un punto; si < 0 no existe lugar geométrico real.'
          ],
          formulas: [
            {
              name: 'Ecuación Ordinaria de la Circunferencia',
              formula: '(x - h)² + (y - k)² = r²',
              explanation: 'Centro en C(h,k) y radio r.'
            }
          ],
          practicalApplication: 'Diseño de glorietas viales, arcos de medio punto y cisternas cilíndricas en proyectos de casa habitación.',
          practiceExercises: [
            {
              prompt: 'Encontrar el centro y radio de la circunferencia x² + y² - 8x - 6y - 40 = 0.',
              hint: 'Completa trinomios cuadrados perfectos: (x² - 8x + 16) + (y² - 6y + 9) = 40 + 16 + 9',
              solution: '(x - 4)² + (y - 3)² = 65. Centro C(4, 3) y radio r = √65 ≈ 8.06 unidades.'
            }
          ]
        },
        {
          id: 'geo-top-5',
          title: 'La Parábola (Vértice en el Origen y Fuera del Origen)',
          rap: 'RAP 1 y 2: Determina foco, directriz, lado recto y ecuación ordinaria y general de la parábola.',
          summary: 'Lugar geométrico de los puntos que equidistan de un punto fijo F (foco) y de una recta fija D (directriz). El parámetro p representa la distancia del vértice al foco.',
          keyPoints: [
            'Vértice en el origen: y² = 4px (horizontal, abre a la derecha si p>0, izquierda si p<0); x² = 4py (vertical, abre arriba si p>0, abajo si p<0).',
            'Longitud del Lado Recto: LR = |4p|.',
            'Vértice fuera del origen: (y - k)² = 4p(x - h) [horizontal]; (x - h)² = 4p(y - k) [vertical].',
            'Forma general: Cy² + Dx + Ey + F = 0 (eje horizontal) o Ax² + Dx + Ey + F = 0 (eje vertical).'
          ],
          formulas: [
            {
              name: 'Ecuación ordinaria con eje vertical',
              formula: '(x - h)² = 4p(y - k)',
              explanation: 'Vértice en V(h, k), foco en F(h, k + p), directriz y = k - p.'
            }
          ],
          practicalApplication: 'Cálculo de cables en puentes colgantes, arcos parabólicos de cubiertas de claros amplios y reflectores solares térmicos.',
          practiceExercises: [
            {
              prompt: 'Dada la parábola y² = -9x, hallar foco, directriz y lado recto.',
              hint: '4p = -9 => p = -9/4 = -2.25',
              solution: 'Foco F(-9/4, 0), directriz x = 9/4 = 2.25, Lado Recto LR = |-9| = 9 unidades. Abre a la izquierda.'
            }
          ]
        }
      ]
    },
    {
      id: 'geo-mod-3',
      title: 'Módulo 3: Elipse, Hipérbola, Coordenadas Polares y Paramétricas',
      parcialNumber: 3,
      competence: 'Resuelve problemas que involucran elipse, hipérbola, transformaciones de coordenadas polares y ecuaciones paramétricas aplicadas.',
      topics: [
        {
          id: 'geo-top-6',
          title: 'La Elipse y la Hipérbola',
          rap: 'RAP 1 y 2: Determina elementos, excentricidad y ecuaciones ordinarias de la elipse y la hipérbola.',
          summary: 'La elipse es el lugar donde la suma de distancias a dos focos es constante (2a), con relación pitagórica a² = b² + c² y excentricidad e = c/a < 1. La hipérbola es donde el valor absoluto de la diferencia es constante (2a), con c² = a² + b² y excentricidad e = c/a > 1.',
          keyPoints: [
            'Elipse horizontal con centro en el origen: x²/a² + y²/b² = 1 (a > b). Eje mayor = 2a, eje menor = 2b, lado recto LR = 2b²/a.',
            'Hipérbola horizontal con centro en el origen: x²/a² - y²/b² = 1. Asíntotas: y = ±(b/a)x.',
            'Hipérbola vertical: y²/a² - x²/b² = 1. Asíntotas: y = ±(a/b)x.'
          ],
          formulas: [
            {
              name: 'Relación fundamental de la Elipse',
              formula: 'a² = b² + c² ,  e = c / a  (e < 1)',
              explanation: 'a = semieje mayor, b = semieje menor, c = semidistancia focal.'
            },
            {
              name: 'Relación fundamental de la Hipérbola',
              formula: 'c² = a² + b² ,  e = c / a  (e > 1)',
              explanation: 'c = semidistancia focal, a = semieje real/transverso, b = semieje imaginario/conjugado.'
            }
          ],
          practicalApplication: 'Arcos semielípticos en puentes y túneles carreteros, bóvedas acústicas en auditorios y cúpulas arquitectónicas.',
          practiceExercises: [
            {
              prompt: 'Reducir 3x² + 4y² = 48 a la forma ordinaria y calcular sus elementos.',
              hint: 'Dividir todo entre 48: x²/16 + y²/12 = 1',
              solution: 'a² = 16 (a = 4), b² = 12 (b = √12 ≈ 3.46). c = √(16 - 12) = √4 = 2. Eje mayor = 8, Eje menor = 2√12, Focos F(±2, 0), Excentricidad e = 2/4 = 0.5.'
            }
          ]
        },
        {
          id: 'geo-top-7',
          title: 'Coordenadas Polares y Ecuaciones Paramétricas',
          rap: 'RAP 1 y 2: Transforma ecuaciones entre sistemas cartesianos, polares y paramétricos.',
          summary: 'En el sistema polar un punto se representa por P(r, θ), donde r es el radio vector y θ es el ángulo polar. En ecuaciones paramétricas, las variables x e y se expresan en función de un parámetro independiente t (tiempo, ángulo, etc.).',
          keyPoints: [
            'De Polar a Cartesiana: x = r·cos(θ) , y = r·sen(θ).',
            'De Cartesiana a Polar: r = √(x² + y²) , θ = arctan(y / x).',
            'Ecuación polar de una recta: p = r·cos(θ - ω) o r = c / (A·cos θ + B·sen θ).',
            'Eliminación de parámetro: despejar t en una ecuación y sustituir en la otra, o usar identidades trigonométricas como sen²θ + cos²θ = 1 o sec²θ - tan²θ = 1.'
          ],
          formulas: [
            {
              name: 'Transformación Polar-Cartesiana',
              formula: 'x = r·cos θ ,  y = r·sen θ ,  r² = x² + y²',
              explanation: 'Relaciones geométricas de conversión trigonométrica.'
            }
          ],
          practicalApplication: 'Trayectorias balísticas en obras de ingeniería, cálculo de estructuras radiales y modelado cinemático de grúas torre.',
          practiceExercises: [
            {
              prompt: 'Transformar a ecuación rectangular la ecuación polar r = 2 / (1 - cos θ).',
              hint: 'r - r·cos θ = 2 => r = 2 + x => r² = (2 + x)²',
              solution: 'x² + y² = 4 + 4x + x² => y² = 4x + 4 = 4(x + 1). Representa una parábola horizontal con vértice en V(-1, 0).'
            }
          ]
        }
      ]
    }
  ],

  'fisica-1': [
    {
      id: 'fis-mod-1',
      title: 'Módulo 1: Sistemas de Unidades, Mediciones y Teoría de Errores',
      parcialNumber: 1,
      competence: 'Aplica diferentes procesos de medición en el análisis de fenómenos naturales, en situaciones académicas y sociales.',
      topics: [
        {
          id: 'fis-top-1',
          title: 'Magnitudes Físicas, SI y Conversión de Unidades',
          rap: 'RAP 1: Señala diferencias entre sistemas de unidades absolutos y gravitacionales.',
          summary: 'Una magnitud física es toda propiedad de la materia o energía susceptible de ser medida. El Sistema Internacional (SI) establece 7 magnitudes fundamentales: longitud (m), masa (kg), tiempo (s), corriente eléctrica (A), temperatura (K), intensidad luminosa (cd) y cantidad de sustancia (mol).',
          keyPoints: [
            'Diferencia entre magnitud fundamental (definida por sí misma) y derivada (combinación de fundamentales, ej. velocidad m/s, fuerza N = kg·m/s²).',
            'Factores de conversión comunes en construcción: 1 pulgada = 2.54 cm; 1 pie = 0.3048 m = 12 pulg; 1 m³ = 1000 L; 1 m² = 10,000 cm².',
            'Cifras significativas: regla para operaciones de suma/resta (mismo número de decimales) y multiplicación/división (menor número de cifras significativas).'
          ],
          formulas: [
            {
              name: 'Conversión por factor unitario',
              formula: 'Valor_nuevo = Valor_original × (Unidad_deseada / Unidad_original)',
              explanation: 'Multiplicación por fracciones cuyo numerador y denominador representan la misma cantidad física.'
            }
          ],
          practicalApplication: 'Cálculo de volúmenes de concreto en m³, conversión de presiones de diseño (kg/cm² a MPa) y dosificación de materiales.',
          practiceExercises: [
            {
              prompt: 'Convertir 72 km/h a m/s.',
              hint: 'Multiplica por (1000 m / 1 km) y por (1 h / 3600 s)',
              solution: '72 × (1000 / 3600) = 72 / 3.6 = 20 m/s.'
            }
          ]
        },
        {
          id: 'fis-top-2',
          title: 'Teoría de Errores en la Medición',
          rap: 'RAP 2: Realiza diferentes tipos de medición para cuantificar objetos en el entorno social.',
          summary: 'Toda medición conlleva incertidumbre. Los errores se clasifican en sistemáticos (atribuibles al instrumento defectuoso, mala calibración o temperatura) y accidentales o aleatorios (debidos al observador o variaciones ambientales impredecibles).',
          keyPoints: [
            'Error absoluto (Ea): diferencia entre valor medido (Xm) y el valor exacto o promedio (Xv): Ea = |Xm - Xv|.',
            'Error relativo (Er): cociente del error absoluto entre el valor verdadero: Er = Ea / Xv.',
            'Error porcentual (Ep): porcentaje del error relativo: Ep = Er × 100%.'
          ],
          formulas: [
            {
              name: 'Error Porcentual',
              formula: 'Ep = (|Xm - Xv| / Xv) × 100%',
              explanation: 'Indica la precisión porcentual de la medición.'
            }
          ],
          practicalApplication: 'Tolerancia en topografía y control de calidad en asentamientos de estructuras y resistencia de cilindros de concreto.',
          practiceExercises: [
            {
              prompt: 'Al medir una viga de 6.00 m reales se obtiene 5.94 m. Calcular el error absoluto y porcentual.',
              hint: 'Ea = |5.94 - 6.00| = 0.06 m',
              solution: 'Ea = 0.06 m. Ep = (0.06 / 6.00) × 100% = 1.0% de error.'
            }
          ]
        }
      ]
    },
    {
      id: 'fis-mod-2',
      title: 'Módulo 2: Álgebra Vectorial y Estática de la Partícula',
      parcialNumber: 2,
      competence: 'Aplica propiedades algebraicas de vectores y condiciones de equilibrio estático en soluciones para partículas y cuerpos rígidos.',
      topics: [
        {
          id: 'fis-top-3',
          title: 'Álgebra Vectorial y Métodos Gráficos y Analíticos',
          rap: 'RAP 1 y 2: Desarrolla operaciones con sistemas de vectores gráfica y analíticamente.',
          summary: 'Una magnitud vectorial posee magnitud, dirección y sentido (fuerza, velocidad, aceleración). Las magnitudes escalares sólo tienen magnitud y unidad (masa, tiempo, temperatura).',
          keyPoints: [
            'Método del paralelogramo y del polígono para suma gráfica.',
            'Método analítico por componentes rectangulares: Fx = F·cos(θ), Fy = F·sen(θ).',
            'Fuerza Resultante: R = √[(ΣFx)² + (ΣFy)²] ,  θ = arctan(ΣFy / ΣFx).',
            'La fuerza equilibrante tiene la misma magnitud y dirección que la resultante, pero sentido opuesto (180° de diferencia).'
          ],
          formulas: [
            {
              name: 'Componentes rectangulares de un vector',
              formula: 'Fx = F · cos(θ) ,  Fy = F · sen(θ)',
              explanation: 'Proyecciones del vector sobre los ejes cartesianos X e Y.'
            }
          ],
          practicalApplication: 'Cálculo de tensiones en cables de grúas, armaduras de techumbres metálicas y tirantes de contravientos.',
          practiceExercises: [
            {
              prompt: 'Un cable ejerce una fuerza de 100 N a 150° de la horizontal. Determinar sus componentes Fx y Fy.',
              hint: 'cos(150°) = -0.866; sen(150°) = 0.500',
              solution: 'Fx = 100 · cos(150°) = -86.6 N (a la izquierda); Fy = 100 · sen(150°) = +50.0 N (hacia arriba).'
            }
          ]
        },
        {
          id: 'fis-top-4',
          title: 'Estática: Equilibrio de la Partícula y del Cuerpo Rígido',
          rap: 'RAP 1: Aplica las condiciones de equilibrio en problemas de partículas y cuerpos rígidos.',
          summary: 'Un cuerpo está en equilibrio de traslación si la suma vectorial de fuerzas es cero (1ª condición: ΣFx = 0, ΣFy = 0). Está en equilibrio de rotación si la suma de momentos respecto a cualquier punto es cero (2ª condición: ΣM = 0).',
          keyPoints: [
            'Momento de una fuerza o torque: M = F · d (fuerza por brazo de palanca perpendicular). Convención: antihorario positivo (+), horario negativo (-).',
            'Teorema de Varignon: el momento de la resultante es igual a la suma algebraica de los momentos de las fuerzas componentes.',
            'Diagrama de Cuerpo Libre (DCL): representación gráfica aislada de todas las fuerzas externas que actúan sobre el cuerpo.'
          ],
          formulas: [
            {
              name: 'Condiciones de Equilibrio',
              formula: 'ΣFx = 0 ,  ΣFy = 0 ,  ΣM = 0',
              explanation: 'Condiciones necesarias y suficientes para el equilibrio estático total.'
            }
          ],
          practicalApplication: 'Cálculo de reacciones en apoyos de vigas simplemente apoyadas con cargas puntuales y distribuidas en casas habitación.',
          practiceExercises: [
            {
              prompt: 'Una viga uniforme de 6 m y peso 2200 N está apoyada en los extremos A y B. Una carga de 3000 N se ubica a 2 m de A. Determinar la reacción en B.',
              hint: 'Tomar momentos en A: ΣM_A = 0 => (2200 N)(3 m) + (3000 N)(2 m) - R_B(6 m) = 0',
              solution: '6600 + 6000 = 6 R_B => 12600 = 6 R_B => R_B = 2100 N. Por ΣFy = 0: R_A = 2200 + 3000 - 2100 = 3100 N.'
            }
          ]
        }
      ]
    },
    {
      id: 'fis-mod-3',
      title: 'Módulo 3: Centroides y Cinemática',
      parcialNumber: 3,
      competence: 'Calcula centroides de figuras compuestas y resuelve problemas de cinemática lineal y curvilínea.',
      topics: [
        {
          id: 'fis-top-5',
          title: 'Centro de Masa, Centro de Gravedad y Centroides',
          rap: 'RAP 2: Determina el centro de masa, gravedad y centroide de cuerpos y figuras compuestas.',
          summary: 'El centroide es el centro geométrico de una figura bidimensional. Para figuras compuestas (rectángulos, triángulos, semicírculos), las coordenadas del centroide se obtienen mediante el promedio ponderado de las áreas individuales.',
          keyPoints: [
            'Rectángulo de base b y altura h: A = b·h; x̄ = b/2, ȳ = h/2.',
            'Triángulo rectángulo: A = b·h/2; centroide ubicado a 1/3 de la base y altura medida desde el ángulo recto.',
            'Semicírculo de radio r: A = π·r²/2; ȳ = 4r / (3π) desde la base plana.'
          ],
          formulas: [
            {
              name: 'Coordenadas del centroide compuesto',
              formula: 'X̄ = (Σ Aᵢ · x̄ᵢ) / (Σ Aᵢ) ,  Ȳ = (Σ Aᵢ · ȳᵢ) / (Σ Aᵢ)',
              explanation: 'Suma de productos de áreas por distancias centroidales individuales dividida entre el área total.'
            }
          ],
          practicalApplication: 'Cálculo del eje neutro y centro de gravedad en secciones de vigas T, I y zapatas excéntricas en cimentación.',
          practiceExercises: [
            {
              prompt: 'Una viga T está formada por un ala superior de 20x4 cm y un alma de 4x16 cm. Hallar la altura Ȳ del centroide desde la base.',
              hint: 'A1 (alma) = 64 cm², y1 = 8 cm. A2 (ala) = 80 cm², y2 = 16 + 2 = 18 cm.',
              solution: 'ΣA = 144 cm². Σ(A·y) = (64)(8) + (80)(18) = 512 + 1440 = 1952 cm³. Ȳ = 1952 / 144 ≈ 13.56 cm desde la base.'
            }
          ]
        },
        {
          id: 'fis-top-6',
          title: 'Cinemática: MRU, MRUA, Caída Libre y Tiro Parabólico',
          rap: 'RAP 1 y 2: Resuelve problemas de movimiento rectilíneo y curvilíneo.',
          summary: 'Estudio del movimiento sin considerar las causas que lo originan. En MRU la velocidad es constante (a = 0). En MRUA la aceleración es constante (a = const). Caída libre y tiro vertical son casos particulares de MRUA con aceleración de la gravedad g = 9.81 m/s² (o 32 ft/s²).',
          keyPoints: [
            'Fórmulas MRUA: v_f = v_0 + a·t ; d = v_0·t + (1/2)a·t² ; v_f² = v_0² + 2a·d.',
            'Caída libre (v_0 = 0): h = (1/2)g·t² ; v_f = g·t = √(2gh).',
            'Tiro parabólico: compuesto por MRU horizontal (vx = v0·cos θ = const) y MRUA vertical (vy = v0·sen θ - g·t).',
            'Altura máxima: H_max = (v0·sen θ)² / (2g); Tiempo de vuelo: T_v = 2·v0·sen θ / g; Alcance horizontal: R = (v0²·sen 2θ) / g.'
          ],
          formulas: [
            {
              name: 'Ecuaciones de Cinemática MRUA',
              formula: 'd = v₀·t + ½·a·t²  ;  v_f² = v₀² + 2·a·d',
              explanation: 'Modelos matemáticos para aceleración lineal constante.'
            }
          ],
          practicalApplication: 'Cálculo de tiempos de vaciado de tolvas, trayectoria de bombas de concreto y caída de escombros por rampas.',
          practiceExercises: [
            {
              prompt: 'Se deja caer una herramienta desde una azotea a 45 m de altura. ¿Cuánto tiempo tarda en llegar al suelo y con qué velocidad impacta? (g = 9.8 m/s²)',
              hint: 't = √(2h / g); v = g·t',
              solution: 't = √(90 / 9.8) = √9.18 ≈ 3.03 s. v = 9.8 × 3.03 ≈ 29.7 m/s (≈ 107 km/h).'
            }
          ]
        }
      ]
    }
  ],

  'obra-negra': [
    {
      id: 'on-mod-1',
      title: 'Módulo 1: Preliminares, Trazo, Nivelación y Excavaciones',
      parcialNumber: 1,
      competence: 'Fundamenta y aplica las actividades administrativas y preliminares que componen el inicio de obra y estructura de casa habitación.',
      topics: [
        {
          id: 'on-top-1',
          title: 'Actividades Previas y Proyecto Ejecutivo',
          rap: 'RAP 1: Identifica actividades administrativas y preliminares.',
          summary: 'Antes del inicio de cualquier obra civil se requiere: 1) Contacto con el cliente y programa de necesidades; 2) Estudio socioeconómico y familiar; 3) Datos del predio (resistencia del terreno, colindancias, servicios de agua/luz/drenaje); 4) Anteproyecto y aprobación de contrato; 5) Proyecto Ejecutivo definitivo.',
          keyPoints: [
            'El Proyecto Ejecutivo comprende: Planos topográficos, arquitectónicos (plantas, cortes transversales y longitudinales, fachadas), estructurales (cimentación, losas, trabes, columnas, castillos), instalaciones (hidráulica, sanitaria, eléctrica, gas y especiales), memorias de cálculo, memoria descriptiva y catálogo de conceptos.',
            'Zonificación de obra provisional: bodega de materiales secos (cemento, cal), área de almacén de varilla y madera, caseta de vigilancia, sanitarios provisionales y fosa de lavado.'
          ],
          practicalApplication: 'Elaboración del expediente técnico para tramitar permisos y licencias ante la alcaldía/municipio y el IMSS.',
          practiceExercises: [
            {
              prompt: '¿Por qué el cemento debe almacenarse en tarimas elevadas a mínimo 15 cm del suelo en la bodega provisional?',
              hint: 'La humedad del suelo produce hidratación prematura (fraguado parcial en bulto).',
              solution: 'Para aislar los sacos de la humedad del suelo y evitar que el cemento se apelmace o endurezca antes de su uso.'
            }
          ]
        },
        {
          id: 'on-top-2',
          title: 'Tapiales, Limpieza, Trazo y Nivelación con Método 3-4-5',
          rap: 'RAP 2: Organiza y ejecuta procedimientos de trazo y nivelación.',
          summary: 'El tapial es la barda provisional obligatoria para proteger a transeúntes y delimitar el predio. La limpieza consiste en deshierbe, desenraice y despalme (retiro de capa vegetal de 15 a 20 cm). El trazo traslada los ejes de los planos al terreno mediante estacas, caballetes de madera e hilos reventones.',
          keyPoints: [
            'Método 3-4-5: aplicación del Teorema de Pitágoras (3² + 4² = 5²) para garantizar escuadras perfectas de 90° en las esquinas de los ejes.',
            'Nivelación: se realiza con manguera de nivel transparente llena de agua sin burbujas, tomando como banco de nivel fijo (BN = ±0.00 m) la banqueta pública o un mojon fijo.',
            'Excavación y ademe: zanjas para cimientos. Si la profundidad excede 1.5 m o el suelo es inestable (arenoso/limoso), se colocan ademes de madera para evitar derrumbes.'
          ],
          formulas: [
            {
              name: 'Escuadra 3-4-5 (Pitágoras)',
              formula: 'Cateto_A (3m)² + Cateto_B (4m)² = Hipotenusa (5m)²',
              explanation: 'Asegura que el ángulo entre dos ejes perpendiculares mida exactamente 90° 00\'.'
            }
          ],
          practicalApplication: 'Trazo de cimientos de colindancia y ejes centrales para evitar que la construcción invada el predio vecino o quede descuadrada.',
          practiceExercises: [
            {
              prompt: 'Si un eje mide 6 m y otro perpendicular mide 8 m, ¿cuánto debe medir la diagonal para que formen escuadra perfecta?',
              hint: 'Escala 2x del triángulo 3-4-5: (3×2)² + (4×2)² = (5×2)²',
              solution: 'Diagonal = √(6² + 8²) = √(36 + 64) = √100 = 10.00 metros exactos.'
            }
          ]
        }
      ]
    },
    {
      id: 'on-mod-2',
      title: 'Módulo 2: Cimentaciones, Muros, Trabes y Columnas',
      parcialNumber: 2,
      competence: 'Representa gráficamente e integra los sistemas constructivos de cimentación, muros y elementos estructurales verticales y horizontales.',
      topics: [
        {
          id: 'on-top-3',
          title: 'Cimentaciones Superficiales y Profundas',
          rap: 'RAP 1: Integra los diferentes sistemas de cimentación según el tipo de suelo.',
          summary: 'La cimentación es el conjunto de elementos estructurales cuya misión es transmitir las cargas vivas y muertas de la edificación al suelo firme, distribuyéndolas para no sobrepasar la capacidad de carga admisible.',
          keyPoints: [
            'Cimentación superficial (< 5 m): zapatas aisladas (bajo columnas), zapatas corridas de concreto armado (bajo muros de carga), zapatas de mampostería de piedra braza, y losa de cimentación (suelos blandos con baja capacidad de carga).',
            'Cimentación profunda (> 5 m): pilotes de fricción o de punta, pilas coladas en sitio y cajones de cimentación.',
            'Plantilla de concreto pobre (f\'c = 100 kg/cm² de 5 a 8 cm de espesor): sirve de cama limpia y nivelada para apoyar el acero de refuerzo sin que se contamine con la tierra.'
          ],
          practicalApplication: 'En la CDMX, en zona I (lomas) se usa mampostería o zapatas aisladas; en zona III (lago) se requiere losa de cimentación o pilotes.',
          practiceExercises: [
            {
              prompt: '¿Cuál es la función del recubrimiento de 2.5 a 5 cm de concreto en el armado de una zapata?',
              hint: 'Protección contra la corrosión generada por sales y humedad del terreno.',
              solution: 'Garantizar la protección del acero de refuerzo frente a la humedad del suelo y la corrosión, asegurando la adherencia mecánica adecuada.'
            }
          ]
        },
        {
          id: 'on-top-4',
          title: 'Muros de Carga, Divisorios y Tipos de Aparejos',
          rap: 'RAP 2: Dibuja y especifica los diferentes sistemas de muros y sus aparejos.',
          summary: 'Los muros se clasifican por su función en: Muros de Carga (soportan peso vertical y sismo, sujetos a compresión), Muros Divisorios (separan espacios, aislamientos acústicos y térmicos) y Muros de Contención (soportan empujes horizontales de tierra o agua).',
          keyPoints: [
            'Materiales comunes: Tabique rojo recocido (7x14x28 cm), block de concreto hueco (10/12/15/20 x 20 x 40 cm), tablaroca (paneles de yeso con postes galvanizados calibre 25), durock (cemento para exteriores y zonas húmedas).',
            'Aparejo al Hilo: tabiques en sentido longitudinal (espesor de muro ≈ 14 cm). Más común en muros de carga residenciales.',
            'Aparejo al Tizón: tabiques en sentido transversal (espesor ≈ 28 cm). Mayor inercia y resistencia.',
            'Aparejo Capuchino: tabiques apoyados sobre su canto más angosto (espesor ≈ 7 cm). Solo como muro divisorio.',
            'Confinamiento sísmico: dalas de desplante, dalas de coronación y castillos (K) a no más de 3 a 4 metros de separación o en quiebres y esquinas.'
          ],
          practicalApplication: 'Colocación de plomos y reventones para conservar verticalidad y grosor uniforme de juntas de mortero (1.0 a 1.5 cm).'
        }
      ]
    },
    {
      id: 'on-mod-3',
      title: 'Módulo 3: Sistemas de Losas, Dosificación y Maquetas de Proceso',
      parcialNumber: 3,
      competence: 'Construye modelos físicos y memorias de dosificación de concreto y armado de sistemas de cubiertas y entrepisos.',
      topics: [
        {
          id: 'on-top-5',
          title: 'Tipos de Losas (Maciza, Vigueta y Bovedilla, Reticular, Losacero)',
          rap: 'RAP 1 y 2: Dibuja y elabora modelos físicos de sistemas de losas y cubiertas.',
          summary: 'Las losas son elementos estructurales bidimensionales horizontales con peralte reducido respecto a su ancho y largo. Reciben cargas normales a su plano (cargas vivas de ocupación y muertas de acabados).',
          keyPoints: [
            'Losa maciza de concreto armado: espesor de 8 a 12 cm, armada con varillas en ambos sentidos formando parrilla con bastones y columpios para momentos negativos.',
            'Losa de vigueta y bovedilla: prefabricada, ligera, ahorra cimbra de contacto, con capa de compresión de 4 a 5 cm de concreto y malla electrosoldada.',
            'Losa reticular o encasetonada: nervaduras cruzadas con casetones huecos (de poliestireno o fibra de vidrio), ideal para grandes claros sin columnas intermedias.',
            'Tridilosa (creada por Heberto Castillo): estructura tridimensional de barras tubulares de acero y losas de concreto superior e inferior.',
            'Cimbrado y descimbrado: apuntalamiento con puntales y madrinas. El descimbrado de trabes y losas se realiza a los 15-28 días (o al alcanzar el 75-80% de f\'c).'
          ],
          practicalApplication: 'Selección del sistema de entrepiso y azotea más económico y ligero para una casa habitación de dos niveles.',
          practiceExercises: [
            {
              prompt: '¿Por qué se moja la cimbra de madera antes de vaciar el concreto de una losa?',
              hint: 'La madera seca absorbe agua de la mezcla fresca.',
              solution: 'Para evitar que la madera absorba el agua de mezclado del concreto (lo que provocaría agrietamientos por contracción plástica y reduciría la resistencia final f\'c).'
            }
          ]
        },
        {
          id: 'on-top-6',
          title: 'Dosificación del Concreto y Mortero para 1 m³',
          rap: 'RAP 2: Elabora dosificaciones de mortero y concreto según resistencia requerida.',
          summary: 'El concreto es una roca artificial formada por cemento Portland, agua, agregados pétreos finos (arena) y gruesos (grava), y en su caso aditivos (acelerantes, retardantes, fluidificantes o hidrófugos).',
          keyPoints: [
            'Concreto f\'c = 150 kg/cm² (firmes y banquetas): 1 saco cemento (50 kg) : 5.5 botes arena : 7.5 botes grava : 2 botes agua (bote alcoholero de 19 L).',
            'Concreto f\'c = 200 kg/cm² (losas y muros): 1 saco cemento : 4 botes arena : 6 botes grava : 1.5 botes agua.',
            'Concreto f\'c = 250 kg/cm² (columnas, trabes y zapatas): 1 saco cemento : 3 botes arena : 4.5 botes grava : 1.25 botes agua.',
            'Prueba del Cono de Abrams (revenimiento): mide la consistencia y trabajabilidad del concreto fresco (normalmente 8 a 12 cm para losas convencionales).'
          ],
          practicalApplication: 'Control de mezclado en obra para garantizar que la resistencia a los 28 días cumpla las especificaciones de seguridad estructural del RCDF.'
        }
      ]
    }
  ],

  'normas-tramitaciones': [
    {
      id: 'nt-mod-1',
      title: 'Módulo 1: Generalidades del Reglamento de Construcciones (Títulos 1 al 4)',
      parcialNumber: 1,
      competence: 'Verifica el cumplimiento de las normas técnicas y del Reglamento de Construcciones para el DF en un proyecto arquitectónico de casa habitación.',
      topics: [
        {
          id: 'nt-top-1',
          title: 'Conceptos Fundamentales del RCDF y Vía Pública',
          rap: 'RAP 1: Explica los artículos del Reglamento de Construcción que debe cumplir una casa habitación.',
          summary: 'El Reglamento de Construcciones del Distrito Federal regula el uso del suelo, edificación, licencias, directores responsables de obra y seguridad estructural.',
          keyPoints: [
            'Definiciones: Vía Pública (todo espacio común de dominio público destinado al libre tránsito), Predio (terreno delimitado), Edificación (construcción sobre un predio).',
            'Alineamiento: traza sobre el terreno que delimita el predio respectivo con la vía pública fijada por la administración.',
            'Número Oficial: número asignado por la alcaldía a cada predio con frente a la vía pública; debe ser visible y legible a mínimo 20 metros de distancia.',
            'Vigencia de la Constancia de Alineamiento y Número Oficial: 2 años.',
            'Uso de vía pública: las licencias para ocupación con tapiales o maniobras son temporales y no otorgan ningún derecho real o posesorio.'
          ],
          practicalApplication: 'Trámite previo indispensable antes de solicitar cualquier licencia o manifestación de construcción.'
        },
        {
          id: 'nt-top-2',
          title: 'Directores Responsables de Obra (D.R.O.) y Corresponsables',
          rap: 'RAP 1: Identifica las figuras de D.R.O. y los tres tipos de corresponsables.',
          summary: 'El D.R.O. es la persona física profesional (arquitecto o ingeniero civil con cédula y registro ante la Comisión de Admisión) que asume la responsabilidad técnica de la observancia del reglamento en el diseño y ejecución de la obra.',
          keyPoints: [
            'Requisitos para D.R.O.: Título y cédula profesional, mínimo 5 años de experiencia acreditada en construcción, membresía en colegio profesional y acreditar examen de la Comisión de Admisión.',
            'Los 3 Corresponsables que colaboran con el D.R.O.: 1) Corresponsable en Seguridad Estructural (C/SE); 2) Corresponsable en Diseño Urbano y Arquitectónico (C/DUyA); 3) Corresponsable en Instalaciones (C/I).',
            'Resello y refrendo del registro: cada 3 años los D.R.O. y corresponsables deben refrendar su registro.',
            'Bitácora de Obra: instrumento técnico legal obligatorio donde únicamente firman el D.R.O., los Corresponsables, el constructor y el supervisor.'
          ],
          practicalApplication: 'Supervisión en campo y firma de responsivas de seguridad y habitabilidad de la obra.'
        }
      ]
    },
    {
      id: 'nt-mod-2',
      title: 'Módulo 2: Manifestaciones de Construcción y Trámites Gubernamentales',
      parcialNumber: 2,
      competence: 'Tramita licencias y permisos de construcción de casa habitación de acuerdo a la legislación vigente.',
      topics: [
        {
          id: 'nt-top-3',
          title: 'Tipos de Manifestación de Construcción (A, B y C) y Licencias Especiales',
          rap: 'RAP 1: Analiza los formatos y requisitos de las manifestaciones de construcción.',
          summary: 'En la CDMX las obras se registran mediante la Manifestación de Construcción. Según su superficie, nivel de riesgo y características, se dividen en Tipo A, B o C.',
          keyPoints: [
            'Manifestación Tipo A: Construcción de una sola vivienda unifamiliar de hasta 200 m² de construcción habitable, en predios con frente mínimo y servicios completos, o bardas perimetrales de hasta 2.50 m, o ampliaciones menores a 50 m².',
            'Manifestación Tipo B: Usos no habitacionales de hasta 5,000 m² o habitacionales de más de 200 m² hasta 10,000 m².',
            'Manifestación Tipo C: Usos de más de 10,000 m², o que requieran dictamen de impacto urbano o ambiental.',
            'Licencia de Construcción Especial: para demoliciones, excavaciones de más de 1 m no vinculadas a una manifestación, tapiales en vía pública, instalaciones subterráneas y antenas.'
          ],
          practicalApplication: 'Identificación de la vía legal expedita para edificar una vivienda de dos niveles sin incurrir en suspensiones o clausuras.'
        },
        {
          id: 'nt-top-4',
          title: 'Dimensiones Mínimas Reglamentarias según N.T.C. Arquitectónicas',
          rap: 'RAP 2: Aplica las medidas reglamentarias mínimas en espacios habitacionales.',
          summary: 'Las Normas Técnicas Complementarias de Proyecto Arquitectónico estipulan áreas, alturas mínimas libres, iluminación y ventilación natural para cada local de una casa habitación.',
          keyPoints: [
            'Recámara principal: área mínima 7.30 m² con lado menor de 2.70 m; altura libre mínima de 2.30 m.',
            'Recámaras adicionales: área mínima 6.00 m² con lado menor de 2.40 m.',
            'Estancia - Comedor: área mínima 13.50 m² con lado menor de 3.00 m.',
            'Cocina: área mínima 3.00 m² con lado menor de 1.50 m.',
            'Baño completo: área mínima 1.50 m² con lado menor de 0.90 m; medio baño 0.90 m².',
            'Ventilación e iluminación: las ventanas deben tener un área mínima de 1/5 del área del piso para iluminación y 1/3 de esa ventana abierta para ventilación (mínimo 5% del área total del local).'
          ],
          practicalApplication: 'Revisión y diseño conforme a norma de los planos arquitectónicos de la casa habitación tipo de 250 m² de Sol Mariana.'
        }
      ]
    },
    {
      id: 'nt-mod-3',
      title: 'Módulo 3: Normas de Seguridad en Obra y Cierre de Trámites',
      parcialNumber: 3,
      competence: 'Aplica las medidas de seguridad laboral, protección ambiental y gestiona el aviso de terminación de obra.',
      topics: [
        {
          id: 'nt-top-5',
          title: 'Seguridad en Obra, Explosivos y Protección Civil',
          rap: 'RAP 2: Aplica normas de seguridad e higiene y preservación del entorno en obra.',
          summary: 'Toda obra debe cumplir medidas de prevención de accidentes conforme al RCDF y la NOM-031-STPS de construcción.',
          keyPoints: [
            'Equipo de protección personal (EPP): casco dieléctrico, botas con casquillo de acero, chaleco reflejante, gafas de seguridad y arnés en alturas mayores a 1.80 m.',
            'Instalación de grúas torre: no deben invadir predios colindantes sin autorización y deben contar con anclaje certificado y seguro de responsabilidad civil.',
            'Permiso para explosivos en excavación: única y exclusivamente otorgado por la Secretaría de la Defensa Nacional (SEDENA).',
            'Protección de vestigios: si se encuentran restos arqueológicos o históricos, la obra se suspende de inmediato y se notifica al INAH o INBAL.'
          ],
          practicalApplication: 'Plan de seguridad e higiene en obra y protocolos de respuesta ante emergencias.'
        },
        {
          id: 'nt-top-6',
          title: 'Aviso de Terminación de Obra y Autorización de Uso y Ocupación',
          rap: 'RAP 2: Gestiona el cierre administrativo y legal de la edificación concluida.',
          summary: 'Una vez terminada la edificación, el propietario y el D.R.O. tienen la obligación legal de manifestar la conclusión de la obra ante la alcaldía correspondiente.',
          keyPoints: [
            'Aviso de Terminación de Obra: documento firmado por el D.R.O. y propietario acreditando que la obra se ejecutó estrictamente conforme a planos autorizados.',
            'Autorización de Uso y Ocupación: inspección final del municipio/alcaldía que autoriza habitar o poner en operación el inmueble.',
            'Importancia: sin esta autorización no se pueden contratar servicios definitivos de agua potable, electricidad ni protocolizar la venta o crédito hipotecario (INFONAVIT/FOVISSSTE).'
          ],
          practicalApplication: 'Cierre del expediente técnico y entrega de la vivienda regularizada al cliente final.'
        }
      ]
    }
  ],

  'materiales-sustentables': [
    {
      id: 'sus-mod-1',
      title: 'Módulo 1: Arquitectura Bioclimática y Ciclo de Vida de Materiales',
      parcialNumber: 1,
      competence: 'Analiza el impacto ambiental de los procesos de construcción e implementa principios bioclimáticos pasivos en el diseño de edificaciones.',
      topics: [
        {
          id: 'sus-top-1',
          title: 'Fundamentos de la Edificación Sustentable y Huella de Carbono',
          rap: 'RAP 1: Evalúa el ciclo de vida y la energía embebida de los materiales de construcción tradicionales frente a los sustentables.',
          summary: 'La industria de la construcción genera cerca del 40% de las emisiones globales de CO2 y consume el 36% de la energía mundial. La construcción sustentable busca satisfacer las necesidades de habitabilidad minimizando el impacto ambiental a través del Análisis de Ciclo de Vida (ACV: extracción, fabricación, transporte, uso y demolición).',
          keyPoints: [
            'Energía embebida: la energía total requerida para producir un material (el aluminio y el acero tienen alta energía embebida; el adobe, la madera y el bambú tienen muy baja o incluso secuestro de carbono).',
            'Las 3 R en la construcción: Reducir (diseño eficiente de secciones), Reutilizar (maderas de cimbra, demoliciones) y Reciclar (agregados reciclados de concreto RCD).',
            'Confort higrotérmico: condiciones óptimas de temperatura (20°C a 24°C) y humedad relativa (40% a 60%) en el interior sin recurrir a climatización mecánica excesiva.'
          ],
          practicalApplication: 'Selección de materiales de baja huella de carbono para vivienda social de dos niveles.'
        },
        {
          id: 'sus-top-2',
          title: 'Estrategias Bioclimáticas Pasivas (Asoleamiento, Ventilación e Inercia)',
          rap: 'RAP 2: Diseña soluciones de diseño pasivo adaptadas a la zona bioclimática del Valle de México.',
          summary: 'La arquitectura bioclimática aprovecha las condiciones climáticas del sitio (sol, viento, lluvia, vegetación) para mantener el confort térmico interior sin consumo de energía eléctrica.',
          keyPoints: [
            'Orientación óptima en el hemisferio norte (México): ventanas principales orientadas al Sur para captar sol en invierno, con aleros o parteluces calculados para bloquear el sol vertical en verano.',
            'Ventilación cruzada natural: aberturas en fachadas opuestas con diferencia de presiones y efecto chimenea para extraer aire caliente.',
            'Inercia térmica: capacidad de muros gruesos (como adobe o concreto masivo) de almacenar calor durante el día y liberarlo gradualmente al interior durante la noche fría.'
          ],
          formulas: [
            {
              name: 'Dimensionamiento de Alero de Sombra',
              formula: 'Profundidad_Alero = Altura_Ventana / tan(Ángulo_Solar_Verano)',
              explanation: 'Permite el paso de sol invernal bajo e impide la radiación solar directa en el mediodía de verano.'
            }
          ],
          practicalApplication: 'Orientación de las recámaras y estancias de la casa habitación para reducir el uso de calefactores y aire acondicionado.'
        }
      ]
    },
    {
      id: 'sus-mod-2',
      title: 'Módulo 2: Materiales Ecológicos, Concretos Verdes y Tecnologías Tradicionales Mejoradas',
      parcialNumber: 2,
      competence: 'Selecciona y dosifica materiales reciclados, biodegradables y de bajo impacto para componentes estructurales y de acabados.',
      topics: [
        {
          id: 'sus-top-3',
          title: 'Concretos Sustentables y Agregados Reciclados (RCD)',
          rap: 'RAP 1: Aplica normas de concretos con puzolanas naturales y agregados reciclados.',
          summary: 'El cemento Portland tradicional emite 1 tonelada de CO2 por cada tonelada producida por la calcinación de la caliza. Los concretos sustentables sustituyen parte del clinker por cenizas volantes, escorias de alto horno o puzolanas naturales, e incorporan hasta 30-50% de agregados triturados provenientes de demolición.',
          keyPoints: [
            'Cemento CPP (Portland Puzolánico) y CPC con hasta 35% de material puzolánico: menor calor de hidratación y mayor resistencia a sulfatos.',
            'Concreto permeable o poroso: permite el paso del agua de lluvia hacia el manto freático en estacionamientos y banquetas, evitando inundaciones urbanas.',
            'Concreto autorreparable (bioconcreto): incorpora bacterias bacillus que al entrar en contacto con el agua segregan carbonato de calcio que sella microfisuras.'
          ],
          practicalApplication: 'Especificación de banquetas permeables y firmes de concreto reciclado en patios de servicio.'
        },
        {
          id: 'sus-top-4',
          title: 'Tierra Comprimida (BTC), Adobe Estabilizado y Bambú Guadua',
          rap: 'RAP 2: Propone materiales locales de bajo impacto ambiental con alto desempeño térmico.',
          summary: 'Los materiales tradicionales renovables han sido modernizados mediante ingeniería contemporánea. El Bloque de Tierra Comprimida (BTC) se elabora con prensas hidráulicas y una estabilización con 5-8% de cal o cemento, ofreciendo gran resistencia y excelente aislamiento.',
          keyPoints: [
            'Bambú Guadua angustifolia: llamado "acero vegetal" por su altísima resistencia a la tracción paralela a las fibras (hasta 100-150 MPa) y rápido crecimiento (alcanza madurez estructural en 4-5 años).',
            'Aislamientos térmicos naturales: lana de borrego, celulosa reciclada insuflada, fibras de cáñamo y paneles de corcho natural en lugar de poliestireno expandido no biodegradable.',
            'Pinturas ecológicas y libres de COVs (Compuestos Orgánicos Volátiles): base cal viva apagada y silicatos minerales, que no emiten toxinas y permiten la respiración del muro.'
          ],
          practicalApplication: 'Diseño de pérgolas de bambú tratado y muros divisorios interiores de bloque de tierra comprimida.'
        }
      ]
    },
    {
      id: 'sus-mod-3',
      title: 'Módulo 3: Ecotécnias de Agua, Energía y Certificación Ambiental',
      parcialNumber: 3,
      competence: 'Diseña sistemas de captación pluvial, energía solar y verifica el cumplimiento de la norma NMX-AA-164-SCFI de edificación sustentable.',
      topics: [
        {
          id: 'sus-top-5',
          title: 'Ecotécnias de Agua: Captación Pluvial, Biofiltros y Biodigestores',
          rap: 'RAP 1: Modela sistemas hidrosanitarios ecológicos para vivienda unifamiliar.',
          summary: 'La escasez hídrica en la CDMX hace imprescindible el diseño de viviendas autosuficientes en agua. El Sistema de Captación de Agua de Lluvia (SCAPT) recolecta agua en azoteas limpias, separa las primeras aguas sucias y almacena en cisternas para uso doméstico.',
          keyPoints: [
            'Separador de primeras lluvias (Tláloc): descarta los primeros 1 a 2 mm de lluvia que lavan el polvo de la techumbre.',
            'Tratamiento de aguas grises (regaderas, lavabos): humedales artificiales y biofiltros de grava, arena y plantas acuáticas (papiro, carrizo) para reúso en sanitarios y riego.',
            'Biodigestor anaeróbico autolimpiable: sustituye la fosa séptica convencional, tratando aguas negras mediante digestión bacteriana y produciendo biofertilizante.'
          ],
          formulas: [
            {
              name: 'Volumen Captable de Agua de Lluvia',
              formula: 'V = Área_Techo (m²) × Precipitación_Anual (mm) × Coeficiente_Escurrimiento (0.85-0.90)',
              explanation: 'Determina los litros anuales cosechables en azotea para dimensionar la cisterna pluvial.'
            }
          ],
          practicalApplication: 'Instalación de tinaco pluvial y línea doble de alimentación hidráulica en la vivienda de dos niveles.'
        },
        {
          id: 'sus-top-6',
          title: 'Energía Solar y Certificaciones (NMX-AA-164, LEED, EDGE)',
          rap: 'RAP 2: Aplica normatividad ambiental mexicana y sistemas solares térmicos y fotovoltaicos.',
          summary: 'Aprovechamiento de la radiación solar para calentar agua sanitaria y generar electricidad, integrando la normatividad ambiental de edificación.',
          keyPoints: [
            'Calentador solar de tubos de vacío termosifónico: ahorra del 70% al 85% del gas doméstico en vivienda residencial.',
            'Sistemas fotovoltaicos interconectados a CFE: paneles solares de silicio monocristalino con medidor bidireccional.',
            'Techos y muros verdes: reducen el efecto de isla de calor urbana, protegen la impermeabilización de la radiación UV y mejoran el aislamiento acústico.',
            'Norma NMX-AA-164-SCFI-2013: norma mexicana voluntaria que califica criterios de suelo, energía, agua, materiales, residuos, calidad ambiental interior y responsabilidad social.',
            'Certificaciones internacionales: LEED (Liderazgo en Energía y Diseño Ambiental) y EDGE (enfocada en ahorro mínimo de 20% en agua, energía y materiales).'
          ],
          practicalApplication: 'Integración del plano de ecotécnias dentro del proyecto ejecutivo de casa habitación para Sol Mariana.'
        }
      ]
    }
  ],

  'planimetria-aplicada': [
    {
      id: 'pla-mod-1',
      title: 'Módulo 1: Generalidades de la Topografía e Instrumentos de Medición',
      parcialNumber: 1,
      competence: 'Sustenta los elementos de la topografía, sus instrumentos y accesorios en situaciones académicas y sociales.',
      topics: [
        {
          id: 'pla-top-1',
          title: 'Conceptos Básicos: Topografía, Planimetría y Altimetría',
          rap: 'RAP 1: Describe los instrumentos y accesorios topográficos clasificándolos por características de uso.',
          summary: 'La topografía es la ciencia y arte de medir distancias, ángulos y elevaciones para representar una porción de la superficie terrestre en un plano a escala. Se divide en Planimetría (proyección horizontal de linderos y detalles) y Altimetría (diferencias de nivel y curvas de nivel).',
          keyPoints: [
            'Instrumentos principales: Estación Total (medición electrónica de ángulos y distancias con rayo láser y prisma), Tránsito o Teodolito (medición de ángulos horizontales y verticales), Nivel de gota o automático (altimetría).',
            'Accesorios indispensables: Balizas (varillas bicolores rojo/blanco para visuales), trípode de patas extensibles, plomada de bronce con hilo reventón, cinta métrica metálica o de fibra de vidrio (longímetro de 20 o 30 m), fichas de alambrón (juego de 11 fichas), marro y estacas de madera.',
            'Distanciómetro láser: precisión milimétrica por tiempo de vuelo de pulso de luz.'
          ],
          practicalApplication: 'Reconocimiento y montaje del equipo topográfico en el patio de prácticas del CECyT 11.'
        }
      ]
    },
    {
      id: 'pla-mod-2',
      title: 'Módulo 2: Levantamientos con Cinta y Lados de Liga',
      parcialNumber: 2,
      competence: 'Comprueba el uso de métodos y procedimientos para levantamientos planimétricos con cinta.',
      topics: [
        {
          id: 'pla-top-2',
          title: 'Método de Lados de Liga y Triangulación con Cinta',
          rap: 'RAP 1 y 2: Aplica el método para levantamiento planimétrico de acuerdo a las características del terreno.',
          summary: 'Cuando no se cuenta con tránsito o estación total, se realizan levantamientos exclusivamente con cinta métrica. Los vértices del polígono se ligan mediante triángulos auxiliares formados por cuerdas o lados de liga medidos en cada esquina.',
          keyPoints: [
            'Lados de liga: se miden distancias conocidas d1 y d2 a lo largo de los dos lados que concurren a un vértice y se mide la cuerda c que une dichos puntos.',
            'Fórmula para calcular el ángulo del vértice: sen(A/2) = c / (2d) si los lados son iguales, o por Ley de Cosenos: cos(A) = (b² + c² - a²) / (2bc).',
            'Fórmula de Herón para áreas de triángulos: S = √[p(p - a)(p - b)(p - c)], donde p = (a + b + c) / 2 (semiperímetro).'
          ],
          formulas: [
            {
              name: 'Fórmula de Herón (Área de triángulos)',
              formula: 'S = √[ p · (p - a) · (p - b) · (p - c) ] ,  p = (a + b + c) / 2',
              explanation: 'Permite calcular la superficie de cualquier triángulo conociendo únicamente las longitudes de sus 3 lados.'
            }
          ],
          practicalApplication: 'Levantamiento expedito de predios urbanos irregulares para viviendas unifamiliares.'
        }
      ]
    },
    {
      id: 'pla-mod-3',
      title: 'Módulo 3: Levantamientos con Tránsito, Cinta y Poligonales Cerradas',
      parcialNumber: 3,
      competence: 'Calcula analíticamente los levantamientos planimétricos y compensa errores angulares y de coordenadas.',
      topics: [
        {
          id: 'pla-top-3',
          title: 'Libreta de Tránsito, Azimutes, Rumbos y Planilla de Cálculo',
          rap: 'RAP 1 y 2: Calcula analíticamente el error de cierre angular, rumbos, coordenadas y superficie del polígono.',
          summary: 'El levantamiento con tránsito y cinta es el método clásico más preciso. Los datos se asientan en la libreta de campo: columna izquierda (estación, punto visado, distancia, ángulo leído) y columna derecha (croquis, detalles de colindancias y notas).',
          keyPoints: [
            'Suma teórica de ángulos interiores de un polígono cerrado de n lados: Σθ_teórica = 180° × (n - 2).',
            'Error de cierre angular: Ec = Σθ_medida - Σθ_teórica. Si es menor a la tolerancia admisible (Ta = a·√n), se reparte equitativamente con signo contrario a cada ángulo.',
            'Azimut: ángulo medido desde el Norte en sentido horario de 0° a 360°.',
            'Rumbo: ángulo agudo medido desde el Norte o Sur hacia el Este u Oeste (0° a 90°, ej. N 30° 10\' E o S 45° 20\' W).',
            'Proyecciones y coordenadas: Proyección X = Distancia × sen(Rumbo); Proyección Y = Distancia × cos(Rumbo).'
          ],
          formulas: [
            {
              name: 'Suma de ángulos interiores',
              formula: 'Σθ = 180° × (n - 2)',
              explanation: 'Condición geométrica de cierre de cualquier polígono plano de n lados.'
            }
          ],
          practicalApplication: 'Cálculo de la planilla topográfica para el plano perimétrico del proyecto arquitectónico de Sol Mariana.'
        }
      ]
    }
  ]
};

// Merge basic guides and extra technical guides
export const ALL_GUIDES_DATA: { [subjectId: string]: StudyModule[] } = {
  ...GUIDES_DATA,
  ...EXTRA_GUIDES_DATA
};

import { Flashcard } from '../../types';

export const GEOMETRIA_FLASHCARDS: Flashcard[] = [
  // --- PARCIAL 1: SISTEMA CARTESIANO Y LÍNEA RECTA (17 TARJETAS) ---
  {
    id: 'fc-geo-01',
    subjectId: 'geometria-analitica',
    moduleIndex: 0,
    category: 'Sistemas Coordenados',
    front: '¿Cuál es la fórmula para calcular la distancia euclidiana entre dos puntos P₁(x₁, y₁) y P₂(x₂, y₂)?',
    back: 'd = √[(x₂ - x₁)² + (y₂ - y₁)²]\n\nSe obtiene aplicando el Teorema de Pitágoras sobre el triángulo rectángulo cuyos catetos son los incrementos Δx = (x₂ - x₁) y Δy = (y₂ - y₁).',
    tip: 'La distancia siempre es un valor real positivo o cero; nunca puede ser negativa.',
    formula: 'd = √[(Δx)² + (Δy)²]'
  },
  {
    id: 'fc-geo-02',
    subjectId: 'geometria-analitica',
    moduleIndex: 0,
    category: 'Sistemas Coordenados',
    front: '¿Cuáles son los signos de las coordenadas (x, y) en los 4 cuadrantes del plano cartesiano?',
    back: '• Cuadrante I: (+, +)\n• Cuadrante II: (-, +)\n• Cuadrante III: (-, -)\n• Cuadrante IV: (+, -)\n\nSe enumeran en sentido antihorario iniciando en el sector superior derecho.',
    tip: 'Los puntos sobre los ejes no pertenecen a ningún cuadrante (eje X: y=0; eje Y: x=0).'
  },
  {
    id: 'fc-geo-03',
    subjectId: 'geometria-analitica',
    moduleIndex: 0,
    category: 'División de Segmentos',
    front: '¿Cómo se calculan las coordenadas de un punto P(x, y) que divide a un segmento P₁P₂ en una razón r = P₁P / PP₂?',
    back: 'x = (x₁ + r·x₂) / (1 + r)\ny = (y₁ + r·y₂) / (1 + r)\n\nCondición matemática indispensable: r ≠ -1.',
    tip: 'Si r > 0, el punto de división es interno al segmento. Si r < 0, es un punto exterior.',
    formula: 'x = (x₁ + r·x₂)/(1 + r) ,  y = (y₁ + r·y₂)/(1 + r)'
  },
  {
    id: 'fc-geo-04',
    subjectId: 'geometria-analitica',
    moduleIndex: 0,
    category: 'División de Segmentos',
    front: '¿Cuáles son las fórmulas para calcular las coordenadas del punto medio Pm de un segmento?',
    back: 'x_m = (x₁ + x₂) / 2\ny_m = (y₁ + y₂) / 2\n\nCorresponde al caso particular de división de un segmento donde la razón r = 1.',
    tip: 'Es el promedio aritmético de las abscisas y de las ordenadas de los extremos.',
    formula: 'Pm = ((x₁ + x₂)/2, (y₁ + y₂)/2)'
  },
  {
    id: 'fc-geo-05',
    subjectId: 'geometria-analitica',
    moduleIndex: 0,
    category: 'Geometría del Triángulo',
    front: '¿Cómo se determinan las coordenadas del Baricentro o Centroide G de un triángulo con vértices A(x₁,y₁), B(x₂,y₂), C(x₃,y₃)?',
    back: 'x_G = (x₁ + x₂ + x₃) / 3\ny_G = (y₁ + y₂ + y₃) / 3\n\nEl baricentro es el punto de intersección de las tres medianas y representa el centro de gravedad geométrico.',
    tip: 'El baricentro divide a cada mediana en una razón de 2:1 desde el vértice hasta el lado opuesto.',
    formula: 'G = ((x₁ + x₂ + x₃)/3 , (y₁ + y₂ + y₃)/3)'
  },
  {
    id: 'fc-geo-06',
    subjectId: 'geometria-analitica',
    moduleIndex: 0,
    category: 'Línea Recta',
    front: '¿Qué es la pendiente m de una recta y cuál es su fórmula a partir de dos puntos?',
    back: 'm = (y₂ - y₁) / (x₂ - x₁)\n\nRepresenta la razón de cambio o inclinación de la recta (elevación vertical dividida por avance horizontal). También equivale a la tangente del ángulo de inclinación: m = tan(θ).',
    tip: 'Si la recta es vertical (x₁ = x₂), la pendiente no está definida (indeterminada, θ = 90°).',
    formula: 'm = Δy / Δx = tan(θ)'
  },
  {
    id: 'fc-geo-07',
    subjectId: 'geometria-analitica',
    moduleIndex: 0,
    category: 'Línea Recta',
    front: '¿Qué tipo de inclinación indica el signo de la pendiente m?',
    back: '• m > 0 (positiva): la recta asciende de izquierda a derecha (0° < θ < 90°).\n• m < 0 (negativa): la recta desciende de izquierda a derecha (90° < θ < 180°).\n• m = 0: recta horizontal (paralela al eje X, θ = 0°).\n• m indeterminada: recta vertical (perpendicular al eje X, θ = 90°).',
    tip: 'Para rampas peatonales y vehiculares en arquitectura, la pendiente se expresa en porcentaje: % = m × 100.'
  },
  {
    id: 'fc-geo-08',
    subjectId: 'geometria-analitica',
    moduleIndex: 0,
    category: 'Línea Recta',
    front: '¿Cuáles son las condiciones analíticas de paralelismo y perpendicularidad entre dos rectas?',
    back: '• Paralelismo: m₁ = m₂ (poseen exactamente el mismo ángulo de inclinación θ₁ = θ₂).\n• Perpendicularidad: m₁ · m₂ = -1  =>  m₂ = -1 / m₁ (las pendientes son recíprocas y de signo contrario).',
    tip: 'Ejemplo: Si una viga tiene pendiente m = 3/4, una columna perpendicular a ella tendrá m = -4/3.',
    formula: 'm₁ = m₂ (paralelas) | m₁ · m₂ = -1 (perpendiculares)'
  },
  {
    id: 'fc-geo-09',
    subjectId: 'geometria-analitica',
    moduleIndex: 0,
    category: 'Línea Recta',
    front: '¿Cuál es la fórmula para calcular el ángulo θ entre dos rectas dadas sus pendientes m₁ y m₂?',
    back: 'tan(θ) = (m₂ - m₁) / (1 + m₁ · m₂)\n\nDonde m₁ es la pendiente de la recta inicial y m₂ es la pendiente de la recta final, midiendo θ en sentido antihorario.',
    tip: 'Si el producto m₁ · m₂ = -1, el denominador es cero y el ángulo es de 90° (perpendiculares).',
    formula: 'tan(θ) = (m₂ - m₁) / (1 + m₁·m₂)'
  },
  {
    id: 'fc-geo-10',
    subjectId: 'geometria-analitica',
    moduleIndex: 0,
    category: 'Ecuaciones de la Recta',
    front: '¿Cuál es la forma Punto-Pendiente de la ecuación de una recta?',
    back: 'y - y₁ = m(x - x₁)\n\nSe utiliza cuando se conoce la pendiente m y las coordenadas de al menos un punto P₁(x₁, y₁) perteneciente a la recta.',
    tip: 'Es la forma más rápida y directa para iniciar la deducción de cualquier ecuación lineal.',
    formula: 'y - y₁ = m(x - x₁)'
  },
  {
    id: 'fc-geo-11',
    subjectId: 'geometria-analitica',
    moduleIndex: 0,
    category: 'Ecuaciones de la Recta',
    front: '¿Cuál es la forma Pendiente-Ordenada al origen (forma reducida)?',
    back: 'y = mx + b\n\nDonde m es la pendiente de la recta y b es la ordenada al origen, es decir, el punto donde la recta corta al eje Y en (0, b).',
    tip: 'Permite graficar inmediatamente ubicando b en el eje Y y aplicando el desplazamiento Δy/Δx.',
    formula: 'y = mx + b'
  },
  {
    id: 'fc-geo-12',
    subjectId: 'geometria-analitica',
    moduleIndex: 0,
    category: 'Ecuaciones de la Recta',
    front: '¿Cuál es la forma Simétrica o Canónica de la ecuación de la recta?',
    back: 'x/a + y/b = 1\n\nDonde a es la abscisa al origen (corta al eje X en (a, 0)) y b es la ordenada al origen (corta al eje Y en (0, b)).',
    tip: 'Muy útil para trazar rápidamente una recta en un plano con solo unir los puntos (a, 0) y (0, b).',
    formula: 'x/a + y/b = 1'
  },
  {
    id: 'fc-geo-13',
    subjectId: 'geometria-analitica',
    moduleIndex: 0,
    category: 'Ecuaciones de la Recta',
    front: '¿Cuál es la forma General de la ecuación de una recta y cómo se calculan su pendiente y cortes?',
    back: 'Ax + By + C = 0\n\n• Pendiente: m = -A / B\n• Ordenada al origen: b = -C / B\n• Abscisa al origen: a = -C / A',
    tip: 'Para que sea la forma general canónica, A debe ser un número entero positivo (A ≥ 0).',
    formula: 'Ax + By + C = 0  =>  m = -A/B'
  },
  {
    id: 'fc-geo-14',
    subjectId: 'geometria-analitica',
    moduleIndex: 0,
    category: 'Distancias y Rectas',
    front: '¿Cuál es la fórmula para calcular la distancia mínima de un punto P(x₀, y₀) a la recta Ax + By + C = 0?',
    back: 'd = |A·x₀ + B·y₀ + C| / √(A² + B²)\n\nEs la longitud del segmento perpendicular trazado desde el punto P hasta la recta.',
    tip: 'Las barras en el numerador indican valor absoluto, garantizando una distancia no negativa.',
    formula: 'd = |Ax₀ + By₀ + C| / √(A² + B²)'
  },
  {
    id: 'fc-geo-15',
    subjectId: 'geometria-analitica',
    moduleIndex: 0,
    category: 'Distancias y Rectas',
    front: '¿Cómo se calcula la distancia entre dos rectas paralelas L₁: Ax + By + C₁ = 0 y L₂: Ax + By + C₂ = 0?',
    back: 'd = |C₁ - C₂| / √(A² + B²)\n\nRequisito previo indispensable: ambas ecuaciones deben tener los mismos coeficientes A y B.',
    tip: 'Si una ecuación está multiplicada por un factor, primero debes simplificarla para igualar A y B.',
    formula: 'd = |C₁ - C₂| / √(A² + B²)'
  },
  {
    id: 'fc-geo-16',
    subjectId: 'geometria-analitica',
    moduleIndex: 0,
    category: 'Geometría del Triángulo',
    front: '¿Qué es el área de un polígono por determinantes o fórmula del agrimensor (Gauss)?',
    back: 'Área = ½ | (x₁y₂ + x₂y₃ + ... + xₙy₁) - (y₁x₂ + y₂x₃ + ... + yₙx₁) |\n\nSe ordenan los vértices en sentido antihorario y se repite el primer vértice al final de la columna.',
    tip: 'Si los vértices se toman en sentido horario el determinante da signo negativo; por eso se usa valor absoluto.',
    formula: 'Área = ½ |det(vértices)|'
  },
  {
    id: 'fc-geo-17',
    subjectId: 'geometria-analitica',
    moduleIndex: 0,
    category: 'Línea Recta',
    front: '¿Qué es la forma normal de la recta (ecuación de Hesse)?',
    back: 'x·cos(ω) + y·sen(ω) - p = 0\n\nDonde p es la distancia perpendicular desde el origen a la recta (p ≥ 0) y ω es el ángulo del vector normal con el eje X positivo.',
    tip: 'Para transformar Ax + By + C = 0 a la forma normal, se divide todo entre ±√(A² + B²), con signo opuesto a C.',
    formula: 'x·cos(ω) + y·sen(ω) - p = 0'
  },

  // --- PARCIAL 2: CIRCUNFERENCIA Y PARÁBOLA (17 TARJETAS) ---
  {
    id: 'fc-geo-18',
    subjectId: 'geometria-analitica',
    moduleIndex: 1,
    category: 'Circunferencia',
    front: '¿Cuál es la definición geométrica de la circunferencia?',
    back: 'Es el lugar geométrico de todos los puntos del plano que equidistan de un punto fijo interior llamado centro C(h, k); a dicha distancia constante se le llama radio r.',
    tip: 'No confundir círculo (la superficie interior sólida) con circunferencia (el perímetro o frontera lineal).'
  },
  {
    id: 'fc-geo-19',
    subjectId: 'geometria-analitica',
    moduleIndex: 1,
    category: 'Circunferencia',
    front: '¿Cuál es la ecuación ordinaria y canónica de la circunferencia?',
    back: '• Forma Ordinaria (centro fuera del origen): (x - h)² + (y - k)² = r²\n• Forma Canónica (centro en el origen C(0, 0)): x² + y² = r²',
    tip: 'Si un binomio tiene signo (+), por ejemplo (x + 3)², la coordenada del centro es negativa: h = -3.',
    formula: '(x - h)² + (y - k)² = r²'
  },
  {
    id: 'fc-geo-20',
    subjectId: 'geometria-analitica',
    moduleIndex: 1,
    category: 'Circunferencia',
    front: '¿Cuál es la forma general de la circunferencia y cómo se obtienen su centro C(h, k) y radio r?',
    back: 'x² + y² + Dx + Ey + F = 0\n\n• h = -D / 2\n• k = -E / 2\n• r = ½ √(D² + E² - 4F)',
    tip: 'Los coeficientes cuadráticos de x² e y² siempre deben ser iguales y tener el mismo signo (+1).',
    formula: 'C(-D/2, -E/2) ,  r = ½√(D² + E² - 4F)'
  },
  {
    id: 'fc-geo-21',
    subjectId: 'geometria-analitica',
    moduleIndex: 1,
    category: 'Circunferencia',
    front: '¿Qué condiciones determina el discriminante I = D² + E² - 4F sobre la circunferencia?',
    back: '• Si D² + E² - 4F > 0: Circunferencia real con radio r > 0.\n• Si D² + E² - 4F = 0: Circunferencia puntual (un solo punto en C(h, k)).\n• Si D² + E² - 4F < 0: Circunferencia imaginaria (no existe lugar geométrico en los números reales).',
    tip: 'Siempre evalúa este discriminante antes de comenzar a graficar la cónica.'
  },
  {
    id: 'fc-geo-22',
    subjectId: 'geometria-analitica',
    moduleIndex: 1,
    category: 'Circunferencia',
    front: '¿Cómo se determina la posición relativa de una recta respecto a una circunferencia?',
    back: 'Calculando la distancia d del centro C(h, k) a la recta:\n• d > r: Recta Exterior (no se tocan, 0 intersecciones).\n• d = r: Recta Tangente (se tocan en un solo punto).\n• d < r: Recta Secante (corta en dos puntos distintos a la circunferencia).',
    tip: 'La recta tangente es siempre perpendicular al radio trazado en el punto de contacto.'
  },
  {
    id: 'fc-geo-23',
    subjectId: 'geometria-analitica',
    moduleIndex: 1,
    category: 'Circunferencia',
    front: '¿Cómo se encuentra la ecuación de la circunferencia que pasa por tres puntos no colineales?',
    back: 'Se sustituyen las coordenadas de cada punto en la ecuación general x² + y² + Dx + Ey + F = 0 para formar un sistema de 3 ecuaciones lineales con 3 incógnitas (D, E, F) y resolver por determinantes o eliminación.',
    tip: 'Alternativa geométrica: hallar la intersección de las mediatrices de dos cuerdas formadas por los puntos (ese punto es el centro).'
  },
  {
    id: 'fc-geo-24',
    subjectId: 'geometria-analitica',
    moduleIndex: 1,
    category: 'Parábola',
    front: '¿Cuál es la definición geométrica de la parábola?',
    back: 'Es el lugar geométrico de todos los puntos del plano que equidistan de un punto fijo F llamado foco y de una recta fija D llamada directriz.',
    tip: 'Por definición, la excentricidad de toda parábola es exactamente igual a 1 (e = 1).'
  },
  {
    id: 'fc-geo-25',
    subjectId: 'geometria-analitica',
    moduleIndex: 1,
    category: 'Parábola',
    front: '¿Qué representa el parámetro p en una parábola y qué determina su signo?',
    back: 'p es la distancia dirigida desde el vértice hasta el foco (y también del vértice a la directriz en sentido opuesto).\n• En eje horizontal: p > 0 abre a la derecha; p < 0 abre a la izquierda.\n• En eje vertical: p > 0 abre hacia arriba; p < 0 abre hacia abajo.',
    tip: 'El vértice siempre se encuentra a la mitad del camino entre el foco y la directriz.'
  },
  {
    id: 'fc-geo-26',
    subjectId: 'geometria-analitica',
    moduleIndex: 1,
    category: 'Parábola',
    front: '¿Qué es el Lado Recto (LR) de una parábola y cuál es su longitud?',
    back: 'LR = |4p|\n\nEs la cuerda focal perpendicular al eje de simetría de la parábola. Mide el ancho de la parábola a la altura del foco.',
    tip: 'El foco divide al lado recto en dos segmentos iguales de longitud |2p| a cada lado del eje.',
    formula: 'LR = |4p|'
  },
  {
    id: 'fc-geo-27',
    subjectId: 'geometria-analitica',
    moduleIndex: 1,
    category: 'Parábola',
    front: '¿Cuáles son las ecuaciones canónicas de la parábola con vértice en el origen V(0, 0)?',
    back: '• Eje horizontal (eje focal = eje X): y² = 4px  (Foco en (p, 0), directriz x = -p).\n• Eje vertical (eje focal = eje Y): x² = 4py  (Foco en (0, p), directriz y = -p).',
    tip: 'La variable que NO está al cuadrado indica la dirección en que abre la parábola.',
    formula: 'y² = 4px  |  x² = 4py'
  },
  {
    id: 'fc-geo-28',
    subjectId: 'geometria-analitica',
    moduleIndex: 1,
    category: 'Parábola',
    front: '¿Cuáles son las ecuaciones ordinarias de la parábola con vértice fuera del origen V(h, k)?',
    back: '• Eje horizontal: (y - k)² = 4p(x - h)  [Foco: F(h+p, k), Directriz: x = h - p]\n• Eje vertical: (x - h)² = 4p(y - k)  [Foco: F(h, k+p), Directriz: y = k - p]',
    tip: 'El término lineal (que no tiene cuadrado) contiene el factor 4p.',
    formula: '(y - k)² = 4p(x - h)  |  (x - h)² = 4p(y - k)'
  },
  {
    id: 'fc-geo-29',
    subjectId: 'geometria-analitica',
    moduleIndex: 1,
    category: 'Parábola',
    front: '¿Cómo se reconoce la ecuación general de una parábola?',
    back: 'Contiene una sola variable cuadrática:\n• Cy² + Dx + Ey + F = 0 (eje focal horizontal, solo y²).\n• Ax² + Dx + Ey + F = 0 (eje focal vertical, solo x²).',
    tip: 'Si aparecen tanto x² como y², NO es parábola (sería circunferencia, elipse o hipérbola).'
  },
  {
    id: 'fc-geo-30',
    subjectId: 'geometria-analitica',
    moduleIndex: 1,
    category: 'Parábola',
    front: '¿Cómo se pasa de la ecuación general de una parábola a su forma ordinaria?',
    back: '1. Se agrupan los términos de la variable cuadrática en el miembro izquierdo.\n2. Se pasan los términos lineales e independientes al miembro derecho.\n3. Se completa el Trinomio Cuadrado Perfecto (TCP) sumando (coeficiente/2)² en ambos lados.\n4. Se factoriza como binomio al cuadrado e iguala a 4p.',
    tip: 'Recuerda sumar la misma cantidad en ambos miembros para conservar la igualdad.'
  },
  {
    id: 'fc-geo-31',
    subjectId: 'geometria-analitica',
    moduleIndex: 1,
    category: 'Parábola',
    front: '¿Qué propiedad óptica o acústica fundamental posee la parábola?',
    back: 'Todo rayo luminoso u onda sonora que viaja paralelo al eje de simetría e incide sobre la superficie cóncava de la parábola se refleja convergiendo exactamente en el foco.',
    tip: 'Se aplica en antenas satelitales, reflectores solares y faros de automóviles (la fuente luminosa en el foco genera haz paralelo).'
  },
  {
    id: 'fc-geo-32',
    subjectId: 'geometria-analitica',
    moduleIndex: 1,
    category: 'Parábola',
    front: '¿Cómo se calcula la altura máxima y el vértice de una trayectoria parabólica de tiro en ingeniería?',
    back: 'Dada la parábola y = ax² + bx + c:\n• Abscisa del vértice: x_v = -b / (2a)\n• Altura máxima: y_v = c - b² / (4a)',
    tip: 'En el vértice la pendiente de la recta tangente a la trayectoria es exactamente cero.',
    formula: 'x_v = -b / (2a)'
  },
  {
    id: 'fc-geo-33',
    subjectId: 'geometria-analitica',
    moduleIndex: 1,
    category: 'Cónicas',
    front: '¿Qué es la excentricidad e y qué valor toma para cada cónica?',
    back: 'Es la razón entre la distancia de un punto al foco y su distancia a la directriz (e = c / a):\n• Circunferencia: e = 0\n• Elipse: 0 < e < 1\n• Parábola: e = 1\n• Hipérbola: e > 1',
    tip: 'Mide el grado de achatamiento o apertura de la sección cónica.'
  },
  {
    id: 'fc-geo-34',
    subjectId: 'geometria-analitica',
    moduleIndex: 1,
    category: 'Cónicas',
    front: '¿Cómo clasifica el discriminante B² - 4AC de la ecuación general Ax² + Bxy + Cy² + Dx + Ey + F = 0 a una cónica?',
    back: '• B² - 4AC < 0: Tipo Elíptico (elipse o circunferencia si A=C y B=0).\n• B² - 4AC = 0: Tipo Parabólico (parábola).\n• B² - 4AC > 0: Tipo Hiperbólico (hipérbola).',
    tip: 'El término Bxy indica que los ejes de la cónica están rotados respecto a los ejes coordenados.'
  },

  // --- PARCIAL 3: ELIPSE, HIPÉRBOLA, POLARES Y PARAMÉTRICAS (16 TARJETAS) ---
  {
    id: 'fc-geo-35',
    subjectId: 'geometria-analitica',
    moduleIndex: 2,
    category: 'Elipse',
    front: '¿Cuál es la definición geométrica de la elipse?',
    back: 'Es el lugar geométrico de todos los puntos del plano tales que la suma de sus distancias a dos puntos fijos llamados focos F₁ y F₂ es una constante positiva igual a 2a (longitud del eje mayor): d(P, F₁) + d(P, F₂) = 2a.',
    tip: 'Siempre se cumple que la constante 2a es mayor que la distancia entre focos 2c.'
  },
  {
    id: 'fc-geo-36',
    subjectId: 'geometria-analitica',
    moduleIndex: 2,
    category: 'Elipse',
    front: '¿Cuál es la relación pitagórica fundamental entre los semiejes a, b y c de una elipse?',
    back: 'a² = b² + c²\n\n• a = semieje mayor (a > b y a > c)\n• b = semieje menor\n• c = semidistancia focal (distancia del centro al foco)',
    tip: '¡Regla clave!: en la elipse la hipotenusa del triángulo fundamental es "a".',
    formula: 'a² = b² + c²  (a > b)'
  },
  {
    id: 'fc-geo-37',
    subjectId: 'geometria-analitica',
    moduleIndex: 2,
    category: 'Elipse',
    front: '¿Cuáles son las ecuaciones canónicas de la elipse con centro en el origen C(0, 0)?',
    back: '• Horizontal (focos sobre eje X): x²/a² + y²/b² = 1\n• Vertical (focos sobre eje Y): x²/b² + y²/a² = 1\n\nEl denominador mayor siempre corresponde a a² e indica la orientación del eje mayor.',
    tip: 'Si el número mayor está debajo de x², la elipse es horizontal. Si está bajo y², es vertical.',
    formula: 'x²/a² + y²/b² = 1 (horizontal)'
  },
  {
    id: 'fc-geo-38',
    subjectId: 'geometria-analitica',
    moduleIndex: 2,
    category: 'Elipse',
    front: '¿Cómo se calculan el Lado Recto (LR) y la excentricidad e en la elipse?',
    back: '• Lado Recto: LR = 2b² / a  (ancho de la elipse en cada foco)\n• Excentricidad: e = c / a  (con 0 < e < 1)\n• Eje Mayor = 2a , Eje Menor = 2b , Distancia Focal = 2c',
    tip: 'Cuanto más cercano a 0 sea e, más circular es la elipse; cuanto más cercano a 1, más alargada.',
    formula: 'LR = 2b²/a  ,  e = c/a < 1'
  },
  {
    id: 'fc-geo-39',
    subjectId: 'geometria-analitica',
    moduleIndex: 2,
    category: 'Elipse',
    front: '¿Cuál es la ecuación ordinaria de la elipse con centro fuera del origen C(h, k)?',
    back: '• Horizontal: (x - h)² / a² + (y - k)² / b² = 1\n• Vertical: (x - h)² / b² + (y - k)² / a² = 1',
    tip: 'Los focos se sitúan en (h ± c, k) para la horizontal y en (h, k ± c) para la vertical.'
  },
  {
    id: 'fc-geo-40',
    subjectId: 'geometria-analitica',
    moduleIndex: 2,
    category: 'Elipse',
    front: '¿Cómo se reconoce la ecuación general de una elipse Ax² + Cy² + Dx + Ey + F = 0?',
    back: 'Los coeficientes cuadráticos A y C tienen el mismo signo pero magnitudes numéricas diferentes (A ≠ C, A·C > 0).',
    tip: 'Si A = C, sería una circunferencia, no una elipse.',
    formula: 'Ax² + Cy² + Dx + Ey + F = 0  (A ≠ C , A·C > 0)'
  },
  {
    id: 'fc-geo-41',
    subjectId: 'geometria-analitica',
    moduleIndex: 2,
    category: 'Hipérbola',
    front: '¿Cuál es la definición geométrica de la hipérbola?',
    back: 'Es el lugar geométrico de todos los puntos del plano tales que el valor absoluto de la diferencia de sus distancias a dos puntos fijos llamados focos es constante e igual a 2a: | d(P, F₁) - d(P, F₂) | = 2a.',
    tip: 'Posee dos ramas infinitas y simétricas separadas por sus asíntotas.'
  },
  {
    id: 'fc-geo-42',
    subjectId: 'geometria-analitica',
    moduleIndex: 2,
    category: 'Hipérbola',
    front: '¿Cuál es la relación pitagórica fundamental entre a, b y c en la hipérbola?',
    back: 'c² = a² + b²\n\n• c = semidistancia focal (en la hipérbola siempre c > a y c > b)\n• a = semieje real o transverso\n• b = semieje imaginario o conjugado',
    tip: 'A diferencia de la elipse, en la hipérbola "c" es el valor mayor y funge como hipotenusa.',
    formula: 'c² = a² + b²  (c > a)'
  },
  {
    id: 'fc-geo-43',
    subjectId: 'geometria-analitica',
    moduleIndex: 2,
    category: 'Hipérbola',
    front: '¿Cuáles son las ecuaciones canónicas de la hipérbola con centro en el origen?',
    back: '• Horizontal (eje transverso sobre X): x²/a² - y²/b² = 1\n• Vertical (eje transverso sobre Y): y²/a² - x²/b² = 1\n\nEl término con signo positivo (+) siempre indica cuál es el semieje real a² y la orientación de la hipérbola.',
    tip: 'A diferencia de la elipse, en la hipérbola a² no necesita ser mayor que b²; solo es el término positivo.',
    formula: 'x²/a² - y²/b² = 1 (horizontal)'
  },
  {
    id: 'fc-geo-44',
    subjectId: 'geometria-analitica',
    moduleIndex: 2,
    category: 'Hipérbola',
    front: '¿Cuáles son las ecuaciones de las asíntotas de la hipérbola canónica?',
    back: '• Para hipérbola horizontal (x²/a² - y²/b² = 1): y = ± (b/a) x\n• Para hipérbola vertical (y²/a² - x²/b² = 1): y = ± (a/b) x\n\nSon rectas a las que las ramas de la hipérbola se aproximan indefinidamente sin llegar a tocarlas.',
    tip: 'Se obtienen igualando a cero el miembro derecho de la ecuación canónica factorizada.',
    formula: 'y = ±(b/a)x  o  y = ±(a/b)x'
  },
  {
    id: 'fc-geo-45',
    subjectId: 'geometria-analitica',
    moduleIndex: 2,
    category: 'Hipérbola',
    front: '¿Qué es una hipérbola equilátera o rectangular?',
    back: 'Es aquella donde los semiejes son de igual longitud: a = b.\nSu ecuación canónica es x² - y² = a² y sus asíntotas son perpendiculares entre sí (forman 90°: y = ±x).',
    tip: 'Su excentricidad es constante: e = c/a = √(2a²)/a = √2 ≈ 1.414.'
  },
  {
    id: 'fc-geo-46',
    subjectId: 'geometria-analitica',
    moduleIndex: 2,
    category: 'Coordenadas Polares',
    front: '¿Cómo se define un punto P(r, θ) en el sistema de coordenadas polares?',
    back: '• Polo: punto fijo de referencia equivalente al origen de coordenadas.\n• Eje polar: semirrecta horizontal dirigida a la derecha desde el polo.\n• r: radio vector (distancia orientada desde el polo al punto P).\n• θ: ángulo polar o vectorial, medido en sentido antihorario desde el eje polar.',
    tip: 'Un mismo punto geométrico en polares tiene infinitas representaciones: (r, θ + 2kπ) o (-r, θ + (2k+1)π).'
  },
  {
    id: 'fc-geo-47',
    subjectId: 'geometria-analitica',
    moduleIndex: 2,
    category: 'Coordenadas Polares',
    front: '¿Cuáles son las ecuaciones de transformación de coordenadas polares (r, θ) a rectangulares (x, y)?',
    back: 'x = r · cos(θ)\ny = r · sen(θ)',
    tip: 'Se obtienen directamente de las razones trigonométricas en el triángulo rectángulo con hipotenusa r.',
    formula: 'x = r·cos(θ)  ,  y = r·sen(θ)'
  },
  {
    id: 'fc-geo-48',
    subjectId: 'geometria-analitica',
    moduleIndex: 2,
    category: 'Coordenadas Polares',
    front: '¿Cuáles son las ecuaciones de transformación de rectangulares (x, y) a polares (r, θ)?',
    back: 'r = √(x² + y²)\nθ = arctan(y / x)\n\nPara el ángulo θ se debe considerar el cuadrante del punto (sumar 180° en cuadrantes II y III, o 360° en IV).',
    tip: 'r² = x² + y² representa directamente la ecuación cartesiana de una circunferencia de radio r.',
    formula: 'r = √(x² + y²) ,  θ = arctan(y/x)'
  },
  {
    id: 'fc-geo-49',
    subjectId: 'geometria-analitica',
    moduleIndex: 2,
    category: 'Ecuaciones Paramétricas',
    front: '¿Qué son las ecuaciones paramétricas de una curva en el plano?',
    back: 'Son aquellas donde las coordenadas x e y se expresan de manera independiente en función de una tercera variable común llamada parámetro (comúnmente t o θ):\nx = f(t) , y = g(t).',
    tip: 'En física, el parámetro t suele ser el tiempo, modelando la posición instantánea de un proyectil o cuerpo.'
  },
  {
    id: 'fc-geo-50',
    subjectId: 'geometria-analitica',
    moduleIndex: 2,
    category: 'Ecuaciones Paramétricas',
    front: '¿Cómo se eliminan los parámetros en ecuaciones trigonométricas paramétricas?',
    back: 'Despejando las funciones trigonométricas y aplicando identidades pitagóricas fundamentales:\n• Para x = a·cos(t), y = b·sen(t): (x/a)² + (y/b)² = cos²(t) + sen²(t) = 1 (Elipse).\n• Para x = a·sec(t), y = b·tan(t): (x/a)² - (y/b)² = sec²(t) - tan²(t) = 1 (Hipérbola).',
    tip: 'Permite encontrar la ecuación cartesiana rectangular f(x, y) = 0 eliminando la variable t.',
    formula: 'cos²(t) + sen²(t) = 1  =>  (x/a)² + (y/b)² = 1'
  }
];

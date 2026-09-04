import { Flashcard } from '../../types';

export const FISICA_FLASHCARDS: Flashcard[] = [
  // --- PARCIAL 1: UNIDADES, MEDICIÓN, ERRORES Y VECTORES (17 TARJETAS) ---
  {
    id: 'fc-fis-01',
    subjectId: 'fisica-1',
    moduleIndex: 0,
    category: 'Sistemas de Unidades',
    front: '¿Cuáles son las 7 magnitudes fundamentales del Sistema Internacional (SI) y sus unidades?',
    back: '1. Longitud: metro [m]\n2. Masa: kilogramo [kg]\n3. Tiempo: segundo [s]\n4. Corriente eléctrica: ampere [A]\n5. Temperatura termodinámica: kelvin [K]\n6. Cantidad de sustancia: mol [mol]\n7. Intensidad luminosa: candela [cd]',
    tip: 'Las magnitudes derivadas (como fuerza N, presión Pa, velocidad m/s) resultan de combinar algebraicamente estas 7 fundamentales.'
  },
  {
    id: 'fc-fis-02',
    subjectId: 'fisica-1',
    moduleIndex: 0,
    category: 'Sistemas de Unidades',
    front: '¿Cuáles son las equivalencias básicas del Sistema Inglés al Sistema Internacional usadas en obra?',
    back: '• 1 pulgada (in) = 2.54 cm = 0.0254 m\n• 1 pie (ft) = 12 pulg = 30.48 cm = 0.3048 m\n• 1 yarda (yd) = 3 ft = 91.44 cm\n• 1 libra masa (lb) ≈ 0.4536 kg (453.6 g)\n• 1 galón estadounidense ≈ 3.785 litros',
    tip: 'Las varillas corrugadas de acero en México se designan en octavos de pulgada (#3 = 3/8", #4 = 1/2", etc.).'
  },
  {
    id: 'fc-fis-03',
    subjectId: 'fisica-1',
    moduleIndex: 0,
    category: 'Análisis Dimensional',
    front: '¿Qué es el Principio de Homogeneidad Dimensional en física?',
    back: 'Establece que en toda ecuación física válida, los términos a ambos lados de la igualdad y separados por signos de suma o resta deben tener exactamente las mismas dimensiones fundamentales [L, M, T].',
    tip: 'No puedes sumar metros con segundos ni kilogramos con newtons; todos los términos de un polinomio físico deben compartir idéntica dimensión.'
  },
  {
    id: 'fc-fis-04',
    subjectId: 'fisica-1',
    moduleIndex: 0,
    category: 'Teoría de Errores',
    front: '¿Cuál es la diferencia entre exactitud y precisión en una medición?',
    back: '• Exactitud: grado de cercanía del valor medido respecto al valor real o verdadero aceptado.\n• Precisión: grado de repetibilidad o concordancia entre mediciones sucesivas realizadas bajo las mismas condiciones (dispersión baja).',
    tip: 'Un instrumento puede ser muy preciso (siempre da el mismo número) pero inexacto si está descalibrado.'
  },
  {
    id: 'fc-fis-05',
    subjectId: 'fisica-1',
    moduleIndex: 0,
    category: 'Teoría de Errores',
    front: '¿Cómo se calculan el Error Absoluto (Ea), Error Relativo (Er) y Error Porcentual (E%)?',
    back: '• Error Absoluto: Ea = | Valor_medido - Valor_verdadero |\n• Error Relativo: Er = Ea / Valor_verdadero\n• Error Porcentual: E% = Er × 100%',
    tip: 'El error porcentual no tiene unidades (adimensional) y permite comparar la calidad de mediciones de distintas magnitudes.',
    formula: 'Ea = |X - Xv|  ,  E% = (Ea / Xv) × 100%'
  },
  {
    id: 'fc-fis-06',
    subjectId: 'fisica-1',
    moduleIndex: 0,
    category: 'Cifras Significativas',
    front: '¿Cuáles son las reglas básicas de las cifras significativas?',
    back: '1. Todos los dígitos distintos de cero son significativos.\n2. Los ceros entre dígitos distintos de cero son significativos (ej. 2005 tiene 4).\n3. Los ceros a la izquierda del primer dígito distinto de cero NO son significativos (ej. 0.0035 tiene 2).\n4. Los ceros a la derecha del punto decimal son significativos (ej. 4.300 tiene 4).',
    tip: 'En multiplicación y división, el resultado se redondea a la cantidad menor de cifras significativas de los factores.'
  },
  {
    id: 'fc-fis-07',
    subjectId: 'fisica-1',
    moduleIndex: 0,
    category: 'Álgebra Vectorial',
    front: '¿Cuál es la diferencia fundamental entre una magnitud escalar y una magnitud vectorial?',
    back: '• Magnitud Escalar: queda completamente definida con solo su valor numérico (módulo) y su unidad (ej. masa 5 kg, tiempo 12 s, temperatura 20 °C, volumen 3 m³).\n• Magnitud Vectorial: requiere necesariamente de magnitud, unidad, dirección (ángulo o línea de acción) y sentido (hacia dónde apunta la flecha) (ej. fuerza, velocidad, aceleración, desplazamiento).',
    tip: 'Una fuerza de 100 N no está definida hasta que se especifica hacia dónde empuja y con qué ángulo.'
  },
  {
    id: 'fc-fis-08',
    subjectId: 'fisica-1',
    moduleIndex: 0,
    category: 'Álgebra Vectorial',
    front: '¿Cómo se obtienen las componentes rectangulares (Fx, Fy) de un vector F con magnitud |F| y ángulo θ respecto al eje horizontal?',
    back: 'Fx = |F| · cos(θ)\nFy = |F| · sen(θ)',
    tip: 'Cuidado con el ángulo de referencia: si el ángulo se da respecto al eje vertical Y, las funciones trigonométricas se intercambian.',
    formula: 'Fx = F·cos(θ)  ,  Fy = F·sen(θ)'
  },
  {
    id: 'fc-fis-09',
    subjectId: 'fisica-1',
    moduleIndex: 0,
    category: 'Álgebra Vectorial',
    front: '¿Cómo se calculan la magnitud resultante |R| y el ángulo director θ a partir de componentes rectangulares Rx y Ry?',
    back: '|R| = √[(Rx)² + (Ry)²]\nθ = arctan(Ry / Rx)\n\nSe debe verificar el cuadrante según los signos de Rx y Ry para dar el ángulo en posición estándar (0° a 360°).',
    tip: 'Si Rx es negativo, suma 180° al ángulo de la calculadora.',
    formula: '|R| = √(Rx² + Ry²)  ,  θ = arctan(Ry / Rx)'
  },
  {
    id: 'fc-fis-10',
    subjectId: 'fisica-1',
    moduleIndex: 0,
    category: 'Álgebra Vectorial',
    front: '¿En qué consiste el método del polígono para la suma gráfica de vectores?',
    back: 'Se dibuja a escala el primer vector; en su punta (extremo) se coloca el origen del segundo vector; en la punta del segundo se coloca el origen del tercero, y así sucesivamente. El vector resultante R es el vector que va desde el origen del primer vector hasta la punta del último.',
    tip: 'Si el polígono de vectores se cierra sobre sí mismo (la punta del último coincide con el origen del primero), la resultante es nula (R = 0).'
  },
  {
    id: 'fc-fis-11',
    subjectId: 'fisica-1',
    moduleIndex: 0,
    category: 'Álgebra Vectorial',
    front: '¿Qué es el producto escalar o producto punto entre dos vectores A y B?',
    back: 'A · B = |A| · |B| · cos(φ) = AxBx + AyBy + AzBz\n\nEl resultado es una cantidad ESCALAR. Si dos vectores no nulos son perpendiculares entre sí (φ = 90°), su producto punto es idénticamente CERO.',
    tip: 'Se utiliza para calcular el Trabajo mecánico W = F · d.',
    formula: 'A · B = |A||B|cos(φ)'
  },
  {
    id: 'fc-fis-12',
    subjectId: 'fisica-1',
    moduleIndex: 0,
    category: 'Álgebra Vectorial',
    front: '¿Qué es el producto vectorial o producto cruz entre dos vectores A y B?',
    back: 'C = A × B\n• Magnitud: |C| = |A| · |B| · sen(φ) (equivale al área del paralelogramo formado por ambos vectores).\n• Dirección: perpendicular al plano formado por A y B, según la Regla de la Mano Derecha.\n• Si son paralelos (φ = 0° o 180°), A × B = 0.',
    tip: 'El producto cruz NO es conmutativo: A × B = -(B × A).',
    formula: '|A × B| = |A||B|sen(φ)'
  },
  {
    id: 'fc-fis-13',
    subjectId: 'fisica-1',
    moduleIndex: 0,
    category: 'Álgebra Vectorial',
    front: '¿Qué es un vector unitario y cómo se normaliza cualquier vector?',
    back: 'Es un vector cuya magnitud o módulo es exactamente igual a 1. Se obtiene dividiendo el vector original entre su propia magnitud:\nu = A / |A|\nEn coordenadas cartesianas se denotan por los versores î, ĵ, k̂.',
    tip: 'Su única función física y matemática es señalar una dirección en el espacio.',
    formula: 'û = A / |A|  (|û| = 1)'
  },
  {
    id: 'fc-fis-14',
    subjectId: 'fisica-1',
    moduleIndex: 0,
    category: 'Vectores y Fuerzas',
    front: '¿Qué es una fuerza colineal y qué es una fuerza concurrente?',
    back: '• Colineales: fuerzas cuyas líneas de acción coinciden sobre una misma recta.\n• Concurrentes: fuerzas cuyas líneas de acción se cruzan o intersectan en un mismo punto común del espacio.',
    tip: 'Las fuerzas concurrentes que actúan sobre una partícula puntual no producen giro ni momento.'
  },
  {
    id: 'fc-fis-15',
    subjectId: 'fisica-1',
    moduleIndex: 0,
    category: 'Vectores y Fuerzas',
    front: '¿Qué es la fuerza equilibrante de un sistema?',
    back: 'Es una fuerza de igual magnitud y misma dirección (misma línea de acción) que la fuerza resultante R, pero que apunta en sentido exactamente opuesto (desfasada 180°):\nE = -R.',
    tip: 'Al aplicar la fuerza equilibrante, el sistema de fuerzas queda en equilibrio estático (R + E = 0).'
  },
  {
    id: 'fc-fis-16',
    subjectId: 'fisica-1',
    moduleIndex: 0,
    category: 'Álgebra Vectorial',
    front: '¿Qué establece la Ley del Coseno para sumar dos vectores A y B que forman un ángulo interno β?',
    back: 'R² = A² + B² - 2AB · cos(β)\n\nDonde R es el lado opuesto al ángulo β en el triángulo vectorial formado cabeza con cola.',
    tip: 'Si el ángulo es 90°, cos(90°)=0 y se reduce al Teorema de Pitágoras: R = √(A² + B²).'
  },
  {
    id: 'fc-fis-17',
    subjectId: 'fisica-1',
    moduleIndex: 0,
    category: 'Álgebra Vectorial',
    front: '¿Qué establece la Ley de los Senos para resolver triángulos vectoriales?',
    back: 'A / sen(α) = B / sen(β) = C / sen(γ)\n\nCada magnitud vectorial es proporcional al seno del ángulo opuesto a su posición en el triángulo.',
    tip: 'Es muy útil para resolver tensiones de cables en estática cuando solo actúan 3 fuerzas (Teorema de Lami).'
  },

  // --- PARCIAL 2: ESTÁTICA Y CUERPOS RÍGIDOS (17 TARJETAS) ---
  {
    id: 'fc-fis-18',
    subjectId: 'fisica-1',
    moduleIndex: 1,
    category: 'Leyes de Newton',
    front: '¿Qué establece la Primera Ley de Newton (Principio de Inercia)?',
    back: 'Todo cuerpo permanece en su estado de reposo o de movimiento rectilíneo uniforme (MRU) a menos que actúe sobre él una fuerza neta externa no equilibrada (ΣF ≠ 0).',
    tip: 'La masa es la medida cuantitativa de la inercia de un cuerpo.'
  },
  {
    id: 'fc-fis-19',
    subjectId: 'fisica-1',
    moduleIndex: 1,
    category: 'Leyes de Newton',
    front: '¿Qué establece la Tercera Ley de Newton (Principio de Acción y Reacción)?',
    back: 'A toda fuerza de acción le corresponde siempre una fuerza de reacción de igual magnitud y misma dirección, pero en sentido contrario. Estas fuerzas actúan SIEMPRE sobre cuerpos diferentes, por lo que nunca se anulan entre sí de forma interna.',
    tip: 'Si un muro empuja al terreno con 50 kN, el terreno responde empujando al muro con 50 kN hacia arriba.'
  },
  {
    id: 'fc-fis-20',
    subjectId: 'fisica-1',
    moduleIndex: 1,
    category: 'Estática de la Partícula',
    front: '¿Cuál es la Primera Condición de Equilibrio (equilibrio traslacional)?',
    back: 'La suma vectorial de todas las fuerzas externas que actúan sobre una partícula o cuerpo debe ser igual a cero:\nΣFx = 0  y  ΣFy = 0  (y ΣFz = 0 en el espacio 3D).',
    tip: 'Garantiza que la aceleración lineal del centro de masa sea nula (a = 0).'
  },
  {
    id: 'fc-fis-21',
    subjectId: 'fisica-1',
    moduleIndex: 1,
    category: 'Estática',
    front: '¿Qué es un Diagrama de Cuerpo Libre (DCL)?',
    back: 'Es una representación gráfica aislada del cuerpo en estudio, donde se eliminan todos los apoyos y elementos circundantes y se sustituyen por las fuerzas y momentos que ejercen sobre el cuerpo (peso, tensiones de cables, reacciones de apoyos, fricción, etc.).',
    tip: 'Es el primer paso obligatorio e imprescindible para resolver cualquier problema de estática o resistencia de materiales.'
  },
  {
    id: 'fc-fis-22',
    subjectId: 'fisica-1',
    moduleIndex: 1,
    category: 'Estática',
    front: '¿Qué tipos de apoyos estructurales existen y cuántas reacciones genera cada uno en 2D?',
    back: '1. Apoyo simple o rodillo: 1 reacción perpendicular a la superficie de deslizamiento.\n2. Articulación fija o pasador: 2 reacciones (Rx horizontal y Ry vertical).\n3. Empotramiento perfecto: 3 reacciones (Rx, Ry y un Momento de empotramiento M).',
    tip: 'Una viga empotrada (como un voladizo o balcón) resiste giro además de fuerzas cortantes y axiales.'
  },
  {
    id: 'fc-fis-23',
    subjectId: 'fisica-1',
    moduleIndex: 1,
    category: 'Momento de una Fuerza',
    front: '¿Qué es el momento o torque (M) de una fuerza respecto a un punto y cuál es su fórmula?',
    back: 'M = F · d\n\nEs la capacidad que tiene una fuerza para hacer girar un cuerpo alrededor de un eje o punto de giro. Donde F es la magnitud de la fuerza y d es el brazo de palanca (distancia perpendicular desde el punto de giro a la línea de acción de la fuerza).',
    tip: 'Unidades en el SI: Newton-metro [N·m].'
  },
  {
    id: 'fc-fis-24',
    subjectId: 'fisica-1',
    moduleIndex: 1,
    category: 'Momento de una Fuerza',
    front: '¿Cuál es la convención estándar de signos para el momento o torque en estática?',
    back: '• Sentido Antihorario (giro contra las manecillas del reloj): Signo POSITIVO (+).\n• Sentido Horario (giro a favor de las manecillas del reloj): Signo NEGATIVO (-).',
    tip: 'Regla de la mano derecha: coloca los 4 dedos en el sentido de la fuerza alrededor del punto; el pulgar extendido apuntando hacia ti indica momento positivo.'
  },
  {
    id: 'fc-fis-25',
    subjectId: 'fisica-1',
    moduleIndex: 1,
    category: 'Estática del Cuerpo Rígido',
    front: '¿Cuál es la Segunda Condición de Equilibrio (equilibrio rotacional)?',
    back: 'La suma algebraica de todos los momentos de fuerza calculados respecto a cualquier punto arbitrario del cuerpo debe ser igual a cero:\nΣM = 0.',
    tip: 'Garantiza que el cuerpo no experimente aceleración angular (α = 0).'
  },
  {
    id: 'fc-fis-26',
    subjectId: 'fisica-1',
    moduleIndex: 1,
    category: 'Fricción o Rozamiento',
    front: '¿Qué diferencia hay entre la fuerza de fricción estática (fe) y la cinética (fc)?',
    back: '• Fricción Estática: fuerza que se opone al inicio del deslizamiento entre dos superficies en contacto en reposo. Su valor máximo es fe_max = μs · N.\n• Fricción Cinética: fuerza que se opone al movimiento una vez que el cuerpo ya está en deslizamiento: fc = μk · N.\nGeneralmente μs > μk.',
    tip: 'Cuesta más esfuerzo poner en movimiento un objeto pesado que mantenerlo desplazándose a velocidad constante.'
  },
  {
    id: 'fc-fis-27',
    subjectId: 'fisica-1',
    moduleIndex: 1,
    category: 'Fricción',
    front: '¿De qué factores depende el coeficiente de rozamiento μ?',
    back: 'Depende exclusivamente de la naturaleza y rugosidad de los materiales en contacto (ej. caucho-asfalto, madera-concreto, acero-teflón) y del estado de lubricación/humedad de las superficies.\nNO depende del área de contacto aparente.',
    tip: 'El coeficiente de fricción μ es un número puro adimensional.'
  },
  {
    id: 'fc-fis-28',
    subjectId: 'fisica-1',
    moduleIndex: 1,
    category: 'Fuerzas Paralelas y Cuplas',
    front: '¿Qué es un par de fuerzas o cupla y cuál es su momento resultante?',
    back: 'Es un sistema formado por dos fuerzas paralelas de igual magnitud, misma dirección, sentidos opuestos y separadas por una distancia perpendicular d.\nM = F · d\nSu resultante lineal es cero (ΣF = 0), pero produce un momento puro constante respecto a cualquier punto del plano.',
    tip: 'Ejemplo cotidiano: girar el volante de un vehículo o abrir una llave de paso con ambas manos.'
  },
  {
    id: 'fc-fis-29',
    subjectId: 'fisica-1',
    moduleIndex: 1,
    category: 'Centro de Gravedad',
    front: '¿Qué es el Centro de Gravedad (CG) de un cuerpo y cómo se relaciona con el Centroide?',
    back: '• Centro de Gravedad: punto geométrico de aplicación de la fuerza de gravedad resultante (peso total W) de todas las partículas del cuerpo.\n• Centroide: centro geométrico de una figura o área plana.\nEn un campo gravitatorio uniforme (como la superficie terrestre), el Centro de Gravedad coincide exactamente con el Centro de Masa y con el Centroide.',
    tip: 'Para vigas homogéneas rectangulares, el centroide se ubica exactamente en su centro geométrico (L/2, h/2).'
  },
  {
    id: 'fc-fis-30',
    subjectId: 'fisica-1',
    moduleIndex: 1,
    category: 'Teorema de Varignon',
    front: '¿Qué enuncia el Teorema de Varignon para sistemas de fuerzas concurrentes y coplanares?',
    back: 'El momento de la fuerza resultante de un sistema de fuerzas respecto a cualquier punto del plano es igual a la suma algebraica de los momentos de cada una de las fuerzas componentes respecto a ese mismo punto:\nM_R = Σ(M_Fi).',
    tip: 'Facilita enormemente el cálculo de momentos al descomponer una fuerza inclinada en sus componentes rectangulares Fx y Fy.'
  },
  {
    id: 'fc-fis-31',
    subjectId: 'fisica-1',
    moduleIndex: 1,
    category: 'Vigas y Cargas',
    front: '¿Cómo se modela y concentra una carga uniformemente distribuida (w en N/m o kg/m) sobre una viga de longitud L?',
    back: 'Se sustituye por una fuerza puntual equivalente concentrada:\n• Magnitud: W_eq = w · L (área del rectángulo de carga).\n• Punto de aplicación: en el centro de gravedad del rectángulo, a una distancia L/2 de cada extremo.',
    tip: 'Si la carga es triangular (de 0 a w), la fuerza equivalente es (w·L)/2 aplicada a 2/3 del vértice (o L/3 de la base).'
  },
  {
    id: 'fc-fis-32',
    subjectId: 'fisica-1',
    moduleIndex: 1,
    category: 'Estática',
    front: '¿Qué es una estructura isostática vs hiperestática?',
    back: '• Isostática: el número de incógnitas de reacción en los apoyos es exactamente igual al número de ecuaciones de equilibrio estático disponibles (en 2D son 3: ΣFx=0, ΣFy=0, ΣM=0). Se resuelve únicamente con estática básica.\n• Hiperestática: el número de reacciones en los apoyos es mayor al número de ecuaciones estáticas; requiere métodos de deformación y resistencia de materiales.',
    tip: 'Una viga simplemente apoyada con un rodillo y una articulación tiene 1 + 2 = 3 reacciones (isostática).'
  },
  {
    id: 'fc-fis-33',
    subjectId: 'fisica-1',
    moduleIndex: 1,
    category: 'Cables y Catenarias',
    front: '¿Cuál es la hipótesis fundamental para el análisis estático de cables y cuerdas ideales?',
    back: 'Un cable ideal es perfectamente flexible, inextensible y de peso despreciable en comparación con las cargas; solo es capaz de soportar esfuerzos axiales de TENSIÓN a lo largo de su eje longitudinal (nunca compresión ni flexión).',
    tip: 'En el DCL, las fuerzas de tensión en un cable siempre "tiran" o "jalan" saliendo del nodo o cuerpo.'
  },
  {
    id: 'fc-fis-34',
    subjectId: 'fisica-1',
    moduleIndex: 1,
    category: 'Plano Inclinado',
    front: '¿Cómo se descomponen las componentes del peso W = mg de un cuerpo apoyado sobre un plano inclinado con ángulo θ?',
    back: '• Componente perpendicular al plano: W_perpendicular = W · cos(θ)  (equilibra a la Fuerza Normal N).\n• Componente paralela al plano: W_paralela = W · sen(θ)  (fuerza impulsora que tiende a hacerlo resbalar hacia abajo).',
    tip: 'Para que permanezca en reposo sin deslizar por sí solo se debe cumplir: tan(θ) ≤ μs.'
  },

  // --- PARCIAL 3: CINEMÁTICA EN 1 Y 2 DIMENSIONES (16 TARJETAS) ---
  {
    id: 'fc-fis-35',
    subjectId: 'fisica-1',
    moduleIndex: 2,
    category: 'Conceptos Cinemáticos',
    front: '¿Cuál es la diferencia entre posición, desplazamiento y distancia recorrida?',
    back: '• Posición (x): coordenada del punto donde se encuentra el móvil respecto al origen en un instante t.\n• Desplazamiento (Δx = xf - xo): vector que une la posición inicial con la final (línea recta directa, puede ser negativo o cero).\n• Distancia recorrida (d): longitud escalar total medida sobre la trayectoria recorrida (siempre positiva).',
    tip: 'Si vas de tu casa a la escuela y regresas a tu casa, tu desplazamiento total es cero, pero tu distancia recorrida es el doble del camino.'
  },
  {
    id: 'fc-fis-36',
    subjectId: 'fisica-1',
    moduleIndex: 2,
    category: 'Conceptos Cinemáticos',
    front: '¿Cuál es la diferencia entre rapidez y velocidad?',
    back: '• Rapidez: magnitud escalar igual a la distancia recorrida dividida entre el tiempo empleado (v = d / t, siempre ≥ 0).\n• Velocidad (v): magnitud vectorial que expresa la tasa de cambio del vector de posición respecto al tiempo (v = Δx / Δt, incluye dirección y sentido).',
    tip: 'El velocímetro de un automóvil mide la rapidez instantánea, no la velocidad (porque no indica hacia qué punto cardinal viaja).'
  },
  {
    id: 'fc-fis-37',
    subjectId: 'fisica-1',
    moduleIndex: 2,
    category: 'MRU',
    front: '¿Cuáles son las características del Movimiento Rectilíneo Uniforme (MRU)?',
    back: '• Trayectoria en línea recta.\n• Velocidad constante en magnitud, dirección y sentido (v = cte).\n• Aceleración nula (a = 0).\n• El móvil recorre distancias iguales en intervalos de tiempo iguales.',
    formula: 'x = xo + v·t  (o d = v·t)'
  },
  {
    id: 'fc-fis-38',
    subjectId: 'fisica-1',
    moduleIndex: 2,
    category: 'Aceleración',
    front: '¿Qué es la aceleración media y cuáles son sus unidades en el SI?',
    back: 'a = (vf - vo) / (tf - to) = Δv / Δt\n\nEs la tasa con la que cambia el vector velocidad con respecto al tiempo. En el SI se mide en metros por segundo al cuadrado [m/s²].',
    tip: 'Existe aceleración siempre que cambie la rapidez O que cambie la dirección del movimiento (aunque la rapidez sea constante).'
  },
  {
    id: 'fc-fis-39',
    subjectId: 'fisica-1',
    moduleIndex: 2,
    category: 'MRUA',
    front: '¿Cuáles son las características del Movimiento Rectilíneo Uniformemente Acelerado (MRUA)?',
    back: '• Trayectoria rectilínea.\n• Aceleración constante diferente de cero (a = cte ≠ 0).\n• La velocidad varía de forma lineal respecto al tiempo.\n• La posición varía de forma cuadrática respecto al tiempo (parábola en gráfica x vs t).',
    tip: 'Si la aceleración tiene el mismo signo que la velocidad el móvil acelera; si tienen signos opuestos, frena o desacelera.'
  },
  {
    id: 'fc-fis-40',
    subjectId: 'fisica-1',
    moduleIndex: 2,
    category: 'MRUA',
    front: '¿Cuáles son las 4 ecuaciones horarias fundamentales del MRUA?',
    back: '1. vf = vo + a·t\n2. d = vo·t + ½ a·t²\n3. vf² = vo² + 2a·d\n4. d = [(vo + vf) / 2] · t',
    tip: 'Usa la ec. 3 cuando el tiempo "t" no sea un dato ni se pida calcularlo.'
  },
  {
    id: 'fc-fis-41',
    subjectId: 'fisica-1',
    moduleIndex: 2,
    category: 'Caída Libre',
    front: '¿Qué es la caída libre y cuál es el valor de la aceleración de la gravedad g?',
    back: 'Es el movimiento vertical que experimenta un cuerpo cuando se deja caer desde el reposo (vo = 0) bajo la única influencia de la atracción gravitatoria, despreciando la resistencia del aire.\n• g ≈ 9.81 m/s² (en el SI)\n• g ≈ 32.2 ft/s² (en el Sistema Inglés)',
    tip: 'Todos los cuerpos caen en el vacío con exactamente la misma aceleración g, sin importar su masa o forma.'
  },
  {
    id: 'fc-fis-42',
    subjectId: 'fisica-1',
    moduleIndex: 2,
    category: 'Caída Libre',
    front: '¿Cuáles son las ecuaciones de caída libre partiendo del reposo (vo = 0)?',
    back: '• Velocidad final: vf = g · t\n• Altura de caída: h = ½ g · t²\n• Velocidad en función de la altura: vf = √(2·g·h)\n• Tiempo de caída: t = √(2·h / g)',
    formula: 'vf = √(2gh)  ,  t = √(2h/g)'
  },
  {
    id: 'fc-fis-43',
    subjectId: 'fisica-1',
    moduleIndex: 2,
    category: 'Tiro Vertical',
    front: '¿Qué ocurre en el punto de altura máxima (h_max) en un tiro vertical hacia arriba?',
    back: 'La velocidad instantánea del proyectil se hace exactamente CERO (v = 0). Sin embargo, la aceleración de la gravedad sigue actuando y vale g = 9.81 m/s² hacia abajo.',
    tip: 'El tiempo que tarda en subir hasta la altura máxima es igual al tiempo que tarda en bajar de regreso al mismo nivel de lanzamiento (tsubida = tbajada).'
  },
  {
    id: 'fc-fis-44',
    subjectId: 'fisica-1',
    moduleIndex: 2,
    category: 'Tiro Vertical',
    front: '¿Cuáles son las fórmulas para calcular el tiempo de subida y la altura máxima en tiro vertical?',
    back: '• Tiempo de subida: t_sub = vo / g\n• Altura máxima: h_max = vo² / (2g)\n• Tiempo total en el aire: t_aire = 2 · t_sub = 2vo / g',
    formula: 'h_max = vo² / (2g)  ,  t_sub = vo / g'
  },
  {
    id: 'fc-fis-45',
    subjectId: 'fisica-1',
    moduleIndex: 2,
    category: 'Tiro Parabólico',
    front: '¿En qué consiste el principio de independencia de movimientos de Galileo en el tiro parabólico?',
    back: 'El movimiento de un proyectil en dos dimensiones se compone de dos movimientos simultáneos e independientes entre sí:\n1. Eje Horizontal X: Movimiento Rectilíneo Uniforme (MRU, ax = 0, vx = constante).\n2. Eje Vertical Y: Movimiento Uniformemente Acelerado (MRUA con ay = -g).',
    tip: 'El tiempo "t" es la única variable común que conecta las ecuaciones del eje X con las del eje Y.'
  },
  {
    id: 'fc-fis-46',
    subjectId: 'fisica-1',
    moduleIndex: 2,
    category: 'Tiro Parabólico',
    front: '¿Cuáles son las componentes iniciales de la velocidad en un tiro oblicuo con ángulo θ y rapidez vo?',
    back: '• vox = vo · cos(θ)  (se mantiene constante durante todo el vuelo)\n• voy = vo · sen(θ)  (disminuye al subir y aumenta al bajar por efecto de la gravedad)',
    formula: 'vox = vo·cos(θ)  ,  voy = vo·sen(θ)'
  },
  {
    id: 'fc-fis-47',
    subjectId: 'fisica-1',
    moduleIndex: 2,
    category: 'Tiro Parabólico',
    front: '¿Cuál es la fórmula para calcular el tiempo total de vuelo t_vuelo de un proyectil lanzado sobre terreno plano?',
    back: 't_vuelo = 2 · voy / g = [ 2 · vo · sen(θ) ] / g\n\nEs el doble del tiempo necesario para alcanzar la altura máxima.',
    formula: 't_v = (2·vo·sen θ) / g'
  },
  {
    id: 'fc-fis-48',
    subjectId: 'fisica-1',
    moduleIndex: 2,
    category: 'Tiro Parabólico',
    front: '¿Cuál es la fórmula del alcance horizontal máximo R de un proyectil y para qué ángulo se maximiza?',
    back: 'R = [ vo² · sen(2θ) ] / g\n\nSe maximiza cuando sen(2θ) = 1, es decir, a un ángulo de lanzamiento de θ = 45°.',
    tip: 'Dos ángulos complementarios (cuya suma sea 90°, ej. 30° y 60°) logran exactamente el mismo alcance horizontal con la misma velocidad inicial.',
    formula: 'R = (vo²·sen 2θ) / g  (máx a 45°)'
  },
  {
    id: 'fc-fis-49',
    subjectId: 'fisica-1',
    moduleIndex: 2,
    category: 'Tiro Parabólico',
    front: '¿Cuál es la fórmula para calcular la altura máxima Y_max en tiro parabólico?',
    back: 'Y_max = (voy)² / (2g) = [ vo² · sen²(θ) ] / (2g)',
    tip: 'En el punto más alto la velocidad del proyectil no es cero; su velocidad es horizontal y vale v = vox = vo · cos(θ).',
    formula: 'Y_max = (vo²·sen²θ) / (2g)'
  },
  {
    id: 'fc-fis-50',
    subjectId: 'fisica-1',
    moduleIndex: 2,
    category: 'Tiro Parabólico',
    front: '¿Cuál es la velocidad resultante v del proyectil en cualquier instante de tiempo t?',
    back: 'v = √[ (vx)² + (vy)² ]\n\nDonde vx = vox = vo·cos(θ), y vy = voy - g·t = vo·sen(θ) - g·t.\nEl ángulo de la velocidad instantánea es α = arctan(vy / vx).',
    formula: 'v = √(vx² + vy²)'
  }
];

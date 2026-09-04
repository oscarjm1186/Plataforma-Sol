import { Flashcard } from '../../types';

export const DIBUJO_FLASHCARDS: Flashcard[] = [
  // --- PARCIAL 1: HISTORIA, NORMATIVIDAD, INSTRUMENTOS, LÍNEAS Y FORMATOS (17 TARJETAS) ---
  {
    id: 'fc-dib-01',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 0,
    category: 'Normatividad de Dibujo',
    front: '¿Cuál es la función del dibujo técnico y qué organismos rigen su normatividad en México?',
    back: 'El dibujo técnico es el lenguaje gráfico universal y normalizado de la ingeniería y la arquitectura para transmitir de forma unívoca, exacta y reproducible las formas, dimensiones y especificaciones de un proyecto.\nEn México se rige por las Normas Oficiales Mexicanas (NOM y NMX) emitidas por la Dirección General de Normas (DGN), homologadas con la Organización Internacional de Normalización (ISO).',
    tip: 'Un plano técnico bien elaborado no debe dejar lugar a dudas ni suposiciones en la obra.'
  },
  {
    id: 'fc-dib-02',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 0,
    category: 'Instrumentos de Dibujo',
    front: '¿Cuáles son las características y ángulos de las dos escuadras profesionales de dibujo?',
    back: '• Escuadra de 45°: triángulo rectángulo isósceles con ángulos interiores de 90°, 45° y 45°.\n• Escuadra de 60° (o cartabón): triángulo rectángulo escaleno con ángulos interiores de 90°, 60° y 30°.\nCombinando ambas escuadras sobre la regla T se obtienen todos los múltiplos de 15° (15°, 30°, 45°, 60°, 75°, 90°, 105°, 120°, etc.).',
    tip: 'El bisel de las escuadras debe estar hacia abajo cuando se entinta con estilógrafo para evitar que la tinta se corra.'
  },
  {
    id: 'fc-dib-03',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 0,
    category: 'Lápices y Minas',
    front: '¿Cómo se clasifican los lápices de dibujo según la dureza de su grafito?',
    back: '• Serie H (Hard / Duros): 9H a H. Minas duras y gris claro; no manchan. Se usan para trazos auxiliares, líneas guía y ejes preliminares (comúnmente 2H, 3H y 4H).\n• F (Firm) y HB (Hard-Black): dureza intermedia; para rotulación y cotas.\n• Serie B (Black / Blandos): B a 9B. Minas blandas y negro intenso. Se usan para contornos visibles definitivos, remates y croquis a mano alzada (comúnmente B y 2B).',
    tip: 'Para trazo técnico inicial siempre afila la mina en forma de cono alargado.'
  },
  {
    id: 'fc-dib-04',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 0,
    category: 'Líneas Normalizadas',
    front: '¿Qué representa la línea continua gruesa (tipo A) en dibujo técnico?',
    back: 'Representa contornos y aristas visibles del objeto en primer plano, así como líneas de corte de muros en planos arquitectónicos.\nEs la línea de mayor jerarquía visual y grosor (típicamente 0.5 a 0.8 mm con estilógrafo o lápiz 2B).',
    tip: 'Da volumen, jerarquía y legibilidad inmediata al plano.'
  },
  {
    id: 'fc-dib-05',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 0,
    category: 'Líneas Normalizadas',
    front: '¿Qué representa la línea de trazos cortos o discontinua (tipo E o F)?',
    back: 'Representa contornos y aristas ocultas, es decir, aristas del objeto que quedan tapadas por otras partes en la vista proyectada, o proyecciones de volados y losas en plantas arquitectónicas.\nSe traza con grosor medio (0.3 a 0.4 mm) con segmentos uniformes de 2 a 3 mm y separaciones de 1 mm.',
    tip: 'Los trazos deben tocarse en las esquinas para delimitar claramente los vértices.'
  },
  {
    id: 'fc-dib-06',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 0,
    category: 'Líneas Normalizadas',
    front: '¿Qué representa la línea de cadena fina de punto y raya (tipo G)?',
    back: 'Representa ejes de simetría, centros de circunferencias y ejes estructurales de muros y columnas en proyectos arquitectónicos.\nConsiste en trazos largos alternados con un punto (o trazo muy corto de 1 mm), con grosor fino (0.15 a 0.2 mm).',
    tip: 'En el centro de una circunferencia los dos ejes deben cruzarse en trazo largo o en cruz, nunca en el espacio vacío.'
  },
  {
    id: 'fc-dib-07',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 0,
    category: 'Líneas Normalizadas',
    front: '¿Qué representa la línea de cadena fina con extremos gruesos (tipo H)?',
    back: 'Indica la traza del plano de corte o sección arquitectónica. Los extremos son gruesos y llevan flechas que indican el sentido hacia donde se mira el corte, acompañadas de letras identificadoras (ej. Corte A - A\').',
    tip: 'Las flechas de corte siempre apuntan en la dirección de la visual que se dibuja en la sección.'
  },
  {
    id: 'fc-dib-08',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 0,
    category: 'Formatos de Papel',
    front: '¿Cuál es el principio geométrico de la serie DIN / ISO A de formatos de papel?',
    back: 'Todos los formatos son semejantes entre sí y mantienen una proporción constante de lados de 1 : √2 (relación del lado al cateto de un triángulo rectángulo isósceles).\n• Formato base A0: tiene una superficie de exactamente 1 m² (841 × 1189 mm).\n• Cada formato inferior se obtiene doblando el formato previo por la mitad de su lado mayor (A1 es mitad de A0, A2 mitad de A1, etc.).',
    tip: 'El formato A4 (210 × 297 mm) es el estándar internacional para memorias de cálculo y reportes técnicos.'
  },
  {
    id: 'fc-dib-09',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 0,
    category: 'Formatos de Papel',
    front: '¿Cuáles son las dimensiones de los formatos A0, A1, A2, A3 y A4 en milímetros?',
    back: '• A0: 841 × 1189 mm (1.00 m²)\n• A1: 594 × 841 mm (0.50 m²)\n• A2: 420 × 594 mm (0.25 m²)\n• A3: 297 × 420 mm (0.125 m²)\n• A4: 210 × 297 mm (formato carta internacional)',
    tip: 'En planos ejecutivos de obra en México es común el formato 90 × 60 cm (equivalente aproximado a pliego de A1).'
  },
  {
    id: 'fc-dib-10',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 0,
    category: 'Doblado de Planos',
    front: '¿Cuál es la norma de doblado de planos técnicos según NMX-Z-065 / DIN 824?',
    back: 'Todo plano (sin importar si es A0, A1, A2 o A3) debe doblarse de tal manera que sus dimensiones finales reducidas queden exactamente del tamaño de un formato A4 (210 × 297 mm), con un margen izquierdo libre para encuadernación de 20 mm, y asegurando que el CUADRO DE REFERENCIA (solapa) quede visible al frente en la cara superior derecha.',
    tip: 'Nunca dobles un plano enrollado si va a archivarse en carpeta o expediente técnico municipal.'
  },
  {
    id: 'fc-dib-11',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 0,
    category: 'Rotulación Normalizada',
    front: '¿Cuáles son las características de la letra técnica normalizada (NMX-Z-023 / ISO 3098)?',
    back: '• Tipografía clara, uniforme, legible y sin serifas (sin adornos o patines).\n• Puede ser vertical (90°) o inclinada a 75° hacia la derecha.\n• Alturas normalizadas de mayúsculas (h): 2.5, 3.5, 5, 7, 10, 14 mm.\n• El espesor del trazo es 1/10 o 1/14 de la altura h.\n• Las líneas guía auxiliares se trazan muy tenues con mina dura (3H o 4H).',
    tip: 'En planos profesionales no se combinan estilos: si rotulas vertical, todo el plano debe ser vertical.'
  },
  {
    id: 'fc-dib-12',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 0,
    category: 'Cuadro de Datos',
    front: '¿Qué información obligatoria debe contener la solapa o cuadro de datos de un plano arquitectónico?',
    back: '1. Nombre y logotipo de la institución/empresa (ej. IPN CECyT 11).\n2. Nombre del proyecto o edificación (ej. Casa Habitación dos niveles).\n3. Tipo de plano y contenido específico (ej. Planta Arquitectónica Baja, Instalación Hidráulica).\n4. Escala numérica y gráfica.\n5. Clave del plano (ej. A-01, E-02, IH-01).\n6. Nombre del proyectista/alumno y del revisor/profesor.\n7. Fecha de elaboración y número de revisión.\n8. Norte geográfico y acotaciones (indicar "cotas en metros").',
    tip: 'La solapa siempre se coloca en la esquina inferior derecha del plano.'
  },
  {
    id: 'fc-dib-13',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 0,
    category: 'Instrumentos de Dibujo',
    front: '¿Cuál es la función del escalímetro y qué escalas triangulares estándar incluye en arquitectura?',
    back: 'Es una regla de sección prismática triangular con 6 caras graduadas que permite medir y trazar directamente distancias a escala en planos sin necesidad de realizar conversiones matemáticas.\nEscalas estándar más comunes: 1:20, 1:25, 1:50, 1:75, 1:100 y 1:125.',
    tip: '¡Regla de oro!: el escalímetro NUNCA debe usarse como regla para trazar líneas con lápiz o tinta, solo para medir.'
  },
  {
    id: 'fc-dib-14',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 0,
    category: 'Instrumentos de Dibujo',
    front: '¿Qué es el compás de precisión con bigotera y tornillo micrométrico?',
    back: 'Es un instrumento metálico articulado para trazar arcos y circunferencias de radio exacto. La rueda de ajuste central con husillo roscado bloquea rígidamente la apertura de los brazos impidiendo que se muevan o cierren involuntariamente por la presión durante el trazo.',
    tip: 'Afila la mina del compás en bisel plano inclinado hacia el exterior.'
  },
  {
    id: 'fc-dib-15',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 0,
    category: 'Instrumentos de Dibujo',
    front: '¿Para qué se utilizan las plantillas de curvas francesas (pistolete)?',
    back: 'Sirven para trazar a mano y enlazar curvas suaves no circulares (como elipses, parábolas, espirales o curvas de nivel topográficas) que no pueden trazarse con compás.\nSe buscan tramos del pistolete que coincidan con al menos 3 o 4 puntos de la curva de forma continua.',
    tip: 'Superpón siempre el último tercio del trazo anterior al avanzar con el siguiente tramo para evitar bordes o picos.'
  },
  {
    id: 'fc-dib-16',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 0,
    category: 'Márgenes de Lámina',
    front: '¿Cuáles son los anchos de margen reglamentarios para una lámina de dibujo técnico?',
    back: '• Margen izquierdo: 20 mm o 25 mm (para permitir perforación y archivado en carpetas sin tapar el dibujo).\n• Márgenes superior, inferior y derecho: 10 mm (en formatos grandes A0/A1 puede ser 10 a 20 mm; en A4 es 10 mm).',
    tip: 'El recuadro del margen siempre se traza con línea continua gruesa definitiva.'
  },
  {
    id: 'fc-dib-17',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 0,
    category: 'Croquis a Mano Alzada',
    front: '¿Qué es un croquis a mano alzada y cuál es su utilidad en obra?',
    back: 'Es un dibujo técnico preliminar realizado sin el auxilio de instrumentos de guía (reglas o compás), pero guardando rigurosamente las proporciones visuales, el paralelismo, la ortogonalidad y la jerarquía de líneas.\nEs la herramienta principal del técnico y arquitecto en obra para resolver detalles constructivos inmediatos.',
    tip: 'Para trazar líneas rectas largas a mano alzada, mantén la muñeca fija y mueve todo el antebrazo mirando hacia el punto final.'
  },

  // --- PARCIAL 2: ACOTACIONES, ESCALAS Y GEOMETRÍA GRÁFICA (17 TARJETAS) ---
  {
    id: 'fc-dib-18',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 1,
    category: 'Acotaciones',
    front: '¿Cuáles son los 4 elementos fundamentales que integran una cota normalizada?',
    back: '1. Línea de cota: línea continua fina paralela a la dimensión a medir.\n2. Líneas auxiliares de cota o de referencia: líneas perpendiculares finas que parten de la arista del objeto y sobrepasan 2 mm la línea de cota.\n3. Extremos de cota: flechas de cota proporcionales (o trazos oblicuos a 45° en arquitectura).\n4. Cifra de cota: valor numérico real de la medida, colocado centrado y sobre la línea de cota.',
    tip: 'En planos arquitectónicos se acostumbra la cabeza inclinada a 45° con línea corta gruesa.'
  },
  {
    id: 'fc-dib-19',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 1,
    category: 'Acotaciones',
    front: '¿Qué magnitud indica la cifra de cota en un plano dibujado a escala?',
    back: 'Indica SIEMPRE la magnitud real del objeto en el terreno o en la realidad (por ejemplo, 3.50 m), independientemente de la escala a la que esté impreso el plano (ya sea 1:50, 1:100 o 1:20).\n¡NUNCA se anota lo que mide el dibujo con la regla!',
    tip: 'Una cota es un dato contractual de construcción vinculante.'
  },
  {
    id: 'fc-dib-20',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 1,
    category: 'Acotaciones',
    front: '¿Cuál es la diferencia entre acotación en serie (en cadena) y en paralelo?',
    back: '• Acotación en Serie: las líneas de cota se colocan una a continuación de la otra sobre la misma alineación continua (ej. espesor de muro, vano de ventana, tramo de muro).\n• Acotación en Paralelo: las líneas de cota parten de un mismo plano de referencia común y se colocan escalonadas a diferentes distancias (evita la acumulación de errores de medición).',
    tip: 'En planos arquitectónicos se combinan: una línea en serie para vanos y macizos, y una línea exterior general para la cota total a paños o a ejes.'
  },
  {
    id: 'fc-dib-21',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 1,
    category: 'Acotaciones',
    front: '¿Cuáles son las 3 reglas de oro que no deben violarse al acotar planos?',
    back: '1. Las líneas de cota nunca deben cruzarse entre sí ni cruzarse con líneas del dibujo.\n2. No se debe acotar sobre aristas ocultas a menos que sea completamente inevitable.\n3. Ninguna dimensión debe repetirse innecesariamente en dos vistas distintas (evitar sobreacotación).',
    tip: 'Coloca las cotas menores más cerca del dibujo y las cotas generales totales más alejadas.'
  },
  {
    id: 'fc-dib-22',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 1,
    category: 'Acotaciones',
    front: '¿Cómo se simboliza la acotación de radios, diámetros y espesores?',
    back: '• Radio: letra R antepuesta a la cifra (ej. R 2.50 m); la línea de cota parte del centro y lleva una sola flecha en el arco.\n• Diámetro: símbolo Ø antepuesto a la cifra (ej. Ø 30 cm); atraviesa la circunferencia.\n• Cuadrado: símbolo □ antepuesto a la cifra (ej. □ 20 cm para columna cuadrada).',
    tip: 'Los arcos menores a 180° se acotan con radio R; las circunferencias completas o arcos mayores con diámetro Ø.'
  },
  {
    id: 'fc-dib-23',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 1,
    category: 'Escalas',
    front: '¿Cuál es la fórmula fundamental para calcular cualquier escala técnica?',
    back: 'Escala (E) = Dimensión en el Dibujo (D) / Dimensión en la Realidad (R)\nE = D / R\n\nAmbas dimensiones deben expresarse rigurosamente en las MISMAS unidades (generalmente milímetros o centímetros) antes de simplificar la fracción a 1 : X.',
    formula: 'E = D / R'
  },
  {
    id: 'fc-dib-24',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 1,
    category: 'Escalas',
    front: '¿Cómo se clasifican las escalas en dibujo técnico?',
    back: '1. Escala Natural (1:1): el dibujo tiene exactamente las mismas dimensiones reales del objeto.\n2. Escalas de Reducción (1:X con X > 1): el dibujo es menor que el objeto (ej. 1:20, 1:50, 1:100, 1:500).\n3. Escalas de Ampliación (X:1 con X > 1): el dibujo es mayor que el objeto, para piezas diminutas de ingeniería (ej. 2:1, 5:1, 10:1).',
    tip: 'En edificación casi el 100% de las escalas son de reducción.'
  },
  {
    id: 'fc-dib-25',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 1,
    category: 'Escalas en Arquitectura',
    front: '¿Cuáles son las escalas arquitectónicas más utilizadas y cuál es su campo de aplicación?',
    back: '• 1:10 o 1:20: Detalles constructivos específicos (ensambles, pretiles, anclajes de acero, cimientos).\n• 1:25 o 1:50: Planos ejecutivos de plantas, cortes y fachadas de casa habitación.\n• 1:100: Anteproyectos arquitectónicos y planos generales de permiso de construcción.\n• 1:200 o 1:500: Planos de conjunto, techumbres y localización del predio en la manzana.\n• 1:1000 a 1:5000: Planos topográficos y de desarrollo urbano.',
    tip: 'A escala 1:50, cada metro real mide 2 cm en el papel.'
  },
  {
    id: 'fc-dib-26',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 1,
    category: 'Escala Gráfica',
    front: '¿Qué es una escala gráfica y por qué es indispensable en los planos?',
    back: 'Es una barra reglada dividida en segmentos que representan metros o kilómetros reales en el terreno. Si el plano se fotocopia, digitaliza o reduce/amplía de tamaño, la escala numérica (ej. 1:50) se vuelve falsa, pero la escala gráfica se amplía o reduce proporcionalmente en la misma razón, permitiendo seguir midiendo distancias con precisión.',
    tip: 'La "talón" o cabeza de la escala gráfica se subdivide a la izquierda del cero en partes decimales más finas.'
  },
  {
    id: 'fc-dib-27',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 1,
    category: 'Geometría Gráfica',
    front: '¿Cómo se traza con regla y compás la mediatriz de un segmento AB?',
    back: 'Con una abertura de compás fija mayor a la mitad del segmento, se trazan dos arcos con centro en A (uno arriba y otro abajo de la línea), y con el mismo radio se trazan otros dos arcos con centro en B que corten a los anteriores en los puntos P y Q. La recta que une P y Q es la mediatriz: corta al segmento en su punto medio y forma 90° con él.',
    tip: 'Cualquier punto sobre la mediatriz equidista de los dos extremos A y B.'
  },
  {
    id: 'fc-dib-28',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 1,
    category: 'Geometría Gráfica',
    front: '¿Cómo se traza la bisectriz de un ángulo con vértice V?',
    back: 'Con centro en V se traza un arco de radio arbitrario que corte a los dos lados del ángulo en los puntos 1 y 2. Con centros en 1 y 2 y un radio igual, se trazan dos arcos que se corten en un punto interior P. La semirrecta que nace en V y pasa por P es la bisectriz y divide el ángulo en dos mitades exactamente iguales.',
    tip: 'La bisectriz es el lugar geométrico de los puntos que equidistan de los dos lados del ángulo.'
  },
  {
    id: 'fc-dib-29',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 1,
    category: 'Geometría Gráfica',
    front: '¿Cómo se divide un segmento AB en "n" partes iguales sin medir con regla (Teorema de Tales)?',
    back: 'Desde un extremo A se traza una semirrecta auxiliar con cualquier ángulo conveniente. Con el compás se marcan sobre ella "n" divisiones de longitud constante cualquiera (1, 2, 3... n). Se une la última división "n" con el extremo final B mediante una recta. Con el juego de escuadras se trazan paralelas a esta recta que pasen por cada división auxiliar; estas paralelas cortan al segmento original AB en "n" partes rigurosamente iguales.',
    tip: 'Se utiliza para modular escalones (huellas/peraltes) o espaciamiento de barrotes y estribos.'
  },
  {
    id: 'fc-dib-30',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 1,
    category: 'Geometría Gráfica',
    front: '¿Cómo se construye un hexágono regular inscrito en una circunferencia de radio R?',
    back: 'Se traza la circunferencia de radio R. Sin alterar la abertura del compás (radio = R), se apoya la punta en cualquier punto de la circunferencia y se corta la línea perimetral con sucesivos arcos de radio R. Se obtienen exactamente 6 puntos que al unirse consecutivamente con rectas forman el hexágono regular perfecto.',
    tip: 'En el hexágono regular el lado mide exactamente lo mismo que el radio de la circunferencia circunscrita.'
  },
  {
    id: 'fc-dib-31',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 1,
    category: 'Geometría Gráfica',
    front: '¿Qué es el método del óvalo o elipse por cuatro centros?',
    back: 'Es una construcción geométrica que aproxima el trazo de una elipse utilizando únicamente 4 arcos de circunferencia tangentes entre sí:\n• Dos arcos de radio grande con centro en los extremos del eje menor para trazar los flancos laterales aplanados.\n• Dos arcos de radio pequeño con centro sobre el eje mayor para trazar las cabezas curvas de los extremos.',
    tip: 'Es la técnica estándar para dibujar elipses a mano con compás en proyecciones isométricas.'
  },
  {
    id: 'fc-dib-32',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 1,
    category: 'Tangencias y Enlaces',
    front: '¿Cuál es la condición geométrica para que dos circunferencias sean tangentes entre sí?',
    back: 'El punto de tangencia T debe situarse obligatoriamente sobre la recta que une los dos centros de las circunferencias (O₁ y O₂):\n• Tangencia Exterior: la distancia entre centros es igual a la suma de sus radios (d = R₁ + R₂).\n• Tangencia Interior: la distancia entre centros es igual a la resta de sus radios (d = |R₁ - R₂|).',
    tip: 'Es el principio para diseñar curvas compuestas en banquetas y retornos viales.'
  },
  {
    id: 'fc-dib-33',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 1,
    category: 'Tangencias y Enlaces',
    front: '¿Cómo se redondea o enlaza la esquina de dos rectas perpendiculares con un arco de radio R?',
    back: 'Se trazan dos rectas paralelas a las rectas dadas a una distancia hacia adentro igual al radio R. El punto donde se intersectan estas dos paralelas es el centro O del arco de curvatura. Desde O se bajan perpendiculares a las rectas originales para marcar los dos puntos de tangencia T₁ y T₂. Con la punta del compás en O y radio R se traza el arco de unión perfecto.',
    tip: 'Se aplica en el diseño de banquetas, aristas de losas y chaflanes en columnas de concreto.'
  },
  {
    id: 'fc-dib-34',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 1,
    category: 'Achurados y Texturas',
    front: '¿Cuáles son las reglas de achurado (rayado a 45°) según NMX-Z-006 para indicar materiales?',
    back: 'Las secciones cortadas se rellenan con líneas continuas finas paralelas inclinadas a 45° respecto a las aristas principales del objeto, separadas uniformemente (de 2 a 4 mm).\n• Concreto hidráulico: triángulo con puntos (símbolo de grava y arena).\n• Mampostería de tabique: dobles líneas paralelas a 45°.\n• Terreno natural: series de 3 trazos cortos horizontales y verticales.',
    tip: 'Si dos piezas en corte están adyacentes, sus rayados deben orientarse en direcciones opuestas (+45° y -45°).'
  },

  // --- PARCIAL 3: SISTEMAS DE PROYECCIÓN, AXONOMETRÍA E ISOMÉTRICO (16 TARJETAS) ---
  {
    id: 'fc-dib-35',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 2,
    category: 'Sistemas de Proyección',
    front: '¿Qué es una proyección ortogonal cilíndrica?',
    back: 'Es un sistema de representación geométrica donde todos los rayos proyectantes son paralelos entre sí y caen formando un ángulo de 90° (perpendiculares) contra el plano de proyección.\nMantiene el paralelismo de las líneas y representa las caras paralelas al plano en su verdadera magnitud y forma sin distorsión.',
    tip: 'Es la base de las plantas arquitectónicas, fachadas y cortes.'
  },
  {
    id: 'fc-dib-36',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 2,
    category: 'Sistemas de Proyección',
    front: '¿Cuáles son las 3 vistas ortogonales principales que definen un volumen tridimensional?',
    back: '1. Vista Superior o Planta: vista obtenida mirando el objeto desde arriba proyectado en el plano horizontal (ancho y profundidad).\n2. Vista Frontal o Alzado: vista proyectada en el plano vertical (ancho y altura).\n3. Vista Lateral o Perfil (izquierdo o derecho): vista proyectada en el plano de perfil (profundidad y altura).',
    tip: 'La planta se dibuja siempre directamente alineada arriba o abajo de la vista frontal.'
  },
  {
    id: 'fc-dib-37',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 2,
    category: 'Sistemas de Proyección',
    front: '¿Cuál es la diferencia entre el Sistema Europeo (ISO E / Primer Diedro) y el Americano (ISO A / Tercer Diedro)?',
    back: '• Sistema Europeo (ISO E): el objeto se ubica entre el observador y el plano de proyección. La vista superior se dibuja ABAJO de la frontal, y la vista izquierda se dibuja a la DERECHA.\n• Sistema Americano (ISO A): el plano de proyección se ubica entre el observador y el objeto (plano transparente). La vista superior se dibuja ARRIBA de la frontal, y la lateral izquierda a la IZQUIERDA.',
    tip: 'En México y América del Norte la industria suele adoptar la disposición del Sistema Americano.'
  },
  {
    id: 'fc-dib-38',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 2,
    category: 'Sistemas de Proyección',
    front: '¿Qué es el triedro de Monge y cómo se abate para obtener el plano de dibujo bidimensional?',
    back: 'Es el espacio tridimensional formado por la intersección perpendicular de tres planos: Horizontal (PH), Vertical (PV) y de Perfil (PP). Para representarlo en una hoja plana de papel, el PH se gira 90° hacia abajo y el PP 90° hacia la derecha respecto a la Línea de Tierra (LT), formando la montea ortogonal.',
    tip: 'Desarrollado por Gaspard Monge, es el fundamento matemático de la geometría descriptiva.'
  },
  {
    id: 'fc-dib-39',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 2,
    category: 'Axonometría',
    front: '¿Qué es una perspectiva axonométrica?',
    back: 'Es una proyección paralela cilíndrica sobre un solo plano que permite mostrar simultáneamente las tres dimensiones espaciales de un cuerpo (largo, ancho y alto) en una sola vista tridimensional comprensible.',
    tip: 'Permite entender el volumen global de una casa o estructura de un solo vistazo.'
  },
  {
    id: 'fc-dib-40',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 2,
    category: 'Isométrica',
    front: '¿Cuáles son las características geométricas de los ejes en una proyección isométrica?',
    back: '• Los 3 ejes axonométricos (X, Y, Z) forman ángulos exactamente iguales de 120° entre sí.\n• El eje vertical Z representa las alturas (90° respecto a la horizontal).\n• Los ejes X e Y representan longitud y profundidad, inclinados a 30° respecto a la línea horizontal de referencia.',
    tip: 'Se traza de forma sumamente ágil con la escuadra de 30°/60° apoyada sobre la regla T.'
  },
  {
    id: 'fc-dib-41',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 2,
    category: 'Isométrica',
    front: '¿Qué diferencia existe entre una "proyección isométrica real" y un "dibujo isométrico"?',
    back: '• Proyección isométrica real: aplica un coeficiente de reducción de √(2/3) ≈ 0.816 sobre las tres direcciones debido a la inclinación del cubo con el plano de proyección.\n• Dibujo isométrico: se dibuja a escala 1:1 directa (sin aplicar el factor 0.816) midiendo las magnitudes reales sobre los ejes a 30°.\nEn la práctica técnica se utiliza siempre el dibujo isométrico por simplicidad operativa.',
    tip: 'El dibujo isométrico resulta visualmente un 22.5% más grande que la proyección real, pero conserva proporciones idénticas.'
  },
  {
    id: 'fc-dib-42',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 2,
    category: 'Isométrica',
    front: '¿Qué son las líneas isométricas y las líneas no isométricas?',
    back: '• Líneas isométricas: aquellas que son paralelas a cualquiera de los tres ejes isométricos (Z vertical, o X e Y a 30°). Solo sobre estas líneas se pueden medir directamente las cotas reales.\n• Líneas no isométricas: líneas inclinadas que no son paralelas a ninguno de los ejes. No se pueden medir directamente; sus extremos deben ubicarse mediante coordenadas sobre líneas isométricas (método de la caja envolvente).',
    tip: 'Las techumbres a dos aguas tienen líneas no isométricas.'
  },
  {
    id: 'fc-dib-43',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 2,
    category: 'Isométrica',
    front: '¿Cómo se dibuja una circunferencia en perspectiva isométrica?',
    back: 'Una circunferencia proyectada en cualquiera de los tres planos isométricos (horizontal, vertical izquierdo o vertical derecho) se deforma geométricamente transformándose en una ELIPSE isométrica.\nSe inscribe en un rombo isométrico y se traza por el método de los cuatro centros con compás.',
    tip: 'El eje mayor de la elipse en el plano horizontal queda horizontal, mientras el eje menor coincide con la vertical.'
  },
  {
    id: 'fc-dib-44',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 2,
    category: 'Axonometría',
    front: '¿En qué se diferencian las proyecciones dimétrica y trimétrica de la isométrica?',
    back: '• Isométrica: los 3 ángulos entre ejes son iguales (120° / 120° / 120°).\n• Dimétrica: 2 ángulos entre ejes son iguales y 1 es diferente (ej. dos ejes a 131° y uno a 98°; dos escalas iguales y una reducida a 1/2).\n• Trimétrica: los 3 ángulos entre ejes son desiguales y las 3 escalas sobre los ejes tienen factores de reducción diferentes.',
    tip: 'La dimétrica reduce el aspecto rígido o monótono del isométrico dando mayor naturalidad a la vista frontal.'
  },
  {
    id: 'fc-dib-45',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 2,
    category: 'Perspectiva Oblicua',
    front: '¿Cuáles son las características de la perspectiva Caballera?',
    back: '• La cara frontal del objeto es paralela al plano del cuadro (forma 90° entre ancho y alto) y se dibuja en verdadera magnitud y forma sin ninguna deformación geométrica (las circunferencias frontales siguen siendo círculos perfectos).\n• El eje de profundidad o fuga se dibuja comúnmente inclinado a 45° (o 30°/60°).\n• Para evitar que el objeto se vea exageradamente alargado o distorsionado, se aplica un coeficiente de reducción de ½ (0.5) o ⅔ sobre el eje de profundidad.',
    tip: 'Ideal para dibujar piezas con curvas y perforaciones complejas situadas en su cara frontal.'
  },
  {
    id: 'fc-dib-46',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 2,
    category: 'Perspectiva Oblicua',
    front: '¿Cuáles son las características de la perspectiva Militar (Planométrica)?',
    back: '• La planta arquitectónica se dibuja en verdadera magnitud con sus ángulos ortogonales originales a 90° (rotada comúnmente 45°/45° o 30°/60° respecto a la horizontal).\n• Las alturas se proyectan verticalmente hacia arriba a 90° a escala 1:1.\n• Muy utilizada en urbanismo y arquitectura porque permite utilizar la planta arquitectónica calcada directamente.',
    tip: 'Muestra los techos, azoteas y distribución de cuartos con total fidelidad espacial.'
  },
  {
    id: 'fc-dib-47',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 2,
    category: 'Cortes y Secciones',
    front: '¿Cuál es la diferencia conceptual entre un corte y una sección?',
    back: '• Sección: muestra ÚNICAMENTE la superficie del objeto cortada directamente por el plano secante (solo el área de contacto físico que se achura).\n• Corte: muestra la superficie en contacto seccionada con su achurado MÁS todos los elementos y aristas visibles que se encuentran por detrás del plano de corte proyectados en la visual.',
    tip: 'En arquitectura casi siempre se dibujan Cortes (longitudinales y transversales), pues muestran puertas, ventanas y muros de fondo.'
  },
  {
    id: 'fc-dib-48',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 2,
    category: 'Cortes Arquitectónicos',
    front: '¿Por dónde debe hacerse pasar preferentemente el plano de corte en una casa habitación?',
    back: 'Debe pasar obligatoriamente por las zonas de mayor complejidad técnica y cambio de niveles:\n1. Por el cubo de escaleras (para verificar peraltes, huellas y alturas libres de paso).\n2. Por zonas húmedas de baños y cocinas (para detallar bajadas y desniveles sanitarios).\n3. Cortando al menos una puerta y una ventana (para verificar alturas de cerramiento y antepechos).',
    tip: 'Evita pasar el corte longitudinal por un muro ciego macizo continuo, pues no aporta información útil.'
  },
  {
    id: 'fc-dib-49',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 2,
    category: 'Perspectiva Cónica',
    front: '¿Cuál es la diferencia entre una proyección axonométrica y una perspectiva cónica con puntos de fuga?',
    back: '• Proyección Axonométrica: los rayos proyectantes son paralelos (observador en el infinito); los objetos conservan sus proporciones a cualquier distancia.\n• Perspectiva Cónica: los rayos convergen en un punto de vista finito (el ojo del observador); los objetos lejanos se dibujan más pequeños simulando la visión humana natural, y las rectas paralelas convergen en puntos de fuga sobre la Línea del Horizonte (LH).',
    tip: 'La perspectiva cónica (a 1 o 2 puntos de fuga) es artística y de presentación; la axonométrica es técnica y mensurable.'
  },
  {
    id: 'fc-dib-50',
    subjectId: 'dibujo-tecnico-1',
    moduleIndex: 2,
    category: 'Software CAD y BIM',
    front: '¿Cómo se integran los principios del dibujo técnico tradicional en el software CAD y BIM moderno?',
    back: 'Programas como AutoCAD, Revit o ArchiCAD aplican exactamente las mismas normas oficiales universales de ingeniería:\n• Capas (Layers): controlan la jerarquía de grosores de línea y tipos de línea (continua, trazos, ejes).\n• Escalas de anotación: garantizan que la rotulación y cotas midan siempre 2.5 mm o 3.5 mm al imprimirse en cualquier formato.\n• Espacio Modelo vs Espacio Papel (Layouts): permite dibujar el edificio en escala 1:1 real e insertarlo en ventanas gráficas (viewports) a diferentes escalas con solapas normalizadas.',
    tip: 'Saber dibujar a mano con escuadras y estilógrafo te da la disciplina espacial para no cometer errores en CAD.'
  }
];

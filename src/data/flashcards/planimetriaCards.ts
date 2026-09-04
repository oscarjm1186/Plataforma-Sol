import { Flashcard } from '../../types';

export const PLANIMETRIA_FLASHCARDS: Flashcard[] = [
  // --- PARCIAL 1: CONCEPTOS BÁSICOS, UNIDADES, CARTABONEO Y CINTA (17 TARJETAS) ---
  {
    id: 'fc-pla-01',
    subjectId: 'topografia',
    moduleIndex: 0,
    category: 'Conceptos Fundamentales',
    front: '¿Cuál es la diferencia técnica fundamental entre Topografía y Geodesia?',
    back: '• Topografía: ciencia y técnica que mide extensiones de terreno pequeñas o medianas (menores a 25 o 30 km de radio), considerando la superficie de la Tierra como un PLANO HORIZONTAL perfecto y despreciando la curvatura terrestre.\n• Geodesia: mide grandes extensiones continentales o planetarias donde es indispensable tomar en cuenta la forma real de la Tierra (elipsoide de revolución o geoide) y su curvatura.',
    tip: 'En el CECyT 11 y obras de edificación urbana aplicamos siempre los principios de la Topografía plana.'
  },
  {
    id: 'fc-pla-02',
    subjectId: 'topografia',
    moduleIndex: 0,
    category: 'Divisiones de la Topografía',
    front: '¿Cómo se divide la topografía para su estudio práctico?',
    back: '1. Planimetría: proyecta y mide los detalles del terreno sobre un plano horizontal bidimensional (coordenadas X, Y), sin considerar las diferencias de altura.\n2. Altimetría o Nivelación: mide las diferencias de elevación o desniveles verticales entre puntos respecto a un plano de referencia (coordenada Z).\n3. Altiplanimetría o Taquimetría: combina simultáneamente la medición planimétrica y altimétrica para representar curvas de nivel tridimensionales.',
    tip: 'El curso de Planimetría Aplicada se enfoca en delimitar linderos, perímetros, ángulos horizontales y áreas de predios.'
  },
  {
    id: 'fc-pla-03',
    subjectId: 'topografia',
    moduleIndex: 0,
    category: 'Unidades Agrarias',
    front: '¿A cuántos metros cuadrados equivale una hectárea, un área y una centiárea?',
    back: '• 1 Hectárea (ha) = 10,000 m² (un cuadrado de 100 m × 100 m).\n• 1 Área (a) = 100 m² (un cuadrado de 10 m × 10 m).\n• 1 Centiárea (ca) = 1 m² (un cuadrado de 1 m × 1 m).\n\nEjemplo: un predio de 3 ha, 45 a, 20 ca mide exactamente: 30,000 + 4,500 + 20 = 34,520 m².',
    formula: '1 ha = 10,000 m² | 1 a = 100 m² | 1 ca = 1 m²'
  },
  {
    id: 'fc-pla-04',
    subjectId: 'topografia',
    moduleIndex: 0,
    category: 'Unidades Angulares',
    front: '¿Cómo se estructura el sistema sexagesimal utilizado en topografía?',
    back: 'La circunferencia completa se divide en 360 grados (360°).\n• Cada grado se divide en 60 minutos (60\').\n• Cada minuto se divide en 60 segundos (60").\n• 1 cuadrante recto = 90° 00\' 00".\n• 1 grado = 3,600 segundos.',
    tip: '¡Cuidado con la calculadora!: debes convertir grados con minutos y segundos a formato decimal antes de operar funciones trigonométricas (seno y coseno).'
  },
  {
    id: 'fc-pla-05',
    subjectId: 'topografia',
    moduleIndex: 0,
    category: 'Cartaboneo de Pasos',
    front: '¿Qué es el cartaboneo de pasos y cómo se calcula la longitud del paso medio?',
    back: 'Es un método expedito para medir distancias aproximadas caminando a paso natural constante.\nProcedimiento:\n1. Se mide con cinta métrica una distancia base conocida de 50 o 100 metros en terreno plano.\n2. El operador recorre la distancia ida y vuelta al menos 3 o 4 veces contando sus pasos normales.\n3. Longitud del paso medio = Distancia total recorrida / Número total promedio de pasos contados.',
    tip: 'El paso de un topógrafo promedio suele oscilar entre 0.70 m y 0.80 m. Se utiliza para reconocimientos preliminares y croquis.'
  },
  {
    id: 'fc-pla-06',
    subjectId: 'topografia',
    moduleIndex: 0,
    category: 'Medición con Cinta',
    front: '¿Qué tipos de cintas métricas se utilizan en levantamientos y cuál es la más exacta?',
    back: '• Cinta de lona o tela: reforzada con hilos metálicos; económica pero se deforma con la humedad y la tensión (baja precisión).\n• Cinta de fibra de vidrio: no conduce electricidad, ligera y resistente a la corrosión; muy usada en obra.\n• Cinta de acero templado: alta resistencia y precisión para levantamientos urbanos.\n• Cinta de Invar (aleación 64% hierro y 36% níquel): la más exacta; tiene un coeficiente de dilatación térmica casi nulo, usada en geodesia y bases de triangulación.',
    tip: 'En el CECyT 11 se usan comúnmente cintas de fibra de vidrio o acero de 30 o 50 metros.'
  },
  {
    id: 'fc-pla-07',
    subjectId: 'topografia',
    moduleIndex: 0,
    category: 'Errores en Medición con Cinta',
    front: '¿Qué es el error por catenaria al medir con cinta suspendida en el aire?',
    back: 'Es el acortamiento de la distancia aparente causado por el propio peso de la cinta métrica, la cual forma una curva colgante o catenaria entre los dos apoyos en lugar de una línea recta tensa.\nHace que la cinta marque una distancia MAYOR a la distancia horizontal real entre los puntos.\nSe reduce aplicando una tensión uniforme de tracción con un dinamómetro (entre 5 y 7 kg).',
    tip: 'A mayor claro libre entre jalones y mayor peso de la cinta, mayor es el error de catenaria.'
  },
  {
    id: 'fc-pla-08',
    subjectId: 'topografia',
    moduleIndex: 0,
    category: 'Errores en Medición con Cinta',
    front: '¿Cuáles son los principales errores sistemáticos que afectan la medición con cinta?',
    back: '1. Error de calibración o longitud real incorrecta (cinta gastada o rota reparada).\n2. Error por falta de horizontalidad (medir en pendiente sin mantener la cinta horizontal con plomada).\n3. Error por catenaria (peso propio de la cinta colgante).\n4. Error por temperatura (dilatación con el calor o contracción con el frío respecto a los 20 °C estándar).\n5. Error por tensión inadecuada (jalar con poca o excesiva fuerza).',
    tip: 'Los errores sistemáticos siguen leyes físicas conocidas y pueden corregirse matemáticamente con fórmulas.'
  },
  {
    id: 'fc-pla-09',
    subjectId: 'topografia',
    moduleIndex: 0,
    category: 'Medición en Pendiente',
    front: '¿En qué consiste el método del "escalonamiento" o "chacaleo" para medir distancias en terreno inclinado con cinta?',
    back: 'Para medir la distancia horizontal real en un terreno en pendiente sin necesidad de medir ángulos verticales:\nSe divide la distancia en tramos cortos (de 5, 10 o 15 metros). La cinta se mantiene rigurosamente HORIZONTAL en cada tramo auxiliándose con un nivel de mano o burbuja, y desde el extremo suspendido en el aire se baja una PLOMADA hasta tocar el suelo o clavar una ficha. La suma de las distancias parciales horizontales da la distancia horizontal total.',
    tip: 'En terrenos muy empinados nunca midas tramos de 30 m al aire; usa tramos de 5 o 10 m para evitar flechas por catenaria.'
  },
  {
    id: 'fc-pla-10',
    subjectId: 'topografia',
    moduleIndex: 0,
    category: 'Instrumentos Secundarios',
    front: '¿Qué son las balizas o jalones y cómo están pintados reglamentariamente?',
    back: 'Son varas metálicas, de fibra de vidrio o madera de 2.00 a 3.00 metros de altura con regatón cónico de acero en la base para clavarse en el terreno.\nEstán pintados reglamentariamente con franjas alternadas de 20 o 50 cm de color ROJO y BLANCO (o naranja y blanco).\nFunciones: marcar visualmente alineaciones rectas entre vértices lejanos y servir de referencia para lecturas angulares.',
    tip: 'Las franjas de 20 cm permiten al topógrafo estimar rápidamente alturas o desniveles visuales a distancia.'
  },
  {
    id: 'fc-pla-11',
    subjectId: 'topografia',
    moduleIndex: 0,
    category: 'Instrumentos Secundarios',
    front: '¿Para qué se utilizan las fichas o agujas de agrimensor y cuántas componen un juego?',
    back: 'Son varillas de alambre de acero acerado de 30 a 40 cm de largo con punta afilada en un extremo y un anillo circular en el otro (con un listón rojo para visibilidad).\nUn juego estándar consta de 11 FICHAS unidas en una argolla metálica.\nSe usan para marcar en el terreno cada "cintazo" completo de 30 o 50 metros en mediciones largas continuas (cuando el cadenero delantero clava la ficha número 10, se ha completado un tramo entero de 10 cintadas).',
    tip: 'Evitan contar erróneamente el número de cintazos en distancias kilométricas.'
  },
  {
    id: 'fc-pla-12',
    subjectId: 'topografia',
    moduleIndex: 0,
    category: 'Libreta de Campo',
    front: '¿Cómo se organiza y qué datos obligatorios contiene una libreta de tránsito de campo?',
    back: 'Es el registro original oficial donde se anotan los datos brutos medidos en el terreno:\n• Hoja izquierda (Tabular): columnas para Estación (PV), Punto Visado (PV), Distancia medida (m), Ángulo horizontal (grados, minutos, segundos) o Rumbo/Azimut, y Altura de instrumento.\n• Hoja derecha (Gráfica rayada/cuadriculada): croquis de localización, norte magnético, descripción física de vértices (mojoneras, clavos), clima, fecha, nombres de la brigada y firma del responsable.',
    tip: '¡Regla topográfica inquebrantable!: los datos de campo se anotan con lápiz de grafito duro (2H/3H) para que no se corran con la lluvia o sudor, y NUNCA se borran (si hay error se tacha con una línea limpia y se reescribe al lado).'
  },
  {
    id: 'fc-pla-13',
    subjectId: 'topografia',
    moduleIndex: 0,
    category: 'Brigada de Campo',
    front: '¿Quiénes integran una brigada topográfica básica para levantamientos con cinta y teodolito?',
    back: '1. Topógrafo o Operador del instrumento: dirige el levantamiento, coloca la estación y realiza las lecturas angulares.\n2. Libretero: anota fielmente los datos y elabora los croquis en la libreta de campo.\n3. Cadenero delantero: jala la cinta y coloca jalones, fichas o clavos en los vértices visados.\n4. Cadenero trasero: sujeta el origen de la cinta (0.00 m) en la estación previa y alinea al delantero.\n5. Estaldero o portamirista / estaquero: sostiene el prisma, estadal o jalón vertical sobre el punto.',
    tip: 'La comunicación clara y concisa mediante señas convencionales con los brazos es vital en campo.'
  },
  {
    id: 'fc-pla-14',
    subjectId: 'topografia',
    moduleIndex: 0,
    category: 'Monumentación',
    front: '¿Qué es una mojonera y cómo se materializa un vértice topográfico permanente?',
    back: 'Es un monumento físico permanente clavado en el terreno que preserva la posición exacta de un vértice de lindero o poligonal de apoyo.\nSuele construirse como un tronco de pirámide de concreto de 15 × 15 cm en la corona por 40-50 cm de profundidad, enterrado a ras de suelo, con un clavo de bronce o varilla al centro que marca el punto matemático exacto.',
    tip: 'En banquetas de concreto urbano se utiliza un clavo de acero para concreto con una arandela de lámina grabada.'
  },
  {
    id: 'fc-pla-15',
    subjectId: 'topografia',
    moduleIndex: 0,
    category: 'Alineación de Jalones',
    front: '¿Cómo alinea el operador a dos jalones intermedios entre dos vértices A y B no visibles entre sí sobre una loma?',
    back: 'Mediante el método de visuales recíprocas (o método de aproximaciones sucesivas):\nDos operadores con sendos jalones se ubican en la cima de la colina viéndose entre sí. El operador 1 alinea al operador 2 con el vértice lejano B; luego el operador 2 alinea al operador 1 con el vértice A. Repiten este proceso alternado moviéndose ligeramente hasta que ambos operadores y los dos vértices extremos queden exactamente alineados sobre la misma recta.',
    tip: 'Permite abrir brechas o trazar linderos en terrenos ondulados sin teodolito.'
  },
  {
    id: 'fc-pla-16',
    subjectId: 'topografia',
    moduleIndex: 0,
    category: 'Precisión Relativa',
    front: '¿Cómo se expresa la precisión de una medición con cinta métrica?',
    back: 'Se expresa como una fracción unitaria 1 / N:\nPrecisión = Error absoluto / Distancia total medida\n• En levantamientos comunes con cinta: precisión aceptable de 1/1,000 a 1/2,000 (significa 1 metro de error por cada 1,000 o 2,000 metros medidos).\n• Con teodolito y cinta templada: 1/5,000.\n• Con estación total electrónica: 1/20,000 o mayor.',
    tip: 'A mayor denominador N, mayor es la precisión y calidad del levantamiento.'
  },
  {
    id: 'fc-pla-17',
    subjectId: 'topografia',
    moduleIndex: 0,
    category: 'Errores en Topografía',
    front: '¿Cuál es la diferencia entre una equivocación, un error sistemático y un error accidental?',
    back: '• Equivocación o pifia: falta de atención del operador (ej. leer 23.45 m y anotar 25.34 m en la libreta); no entra en el cálculo de probabilidades y obliga a repetir la medición.\n• Error sistemático: obedece a causas físicas o mecánicas constantes (temperatura, catenaria); siempre tiene el mismo signo (+ o -) y puede calcularse y eliminarse con fórmulas.\n• Error accidental o aleatorio: variaciones inevitables del ojo humano o corrientes de aire; son tan probables positivos como negativos y se compensan estadísticamente con el método de mínimos cuadrados.',
    tip: 'Las equivocaciones son inaceptables en topografía forense y deslindes de propiedad.'
  },

  // --- PARCIAL 2: MÉTODOS CON CINTA, HERÓN, RUMBOS Y AZIMUTES (17 TARJETAS) ---
  {
    id: 'fc-pla-18',
    subjectId: 'topografia',
    moduleIndex: 1,
    category: 'Trazo con Cinta',
    front: '¿Cómo se traza en campo una perpendicular a una recta AB desde un punto exterior P usando solo cinta (Método de la Cuerda)?',
    back: 'Desde el punto exterior P se apoya el origen de la cinta y se traza un arco de radio suficiente que corte a la recta AB en dos puntos: 1 y 2. Con la cinta se mide la distancia entre 1 y 2 y se marca su punto medio M. La recta que une P con M es rigurosamente PERPENDICULAR a la alineación AB (forma 90° exactos).',
    tip: 'Aplica el principio de que la altura de un triángulo isósceles divide la base en dos segmentos iguales y cae a 90°.'
  },
  {
    id: 'fc-pla-19',
    subjectId: 'topografia',
    moduleIndex: 1,
    category: 'Levantamiento con Cinta',
    front: '¿Cuáles son los 3 métodos clásicos para levantar un terreno pequeño utilizando exclusivamente cinta métrica?',
    back: '1. Método de Radiaciones: desde un punto central conveniente se miden las distancias hacia todos los vértices del predio y las distancias perimetrales entre ellos.\n2. Método de Diagonales o Triangulación: se divide el polígono en triángulos trazando todas sus diagonales interiores y midiendo la longitud de todos los lados y diagonales.\n3. Método de Lados de Liga: en cada vértice del polígono se forma un triángulo isósceles auxiliar midiendo distancias fijas (ej. 5 o 10 m) sobre los dos lados del vértice y midiendo la cuerda de unión para calcular el ángulo por trigonometría.',
    tip: 'El método de diagonales es el más seguro y confiable para polígonos de 4 a 6 lados.'
  },
  {
    id: 'fc-pla-20',
    subjectId: 'topografia',
    moduleIndex: 1,
    category: 'Fórmula de Herón',
    front: '¿Cuál es la fórmula de Herón de Alejandría para calcular el área de un triángulo conociendo sus tres lados a, b y c?',
    back: '1. Se calcula el semiperímetro (s):\ns = (a + b + c) / 2\n\n2. Se calcula el área (A):\nÁrea = √[ s · (s - a) · (s - b) · (s - c) ]\n\nPermite obtener el área exacta de cualquier triángulo sin necesidad de medir alturas ni ángulos.',
    formula: 's = (a+b+c)/2 | A = √[s(s-a)(s-b)(s-c)]'
  },
  {
    id: 'fc-pla-21',
    subjectId: 'topografia',
    moduleIndex: 1,
    category: 'Superficie por Triangulación',
    front: '¿Cómo se obtiene la superficie total de un polígono irregular de "n" lados levantado por diagonales?',
    back: '1. El polígono de "n" lados se descompone desde un vértice en (n - 2) triángulos mediante diagonales.\n2. Se aplica la fórmula de Herón a cada triángulo individual.\n3. La superficie total del predio es la suma directa de las áreas de todos los triángulos parciales:\nÁrea_Total = Área(T₁) + Área(T₂) + ... + Área(Tₙ₋₂).',
    tip: 'Siempre dibuja el croquis a escala para verificar que los triángulos ensamblen geométricamente sin solaparse.'
  },
  {
    id: 'fc-pla-22',
    subjectId: 'topografia',
    moduleIndex: 1,
    category: 'Meridianos de Referencia',
    front: '¿Cuáles son los 3 tipos de meridianos o nortes de referencia en topografía?',
    back: '1. Norte Astronómico o Geográfico Verdadero: plano vertical que pasa por el punto de observación y los polos geográficos norte y sur terrestres (definido por observaciones astronómicas al Sol o la Estrella Polar; invariable con el tiempo).\n2. Norte Magnético: dirección que señala la aguja de la brújula orientada hacia el Polo Norte magnético de la Tierra (varía continuamente en el tiempo y el espacio).\n3. Norte Arbitrario: eje imaginario de referencia fijado a voluntad por el topógrafo para un levantamiento local aislado.',
    tip: 'Los planos oficiales de catastro deben estar referenciados al Norte Geográfico o de cuadrícula UTM.'
  },
  {
    id: 'fc-pla-23',
    subjectId: 'topografia',
    moduleIndex: 1,
    category: 'Declinación Magnética',
    front: '¿Qué es la declinación magnética (δ) y cómo se corrige un rumbo magnético a astronómico?',
    back: 'Es el ángulo horizontal formado entre el meridiano astronómico verdadero y el meridiano magnético en un punto y fecha determinados.\n• Declinación Oriental o Este (+): el norte magnético se encuentra al este del norte verdadero.\n• Declinación Occidental u Oeste (-): el norte magnético se encuentra al oeste del norte verdadero.\n\nAzimut_Verdadero = Azimut_Magnético ± Declinación_Magnética',
    tip: 'El valor de la declinación cambia cada año (variación secular anual) debido a la dinámica del núcleo de la Tierra.'
  },
  {
    id: 'fc-pla-24',
    subjectId: 'topografia',
    moduleIndex: 1,
    category: 'Rumbo Topográfico',
    front: '¿Qué es el RUMBO de una línea topográfica y cuál es su rango de valores?',
    back: 'Es el ángulo agudo horizontal (de 0° a 90°) que forma una alineación con el meridiano de referencia (Norte o Sur), medido siempre hacia el Este o hacia el Oeste.\nConsta de 3 partes obligatorias:\n1. Letra del polo de partida: N (Norte) o S (Sur).\n2. Valor angular en grados, minutos y segundos: entre 0° 00\' 00" y 90° 00\' 00".\n3. Letra del cuadrante de destino: E (Este) o W (Oeste).\n\nEjemplos: N 45° 30\' E, S 32° 15\' W, S 78° 00\' E, N 12° 45\' W.',
    tip: '¡NUNCA existe un rumbo mayor a 90°!'
  },
  {
    id: 'fc-pla-25',
    subjectId: 'topografia',
    moduleIndex: 1,
    category: 'Azimut Topográfico',
    front: '¿Qué es el AZIMUT (Az) de una línea topográfica y cuál es su rango de valores?',
    back: 'Es el ángulo horizontal medido SIEMPRE a partir del NORTE (astronómico, magnético o arbitrario) en el sentido de giro de las manecillas del reloj (dextrógiro) hacia la línea visada.\nSu valor varía de 0° 00\' 00" hasta 360° 00\' 00".\nNo requiere letras de cuadrante, solo el valor numérico continuo (ej. Az = 135° 20\' 15").',
    tip: 'El Norte es 0° (o 360°), el Este es 90°, el Sur es 180° y el Oeste es 270°.'
  },
  {
    id: 'fc-pla-26',
    subjectId: 'topografia',
    moduleIndex: 1,
    category: 'Conversión Rumbo - Azimut',
    front: '¿Cuáles son las fórmulas para convertir Rumbo a Azimut en los 4 cuadrantes?',
    back: '• Cuadrante I (NE): Azimut = Rumbo\n  (Ej: Rumbo N 35° E  =>  Az = 35°)\n• Cuadrante II (SE): Azimut = 180° - Rumbo\n  (Ej: Rumbo S 40° E  =>  Az = 180° - 40° = 140°)\n• Cuadrante III (SW): Azimut = 180° + Rumbo\n  (Ej: Rumbo S 25° W  =>  Az = 180° + 25° = 205°)\n• Cuadrante IV (NW): Azimut = 360° - Rumbo\n  (Ej: Rumbo N 60° W  =>  Az = 360° - 60° = 300°)',
    formula: 'I: Az=Rb | II: Az=180°-Rb | III: Az=180°+Rb | IV: Az=360°-Rb'
  },
  {
    id: 'fc-pla-27',
    subjectId: 'topografia',
    moduleIndex: 1,
    category: 'Conversión Azimut - Rumbo',
    front: '¿Cuáles son las fórmulas para convertir Azimut a Rumbo en los 4 cuadrantes?',
    back: '• Si 0° < Az ≤ 90° (Cuadrante I): Rumbo = N (Az) E\n• Si 90° < Az ≤ 180° (Cuadrante II): Rumbo = S (180° - Az) E\n• Si 180° < Az ≤ 270° (Cuadrante III): Rumbo = S (Az - 180°) W\n• Si 270° < Az < 360° (Cuadrante IV): Rumbo = N (360° - Az) W',
    tip: 'Memoriza en qué cuadrante cae según el valor numérico del azimut.'
  },
  {
    id: 'fc-pla-28',
    subjectId: 'topografia',
    moduleIndex: 1,
    category: 'Contrarrumbo y Contraazimut',
    front: '¿Qué es el contrarrumbo y el contraazimut de una línea AB?',
    back: 'Es la orientación de la misma línea pero observada en sentido inverso (de B hacia A):\n• Contrarrumbo: tiene exactamente el MISMO valor angular pero con los cuadrantes opuestos (se cambia N por S y E por W). Ejemplo: Rumbo AB = N 30° E => Contrarrumbo BA = S 30° W.\n• Contraazimut: difiere exactamente en 180° con el azimut directo:\n  - Si Az < 180°: Contraazimut = Az + 180°\n  - Si Az ≥ 180°: Contraazimut = Az - 180°',
    formula: 'Contraazimut = Az ± 180°'
  },
  {
    id: 'fc-pla-29',
    subjectId: 'topografia',
    moduleIndex: 1,
    category: 'Brújula Topográfica',
    front: '¿Por qué la brújula tipo Brunton o de agrimensor tiene las letras E y W invertidas en su carátula?',
    back: 'Porque al girar la caja de la brújula hacia el Este geográfico, la aguja imantada permanece fija apuntando al Norte magnético. Para que la punta norte de la aguja señale directamente en la carátula el cuadrante correcto (Este) sin tener que hacer conversiones mentales, los fabricantes graban la letra E a la izquierda de la caja y la W a la derecha.',
    tip: '¡No es un error de fábrica!: está diseñada deliberadamente para dar lecturas de rumbo directas.'
  },
  {
    id: 'fc-pla-30',
    subjectId: 'topografia',
    moduleIndex: 1,
    category: 'Atracción Local',
    front: '¿Qué es la atracción local en una brújula y cómo se detecta en campo?',
    back: 'Es el desvío anormal de la aguja magnética provocado por la presencia cercana de masas metálicas ferrosas, vías de ferrocarril, tuberías enterradas, mallas ciclónicas o líneas de alta tensión.\nSe detecta midiendo el rumbo directo de la línea (estación 1 a 2) y el contrarrumbo recíproco desde el otro extremo (estación 2 a 1). Si los valores numéricos angulares no coinciden exactamente, existe atracción local en alguna de las estaciones.',
    tip: 'El topógrafo debe despojarse de cinturones con hebillas grandes, celulares y llaves antes de leer la brújula.'
  },
  {
    id: 'fc-pla-31',
    subjectId: 'topografia',
    moduleIndex: 1,
    category: 'Ángulo Interior por Rumbos',
    front: '¿Cómo se calcula el ángulo interior en un vértice conociendo los rumbos de sus dos lados adyacentes?',
    back: 'Se dibuja el diagrama de cuadrantes en el vértice:\n• Si ambos lados caen en el mismo cuadrante: Ángulo = |Rb₁ - Rb₂|\n• Si están en cuadrantes adyacentes que comparten el mismo eje Norte o Sur: Ángulo = Rb₁ + Rb₂\n• Si están en cuadrantes opuestos con el meridiano: se restan o suman según la geometría del diagrama.',
    tip: 'Siempre dibuja los ejes cartesianos N-S y E-W para visualizar visualmente el ángulo antes de operar.'
  },
  {
    id: 'fc-pla-32',
    subjectId: 'topografia',
    moduleIndex: 1,
    category: 'Poligonales con Cinta',
    front: '¿Qué ventajas y limitaciones tiene un levantamiento con cinta y brújula?',
    back: '• Ventajas: equipo ligero, bajo costo, rapidez en el trabajo y no requiere cálculos trigonométricos complejos.\n• Limitaciones: baja precisión angular (la brújula solo aprecia 15\' o 30\'), vulnerable a atracción local en zonas urbanas con cableado y autos, y limitada a predios pequeños o rurales.',
    tip: 'En áreas urbanas consolidadas se sustituye obligatoriamente por teodolito o estación total.'
  },
  {
    id: 'fc-pla-33',
    subjectId: 'topografia',
    moduleIndex: 1,
    category: 'Trazo de Paralelas',
    front: '¿Cómo se traza en campo una recta paralela a una alineación dada AB a una distancia "d"?',
    back: 'Se eligen dos puntos cualesquiera sobre la alineación AB (1 y 2). En cada uno se levanta una perpendicular usando el método 3-4-5. Sobre cada perpendicular se mide exactamente la distancia requerida "d" clavando las estacas 1\' y 2\'. La línea recta que une 1\' y 2\' es rigurosamente paralela a AB a la distancia "d".',
    tip: 'Se utiliza para trazar ejes de banquetas, guarniciones y paramentos de fachada paralelos a la calle.'
  },
  {
    id: 'fc-pla-34',
    subjectId: 'topografia',
    moduleIndex: 1,
    category: 'Deslindes Topográficos',
    front: '¿Qué es un apeo y deslinde topográfico?',
    back: 'Es el procedimiento técnico-legal mediante el cual se identifican, miden y fijan de manera fehaciente en el terreno los linderos y vértices que delimitan un predio de acuerdo con su título de propiedad o escritura pública, colocando mojoneras definitivas en presencia de los colindantes.',
    tip: 'Previene invasiones de predios vecinos y litigios por límites de propiedad.'
  },

  // --- PARCIAL 3: TEODOLITO, POLIGONAL CERRADA, COMPENSACIÓN Y COORDENADAS (16 TARJETAS) ---
  {
    id: 'fc-pla-35',
    subjectId: 'topografia',
    moduleIndex: 2,
    category: 'Teodolito y Tránsito',
    front: '¿Cuáles son las 3 partes principales en las que se divide un teodolito o tránsito?',
    back: '1. Base o Plataforma Nivelante: se atornilla al trípode y contiene los tres tornillos niveladores o calantes y el nivel esférico de burbuja.\n2. Alidada o Parte Giratoria Horizontal: cuerpo giratorio que contiene el limbo o círculo graduado horizontal, el nivel tubular cilíndrico, la plomada óptica y los tornillos de fijación y tangencia horizontal (movimiento general y particular).\n3. Anteojo Topográfico y Círculo Vertical: telescopio giratorio sobre el eje horizontal que contiene la retícula con hilos estadimétricos y el círculo graduado cenital/vertical.',
    tip: 'El tránsito es el anteojo que puede dar vuelta de campana completa (360° verticales).'
  },
  {
    id: 'fc-pla-36',
    subjectId: 'topografia',
    moduleIndex: 2,
    category: 'Puesta en Estación',
    front: '¿Cuáles son los pasos obligatorios para centrar y nivelar un teodolito sobre un punto en el terreno?',
    back: '1. Plantar el trípode centrado a ojo sobre la estaca con la base horizontal y patas firmemente clavadas.\n2. Centrar la plomada óptica sobre el punto de la estaca ajustando las patas telescópicas del trípode.\n3. Nivelar la burbuja del nivel esférico ("ojo de buey") moviendo las patas del trípode.\n4. Nivelación fina con el nivel tubular: colocarlo paralelo a dos tornillos calantes y girarlos en sentidos opuestos simultáneamente; girar la alidada 90° y nivelar con el tercer tornillo; repetir hasta que la burbuja no se mueva al girar 360°.\n5. Aflojar el tornillo de sujeción del trípode y deslizar milimétricamente la base sin girarla hasta clavar el centro de la plomada óptica en el clavo.',
    tip: 'Un teodolito mal nivelado introduce errores angulares sistemáticos en todas las visuales.'
  },
  {
    id: 'fc-pla-37',
    subjectId: 'topografia',
    moduleIndex: 2,
    category: 'Retícula del Anteojo',
    front: '¿Qué son los hilos estadimétricos del anteojo y cuál es su constante taquimétrica K?',
    back: 'Son tres hilos grabados en el diafragma del telescopio: hilo superior (hs), hilo medio (hm) e hilo inferior (hi).\nLa constante estadimétrica K del anteojo es casi universalmente K = 100.\nPermite medir distancias taquimétricas leyendo un estadal vertical:\nDistancia = 100 · (hs - hi) · cos²(α)\n(donde hs - hi es el intervalo de estadal y α el ángulo de inclinación vertical).',
    tip: 'Hilo medio debe ser exactamente el promedio aritmético: hm = (hs + hi) / 2.'
  },
  {
    id: 'fc-pla-38',
    subjectId: 'topografia',
    moduleIndex: 2,
    category: 'Poligonal Cerrada',
    front: '¿Cuál es la fórmula geométrica teórica para la suma de los ángulos interiores de un polígono cerrado de "n" lados?',
    back: 'Suma teórica de ángulos interiores:\nΣ ∠int = (n - 2) · 180°\n\n• Para un cuadrilátero (n = 4): (4 - 2) · 180° = 360° 00\' 00"\n• Para un pentágono (n = 5): (5 - 2) · 180° = 540° 00\' 00"\n• Para un hexágono (n = 6): (6 - 2) · 180° = 720° 00\' 00"',
    formula: 'Σ ∠int = (n - 2) · 180°'
  },
  {
    id: 'fc-pla-39',
    subjectId: 'topografia',
    moduleIndex: 2,
    category: 'Error y Tolerancia Angular',
    front: '¿Cómo se calcula el error angular de cierre (Ea) y la tolerancia angular permitida (Ta)?',
    back: '• Error angular (Ea) = Suma de ángulos medidos en campo - Suma teórica [(n - 2) · 180°]\n• Tolerancia angular (Ta) = a · √n\n  (donde "a" es la aproximación o apreciación del teodolito, típicamente 20" o 1\', y "n" el número de vértices).\n\nCondición de validez: |Ea| ≤ Ta.\nSi el error es menor o igual a la tolerancia, el levantamiento se ACEPTA y se compensa; si es mayor, se RECHAZA y deben repetirse las lecturas en campo.',
    formula: 'Ea = Σ∠medidos - Σ∠teórica | Ta = a · √n'
  },
  {
    id: 'fc-pla-40',
    subjectId: 'topografia',
    moduleIndex: 2,
    category: 'Compensación Angular',
    front: '¿Cómo se compensa equitativamente el error angular entre los vértices de una poligonal?',
    back: 'El factor de corrección por vértice (C) se calcula dividiendo el error angular con signo cambiado entre el número de vértices:\nC = -Ea / n\n\nEste factor C se suma algebraicamente a cada uno de los ángulos interiores medidos en campo. Si el error no es divisible exacto, los segundos sobrantes se asignan a los vértices con lados más cortos (donde la visual tiene mayor margen de incertidumbre).',
    tip: 'Tras la compensación, la suma de los ángulos interiores corregidos debe dar exactamente (n - 2) · 180°.'
  },
  {
    id: 'fc-pla-41',
    subjectId: 'topografia',
    moduleIndex: 2,
    category: 'Cálculo de Azimutes',
    front: '¿Cuál es la fórmula para calcular el azimut del lado siguiente a partir del azimut anterior y el ángulo interior medido?',
    back: 'Azimut_siguiente = Azimut_anterior + 180° ± Ángulo_vértice\n\n• Si la poligonal se recorre en sentido HORARIO (derecha), se RESTA el ángulo interior corregido.\n• Si el resultado supera 360°, se le restan 360°.\n• Si el resultado es negativo, se le suman 360° para mantenerlo en el rango de 0° a 360°.',
    tip: 'El cálculo debe dar una vuelta completa hasta volver al azimut del lado inicial de partida para comprobar el cierre perfecto.'
  },
  {
    id: 'fc-pla-42',
    subjectId: 'topografia',
    moduleIndex: 2,
    category: 'Proyecciones Ortogonales',
    front: '¿Cómo se calculan las proyecciones ortogonales Norte-Sur (Y) y Este-Oeste (X) de un lado topográfico?',
    back: 'Conociendo la longitud horizontal del lado (L) y su azimut (Az):\n• Proyección en Y (Norte-Sur):\n  ΔY = L · cos(Az)\n  (Positiva hacia el Norte, Negativa hacia el Sur)\n\n• Proyección en X (Este-Oeste):\n  ΔX = L · sen(Az)\n  (Positiva hacia el Este, Negativa hacia el Oeste)',
    formula: 'ΔY = L · cos(Az) | ΔX = L · sen(Az)'
  },
  {
    id: 'fc-pla-43',
    subjectId: 'topografia',
    moduleIndex: 2,
    category: 'Error de Cierre Lineal',
    front: '¿Cómo se calcula el error de cierre lineal (Ec) y la precisión de una poligonal cerrada?',
    back: 'En un polígono cerrado la suma de proyecciones debe dar teóricamente cero:\n1. Error en Y: Ey = Σ ΔY\n2. Error en X: Ex = Σ ΔX\n3. Error Lineal Total: Ec = √(Ex² + Ey²)\n\n4. Precisión Relativa = 1 / (Perímetro / Ec)\nEjemplo: si el perímetro es 500 m y Ec = 0.05 m, Precisión = 1 / (500 / 0.05) = 1 / 10,000.',
    formula: 'Ec = √(Ex² + Ey²) | Precisión = 1 / (Perímetro / Ec)'
  },
  {
    id: 'fc-pla-44',
    subjectId: 'topografia',
    moduleIndex: 2,
    category: 'Compensación Lineal',
    front: '¿En qué consiste la Regla de la Brújula (Método de Bowditch) para corregir proyecciones?',
    back: 'Corrige las proyecciones repartiendo los errores Ex y Ey de forma proporcional a la longitud de cada lado respecto al perímetro total:\n\n• Corrección en X del lado "i": Cxᵢ = - (Lᵢ / Perímetro) · Ex\n• Corrección en Y del lado "i": Cyᵢ = - (Lᵢ / Perímetro) · Ey\n\nLas proyecciones corregidas se obtienen sumando algebraicamente la corrección a la proyección calculada:\nΔX_corregida = ΔX + Cx | ΔY_corregida = ΔY + Cy',
    tip: 'Tras aplicar Bowditch, la suma exacta de las proyecciones corregidas es rigurosamente cero.'
  },
  {
    id: 'fc-pla-45',
    subjectId: 'topografia',
    moduleIndex: 2,
    category: 'Coordenadas Cartesiana',
    front: '¿Cómo se calculan las coordenadas absolutas (X, Y) de los vértices a partir de las proyecciones corregidas?',
    back: 'Se parte de las coordenadas conocidas o arbitrarias fijadas para el vértice 1 (ej. X₁ = 1000.00, Y₁ = 1000.00 para evitar números negativos).\nLas coordenadas del siguiente vértice se obtienen sumando su proyección corregida:\nX₂ = X₁ + ΔX_corr₁₋₂\nY₂ = Y₁ + ΔY_corr₁₋₂\n\nAl terminar la vuelta completa se deben obtener exactamente las coordenadas de partida del vértice 1.',
    formula: 'Xᵢ₊₁ = Xᵢ + ΔX_corr | Yᵢ₊₁ = Yᵢ + ΔY_corr'
  },
  {
    id: 'fc-pla-46',
    subjectId: 'topografia',
    moduleIndex: 2,
    category: 'Método de Gauss / Determinantes',
    front: '¿Cómo se calcula la superficie del polígono mediante el método de determinantes (coordenadas cruzadas de Gauss)?',
    back: 'Se disponen las coordenadas (X, Y) en una columna vertical repitiendo el primer vértice al final:\n1. Se multiplican en diagonal cruzada descendente hacia la derecha: Σ(Xᵢ · Yᵢ₊₁)\n2. Se multiplican en diagonal cruzada ascendente hacia la izquierda: Σ(Xᵢ₊₁ · Yᵢ)\n3. Doble área: 2 · Área = | Σ(Xᵢ · Yᵢ₊₁) - Σ(Xᵢ₊₁ · Yᵢ) |\n4. Área = (Doble área) / 2.',
    formula: '2A = | Σ(Xᵢ · Yᵢ₊₁) - Σ(Xᵢ₊₁ · Yᵢ) |'
  },
  {
    id: 'fc-pla-47',
    subjectId: 'topografia',
    moduleIndex: 2,
    category: 'Cuadro de Construcción',
    front: '¿Qué información obligatoria debe contener el Cuadro de Construcción en el plano topográfico?',
    back: 'Es una tabla técnica que resume el polígono geométrico:\n1. Estación y Punto Visado (Lado).\n2. Rumbo o Azimut calculado corregido.\n3. Distancia horizontal del lado (m).\n4. Coordenadas de los vértices (Norte / Y y Este / X).\n5. Vértice identificado (V1, V2, etc.).\n6. Superficie total en metros cuadrados (m²) y hectáreas (ha).\n7. Perímetro total acumulado.',
    tip: 'Es la parte legal más importante del plano para el Registro Público de la Propiedad y Catastro.'
  },
  {
    id: 'fc-pla-48',
    subjectId: 'topografia',
    moduleIndex: 2,
    category: 'Estación Total Electrónica',
    front: '¿Cómo funciona una Estación Total electrónica y qué ventajas ofrece frente al teodolito óptico mecánico?',
    back: 'Integra en un solo instrumento:\n1. Teodolito digital con encoders electrónicos para lectura angular instantánea con precisión de 1" a 5".\n2. Distanciómetro electrónico (EDM) por rayo láser o infrarrojo que mide distancias milimétricas reflejadas en un prisma.\n3. Microprocesador interno que calcula en tiempo real proyecciones, coordenadas X, Y, Z y desniveles.\n4. Colector de datos para descargar la nube de puntos directamente a AutoCAD Civil 3D.',
    tip: 'Elimina errores humanos de lectura de nonios y transcripción manual en libretas.'
  },
  {
    id: 'fc-pla-49',
    subjectId: 'topografia',
    moduleIndex: 2,
    category: 'Sistemas GNSS / GPS',
    front: '¿Qué es el posicionamiento RTK (Real Time Kinematic) con GPS/GNSS en topografía?',
    back: 'Es un método satelital de alta precisión que utiliza dos receptores GNSS:\n• Antena Base: fija sobre un punto de coordenadas conocidas.\n• Antena Móvil (Rover): con la que el operador recorre los vértices del terreno.\nAmbas se comunican por radioenlace UHF o internet celular (NTRIP), calculando correcciones diferenciales en tiempo real para obtener coordenadas geodésicas y UTM con precisión submétrica o milimétrica (1 a 2 cm).',
    tip: 'No requiere intervisibilidad visual entre vértices a diferencia del teodolito óptico.'
  },
  {
    id: 'fc-pla-50',
    subjectId: 'topografia',
    moduleIndex: 2,
    category: 'Fotogrametría con Drones',
    front: '¿Cómo se complementa la planimetría tradicional con el levantamiento mediante drones (RPA)?',
    back: 'El dron realiza vuelos fotogramétricos autónomos capturando cientos de fotografías aéreas de alta resolución traslapadas (mínimo 70-80% de solape).\nMediante software de restitución (como Pix4D o Agisoft Metashape) y el apoyo de PUNTOS DE CONTROL TERRESTRE (GCP) medidos en tierra con GPS RTK, se genera una ortofoto georreferenciada de escala métrica, nubes de puntos densas y el modelo digital del terreno para extraer linderos y curvas de nivel en horas.',
    tip: 'Los puntos de control terrestre son indispensables para garantizar que la ortofoto no tenga distorsiones de escala.'
  }
];

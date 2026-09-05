import { StudyModule } from '../../types';

export const DIBUJO_GUIDES: StudyModule[] = [
  {
    id: 'dib-mod-1',
    title: 'Parcial 1: Normatividad Oficial, Instrumentos, Alfabeto de Líneas, Rotulación y Geometría Básica',
    parcialNumber: 1,
    competence: 'Aplica las normas técnicas oficiales en el manejo de instrumentos de dibujo, jerarquía de líneas, rotulación normalizada y construcciones geométricas euclidianas.',
    topics: [
      {
        id: 'dib-top-1',
        title: 'Historia y Normas Oficiales Mexicanas de Dibujo Técnico (DGN, NMX e ISO)',
        rap: 'RAP 1: Conoce la normatividad mexicana e internacional para formatos de papel, márgenes y solapas de proyectos.',
        summary: 'El dibujo técnico es el lenguaje gráfico universal empleado para comunicar con exactitud milimétrica las especificaciones de diseño y construcción. En México se fundamenta en las Normas Oficiales emitidas por la Dirección General de Normas (DGN) y las normas mexicanas NMX de la serie Z, homologadas con la ISO. Rigen los formatos de papel de la serie A (NMX-Z-065), grosores de líneas (DGN 21-022), escalas (DGN 21-023) y acotaciones (DGN 21-024).',
        keyPoints: [
          'Serie ISO A: el formato base A0 tiene un área de 1.0 m² con dimensiones de 841 mm × 1189 mm (proporción 1:√2). Al cortar por la mitad se obtiene sucesivamente: A1 (594 × 841 mm), A2 (420 × 594 mm), A3 (297 × 420 mm) y A4 (210 × 297 mm).',
          'En el ámbito profesional de la construcción en México es estándar el plano de 90 cm × 60 cm (formato Arch D / pliego comercial) con margen de 10 mm perimetral y 25 mm en el borde de archivo o encuadernación.',
          'Cuadro de datos reglamentario (solapa): ubicado en la esquina inferior derecha. Contiene: logotipo institucional (IPN / CECyT 11), título del proyecto, especialidad técnica (Construcción), nombre del propietario, diseñador y dibujante, clave del plano (ej. A-01 Arquitectónico, E-01 Estructural), escala, fecha, acotaciones y norte geográfico.'
        ],
        constructionApplication: 'Elaboración de planos ejecutivos para trámites de Manifestación de Construcción Tipo A, B o C ante las alcaldías y doblado normalizado a tamaño carta (21 × 28 cm).',
        practiceExercises: [
          {
            prompt: '¿Cuáles son las dimensiones exactas en milímetros del pliego formato A1 y cuántas láminas tamaño A4 caben en su superficie?',
            hint: 'A1 = mitad de A0. A4 = 210 × 297 mm.',
            solution: 'El formato A1 mide 594 mm × 841 mm.\nDado que cada subdivisión duplica la cantidad de hojas: 1 A0 = 2 A1 = 4 A2 = 8 A3 = 16 láminas A4.'
          }
        ]
      },
      {
        id: 'dib-top-2',
        title: 'Instrumentos de Dibujo Técnico y Graduación de Lápices y Minas',
        rap: 'RAP 2: Manipula con precisión regla T, juego de escuadras, compás de bigotera y selecciona minas según dureza.',
        summary: 'La calidad del dibujo tradicional reside en el conocimiento y mantenimiento riguroso de los instrumentos de precisión. Los lápices de grafito se clasifican en una escala normalizada de dureza que abarca tres familias: Gama H (Hard / duros), Gama B (Black / blandos) y las durezas intermedias F y HB.',
        keyPoints: [
          'Gama H (9H al H): minas de arcilla dura que producen trazos grises claros y limpios sin manchar; se emplean para líneas guía, ejes de trazo, líneas de cota y trazos preliminares.',
          'Gama B (B al 9B): minas con alto contenido de grafito puro, blandas y muy oscuras; se usan para dar calidad final a muros cortados, sombras, contornos principales y croquis a mano alzada.',
          'Gama F y HB: dureza media universal; ideales para rotulación técnica, notas generales y simbología.',
          'Juego de escuadras: Escuadra de 45° (isósceles con ángulos 45°, 45°, 90°) y Cartabón de 60°/30° (escaleno con ángulos 30°, 60°, 90°). Al combinarse sobre la regla T horizontal permiten trazar todos los ángulos múltiplos de 15° (15°, 30°, 45°, 60°, 75°, 90°, 105°, 120°, 135°, 150°, 165°).'
        ],
        constructionApplication: 'Trazo manual de taludes de cortes de terreno a 45° o 60° y pendientes de cubiertas a dos aguas a 15° o 30° con regla T y cartabón.',
        practiceExercises: [
          {
            prompt: '¿Cómo se deben disponer las escuadras apoyadas en la regla T para trazar una recta a un ángulo exacto de 105° respecto a la horizontal?',
            hint: 'Suma de ángulos: 45° + 60° = 105°.',
            solution: 'Se apoya la escuadra de 45° sobre la regla T horizontal. Sobre la hipotenusa de la escuadra de 45° se asienta el cateto adyacente al ángulo de 60° del cartabón; el cateto opuesto del cartabón trazará una recta inclinada a 105° respecto a la horizontal (75° respecto al semieje opuesto).'
          }
        ]
      },
      {
        id: 'dib-top-3',
        title: 'Alfabeto y Jerarquía de Líneas Normalizadas (DGN 21-022)',
        rap: 'RAP 3: Aplica la jerarquía de grosores y tipos de línea para expresar planos con profundidad visual inequívoca.',
        summary: 'En dibujo técnico el grosor y tipo de trazo poseen un valor semántico específico regulado por la norma DGN 21-022. La combinación jerárquica de calidades de línea permite distinguir a golpe de vista los elementos seccionados o cortados por el plano de corte de aquellos que se encuentran en elevación, en el piso o por encima del observador.',
        keyPoints: [
          'Línea continua gruesa (0.6 a 0.8 mm, mina 2B/B): contornos y aristas de muros de carga y columnas seccionados en planta o corte.',
          'Línea continua media (0.3 a 0.4 mm, mina HB/H): aristas visibles no cortadas, pretiles, muebles fijos, sardineles y vanos de ventanas.',
          'Línea continua fina (0.1 a 0.2 mm, mina 2H/3H): líneas de cota, líneas de referencia, achurados de materiales y cambios de piso.',
          'Línea discontinua o de trazos (trazos uniformes de 3 mm separados 1 mm, mina H): aristas ocultas bajo tierra (cimentación), tuberías empotradas y proyecciones de losas superiores o trabes en voladizo.',
          'Línea mixta fina (raya larga de 15 mm, espacio 1 mm, punto, espacio 1 mm, mina 2H/3H): ejes estructurales de proyecto y ejes de simetría geométrica.'
        ],
        constructionApplication: 'Representación de planos arquitectónicos donde los muros de carga se jerarquizan con línea continua gruesa (0.6 mm) y las proyecciones de aleros de azotea con línea de trazos segmentada fina (0.2 mm).',
        practiceExercises: [
          {
            prompt: '¿Qué tipo de línea normalizada debe utilizarse para representar una trabe de concreto armado ubicada a 2.60 m de altura en una planta arquitectónica cortada a 1.20 m?',
            hint: 'La trabe se ubica por encima del plano de corte horizontal de la planta.',
            solution: 'Se debe representar con línea discontinua o de trazos finos (segmentada), ya que corresponde a una proyección de un elemento estructural superior oculto por encima del plano de corte.'
          }
        ]
      },
      {
        id: 'dib-top-4',
        title: 'Rotulación Técnica Normalizada y Letra Arquitectónica',
        rap: 'RAP 4: Traza caracteres alfanuméricos normalizados uniformes con legibilidad y proporción geométrica.',
        summary: 'La rotulación técnica es el arte de escribir caracteres alfanuméricos mediante trazos normalizados que impidan cualquier confusión en obra. Se rige por las proporciones de las normas DIN 16 (letra inclinada a 75°) y DIN 17 (letra vertical a 90°). Se basa en el trazado previo de líneas guía paralelas con lápiz duro 3H o 4H para mantener altura constante.',
        keyPoints: [
          'Proporciones: altura estándar de mayúsculas (h) de 2.5 mm, 3.5 mm, 5 mm, 7 mm o 10 mm. El ancho de las letras estándar oscila entre (5/7)h y (6/7)h.',
          'Trazos de un solo golpe con presión uniforme, evitando el repaso de líneas o el uso de tipos de letra caligráficos o manuscritos.',
          'Espaciado: el espacio entre dos palabras debe ser igual a la anchura de la letra "N" o la mitad de la altura h.',
          'En planos arquitectónicos se emplea la "letra de molde arquitectónica", caracterizada por su sencillez, limpieza, trazos firmes y extremos definidos con micropuntos sutiles.'
        ],
        constructionApplication: 'Rotulación de notas de especificaciones técnicas en planos ejecutivos (ej. "Concreto f\'c = 250 kg/cm²", "Mortero cemento-arena 1:4") garantizando lectura inequívoca en obra.',
        practiceExercises: [
          {
            prompt: 'Al rotular títulos de locales en una planta arquitectónica a escala 1:50, ¿qué altura de letra normalizada se recomienda y qué lápiz se debe usar para las líneas guía?',
            hint: 'Los títulos requieren mayor jerarquía que las notas y las líneas guía no deben manchar.',
            solution: 'Se recomienda una altura de 5.0 mm a 6.0 mm para títulos de locales (3.5 mm para cotas y notas secundarias). Las líneas guía deben trazarse con lápiz 3H o 4H muy tenue.'
          }
        ]
      },
      {
        id: 'dib-top-5',
        title: 'Construcciones Geométricas Básicas: Perpendiculares, Mediatrices y Teorema de Tales',
        rap: 'RAP 5: Resuelve problemas geométricos de división de segmentos, perpendiculares y paralelas con regla y compás.',
        summary: 'Las construcciones geométricas son el cimiento del dibujo técnico. Permiten determinar centros, bisectrices, mediatrices y divisiones de segmentos sin necesidad de realizar mediciones numéricas con escalímetro, garantizando exactitud matemática absoluta mediante el compás euclidiano.',
        keyPoints: [
          'Mediatriz de un segmento AB: recta perpendicular que divide al segmento exactamente en dos partes iguales. Se obtiene abriendo el compás con radio mayor a la mitad de AB y trazando dos arcos desde A y dos desde B; la recta que une sus intersecciones es la mediatriz.',
          'Perpendicular por un punto P perteneciente a la recta: método del arco centrado en P que corta la recta en dos puntos equidistantes, desde los cuales se trazan arcos que se intersecan.',
          'Bisectriz de un ángulo: semirrecta que divide un ángulo en dos mitades congruentes.',
          'Teorema de Tales para división de un segmento en n partes iguales: desde el extremo A se traza una semirrecta auxiliar a cualquier ángulo agudo; sobre ella se marcan n divisiones iguales con compás; se une la última división con el extremo B y se trazan paralelas a esta línea por cada punto auxiliar.'
        ],
        constructionApplication: 'Cálculo y trazo gráfico de la huella y peralte de escaleras de concreto dividiendo la altura total de entrepiso en un número entero de escalones mediante el Teorema de Tales.',
        practiceExercises: [
          {
            prompt: 'Se tiene un segmento de longitud arbitraria que representa un tramo de escalera de 2.80 m de altura. Describir cómo dividirlo gráficamente en 16 peraltes idénticos sin usar calculadora.',
            hint: 'Aplica el Teorema de Tales con una semirrecta auxiliar y compás.',
            solution: 'Se traza una semirrecta auxiliar inclinada desde el origen del segmento. Con el compás abierto a una abertura fija arbitraria se marcan 16 pasos consecutivos sobre la semirrecta. Se une el punto 16 con el extremo final del segmento principal. Trazando líneas paralelas a esta recta desde cada una de las 15 marcas auxiliares, el segmento principal queda dividido en exactamente 16 peraltes idénticos (17.5 cm cada uno).'
          }
        ]
      }
    ]
  },
  {
    id: 'dib-mod-2',
    title: 'Parcial 2: Polígonos Regulares, Curvas Técnicas, Acotación y Escalas',
    parcialNumber: 2,
    competence: 'Traza polígonos regulares y curvas de enlace, domina las normas de acotación DGN 21-024 y calcula dimensiones con escalímetro.',
    topics: [
      {
        id: 'dib-top-6',
        title: 'Polígonos Regulares Inscritos y Circunscritos',
        rap: 'RAP 1: Construye polígonos regulares (triángulo, cuadrado, pentágono, hexágono y octágono) inscritos en la circunferencia.',
        summary: 'Un polígono regular es una figura geométrica plana con todos sus lados y ángulos interiores congruentes. Se denominan inscritos cuando todos sus vértices pertenecen a la circunferencia perimetral de radio R.',
        keyPoints: [
          'Hexágono regular inscrito: propiedad notable en la cual la longitud del lado del hexágono es exactamente igual al radio R de la circunferencia circunscrita (L = R). Se construye pinchando el compás con radio R a lo largo de la circunferencia seis veces.',
          'Triángulo equilátero inscrito: se obtiene uniendo vértices alternados del hexágono regular.',
          'Cuadrado y Octágono regular: se trazan dos diámetros perpendiculares entre sí (mediatrices); uniendo sus cuatro extremos se obtiene el cuadrado. Trazando las bisectrices de los cuadrantes se obtienen los ocho vértices del octágono.',
          'Pentágono regular inscrito: método de la mediatriz del radio y cuerda áurea para determinar el lado L₅ del pentágono.'
        ],
        constructionApplication: 'Diseño y trazo de quioscos, glorietas, columnas poligonales y domos geodésicos en plazas públicas y parques urbanos.',
        practiceExercises: [
          {
            prompt: 'Si se dispone de una circunferencia de radio R = 5 cm, ¿cuánto mide el lado del hexágono regular inscrito en ella y cuántos triángulos equiláteros lo conforman?',
            hint: 'El hexágono se descompone en triángulos equiláteros desde el centro.',
            solution: 'El lado del hexágono mide exactamente el radio: L = 5 cm. Está formado por 6 triángulos equiláteros de lado 5 cm con vértices concurrentes en el centro.'
          }
        ]
      },
      {
        id: 'dib-top-7',
        title: 'Enlaces Tangenciales, Acuerdos y Curvas Técnicas (Óvalos y Espirales)',
        rap: 'RAP 2: Traza acuerdos tangentes entre rectas y arcos y dibuja óvalos de cuatro centros.',
        summary: 'En ingeniería y arquitectura, los enlaces o acuerdos son uniones continuas y suaves entre dos o más líneas (rectas o curvas) sin que existan quiebres bruscos. El principio fundamental de tangencia estipula que una recta y una circunferencia son tangentes cuando el radio en el punto de contacto es estrictamente perpendicular a la recta.',
        keyPoints: [
          'Enlace de dos rectas concurrentes mediante un arco de radio R: se trazan paralelas a ambas rectas a una distancia R hacia el interior; el punto de intersección de estas paralelas es el centro O del arco de curvatura.',
          'Puntos de tangencia T₁ y T₂: se determinan bajando perpendiculares desde el centro O hacia cada una de las rectas originales.',
          'Óvalo de cuatro centros: curva cerrada plana y simétrica compuesta por cuatro arcos de circunferencia tangentes dos a dos; se utiliza tradicionalmente para simular el trazado de elipses en planos constructivos.',
          'Espiral de Arquímedes y espiral de cuatro centros: curvas abiertas generadas por puntos que se alejan uniformemente de un polo central girando con velocidad angular constante.'
        ],
        constructionApplication: 'Trazo de radios de giro en guarniciones de banquetas en esquinas viales (radio mínimo reglamentario R = 3.0 m para autos y R = 6.0 a 9.0 m para camiones en CDMX) y arcos de carpanel en pórticos.',
        practiceExercises: [
          {
            prompt: 'Explicar el procedimiento para enlazar dos rectas perpendiculares (a 90°) mediante una curva de radio R = 4 metros en el trazo de una guarnición de esquina.',
            hint: 'Traza paralelas a distancia R de cada guarnición.',
            solution: '1) Se traza una paralela a 4 m de la primera guarnición hacia el interior; 2) Se traza una paralela a 4 m de la segunda guarnición; 3) Su intersección marca el centro de giro O; 4) Desde O se bajan perpendiculares a las dos guarniciones para fijar los puntos de tangencia T₁ y T₂; 5) Con centro en O y radio de 4 m se traza el arco de cuarto de círculo uniendo T₁ con T₂ de forma continua.'
          }
        ]
      },
      {
        id: 'dib-top-8',
        title: 'Sistemas y Normas de Acotación Técnica (DGN 21-024)',
        rap: 'RAP 3: Aplica las reglas normalizadas de acotación en plantas, alzados y detalles constructivos.',
        summary: 'Acotar es la operación de consignar en un plano las dimensiones métricas reales del objeto mediante líneas, números, símbolos y terminaciones normalizadas. Conforme a la norma DGN 21-024, las cifras de cota siempre indican la medida real en obra del elemento independientemente de la escala a la que esté dibujado.',
        keyPoints: [
          'Componentes de una cota: Línea de cota (paralela a la arista a medir, separada 8 a 10 mm del dibujo); Líneas auxiliares de cota o de referencia (perpendiculares a la línea de cota, inician 1 a 2 mm separadas del objeto y sobresalen 2 mm de la línea de cota); Cifra de cota (número colocado encima o en medio de la línea); Extremos de cota (flechas normalizadas con relación 1:3 o trazos arquitectónicos inclinados a 45°).',
          'Acotación en serie o en cadena: cotas sucesivas alineadas sobre una misma directriz recta.',
          'Acotación en paralelo: cotas escalonadas que comparten un mismo plano de referencia de origen.',
          'Reglas de oro de acotación: 1) Las líneas de cota nunca deben cruzarse entre sí ni con líneas del dibujo; 2) No utilizar aristas ni ejes como líneas de cota; 3) Las cotas generales deben colocarse siempre por fuera de las cotas parciales.'
        ],
        constructionApplication: 'Disposición de la triple línea de cotas reglamentaria en fachadas y plantas: primera línea a paños de vanos y macizos; segunda línea a ejes estructurales; tercera línea a paño exterior total de predio.',
        practiceExercises: [
          {
            prompt: 'En un plano arquitectónico a escala 1:50, un vano de ventana mide 3.0 cm en el papel. ¿Qué número debe escribirse en la cifra de cota?',
            hint: 'La cifra de cota siempre expresa la medida real en el edificio.',
            solution: 'A escala 1:50, 1 cm de dibujo = 0.50 m reales. Por tanto: 3.0 cm × 0.50 m/cm = 1.50 m. La cifra debe ser: 1.50 (o 150 si el plano está acotado en centímetros).'
          }
        ]
      },
      {
        id: 'dib-top-9',
        title: 'Escalas Gráficas, Numéricas y Manejo del Escalímetro (DGN 21-023)',
        rap: 'RAP 4: Utiliza el escalímetro triangular y calcula escalas de reducción y ampliación en proyectos civiles.',
        summary: 'La escala es la relación constante de proporcionalidad que existe entre las dimensiones representadas en el dibujo en el papel (D) y las dimensiones reales del objeto en el terreno (R): Escala = Dibujo / Realidad (E = D / R). El escalímetro es una regla de sección prismática triangular que contiene 6 escalas graduadas directamente en metros.',
        keyPoints: [
          'Escala Natural (1:1): D = R.',
          'Escalas de Reducción comunes en construcción: 1:20 y 1:25 (detalles constructivos de uniones de vigas, armados de zapatas y castillos); 1:50 (plantas, cortes y fachadas arquitectónicas estándar); 1:100 (anteproyectos y planos de permisos urbanos); 1:200 y 1:500 (conjuntos de viviendas y lotificaciones); 1:1000 a 1:5000 (planos topográficos de deslinde catastral).',
          'Fórmula de cálculo: Dimensión en dibujo = Dimensión real / Denominador de escala (D = R / Den).'
        ],
        formulas: [
          {
            name: 'Ecuación Fundamental de Escala',
            formula: 'Escala = Dibujo / Realidad = D / R',
            explanation: 'Relación matemática donde ambas dimensiones deben expresarse en la misma unidad antes de operar.'
          }
        ],
        constructionApplication: 'Medición directa de claros libres entre columnas y anchos de pasillos reglamentarios en planos impresos mediante el escalímetro 1:50.',
        practiceExercises: [
          {
            prompt: 'Un muro perimetral de colindancia mide 18.0 metros en el terreno real. ¿Cuántos centímetros medirá en una lámina si se dibuja a escala 1:75?',
            hint: 'D = R / 75. Convierte 18 m a cm (1,800 cm) y divide entre 75.',
            solution: 'D = 1,800 cm / 75 = 24.0 cm en el papel.'
          }
        ]
      },
      {
        id: 'dib-top-10',
        title: 'Simbología Arquitectónica y Expresión Gráfica de Planos',
        rap: 'RAP 5: Interpreta y dibuja símbolos normalizados de puertas, ventanas, niveles y materiales de construcción.',
        summary: 'La simbología arquitectónica es el conjunto de convenciones gráficas estandarizadas que representan elementos físicos, instalaciones y cotas de nivel en los planos de edificación sin saturar de texto la lámina.',
        keyPoints: [
          'Puertas: se representan abiertas a 90° con una línea de arco que indica el sentido de abatimiento del giro.',
          'Ventanas: en planta se representan con cuatro líneas paralelas (dos gruesas de muros y dos finas intermedias que simbolizan el antepecho y el cristal).',
          'Nivel de Piso Terminado (N.P.T.): símbolo circular dividido en cuadrantes alternados blanco y negro con la cota de nivel respecto a la banqueta (ej. N.P.T. +0.15 m, N.P.T. +2.85 m).',
          'Líneas de corte: línea mixta gruesa que atraviesa la planta con flechas que indican hacia dónde se proyecta la mirada del corte (Corte A-A\').'
        ],
        constructionApplication: 'Verificación del abatimiento reglamentario de puertas de salida de emergencia hacia el exterior de acuerdo con el Reglamento de Construcciones de la CDMX.',
        practiceExercises: [
          {
            prompt: '¿Qué significa la indicación "N.P.T. +2.70 m" en un plano de planta alta?',
            hint: 'N.P.T. es Nivel de Piso Terminado relativo al nivel 0.00 de referencia de banqueta.',
            solution: 'Indica que el piso acabado de esa losa se encuentra exactamente 2 metros con 70 centímetros por encima del nivel de referencia de la banqueta pública (N.B. ±0.00).'
          }
        ]
      }
    ]
  },
  {
    id: 'dib-mod-3',
    title: 'Parcial 3: Proyecciones Diédricas, Axonometría, Isométricos y Cortes Arquitectónicos',
    parcialNumber: 3,
    competence: 'Representa volúmenes arquitectónicos en proyecciones ortogonales diédricas, perspectivas axonométricas y planos de corte estructural longitudinal y transversal.',
    topics: [
      {
        id: 'dib-top-11',
        title: 'Sistemas de Proyección Ortogonal Diédrica (Sistema Americano ASA vs Europeo DIN)',
        rap: 'RAP 1: Obtiene y relaciona las vistas diédricas normalizadas de volúmenes espaciales.',
        summary: 'La proyección ortogonal proyecta un objeto tridimensional sobre planos perpendiculares entre sí mediante rayos proyectantes paralelos perpendiculares a los planos de proyección. Se divide en dos sistemas normativos internacionales: el Sistema Americano (ISO A / Tercer Cuadrante) y el Sistema Europeo (ISO E / Primer Cuadrante).',
        keyPoints: [
          'Sistema Americano (ISO A / ASA): el plano de proyección se ubica entre el observador y el objeto. La vista superior (planta) se sitúa ARRIBA de la vista frontal (alzado), y la vista lateral izquierda a la IZQUIERDA.',
          'Sistema Europeo (ISO E / DIN): el objeto se encuentra entre el observador y el plano. La vista superior se sitúa ABAJO de la vista frontal, y la vista lateral izquierda a la DERECHA.',
          'En planos arquitectónicos en México se utiliza el concepto de correspondencia diédrica diáfana entre plantas, fachadas y cortes.'
        ],
        constructionApplication: 'Alineación de plantas arquitectónicas y fachadas para verificar alturas de pretiles y ventanas sin discrepancias dimensionales.',
        practiceExercises: [
          {
            prompt: 'En el Sistema Americano (ISO A), ¿en qué posición relativa respecto al alzado frontal se dibuja la vista lateral derecha?',
            hint: 'El observador mira por la derecha y el plano está situado a la derecha.',
            solution: 'Se dibuja a la DERECHA de la vista frontal o alzado, alineada horizontalmente por líneas de correspondencia.'
          }
        ]
      },
      {
        id: 'dib-top-12',
        title: 'Perspectiva Isométrica y Método del Rombo de Cuatro Centros',
        rap: 'RAP 2: Traza perspectivas isométricas normalizadas y círculos isométricos sin reducción de escala.',
        summary: 'La perspectiva isométrica es una proyección axonométrica ortogonal donde los tres ejes del espacio tridimensional (X, Y, Z) forman ángulos iguales de 120° entre sí. En el papel, el eje vertical Y forma 90° con la horizontal y los ejes X y Z se inclinan exactamente 30° respecto a la línea horizontal base. Todas las medidas sobre estos ejes se trazan a escala real 1:1 sin reducción.',
        keyPoints: [
          'Ejes isométricos: tres ejes separados a 120°. Inclinación con cartabón: 30° a la derecha, 30° a la izquierda y 90° vertical.',
          'Líneas isométricas: líneas paralelas a los ejes isométricos; son las únicas que pueden medirse directamente con escalímetro.',
          'Líneas no isométricas: aristas oblicuas que deben trazarse mediante coordenadas de sus puntos extremos.',
          'Elipse isométrica (método del rombo de cuatro centros): las circunferencias proyectadas en caras isométricas se deforman en elipses. Se traza un rombo isométrico con lados iguales al diámetro del círculo; desde los vértices de ángulo obtuso (120°) se bajan perpendiculares a los puntos medios de los lados opuestos para fijar los 4 centros de curvatura.'
        ],
        constructionApplication: 'Elaboración reglamentaria de planos isométricos de redes de tuberías hidráulicas, sanitarias y de gas con sus conexiones (codos, tes, tuercas unión) para aprobación oficial.',
        practiceExercises: [
          {
            prompt: '¿Por qué en un dibujo isométrico las dimensiones pueden medirse directamente con escalímetro a lo largo de los tres ejes?',
            hint: 'Simetría de la proyección respecto al plano del cuadro.',
            solution: 'Porque los tres ejes del espacio están igualmente inclinados respecto al plano de proyección (ángulos de 120°), sufriendo idéntico factor de deformación trigonométrica que convencionalmente se estandariza a escala real 1:1.'
          }
        ]
      },
      {
        id: 'dib-top-13',
        title: 'Perspectivas Axonométricas Oblicuas: Caballera y Militar',
        rap: 'RAP 3: Dibuja perspectivas caballeras y militares aplicando coeficientes de reducción al eje de fuga.',
        summary: 'Las perspectivas oblicuas se generan cuando los rayos de proyección inciden oblicuamente sobre el plano del cuadro. Permiten conservar una de las caras del objeto en su verdadera forma geométrica sin deformación angular.',
        keyPoints: [
          'Perspectiva Caballera: el plano frontal (X-Y) se dibuja ortogonal a 90° en verdadera magnitud geométrica. El eje de profundidad Z se inclina a 45° (o 30°/60°) aplicando obligatoriamente un coeficiente de reducción de ½ (0.5) para neutralizar la distorsión óptica de alargamiento.',
          'Perspectiva Militar: el plano horizontal de planta (X-Z) se dibuja en verdadera magnitud geométrica ortogonal a 90°. El eje de altura Y se proyecta verticalmente a 90°.',
          'Diferencia clave: la caballera privilegia la fachada del edificio, mientras que la militar privilegia la planta y techumbres.'
        ],
        constructionApplication: 'Representación rápida de detalles tridimensionales de zapatas aisladas y ensambles de carpintería en cimbras de madera.',
        practiceExercises: [
          {
            prompt: 'Si un bloque de concreto mide 40 cm de profundidad en la realidad, ¿cuánto medirá la línea de fuga en el papel en una perspectiva caballera con ángulo de 45° a escala 1:10?',
            hint: 'Aplica el coeficiente de reducción de 0.5 al eje de profundidad.',
            solution: 'Medida reducida = 40 cm × 0.5 = 20 cm reales.\nA escala 1:10 en el papel = 20 cm / 10 = 2.0 cm.'
          }
        ]
      },
      {
        id: 'dib-top-14',
        title: 'Cortes y Secciones Arquitectónicas Longitudinales y Transversales',
        rap: 'RAP 4: Traza planos de corte vertical mostrando la constitución interna de la edificación.',
        summary: 'Un corte o sección es la representación gráfica de un edificio imaginariamente seccionado por un plano de corte vertical imaginario para revelar su estructura interna, alturas de entrepiso, cimientos y losas. Se clasifican en Corte Longitudinal (a lo largo del eje de mayor dimensión del edificio) y Corte Transversal (a lo ancho, perpendicular al longitudinal).',
        keyPoints: [
          'Identificación en planta: se traza con línea mixta fina punteada con extremos en línea continua muy gruesa provista de flechas de dirección de mirada y letras identificadoras (ej. Corte A-A\').',
          'El plano de corte debe pasar estratégicamente por las zonas más informativas del proyecto: escaleras, baños (instalaciones sanitarias) y vanos de ventanas.',
          'Corte por fachada: detalle vertical a escala 1:20 o 1:25 que va desde la cimentación hasta el pretil de azotea indicando todos los estratos de materiales y cotas de nivel acumuladas.'
        ],
        constructionApplication: 'Verificación de la altura libre reglamentaria mínima de 2.30 m entre piso terminado y plafón de acuerdo con el Reglamento de Construcciones de la CDMX.',
        practiceExercises: [
          {
            prompt: '¿Por qué es obligatorio que al menos uno de los cortes arquitectónicos de un proyecto pase por la zona de la escalera?',
            hint: 'La escalera define la circulación vertical y el libramiento de cabeza.',
            solution: 'Para verificar la altura de los peraltes y huellas, el claro libre mínimo de paso de cabeza (mínimo 2.10 m sin golpearse) y el anclaje estructural de las rampas de concreto en las trabes de descanso.'
          }
        ]
      },
      {
        id: 'dib-top-15',
        title: 'Achurados y Representación Normalizada de Materiales en Corte',
        rap: 'RAP 5: Aplica texturas y achurados convencionales normalizados para distinguir materiales en planos ejecutivos.',
        summary: 'Para comunicar con claridad qué material compone cada elemento seccionado en un corte, las normas técnicas establecen códigos gráficos de achurados y texturas convencionales trazados con líneas finas 2H.',
        keyPoints: [
          'Concreto armado: achurado con triángulos negros rellenos, puntos finos y líneas diagonales continuas paralelas a 45°.',
          'Mampostería de tabique: achurado de líneas paralelas continuas finas a 45° espaciadas uniformemente a 2 o 3 mm.',
          'Piedra braza de cimentación: contornos poligonales irregulares que simulan rocas acomodadas con mortero.',
          'Tierra compactada y terreno natural: grupos de tres rayas cortas paralelas alternadas en ángulo ortogonal.',
          'Madera en corte transversal: anillos de crecimiento concéntricos y grietas radiales; en corte longitudinal vetas ondeadas paralelas.'
        ],
        constructionApplication: 'Identificación inmediata en planos estructurales entre zapatas de concreto armado y cimientos de mampostería de piedra braza.',
        practiceExercises: [
          {
            prompt: 'Describir la simbología gráfica reglamentaria para representar un muro de tabique rojo recocido en una sección de corte por fachada.',
            hint: 'Líneas paralelas a 45° con espaciado constante.',
            solution: 'Se representa con líneas continuas finas paralelas inclinadas a 45° respecto a la horizontal, separadas de 2 a 3 mm con perfecta uniformidad (achurado tipo ANSI31).'
          }
        ]
      }
    ]
  }
];

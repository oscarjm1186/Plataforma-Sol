import { StudyModule } from '../../types';

export const FISICA_GUIDES: StudyModule[] = [
  {
    id: 'fis-mod-1',
    title: 'Parcial 1: Sistemas de Unidades, Mediciones, Teoría de Errores, Álgebra Vectorial y Estática',
    parcialNumber: 1,
    competence: 'Aplica procesos de medición y conversión en magnitudes físicas fundamentales y derivadas, cuantificando la incertidumbre experimental y resolviendo analíticamente sistemas de fuerzas en equilibrio traslacional.',
    topics: [
      {
        id: 'fis-top-1',
        title: 'Magnitudes Físicas, Sistema Internacional (SI) y Conversión de Unidades',
        rap: 'RAP 1: Diferencia magnitudes fundamentales y derivadas y ejecuta conversiones dimensionales precisas con factores unitarios.',
        summary: 'Una magnitud física es toda propiedad medible de un cuerpo. El Sistema Internacional (SI / MKS) se basa en 7 unidades fundamentales: longitud (m), masa (kg), tiempo (s), corriente eléctrica (A), temperatura (K), cantidad de sustancia (mol) e intensidad luminosa (cd). Las magnitudes derivadas resultan de la combinación algebraica de las fundamentales (ej. fuerza en Newtons: N = kg·m/s², presión en Pascales: Pa = N/m², densidad: kg/m³).',
        keyPoints: [
          'Sistemas de unidades: Sistema Internacional (SI/MKS), Sistema Cegesimal (CGS) y Sistema Inglés / Técnico (pie, pulgada, yarda, libra, slug).',
          'Factores de conversión indispensables en construcción: 1 in = 2.54 cm; 1 ft = 30.48 cm; 1 yd = 0.9144 m; 1 lb = 0.4536 kg; 1 galón US = 3.785 L; 1 m³ = 1000 L = 35.315 ft³; 1 kgf/cm² = 98.066 kPa = 14.223 psi; 1 ton (métrica) = 1000 kgf = 9.81 kN.',
          'El método de factor de conversión unitario multiplica la cantidad original por fracciones cuyo valor numérico y dimensional equivale a 1.'
        ],
        formulas: [
          {
            name: 'Factor Unitario de Conversión',
            formula: 'Q_final = Q_inicial × (Unidad_deseada / Unidad_origen)',
            explanation: 'Multiplicación sucesiva por razones de equivalencia unitaria para transformar magnitudes sin alterar su valor físico.'
          }
        ],
        constructionApplication: 'Conversión de dosificaciones de concreto hidráulico, cálculo de volúmenes de excavación en metros cúbicos y verificación de planos estructurales especificados en unidades del sistema inglés (pulgadas, pies y psi).',
        practiceExercises: [
          {
            prompt: 'Convertir la resistencia especificada a compresión del concreto f\'c = 250 kgf/cm² a Megapascales (MPa). (Considerar 1 kgf = 9.80665 N).',
            hint: '1 kgf/cm² = 9.80665 N / (10⁻⁴ m²) = 98,066.5 Pa = 0.09807 MPa.',
            solution: 'f\'c = 250 × 0.0980665 MPa = 24.52 MPa (nominalmente estandarizado en la práctica como 25 MPa).'
          }
        ]
      },
      {
        id: 'fis-top-2',
        title: 'Teoría de Errores, Cifras Significativas e Instrumentos de Medición',
        rap: 'RAP 2: Evalúa cuantitativamente la incertidumbre experimental y emplea vernier y micrómetro en el control de calidad.',
        summary: 'Toda medición física experimental contiene una incertidumbre. Los errores se clasifican en Sistemáticos (calibración instrumental defectuosa, efectos térmicos, error de paralaje del observador) y Accidentales o Aleatorios (vibraciones imperceptibles, fluctuaciones ambientales). La media aritmética representa el valor más probable de una serie de mediciones repetidas.',
        keyPoints: [
          'Media aritmética: x̄ = (Σ xᵢ) / n, donde n es el número total de lecturas independientes.',
          'Error absoluto: Ea = |xᵢ - x̄|, conserva las mismas unidades de la magnitud medida.',
          'Error relativo: Er = Ea / x̄ (adimensional, indica la calidad relativa de la medición).',
          'Error porcentual: Ep = Er × 100%. En ensayos de laboratorio de construcción se tolera usualmente un Ep ≤ 2% a 5%.',
          'Vernier o pie de rey: instrumento provisto de una regla principal y un nonio que permite apreciar fracciones de 0.05 mm o 0.02 mm.',
          'Micrómetro o tornillo de Palmer: mecanismo de avance micrométrico que mide espesores con precisión de hasta 0.01 mm o 0.001 mm.'
        ],
        formulas: [
          {
            name: 'Error Porcentual',
            formula: 'Ep = (|x_medido - x_patrón| / x_patrón) × 100%',
            explanation: 'Expresa el porcentaje de desviación respecto al valor nominal o promedio aceptado.'
          }
        ],
        constructionApplication: 'Verificación del calibre y diámetro nominal de varillas de acero corrugado grado 42 (No. 3 a No. 8) y control de tolerancias dimensionales en prefabricados de concreto.',
        practiceExercises: [
          {
            prompt: 'Al medir el diámetro de una varilla de refuerzo No. 4 (nominal 12.70 mm) con un calibrador vernier se obtiene 12.85 mm. Calcular el error absoluto y el error porcentual.',
            hint: 'Ea = |12.85 - 12.70| mm; Ep = (Ea / 12.70) × 100%.',
            solution: 'Ea = |12.85 - 12.70| = 0.15 mm.\nEp = (0.15 / 12.70) × 100% = 1.18% de error, lo cual entra en la tolerancia admisible de laminación de acero.'
          }
        ]
      },
      {
        id: 'fis-top-3',
        title: 'Notación Científica, Prefijos Métricos y Análisis Dimensional',
        rap: 'RAP 3: Aplica notación en potencias de 10 y el principio de homogeneidad dimensional en fórmulas físicas.',
        summary: 'La notación científica expresa cantidades extremadamente grandes o pequeñas en la forma N × 10ⁿ, donde 1 ≤ N < 10 y n es un entero. El análisis dimensional verifica la consistencia lógica de las fórmulas mediante las dimensiones fundamentales [L] longitud, [M] masa y [T] tiempo. El principio de Fourier de homogeneidad dimensional exige que ambos miembros de una ecuación tengan idénticas dimensiones.',
        keyPoints: [
          'Prefijos múltiplos: kilo (k = 10³), mega (M = 10⁶), giga (G = 10⁹), tera (T = 10¹²).',
          'Prefijos submúltiplos: centi (c = 10⁻²), mili (m = 10⁻³), micro (μ = 10⁻⁶), nano (n = 10⁻⁹).',
          'Dimensiones de magnitudes clave: Velocidad [L T⁻¹], Aceleración [L T⁻²], Fuerza [M L T⁻²], Presión/Esfuerzo [M L⁻¹ T⁻²], Trabajo y Energía [M L² T⁻²].',
          'Cifras significativas: en multiplicaciones y divisiones, el resultado no puede tener más cifras significativas que el factor con menor número de ellas.'
        ],
        formulas: [
          {
            name: 'Ecuación Dimensional de Fuerza',
            formula: '[F] = [M] · [L] · [T]⁻²',
            explanation: 'Dimensión en el Sistema Internacional equivalente al Newton (kg · m / s²).'
          }
        ],
        constructionApplication: 'Cálculo de módulos de elasticidad de materiales estructurales (acero E = 2 × 10⁵ MPa = 2 × 10¹¹ Pa) y verificación dimensional de fórmulas empíricas hidráulicas y geotécnicas.',
        practiceExercises: [
          {
            prompt: 'Comprobar si la fórmula de energía cinética Ec = ½ · m · v² es dimensionalmente homogénea.',
            hint: '[m] = M; [v] = L T⁻¹.',
            solution: '[Ec] = [m] · [v]² = [M] · [L T⁻¹]² = [M] · [L² T⁻²].\nLa unidad es kg · m² / s² = Joule (J), que coincide con la dimensión de trabajo mecánico [F · d] = [M L T⁻²][L] = [M L² T⁻²]. Por tanto, es homogénea.'
          }
        ]
      },
      {
        id: 'fis-top-4',
        title: 'Álgebra Vectorial: Magnitudes Escalares, Métodos Gráficos y Analíticos',
        rap: 'RAP 4: Descompone vectores coplanares y calcula la fuerza resultante por métodos gráficos y trigonométricos.',
        summary: 'Una magnitud escalar queda completamente definida por su módulo numérico y unidad (ej. masa, volumen, tiempo, densidad). Una magnitud vectorial requiere módulo, dirección (línea de acción o ángulo con respecto al eje de referencia), sentido (punta de flecha) y punto de aplicación. Los métodos gráficos comprenden la regla del paralelogramo (para 2 vectores) y el polígono (para n vectores concurrentes).',
        keyPoints: [
          'Componentes rectangulares en 2D: Fx = F · cos(θ), Fy = F · sen(θ), donde θ es el ángulo medido en sentido antihorario desde el eje +X.',
          'Vector Resultante: R = ΣF = (ΣFx) i + (ΣFy) j.',
          'Módulo de la resultante: |R| = √[ (ΣFx)² + (ΣFy)² ].',
          'Ángulo de dirección: θ_R = arctan( |ΣFy / ΣFx| ), ajustando el ángulo al cuadrante según los signos de ΣFx y ΣFy.',
          'Fuerza Equilibrante (E): vector con el mismo módulo y dirección que la resultante, pero con sentido opuesto (desfase de 180°): E = -R.'
        ],
        formulas: [
          {
            name: 'Módulo de la Resultante Vectorial',
            formula: 'R = √[ (ΣFx)² + (ΣFy)² ]',
            explanation: 'Magnitud de la fuerza neta equivalente que reemplaza a todo el sistema concurrente.'
          },
          {
            name: 'Dirección del Vector Resultante',
            formula: 'θ = arctan( ΣFy / ΣFx )',
            explanation: 'Ángulo de inclinación medido respecto a la horizontal.'
          }
        ],
        constructionApplication: 'Cálculo de fuerzas concurrentes en armaduras de cubiertas metálicas, tirantes de retenidas para postes y grúas de torre en obras de edificación.',
        practiceExercises: [
          {
            prompt: 'Tres fuerzas coplanares actúan sobre una armadura: F₁ = 400 N a 0°, F₂ = 300 N a 90° y F₃ = 500 N a 180°. Determinar la resultante analítica (módulo y dirección).',
            hint: 'ΣFx = F₁cos(0°) + F₂cos(90°) + F₃cos(180°); ΣFy = F₁sen(0°) + F₂sen(90°) + F₃sen(180°).',
            solution: 'ΣFx = 400(1) + 300(0) + 500(-1) = 400 - 500 = -100 N.\nΣFy = 400(0) + 300(1) + 500(0) = 300 N.\n|R| = √[(-100)² + (300)²] = √[10,000 + 90,000] = √100,000 ≈ 316.23 N.\nÁngulo base = arctan(300 / 100) = 71.57°. Al estar en el 2° cuadrante (-X, +Y): θ = 180° - 71.57° = 108.43°.'
          }
        ]
      },
      {
        id: 'fis-top-5',
        title: 'Primera Condición de Equilibrio y Diagrama de Cuerpo Libre (DCL)',
        rap: 'RAP 5: Modela sistemas mecánicos en reposo mediante el Diagrama de Cuerpo Libre y resuelve ecuaciones de equilibrio traslacional.',
        summary: 'La Primera Condición de Equilibrio establece que un cuerpo puntual o partícula se encuentra en equilibrio traslacional si la fuerza neta que actúa sobre él es cero: ΣF = 0. En dos dimensiones, esto equivale a dos ecuaciones escalares independientes: ΣFx = 0 y ΣFy = 0. El Diagrama de Cuerpo Libre (DCL) es la representación gráfica aislada del cuerpo mostrando todas las fuerzas externas activas (pesos, cargas aplicadas) y reactivas (tensiones, normales, reacciones de apoyo).',
        keyPoints: [
          'Primera Ley de Newton (Inercia): un cuerpo preserva su estado de reposo o movimiento rectilíneo uniforme si la fuerza resultante neta es nula.',
          'Fuerza normal (N): fuerza de contacto perpendicular que ejerce una superficie de apoyo sobre el cuerpo.',
          'Fuerza de tensión (T): fuerza que transmiten cables, cuerdas o tirantes, dirigida siempre hacia afuera del cuerpo que se aísla.',
          'Teorema de Lamy: aplicable a sistemas de tres fuerzas coplanares concurrentes en equilibrio: F₁ / sen(α) = F₂ / sen(β) = F₃ / sen(γ), donde cada ángulo es el opuesto a la respectiva fuerza.'
        ],
        formulas: [
          {
            name: 'Primera Condición de Equilibrio (2D)',
            formula: 'Σ Fx = 0  ,   Σ Fy = 0',
            explanation: 'Condición necesaria y suficiente para garantizar reposo o velocidad constante en traslación.'
          }
        ],
        constructionApplication: 'Determinación de esfuerzos de tensión en eslingas de izaje con grúas telescópicas y diseño de cables de venteo para cimbras elevadas y andamios.',
        practiceExercises: [
          {
            prompt: 'Un cubo con mezcla de concreto que pesa 1,200 N cuelga en el vértice de dos cables simétricos, cada uno inclinado a 45° respecto a la horizontal. Calcular la tensión T en cada cable.',
            hint: 'Por simetría T₁ = T₂ = T. ΣFy = 2 · T · sen(45°) - 1,200 = 0.',
            solution: '2 · T · sen(45°) = 1,200 N => 2 · T · (0.7071) = 1,200 => 1.4142 · T = 1,200 => T ≈ 848.53 N en cada cable.'
          }
        ]
      }
    ]
  },
  {
    id: 'fis-mod-2',
    title: 'Parcial 2: Momento de una Fuerza, Equilibrio del Cuerpo Rígido, Centroides y Cinemática 1D y 2D',
    parcialNumber: 2,
    competence: 'Calcula momentos de fuerza, determina reacciones en apoyos de vigas, ubica centroides en secciones compuestas y modela cinemáticamente movimientos rectilíneos y curvilíneos.',
    topics: [
      {
        id: 'fis-top-6',
        title: 'Momento de una Fuerza (Torque) y Teorema de Varignon',
        rap: 'RAP 1: Calcula el efecto rotacional de fuerzas respecto a ejes fijos y aplica el principio de superposición de momentos.',
        summary: 'El momento o torque M de una fuerza respecto a un punto pivote O mide la tendencia de la fuerza a provocar una rotación. Matemáticamente se define como M = F · d, donde d es el brazo de palanca (la distancia estrictamente perpendicular desde el centro de giro hasta la línea de acción de la fuerza). Convencionalmente, los giros antihorarios se consideran positivos (+) y los giros horarios negativos (-).',
        keyPoints: [
          'Magnitud del momento: M = F · d = F · r · sen(φ), donde φ es el ángulo entre el vector de posición r y la fuerza F.',
          'Teorema de Varignon: el momento producido por la fuerza resultante de un sistema de fuerzas concurrentes respecto a un punto dado es igual a la suma algebraica de los momentos generados por cada fuerza individual respecto a ese mismo punto: M_R = Σ Mᵢ.',
          'Par de fuerzas (Cupla): par de fuerzas de igual magnitud, líneas de acción paralelas y sentidos contrarios separadas por una distancia d. El momento de un par es constante e independiente del punto donde se calcule: M_par = F · d.'
        ],
        formulas: [
          {
            name: 'Momento Escalar de una Fuerza',
            formula: 'M_O = ± (F · d)',
            explanation: 'Producto de la fuerza por el brazo de palanca perpendicular; el signo define el sentido de giro.'
          }
        ],
        constructionApplication: 'Cálculo del momento de volteo en muros de contención de tierras por empuje hidrostático y diseño de brazos articulados en retroexcavadoras.',
        practiceExercises: [
          {
            prompt: 'Un operario aplica una fuerza de 250 N al extremo de una llave de 40 cm de longitud en un ángulo de 90°. ¿Qué momento produce sobre la tuerca?',
            hint: 'd = 40 cm = 0.40 m. M = F · d.',
            solution: 'M = 250 N × 0.40 m = 100 N·m en sentido de apriete (horario).'
          }
        ]
      },
      {
        id: 'fis-top-7',
        title: 'Segunda Condición de Equilibrio y Reacciones en Vigas',
        rap: 'RAP 2: Resuelve vigas isostáticas simplemente apoyadas y en voladizo determinando las reacciones en los apoyos.',
        summary: 'Para que un cuerpo rígido extendido se encuentre en equilibrio estático completo deben satisfacerse simultáneamente las dos condiciones de equilibrio: ΣFx = 0, ΣFy = 0 (equilibrio traslacional) y ΣM_O = 0 (equilibrio rotacional respecto a cualquier punto O). En vigas isostáticas, se tienen apoyos fijos (restringen traslación horizontal y vertical: Rx, Ry) y apoyos móviles o de rodillos (restringen únicamente la traslación perpendicular a la superficie de apoyo: Ry).',
        keyPoints: [
          'Viga simplemente apoyada con carga puntual: apoyo A (articulado fijo) y apoyo B (rodillo).',
          'Viga con carga uniformemente distribuida w (N/m): la carga distribuida se modela como una fuerza puntual concentrada equivalente W = w · L ubicada en el centro de gravedad del claro (L/2).',
          'Viga en voladizo (empotramiento): restringe traslación vertical (Ry), traslación horizontal (Rx) y rotación (Momento de empotramiento M_emp).'
        ],
        formulas: [
          {
            name: 'Segunda Condición de Equilibrio',
            formula: 'Σ M_O = 0',
            explanation: 'Garantiza ausencia de aceleración angular o rotación del cuerpo rígido.'
          },
          {
            name: 'Carga Concentrada Equivalente',
            formula: 'W_eq = w · L   (aplicada en x = L / 2)',
            explanation: 'Fuerza resultante de una carga distribuida rectangular de longitud L e intensidad w.'
          }
        ],
        constructionApplication: 'Cálculo de cargas y dimensionamiento de trabes principales de concreto armado, zapatas aisladas y vigas madrinas de cimbra.',
        practiceExercises: [
          {
            prompt: 'Una viga de 6 m simplemente apoyada en los extremos A y B soporta una carga puntual de 18 kN a 2 m del apoyo A. Determinar las reacciones en los apoyos A y B.',
            hint: 'Aplica ΣM_A = 0 para despejar R_B, luego ΣFy = 0 para R_A.',
            solution: 'ΣM_A = 0 => -(18 kN)(2 m) + R_B(6 m) = 0 => 6 · R_B = 36 => R_B = 6 kN hacia arriba.\nΣFy = 0 => R_A + R_B - 18 = 0 => R_A + 6 - 18 = 0 => R_A = 12 kN hacia arriba.'
          }
        ]
      },
      {
        id: 'fis-top-8',
        title: 'Centroides y Centro de Gravedad de Secciones Compuestas',
        rap: 'RAP 3: Localiza el centroide y eje neutro de figuras geométricas compuestas empleando momentos estáticos de primer orden.',
        summary: 'El centroide es el centro geométrico de una figura plana. Para una sección transversal compuesta por múltiples figuras geométricas simples (rectángulos, triángulos, círculos), las coordenadas del centroide (X̄, Ȳ) se determinan como la media ponderada de las coordenadas centroidales de sus partes, utilizando las áreas como factores de ponderación. En elementos sometidos a flexión, el eje neutro de la viga coincide con su eje centroidal.',
        keyPoints: [
          'Centroides estándar: Rectángulo (b/2, h/2); Triángulo rectángulo (b/3, h/3 respecto al ángulo recto); Semicírculo de radio r (ȳ = 4r / (3π) ≈ 0.424 r respecto a la base).',
          'Momento estático de área de primer orden: Qx = Σ(Aᵢ · ȳᵢ), Qy = Σ(Aᵢ · x̄ᵢ).',
          'Huecos y perforaciones: las áreas de huecos o vacíos se restan aritméticamente (se consideran con área negativa).',
          'El centroide se ubica siempre sobre cualquier eje de simetría de la sección.'
        ],
        formulas: [
          {
            name: 'Coordenadas del Centroide Compuesto',
            formula: 'X̄ = (Σ Aᵢ · x̄ᵢ) / (Σ Aᵢ)  ,   Ȳ = (Σ Aᵢ · ȳᵢ) / (Σ Aᵢ)',
            explanation: 'Cociente entre el momento estático total de área y el área total de la sección.'
          }
        ],
        constructionApplication: 'Determinación de la línea neutra y módulo de sección en trabes de concreto pretensado, secciones en T y perfiles laminados de acero estructural IPR y canal CPS.',
        practiceExercises: [
          {
            prompt: 'Calcular la altura Ȳ del centroide desde la base para una viga en forma de T invertida con base inferior de 30 cm de ancho por 10 cm de espesor y alma vertical central de 10 cm de ancho por 20 cm de altura.',
            hint: 'A₁ (base) = 30×10 = 300 cm², y₁ = 5 cm. A₂ (alma) = 10×20 = 200 cm², y₂ = 10 + (20/2) = 20 cm.',
            solution: 'Área total = 300 + 200 = 500 cm².\nΣ(A · y) = (300)(5) + (200)(20) = 1,500 + 4,000 = 5,500 cm³.\nȲ = 5,500 / 500 = 11.0 cm desde la base inferior.'
          }
        ]
      },
      {
        id: 'fis-top-9',
        title: 'Cinemática en 1D: MRU, MRUA, Caída Libre y Tiro Vertical',
        rap: 'RAP 4: Modela el movimiento rectilíneo uniforme y acelerado de cuerpos bajo la acción de la aceleración gravitacional.',
        summary: 'La cinemática describe la posición, velocidad y aceleración en el tiempo sin considerar las causas que lo provocan. En el Movimiento Rectilíneo Uniforme (MRU), la velocidad permanece constante y la aceleración es nula (d = v · t). En el Movimiento Rectilíneo Uniformemente Acelerado (MRUA), la aceleración es constante. La caída libre y el tiro vertical son casos particulares de MRUA donde la aceleración es la gravedad (g = 9.81 m/s² dirigida verticalmente hacia abajo).',
        keyPoints: [
          'Ecuaciones maestras del MRUA: 1) v_f = v_0 + a·t ; 2) d = v_0·t + ½·a·t² ; 3) v_f² = v_0² + 2·a·d ; 4) d = [(v_0 + v_f) / 2] · t.',
          'Caída libre (se suelta desde el reposo, v_0 = 0): h = ½·g·t² ; v_f = g·t = √(2gh).',
          'Tiro vertical hacia arriba: en la altura máxima la velocidad vertical instantánea es cero (v = 0). Altura máxima: H_max = v_0² / (2g); Tiempo de subida: t_s = v_0 / g; Tiempo de vuelo total: t_v = 2 · t_s.'
        ],
        formulas: [
          {
            name: 'Ecuación de Posición en MRUA',
            formula: 'd = v₀ · t + ½ · a · t²',
            explanation: 'Posición recorrida en función del tiempo transcurrido con aceleración constante.'
          },
          {
            name: 'Velocidad Final en Función del Desplazamiento',
            formula: 'v_f² = v₀² + 2 · a · d',
            explanation: 'Relación cinemática independiente del tiempo.'
          }
        ],
        constructionApplication: 'Cálculo de tiempos y velocidades en polipastos y malacates de obra, y análisis de impacto de caída de herramientas o escombros en excavaciones profundas.',
        practiceExercises: [
          {
            prompt: 'Se deja caer una herramienta desde una torre de andamio a 19.62 m de altura. Calcular el tiempo que tarda en tocar el suelo y la velocidad de impacto. (g = 9.81 m/s²).',
            hint: 't = √(2h / g); v = g · t.',
            solution: 't = √[(2 × 19.62) / 9.81] = √4 = 2.0 segundos.\nv = (9.81 m/s²)(2.0 s) = 19.62 m/s (equivalente a 70.63 km/h).'
          }
        ]
      },
      {
        id: 'fis-top-10',
        title: 'Cinemática en 2D: Movimiento Parabólico Horizontal y Oblicuo',
        rap: 'RAP 5: Resuelve trayectorias bidimensionales de proyectiles calculando alcance máximo, altura máxima y tiempos de vuelo.',
        summary: 'El tiro parabólico es el movimiento bidimensional de un proyectil lanzado en un campo gravitatorio uniforme. Conforme al principio de independencia de movimientos de Galileo, se compone de dos movimientos ortogonales simultáneos: MRU en el eje horizontal X (v_x = v₀ · cos θ = constante, a_x = 0) y MRUA en el eje vertical Y (v_y = v₀ · sen θ - g · t con aceleración vertical -g).',
        keyPoints: [
          'Componentes iniciales: v₀x = v₀ · cos(θ) ,  v₀y = v₀ · sen(θ).',
          'Ecuación de trayectoria (parábola): y = x · tan(θ) - [g / (2 · v₀² · cos² θ)] · x².',
          'Tiempo de subida: t_sub = (v₀ · sen θ) / g.',
          'Altura máxima: H_max = (v₀ · sen θ)² / (2 · g).',
          'Tiempo total de vuelo: T_v = 2 · t_sub = (2 · v₀ · sen θ) / g.',
          'Alcance horizontal máximo: R = (v₀² · sen 2θ) / g. El alcance es óptimo para un ángulo de elevación de 45°.'
        ],
        formulas: [
          {
            name: 'Alcance Horizontal Máximo',
            formula: 'R = (v₀² · sen(2θ)) / g',
            explanation: 'Distancia horizontal total recorrida por el proyectil retornando a la cota de lanzamiento.'
          },
          {
            name: 'Altura Máxima en Tiro Oblicuo',
            formula: 'H_max = (v₀ · sen θ)² / (2 · g)',
            explanation: 'Cota vertical más alta donde la componente de velocidad vertical vy se anula instantáneamente.'
          }
        ],
        constructionApplication: 'Cálculo del radio de tiro en bombeo de concreto premezclado a presión hacia losas superiores y diseño de descargas por gravedad de material granular por bandas transportadoras.',
        practiceExercises: [
          {
            prompt: 'Una manguera de bombeo proyecta una mezcla fluida con v₀ = 14 m/s a un ángulo de 45° respecto al piso horizontal. Calcular el alcance horizontal y la altura máxima. (g = 9.81 m/s²).',
            hint: 'sen(2 × 45°) = sen(90°) = 1; sen(45°) = 0.7071.',
            solution: 'R = [14² × 1] / 9.81 = 196 / 9.81 ≈ 19.98 metros.\nH_max = [14 × 0.7071]² / (2 × 9.81) = 9.90² / 19.62 = 98 / 19.62 ≈ 5.0 metros.'
          }
        ]
      }
    ]
  },
  {
    id: 'fis-mod-3',
    title: 'Parcial 3: Dinámica, Fricción, Trabajo, Energía y Potencia Mecánica',
    parcialNumber: 3,
    competence: 'Aplica las Leyes de Newton, analiza coeficientes de fricción y resuelve problemas de conservación de la energía y potencia en maquinaria e ingeniería civil.',
    topics: [
      {
        id: 'fis-top-11',
        title: 'Dinámica: Leyes del Movimiento de Newton',
        rap: 'RAP 1: Aplica la 2ª Ley de Newton (F = m·a) en sistemas mecánicos con masas aceleradas.',
        summary: 'La dinámica estudia el movimiento de los cuerpos atendiendo a las fuerzas que lo producen. Isaac Newton formuló tres leyes fundamentales: 1ª Ley (Inercia: resistencia de un cuerpo al cambio de su estado cinemático), 2ª Ley (Ley Fundamental de la Dinámica: la aceleración de un cuerpo es directamente proporcional a la fuerza neta aplicada e inversamente proporcional a su masa, ΣF = m · a) y 3ª Ley (Acción y Reacción: a toda fuerza de acción le corresponde una de reacción de igual magnitud, misma dirección y sentido contrario en cuerpos distintos).',
        keyPoints: [
          'Ecuación fundamental: ΣF = m · a (F en Newtons, m en kg, a en m/s²).',
          'Diferencia entre masa y peso: la masa m es la medida cuantitativa de la inercia (kg, invariante), mientras que el peso W es la fuerza de atracción gravitatoria W = m · g (Newtons, variable con g).',
          'Fuerza normal en planos horizontales: N = W = m · g; en planos inclinados con ángulo α: N = W · cos(α).',
          'Diagramas de cuerpo libre en sistemas dinámicos: se orienta uno de los ejes coordenados en la dirección de la aceleración del sistema.'
        ],
        formulas: [
          {
            name: 'Segunda Ley de Newton',
            formula: 'Σ F = m · a',
            explanation: 'Relación vectorial que vincula la fuerza neta resultante con la aceleración de la masa.'
          },
          {
            name: 'Peso de un Cuerpo',
            formula: 'W = m · g',
            explanation: 'Fuerza gravitatoria ejercida por la Tierra sobre un cuerpo de masa m.'
          }
        ],
        constructionApplication: 'Cálculo de fuerzas de tracción en cables de elevadores de obra y análisis de aceleraciones sísmicas sobre masas de edificios según las NTC-CDMX.',
        practiceExercises: [
          {
            prompt: 'Un montacargas de obra de masa m = 800 kg sube con una aceleración constante a = 1.5 m/s². Calcular la tensión en el cable de acero. (g = 9.81 m/s²).',
            hint: 'ΣFy = T - W = m · a => T = m(g + a).',
            solution: 'W = 800 × 9.81 = 7,848 N.\nT = 800 × (9.81 + 1.5) = 800 × 11.31 = 9,048 N (aproximadamente 9.05 kN).'
          }
        ]
      },
      {
        id: 'fis-top-12',
        title: 'Fuerzas de Fricción: Estática, Cinética y Planos Inclinados',
        rap: 'RAP 2: Modela coeficientes de fricción estático y cinético en superficies horizontales e inclinadas.',
        summary: 'La fricción es la fuerza tangencial que se opone al movimiento relativo entre dos superficies en contacto, originada por la rugosidad e interacción microscópica de sus asperezas. La fricción estática f_s actúa antes del deslizamiento y alcanza un valor límite máximo f_s_max = μ_s · N. Una vez iniciado el movimiento relativo, actúa la fricción cinética f_k = μ_k · N. En todos los materiales, el coeficiente estático es mayor que el cinético (μ_s > μ_k).',
        keyPoints: [
          'Fuerza de fricción estática máxima: f_s_max = μ_s · N.',
          'Fuerza de fricción cinética: f_k = μ_k · N.',
          'Ángulo de reposo en plano inclinado (ángulo de fricción natural): ángulo límite α en el cual el bloque está a punto de deslizar sin empuje externo: tan(α) = μ_s.',
          'En planos inclinados con ángulo α respecto a la horizontal: componente del peso paralela al plano W_x = m · g · sen(α); componente perpendicular W_y = m · g · cos(α) = N.'
        ],
        formulas: [
          {
            name: 'Fricción Estática Máxima',
            formula: 'f_s_max = μ_s · N',
            explanation: 'Fuerza umbral que debe superarse para poner un objeto en movimiento relativo.'
          },
          {
            name: 'Fricción Cinética',
            formula: 'f_k = μ_k · N',
            explanation: 'Fuerza de oposición constante que frena al objeto mientras se encuentra deslizando.'
          }
        ],
        constructionApplication: 'Cálculo del ángulo de talud natural en cortes y excavaciones de tierras (mecánica de suelos) y diseño de juntas de fricción con pernos de alta resistencia en acero.',
        practiceExercises: [
          {
            prompt: 'Un cajón con herramientas de 50 kg descansa sobre un piso de concreto horizontal (μ_s = 0.60, μ_k = 0.40). ¿Qué fuerza horizontal se requiere para iniciar el movimiento y cuál para mantenerlo a velocidad constante? (g = 9.81 m/s²).',
            hint: 'N = m · g = 50 × 9.81 = 490.5 N. F_inicio = f_s_max; F_mantenimiento = f_k.',
            solution: 'F_inicio = μ_s · N = 0.60 × 490.5 N = 294.3 N.\nF_mantenimiento = μ_k · N = 0.40 × 490.5 N = 196.2 N.'
          }
        ]
      },
      {
        id: 'fis-top-13',
        title: 'Trabajo Mecánico y Trabajo Neto',
        rap: 'RAP 3: Cuantifica el trabajo mecánico realizado por fuerzas constantes y variables y calcula el trabajo neto total.',
        summary: 'En física, el trabajo mecánico W es la energía transferida por una fuerza al provocar el desplazamiento de un cuerpo. Para una fuerza constante F que actúa a lo largo de una trayectoria recta de longitud d formando un ángulo θ con el vector desplazamiento, el trabajo es W = F · d · cos(θ). La unidad en el SI es el Joule (1 J = 1 N · m). El trabajo es positivo si la fuerza favorece el movimiento (θ < 90°), negativo si se opone (90° < θ ≤ 180°, como la fricción) y nulo si la fuerza es perpendicular al desplazamiento (θ = 90°, como el peso o la normal en un piso horizontal).',
        keyPoints: [
          'Trabajo de fuerza constante: W = F · d · cos(θ).',
          'Trabajo neto o resultante: W_neto = Σ Wᵢ = (Σ F_paralela) · d.',
          'Si la fuerza es variable en magnitud, el trabajo equivale al área bajo la curva en una gráfica Fuerza vs Desplazamiento (W = ∫ F dx).',
          'Trabajo de la fuerza de gravedad: W_g = - m · g · Δh cuando se eleva una carga (trabajo resistente), y W_g = + m · g · Δh cuando desciende.'
        ],
        formulas: [
          {
            name: 'Trabajo Mecánico de Fuerza Constante',
            formula: 'W = F · d · cos(θ)',
            explanation: 'Producto escalar de los vectores fuerza y desplazamiento.'
          }
        ],
        constructionApplication: 'Evaluación del consumo energético en malacates de tiro para subir materiales a pisos superiores y dimensionamiento de empuje de palas mecánicas.',
        practiceExercises: [
          {
            prompt: 'Una grúa eleva verticalmente una tarima de tabiques de 1,500 kg a una altura de 12 metros a velocidad constante. Calcular el trabajo realizado por la grúa. (g = 9.81 m/s²).',
            hint: 'F = m · g; cos(0°) = 1.',
            solution: 'F = 1,500 kg × 9.81 m/s² = 14,715 N.\nW = (14,715 N)(12 m) cos(0°) = 176,580 Joules = 176.58 kJ.'
          }
        ]
      },
      {
        id: 'fis-top-14',
        title: 'Energía Mecánica y Principio de Conservación de la Energía',
        rap: 'RAP 4: Aplica el Teorema del Trabajo y la Energía Cinética y el Principio de Conservación de la Energía Mecánica.',
        summary: 'La energía es la capacidad de un sistema para realizar trabajo. La energía mecánica total es la suma de la energía cinética (asociada a la velocidad: Ec = ½ · m · v²) y la energía potencial gravitacional (asociada a la altura: Ep = m · g · h). El Teorema Trabajo-Energía Cinética estipula que el trabajo neto realizado sobre un cuerpo equivale al cambio en su energía cinética: W_neto = ΔEc = Ec_final - Ec_inicial. En ausencia de fuerzas disipativas (como la fricción), la energía mecánica total se conserva: Em = Ec + Ep = constante.',
        keyPoints: [
          'Energía Cinética: Ec = ½ · m · v² (Joules).',
          'Energía Potencial Gravitacional: Ep = m · g · h (Joules).',
          'Principio de Conservación de la Energía Mecánica: Em₁ = Em₂ => ½ · m · v₁² + m · g · h₁ = ½ · m · v₂² + m · g · h₂.',
          'Sistemas con fricción: Em₁ = Em₂ + |W_friccion|, donde la energía mecánica disipada se transforma irreversiblemente en calor térmico.'
        ],
        formulas: [
          {
            name: 'Energía Mecánica Total',
            formula: 'Em = ½ · m · v² + m · g · h',
            explanation: 'Suma de la energía cinética traslacional y la energía potencial gravitatoria.'
          },
          {
            name: 'Teorema Trabajo - Energía Cinética',
            formula: 'W_neto = ΔEc = ½ · m · v_f² - ½ · m · v₀²',
            explanation: 'El trabajo realizado por todas las fuerzas aplicadas altera la velocidad del cuerpo.'
          }
        ],
        constructionApplication: 'Cálculo de energía de impacto en martillos neumáticos y pilotes hincados por gravedad con martinete de caída libre.',
        practiceExercises: [
          {
            prompt: 'El martinete de una hincadora de pilotes de masa 2,000 kg se deja caer libremente desde una altura de 3.0 metros sobre la cabeza de un pilote. ¿Con qué velocidad e impacto de energía cinética golpea el pilote?',
            hint: 'Por conservación de energía: Ec_impacto = Ep_inicial = m · g · h; v = √(2gh).',
            solution: 'Ec = (2,000 kg)(9.81 m/s²)(3.0 m) = 58,860 Joules = 58.86 kJ.\nv = √[2 × 9.81 × 3] = √58.86 ≈ 7.67 m/s.'
          }
        ]
      },
      {
        id: 'fis-top-15',
        title: 'Potencia Mecánica y Eficiencia en Maquinaria de Construcción',
        rap: 'RAP 5: Calcula la potencia mecánica, realiza conversiones a caballos de fuerza (HP) y determina la eficiencia energética.',
        summary: 'La potencia mecánica P mide la rapidez o tasa con la que se efectúa un trabajo mecánico: P = W / t. Para un cuerpo que se mueve a velocidad constante v bajo una fuerza tractora F, la potencia instantánea es P = F · v. En el SI la potencia se mide en Watts (1 W = 1 J/s). En el ámbito industrial y automotriz se emplean los Caballos de Fuerza ingleses (HP: Horsepower, 1 HP = 746 W) y el Caballo de Vapor métrico (CV, 1 CV = 735.5 W). La eficiencia mecánica η cuantifica la fracción de potencia suministrada que realmente se convierte en trabajo útil.',
        keyPoints: [
          'Potencia media: P = W / t (Watts).',
          'Potencia en función de la velocidad: P = F · v · cos(θ).',
          'Equivalencias indispensables: 1 kW = 1,000 W = 1.341 HP; 1 HP = 746 W; 1 HP = 550 ft·lb/s.',
          'Eficiencia o rendimiento mecánico: η = (P_útil / P_suministrada) × 100%. Dado que siempre existen pérdidas por fricción y calor, η es estrictamente menor al 100%.'
        ],
        formulas: [
          {
            name: 'Potencia Mecánica',
            formula: 'P = W / t = F · v',
            explanation: 'Cociente entre el trabajo realizado y el intervalo temporal requerido.'
          },
          {
            name: 'Eficiencia Mecánica',
            formula: 'η = (P_útil / P_entrada) × 100%',
            explanation: 'Razón porcentual entre la potencia útil entregada y la potencia total consumida.'
          }
        ],
        constructionApplication: 'Selección de motores eléctricos y de combustión interna para revolvedoras de concreto de 1 y 2 sacos, bombas de achique y grúas pluma.',
        practiceExercises: [
          {
            prompt: 'El motor eléctrico de un montacargas de obra levanta una carga de 1,200 kg a una altura de 15 metros en 20 segundos a velocidad constante. Si el motor tiene una eficiencia de 80%, ¿qué potencia nominal en HP debe consumir el motor? (g = 9.81 m/s²).',
            hint: 'W = m · g · h; P_útil = W / t; P_entrada = P_útil / 0.80; 1 HP = 746 W.',
            solution: 'W = (1,200)(9.81)(15) = 176,580 J.\nP_útil = 176,580 J / 20 s = 8,829 W.\nP_entrada = 8,829 W / 0.80 = 11,036.25 W.\nEn HP = 11,036.25 / 746 ≈ 14.79 HP (comercialmente se especifica un motor de 15 HP).'
          }
        ]
      }
    ]
  }
];

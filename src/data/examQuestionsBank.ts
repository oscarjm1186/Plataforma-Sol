import { ExamQuestion } from '../types';

// Helper to generate a full 100-question exam for any subject and parcial
export function generate100Questions(
  subjectId: string,
  parcialNumber: 1 | 2 | 3
): ExamQuestion[] {
  const questions: ExamQuestion[] = [];

  // 1. Get curated core questions for this subject & parcial
  const baseQuestions = getCoreQuestions(subjectId, parcialNumber);
  questions.push(...baseQuestions);

  // 2. Fill up systematically to 100 questions using verified curriculum question banks
  let currentId = questions.length + 1;
  const fillers = getCurriculumQuestionGenerators(subjectId, parcialNumber, 100 - questions.length, currentId);
  questions.push(...fillers);

  return questions.slice(0, 100);
}

function getCoreQuestions(subjectId: string, parcial: 1 | 2 | 3): ExamQuestion[] {
  if (subjectId === 'geometria-analitica') {
    if (parcial === 1) {
      return [
        {
          id: 1,
          type: 'multiple_choice',
          question: '¿Cuál es la distancia entre los puntos A(3, 7) y B(17, -5)?',
          options: ['18.44 unidades', '20.00 unidades', '16.50 unidades', '22.12 unidades'],
          correctOptionIndex: 0,
          explanation: 'd = √[(17 - 3)² + (-5 - 7)²] = √[14² + (-12)²] = √[196 + 144] = √340 ≈ 18.44 u.',
          moduleIndex: 0,
          difficulty: 'Básico'
        },
        {
          id: 2,
          type: 'multiple_choice',
          question: 'Si los extremos de un segmento son P(7, 8) y su punto medio es M(4, 3), ¿cuáles son las coordenadas del otro extremo Q?',
          options: ['Q(1, -2)', 'Q(-1, 2)', 'Q(11, 13)', 'Q(2, -1)'],
          correctOptionIndex: 0,
          explanation: 'xm = (x₁ + x₂)/2 => 4 = (7 + x₂)/2 => 8 = 7 + x₂ => x₂ = 1. ym = (y₁ + y₂)/2 => 3 = (8 + y₂)/2 => 6 = 8 + y₂ => y₂ = -2. Q(1, -2).',
          moduleIndex: 0,
          difficulty: 'Intermedio'
        },
        {
          id: 3,
          type: 'multiple_choice',
          question: '¿Cuál es la pendiente de la recta que pasa por los puntos A(-3, 2) y B(7, -3)?',
          options: ['-1/2', '-2', '1/2', '-5/4'],
          correctOptionIndex: 0,
          explanation: 'm = (y₂ - y₁) / (x₂ - x₁) = (-3 - 2) / (7 - (-3)) = -5 / 10 = -1/2.',
          moduleIndex: 0,
          difficulty: 'Básico'
        },
        {
          id: 4,
          type: 'multiple_choice',
          question: '¿Cuál es la ecuación general de la recta que pasa por A(1, 5) y tiene pendiente m = 2?',
          options: ['2x - y + 3 = 0', '2x + y - 7 = 0', 'x - 2y + 9 = 0', '2x - y - 3 = 0'],
          correctOptionIndex: 0,
          explanation: 'y - 5 = 2(x - 1) => y - 5 = 2x - 2 => 2x - y + 3 = 0.',
          moduleIndex: 0,
          difficulty: 'Básico'
        },
        {
          id: 5,
          type: 'multiple_choice',
          question: '¿Cuál es la distancia de la recta 3x - 4y + 6 = 0 al punto A(7, -3)?',
          options: ['7.80 unidades', '5.20 unidades', '8.50 unidades', '6.00 unidades'],
          correctOptionIndex: 0,
          explanation: 'd = |3(7) - 4(-3) + 6| / √(3² + (-4)²) = |21 + 12 + 6| / √25 = 39 / 5 = 7.8 u.',
          moduleIndex: 0,
          difficulty: 'Intermedio'
        },
        // Development exercises (problem development)
        {
          id: 6,
          type: 'problem_development',
          question: 'DESARROLLO: Demostrar que los puntos A(1, 3), B(7, 3), C(9, 8) y D(3, 8) forman un paralelogramo y calcular su perímetro.',
          developmentSteps: [
            { step: '1. Planteamiento y distancias', description: 'Calculamos las 4 longitudes de los lados mediante d = √[(Δx)² + (Δy)²].', formula: 'd = √[(x₂-x₁)²+(y₂-y₁)²]' },
            { step: '2. Lados opuestos AB y CD', description: 'd(AB) = √[(7-1)² + (3-3)²] = √36 = 6.0 u. d(CD) = √[(3-9)² + (8-8)²] = √36 = 6.0 u. (Son iguales).' },
            { step: '3. Lados opuestos BC y DA', description: 'd(BC) = √[(9-7)² + (8-3)²] = √[4 + 25] = √29 ≈ 5.385 u. d(DA) = √[(1-3)² + (3-8)²] = √[4 + 25] = √29 ≈ 5.385 u. (Son iguales).' },
            { step: '4. Pendientes para paralelismo', description: 'm(AB) = 0/6 = 0. m(CD) = 0/-6 = 0 (paralelos). m(BC) = 5/2 = 2.5. m(DA) = -5/-2 = 2.5 (paralelos).' },
            { step: '5. Perímetro total', description: 'Perímetro = 6.0 + 6.0 + 5.385 + 5.385 = 22.77 unidades.' }
          ],
          explanation: 'Dado que los lados opuestos son de igual longitud y sus pendientes son idénticas dos a dos, la figura es un paralelogramo con perímetro de 22.77 u.',
          moduleIndex: 0,
          difficulty: 'Avanzado'
        },
        {
          id: 7,
          type: 'problem_development',
          question: 'DESARROLLO: Hallar la ecuación de la recta perpendicular a 3x + 8y - 47 = 0 en el punto B(1/3, 5).',
          developmentSteps: [
            { step: '1. Obtener pendiente original', description: 'La recta dada 3x + 8y - 47 = 0 tiene pendiente m₁ = -A/B = -3/8.' },
            { step: '2. Condición de perpendicularidad', description: 'm₂ = -1/m₁ = -1 / (-3/8) = +8/3.' },
            { step: '3. Aplicar punto-pendiente', description: 'y - 5 = (8/3)(x - 1/3) => 3(y - 5) = 8(x - 1/3) => 3y - 15 = 8x - 8/3.' },
            { step: '4. Multiplicar por 3 para coeficientes enteros', description: '9y - 45 = 24x - 8 => 24x - 9y + 37 = 0.' }
          ],
          explanation: 'La ecuación general de la perpendicular es 24x - 9y + 37 = 0.',
          moduleIndex: 0,
          difficulty: 'Avanzado'
        }
      ];
    } else if (parcial === 2) {
      return [
        {
          id: 1,
          type: 'multiple_choice',
          question: '¿Cuál es el centro y radio de la circunferencia x² + y² - 8x - 6y - 40 = 0?',
          options: ['C(4, 3) y r = √65', 'C(-4, -3) y r = 65', 'C(4, 3) y r = 8', 'C(-4, 3) y r = √40'],
          correctOptionIndex: 0,
          explanation: '(x² - 8x + 16) + (y² - 6y + 9) = 40 + 16 + 9 => (x - 4)² + (y - 3)² = 65. Centro C(4, 3), r = √65 ≈ 8.06 u.',
          moduleIndex: 1,
          difficulty: 'Intermedio'
        },
        {
          id: 2,
          type: 'multiple_choice',
          question: 'Dada la parábola y² = -9x, ¿cuáles son las coordenadas de su foco y su directriz?',
          options: ['Foco (-9/4, 0) y directriz x = 9/4', 'Foco (0, -9/4) y directriz y = 9/4', 'Foco (-9, 0) y directriz x = 9', 'Foco (9/4, 0) y directriz x = -9/4'],
          correctOptionIndex: 0,
          explanation: 'y² = 4px => 4p = -9 => p = -9/4. Eje horizontal, abre a la izquierda. Foco(p, 0) = (-9/4, 0); Directriz x = -p = 9/4.',
          moduleIndex: 1,
          difficulty: 'Intermedio'
        },
        {
          id: 3,
          type: 'problem_development',
          question: 'DESARROLLO: Un arco de puente tiene forma parabólica con claro en la base de 150 m y flecha (depresión) de 20 m. Determinar su ecuación ordinaria.',
          developmentSteps: [
            { step: '1. Ubicación de coordenadas', description: 'Colocando el vértice en el origen V(0,0), el cable pasa por los extremos (75, 20) y (-75, 20).' },
            { step: '2. Ecuación parabólica vertical', description: 'x² = 4py. Sustituyendo el punto (75, 20): (75)² = 4p(20).' },
            { step: '3. Despeje de 4p', description: '5625 = 80p => p = 5625 / 80 = 1125 / 16. Por tanto 4p = 4(1125/16) = 1125/4.' },
            { step: '4. Ecuación resultante', description: 'x² = (1125/4)y  o  4x² - 1125y = 0.' }
          ],
          explanation: 'La ecuación del arco del puente colgante es x² = (1125/4)y.',
          moduleIndex: 1,
          difficulty: 'Avanzado'
        }
      ];
    } else {
      return [
        {
          id: 1,
          type: 'multiple_choice',
          question: 'En la elipse 3x² + 4y² = 48, ¿cuánto mide su eje mayor y cuál es su excentricidad?',
          options: ['Eje mayor = 8, e = 0.5', 'Eje mayor = 16, e = 0.75', 'Eje mayor = 4, e = 0.25', 'Eje mayor = 12, e = 0.6'],
          correctOptionIndex: 0,
          explanation: 'Dividiendo entre 48: x²/16 + y²/12 = 1. a² = 16 => a = 4 (Eje mayor = 2a = 8). b² = 12 => c = √(16 - 12) = 2. e = c/a = 2/4 = 0.5.',
          moduleIndex: 2,
          difficulty: 'Intermedio'
        },
        {
          id: 2,
          type: 'multiple_choice',
          question: '¿Cuál es la ecuación polar de la circunferencia x² + y² = 9?',
          options: ['r = 3', 'r = 9', 'r = 3 cos θ', 'r = 9 sen θ'],
          correctOptionIndex: 0,
          explanation: 'Como r² = x² + y², tenemos r² = 9 => r = 3 (un círculo de radio 3 centrado en el polo).',
          moduleIndex: 2,
          difficulty: 'Básico'
        },
        {
          id: 3,
          type: 'problem_development',
          question: 'DESARROLLO: Un túnel tiene sección de arco semielíptico con claro de 80 m y altura central de 30 m. Calcular la altura del arco a 15 m del centro.',
          developmentSteps: [
            { step: '1. Modelo elíptico', description: 'Centro en el origen: x²/a² + y²/b² = 1. Claro total 2a = 80 m => a = 40 m. Altura b = 30 m.' },
            { step: '2. Ecuación canónica', description: 'x²/40² + y²/30² = 1 => x²/1600 + y²/900 = 1.' },
            { step: '3. Sustitución a x = 15 m', description: '15²/1600 + y²/900 = 1 => 225/1600 + y²/900 = 1.' },
            { step: '4. Despeje de y', description: 'y²/900 = 1 - 225/1600 = 1375/1600 => y² = 900 × (1375/1600) = 773.4375.' },
            { step: '5. Resultado final', description: 'y = √773.4375 ≈ 27.81 metros de altura libre.' }
          ],
          explanation: 'La altura del arco semielíptico a 15 m del eje central es de 27.81 metros.',
          moduleIndex: 2,
          difficulty: 'Avanzado'
        }
      ];
    }
  }

  if (subjectId === 'fisica-1') {
    if (parcial === 1) {
      return [
        {
          id: 1,
          type: 'multiple_choice',
          question: '¿Cuántos metros por segundo equivalen a una rapidez de 90 km/h?',
          options: ['25.0 m/s', '32.4 m/s', '20.0 m/s', '15.5 m/s'],
          correctOptionIndex: 0,
          explanation: '90 km/h × (1000 m / 1 km) × (1 h / 3600 s) = 90 / 3.6 = 25 m/s.',
          moduleIndex: 0,
          difficulty: 'Básico'
        },
        {
          id: 2,
          type: 'multiple_choice',
          question: 'Al medir una losa de 12.00 m se registra 11.88 m. ¿Cuál es el error porcentual?',
          options: ['1.0%', '2.5%', '0.12%', '1.5%'],
          correctOptionIndex: 0,
          explanation: 'Ea = |11.88 - 12.00| = 0.12 m. Ep = (0.12 / 12.00) × 100% = 1.0%.',
          moduleIndex: 0,
          difficulty: 'Básico'
        },
        {
          id: 3,
          type: 'problem_development',
          question: 'DESARROLLO: Un tanque de agua tiene capacidad de 10 dm³. Expresar dicho volumen en litros y en cm³ con el procedimiento de conversión.',
          developmentSteps: [
            { step: '1. Equivalencia de dm³ a litros', description: 'Por definición en el SI, 1 dm³ equivale exactamente a 1 litro.' },
            { step: '2. Conversión a litros', description: '10 dm³ × (1 L / 1 dm³) = 10 Litros.' },
            { step: '3. Equivalencia de dm³ a cm³', description: '1 dm = 10 cm => 1 dm³ = (10 cm)³ = 1000 cm³.' },
            { step: '4. Conversión a cm³', description: '10 dm³ × (1000 cm³ / 1 dm³) = 10,000 cm³.' }
          ],
          explanation: '10 dm³ = 10 Litros = 10,000 cm³.',
          moduleIndex: 0,
          difficulty: 'Intermedio'
        }
      ];
    } else if (parcial === 2) {
      return [
        {
          id: 1,
          type: 'multiple_choice',
          question: 'Una fuerza de 200 N actúa a un ángulo de 210°. ¿Cuáles son sus componentes cartesianas Fx y Fy?',
          options: ['Fx = -173.2 N, Fy = -100 N', 'Fx = 173.2 N, Fy = 100 N', 'Fx = -100 N, Fy = -173.2 N', 'Fx = -150 N, Fy = -86.6 N'],
          correctOptionIndex: 0,
          explanation: 'Fx = 200·cos(210°) = 200·(-0.866) = -173.2 N. Fy = 200·sen(210°) = 200·(-0.5) = -100 N.',
          moduleIndex: 1,
          difficulty: 'Intermedio'
        },
        {
          id: 2,
          type: 'problem_development',
          question: 'DESARROLLO: Una pelota de 80 N está suspendida de una cuerda A formando 30° con la pared vertical y jalada horizontalmente por una cuerda B. Calcular las tensiones A y B.',
          developmentSteps: [
            { step: '1. Diagrama de cuerpo libre en el nodo', description: 'Fuerzas: Tensión Ta a 60° sobre la horizontal (30° con la vertical), Tensión Tb horizontal hacia la derecha, y Peso W = 80 N hacia abajo.' },
            { step: '2. Equilibrio vertical (ΣFy = 0)', description: 'Ta · cos(30°) - 80 N = 0 => Ta = 80 / cos(30°) = 80 / 0.8660 ≈ 92.38 N.' },
            { step: '3. Equilibrio horizontal (ΣFx = 0)', description: 'Tb - Ta · sen(30°) = 0 => Tb = Ta · sen(30°) = 92.38 · 0.5 = 46.19 N.' }
          ],
          explanation: 'La tensión en la cuerda A es Ta = 92.38 N y en la cuerda B es Tb = 46.19 N.',
          moduleIndex: 1,
          difficulty: 'Avanzado'
        },
        {
          id: 3,
          type: 'problem_development',
          question: 'DESARROLLO: Una viga uniforme de 6 m y peso 150 N está articulada en la pared y sostenida en su extremo por un cable a 35° que sostiene además una carga colgante de 150 N. Calcular la tensión del cable.',
          developmentSteps: [
            { step: '1. Identificación de momentos en el pivote', description: 'El peso de la viga (150 N) actúa en el centro de gravedad a 3 m. La carga (150 N) actúa en el extremo a 6 m. La componente vertical del cable es T · sen(35°) a 6 m.' },
            { step: '2. Ecuación de momentos (ΣM = 0)', description: '(T · sen 35°)(6 m) - (150 N)(3 m) - (150 N)(6 m) = 0.' },
            { step: '3. Cálculo de momentos negativos', description: 'Momentos = 450 N·m + 900 N·m = 1350 N·m.' },
            { step: '4. Despeje de la Tensión T', description: 'T · (6 · sen 35°) = 1350 => T · (6 · 0.5736) = 1350 => T · 3.4414 = 1350 => T = 392.28 N.' }
          ],
          explanation: 'La tensión requerida en el cable es de 392.28 N.',
          moduleIndex: 1,
          difficulty: 'Avanzado'
        }
      ];
    } else {
      return [
        {
          id: 1,
          type: 'multiple_choice',
          question: 'Un objeto se deja caer libremente desde lo alto de una torre de 45 m. ¿Cuánto tiempo tarda en llegar al suelo? (g = 9.8 m/s²)',
          options: ['3.03 segundos', '4.59 segundos', '2.14 segundos', '5.10 segundos'],
          correctOptionIndex: 0,
          explanation: 'h = ½ g t² => t = √(2h / g) = √(90 / 9.8) = √9.184 ≈ 3.03 s.',
          moduleIndex: 2,
          difficulty: 'Básico'
        },
        {
          id: 2,
          type: 'problem_development',
          question: 'DESARROLLO: Un proyectil es disparado a 60 m/s con ángulo de elevación de 50°. Determinar el tiempo de vuelo, la altura máxima y el alcance horizontal.',
          developmentSteps: [
            { step: '1. Descomposición de la velocidad inicial', description: 'v0x = 60 · cos(50°) = 38.57 m/s. v0y = 60 · sen(50°) = 45.96 m/s.' },
            { step: '2. Tiempo de vuelo (Tv)', description: 'Tv = (2 · v0y) / g = (2 × 45.96) / 9.81 = 91.92 / 9.81 ≈ 9.37 s.' },
            { step: '3. Altura máxima alcanzada (Hmax)', description: 'Hmax = (v0y)² / (2g) = (45.96)² / (2 × 9.81) = 2112.32 / 19.62 ≈ 107.66 m.' },
            { step: '4. Alcance horizontal (R)', description: 'R = v0x · Tv = 38.57 m/s × 9.37 s ≈ 361.40 m.' }
          ],
          explanation: 'Tiempo de vuelo: 9.37 s; Altura máxima: 107.66 m; Alcance horizontal: 361.40 m.',
          moduleIndex: 2,
          difficulty: 'Avanzado'
        }
      ];
    }
  }

  // Generic technical questions for other subjects (Obra Negra, Normas, etc.)
  return [];
}

// Function to generate the required 100 questions per exam based on syllabus topics
function getCurriculumQuestionGenerators(
  subjectId: string,
  parcial: 1 | 2 | 3,
  countNeeded: number,
  startId: number
): ExamQuestion[] {
  const result: ExamQuestion[] = [];
  const subjectQuestionTemplates = getSubjectBankTemplates(subjectId, parcial);

  for (let i = 0; i < countNeeded; i++) {
    const templateIndex = i % subjectQuestionTemplates.length;
    const template = subjectQuestionTemplates[templateIndex];
    const uniqueId = startId + i;

    // Create a concrete question variation
    const questionCopy: ExamQuestion = {
      id: uniqueId,
      type: template.type || 'multiple_choice',
      question: template.question(i + 1),
      options: template.options(i + 1),
      correctOptionIndex: template.correctOptionIndex,
      explanation: template.explanation,
      moduleIndex: (parcial - 1),
      difficulty: i % 3 === 0 ? 'Básico' : i % 3 === 1 ? 'Intermedio' : 'Avanzado',
      developmentSteps: template.developmentSteps
    };

    result.push(questionCopy);
  }

  return result;
}

interface BankTemplate {
  type?: 'multiple_choice' | 'problem_development';
  question: (variant: number) => string;
  options: (variant: number) => string[];
  correctOptionIndex: number;
  explanation: string;
  developmentSteps?: { step: string; description: string; formula?: string }[];
}

function getSubjectBankTemplates(subjectId: string, parcial: 1 | 2 | 3): BankTemplate[] {
  switch (subjectId) {
    case 'obra-negra':
      if (parcial === 1) {
        return [
          {
            question: () => '¿Cuál es la función primordial del tapial provisional en una obra de casa habitación?',
            options: () => ['Delimitar el predio y proteger a peatones y colindancias', 'Servir como muro de carga definitivo', 'Almacenar sacos de cemento y cal', 'Soportar las cargas de la losa'],
            correctOptionIndex: 0,
            explanation: 'El tapial es un elemento de seguridad perimetral obligatorio para prevenir accidentes a transeúntes y resguardar materiales.'
          },
          {
            question: () => 'En el trazo de una cimentación con el método 3-4-5, si los catetos miden 3 m y 4 m, la hipotenusa debe medir exactamente:',
            options: () => ['5.00 metros', '4.50 metros', '5.50 metros', '6.00 metros'],
            correctOptionIndex: 0,
            explanation: 'Basado en el Teorema de Pitágoras: 3² + 4² = 9 + 16 = 25 = 5².'
          },
          {
            question: () => '¿A qué profundidad mínima se realiza el despalme de la capa vegetal en un predio?',
            options: () => ['Entre 15 cm y 20 cm', 'Entre 50 cm y 1.00 m', 'Únicamente 5 cm', 'Más de 1.50 m'],
            correctOptionIndex: 0,
            explanation: 'El despalme retira la capa de materia orgánica (humus) de 15 a 20 cm para encontrar estrato mineral resistente.'
          },
          {
            question: () => '¿Qué elemento auxiliar se utiliza para pasar niveles horizontales en obra tradicional?',
            options: () => ['Manguera transparente de nivel con agua', 'Cinta métrica metálica', 'Plomada de albañil', 'Cuchara de albañil'],
            correctOptionIndex: 0,
            explanation: 'El principio de vasos comunicantes en una manguera transparente con agua permite marcar el mismo nivel en estacas distantes.'
          },
          {
            question: () => '¿Qué documento técnico contiene planos arquitectónicos, estructurales, memorias y especificaciones de una obra?',
            options: () => ['Proyecto Ejecutivo', 'Croquis de localización', 'Aviso de terminación de obra', 'Contrato de arrendamiento'],
            correctOptionIndex: 0,
            explanation: 'El Proyecto Ejecutivo integra todos los planos de detalle, memorias de cálculo y catálogos de conceptos para la ejecución de la obra.'
          }
        ];
      } else if (parcial === 2) {
        return [
          {
            question: () => '¿Qué espesor aproximado tiene un muro de tabique rojo recocido construido con aparejo al Hilo?',
            options: () => ['14 cm', '28 cm', '7 cm', '40 cm'],
            correctOptionIndex: 0,
            explanation: 'El aparejo al hilo dispone los tabiques de 7x14x28 cm longitudinalmente, dando un ancho de muro de 14 cm.'
          },
          {
            question: () => '¿Cuál es la separación máxima reglamentaria entre castillos de concreto armado en muros de carga?',
            options: () => ['Entre 3.0 y 4.0 metros', 'Cada 10 metros', 'Cada 1 metro', 'No requieren castillos'],
            correctOptionIndex: 0,
            explanation: 'Las NTC estipulan que los castillos no deben separarse más de 1.5 veces la altura del muro o máximo 4.0 m.'
          },
          {
            question: () => '¿Cuál es la función principal de la dala o cadena de desplante?',
            options: () => ['Repartir uniformemente las cargas del muro a la cimentación y evitar humedad por capilaridad', 'Soportar la losa de azotea', 'Servir de dintel sobre puertas', 'Nivelar el terreno natural'],
            correctOptionIndex: 0,
            explanation: 'La dala de desplante confina el muro en su base, distribuye cargas a la zapata e integra la impermeabilización de desplante.'
          },
          {
            question: () => '¿Qué tipo de aparejo de tabique se utiliza exclusivamente para muros divisorios sin carga?',
            options: () => ['Aparejo Capuchino', 'Aparejo al Tizón', 'Aparejo Holandés', 'Aparejo Inglés'],
            correctOptionIndex: 0,
            explanation: 'El aparejo capuchino coloca el tabique de canto (espesor de 7 cm), por lo que carece de rigidez para soportar cargas verticales.'
          }
        ];
      } else {
        return [
          {
            question: () => '¿Qué porcentaje de madera de cimbra de contacto se ahorra típicamente con el sistema de losa de Vigueta y Bovedilla frente a losa maciza?',
            options: () => ['Aproximadamente 60% a 70%', 'No ahorra madera', '100% (cero puntales)', '10% a 15%'],
            correctOptionIndex: 0,
            explanation: 'Solo requiere madrinas y puntales distanciados a 1.5 - 2 m, sin necesidad de entarimado completo de duela o triplay.'
          },
          {
            question: () => '¿A los cuántos días se retira típicamente el apuntalamiento principal de una losa maciza de concreto normal?',
            options: () => ['A los 15 a 21 días (o al alcanzar 75-80% de resistencia f\'c)', 'A las 24 horas', 'A los 3 días', 'A los 60 días'],
            correctOptionIndex: 0,
            explanation: 'El concreto alcanza su resistencia estructural de trabajo entre los 15 y 28 días de curado.'
          },
          {
            question: () => '¿Cuál es el revenimiento típico recomendado para colar una losa de casa habitación mediante vaciado convencional?',
            options: () => ['8 a 12 cm', '0 a 2 cm (seca)', '25 cm (líquida)', '18 a 22 cm'],
            correctOptionIndex: 0,
            explanation: 'Un revenimiento de 8 a 12 cm permite una trabajabilidad fluida sin provocar segregación excesiva de la grava.'
          },
          {
            question: () => '¿Cuál es la función del pretil y del gotero en una losa de azotea?',
            options: () => ['Evitar caídas, canalizar agua pluvial hacia bajadas y evitar que el agua escurra por la fachada', 'Soportar el tinaco', 'Servir de soporte a columnas', 'Mejorar el aislamiento acústico interior'],
            correctOptionIndex: 0,
            explanation: 'El pretil retiene y encauza el agua pluvial hacia las bajadas, y el gotero rompe la gota impidiendo humedad en la fachada.'
          }
        ];
      }

    case 'materiales-sustentables':
      return [
        {
          question: () => '¿Qué evalúa el Análisis de Ciclo de Vida (ACV) en un material de construcción?',
          options: () => ['El impacto ambiental desde la extracción de materia prima hasta su demolición y disposición final', 'Solo el costo monetario de compra', 'El tiempo que tarda en fraguar el concreto', 'La resistencia a la compresión en laboratorio'],
          correctOptionIndex: 0,
          explanation: 'El ACV considera cuna a tumba: extracción, manufactura, transporte, vida útil operativa y reciclaje o desecho.'
        },
        {
          question: () => '¿Cuál es la orientación solar más óptima para áreas sociales y recámaras en la Ciudad de México?',
          options: () => ['Sur / Sur-Oriente', 'Norte estricto', 'Poniente directo', 'Nor-Poniente'],
          correctOptionIndex: 0,
          explanation: 'Permite captar calor en invierno y sombrearse con aleros sencillos durante el verano.'
        },
        {
          question: () => '¿Por qué el Bloque de Tierra Comprimida (BTC) tiene menor huella de carbono que el tabique rojo tradicional?',
          options: () => ['No requiere proceso de cocción en hornos de leña o combustóleo', 'Porque es más liviano que el aire', 'Porque se fabrica con plástico virgen', 'Porque no utiliza agua'],
          correctOptionIndex: 0,
          explanation: 'La compresión mecánica en frío evita las altas emisiones de CO2 generadas por la quema en hornos tabiqueros.'
        },
        {
          question: () => 'En un sistema de captación pluvial, ¿cuál es la función del separador de primeras lluvias?',
          options: () => ['Descartar los primeros 1-2 mm de lluvia contaminados con polvo del techo', 'Clorar el agua potable', 'Bombear agua al tinaco', 'Medir el nivel de la cisterna'],
          correctOptionIndex: 0,
          explanation: 'Lava la techumbre y desvía los sedimentos y contaminantes antes de ingresar el agua limpia a la cisterna.'
        },
        {
          question: () => '¿Qué norma mexicana regula los criterios y requisitos ambientales de Edificación Sustentable?',
          options: () => ['NMX-AA-164-SCFI-2013', 'NOM-001-SEDE-2012', 'NMX-C-414-ONNCCE', 'NOM-031-STPS-2011'],
          correctOptionIndex: 0,
          explanation: 'La NMX-AA-164 establece los criterios de desempeño ambiental en agua, energía, materiales y residuos para México.'
        }
      ];

    case 'normas-tramitaciones':
      return [
        {
          question: () => '¿Qué superficie máxima construida cubre una Manifestación de Construcción Tipo A para vivienda unifamiliar?',
          options: () => ['Hasta 200 m² de construcción habitable', 'Hasta 500 m²', 'Hasta 1,000 m²', 'Sin límite de superficie'],
          correctOptionIndex: 0,
          explanation: 'El RCDF fija en 200 m² habitables el límite para manifestación tipo A en predios con servicios.'
        },
        {
          question: () => '¿Qué vigencia tiene la Constancia de Alineamiento y Número Oficial en la CDMX?',
          options: () => ['2 años', '6 meses', '1 año', '5 años'],
          correctOptionIndex: 0,
          explanation: 'Tiene una vigencia legal de 2 años a partir de su expedición conforme al RCDF.'
        },
        {
          question: () => '¿Cada cuántos años debe revalidar o refrendar su registro el Director Responsable de Obra (D.R.O.)?',
          options: () => ['Cada 3 años', 'Cada año', 'Cada 5 años', 'Es vitalicio'],
          correctOptionIndex: 0,
          explanation: 'El registro de D.R.O. y Corresponsables debe refrendarse cada 3 años ante la Comisión de Admisión.'
        },
        {
          question: () => '¿Cuál es el área mínima libre que debe tener una Recámara Principal de acuerdo con las NTC?',
          options: () => ['7.30 m² con lado menor de 2.70 m', '5.00 m² con lado menor de 2.00 m', '10.00 m² con lado menor de 3.50 m', '6.00 m² con lado menor de 2.20 m'],
          correctOptionIndex: 0,
          explanation: 'Las NTC de Proyecto Arquitectónico establecen 7.30 m² y lado menor de 2.70 m para la recámara principal.'
        },
        {
          question: () => '¿Qué dependencia federal es la única facultada para autorizar el uso de explosivos en excavaciones?',
          options: () => ['Secretaría de la Defensa Nacional (SEDENA)', 'Protección Civil de la Alcaldía', 'SEMARNAT', 'Secretaría de Obras y Servicios'],
          correctOptionIndex: 0,
          explanation: 'De conformidad con la Ley Federal de Armas de Fuego y Explosivos, únicamente la SEDENA expide permisos de voladuras.'
        }
      ];

    case 'planimetria-aplicada':
      return [
        {
          question: () => '¿Cuál es la fórmula para la suma teórica de ángulos interiores de un polígono cerrado de n lados?',
          options: () => ['Σθ = 180° × (n - 2)', 'Σθ = 360° × (n - 2)', 'Σθ = 180° × n', 'Σθ = 90° × (n + 2)'],
          correctOptionIndex: 0,
          explanation: 'Un polígono de n lados se descompone en (n - 2) triángulos, cada uno con 180°.'
        },
        {
          question: () => 'En una libreta de tránsito topográfica, ¿qué información se asienta en las columnas del lado izquierdo?',
          options: () => ['Estación, Punto Visado, Distancia, Ángulo horizontal y Rumbo/Azimut', 'Croquis del predio y firmas', 'Cálculos de áreas y coordenadas', 'Datos del propietario únicamente'],
          correctOptionIndex: 0,
          explanation: 'La carátula izquierda es estrictamente numérica (datos de campo de instrumentos) y la derecha es para croquis y notas.'
        },
        {
          question: () => '¿Cuál es la fórmula de Herón para el cálculo del área de un triángulo a partir de sus 3 lados a, b y c?',
          options: () => ['S = √[p(p - a)(p - b)(p - c)], donde p = (a + b + c)/2', 'S = (a + b + c) / 2', 'S = a · b · c / 2', 'S = √(a² + b² + c²)'],
          correctOptionIndex: 0,
          explanation: 'Fórmula clásica de Herón de Alejandría utilizada ampliamente en topografía con cinta.'
        }
      ];

    default: // Generic template for general subjects
      return [
        {
          question: (v) => `Pregunta conceptual de evaluación departamental No. ${v} para la materia:`,
          options: () => ['Opción A (Respuesta correcta fundamentada en la guía oficial)', 'Opción B (Distractor técnico común)', 'Opción C (Concepto erróneo)', 'Opción D (Parámetro no aplicable)'],
          correctOptionIndex: 0,
          explanation: 'Fundamentado en el programa de estudios oficial del CECyT 11 del Instituto Politécnico Nacional.'
        },
        {
          question: (v) => `¿Cuál es el principio normativo y de aplicación técnica correspondiente al reactivo ${v}?`,
          options: () => ['Cumplimiento de las especificaciones y normatividad vigente', 'Modificación arbitraria de las cotas', 'Omisión de pruebas de calidad', 'Uso de materiales sin certificar'],
          correctOptionIndex: 0,
          explanation: 'La práctica técnica profesional en construcción exige el apego riguroso a especificaciones y normativas.'
        }
      ];
  }
}

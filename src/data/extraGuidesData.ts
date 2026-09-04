import { StudyModule } from '../types';

export const EXTRA_GUIDES_DATA: { [subjectId: string]: StudyModule[] } = {
  'quimica-1': [
    {
      id: 'qui-mod-1',
      title: 'Módulo 1: Materia, Masa, Energía y Estados de Agregación',
      parcialNumber: 1,
      competence: 'Plantea medidas preventivas y correctivas para el uso racional de la materia y la energía en su entorno socioecológico.',
      topics: [
        {
          id: 'qui-top-1',
          title: 'Propiedades de la Materia y Leyes de Conservación',
          summary: 'La química estudia la materia, su composición, estructura y transformaciones. Ley de Lavoisier: la materia no se crea ni se destruye, solo se transforma.',
          keyPoints: [
            'Propiedades generales (extensivas): dependen de la cantidad de materia (masa, peso, volumen, inercia, impenetrabilidad, porosidad, divisibilidad).',
            'Propiedades específicas (intensivas): no dependen de la cantidad (densidad, punto de ebullición, punto de fusión, solubilidad, viscosidad, dureza).',
            'Fenómeno físico: no altera la composición molecular (fusión del hielo, dilatación térmica de una viga).',
            'Fenómeno químico: altera la estructura interna formando nuevas sustancias (corrosión del acero, fraguado del cemento, combustión).'
          ]
        },
        {
          id: 'qui-top-2',
          title: 'Sustancias Puras, Mezclas y Métodos de Separación',
          summary: 'Las sustancias puras se dividen en elementos (átomos de una sola especie) y compuestos (unión química en proporción fija). Las mezclas pueden ser homogéneas (una sola fase) o heterogéneas (dos o más fases distinguibles).',
          keyPoints: [
            'Decantación: separación de líquidos no miscibles (agua y aceite) o sólidos gruesos sedimentados (arena y agua).',
            'Filtración: separación de un sólido insoluble mediante membrana porosa.',
            'Destilación: separación de líquidos miscibles aprovechando diferentes puntos de ebullición.',
            'Centrifugación y Cristalización: separación acelerada por fuerza centrífuga y evaporación de solvente.'
          ]
        }
      ]
    },
    {
      id: 'qui-mod-2',
      title: 'Módulo 2: Estructura Atómica, Números Cuánticos y Tabla Periódica',
      parcialNumber: 2,
      competence: 'Emite juicios sobre el uso del átomo integrando fundamentos de mecánica cuántica y maneja la tabla periódica con enfoque CTSA.',
      topics: [
        {
          id: 'qui-top-3',
          title: 'Evolución de Modelos Atómicos y Estructura Cuántica',
          summary: 'Evolución histórica: Dalton (esferas indivisibles), Thomson (budín con pasas y electrones), Rutherford (núcleo positivo central), Bohr (órbitas circulares cuantizadas) y Schrödinger (modelo cuántico de orbitales y función de onda).',
          keyPoints: [
            'Partículas subatómicas: Protón (p+, en núcleo), Neutrón (n0, en núcleo), Electrón (e-, en nube electrónica).',
            'Número atómico Z = número de protones = número de electrones en átomo neutro.',
            'Masa atómica A = protones + neutrones => neutrones = A - Z.',
            'Los 4 números cuánticos: n (principal: nivel 1-7), l (azimutal: subnivel s=0, p=1, d=2, f=3), m (magnético: orientación -l a +l), ms (spin: rotación +1/2 o -1/2).',
            'Principios: Exclusión de Pauli (no hay 2 electrones con 4 números cuánticos idénticos), Regla de Hund (máxima multiplicidad) y Regla de Aufbau / Diagonales.'
          ]
        },
        {
          id: 'qui-top-4',
          title: 'Tabla Periódica Moderna y Propiedades Periódicas',
          summary: 'La tabla moderna ordena los elementos por número atómico creciente Z en 7 periodos (filas horizontales) y 18 grupos o familias (columnas verticales).',
          keyPoints: [
            'Grupos A (representativos): IA alcalinos, IIA alcalinotérreos, IIIA térreos, IVA carbonoideos, VA nitrogenoideos, VIA calcógenos/anfígenos, VIIA halógenos, VIIIA gases nobles.',
            'Grupos B: metales de transición (bloque d) y metales de transición interna / tierras raras (lantánidos y actínidos, bloque f).',
            'Electronegatividad: tendencia de un átomo a atraer electrones; el más electronegativo es el Flúor (4.0 en escala Pauling).',
            'Metales vs No Metales: metales son dúctiles, maleables, conductores y forman cationes; no metales son opacos, frágiles, aislantes y forman aniones.'
          ]
        }
      ]
    },
    {
      id: 'qui-mod-3',
      title: 'Módulo 3: Enlace Químico y Nomenclatura Inorgánica',
      parcialNumber: 3,
      competence: 'Propone productos con base en el tipo de enlace químico y nombra compuestos inorgánicos según reglas IUPAC y tradicional.',
      topics: [
        {
          id: 'qui-top-5',
          title: 'Tipos de Enlace Químico (Iónico, Covalente y Metálico)',
          summary: 'Regla del octeto: los átomos buscan tener 8 electrones en su capa de valencia para alcanzar estabilidad de gas noble.',
          keyPoints: [
            'Enlace Iónico (ΔEN ≥ 1.7): unión metal + no metal con transferencia total de electrones (ej. NaCl, MgO). Forman redes cristalinas sólidas, altos puntos de fusión y conducen en solución acuosa.',
            'Enlace Covalente Polar (0 < ΔEN < 1.7): no metales distintos que comparten electrones con asimetría de carga (ej. HCl, H₂O).',
            'Enlace Covalente No Polar (ΔEN = 0): no metales iguales (ej. O₂, N₂, Cl₂).',
            'Enlace Metálico: red de iones positivos inmersos en un mar de electrones libres deslocalizados, lo que explica la alta conductividad térmica y eléctrica del cobre y acero.'
          ]
        },
        {
          id: 'qui-top-6',
          title: 'Nomenclatura Química Inorgánica (IUPAC y Tradicional)',
          summary: 'Reglas para formular y nombrar las principales funciones químicas inorgánicas.',
          keyPoints: [
            'Óxidos básicos (metal + O²⁻): ej. FeO (óxido ferroso / óxido de hierro II); Fe₂O₃ (óxido férrico / óxido de hierro III).',
            'Óxidos ácidos o anhídridos (no metal + O²⁻): ej. SO₃ (anhídrido sulfúrico / trióxido de azufre).',
            'Hidróxidos o bases (metal + OH⁻): ej. Ca(OH)₂ (hidróxido de calcio / cal apagada para morteros).',
            'Hidrácidos (H⁺ + no metal): ej. HCl (ácido clorhídrico / ácido muriático para limpieza de tabique).',
            'Oxiácidos (H⁺ + radical no metal + O): ej. H₂SO₄ (ácido sulfúrico).',
            'Oxisales: sustitución de H por metal, cambiando -oso por -ito y -ico por -ato (ej. CaCO₃: carbonato de calcio en calizas).'
          ]
        }
      ]
    }
  ],

  'dibujo-tecnico-1': [
    {
      id: 'dib-mod-1',
      title: 'Módulo 1: Historia, Normatividad, Instrumentos y Tipos de Líneas',
      parcialNumber: 1,
      competence: 'Representa trazos a mano alzada y con instrumentos conforme a las normas oficiales de ingeniería.',
      topics: [
        {
          id: 'dib-top-1',
          title: 'Historia y Normas Oficiales de Dibujo (DGN y NMX)',
          summary: 'El dibujo técnico es el lenguaje universal gráfico de la ingeniería y la arquitectura. Se rige por normas estrictas.',
          keyPoints: [
            'Normas oficiales: DGN 21-022 (Líneas), DGN 21-023 (Escalas), DGN 21-024 (Acotaciones), NMX-Z-065 (Formatos de papel).',
            'Instrumentos: Compás, regla T, escuadras de 45° y 60°/30°, escalímetro, estilógrafos, lápices graduados (H duros para trazo auxiliar, B blandos para acabados oscuros, HB/F intermedios).',
            'Jerarquía de líneas: Línea continua gruesa (contorno visible definitivo), línea discontinua a trazos (aristas ocultas), línea de cadena fina punto y raya (ejes de simetría y centros).'
          ]
        },
        {
          id: 'dib-top-2',
          title: 'Rotulación Normalizada y Letra Técnica',
          summary: 'La rotulación en planos debe ser clara, legible y uniforme. Se emplean líneas guía auxiliares de 4 mm de altura para mayúsculas y espaciado de 2 mm entre renglones.',
          keyPoints: [
            'Línea superior, línea de base y línea intermedia trazadas suavemente con mina 3H o 4H.',
            'Trazos verticales sin inclinación o con inclinación uniforme a 75° según la norma.',
            'No se admiten serifas ni adornos en el rotulado técnico de planos ejecutivos.'
          ]
        }
      ]
    },
    {
      id: 'dib-mod-2',
      title: 'Módulo 2: Acotación, Escalas y Geometría Gráfica',
      parcialNumber: 2,
      competence: 'Aplica procedimientos geométricos, dimensión y escala para representar figuras bidimensionales.',
      topics: [
        {
          id: 'dib-top-3',
          title: 'Acotaciones y Escalas Técnicas',
          summary: 'Acotar es consignar en un plano las dimensiones reales del objeto mediante cotas, líneas de acotación, líneas de referencia y cabezas de flecha.',
          keyPoints: [
            'Fórmula de Escala: E = Dibujo / Realidad (E = D / R).',
            'Escala natural: 1:1. Escalas de reducción para arquitectura: 1:20, 1:25, 1:50 (plantas ejecutivas), 1:100 (anteproyectos), 1:200 (conjuntos urbanos).',
            'Las cotas siempre indican la medida real del objeto, independientemente de la escala a la que esté dibujado el plano.'
          ]
        },
        {
          id: 'dib-top-4',
          title: 'Geometría Gráfica: Enlaces, Tangencias y Polígonos',
          summary: 'Construcción con regla y compás de mediatrices, bisectrices, tangencias entre arcos y rectas, elipses por el método de cuatro centros y polígonos regulares.',
          keyPoints: [
            'Enlace de dos rectas que forman 90° mediante arco de radio dado.',
            'Trazado de elipse con método de los cuatro puntos / óvalo de centros conjugados.',
            'Construcción de hexágono y pentágono regular inscrito en una circunferencia.'
          ]
        }
      ]
    },
    {
      id: 'dib-mod-3',
      title: 'Módulo 3: Axonometría e Isometría',
      parcialNumber: 3,
      competence: 'Aplica métodos de representación ilustrativa para representar volúmenes tridimensionales.',
      topics: [
        {
          id: 'dib-top-5',
          title: 'Proyecciones Axonométricas e Isométrico',
          summary: 'Representación en una sola vista de las tres dimensiones de un objeto (ancho, alto y profundidad).',
          keyPoints: [
            'Isométrica: los tres ejes forman ángulos iguales de 120° entre sí (ejes a 30° respecto a la horizontal). Sin deformación en ninguna dirección.',
            'Dimétrica: dos ángulos iguales y uno diferente.',
            'Trimétrica: tres ángulos distintos.',
            'Perspectiva Caballera: cara frontal paralela al plano (90°) y eje de profundidad a 45° con coeficiente de reducción de 1/2 para evitar distorsión visual.',
            'Perspectiva Militar: planta dibujada en verdadera magnitud a 90° y alturas en vertical.'
          ]
        }
      ]
    }
  ],

  'entorno-socioeconomico': [
    {
      id: 'soc-mod-1',
      title: 'Módulo 1: Modos de Producción, Crisis de 1929 y Guerra Fría',
      parcialNumber: 1,
      competence: 'Emite juicios de valor sobre los modos de producción y procesos económicos mundiales.',
      topics: [
        {
          id: 'soc-top-1',
          title: 'Modos de Producción y Crisis de 1929',
          summary: 'La estructura social y económica se transforma a través de los modos de producción: Comunidad Primitiva, Esclavismo, Feudalismo, Capitalismo y Socialismo.',
          keyPoints: [
            'Estructura económica: Fuerzas productivas (medios de producción + fuerza de trabajo) y Relaciones sociales de producción.',
            'Superestructura: leyes, política, religión, moral e instituciones del Estado.',
            'Crack de 1929: caída de la Bolsa de Nueva York (Martes Negro), sobreproducción y desempleo masivo; dio origen al New Deal de Franklin D. Roosevelt y al Estado de Bienestar keynesiano.'
          ]
        }
      ]
    },
    {
      id: 'soc-mod-2',
      title: 'Módulo 2: Modelos Económicos en México (1940 a la Fecha)',
      parcialNumber: 2,
      competence: 'Discute las características de los modelos económicos implementados en México para comprender la realidad nacional.',
      topics: [
        {
          id: 'soc-top-2',
          title: 'Modelos de Industrialización en México',
          summary: 'Evolución económica de México en el siglo XX y XXI.',
          keyPoints: [
            'Modelo de Sustitución de Importaciones (1940-1954): impulso a la industria nacional durante la 2ª Guerra Mundial (Ávila Camacho y Alemán Valdés).',
            'Desarrollo Estabilizador o "Milagro Mexicano" (1954-1970): crecimiento promedio de 6.7% anual, paridad fija de $12.50 pesos por dólar y baja inflación (Ruiz Cortines, López Mateos, Díaz Ordaz).',
            'Desarrollo Compartido (1970-1976, Echeverría): expansión del gasto público, creación de INFONAVIT (1972), endeudamiento externo.',
            'Alianza para la Producción y Petrolización (1976-1982, López Portillo): yacimientos de Cantarell y posterior crisis de deuda en 1982.',
            'Modelo Neoliberal (1982 en adelante, De la Madrid, Salinas, Zedillo): privatización de empresas estatales, apertura al libre mercado y firma del TLCAN / T-MEC.'
          ]
        }
      ]
    },
    {
      id: 'soc-mod-3',
      title: 'Módulo 3: Sectores Económicos, Globalización y Constitución Mexicana',
      parcialNumber: 3,
      competence: 'Sustenta el impacto de la globalización y diserta sobre los derechos constitucionales del ciudadano.',
      topics: [
        {
          id: 'soc-top-3',
          title: 'Variables Macroeconómicas y Derechos Constitucionales',
          summary: 'Comprensión de los indicadores económicos del país y del marco de garantías de la Constitución de 1917.',
          keyPoints: [
            'Sectores económicos: Primario (agricultura, minería), Secundario (industria, manufactura, construcción) y Terciario (servicios, comercio, turismo).',
            'Indicadores: PIB (valor total producido en territorio nacional), PNB (producido por connacionales), PEA (población económicamente activa entre 15 y 64 años).',
            'Constitución Política Mexicana: Parte Dogmática (Artículos 1° al 29°: Derechos Humanos, educación gratuita Art. 3, derecho a vivienda digna Art. 4, libertad de trabajo Art. 5) y Parte Orgánica (Artículos 30° al 136°: división de poderes Ejecutivo, Legislativo y Judicial).'
          ]
        }
      ]
    }
  ],

  'comunicacion-cientifica': [
    {
      id: 'hum-mod-1',
      title: 'Módulo 1: Discurso y Texto Científico',
      parcialNumber: 1,
      competence: 'Aplica las propiedades semánticas, gramaticales y estructurales del discurso científico.',
      topics: [
        {
          id: 'hum-top-1',
          title: 'Características y Clasificación de Textos Científicos',
          summary: 'El texto científico busca comunicar conocimientos verificables de manera objetiva, universal, clara, precisa y verificable, evitando juicios subjetivos.',
          keyPoints: [
            'Características: Objetividad, universalidad, denotación (significado literal sin ambigüedades), uso de terminología técnica y tecnicismos.',
            'Clasificación por especialización: 1) Especializados (dirigidos a científicos e ingenieros pares); 2) Didácticos (textos universitarios y de bachillerato para aprendizaje guiado); 3) De divulgación (accesibles a la sociedad en general); 4) De consulta (diccionarios y enciclopedias); 5) Técnicos (manuales de operación y catálogos).'
          ]
        }
      ]
    },
    {
      id: 'hum-mod-2',
      title: 'Módulo 2: Metodología de la Investigación Documental y Fichas',
      parcialNumber: 2,
      competence: 'Utiliza las herramientas metodológicas de investigación documental y elabora fichas de registro y de trabajo.',
      topics: [
        {
          id: 'hum-top-2',
          title: 'Fuentes de Información y Fichas de Trabajo',
          summary: 'La investigación documental parte de la delimitación del tema, planteamiento del problema, hipótesis, marco teórico y recolección estructurada de fuentes.',
          keyPoints: [
            'Fichas de registro (7.5 × 12.5 cm): Bibliográficas (libros), Hemerográficas (artículos de revistas o periódicos) y Cibergráficas/Electrónicas (páginas web confiables con URL y fecha de consulta).',
            'Fichas de trabajo (12.5 × 20.5 cm o media carta): Contienen encabezado/tema, fuente abreviada y contenido (de transcripción textual entre comillas con "sic", de resumen, de síntesis o de comentario/evaluación del investigador).'
          ]
        }
      ]
    },
    {
      id: 'hum-mod-3',
      title: 'Módulo 3: Estructura del Reporte de Investigación y Divulgación Oral',
      parcialNumber: 3,
      competence: 'Organiza y sustenta la divulgación de resultados en forma escrita y oral con rigor metodológico.',
      topics: [
        {
          id: 'hum-top-3',
          title: 'Estructura del Informe Técnico y Modelos Expositivos',
          summary: 'Partes formales de un trabajo de titulación o investigación técnica en el IPN.',
          keyPoints: [
            'Estructura formal: Carátula o portada, Índice, Introducción, Justificación, Objetivos, Marco Teórico (cuerpo del trabajo), Metodología, Resultados, Conclusiones, Glosario, Aparato Crítico (citas al pie y referencias estilo APA) y Anexos.',
            'Modelos de discurso oral: Causa-Efecto (un fenómeno explica o predice a otro), Problema-Solución, Cronológico y Comparativo.'
          ]
        }
      ]
    }
  ],

  'ingles-3': [
    {
      id: 'ing-mod-1',
      title: 'Unit 1: Remembrances & Past Simple',
      parcialNumber: 1,
      competence: 'Utiliza el tiempo pasado simple y vocabulario cotidiano para referirse a hábitos y hechos ocurridos en el pasado.',
      topics: [
        {
          id: 'ing-top-1',
          title: 'Past Simple: Regular & Irregular Verbs, Wh- Questions',
          summary: 'The simple past is used for actions completed at a specific time in the past.',
          keyPoints: [
            'Regular verbs: add -ed (work -> worked), -d for verbs ending in -e (live -> lived), double consonant (trap -> trapped), change y to -ied (study -> studied).',
            'Irregular verbs: do not follow -ed rules (be: was/were; go -> went; buy -> bought; write -> wrote; see -> saw).',
            'Negatives & Questions: use auxiliary DID / DIDN\'T + base verb (e.g., "She didn\'t study yesterday", "Did you inspect the building?").',
            'Wh- questions: Wh-word + did + subject + base verb? ("Where did they build the house?").'
          ]
        }
      ]
    },
    {
      id: 'ing-mod-2',
      title: 'Unit 2: Past Experiences, Past Continuous & Connectors',
      parcialNumber: 2,
      competence: 'Usa pasado simple y continuo, used to y conectores de contraste para describir experiencias pasadas.',
      topics: [
        {
          id: 'ing-top-2',
          title: 'Past Continuous, Interrupted Actions & Used To',
          summary: 'Past Continuous (was/were + verb-ing) indicates an ongoing past action interrupted by a shorter simple past action.',
          keyPoints: [
            'While + Past Continuous ("While the surveyor was measuring, it started to rain").',
            'When + Simple Past ("We were pouring the concrete when the inspector arrived").',
            'Used to + infinitive: past habits that no longer happen ("The workers used to mix mortar by hand, but now they use a mixer").',
            'Connectors of contrast: However, nevertheless, although, even though, despite, in spite of.'
          ]
        }
      ]
    },
    {
      id: 'ing-mod-3',
      title: 'Unit 3: Comparatives, Superlatives & Future Plans',
      parcialNumber: 3,
      competence: 'Emplea comparativos, superlativos y formas futuras (be going to / present continuous) para planes académicos y laborales.',
      topics: [
        {
          id: 'ing-top-3',
          title: 'Comparatives, Superlatives and Future with Be Going To',
          summary: 'Comparative adjectives compare two items (-er than / more... than). Superlatives compare three or more (the -est / the most...).',
          keyPoints: [
            'Comparatives: short adjectives add -er (taller than, bigger than, heavier than); long adjectives use more + adj (more resistant than steel).',
            'Superlatives: the + adj-est (the oldest building) or the most + adj (the most sustainable material). Irregular: good -> better -> the best; bad -> worse -> the worst.',
            'Future with BE GOING TO: planned decisions and predictions with present evidence ("Sol is going to study Civil Engineering at ESIA IPN").',
            'Present Continuous for future: fixed arrangements with time/place ("The crane is arriving tomorrow at 8:00 AM").'
          ]
        }
      ]
    }
  ]
};

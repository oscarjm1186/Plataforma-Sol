import { StudyModule } from '../../types';

export const ENTORNO_GUIDES: StudyModule[] = [
  {
    id: 'ent-mod-1',
    title: 'Parcial 1: Modos de Producción, Estructura Económica y la Gran Depresión de 1929',
    parcialNumber: 1,
    competence: 'Explica la evolución de los modos de producción, analiza las causas y consecuencias del Crack de 1929 y el surgimiento del Estado de Bienestar y el modelo keynesiano.',
    topics: [
      {
        id: 'ent-top-1',
        title: 'Teoría de la Estructura y Superestructura y Modos de Producción',
        rap: 'RAP 1: Caracteriza las formaciones socioeconómicas y diferencia los elementos de la estructura y superestructura social.',
        summary: 'La teoría social de la economía política establece que la base real de toda sociedad es la Estructura Económica, compuesta por las Fuerzas Productivas y las Relaciones Sociales de Producción. Sobre esta base material se levanta la Superestructura, conformada por las instituciones jurídicas, políticas, leyes, el Estado, las ideologías, la religión y la moral.',
        keyPoints: [
          'Modos de producción históricos: 1) Comunidad Primitiva (sin clases sociales ni propiedad privada, producción de subsistencia comunal); 2) Modo de Producción Esclavista (amos propietarios de los medios de producción y de los esclavos; Grecia y Roma); 3) Modo de Producción Feudal (señores feudales dueños de la tierra y siervos atados por tributo); 4) Capitalismo (burguesía propietaria de los medios de producción y capital frente a asalariados que venden su fuerza de trabajo); 5) Socialismo (propiedad colectiva de los medios de producción y economía planificada).',
          'Lucha de clases: contradicción dialéctica entre clases dominantes y dominadas que impulsa las transformaciones históricas.',
          'Superestructura jurídico-política: leyes de asentamientos humanos, reglamentos de construcción y aparatos del Estado que legitiman el orden socioeconómico.'
        ],
        constructionApplication: 'Comprensión del papel del sector inmobiliario y de la construcción privada en la acumulación de plusvalía del suelo urbano.',
        practiceExercises: [
          {
            prompt: 'En el análisis sociopolítico de la infraestructura urbana, ¿a qué nivel (Estructura o Superestructura) corresponden los reglamentos municipales de construcción y el derecho de propiedad privada del suelo?',
            hint: 'Leyes, instituciones del Estado e ideología jurídica.',
            solution: 'Corresponden a la SUPERESTRUCTURA jurídico-política, la cual se encarga de normar, legitimar y proteger las relaciones de propiedad vigentes en la estructura económica de la sociedad.'
          }
        ]
      },
      {
        id: 'ent-top-2',
        title: 'Fuerzas Productivas, Relaciones de Producción y la Industria de la Construcción',
        rap: 'RAP 2: Identifica los medios de producción, la fuerza de trabajo y la generación de plusvalía en el sector constructivo.',
        summary: 'Las fuerzas productivas representan la capacidad técnica de la sociedad para transformar la naturaleza, combinando los medios de producción (herramientas, maquinaria pesada, plantas dosificadoras, insumos) con la fuerza de trabajo humana (peones, oficiales, técnicos y proyectistas).',
        keyPoints: [
          'Medios de producción en la construcción: objetos de trabajo (cemento, acero, arena, grava, suelo) y medios de trabajo (revolvedoras, grúas torre, retroexcavadoras, cimbras, software CAD).',
          'Fuerza de trabajo: la capacidad física y mental del trabajador que crea un valor nuevo superior a su salario de subsistencia (plusvalía).',
          'Composición orgánica del capital: alta intensidad de mano de obra en fases de obra negra y albañilería, y creciente tecnificación con maquinaria pesada en cimentaciones y terracerías.'
        ],
        constructionApplication: 'Administración de rendimientos de mano de obra por cuadrilla para optimizar los costos directos de un catálogo de conceptos.',
        practiceExercises: [
          {
            prompt: '¿Por qué la fuerza de trabajo humana es el único elemento en el proceso constructivo capaz de generar plusvalía o nuevo valor económico?',
            hint: 'La maquinaria transfiere su valor por depreciación; el trabajo humano añade valor creativo excedente.',
            solution: 'Porque las herramientas y materiales son capital constante que solo transfieren su costo preexistente al producto terminado; la fuerza de trabajo de los operarios es la única que produce durante la jornada un valor monetario mayor al que se le paga como salario diario.'
          }
        ]
      },
      {
        id: 'ent-top-3',
        title: 'La Gran Depresión de 1929 y el Colapso Bursátil de Wall Street',
        rap: 'RAP 3: Explica las causas financieras y productivas de la crisis de 1929 y sus repercusiones internacionales.',
        summary: 'El 24 de octubre de 1929 ("Jueves Negro") la Bolsa de Valores de Nueva York colapsó tras años de especulación financiera desregulada, créditos fáciles y sobreproducción industrial, precipitando la peor recesión económica del siglo XX a nivel global.',
        keyPoints: [
          'Causas fundamentales: 1) Sobreproducción agrícola e industrial tras la Primera Guerra Mundial; 2) Especulación bursátil desenfrenada financiada con créditos bancarios de margen; 3) Desigualdad distributiva y contracción del consumo.',
          'Consecuencias inmediatas: quiebra masiva de miles de bancos, desplome del comercio mundial en más del 50%, cierre de empresas y tasa de desempleo del 25% en Estados Unidos y Europa.',
          'Impacto en América Latina y México: colapso de las exportaciones de materias primas (petróleo, plata, henequén, cobre) y caída drástica de los ingresos fiscales del Estado.'
        ],
        constructionApplication: 'Análisis de la vulnerabilidad de las inversiones inmobiliarias ante burbujas especulativas y crisis de liquidez bancaria.',
        practiceExercises: [
          {
            prompt: '¿Qué mecanismo especulativo provocó la rápida propagación de la quiebra bancaria durante el Crack bursátil de octubre de 1929 en Estados Unidos?',
            hint: 'Créditos otorgados para comprar acciones que luego perdieron su valor.',
            solution: 'La compra de acciones a crédito ("on margin"): los inversionistas solo ponían el 10% en efectivo y los bancos les prestaban el 90%; al desplomarse los precios de las acciones, los compradores no pudieron liquidar sus deudas, arrastrando a los bancos a la quiebra al quedarse sin liquidez para devolver los ahorros de los depositantes.'
          }
        ]
      },
      {
        id: 'ent-top-4',
        title: 'El Modelo Keynesiano y la Intervención del Estado Mediante Obra Pública',
        rap: 'RAP 4: Interpreta la teoría de John Maynard Keynes sobre la demanda agregada y el gasto público contracíclico.',
        summary: 'Ante el fracaso del liberalismo clásico de "dejar hacer, dejar pasar" (laissez-faire) para resolver la Gran Depresión, el economista británico John Maynard Keynes propuso que el Estado debe intervenir activamente en la economía para estimular la demanda agregada en periodos de recesión.',
        keyPoints: [
          'Crítica a la Ley de Say: Keynes demostró que la economía de libre mercado no tiende espontáneamente al pleno empleo y puede estancarse indefinidamente con alto desempleo.',
          'Gasto público deficitario: en épocas de crisis, el gobierno debe endeudarse temporalmente para financiar masivamente grandes proyectos de infraestructura pública.',
          'Efecto multiplicador keynesiano: cada peso invertido por el Estado en obra civil genera ingresos salariales que se gastan en bienes de consumo, reactivando la cadena productiva general.',
          'Política monetaria y fiscal expansiva: reducción de tasas de interés y aumento de la inversión gubernamental directa.'
        ],
        constructionApplication: 'El programa nacional de infraestructura como herramienta gubernamental contracíclica prioritaria durante desaceleraciones económicas.',
        practiceExercises: [
          {
            prompt: '¿Por qué según John Maynard Keynes la inversión en obras públicas es más efectiva para reactivar la economía que simplemente bajar los impuestos a los ricos?',
            hint: 'Propensión marginal a consumir de los trabajadores de la construcción.',
            solution: 'Porque los trabajadores de la construcción tienen una alta propensión marginal a consumir; gastan de inmediato la totalidad de sus jornales en comida, vestido y transporte, inyectando liquidez instantánea a la economía local, mientras que los sectores de mayores ingresos tienden a ahorrar o especular con las rebajas fiscales.'
          }
        ]
      },
      {
        id: 'ent-top-5',
        title: 'El "New Deal" de Roosevelt y la Consolidación del Estado de Bienestar',
        rap: 'RAP 5: Analiza las políticas de reconstrucción económica en EUA y Europa que dieron origen al Estado de Bienestar.',
        summary: 'En 1933, el presidente estadounidense Franklin D. Roosevelt implementó el "New Deal" (Nuevo Trato), un programa de reformas estatales profundas que combinó asistencia social, regulación bancaria y la mayor movilización de mano de obra en infraestructura de la historia moderna.',
        keyPoints: [
          'Works Progress Administration (WPA) y Civilian Conservation Corps (CCC): agencias gubernamentales que dieron empleo directo a más de 8 millones de personas desocupadas para construir carreteras, puentes, aeropuertos, presas (como la monumental Presa Hoover) y escuelas.',
          'Regulación del sistema financiero: creación de la SEC para vigilar la bolsa de valores y la ley Glass-Steagall para separar la banca comercial de ahorros de la banca de inversión especulativa.',
          'Nacimiento del Estado de Bienestar (Welfare State): garantía estatal de pensiones de retiro (Social Security Act de 1935), seguro de desempleo, salario mínimo y reconocimiento de derechos sindicales.'
        ],
        constructionApplication: 'Concepción de las obras de infraestructura no solo como activos físicos, sino como plataformas de inclusión laboral y estabilidad social.',
        practiceExercises: [
          {
            prompt: '¿Cuál fue la función principal de la Works Progress Administration (WPA) en el programa del New Deal estadounidense?',
            hint: 'Empleo masivo a través de obras civiles y proyectos públicos.',
            solution: 'Contratar directamente a millones de trabajadores desocupados para diseñar y construir miles de obras de infraestructura pública (carreteras, puentes, escuelas, hospitales y parques), inyectando salarios y restableciendo la dignidad y poder adquisitivo de las familias.'
          }
        ]
      }
    ]
  },
  {
    id: 'ent-mod-2',
    title: 'Parcial 2: Modelos Económicos en México del Siglo XX a la Actualidad',
    parcialNumber: 2,
    competence: 'Analiza la evolución de los modelos de desarrollo en México: Cardenismo, Sustitución de Importaciones, Desarrollo Estabilizador, Desarrollo Compartido y Neoliberalismo.',
    topics: [
      {
        id: 'ent-top-6',
        title: 'El Cardenismo (1934-1940): Reforma Agraria, Expropiación y Fundación del IPN',
        rap: 'RAP 1: Caracteriza el proyecto nacionalista de Lázaro Cárdenas y el papel fundacional del Instituto Politécnico Nacional.',
        summary: 'El sexenio de Lázaro Cárdenas del Río transformó la estructura política y económica de México, consolidando las demandas históricas de la Revolución Mexicana mediante el reparto masivo de tierras, la recuperación de los recursos estratégicos y la educación técnica de los hijos de la clase trabajadora.',
        keyPoints: [
          'Reforma Agraria integral: reparto de más de 18 millones de hectáreas a comunidades campesinas y creación del ejido colectivo (ej. La Laguna y Yucatán).',
          'Expropiación Petrolera (18 de marzo de 1938): rescate de la industria de hidrocarburos de manos de compañías extranjeras (El Águila, Standard Oil) y creación de Petróleos Mexicanos (PEMEX).',
          'Nacionalización de Ferrocarriles Nacionales de México (1937) y construcción de líneas férreas estratégicas.',
          'Fundación del Instituto Politécnico Nacional (IPN, 1936): concebido por Cárdenas y Juan de Dios Bátiz para formar a los ingenieros, arquitectos y técnicos civiles que construyeran y administraran la nueva infraestructura industrial del país ("La Técnica al Servicio de la Patria").'
        ],
        constructionApplication: 'Identificación de la misión social e histórica de los técnicos de la construcción egresados del IPN en el desarrollo de la infraestructura soberana.',
        practiceExercises: [
          {
            prompt: '¿Cuál fue la motivación primordial del general Lázaro Cárdenas para fundar el Instituto Politécnico Nacional (IPN) en 1936?',
            hint: 'Formación de cuadros técnicos nacionales tras la nacionalización de industrias estratégicas.',
            solution: 'Dotar a México de técnicos e ingenieros nacionales altamente calificados provenientes de las clases obrera y campesina, capaces de operar, construir y desarrollar las industrias y servicios recién nacionalizados (petróleo, ferrocarriles, electricidad) sin depender de peritos extranjeros.'
          }
        ]
      },
      {
        id: 'ent-top-7',
        title: 'Modelo de Sustitución de Importaciones (1940-1954)',
        rap: 'RAP 2: Explica el surgimiento de la industria nacional mexicana durante y después de la Segunda Guerra Mundial.',
        summary: 'Iniciado bajo los gobiernos de Manuel Ávila Camacho (1940-1946) y Miguel Alemán Valdés (1946-1952), este modelo aprovechó que las potencias industriales bélicas estaban en guerra para sustituir los bienes de consumo que antes se importaban por productos fabricados en México, mediante fuertes aranceles proteccionistas.',
        keyPoints: [
          'Política proteccionista: subsidios gubernamentales a empresas nacionales, exenciones de impuestos a nuevas industrias y altos impuestos a importaciones.',
          'Nacionalismo económico y crecimiento del sector manufacturero textil, alimentario y siderúrgico.',
          'Grandes obras del Alemanismo: modernización portuaria, carreteras troncales, sistema de riego agrícola en el norte y la emblemática construcción de Ciudad Universitaria (UNAM) y las primeras unidades habitacionales del ISSSTE (Centro Urbano Presidente Alemán CUPA, diseñado por Mario Pani).',
          'Límites del modelo: alta inflación, déficit de divisas e incapacidad de producir maquinaria pesada y tecnología avanzada propia.'
        ],
        constructionApplication: 'Nacimiento de los primeros complejos habitacionales multifamiliares de concreto en México diseñados para responder a la migración masiva del campo a la ciudad.',
        practiceExercises: [
          {
            prompt: '¿Cuál fue el objetivo central del Modelo de Sustitución de Importaciones (ISI) implementado en México a partir de 1940?',
            hint: 'Fabricar internamente lo que antes se compraba en el extranjero.',
            solution: 'Fomentar la industrialización del país mediante el establecimiento de barreras arancelarias protectoras para que las empresas mexicanas produjeran localmente los bienes de consumo manufacturados en vez de adquirirlos del mercado estadounidense o europeo.'
          }
        ]
      },
      {
        id: 'ent-top-8',
        title: 'El "Milagro Mexicano" o Desarrollo Estabilizador (1954-1970)',
        rap: 'RAP 3: Analiza la época de mayor crecimiento sostenido y estabilidad cambiaria del México moderno.',
        summary: 'Comprende los sexenios de Adolfo Ruiz Cortines (1952-1958), Adolfo López Mateos (1958-1964) y Gustavo Díaz Ordaz (1964-1970), bajo la conducción económica del secretario de Hacienda Antonio Ortiz Mena. Fue el periodo de mayor prosperidad macroeconómica del siglo XX en el país.',
        keyPoints: [
          'Crecimiento económico sobresaliente: Crecimiento promedio del PIB del 6.7% anual y del PIB per cápita del 3.4% anual con baja inflación (menor al 3% anual).',
          'Tipo de cambio fijo histórico: Paridad inamovible de $12.50 viejos pesos por dólar estadounidense durante 22 años (de 1954 a 1976).',
          'Grandes obras públicas del IPN y de la infraestructura nacional: Construcción de la Unidad Profesional "Adolfo López Mateos" de Zacatenco del IPN (1959), nacionalización de la industria eléctrica (1960), construcción de la Presa Malpaso, edificación de la Unidad Habitacional Nonoalco-Tlatelolco (Mario Pani, 1964) y la inauguración de las tres primeras líneas del Metro de la Ciudad de México (1969).',
          'Crisis y contradicciones: Concentración de la riqueza en las élites urbanas, estancamiento del campo campesino y autoritarismo político que detonó el Movimiento Estudiantil de 1968.'
        ],
        constructionApplication: 'Edificación masiva de infraestructura educativa pública que dio origen al campus de Zacatenco del IPN y al CECyT 11.',
        practiceExercises: [
          {
            prompt: '¿Qué paridad monetaria fija mantuvo el peso mexicano frente al dólar estadounidense durante la época del Desarrollo Estabilizador?',
            hint: 'Duró fija desde 1954 hasta 1976.',
            solution: 'Mantuvo una paridad fija inalterable de $12.50 pesos mexicanos por dólar estadounidense.'
          }
        ]
      },
      {
        id: 'ent-top-9',
        title: 'Desarrollo Compartido y Petrolización: Fundación del INFONAVIT y Crisis de 1982',
        rap: 'RAP 4: Examina la expansión del gasto público financiado con deuda externa y la crisis por petrolización.',
        summary: 'A partir de 1970, el modelo estabilizador se agotó dando paso a políticas de fuerte expansión del gasto público financiado con endeudamiento externo bajo Luis Echeverría (1970-1976) y José López Portillo (1976-1982), desembocando en una severa crisis inflacionaria y devaluatoria en 1982.',
        keyPoints: [
          'Desarrollo Compartido (1970-1976): creación del INFONAVIT (Instituto del Fondo Nacional de la Vivienda para los Trabajadores en 1972) para otorgar créditos de vivienda a la clase obrera, y del FOVISSSTE; aumento del déficit fiscal y primera devaluación del peso tras 22 años.',
          'Alianza para la Producción y Petrolización (1976-1982): descubrimiento del megayacimiento marino de Cantarell en la Sonda de Campeche; el país basó sus ingresos en el crudo ("administrar la abundancia"); en 1982 caen los precios mundiales del petróleo y suben las tasas de interés mundiales, desatando la moratoria de la deuda externa y la nacionalización de la banca.',
          'Devaluación drástica: el peso pasa de $12.50 a más de $150 pesos por dólar, sumiendo al país en hiperinflación.'
        ],
        constructionApplication: 'Elaboración de proyectos habitacionales financiados por el INFONAVIT bajo el esquema de vivienda de interés social.',
        practiceExercises: [
          {
            prompt: '¿En qué año se fundó el INFONAVIT bajo el gobierno de Luis Echeverría y cuál fue su misión inicial según el Artículo 123 constitucional?',
            hint: 'Promulgación de la Ley del INFONAVIT en la década de los setenta.',
            solution: 'Se fundó en 1972 con el mandato constitucional de administrar las aportaciones patronales del 5% del salario de los trabajadores para establecer un fondo nacional que permita otorgarles créditos baratos para la adquisición o construcción de una vivienda digna.'
          }
        ]
      },
      {
        id: 'ent-top-10',
        title: 'El Modelo Neoliberal, Apertura Comercial (TLCAN / T-MEC) y Globalización',
        rap: 'RAP 5: Analiza las reformas estructurales de apertura de mercados, privatización de paraestatales e integración global.',
        summary: 'Para superar la crisis de 1982, México adoptó los postulados del Consenso de Washington bajo los gobiernos de Miguel de la Madrid (1982-1988), Carlos Salinas de Gortari (1988-1994) y Ernesto Zedillo (1994-2000), reduciendo el tamaño del Estado en favor del libre mercado.',
        keyPoints: [
          'Políticas estructurales: privatización masiva de más de 1,000 empresas estatales (Telmex, banca nacionalizada, aerolíneas, siderúrgicas, ingenios azucareros y concesiones de autopistas de cuota).',
          'Apertura comercial: adhesión al GATT en 1986 y entrada en vigor del Tratado de Libre Comercio de América del Norte (TLCAN) el 1 de enero de 1994, modernizado en 2020 como T-MEC.',
          'Transformación del INFONAVIT: dejó de diseñar y construir conjuntos habitacionales directamente, pasando a ser una entidad financiera otorgadora de créditos hipotecarios para desarrolladores privados inmobiliarios.',
          'Fenómeno del Nearshoring: relocalización de cadenas de suministro globales hacia México, demandando parques industriales y naves de manufactura en el norte y centro del país.'
        ],
        constructionApplication: 'Diseño y construcción de parques industriales y centros logísticos para empresas de manufactura bajo el marco del T-MEC.',
        practiceExercises: [
          {
            prompt: '¿Cómo cambió el rol del INFONAVIT en el sector de la construcción de vivienda con la adopción del modelo neoliberal en la década de 1990?',
            hint: 'De constructor directo a entidad exclusivamente financiera.',
            solution: 'El INFONAVIT dejó de licitar y construir unidades habitacionales directamente con mano de obra y supervisión propia, convirtiéndose exclusivamente en una entidad crediticia e hipotecaria que financia la compra de casas construidas por consorcios inmobiliarios privados.'
          }
        ]
      }
    ]
  },
  {
    id: 'ent-mod-3',
    title: 'Parcial 3: Sectores Económicos, Variables Macroeconómicas y Derechos Constitucionales',
    parcialNumber: 3,
    competence: 'Interpreta los indicadores macroeconómicos del país y argumenta sobre los derechos fundamentales de la Constitución de 1917 y división de poderes.',
    topics: [
      {
        id: 'ent-top-11',
        title: 'Sectores Económicos en México y el Efecto Multiplicador de la Construcción',
        rap: 'RAP 1: Identifica la contribución de los tres sectores de la economía y el efecto de arrastre de la obra civil.',
        summary: 'La actividad económica de un país se agrupa en tres grandes sectores productivos interrelacionados: Primario, Secundario y Terciario. La industria de la construcción forma parte medular del sector secundario y es considerada el "termómetro" de la economía nacional por su capacidad de reactivar de inmediato más de 60 ramas industriales periféricas.',
        keyPoints: [
          'Sector Primario o Agropecuario: Extracción directa de recursos naturales sin transformación química (agricultura, ganadería, silvicultura, pesca y caza). Aporta alrededor del 3.5% del PIB nacional pero emplea a cerca del 12% de la población activa.',
          'Sector Secundario o Industrial: Transformación física y química de materias primas en bienes manufacturados (industria de la transformación, minería y extracción de hidrocarburos, generación y distribución de energía eléctrica, agua y gas, e Industria de la Construcción). La construcción representa entre el 6% y el 8% del PIB mexicano y genera millones de empleos directos e indirectos.',
          'Sector Terciario o de Servicios: Comercialización y prestación de actividades intangibles (comercio mayorista y minorista, banca y servicios financieros, hotelería y turismo, telecomunicaciones, transporte, salud y educación). Representa más del 60% del PIB de México.',
          'Encuesta Nacional de Ocupación y Empleo (ENOE - INEGI): instrumento oficial trimestral para medir el empleo formal e informal.'
        ],
        constructionApplication: 'Monitoreo de indicadores de producción de concreto, cemento y varilla como barómetro de reactivación de proyectos inmobiliarios.',
        practiceExercises: [
          {
            prompt: '¿Por qué los economistas afirman que la Industria de la Construcción tiene el más alto "efecto multiplicador o de arrastre" en la economía mexicana?',
            hint: 'Demanda de insumos de múltiples industrias y uso intensivo de mano de obra.',
            solution: 'Porque para construir cualquier edificio o puente se consumen materias primas de más de 60 ramas industriales distintas (acereras, cementeras, canteras, plásticos, vidrieras, pinturas, herrajes), generando simultáneamente una demanda masiva de mano de obra directa no calificada y calificada que distribuye ingresos inmediatos a las familias.'
          }
        ]
      },
      {
        id: 'ent-top-12',
        title: 'Variables Macroeconómicas Fundamentales: PIB, Inflación e INPC',
        rap: 'RAP 2: Interpreta estadísticas macroeconómicas del INEGI y BANXICO para el análisis de costos.',
        summary: 'Las variables macroeconómicas sintetizan el estado general de salud y rumbo de la economía nacional, orientando las decisiones de inversión en infraestructura.',
        keyPoints: [
          'Producto Interno Bruto (PIB): valor monetario total de todos los bienes y servicios finales producidos en el territorio geográfico de México durante un año calendario.',
          'PIB Nominal (a precios corrientes del año en curso) vs PIB Real (ajustado a precios constantes de un año base, eliminando el efecto distorsionador de la inflación).',
          'Inflación: incremento generalizado y sostenido en los precios de los bienes y servicios de la economía durante un periodo determinado.',
          'Índice Nacional de Precios al Consumidor (INPC): indicador del INEGI que mide la evolución del costo de una canasta de bienes y servicios representativa del gasto de los hogares.',
          'Tasa de Interés Interbancaria de Equilibrio (TIIE) de BANXICO: costo del dinero que determina las tasas de créditos hipotecarios y de construcción.'
        ],
        constructionApplication: 'Ajuste de costos paramétricos por metro cuadrado en proyectos de mediano plazo incorporando pronósticos de inflación.',
        practiceExercises: [
          {
            prompt: 'Si el PIB Nominal de México creció 7% en un año pero la inflación acumulada medida por el INPC fue de 5%, ¿cuánto creció realmente el volumen físico de la producción (PIB Real)?',
            hint: 'PIB Real ≈ Crecimiento Nominal - Inflación.',
            solution: 'El PIB Real creció aproximadamente un 2% (7% - 5% = 2%). La mayor parte del aumento monetario se debió a la subida de precios y no a un incremento real en la producción de bienes y servicios.'
          }
        ]
      },
      {
        id: 'ent-top-13',
        title: 'Mercado Laboral en México: PEA, Informalidad y Salario Real vs Nominal',
        rap: 'RAP 3: Analiza la estructura de la Población Económicamente Activa y el poder adquisitivo del salario.',
        summary: 'El mercado de trabajo en México presenta características estructurales particulares, con una alta participación de empleo informal en obras de edificación privada menor.',
        keyPoints: [
          'Población Económicamente Activa (PEA): personas de 15 años y más que tienen empleo (ocupadas) o que están buscando activamente trabajo (desocupadas).',
          'Población No Económicamente Activa (PNEA): estudiantes de tiempo completo, jubilados y personas dedicadas exclusivamente a labores domésticas sin remuneración.',
          'Tasa de Informalidad Laboral (TIL): porcentaje de la población ocupada que labora al margen de la seguridad social y del régimen fiscal (ronda entre 50% y 54% a nivel nacional, siendo superior en cuadrillas de albañilería menor).',
          'Salario Nominal (cifra en pesos plasmada en el contrato o nómina) vs Salario Real (capacidad de compra real de bienes de la canasta básica tras descontar la inflación acumulada).'
        ],
        formulas: [
          {
            name: 'Salario Real',
            formula: 'Salario_Real = Salario_Nominal / INPC',
            explanation: 'Medida del poder de compra efectivo de los trabajadores descontando la inflación.'
          }
        ],
        constructionApplication: 'Actualización y escalación obligatoria de precios unitarios de mano de obra en contratos de obra pública conforme a los Índices de Precios del Productor del INEGI.',
        practiceExercises: [
          {
            prompt: 'Si el salario nominal de un oficial fierrero aumenta un 8% en un año pero la inflación acumulada del costo de la canasta alimentaria es del 12%, ¿qué le ocurrió a su salario real?',
            hint: 'Compara el incremento porcentual de ingreso frente al encarecimiento de los precios.',
            solution: 'Su salario real DISMINUYÓ un 4%; a pesar de recibir más billetes en su sobre de raya semanal, su capacidad adquisitiva efectiva se redujo pudiendo comprar menos víveres que el año previo.'
          }
        ]
      },
      {
        id: 'ent-top-14',
        title: 'Constitución Política de 1917: Derechos Humanos y Garantías Sociales (Art. 3, 4, 27 y 123)',
        rap: 'RAP 4: Analiza las garantías individuales y los derechos sociales consagrados en la Carta Magna.',
        summary: 'Promulgada el 5 de febrero de 1917 en Querétaro bajo el liderazgo de Venustiano Carranza, la Carta Magna mexicana fue la primera en el mundo en incorporar los Derechos Sociales, protegiendo a campesinos, obreros y familias vulnerables.',
        keyPoints: [
          'Parte Dogmática (Artículos 1° al 29°): consagra los Derechos Humanos, la no discriminación (Art. 1°), la libertad de trabajo y profesión lícita (Art. 5°) y la igualdad sustantiva.',
          'Artículo 3°: Derecho a la educación pública, gratuita, laica, universal, obligatoria e inclusiva (desde preescolar hasta nivel medio superior).',
          'Artículo 4°: Derecho a la salud, agua potable, medio ambiente sano y derecho de toda familia a disfrutar de una vivienda digna y decorosa.',
          'Artículo 27°: Propiedad originaria de la Nación sobre tierras, aguas y recursos minerales; régimen de propiedad ejidal y expropiación por causa de utilidad pública.',
          'Artículo 123°: Bases de las relaciones laborales: Apartado A (obreros, empleados privados; jornada de 8 horas, descanso semanal, salario mínimo, seguridad social y reparto de utilidades).'
        ],
        constructionApplication: 'Garantía del derecho constitucional a una vivienda digna (Art. 4°) en la planeación y desarrollo de vivienda pública social.',
        practiceExercises: [
          {
            prompt: '¿Qué artículo de la Constitución Política Mexicana consagra expresamente el derecho de toda familia a disfrutar de una vivienda digna y decorosa?',
            hint: 'Es el mismo artículo que consagra el derecho a la salud y al medio ambiente sano.',
            solution: 'El Artículo 4° Constitucional, en su párrafo séptimo.'
          }
        ]
      },
      {
        id: 'ent-top-15',
        title: 'Parte Orgánica Constitucional: División de Poderes y Estructura del Estado Mexicano',
        rap: 'RAP 5: Describe las funciones de los Poderes Ejecutivo, Legislativo y Judicial en el Estado de derecho.',
        summary: 'La Parte Orgánica de la Constitución (Artículos 30 al 136) estructura el funcionamiento de la República representativa, democrática, laica y federal, delimitando con precisión las atribuciones de los tres poderes de la Unión para evitar la concentración absolutista del poder.',
        keyPoints: [
          'Poder Ejecutivo Federal (Art. 80-89): depositado en el Presidente de la República, electo democráticamente por 6 años sin reelección. Administra los recursos públicos, ejecuta las leyes y comanda las fuerzas armadas.',
          'Poder Legislativo Federal (Art. 50-79): Congreso de la Unión bicameral compuesto por: 1) Cámara de Diputados (500 legisladores: 300 de mayoría relativa y 200 de representación proporcional; aprueban en exclusiva el Presupuesto de Egresos de la Federación); 2) Cámara de Senadores (128 legisladores; representan el pacto federal y aprueban tratados internacionales y nombramientos de ministros).',
          'Poder Judicial de la Federación (Art. 94-107): Suprema Corte de Justicia de la Nación (SCJN), Tribunales Colegiados y Juzgados de Distrito. Interpreta las leyes y resuelve juicios de amparo en defensa de los derechos ciudadanos contra abusos de autoridad.',
          'Artículo 115: El Municipio Libre como base de la división territorial y organización política y administrativa de los estados.'
        ],
        constructionApplication: 'Identificación de la Cámara de Diputados como el órgano que aprueba el Presupuesto de Egresos que financia las obras de infraestructura federal cada año.',
        practiceExercises: [
          {
            prompt: '¿Cuál es el único órgano del Estado mexicano facultado constitucionalmente para discutir, modificar y aprobar el Presupuesto de Egresos de la Federación que define el dinero asignado a obras públicas?',
            hint: 'Es una de las dos cámaras del Congreso de la Unión.',
            solution: 'La Cámara de Diputados del H. Congreso de la Unión, con base en la fracción IV del Artículo 74 de la Constitución Política de los Estados Unidos Mexicanos.'
          }
        ]
      }
    ]
  }
];

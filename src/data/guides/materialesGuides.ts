import { StudyModule } from '../../types';

export const MATERIALES_GUIDES: StudyModule[] = [
  {
    id: 'mat-mod-1',
    title: 'Parcial 1: Desarrollo Sustentable, Huella Ecológica, Ciclo de Vida y Certificaciones (LEED y EDGE)',
    parcialNumber: 1,
    competence: 'Evalúa el impacto ambiental de los materiales constructivos mediante el análisis de ciclo de vida (ACV) y aplica criterios de certificación sustentable LEED, EDGE y NMX-AA-164.',
    topics: [
      {
        id: 'mat-top-1',
        title: 'Desarrollo Sustentable y Huella Ecológica en la Construcción',
        rap: 'RAP 1: Analiza los pilares de la sustentabilidad y cuantifica la huella de carbono e hídrica de los insumos constructivos.',
        summary: 'El desarrollo sustentable (definido en el Informe Brundtland de 1987) satisface las necesidades del presente sin comprometer la capacidad de las futuras generaciones para satisfacer las suyas, equilibrando tres dimensiones: viabilidad económica, equidad social y preservación ecológica. El sector de la construcción consume globalmente el 40% de los recursos naturales vírgenes extraídos y genera el 36% de las emisiones de gases de efecto invernadero (GEI).',
        keyPoints: [
          'Energía Embebida o Incorporada: energía total consumida en la extracción de materia prima, procesamiento industrial, transporte a obra, colocación y eventual demolición.',
          'Huella de Carbono: cantidad total de emisiones de dióxido de carbono equivalente (CO₂e) emitidas durante la manufactura del material (ej., la producción de 1 tonelada de cemento Portland ordinario emite aproximadamente 0.8 a 0.9 toneladas de CO₂ a la atmósfera por calcinación de caliza).',
          'Huella Hídrica: volumen total de agua dulce utilizada directa e indirectamente en los procesos fabriles y de curado.',
          'Economía Circular: transición del modelo lineal tradicional "extraer-fabricar-desechar" al modelo circular "reducir-reutilizar-reciclar-regenerar".'
        ],
        constructionApplication: 'Especificación de cementos con escoria o puzolanas (CPC o CPO puzolánico) para reducir un 30% la huella de carbono de la estructura de concreto de una obra.',
        practiceExercises: [
          {
            prompt: '¿Por qué sustituir tabiques rojos recocidos cocidos en hornos artesanales de leña o llantas por Bloques de Tierra Comprimida (BTC) reduce drásticamente la huella de carbono?',
            hint: 'El BTC no requiere combustión para fraguar ni emite humos contaminantes.',
            solution: 'Porque el BTC se prensa mecánicamente y se cura a temperatura ambiente mediante estabilización con 5-8% de cal o cemento, eliminando por completo la quema de combustibles fósiles altamente contaminantes en hornos de cocción a 1000°C.'
          }
        ]
      },
      {
        id: 'mat-top-2',
        title: 'Análisis de Ciclo de Vida (ACV / ISO 14040) y Declaraciones Ambientales (EPD)',
        rap: 'RAP 2: Determina las etapas de impacto ambiental de los materiales desde la cuna hasta la tumba.',
        summary: 'El Análisis de Ciclo de Vida (ACV) es una metodología estandarizada por la norma ISO 14040 e ISO 14044 para evaluar las cargas ambientales asociadas a un producto o sistema constructivo a lo largo de todas las etapas de su existencia.',
        keyPoints: [
          'Enfoques de evaluación: 1) De la Cuna a la Tumba (Cradle-to-Grave: desde la extracción hasta su disposición final en vertederos); 2) De la Cuna a la Puerta (Cradle-to-Gate: hasta que sale de la fábrica); 3) De la Cuna a la Cuna (Cradle-to-Cradle: cuando los residuos se reciclan íntegramente como nutrientes técnicos o biológicos para nuevos ciclos).',
          'Declaración Ambiental de Producto (EPD / DAP): documento verificado por terceros independientes que cuantifica de forma transparente el potencial de calentamiento global (GWP), acidificación, eutrofización y agotamiento de recursos fósiles.',
          'Límites del sistema: definición de inventario de ciclo de vida (LCI) y evaluación de impacto ambiental (LCIA).'
        ],
        constructionApplication: 'Requisito de presentación de Declaraciones Ambientales de Producto (EPD) a los proveedores de concreto y acero para obtener créditos en auditorías de sustentabilidad.',
        practiceExercises: [
          {
            prompt: '¿En qué consiste el principio "Cradle to Cradle" (De la Cuna a la Cuna) aplicado a la demolición de una estructura de concreto armado?',
            hint: 'Reciclaje total de los escombros para fabricar nuevos elementos.',
            solution: 'El concreto demolido se tritura y clasifica mecánicamente para utilizarse como agregado grueso reciclado en nuevas mezclas de concreto o bases para carreteras, y el acero de refuerzo se funde al 100% en hornos de arco eléctrico para producir nuevas varillas corrugadas, cerrando el ciclo de vida sin generar residuos.'
          }
        ]
      },
      {
        id: 'mat-top-3',
        title: 'Sistemas de Certificación Sustentable: LEED, EDGE y Norma NMX-AA-164-SCFI',
        rap: 'RAP 3: Aplica los lineamientos y créditos de los estándares de certificación de edificios verdes.',
        summary: 'Los sellos de certificación sustentable acreditan ante organismos internacionales que un edificio fue diseñado y construido superando los estándares convencionales de eficiencia energética, ahorro de agua y calidad ambiental interior.',
        keyPoints: [
          'LEED (Leadership in Energy and Environmental Design, USGBC): evalúa Sitios Sustentables, Eficiencia en Agua, Energía y Atmósfera, Materiales y Recursos, y Calidad Ambiental Interior. Niveles: Certificado (40-49 pts), Plata (50-59 pts), Oro (60-79 pts) y Platino (80+ pts).',
          'EDGE (Excellence in Design for Greater Efficiencies, IFC/Banco Mundial): exige como mínimo un ahorro comprobable del 20% en Energía, 20% en Agua y 20% en Energía Embebida de los Materiales respecto a la línea base local.',
          'NMX-AA-164-SCFI-2013: Norma Oficial Mexicana que establece los criterios y especificaciones técnicas ambientales mínimas para la edificación sustentable en territorio nacional.',
          'Programa de Certificación de Edificaciones Sustentables (PCES) de la CDMX: otorga reducciones del 10% al 20% en el pago del impuesto predial a proyectos certificados.'
        ],
        constructionApplication: 'Gestión de ahorros fiscales de predial e ISR al certificar desarrollos habitacionales bajo el estándar EDGE en México.',
        practiceExercises: [
          {
            prompt: '¿Cuáles son los tres pilares de ahorro porcentual mínimo que exige la certificación internacional EDGE para acreditar un edificio verde?',
            hint: 'Energía operativa, consumo hídrico e insumos.',
            solution: 'Ahorro mínimo del 20% en consumo de energía eléctrica, 20% en consumo de agua potable y 20% en energía incorporada (embebida) en los materiales constructivos.'
          }
        ]
      },
      {
        id: 'mat-top-4',
        title: 'Manejo Integral y Reciclaje de Residuos de Construcción y Demolición (RCD)',
        rap: 'RAP 4: Diseña el Plan de Manejo de Residuos conforme a la norma ambiental NADF-007-RNAT.',
        summary: 'Los Residuos de la Construcción y Demolición (escombros) representan un severo problema de contaminación y saturación de rellenos sanitarios. La normatividad vigente exige su clasificación en obra y entrega a plantas de reciclaje autorizadas.',
        keyPoints: [
          'Clasificación de RCD en obra: Tipo A (Concreto simple o armado, mampostería limpia sin contaminantes); Tipo B (Mezcla de materiales térreos, morteros y tabiques); Tipo C (Residuos con contaminantes: yeso, asbesto, madera, plásticos); Tipo D (Materiales metálicos ferrosos y no ferrosos).',
          'Norma Ambiental NADF-007-RNAT-2019 (CDMX): establece la obligatoriedad para toda obra con manifestación B o C de contar con un Plan de Manejo de RCD y acreditar el tiro en plantas de tratamiento.',
          'Productos reciclados de escombro: grava triturada reciclada, arena de trituración para banquetas, bases estabilizadas para pavimentos y adoquines ecológicos.'
        ],
        constructionApplication: 'Tramitación de los manifiestos de entrega-recepción de escombro sellados por plantas de reciclaje certificadas para el cierre formal de la bitácora.',
        practiceExercises: [
          {
            prompt: '¿Por qué está estrictamente prohibido mezclar placas de yeso o tablaroca con el escombro de concreto en las tolvas de retiro?',
            hint: 'Presencia de sulfatos que contaminan el concreto reciclado.',
            solution: 'Porque el yeso es sulfato de calcio dihidratado; si se mezcla con concreto reciclado, los iones sulfato reaccionan químicamente con el aluminato tricálcico del cemento formando etringita tardía destructiva que fractura cualquier concreto nuevo fabricado con ese agregado.'
          }
        ]
      },
      {
        id: 'mat-top-5',
        title: 'Madera Estructural Certificada (FSC), Bambú Guadua y Fibras Naturales',
        rap: 'RAP 5: Selecciona maderas de aprovechamiento forestal sustentable y bambú como elementos estructurales de baja energía.',
        summary: 'La madera y el bambú son los únicos materiales estructurales renovables capaces de actuar como sumideros netos de carbono, fijando CO₂ atmosférico en sus tejidos leñosos durante su crecimiento vegetal.',
        keyPoints: [
          'Certificación FSC (Forest Stewardship Council): garantiza que la madera procede de bosques gestionados ambientalmente de forma apropiada, socialmente benéfica y económicamente viable.',
          'Bambú Guadua (Guadua angustifolia Kunth): resistencia a tracción paralela a la fibra de hasta 1,200 kg/cm²; ciclo de maduración de solo 4 a 6 años frente a los 25 a 40 años de árboles maderables.',
          'Preservación química del bambú: curado por inmersión o inyección con solución al 2.5% de sales de bórax y ácido bórico para neutralizar almidones que atraen termitas y polillas (Dinoderus minutus).',
          'Fibras vegetales de refuerzo: henequén, yute, lino y cáñamo como sustitutos ecológicos de las mallas plásticas en morteros y aplanados de barro.'
        ],
        constructionApplication: 'Diseño de uniones estructurales en bambú rellenando el entrenudo con mortero fluido (grout) y pernos de acero galvanizado pasantes de 1/2".',
        practiceExercises: [
          {
            prompt: '¿Por qué se debe cortar el bambú estructural en la fase lunar de cuarto menguante y antes del amanecer?',
            hint: 'Concentración de savia y almidón en los culmos.',
            solution: 'Porque en cuarto menguante la atracción gravitacional disminuye y la savia desciende a las raíces, reduciendo al mínimo el contenido de almidón y humedad en el tallo, lo cual hace al bambú mucho menos atractivo para los insectos barrenadores y acelera el secado.'
          }
        ]
      }
    ]
  },
  {
    id: 'mat-mod-2',
    title: 'Parcial 2: Materiales Ecológicos, Bioclimática y Eficiencia Térmica en la Envolvente',
    parcialNumber: 2,
    competence: 'Selecciona materiales vernáculos de bajo impacto y diseña envolventes arquitectónicas de alto desempeño térmico y bioclimático.',
    topics: [
      {
        id: 'mat-top-6',
        title: 'Mampostería Ecológica: Bloques de Tierra Comprimida (BTC), Adobe y Tapial',
        rap: 'RAP 1: Diseña mezclas de tierra estabilizada y verifica la resistencia a compresión de bloques prensados.',
        summary: 'Los materiales térreos industrializados aprovechan la abundancia del suelo local con nula emisión de gases contaminantes, dotando a la edificación de una alta inercia térmica natural para climas extremos.',
        keyPoints: [
          'Bloque de Tierra Comprimida (BTC): elaborado con suelo arcilloso-arenoso (15 a 30% de arcilla), estabilizado con 6 a 8% de cemento o cal apagada y compactado en prensa manual (tipo Cinva-Ram) o hidráulica a presiones de 20 a 50 kg/cm².',
          'Adobe tecnificado: bloques secados al sol estabilizados con fibras de paja o henequén y mucílago de nopal para impermeabilización natural.',
          'Tapial (Rammed Earth): muros monolíticos de tierra apisonada en capas de 15 cm dentro de moldes de cimbra deslizante, reforzados con contrafuertes y mallas plásticas para resistencia sísmica.',
          'Ventajas bioclimáticas: gran capacidad calorífica que retrasa el paso de la onda de calor diurna hacia el interior (desfase térmico de 8 a 12 horas).'
        ],
        constructionApplication: 'Construcción de viviendas bioclimáticas en zonas semiáridas de México utilizando la misma tierra extraída de la nivelación del predio.',
        practiceExercises: [
          {
            prompt: '¿Cuál es la función del mucílago (baba) de nopal adicionado tradicionalmente a los aplanados de cal y tierra en edificaciones de adobe?',
            hint: 'Impermeabilizante natural y reductor de agrietamientos.',
            solution: 'El mucílago de nopal actúa como un polímero orgánico natural que reduce la tensión superficial del agua, plastifica la mezcla mejorando la adherencia, bloquea la capilaridad del aplanado repeliendo el agua de lluvia y previene fisuras por contracción.'
          }
        ]
      },
      {
        id: 'mat-top-7',
        title: 'Concretos Sustentables: Cenizas Volantes, Escorias de Horno y Cemento Verde',
        rap: 'RAP 2: Diseña mezclas de concreto estructural incorporando subproductos industriales puzolánicos.',
        summary: 'La industria cementera representa una de las mayores fuentes mundiales de CO₂. La formulación de concretos verdes sustituye parte del clínker por materiales cementantes suplementarios (SCMs).',
        keyPoints: [
          'Ceniza Volante (Fly Ash): residuo de la combustión de carbón en centrales termoeléctricas; esferas microscópicas ricas en sílice y alúmina vítreas que mejoran la trabajabilidad del concreto fresco.',
          'Escoria Granulada de Alto Horno (GGBS): subproducto de la fundición de hierro; reacciona hidráulicamente aportando altísima resistencia contra el ataque de sulfatos y cloruros marinos.',
          'Humo de Sílice (Silica Fume): partículas ultrafinas que rellenan los microporos de la matriz de cemento produciendo concretos de ultra alta resistencia (HPC) e impermeabilidad casi absoluta.',
          'Cemento Portland Compuesto (CPC): norma NMX-C-414, permite incorporar hasta 35% de adiciones minerales reduciendo sustancialmente el factor clínker.'
        ],
        constructionApplication: 'Diseño de zapatas y pilas de cimentación masivas con concreto de bajo calor de hidratación adicionado con 40% de escoria para prevenir agrietamientos térmicos.',
        practiceExercises: [
          {
            prompt: '¿Por qué la adición de ceniza volante al concreto mejora su trabajabilidad y reduce el consumo de agua de mezclado?',
            hint: 'Morfología microscópica de las partículas de ceniza volante.',
            solution: 'Porque las partículas de ceniza volante son microesferas vítreas perfectamente redondas y pulidas que actúan como "balines o rodamientos microscópicos" entre los granos de cemento y agregados, reduciendo la fricción interna de la mezcla fluida.'
          }
        ]
      },
      {
        id: 'mat-top-8',
        title: 'Agregados Reciclados de Concreto en Bases y Mezclas Estructurales',
        rap: 'RAP 3: Dosifica concretos con agregados gruesos reciclados considerando su absorción de agua.',
        summary: 'La trituración de concretos de estructuras demolidas genera agregados gruesos reciclados (RCA) que reemplazan la grava virgen extraída de canteras y cerros protegidos.',
        keyPoints: [
          'Mortero adherido: las partículas de agregado reciclado conservan fragmentos de pasta de cemento vieja porosa, lo que aumenta su absorción de agua del 1% (grava natural) al 5-8%.',
          'Ajuste de agua de mezclado: los agregados reciclados deben saturarse superficialmente secos (SSS) antes de entrar a la revolvedora para que no le roben agua al cemento nuevo.',
          'Porcentajes de sustitución recomendados: hasta 20% a 30% de agregado reciclado grueso para concretos estructurales sin merma apreciable en f\'c ni módulo de elasticidad; hasta 100% para guarniciones, banquetas y bases de pavimentos.'
        ],
        constructionApplication: 'Uso obligatorio de agregado reciclado en el 10% mínimo del volumen total de concreto en obras públicas de la CDMX.',
        practiceExercises: [
          {
            prompt: 'Si un lote de grava reciclada tiene una absorción del 7% frente al 1.5% de la grava triturada de mina, ¿qué precaución crítica debe tomarse en la planta de premezclado?',
            hint: 'Control de la relación agua/cemento efectiva.',
            solution: 'Se debe pre-humedecer el agregado reciclado en el acopio o calcular e ingresar el agua de absorción adicional en la computadora de la dosificadora; de lo contrario, la grava absorberá el agua de hidratación del cemento desplomando el revenimiento y provocando falta de hidratación y fisuras prematuras.'
          }
        ]
      },
      {
        id: 'mat-top-9',
        title: 'Aislamiento Térmico y Acústico Ecológico: Celulosa, Corcho, Lana Mineral y Cáñamo',
        rap: 'RAP 4: Selecciona materiales aislantes naturales y cuantifica su resistencia térmica y factor acústico.',
        summary: 'El aislamiento de la envolvente reduce drásticamente el consumo de electricidad en aires acondicionados y calefactores. Los aislantes naturales reemplazan a los polímeros sintéticos derivados del petróleo.',
        keyPoints: [
          'Celulosa proyectada o insuflada: fabricada con papel periódico reciclado triturado al 85% tratado con ácido bórico y bórax (ignífugo, repelente de insectos y fungicida). Conductividad térmica k ≈ 0.038 W/(m·K).',
          'Corcho natural aglomerado: obtenido de la corteza del alcornoque sin talar el árbol; impermeable al vapor de agua, imputrescible y con alta absorción de ruido de impacto.',
          'Hormigón de cáñamo (Hempcrete): mezcla de virutas leñosas del tallo de cáñamo con cal hidráulica; material transpirable, regulador de humedad y con huella de carbono negativa.',
          'Lana mineral de roca: fibras de roca basáltica fundida con alta resistencia al fuego directo (no propaga flama hasta 1,000°C).'
        ],
        constructionApplication: 'Insuflado de celulosa reciclada en muros dobles de tabique en recámaras para reducir el ruido exterior en 45 decibeles.',
        practiceExercises: [
          {
            prompt: 'Calcular la resistencia térmica R de una capa de aislamiento de corcho aglomerado de 5 cm de espesor con una conductividad térmica k = 0.04 W/(m·K).',
            hint: 'R = espesor / conductividad = e / k. Convierte cm a metros.',
            solution: 'R = 0.05 m / 0.04 W/(m·K) = 1.25 m²·K/W. A mayor R, mayor resistencia al paso del calor.'
          }
        ]
      },
      {
        id: 'mat-top-10',
        title: 'Transmitancia Térmica (Valor U), Envolventes y Normas NOM-008 y NOM-020-ENER',
        rap: 'RAP 5: Calcula el coeficiente de transferencia de calor U de muros compuestos y techos según normas oficiales.',
        summary: 'La envolvente arquitectónica regula el flujo de calor entre el interior y el exterior. La eficiencia térmica se rige en México por la NOM-008-ENER (edificios no residenciales) y la NOM-020-ENER (vivienda residencial), limitando la ganancia neta de calor en verano y la pérdida en invierno.',
        keyPoints: [
          'Resistencia Térmica Total (Rt): suma de las resistencias térmicas de cada una de las capas de material más las resistencias térmicas superficiales interior (Rsi) y exterior (Rse): Rt = Rsi + Σ(e_i / k_i) + Rse.',
          'Transmitancia Térmica (U): flujo de calor en vatios por metro cuadrado por cada grado kelvin de diferencia de temperatura: U = 1 / Rt (W/m²·K). A menor U, menor gasto en aire acondicionado.',
          'NOM-020-ENER: establece el presupuesto máximo de energía térmica permitida a través de la envolvente de la vivienda de acuerdo con la zona térmica del país (Zonas 1 a 4: cálido húmedo, cálido seco, templado, semifrío).'
        ],
        formulas: [
          {
            name: 'Transmitancia Térmica Total',
            formula: 'U = 1 / [ R_si + Σ (e_i / k_i) + R_se ]',
            explanation: 'Inverso de la resistencia térmica total sumando capas de materiales y resistencias superficiales.'
          }
        ],
        constructionApplication: 'Colocación de aislamiento de poliestireno extruido de 2 pulgadas en la losa de azotea para reducir hasta 6°C la temperatura interior en climas cálidos extremos (ej., Mexicali, Monterrey, Hermosillo).',
        practiceExercises: [
          {
            prompt: 'Si un muro de tabique sin aislar tiene un valor U = 2.40 W/m²·K y al colocarle aislamiento exterior térmico su valor desciende a U = 0.60 W/m²·K, ¿qué porcentaje de calor que atraviesa el muro se redujo?',
            hint: 'Reducción % = [(U_inicial - U_final) / U_inicial] × 100.',
            solution: 'Reducción = [(2.40 - 0.60) / 2.40] × 100 = (1.80 / 2.40) × 100 = 75% de reducción directa en la transmisión de calor a través del muro.'
          }
        ]
      }
    ]
  },
  {
    id: 'mat-mod-3',
    title: 'Parcial 3: Ecotecnologías: Agua Pluvial, Muros y Techos Verdes, y Energía Solar',
    parcialNumber: 3,
    competence: 'Dimensiona sistemas de captación pluvial (SCALL), tratamiento de aguas, azoteas verdes y paneles solares térmicos y fotovoltaicos.',
    topics: [
      {
        id: 'mat-top-11',
        title: 'Vidrios de Control Solar, Doble Vidriado (DVH) y Vidrios Low-E',
        rap: 'RAP 1: Selecciona cancelerías de alto desempeño térmico calculando el Factor Solar (SHGC).',
        summary: 'Los acristalamientos representan el punto más débil de la envolvente térmica de un edificio. Los cristales avanzados reducen las ganancias de radiación solar directa sin sacrificar el ingreso de luz natural.',
        keyPoints: [
          'Doble Vidriado Hermético (DVH / Termopanel): dos láminas de vidrio separadas por un espaciador perimetral de aluminio o polímero y una cámara estanca sellada con gas deshidratado o argón.',
          'Vidrios de Baja Emisividad (Low-E): recubrimiento de plata microscópica que refleja selectivamente los rayos infrarrojos solares de onda larga mientras deja pasar la luz visible.',
          'Coeficiente de Ganancia de Calor Solar (SHGC / Factor Solar g): fracción de radiación solar admitida a través de la ventana (valores entre 0 y 1; en climas cálidos se buscan SHGC < 0.35).',
          'Ruptura de Puente Térmico (RPT) en perfiles de cancelería: inserción de poliamida aislante en la perfilería de aluminio para evitar la transmisión de calor por el metal.'
        ],
        constructionApplication: 'Especificación de ventanas DVH con vidrio Low-E en fachadas poniente y sur para evitar el sobrecalentamiento vespertino de departamentos.',
        practiceExercises: [
          {
            prompt: '¿Por qué se produce condensación o "llanto" de agua en la cara interior de una ventana con vidrio sencillo en invierno y cómo lo soluciona el DVH?',
            hint: 'Puente térmico y temperatura del punto de rocío.',
            solution: 'Porque el vidrio simple se enfría a la temperatura exterior; el aire interior húmedo y caliente toca el vidrio frío bajando de la temperatura del punto de rocío y condensándose. El DVH mantiene el vidrio interior a temperatura ambiente gracias a la cámara de aire intermedia, eliminando totalmente la condensación.'
          }
        ]
      },
      {
        id: 'mat-top-12',
        title: 'Sistemas de Captación y Aprovechamiento de Agua de Lluvia (SCALL)',
        rap: 'RAP 2: Dimensiona cisternas de almacenamiento pluvial y selecciona trenes de filtración según la precipitación local.',
        summary: 'Un SCALL recolecta el agua de escorrentía de las techumbres durante la temporada de lluvias para sustituir el consumo de agua potable de la red en servicios sanitarios, lavado y riego.',
        keyPoints: [
          'Componentes del SCALL: 1) Área de captación (cubierta de losa impermeable con pendiente mínima del 2%); 2) Canalones y bajadas pluviales de PVC o lámina galvanizada; 3) Filtro de primeras aguas (dispositivo Tlaloque o separador de flujo que desvía los primeros 1 a 2 mm de lluvia cargados de polvo y heces de aves de la techumbre); 4) Cisterna de almacenamiento pluvial con reductor de turbulencia en la entrada; 5) Bomba y tren de filtración (filtro de sedimentos de 50 micras + filtro de carbón activado + lámpara de desinfección UV).',
          'Fórmula de captación: Volumen captado (L/año) = Área de techo (m²) × Precipitación anual (mm) × Coeficiente de escurrimiento C (0.80 a 0.90 para losas de concreto impermeabilizadas).'
        ],
        formulas: [
          {
            name: 'Volumen Anual de Agua Pluvial Captable',
            formula: 'V = ÁREA × PRECIPITACIÓN × C_escurrimiento',
            explanation: 'Litros de agua que se pueden recolectar al año en una techumbre.'
          }
        ],
        constructionApplication: 'Cumplimiento de la norma ambiental NADF-022-AGUAS para construcciones nuevas en la Ciudad de México que obliga a retener y aprovechar el agua de lluvia.',
        practiceExercises: [
          {
            prompt: 'En la Ciudad de México, con una precipitación media anual de 800 mm, ¿cuántos litros de agua al año se pueden captar en una losa de azotea limpia de 150 m² con un coeficiente de escurrimiento C = 0.85?',
            hint: '1 mm de lluvia equivale a 1 litro por metro cuadrado.',
            solution: 'Volumen = 150 m² × 800 mm × 0.85 = 150 × 800 × 0.85 = 102,000 litros al año (102 m³), suficiente para cubrir la demanda de descargas de inodoros de una familia de 5 personas durante más de 8 meses.'
          }
        ]
      },
      {
        id: 'mat-top-13',
        title: 'Tratamiento y Reúso de Aguas Grises: Trampas de Grasa, Humedales y Biodigestores',
        rap: 'RAP 3: Diseña sistemas descentralizados de tratamiento biológico de aguas jabonosas y residuales.',
        summary: 'La separación en origen de aguas grises (lavabos, regaderas, lavadoras) y aguas negras (inodoros y mingitorios) permite su tratamiento in situ con bajo consumo energético para recargar mantos freáticos o alimentar riego.',
        keyPoints: [
          'Trampas de grasa: retención gravimétrica de lípidos y jabones densos antes de ingresar a los filtros biológicos.',
          'Humedales artificiales de flujo subsuperficial: lechos de tezontle y grava plantados con vegetación de pantano (carrizos, papiros, lirios) cuyas raíces y bacterias asociadas degradan la materia orgánica disuelta sin generar malos olores ni mosquitos.',
          'Biodigestores anaerobios autolimpiables: tanques de polietileno con lecho de lodos y esferas de biomasa donde las bacterias anaerobias descomponen el agua residual doméstica.',
          'Norma NOM-003-SEMARNAT-1997: límites máximos permisibles de contaminantes para aguas residuales tratadas que se reúsen en servicios al público con contacto indirecto u ocasional.'
        ],
        constructionApplication: 'Instalación de doble red de tuberías de desagüe en departamentos: tubería gris para humedal y tubería negra directa a colector municipal.',
        practiceExercises: [
          {
            prompt: '¿Por qué los humedales artificiales de flujo subsuperficial no generan malos olores ni proliferación de mosquitos comparados con lagunas de oxidación abiertas?',
            hint: 'Nivel del agua bajo la grava.',
            solution: 'Porque el nivel del agua se mantiene entre 5 y 10 cm por debajo de la superficie del lecho de grava o tezontle, de modo que el líquido residual nunca entra en contacto directo con la atmósfera ni permite a los mosquitos depositar larvas.'
          }
        ]
      },
      {
        id: 'mat-top-14',
        title: 'Azoteas y Muros Verdes: Estratigrafía, Impermeabilización y Especies Vegetales',
        rap: 'RAP 4: Diseña sistemas de naturación urbana calculando cargas adicionales de peso y capas drenantes.',
        summary: 'Las azoteas verdes (techos vivos) mitigan el efecto de "isla de calor urbana", absorben hasta el 70% del agua de lluvia aliviando la red de drenaje pluvial, retienen partículas suspendidas de contaminación y brindan un extraordinario aislamiento térmico y acústico a la losa superior.',
        keyPoints: [
          'Clasificación: 1) Extensivas (sustrato delgado de 8 a 15 cm, plantas rastreras crasuláceas como Sedum, bajo mantenimiento, peso adicional de 70 a 150 kg/m²); 2) Intensivas (sustrato profundo de más de 30 cm, arbustos y árboles pequeños, acceso peatonal, peso adicional superior a 300 kg/m²).',
          'Estratigrafía constructiva obligatoria (de abajo hacia arriba): 1) Losa estructural con pendiente mínima de 2%; 2) Membrana impermeabilizante antirraíz (elastómero EPDM, TPO o prefabricado SBS con aditivo herbicida preventivo contra perforación de raíces); 3) Capa de protección mecánica y antipunzonamiento (geotextil no tejido de 300 g/m²); 4) Lámina drenante con nódulos de retención hídrica (copas alveolares de polietileno); 5) Capa filtrante de geotextil para evitar el paso de partículas finas; 6) Sustrato vegetal aligerado (mezcla de tepojal, perlita, tezontle fino y 20% de composta); 7) Capa vegetal.',
          'Muros verdes verticales: sistemas modulares de fieltros sintéticos hidropónicos o gaviones plásticos con riego por goteo automatizado y recirculación de nutrientes.'
        ],
        constructionApplication: 'Cálculo de sobrecarga muerta en el análisis estructural de losas de azotea destinadas a jardines botánicos o huertos urbanos.',
        practiceExercises: [
          {
            prompt: '¿Por qué la tierra negra vegetal común de jardín está estrictamente prohibida como sustrato en una azotea verde extensiva?',
            hint: 'Peso excesivo cuando se satura de agua y compactación que asfixia raíces.',
            solution: 'Porque la tierra de jardín tiene una densidad húmeda muy elevada (hasta 1,800 kg/m³) que sobrecarga peligrosamente la estructura del edificio, se compacta perdiendo drenaje y permeabilidad, y contiene materia orgánica densa que pudre las raíces; se debe usar sustrato aligerado con tepojal o perlita mineral.'
          }
        ]
      },
      {
        id: 'mat-top-15',
        title: 'Energía Solar Térmica (Termosifón) y Solar Fotovoltaica Interconectada a CFE',
        rap: 'RAP 5: Diseña sistemas solares térmicos para agua caliente sanitaria y sistemas fotovoltaicos bajo esquema Net Metering.',
        summary: 'El aprovechamiento de la radiación solar directa reduce la dependencia de combustibles fósiles (gas LP y gas natural) y la red eléctrica convencional mediante colectores solares térmicos y paneles fotovoltaicos.',
        keyPoints: [
          'Calentador Solar Térmico de Tubos de Vacío (All-Glass evacuated tubes): consta de tubos de vidrio de borosilicato concéntricos al vacío con recubrimiento absorbedor de nitruro de aluminio que captan la radiación difusa y directa, y un termotanque de acero inoxidable aislado con poliuretano expandido. Opera por termosifón (el agua caliente asciende naturalmente por menor densidad al termotanque). Ahorra entre 70% y 85% de gas en regaderas.',
          'Orientación e inclinación de colectores en México: siempre orientados al Sur geográfico con un ángulo de inclinación igual a la latitud del lugar + 10° (en la CDMX: latitud 19° + 10° = 29° a 30° para maximizar el rendimiento invernal).',
          'Sistemas Solares Fotovoltaicos Interconectados a la Red (SFVI): Módulos fotovoltaicos de silicio monocristalino o policristalino que generan corriente continua (DC); Microinversores o inversores centrales que convierten la energía a corriente alterna (AC a 127V / 220V sincronizada a 60 Hz); Medidor bidireccional de CFE bajo contrato de Medición Neta (Net Metering), donde los excedentes solares diurnos se inyectan a la red pública generando créditos en la factura bimestral.'
        ],
        constructionApplication: 'Instalación de calentadores solares de gravedad para tinacos elevados en azoteas con válvula mezcladora termostática antiescaldamiento a la salida.',
        practiceExercises: [
          {
            prompt: '¿Cuál es la orientación cardinal obligatoria para instalar un colector solar en cualquier localidad del territorio mexicano y qué inclinación angular se recomienda en la Ciudad de México?',
            hint: 'México se encuentra en el hemisferio norte; el sol viaja con declinación al sur durante el año.',
            solution: 'Debe orientarse estrictamente hacia el SUR geográfico verdadero. En la Ciudad de México (latitud 19° 24\' N) se recomienda un ángulo de inclinación de 30° respecto a la horizontal para optimizar la captación en los meses más fríos de invierno.'
          }
        ]
      }
    ]
  }
];

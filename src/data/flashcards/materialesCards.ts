import { Flashcard } from '../../types';

export const MATERIALES_FLASHCARDS: Flashcard[] = [
  // --- PARCIAL 1: PROPIEDADES, PÉTREOS, CICLO DE VIDA Y HUELLA DE CARBONO (17 TARJETAS) ---
  {
    id: 'fc-mat-01',
    subjectId: 'materiales-sustentables',
    moduleIndex: 0,
    category: 'Propiedades de los Materiales',
    front: '¿Cuál es la diferencia entre densidad real y densidad aparente de un material de construcción?',
    back: '• Densidad Real: es la masa por unidad de volumen considerando únicamente la materia sólida compacta, excluyendo todos los poros interiores.\n• Densidad Aparente: es la masa por unidad de volumen total incluyendo el volumen de sus poros y huecos interiores.\nEn materiales porosos como el tezontle o tepojal, la densidad aparente es mucho menor que la densidad real, haciéndolos ligeros para rellenos de losa.',
    formula: 'ρ_aparente = Masa / Volumen_total (con poros)'
  },
  {
    id: 'fc-mat-02',
    subjectId: 'materiales-sustentables',
    moduleIndex: 0,
    category: 'Propiedades Físicas',
    front: '¿Qué es la higroscopicidad y la porosidad abierta en los materiales pétreos?',
    back: '• Porosidad abierta: porcentaje de volumen de poros intercomunicados que tienen acceso al exterior del material, permitiendo la entrada de agua o vapor.\n• Higroscopicidad: capacidad de un material para absorber y retener humedad ambiental en estado de vapor hasta alcanzar un equilibrio higrométrico con el aire circundante.',
    tip: 'Materiales con alta porosidad abierta (como el tabique recocido) tienen alta succión de agua y requieren mojarse antes del junteo.'
  },
  {
    id: 'fc-mat-03',
    subjectId: 'materiales-sustentables',
    moduleIndex: 0,
    category: 'Propiedades Mecánicas',
    front: '¿Qué diferencia a un material frágil de un material dúctil y maleable?',
    back: '• Material Frágil: se rompe repentinamente al superar su límite elástico con escasa o nula deformación plástica previa (ej. concreto simple, tabique, piedra braza, vidrio común).\n• Material Dúctil: sufre grandes deformaciones plásticas y estiramiento antes de alcanzar la fractura, avisando con grietas y flechas (ej. acero de refuerzo, cobre).\n• Por eso el concreto se combina con varillas de acero: el acero aporta la ductilidad que le falta al concreto.',
    tip: 'Las estructuras dúctiles disipan energía sísmica sin colapsar repentinamente.'
  },
  {
    id: 'fc-mat-04',
    subjectId: 'materiales-sustentables',
    moduleIndex: 0,
    category: 'Propiedades Térmicas',
    front: '¿Qué es la Conductividad Térmica (λ o k) y la Transmitancia Térmica (Valor U)?',
    back: '• Conductividad Térmica (λ en W/m·K): propiedad intrínseca de un material que mide la facilidad con la que conduce el calor a través de su masa (menor valor = mejor aislante térmico).\n• Transmitancia Térmica (Valor U en W/m²·K): flujo de calor total que atraviesa un metro cuadrado de un elemento constructivo completo (muro o losa con sus aplanados) por cada grado de diferencia de temperatura entre interior y exterior.',
    tip: 'Para muros térmicamente eficientes se busca el menor Valor U posible.'
  },
  {
    id: 'fc-mat-05',
    subjectId: 'materiales-sustentables',
    moduleIndex: 0,
    category: 'Inercia Térmica',
    front: '¿Qué es la inercia térmica y cómo ayuda a amortiguar las temperaturas extremas en una vivienda?',
    back: 'Es la capacidad de los materiales pesados (adobe, concreto, mampostería de piedra) para almacenar calor durante las horas soleadas del día y liberarlo lentamente hacia el interior durante las frías horas nocturnas (amortiguamiento térmico y desfase de onda térmica).\nPermite mantener temperaturas interiores estables y confortables sin necesidad de aire acondicionado ni calefacción.',
    tip: 'En climas desérticos y templados de México, los muros gruesos de gran inercia térmica son bioclimáticamente ideales.'
  },
  {
    id: 'fc-mat-06',
    subjectId: 'materiales-sustentables',
    moduleIndex: 0,
    category: 'Pétreos Naturales',
    front: '¿Cuáles son las características y aplicaciones del Tezontle y el Tepojal (Pumita) en la construcción?',
    back: 'Son rocas volcánicas ígneas extrusivas sumamente vesiculares y porosas:\n• Tezontle (rojo o negro): densidad aparente baja (~1,200 a 1,400 kg/m³); se usa en cimientos ligeros, rellenos de pendientes en azoteas, drenajes filtrantes y como agregado para concreto ligero.\n• Tepojal o pumita (amarillo claro): aún más ligero (~800 a 1,000 kg/m³); se usa para fabricar tabicones ligeros (jalcreto) y rellenos de losas aligeradas para no sobrecargar la cimentación.',
    tip: 'El tezontle fue utilizado ampliamente por los mexicas y españoles en el Centro Histórico de CDMX para aligerar edificios sobre el lago.'
  },
  {
    id: 'fc-mat-07',
    subjectId: 'materiales-sustentables',
    moduleIndex: 0,
    category: 'Pétreos Naturales',
    front: '¿Cuáles son las aplicaciones del Basalto y el Granito en la edificación?',
    back: '• Basalto (piedra braza): roca ígnea volcánica densa, oscura, dura y de alta resistencia a compresión (> 600 kg/cm²); se usa en mampostería de cimentaciones, muros de contención y triturado como grava para concreto.\n• Granito: roca ígnea plutónica compacta de cuarzo, feldespato y mica; altísima dureza y resistencia al desgaste; se usa en recubrimientos de pisos de alto tránsito peatonal, escalinatas y cubiertas de cocina.',
    tip: 'El granito no se raya fácilmente y resiste ácidos domésticos a diferencia del mármol.'
  },
  {
    id: 'fc-mat-08',
    subjectId: 'materiales-sustentables',
    moduleIndex: 0,
    category: 'Pétreos Sedimentarios',
    front: '¿Qué es la Cantera y el Mármol y por qué requieren precauciones en exteriores?',
    back: '• Cantera (toba volcánica cementada): roca porosa y blanda de fácil labrado artístico; muy susceptible a la erosión por lluvia ácida, salitre y heladas.\n• Mármol: roca metamórfica cristalina compuesta principalmente por carbonato de calcio (CaCO₃); susceptible al ataque por ácidos (limón, vinagre, lluvia ácida) y resbaloso al mojarse si está pulido.',
    tip: 'En fachadas exteriores de cantera debe aplicarse un hidrofugante repelente al agua base silano/siloxano transpirable.'
  },
  {
    id: 'fc-mat-09',
    subjectId: 'materiales-sustentables',
    moduleIndex: 0,
    category: 'Sustentabilidad y ACV',
    front: '¿Qué es el Análisis de Ciclo de Vida (ACV) de un material de construcción?',
    back: 'Es una metodología cuantitativa estandarizada (ISO 14040/14044) que evalúa el impacto ambiental total de un material "de la cuna a la tumba" (o "de la cuna a la cuna") a lo largo de todas sus fases:\n1. Extracción de materias primas.\n2. Manufactura y procesamiento industrial.\n3. Transporte y distribución a obra.\n4. Instalación y mantenimiento en uso.\n5. Fin de vida (demolición, disposición o reciclaje).',
    tip: 'Evita el "greenwashing" al demostrar científicamente si un material es verdaderamente ecológico.'
  },
  {
    id: 'fc-mat-10',
    subjectId: 'materiales-sustentables',
    moduleIndex: 0,
    category: 'Energía Embebida',
    front: '¿Qué es la Energía Embebida o Incorporada (Embodied Energy) de un material?',
    back: 'Es la cantidad total de energía primaria consumida (medida en MegaJoules por kilogramo, MJ/kg) para extraer, procesar, transportar y fabricar el producto listo para su uso en obra.\n• Materiales de muy alta energía embebida: aluminio virgen (~200 MJ/kg), acero virgen (~30-35 MJ/kg), plásticos y cemento Portland.\n• Materiales de muy baja energía embebida: madera certificada local (~2-3 MJ/kg), piedra natural, arena, adobe y tierra comprimida (~0.5 MJ/kg).',
    tip: 'Un diseño sustentable prioriza materiales locales de baja energía embebida.'
  },
  {
    id: 'fc-mat-11',
    subjectId: 'materiales-sustentables',
    moduleIndex: 0,
    category: 'Huella de Carbono',
    front: '¿Qué es la Huella de Carbono de un material y por qué el cemento Portland tiene un impacto crítico?',
    back: 'Es la cantidad total de gases de efecto invernadero emitidos durante su producción, expresada en kilogramos de CO₂ equivalente (kg CO₂ eq).\nLa industria del cemento genera cerca del 8% de todas las emisiones mundiales de CO₂ por dos causas:\n1. Descarbonatación química de la piedra caliza en el horno: CaCO₃ + calor → CaO + CO₂↑ (produce el 60% de las emisiones directas).\n2. Combustión de combustibles fósiles para calentar el horno a 1,450 °C (produce el 40% restante).',
    tip: 'Por cada tonelada de clinker tradicional producido se emite casi 1 tonelada de CO₂ a la atmósfera.'
  },
  {
    id: 'fc-mat-12',
    subjectId: 'materiales-sustentables',
    moduleIndex: 0,
    category: 'Materiales Locales',
    front: '¿Por qué la norma de edificación sustentable premia el uso de materiales de procedencia regional (radio de 500 km)?',
    back: 'Porque el transporte carretero en camiones pesados quema grandes volúmenes de diésel generando emisiones masivas de óxidos de nitrógeno (NOx) y CO₂.\nComprar materiales extraídos y procesados en un radio no mayor a 500 km del sitio de la obra elimina la huella de transporte y fomenta la economía regional.',
    tip: 'Criterio clave evaluado en certificaciones LEED (Crédito de Materiales Regionales).'
  },
  {
    id: 'fc-mat-13',
    subjectId: 'materiales-sustentables',
    moduleIndex: 0,
    category: 'Reciclaje de Residuos (RCD)',
    front: '¿Qué son los Residuos de la Construcción y Demolición (RCD) y cómo se valorizan según la norma ambiental de CDMX (NADF-007-RNAT)?',
    back: 'Son los desechos sólidos generados en obras (cascajo, concreto roto, mortero, pedacería de tabique, asfalto y cerámicos).\nLa norma de CDMX obliga a separarlos en obra y enviarlos a plantas de reciclaje de RCD certificadas (como Concretos Reciclados AGREC), donde se trituran y tamizan para producir AGREGADOS RECICLADOS (gravas y arenas) para bases de pavimentos y fabricación de banquetas, adoquines y bloques huecos.',
    tip: 'Tirar cascajo en barrancas o vía pública está penalizado severamente con cárcel y multas.'
  },
  {
    id: 'fc-mat-14',
    subjectId: 'materiales-sustentables',
    moduleIndex: 0,
    category: 'Toxicidad de Materiales',
    front: '¿Qué son los Compuestos Orgánicos Volátiles (COV / VOC) en pinturas y selladores y por qué deben evitarse?',
    back: 'Son sustancias químicas gaseosas a base de carbono (benceno, formaldehído, tolueno) que se evaporan a temperatura ambiente desde pinturas de esmalte base solvente, barnices, adhesivos y espumas.\nProvocan irritación respiratoria, alergias crónicas, dolores de cabeza y son cancerígenos (Síndrome del Edificio Enfermo).\nLa edificación sustentable exige pinturas al agua y selladores con CERO o BAJO contenido de VOC (< 50 g/L).',
    tip: 'Revisa siempre la ficha técnica ambiental (HPD - Health Product Declaration) del fabricante de pinturas.'
  },
  {
    id: 'fc-mat-15',
    subjectId: 'materiales-sustentables',
    moduleIndex: 0,
    category: 'Madera Sustentable',
    front: '¿Qué es la certificación forestal FSC (Forest Stewardship Council) para madera en la construcción?',
    back: 'Garantiza que la madera proviene de bosques administrados de forma ambientalmente responsable, socialmente benéfica y económicamente viable, donde por cada árbol talado se replantan nuevos ejemplares, preservando la biodiversidad y respetando los derechos de las comunidades locales.',
    tip: 'La madera certificada captura carbono atmosférico en sus fibras, teniendo huella de carbono negativa.'
  },
  {
    id: 'fc-mat-16',
    subjectId: 'materiales-sustentables',
    moduleIndex: 0,
    category: 'Economía Circular',
    front: '¿Cómo se aplica el principio de la Economía Circular en la arquitectura y edificación?',
    back: 'Reemplaza el modelo lineal tradicional ("extraer-fabricar-usar-tirar") por un sistema cerrado de valor:\n1. Diseño para el desensamble (Design for Deconstruction): uniones mecánicas atornilladas en vez de pegadas para recuperar piezas intactas.\n2. Reutilización directa de elementos estructurales y carpinterías.\n3. Reciclaje de alta fidelidad de metales, vidrios y agregados de concreto.\n4. Cero residuos al relleno sanitario.',
    tip: 'Un edificio sustentable se concibe desde el plano como un futuro "banco de materiales".'
  },
  {
    id: 'fc-mat-17',
    subjectId: 'materiales-sustentables',
    moduleIndex: 0,
    category: 'Contenido Reciclado',
    front: '¿Cuál es la diferencia entre contenido reciclado post-industrial y post-consumo?',
    back: '• Reciclado Post-industrial (pre-consumo): mermas, virutas y sobrantes de la línea de producción de una fábrica que se reincorporan al proceso de manufactura antes de salir al mercado.\n• Reciclado Post-consumo: material proveniente de productos que ya cumplieron su ciclo de vida en manos de usuarios finales (latas de aluminio recicladas, botellas de PET trituradas, llantas usadas para impermeabilizantes).\nEl post-consumo tiene mayor valor en certificaciones verdes.',
    tip: 'El acero para varillas en México se fabrica en más de un 80% con chatarra de acero post-consumo refundida en hornos de arco eléctrico.'
  },

  // --- PARCIAL 2: CONGLOMERANTES, CEMENTOS, MORTEROS, CERÁMICOS Y METALES (17 TARJETAS) ---
  {
    id: 'fc-mat-18',
    subjectId: 'materiales-sustentables',
    moduleIndex: 1,
    category: 'Aglomerantes y Conglomerantes',
    front: '¿Cuál es la diferencia química entre un aglomerante aéreo y un conglomerante hidráulico?',
    back: '• Aglomerante Aéreo (como la cal aérea o yeso): solo fragua y endurece en presencia de aire seco mediante secado o absorción de CO₂ atmosférico (carbonatación); ¡no puede fraguar bajo el agua y se deshace con la humedad continua!\n• Conglomerante Hidráulico (como el cemento Portland o cal hidráulica): fragua y endurece mediante reacciones químicas de hidratación en contacto con el agua, formando compuestos cristalinos insolubles estables incluso sumergido bajo el agua.',
    tip: 'El yeso es estrictamente aéreo y de uso exclusivo en interiores secos.'
  },
  {
    id: 'fc-mat-19',
    subjectId: 'materiales-sustentables',
    moduleIndex: 1,
    category: 'Yeso',
    front: '¿Cómo se obtiene el yeso de construcción y cuáles son sus propiedades y limitantes?',
    back: 'Se obtiene por deshidratación térmica parcial de la piedra de aljez (sulfato de calcio dihidratado CaSO₄·2H₂O) a 120-170 °C, transformándose en hemihidrato (CaSO₄·0.5H₂O).\n• Propiedades: fraguado muy rápido (5 a 15 minutos), excelente acabado liso blanco, buen aislante acústico y gran resistencia pasiva al fuego (libera agua al calentarse retardando la transmisión del fuego).\n• Limitante: altamente soluble en agua; en presencia de humedad se ablanda, mancha y desprende (nunca usar en exteriores ni regaderas).',
    tip: 'Para aplanados de yeso se añade cal para retrasar ligeramente el fraguado y mejorar su trabajabilidad.'
  },
  {
    id: 'fc-mat-20',
    subjectId: 'materiales-sustentables',
    moduleIndex: 1,
    category: 'Cal Hidratada',
    front: '¿Cuáles son los beneficios de incorporar calhidratada (cal apagada) en los morteros de albañilería?',
    back: '1. Aumenta drásticamente la plasticidad y trabajabilidad de la mezcla ("mortero graso" fácil de untar con la cuchara).\n2. Gran capacidad de retención de agua, evitando que el tabique poroso le robe humedad al cemento.\n3. Mayor adherencia y sellado de microfisuras por autoregeneración (carbonatación lenta con CO₂).\n4. Permite la transpirabilidad del muro al vapor de agua, evitando condensaciones interiores.\n5. Acción fungicida y bactericida natural por su alto pH alcalino.',
    tip: 'Un mortero cemento-cal-arena 1:1:6 es infinitamente más flexible y resistente a grietas que uno de puro cemento-arena.'
  },
  {
    id: 'fc-mat-21',
    subjectId: 'materiales-sustentables',
    moduleIndex: 1,
    category: 'Cemento Portland',
    front: '¿Cuáles son las materias primas del Clinker de cemento Portland y a qué temperatura se cuecen?',
    back: 'Se elabora con una mezcla finamente molida y dosificada de:\n• Caliza (aporta Carbonato de Calcio CaO, ~75-80%)\n• Arcilla o esquisto (aporta Sílice SiO₂, Alúmina Al₂O₃ y Óxido de Hierro Fe₂O₃, ~20-25%).\nSe calcina en hornos rotatorios cilíndricos a temperaturas de 1,450 °C a 1,500 °C hasta la fusión incipiente (clinkerización).\nAl clinker enfriado se le agrega entre 3% y 5% de yeso molido como retardador del tiempo de fraguado.',
    tip: 'Sin el yeso, el cemento sufriría fraguado instantáneo incontrolable al primer contacto con agua.'
  },
  {
    id: 'fc-mat-22',
    subjectId: 'materiales-sustentables',
    moduleIndex: 1,
    category: 'Tipos de Cemento en México',
    front: '¿Cuáles son los tipos de cemento normalizados en México según la norma NMX-C-414-ONNCCE?',
    back: '• CPO: Cemento Portland Ordinario (clinker puro + yeso).\n• CPP: Cemento Portland Puzolánico (con puzolana natural o cenizas volantes).\n• CPEG: Cemento Portland con Escoria Granulada de alto horno.\n• CPC: Cemento Portland Compuesto (mezcla de clinker con puzolana, escoria y caliza; el más vendido en México para obra general).\n• CPS: Cemento con Escoria de Alto Horno.\n• CEG: Cemento de Escoria Granulada.',
    tip: 'La clase resistente indica los kg/cm² a 28 días: 20, 30, 40 (la letra R indica resistencia rápida a 3 días: ej. CPC 30R).'
  },
  {
    id: 'fc-mat-23',
    subjectId: 'materiales-sustentables',
    moduleIndex: 1,
    category: 'Cementos Sustentables',
    front: '¿Por qué el cemento CPC y los cementos con adiciones puzolánicas reducen el impacto ambiental?',
    back: 'Porque sustituyen entre un 15% y un 35% del clinker contaminante por materiales cementantes suplementarios (como puzolanas volcánicas, calizas molidas o subproductos industriales como cenizas volantes y escoria siderúrgica).\nEsto reduce en la misma proporción el consumo de energía térmica en el horno y abate directamente hasta un 30% las emisiones netas de CO₂ por tonelada de cemento producido.',
    tip: 'Cemex (Vertua), Holcim (ECOPlanet) y Moctezuma ofrecen líneas de cemento bajo en carbono bajo este principio.'
  },
  {
    id: 'fc-mat-24',
    subjectId: 'materiales-sustentables',
    moduleIndex: 1,
    category: 'Puzolanas',
    front: '¿Qué es una puzolana y cómo reacciona químicamente dentro del concreto?',
    back: 'Es un material silíceo o silicoaluminoso que por sí solo no tiene propiedades cementantes, pero que finamente molido y en presencia de humedad reacciona químicamente con el hidróxido de calcio libre [Ca(OH)₂] liberado por la hidratación del cemento, formando silicatos de calcio hidratados adicionales (C-S-H) estables y resistentes.\nCierra la red de poros capilares haciéndolo más impermeable y resistente a sulfatos y sales marinas.',
    tip: 'El nombre proviene de Pozzuoli, Italia, donde los romanos mezclaban ceniza volcánica del Vesubio con cal.'
  },
  {
    id: 'fc-mat-25',
    subjectId: 'materiales-sustentables',
    moduleIndex: 1,
    category: 'Aditivos para Concreto',
    front: '¿Cómo contribuyen los aditivos reductores de agua de alto rango (superfluidificantes) a la sustentabilidad?',
    back: 'Permiten reducir el agua de mezclado del concreto entre un 20% y un 30% manteniendo una fluidez excepcional sin segregación.\nAl requerir menos agua para la misma resistencia, se reduce proporcionalmente la cantidad de cemento necesaria por metro cúbico de concreto, disminuyendo el costo y la huella de carbono de la mezcla.',
    tip: 'Basados en policarboxilatos de última generación.'
  },
  {
    id: 'fc-mat-26',
    subjectId: 'materiales-sustentables',
    moduleIndex: 1,
    category: 'Cerámicos de Mampostería',
    front: '¿Cuál es la diferencia entre un tabique rojo recocido artesanal y un tabique cerámico extruido industrializado?',
    back: '• Tabique Rojo Artesanal: fabricado en hornos rústicos de leña o llantas (alta emisión contaminante), cocción desuniforme (piezas "blandas" poco cocidas o "recochadas" vitrificadas deformes), dimensiones variables y menor resistencia a compresión (30 a 50 kg/cm²).\n• Tabique Extruido Industrializado (ej. Novaceramic): cocido en hornos túnel de gas natural con control computarizado, huecos diseñados para aligerar peso y alojar acero, dimensiones milimétricas perfectas y alta resistencia (100 a 150 kg/cm²).',
    tip: 'El tabique industrializado reduce el consumo de mortero de junteo a la mitad gracias a su uniformidad dimensional.'
  },
  {
    id: 'fc-mat-27',
    subjectId: 'materiales-sustentables',
    moduleIndex: 1,
    category: 'Tierra Compactada y Adobe',
    front: '¿Qué es el Bloque de Tierra Comprimida (BTC) y cuáles son sus ventajas ecológicas?',
    back: 'Es un mampuesto fabricado compactando en prensa mecánica o hidráulica una mezcla de tierra arenosa limpia, arcilla (~15%) y estabilizada con un 5% a 8% de calhidra o cemento, curada con humedad sin pasar por horno de fuego.\nVentajas:\n• Energía embebida prácticamente nula (cero cocción).\n• Extraordinaria inercia térmica y confort higrométrico.\n• 100% biodegradable y reutilizable al final de su vida útil.',
    tip: 'A diferencia del adobe tradicional rústico, el BTC tiene caras lisas uniformes y resiste mejor la erosión por lluvia.'
  },
  {
    id: 'fc-mat-28',
    subjectId: 'materiales-sustentables',
    moduleIndex: 1,
    category: 'Bloques de Concreto',
    front: '¿Cuáles son las características del Bloque Hueco de Concreto (Block) en la construcción moderna?',
    back: 'Pieza prismática vibrocomprimida fabricada con cemento, arena y gravilla (medidas típicas: 15 × 20 × 40 cm y 12 × 20 × 40 cm).\nVentajas:\n1. Gran velocidad de avance en obra (un block rinde el equivalente a 4.5 tabiques recocidos).\n2. Las celdas huecas interiores permiten alojar varillas de refuerzo y colarse como castillos ahogados sin necesidad de cimbra de madera exterior.\n3. Las celdas de aire intermedias mejoran el aislamiento térmico y acústico.',
    tip: 'Las NTC exigen que el mortero de junteo penetre al menos 2 cm dentro de los huecos o use mortero grout en celdas armadas.'
  },
  {
    id: 'fc-mat-29',
    subjectId: 'materiales-sustentables',
    moduleIndex: 1,
    category: 'Acero de Refuerzo Sustentable',
    front: '¿Por qué el acero es considerado uno de los materiales más sustentables y circulares de la ingeniería?',
    back: 'Porque el acero es 100% RECICLABLE infinitas veces sin perder ninguna de sus propiedades mecánicas originales de resistencia, rigidez o ductilidad.\nEn México siderúrgicas como Deacero o Gerdau Corsa producen varilla corrugada y perfiles estructurales utilizando casi al 100% chatarra de acero reciclada fundida en hornos de arco eléctrico de alta eficiencia energética.',
    tip: 'Reciclar una tonelada de acero ahorra 1,100 kg de mineral de hierro virgen y 630 kg de carbón mineral.'
  },
  {
    id: 'fc-mat-30',
    subjectId: 'materiales-sustentables',
    moduleIndex: 1,
    category: 'Aluminio en Cancelería',
    front: '¿Cuáles son las ventajas y consideraciones del aluminio extruido en cancelería y fachadas?',
    back: '• Ventajas: extraordinariamente ligero (un tercio del peso del acero), resistente a la corrosión atmosférica mediante anodizado o pintura electrostática termoendurecida, no requiere mantenimiento de repintado y es 100% reciclable.\n• Consideración térmica: tiene una altísima conductividad térmica; si no cuenta con sistema de ROTURA DE PUENTE TÉRMICO (RPT con poliamida intermedia), transmite rápidamente el frío y calor exterior provocando condensaciones interiores en los perfiles.',
    tip: 'El reciclaje del aluminio secundario solo requiere el 5% de la energía eléctrica necesaria para producir aluminio primario a partir de bauxita.'
  },
  {
    id: 'fc-mat-31',
    subjectId: 'materiales-sustentables',
    moduleIndex: 1,
    category: 'Vidrios de Seguridad',
    front: '¿Cuál es la diferencia entre el vidrio templado y el vidrio laminado?',
    back: '• Vidrio Templado: tratado térmicamente calentándolo a 650 °C y enfriándolo bruscamente con chorros de aire; es 4 a 5 veces más resistente al impacto que el vidrio común. Si se rompe, se desintegra en miles de pequeños fragmentos granulares no cortantes.\n• Vidrio Laminado: unión de dos o más hojas de vidrio unidas por una película plástica intermedia de Polivinil Butiral (PVB). Al romperse, los fragmentos rotos quedan firmemente adheridos a la lámina plástica sin caer ni abrir hueco, brindando seguridad anti-intrusión y excelente aislamiento acústico.',
    tip: 'En barandales, canceles de baño y domos es obligatorio por reglamento usar vidrio templado o laminado.'
  },
  {
    id: 'fc-mat-32',
    subjectId: 'materiales-sustentables',
    moduleIndex: 1,
    category: 'Vidrios de Control Solar',
    front: '¿Cómo funciona el vidrio doble con cámara (Duo-Vent) y el vidrio Low-E (Bajo Emisivo)?',
    back: '• Duo-Vent: dos lunas de vidrio separadas por un perfil separador deshidratado y una cámara estanca de aire seco o gas argón de 6 a 16 mm de espesor; reduce la transmitancia térmica (U) a más de la mitad y aisla acústicamente del tráfico.\n• Vidrio Low-E: tiene una capa microscópica invisible de óxidos metálicos depositada al vacío que refleja la radiación infrarroja de onda larga (calor) impidiendo que escape el calor en invierno o que entre en verano, dejando pasar la luz visible natural.',
    tip: 'En edificios corporativos vidriados reduce el gasto de aire acondicionado hasta en un 40%.'
  },
  {
    id: 'fc-mat-33',
    subjectId: 'materiales-sustentables',
    moduleIndex: 1,
    category: 'Pinturas Ecológicas',
    front: '¿Qué ventajas tienen las pinturas de silicato y pinturas de cal frente a las vinílicas plásticas tradicionales?',
    back: '• Son 100% minerales y libres de resinas de petróleo y disolventes tóxicos.\n• Reaccionan químicamente con el sustrato de mortero o concreto (petrificación / silicificación) formando un enlace inseparable que no se ampolla ni desprende con el sol.\n• Son totalmente transpirables y permeables al vapor de agua, impidiendo la formación de hongos, moho y humedad atrapada dentro de los muros.',
    tip: 'Ideales para restauración de monumentos históricos y bioconstrucción.'
  },
  {
    id: 'fc-mat-34',
    subjectId: 'materiales-sustentables',
    moduleIndex: 1,
    category: 'Bambú Estructural',
    front: '¿Por qué al bambú Guadua se le llama "el acero vegetal" en la construcción sustentable?',
    back: 'Porque posee una altísima resistencia a la tensión y flexión paralela a sus fibras comparable a la del acero estructural en relación con su propio peso (relación resistencia/peso excepcional), gracias a su sección tubular hueca y nudos transversales rigidizantes.\nCrece a un ritmo ultrarrápido (hasta 10 a 20 cm diarios) y madura en solo 4 a 5 años absorbiendo enormes toneladas de CO₂.',
    tip: 'Requiere tratamiento preventivo de inmunización con sales de bórax y ácido bórico contra termitas y hongos xilófagos.'
  },

  // --- PARCIAL 3: BIOCLIMÁTICA, ENVOLVENTES, ECOTECNIAS Y CERTIFICACIONES (16 TARJETAS) ---
  {
    id: 'fc-mat-35',
    subjectId: 'materiales-sustentables',
    moduleIndex: 2,
    category: 'Diseño Bioclimático',
    front: '¿Cuál es la orientación solar más favorable para las fachadas principales en la zona central de México (CDMX, latitud ~19° N)?',
    back: '• Orientación SUR: óptima para recámaras y estancias; recibe sol en invierno (cuando el sol viaja bajo en el horizonte calentando los espacios) y es fácil de proteger en verano con un alero horizontal corto (cuando el sol pasa casi cenital a mediodía).\n• Orientación NORTE: recibe luz natural difusa constante y uniforme sin ganancia térmica directa (ideal para estudios, oficinas y talleres).\n• Orientaciones ESTE y OESTE: muy desfavorables si no se protegen con partelsoles verticales, ya que el sol bajo de mañana y poniente penetra horizontalmente recalentando el interior.',
    tip: 'Evita grandes ventanales al poniente sin vegetación o partelsoles en climas cálidos.'
  },
  {
    id: 'fc-mat-36',
    subjectId: 'materiales-sustentables',
    moduleIndex: 2,
    category: 'Protección Solar Pasiva',
    front: '¿Cuál es la diferencia de diseño entre un partelsol horizontal (alero) y un partelsol vertical (quilla)?',
    back: '• Partelsol Horizontal (alero, voladizo o cornisa): bloquea los rayos solares con ángulos de gran altura solar (cenitales); es sumamente efectivo en fachadas orientadas al SUR durante las horas centrales del día.\n• Partelsol Vertical (quillas o celosías verticales): bloquea los rayos solares de baja inclinación lateral y rasantes; es indispensable en fachadas orientadas al ESTE y OESTE.',
    tip: 'El arquitecto Le Corbusier popularizó estos elementos bajo el nombre francés "brise-soleil".'
  },
  {
    id: 'fc-mat-37',
    subjectId: 'materiales-sustentables',
    moduleIndex: 2,
    category: 'Ventilación Pasiva',
    front: '¿Cómo funciona la ventilación cruzada natural y el efecto chimenea en un edificio?',
    back: '• Ventilación Cruzada: aberturas en fachadas opuestas o adyacentes a diferente presión de viento; el aire entra por la zona de barlovento (sobrepresión) y sale por sotavento (succión), renovando el aire y refrescando por evaporación.\n• Efecto Chimenea: el aire caliente interior se vuelve menos denso y sube de forma natural hacia la parte superior saliendo por claraboyas o linternillas altas de la azotea, lo que genera una succión negativa que introduce aire fresco exterior por las ventanas bajas.',
    tip: 'Para máxima eficacia, la ventana de salida superior debe ser un 20% más grande que la ventana de entrada inferior.'
  },
  {
    id: 'fc-mat-38',
    subjectId: 'materiales-sustentables',
    moduleIndex: 2,
    category: 'Aislamientos Térmicos',
    front: '¿Cuáles son los principales materiales aislantes térmicos utilizados en azoteas y muros?',
    back: '1. Poliestireno Expandido (EPS / Unicel): ligero, económico, con celdas de aire cerradas (conductividad λ ≈ 0.038 W/m·K).\n2. Poliestireno Extruido (XPS): mayor densidad, impermeable al agua y alta resistencia mecánica a compresión; ideal bajo pisos y losas transitables.\n3. Lana mineral de roca y fibra de vidrio: resistentes al fuego (incombustibles) y excelentes absorbentes acústicos.\n4. Corcho natural aglomerado: 100% ecológico, renovable y de gran durabilidad.',
    tip: 'Aislar la losa de azotea reduce más del 60% de la ganancia o pérdida térmica de una casa de un nivel.'
  },
  {
    id: 'fc-mat-39',
    subjectId: 'materiales-sustentables',
    moduleIndex: 2,
    category: 'Techos Fríos',
    front: '¿Qué es el Índice de Reflectancia Solar (SRI) y cómo funciona un impermeabilizante reflectivo blanco?',
    back: 'El SRI (Solar Reflectance Index) mide la capacidad de una superficie para reflejar el calor solar (reflectancia solar) y emitir calor en el infrarrojo (emitancia térmica) en una escala de 0 a 100.\nUn impermeabilizante blanco acrílico de alto SRI (> 80) refleja más del 80% de la radiación solar incidente, reduciendo la temperatura de la losa de azotea de 60 °C a menos de 35 °C en días calurosos, mitigando el efecto de isla de calor urbana.',
    tip: 'Un techo blanco reflectante reduce drásticamente el uso de ventiladores y aires acondicionados.'
  },
  {
    id: 'fc-mat-40',
    subjectId: 'materiales-sustentables',
    moduleIndex: 2,
    category: 'Energía Solar Térmica',
    front: '¿Cuál es la diferencia entre un calentador solar de colector plano y uno de tubos de vacío de borosilicato?',
    back: '• Colector Plano: caja aislada con serpentín de tubos de cobre bajo un cristal templado; adecuado para climas cálidos y templados con sol constante.\n• Tubos de Vacío (Heat Pipe / All-glass): tubos de doble pared de cristal de borosilicato concéntricos con vacío térmico absoluto entre ellos (como un termo). Tienen pérdidas de calor casi nulas por convección y calientan agua por termosifón incluso en días nublados o inviernos fríos hasta más de 70-80 °C.',
    tip: 'En una vivienda ahorra entre el 70% y el 80% del consumo mensual de gas L.P.'
  },
  {
    id: 'fc-mat-41',
    subjectId: 'materiales-sustentables',
    moduleIndex: 2,
    category: 'Sistemas Fotovoltaicos',
    front: '¿Cómo funciona un sistema solar fotovoltaico interconectado a la red de CFE con medidor bidireccional?',
    back: '1. Los paneles solares fotovoltaicos (células de silicio) convierten la luz solar en corriente directa (CD).\n2. El microinversor o inversor central transforma la CD en corriente alterna (CA) a 127/220 V sincronizada con la red doméstica.\n3. La energía alimenta primero las cargas de la casa; el excedente no consumido se inyecta a la red pública de CFE.\n4. El MEDIDOR BIDIRECCIONAL registra tanto la energía consumida de CFE como la energía inyectada a su red, descontándola en el recibo bimestral (Net Metering).',
    tip: 'No requiere costosas baterías de almacenamiento químico que se degradan con los años.'
  },
  {
    id: 'fc-mat-42',
    subjectId: 'materiales-sustentables',
    moduleIndex: 2,
    category: 'Captación de Agua de Lluvia',
    front: '¿Cuáles son los componentes de un sistema de captación y aprovechamiento pluvial (SCALL)?',
    back: '1. Área de captación: azotea limpia e impermeabilizada con materiales no tóxicos.\n2. Canaletas y bajadas pluviales con rejilla deshojadora.\n3. Dispositivo separador de primeras lluvias ("Tlaloque"): desvía los primeros 1 a 2 mm de lluvia que lavan el hollín, polvo y heces de aves de la azotea.\n4. Filtro de sedimentos de malla fina.\n5. Cisterna de almacenamiento pluvial con válvula flotante y clorinador.\n6. Bomba y red secundaria para uso en inodoros, lavado de patios y riego.',
    tip: 'En la CDMX un SCALL residencial puede abastecer hasta el 40-50% del agua anual de una familia.'
  },
  {
    id: 'fc-mat-43',
    subjectId: 'materiales-sustentables',
    moduleIndex: 2,
    category: 'Tratamiento de Aguas Residuales',
    front: '¿Cuál es la diferencia entre Aguas Grises y Aguas Negras y cómo se reutilizan las grises?',
    back: '• Aguas Negras: aguas provenientes de inodoros (WC) y mingitorios con alto contenido de materia fecal y patógenos biológicos.\n• Aguas Grises: aguas jabonosas provenientes de regaderas, lavabos y lavadora de ropa (sin heces fecales).\nTratamiento de aguas grises: pasan por una trampa de grasas y un biofiltro de arena y grava con plantas de pantano (humedal artificial); el agua tratada resultante se recircula exclusivamente para alimentar los inodoros o el riego de jardines.',
    tip: 'Reutilizar aguas grises en inodoros ahorra hasta 60 litros de agua potable por persona al día.'
  },
  {
    id: 'fc-mat-44',
    subjectId: 'materiales-sustentables',
    moduleIndex: 2,
    category: 'Biodigestores',
    front: '¿Cómo funciona un biodigestor anaeróbico autolimpiable residencial para zonas sin drenaje público?',
    back: 'Sustituye a las fosas sépticas tradicionales que contaminan mantos freáticos:\n1. Las aguas negras entran a un tanque hermético de polietileno de alta densidad.\n2. Bacterias anaerobias (que viven sin oxígeno) descomponen y digieren la materia orgánica en el fondo.\n3. Los efluentes líquidos clarificados atraviesan un lecho filtrante interno de aros plásticos y salen hacia un pozo de absorción o zanja de infiltración.\n4. Los lodos estabilizados se purgan cada año abriendo una válvula de extracción manual sin necesidad de camión vactor.',
    tip: 'Los lodos secos purgados pueden usarse como abono orgánico para jardinería.'
  },
  {
    id: 'fc-mat-45',
    subjectId: 'materiales-sustentables',
    moduleIndex: 2,
    category: 'Azoteas Verdes',
    front: '¿Cuáles son las capas constructivas obligatorias de una azotea verde o techo naturado?',
    back: 'De abajo hacia arriba sobre la losa estructural:\n1. Impermeabilización de alta resistencia con barrera antiraíz (evita que las raíces perforen el techo).\n2. Membrana de drenaje y retención de agua (lámina nodular con cazoletas plásticas).\n3. Capa de geotextil filtrante (permite pasar el agua pero retiene la tierra y sedimentos).\n4. Sustrato ligero de cultivo (mezcla de tepojal triturado, composta orgánica y vermiculita; espesor de 8 a 15 cm en azoteas extensivas).\n5. Cubierta vegetal (especies crasuláceas como Sedum, resistentes a sequías extremas y sol directo).',
    tip: 'Una azotea verde extensiva ligera agrega entre 80 y 120 kg/m² de carga muerta a la losa.'
  },
  {
    id: 'fc-mat-46',
    subjectId: 'materiales-sustentables',
    moduleIndex: 2,
    category: 'Muros Verdes',
    front: '¿Qué beneficios ambientales y térmicos aporta un jardín vertical o muro verde en fachadas?',
    back: '• Reduce la temperatura superficial de la fachada hasta en 10-15 °C por sombreamiento y evapotranspiración vegetal.\n• Absorbe y amortigua el ruido urbano del tráfico vial (hasta 8 a 10 decibeles).\n• Atrapa partículas suspendidas de polvo fino (PM10 y PM2.5) y produce oxígeno.\n• Aumenta la biodiversidad urbana atrayendo aves polinizadoras e insectos benéficos.',
    tip: 'Requieren sistema de riego por goteo automatizado con recirculación para no desperdiciar agua.'
  },
  {
    id: 'fc-mat-47',
    subjectId: 'materiales-sustentables',
    moduleIndex: 2,
    category: 'Ahorro de Agua en Muebles',
    front: '¿Cuáles son los consumos máximos normativos para muebles hidrosanitarios ecológicos (NOM-008-CONAGUA)?',
    back: '• Inodoros convencionales antiguos: gastaban de 16 a 20 litros por descarga.\n• Inodoros Ecológicos Grado Ecológico: máximo 4.8 litros por descarga (o sistema de doble descarga dual flush: 3 L para líquidos / 4.8 L para sólidos).\n• Regaderas ecológicas: gasto máximo de 7 a 9 litros por minuto a presión de trabajo (frente a 15-20 L/min antiguas).\n• Llaves mezcladoras con aireador: máximo 4 a 6 litros por minuto mezclando aire con agua.',
    tip: 'Instalar muebles de grado ecológico reduce a más de la mitad el recibo de agua potable.'
  },
  {
    id: 'fc-mat-48',
    subjectId: 'materiales-sustentables',
    moduleIndex: 2,
    category: 'Certificaciones Sustentables',
    front: '¿Qué es la certificación internacional LEED (Leadership in Energy and Environmental Design)?',
    back: 'Es el sistema de certificación de edificios sostenibles más reconocido a nivel mundial, creado por el USGBC (U.S. Green Building Council).\nEvalúa proyectos mediante créditos en categorías clave:\n1. Ubicación y transporte.\n2. Sitios sostenibles.\n3. Eficiencia en el uso del agua.\n4. Energía y atmósfera (eficiencia energética).\n5. Materiales y recursos (ACV y reciclaje).\n6. Calidad ambiental interior (confort y ventilación).\nNiveles: Certificado (40-49 pts), Plata (50-59), Oro (60-79) y Platino (80+ puntos).',
    tip: 'La Torre BBVA y Torre Mayor en Paseo de la Reforma cuentan con certificación LEED Platino u Oro.'
  },
  {
    id: 'fc-mat-49',
    subjectId: 'materiales-sustentables',
    moduleIndex: 2,
    category: 'Certificaciones Sustentables',
    front: '¿Qué es la certificación EDGE (Excellence in Design for Greater Efficiencies) del Banco Mundial?',
    back: 'Es una certificación ágil y accesible para países emergentes diseñada por la Corporación Financiera Internacional (IFC) del Banco Mundial.\nExige como requisito numérico indispensable demostrar al menos un:\n• 20% de ahorro en Consumo de Energía.\n• 20% de ahorro en Consumo de Agua potable.\n• 20% de reducción en Energía Embebida de los Materiales de construcción.',
    tip: 'Muy adoptada en México por desarrolladores de vivienda social como Vinte y Ara para acceder a créditos verdes.'
  },
  {
    id: 'fc-mat-50',
    subjectId: 'materiales-sustentables',
    moduleIndex: 2,
    category: 'Sustentabilidad Integral',
    front: '¿Por qué la mejor estrategia sustentable en la edificación es el diseño pasivo antes de invertir en ecotecnias activas?',
    back: 'Porque las estrategias pasivas (orientar correctamente las ventanas hacia el sol, aislar losas y muros, proteger vanos con aleros y propiciar ventilación cruzada natural) NO consumen energía eléctrica, NO requieren mantenimiento técnico, NO sufren descomposturas mecánicas y duran toda la vida útil del edificio sin costo operativo adicional.\nLas tecnologías activas (paneles solares, calentadores) deben complementar un edificio ya optimizado pasivamente, nunca compensar un mal diseño arquitectónico.',
    tip: 'El edificio más verde es aquel que no necesita prender una máquina de aire acondicionado para ser confortable.'
  }
];

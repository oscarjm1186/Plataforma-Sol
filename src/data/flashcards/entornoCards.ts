import { Flashcard } from '../../types';

export const ENTORNO_FLASHCARDS: Flashcard[] = [
  // --- PARCIAL 1: CONCEPTOS ECONÓMICOS, MODELOS DE DESARROLLO Y CRISIS PETROLERA (17 TARJETAS) ---
  {
    id: 'fc-ent-01',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 0,
    category: 'Conceptos Económicos',
    front: '¿Qué es el Producto Interno Bruto (PIB) y qué mide en la economía mexicana?',
    back: 'Es el valor monetario total a precios de mercado de todos los bienes y servicios finales producidos en el territorio nacional durante un periodo determinado (generalmente un trimestre o un año).\nMide el tamaño total y el ritmo de crecimiento o contracción de la actividad económica del país.',
    tip: 'Se compone de: Consumo privado (C) + Inversión privada (I) + Gasto público (G) + Exportaciones netas (X - M).'
  },
  {
    id: 'fc-ent-02',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 0,
    category: 'Variables Macroeconómicas',
    front: '¿Cuál es la diferencia entre inflación y pérdida del poder adquisitivo?',
    back: '• Inflación: aumento generalizado y sostenido de los precios de los bienes y servicios que integran la canasta básica en un periodo, medido oficialmente por el Índice Nacional de Precios al Consumidor (INPC) del INEGI.\n• Pérdida del poder adquisitivo: es la consecuencia directa de la inflación; con la misma cantidad nominal de dinero (salario) se pueden comprar cada vez menos bienes reales.',
    tip: 'El Banco de México tiene como meta constitucional mantener una inflación anual del 3% ± 1%.'
  },
  {
    id: 'fc-ent-03',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 0,
    category: 'Variables Macroeconómicas',
    front: '¿Cuál es la diferencia entre devaluación y depreciación cambiaria?',
    back: '• Devaluación: pérdida oficial del valor de la moneda nacional respecto al dólar decretada por el gobierno o banco central bajo un régimen de TIPO DE CAMBIO FIJO (común en México antes de 1994).\n• Depreciación: pérdida del valor de la moneda provocada por las fuerzas del mercado (oferta y demanda de divisas) bajo un régimen de TIPO DE CAMBIO FLEXIBLE o flotante (régimen vigente en México desde 1995).',
    tip: 'En el régimen actual el peso sube o baja todos los días sin decreto gubernamental.'
  },
  {
    id: 'fc-ent-04',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 0,
    category: 'Mercado Laboral',
    front: '¿Qué es la Población Económicamente Activa (PEA) y la tasa de informalidad laboral según el INEGI?',
    back: '• PEA: conjunto de personas de 15 años o más que tienen un empleo remunerado (ocupados) o que están buscando activamente trabajo (desocupados).\n• Tasa de Informalidad Laboral: porcentaje de trabajadores que laboran en unidades económicas sin registro fiscal, sin prestaciones laborales de ley ni acceso a seguridad social (IMSS o ISSSTE).\nEn México la informalidad laboral supera históricamente el 50% al 55% de la PEA.',
    tip: 'La albañilería tradicional es uno de los sectores con mayor tasa de empleo informal en el país.'
  },
  {
    id: 'fc-ent-05',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 0,
    category: 'Sustitución de Importaciones',
    front: '¿En qué consistió el Modelo de Industrialización por Sustitución de Importaciones (ISI) en México (1940-1954)?',
    back: 'Surgido durante la Segunda Guerra Mundial bajo Manuel Ávila Camacho y Miguel Alemán Valdés:\nConsistió en fabricar en el país los bienes de consumo manufacturados que antes se compraban al extranjero, protegiendo a la industria nacional naciente mediante:\n1. Altos aranceles e impuestos a las importaciones extranjeras.\n2. Permisos previos y cuotas de importación cerradas.\n3. Créditos baratos y subsidios fiscales del Estado a empresarios locales.',
    tip: 'Permitió el surgimiento de la burguesía industrial mexicana y el crecimiento urbano acelerado.'
  },
  {
    id: 'fc-ent-06',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 0,
    category: 'Desarrollo Estabilizador',
    front: '¿Por qué se conoce al periodo de 1954 a 1970 como el "Milagro Mexicano" o "Desarrollo Estabilizador"?',
    back: 'Diseñado por el secretario de Hacienda Antonio Ortiz Mena bajo las presidencias de Adolfo Ruiz Cortines, Adolfo López Mateos y Gustavo Díaz Ordaz:\n• Crecimiento sostenido del PIB a tasas excepcionales de 6% a 7% anual.\n• Estabilidad de precios: inflación controlada a menos del 3% anual.\n• Tipo de cambio fijo inalterable durante 22 años en $12.50 pesos por dólar.\n• Construcción de grandes obras de infraestructura: presas, carreteras, Ciudad Universitaria, Unidad Profesional Zacatenco del IPN y la primera línea del Metro de la CDMX (1969).',
    tip: 'Fue la época dorada de crecimiento con estabilidad macroeconómica en México.'
  },
  {
    id: 'fc-ent-07',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 0,
    category: 'Instituciones del Estado de Bienestar',
    front: '¿Qué grandes instituciones públicas surgieron a mediados del siglo XX para apuntalar el desarrollo social?',
    back: '• Instituto Mexicano del Seguro Social (IMSS, 1943): salud y pensiones para trabajadores de empresas privadas.\n• Petróleos Mexicanos (Pemex, tras la Expropiación de 1938) y Comisión Federal de Electricidad (CFE, nacionalizada en 1960).\n• Instituto Politécnico Nacional (IPN, 1936): para formar los cuadros técnicos de ingenieros y arquitectos que construyeron la infraestructura del país.\n• ISSSTE (1959): para trabajadores al servicio del Estado.\n• INFONAVIT (1972): para créditos de vivienda para los trabajadores.',
    tip: 'El IPN fue piedra angular para la soberanía técnica e industrial de México.'
  },
  {
    id: 'fc-ent-08',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 0,
    category: 'Desarrollo Compartido',
    front: '¿Cuáles fueron los rasgos y consecuencias del modelo de "Desarrollo Compartido" de Luis Echeverría (1970-1976)?',
    back: 'Pretendió redistribuir el ingreso tras el agotamiento del campo y las tensiones sociales del 68:\n• Enorme expansión del gasto público financiado con deuda externa e impresión de billetes.\n• Aumento excesivo de empresas paraestatales improductivas y burocracia estatal.\n• Conflictos agudos con la iniciativa privada (fuga de capitales).\n• Consecuencias: déficit fiscal incontrolable, inflación y la primera gran devaluación del peso tras 22 años de estabilidad (de $12.50 a más de $20 por dólar en 1976).',
    tip: 'Marcó el inicio de los ciclos de crisis recurrentes de fin de sexenio.'
  },
  {
    id: 'fc-ent-09',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 0,
    category: 'Auge y Crisis Petrolera',
    front: '¿En qué consistió la "Petrolización de la Economía" durante el sexenio de José López Portillo (1976-1982)?',
    back: 'Tras el descubrimiento del megayacimiento petrolero de Cantarell en la Sonda de Campeche en 1976:\n• El gobierno basó casi el 80% de las exportaciones y el 40% de los ingresos públicos en la venta de petróleo crudo ("administrar la abundancia").\n• Se contrataron gigantescos préstamos bancarios en dólares avalados en los futuros ingresos petroleros a tasas de interés variables.\n• Al subir las tasas de interés en EE.UU. (Reserva Federal) y desplomarse el precio internacional del crudo en 1981, el esquema colapsó.',
    tip: 'El país no pudo pagar su deuda externa iniciando la llamada "Década Perdida" de América Latina.'
  },
  {
    id: 'fc-ent-10',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 0,
    category: 'Nacionalización Bancaria',
    front: '¿Por qué decretó el presidente López Portillo la estatización de la banca en septiembre de 1982?',
    back: 'En su último informe de gobierno, culpó a los banqueros privados de orquestar la fuga masiva de divisas del país y decretó la expropiación y nacionalización de todos los bancos privados nacionales y el control generalizado de cambios.\nGeneró una profunda ruptura de confianza entre el sector empresarial y el Estado que precipitó la hiperinflación.',
    tip: 'La banca permaneció en manos del Estado hasta su reprivatización con Salinas de Gortari en 1991-1992.'
  },
  {
    id: 'fc-ent-11',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 0,
    category: 'Crisis de la Deuda',
    front: '¿Qué fue la Crisis de la Deuda Externa de 1982 declarada por Jesús Silva-Herzog Flores?',
    back: 'En agosto de 1982 el secretario de Hacienda de México anunció a la comunidad financiera internacional en Washington que México se había quedado sin reservas de dólares en el Banco Central y no podía cumplir con el pago del servicio de su deuda externa (moratoria involuntaria).\nDesencadenó una crisis financiera continental y obligó a firmar cartas de intención con el Fondo Monetario Internacional (FMI).',
    tip: 'El FMI condicionó los rescates a un cambio radical hacia políticas de libre mercado (ajuste estructural).'
  },
  {
    id: 'fc-ent-12',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 0,
    category: 'Estructura Sectorial',
    front: '¿Cómo se componen los 3 sectores de la economía y cuál es su peso relativo en México?',
    back: '• Sector Primario (Agropecuario): agricultura, ganadería, silvicultura y pesca (~3.5% del PIB; genera gran empleo rural pero bajo valor agregado).\n• Sector Secundario (Industrial): manufacturas automotrices, electrónica, química, minería, petróleo, energía y LA CONSTRUCCIÓN (~32% del PIB).\n• Sector Terciario (Servicios): comercio, turismo, transporte, banca, telecomunicaciones, salud y educación (~64.5% del PIB; el mayor generador de valor económico).',
    tip: 'México pasó en un siglo de ser un país agrario rural a una economía terciaria y manufacturera exportadora.'
  },
  {
    id: 'fc-ent-13',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 0,
    category: 'Pacto de Solidaridad Económica',
    front: '¿Qué fue el Pacto de Solidaridad Económica (PSE) firmado en 1987 bajo Miguel de la Madrid?',
    back: 'Fue un acuerdo concertado tripartito histórico entre el Gobierno Federal, los sindicatos obreros (CTM) y los organismos empresariales para frenar la hiperinflación (que llegó a rozar el 160% anual en 1987):\n• Se congelaron y concertaron precios de productos básicos, tarifas públicas y salarios.\n• Se redujo drásticamente el gasto público y se aceleró la apertura comercial.',
    tip: 'Logró quebrar la espiral hiperinflacionaria antes de terminar el sexenio de 1988.'
  },
  {
    id: 'fc-ent-14',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 0,
    category: 'Balanza Comercial',
    front: '¿Qué es la balanza comercial y cuándo registra superávit o déficit?',
    back: 'Es el registro contable de las exportaciones (ventas al extranjero) menos las importaciones (compras al extranjero) de mercancías del país:\n• Superávit comercial: Exportaciones > Importaciones (entran más divisas de las que salen).\n• Déficit comercial: Importaciones > Exportaciones (salen más divisas al exterior, requiriendo financiamiento o deuda).',
    tip: 'México es una de las mayores potencias exportadoras del mundo gracias al sector automotriz y manufacturero.'
  },
  {
    id: 'fc-ent-15',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 0,
    category: 'Gasto Público e Inversión',
    front: '¿Cuál es la diferencia económica entre gasto corriente e inversión física en obra pública?',
    back: '• Gasto Corriente: recursos públicos destinados al pago de sueldos de burócratas, papelería, subsidios, viáticos y operación diaria del gobierno (no genera riqueza perdurable).\n• Inversión Física en Infraestructura: gasto de capital destinado a la construcción de carreteras, puertos, hospitales, escuelas, presas y redes eléctricas que incrementan el patrimonio productivo nacional y elevan la competitividad del país a largo plazo.',
    tip: 'Recortar la inversión física en obra pública daña el crecimiento futuro del PIB.'
  },
  {
    id: 'fc-ent-16',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 0,
    category: 'Reservas Internacionales',
    front: '¿Qué son las Reservas Internacionales del Banco de México y cuál es su función?',
    back: 'Son activos financieros líquidos en divisas fuertes (principalmente dólares estadounidenses, euros, oro y derechos especiales de giro) que custodia el Banco de México.\nFunción: respaldar la estabilidad del poder adquisitivo del peso frente a choques externos, garantizar los pagos internacionales y dar certidumbre a los mercados financieros internacionales.',
    tip: 'En la actualidad superan los 200,000 millones de dólares.'
  },
  {
    id: 'fc-ent-17',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 0,
    category: 'Evolución de la Moneda',
    front: '¿Por qué se eliminaron 3 ceros a la moneda mexicana en enero de 1993 creando los "Nuevos Pesos" (N$)?',
    back: 'Para simplificar las transacciones contables, los sistemas de cómputo y el uso cotidiano del efectivo tras una década de devaluaciones e inflación que habían pulverizado el valor de la moneda (un dólar llegó a costar más de $3,000 pesos viejos).\nMil pesos viejos ($1,000) se convirtieron formalmente en un Nuevo Peso (N$ 1.00).',
    tip: 'En 1996 la moneda volvió a llamarse oficialmente "pesos" conservando el nuevo valor.'
  },

  // --- PARCIAL 2: NEOLIBERALISMO, APERTURA COMERCIAL, TLCAN Y CRISIS DEL 94 (17 TARJETAS) ---
  {
    id: 'fc-ent-18',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 1,
    category: 'Modelo Neoliberal',
    front: '¿Cuáles son los principios doctrinarios del Modelo Neoliberal adoptado en México a partir de 1982?',
    back: 'Basado en las recomendaciones del Consenso de Washington:\n1. Disciplina fiscal estricta (cero déficit presupuestario).\n2. Apertura comercial indiscriminada y eliminación de aranceles protectores (ingreso al GATT en 1986).\n3. Desregulación económica y eliminación de subsidios estatales a precios.\n4. Privatización masiva de empresas públicas y paraestatales.\n5. Atracción irrestricta de inversión extranjera directa (IED).\n6. Reducción del tamaño y papel del Estado como rector económico.',
    tip: 'Iniciado con Miguel de la Madrid y profundizado por Carlos Salinas de Gortari y Ernesto Zedillo.'
  },
  {
    id: 'fc-ent-19',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 1,
    category: 'Privatización de Paraestatales',
    front: '¿Qué empresas paraestatales emblemáticas fueron privatizadas durante el sexenio de Carlos Salinas de Gortari?',
    back: 'De más de 1,150 empresas estatales existentes en 1982, se redujeron a poco más de 200:\n• Teléfonos de México (Telmex): vendida a Grupo Carso de Carlos Slim en 1990.\n• Reprivatización de los 18 bancos comerciales (Banamex, Bancomer, Serfin, etc.) en 1991-1992.\n• Aerolíneas nacionales: Mexicana de Aviación y Aeroméxico.\n• Siderúrgicas estatales (Altos Hornos de México AHMSA y Siderúrgica Lázaro Cárdenas Las Truchas).\n• Empresas mineras y fertilizantes (Fertimex).',
    tip: 'El argumento oficial fue allegar recursos al erario y modernizar servicios tecnológicamente rezagados.'
  },
  {
    id: 'fc-ent-20',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 1,
    category: 'TLCAN / T-MEC',
    front: '¿Qué fue el Tratado de Libre Comercio de América del Norte (TLCAN / NAFTA) firmado en 1994?',
    back: 'Tratado comercial histórico entre México, Estados Unidos y Canadá que entró en vigor el 1 de enero de 1994:\n• Creó la zona de libre comercio más grande del mundo eliminando progresivamente los aranceles aduaneros a mercancías e inversiones.\n• Transformó a México en una potencia manufacturera y maquiladora exportadora de automóviles, autopartes, pantallas y maquinaria hacia EE.UU.\n• En 2020 fue renegociado y modernizado transformándose en el T-MEC.',
    tip: 'La firma del TLCAN coincidió con el levantamiento armado del EZLN en Chiapas el mismo 1 de enero de 1994.'
  },
  {
    id: 'fc-ent-21',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 1,
    category: 'T-MEC',
    front: '¿Qué nuevas reglas incorporó el T-MEC (Tratado México-Estados Unidos-Canadá) en comparación con el TLCAN original?',
    back: '1. Regla de origen automotriz más estricta: exige que el 75% del valor de un auto se produzca en la región (antes 62.5%).\n2. Valor de contenido laboral: 40% a 45% del auto debe fabricarse por obreros que ganen al menos 16 dólares por hora.\n3. Paneles laborales de respuesta rápida para vigilar elecciones sindicales libres y derechos de huelga en México.\n4. Nuevos capítulos sobre comercio digital, propiedad intelectual, combate a la corrupción y protección ambiental.',
    tip: 'Garantiza el acceso libre de aranceles de las exportaciones mexicanas al mercado de América del Norte.'
  },
  {
    id: 'fc-ent-22',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 1,
    category: 'Crisis del Efecto Tequila',
    front: '¿Cuáles fueron las causas de la crisis financiera de diciembre de 1994 ("El Error de Diciembre")?',
    back: '1. Inestabilidad política y violencia en 1994: asesinato del candidato presidencial Luis Donaldo Colosio y de Ruiz Massieu, y el conflicto en Chiapas.\n2. Enorme déficit en la cuenta corriente financiado con capitales golondrinos especulativos de corto plazo.\n3. Emisión masiva de Tesobonos (deuda gubernamental pagadera en pesos pero indexada al dólar).\n4. Agotamiento total de las reservas internacionales de Banxico al defender el tipo de cambio fijo.\n5. Devaluación abrupta no planificada al asumir Ernesto Zedillo, disparando la fuga de capitales.',
    tip: 'El dólar pasó de $3.40 a más de $7.50 pesos en días, quebrando empresas y familias endeudadas en dólares.'
  },
  {
    id: 'fc-ent-23',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 1,
    category: 'FOBAPROA / IPAB',
    front: '¿Qué fue el Fondo Bancario de Protección al Ahorro (FOBAPROA) y cuál fue su controversia social?',
    back: 'Tras la crisis del 94, las tasas de interés se dispararon al 100% y millones de deudores no pudieron pagar sus hipotecas y créditos comerciales, provocando la quiebra inminente de todo el sistema bancario.\nEl gobierno de Ernesto Zedillo utilizó el FOBAPROA para comprar la cartera vencida de los bancos privados y sanearlos financieramente, transformando esas deudas privadas en DEUDA PÚBLICA a cargo de todos los contribuyentes mexicanos (posteriormente IPAB).\nControversia: se rescató a banqueros y empresarios que cometieron fraudes con recursos públicos de la sociedad.',
    tip: 'La deuda del FOBAPROA se sigue pagando anualmente con el presupuesto federal de egresos.'
  },
  {
    id: 'fc-ent-24',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 1,
    category: 'Autonomía de Banxico',
    front: '¿Por qué la Reforma Constitucional de 1994 otorgó autonomía al Banco de México (Banxico)?',
    back: 'Para prohibirle tajantemente al Presidente de la República y al Poder Ejecutivo ordenar al Banco Central imprimir dinero para financiar el déficit público (la causa histórica de las grandes inflaciones de los años 70 y 80).\nSu mandato constitucional único y prioritario es garantizar la estabilidad del poder adquisitivo de la moneda nacional (combatir la inflación) mediante el manejo de la tasa de interés de referencia.',
    tip: 'La junta de gobierno de Banxico es independiente del gobierno en turno.'
  },
  {
    id: 'fc-ent-25',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 1,
    category: 'Extranjerización Bancaria',
    front: '¿Qué fenómeno ocurrió con el sistema financiero mexicano a finales de los años 90 tras la crisis?',
    back: 'Los bancos saneados con dinero del rescate público fueron vendidos a gigantescos grupos financieros multinacionales extranjeros:\n• Banamex fue adquirido por Citigroup (EE.UU.).\n• Bancomer fue comprado por BBVA (España).\n• Serfin fue adquirido por Santander (España).\n• Bital pasó a manos de HSBC (Reino Unido).\nMás del 70% de los activos bancarios del país pasaron a control extranjero transfiriendo miles de millones de dividendos a sus matrices.',
    tip: 'Solo Banorte quedó como banco grande de capital mayoritariamente mexicano.'
  },
  {
    id: 'fc-ent-26',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 1,
    category: 'Alternancia Política del 2000',
    front: '¿Qué significó la victoria electoral de Vicente Fox en el año 2000 para el sistema político mexicano?',
    back: 'Puso fin a 71 años ininterrumpidos de gobierno hegemónico del Partido Revolucionario Institucional (PRI) en la Presidencia de la República (1929-2000).\nConsolidó la transición democrática institucional a través del Instituto Federal Electoral (IFE, hoy INE) como árbitro electoral ciudadano independiente.',
    tip: 'En lo económico, el nuevo gobierno de alternancia mantuvo la misma política neoliberal y de libre mercado.'
  },
  {
    id: 'fc-ent-27',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 1,
    category: 'Crisis Financiera Global de 2008',
    front: '¿Cómo impactó la Gran Recesión de EE.UU. (crisis subprime de 2008-2009) en la economía mexicana?',
    back: 'La crisis del sector inmobiliario e hipotecario en EE.UU. provocó una brutal caída en la demanda de exportaciones mexicanas:\n• El PIB de México se desplomó un -5.3% en 2009 (la peor contracción desde 1995), agravada localmente por la epidemia de gripe A(H1N1).\n• Miles de empleos formales en la construcción y la industria manufacturera se perdieron en meses.\n• El gobierno aplicó medidas contracíclicas de gasto en obra pública e infraestructura para reactivar el empleo.',
    tip: 'Demostró la enorme dependencia económica de México respecto a los ciclos de EE.UU.'
  },
  {
    id: 'fc-ent-28',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 1,
    category: 'Reformas Estructurales de 2013',
    front: '¿Cuáles fueron los objetivos de la Reforma Energética y la Reforma Hacendaria de 2013 (Pacto por México)?',
    back: '• Reforma Energética: modificó los Artículos 27 y 28 constitucionales para abrir el sector de hidrocarburos y electricidad a contratos de exploración, producción y venta con empresas privadas y extranjeras, terminando con los monopolios históricos de Pemex y CFE.\n• Reforma Hacendaria: buscó elevar la recaudación tributaria no petrolera del Estado combatiendo la evasión fiscal con la factura electrónica (CFDI) obligatoria del SAT.',
    tip: 'Buscaba revertir la caída en la producción de crudo de Cantarell.'
  },
  {
    id: 'fc-ent-29',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 1,
    category: 'Tratados Internacionales',
    front: '¿Cuántos tratados de libre comercio tiene firmados México y qué ventaja geopolítica representan?',
    back: 'México cuenta con una red de 14 Tratados de Libre Comercio (TLC) con más de 50 países de América, Europa y Asia (incluyendo el T-MEC, el TLCUEM con la Unión Europea, el TIPAT / CPTPP con países del Pacífico y la Alianza del Pacífico).\nVentaja: acceso preferencial con aranceles cero a un mercado global de más de 1,300 millones de consumidores.',
    tip: 'Es uno de los países con mayor apertura comercial del planeta.'
  },
  {
    id: 'fc-ent-30',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 1,
    category: 'Tipo de Cambio y Tasas',
    front: '¿Cómo influye la tasa de interés de Banxico en el tipo de cambio peso-dólar y en el crédito a la construcción?',
    back: '• Si Banxico sube su tasa de interés (política restrictiva): hace atractiva la inversión en bonos del gobierno (Cetes), atrayendo dólares que fortalecen al peso, pero ENCARECE los créditos puente para constructores y los créditos hipotecarios, frenando la venta de vivienda.\n• Si Banxico baja su tasa: abarata el financiamiento para obras de construcción y estimula la inversión productiva, pero puede debilitar el tipo de cambio si la inflación se descontrola.',
    tip: 'El sector inmobiliario es sumamente sensible a los cambios en la tasa de interés bancaria.'
  },
  {
    id: 'fc-ent-31',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 1,
    category: 'Inversión Extranjera Directa (IED)',
    front: '¿Qué es la Inversión Extranjera Directa (IED) y en qué sectores se concentra en México?',
    back: 'Es la llegada de capital foráneo destinado a establecer instalaciones productivas permanentes en el país (fábricas, naves industriales, plantas armadoras, centros logísticos) con visión de largo plazo (a diferencia del capital financiero especulativo).\nEn México se concentra en:\n1. Industria manufacturera (automotriz, autopartes, aeroespacial y electrónica).\n2. Servicios financieros y bancarios.\n3. Comercio, transporte e infraestructura de telecomunicaciones.',
    tip: 'Proviene principalmente de Estados Unidos, Canadá, Alemania y Japón.'
  },
  {
    id: 'fc-ent-32',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 1,
    category: 'Política Salarial',
    front: '¿Cómo evolucionó el Salario Mínimo General en México y qué impacto económico tuvo su reciente recuperación?',
    back: 'Entre 1976 y 2018 el salario mínimo perdió más del 70% de su poder adquisitivo real al mantenerse artificialmente bajo para "controlar la inflación" y atraer maquiladoras con mano de obra barata.\nA partir de 2019 se implementó una política de recuperación histórica duplicándolo en términos reales mediante acuerdos de la CONASAMI:\n• Redujo la brecha de desigualdad salarial y fortaleció el mercado interno y el consumo de las familias sin provocar el desempleo catastrófico predicho por la ortodoxia.',
    tip: 'En la Zona Libre de la Frontera Norte el salario mínimo se fijó aún más alto.'
  },
  {
    id: 'fc-ent-33',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 1,
    category: 'Gobernanza y Corrupción',
    front: '¿Cómo afecta la corrupción y la falta de estado de derecho a la inversión en infraestructura?',
    back: 'Incrementa los "costos de transacción" y el sobrecosto de las obras (moches en licitaciones públicas), retrasa permisos ambientales y licencias municipales, genera inseguridad jurídica para inversionistas de largo plazo y provoca obras de pésima calidad técnica o elefantes blancos abandonados.',
    tip: 'La transparencia en compras públicas y licitaciones abiertas (Compranet) es vital para la ingeniería honesta.'
  },
  {
    id: 'fc-ent-34',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 1,
    category: 'Crisis COVID-19',
    front: '¿Cuál fue el impacto de la pandemia de COVID-19 en 2020 sobre el PIB y la industria de la edificación?',
    back: 'La paralización de actividades no esenciales provocó un desplome del PIB de -8.5% en 2020.\nLa industria de la construcción fue una de las más golpeadas: las obras se suspendieron durante meses por decreto sanitario, las cadenas de suministro globales colapsaron provocando inflación en insumos (acero, cemento y vidrio subieron más de 30%), y miles de empleos de albañilería y técnicos se perdieron.',
    tip: 'Fue declarada actividad esencial a mediados de 2020 para liderar la reactivación económica.'
  },

  // --- PARCIAL 3: POBREZA, VIVIENDA, DEMOGRAFÍA, INFONAVIT Y NEARSHORING (16 TARJETAS) ---
  {
    id: 'fc-ent-35',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 2,
    category: 'Medición de la Pobreza',
    front: '¿Cómo mide el CONEVAL la pobreza en México mediante el enfoque multidimensional?',
    back: 'Combina dos dimensiones fundamentales:\n1. Espacio del Bienestar Económico: ingresos monetarios del hogar comparados con la Línea de Pobreza por Ingresos (costo de la canasta alimentaria y no alimentaria).\n2. Espacio de los Derechos Sociales: presencia de 6 carencias sociales básicas:\n   • Rezago educativo.\n   • Acceso a servicios de salud.\n   • Acceso a la seguridad social.\n   • Calidad y espacios de la vivienda (pisos de tierra, hacinamiento, techos de lámina).\n   • Acceso a servicios básicos en la vivienda (agua entubada, drenaje, luz).\n   • Acceso a una alimentación nutritiva y de calidad.',
    tip: 'Pobreza moderada: al menos 1 carencia social y bajo la línea de pobreza; Pobreza extrema: 3 o más carencias y bajo la línea de pobreza extrema (ingreso menor a la canasta alimentaria).'
  },
  {
    id: 'fc-ent-36',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 2,
    category: 'Vivienda y Pobreza',
    front: '¿Qué indicadores técnicos definen la "carencia por calidad y espacios de la vivienda"?',
    back: 'Una vivienda tiene esta carencia si presenta al menos una de estas condiciones:\n1. Pisos de tierra natural.\n2. Techos de material de desecho, lámina de cartón o palma.\n3. Muros de embarro, carrizo, bambú, lámina de cartón o asbesto.\n4. Hacinamiento crítico: cuando la relación de habitantes por cuarto para dormir es MAYOR a 2.5 personas (ej. 3 o más personas durmiendo en una sola recámara).',
    tip: 'El sector de la edificación combate directamente esta carencia construyendo losas de concreto, pisos firmes y cuartos adicionales.'
  },
  {
    id: 'fc-ent-37',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 2,
    category: 'Industria de la Construcción',
    front: '¿Por qué la industria de la construcción es considerada el termómetro y motor clave de la economía mexicana?',
    back: 'Porque posee un gigantesco EFECTO MULTIPLICADOR en la economía:\n• Impacta y reactiva directamente a más de 66 ramas industriales diferentes (proveedores de cemento, acero, vidrio, madera, transporte, maquinaria, pintura, aluminio, herrajes).\n• Genera empleo intensivo inmediato para mano de obra no calificada y técnicos calificados.\n• Cada peso invertido en construcción derrama casi dos pesos en la economía general.',
    tip: 'Cuando la construcción crece, toda la economía mexicana florece.'
  },
  {
    id: 'fc-ent-38',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 2,
    category: 'INFONAVIT',
    front: '¿Cómo opera el INFONAVIT y cómo se financia su fondo de vivienda para los trabajadores?',
    back: 'Es una institución tripartita (Gobierno, Patrones y Trabajadores) creada en 1972 (Artículo 123 constitucional, apartado A):\n• Se financia con la APORTACIÓN PATRONAL obligatoria del 5% del salario integrado de cada trabajador formal registrado ante el IMSS.\n• Esta aportación se deposita en la Subcuenta de Vivienda individual del trabajador para servir de base o enganche de un crédito hipotecario para comprar vivienda nueva/usada, construir en terreno propio, remodelar o pagar pasivos.',
    tip: 'Es el mayor otorgante de créditos hipotecarios de toda América Latina.'
  },
  {
    id: 'fc-ent-39',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 2,
    category: 'Crisis de la Vivienda Periférica',
    front: '¿Por qué fracasó el modelo de desarrollo habitacional de vivienda masiva en las periferias lejanas (2000-2012)?',
    back: 'Empresas desarrolladoras (Geo, Urbi, Homex) construyeron millones de casas de interés social en terrenos agrícolas baratos a decenas de kilómetros de los centros urbanos, sin transporte público masivo, sin escuelas, sin clínicas ni fuentes de empleo locales.\nConsecuencias:\n• Tiempos de traslado diarios de hasta 4 a 6 horas para los trabajadores.\n• Abandono masivo de más de 600,000 viviendas en todo el país (viviendas vandalizadas e invadidas).\n• Ruina financiera de las grandes vivienderas.',
    tip: 'La política actual de SEDATU exige que la vivienda social cuente con perímetro de contención urbana y servicios cercanos.'
  },
  {
    id: 'fc-ent-40',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 2,
    category: 'Autoconstrucción en México',
    front: '¿Qué peso tiene la autoconstrucción o autoproducción asistida en el parque habitacional de México?',
    back: 'Más del 60% al 65% de las viviendas existentes en México han sido construidas mediante procesos de AUTOCONSTRUCCIÓN informal por las propias familias a lo largo de décadas, contratando albañiles locales por etapas sin asesoría técnica de arquitectos o ingenieros.\nReto: muchas presentan fallas estructurales graves ante sismos y vicios de ventilación e iluminación.\nOportunidad: la "Autoproducción Asistida" canaliza créditos directos con asesoría técnica de profesionistas del IPN.',
    tip: 'El programa nacional de vivienda hoy otorga apoyos directos a las familias para autoconstrucción regulada.'
  },
  {
    id: 'fc-ent-41',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 2,
    category: 'Transición Demográfica',
    front: '¿Qué es el "Bono Demográfico" en México y por qué representa una ventana histórica irrepetible?',
    back: 'Es la etapa demográfica en la que la población en edad de trabajar (15 a 64 años) es sustancialmente mayor que la población dependiente (niños menores de 15 años y adultos mayores de 65 años).\nVentaja: máxima capacidad productiva, ahorro y mano de obra para impulsar el crecimiento económico.\nReto urgente: el bono demográfico en México alcanzará su cúspide antes de 2030; después el país envejecerá aceleradamente demandando más gasto en pensiones y hospitales geriátricos.',
    tip: '¡México debe capacitar tecnológicamente a sus jóvenes hoy antes de que se cierre la ventana del bono demográfico!'
  },
  {
    id: 'fc-ent-42',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 2,
    category: 'Remesas Familiares',
    front: '¿Qué importancia macroeconómica tienen las remesas enviadas por los migrantes mexicanos en el exterior?',
    back: 'Representan más de 60,000 millones de dólares anuales (cerca del 3.5% al 4% del PIB nacional), superando a los ingresos petroleros y al turismo extranjero.\nLlegan directamente a millones de hogares de bajos recursos en estados rurales (Michoacán, Guanajuato, Oaxaca, Zacatecas, Guerrero), sosteniendo el consumo básico y financiando una gran porción de la autoconstrucción de vivienda local.',
    tip: 'Son un colchón social clave contra la pobreza extrema en comunidades marginadas.'
  },
  {
    id: 'fc-ent-43',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 2,
    category: 'Nearshoring',
    front: '¿Qué es el fenómeno del Nearshoring y por qué México es el país más beneficiado del mundo?',
    back: 'Es la relocalización de las cadenas globales de manufactura y suministro hacia países cercanos geográficamente al mercado de consumo final (Estados Unidos), para reducir costos logísticos, riesgos de guerras comerciales con China y tiempos de entrega marítimos.\nVentajas de México:\n1. Frontera de más de 3,100 km con la mayor economía del mundo (EE.UU.).\n2. Tratado de libre comercio T-MEC con aranceles cero.\n3. Mano de obra técnica e ingenieril altamente capacitada y competitiva en costos.',
    tip: 'Está desatando un "boom" de construcción de naves industriales, parques logísticos y carreteras en el norte y bajío del país.'
  },
  {
    id: 'fc-ent-44',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 2,
    category: 'Infraestructura y Nearshoring',
    front: '¿Cuáles son los cuellos de botella de infraestructura que México debe resolver con urgencia para aprovechar el Nearshoring?',
    back: '1. Suministro eléctrico confiable y verde (líneas de transmisión y generación de energías limpias que exigen las corporaciones multinacionales).\n2. Abastecimiento y tratamiento de agua industrial en el norte árido del país.\n3. Modernización de aduanas fronterizas, vías de ferrocarril y puertos marítimos.\n4. Parques industriales con naves Clase A e infraestructura de telecomunicaciones 5G.',
    tip: 'Genera una demanda sin precedentes de técnicos e ingenieros en construcción y mantenimiento de obras.'
  },
  {
    id: 'fc-ent-45',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 2,
    category: 'Proyectos Prioritarios de Infraestructura',
    front: '¿Cuáles son los megaproyectos de infraestructura del sureste mexicano impulsados recientemente?',
    back: '• Corredor Interoceánico del Istmo de Tehuantepec (CIIT): modernización del ferrocarril y puertos de Coatzacoalcos y Salina Cruz como alternativa interoceánica al Canal de Panamá, con 10 polos de desarrollo industrial.\n• Tren Maya: circuito ferroviario de 1,554 km para transporte de pasajeros y carga en los estados de Chiapas, Tabasco, Campeche, Yucatán y Quintana Roo.\n• Refinería Olmeca en Dos Bocas: para aumentar la capacidad de refinación de gasolinas nacionales.',
    tip: 'Buscan revertir el histórico rezago económico del sur-sureste respecto al norte industrializado.'
  },
  {
    id: 'fc-ent-46',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 2,
    category: 'Crisis Hídrica en México',
    front: '¿Cuál es el reto socioeconómico de la crisis del agua en las metrópolis mexicanas (CDMX y Monterrey)?',
    back: 'La sobreexplotación de los mantos acuíferos subterráneos ha provocado el hundimiento regional del suelo (en CDMX hasta 30-40 cm anuales en zonas lacustres), fracturando tuberías de drenaje y estructuras.\nLa escasez en presas (como el Sistema Cutzamala) amenaza el abasto a millones de habitantes, exigiendo inversiones multimillonarias urgentes en reparación de fugas (que pierden el 40% del agua), plantas de tratamiento de agua residual y pozos profundos.',
    tip: 'La ingeniería hidráulica es prioritaria para la seguridad nacional en el siglo XXI.'
  },
  {
    id: 'fc-ent-47',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 2,
    category: 'Desigualdad y Coeficiente de Gini',
    front: '¿Qué mide el Coeficiente de Gini y cuál es la situación de la desigualdad de ingresos en México?',
    back: 'Mide el grado de desigualdad en la distribución del ingreso en una escala de 0 a 1:\n• 0 representa igualdad perfecta (todos reciben exactamente el mismo ingreso).\n• 1 representa desigualdad absoluta (una sola persona concentra todo el ingreso).\nMéxico presenta un Coeficiente de Gini elevado (~0.45 a 0.48), situándose entre los países más desiguales de la OCDE, donde el 10% más rico de la población percibe más del 35% del ingreso nacional.',
    tip: 'Superar la desigualdad exige educación pública de calidad y salarios dignos.'
  },
  {
    id: 'fc-ent-48',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 2,
    category: 'Economía Social y Solidaria',
    front: '¿Qué papel desempeñan las cooperativas y la economía social en México?',
    back: 'Son empresas asociativas de propiedad colectiva y gestión democrática (ej. Cooperativa Pascual, Cooperativa Cruz Azul en cemento, cajas de ahorro popular y cooperativas de café en Chiapas).\nPriorizan el bienestar de los socios trabajadores y sus comunidades por encima de la acumulación de ganancias de accionistas externos, reinvirtiendo excedentes en educación, vivienda y salud local.',
    tip: 'La Cooperativa Cruz Azul es un ejemplo emblemático nacido de obreros de la construcción.'
  },
  {
    id: 'fc-ent-49',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 2,
    category: 'Responsabilidad Social Empresarial',
    front: '¿Qué es la Responsabilidad Social Empresarial (RSE) en las constructoras mexicanas?',
    back: 'Es el compromiso ético voluntario de las empresas constructoras más allá de la ley para:\n1. Brindar condiciones dignas y seguras a los albañiles (alfabetización en obra, seguro de vida, EPP completo, baños limpios).\n2. Mitigar impactos ambientales y gestionar ecológicamente el cascajo y aguas residuales.\n3. Vincularse positivamente con las comunidades vecinas donde edifican sus proyectos.',
    tip: 'Organizaciones como "Construyendo y Creciendo" instalan aulas de computación en las obras para que los albañiles terminen primaria y secundaria.'
  },
  {
    id: 'fc-ent-50',
    subjectId: 'entorno-socioeconomico',
    moduleIndex: 2,
    category: 'Misión del Egresado del IPN',
    front: '¿Cuál es el lema del IPN y cuál es la misión social histórica del técnico e ingeniero politécnico en la economía nacional?',
    back: 'Lema: "La Técnica al Servicio de la Patria".\nFundado por el presidente Lázaro Cárdenas del Río y Juan de Dios Bátiz en 1936 para abrir la educación tecnológica de excelencia a los hijos de la clase obrera y campesina.\nSu misión es poner el conocimiento científico, arquitectónico e ingenieril al servicio del desarrollo soberano, la industrialización independiente y la elevación de las condiciones de vida de las familias mexicanas.',
    tip: '¡Ser politécnico es un compromiso ético de poner la técnica al servicio de la sociedad!'
  }
];

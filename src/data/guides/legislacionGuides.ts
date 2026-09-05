import { StudyModule } from '../../types';

export const LEGISLACION_GUIDES: StudyModule[] = [
  {
    id: 'leg-mod-1',
    title: 'Parcial 1: Marco Jurídico Mexicano, Jerarquía Legal, Contratos y Responsabilidad Profesional',
    parcialNumber: 1,
    competence: 'Analiza la estructura jurídica de la construcción en México con base en la pirámide de Kelsen, interpreta la LOPSRM y delimita responsabilidades por vicios ocultos.',
    topics: [
      {
        id: 'leg-top-1',
        title: 'Jerarquía Normativa (Pirámide de Kelsen) y Fundamentos Constitucionales',
        rap: 'RAP 1: Identifica las leyes federales, estatales y reglamentos municipales aplicables a la edificación.',
        summary: 'El ordenamiento jurídico mexicano se estructura de forma escalonada según el principio de supremacía constitucional (Pirámide de Kelsen): en la cúspide se ubica la Constitución Política de los Estados Unidos Mexicanos (CPEUM) junto con los Tratados Internacionales de Derechos Humanos; subordinadas a ella están las Leyes Generales y Federales emanadas del Congreso de la Unión; le siguen los Reglamentos del Poder Ejecutivo, las Leyes Estatales y finalmente los Bandos y Reglamentos Municipales.',
        keyPoints: [
          'Art. 27 Constitucional: La propiedad originaria de tierras y aguas corresponde a la Nación; regula la expropiación por causa de utilidad pública, el régimen de propiedad ejidal, comunal y privada, y el aprovechamiento de recursos del subsuelo.',
          'Art. 73 Constitucional, Fracción XXIX-C: Faculta al Congreso para expedir las leyes que establezcan la concurrencia entre Federación, Estados y Municipios en materia de asentamientos humanos y desarrollo urbano.',
          'Art. 115 Constitucional, Fracción V: Faculta expresamente a los Municipios (y Alcaldías) para formular, aprobar y administrar los planes de desarrollo urbano municipal, autorizar el uso de suelo y expedir licencias y permisos de construcción.',
          'Art. 123 Constitucional: Regula las relaciones laborales (Apartado A: obreros y empleados particulares; jornada máxima de 8 horas, salario mínimo, seguridad social y prevención de accidentes de trabajo).'
        ],
        constructionApplication: 'Defensa de límites de propiedad y análisis de restricciones urbanísticas impuestas por planes de desarrollo municipal frente a proyectos de inversión privada.',
        practiceExercises: [
          {
            prompt: 'Si un bando municipal o reglamento local contradice lo estipulado en la Ley General de Asentamientos Humanos o en la Constitución, ¿cuál precepto legal prevalece y con base en qué principio jurídico?',
            hint: 'Principio de supremacía constitucional plasmado en el Artículo 133 de la CPEUM.',
            solution: 'Prevalece la Constitución y la Ley General Federal, en virtud del Principio de Supremacía Constitucional (Artículo 133 de la CPEUM y Pirámide de Kelsen), quedando la norma municipal viciada de inconstitucionalidad.'
          }
        ]
      },
      {
        id: 'leg-top-2',
        title: 'Ley de Obras Públicas y Servicios Relacionados con las Mismas (LOPSRM)',
        rap: 'RAP 2: Aplica los procedimientos de licitación pública, invitación y adjudicación directa en el ejercicio del gasto público.',
        summary: 'La LOPSRM reglamenta el Artículo 134 Constitucional en lo relativo al gasto público federal en infraestructura civil. Establece que los contratos deben garantizar al Estado las mejores condiciones en cuanto a precio, calidad, financiamiento, oportunidad y eficiencia económica.',
        keyPoints: [
          'Licitación Pública Nacional o Internacional: regla general de contratación mediante convocatoria pública abierta y transparente a través del sistema Compranet.',
          'Invitación a cuando menos tres personas: procedimiento restringido aplicable cuando el monto del contrato se ubica dentro de los rangos autorizados en el Presupuesto de Egresos de la Federación.',
          'Adjudicación Directa: procedimiento excepcional y fundado que se aplica por causas de fuerza mayor o desastre natural (terremotos, inundaciones) o montos menores regulados.',
          'Propuesta técnica y económica: revisión binaria o por puntos y porcentajes para verificar solvencia curricular, capacidad técnica de maquinaria y congruencia de precios unitarios.'
        ],
        constructionApplication: 'Elaboración y presentación de propuestas técnico-económicas en licitaciones de dependencias federales (SICT, CONAGUA, CFE, SEDATU).',
        practiceExercises: [
          {
            prompt: '¿En qué caso excepcional la LOPSRM permite adjudicar directamente una obra sin mediar licitación pública?',
            hint: 'Situaciones de emergencia catastrófica o peligro inminente.',
            solution: 'Cuando ocurran desastres naturales imprevistos (sismos, huracanes, deslaves) que pongan en peligro la vida humana o el orden social, requiriéndose acciones inmediatas para restablecer vías de comunicación o servicios vitales.'
          }
        ]
      },
      {
        id: 'leg-top-3',
        title: 'Contratos de Obra Civil: Modalidades, Estimaciones y Finiquito',
        rap: 'RAP 3: Estructura contratos sobre la base de precios unitarios y a precio alzado y supervisa el cobro de estimaciones.',
        summary: 'El contrato de obra es el instrumento legal mediante el cual una persona física o moral (contratista) se obliga a ejecutar y terminar una obra encomendada por otra (contratante o propietario) a cambio de una retribución económica prefijada.',
        keyPoints: [
          'Contrato a Base de Precios Unitarios (PU): el contratista cobra por el volumen real de obra efectivamente ejecutada y verificada en campo multiplicada por el precio unitario pactado.',
          'Contrato a Precio Alzado: el contratista se compromete a entregar la obra completamente terminada ("llave en mano") por un monto total fijo e inamovible, asumiendo los riesgos por variaciones de costos.',
          'Estimaciones de obra: valuaciones periódicas (generalmente quincenales o mensuales) del avance físico real ejecutado por conceptos de trabajo, acompañadas de números generadores y croquis.',
          'Finiquito y Acta de Entrega-Recepción: documento oficial que extingue las obligaciones contractuales ordinarias, constata el saldo contable final y da inicio al periodo de garantía por vicios ocultos.'
        ],
        constructionApplication: 'Conciliación de números generadores en obra con la supervisión externa para autorizar el pago de estimaciones periódicas sin penalizaciones.',
        practiceExercises: [
          {
            prompt: '¿Cuál es la función del anticipo en un contrato de obra pública y qué garantía legal exige la dependencia antes de liberarlo?',
            hint: 'Fianza bancaria de anticipo por el 100% del monto entregado.',
            solution: 'El anticipo (típicamente del 10% al 30% del monto contractual) permite al contratista adquirir insumos iniciales, fletes y habilitar bodegas de obra. Exige la entrega previa de una fianza de anticipo emitida por una afianzadora legalmente constituida que cubra el 100% del importe adelantado.'
          }
        ]
      },
      {
        id: 'leg-top-4',
        title: 'Responsabilidad Civil, Administrativa y Penal por Vicios Ocultos',
        rap: 'RAP 4: Delimita la responsabilidad legal del constructor y arquitecto ante fallas estructurales y colapsos.',
        summary: 'El Código Civil Federal y los códigos civiles locales fijan un régimen de responsabilidad estricto sobre el constructor, proyectista y perito por la ruina total o parcial del edificio debida a vicios de la construcción, defectos del suelo o vicios de los materiales empleados.',
        keyPoints: [
          'Vicios ocultos: defectos, fallas o anomalías que no son detectables a simple vista durante la entrega formal de la obra y que se manifiestan con posterioridad deteriorando la habitabilidad o seguridad del inmueble.',
          'Plazo de garantía legal: el Código Civil estipula que el arquitecto o contratista responde civilmente por un lapso de 5 a 10 años en caso de ruina estructural o falla de cimientos.',
          'Fianza de vicios ocultos: póliza que garantiza al propietario durante 12 meses posteriores al acta de entrega-recepción la reparación inmediata de cualquier vicio atribuible a mala calidad de mano de obra o materiales.',
          'Responsabilidad penal: en caso de colapso con pérdidas humanas por negligencia grave, omisión de especificaciones de cálculo o uso deliberado de materiales defectuosos (homicidio culposo o fraude procesal).'
        ],
        constructionApplication: 'Defensa técnica y peritaje forense ante reclamaciones de condóminos por filtraciones de losas o fisuras diagonales en muros estructurales.',
        practiceExercises: [
          {
            prompt: 'Si un edificio recién entregado presenta grietas severas en sus trabes a los 8 meses debido a que el contratista omitió varillas señaladas en el plano estructural, ¿qué acciones legales aplican?',
            hint: 'Fianza de vicios ocultos y responsabilidad civil y penal.',
            solution: 'El propietario puede hacer efectiva de inmediato la fianza de vicios ocultos (por el 10% del contrato) y demandar por la vía civil la reparación integral de los daños estructurales; adicionalmente, el DRO y el contratista enfrentan denuncias penales por fraude procesal y riesgo a la seguridad colectiva.'
          }
        ]
      },
      {
        id: 'leg-top-5',
        title: 'Legislación Ambiental en la Edificación: LGEEPA y Manifiesto de Impacto Ambiental',
        rap: 'RAP 5: Evalúa las condicionantes ambientales y planes de manejo de residuos de la construcción (RCD).',
        summary: 'La Ley General del Equilibrio Ecológico y la Protección al Ambiente (LGEEPA) y sus reglamentos obligan a someter los proyectos de infraestructura a una evaluación previa de impacto ambiental para prevenir la degradación de ecosistemas, mantos acuíferos y suelos.',
        keyPoints: [
          'Manifiesto de Impacto Ambiental (MIA): estudio técnico multidisciplinario presentado ante la SEMARNAT o secretarías estatales (como la SEDEMA en CDMX) que identifica, predice y propone medidas de mitigación para los impactos ambientales del proyecto.',
          'Residuos de la Construcción y Demolición (RCD / Escombro): regulados por la norma ambiental NADF-007-RNAT para obligar a su separación en obra (limpios, mezclados, inertes) y traslado a plantas de reciclaje autorizadas.',
          'Tala y poda de árboles: requiere permiso expreso de la alcaldía o municipio con restitución física o pago de derechos por compensación ecológica.'
        ],
        constructionApplication: 'Obtención obligatoria del Manifiesto Ambiental de la SEDEMA y acreditación del tiro de tierras y escombros en centros de reciclaje autorizados de la Ciudad de México.',
        practiceExercises: [
          {
            prompt: '¿Por qué está estrictamente penado por la ley ambiental verter escombros de demolición o tierra de excavación en barrancas, camellones o terrenos baldíos?',
            hint: 'Delito ambiental, obstrucción de cauces pluviales y riesgo de aluviones.',
            solution: 'Porque constituye un delito ambiental grave que azolva cauces naturales provocando inundaciones urbanas masivas, contamina mantos freáticos y genera inestabilidad de taludes con riesgo inminente de deslaves.'
          }
        ]
      }
    ]
  },
  {
    id: 'leg-mod-2',
    title: 'Parcial 2: Reglamento de Construcciones para la CDMX (RCDF), NTC y Tramitología Municipal',
    parcialNumber: 2,
    competence: 'Gestiona licencias y manifestaciones de construcción ante alcaldías y ventanillas únicas, aplicando los requisitos del RCDF y funciones del Director Responsable de Obra.',
    topics: [
      {
        id: 'leg-top-6',
        title: 'El Reglamento de Construcciones para la CDMX (RCDF) y Clasificación de Estructuras',
        rap: 'RAP 1: Clasifica las edificaciones por su destino e importancia estructural según el RCDF y sus Normas Técnicas.',
        summary: 'El RCDF y sus Normas Técnicas Complementarias (NTC actualizadas tras los sismos de 1985 y 2017) fijan las exigencias de habitabilidad, accesibilidad, seguridad estructural y prevención de incendios en la capital del país. Clasifica las edificaciones según su grado de riesgo y destino social.',
        keyPoints: [
          'Grupo A (Edificaciones de vital importancia o colapso catastrófico): Hospitales, estaciones de bomberos, centrales telefónicas, subestaciones eléctricas, terminales de transporte masivo, presas, escuelas, estadios y auditorios para más de 1,000 personas. Requieren factores de carga sísmica aumentados (Factor de importancia I = 1.5).',
          'Grupo B (Edificaciones de ocupación normal): Subgrupo B1 (edificios de más de 30 metros de altura o más de 6,000 m² construidos, plazas comerciales, hoteles); Subgrupo B2 (viviendas unifamiliares y bifamiliares, pequeños comercios de altura menor a 30 m y áreas menores a 6,000 m²).',
          'Objetivo central: evitar el colapso estructural y salvaguardar la vida humana ante el sismo máximo reglamentario.'
        ],
        constructionApplication: 'Clasificación estructural formal al inicio del proyecto para determinar si requiere dictamen de seguridad estructural obligatorio y corresponsables especializados.',
        practiceExercises: [
          {
            prompt: '¿Por qué una escuela primaria de 2 niveles se cataloga como Estructura del Grupo A y qué factor de importancia sísmica (I) se le asigna?',
            hint: 'Concentración de menores de edad y función como albergue en desastres.',
            solution: 'Se clasifica en el Grupo A debido a la alta concentración de ocupantes vulnerables y su potencial uso como albergue temporal post-sismo. Se le asigna un factor de importancia I = 1.5 en el diseño de sus trabes, columnas y cimientos.'
          }
        ]
      },
      {
        id: 'leg-top-7',
        title: 'Zonificación Geotécnica y Factores de Diseño Sísmico en la CDMX',
        rap: 'RAP 2: Determina los parámetros dinámicos de diseño en función de la ubicación geográfica del predio en el Valle de México.',
        summary: 'El subsuelo de la Ciudad de México está estratificado en tres zonas geotécnicas principales con comportamientos dinámicos radicalmente distintos ante sismos originados en la costa del Pacífico (falla de subducción de Cocos-Norteamérica).',
        keyPoints: [
          'Zona I (Lomas): terreno firme formado por tobas volcánicas, arenas pumíticas y derrames de basalto (suelo duro, bajas amplificaciones sísmicas, periodo del suelo menor a 0.5 s).',
          'Zona II (Transición): estratos arcillosos poco profundos alternados con capas de arenas y limos (espesores de arcilla menores a 20 m).',
          'Zona III (Lago): antiguos lechos de lagos con arcillas saturadas de altísima compresibilidad y alto contenido de agua (espesores de 20 a más de 50 m). Produce fenómenos de resonancia y amplificación sísmica extrema con periodos del suelo de 1.5 a 3.5 segundos.',
          'Espectro de diseño SASID: programa informático oficial para obtener la aceleración espectral en roca y en el predio específico.'
        ],
        constructionApplication: 'Ajuste de rigideces de columnas y muros para evitar que el periodo fundamental del edificio coincida con el periodo natural del suelo lacustre (evitar resonancia destructiva).',
        practiceExercises: [
          {
            prompt: '¿Qué fenómeno físico provocó el colapso de múltiples edificios de entre 6 y 15 niveles en la Zona Lacustre (Zona III) de la CDMX durante los sismos de 1985 y 2017?',
            hint: 'Coincidencia de frecuencias y resonancia con el estrato blando de arcilla.',
            solution: 'El fenómeno de resonancia sísmica: el periodo de oscilación natural del edificio coincidió con el periodo predominante de vibración de las arcillas del lago (aprox. 2.0 segundos), provocando amplificaciones desmesuradas de aceleración y deformación lateral que rebasaron la ductilidad de la estructura.'
          }
        ]
      },
      {
        id: 'leg-top-8',
        title: 'Figuras Jurídicas de Responsabilidad Técnica: DRO y Corresponsables',
        rap: 'RAP 3: Delimita las facultades, obligaciones y alcances legales del Director Responsable de Obra y Corresponsables.',
        summary: 'El Director Responsable de Obra (DRO) es la persona física auxiliar de la administración pública facultada por la Secretaría de Desarrollo Urbano y Vivienda (SEDUVI) para responder solidariamente de la estricta observancia del RCDF en el diseño, tramitación y ejecución material de un proyecto.',
        keyPoints: [
          'Obligaciones del DRO: 1) Suscribir las solicitudes de licencias o manifestaciones de construcción; 2) Dirigir y vigilar la obra mediante visitas periódicas; 3) Mantener en la obra y asentar notas en el Libro de Bitácora oficial foliado; 4) Colocar en lugar visible el letrero de obra con su registro y datos del proyecto; 5) Tramitar el Aviso de Terminación de Obra y Vo.Bo. de Seguridad y Operación.',
          'Corresponsables Técnicos: Profesionales especializados acreditados por comisiones de pares en áreas complejas: 1) Corresponsable en Seguridad Estructural (CSE, ingeniero civil o estructurista para obras del Grupo A y Subgrupo B1); 2) Corresponsable en Diseño Urbano y Arquitectónico (CDUyA); 3) Corresponsable en Instalaciones (CI).',
          'Responsabilidad solidaria: civil, administrativa e inhabilitación profesional por negligencia.'
        ],
        constructionApplication: 'Gestión de la responsiva técnica oficial que ampara la seguridad estructural y legal de la edificación ante la alcaldía.',
        practiceExercises: [
          {
            prompt: '¿Qué figuras de corresponsabilidad técnica son legalmente exigibles para una torre corporativa de oficinas de 15 niveles (Grupo B1) en la alcaldía Cuauhtémoc?',
            hint: 'Supera los 30 m de altura y requiere todas las especialidades técnicas.',
            solution: 'Requiere la firma del DRO general y la responsiva obligatoria de tres Corresponsables: Corresponsable en Seguridad Estructural (CSE), Corresponsable en Diseño Urbano y Arquitectónico (CDUyA) y Corresponsable en Instalaciones (CI).'
          }
        ]
      },
      {
        id: 'leg-top-9',
        title: 'La Bitácora de Obra: Naturaleza Jurídica, Asientos Oficiales y Cierre',
        rap: 'RAP 4: Redacta y valida notas de bitácora con valor probatorio legal pleno conforme a normas oficiales.',
        summary: 'La Bitácora de Obra es el instrumento técnico-jurídico y administrativo oficial y vinculante que registra el desarrollo de los trabajos, las modificaciones al proyecto, las órdenes de la supervisión y las autorizaciones del DRO. Posee valor probatorio pleno ante tribunales.',
        keyPoints: [
          'Reglas de llenado del libro foliado: 1) Se escribe con tinta indeleble; 2) No se permiten tachaduras, enmendaduras ni borrones (los errores se corrigen con nota aclaratoria posterior); 3) Se cancelan los renglones sobrantes con una línea diagonal; 4) Cada nota debe contener fecha, número consecutivo, asunto, descripción técnica, orden emitida y firmas cruzadas del Residente y del DRO/Supervisor.',
          'Bitácora Electrónica de Obra Pública (BESOP): sistema digital en línea obligatorio para contratos federales normados por la LOPSRM.',
          'Tipos de notas: Apertura, Modificación de proyecto, Pruebas de laboratorio aprobadas, Autorización de colado de losa, Órdenes de suspensión temporal y Acta de Cierre.'
        ],
        constructionApplication: 'Asiento obligatorio en bitácora previo a cualquier colado de concreto: certificación de que el armado de acero, diámetros, estribos, traslapes e instalaciones ahogadas cumplen fielmente con el plano estructural.',
        practiceExercises: [
          {
            prompt: '¿Por qué una nota en la bitácora de obra que autoriza un colado no puede ser firmada únicamente por el contratista constructor?',
            hint: 'Principio de supervisión y control técnico imparcial.',
            solution: 'Porque el contratista es parte interesada en el cobro; la bitácora exige por ley la firma mancomunada del DRO o del Supervisor de Obra acreditado para validar fehacientemente que la estructura cumple con los requisitos normativos de seguridad.'
          }
        ]
      },
      {
        id: 'leg-top-10',
        title: 'Trámites de Licencias: Alineamiento, Uso de Suelo y Manifestaciones Tipo A, B y C',
        rap: 'RAP 5: Integra los expedientes técnicos y gestiona los trámites ante las Ventanillas Únicas de las Alcaldías.',
        summary: 'Antes de colocar un solo tabique en el predio, es indispensable obtener los documentos urbanísticos preparatorios y registrar la manifestación de construcción correspondiente según el impacto del proyecto.',
        keyPoints: [
          'Constancia de Alineamiento y Número Oficial: fija el límite físico oficial entre la propiedad privada y la vía pública municipal, y asigna el número oficial de gobierno.',
          'Certificado Único de Zonificación de Uso del Suelo (SEDUVI): dictamina si el predio tiene uso Habitacional (H), Comercial (HC), Mixto o Industrial, indicando la altura permitida en niveles, el porcentaje mínimo de área libre descubierta (ej. 20% o 30%) y densidad habitacional.',
          'Manifestación de Construcción Tipo A: no requiere firma obligatoria de DRO; aplica para vivienda unifamiliar de hasta 120 m² en predios regulares, bardas de hasta 2.50 m y ampliaciones menores.',
          'Manifestación de Construcción Tipo B: requiere firma de DRO y planos ejecutivos firmados; aplica para vivienda plurifamiliar de hasta 5,000 m² o comercio de hasta 30 m de altura.',
          'Manifestación de Construcción Tipo C: requiere DRO y Corresponsables; aplica para proyectos mayores a 5,000 m², excavaciones profundas de más de 3.50 m o edificios de más de 30 m de altura.'
        ],
        constructionApplication: 'Cálculo del Área Libre de Absorción en un predio: un terreno de 200 m² con norma de uso H3/30% exige conservar al menos 60 m² descubiertos como jardín o patio permeable.',
        practiceExercises: [
          {
            prompt: 'Para la edificación de un conjunto de 12 departamentos en un edificio de 4 niveles con un total de 1,400 m² de construcción en la alcaldía Azcapotzalco, ¿qué tipo de Manifestación de Construcción corresponde tramitar y qué profesionales deben firmar?',
            hint: 'Verifica los rangos de superficie: Tipo A (hasta 120 m²), Tipo B (hasta 5,000 m²), Tipo C (más de 5,000 m²).',
            solution: 'Corresponde una Manifestación de Construcción Tipo B, y requiere obligatoriamente la firma del Propietario o Representante Legal, el proyectista arquitectónico y la responsiva de un Director Responsable de Obra (DRO).'
          }
        ]
      }
    ]
  },
  {
    id: 'leg-mod-3',
    title: 'Parcial 3: Ley Federal del Trabajo, Seguridad Laboral (NOM-031), IMSS y SIROC',
    parcialNumber: 3,
    competence: 'Aplica los protocolos de seguridad industrial en obras bajo la NOM-031-STPS, gestiona el registro patronal en SIROC y calcula el FASAR y cuotas del Seguro Social.',
    topics: [
      {
        id: 'leg-top-11',
        title: 'Ley Federal del Trabajo (LFT): Derechos, Jornadas y Riesgos Laborales',
        rap: 'RAP 1: Aplica las disposiciones de la Ley Federal del Trabajo en la contratación de cuadrillas y pago de jornales.',
        summary: 'La Ley Federal del Trabajo rige las relaciones laborales en la industria de la construcción en el marco del Artículo 123 Constitucional. Establece los derechos irrenunciables de los trabajadores de la construcción (albañiles, peones, fierreros, carpinteros).',
        keyPoints: [
          'Jornadas máximas legales: Diurna (8 horas diarias / 48 horas semanales, entre 6:00 y 20:00 h); Nocturna (7 horas / 42 semanales); Mixta (7.5 horas / 45 semanales).',
          'Horas extras: se pagan al doble las primeras 9 horas semanales y al triple las subsecuentes.',
          'Séptimo día y prestaciones: pago de día de descanso semanal obligatorio (séptimo día), prima vacacional, aguinaldo (mínimo 15 días de salario) y reparto de utilidades (PTU).',
          'Contrato por obra determinada: modalidad contractual típica en construcción donde la relación laboral concluye al terminarse la etapa física pactada sin responsabilidad indemnizatoria de despido.'
        ],
        constructionApplication: 'Administración de nóminas semanales y liquidación conforme a la ley de cuadrillas de fierreros y carpinteros al concluir la etapa de estructura de concreto.',
        practiceExercises: [
          {
            prompt: 'Si un oficial albañil percibe un salario diario tabular de $450 pesos y labora 4 horas extras en un día de colado, ¿cuánto debe pagársele por concepto de esas horas extras?',
            hint: 'Salario por hora = Salario diario / 8. Las primeras 9 horas extras se pagan al 200% (doble).',
            solution: 'Salario por hora ordinaria = $450 / 8 = $56.25 pesos/hora.\nHora extra doble = $56.25 × 2 = $112.50 pesos.\nPago por 4 horas extras = 4 × $112.50 = $450.00 pesos adicionales.'
          }
        ]
      },
      {
        id: 'leg-top-12',
        title: 'Norma Oficial Mexicana NOM-031-STPS-2011: Seguridad y Salud en Obra',
        rap: 'RAP 2: Diseña el Plan de Seguridad y Salud en el Trabajo y verifica el uso del EPP reglamentario.',
        summary: 'La NOM-031-STPS-2011 establece las condiciones obligatorias de seguridad y salud en las obras de construcción para prevenir riesgos laborales, accidentes fatales y enfermedades profesionales en el sector de la edificación.',
        keyPoints: [
          'Clasificación de obras por tamaño: Obra Pequeña (hasta 350 m² o hasta 5.5 m de altura), Obra Mediana (350 a 10,000 m² o 5.5 a 16.5 m), Obra Grande (más de 10,000 m² o más de 16.5 m).',
          'Equipo de Protección Personal (EPP básico y obligatorio en obra): Casco dieléctrico de polietileno de alto impacto clase E o G, botas de seguridad con casquillo de acero o poliamida y suela antiderrapante, chaleco reflejante de alta visibilidad, lentes de seguridad contra impactos de partículas y guantes de carnaza o nitrilo.',
          'Comisión de Seguridad e Higiene (NOM-019-STPS): integrada paritariamente por representantes de los trabajadores y del patrón para realizar recorridos mensuales de verificación de riesgos.'
        ],
        constructionApplication: 'Supervisión diaria al ingreso a obra: prohibir el acceso a cualquier trabajador o visitante que carezca del EPP básico reglamentario.',
        practiceExercises: [
          {
            prompt: '¿Por qué la norma NOM-031-STPS prohíbe el uso de tenis deportivos o sandalias a los albañiles y peones en el área de trabajo?',
            hint: 'Riesgo de perforación por clavos en duelas de cimbra y aplastamiento por caída de tabiques.',
            solution: 'Porque el calzado deportivo carece de puntera rígida protectora contra impacto o aplastamiento y no cuenta con suela de penetración reforzada contra clavos salientes de cimbras de madera tiradas en el piso, factores que causan el 25% de los accidentes de obra.'
          }
        ]
      },
      {
        id: 'leg-top-13',
        title: 'Trabajos de Alto Riesgo: Alturas, Excavaciones, Espacios Confinados y Soldadura',
        rap: 'RAP 3: Emite y valida permisos de trabajo peligroso y supervisa sistemas anticaídas.',
        summary: 'La NOM-031-STPS clasifica como actividades de alto riesgo aquellas donde un fallo en las medidas de seguridad deriva en fatalidad inmediata: trabajos en alturas (≥1.80 m), excavaciones profundas (≥1.50 m), espacios confinados y corte y soldadura.',
        keyPoints: [
          'Trabajos en alturas (a partir de 1.80 m de elevación sobre el piso): Uso obligatorio de arnés de cuerpo completo con línea de vida con amortiguador de impacto anclada a un punto fijo con resistencia mínima de 2,268 kg (5,000 lb); barandales perimetrales con rodapié de 15 cm en bordes de losa y andamios.',
          'Excavaciones de más de 1.50 m: taludes estabilizados, ademes de madera o tablestacas metálicas y escaleras de evacuación separadas a no más de 7.5 metros.',
          'Corte y soldadura: extintor PQS de 9 kg a no más de 5 m de distancia, mamparas ignífugas y permiso de trabajo en caliente.',
          'Espacios confinados (cisternas, pozos de visita, silos): medición previa de oxígeno (mínimo 19.5% de O₂) y gases tóxicos o explosivos con detector multigas antes de autorizar el ingreso.'
        ],
        constructionApplication: 'Colocación obligatoria de líneas de vida horizontales de cable de acero de 3/8" tensadas para el anclaje seguro de armadores y coladores en el perímetro de losas de niveles superiores.',
        practiceExercises: [
          {
            prompt: '¿A partir de qué altura sobre el nivel del suelo la norma NOM-031-STPS cataloga formalmente una labor como "trabajo en alturas" obligando al uso de arnés anticaídas?',
            hint: 'Aplica tanto a escaleras, andamios como a bordes de losas desprotegidas.',
            solution: 'A partir de 1.80 metros de altura sobre el nivel de referencia o piso inferior.'
          }
        ]
      },
      {
        id: 'leg-top-14',
        title: 'Seguridad Social en la Construcción: IMSS y el Sistema SIROC',
        rap: 'RAP 4: Registra obras en el portal SIROC del IMSS y calcula aportaciones patronales evitando capitales constitutivos.',
        summary: 'El Reglamento del Seguro Social Obligatorio para los Trabajadores de la Construcción por Obra o Tiempo Determinado obliga a dar de alta la obra y afiliar a todos los operarios desde el primer día de labores, protegiéndolos contra riesgos de trabajo, accidentes fatales y enfermedades.',
        keyPoints: [
          'SIROC (Sistema Integral de Registro de Obras de la Construcción): plataforma digital del IMSS en la que los patrones registran la obra con número de licencia, ubicación, presupuesto estimado de mano de obra y calendario en los primeros 5 días hábiles siguientes al inicio.',
          'Reportes bimestrales en SIROC: declaración de incidencias, suspensión temporal, reanudación y reporte final de terminación de obra.',
          'Consecuencias de omisión: si el patrón no registra la obra o no afilia a los trabajadores, el IMSS aplica la estimativa de cuotas por metro cuadrado construido y cobra capitales constitutivos ante cualquier siniestro laboral.',
          'Clase V de riesgo de trabajo: la industria de la edificación pertenece a la clase más alta de riesgo, pagando la prima máxima de aseguramiento.'
        ],
        constructionApplication: 'Apertura y cierre del expediente SIROC de la obra para obtener la Constancia de Cumplimiento de Obligaciones ante el IMSS requerida para cobrar el finiquito de obra.',
        practiceExercises: [
          {
            prompt: '¿Qué consecuencia legal y económica enfrenta un constructor si no registra su obra ante el SIROC del IMSS y un trabajador eventual sufre un accidente grave al caer de una losa?',
            hint: 'Capitales constitutivos y multas de auditoría fiscal.',
            solution: 'El IMSS le fincará al patrón un "Capital Constitutivo" cobrándole la totalidad de los gastos médicos de urgencia, cirugías, hospitalización, indemnizaciones y pensiones vitalicias del trabajador lesionado, además de embargos precautorios y multas fiscales equivalentes al cobro de cuotas presuntivas por metro cuadrado construido.'
          }
        ]
      },
      {
        id: 'leg-top-15',
        title: 'Factor de Salario Real (FASAR), Cédulas SUA e INFONAVIT',
        rap: 'RAP 5: Integra el FASAR en matrices de precios unitarios y liquida aportaciones en el software SUA.',
        summary: 'El Factor de Salario Real (FASAR) es el multiplicador matemático que se aplica al salario nominal o tabular de un trabajador para reflejar el costo real que representa para la empresa constructora, incorporando los días no laborados pagados por ley y las cuotas de seguridad social.',
        keyPoints: [
          'Días pagados al año: 365 días del año calendario + días proporcionales de aguinaldo (15 días) + prima vacacional.',
          'Días realmente laborados: se restan los 52 domingos, días de descanso obligatorio por ley (7 u 8 días festivos), vacaciones, días perdidos por lluvia o causas de fuerza mayor y permisos (promedio de 290 a 295 días trabajados al año).',
          'Aportaciones patronales: IMSS (Riesgo de trabajo, Enfermedades y maternidad, Invalidez y vida, Guarderías, Retiro y Cesantía en edad avanzada), INFONAVIT (5% del Salario Base de Cotización para créditos de vivienda) e Impuesto Sobre Nóminas estatal (ISN, 3%).',
          'El FASAR varía típicamente entre 1.55 y 1.85 veces el salario nominal.',
          'Software SUA (Sistema Único de Autodeterminación): herramienta informática oficial del IMSS para la emisión de las líneas de captura de pago mensual y bimestral.'
        ],
        formulas: [
          {
            name: 'Ecuación General del FASAR',
            formula: 'FASAR = F_s · (Tp / Tl) + (P_patronal / Tl)',
            explanation: 'Relación entre días pagados (Tp) y días laborados (Tl) sumando las prestaciones e impuestos patronales.'
          }
        ],
        constructionApplication: 'Cálculo analítico del FASAR en software de precios unitarios (Neodata / Opus) para justificar legalmente el costo de mano de obra en concursos de obra pública.',
        practiceExercises: [
          {
            prompt: 'Si un peón de albañilería tiene un salario tabular de $350 pesos diarios y el estudio de FASAR de la empresa arroja un factor de 1.68, ¿cuál es el costo real por jornada de ese peón a incluir en la tarjeta de precio unitario?',
            hint: 'Salario Real = Salario Tabular × FASAR.',
            solution: 'Salario Real = $350.00 × 1.68 = $588.00 pesos por jornada de 8 horas.\nEse es el valor real que la constructora debe presupuestar para no tener pérdidas contables al pagar cuotas patronales al IMSS e INFONAVIT.'
          }
        ]
      }
    ]
  }
];

import { StudyModule } from '../../types';

export const INGLES_GUIDES: StudyModule[] = [
  {
    id: 'ing-mod-1',
    title: 'Unit 1: Remembrances, Past Simple and Construction Milestones',
    parcialNumber: 1,
    competence: 'Utiliza el tiempo pasado simple (verbos regulares e irregulares), voz pasiva y preguntas con did para narrar eventos históricos e informes de obra civil.',
    topics: [
      {
        id: 'ing-top-1',
        title: 'Past Simple: Regular Verbs, Spelling Rules and Pronunciation of -ed',
        rap: 'RAP 1: Formulates affirmative, negative, and interrogative sentences in Simple Past using regular verbs.',
        summary: 'The Simple Past tense describes completed actions that happened at a definite time in the past. Regular verbs form their past tense by adding the suffix -ed to the base form, following specific spelling and phonetic rules.',
        keyPoints: [
          'Basic spelling rule: Most verbs add -ed (work -> worked, inspect -> inspected, demolish -> demolished).',
          'Verbs ending in silent -e: add only -d (live -> lived, measure -> measured, vibrate -> vibrated).',
          'Consonant doubling (CVC rule): One-syllable verbs ending in a single consonant preceded by a single vowel double the final consonant (plan -> planned, stop -> stopped, clap -> clapped).',
          'Verbs ending in consonant + y: change -y to -ied (study -> studied, carry -> carried, apply -> applied). But vowel + y adds -ed (play -> played, stay -> stayed).',
          'Pronunciation of the -ed ending: 1) /ɪd/ after /t/ or /d/ sounds (compacted, excavated, welded); 2) /t/ after voiceless sounds /p, k, f, s, ʃ, tʃ/ (mixed, patched, finished); 3) /d/ after all voiced vowel and consonant sounds (leveled, poured, drilled).'
        ],
        formulas: [
          {
            name: 'Affirmative Past Simple Pattern',
            formula: 'Subject + Verb-ed + Complement + Time Expression',
            explanation: 'Standard grammatical order for completed past events with regular verbs.'
          }
        ],
        practicalApplication: 'Writing daily shift logs reporting completed tasks on the construction site: "Yesterday the crew leveled the trench and inspected the rebar cage".',
        practiceExercises: [
          {
            prompt: 'Complete the sentence with the correct past form of the regular verb in parentheses: "The surveyor (measure) _______ the perimeter of the lot, and the workers (excavate) _______ the foundation trenches yesterday."',
            hint: 'Measure ends in -e; excavate ends in -e.',
            solution: '"The surveyor MEASURED the perimeter of the lot, and the workers EXCAVATED the foundation trenches yesterday."'
          }
        ]
      },
      {
        id: 'ing-top-2',
        title: 'Past Simple: Irregular Verbs in Civil Engineering and Architecture',
        rap: 'RAP 2: Employs technical irregular verbs to narrate construction tasks and structural milestones.',
        summary: 'Irregular verbs do not follow the -ed rule; each verb has an idiosyncratic past form that must be memorized to describe structural fabrication and site operations.',
        keyPoints: [
          'High-frequency irregular verbs in civil engineering: be -> was/were; build -> built; cut -> cut; draw -> drew; find -> found; make -> made; see -> saw; take -> took; write -> wrote; bend -> bent; cast -> cast; buy -> bought; choose -> chose.',
          'Three forms with identical spelling: cut -> cut, cast -> cast, set -> set (the mortar set quickly), spread -> spread.',
          'Verbs with internal vowel shifts: draw -> drew (the architect drew the floor plan), drive -> drove (they drove the precast piles into the clay stratum).'
        ],
        practicalApplication: 'Describing project execution in bilingual structural engineering dossiers.',
        practiceExercises: [
          {
            prompt: 'Fill in the blanks with the correct past forms of the irregular verbs: "The ironworkers (bend) _______ the steel rebars according to the blueprint, and the team (cast) _______ the reinforced concrete slab last Monday."',
            hint: 'Past of bend is bent; cast remains cast.',
            solution: '"The ironworkers BENT the steel rebars according to the blueprint, and the team CAST the reinforced concrete slab last Monday."'
          }
        ]
      },
      {
        id: 'ing-top-3',
        title: 'Past Simple: Negatives, Wh- Questions with DID and Time Expressions',
        rap: 'RAP 3: Structures negative statements, yes/no questions, and information inquiries using auxiliary did.',
        summary: 'In negative statements and interrogative questions in the Past Simple, the auxiliary verb DID or DIDN\'T is mandatory, and the main verb reverts to its infinitive base form.',
        keyPoints: [
          'Negative structure: Subject + DID NOT (didn\'t) + Base Verb + Complement ("The contractor didn\'t purchase the Portland cement last Friday").',
          'Yes/No Questions: Did + Subject + Base Verb + Complement? ("Did the inspector approve the concrete slump test? - Yes, he did / No, he didn\'t").',
          'Wh- Information Questions: Wh-word + did + Subject + Base Verb? ("Where did they pour the grade beams? When did the crane arrive? Why did the timber forms buckle?").',
          'Time expressions: yesterday, last night/month/year, two days ago, in 1985, during the previous semester.'
        ],
        formulas: [
          {
            name: 'Wh- Question Pattern in Past Simple',
            formula: 'Wh-Word + DID + Subject + Base Verb + Complement?',
            explanation: 'In questions with did, never conjugate the main verb into past form.'
          }
        ],
        practicalApplication: 'Conducting site supervision debriefings: "Why did the column reinforcement deflect during the pour?"',
        practiceExercises: [
          {
            prompt: 'Change the following affirmative sentence into a negative statement and then into a Wh- question asking about the location: "The structural engineer built the arch bridge in Guadalajara in 1968."',
            hint: 'Use didn\'t + build for negative; Where + did + subject + build... for the question.',
            solution: 'Negative: "The structural engineer DIDN\'T BUILD the arch bridge in Guadalajara in 1968."\nWh- Question: "WHERE DID the structural engineer BUILD the arch bridge in 1968?"'
          }
        ]
      },
      {
        id: 'ing-top-4',
        title: 'Passive Voice in Past Simple: Describing Infrastructure and Monuments',
        rap: 'RAP 4: Formulates passive structures (was/were + past participle) to emphasize the constructed object.',
        summary: 'In technical engineering literature, the Passive Voice is preferred over the active voice because the focal point is the structure constructed or tested, rather than the identity of the workers.',
        keyPoints: [
          'Passive Voice Formula: Subject + WAS / WERE + Past Participle (V3) + (by Agent).',
          'Singular: "The Torre Latinoamericana WAS DESIGNED by Leonardo Zeevaert and COMPLETED in 1956."',
          'Plural: "Three subway lines WERE INAUGURATED in Mexico City in 1969."',
          'Omission of agent: The agent ("by workers") is omitted when obvious or irrelevant: "The concrete was cured for 28 days with wet burlap sacks."'
        ],
        formulas: [
          {
            name: 'Past Simple Passive Pattern',
            formula: 'Subject + was/were + Past Participle (V3)',
            explanation: 'Used when the receiver of the action is the grammatical subject.'
          }
        ],
        practicalApplication: 'Writing official technical summaries for engineering journals and architectural heritage documentation.',
        practiceExercises: [
          {
            prompt: 'Convert the active sentence into the Passive Voice: "The construction company demolished the old warehouse last October."',
            hint: 'The old warehouse + was + demolished + by...',
            solution: '"The old warehouse WAS DEMOLISHED by the construction company last October."'
          }
        ]
      },
      {
        id: 'ing-top-5',
        title: 'Technical Reading Comprehension: Historical Megaprojects (Panama Canal & Golden Gate)',
        rap: 'RAP 5: Extracts specific data, timelines, and technical challenges from engineering historical articles.',
        summary: 'Analyzing historical accounts of global megaprojects enriches technical vocabulary related to hydraulics, geotechnical stabilization, steel truss fabrication, and labor challenges.',
        keyPoints: [
          'The Panama Canal (opened 1914): locks system (gravity-fed water gates), excavation through the Culebra Cut, eradication of yellow fever and malaria by sanitary brigades.',
          'The Golden Gate Bridge (San Francisco, 1937): suspension bridge engineering, Joseph Strauss, deep underwater concrete piers against strong ocean currents, safety net saving 19 workers.',
          'Scanning and Skimming strategies: scanning for specific dates, dimensions, and numbers; skimming for general thesis and engineering conclusions.'
        ],
        practicalApplication: 'Reading international engineering case studies and historical failure reports to avoid repetitive structural mistakes.',
        practiceExercises: [
          {
            prompt: 'In the sentence: "Engineers overcame severe geotechnical landslides by cutting back the slope angles of the Culebra Cut", what did the engineers do to stabilize the slope?',
            hint: 'Look for the action verb "cutting back" and the parameter "slope angles".',
            solution: 'They flattened or reduced the steepness of the hillsides (cutting back the slope angles) to prevent the mountain from sliding into the canal bed.'
          }
        ]
      }
    ]
  },
  {
    id: 'ing-mod-2',
    title: 'Unit 2: Past Experiences, Past Continuous, "Used To" and Technical Connectors',
    parcialNumber: 2,
    competence: 'Compara acciones continuas interrumpidas en el pasado mediante Past Continuous, describe hábitos extintos con used to y emplea conectores de contraste y causa-efecto.',
    topics: [
      {
        id: 'ing-top-6',
        title: 'Past Continuous (Progressive): Form, Functions and Scene Setting',
        rap: 'RAP 1: Formulates past continuous sentences with was/were + V-ing to describe ongoing actions in progress.',
        summary: 'The Past Continuous describes actions that were continuously in progress at an exact moment in the past. It sets the background scene in accident investigation reports.',
        keyPoints: [
          'Affirmative: Subject + WAS / WERE + Verb-ing ("The crane operator was lifting the steel beam at 10:30 AM"). Was for I/He/She/It; Were for You/We/They.',
          'Negative: Subject + was not (wasn\'t) / were not (weren\'t) + Verb-ing ("The masons weren\'t wearing safety goggles during chipping").',
          'Spelling of -ing: double consonant after short stressed vowel (run -> running); drop silent -e (vibrate -> vibrating); -ie changes to -y (tie -> tying).'
        ],
        formulas: [
          {
            name: 'Past Continuous Formula',
            formula: 'Subject + was/were + Verb-ing + Complement',
            explanation: 'Expresses an activity in progress at a specific past timestamp.'
          }
        ],
        practicalApplication: 'Describing the initial conditions of a site during a safety audit: "At 8:00 AM, the crew was unloading 50 tons of rebar while the batch plant was calibrating its scales".',
        practiceExercises: [
          {
            prompt: 'Put the verbs into the Past Continuous: "At noon yesterday, the backhoe (dig) _______ the drainage canal while the plumbers (assemble) _______ the PVC pipes."',
            hint: 'Backhoe is singular (was); plumbers is plural (were).',
            solution: '"At noon yesterday, the backhoe WAS DIGGING the drainage canal while the plumbers WERE ASSEMBLING the PVC pipes."'
          }
        ]
      },
      {
        id: 'ing-top-7',
        title: 'Interrupted Past Actions: Combining Past Continuous & Past Simple with When / While',
        rap: 'RAP 2: Synthesizes complex sentences using when and while to report incidents on the job site.',
        summary: 'When a long ongoing action is suddenly interrupted by a shorter, punctual event, the Past Continuous expresses the background action and the Past Simple expresses the interruption.',
        keyPoints: [
          'WHILE is followed by the Past Continuous (the prolonged activity): "WHILE the carpenters WERE ASSEMBLING the formwork, it STARTED to rain heavily."',
          'WHEN is followed by the Past Simple (the sudden event): "We WERE POURING the concrete slab WHEN the power supply FAILED suddenly."',
          'Punctuation rule: If the dependent clause with While/When begins the sentence, use a comma before the main clause; if it is in the middle, no comma is needed.'
        ],
        formulas: [
          {
            name: 'Interrupted Action Syntax',
            formula: 'While + Past Continuous, Past Simple  OR  Past Continuous + when + Past Simple',
            explanation: 'Rule governing concurrent and intersecting past operations.'
          }
        ],
        practicalApplication: 'Filling out occupational incident and hazard reports: "While the mason was climbing the scaffold, the wooden plank cracked".',
        practiceExercises: [
          {
            prompt: 'Combine the two sentences using "WHILE": Action 1: The surveyor was taking levels with the total station. Action 2: The dump truck collided with the fence.',
            hint: 'While goes with the ongoing action in past continuous.',
            solution: '"WHILE the surveyor WAS TAKING levels with the total station, the dump truck COLLIDED with the fence."'
          }
        ]
      },
      {
        id: 'ing-top-8',
        title: 'Habitual Past with "Used To": Traditional vs Modern Construction Systems',
        rap: 'RAP 3: Explains past practices and obsolete technological systems using used to and didn\'t use to.',
        summary: '"Used to + Base Verb" refers to habits, routines, or physical states that existed regularly in the past but no longer occur in modern building practice.',
        keyPoints: [
          'Affirmative: Subject + USED TO + Base Verb ("Builders used to mix mortar manually on the bare ground, but now they operate electric rotary mixers").',
          'Negative: Subject + DIDN\'T USE TO + Base Verb ("Site supervisors didn\'t use to track material deliveries with QR codes fifty years ago").',
          'Questions: Did + Subject + USE TO + Base Verb? ("Did Roman masons use to add volcanic ash to their pozzolanic concrete? - Yes, they did").',
          'Contrast with Be Used To: "used to do" = past habit; "be used to doing" = be accustomed to a condition.'
        ],
        practicalApplication: 'Writing technical comparative articles on the evolution of building codes and construction industrialization.',
        practiceExercises: [
          {
            prompt: 'Rewrite the sentence using "USED TO": "In the past, draftsmen drew all blueprints with manual ink pens on tracing paper, but now they utilize CAD software."',
            hint: 'Replace "drew" with "used to draw".',
            solution: '"In the past, draftsmen USED TO DRAW all blueprints with manual ink pens on tracing paper, but now they utilize CAD software."'
          }
        ]
      },
      {
        id: 'ing-top-9',
        title: 'Connectors of Contrast, Cause, Effect and Condition in Technical Texts',
        rap: 'RAP 4: Connects technical arguments logically with linkers of contrast and causality.',
        summary: 'Cohesive devices and linking adverbials enable engineers to link contrasting facts, explain structural failure causes, and draw mathematical conclusions.',
        keyPoints: [
          'Connectors of Contrast: However (Sin embargo - set off by commas), Although / Even though (A pesar de que - introduces clause), Despite / In spite of (A pesar de - followed by noun phrase or V-ing).',
          'Connectors of Cause: Because / Since / As (Debido a que - followed by clause), Due to / Owing to / Because of (Debido a - followed by noun phrase: "Due to high hydrostatic pressure...").',
          'Connectors of Effect / Result: Therefore (Por consiguiente), Consequently (En consecuencia), As a result (Como resultado).'
        ],
        practicalApplication: 'Drafting project executive summaries and structural audit reports with logical cohesion.',
        practiceExercises: [
          {
            prompt: 'Choose the correct connector (Although / Due to / Therefore): "_______ the volcanic soil possessed high bearing capacity, the footing settlement was minimal; _______, no underpinning was required."',
            hint: 'Contrast clause vs logical consequence.',
            solution: '"ALTHOUGH the volcanic soil possessed high bearing capacity, the footing settlement was minimal; THEREFORE, no underpinning was required."'
          }
        ]
      },
      {
        id: 'ing-top-10',
        title: 'Technical Vocabulary: Heavy Machinery, Power Tools, PPE and Safety Signs',
        rap: 'RAP 5: Identifies bilingual terminology for machinery, equipment, and occupational safety notices.',
        summary: 'Familiarity with English terms for machinery, hand tools, and Personal Protective Equipment (PPE) is essential for operating imported machinery and reading bilingual equipment manuals.',
        keyPoints: [
          'Heavy Earthmoving Machinery: Backhoe (retroexcavadora), Bulldozer (tractor de orugas), Excavator (excavadora), Dump truck (camión de volteo), Road roller / Compactor (apisonadora), Mobile crane (grúa móvil).',
          'Power & Hand Tools: Rotary hammer drill (rotomartillo), Angle grinder (esmeriladora), Circular saw (sierra circular), Trowel (llana / cuchara de albañil), Plumb bob (plomada), Spirit level (nivel de burbuja).',
          'Personal Protective Equipment (PPE): Hard hat (casco), Steel-toe boots (botas con casquillo), Safety harness (arnés de seguridad), High-visibility vest (chaleco reflejante), Safety goggles (lentes de protección), Earplugs (tapones auditivos).',
          'Job Site Safety Notices: "Caution: Men Working Above", "Hard Hat Area", "Authorized Personnel Only".'
        ],
        practicalApplication: 'Interpreting English operation and maintenance manuals (Caterpillar, Komatsu, Hilti, DeWalt) in heavy construction.',
        practiceExercises: [
          {
            prompt: 'Translate into English: "Todos los trabajadores deben usar arnés de seguridad con línea de vida cuando laboren sobre el andamio."',
            hint: 'Use must wear, safety harness, lifeline, scaffold.',
            solution: '"All workers must wear a safety harness with a lifeline when working on the scaffold."'
          }
        ]
      }
    ]
  },
  {
    id: 'ing-mod-3',
    title: 'Unit 3: Comparatives, Superlatives, Future Intentions and Safety Modals',
    parcialNumber: 3,
    competence: 'Compara propiedades mecánicas y térmicas de materiales con comparativos y superlativos, expresa planes de obra con be going to y aplica verbos modales de seguridad industrial.',
    topics: [
      {
        id: 'ing-top-11',
        title: 'Comparative Adjectives in Material Science and Structural Engineering',
        rap: 'RAP 1: Compares structural materials and performance parameters using standard comparative patterns.',
        summary: 'Comparative adjectives evaluate two physical entities or engineering solutions, identifying differences in strength, thermal conductivity, cost, and ductility.',
        keyPoints: [
          'Short adjectives (1 syllable): add -er than (hard -> harder than; cheap -> cheaper than; strong -> stronger than).',
          'Short adjectives ending in -y: change to -ier than (heavy -> heavier than; easy -> easier than).',
          'Long adjectives (2+ syllables): use MORE + adjective + than (durable -> more durable than; flexible -> more flexible than; expensive -> more expensive than).',
          'Irregular comparatives: good -> better than; bad -> worse than; far -> farther/further than.',
          'Equality comparison: AS + adjective + AS ("Bamboo is AS RESISTANT AS timber under axial tension").'
        ],
        formulas: [
          {
            name: 'Comparative Patterns',
            formula: 'Adj-er than  OR  More + Adj + than  OR  As + Adj + as',
            explanation: 'Syntactic structures for contrasting two materials or structural systems.'
          }
        ],
        practicalApplication: 'Technical specification comparing Portland cement vs geopolymer cement: "Geopolymer concrete is significantly greener and more durable than traditional concrete in aggressive marine environments".',
        practiceExercises: [
          {
            prompt: 'Complete the comparison: "Steel is (heavy) _______ than timber, but titanium is (strong) _______ material for aerospace truss joints. Furthermore, clay brick is (porous) _______ than dense basalt stone."',
            hint: 'Heavy -> heavier; strong -> the strongest; porous -> more porous.',
            solution: '"Steel is HEAVIER than timber, but titanium is THE STRONGEST material for aerospace truss joints. Furthermore, clay brick is MORE POROUS than dense basalt stone."'
          }
        ]
      },
      {
        id: 'ing-top-12',
        title: 'Superlative Adjectives: Megastructures and World Records in Architecture',
        rap: 'RAP 2: Identifies extreme values and world records using superlative adjectives.',
        summary: 'Superlative adjectives single out the extreme degree of a quality (highest, most expensive, deepest) among a group of three or more structures or engineering components.',
        keyPoints: [
          'Short adjectives: THE + Adj-est (tall -> THE TALLEST; deep -> THE DEEPEST; safe -> THE SAFEST).',
          'Long adjectives: THE MOST / THE LEAST + Adjective (expensive -> THE MOST EXPENSIVE; dangerous -> THE MOST DANGEROUS; resilient -> THE MOST RESILIENT).',
          'Irregular superlatives: good -> THE BEST; bad -> THE WORST; far -> THE FARTHEST/FURTHEST.',
          'World Records: Burj Khalifa is THE TALLEST building in the world (828 m); Gotthard Base Tunnel is THE LONGEST railway tunnel in the world (57 km).'
        ],
        formulas: [
          {
            name: 'Superlative Pattern',
            formula: 'The + Adj-est  OR  The most + Adj',
            explanation: 'Identifies the extreme degree within a defined group.'
          }
        ],
        practicalApplication: 'Writing promotional engineering portfolios showcasing company benchmarks and crowning achievements.',
        practiceExercises: [
          {
            prompt: 'Complete with the superlative form: "Deep foundation caissons are (expensive) _______ foundation system, but they represent (reliable) _______ engineering solution in soft lacustrine clay."',
            hint: 'Expensive and reliable are long adjectives.',
            solution: '"Deep foundation caissons are THE MOST EXPENSIVE foundation system, but they represent THE MOST RELIABLE engineering solution in soft lacustrine clay."'
          }
        ]
      },
      {
        id: 'ing-top-13',
        title: 'Future Expressions: BE GOING TO (Plans & Evidence) vs WILL (Predictions)',
        rap: 'RAP 3: Formulates project schedules and milestones with be going to, and predictions with will.',
        summary: 'In English, future plans with prior calculation or clear physical evidence are expressed using BE GOING TO, whereas spontaneous decisions, promises, and long-range predictions use WILL.',
        keyPoints: [
          'BE GOING TO for prior plans and schedules: Subject + am/is/are going to + Base Verb ("Next Monday, the contractor IS GOING TO CAST the mezzanine slab").',
          'BE GOING TO for present evidence: "Look at the deep cracks in that retaining wall! It IS GOING TO COLLAPSE!"',
          'WILL for spontaneous offers, promises, and predictions: Subject + WILL + Base Verb ("The concrete supplier promises they WILL DELIVER five mixer trucks at 7:00 AM").',
          'Time clauses in the future: After "when", "as soon as", or "before", use the Present Simple, not will: "As soon as the inspector arrives (present), we will start the test (future)."'
        ],
        formulas: [
          {
            name: 'Planned Future Formula',
            formula: 'Subject + am/is/are + going to + Base Verb',
            explanation: 'Premeditated construction plans and decisions backed by tangible evidence.'
          }
        ],
        practicalApplication: 'Drafting project timeline narratives and weekly look-ahead progress reports for international clients.',
        practiceExercises: [
          {
            prompt: 'Choose between "will" or "is going to": "According to the master schedule, the general contractor (pour) _______ the foundation next Thursday because all the reinforcement cages are already approved."',
            hint: 'Prior plan with evidence and schedule.',
            solution: '"According to the master schedule, the general contractor IS GOING TO POUR the foundation next Thursday because all the reinforcement cages are already approved."'
          }
        ]
      },
      {
        id: 'ing-top-14',
        title: 'Modal Verbs of Job Site Safety: MUST, HAVE TO, SHOULD and CAN',
        rap: 'RAP 4: Expresses mandatory obligations, prohibitions, recommendations, and physical abilities on site.',
        summary: 'Modal auxiliary verbs alter the nuance of action verbs, allowing site managers to establish absolute rules, enforce safety compliance, and offer technical advice.',
        keyPoints: [
          'MUST / HAVE TO (strict regulatory obligation): "All site personnel MUST WEAR steel-toe boots and hard hats at all times."',
          'MUST NOT (absolute safety prohibition): "Workers MUST NOT REMOVE the shoring props before the concrete reaches its design compressive strength."',
          'SHOULD / OUGHT TO (professional recommendation or best practice): "You SHOULD APPLY curing compound immediately after the bleed water evaporates."',
          'CAN / CANNOT (capability, technical capacity, or permission): "This mobile tower crane CAN HOIST up to 12 metric tons at a 25-meter radius."',
          'DON\'T HAVE TO (lack of obligation): "Visitors DON\'T HAVE TO WEAR leather welding gloves unless they enter the fabrication shop."'
        ],
        practicalApplication: 'Formulating bilingual safety checklists and health protocols in compliance with OSHA and STPS standards.',
        practiceExercises: [
          {
            prompt: 'Choose the appropriate modal verb (MUST, SHOULD, MUST NOT) for the OSHA / STPS safety regulation: "A worker (1) _______ enter a 2-meter deep unshored excavation because it is illegal and hazardous. Instead, the crew (2) _______ install hydraulic trench shields before entering."',
            hint: 'Prohibition vs mandatory requirement.',
            solution: '"A worker (1) MUST NOT enter a 2-meter deep unshored excavation because it is illegal and hazardous. Instead, the crew (2) MUST install hydraulic trench shields before entering."'
          }
        ]
      },
      {
        id: 'ing-top-15',
        title: 'Zero and First Conditionals in Structural Safety Rules and Material Warnings',
        rap: 'RAP 5: Formulates conditional sentences (if + present, will + verb) to express engineering cause-and-effect laws.',
        summary: 'Conditional sentences express the relationship between a technical condition and its inevitable scientific or operational consequence.',
        keyPoints: [
          'Zero Conditional (Universal scientific facts & physical laws): IF + Present Simple, Present Simple. "If you add excess water to fresh concrete, its compressive strength decreases automatically."',
          'First Conditional (Real, probable future occurrences based on a condition): IF + Present Simple, WILL + Base Verb. "If the temperature drops below freezing point tonight, the fresh concrete will crack."',
          'Unless = If not: "Unless the crew installs edge guardrails (if they do not install), the safety auditor will shut down the job site."'
        ],
        formulas: [
          {
            name: 'First Conditional Formula',
            formula: 'If + Present Simple, Will + Base Verb',
            explanation: 'Links an operational site condition to a future result or consequence.'
          }
        ],
        practicalApplication: 'Writing emergency response protocols and troubleshooting guides in equipment manuals.',
        practiceExercises: [
          {
            prompt: 'Complete with the First Conditional: "If the contractor (not cure) _______ the concrete slab properly for at least seven days, shrinkage cracks (appear) _______ across the surface."',
            hint: 'If + negative present simple (does not cure), will + appear.',
            solution: '"If the contractor DOES NOT CURE the concrete slab properly for at least seven days, shrinkage cracks WILL APPEAR across the surface."'
          }
        ]
      }
    ]
  }
];

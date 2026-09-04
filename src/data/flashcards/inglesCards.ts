import { Flashcard } from '../../types';

export const INGLES_FLASHCARDS: Flashcard[] = [
  // --- PARCIAL 1: PAST TENSES, NARRATIVES, PAST HABITS & SITE WORK (17 FLASHCARDS) ---
  {
    id: 'fc-ing-01',
    subjectId: 'ingles-3',
    moduleIndex: 0,
    category: 'Past Simple',
    front: 'How is the Past Simple formed for regular verbs and how are "-ed" endings pronounced?',
    back: 'Past Simple regular form: Base verb + "-ed" (or "-d" if ending in -e). Negative: did not (didn\'t) + base form. Question: Did + subject + base form?\n\nPronunciation of "-ed":\n1. /ɪd/ (extra syllable): after verbs ending in /t/ or /d/ (e.g., excavate -> excavated, decide -> decided).\n2. /t/ (unvoiced): after voiceless sounds /p, k, f, s, ʃ, tʃ/ (e.g., mix -> mixed, work -> worked).\n3. /d/ (voiced): after voiced sounds /b, g, v, z, m, n, l, r/ and vowels (e.g., pour -> poured, clean -> cleaned).',
    tip: 'Never say "didn\'t worked"; always use the base form: "didn\'t work".'
  },
  {
    id: 'fc-ing-02',
    subjectId: 'ingles-3',
    moduleIndex: 0,
    category: 'Past Continuous',
    front: 'When do we use the Past Continuous tense and what is its grammatical structure?',
    back: 'Structure: Subject + was / were + verb-ing (Present Participle).\nNegative: was not (wasn\'t) / were not (weren\'t) + verb-ing.\n\nUses:\n1. Actions in progress at a specific moment in the past: "At 10:00 AM yesterday, the technicians were surveying the ground."\n2. Two simultaneous actions in progress in the past connected by WHILE: "While the crane was lifting the steel beam, workers were securing the perimeter."',
    tip: 'Remember: I / He / She / It -> was; You / We / They -> were.'
  },
  {
    id: 'fc-ing-03',
    subjectId: 'ingles-3',
    moduleIndex: 0,
    category: 'Past Simple vs Continuous',
    front: 'How are Past Simple and Past Continuous combined in the same sentence with "when" and "while"?',
    back: 'A continuous longer action in progress (Past Continuous) is interrupted by a short completed event (Past Simple):\n• "We were pouring the foundation slab when the heavy rain started."\n• "While they were excavating the trench, they discovered an ancient drainage pipe."',
    tip: 'Rule of thumb: use Past Continuous after "while" and Past Simple after "when".'
  },
  {
    id: 'fc-ing-04',
    subjectId: 'ingles-3',
    moduleIndex: 0,
    category: 'Past Habits',
    front: 'How do we use "used to + infinitive" to describe past habits and states in construction history?',
    back: 'Structure: Subject + used to + base verb (Negative: didn\'t use to + base verb).\nMeaning: past habits, repeated actions, or states that were true in the past but are NO LONGER true today.\n\nExamples:\n• "Masons used to mix mortar by hand before portable concrete mixers were invented."\n• "Draftsmen used to draw blueprints on paper tables before CAD software became standard."',
    tip: 'Do not confuse "used to do" (past habit) with "be used to doing" (accustomed to something).'
  },
  {
    id: 'fc-ing-05',
    subjectId: 'ingles-3',
    moduleIndex: 0,
    category: 'Past Habits',
    front: 'What is the difference between "used to" and "would" for past actions?',
    back: '• "Used to": can express both past repeated ACTIONS and past STATES/situations (e.g., "There used to be a brick factory here" - state).\n• "Would": can ONLY describe past repeated ACTIONS, never past states (e.g., "Every morning the site supervisor would inspect the scaffolding" - repeated action; NOT: "He would be an architect").',
    tip: 'Use "used to" when in doubt, as it works for both states and repeated actions.'
  },
  {
    id: 'fc-ing-06',
    subjectId: 'ingles-3',
    moduleIndex: 0,
    category: 'Past Perfect',
    front: 'What is the function and formula of the Past Perfect Simple tense?',
    back: 'Formula: Subject + had + Past Participle (had + V3).\nNegative: had not (hadn\'t) + Past Participle.\n\nFunction: clarifies which of two past actions happened FIRST (the "past of the past").\n\nExample:\n"When the site manager arrived (2nd event - Past Simple), the crew had already finished the excavation (1st event - Past Perfect)."\n• Common connectors: before, after, by the time, already, as soon as.',
    tip: 'Timeline: 1st action (had done) -> 2nd action (did) -> Now (Present).'
  },
  {
    id: 'fc-ing-07',
    subjectId: 'ingles-3',
    moduleIndex: 0,
    category: 'Irregular Verbs in Construction',
    front: 'What are the Past Simple and Past Participle forms of these key technical verbs: build, draw, break, drive, lay, choose, fall, cut?',
    back: '• build -> built -> built\n• draw -> drew -> drawn\n• break -> broke -> broken\n• drive (pilotes) -> drove -> driven\n• lay (bricks) -> laid -> laid\n• choose -> chose -> chosen\n• fall -> fell -> fallen\n• cut -> cut -> cut',
    tip: 'Notice "cut" and "cast" do not change: cast -> cast -> cast (colar concreto).'
  },
  {
    id: 'fc-ing-08',
    subjectId: 'ingles-3',
    moduleIndex: 0,
    category: 'Time Expressions',
    front: 'How are the time markers "ago", "last", "yesterday", and "in + year" used in past sentences?',
    back: 'All require Past Simple:\n• "... ago" (at the end of a time period): "They completed the structural report two weeks ago."\n• "last ..." (without preposition): last month, last year, last night.\n• "yesterday": yesterday morning, yesterday afternoon.\n• "in + year / century": "The Latin American Tower was completed in 1956."',
    tip: 'Never say "before two weeks"; say "two weeks ago".'
  },
  {
    id: 'fc-ing-09',
    subjectId: 'ingles-3',
    moduleIndex: 0,
    category: 'Technical Vocabulary: Site Work',
    front: 'What do these construction site terms mean in Spanish: excavation, trench, survey, setback, leveling, benchmark?',
    back: '• Excavation = excavación\n• Trench = zanja / cepa de cimentación\n• Survey / Land surveying = levantamiento topográfico\n• Setback = restricción de alineamiento / separación a lindero\n• Leveling = nivelación\n• Benchmark = banco de nivel de referencia (BN)',
    tip: 'Benchmark is also used in business as a standard reference point for quality.'
  },
  {
    id: 'fc-ing-10',
    subjectId: 'ingles-3',
    moduleIndex: 0,
    category: 'Technical Reading',
    front: 'Translate and identify the past verbs: "The masons laid the bricks while the carpenter was assembling the formwork."',
    back: 'Translation: "Los albañiles asentaron (colocaron) los tabiques mientras el carpintero estaba armando la cimbra."\n\nVerbs identified:\n• "laid": Past Simple irregular of "to lay" (poner/asentar).\n• "was assembling": Past Continuous of "to assemble" (armar/ensamblar).',
    tip: 'Formwork = cimbra de madera o metálica para concreto.'
  },
  {
    id: 'fc-ing-11',
    subjectId: 'ingles-3',
    moduleIndex: 0,
    category: 'Wh- Questions in the Past',
    front: 'How do you ask about who, where, when, and why regarding an engineering failure in the past?',
    back: 'Word order: Question Word + did + subject + base verb?\n• "Where did the foundation settle?"\n• "When did the crack appear on the shear wall?"\n• "Why did the contractor change the rebar spacing?"\n• "Who inspected the site before the earthquake?" (Subject question: no "did").',
    tip: 'In subject questions (asking who performed the action), do not use "did": "Who built this?"'
  },
  {
    id: 'fc-ing-12',
    subjectId: 'ingles-3',
    moduleIndex: 0,
    category: 'Technical Vocabulary: PPE',
    front: 'What does "PPE" stand for and what are the names of 6 essential safety items in English?',
    back: 'PPE = Personal Protective Equipment (Equipo de Protección Personal - EPP).\n1. Hard hat (casco de seguridad)\n2. Steel-toe boots (botas con casquillo de acero)\n3. Safety glasses / goggles (lentes o gafas de protección)\n4. High-visibility reflective vest (chaleco reflejante)\n5. Leather work gloves (guantes de carnaza)\n6. Dust mask / respirator (cubrebocas para polvo / mascarilla con filtro)',
    tip: 'OSHA (Occupational Safety and Health Administration) regulates PPE in the USA.'
  },
  {
    id: 'fc-ing-13',
    subjectId: 'ingles-3',
    moduleIndex: 0,
    category: 'Pronunciation in Context',
    front: 'Which of the following verbs has the "-ed" pronounced as /ɪd/: inspected, poured, checked, designed, demolished?',
    back: '• inspected (/ɪnˈspektɪd/) and demolished (/dɪˈmɒlɪʃt/ -> wait, demolished ends in /t/!).\n• "inspected" ends in the /t/ sound, so it is pronounced with /ɪd/ (in-spec-ted).\n• "demolished" ends in /ʃ/, so it sounds like /t/.\n• "poured" ends in vowel sound, so it sounds like /d/.\n• "checked" ends in /k/, so it sounds like /t/.\n• "designed" ends in /n/, so it sounds like /d/.',
    tip: 'Only verbs ending in "T" or "D" sounds get the extra /ɪd/ syllable.'
  },
  {
    id: 'fc-ing-14',
    subjectId: 'ingles-3',
    moduleIndex: 0,
    category: 'Narrative Connectors',
    front: 'What connectors are used to establish chronological order in a technical site report?',
    back: '• To begin: Initially, First of all, At the beginning.\n• To continue: Subsequently, Afterwards, Later, Following that.\n• Simultaneous: Meanwhile, At the same time, Simultaneously.\n• Unexpected: Suddenly, Unexpectedly.\n• To conclude: Finally, Eventually, In the end, To sum up.',
    tip: 'Using professional sequence connectors makes your technical field reports coherent.'
  },
  {
    id: 'fc-ing-15',
    subjectId: 'ingles-3',
    moduleIndex: 0,
    category: 'Technical Vocabulary: Tools',
    front: 'Translate these hand tools into Spanish: spirit level, plumb bob, trowel, tape measure, sledgehammer, wheelbarrow.',
    back: '• Spirit level = nivel de burbuja o de gota\n• Plumb bob = plomada de albañil o de bronce\n• Trowel = cuchara de albañil / llana\n• Tape measure = cinta métrica o flexómetro\n• Sledgehammer = marro / mazo pesado\n• Wheelbarrow = carretilla de mano',
    tip: 'A notched trowel is used for applying ceramic tile adhesive.'
  },
  {
    id: 'fc-ing-16',
    subjectId: 'ingles-3',
    moduleIndex: 0,
    category: 'Past Tenses in Context',
    front: 'Complete with the correct past forms: "By the time the concrete mixer (arrive), the workers (prepare) the subgrade for three hours."',
    back: 'Answer: "By the time the concrete mixer ARRIVED, the workers HAD PREPARED (or HAD BEEN PREPARING) the subgrade for three hours."\n\nExplanation: the action of preparing the subgrade took place before the arrival of the mixer truck, so Past Perfect is required for the earlier action.',
    tip: '"By the time..." is almost always followed by Past Simple and coupled with Past Perfect.'
  },
  {
    id: 'fc-ing-17',
    subjectId: 'ingles-3',
    moduleIndex: 0,
    category: 'Historic Architecture',
    front: 'Translate: "The Aztecs built their temples on soft clay soil using wooden stakes as friction piles."',
    back: 'Translation: "Los aztecas construyeron sus templos sobre suelo de arcilla blanda utilizando estacas de madera como pilotes de fricción."\n\nTechnical terms:\n• soft clay soil = suelo de arcilla blanda\n• wooden stakes = estacas de madera\n• friction piles = pilotes de fricción',
    tip: 'This is an example of ancestral geotechnical engineering in the Valley of Mexico.'
  },

  // --- PARCIAL 2: CONDITIONALS, MODALS (OBLIGATION/ADVICE) & PASSIVE VOICE (17 FLASHCARDS) ---
  {
    id: 'fc-ing-18',
    subjectId: 'ingles-3',
    moduleIndex: 1,
    category: 'Zero Conditional',
    front: 'What is the structure and use of the Zero Conditional in technical and scientific statements?',
    back: 'Structure: If / When + Present Simple, Present Simple.\n\nUse: to express scientific universal truths, laws of physics, mechanical rules, and constant chemical facts.\n\nExamples:\n• "If concrete loses moisture too quickly during curing, it develops shrinkage cracks."\n• "When steel cools down, it contracts."',
    tip: 'Both clauses are in Present Simple because the outcome is guaranteed every single time.'
  },
  {
    id: 'fc-ing-19',
    subjectId: 'ingles-3',
    moduleIndex: 1,
    category: 'First Conditional',
    front: 'What is the structure and use of the First Conditional in project planning and site hazards?',
    back: 'Structure: If + Present Simple, will / won\'t (or can / must / should) + base verb.\n\nUse: real, likely, and probable future situations and their probable results in site conditions.\n\nExamples:\n• "If the soil bearing capacity is lower than 10 t/m², we will need to design an isolated footing with tie beams."\n• "If the inspector finds structural defects, the city council will stop the construction."',
    tip: 'Never use "will" in the If-clause: say "If it rains", NOT "If it will rain".'
  },
  {
    id: 'fc-ing-20',
    subjectId: 'ingles-3',
    moduleIndex: 1,
    category: 'Second Conditional',
    front: 'What is the structure and use of the Second Conditional in engineering design?',
    back: 'Structure: If + Past Simple, would / wouldn\'t (or could / might) + base verb.\n(For verb "to be", "were" is preferred for all subjects: If I were, If the beam were...).\n\nUse: hypothetical, imaginary, or unlikely situations in the present or future.\n\nExamples:\n• "If we used precast concrete panels instead of masonry, we would reduce construction time by 40%."\n• "If this project had an unlimited budget, the architect would specify titanium claddings."',
    tip: 'Expresses "what would happen if conditions were different right now".'
  },
  {
    id: 'fc-ing-21',
    subjectId: 'ingles-3',
    moduleIndex: 1,
    category: 'Conditional Comparison',
    front: 'Compare: 1) "If it rains tomorrow, we will cancel the pour." vs 2) "If it rained in the desert, we would need storm drains."',
    back: '1) First Conditional: realistic possibility tomorrow (it may actually rain).\n2) Second Conditional: hypothetical, imaginary condition contrary to current reality (it rarely rains in the desert).',
    tip: 'Zero = fact | 1st = real possibility | 2nd = hypothetical scenario.'
  },
  {
    id: 'fc-ing-22',
    subjectId: 'ingles-3',
    moduleIndex: 1,
    category: 'Modal Verbs: Obligation',
    front: 'What is the difference between "must" and "have to" regarding site regulations and safety?',
    back: '• "Must" (internal obligation / personal authority / strong formal rules): the speaker sets the rule or expresses strong necessity: "You must check the slump test before pouring."\n• "Have to" (external obligation): required by external laws, municipal codes, or contracts: "We have to obtain a building permit before breaking ground (it is the municipal law)."\nIn practice both express strong necessity, but "have to" works in all tenses (had to, will have to).',
    tip: '"Must" has no past tense form; use "had to" for past obligation: "We had to wear helmets yesterday."'
  },
  {
    id: 'fc-ing-23',
    subjectId: 'ingles-3',
    moduleIndex: 1,
    category: 'Modal Verbs: Prohibition',
    front: 'What is the difference between "mustn\'t" and "don\'t have to"?',
    back: '• "Mustn\'t" (Prohibition): it is strictly forbidden, dangerous, or illegal:\n  "You mustn\'t enter the trench without shoring." (It is prohibited / life-threatening).\n• "Don\'t have to" (Lack of obligation): it is NOT necessary, but optional if you choose:\n  "You don\'t have to work on Sunday because the inspection was approved today."',
    tip: 'Confusing "mustn\'t" with "don\'t have to" is a critical error in technical safety manuals!'
  },
  {
    id: 'fc-ing-24',
    subjectId: 'ingles-3',
    moduleIndex: 1,
    category: 'Modal Verbs: Advice',
    front: 'How are "should", "ought to", and "had better" used to provide technical advice?',
    back: '• "Should" / "Ought to" + base verb: gives professional recommendations or best practices:\n  "You should cure the concrete for at least 7 days to reach full strength."\n• "Had better" + base verb: conveys strong urgent warning with potential negative consequences:\n  "You had better brace that wall immediately, or it will collapse with the wind."',
    tip: 'The negative of "had better" is "had better not" (without "to").'
  },
  {
    id: 'fc-ing-25',
    subjectId: 'ingles-3',
    moduleIndex: 1,
    category: 'Passive Voice Concept',
    front: 'Why is the Passive Voice so widely used in scientific papers and technical engineering reports?',
    back: 'Because technical English prioritizes the OBJECT, the PROCESS, or the RESULT rather than the human person who performs the action:\n• Active: "The contractor poured the concrete at 8:00 AM."\n• Passive: "The concrete was poured at 8:00 AM." (The concrete and time are the focus; the contractor is irrelevant or obvious).',
    tip: 'It gives writing an objective, professional, and impersonal tone.'
  },
  {
    id: 'fc-ing-26',
    subjectId: 'ingles-3',
    moduleIndex: 1,
    category: 'Passive Voice Formation',
    front: 'What is the general formula to convert any active sentence into Passive Voice?',
    back: 'Formula: Object of active sentence + verb "TO BE" (in the same tense as the active verb) + PAST PARTICIPLE (V3) of the main verb + (optional: by + agent).\n\n• Present Simple Active: "Technicians test the rebar." -> Passive: "The rebar IS TESTED by technicians."\n• Past Simple Active: "The engineer designed the beam." -> Passive: "The beam WAS DESIGNED by the engineer."',
    formula: 'Subject + BE (am/is/are/was/were/been) + Past Participle'
  },
  {
    id: 'fc-ing-27',
    subjectId: 'ingles-3',
    moduleIndex: 1,
    category: 'Present Passive in Engineering',
    front: 'Convert to Present Simple Passive: "Workers mix cement, sand, gravel, and water to produce concrete."',
    back: 'Passive: "Cement, sand, gravel, and water ARE MIXED to produce concrete."\n\nExplanation: the subject becomes plural ("Cement, sand..."), so we use "are" + past participle "mixed".',
    tip: 'Notice that "by workers" is omitted because it is obvious and redundant.'
  },
  {
    id: 'fc-ing-28',
    subjectId: 'ingles-3',
    moduleIndex: 1,
    category: 'Past Passive in Construction',
    front: 'Convert to Past Simple Passive: "The municipality approved the building manifest yesterday."',
    back: 'Passive: "The building manifest WAS APPROVED by the municipality yesterday."\n\nExplanation: singular object ("the building manifest") + "was" + past participle "approved".',
    tip: 'Use "by" only when the agent provides crucial legal or contractual information.'
  },
  {
    id: 'fc-ing-29',
    subjectId: 'ingles-3',
    moduleIndex: 1,
    category: 'Future & Modal Passive',
    front: 'How is the Passive Voice formed with future "will" and modal verbs (can, must, should)?',
    back: 'Formula: Modal / will + BE + Past Participle.\n\nExamples:\n• Future: "The foundation slab will be cast tomorrow morning."\n• Modal obligation: "Safety harnesses must be worn on suspended scaffolds."\n• Modal ability: "Thermal bridges can be eliminated with exterior insulation."\n• Modal advice: "The formwork should be removed after 14 days."',
    formula: 'Modal + BE + Past Participle'
  },
  {
    id: 'fc-ing-30',
    subjectId: 'ingles-3',
    moduleIndex: 1,
    category: 'Technical Specifications',
    front: 'Translate this technical specification: "All structural joints must be inspected by a certified welding inspector before casting."',
    back: 'Translation: "Todas las uniones estructurales deben ser inspeccionadas por un inspector certificado de soldadura antes del colado."\n\nKey terms:\n• structural joints = uniones o juntas estructurales\n• welding = soldadura\n• casting / pouring = colado de concreto',
    tip: 'Notice the modal passive: "must be inspected".'
  },
  {
    id: 'fc-ing-31',
    subjectId: 'ingles-3',
    moduleIndex: 1,
    category: 'Technical Vocabulary: Materials',
    front: 'Translate into Spanish: rebar, timber, mortar, gravel, masonry, formwork.',
    back: '• Rebar (reinforcing bar) = varilla corrugada de refuerzo\n• Timber / Lumber = madera de construcción\n• Mortar = mortero de junteo\n• Gravel = grava triturada / agregado grueso\n• Masonry = mampostería (de tabique, bloque o piedra)\n• Formwork / Shuttering = cimbra',
    tip: 'Rebar is a portmanteau of "reinforcing" + "bar".'
  },
  {
    id: 'fc-ing-32',
    subjectId: 'ingles-3',
    moduleIndex: 1,
    category: 'Active to Passive Practice',
    front: 'Turn into Passive: "The earthquake damaged three load-bearing walls in the old warehouse."',
    back: 'Passive: "Three load-bearing walls WERE DAMAGED by the earthquake in the old warehouse."\n\n• load-bearing wall = muro de carga\n• warehouse = bodega / almacén',
    tip: 'Load-bearing walls support gravity loads from slabs and roofs.'
  },
  {
    id: 'fc-ing-33',
    subjectId: 'ingles-3',
    moduleIndex: 1,
    category: 'Third Conditional',
    front: 'What is the structure of the Third Conditional and how does it describe past engineering regrets or errors?',
    back: 'Structure: If + had + past participle, would have + past participle.\n\nMeaning: past hypothetical event that DID NOT happen, and its unreal past consequence (it expresses regret, relief, or forensic investigation).\n\nExample:\n"If the contractor had added plasticizers, the concrete wouldn\'t have honeycombed."\n(Reality: the contractor didn\'t add plasticizers, so the concrete honeycombed).',
    tip: 'Honeycombing = ratoneras u oquedades en el concreto.'
  },
  {
    id: 'fc-ing-34',
    subjectId: 'ingles-3',
    moduleIndex: 1,
    category: 'Technical Phrasal Verbs',
    front: 'What do these construction phrasal verbs mean: tear down, set up, break ground, lay out, put up?',
    back: '• Tear down / Knock down = demoler / derribar una estructura\n• Set up = instalar / montar (un andamio, estación total, campamento)\n• Break ground = dar el banderazo de inicio de obra / iniciar excavaciones\n• Lay out = trazar y replantear ejes en el terreno\n• Put up = levantar / erigir (un muro, una cerca, una estructura)',
    tip: 'The groundbreaking ceremony is the official event opening a new project.'
  },

  // --- PARCIAL 3: PRESENT PERFECT, COMPARATIVES, FUTURES & GREEN ARCHITECTURE (16 FLASHCARDS) ---
  {
    id: 'fc-ing-35',
    subjectId: 'ingles-3',
    moduleIndex: 2,
    category: 'Present Perfect Simple',
    front: 'What is the formula and main use of the Present Perfect Simple tense?',
    back: 'Formula: Subject + have / has + Past Participle (V3).\nNegative: haven\'t / hasn\'t + Past Participle.\n\nUses:\n1. Actions that started in the past and continue into the present: "She has worked at the construction company for five years."\n2. Completed past experiences where the exact time is NOT stated or irrelevant: "The contractor has built ten bridges."\n3. Recent actions with visible results in the present: "The team has just finished testing the slump."',
    tip: 'He / She / It uses "has"; I / You / We / They uses "have".'
  },
  {
    id: 'fc-ing-36',
    subjectId: 'ingles-3',
    moduleIndex: 2,
    category: 'Present Perfect vs Simple Past',
    front: 'What is the fundamental difference between Present Perfect Simple and Past Simple?',
    back: '• Past Simple: used with DEFINITE FINISHED time words in the past (yesterday, last year, in 2018, two days ago):\n  "We visited the construction site yesterday." (Finished time - Past Simple).\n• Present Perfect: used with UNFINISHED or UNSPECIFIED time (never, ever, already, yet, so far, this week, since 2020):\n  "We have visited the construction site three times this week." (The week is not finished yet).',
    tip: 'Never use Present Perfect with specific past dates: NOT "I have finished yesterday", say "I finished yesterday".'
  },
  {
    id: 'fc-ing-37',
    subjectId: 'ingles-3',
    moduleIndex: 2,
    category: 'For vs Since',
    front: 'How are "for" and "since" used with the Present Perfect tense?',
    back: '• FOR + duration of time (a period): for 3 hours, for 5 days, for six months, for a decade.\n  "They have cured the concrete slab for seven days."\n• SINCE + specific starting point in the past: since Monday, since 8:00 AM, since 2019, since the inspection ended.\n  "The crane has been on site since last Tuesday."',
    formula: 'FOR = duration (how long) | SINCE = starting point (when it began)'
  },
  {
    id: 'fc-ing-38',
    subjectId: 'ingles-3',
    moduleIndex: 2,
    category: 'Adverbs with Present Perfect',
    front: 'Where are "already", "yet", and "just" placed in Present Perfect sentences?',
    back: '• ALREADY (affirmative: earlier than expected): between have/has and past participle:\n  "The electricians have ALREADY installed the conduits."\n• JUST (affirmative: a very short time ago): between have/has and past participle:\n  "The driver has JUST delivered the rebar shipment."\n• YET (negative and questions: up to now): placed at the VERY END of the sentence:\n  "Have you submitted the architectural blueprints YET?" / "We haven\'t finished the plumbing YET."',
    tip: '"Yet" in questions asks "already?", in negatives means "not until now".'
  },
  {
    id: 'fc-ing-39',
    subjectId: 'ingles-3',
    moduleIndex: 2,
    category: 'Comparatives of Adjectives',
    front: 'What are the rules to form the Comparative degree of adjectives in English?',
    back: '• One-syllable adjectives: add "-er + than" (hard -> harder than, safe -> safer than, strong -> stronger than).\n• Two-syllable adjectives ending in "-y": change -y to "-ier + than" (heavy -> heavier than).\n• Adjectives with two or more syllables: use "more + adjective + than" (durable -> more durable than, flexible -> more flexible than).\n• Irregular comparatives:\n  good -> better than | bad -> worse than | far -> farther / further than',
    tip: 'Example: "Steel is stronger than unreinforced masonry."'
  },
  {
    id: 'fc-ing-40',
    subjectId: 'ingles-3',
    moduleIndex: 2,
    category: 'Superlatives of Adjectives',
    front: 'How are Superlatives formed to rank technical materials and structures?',
    back: '• Short adjectives: "the + adjective + -est" (the hardest, the cheapest, the highest).\n• Long adjectives: "the most + adjective" (the most sustainable, the most efficient).\n• Irregular superlatives:\n  good -> the best | bad -> the worst | far -> the furthest\n\nExample:\n"Graphene is the strongest material ever tested in civil engineering."',
    tip: 'Always include "the" before superlative adjectives.'
  },
  {
    id: 'fc-ing-41',
    subjectId: 'ingles-3',
    moduleIndex: 2,
    category: 'Equality & Modifiers',
    front: 'How do you express equal comparison with "as... as" and emphasize differences with "much / slightly"?',
    back: '• Equality: "as + adjective + as" (tan... como):\n  "Lightweight block is not as heavy as solid brick."\n• Emphasizing big differences: use "much" or "far" before comparative:\n  "Prestressed concrete is MUCH more resistant than simple concrete."\n• Small differences: use "slightly" or "a bit":\n  "The second sample is SLIGHTLY denser than the first."',
    tip: 'Never say "more better" or "more heavier"; use "much better" or "much heavier".'
  },
  {
    id: 'fc-ing-42',
    subjectId: 'ingles-3',
    moduleIndex: 2,
    category: 'Future Forms: Will vs Going To',
    front: 'What is the functional difference between "will" and "be going to" in project scheduling?',
    back: '• "Be going to" (Prior plans, intentions, and evidence-based predictions):\n  "We are going to pour the slab on Friday (it is already scheduled in the calendar)."\n  "Look at that leaning column! It is going to collapse (visible evidence)."\n• "Will" (Instant spontaneous decisions, promises, and opinions/general predictions):\n  "The phone is ringing on site; I will answer it (instant decision)."\n  "I think the inspector will approve our request."',
    tip: 'Use "be going to" for planned construction activities and "will" for predictions.'
  },
  {
    id: 'fc-ing-43',
    subjectId: 'ingles-3',
    moduleIndex: 2,
    category: 'Future with Present Tenses',
    front: 'When do we use Present Continuous and Present Simple to talk about the future?',
    back: '• Present Continuous for future: fixed, confirmed personal or team arrangements with date/time:\n  "The chief engineer is visiting the site tomorrow at 9:00 AM."\n• Present Simple for future: official timetables, public transportation, and fixed calendar schedules:\n  "The concrete supplier opens at 7:00 AM tomorrow." / "The contract expires on December 31st."',
    tip: 'Both present tenses communicate high certainty about future events.'
  },
  {
    id: 'fc-ing-44',
    subjectId: 'ingles-3',
    moduleIndex: 2,
    category: 'Structural Elements Vocabulary',
    front: 'Translate these essential structural elements into Spanish: beam, column, footing, slab, retaining wall, truss.',
    back: '• Beam = viga / trabe\n• Column = columna / pilar\n• Footing = zapata de cimentación\n• Slab = losa de entrepiso o azotea\n• Retaining wall = muro de contención\n• Truss = armadura / celosía estructural para techumbre',
    tip: 'A cantilever beam is a viga en voladizo.'
  },
  {
    id: 'fc-ing-45',
    subjectId: 'ingles-3',
    moduleIndex: 2,
    category: 'Heavy Machinery Vocabulary',
    front: 'Translate these heavy construction vehicles into Spanish: excavator, backhoe, bulldozer, crane, dump truck, transit mixer.',
    back: '• Excavator = retroexcavadora de oruga\n• Backhoe (loader) = retroexcavadora mixta ("mano de chango")\n• Bulldozer = tractor topador de oruga con cuchilla\n• Crane = grúa torre o grúa móvil\n• Dump truck = camión de volteo\n• Transit mixer / Cement mixer truck = camión revolvedora (trompo de concreto)',
    tip: 'Dump trucks are measured by their capacity in cubic meters (e.g., 7 m³ or 14 m³).'
  },
  {
    id: 'fc-ing-46',
    subjectId: 'ingles-3',
    moduleIndex: 2,
    category: 'Green Architecture Vocabulary',
    front: 'Translate into Spanish: thermal insulation, carbon footprint, rainwater harvesting, solar panel, green roof, double glazing.',
    back: '• Thermal insulation = aislamiento térmico\n• Carbon footprint = huella de carbono\n• Rainwater harvesting = captación y aprovechamiento de agua pluvial\n• Solar panel (photovoltaic) = panel solar fotovoltaico\n• Green roof = azotea verde / techo naturado\n• Double glazing = doble acristalamiento (vidrio insulado Duo-Vent)',
    tip: 'LEED rating uses these terms extensively in its credit checklist.'
  },
  {
    id: 'fc-ing-47',
    subjectId: 'ingles-3',
    moduleIndex: 2,
    category: 'Technical Comparison Practice',
    front: 'Translate: "Cross-laminated timber (CLT) is more environmentally friendly than steel because it stores carbon dioxide."',
    back: 'Translation: "La madera contralaminada (CLT) es más amigable con el medio ambiente que el acero porque almacena dióxido de carbono."\n\nGrammar note:\n• "more environmentally friendly than" = comparative of a long adjective phrase.',
    tip: 'CLT is increasingly used for multi-story timber buildings worldwide.'
  },
  {
    id: 'fc-ing-48',
    subjectId: 'ingles-3',
    moduleIndex: 2,
    category: 'Reading Comprehension',
    front: 'Read and answer: "Passive solar design optimizes building orientation so that sunlight warms interiors in winter and overhangs block summer heat." What does an overhang do?',
    back: 'Answer in English: An overhang (alero o voladizo) blocks direct solar radiation during hot summer months when the sun is high in the sky, preventing the building from overheating.\nIn Spanish: El alero bloquea el calor excesivo del sol de verano.',
    tip: 'Overhang is the English term for alero o saledizo horizontal.'
  },
  {
    id: 'fc-ing-49',
    subjectId: 'ingles-3',
    moduleIndex: 2,
    category: 'Technical Email Writing',
    front: 'What are formal email expressions to request structural data and attach documents in English?',
    back: '• Opening: "Dear Engineer Davis," / "Dear Site Manager," (never "Hello friend").\n• Stating purpose: "I am writing to inquire about the soil mechanics report for Sector 4."\n• Attaching files: "Please find attached the revised structural drawings in PDF format."\n• Requesting action: "Could you please confirm the delivery date of the precast beams?"\n• Closing: "Sincerely," / "Best regards," followed by your name and title ("Building Technician, IPN CECyT 11").',
    tip: 'Never write "I send you attached"; use "Please find attached...".'
  },
  {
    id: 'fc-ing-50',
    subjectId: 'ingles-3',
    moduleIndex: 2,
    category: 'Bilingual Technical Glossary',
    front: 'Translate into English: "El concreto armado es un material compuesto donde el concreto resiste la compresión y el acero resiste la tensión."',
    back: 'Translation: "Reinforced concrete is a composite material where concrete resists compression and steel resists tension."\n\nKey technical pairs:\n• concreto armado = reinforced concrete\n• esfuerzo de compresión = compressive stress / compression\n• esfuerzo de tensión/tracción = tensile stress / tension\n• material compuesto = composite material',
    tip: 'This sentence encapsulates the core mechanical principle of structural engineering in both languages.'
  }
];

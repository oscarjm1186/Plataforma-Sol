export type AreaType = 'basica' | 'tecnologica' | 'humanistica';

export interface Subject {
  id: string;
  name: string;
  shortName: string;
  code: string;
  area: AreaType;
  areaLabel: string;
  semester: number;
  icon: string;
  color: string; // Tailwind color theme identifier or hex
  accentHex: string;
  description: string;
  competenceGeneral: string;
  competence?: string;
  hoursPerWeek?: number;
  driveFolderUrl?: string; // Father's Google Drive folder link
  youtubePlaylistUrl?: string; // Father's YouTube playlist link
}

export interface PracticeExercise {
  problem?: string;
  prompt?: string;
  hint?: string;
  solution: string;
}

export interface StudyTopic {
  id: string;
  title: string;
  rap?: string; // Resultado de Aprendizaje
  summary?: string;
  theory?: string;
  keyPoints: string[];
  formulas?: string[] | { name: string; formula: string; explanation: string }[];
  practicalApplication?: string;
  constructionApplication?: string;
  exercises?: PracticeExercise[];
  practiceExercises?: { prompt: string; hint?: string; solution: string }[];
}

export type Topic = StudyTopic;

export interface StudyModule {
  id: string;
  title: string;
  parcialNumber: 1 | 2 | 3;
  competence: string;
  topics: StudyTopic[];
}

export interface BookReference {
  id: string;
  title: string;
  authors?: string;
  author?: string;
  editorial?: string;
  publisher?: string;
  year: string;
  type: string;
  units?: string;
  relevantUnits?: string;
  description?: string;
  driveUrl?: string;
  previewNote?: string;
}

export interface Flashcard {
  id: string;
  subjectId: string;
  moduleIndex: number; // 0, 1, 2...
  category: string;
  front: string;
  back: string;
  tip?: string;
  formula?: string;
  isImportant?: boolean;
}

export interface VideoLesson {
  id: string;
  subjectId: string;
  title: string;
  parcialNumber: 1 | 2 | 3;
  duration: string;
  youtubeId: string;
  youtubeUrl: string;
  channel: string;
  description: string;
  isCustomFatherVideo?: boolean;
}

export type QuestionType = 'multiple_choice' | 'problem_development' | 'true_false' | 'matching';

export interface ExamQuestion {
  id: number;
  type: QuestionType;
  question: string;
  options?: string[]; // For multiple choice / true-false
  correctOptionIndex?: number;
  correctAnswerText?: string;
  developmentSteps?: {
    step: string;
    description: string;
    formula?: string;
  }[];
  explanation: string;
  moduleIndex: number;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
}

export interface PartialExam {
  id: string;
  subjectId: string;
  parcialNumber: 1 | 2 | 3;
  title: string;
  description: string;
  timeLimitMinutes: number;
  questions: ExamQuestion[];
}

export interface ExamAttemptRecord {
  id: string;
  examId?: string;
  subjectId: string;
  parcialNumber: number;
  date: string;
  score: number; // 0 - 10
  percentage: number;
  correctCount?: number;
  correctAnswers?: number;
  totalCount?: number;
  totalQuestions?: number;
  timeSpentSeconds?: number;
  passed?: boolean;
  answers?: { [questionId: number]: number | string };
}


export interface UserCustomConfig {
  driveLinks: { [subjectId: string]: string };
  youtubePlaylists: { [subjectId: string]: string };
  customVideos: VideoLesson[];
  completedTopics: string[]; // topic IDs
  flashcardsMastered: string[]; // flashcard IDs
  customFlashcards: Flashcard[];
}

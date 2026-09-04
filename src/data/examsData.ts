import { PartialExam } from '../types';
import { generate100Questions } from './examQuestionsBank';
import { SUBJECTS } from './subjectsData';

// Cache for generated exams to ensure fast lookups and consistency
const examsCache: { [key: string]: PartialExam } = {};

export function getExam(subjectId: string, parcialNumber: 1 | 2 | 3): PartialExam {
  const cacheKey = `${subjectId}-parcial-${parcialNumber}`;
  if (examsCache[cacheKey]) {
    return examsCache[cacheKey];
  }

  const subject = SUBJECTS.find(s => s.id === subjectId) || SUBJECTS[0];
  const parcialLabels = ['Primer Examen Parcial', 'Segundo Examen Parcial', 'Tercer Examen Parcial (Departamental)'];
  const title = `${parcialLabels[parcialNumber - 1]} - ${subject.name}`;
  
  const exam: PartialExam = {
    id: cacheKey,
    subjectId,
    parcialNumber,
    title,
    description: `Simulador oficial de 100 reactivos correspondiente al ${parcialLabels[parcialNumber - 1]} de ${subject.name}. Al menos 80% opción múltiple con reactivos de desarrollo analítico para Geometría y Física.`,
    timeLimitMinutes: 120, // 2 hours like a formal IPN exam
    questions: generate100Questions(subjectId, parcialNumber)
  };

  examsCache[cacheKey] = exam;
  return exam;
}

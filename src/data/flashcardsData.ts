import { Flashcard } from '../types';
import { GEOMETRIA_FLASHCARDS } from './flashcards/geometriaCards';
import { FISICA_FLASHCARDS } from './flashcards/fisicaCards';
import { QUIMICA_FLASHCARDS } from './flashcards/quimicaCards';
import { DIBUJO_FLASHCARDS } from './flashcards/dibujoCards';
import { OBRA_NEGRA_FLASHCARDS } from './flashcards/obraNegraCards';
import { LEGISLACION_FLASHCARDS } from './flashcards/legislacionCards';
import { PLANIMETRIA_FLASHCARDS } from './flashcards/planimetriaCards';
import { MATERIALES_FLASHCARDS } from './flashcards/materialesCards';
import { ENTORNO_FLASHCARDS } from './flashcards/entornoCards';
import { COMUNICACION_FLASHCARDS } from './flashcards/comunicacionCards';
import { INGLES_FLASHCARDS } from './flashcards/inglesCards';

export const FLASHCARDS_BY_SUBJECT: Record<string, Flashcard[]> = {
  'geometria-analitica': GEOMETRIA_FLASHCARDS,
  'fisica-1': FISICA_FLASHCARDS,
  'quimica-1': QUIMICA_FLASHCARDS,
  'dibujo-tecnico-1': DIBUJO_FLASHCARDS,
  'obra-negra': OBRA_NEGRA_FLASHCARDS,
  'legislacion-construccion': LEGISLACION_FLASHCARDS,
  'planimetria-aplicada': PLANIMETRIA_FLASHCARDS,
  'materiales-tecnologias': MATERIALES_FLASHCARDS,
  'entorno-socioeconomico': ENTORNO_FLASHCARDS,
  'comunicacion-cientifica': COMUNICACION_FLASHCARDS,
  'ingles-3': INGLES_FLASHCARDS,
};

export const FLASHCARDS_DATA: Flashcard[] = [
  ...GEOMETRIA_FLASHCARDS,
  ...FISICA_FLASHCARDS,
  ...QUIMICA_FLASHCARDS,
  ...DIBUJO_FLASHCARDS,
  ...OBRA_NEGRA_FLASHCARDS,
  ...LEGISLACION_FLASHCARDS,
  ...PLANIMETRIA_FLASHCARDS,
  ...MATERIALES_FLASHCARDS,
  ...ENTORNO_FLASHCARDS,
  ...COMUNICACION_FLASHCARDS,
  ...INGLES_FLASHCARDS,
];

export {
  GEOMETRIA_FLASHCARDS,
  FISICA_FLASHCARDS,
  QUIMICA_FLASHCARDS,
  DIBUJO_FLASHCARDS,
  OBRA_NEGRA_FLASHCARDS,
  LEGISLACION_FLASHCARDS,
  PLANIMETRIA_FLASHCARDS,
  MATERIALES_FLASHCARDS,
  ENTORNO_FLASHCARDS,
  COMUNICACION_FLASHCARDS,
  INGLES_FLASHCARDS,
};

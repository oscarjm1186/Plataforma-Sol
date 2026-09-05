import { StudyModule } from '../types';
import { GEOMETRIA_GUIDES } from './guides/geometriaGuides';
import { FISICA_GUIDES } from './guides/fisicaGuides';
import { QUIMICA_GUIDES } from './guides/quimicaGuides';
import { DIBUJO_GUIDES } from './guides/dibujoGuides';
import { OBRA_NEGRA_GUIDES } from './guides/obraNegraGuides';
import { LEGISLACION_GUIDES } from './guides/legislacionGuides';
import { PLANIMETRIA_GUIDES } from './guides/planimetriaGuides';
import { MATERIALES_GUIDES } from './guides/materialesGuides';
import { ENTORNO_GUIDES } from './guides/entornoGuides';
import { COMUNICACION_GUIDES } from './guides/comunicacionGuides';
import { INGLES_GUIDES } from './guides/inglesGuides';

export const GUIDES_DATA: { [subjectId: string]: StudyModule[] } = {
  'geometria-analitica': GEOMETRIA_GUIDES,
  'fisica-1': FISICA_GUIDES,
  'quimica-1': QUIMICA_GUIDES,
  'dibujo-tecnico-1': DIBUJO_GUIDES,
  'obra-negra': OBRA_NEGRA_GUIDES,
  'normas-tramitaciones': LEGISLACION_GUIDES,
  'planimetria-aplicada': PLANIMETRIA_GUIDES,
  'materiales-sustentables': MATERIALES_GUIDES,
  'entorno-socioeconomico': ENTORNO_GUIDES,
  'comunicacion-cientifica': COMUNICACION_GUIDES,
  'ingles-3': INGLES_GUIDES
};

export const ALL_GUIDES_DATA: { [subjectId: string]: StudyModule[] } = {
  ...GUIDES_DATA
};

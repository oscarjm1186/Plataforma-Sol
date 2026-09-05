import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  Circle, 
  Award, 
  Target, 
  Cpu, 
  ChevronRight, 
  Check, 
  Sparkles, 
  HelpCircle,
  Calculator,
  HardHat,
  BookmarkCheck,
  Eye,
  EyeOff
} from 'lucide-react';
import { StudyModule, Topic, Subject } from '../types';

interface StudyGuideTabProps {
  subject: Subject;
  modules: StudyModule[];
  completedTopics: string[];
  onToggleTopic: (topicId: string) => void;
}

export const StudyGuideTab: React.FC<StudyGuideTabProps> = ({
  subject,
  modules,
  completedTopics,
  onToggleTopic
}) => {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const [revealedSolutions, setRevealedSolutions] = useState<{ [key: string]: boolean }>({});

  const currentModule = modules[activeModuleIndex] || modules[0];
  const currentTopic = currentModule?.topics[activeTopicIndex] || currentModule?.topics[0];

  const toggleSolution = (key: string) => {
    setRevealedSolutions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!currentModule || !currentTopic) {
    return (
      <div className="p-8 text-center text-slate-400 bg-[#070b22]/90 rounded-3xl border border-indigo-950">
        No hay guía de estudio disponible para esta materia aún.
      </div>
    );
  }

  const isTopicDone = completedTopics.includes(currentTopic.id);
  const theoryContent = currentTopic.theory || currentTopic.summary;
  const practicalApp = currentTopic.constructionApplication || currentTopic.practicalApplication;
  const exercisesList = (currentTopic.exercises && currentTopic.exercises.length > 0)
    ? currentTopic.exercises
    : (currentTopic.practiceExercises && currentTopic.practiceExercises.length > 0)
    ? currentTopic.practiceExercises.map(pe => ({
        problem: pe.prompt,
        hint: pe.hint,
        solution: pe.solution
      }))
    : [];

  return (
    <div className="space-y-6">
      {/* Module Selector Pills */}
      <div className="bg-[#070b22]/90 p-3 rounded-2xl border border-indigo-950/90 shadow-xl shadow-[#020512]/50 flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono font-bold text-cyan-400 px-2 flex items-center gap-1.5">
          <Target className="w-3.5 h-3.5 text-cyan-400" />
          <span>Parciales:</span>
        </span>
        {modules.map((mod, idx) => {
          const modCompletedCount = mod.topics.filter(t => completedTopics.includes(t.id)).length;
          const isSelected = idx === activeModuleIndex;

          return (
            <button
              key={mod.id}
              onClick={() => {
                setActiveModuleIndex(idx);
                setActiveTopicIndex(0);
              }}
              className={`flex items-center gap-2 py-2 px-4 rounded-xl text-xs font-bold transition cursor-pointer font-mono ${
                isSelected
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/30 font-extrabold'
                  : 'bg-[#0b102b] hover:bg-[#121a42] text-slate-300 border border-indigo-950'
              }`}
            >
              <span>{mod.title}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isSelected ? 'bg-slate-950/20 text-slate-950 font-bold' : 'bg-[#030614] text-cyan-300 border border-indigo-950'
              }`}>
                {modCompletedCount}/{mod.topics.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Study Area: Left Sidebar (Topics list) & Right Area (Rich Content) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Topic Navigator Space Box */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-[#070b22]/90 rounded-3xl border border-indigo-950/90 p-5 shadow-xl shadow-[#020512]/60 backdrop-blur-md">
            <div className="border-b border-indigo-950/80 pb-3 mb-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                {currentModule.title}
              </span>
              <h4 className="text-xs font-medium text-slate-400 mt-1">
                {currentModule.competence}
              </h4>
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                Temario del Parcial ({currentModule.topics.length} temas)
              </span>
              {currentModule.topics.map((top, tIdx) => {
                const isSelected = tIdx === activeTopicIndex;
                const isDone = completedTopics.includes(top.id);

                return (
                  <div
                    key={top.id}
                    onClick={() => setActiveTopicIndex(tIdx)}
                    className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition text-xs font-medium ${
                      isSelected
                        ? 'bg-cyan-950/50 text-cyan-300 border border-cyan-500/40 font-bold shadow-sm shadow-cyan-500/10'
                        : 'hover:bg-[#0c1236] text-slate-300 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 flex-1 pr-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleTopic(top.id);
                        }}
                        title={isDone ? 'Marcar como pendiente' : 'Marcar como estudiado'}
                        className="text-slate-500 hover:text-cyan-400 transition cursor-pointer"
                      >
                        {isDone ? (
                          <CheckCircle className="w-4 h-4 text-cyan-400 fill-cyan-950" />
                        ) : (
                          <Circle className="w-4 h-4 text-slate-600" />
                        )}
                      </button>
                      <span className="line-clamp-1">{top.title}</span>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 text-slate-600 ${isSelected ? 'text-cyan-400' : ''}`} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tips for Sol */}
          <div className="bg-[#070b22]/90 border border-cyan-500/30 rounded-3xl p-5 text-xs text-cyan-200/90 leading-relaxed shadow-xl shadow-[#020512]/60">
            <div className="flex items-center gap-2 font-bold mb-1.5 text-cyan-300 font-mono">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Recomendaciones de Estudio</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Revisa los conceptos clave y practica resolver los ejercicios en tu libreta antes de desplegar la solución oficial. Marca cada tema dominado para registrar tu avance académico.
            </p>
          </div>
        </div>

        {/* Right Content Reader Space Box */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-[#070b22]/90 rounded-3xl border border-indigo-950/90 p-6 md:p-8 shadow-2xl shadow-[#020512]/60 backdrop-blur-md">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-950/80 pb-4 mb-5">
              <div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-950/50 text-cyan-300 border border-cyan-500/30">
                  Tema {activeTopicIndex + 1} de {currentModule.topics.length}
                </span>
                <h2 className="text-xl font-heading font-extrabold text-white mt-2.5">
                  {currentTopic.title}
                </h2>
              </div>

              <button
                onClick={() => onToggleTopic(currentTopic.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer font-mono ${
                  isTopicDone
                    ? 'bg-cyan-950/50 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-900/40'
                    : 'bg-[#0b102b] text-slate-200 hover:bg-cyan-500 hover:text-slate-950 border border-indigo-950'
                }`}
              >
                {isTopicDone ? (
                  <>
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span>¡Tema Completado!</span>
                  </>
                ) : (
                  <>
                    <BookmarkCheck className="w-4 h-4 text-cyan-400" />
                    <span>Marcar como Estudiado</span>
                  </>
                )}
              </button>
            </div>

            {/* RAP (Resultado de Aprendizaje Propuesto) */}
            {currentTopic.rap && (
              <div className="mb-5 p-3 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex items-start gap-2.5">
                <Target className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-cyan-200 font-mono leading-relaxed">
                  {currentTopic.rap}
                </span>
              </div>
            )}

            {/* Theory Body */}
            {theoryContent && (
              <div className="prose max-w-none text-slate-300 text-sm leading-relaxed space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  Fundamentación Teórica & Conceptos
                </h4>
                <div className="whitespace-pre-line bg-[#030614] p-5 rounded-2xl border border-indigo-950 font-sans text-slate-200 leading-relaxed shadow-inner">
                  {theoryContent}
                </div>
              </div>
            )}

            {/* Key Points Bullet list */}
            {currentTopic.keyPoints && currentTopic.keyPoints.length > 0 && (
              <div className="mt-6 pt-5 border-t border-indigo-950/80">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Puntos Clave y Conceptos Imprescindibles</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {currentTopic.keyPoints.map((point, pIdx) => (
                    <div 
                      key={pIdx}
                      className="bg-[#040718] border border-indigo-950/90 rounded-xl p-3 text-xs text-slate-200 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0 shadow-sm shadow-cyan-400" />
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Formulas Box */}
            {currentTopic.formulas && currentTopic.formulas.length > 0 && (
              <div className="mt-6 pt-5 border-t border-indigo-950/80">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" />
                  <span>Fórmulas Matemáticas y Expresiones Analíticas</span>
                </h4>
                <div className="space-y-3">
                  {currentTopic.formulas.map((form, fIdx) => {
                    const isObject = typeof form === 'object' && form !== null;
                    const formName = isObject ? (form as { name?: string; formula?: string; explanation?: string }).name : null;
                    const formulaStr = isObject ? (form as { name?: string; formula?: string; explanation?: string }).formula : String(form);
                    const explanation = isObject ? (form as { name?: string; formula?: string; explanation?: string }).explanation : null;

                    return (
                      <div 
                        key={fIdx}
                        className="bg-[#030614] p-4 rounded-xl border border-indigo-950 shadow-inner space-y-2"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          {formName ? (
                            <span className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                              {formName}
                            </span>
                          ) : (
                            <span className="text-[10px] text-cyan-400 uppercase font-mono">Fórmula #{fIdx + 1}</span>
                          )}
                          <span className="text-[10px] bg-amber-950/50 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30 uppercase font-mono">
                            Expresión Analítica
                          </span>
                        </div>
                        <div className="bg-[#070b22] px-3.5 py-2.5 rounded-lg border border-amber-500/20 text-amber-300 font-mono text-sm tracking-wide overflow-x-auto">
                          {formulaStr}
                        </div>
                        {explanation && (
                          <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                            {explanation}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Construction Practical Application */}
            {practicalApp && (
              <div className="mt-6 pt-5 border-t border-indigo-950/80">
                <div className="bg-amber-950/25 border border-amber-500/30 rounded-2xl p-5 shadow-lg shadow-[#020512]/40">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 mb-1.5 flex items-center gap-2">
                    <HardHat className="w-4 h-4 text-amber-400" />
                    <span>Aplicación Práctica en Obra / Estructuras</span>
                  </h4>
                  <p className="text-xs text-amber-200 leading-relaxed">
                    {practicalApp}
                  </p>
                </div>
              </div>
            )}

            {/* Practice Exercises with Step-by-Step Toggle */}
            {exercisesList.length > 0 && (
              <div className="mt-6 pt-5 border-t border-indigo-950/80">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Ejercicios Prácticos con Procedimiento Resuelto</span>
                </h4>
                <div className="space-y-4">
                  {exercisesList.map((ex, eIdx) => {
                    const solKey = `${currentTopic.id}-ex-${eIdx}`;
                    const isRevealed = revealedSolutions[solKey];

                    return (
                      <div key={eIdx} className="bg-[#030614] border border-indigo-950 rounded-2xl p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-2.5">
                            <span className="text-xs font-mono font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 px-2.5 py-0.5 rounded-lg shrink-0">
                              #{eIdx + 1}
                            </span>
                            <p className="text-xs font-medium text-slate-200 leading-relaxed">
                              {ex.problem}
                            </p>
                          </div>
                        </div>

                        {ex.hint && (
                          <p className="text-[11px] text-amber-300 mt-2.5 bg-amber-950/30 p-2.5 rounded-xl border border-amber-500/20 font-mono">
                            <strong>Sugerencia:</strong> {ex.hint}
                          </p>
                        )}

                        <div className="mt-3.5 pt-3.5 border-t border-indigo-950 flex items-center justify-between">
                          <button
                            onClick={() => toggleSolution(solKey)}
                            className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 cursor-pointer font-mono"
                          >
                            {isRevealed ? (
                              <>
                                <EyeOff className="w-3.5 h-3.5" />
                                <span>Ocultar procedimiento</span>
                              </>
                            ) : (
                              <>
                                <Eye className="w-3.5 h-3.5" />
                                <span>Ver desarrollo y solución</span>
                              </>
                            )}
                          </button>
                        </div>

                        {isRevealed && (
                          <div className="mt-3 p-4 bg-[#070b22] rounded-xl border border-cyan-500/40 text-xs text-slate-200 whitespace-pre-line animate-fadeIn font-mono">
                            <span className="font-bold text-cyan-300 block mb-1">
                              Solución y procedimiento:
                            </span>
                            {ex.solution}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

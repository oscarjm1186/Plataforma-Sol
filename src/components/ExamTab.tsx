import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  Award, 
  Calculator, 
  Eye, 
  EyeOff,
  Sparkles,
  FileCheck2,
  Trophy,
  History,
  Filter
} from 'lucide-react';
import { PartialExam, ExamQuestion, ExamAttemptRecord, Subject } from '../types';
import { getExam } from '../data/examsData';

interface ExamTabProps {
  subject: Subject;
  examAttempts: ExamAttemptRecord[];
  onSaveAttempt: (attempt: ExamAttemptRecord) => void;
  studentName?: string;
}

export const ExamTab: React.FC<ExamTabProps> = ({
  subject,
  examAttempts,
  onSaveAttempt,
  studentName = 'Sol'
}) => {
  const [activeParcial, setActiveParcial] = useState<1 | 2 | 3>(1);
  const [currentExam, setCurrentExam] = useState<PartialExam>(() => getExam(subject.id, 1));
  
  // Exam progress state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: number]: number }>({});
  const [studentWorkings, setStudentWorkings] = useState<{ [qId: number]: string }>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
  const [revealedSolutions, setRevealedSolutions] = useState<{ [qId: number]: boolean }>({});
  
  // Timer state (in seconds)
  const [secondsRemaining, setSecondsRemaining] = useState(120 * 60); // 2 hours
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [examStarted, setExamStarted] = useState(false);

  // Result state
  const [isExamSubmitted, setIsExamSubmitted] = useState(false);
  const [latestAttempt, setLatestAttempt] = useState<ExamAttemptRecord | null>(null);
  const [filterMode, setFilterMode] = useState<'all' | 'mc' | 'dev' | 'unanswered' | 'flagged'>('all');

  // Load exam when subject or activeParcial changes
  useEffect(() => {
    const exam = getExam(subject.id, activeParcial);
    setCurrentExam(exam);
    resetExamState();
  }, [subject.id, activeParcial]);

  // Timer countdown effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (examStarted && isTimerRunning && secondsRemaining > 0 && !isExamSubmitted) {
      interval = setInterval(() => {
        setSecondsRemaining(prev => {
          if (prev <= 1) {
            handleFinalSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [examStarted, isTimerRunning, secondsRemaining, isExamSubmitted]);

  const resetExamState = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setStudentWorkings({});
    setFlaggedQuestions([]);
    setRevealedSolutions({});
    setSecondsRemaining(120 * 60);
    setIsTimerRunning(false);
    setExamStarted(false);
    setIsExamSubmitted(false);
    setLatestAttempt(null);
  };

  const startExam = () => {
    setExamStarted(true);
    setIsTimerRunning(true);
  };

  const formatTimer = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = currentExam.questions[currentQuestionIndex] || currentExam.questions[0];

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    if (isExamSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const toggleFlagQuestion = (questionId: number) => {
    setFlaggedQuestions(prev => 
      prev.includes(questionId) ? prev.filter(id => id !== questionId) : [...prev, questionId]
    );
  };

  const toggleRevealSolution = (questionId: number) => {
    setRevealedSolutions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  // Evaluation submission
  const handleFinalSubmit = () => {
    let correctCount = 0;
    const questions = currentExam.questions;

    questions.forEach(q => {
      if (q.type === 'multiple_choice' || q.correctOptionIndex !== undefined) {
        if (selectedAnswers[q.id] === q.correctOptionIndex) {
          correctCount++;
        }
      } else {
        // Problem development: count as attempted if student wrote workings
        if (studentWorkings[q.id] && studentWorkings[q.id].trim().length > 10) {
          correctCount++;
        }
      }
    });

    const totalQuestions = questions.length; // 100
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const score10 = Number(((correctCount / totalQuestions) * 10).toFixed(1));
    const passed = score10 >= 6.0;

    const attempt: ExamAttemptRecord = {
      id: `att-${Date.now()}`,
      examId: currentExam.id,
      subjectId: subject.id,
      parcialNumber: activeParcial,
      date: new Date().toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      score: score10,
      totalQuestions,
      correctAnswers: correctCount,
      percentage,
      passed
    };

    setLatestAttempt(attempt);
    setIsExamSubmitted(true);
    setIsTimerRunning(false);
    onSaveAttempt(attempt);
  };

  // Filter questions for the question navigator matrix
  const filteredQuestions = currentExam.questions.filter(q => {
    if (filterMode === 'mc') return q.type === 'multiple_choice';
    if (filterMode === 'dev') return q.type === 'problem_development';
    if (filterMode === 'unanswered') return selectedAnswers[q.id] === undefined && !studentWorkings[q.id];
    if (filterMode === 'flagged') return flaggedQuestions.includes(q.id);
    return true;
  });

  const totalAnswered = Object.keys(selectedAnswers).length + Object.values(studentWorkings).filter((w: string) => w && w.trim().length > 0).length;

  return (
    <div className="space-y-6">
      {/* Top Parcial Selector & Exam Info Cosmic Bento Box */}
      <div className="bg-[#070b22]/90 rounded-3xl border border-indigo-950/90 p-6 shadow-2xl shadow-[#020512]/60 flex flex-wrap items-center justify-between gap-4 backdrop-blur-md">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400">
            Examen Departamental (100 Reactivos)
          </span>
          <h2 className="text-lg font-heading font-extrabold text-white mt-0.5">
            {subject.name} • 3 Exámenes Departamentales Oficiales
          </h2>
          <p className="text-xs text-slate-400 mt-1 font-mono">
            Mínimo 80% opción múltiple y reactivos con desarrollo para Geometría Analítica y Física.
          </p>
        </div>

        {/* 3 Parciales selector buttons */}
        <div className="flex items-center gap-2 font-mono">
          {([1, 2, 3] as const).map(p => (
            <button
              key={p}
              onClick={() => setActiveParcial(p)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeParcial === p
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black shadow-md shadow-cyan-500/30'
                  : 'bg-[#0b102b] hover:bg-[#121a42] text-slate-300 border border-indigo-950'
              }`}
            >
              Parcial {p}
            </button>
          ))}
        </div>
      </div>

      {/* If Exam is not started yet */}
      {!examStarted && !isExamSubmitted && (
        <div className="bg-[#070b22]/90 rounded-3xl border border-indigo-950/90 p-8 text-center max-w-2xl mx-auto shadow-2xl shadow-[#020512]/60 space-y-6 backdrop-blur-md">
          <div className="w-16 h-16 rounded-2xl bg-cyan-950/50 text-cyan-400 border border-cyan-500/30 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/10">
            <GraduationCap className="w-8 h-8" />
          </div>

          <div>
            <h3 className="text-xl font-heading font-extrabold text-white">
              {currentExam.title}
            </h3>
            <p className="text-xs text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
              {currentExam.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto text-xs font-mono">
            <div className="bg-[#030614] p-3.5 rounded-2xl border border-indigo-950">
              <span className="text-slate-400 block text-[11px]">Reactivos</span>
              <span className="font-extrabold text-cyan-300 text-sm">100 Preguntas</span>
            </div>
            <div className="bg-[#030614] p-3.5 rounded-2xl border border-indigo-950">
              <span className="text-slate-400 block text-[11px]">Tiempo Límite</span>
              <span className="font-extrabold text-amber-300 text-sm">120 Minutos</span>
            </div>
            <div className="bg-[#030614] p-3.5 rounded-2xl border border-indigo-950">
              <span className="text-slate-400 block text-[11px]">Escala IPN</span>
              <span className="font-extrabold text-white text-sm">0 a 10 (Aprueba ≥6)</span>
            </div>
          </div>

          <button
            onClick={startExam}
            className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 text-sm font-extrabold rounded-xl shadow-lg shadow-cyan-500/30 transition cursor-pointer font-mono"
          >
            Comenzar Examen Departamental (100 Reactivos)
          </button>
        </div>
      )}

      {/* Result Screen (After Submission) */}
      {isExamSubmitted && latestAttempt && (
        <div className="bg-[#070b22]/90 rounded-3xl border border-indigo-950/90 p-8 shadow-2xl shadow-[#020512]/60 space-y-6 backdrop-blur-md">
          <div className={`p-6 rounded-2xl border text-center ${
            latestAttempt.passed 
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200' 
              : 'bg-amber-950/40 border-amber-500/40 text-amber-200'
          }`}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-white shadow-md"
              style={{ backgroundColor: latestAttempt.passed ? '#059669' : '#d97706' }}
            >
              {latestAttempt.passed ? <Trophy className="w-8 h-8" /> : <AlertTriangle className="w-8 h-8" />}
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-white">
              {latestAttempt.passed ? `¡Felicidades, ${studentName}! Examen Aprobado 🎉` : 'Requiere Repaso para Afianzar Temas'}
            </h3>

            <p className="text-xs mt-1 max-w-md mx-auto text-slate-300">
              {latestAttempt.passed 
                ? 'Has demostrado un excelente dominio de los reactivos evaluados en esta materia del CECyT 11.' 
                : 'No te preocupes; revisa los reactivos erróneos abajo y consulta los temas en la guía para reforzar.'}
            </p>

            {/* Scores summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto mt-6 text-xs font-mono">
              <div className="bg-[#030614] p-3.5 rounded-2xl border border-indigo-950">
                <span className="text-slate-400 block text-[11px]">Calificación IPN</span>
                <span className={`font-extrabold text-2xl ${latestAttempt.passed ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {latestAttempt.score} / 10
                </span>
              </div>
              <div className="bg-[#030614] p-3.5 rounded-2xl border border-indigo-950">
                <span className="text-slate-400 block text-[11px]">Aciertos</span>
                <span className="font-extrabold text-2xl text-cyan-300">
                  {latestAttempt.correctAnswers} / 100
                </span>
              </div>
              <div className="bg-[#030614] p-3.5 rounded-2xl border border-indigo-950">
                <span className="text-slate-400 block text-[11px]">Porcentaje</span>
                <span className="font-extrabold text-2xl text-white">
                  {latestAttempt.percentage}%
                </span>
              </div>
              <div className="bg-[#030614] p-3.5 rounded-2xl border border-indigo-950">
                <span className="text-slate-400 block text-[11px]">Estatus</span>
                <span className={`font-bold text-sm mt-1 block ${latestAttempt.passed ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {latestAttempt.passed ? 'Acreditado' : 'No Acreditado'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={resetExamState}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 px-5 py-2.5 rounded-xl text-xs font-extrabold hover:from-cyan-300 hover:to-blue-400 transition cursor-pointer shadow-md shadow-cyan-500/30 font-mono"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Presentar de Nuevo</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Active Exam Interface (100 Reactivos) */}
      {examStarted && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Question Column */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-[#070b22]/90 rounded-3xl border border-indigo-950/90 p-6 md:p-8 shadow-2xl shadow-[#020512]/60 backdrop-blur-md">
              {/* Question Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-950/80 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md">
                    Reactivo {currentQuestionIndex + 1} de 100
                  </span>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                    currentQuestion.type === 'problem_development' 
                      ? 'bg-amber-950/50 text-amber-300 border border-amber-500/30' 
                      : 'bg-[#030614] text-cyan-300 border border-indigo-950'
                  }`}>
                    {currentQuestion.type === 'problem_development' ? 'Ejercicio de Desarrollo' : 'Opción Múltiple'}
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono">
                  <button
                    type="button"
                    onClick={() => toggleFlagQuestion(currentQuestion.id)}
                    className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl transition cursor-pointer ${
                      flaggedQuestions.includes(currentQuestion.id)
                        ? 'bg-amber-950/60 text-amber-300 border border-amber-500/40'
                        : 'bg-[#0b102b] hover:bg-[#121a42] text-slate-300 border border-indigo-950'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5 text-amber-400" />
                    <span>{flaggedQuestions.includes(currentQuestion.id) ? 'Marcada' : 'Marcar'}</span>
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <h3 className="font-heading font-extrabold text-base md:text-lg text-white leading-snug mb-5">
                {currentQuestion.question}
              </h3>

              {/* Multiple Choice Options */}
              {currentQuestion.type === 'multiple_choice' && currentQuestion.options && (
                <div className="space-y-3">
                  {currentQuestion.options.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[currentQuestion.id] === optIdx;
                    const letter = String.fromCharCode(65 + optIdx); // A, B, C, D

                    // Feedback colors if exam was submitted
                    let optionClass = 'bg-[#030614] border-indigo-950 text-slate-200 hover:border-cyan-500/40 hover:bg-[#070e2c]';
                    if (isExamSubmitted) {
                      if (optIdx === currentQuestion.correctOptionIndex) {
                        optionClass = 'bg-emerald-950/50 border-emerald-500/50 text-emerald-200 font-bold';
                      } else if (isSelected) {
                        optionClass = 'bg-rose-950/50 border-rose-500/50 text-rose-200 font-medium';
                      }
                    } else if (isSelected) {
                      optionClass = 'bg-cyan-950/50 border-cyan-500/50 text-cyan-200 font-semibold shadow-sm shadow-cyan-500/15';
                    }

                    return (
                      <div
                        key={optIdx}
                        onClick={() => handleSelectOption(currentQuestion.id, optIdx)}
                        className={`p-4 rounded-2xl border flex items-center gap-3 cursor-pointer transition text-xs md:text-sm ${optionClass}`}
                      >
                        <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                          isSelected ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950' : 'bg-[#070b22] border border-indigo-950 text-slate-300'
                        }`}>
                          {letter}
                        </span>
                        <span className="leading-snug flex-1">{opt}</span>
                        {isExamSubmitted && optIdx === currentQuestion.correctOptionIndex && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        )}
                        {isExamSubmitted && isSelected && optIdx !== currentQuestion.correctOptionIndex && (
                          <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Problem Development Interactive Area (Geometría / Física) */}
              {currentQuestion.type === 'problem_development' && (
                <div className="space-y-4">
                  <div className="bg-[#030614] border border-indigo-950 rounded-2xl p-4">
                    <label className="block text-xs font-bold text-slate-300 mb-2 flex items-center gap-2 font-mono">
                      <Calculator className="w-4 h-4 text-cyan-400" />
                      <span>Pizarra Digital de Desarrollo (Escribe tus operaciones, datos y fórmula):</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Planteamiento:\nDatos:\nFórmula:\nSustitución y Operaciones:\nResultado final con unidades:"
                      value={studentWorkings[currentQuestion.id] || ''}
                      onChange={(e) => setStudentWorkings(prev => ({ ...prev, [currentQuestion.id]: e.target.value }))}
                      className="w-full text-xs font-mono bg-[#070b22] border border-indigo-950 text-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>

                  {/* Toggle Step-by-Step Resolution */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => toggleRevealSolution(currentQuestion.id)}
                      className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 cursor-pointer"
                    >
                      {revealedSolutions[currentQuestion.id] ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>Ocultar desarrollo oficial paso a paso</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>Ver desarrollo oficial paso a paso (Planteamiento, Datos, Fórmula y Resultado)</span>
                        </>
                      )}
                    </button>

                    {revealedSolutions[currentQuestion.id] && currentQuestion.developmentSteps && (
                      <div className="mt-3 bg-[#030614] border border-indigo-950 text-white p-5 rounded-2xl space-y-3 font-sans text-xs animate-fadeIn">
                        <span className="font-mono font-bold text-cyan-300 uppercase tracking-wider text-[11px] block">
                          Resolución oficial paso a paso:
                        </span>
                        {currentQuestion.developmentSteps.map((st, sIdx) => (
                          <div key={sIdx} className="border-b border-indigo-950/80 pb-2.5 last:border-0 last:pb-0">
                            <span className="font-bold text-amber-300 block">{st.step}</span>
                            <p className="text-slate-300 mt-0.5">{st.description}</p>
                            {st.formula && (
                              <code className="text-cyan-300 font-mono text-[11px] mt-1 block">
                                {st.formula}
                              </code>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Explanation (if submitted) */}
              {isExamSubmitted && currentQuestion.explanation && (
                <div className="mt-5 p-4 bg-[#030614] border border-indigo-950 rounded-2xl text-xs text-slate-300 leading-relaxed font-mono">
                  <span className="font-bold text-cyan-300 block mb-1">
                    Explicación pedagógica oficial:
                  </span>
                  {currentQuestion.explanation}
                </div>
              )}

              {/* Bottom Navigation Buttons */}
              <div className="mt-8 pt-4 border-t border-indigo-950 flex items-center justify-between gap-3 font-mono">
                <button
                  type="button"
                  onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0b102b] hover:bg-[#121a42] text-slate-200 text-xs font-bold disabled:opacity-40 cursor-pointer border border-indigo-950"
                >
                  <ChevronLeft className="w-4 h-4 text-cyan-400" />
                  <span>Anterior</span>
                </button>

                <span className="text-xs text-slate-400 font-medium">
                  {currentQuestionIndex + 1} de 100
                </span>

                <button
                  type="button"
                  onClick={() => setCurrentQuestionIndex(prev => Math.min(currentExam.questions.length - 1, prev + 1))}
                  disabled={currentQuestionIndex === currentExam.questions.length - 1}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0b102b] hover:bg-[#121a42] text-slate-200 text-xs font-bold disabled:opacity-40 cursor-pointer border border-indigo-950"
                >
                  <span>Siguiente</span>
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Timer & 100 Questions Navigator Matrix */}
          <div className="lg:col-span-4 space-y-4">
            {/* Timer and Status Card */}
            <div className="bg-[#070b22]/90 rounded-3xl border border-indigo-950/90 p-5 shadow-2xl shadow-[#020512]/60 backdrop-blur-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Tiempo restante</span>
                </span>
                <span className={`font-mono text-base font-extrabold ${secondsRemaining < 600 ? 'text-rose-400 animate-pulse' : 'text-cyan-300'}`}>
                  {formatTimer(secondsRemaining)}
                </span>
              </div>

              <div className="w-full bg-[#030614] h-2.5 rounded-full overflow-hidden border border-indigo-950">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all duration-300 shadow-sm shadow-cyan-400"
                  style={{ width: `${(totalAnswered / 100) * 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2.5 font-mono">
                <span>Respondidas: <strong className="text-cyan-300">{totalAnswered}</strong> de 100</span>
                <span>{Math.round((totalAnswered / 100) * 100)}%</span>
              </div>
            </div>

            {/* Matrix of all 100 questions */}
            <div className="bg-[#070b22]/90 rounded-3xl border border-indigo-950/90 p-5 shadow-2xl shadow-[#020512]/60 backdrop-blur-md">
              <div className="flex items-center justify-between mb-3 border-b border-indigo-950/80 pb-2.5 font-mono">
                <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-wider text-cyan-400">
                  Navegador de 100 Reactivos
                </h4>
                <span className="text-[10px] text-slate-400">Clic para ir</span>
              </div>

              {/* 100 Questions Number Grid */}
              <div className="grid grid-cols-10 gap-1.5 max-h-[300px] overflow-y-auto p-1 font-mono">
                {currentExam.questions.map((q, idx) => {
                  const isCurrent = idx === currentQuestionIndex;
                  const isAnswered = selectedAnswers[q.id] !== undefined || (studentWorkings[q.id] && studentWorkings[q.id].trim().length > 0);
                  const isFlagged = flaggedQuestions.includes(q.id);

                  let btnBg = 'bg-[#030614] text-slate-400 hover:bg-[#0c1236] border border-indigo-950';
                  if (isExamSubmitted) {
                    if (selectedAnswers[q.id] === q.correctOptionIndex) {
                      btnBg = 'bg-emerald-600 text-white font-bold';
                    } else {
                      btnBg = 'bg-rose-600 text-white font-bold';
                    }
                  } else if (isCurrent) {
                    btnBg = 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black ring-2 ring-cyan-400/50 shadow-md shadow-cyan-500/20';
                  } else if (isFlagged) {
                    btnBg = 'bg-amber-400 text-amber-950 font-bold';
                  } else if (isAnswered) {
                    btnBg = 'bg-[#101b4e] text-cyan-200 border border-cyan-500/30 font-semibold';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      title={`Reactivo ${idx + 1}`}
                      className={`w-7 h-7 text-[11px] rounded-lg transition flex items-center justify-center cursor-pointer ${btnBg}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-indigo-950 text-[10px] text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-[#101b4e] border border-cyan-500/30" /> Contestada
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-[#030614] border border-indigo-950" /> Sin contestar
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-amber-400" /> Con marca
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-gradient-to-r from-cyan-400 to-blue-500" /> Actual
                </div>
              </div>

              {/* Submit Final Exam Button */}
              {!isExamSubmitted && (
                <div className="mt-5 pt-3 border-t border-indigo-950 font-mono">
                  <button
                    onClick={handleFinalSubmit}
                    className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 text-xs font-extrabold rounded-xl shadow-lg shadow-emerald-950/50 transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FileCheck2 className="w-4 h-4" />
                    <span>Calificar Examen y Obtener Resultado</span>
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-2 font-mono">
                    Puedes finalizar en cualquier momento para obtener tu calificación.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

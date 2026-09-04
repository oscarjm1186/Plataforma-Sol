import React, { useState } from 'react';
import { 
  Layers, 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Sparkles,
  Compass,
  Atom,
  FlaskConical,
  PenTool,
  Building2,
  FileCheck,
  MapPin,
  Leaf,
  Globe2,
  Languages,
  BookOpen
} from 'lucide-react';
import { Subject } from '../types';
import { SUBJECTS } from '../data/subjectsData';
import { FLASHCARDS_DATA } from '../data/flashcardsData';

interface FlashcardsHubViewProps {
  onBackToHome: () => void;
  onSelectSubjectForFlashcards: (subject: Subject) => void;
  masteredCards: string[];
  subjects?: Subject[];
}

const getSubjectIcon = (iconName: string) => {
  switch (iconName) {
    case 'Compass': return <Compass className="w-5 h-5 text-emerald-400" />;
    case 'Atom': return <Atom className="w-5 h-5 text-sky-400" />;
    case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-purple-400" />;
    case 'PenTool': return <PenTool className="w-5 h-5 text-amber-400" />;
    case 'Building2': return <Building2 className="w-5 h-5 text-rose-400" />;
    case 'FileCheck': return <FileCheck className="w-5 h-5 text-blue-400" />;
    case 'MapPin': return <MapPin className="w-5 h-5 text-teal-400" />;
    case 'Leaf': return <Leaf className="w-5 h-5 text-green-400" />;
    case 'Globe2': return <Globe2 className="w-5 h-5 text-indigo-400" />;
    case 'Languages': return <Languages className="w-5 h-5 text-pink-400" />;
    case 'BookOpen':
    default:
      return <BookOpen className="w-5 h-5 text-cyan-400" />;
  }
};

export const FlashcardsHubView: React.FC<FlashcardsHubViewProps> = ({
  onBackToHome,
  onSelectSubjectForFlashcards,
  masteredCards,
  subjects = SUBJECTS
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterArea, setFilterArea] = useState<'all' | 'tecnologica' | 'basica' | 'humanistica'>('all');

  // Compute total flashcards across all subjects
  const totalCardsCount = FLASHCARDS_DATA.length;

  const filteredSubjects = subjects.filter(sub => {
    const matchesSearch = sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          sub.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesArea = filterArea === 'all' || sub.area === filterArea;
    return matchesSearch && matchesArea;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Breadcrumb and Return Button */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 bg-[#060a18] hover:bg-[#0c1236] border border-cyan-500/30 hover:border-cyan-400/60 px-4 py-2 rounded-xl transition cursor-pointer shadow-md shadow-black/60"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Panel Principal</span>
        </button>

        <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
          <span>Inicio</span>
          <span>/</span>
          <span className="text-cyan-400 font-bold">Tarjetas de Estudio y Repaso Activo</span>
        </div>
      </div>

      {/* 2. Hero Header */}
      <div className="bg-[#070b22]/90 border border-indigo-950/90 rounded-3xl p-6 md:p-8 shadow-2xl shadow-[#020512]/60 backdrop-blur-md relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 shadow-md">
              <Layers className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="font-heading font-extrabold text-2xl md:text-3xl text-white tracking-tight">
                  Centro de Tarjetas de Repaso Activo
                </h1>
                <span className="text-[10px] bg-cyan-950/60 text-cyan-300 font-mono font-bold px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                  Repaso Espaciado
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-300 mt-1.5 max-w-2xl leading-relaxed">
                Selecciona la materia que deseas repasar. Cada mazo incluye fórmulas, conceptos clave, normas y síntesis técnicas preparadas para los exámenes departamentales del <strong>3er Semestre (CECyT 11)</strong>.
              </p>
            </div>
          </div>

          {/* Telemetry Stat Card */}
          <div className="bg-[#030614] border border-cyan-500/25 rounded-2xl p-4 shrink-0 lg:max-w-xs w-full shadow-lg flex items-center justify-around font-mono text-center">
            <div className="px-2">
              <div className="text-2xl font-black text-cyan-400">{totalCardsCount}</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Tarjetas Totales</div>
            </div>
            <div className="w-px h-8 bg-indigo-950" />
            <div className="px-2">
              <div className="text-2xl font-black text-emerald-400">{masteredCards.length}</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Dominadas</div>
            </div>
            <div className="w-px h-8 bg-indigo-950" />
            <div className="px-2">
              <div className="text-2xl font-black text-amber-400">
                {totalCardsCount > 0 ? Math.round((masteredCards.length / totalCardsCount) * 100) : 0}%
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Dominio</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Controls & Directory */}
      <div className="bg-[#070b22]/90 border border-indigo-950/90 rounded-3xl p-6 md:p-8 shadow-2xl shadow-[#020512]/60 backdrop-blur-md space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-950/80 pb-5">
          <div>
            <h2 className="font-heading font-extrabold text-lg text-white">
              Mazos por Materia
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Elige una materia para iniciar tu sesión de repaso activo.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative min-w-[220px]">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar materia..."
                className="w-full text-xs pl-8 pr-3 py-2 bg-[#030614] border border-indigo-950 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 font-mono transition"
              />
            </div>

            <div className="flex items-center gap-1 bg-[#030614] p-1 rounded-xl border border-indigo-950 text-xs font-mono">
              <button
                onClick={() => setFilterArea('all')}
                className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                  filterArea === 'all' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Todas ({subjects.length})
              </button>
              <button
                onClick={() => setFilterArea('tecnologica')}
                className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                  filterArea === 'tecnologica' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Construcción ({subjects.filter(s => s.area === 'tecnologica').length})
              </button>
              <button
                onClick={() => setFilterArea('basica')}
                className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                  filterArea === 'basica' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Básica ({subjects.filter(s => s.area === 'basica').length})
              </button>
              <button
                onClick={() => setFilterArea('humanistica')}
                className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                  filterArea === 'humanistica' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Humanística ({subjects.filter(s => s.area === 'humanistica').length})
              </button>
            </div>
          </div>
        </div>

        {/* 4. Subject Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSubjects.map((sub) => {
            const subjectCards = FLASHCARDS_DATA.filter(c => c.subjectId === sub.id);
            const subMasteredCount = subjectCards.filter(c => masteredCards.includes(c.id)).length;
            const percentage = subjectCards.length > 0 
              ? Math.round((subMasteredCount / subjectCards.length) * 100) 
              : 0;

            return (
              <div
                key={sub.id}
                className="bg-[#030614] border border-indigo-950 hover:border-cyan-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 shadow-md group relative hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#070c26] border border-indigo-950 flex items-center justify-center shrink-0">
                        {getSubjectIcon(sub.icon)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                          {sub.code}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400">
                          {sub.area === 'tecnologica' ? 'Construcción' : sub.area === 'basica' ? 'Científica Básica' : 'Humanística'}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-bold bg-[#070b22] text-cyan-300 border border-indigo-950 px-2.5 py-0.5 rounded-full">
                      {subjectCards.length} tarjetas
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-white leading-snug group-hover:text-cyan-300 transition-colors">
                    {sub.name}
                  </h3>

                  {/* Progress bar */}
                  <div className="mt-4 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Dominio:</span>
                      <span className="text-cyan-300 font-bold">{subMasteredCount} de {subjectCards.length} ({percentage}%)</span>
                    </div>
                    <div className="w-full bg-[#070b22] h-2 rounded-full overflow-hidden border border-indigo-950">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-indigo-950/80">
                  <button
                    onClick={() => onSelectSubjectForFlashcards(sub)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-bold transition cursor-pointer font-mono shadow-md shadow-cyan-950/50"
                  >
                    <span>Repasar Tarjetas</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

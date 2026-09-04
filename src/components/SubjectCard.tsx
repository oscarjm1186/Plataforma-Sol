import React from 'react';
import { 
  Compass, 
  Atom, 
  HardHat, 
  FileSpreadsheet, 
  MapPin, 
  Leaf, 
  BookOpen, 
  Layers, 
  Video, 
  GraduationCap, 
  ArrowRight,
  FolderOpen
} from 'lucide-react';
import { Subject } from '../types';

interface SubjectCardProps {
  subject: Subject;
  onSelect: (subject: Subject, initialTab?: 'guide' | 'books' | 'flashcards' | 'videos' | 'exams') => void;
  completedTopicsCount: number;
  totalTopicsCount: number;
  driveLink?: string;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  onSelect,
  completedTopicsCount,
  totalTopicsCount,
  driveLink
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-6 h-6" />;
      case 'Atom': return <Atom className="w-6 h-6" />;
      case 'HardHat': return <HardHat className="w-6 h-6" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-6 h-6" />;
      case 'MapPin': return <MapPin className="w-6 h-6" />;
      case 'Leaf': return <Leaf className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  const percent = totalTopicsCount > 0 
    ? Math.round((completedTopicsCount / totalTopicsCount) * 100) 
    : 0;

  const isTechnical = subject.area === 'tecnologica';

  return (
    <div className="bg-[#060a18]/85 rounded-3xl border border-cyan-950/80 hover:border-cyan-500/40 shadow-xl shadow-black/80 hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1 relative backdrop-blur-xl">
      {/* Top Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div 
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-105 border border-white/10"
            style={{ backgroundColor: subject.color }}
          >
            {getIcon(subject.icon)}
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#030614] text-cyan-300 border border-indigo-950">
              {subject.code}
            </span>
            <span className={`text-[10px] mt-1 font-bold px-2 py-0.5 rounded-full ${
              isTechnical 
                ? 'bg-amber-950/50 text-amber-300 border border-amber-500/30' 
                : 'bg-cyan-950/50 text-cyan-300 border border-cyan-500/30'
            }`}>
              {subject.area === 'tecnologica' ? 'Construcción' : subject.area === 'basica' ? 'Científica Básica' : 'Humanística'}
            </span>
          </div>
        </div>

        <h3 
          onClick={() => onSelect(subject)}
          className="font-heading font-extrabold text-lg text-white leading-snug group-hover:text-cyan-300 cursor-pointer transition-colors"
        >
          {subject.name}
        </h3>
        
        <p className="text-xs text-[#a6b9cc] mt-2 line-clamp-2 leading-relaxed">
          {subject.competence}
        </p>

        {/* Progress bar */}
        <div className="mt-4 pt-3 border-t border-cyan-950/80">
          <div className="flex items-center justify-between text-[11px] text-[#a6b9cc] mb-1.5 font-mono">
            <span>Avance de temas</span>
            <span className="text-cyan-300 font-bold">{percent}% ({completedTopicsCount}/{totalTopicsCount})</span>
          </div>
          <div className="w-full bg-[#030614] h-2 rounded-full overflow-hidden border border-indigo-950">
            <div 
              className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-400"
              style={{ 
                width: `${percent}%`
              }}
            />
          </div>
        </div>
      </div>

      {/* Feature tags */}
      <div className="px-6 py-2.5 bg-[#030617]/70 border-t border-b border-cyan-950/80 grid grid-cols-3 gap-2 text-center text-[11px] text-[#a6b9cc] font-mono">
        <div className="bg-[#070b22] py-1.5 px-2 rounded-xl border border-cyan-950">
          <span className="font-bold text-white">3</span> Parciales
        </div>
        <div className="bg-[#070b22] py-1.5 px-2 rounded-xl border border-cyan-950">
          <span className="font-bold text-white">3</span> Exámenes
        </div>
        <div className="bg-[#070b22] py-1.5 px-2 rounded-xl border border-cyan-950">
          <span className="font-bold text-amber-400">100</span> Reactivos
        </div>
      </div>

      {/* Quick Action Navigation Buttons */}
      <div className="p-4 bg-[#050816]/90 mt-auto flex items-center justify-between gap-1.5 text-xs font-mono">
        <button
          onClick={() => onSelect(subject, 'guide')}
          title="Ver Guía Interactiva"
          className="flex-1 py-2 px-2.5 rounded-xl bg-[#090f28] hover:bg-cyan-500 hover:text-slate-950 text-slate-200 font-bold transition text-center cursor-pointer border border-cyan-950"
        >
          Guía
        </button>
        <button
          onClick={() => onSelect(subject, 'books')}
          title="Ver Libros y Drive"
          className="py-2 px-2.5 rounded-xl bg-[#090f28] hover:bg-[#121a42] text-slate-200 transition cursor-pointer flex items-center gap-1 border border-cyan-950"
        >
          <BookOpen className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">Libros</span>
        </button>
        <button
          onClick={() => onSelect(subject, 'flashcards')}
          title="Ver Tarjetas de Estudio"
          className="py-2 px-2.5 rounded-xl bg-[#090f28] hover:bg-[#121a42] text-slate-200 transition cursor-pointer flex items-center gap-1 border border-cyan-950"
        >
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline">Tarjetas</span>
        </button>
        <button
          onClick={() => onSelect(subject, 'exams')}
          title="Hacer Simulador de Examen"
          className="flex-1 py-2 px-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black transition text-center cursor-pointer flex items-center justify-center gap-1 shadow-md shadow-cyan-950/50"
        >
          <span>Examen</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

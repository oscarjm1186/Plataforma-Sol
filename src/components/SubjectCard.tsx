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
  GraduationCap, 
  ArrowRight,
  FolderOpen,
  Youtube
} from 'lucide-react';
import { Subject } from '../types';
import { getSubjectYoutubePlaylist } from '../data/driveLinksData';

interface SubjectCardProps {
  subject: Subject;
  onSelect: (subject: Subject, initialTab?: 'guide' | 'books' | 'flashcards' | 'videos' | 'exams') => void;
  completedTopicsCount: number;
  totalTopicsCount: number;
  driveLink?: string;
  youtubePlaylistUrl?: string;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  onSelect,
  completedTopicsCount,
  totalTopicsCount,
  youtubePlaylistUrl,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Atom': return <Atom className="w-5 h-5" />;
      case 'HardHat': return <HardHat className="w-5 h-5" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5" />;
      case 'MapPin': return <MapPin className="w-5 h-5" />;
      case 'Leaf': return <Leaf className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const percent = totalTopicsCount > 0 
    ? Math.round((completedTopicsCount / totalTopicsCount) * 100) 
    : 0;

  const isTechnical = subject.area === 'tecnologica';
  const playlistUrl = youtubePlaylistUrl || subject.youtubePlaylistUrl || getSubjectYoutubePlaylist(subject.id);

  return (
    <div className="bg-[#060a18]/85 rounded-3xl border border-cyan-950/80 hover:border-cyan-500/40 shadow-xl shadow-black/80 hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 relative backdrop-blur-xl">
      {/* Card Body */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div 
            className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-105 border border-white/10"
            style={{ backgroundColor: subject.accentHex || '#059669' }}
          >
            {getIcon(subject.icon)}
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-[#030614] text-cyan-300 border border-indigo-950">
                {subject.code}
              </span>
              <a
                href={playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-6 h-6 rounded-md bg-[#0a0512] hover:bg-rose-600 text-rose-400 hover:text-white border border-rose-500/30 flex items-center justify-center transition cursor-pointer shadow-xs group/yt"
                title={`Ver lista de YouTube de ${subject.name}`}
              >
                <Youtube className="w-3.5 h-3.5 group-hover/yt:scale-110 transition-transform" />
              </a>
            </div>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              isTechnical 
                ? 'bg-amber-950/50 text-amber-300 border border-amber-500/30' 
                : 'bg-cyan-950/50 text-cyan-300 border border-cyan-500/30'
            }`}>
              {subject.area === 'tecnologica' ? 'Construcción' : subject.area === 'basica' ? 'Científica Básica' : 'Humanística'}
            </span>
          </div>
        </div>

        <h3 
          onClick={() => onSelect(subject, 'guide')}
          className="font-heading font-extrabold text-lg text-white leading-snug group-hover:text-cyan-300 cursor-pointer transition-colors"
        >
          {subject.name}
        </h3>
        
        <p className="text-xs text-[#a6b9cc] mt-2 line-clamp-2 leading-relaxed">
          {subject.description || subject.competenceGeneral || subject.competence}
        </p>

        {/* Dynamic metrics info bar */}
        <div className="mt-4 pt-3 border-t border-cyan-950/80 flex items-center justify-between text-[11px] font-mono text-[#a6b9cc]">
          <span>{totalTopicsCount > 0 ? `${totalTopicsCount} Temas` : '3 Parciales'} • 50 Tarjetas</span>
          <span className="text-cyan-300 font-bold">{percent}% completado</span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-[#030614] h-1.5 rounded-full overflow-hidden mt-1.5 border border-indigo-950">
          <div 
            className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-400"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      {/* Action Buttons: Clear, Intuitive, and Direct */}
      <div className="p-4 pt-2 bg-[#050816]/90 flex items-center justify-between gap-1.5 text-xs font-mono">
        <button
          onClick={() => onSelect(subject, 'guide')}
          title="Abrir Guía de Estudio"
          className="flex-1 py-2 px-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 font-bold transition text-center cursor-pointer border border-cyan-500/30"
        >
          Guía
        </button>

        <button
          onClick={() => onSelect(subject, 'books')}
          title="Ver Libros y Google Drive de la Materia"
          className="py-2 px-2.5 rounded-xl bg-[#090f28] hover:bg-amber-500 hover:text-slate-950 text-amber-300 transition cursor-pointer flex items-center gap-1 border border-cyan-950"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Libros</span>
        </button>

        <button
          onClick={() => onSelect(subject, 'flashcards')}
          title="Ver 50 Tarjetas de Estudio"
          className="py-2 px-2.5 rounded-xl bg-[#090f28] hover:bg-indigo-500 hover:text-white text-indigo-300 transition cursor-pointer flex items-center gap-1 border border-cyan-950"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>50 Tarjetas</span>
        </button>

        <button
          onClick={() => onSelect(subject, 'exams')}
          title="Simulador de Examen"
          className="py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black transition text-center cursor-pointer flex items-center justify-center gap-1 shadow-md shadow-cyan-950/50"
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Examen</span>
        </button>
      </div>
    </div>
  );
};

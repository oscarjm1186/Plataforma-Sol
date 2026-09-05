import React from 'react';
import { 
  Orbit, 
  Sparkles, 
  Compass, 
  CheckCircle2, 
  Heart,
  Radio,
  Satellite,
  User,
  FolderOpen,
  Layers,
  LayoutGrid
} from 'lucide-react';
import { Subject } from '../types';
import { AstronomicalTelemetryHUD } from './AstronomicalTelemetryHUD';

interface NavbarProps {
  subjects: Subject[];
  selectedSubject: Subject | null;
  activeMainView?: 'home' | 'library' | 'flashcards';
  onSelectSubject: (subject: Subject | null) => void;
  onNavigateView?: (view: 'home' | 'library' | 'flashcards') => void;
  completedTopicsCount: number;
  totalTopicsCount: number;
  studentName?: string;
  onOpenNameModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  subjects,
  selectedSubject,
  activeMainView = 'home',
  onSelectSubject,
  onNavigateView,
  completedTopicsCount,
  totalTopicsCount,
  studentName = 'Sol',
  onOpenNameModal
}) => {
  const isSol = studentName.trim().toLowerCase().includes('sol');
  const percentCompleted = totalTopicsCount > 0 
    ? Math.round((completedTopicsCount / totalTopicsCount) * 100) 
    : 0;

  const handleNavClick = (view: 'home' | 'library' | 'flashcards') => {
    onSelectSubject(null);
    if (onNavigateView) {
      onNavigateView(view);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#050609]/92 backdrop-blur-2xl border-b border-cyan-950/80 shadow-2xl shadow-black/80">
      {/* Top Banner: Space Station Telemetry / Dedication */}
      <div className="bg-[#030409] border-b border-cyan-950/60 text-[#a6b9cc] py-1.5 px-4 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
          </div>
          <div className="flex items-center gap-3">
          </div>
        </div>
      </div>

      {/* Main Nav Controls */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-4">
        {/* Brand & Home click (Left) */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-300 flex items-center justify-center text-slate-950 font-black text-sm shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-all">
              ☀️
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 border border-[#050609]"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Plataforma De Estudio
              </span>
              
            </div>
            <p className="text-[11px] text-[#a6b9cc] font-normal flex items-center gap-1">
              <span>Contenido Temático: </span>
              <span className="text-cyan-900">•</span>
              <span className="text-cyan-400 font-mono">{subjects.length} Materias</span>
            </p>
          </div>
        </div>

        {/* Global Navigation Hub Tabs */}
        <div className="hidden md:flex items-center gap-1 bg-[#030614] p-1 rounded-xl border border-cyan-950/80 font-mono text-xs">
          <button
            onClick={() => handleNavClick('home')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition cursor-pointer font-bold ${
              !selectedSubject && activeMainView === 'home'
                ? 'bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-500/30'
                : 'text-slate-400 hover:text-white hover:bg-cyan-950/40'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Materias</span>
          </button>

          <button
            onClick={() => handleNavClick('library')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition cursor-pointer font-bold ${
              !selectedSubject && activeMainView === 'library'
                ? 'bg-amber-500 text-slate-950 shadow-sm shadow-amber-500/30'
                : 'text-slate-400 hover:text-white hover:bg-amber-950/40'
            }`}
          >
            <FolderOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Biblioteca Google Drive</span>
          </button>

          <button
            onClick={() => handleNavClick('flashcards')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition cursor-pointer font-bold ${
              !selectedSubject && activeMainView === 'flashcards'
                ? 'bg-cyan-400 text-slate-950 shadow-sm shadow-cyan-400/30'
                : 'text-slate-400 hover:text-white hover:bg-cyan-950/40'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Tarjetas de Repaso</span>
          </button>
        </div>

        {/* Center/Right HUD: Astronomical Telemetry & Stardate Capsule */}
        <div className="flex items-center gap-3">
          <AstronomicalTelemetryHUD />

          {/* Quick home button if inside a subject */}
          {selectedSubject && (
            <button
              onClick={() => handleNavClick('home')}
              className="text-xs font-mono font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 px-3 py-1.5 rounded-xl transition cursor-pointer shadow-md shadow-cyan-950/60 shrink-0"
            >
              ← Ver Materias
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

import React, { useState } from 'react';
import { 
  FolderOpen, 
  ExternalLink, 
  Youtube, 
  Search, 
  ArrowLeft,
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
  BookOpen,
  ArrowRight,
  Sparkles,
  CloudCheck
} from 'lucide-react';
import { Subject } from '../types';
import { SUBJECTS } from '../data/subjectsData';
import { getSubjectDriveLinks, getSubjectYoutubePlaylist } from '../data/driveLinksData';

interface DigitalLibraryViewProps {
  onBackToHome: () => void;
  onSelectSubject: (subject: Subject, tab?: 'guide' | 'books' | 'flashcards' | 'videos' | 'exams') => void;
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

export const DigitalLibraryView: React.FC<DigitalLibraryViewProps> = ({
  onBackToHome,
  onSelectSubject,
  subjects = SUBJECTS
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterArea, setFilterArea] = useState<'all' | 'tecnologica' | 'basica' | 'humanistica'>('all');

  const filteredSubjects = subjects.filter(sub => {
    const matchesSearch = sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          sub.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          sub.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesArea = filterArea === 'all' || sub.area === filterArea;
    return matchesSearch && matchesArea;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Top Breadcrumb & Return to Home */}
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
          <span className="text-amber-400 font-bold">Biblioteca Digital & Google Drive (11 Materias)</span>
        </div>
      </div>

      {/* 2. Universal Digital Library Hero */}
      <div className="bg-[#070b22]/90 border border-indigo-950/90 rounded-3xl p-6 md:p-8 shadow-2xl shadow-[#020512]/60 backdrop-blur-md relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
              <FolderOpen className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="font-heading font-extrabold text-2xl md:text-3xl text-white tracking-tight">
                  Biblioteca Digital & Nube de Recursos
                </h1>
                <span className="text-[10px] bg-amber-950/60 text-amber-300 font-mono font-bold px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  {subjects.length} Materias Sincronizadas
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-300 mt-1.5 max-w-2xl leading-relaxed">
                Repositorio central del <strong>3er Semestre de Técnico en Construcción</strong>. Accede a las carpetas de Google Drive (libros en PDF, guías y apuntes) y listas de reproducción de YouTube para cada una de las 11 materias.
              </p>
            </div>
          </div>

          {/* Telemetry counters */}
          <div className="bg-[#030614] border border-amber-500/25 rounded-2xl p-4 shrink-0 lg:max-w-xs w-full shadow-lg flex items-center justify-around font-mono text-center">
            <div className="px-2">
              <div className="text-2xl font-black text-amber-400">{subjects.length}</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Carpetas Drive</div>
            </div>
            <div className="w-px h-8 bg-indigo-950" />
            <div className="px-2">
              <div className="text-2xl font-black text-rose-400">{subjects.length}</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Playlists YouTube</div>
            </div>
            <div className="w-px h-8 bg-indigo-950" />
            <div className="px-2">
              <div className="text-2xl font-black text-cyan-400">3</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Áreas Académicas</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Filter and Search Controls */}
      <div className="bg-[#070b22]/90 border border-indigo-950/90 rounded-3xl p-6 md:p-8 shadow-2xl shadow-[#020512]/60 backdrop-blur-md space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-950/80 pb-5">
          <div>
            <h2 className="font-heading font-extrabold text-lg text-white flex items-center gap-2">
              <span>Directorio de Materias y Recursos</span>
              <span className="text-xs font-mono text-cyan-400 font-normal">
                ({filteredSubjects.length} de {subjects.length} visibles)
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Haz clic en el enlace de Google Drive o de YouTube de la materia que deseas consultar.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative min-w-[220px]">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar materia o clave..."
                className="w-full text-xs pl-8 pr-3 py-2 bg-[#030614] border border-indigo-950 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 font-mono transition"
              />
            </div>

            {/* Filter Buttons */}
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

        {/* 4. The 11 Subjects Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSubjects.map((sub) => {
            const subDrive = getSubjectDriveLinks(sub.id).mainFolderUrl;
            const subYoutube = getSubjectYoutubePlaylist(sub.id);

            return (
              <div
                key={sub.id}
                className="bg-[#030614] border border-indigo-950 hover:border-amber-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 shadow-md group relative hover:-translate-y-0.5"
              >
                {/* Top Subject Info */}
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
                        <span className={`text-[9px] font-mono px-2 py-0.2 rounded-full border ${
                          sub.area === 'tecnologica'
                            ? 'bg-amber-950/40 text-amber-300 border-amber-500/30'
                            : sub.area === 'basica'
                            ? 'bg-sky-950/40 text-sky-300 border-sky-500/30'
                            : 'bg-indigo-950/40 text-indigo-300 border-indigo-500/30'
                        }`}>
                          {sub.area === 'tecnologica' ? 'Construcción' : sub.area === 'basica' ? 'Científica Básica' : 'Humanística'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-base text-white leading-snug group-hover:text-amber-300 transition-colors">
                    {sub.name}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {sub.description}
                  </p>
                </div>

                {/* Direct Action Buttons: 1. Drive Folder, 2. YouTube Playlist, 3. View Study Guide */}
                <div className="mt-5 pt-4 border-t border-indigo-950/80 space-y-2 font-mono">
                  {/* Google Drive Link */}
                  <a
                    href={subDrive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl bg-[#090f2b] hover:bg-amber-500 hover:text-slate-950 text-amber-300 border border-amber-500/30 transition text-xs font-bold cursor-pointer group/btn shadow-xs"
                    title={`Abrir carpeta de Google Drive para ${sub.name}`}
                  >
                    <span className="flex items-center gap-2">
                      <FolderOpen className="w-4 h-4 text-amber-400 group-hover/btn:text-slate-950" />
                      <span>Carpeta Google Drive</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100" />
                  </a>

                  {/* YouTube Playlist Link */}
                  <a
                    href={subYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl bg-[#090f2b] hover:bg-rose-600 hover:text-white text-rose-300 border border-rose-500/30 transition text-xs font-bold cursor-pointer group/btn shadow-xs"
                    title={`Ver lista de reproducción de YouTube para ${sub.name}`}
                  >
                    <span className="flex items-center gap-2">
                      <Youtube className="w-4 h-4 text-rose-400 group-hover/btn:text-white" />
                      <span>Videos / Playlist YouTube</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100" />
                  </a>

                  {/* Open Subject Guide */}
                  <button
                    onClick={() => onSelectSubject(sub, 'guide')}
                    className="w-full py-1.5 px-3 rounded-lg bg-[#040715] hover:bg-[#0f1738] text-[11px] text-slate-400 hover:text-cyan-300 transition text-center cursor-pointer border border-indigo-950/60 flex items-center justify-center gap-1.5 mt-1"
                  >
                    <span>Ir a Guía de Estudio</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSubjects.length === 0 && (
          <div className="py-12 text-center text-slate-400 font-mono text-xs">
            No se encontraron materias que coincidan con &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </div>
    </div>
  );
};

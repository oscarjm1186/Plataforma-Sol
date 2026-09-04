import React, { useState } from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  FolderOpen, 
  Youtube,
  Search,
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
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { BookReference, Subject } from '../types';
import { SUBJECTS } from '../data/subjectsData';
import { getSubjectDriveLinks, getSubjectYoutubePlaylist } from '../data/driveLinksData';

interface BooksTabProps {
  subject: Subject;
  books: BookReference[];
  driveUrl?: string;
  onSaveDriveUrl?: (url: string) => void;
  onSelectSubject?: (subject: Subject) => void;
  allSubjects?: Subject[];
}

// Icon helper for subject cards
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

export const BooksTab: React.FC<BooksTabProps> = ({
  subject,
  books,
  driveUrl,
  onSelectSubject,
  allSubjects = SUBJECTS,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterArea, setFilterArea] = useState<'all' | 'tecnologica' | 'basica' | 'humanistica'>('all');

  // Filtered subjects list for the directory
  const filteredSubjects = allSubjects.filter(sub => {
    const matchesSearch = sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          sub.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesArea = filterArea === 'all' || sub.area === filterArea;
    return matchesSearch && matchesArea;
  });

  // Current subject drive links
  const currentDriveLinks = getSubjectDriveLinks(subject.id);
  const currentDriveUrl = driveUrl || currentDriveLinks.mainFolderUrl;
  const currentYoutubeUrl = getSubjectYoutubePlaylist(subject.id);

  return (
    <div className="space-y-8">
      {/* 1. Hero Banner: Biblioteca Digital Centralizada */}
      <div className="bg-[#070b22]/90 border border-indigo-950/90 rounded-3xl p-6 md:p-8 shadow-2xl shadow-[#020512]/60 backdrop-blur-md relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute -right-16 -top-16 w-60 h-60 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
              <FolderOpen className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-heading font-extrabold text-xl md:text-2xl text-white">
                  Biblioteca Digital & Nube de Recursos
                </h2>
                <span className="text-[10px] bg-amber-950/60 text-amber-300 font-mono font-bold px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  11 Materias Sincronizadas
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
                Carpetas de Google Drive oficiales (libros en PDF, guías y apuntes) y listas de reproducción de YouTube clasificadas por materia para el 3er semestre (CECyT 11).
              </p>
            </div>
          </div>

          {/* Quick Access Card for Currently Active Subject */}
          <div className="bg-[#030614] border border-cyan-500/30 rounded-2xl p-4 shrink-0 lg:max-w-md w-full shadow-lg">
            <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-indigo-950">
              <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Materia en vista:
              </span>
              <span className="text-[11px] font-mono font-bold text-white truncate max-w-[200px]">
                {subject.name}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                href={currentDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold transition shadow-md shadow-amber-950/40"
              >
                <FolderOpen className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Abrir Drive</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>

              <a
                href={currentYoutubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold transition shadow-md shadow-rose-950/40"
              >
                <Youtube className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Videos YouTube</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Sección por Materia: Grid de las 11 Materias con Acceso a Drive y Videos */}
      <div className="bg-[#070b22]/90 border border-indigo-950/90 rounded-3xl p-6 md:p-8 shadow-2xl shadow-[#020512]/60 backdrop-blur-md space-y-6">
        {/* Controls: Search and Area Filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-950/80 pb-5">
          <div>
            <h3 className="font-heading font-extrabold text-lg text-white flex items-center gap-2">
              <span>Recursos por Materia</span>
              <span className="text-xs font-mono text-cyan-400 font-normal">
                ({allSubjects.length} Materias Registradas)
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Cada materia cuenta con su acceso a la carpeta de Google Drive y su lista de reproducción en YouTube.
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
                Todas ({allSubjects.length})
              </button>
              <button
                onClick={() => setFilterArea('tecnologica')}
                className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                  filterArea === 'tecnologica' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Construcción ({allSubjects.filter(s => s.area === 'tecnologica').length})
              </button>
              <button
                onClick={() => setFilterArea('basica')}
                className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                  filterArea === 'basica' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Básica ({allSubjects.filter(s => s.area === 'basica').length})
              </button>
              <button
                onClick={() => setFilterArea('humanistica')}
                className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                  filterArea === 'humanistica' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Humanística ({allSubjects.filter(s => s.area === 'humanistica').length})
              </button>
            </div>
          </div>
        </div>

        {/* The Grid: 11 Subject Cards with Drive + YouTube Playlist Access */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSubjects.map((sub) => {
            const isCurrent = sub.id === subject.id;
            const subDrive = getSubjectDriveLinks(sub.id).mainFolderUrl;
            const subYoutube = getSubjectYoutubePlaylist(sub.id);

            return (
              <div
                key={sub.id}
                className={`bg-[#030614] border rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 shadow-md group relative ${
                  isCurrent 
                    ? 'border-cyan-500/60 shadow-cyan-500/10 shadow-lg ring-1 ring-cyan-500/30' 
                    : 'border-indigo-950 hover:border-cyan-500/40 hover:-translate-y-0.5'
                }`}
              >
                {/* Top: Icon + Code + Subject Info */}
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

                    {isCurrent && (
                      <span className="text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/40 px-2 py-0.5 rounded-full shrink-0">
                        Materia Actual
                      </span>
                    )}
                  </div>

                  <h4 className="font-heading font-bold text-sm text-white leading-snug group-hover:text-cyan-300 transition-colors">
                    {sub.name}
                  </h4>

                  <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {sub.description}
                  </p>
                </div>

                {/* Direct Action Buttons: 1. Drive Folder, 2. YouTube Playlist */}
                <div className="mt-5 pt-4 border-t border-indigo-950/80 space-y-2 font-mono">
                  {/* Google Drive Access */}
                  <a
                    href={subDrive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl bg-[#090f2b] hover:bg-amber-500 hover:text-slate-950 text-amber-300 border border-amber-500/30 transition text-xs font-bold cursor-pointer group/btn"
                    title={`Abrir carpeta de Google Drive para ${sub.name}`}
                  >
                    <span className="flex items-center gap-2">
                      <FolderOpen className="w-4 h-4 text-amber-400 group-hover/btn:text-slate-950" />
                      <span>Carpeta Google Drive</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100" />
                  </a>

                  {/* YouTube Videos Playlist Access */}
                  <a
                    href={subYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl bg-[#090f2b] hover:bg-rose-600 hover:text-white text-rose-300 border border-rose-500/30 transition text-xs font-bold cursor-pointer group/btn"
                    title={`Ver lista de reproducción de YouTube para ${sub.name}`}
                  >
                    <span className="flex items-center gap-2">
                      <Youtube className="w-4 h-4 text-rose-400 group-hover/btn:text-white" />
                      <span>Videos / Playlist YouTube</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100" />
                  </a>

                  {/* Quick Select / View Subject details */}
                  {onSelectSubject && !isCurrent && (
                    <button
                      onClick={() => onSelectSubject(sub)}
                      className="w-full py-1.5 px-3 rounded-lg bg-[#040715] hover:bg-[#0f1738] text-[11px] text-slate-400 hover:text-cyan-300 transition text-center cursor-pointer border border-indigo-950/60 flex items-center justify-center gap-1 mt-1"
                    >
                      <span>Ver guías y recursos de esta materia</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
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

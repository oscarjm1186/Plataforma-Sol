import React from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  FolderOpen, 
  Youtube, 
  Download, 
  FileText, 
  Sparkles, 
  ChevronRight,
  BookmarkCheck
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

export const BooksTab: React.FC<BooksTabProps> = ({
  subject,
  books,
  driveUrl,
  onSelectSubject,
  allSubjects = SUBJECTS,
}) => {
  const currentDriveLinks = getSubjectDriveLinks(subject.id);
  const currentDriveUrl = driveUrl || currentDriveLinks.mainFolderUrl;
  const currentYoutubeUrl = getSubjectYoutubePlaylist(subject.id);

  return (
    <div className="space-y-6">
      {/* 1. Header & Direct Sync Action Bar */}
      <div className="bg-[#070b22]/90 border border-cyan-950/80 rounded-3xl p-6 md:p-8 shadow-xl shadow-black/80 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-60 h-60 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
              <FolderOpen className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono uppercase font-bold text-cyan-400">
                  {subject.code} • Bibliografía Oficial
                </span>
                <span className="text-[10px] bg-amber-950/60 text-amber-300 font-mono font-bold px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  {books.length} Libros y Apuntes
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-xl md:text-2xl text-white mt-1">
                Libros y Recursos: {subject.name}
              </h2>
              <p className="text-xs md:text-sm text-[#a6b9cc] mt-1 max-w-2xl leading-relaxed">
                Textos recomendados por el programa de estudios de Técnico en Construcción, apuntes de estudio y accesos directos en la nube.
              </p>
            </div>
          </div>

          {/* Direct Drive & YouTube Access Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
            <a
              href={currentDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold font-mono transition shadow-lg shadow-amber-950/40 cursor-pointer"
            >
              <FolderOpen className="w-4 h-4 shrink-0" />
              <span>Abrir Carpeta en Google Drive</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>

            <a
              href={currentYoutubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold font-mono transition shadow-lg shadow-rose-950/40 cursor-pointer"
            >
              <Youtube className="w-4 h-4 shrink-0" />
              <span>Playlist en YouTube</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Direct Subject Books Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-extrabold text-lg text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <span>Libros de Texto y Manuales Asignados</span>
          </h3>
          <span className="text-xs font-mono text-[#a6b9cc]">
            {books.length} títulos disponibles
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {books.map((book, idx) => (
            <div
              key={book.id || idx}
              className="bg-[#060a18]/90 border border-cyan-950/80 hover:border-amber-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 shadow-lg shadow-black/60 group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                    book.type === 'Básico' 
                      ? 'bg-amber-950/60 text-amber-300 border-amber-500/40'
                      : book.type === 'Apuntes'
                      ? 'bg-cyan-950/60 text-cyan-300 border-cyan-500/40'
                      : 'bg-indigo-950/60 text-indigo-300 border-indigo-500/40'
                  }`}>
                    {book.type} • {book.units || 'Todas las unidades'}
                  </span>

                  {book.year && (
                    <span className="text-[10px] font-mono text-slate-400">
                      Ed. {book.year}
                    </span>
                  )}
                </div>

                <h4 className="font-heading font-bold text-base text-white group-hover:text-amber-300 transition-colors">
                  {book.title}
                </h4>

                <p className="text-xs font-mono text-cyan-300 mt-1 flex items-center gap-1.5">
                  <BookmarkCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{book.authors}</span>
                </p>

                {book.editorial && (
                  <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                    Editorial: <span className="text-slate-300">{book.editorial}</span>
                  </p>
                )}

                <p className="text-xs text-[#a6b9cc] mt-3 leading-relaxed">
                  {book.description}
                </p>

                {book.previewNote && (
                  <div className="mt-3 p-2.5 rounded-xl bg-[#030614] border border-indigo-950/80 text-[11px] font-mono text-amber-200/90 flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{book.previewNote}</span>
                  </div>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-cyan-950/80 flex items-center justify-between gap-3">
                <a
                  href={book.driveUrl || currentDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono font-bold text-amber-300 hover:text-amber-200 transition cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Consultar en Google Drive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={book.driveUrl || currentDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#090f28] hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-mono transition flex items-center gap-1.5 cursor-pointer border border-cyan-950"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Abrir</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Quick Subject Navigation Bar (Clean minimalist switcher instead of repeating full cards) */}
      {onSelectSubject && (
        <div className="bg-[#060a18]/70 border border-cyan-950/80 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-xs font-mono text-[#a6b9cc]">
            <span>Cambiar a los libros de otra materia:</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
            {allSubjects.map(sub => {
              const isSelected = sub.id === subject.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => onSelectSubject(sub)}
                  className={`text-xs font-mono px-3 py-1.5 rounded-xl whitespace-nowrap transition cursor-pointer shrink-0 border ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                      : 'bg-[#090f28] hover:bg-[#121c4a] text-slate-300 border-cyan-950'
                  }`}
                  title={sub.name}
                >
                  {sub.code}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

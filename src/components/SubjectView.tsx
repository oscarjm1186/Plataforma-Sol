import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  Library, 
  Layers, 
  Video, 
  GraduationCap, 
  FolderOpen, 
  Youtube, 
  ChevronRight,
  Sparkles,
  Heart,
  ExternalLink
} from 'lucide-react';
import { Subject, StudyModule, BookReference, Flashcard, VideoLesson, ExamAttemptRecord } from '../types';
import { getSubjectYoutubePlaylist } from '../data/driveLinksData';
import { StudyGuideTab } from './StudyGuideTab';
import { BooksTab } from './BooksTab';
import { FlashcardsTab } from './FlashcardsTab';
import { VideosTab } from './VideosTab';
import { ExamTab } from './ExamTab';

interface SubjectViewProps {
  subject: Subject;
  modules: StudyModule[];
  books: BookReference[];
  flashcards: Flashcard[];
  videos: VideoLesson[];
  completedTopics: string[];
  masteredCards: string[];
  examAttempts: ExamAttemptRecord[];
  driveUrl?: string;
  youtubePlaylistUrl?: string;
  initialTab?: 'guide' | 'books' | 'flashcards' | 'videos' | 'exams';
  onBack: () => void;
  onToggleTopic: (topicId: string) => void;
  onToggleMasteredCard: (cardId: string, mastered: boolean) => void;
  onSaveDriveUrl: (url: string) => void;
  onSavePlaylistUrl: (url: string) => void;
  onAddCustomVideo: (video: VideoLesson) => void;
  onSaveExamAttempt: (attempt: ExamAttemptRecord) => void;
  studentName?: string;
  onSelectSubject?: (subject: Subject) => void;
}

export const SubjectView: React.FC<SubjectViewProps> = ({
  subject,
  modules,
  books,
  flashcards,
  videos,
  completedTopics,
  masteredCards,
  examAttempts,
  driveUrl,
  youtubePlaylistUrl,
  initialTab = 'guide',
  onBack,
  onToggleTopic,
  onToggleMasteredCard,
  onSaveDriveUrl,
  onSavePlaylistUrl,
  onAddCustomVideo,
  onSaveExamAttempt,
  studentName = 'Sol Mariana',
  onSelectSubject
}) => {
  const [activeTab, setActiveTab] = useState<'guide' | 'books' | 'flashcards' | 'videos' | 'exams'>(initialTab);
  const effectiveYoutubeUrl = youtubePlaylistUrl || subject.youtubePlaylistUrl || getSubjectYoutubePlaylist(subject.id);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, subject.id]);

  const tabs = [
    { id: 'guide' as const, label: 'Guía de Estudio', icon: <BookOpen className="w-4 h-4" />, count: modules.length + ' Unidades' },
    { id: 'books' as const, label: 'Libros y Drive', icon: <Library className="w-4 h-4" />, count: books.length + ' Libros' },
    { id: 'flashcards' as const, label: 'Tarjetas de Estudio', icon: <Layers className="w-4 h-4" />, count: flashcards.length + ' Tarjetas' },
    { id: 'videos' as const, label: 'Videos y Clases', icon: <Video className="w-4 h-4" />, count: videos.length + ' Videos' },
    { id: 'exams' as const, label: 'Exámenes (100 Reactivos)', icon: <GraduationCap className="w-4 h-4" />, count: '3 Parciales' },
  ];

  return (
    <div className="space-y-6">
      {/* Breadcrumb & Navigation Back */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <button
            onClick={onBack}
            className="hover:text-cyan-400 flex items-center gap-1.5 transition cursor-pointer text-slate-300"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
            <span>Materias 3° Semestre</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-indigo-800" />
          <span className="text-cyan-300 font-semibold">{subject.name}</span>
        </div>

        {/* Direct quick links to Drive or YouTube if available */}
        <div className="flex items-center gap-2">
          {driveUrl && (
            <a
              href={driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-[#070b22] hover:bg-[#0c1236] text-amber-300 border border-amber-500/40 font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition shadow-sm font-mono cursor-pointer"
              title={`Abrir carpeta de Google Drive para ${subject.name}`}
            >
              <FolderOpen className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Drive de la Materia</span>
            </a>
          )}
          {effectiveYoutubeUrl && (
            <a
              href={effectiveYoutubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-[#070b22] hover:bg-rose-950/80 text-rose-300 hover:text-white border border-rose-500/40 font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition shadow-sm font-mono cursor-pointer"
              title={`Abrir lista de reproducción de YouTube para ${subject.name}`}
            >
              <Youtube className="w-3.5 h-3.5 text-rose-400" />
              <span>Playlist YouTube</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          )}
        </div>
      </div>

      {/* Subject Hero Space Lab Card */}
      <div className="bg-[#070b22]/90 rounded-3xl border border-indigo-950/90 p-6 md:p-8 shadow-2xl shadow-[#020512]/60 relative overflow-hidden backdrop-blur-md">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Accent color bar */}
        <div 
          className="absolute top-0 left-0 right-0 h-1.5"
          style={{ backgroundColor: subject.color }}
        />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-[#030614] text-cyan-300 border border-indigo-950">
                {subject.code}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-950/60 text-cyan-300 border border-cyan-500/30">
                {subject.area}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {subject.hoursPerWeek} hrs/semana
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-2xl md:text-3xl text-white tracking-tight">
              {subject.name}
            </h1>

            <p className="text-xs md:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <strong className="text-white">Competencia General:</strong> {subject.competence}
            </p>
          </div>

          <div className="flex flex-row md:flex-col items-end justify-between md:justify-center gap-2 shrink-0 relative z-10">
            <div className="text-right">
              <span className="text-[11px] text-cyan-400 font-mono block">3er Semestre</span>
              <span className="text-xs font-bold text-slate-300">Técnico en Construcción</span>
            </div>
            <div className="text-right text-[11px] text-amber-400 font-mono font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Material Curricular Completo</span>
            </div>
          </div>
        </div>

        {/* 5 Main Interactive Navigation Tabs */}
        <div className="mt-8 pt-4 border-t border-indigo-950/80 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar relative z-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/25 font-black'
                    : 'bg-[#0b102b] hover:bg-[#121a42] text-slate-300 border border-indigo-950'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-normal ${
                  isActive ? 'bg-slate-950/20 text-slate-950 font-bold' : 'bg-[#040715] text-slate-400 border border-indigo-950'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Tab Content */}
      <div className="transition-all duration-300">
        {activeTab === 'guide' && (
          <StudyGuideTab
            subject={subject}
            modules={modules}
            completedTopics={completedTopics}
            onToggleTopic={onToggleTopic}
          />
        )}

        {activeTab === 'books' && (
          <BooksTab
            subject={subject}
            books={books}
            driveUrl={driveUrl}
            onSaveDriveUrl={onSaveDriveUrl}
            onSelectSubject={onSelectSubject}
          />
        )}

        {activeTab === 'flashcards' && (
          <FlashcardsTab
            subject={subject}
            flashcards={flashcards}
            masteredCardIds={masteredCards}
            onToggleMastered={onToggleMasteredCard}
          />
        )}

        {activeTab === 'videos' && (
          <VideosTab
            subject={subject}
            videos={videos}
            customPlaylistUrl={effectiveYoutubeUrl}
          />
        )}

        {activeTab === 'exams' && (
          <ExamTab
            subject={subject}
            examAttempts={examAttempts}
            onSaveAttempt={onSaveExamAttempt}
            studentName={studentName}
          />
        )}
      </div>
    </div>
  );
};

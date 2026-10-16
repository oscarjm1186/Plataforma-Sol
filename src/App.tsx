import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Sparkles, 
  HardHat, 
  BookOpen, 
  GraduationCap, 
  Layers, 
  Heart, 
  CheckCircle2, 
  Search, 
  Orbit,
  Telescope,
  Radio,
  Compass,
  Satellite,
  User,
  Edit3,
  RotateCcw
} from 'lucide-react';
import { Subject, StudyModule, BookReference, Flashcard, VideoLesson, ExamAttemptRecord } from './types';
import { SUBJECTS } from './data/subjectsData';
import { ALL_GUIDES_DATA } from './data/guidesData';
import { BOOKS_DATA } from './data/booksData';
import { FLASHCARDS_DATA, FLASHCARDS_BY_SUBJECT } from './data/flashcardsData';
import { DEFAULT_VIDEOS_DATA } from './data/videosData';
import { 
  getCompletedTopics, 
  toggleTopicCompletion, 
  getMasteredFlashcards, 
  setFlashcardMastered, 
  getDriveLinks, 
  saveDriveLink, 
  getYoutubePlaylists, 
  saveYoutubePlaylist, 
  getCustomVideos, 
  saveCustomVideo, 
  getExamAttempts, 
  saveExamAttempt,
  getStudentName,
  saveStudentName,
  DEFAULT_STUDENT_NAME
} from './utils/storage';
import { getSubjectYoutubePlaylist } from './data/driveLinksData';

import { Navbar } from './components/Navbar';
import { SubjectCard } from './components/SubjectCard';
import { SubjectView } from './components/SubjectView';
import { DigitalLibraryView } from './components/DigitalLibraryView';
import { FlashcardsHubView } from './components/FlashcardsHubView';
import { SpaceCanvasBackground } from './components/SpaceCanvasBackground';
import { StudentNameModal } from './components/StudentNameModal';

export const App: React.FC = () => {
  // Navigation & selection
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [activeMainView, setActiveMainView] = useState<'home' | 'library' | 'flashcards'>('home');
  const [initialTab, setInitialTab] = useState<'guide' | 'books' | 'flashcards' | 'videos' | 'exams'>('guide');
  const [filterArea, setFilterArea] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Student personalization state
  const [studentName, setStudentName] = useState<string>(() => getStudentName());
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [isEditingNameInline, setIsEditingNameInline] = useState(false);
  const [inlineNameInput, setInlineNameInput] = useState(() => getStudentName());

  // Persistent user state
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [masteredCards, setMasteredCards] = useState<string[]>([]);
  const [driveLinks, setDriveLinks] = useState<{ [subjectId: string]: string }>({});
  const [youtubePlaylists, setYoutubePlaylists] = useState<{ [subjectId: string]: string }>({});
  const [customVideos, setCustomVideos] = useState<VideoLesson[]>([]);
  const [examAttempts, setExamAttempts] = useState<ExamAttemptRecord[]>([]);

  // Load from local storage on mount
  const reloadData = () => {
    setStudentName(getStudentName());
    setCompletedTopics(getCompletedTopics());
    setMasteredCards(getMasteredFlashcards());
    setDriveLinks(getDriveLinks());
    setYoutubePlaylists(getYoutubePlaylists());
    setCustomVideos(getCustomVideos());
    setExamAttempts(getExamAttempts());
  };

  useEffect(() => {
    reloadData();
  }, []);

  // Handlers for student name updates
  const handleUpdateStudentName = (newName: string) => {
    saveStudentName(newName);
    const updated = getStudentName();
    setStudentName(updated);
    setInlineNameInput(updated);
    setIsEditingNameInline(false);
  };

  const isSol = studentName.trim().toLowerCase().includes('sol');

  // Handlers for data updates
  const handleToggleTopic = (topicId: string) => {
    toggleTopicCompletion(topicId);
    setCompletedTopics(getCompletedTopics());
  };

  const handleToggleMasteredCard = (cardId: string, mastered: boolean) => {
    setFlashcardMastered(cardId, mastered);
    setMasteredCards(getMasteredFlashcards());
  };

  const handleSaveDriveLink = (subjectId: string, url: string) => {
    saveDriveLink(subjectId, url);
    setDriveLinks(getDriveLinks());
  };

  const handleSaveYoutubePlaylist = (subjectId: string, url: string) => {
    saveYoutubePlaylist(subjectId, url);
    setYoutubePlaylists(getYoutubePlaylists());
  };

  const handleAddCustomVideo = (video: VideoLesson) => {
    saveCustomVideo(video);
    setCustomVideos(getCustomVideos());
  };

  const handleSaveExamAttempt = (attempt: ExamAttemptRecord) => {
    saveExamAttempt(attempt);
    setExamAttempts(getExamAttempts());
  };

  const handleSelectSubject = (subject: Subject | null, tab: 'guide' | 'books' | 'flashcards' | 'videos' | 'exams' = 'guide') => {
    setSelectedSubject(subject);
    setActiveMainView('home');
    setInitialTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLibrary = () => {
    setSelectedSubject(null);
    setActiveMainView('library');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenFlashcards = () => {
    setSelectedSubject(null);
    setActiveMainView('flashcards');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Compute total topics across all subjects
  let totalTopicsAcrossAllSubjects = 0;
  Object.values(ALL_GUIDES_DATA).forEach(modules => {
    modules.forEach(m => {
      totalTopicsAcrossAllSubjects += m.topics.length;
    });
  });

  // Filter subjects for the home grid
  const filteredSubjects = SUBJECTS.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          s.code.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;
    if (filterArea === 'all') return true;
    if (filterArea === 'construccion') return s.area === 'tecnologica' || s.areaLabel.includes('Construcción');
    if (filterArea === 'basica') return s.area === 'basica';
    if (filterArea === 'humanistica') return s.area === 'humanistica';
    return true;
  });

  // Prepare current subject data
  const currentModules = selectedSubject ? (ALL_GUIDES_DATA[selectedSubject.id] || []) : [];
  const currentBooks = selectedSubject ? (BOOKS_DATA[selectedSubject.id] || []) : [];
  const currentFlashcards = selectedSubject ? (FLASHCARDS_BY_SUBJECT[selectedSubject.id] || FLASHCARDS_DATA.filter(f => f.subjectId === selectedSubject.id)) : [];
  const currentVideos = selectedSubject ? [
    ...DEFAULT_VIDEOS_DATA.filter(v => v.subjectId === selectedSubject.id),
    ...customVideos.filter(v => v.subjectId === selectedSubject.id)
  ] : [];

  return (
    <div className="min-h-screen bg-[#050609] text-slate-200 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      {/* Interactive Space Background Canvas */}
      <SpaceCanvasBackground />

      {/* Navigation Header */}
      <Navbar
        subjects={SUBJECTS}
        selectedSubject={selectedSubject}
        activeMainView={activeMainView}
        onSelectSubject={(s) => handleSelectSubject(s)}
        onNavigateView={(view) => {
          setSelectedSubject(null);
          setActiveMainView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        completedTopicsCount={completedTopics.length}
        totalTopicsCount={totalTopicsAcrossAllSubjects}
        studentName={studentName}
        onOpenNameModal={() => setIsNameModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        {selectedSubject ? (
          <SubjectView
            subject={selectedSubject}
            modules={currentModules}
            books={currentBooks}
            flashcards={currentFlashcards}
            videos={currentVideos}
            completedTopics={completedTopics}
            masteredCards={masteredCards}
            examAttempts={examAttempts.filter(a => a.subjectId === selectedSubject.id)}
            driveUrl={driveLinks[selectedSubject.id]}
            youtubePlaylistUrl={youtubePlaylists[selectedSubject.id] || selectedSubject.youtubePlaylistUrl || getSubjectYoutubePlaylist(selectedSubject.id)}
            initialTab={initialTab}
            onBack={() => setSelectedSubject(null)}
            onToggleTopic={handleToggleTopic}
            onToggleMasteredCard={handleToggleMasteredCard}
            onSaveDriveUrl={(url) => handleSaveDriveLink(selectedSubject.id, url)}
            onSavePlaylistUrl={(url) => handleSaveYoutubePlaylist(selectedSubject.id, url)}
            onAddCustomVideo={handleAddCustomVideo}
            onSaveExamAttempt={handleSaveExamAttempt}
            studentName={studentName}
            onSelectSubject={(sub) => handleSelectSubject(sub, 'books')}
          />
        ) : activeMainView === 'library' ? (
          <DigitalLibraryView
            onBackToHome={() => {
              setActiveMainView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectSubject={(sub, tab) => handleSelectSubject(sub, tab || 'guide')}
            subjects={SUBJECTS}
          />
        ) : activeMainView === 'flashcards' ? (
          <FlashcardsHubView
            onBackToHome={() => {
              setActiveMainView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectSubjectForFlashcards={(sub) => handleSelectSubject(sub, 'flashcards')}
            masteredCards={masteredCards}
            subjects={SUBJECTS}
          />
        ) : (
          /* HOME DASHBOARD - SPACE LAB BENTO GRID LAYOUT */
          <div className="space-y-8">
            {/* Minimalist, Clean & Intuitive Home Header */}
            <div className="bg-[#060a18]/85 border border-cyan-950/80 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl shadow-black/80 backdrop-blur-xl">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
              <div className="absolute -left-12 -top-12 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                    <Satellite className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Técnico en Construcción</span>
                  </div>

                  {/* Quick Button: Cambiar Estudiante */}
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditingNameInline(prev => !prev);
                      setInlineNameInput(studentName);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 hover:text-cyan-200 border border-cyan-500/40 hover:border-cyan-400 transition cursor-pointer"
                    title="Haz clic para personalizar tu nombre"
                  >
                    <User className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{isSol ? 'No soy Sol' : `Estudiante: ${studentName}`}</span>
                    <Edit3 className="w-3 h-3 text-cyan-400/80" />
                  </button>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-heading font-extrabold tracking-tight text-white">
                      {isSol ? '¡Hola Sol!' : `¡Hola, ${studentName}!`}
                    </h1>
                    <p className="text-xs md:text-sm text-[#a6b9cc] mt-1 max-w-2xl leading-relaxed">
                      Criatura, diseñé esta plataforma para que te apoyes a estudiar, cada materia tiene una lista de reproducción de Youtube, un link a una carpeta de Google Drive con libros de cada materia, exámenes parciales de práctica y tarjetas interactivas de repaso que te serán de mucha ayuda. ¡Aprovéchala!
                    </p>
                  </div>

                  {/* Global Progress Pill */}
                  <div className="bg-[#030614] border border-cyan-950 p-3.5 rounded-2xl shrink-0 min-w-[220px]">
                    <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                      <span className="text-[#a6b9cc]">Avance global:</span>
                      <span className="text-cyan-300 font-bold">
                        {totalTopicsAcrossAllSubjects > 0 
                          ? Math.round((completedTopics.length / totalTopicsAcrossAllSubjects) * 100) 
                          : 0}%
                      </span>
                    </div>
                    <div className="w-full bg-[#070b22] h-2 rounded-full overflow-hidden border border-indigo-950">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-400 h-full rounded-full transition-all duration-500"
                        style={{ 
                          width: `${totalTopicsAcrossAllSubjects > 0 ? (completedTopics.length / totalTopicsAcrossAllSubjects) * 100 : 0}%` 
                        }}
                      />
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono mt-1 text-right">
                      {completedTopics.length} de {totalTopicsAcrossAllSubjects} temas dominados
                    </div>
                  </div>
                </div>

                {/* Inline Name Editor */}
                {isEditingNameInline && (
                  <div className="bg-[#030614] border border-cyan-500/40 rounded-2xl p-4 shadow-xl space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-cyan-400" />
                        Escribe tu nombre para personalizar la plataforma:
                      </span>
                      {!isSol && (
                        <button
                          type="button"
                          onClick={() => handleUpdateStudentName(DEFAULT_STUDENT_NAME)}
                          className="text-[11px] font-mono text-amber-300 hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <RotateCcw className="w-3 h-3" />
                          Restablecer a Sol Mariana
                        </button>
                      )}
                    </div>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (inlineNameInput.trim()) {
                          handleUpdateStudentName(inlineNameInput.trim());
                        }
                      }}
                      className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
                    >
                      <input
                        type="text"
                        value={inlineNameInput}
                        onChange={(e) => setInlineNameInput(e.target.value)}
                        placeholder="Escribe tu nombre y apellido..."
                        className="flex-1 bg-[#070c22] border border-cyan-900/80 focus:border-cyan-400 text-white px-3.5 py-2 rounded-xl text-xs font-medium focus:outline-none focus:ring-1 focus:ring-cyan-400"
                        autoFocus
                        required
                      />
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setIsEditingNameInline(false)}
                          className="px-3 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 cursor-pointer"
                        >
                          Cancelar
                        </button>
                        <button
                          type="submit"
                          disabled={!inlineNameInput.trim()}
                          className="px-4 py-2 rounded-xl text-xs font-mono font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 disabled:opacity-50 cursor-pointer shadow-md shadow-cyan-500/20"
                        >
                          Actualizar
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Quick Indicators Strip */}
                <div className="pt-2 border-t border-cyan-950/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-mono">
                  <div className="bg-[#030612]/60 p-2 rounded-xl border border-cyan-950/60">
                    <span className="text-white font-bold text-sm block">11</span>
                    <span className="text-slate-400 text-[11px]">Materias Curriculares</span>
                  </div>
                  <div className="bg-[#030612]/60 p-2 rounded-xl border border-cyan-950/60">
                    <span className="text-cyan-300 font-bold text-sm block">550</span>
                    <span className="text-slate-400 text-[11px]">Tarjetas (50 por materia)</span>
                  </div>
                  <div className="bg-[#030612]/60 p-2 rounded-xl border border-cyan-950/60">
                    <span className="text-amber-300 font-bold text-sm block">33</span>
                    <span className="text-slate-400 text-[11px]">Exámenes (3 Parciales)</span>
                  </div>
                  <div className="bg-[#030612]/60 p-2 rounded-xl border border-cyan-950/60">
                    <span className="text-emerald-400 font-bold text-sm block">Drive</span>
                    <span className="text-slate-400 text-[11px]">Bibliografía Oficial</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter and Search Bar (Technical Pill Bar) */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#060a18]/85 p-4 rounded-2xl border border-cyan-950/80 shadow-xl shadow-black/80 backdrop-blur-xl">
              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 no-scrollbar font-mono text-xs">
                <button
                  onClick={() => setFilterArea('all')}
                  className={`px-3.5 py-1.5 rounded-xl font-bold transition cursor-pointer shrink-0 ${
                    filterArea === 'all'
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-[#090f28] hover:bg-[#0f183d] text-[#a6b9cc] border border-cyan-950'
                  }`}
                >
                  Todas las Materias ({SUBJECTS.length})
                </button>
                <button
                  onClick={() => setFilterArea('construccion')}
                  className={`px-3.5 py-1.5 rounded-xl font-bold transition cursor-pointer shrink-0 ${
                    filterArea === 'construccion'
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-[#090f28] hover:bg-[#0f183d] text-[#a6b9cc] border border-cyan-950'
                  }`}
                >
                  Construcción ({SUBJECTS.filter(s => s.area === 'tecnologica').length})
                </button>
                <button
                  onClick={() => setFilterArea('basica')}
                  className={`px-3.5 py-1.5 rounded-xl font-bold transition cursor-pointer shrink-0 ${
                    filterArea === 'basica'
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-[#090f28] hover:bg-[#0f183d] text-[#a6b9cc] border border-cyan-950'
                  }`}
                >
                  Científica y Básica ({SUBJECTS.filter(s => s.area === 'basica').length})
                </button>
                <button
                  onClick={() => setFilterArea('humanistica')}
                  className={`px-3.5 py-1.5 rounded-xl font-bold transition cursor-pointer shrink-0 ${
                    filterArea === 'humanistica'
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-[#090f28] hover:bg-[#0f183d] text-[#a6b9cc] border border-cyan-950'
                  }`}
                >
                  Humanística ({SUBJECTS.filter(s => s.area === 'humanistica').length})
                </button>
              </div>

              {/* Search input */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-cyan-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar materia o clave..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full text-xs pl-9 pr-3 py-2 bg-[#030612] border border-cyan-950 text-slate-200 placeholder-slate-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-cyan-500 transition font-mono"
                />
              </div>
            </div>

            {/* Subjects Grid (Space Lab Cards) */}
            <div id="materias-grid" className="scroll-mt-24">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Orbit className="w-5 h-5 text-cyan-400" />
                  <h2 className="font-heading font-extrabold text-xl text-white">
                    Materias del 3er Semestre
                  </h2>
                </div>
                <span className="text-xs text-[#a6b9cc] font-mono">
                  {filteredSubjects.length} de {SUBJECTS.length} materias
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSubjects.map(subject => {
                  const subModules = ALL_GUIDES_DATA[subject.id] || [];
                  let subTotalTopics = 0;
                  subModules.forEach(m => subTotalTopics += m.topics.length);
                  const subCompletedTopics = subModules.flatMap(m => m.topics).filter(t => completedTopics.includes(t.id)).length;

                  return (
                    <SubjectCard
                      key={subject.id}
                      subject={subject}
                      onSelect={(sub, tab) => handleSelectSubject(sub, tab)}
                      completedTopicsCount={subCompletedTopics}
                      totalTopicsCount={subTotalTopics}
                      driveLink={driveLinks[subject.id]}
                      youtubePlaylistUrl={youtubePlaylists[subject.id] || subject.youtubePlaylistUrl || getSubjectYoutubePlaylist(subject.id)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-cyan-950/80 bg-[#030409] py-6 mt-12 text-center text-xs text-[#a6b9cc]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center font-mono">
          <span>Desarrollado por Oscar Jimenez</span>
        </div>
      </footer>

      {/* Student Personalization Modal */}
      <StudentNameModal
        isOpen={isNameModalOpen}
        currentName={studentName}
        onClose={() => setIsNameModalOpen(false)}
        onUpdateName={handleUpdateStudentName}
      />
    </div>
  );
};

export default App;

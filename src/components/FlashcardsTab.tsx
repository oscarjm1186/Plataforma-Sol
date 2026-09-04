import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  RotateCw, 
  CheckCircle2, 
  Circle, 
  Volume2, 
  VolumeX, 
  ChevronLeft, 
  ChevronRight, 
  Shuffle, 
  Plus, 
  Sparkles, 
  Lightbulb, 
  Calculator,
  LayoutGrid,
  Maximize2
} from 'lucide-react';
import { Flashcard, Subject } from '../types';

interface FlashcardsTabProps {
  subject: Subject;
  flashcards: Flashcard[];
  masteredCardIds: string[];
  onToggleMastered: (cardId: string, mastered: boolean) => void;
  onAddCustomCard?: (card: Flashcard) => void;
}

export const FlashcardsTab: React.FC<FlashcardsTabProps> = ({
  subject,
  flashcards,
  masteredCardIds,
  onToggleMastered,
  onAddCustomCard
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filterMode, setFilterMode] = useState<'all' | 'needs_review' | 'mastered'>('all');
  const [viewMode, setViewMode] = useState<'single' | 'grid'>('single');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [cardsList, setCardsList] = useState<Flashcard[]>(flashcards);

  // Synchronize cards when prop changes
  useEffect(() => {
    setCardsList(flashcards);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [flashcards]);

  // Filter cards based on filterMode
  const filteredCards = cardsList.filter(card => {
    const isMastered = masteredCardIds.includes(card.id);
    if (filterMode === 'mastered') return isMastered;
    if (filterMode === 'needs_review') return !isMastered;
    return true;
  });

  const activeCard = filteredCards[currentIndex] || filteredCards[0];

  // Flip card
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Previous card
  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : filteredCards.length - 1));
  };

  // Next card
  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev < filteredCards.length - 1 ? prev + 1 : 0));
  };

  // Shuffle cards
  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...cardsList].sort(() => Math.random() - 0.5);
    setCardsList(shuffled);
    setCurrentIndex(0);
  };

  // Audio speech synthesis (read card aloud in Spanish)
  const handleSpeak = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-MX';
    utterance.rate = 0.95;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  if (filteredCards.length === 0) {
    return (
      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-12 text-center shadow-xl shadow-black/40">
        <Layers className="w-12 h-12 text-slate-600 mx-auto mb-3" />
        <h3 className="font-heading font-extrabold text-white text-base">
          No hay tarjetas con el filtro seleccionado
        </h3>
        <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
          {filterMode === 'mastered' 
            ? 'Aún no has marcado ninguna tarjeta como dominada. ¡Comienza a repasar!'
            : '¡Felicidades! Has dominado todas las tarjetas disponibles en esta materia.'}
        </p>
        <button
          onClick={() => setFilterMode('all')}
          className="mt-4 px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs font-bold transition shadow-md shadow-orange-950/50 cursor-pointer"
        >
          Ver todas las tarjetas
        </button>
      </div>
    );
  }

  const isCurrentMastered = activeCard ? masteredCardIds.includes(activeCard.id) : false;

  return (
    <div className="space-y-6">
      {/* Header and Controls Space Bento Card */}
      <div className="bg-[#070b22]/90 rounded-3xl border border-indigo-950/90 p-5 shadow-2xl shadow-[#020512]/60 flex flex-wrap items-center justify-between gap-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-sm text-white flex items-center gap-2">
              <span>Tarjetas de Estudio y Repaso</span>
              <span className="text-[10px] bg-cyan-950/50 text-cyan-300 border border-cyan-500/30 font-mono font-bold px-2.5 py-0.5 rounded-full">
                Repaso Activo
              </span>
            </h3>
            <p className="text-[11px] text-slate-400 font-mono">
              Haz clic sobre la tarjeta o presiona espacio para voltear la respuesta.
            </p>
          </div>
        </div>

        {/* View and Filter mode toggles */}
        <div className="flex items-center gap-2">
          {/* Filter Pills */}
          <div className="flex items-center bg-[#030614] p-1 rounded-2xl border border-indigo-950 text-xs font-mono">
            <button
              onClick={() => { setFilterMode('all'); setCurrentIndex(0); setIsFlipped(false); }}
              className={`px-3 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                filterMode === 'all' ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Todas ({cardsList.length})
            </button>
            <button
              onClick={() => { setFilterMode('needs_review'); setCurrentIndex(0); setIsFlipped(false); }}
              className={`px-3 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                filterMode === 'needs_review' ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Por repasar ({cardsList.length - masteredCardIds.filter(id => cardsList.some(c => c.id === id)).length})
            </button>
            <button
              onClick={() => { setFilterMode('mastered'); setCurrentIndex(0); setIsFlipped(false); }}
              className={`px-3 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                filterMode === 'mastered' ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Dominadas ({masteredCardIds.filter(id => cardsList.some(c => c.id === id)).length})
            </button>
          </div>

          <button
            onClick={handleShuffle}
            title="Barajar tarjetas al azar"
            className="p-2.5 rounded-xl border border-indigo-950 bg-[#0b102b] hover:bg-[#121a42] text-cyan-300 transition cursor-pointer"
          >
            <Shuffle className="w-4 h-4" />
          </button>

          <button
            onClick={() => setViewMode(viewMode === 'single' ? 'grid' : 'single')}
            title={viewMode === 'single' ? 'Ver en cuadrícula' : 'Ver tarjeta individual'}
            className="p-2.5 rounded-xl border border-indigo-950 bg-[#0b102b] hover:bg-[#121a42] text-cyan-300 transition cursor-pointer"
          >
            {viewMode === 'single' ? <LayoutGrid className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* View Mode: Single Interactive 3D Card */}
      {viewMode === 'single' && activeCard && (
        <div className="max-w-2xl mx-auto space-y-4">
          {/* Card Meta bar */}
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono px-2">
            <span>
              Tarjeta <strong className="text-cyan-300">{currentIndex + 1}</strong> de <strong className="text-white">{filteredCards.length}</strong>
            </span>
            <span className="bg-[#070b22] border border-indigo-950 px-3 py-1 rounded-full text-cyan-300 font-semibold">
              {activeCard.category}
            </span>
            <span>
              {isCurrentMastered ? (
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Dominada
                </span>
              ) : (
                <span className="text-amber-400 font-bold flex items-center gap-1">
                  <Circle className="w-3.5 h-3.5" /> En repaso
                </span>
              )}
            </span>
          </div>

          {/* 3D Flip Card Container */}
          <div 
            className="perspective-1000 w-full min-h-[340px] cursor-pointer select-none"
            onClick={handleFlip}
          >
            <div 
              className={`relative w-full h-full min-h-[340px] rounded-3xl transition-transform duration-500 transform-style-preserve-3d shadow-2xl shadow-[#020512]/70 ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* FRONT SIDE (Question / Prompt) */}
              <div className="absolute inset-0 w-full h-full bg-[#070b22]/95 border border-indigo-950/90 rounded-3xl p-8 flex flex-col justify-between backface-hidden backdrop-blur-md">
                <div>
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="font-mono font-bold text-cyan-400 uppercase tracking-wider text-[11px]">
                      Concepto Clave / Cuestionamiento
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSpeak(activeCard.front);
                      }}
                      title="Escuchar en voz alta"
                      className="p-2 rounded-full hover:bg-white/10 text-cyan-400 transition cursor-pointer"
                    >
                      {isSpeaking ? <VolumeX className="w-4 h-4 text-cyan-400" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>

                  <h2 className="text-xl md:text-2xl font-heading font-extrabold text-white leading-snug">
                    {activeCard.front}
                  </h2>
                </div>

                <div className="pt-4 border-t border-indigo-950 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1 text-cyan-300">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Haz clic para revelar el desarrollo oficial
                  </span>
                  <RotateCw className="w-4 h-4 text-slate-500" />
                </div>
              </div>

              {/* BACK SIDE (Answer / Explanation / Formula / Memory Tip) */}
              <div className="absolute inset-0 w-full h-full bg-[#030614] text-white border border-cyan-500/40 rounded-3xl p-8 flex flex-col justify-between backface-hidden rotate-y-180 overflow-y-auto">
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-mono font-bold text-cyan-300 uppercase tracking-wider text-[11px] flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      Respuesta & Síntesis Mnemotécnica
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSpeak(activeCard.back);
                      }}
                      title="Escuchar respuesta"
                      className="p-2 rounded-full hover:bg-white/10 text-cyan-300 transition cursor-pointer"
                    >
                      {isSpeaking ? <VolumeX className="w-4 h-4 text-cyan-300" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>

                  <p className="text-sm md:text-base font-normal text-slate-200 leading-relaxed whitespace-pre-line">
                    {activeCard.back}
                  </p>

                  {/* Formula if available */}
                  {activeCard.formula && (
                    <div className="mt-3 p-3 rounded-xl bg-[#070b22] border border-indigo-950 text-amber-300 font-mono text-xs flex items-center gap-2">
                      <Calculator className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{activeCard.formula}</span>
                    </div>
                  )}

                  {/* Tip */}
                  {activeCard.tip && (
                    <div className="mt-3 p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-200 text-xs flex items-start gap-2 font-mono">
                      <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Tip Mnemotécnico:</strong> {activeCard.tip}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-indigo-950 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Haz clic para voltear nuevamente</span>
                  <RotateCw className="w-4 h-4 text-slate-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation and Mastery Buttons */}
          <div className="flex items-center justify-between gap-3 pt-2 font-mono">
            <button
              onClick={handlePrev}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#070b22] hover:bg-[#0e1642] border border-indigo-950 text-xs font-bold text-slate-200 transition cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-4 h-4 text-cyan-400" />
              <span>Anterior</span>
            </button>

            {/* Mastery Toggles */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleMastered(activeCard.id, false)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  !isCurrentMastered
                    ? 'bg-amber-950/50 text-amber-300 border border-amber-500/30'
                    : 'bg-[#070b22] border border-indigo-950 text-slate-400 hover:bg-[#0e1642]'
                }`}
              >
                Repasar de nuevo
              </button>
              <button
                onClick={() => onToggleMastered(activeCard.id, true)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  isCurrentMastered
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-black shadow-md shadow-emerald-950/50'
                    : 'bg-[#070b22] border border-indigo-950 text-slate-200 hover:bg-emerald-600 hover:text-white'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>¡Ya lo dominé!</span>
              </button>
            </div>

            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#070b22] hover:bg-[#0e1642] border border-indigo-950 text-xs font-bold text-slate-200 transition cursor-pointer shadow-md"
            >
              <span>Siguiente</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>
      )}

      {/* View Mode: Grid of all cards */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCards.map((card, idx) => {
            const isMastered = masteredCardIds.includes(card.id);
            return (
              <div
                key={card.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setViewMode('single');
                  setIsFlipped(false);
                }}
                className="bg-[#070b22]/90 border border-indigo-950/90 hover:border-cyan-500/40 rounded-3xl p-6 shadow-xl shadow-[#020512]/60 cursor-pointer hover:shadow-2xl transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3 font-mono">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-950/50 text-cyan-300 border border-cyan-500/30">
                      {card.category}
                    </span>
                    {isMastered ? (
                      <span className="text-emerald-400 text-[11px] font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Dominada
                      </span>
                    ) : (
                      <span className="text-amber-400 text-[11px] font-medium flex items-center gap-1">
                        <Circle className="w-3.5 h-3.5" /> Repasar
                      </span>
                    )}
                  </div>
                  <h4 className="font-heading font-extrabold text-sm text-white leading-snug line-clamp-3">
                    {card.front}
                  </h4>
                </div>
                <div className="mt-5 pt-3 border-t border-indigo-950 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Holograma #{idx + 1}</span>
                  <span className="text-cyan-300 font-bold">Ver respuesta →</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

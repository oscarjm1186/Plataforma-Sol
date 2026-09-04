import React, { useState, useEffect } from 'react';
import { X, User, Check, RotateCcw, Sparkles } from 'lucide-react';
import { DEFAULT_STUDENT_NAME } from '../utils/storage';

interface StudentNameModalProps {
  isOpen: boolean;
  currentName: string;
  onClose: () => void;
  onUpdateName: (newName: string) => void;
}

export const StudentNameModal: React.FC<StudentNameModalProps> = ({
  isOpen,
  currentName,
  onClose,
  onUpdateName,
}) => {
  const [inputName, setInputName] = useState(currentName);
  const [hasSaved, setHasSaved] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setInputName(currentName);
      setHasSaved(false);
    }
  }, [isOpen, currentName]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputName.trim();
    if (trimmed) {
      onUpdateName(trimmed);
      setHasSaved(true);
      setTimeout(() => {
        onClose();
      }, 700);
    }
  };

  const handleReset = () => {
    onUpdateName(DEFAULT_STUDENT_NAME);
    setInputName(DEFAULT_STUDENT_NAME);
    setHasSaved(true);
    setTimeout(() => {
      onClose();
    }, 700);
  };

  const isCustomized = currentName.trim().toLowerCase() !== DEFAULT_STUDENT_NAME.toLowerCase();

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-[#070b1e] border border-cyan-500/30 rounded-3xl max-w-md w-full p-6 shadow-2xl shadow-black/90 overflow-hidden relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-indigo-950/80 pb-3 mb-4 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-sm text-white flex items-center gap-1.5">
                <span>Personalizar Estudiante</span>
                <span className="text-[10px] bg-amber-950/50 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30 font-mono">
                  CECyT 11
                </span>
              </h3>
              <p className="text-[11px] text-[#a6b9cc]">
                ¿No eres Sol? Escribe tu nombre para actualizar la plataforma.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4 text-xs relative z-10">
          <p className="text-slate-300 leading-relaxed bg-[#030614] p-3.5 rounded-2xl border border-indigo-950">
            Sol Mariana preparó esta plataforma para el <strong>3er Semestre de Técnico en Construcción</strong> y la comparte contigo. Al escribir tu nombre, los saludos, bitácoras y resultados de exámenes se personalizarán para ti.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="student-name-input" className="block text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider mb-1.5">
                Nombre del Estudiante:
              </label>
              <div className="relative">
                <input
                  id="student-name-input"
                  type="text"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  placeholder="Ej. Carlos Méndez, Valeria..."
                  className="w-full bg-[#030614] border border-cyan-900/60 focus:border-cyan-400 text-white px-3.5 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 transition placeholder:text-slate-600 font-medium"
                  autoFocus
                  required
                />
              </div>
            </div>

            {hasSaved && (
              <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 flex items-center gap-2 text-[11px] font-mono">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>¡Nombre actualizado con éxito!</span>
              </div>
            )}

            <div className="flex items-center justify-between gap-2 pt-1">
              {isCustomized ? (
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-[11px] font-mono text-amber-300/90 hover:text-amber-200 underline cursor-pointer p-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Restablecer a Sol Mariana</span>
                </button>
              ) : (
                <span className="text-[11px] text-slate-500 font-mono">
                  Por defecto: Sol Mariana
                </span>
              )}

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3 py-2 rounded-xl text-xs text-slate-400 hover:text-white hover:bg-slate-800/60 transition cursor-pointer font-mono"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={!inputName.trim()}
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 disabled:opacity-50 text-slate-950 text-xs font-bold px-4 py-2 rounded-xl shadow-lg shadow-cyan-500/20 transition cursor-pointer font-mono"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Actualizar</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

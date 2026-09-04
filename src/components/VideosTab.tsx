import React, { useState } from 'react';
import { 
  Video, 
  ExternalLink, 
  Heart, 
  Youtube, 
  Clock, 
  User, 
  CheckCircle2,
  Tv
} from 'lucide-react';
import { VideoLesson, Subject } from '../types';
import { getSubjectYoutubePlaylist } from '../data/driveLinksData';

interface VideosTabProps {
  subject: Subject;
  videos: VideoLesson[];
  customPlaylistUrl?: string;
}

export const VideosTab: React.FC<VideosTabProps> = ({
  subject,
  videos,
  customPlaylistUrl,
}) => {
  const [activeVideo, setActiveVideo] = useState<VideoLesson>(videos[0] || null);

  // Playlist preconfigurada para Sol (configurable por papá en /src/data/driveLinksData.ts)
  const playlistUrl = customPlaylistUrl || getSubjectYoutubePlaylist(subject.id);

  return (
    <div className="space-y-6">
      {/* Top Bento Card: Father's YouTube Playlist Resource */}
      <div className="bg-[#070b22]/90 border border-indigo-950/90 rounded-3xl p-6 md:p-8 shadow-2xl shadow-[#020512]/60 backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-rose-950/40 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0 shadow-lg shadow-rose-500/10">
              <Youtube className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-extrabold text-lg md:text-xl text-white">
                  Videoclases y Tutoriales Recomendados
                </h3>
                <span className="text-[10px] font-mono bg-cyan-950/50 text-cyan-300 font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-cyan-500/30">
                  <Heart className="w-3 h-3 text-cyan-400 fill-cyan-400" /> Selección de Papá
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 max-w-xl leading-relaxed font-mono">
                Clases explicativas seleccionadas y organizadas por temas para {subject.name}, con reproductor integrado y enlace a la lista completa.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono">
            <a
              href={playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-lg shadow-rose-950/60 transition cursor-pointer"
            >
              <Youtube className="w-4 h-4" />
              <span>Abrir Lista Completa en YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Video Section: Left Video Player & Right Lessons List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Video Player Bento Box */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-[#070b22]/90 rounded-3xl border border-indigo-950/90 overflow-hidden shadow-2xl shadow-[#020512]/60 backdrop-blur-md">
            {activeVideo ? (
              <>
                {/* 16:9 Responsive Video Container */}
                <div className="relative w-full aspect-video bg-black">
                  {activeVideo.youtubeId && activeVideo.youtubeId !== 'custom' ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?rel=0`}
                      title={activeVideo.title}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                      <Youtube className="w-12 h-12 text-rose-500 mb-3" />
                      <p className="text-sm font-semibold mb-3">
                        Video recomendado por papá
                      </p>
                      <a
                        href={activeVideo.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-2 font-mono"
                      >
                        <span>Abrir video en YouTube</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Video Info below player */}
                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-950/50 text-cyan-300 border border-cyan-500/30">
                      Parcial {activeVideo.parcialNumber}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" /> {activeVideo.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-amber-400" /> {activeVideo.channel}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-lg font-heading font-extrabold text-white leading-snug">
                    {activeVideo.title}
                  </h2>

                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {activeVideo.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-indigo-950/80 flex items-center justify-between font-mono">
                    <a
                      href={activeVideo.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-rose-400 hover:text-rose-300 flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#030614] border border-indigo-950 transition"
                    >
                      <Youtube className="w-4 h-4" />
                      <span>Ver directamente en YouTube</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Tv className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Video en reproducción</span>
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <div className="p-12 text-center text-slate-400 font-mono">
                Selecciona un video de la lista para reproducirlo.
              </div>
            )}
          </div>
        </div>

        {/* Right: Playlist of Lessons Bento Box */}
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-[#070b22]/90 rounded-3xl border border-indigo-950/90 p-5 shadow-2xl shadow-[#020512]/60 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-indigo-950/80 pb-3 mb-3 font-mono">
              <h3 className="font-heading font-extrabold text-sm text-white flex items-center gap-2">
                <Video className="w-4 h-4 text-cyan-400" />
                <span>Lista de Clases ({videos.length})</span>
              </h3>
              <span className="text-[10px] text-slate-400">
                Parciales 1, 2 y 3
              </span>
            </div>

            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
              {videos.map((vid) => {
                const isActive = activeVideo?.id === vid.id;
                return (
                  <div
                    key={vid.id}
                    onClick={() => setActiveVideo(vid)}
                    className={`p-3.5 rounded-2xl cursor-pointer transition text-xs border ${
                      isActive
                        ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200 font-semibold shadow-md shadow-cyan-500/10'
                        : 'bg-[#030614] hover:bg-[#0c1236] border-indigo-950 text-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5 font-mono">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                        isActive 
                          ? 'bg-cyan-900/60 text-cyan-200 border-cyan-400/40' 
                          : 'bg-[#070b22] text-slate-300 border-indigo-950'
                      }`}>
                        Parcial {vid.parcialNumber}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {vid.duration}
                      </span>
                    </div>
                    <h4 className="font-bold line-clamp-2 leading-snug">
                      {vid.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1 font-mono">
                      <User className="w-3 h-3 text-amber-400" /> {vid.channel}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

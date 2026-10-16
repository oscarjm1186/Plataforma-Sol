import React, { useState, useEffect } from 'react';
import { 
  Video, 
  ExternalLink, 
  Heart, 
  Youtube, 
  Clock, 
  User, 
  Tv,
  ListVideo,
  PlaySquare,
  CheckCircle2
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
  const [activeVideo, setActiveVideo] = useState<VideoLesson | null>(videos[0] || null);
  const [playerMode, setPlayerMode] = useState<'video' | 'playlist'>('video');
  const [filterParcial, setFilterParcial] = useState<number | 'all'>('all');

  const effectivePlaylistUrl = customPlaylistUrl || getSubjectYoutubePlaylist(subject.id);

  // Sync active video whenever subject or videos array changes
  useEffect(() => {
    if (videos && videos.length > 0) {
      setActiveVideo(videos[0]);
      setPlayerMode('video');
    } else {
      setActiveVideo(null);
    }
  }, [subject.id, videos]);

  // Extract playlist ID if present in the URL
  const extractPlaylistId = (url: string): string | null => {
    try {
      const match = url.match(/[?&]list=([a-zA-Z0-9_-]+)/);
      return match ? match[1] : null;
    } catch {
      return null;
    }
  };

  const playlistId = extractPlaylistId(effectivePlaylistUrl);

  const filteredVideos = filterParcial === 'all' 
    ? videos 
    : videos.filter(v => v.parcialNumber === filterParcial);

  return (
    <div className="space-y-6">
      {/* Top Bento Card: Father's YouTube Playlist Resource */}
      <div className="bg-[#070b22]/90 border border-indigo-950/90 rounded-3xl p-6 md:p-8 shadow-2xl shadow-[#020512]/60 backdrop-blur-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-rose-950/40 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0 shadow-lg shadow-rose-500/10">
              <Youtube className="w-7 h-7" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-heading font-extrabold text-lg md:text-xl text-white">
                  Lista de Reproducción de YouTube
                </h3>
                <span className="text-[10px] font-mono bg-cyan-950/50 text-cyan-300 font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-cyan-500/30">
                  <Heart className="w-3 h-3 text-cyan-400 fill-cyan-400" /> Selección de Papá
                </span>
                <span className="text-[10px] font-mono bg-emerald-950/50 text-emerald-300 font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-emerald-500/30">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Lista Oficial
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1.5 max-w-2xl leading-relaxed">
                Lista de clases y tutoriales seleccionados para <strong>{subject.name}</strong>. Puedes reproducir cada clase en la plataforma, reproducir la lista completa o abrirla directamente en YouTube.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono">
            {/* Direct Open in YouTube */}
            <a
              href={effectivePlaylistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-rose-950/60 transition cursor-pointer"
              title="Abrir la lista en YouTube en una nueva pestaña"
            >
              <Youtube className="w-4 h-4" />
              <span>Abrir Lista en YouTube</span>
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
            {/* Player Mode Switcher */}
            <div className="px-5 py-3 border-b border-indigo-950/80 bg-[#040716] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPlayerMode('video')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    playerMode === 'video'
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-[#090f28] text-slate-400 hover:text-white border border-indigo-950'
                  }`}
                >
                  <PlaySquare className="w-3.5 h-3.5" />
                  <span>Clase Seleccionada</span>
                </button>

                {playlistId && (
                  <button
                    type="button"
                    onClick={() => setPlayerMode('playlist')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      playerMode === 'playlist'
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                        : 'bg-[#090f28] text-slate-400 hover:text-white border border-indigo-950'
                    }`}
                  >
                    <ListVideo className="w-3.5 h-3.5" />
                    <span>Lista Completa YouTube</span>
                  </button>
                )}
              </div>

              <div className="text-[11px] text-slate-400 flex items-center gap-1.5 max-w-[280px] truncate">
                <Tv className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">
                  {playerMode === 'video' 
                    ? (activeVideo ? activeVideo.title : 'Selecciona una clase') 
                    : 'Reproductor de Lista Oficial'}
                </span>
              </div>
            </div>

            {/* 16:9 Responsive Video Container */}
            <div className="relative w-full aspect-video bg-black">
              {playerMode === 'playlist' && playlistId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}&rel=0`}
                  title={`Lista de reproducción: ${subject.name}`}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : activeVideo && activeVideo.youtubeId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?rel=0`}
                  title={activeVideo.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-6 text-center font-mono text-xs">
                  <Youtube className="w-12 h-12 text-slate-600 mb-3" />
                  <span>Selecciona una clase de la barra lateral para reproducir.</span>
                </div>
              )}
            </div>

            {/* Video Info below player */}
            {activeVideo && playerMode === 'video' && (
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

                {/* Direct Action Buttons */}
                <div className="mt-5 pt-4 border-t border-indigo-950/80 flex flex-wrap items-center justify-between gap-3 font-mono">
                  <div className="flex items-center gap-2">
                    <a
                      href={activeVideo.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-white flex items-center gap-1.5 py-2 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 transition shadow-sm"
                    >
                      <Youtube className="w-4 h-4" />
                      <span>Ver directamente en YouTube</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                      href={effectivePlaylistUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-cyan-300 hover:text-white flex items-center gap-1.5 py-2 px-3.5 rounded-xl bg-[#030614] hover:bg-[#0c1236] border border-cyan-950 transition"
                    >
                      <ListVideo className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Ver lista completa</span>
                    </a>
                  </div>

                  <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Clase verificada de tu lista</span>
                  </div>
                </div>
              </div>
            )}

            {playerMode === 'playlist' && (
              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-950/50 text-cyan-300 border border-cyan-500/30">
                    Lista Oficial Completa
                  </span>
                  <div className="text-xs text-slate-400 font-medium">
                    {videos.length} Clases en esta materia
                  </div>
                </div>

                <h2 className="text-lg font-heading font-extrabold text-white leading-snug">
                  Lista de Reproducción: {subject.name}
                </h2>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Reproduciendo la lista completa oficial configurada para {subject.name}. Los videos avanzarán automáticamente o puedes seleccionar cualquier clase específica desde el panel lateral.
                </p>

                <div className="mt-5 pt-4 border-t border-indigo-950/80 flex flex-wrap items-center justify-between gap-3 font-mono">
                  <a
                    href={effectivePlaylistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-white flex items-center gap-1.5 py-2 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 transition shadow-sm"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>Abrir en YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Lista Oficial Protegida</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Playlist of Lessons Bento Box */}
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-[#070b22]/90 rounded-3xl border border-indigo-950/90 p-5 shadow-2xl shadow-[#020512]/60 backdrop-blur-md">
            {/* Header with Title */}
            <div className="flex items-center justify-between border-b border-indigo-950/80 pb-3 mb-3 font-mono">
              <h3 className="font-heading font-extrabold text-sm text-white flex items-center gap-2">
                <Video className="w-4 h-4 text-cyan-400" />
                <span>Lista de Clases ({filteredVideos.length})</span>
              </h3>
              <span className="text-[11px] text-cyan-300 font-bold px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                {videos.length} totales
              </span>
            </div>

            {/* Parcial Filters */}
            <div className="flex items-center gap-1 pb-3 mb-2 border-b border-indigo-950/60 font-mono text-[11px]">
              <button
                type="button"
                onClick={() => setFilterParcial('all')}
                className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                  filterParcial === 'all'
                    ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Todos ({videos.length})
              </button>
              {[1, 2, 3].map(p => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setFilterParcial(p)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    filterParcial === p
                      ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  P{p} ({videos.filter(v => v.parcialNumber === p).length})
                </button>
              ))}
            </div>

            {/* Lessons Scroll List */}
            <div className="space-y-2 max-h-[520px] overflow-y-auto pr-1">
              {filteredVideos.map((vid) => {
                const isActive = activeVideo?.id === vid.id && playerMode === 'video';
                return (
                  <div
                    key={vid.id}
                    onClick={() => {
                      setActiveVideo(vid);
                      setPlayerMode('video');
                    }}
                    className={`p-3.5 rounded-2xl cursor-pointer transition text-xs border ${
                      isActive
                        ? 'bg-cyan-950/50 border-cyan-500/50 text-cyan-200 font-semibold shadow-md shadow-cyan-500/10'
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
                    <p className="text-[11px] text-slate-400 mt-1 flex items-center justify-between font-mono">
                      <span className="flex items-center gap-1 truncate max-w-[170px]">
                        <User className="w-3 h-3 text-amber-400 shrink-0" /> 
                        <span className="truncate">{vid.channel}</span>
                      </span>
                      <span className="text-[10px] text-cyan-400/80 hover:underline shrink-0">
                        Reproducir →
                      </span>
                    </p>
                  </div>
                );
              })}

              {filteredVideos.length === 0 && (
                <div className="p-8 text-center text-slate-500 font-mono text-xs">
                  No hay clases en este parcial.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

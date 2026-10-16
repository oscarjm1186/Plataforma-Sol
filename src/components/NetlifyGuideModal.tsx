import React from 'react';
import { X, Cloud, Terminal, CheckCircle2, FolderArchive, ArrowRight, ExternalLink } from 'lucide-react';

interface NetlifyGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NetlifyGuideModal: React.FC<NetlifyGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl shadow-black/80 overflow-y-auto max-h-[90vh] animate-fadeIn">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-950/40 border border-teal-500/20 text-teal-400 flex items-center justify-center">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg text-white">
                Guía de Publicación en Netlify y Edición en VS Code
              </h3>
              <p className="text-xs text-slate-400">
                Todo listo para desplegar y continuar editando la plataforma de Sol.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6 text-xs text-slate-300">
          {/* Step 1: VS Code */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-2 font-bold text-white mb-2 text-sm">
              <Terminal className="w-4 h-4 text-orange-400" />
              <span>1. Cómo abrir y editar el código en VS Code</span>
            </div>
            <p className="mb-3 leading-relaxed text-slate-400">
              Puedes descargar el código fuente en archivo <strong className="text-white">ZIP</strong> o vincularlo a tu repositorio de <strong className="text-white">GitHub</strong> para trabajar en local.
            </p>
            <div className="bg-slate-900 text-slate-200 p-3.5 rounded-xl border border-slate-800 font-mono text-[11px] space-y-1">
              <div><span className="text-slate-500"># 1. Descomprime y abre la carpeta en VS Code</span></div>
              <div><span className="text-emerald-400">cd</span> plataforma-estudio</div>
              <div><span className="text-slate-500"># 2. Instala dependencias</span></div>
              <div><span className="text-emerald-400">npm install</span></div>
              <div><span className="text-slate-500"># 3. Inicia el servidor de desarrollo local</span></div>
              <div><span className="text-emerald-400">npm run dev</span></div>
            </div>
          </div>

          {/* Step 2: Netlify Deployment */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-2 font-bold text-teal-300 mb-2 text-sm">
              <Cloud className="w-4 h-4 text-teal-400" />
              <span>2. Despliegue en Netlify (Totalmente Gratuito)</span>
            </div>
            <p className="mb-4 leading-relaxed text-slate-400">
              La plataforma ya incluye el archivo de configuración necesario para que las rutas funcionen sin errores 404 (<code className="text-teal-300 bg-slate-900 px-1.5 py-0.5 rounded">/public/_redirects</code> con regla <code className="text-teal-300 bg-slate-900 px-1.5 py-0.5 rounded">/* /index.html 200</code>).
            </p>

            <div className="space-y-3">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <span className="font-bold text-white block mb-1.5">
                  Opción A (Recomendada): Vía GitHub
                </span>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-400">
                  <li>Sube tu proyecto a un repositorio de GitHub.</li>
                  <li>Inicia sesión en <a href="https://app.netlify.com" target="_blank" rel="noreferrer" className="text-orange-400 hover:text-orange-300 underline font-semibold">Netlify.com</a> y haz clic en <strong className="text-slate-200">"Add new site" → "Import an existing project"</strong>.</li>
                  <li>Selecciona tu repositorio de GitHub.</li>
                  <li>Verifica los campos:
                    <ul className="list-disc list-inside pl-4 mt-1 font-mono text-[11px] text-slate-300">
                      <li>Build command: <code className="text-orange-400">npm run build</code></li>
                      <li>Publish directory: <code className="text-orange-400">dist</code></li>
                    </ul>
                  </li>
                  <li>Haz clic en <strong className="text-white">"Deploy site"</strong>. ¡En 30 segundos estará activa en la web!</li>
                </ol>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <span className="font-bold text-white block mb-1">
                  Opción B: Drag & Drop (Arrastrar y Soltar)
                </span>
                <p className="text-slate-400">
                  1. Ejecuta <code className="text-orange-400">npm run build</code> en tu terminal para generar la carpeta <code className="text-white">dist/</code>.<br/>
                  2. Ingresa a <a href="https://app.netlify.com/drop" target="_blank" rel="noreferrer" className="text-orange-400 hover:text-orange-300 underline font-semibold">Netlify Drop</a> y arrastra la carpeta <strong className="text-white">dist</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-amber-950/30 p-4 rounded-2xl border border-amber-500/30 text-amber-200">
            <span className="font-bold block mb-1 text-amber-300">
              ✨ Personalización continua
            </span>
            <p className="leading-relaxed text-slate-300">
              Todo el contenido de materias, guías, preguntas de examen y bibliografía está estructurado en archivos TypeScript dentro de <code className="text-amber-300 bg-slate-950 px-1.5 py-0.5 rounded">/src/data/</code>, por lo que es sumamente fácil agregar más ejercicios, libros o videos en cualquier momento desde VS Code.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition cursor-pointer shadow-md shadow-orange-950/50"
          >
            Entendido, ¡gracias!
          </button>
        </div>
      </div>
    </div>
  );
};

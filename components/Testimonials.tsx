
import React, { useState, useRef, useEffect } from 'react';

interface TestimonialsProps {
  onCtaClick: () => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onCtaClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        setIsEnded(false);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      setIsEnded(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsEnded(true);
      setIsPlaying(false);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('ended', handleEnded);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <section className="py-24 bg-rose-50/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-black text-black leading-tight mb-4">
            💬 O QUE OUTRAS MULHERES ESTÃO DIZENDO
          </h3>
          <p className="text-stone-500 font-bold uppercase tracking-widest text-sm">Resultado Real de Aluna</p>
        </div>

        {/* Layout de iPhone para o Vídeo */}
        <div className="relative mx-auto mb-16 max-w-[320px] md:max-w-[340px]">
          {/* Sombra do iPhone */}
          <div className="absolute -inset-10 bg-red-200/40 rounded-[5rem] blur-[80px] -z-10"></div>
          
          {/* Moldura Externa do iPhone */}
          <div className="relative z-10 bg-stone-900 rounded-[3.5rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[1px] border-white/10">
            
            {/* Detalhes das laterais (botões) */}
            <div className="absolute -left-1 top-24 w-1 h-12 bg-stone-800 rounded-l-md border-l border-white/5"></div>
            <div className="absolute -left-1 top-40 w-1 h-16 bg-stone-800 rounded-l-md border-l border-white/5"></div>
            <div className="absolute -left-1 top-60 w-1 h-16 bg-stone-800 rounded-l-md border-l border-white/5"></div>
            <div className="absolute -right-1 top-40 w-1 h-24 bg-stone-800 rounded-r-md border-r border-white/5"></div>

            {/* Tela Interna */}
            <div className="relative rounded-[2.8rem] overflow-hidden bg-black aspect-[9/19.5]">
              
              {/* Dynamic Island (Notch) */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-40 flex items-center justify-end px-4 gap-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-900/40"></div>
                 <div className="w-1 h-1 rounded-full bg-white/5"></div>
              </div>

              {/* O Vídeo */}
              <video 
                ref={videoRef}
                className="w-full h-full object-cover cursor-pointer"
                playsInline
                onClick={isEnded ? restartVideo : togglePlay}
              >
                <source src="https://www.dropbox.com/scl/fi/9chfxw1tvcr48nt52qouc/depoimento-final.mp4?rlkey=5mw4e4eznhtqdv7pho40bq9hz&st=r7icibcw&raw=1" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>

              {/* Overlay de Play (visível quando pausado e não finalizado) */}
              {!isPlaying && !isEnded && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-all hover:bg-black/40 z-30"
                  onClick={togglePlay}
                >
                  <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl transform transition-transform hover:scale-110 active:scale-90">
                    <svg className="w-10 h-10 text-red-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4.5 2.691a1 1 0 011.53-.848l11.045 6.945a1 1 0 010 1.696L6.03 17.429a1 1 0 01-1.53-.848V2.691z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Overlay de Finalização (Ver Novamente) */}
              {isEnded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-md transition-all animate-in fade-in duration-500 z-30">
                  <button 
                    onClick={restartVideo}
                    className="group flex flex-col items-center gap-6 text-white"
                  >
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-xl transition-all group-hover:rotate-180 duration-700 active:scale-90">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <span className="font-black uppercase tracking-[0.2em] text-sm bg-white/10 px-6 py-2 rounded-full border border-white/20">Ver Novamente</span>
                  </button>
                </div>
              )}

              {/* Controles de pausa rápida quando está tocando */}
              {isPlaying && (
                <div 
                  className="absolute inset-0 opacity-0 hover:opacity-100 flex items-center justify-center bg-black/10 transition-opacity cursor-pointer z-20"
                  onClick={togglePlay}
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                     <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                     </svg>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Badge flutuante de depoimento */}
          <div className="absolute -bottom-8 -right-12 hidden md:block z-20 pointer-events-none">
            <div className="bg-red-600 text-white p-8 rounded-full shadow-2xl animate-bounce border-4 border-white">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={onCtaClick}
            className="bg-green-600 hover:bg-green-500 text-white font-black py-5 px-10 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-wider text-sm md:text-base"
          >
            Quero ter resultados como ela
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

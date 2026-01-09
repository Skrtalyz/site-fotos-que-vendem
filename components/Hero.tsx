
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <header 
      className="relative pt-12 pb-10 md:pt-40 md:pb-52 overflow-hidden min-h-[100vh] md:min-h-[90vh] flex items-end md:items-center bg-stone-900"
    >
      {/* Camada de Background Responsiva */}
      <div 
        className="absolute inset-0 bg-cover bg-center md:bg-[url('https://i.postimg.cc/Bn0St1n5/Design-sem-nome-(13).png')] bg-[url('https://i.postimg.cc/N0S7pX4y/celular.png')]"
      ></div>

      {/* Overlay: Sombra mais densa na parte inferior (mobile) e esquerda (desktop) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/20 md:to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10">
        {/* Alinhamento: mb-2 no mobile para ficar bem rente ao rodapé da tela, preservando visibilidade da expert acima */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl mx-auto md:mx-0 mb-2 md:mb-0">
          <h1 className="text-5xl md:text-8xl font-black mb-4 md:mb-8 leading-[0.9] text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            Fotos que <br/>
            <span className="bg-gradient-to-r from-red-600 via-pink-500 to-rose-400 bg-clip-text text-transparent">
              Vendem
            </span>
          </h1>
          
          <p className="text-base md:text-2xl text-white/95 mb-6 md:mb-10 max-w-xs md:max-w-lg leading-relaxed font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Domine a criação de imagens profissionais e pare de perder vendas por causa de fotos amadoras.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 mb-6 md:mb-12 font-bold">
            <span className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-1.5 md:px-5 md:py-2.5 rounded-xl border border-white/20 text-white text-xs md:text-base">
              <span className="text-red-500 text-[8px]">●</span> Sem câmera
            </span>
            <span className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-1.5 md:px-5 md:py-2.5 rounded-xl border border-white/20 text-white text-xs md:text-base">
              <span className="text-red-500 text-[8px]">●</span> Sem cenário
            </span>
          </div>

          <button 
            onClick={onCtaClick}
            className="group relative inline-flex items-center justify-center w-full md:w-auto px-10 py-4 md:px-12 md:py-6 font-black text-white transition-all duration-300 bg-green-600 rounded-2xl hover:bg-green-500 shadow-[0_20px_40px_-10px_rgba(22,163,74,0.6)] active:scale-95 text-base md:text-lg uppercase tracking-wider"
          >
            QUERO COMEÇAR HOJE
          </button>
          
          <p className="mt-4 md:mt-6 text-[10px] md:text-xs text-white/70 font-black uppercase tracking-[0.2em] bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/5">
            Acesso imediato • Oferta limitada
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;

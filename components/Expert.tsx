
import React from 'react';

interface ExpertProps {
  onCtaClick: () => void;
}

const Expert: React.FC<ExpertProps> = ({ onCtaClick }) => {
  return (
    <section className="py-32 bg-white overflow-hidden relative border-t border-stone-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24 mb-16">
          <div className="w-full md:w-5/12 relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-red-100 rounded-[3.5rem] blur-2xl opacity-50"></div>
              <img 
                src="https://i.postimg.cc/XYzCT88f/photo.jpg" 
                alt="Juliana Martins" 
                className="relative z-10 rounded-[3rem] shadow-2xl w-full border border-stone-200 object-cover aspect-[4/5] md:aspect-auto"
              />
          </div>
          <div className="w-full md:w-7/12 order-1 md:order-2">
            <h2 className="text-red-600 font-black uppercase tracking-[0.3em] mb-4 text-sm">A Especialista</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-8 text-black leading-tight">Juliana Martins</h3>
            <div className="space-y-6 text-xl text-stone-600 leading-relaxed font-medium">
              <p>
                Estrategista de imagem com foco em negócios digitais femininos. Juliana ajuda empreendedoras a transformarem <span className="text-black font-bold underline underline-offset-8 decoration-red-600 decoration-2">estoque parado em lucro</span> através do design visual estratégico.
              </p>
              <div className="pt-8">
                <p className="text-2xl md:text-3xl text-black italic font-bold leading-snug border-l-4 border-red-600 pl-8 py-2">
                  "Não é sobre ter a melhor câmera, é sobre saber criar o desejo no olhar do seu cliente."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={onCtaClick}
            className="bg-green-600 hover:bg-green-500 text-white font-black py-5 px-10 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-wider text-sm md:text-base"
          >
            Quero aprender com a Juliana
          </button>
        </div>
      </div>
    </section>
  );
};

export default Expert;

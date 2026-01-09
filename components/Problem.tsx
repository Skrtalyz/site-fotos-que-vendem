
import React from 'react';

interface ProblemProps {
  onCtaClick: () => void;
}

const Problem: React.FC<ProblemProps> = ({ onCtaClick }) => {
  const pains = [
    "Sente que sua marca parece amadora perto da concorrência",
    "Não consegue tirar fotos que realmente mostram o valor do produto",
    "Gasta horas tentando editar e nunca fica satisfeita",
    "Acha que precisa de um estúdio caro para ter imagens boas"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-black leading-tight">
            Vender no digital sem <br className="hidden md:block"/> boas fotos é como gritar no escuro.
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {pains.map((pain, idx) => (
              <div key={idx} className="flex items-center gap-5 p-8 bg-stone-50 rounded-3xl border border-stone-100 hover:border-red-200 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 font-bold">
                  ✕
                </div>
                <p className="text-lg text-stone-800 font-semibold">{pain}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-black p-12 rounded-[3rem] shadow-2xl relative overflow-hidden mb-16">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-pink-500 to-red-600"></div>
            <p className="text-2xl leading-relaxed text-white relative z-10">
              A verdade é dura: <strong className="text-red-500">O cliente compra com os olhos.</strong> <br/>
              Se sua foto é ruim, ele assume que seu produto também é.
            </p>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={onCtaClick}
              className="bg-green-600 hover:bg-green-500 text-white font-black py-5 px-10 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-wider text-sm md:text-base"
            >
              Mudar minha realidade visual
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

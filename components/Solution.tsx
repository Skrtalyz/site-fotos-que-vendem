
import React from 'react';

interface SolutionProps {
  onCtaClick: () => void;
}

const Solution: React.FC<SolutionProps> = ({ onCtaClick }) => {
  const showcaseImages = [
    "https://i.postimg.cc/FRBBsqgP/image.png",
    "https://i.postimg.cc/h43Xc0kw/image.png",
    "https://i.postimg.cc/N0YMpCXm/image.png",
    "https://i.postimg.cc/mg3Zz3nc/image.png",
    "https://i.postimg.cc/52fymkLB/image.png"
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-stone-900">A Solução Definitiva</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <div className="relative group">
            <div className="text-8xl font-black text-stone-200 absolute -top-12 -left-4 z-0 transition-colors">01</div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-4 text-stone-900">Escolha o Prompt</h3>
              <p className="text-stone-500 leading-relaxed font-medium">Acesse nossa biblioteca e escolha o estilo que mais combina com seu produto.</p>
            </div>
          </div>
          <div className="relative group">
            <div className="text-8xl font-black text-stone-200 absolute -top-12 -left-4 z-0 transition-colors">02</div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-4 text-stone-900">Insira na IA</h3>
              <p className="text-stone-500 leading-relaxed font-medium">Copie e cole na ferramenta indicada. Sem configurações chatas ou técnicas.</p>
            </div>
          </div>
          <div className="relative group">
            <div className="text-8xl font-black text-stone-200 absolute -top-12 -left-4 z-0 transition-colors">03</div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-4 text-stone-900">Poste e Venda</h3>
              <p className="text-stone-500 leading-relaxed font-medium">Em 10 segundos você tem uma imagem de nível internacional pronta para o seu Instagram.</p>
            </div>
          </div>
        </div>

        {/* Card Principal de Transformação */}
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 md:p-16 rounded-[4rem] shadow-xl border border-stone-100 mb-8 overflow-hidden">
           <div className="w-full lg:w-5/12">
              <h3 className="text-4xl md:text-5xl font-black mb-6 text-stone-900 leading-[1.1]">Chega de improvisos. <br/> <span className="text-red-600">Comece a profissionalizar.</span></h3>
              <p className="text-xl text-stone-500 font-medium mb-8">Transforme a percepção da sua marca com um clique. Estas imagens foram criadas em segundos usando o nosso método.</p>
              
              <div className="hidden lg:block">
                 <button 
                  onClick={onCtaClick}
                  className="bg-green-600 hover:bg-green-500 text-white font-black py-5 px-10 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-wider text-base"
                >
                  Quero este resultado
                </button>
              </div>
           </div>

           <div className="w-full lg:w-7/12">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 relative">
                 {/* Layout de Mosaico para as 5 imagens */}
                 <div className="aspect-[4/5] overflow-hidden rounded-2xl md:rounded-3xl shadow-lg border-2 border-white">
                    <img src={showcaseImages[0]} className="w-full h-full object-cover" alt="Exemplo IA 1" />
                 </div>
                 <div className="aspect-[4/5] overflow-hidden rounded-2xl md:rounded-3xl shadow-lg border-2 border-white md:mt-8">
                    <img src={showcaseImages[1]} className="w-full h-full object-cover" alt="Exemplo IA 2" />
                 </div>
                 <div className="aspect-[4/5] overflow-hidden rounded-2xl md:rounded-3xl shadow-lg border-2 border-white col-span-2 md:col-span-1">
                    <img src={showcaseImages[2]} className="w-full h-full object-cover" alt="Exemplo IA 3" />
                 </div>
                 <div className="aspect-[4/5] overflow-hidden rounded-2xl md:rounded-3xl shadow-lg border-2 border-white md:-mt-8">
                    <img src={showcaseImages[3]} className="w-full h-full object-cover" alt="Exemplo IA 4" />
                 </div>
                 <div className="aspect-[4/5] overflow-hidden rounded-2xl md:rounded-3xl shadow-lg border-2 border-white">
                    <img src={showcaseImages[4]} className="w-full h-full object-cover" alt="Exemplo IA 5" />
                 </div>
              </div>
           </div>

           <div className="lg:hidden w-full mt-8">
              <button 
                onClick={onCtaClick}
                className="w-full bg-green-600 hover:bg-green-500 text-white font-black py-5 px-10 rounded-2xl shadow-lg transition-all active:scale-95 uppercase tracking-wider text-base"
              >
                Quero este resultado
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

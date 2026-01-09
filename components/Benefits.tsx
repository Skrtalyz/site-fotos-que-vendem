
import React from 'react';

interface BenefitsProps {
  onCtaClick: () => void;
}

const Benefits: React.FC<BenefitsProps> = ({ onCtaClick }) => {
  const content = [
    { title: "Catálogo Profissional", desc: "Suas fotos com nível de revista, valorizando cada detalhe do seu produto." },
    { title: "Estética Coerente", desc: "Um feed organizado que transmite confiança e autoridade para sua marca." },
    { title: "Velocidade Real", desc: "O que antes levava um dia inteiro de produção, agora leva segundos." },
    { title: "Economia de Verba", desc: "Cancele o fotógrafo e o aluguel de estúdio. A IA resolve tudo para você." },
    { title: "Engagement Viral", desc: "Imagens que param o scroll e obrigam o cliente a clicar no seu perfil." }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-stone-900">O que te espera lá dentro</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {content.map((item, idx) => (
            <div key={idx} className="p-10 rounded-[2.5rem] bg-stone-50 border border-stone-100 hover:shadow-xl hover:bg-white transition-all duration-500 group">
              <div className="w-14 h-14 bg-stone-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-700 transition-colors duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-4 text-stone-900">{item.title}</h3>
              <p className="text-stone-500 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
          
          <div className="md:col-span-2 lg:col-span-1 p-10 rounded-[2.5rem] bg-stone-900 text-white flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
             </div>
             <h3 className="text-3xl font-black mb-6 relative z-10 leading-tight">Vantagem <br/> Competitiva</h3>
             <ul className="space-y-4 font-bold text-stone-400 relative z-10">
               <li className="flex items-center gap-3"><span className="text-emerald-500">●</span> 100% de Praticidade</li>
               <li className="flex items-center gap-3"><span className="text-emerald-500">●</span> Zero custo fixo</li>
               <li className="flex items-center gap-3"><span className="text-emerald-500">●</span> Escala infinita</li>
             </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={onCtaClick}
            className="bg-green-600 hover:bg-green-500 text-white font-black py-5 px-10 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-wider text-sm md:text-base"
          >
            Quero todos esses benefícios
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

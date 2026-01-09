
import React from 'react';

interface GuaranteeProps {
  onCtaClick: () => void;
}

const Guarantee: React.FC<GuaranteeProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-white border-t border-stone-100 relative overflow-hidden">
      {/* Elemento de fundo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-50 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-stone-50 border border-stone-200 rounded-[3rem] p-10 md:p-20 text-center shadow-sm">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-black text-white rounded-3xl flex items-center justify-center text-3xl shadow-xl">
              🔒
            </div>
          </div>

          <h2 className="text-red-600 font-black uppercase tracking-[0.3em] mb-4 text-sm">Garantia Blindada</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-8 text-black leading-tight">
            Sua compra é sem risco
          </h3>

          <div className="space-y-6 text-xl text-stone-600 leading-relaxed font-medium mb-12">
            <p>
              Você tem <span className="text-black font-extrabold underline decoration-red-600 decoration-2 underline-offset-4">7 dias de garantia</span> para acessar o Fotos que Vendem e testar os prompts com calma.
            </p>
            <p>
              Se dentro desse prazo você sentir que o conteúdo não é para você, é só solicitar o reembolso e todo o valor será devolvido.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {["Sem burocracia.", "Sem perguntas.", "Sem dor de cabeça."].map((text, i) => (
              <div key={i} className="bg-white border border-stone-200 py-4 px-6 rounded-2xl text-black font-black text-sm uppercase tracking-wider shadow-sm">
                {text}
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-stone-200 mb-12">
            <p className="text-2xl md:text-3xl text-black font-black leading-tight italic">
              "Você não tem nada a perder — e tudo a ganhar testando."
            </p>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={onCtaClick}
              className="w-full md:w-auto bg-green-600 hover:bg-green-500 text-white font-black py-5 px-12 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-wider"
            >
              Testar por 7 dias sem risco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;


import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
        aria-expanded={isOpen}
      >
        <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-red-600' : 'text-black group-hover:text-red-500'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${isOpen ? 'bg-red-600 border-red-600 text-white rotate-45' : 'border-stone-200 text-stone-400 rotate-0'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-stone-500 text-lg leading-relaxed font-medium pr-12">
          {answer}
        </div>
      </div>
    </div>
  );
};

interface FAQProps {
  onCtaClick: () => void;
}

const FAQ: React.FC<FAQProps> = ({ onCtaClick }) => {
  const faqs = [
    {
      question: "Preciso entender de inteligência artificial para usar?",
      answer: "Não. Os prompts já estão prontos. Você só copia, cola e usa. Não é necessário conhecimento técnico."
    },
    {
      question: "Isso funciona para qualquer tipo de produto?",
      answer: "Sim. Os prompts foram pensados para diferentes tipos de produtos físicos e digitais, adaptando cenários, estilos e formatos para valorizar o que você vende."
    },
    {
      question: "Vou precisar aparecer nas fotos?",
      answer: "Não. Existem prompts específicos para criar imagens sem aparecer, usando mãos, detalhes, cenários e foco total no produto."
    },
    {
      question: "Posso usar no Instagram?",
      answer: "Sim. O Fotos que Vendem inclui prompts pensados para imagens de feed, stories e conteúdos de divulgação no Instagram."
    },
    {
      question: "Preciso de câmera profissional ou estúdio?",
      answer: "Não. As imagens são geradas a partir dos prompts, sem necessidade de câmera, iluminação profissional ou estúdio."
    },
    {
      question: "O acesso é imediato?",
      answer: "Sim. Assim que a compra for confirmada, você recebe acesso imediato ao conteúdo."
    },
    {
      question: "Vou ter acesso por quanto tempo?",
      answer: "O acesso é permanente. Você pode usar os prompts sempre que quiser."
    },
    {
      question: "Posso pedir reembolso se não gostar?",
      answer: "Sim. Você tem 7 dias de garantia para testar o conteúdo com tranquilidade. Se não fizer sentido para você, é só solicitar o reembolso."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-red-600 font-black uppercase tracking-[0.3em] mb-4 text-sm">Dúvidas Comuns</h2>
            <h3 className="text-4xl md:text-6xl font-black text-black">Perguntas Frequentes</h3>
          </div>

          <div className="bg-white border border-stone-100 rounded-[3rem] p-8 md:p-12 shadow-sm mb-16">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="flex justify-center">
            <button 
              onClick={onCtaClick}
              className="bg-green-600 hover:bg-green-500 text-white font-black py-5 px-10 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-wider text-sm md:text-base"
            >
              Tirar minhas dúvidas na prática
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

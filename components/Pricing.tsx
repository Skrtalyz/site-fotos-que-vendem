
import React from 'react';

interface PricingProps {
  id: string;
  onCtaClick?: () => void;
}

const Pricing: React.FC<PricingProps> = ({ id, onCtaClick }) => {
  return (
    <section id={id} className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-red-600 via-pink-500 to-red-600 rounded-[3.5rem] blur-xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            
            <div className="relative bg-black rounded-[3rem] overflow-hidden shadow-2xl flex flex-col items-stretch border border-white/10">
              
              {/* Conteúdo Informativo */}
              <div className="w-full p-8 md:p-20 flex flex-col items-center text-center bg-black">
                <h2 className="text-3xl md:text-6xl font-black mb-10 text-white leading-tight">
                  Comece hoje sua <br/>
                  <span className="bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">nova era visual.</span>
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 w-full max-w-2xl">
                  {[
                    "Acesso Vitalício",
                    "Biblioteca Premium",
                    "Método Passo a Passo",
                    "Suporte Exclusivo"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-center sm:justify-start gap-3 text-white/90 font-bold">
                      <div className="flex-shrink-0 w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-[8px] shadow-lg shadow-red-900/50">
                        ✓
                      </div>
                      <span className="text-base md:text-lg tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Oferta Irresistível */}
              <div className="w-full bg-gradient-to-b from-stone-900 to-black p-8 md:p-20 flex flex-col items-center justify-center border-t border-white/5 text-center">
                <div className="bg-red-600 text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-[0.2em] mb-6 shadow-xl shadow-red-900/40">
                  MAIS VENDIDO
                </div>

                <div className="mb-8">
                  <p className="text-stone-500 font-bold line-through text-xl md:text-2xl">R$ 67,00</p>
                  <div className="flex items-baseline justify-center text-green-500 mt-2">
                    <span className="text-3xl md:text-5xl font-black mr-2">R$</span>
                    <span className="text-7xl md:text-9xl font-black tracking-tighter leading-none">29,90</span>
                  </div>
                  <p className="text-red-500 font-black text-xs md:text-base uppercase tracking-[0.3em] mt-4">Oferta Exclusiva</p>
                </div>

                <button 
                  onClick={onCtaClick}
                  className="group relative flex items-center justify-center w-full max-w-lg bg-green-600 hover:bg-green-500 text-white font-black py-5 md:py-8 rounded-2xl shadow-[0_20px_50px_-10px_rgba(22,163,74,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 text-xl md:text-3xl uppercase tracking-tight"
                >
                  COMPRAR AGORA
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                
                {/* Formas de Pagamento e Segurança */}
                <div className="mt-8 md:mt-12 w-full max-w-md">
                  <p className="text-[10px] text-stone-500 font-black uppercase tracking-widest mb-4">Pagamento Seguro via Pix ou Cartão</p>
                  <div className="flex items-center justify-center gap-4 md:gap-6 opacity-50 hover:opacity-100 transition-opacity duration-500">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" className="h-6 md:h-8 brightness-0 invert" alt="Pix" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4 md:h-5 brightness-0 invert" alt="Visa" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-8 md:h-10 brightness-0 invert" alt="Mastercard" />
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-center gap-2 opacity-30">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[10px] text-white font-black uppercase tracking-widest">Ambiente 100% Criptografado</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

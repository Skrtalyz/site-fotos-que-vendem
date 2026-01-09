
import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Expert from './components/Expert';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const checkoutUrl = "https://www.ggcheckout.com/checkout/v2/nDfFhly2guuFuM4CeS62";

  const handleCtaClick = () => {
    window.location.href = checkoutUrl;
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-red-100 selection:text-red-900 overflow-x-hidden">
      {/* Elementos de Fundo (Blobs de Gradiente) */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[5%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-rose-100/40 blur-[120px] animate-pulse"></div>
        <div className="absolute top-[35%] -right-[15%] w-[45vw] h-[45vw] rounded-full bg-red-50/50 blur-[100px]"></div>
        <div className="absolute top-[65%] -left-[5%] w-[40vw] h-[40vw] rounded-full bg-pink-50/40 blur-[110px]"></div>
        <div className="absolute bottom-[5%] -right-[10%] w-[55vw] h-[55vw] rounded-full bg-rose-100/30 blur-[130px] animate-pulse"></div>
      </div>

      <Hero onCtaClick={handleCtaClick} />
      
      <main className="relative z-10">
        <Problem onCtaClick={handleCtaClick} />
        <Solution onCtaClick={handleCtaClick} />
        <Benefits onCtaClick={handleCtaClick} />
        <Testimonials onCtaClick={handleCtaClick} />
        <Pricing id="offer-section" onCtaClick={handleCtaClick} />
        <Expert onCtaClick={handleCtaClick} />
        <Guarantee onCtaClick={handleCtaClick} />
        <FAQ onCtaClick={handleCtaClick} />
      </main>

      <Footer />
    </div>
  );
};

export default App;

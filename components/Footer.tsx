
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-white border-t border-rose-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black mb-3 text-rose-950 tracking-tighter">Fotos que <span className="text-rose-600">Vendem</span></h3>
            <p className="text-rose-300 text-xs font-bold uppercase tracking-widest">A revolução visual para o seu negócio.</p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-rose-50 text-center text-[10px] text-rose-200 font-bold uppercase tracking-[0.2em]">
          Copyright © 2025 Juliana Martins. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { PromptResult } from '../types';

const PromptGenerator: React.FC = () => {
  const [product, setProduct] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PromptResult | null>(null);

  const generatePrompt = async () => {
    if (!product.trim()) return;
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Crie um prompt de imagem para o seguinte produto: "${product}". O estilo deve ser feminino, profissional, de luxo e esteticamente agradável. Retorne um JSON com os campos title (título curto), prompt (o prompt detalhado em inglês para IA) e advice (uma dica de ouro em português sobre como usar a iluminação para este produto).`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              prompt: { type: Type.STRING },
              advice: { type: Type.STRING }
            },
            required: ["title", "prompt", "advice"]
          }
        },
      });

      const data = JSON.parse(response.text?.trim() || '{}');
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-rose-50 border-t border-rose-100 relative overflow-hidden">
      {/* Elemento Decorativo */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-100 rounded-full blur-[100px] opacity-50"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-rose-200 rounded-full blur-[100px] opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-6xl font-black mb-6 text-black">Teste o poder da IA</h2>
             <p className="text-rose-700 text-xl font-medium max-w-2xl mx-auto">
               Veja o nível de detalhamento que nossos prompts entregam. Insira seu produto abaixo e surpreenda-se.
             </p>
          </div>

          <div className="bg-white p-6 md:p-12 rounded-[3.5rem] shadow-2xl border border-rose-100 relative">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <input 
                type="text" 
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder="Qual produto você vende? (ex: Velas, Joias, Maquiagem)"
                className="flex-grow px-8 py-6 rounded-3xl border-2 border-stone-100 focus:border-red-500 focus:outline-none text-lg font-semibold transition-all shadow-inner"
              />
              <button 
                onClick={generatePrompt}
                disabled={loading || !product}
                className={`px-12 py-6 rounded-3xl font-black text-white transition-all text-sm uppercase tracking-widest flex items-center justify-center gap-3 ${loading ? 'bg-stone-300' : 'bg-black hover:bg-red-600 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)]'}`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    GERANDO...
                  </>
                ) : 'CRIAR PROMPT'}
              </button>
            </div>

            {result && (
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="bg-black p-8 md:p-12 rounded-[2.5rem] text-white relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-10">
                      <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.536 14.95a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM6.464 14.95l.707-.707a1 1 0 10-1.414-1.414l-.707.707a1 1 0 101.414 1.414z" />
                      </svg>
                   </div>
                   
                   <h3 className="text-2xl font-black mb-6 text-red-500 uppercase tracking-widest">{result.title}</h3>
                   
                   <div className="bg-white/5 border border-white/10 p-8 rounded-3xl mb-8 font-mono text-sm leading-relaxed text-stone-300 backdrop-blur-sm">
                      {result.prompt}
                   </div>
                   
                   <div className="flex items-start gap-4 p-6 bg-red-600/10 rounded-2xl border border-red-600/20">
                      <span className="text-2xl">💡</span>
                      <div>
                        <p className="font-black text-red-500 uppercase text-xs tracking-[0.2em] mb-1">Dica da Expert</p>
                        <p className="text-rose-100 font-medium leading-relaxed">{result.advice}</p>
                      </div>
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptGenerator;
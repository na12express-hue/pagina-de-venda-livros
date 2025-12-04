import React from 'react';
import { Button } from './Button';
import { Check, ShieldCheck, Zap, Book, Gift } from 'lucide-react';

export const Pricing: React.FC = () => {
  const handlePurchase = () => {
     window.open('https://pay.cakto.com.br/3287asd_520167', '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-gray-900 text-white relative overflow-hidden border-t-4 border-brand-yellow">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Bar Alert */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm animate-pulse">
            <Check size={18} strokeWidth={4} />
            Não perca essa chance
          </div>
        </div>

        <div className="max-w-6xl mx-auto bg-gray-800/50 rounded-3xl border border-gray-700 shadow-2xl overflow-hidden backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row">
            
            {/* Lado Esquerdo: Copy e Oferta */}
            <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              
              <h2 className="font-display text-4xl md:text-5xl text-brand-yellow mb-2 uppercase leading-none">
                Destrave seu Potencial <br/> <span className="text-white">Agora Mesmo!</span>
              </h2>
              
              <p className="text-gray-300 text-lg font-sans mb-8 leading-relaxed border-l-4 border-brand-yellow pl-4 mt-4">
                Por menos que um café, acesse uma biblioteca completa + seu <strong className="text-white">Leitor Profissional (Organizado e Multiformato).</strong>
              </p>

              {/* Preço */}
              <div className="mb-8">
                <p className="text-gray-400 text-sm font-bold uppercase mb-1 line-through">De R$ 197,00 por apenas:</p>
                <div className="flex items-end gap-2 text-brand-yellow leading-none">
                  <span className="text-7xl font-display">R$ 37,90</span>
                  <span className="text-xl font-bold text-white mb-2">/único</span>
                </div>
                <p className="text-gray-400 text-xs mt-2">Pagamento seguro via PIX ou Cartão.</p>
              </div>

              {/* Lista de Benefícios */}
              <div className="grid sm:grid-cols-2 gap-x-4 gap-y-3 mb-10">
                <div className="flex items-center gap-2 text-sm font-bold text-brand-yellow">
                    <div className="bg-brand-yellow/20 p-1 rounded-full text-brand-yellow">
                      <Gift size={14} strokeWidth={3} />
                    </div>
                    Presente: App Leitor Multiformato
                </div>
                {[
                  "Acesso a 700+ E-books PDF",
                  "Atualizações Gratuitas",
                  "Arquivos Organizados no Drive",
                  "Acesso Vitalício",
                  "Bônus: Curso Leitura Dinâmica",
                  "Garantia de 7 Dias",
                  "Suporte Prioritário"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium text-gray-200">
                    <div className="bg-green-500/20 p-1 rounded-full text-green-400">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                fullWidth 
                onClick={handlePurchase}
                className="py-6 text-xl md:text-2xl shadow-[0px_0px_30px_rgba(204,255,0,0.3)] hover:shadow-[0px_0px_50px_rgba(204,255,0,0.5)] transform hover:scale-[1.02] transition-all"
              >
                SIM! QUERO FOCO + LEITOR AGORA
                <span className="block text-[10px] opacity-70 mt-1 font-normal tracking-wide text-brand-black">
                  (OFERTA DE FIM DE ANO)
                </span>
              </Button>

              <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500 font-bold uppercase">
                <span className="flex items-center gap-1"><ShieldCheck size={14}/> Compra Segura</span>
                <span className="flex items-center gap-1"><Zap size={14}/> Entrega Imediata</span>
              </div>
            </div>

            {/* Lado Direito: Imagem do Livro */}
            <div className="lg:w-2/5 bg-gradient-to-br from-gray-800 to-gray-900 relative flex items-center justify-center p-12 lg:border-l border-gray-700 overflow-hidden group">
              
              {/* Círculo decorativo */}
              <div className="absolute w-64 h-64 bg-brand-yellow rounded-full filter blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
              
              {/* Mockup do Livro 3D CSS */}
              <div className="relative w-48 md:w-64 aspect-[2/3] transform rotate-y-12 rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-all duration-700 ease-out shadow-2xl">
                 {/* Capa */}
                 <div className="absolute inset-0 bg-brand-black border-2 border-gray-700 rounded-r-md flex flex-col items-center justify-between p-6 shadow-2xl z-10">
                    <div className="text-center w-full">
                       <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2">Edição Premium</p>
                       <h3 className="text-3xl font-display text-white leading-none uppercase">Destrave<br/><span className="text-brand-yellow">Potencial</span></h3>
                    </div>
                    
                    <div className="w-16 h-16 rounded-full border-2 border-brand-yellow flex items-center justify-center">
                       <Book className="text-brand-yellow w-8 h-8" />
                    </div>

                    <div className="w-full">
                       <div className="h-px w-full bg-gray-700 mb-2"></div>
                       <p className="text-[10px] text-center text-gray-500 font-sans">
                          700+ LIVROS + LEITOR PRO
                       </p>
                    </div>

                    {/* Selo Bônus */}
                    <div className="absolute -bottom-4 -right-4 bg-brand-red text-white w-16 h-16 rounded-full flex flex-col items-center justify-center shadow-lg transform rotate-12 animate-pulse">
                       <Gift size={16} />
                       <span className="text-[8px] font-bold uppercase">Presente</span>
                    </div>
                 </div>

                 {/* Lombada/Páginas (Efeito 3D) */}
                 <div className="absolute top-1 bottom-1 right-0 w-4 bg-gray-800 rounded-r-sm transform translate-x-2 skew-y-12 shadow-md"></div>
                 <div className="absolute top-1 bottom-1 left-0 w-3 bg-gray-200 transform -translate-x-full skew-y-12 rounded-l-sm border-l border-gray-300 bg-[linear-gradient(90deg,#fff_2px,#eee_2px)] bg-[length:4px_100%]"></div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
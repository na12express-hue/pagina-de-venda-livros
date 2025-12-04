import React from 'react';
import { Smartphone, Bot, Gift, Check, Zap } from 'lucide-react';

export const BonusAppSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-red/10 rounded-full filter blur-[80px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Lado Esquerdo: Texto de Venda */}
          <div className="md:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-brand-red text-white px-4 py-2 font-bold uppercase tracking-widest text-xs rounded-full border border-brand-yellow/50 transform -rotate-2 shadow-[0_0_15px_rgba(255,31,31,0.5)]">
              <Gift size={16} className="text-brand-yellow fill-brand-yellow animate-bounce" />
              Seu Presente de Natal & Ano Novo
            </div>
            
            <div>
              <h2 className="font-display text-5xl md:text-6xl mb-4 leading-none">
                Seu Tutor Particular <br />
                <span className="text-brand-yellow">Baseado em IA</span>
              </h2>
              <p className="text-gray-400 text-lg font-sans leading-relaxed max-w-md">
                Este é o nosso presente para você <strong className="text-white">começar o ano novo na frente de 99% das pessoas.</strong> 
                <br/><br/>
                Não apenas leia. <strong>Entenda.</strong> Receba acesso ao nosso Assistente de Leitura. É como ter o autor ao seu lado para tirar dúvidas 24h.
              </p>
            </div>

            <ul className="space-y-4 font-sans">
              {[
                "Tire dúvidas sobre qualquer capítulo instantaneamente",
                "Peça resumos práticos para aplicar em 2025",
                "Explicações simples para conceitos complexos",
                "Focado 100% no seu aprendizado, sem distrações"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <div className="mt-1 bg-brand-yellow/10 p-1 rounded">
                    <Check size={16} className="text-brand-yellow" strokeWidth={3} />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex items-center gap-4 bg-gray-900/50 p-4 rounded-xl border border-gray-800 w-fit">
               <div className="text-center opacity-50">
                  <p className="text-xs text-gray-400 uppercase font-bold line-through">Preço Normal</p>
                  <p className="text-xl font-display text-gray-500">R$ 97,00</p>
               </div>
               <div className="h-8 w-px bg-gray-700"></div>
               <div className="text-center">
                  <p className="text-xs text-brand-yellow uppercase font-bold flex items-center gap-1">
                    <Gift size={10} /> Presente de Hoje
                  </p>
                  <p className="text-3xl font-display text-brand-yellow">GRÁTIS</p>
               </div>
            </div>
          </div>

          {/* Lado Direito: Visual do App */}
          <div className="md:w-1/2 flex justify-center relative">
             {/* Círculo decorativo atrás */}
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow to-brand-red opacity-20 blur-3xl rounded-full transform scale-75"></div>

             {/* Phone Frame Mockup */}
             <div className="relative w-[300px] md:w-[320px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden z-10">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-20"></div>
                
                {/* Screen Content */}
                <div className="bg-gray-950 h-[600px] w-full flex flex-col pt-12 relative">
                   {/* App Header */}
                   <div className="px-6 pb-4 border-b border-gray-800 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center">
                         <Bot className="text-brand-black" size={24} />
                      </div>
                      <div>
                         <p className="font-bold text-white text-sm">Leitor IA</p>
                         <p className="text-xs text-brand-yellow flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Online
                         </p>
                      </div>
                   </div>

                   {/* Chat Area */}
                   <div className="flex-1 p-4 space-y-6 font-sans text-sm">
                      {/* User Message */}
                      <div className="flex justify-end">
                         <div className="bg-gray-800 text-white p-3 rounded-2xl rounded-tr-sm max-w-[85%] border border-gray-700">
                            Quero metas claras para 2025. O que o livro "Hábitos Atômicos" sugere?
                         </div>
                      </div>

                      {/* AI Response */}
                      <div className="flex justify-start">
                         <div className="bg-brand-yellow text-brand-black p-3 rounded-2xl rounded-tl-sm max-w-[90%] shadow-lg">
                            <p className="mb-2 font-bold flex items-center gap-1"><Zap size={12} fill="black"/> Resposta Rápida:</p>
                            <p>James Clear sugere focar em <strong>sistemas</strong>, não apenas metas.</p>
                            <p className="mt-2">Para 2025, tente melhorar 1% todo dia. Pequenos hábitos diários trazem resultados gigantes no longo prazo.</p>
                         </div>
                      </div>
                      
                      {/* Typing indicator */}
                      <div className="flex gap-1 px-4">
                         <span className="w-2 h-2 bg-gray-700 rounded-full animate-bounce"></span>
                         <span className="w-2 h-2 bg-gray-700 rounded-full animate-bounce delay-75"></span>
                         <span className="w-2 h-2 bg-gray-700 rounded-full animate-bounce delay-150"></span>
                      </div>
                   </div>

                   {/* Input Fake */}
                   <div className="p-4 bg-gray-900 border-t border-gray-800">
                      <div className="bg-gray-800 h-10 rounded-full w-full flex items-center px-4 text-gray-500 text-xs">
                         Digite sua dúvida aqui...
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
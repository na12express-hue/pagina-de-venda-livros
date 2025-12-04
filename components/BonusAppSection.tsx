import React from 'react';
import { FileText, Eye, Folder, Gift, Check, Smartphone, Settings, BookOpen } from 'lucide-react';

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
              <h2 className="font-display text-4xl md:text-6xl mb-4 leading-none uppercase">
                Leitura Sem Esforço: <br />
                <span className="text-brand-yellow">Seu Leitor Exclusivo</span>
              </h2>
              <p className="text-gray-400 text-lg font-sans leading-relaxed max-w-md">
                Este é o nosso presente para você. Transforme seu celular em um <strong className="text-white">Kindle de Alta Performance</strong> e devore o conteúdo da Mega Biblioteca.
              </p>
            </div>

            <ul className="space-y-6 font-sans">
              <li className="flex items-start gap-4 text-gray-300">
                <div className="mt-1 bg-brand-yellow/10 p-2 rounded-lg border border-brand-yellow/20">
                  <FileText size={20} className="text-brand-yellow" strokeWidth={2} />
                </div>
                <div>
                    <strong className="block text-white text-lg mb-1">Compatibilidade Total</strong>
                    <span className="font-medium text-sm text-gray-400">Suporte a todos os formatos da biblioteca: PDF, EPUB, MOBI (Kindle) e DOCX.</span>
                </div>
              </li>

              <li className="flex items-start gap-4 text-gray-300">
                <div className="mt-1 bg-brand-yellow/10 p-2 rounded-lg border border-brand-yellow/20">
                  <Eye size={20} className="text-brand-yellow" strokeWidth={2} />
                </div>
                <div>
                    <strong className="block text-white text-lg mb-1">Conforto Visual</strong>
                    <span className="font-medium text-sm text-gray-400">Modo noturno, modo sépia e ajuste de fonte para leitura prolongada sem cansaço.</span>
                </div>
              </li>

              <li className="flex items-start gap-4 text-gray-300">
                <div className="mt-1 bg-brand-yellow/10 p-2 rounded-lg border border-brand-yellow/20">
                  <Folder size={20} className="text-brand-yellow" strokeWidth={2} />
                </div>
                <div>
                    <strong className="block text-white text-lg mb-1">Organização Inteligente</strong>
                    <span className="font-medium text-sm text-gray-400">Organização automática de 700+ livros por pastas, autores e coleções.</span>
                </div>
              </li>
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

          {/* Lado Direito: Visual do Leitor (Mockup) */}
          <div className="md:w-1/2 flex justify-center relative">
             {/* Círculo decorativo atrás */}
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow to-brand-red opacity-20 blur-3xl rounded-full transform scale-75"></div>

             {/* Phone Frame Mockup */}
             <div className="relative w-[300px] md:w-[320px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden z-10 transform rotate-2 hover:rotate-0 transition-all duration-500">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-20"></div>
                
                {/* Screen Content */}
                <div className="bg-[#1a1a1a] h-[600px] w-full flex flex-col pt-10 relative text-gray-300 font-serif">
                   
                   {/* Reader Header */}
                   <div className="px-6 py-4 flex items-center justify-between border-b border-gray-800 bg-[#1a1a1a] sticky top-0 z-10">
                      <Settings size={20} className="text-gray-500" />
                      <div className="text-center">
                         <p className="text-[10px] uppercase tracking-widest text-gray-500 font-sans">Capítulo 1</p>
                         <p className="text-xs font-bold text-gray-300 font-sans">O Poder do Hábito</p>
                      </div>
                      <BookOpen size={20} className="text-brand-yellow" />
                   </div>

                   {/* Reader Body */}
                   <div className="flex-1 px-6 py-4 space-y-6 text-base leading-relaxed overflow-hidden relative">
                      {/* Gradient Overlay bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent z-10"></div>

                      <p>
                        <span className="text-4xl float-left mr-2 mt-[-10px] font-display text-brand-yellow">T</span>
                        odos nós enfrentamos desafios ao tentar mudar nossos hábitos. A verdadeira mudança não vem de transformações radicais da noite para o dia, mas sim do efeito composto de pequenas decisões.
                      </p>
                      <p>
                        Imagine melhorar apenas 1% todos os dias. No final de um ano, você não será duas vezes melhor, mas sim <span className="bg-brand-yellow/20 text-brand-yellow px-1 rounded">37 vezes melhor.</span>
                      </p>
                      <p>
                        É isso que chamamos de juros compostos do autoaperfeiçoamento. O mesmo vale para o dinheiro. O mesmo vale para o conhecimento.
                      </p>
                      <p className="opacity-50 blur-[1px]">
                        Muitas pessoas subestimam o que podem fazer em um ano e superestimam o que podem fazer em um dia. O segredo está na consistência, não na intensidade.
                      </p>
                   </div>

                   {/* Reader Footer / Progress */}
                   <div className="px-6 py-6 bg-[#151515] border-t border-gray-800 font-sans z-20">
                      <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">
                         <span>Pág 12 de 240</span>
                         <span>35% Lido</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                         <div className="h-full bg-brand-yellow w-[35%] rounded-full shadow-[0_0_10px_#CCFF00]"></div>
                      </div>
                      <div className="mt-4 flex justify-between items-center opacity-50">
                         <div className="w-8 h-8 rounded-full bg-gray-800"></div>
                         <div className="w-8 h-8 rounded-full bg-gray-800"></div>
                         <div className="w-8 h-8 rounded-full bg-gray-800"></div>
                         <div className="w-12 h-8 rounded-full bg-gray-800"></div>
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
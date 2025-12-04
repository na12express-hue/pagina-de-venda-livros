import React from 'react';
import { ArrowRight, Brain, Smartphone, X, Check, CloudFog, Zap } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section className="py-12 bg-white overflow-hidden relative border-t border-gray-100">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <h2 className="text-3xl md:text-4xl font-display text-brand-black mb-4 uppercase leading-tight">
            Qual caminho você <br/><span className="bg-brand-yellow px-2 inline-block transform -rotate-1 border-2 border-brand-black">escolhe hoje?</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-gray-600 font-medium leading-relaxed">
            A diferença entre continuar estagnado ou evoluir está na qualidade da informação que você consome.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-stretch max-w-4xl mx-auto relative">
          
          {/* Seta Central (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white border-2 border-brand-black rounded-full p-2 shadow-lg">
             <ArrowRight className="w-5 h-5 text-brand-black" strokeWidth={3} />
          </div>

          {/* COLUNA 1: ANTES (Estado Atual) */}
          <div className="h-full opacity-0 animate-[slideUp_1s_ease-out_forwards]" style={{ animationDelay: '200ms' }}>
             <div className="bg-gray-50 rounded-2xl p-6 border-2 border-dashed border-gray-300 h-full flex flex-col relative overflow-hidden transition-all hover:bg-gray-100">
                
                {/* Tag */}
                <div className="inline-block bg-gray-200 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded mb-4 uppercase tracking-wider w-fit">
                   Antes
                </div>

                {/* Ícone Principal */}
                <div className="bg-gray-200 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-gray-500">
                   <Smartphone size={24} />
                </div>

                <h3 className="font-display text-xl text-gray-500 mb-2 uppercase leading-none">
                   Estado Atual: <br/>Distração Digital
                </h3>
                
                <div className="h-1 w-12 bg-gray-300 mb-4"></div>

                {/* Lista de Problemas */}
                <ul className="space-y-3 font-sans text-gray-500 text-sm font-medium flex-1">
                   <li className="flex items-start gap-2">
                      <X className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-50" />
                      Rolando o feed sem perceber o tempo passar
                   </li>
                   <li className="flex items-start gap-2">
                      <CloudFog className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-50" />
                      Mente dispersa, ansiedade por comparação
                   </li>
                   <li className="flex items-start gap-2">
                      <X className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-50" />
                      Dificuldade de finalizar tarefas simples
                   </li>
                   <li className="flex items-start gap-2">
                      <X className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-50" />
                      Informação demais, profundidade zero
                   </li>
                </ul>
             </div>
          </div>

          {/* COLUNA 2: DEPOIS (Leitura + IA) */}
          <div className="h-full opacity-0 animate-[slideUp_1s_ease-out_forwards]" style={{ animationDelay: '400ms' }}>
             <div className="bg-white rounded-2xl p-6 border-4 border-brand-black h-full flex flex-col shadow-[8px_8px_0px_rgba(0,0,0,1)] relative overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                
                {/* Tag */}
                <div className="inline-block bg-brand-yellow text-brand-black text-[10px] font-bold px-2 py-0.5 rounded mb-4 uppercase tracking-wider w-fit border border-brand-black">
                   Depois
                </div>

                {/* Ícone Principal */}
                <div className="bg-brand-black w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-brand-yellow">
                   <Brain size={24} />
                </div>

                <h3 className="font-display text-xl text-brand-black mb-2 uppercase leading-none">
                   Nova Realidade: <br/>Clareza e Evolução
                </h3>

                <div className="h-1 w-12 bg-brand-yellow mb-4"></div>

                {/* Lista de Soluções */}
                <ul className="space-y-3 font-sans text-brand-black text-sm font-bold flex-1">
                   <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-0.5 rounded-full text-green-700">
                        <Check size={12} strokeWidth={4} />
                      </div>
                      Mente organizada e foco real
                   </li>
                   <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-0.5 rounded-full text-green-700">
                        <Zap size={12} strokeWidth={4} />
                      </div>
                      Entendimento rápido com ajuda da IA
                   </li>
                   <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-0.5 rounded-full text-green-700">
                        <Check size={12} strokeWidth={4} />
                      </div>
                      Produtividade estável e consistente
                   </li>
                   <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-0.5 rounded-full text-green-700">
                        <Check size={12} strokeWidth={4} />
                      </div>
                      Raciocínio mais claro no dia a dia
                   </li>
                </ul>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
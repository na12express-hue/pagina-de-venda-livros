import React from 'react';
import { Button } from './Button';
import { CheckCircle2, Star, BookOpen, Gift } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    // Open checkout link in new tab
    window.open('https://pay.cakto.com.br/3287asd_520167', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center bg-brand-gray overflow-hidden pt-10 pb-20">
      {/* Background with blur */}
      <div className="absolute inset-0 bg-library-blur bg-cover bg-center opacity-10"></div>
      
      {/* Dynamic Background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-brand-red text-white px-4 py-1.5 font-bold uppercase tracking-widest text-xs mb-4 rotate-1 rounded-sm shadow-lg">
              <Gift size={14} className="animate-bounce" />
              Oferta de Natal e Ano Novo
            </div>
            
            <div className="relative z-10">
              <h1 className="font-display text-5xl md:text-7xl leading-[0.9] text-brand-black tracking-tighter mb-4">
                DESTRAVE <br />
                <span className="text-brand-red">SEU POTENCIAL</span>
              </h1>
              
              <div className="inline-block bg-brand-yellow border-2 border-brand-black px-4 py-2 box-shadow-hard transform -rotate-1 mb-2">
                 <span className="font-display text-xl md:text-3xl text-brand-black uppercase tracking-wide">
                   (700+ LIVROS + LEITOR PROFISSIONAL)
                 </span>
              </div>
            </div>
            
            <p className="font-sans text-lg md:text-xl text-gray-700 font-medium max-w-lg mx-auto md:mx-0 leading-relaxed mt-4">
              A Biblioteca Definitiva de Marketing, Negócios e Desenvolvimento Pessoal. Leia em qualquer formato (PDF, MOBI, EPUB) com organização e conforto visual, acessando tudo via Google Drive.
            </p>

            {/* Niche Tags moved here */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 py-2">
                {['Business', 'Mindset', 'Marketing', 'Vendas', 'Psicologia'].map(tag => (
                  <span key={tag} className="bg-white border border-gray-300 text-gray-600 text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <Button onClick={scrollToPricing} className="text-sm md:text-base px-6 py-5">
                GARANTIR MEU ACESSO + LEITOR PROFISSIONAL POR R$ 37,90
              </Button>
            </div>

            <div className="pt-6 flex flex-col md:flex-row items-center gap-4 text-sm font-bold text-gray-700">
               <div className="flex -space-x-4 justify-center md:justify-start">
                 {[1,2,3,4,5].map(i => (
                   <img key={i} src={`https://picsum.photos/seed/${i * 155}/50/50`} className="w-10 h-10 rounded-full border-2 border-white grayscale hover:grayscale-0 transition-all" alt="Avatar" />
                 ))}
               </div>
               <div className="flex items-center gap-1 justify-center md:justify-start">
                 <div className="flex text-yellow-500"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><div className="relative"><Star fill="currentColor" size={16} /><div className="absolute inset-0 overflow-hidden w-[70%]"><Star fill="currentColor" size={16} /></div></div></div>
                 <span>+15.000 Alunos</span>
               </div>
            </div>
          </div>

          {/* Right Content - Visual Composition */}
          <div className="md:w-1/2 flex justify-center relative mt-10 md:mt-0">
             <div className="relative w-full max-w-md aspect-[3/4]">
                
                {/* Tablet Frame Mockup */}
                <div className="absolute inset-0 bg-brand-black rounded-[2rem] p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 border-4 border-gray-800">
                  <div className="bg-gray-100 w-full h-full rounded-[1.5rem] overflow-hidden border-2 border-gray-900 relative flex flex-col">
                     
                     {/* Tablet Header / Camera */}
                     <div className="h-6 bg-gray-200 flex items-center justify-center border-b border-gray-300">
                        <div className="w-12 h-3 bg-gray-400 rounded-full opacity-50"></div>
                     </div>
                     
                     {/* Screen Content: Reader Interface Simulation */}
                     <div className="flex-1 bg-white flex flex-col relative overflow-hidden">
                        
                        {/* App Top Bar */}
                        <div className="bg-brand-black p-4 flex items-center gap-3">
                           <div className="bg-brand-yellow p-1.5 rounded-lg">
                              <BookOpen size={20} className="text-brand-black" />
                           </div>
                           <div>
                              <p className="text-white font-bold text-sm leading-none">Leitor Inteligente</p>
                              <p className="text-gray-400 text-[10px] uppercase tracking-wider">Modo Leitura • Ativo</p>
                           </div>
                        </div>

                        {/* Reading Content Simulation */}
                        <div className="flex-1 p-6 space-y-4 bg-gray-50 font-serif">
                           <h3 className="font-display text-2xl text-brand-black leading-none">Essencialismo</h3>
                           <p className="text-xs text-gray-500 font-sans uppercase tracking-widest mb-4">Greg McKeown</p>
                           
                           <div className="space-y-3 text-sm leading-relaxed text-gray-800">
                              <p>
                                <span className="text-3xl float-left mr-2 font-display text-brand-yellow">O</span>
                                caminho do Essencialista é o caminho para o controle da sua própria vida. Não é sobre fazer mais, é sobre fazer o certo.
                              </p>
                              <p className="bg-brand-yellow/20 p-2 rounded border-l-2 border-brand-yellow">
                                "Se você não priorizar sua vida, alguém fará isso por você."
                              </p>
                           </div>

                           {/* Progress Bar Simulation */}
                           <div className="mt-8 bg-gray-200 rounded-full h-1.5 w-full">
                              <div className="bg-brand-black w-[35%] h-full rounded-full"></div>
                           </div>
                           <div className="flex justify-between text-[10px] text-gray-400 font-sans uppercase font-bold">
                              <span>Pág 45</span>
                              <span>35% Concluído</span>
                           </div>
                        </div>

                     </div>
                  </div>
                </div>

                {/* Floating Badge Bottom Left */}
                <div className="absolute bottom-12 -left-4 bg-white text-brand-black px-5 py-3 font-bold font-sans text-sm uppercase rounded-lg border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-3 z-20 flex items-center gap-2">
                   <div className="bg-green-100 p-1 rounded-full">
                     <CheckCircle2 className="w-4 h-4 text-green-600" />
                   </div>
                   <div>
                      <p className="leading-none text-[10px] text-gray-500">Acesso via</p>
                      <p className="leading-none text-base">Google Drive</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
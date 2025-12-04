import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { StorySection } from './components/StorySection';
import { BonusAppSection } from './components/BonusAppSection';
import { ShieldCheck } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-red selection:text-white">
      <Hero />
      
      {/* New AI App Bonus Section - Moved to 2nd position */}
      <BonusAppSection />
      
      <Features />
      
      {/* Transformation Story Section */}
      <StorySection />

      <Testimonials />
      
      <Pricing />
      
      {/* FAQ / Guarantee Section */}
      <section className="py-24 bg-brand-black text-white text-center border-t border-gray-900 relative overflow-hidden">
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full filter blur-[100px] pointer-events-none"></div>

         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="w-20 h-20 bg-brand-yellow rounded-2xl mx-auto flex items-center justify-center text-brand-black mb-8 shadow-[0_0_30px_rgba(204,255,0,0.4)] transform hover:scale-105 transition-transform duration-300">
               <ShieldCheck size={40} strokeWidth={2} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display uppercase mb-8 text-white leading-tight tracking-wide">
               Garantia Total: <br className="md:hidden" />
               <span className="text-brand-yellow">Sinta a Clareza em 7 Dias</span> <br/>
               ou Seu Dinheiro de Volta.
            </h2>
            
            <p className="text-gray-200 text-xl md:text-2xl font-bold font-sans max-w-3xl mx-auto leading-relaxed border-l-4 border-brand-yellow pl-6 py-2 md:border-none md:pl-0">
               "Se você achar que o conteúdo não vale 10x o que você pagou, nós devolvemos 100% do seu dinheiro. Sem perguntas."
            </p>
         </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
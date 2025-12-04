import React from 'react';
import { Testimonial } from '../types';
import { Star, CheckCircle2 } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Duarte",
    role: "27, Analista de Marketing",
    content: "Parecia que eu estava lendo com um professor do lado. Quando travava em algum conceito, perguntava no app e resolvia na hora.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    stars: 5
  },
  {
    id: 2,
    name: "João Farias",
    role: "31, Empreendedor",
    content: "Sempre comprei livros, mas nunca consegui aplicar. O livro + o assistente da IA me fez entender e usar o conteúdo na prática.",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    stars: 4
  },
  {
    id: 3,
    name: "Lucas N.",
    role: "22, Estudante",
    content: "Baixei o PDF no Drive e usei o app para tirar dúvidas enquanto lia. Organização e clareza que eu precisava.",
    avatarUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=200&auto=format&fit=crop",
    stars: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 opacity-0 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-display text-brand-black uppercase mb-2">
            Resultados na Prática
          </h2>
          <p className="font-sans text-gray-500 text-sm md:text-base">
            O que acontece quando você une leitura e tecnologia.
          </p>
        </div>

        {/* 
            Desktop: Grid 3 colunas
            Mobile: Flex com scroll horizontal (Carousel/Swipe)
        */}
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-5 pb-6 px-1 md:pb-0 md:px-0 scrollbar-hide">
          {testimonials.map((t, idx) => (
            <div 
              key={t.id} 
              className="min-w-[85vw] md:min-w-0 snap-center bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between opacity-0 animate-slideUp"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div>
                {/* Stars - Small & Realistic */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={`${i < t.stars ? "fill-brand-black text-brand-black" : "text-gray-300 fill-gray-100"}`} 
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-serif italic text-gray-700 text-sm leading-relaxed mb-6">
                  "{t.content}"
                </p>
              </div>

              {/* User Info & Badge */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
                <img 
                  src={t.avatarUrl} 
                  alt={`Foto de ${t.name}`} 
                  className="w-10 h-10 rounded-full object-cover filter saturate-50 contrast-110" 
                />
                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <h4 className="font-bold text-brand-black font-sans text-sm">{t.name}</h4>
                  </div>
                  <p className="text-xs text-gray-500 font-medium mb-1">{t.role}</p>
                  
                  <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full w-fit">
                    <CheckCircle2 size={10} strokeWidth={3} />
                    COMPRA VERIFICADA
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
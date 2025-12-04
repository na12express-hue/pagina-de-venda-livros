import React from 'react';
import { BookCategory } from '../types';
import { TrendingUp, Briefcase, Brain, Heart, Wallet, Globe, BookOpen, Coffee, ArrowRight } from 'lucide-react';
import { Button } from './Button';

const categories: BookCategory[] = [
  { title: "Marketing & Vendas", count: 120, description: "", iconName: "TrendingUp" },
  { title: "Empreendedorismo", count: 150, description: "", iconName: "Briefcase" },
  { title: "Mentalidade", count: 90, description: "", iconName: "Brain" },
  { title: "Relacionamentos", count: 60, description: "", iconName: "Heart" },
  { title: "Finanças", count: 80, description: "", iconName: "Wallet" },
  { title: "Biografias", count: 50, description: "", iconName: "Globe" },
  { title: "Produtividade", count: 70, description: "", iconName: "Coffee" },
  { title: "Clássicos", count: 80, description: "", iconName: "BookOpen" },
];

const getIcon = (name: string) => {
  const style = "w-5 h-5";
  switch (name) {
    case 'TrendingUp': return <TrendingUp className={style} />;
    case 'Briefcase': return <Briefcase className={style} />;
    case 'Brain': return <Brain className={style} />;
    case 'Heart': return <Heart className={style} />;
    case 'Wallet': return <Wallet className={style} />;
    case 'Globe': return <Globe className={style} />;
    case 'Coffee': return <Coffee className={style} />;
    default: return <BookOpen className={style} />;
  }
};

export const Features: React.FC = () => {
  const handlePurchase = () => {
     window.open('https://pay.cakto.com.br/3287asd_520167', '_blank');
  };

  return (
    <section className="py-12 bg-brand-black text-white border-b border-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-brand-yellow font-bold uppercase tracking-widest text-xs md:text-sm">O que você vai receber</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2">Explore o Acervo</h2>
        </div>

        {/* Grid Compacto */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-gray-900/50 border border-gray-800 p-3 rounded-lg hover:border-brand-yellow/50 transition-all duration-300 group cursor-pointer flex items-center gap-3">
              <div className="bg-gray-800 w-10 h-10 rounded flex-shrink-0 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-black transition-colors">
                {getIcon(cat.iconName)}
              </div>
              <div>
                <h3 className="font-display text-sm md:text-base leading-tight">{cat.title}</h3>
                <span className="text-xs text-gray-400 font-sans">+{cat.count} Livros</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="mt-10 text-center">
           <Button onClick={handlePurchase} className="px-8 py-3 text-sm md:text-base">
              ACESSAR ACERVO COMPLETO <ArrowRight className="ml-2 w-4 h-4" />
           </Button>
           <p className="mt-3 text-xs text-gray-500 font-medium uppercase tracking-wide">
              Acesso Imediato via Google Drive
           </p>
        </div>
      </div>
    </section>
  );
};
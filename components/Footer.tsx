import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 py-10 border-t border-gray-900 font-sans">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left text-xs font-medium opacity-60">
          <p>© 2024 Digital Knowledge. Todos os direitos reservados.</p>
        </div>
        
        <div className="flex gap-8 text-xs font-bold tracking-wider">
          <a href="#" className="hover:text-brand-yellow transition-colors uppercase">Termos de Uso</a>
          <a href="#" className="hover:text-brand-yellow transition-colors uppercase">Privacidade</a>
          <a href="#" className="hover:text-brand-yellow transition-colors uppercase">Suporte</a>
        </div>
      </div>
    </footer>
  );
};
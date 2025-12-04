import React, { useState, useRef, useEffect } from 'react';
import { Send, Library, MessageSquare, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToBook } from '../services/geminiService';
import { ChatMessage, ChatRole } from '../types';

export const BookChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: ChatRole.MODEL, text: "Olá! Sou o Bibliotecário Digital. Com acesso a mais de 700 livros, como posso ajudar você a evoluir hoje?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: ChatRole.USER, text: userText }]);
    setIsLoading(true);

    try {
      const responseText = await sendMessageToBook(userText);
      setMessages(prev => [...prev, { role: ChatRole.MODEL, text: responseText }]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-brand-black">
      <div className="bg-brand-yellow p-4 flex items-center justify-between border-b-4 border-brand-black">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-brand-black rounded-lg">
            <Sparkles className="w-6 h-6 text-brand-yellow" />
          </div>
          <div>
            <h3 className="text-brand-black font-display text-2xl uppercase tracking-wide">Bibliotecário IA</h3>
            <p className="text-brand-black text-xs font-bold font-sans opacity-70">Acesse 700+ Livros em segundos</p>
          </div>
        </div>
        <Library className="text-brand-black opacity-20 w-10 h-10" />
      </div>

      <div className="h-[400px] overflow-y-auto p-6 bg-gray-50 space-y-4 font-sans">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[85%] p-4 rounded-2xl shadow-sm text-base font-medium leading-relaxed border-2 border-brand-black ${
                msg.role === ChatRole.USER 
                  ? 'bg-brand-black text-white rounded-br-none' 
                  : 'bg-white text-brand-black rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl rounded-bl-none border-2 border-brand-black shadow-sm flex items-center space-x-2">
              <Loader2 className="w-5 h-5 animate-spin text-brand-black" />
              <span className="text-sm font-bold text-gray-500">Consultando o acervo...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="p-4 bg-gray-100 border-t-4 border-brand-black flex space-x-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ex: Tem livros sobre liderança?"
          disabled={isLoading}
          className="flex-1 bg-white border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 focus:ring-brand-yellow focus:border-brand-black font-sans text-brand-black font-medium transition-all"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-brand-black text-brand-yellow p-4 rounded-lg hover:bg-gray-900 disabled:opacity-50 transition-colors border-2 border-transparent hover:border-brand-yellow"
        >
          <Send className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};
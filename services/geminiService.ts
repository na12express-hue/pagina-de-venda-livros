import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Safely access environment variable
const getApiKey = (): string => {
  try {
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      return process.env.API_KEY;
    }
  } catch (e) {
    // Ignore error
  }
  return '';
};

const apiKey = getApiKey();

// Initialize ai only if key is present
let ai: GoogleGenAI | null = null;
try {
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
  }
} catch (error) {
  console.error("Failed to initialize GoogleGenAI", error);
}

const SYSTEM_INSTRUCTION = `
Você é o "Bibliotecário Digital", uma IA especialista encarregada da "Mega Biblioteca 700+".
Esta coleção contém mais de 700 livros digitais sobre Marketing, Negócios, Desenvolvimento Pessoal, Finanças e Psicologia.
Seu objetivo é ajudar os usuários a encontrarem o conhecimento que precisam dentro desta vasta coleção.

Regras:
1. Responda em Português do Brasil de forma energética, moderna e prestativa.
2. Se o usuário perguntar sobre um tópico (ex: "tem algo sobre vendas?"), confirme que a biblioteca cobre isso extensivamente e cite exemplos hipotéticos de tópicos cobertos.
3. Use emojis ocasionalmente 📚🚀.
4. Mantenha as respostas curtas e objetivas.
5. Se perguntarem preço, diga que está em promoção especial hoje e direcione para a seção de preços abaixo.
6. Aja como um curador entusiasmado do conhecimento.
`;

let chatSession: Chat | null = null;

export const initializeChat = () => {
  if (!ai) return;
  
  try {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  } catch (error) {
    console.error("Failed to initialize chat:", error);
  }
};

export const sendMessageToBook = async (message: string): Promise<string> => {
  if (!ai) {
    return "Ops! Minha conexão com a biblioteca está desligada (API Key ausente ou ambiente não suportado).";
  }

  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    return "Erro ao acessar os arquivos da biblioteca.";
  }

  try {
    const result: GenerateContentResponse = await chatSession.sendMessage({
      message
    });
    return result.text || "Sem resposta no momento.";
  } catch (error) {
    console.error("Error sending message:", error);
    return "Tive um problema ao consultar o acervo. Tente novamente!";
  }
};

import { GoogleGenAI, Type } from "@google/genai";

// Initialize the Gemini AI client using the process.env.API_KEY exclusively.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateServiceDescription = async (title: string, category: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a luxury marketing description for a service called "${title}" in the "${category}" category in Marbella, Spain. Focus on elegance, exclusivity, and high-end lifestyle. Max 100 words.`,
      config: {
        temperature: 0.7,
      }
    });
    // The .text property directly returns the generated string from GenerateContentResponse
    return response.text || "";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating description. Please write manually.";
  }
};

export const chatWithConcierge = async (history: {role: 'user' | 'model', text: string}[], message: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "You are the Marhaba Marbella Luxury Concierge. You assist elite clients in finding yachts, villas, and experiences in Marbella. You are sophisticated, knowledgeable, and always prioritize privacy and excellence. Keep responses concise and helpful.",
        tools: [{ googleSearch: {} }]
      }
    });

    // We send the current message to the chat session.
    const response = await chat.sendMessage({ message: message });
    return {
        text: response.text || "I'm sorry, I couldn't process that. How can I assist you further with Marbella's luxury offerings?",
        grounding: response.candidates?.[0]?.groundingMetadata?.groundingChunks
    };
  } catch (error) {
    console.error("Concierge Chat Error:", error);
    return { text: "Our concierge services are currently busy. Please try again in a moment." };
  }
};

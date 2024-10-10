import { env } from "../env";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
export const chatWithGEMINI = async (prompt: string) => {
    const result = await model.generateContent([prompt]);
    return result.response.text();
}


export const reverseTextFormat = (text: string) => {
    return text
        .split("-") // Substitui hífens por espaços
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza a primeira letra de cada palavra
        .join(" "); // Junta as palavras de volta com espaços
};
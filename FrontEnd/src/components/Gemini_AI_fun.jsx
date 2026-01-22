import { GoogleGenerativeAI } from "@google/generative-ai";
import { Gemini_APi_KEY } from "../Utils/API";

const gemini =new GoogleGenerativeAI( Gemini_APi_KEY)

export const Gemini_Ai_Model = gemini.getGenerativeModel({
  model: "gemini-2.5-flash",
});

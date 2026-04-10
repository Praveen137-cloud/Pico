const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

/**
 * Generates a personalized hint for a student based on their current problem and attempt.
 * @param {Object} context - { problemTitle, problemDesc, userCode, lastError, currentLesson }
 * @returns {Promise<string>}
 */
async function generateHint(context) {
  const { problemTitle, problemDesc, userCode, lastError, currentLesson } = context;

  const prompt = `
    You are Pico, a witty and expert parrot DSA tutor. 
    The student is stuck on a programming problem. 
    
    PROBLEM: ${problemTitle}
    DESCRIPTION: ${problemDesc}
    
    USER'S CURRENT ATTEMPT / CODE:
    ${userCode || "[No code yet]"}
    
    LAST ERROR / FEEDBACK:
    ${lastError || "None"}

    PICO'S GOAL:
    Provide a concise, witty, and personalized hint. 
    DO NOT give away the direct answer or the full code. 
    Nudge them in the right direction using logic or conceptual advice.
    Keep the tone cheeky but helpful (Pico the Parrot).
    Use a few emojis like 🦜, 🌻, 💠.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Hint Error:", error);
    return "🦜 Pico: 'My logic buffers are a bit scrambled! Try re-checking your loops while I snack on some seeds.'";
  }
}

module.exports = { generateHint };

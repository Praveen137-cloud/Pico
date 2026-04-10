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

/**
 * Generates engineering career guidance based on user input.
 * @param {Object} input - { branch, interests, goal }
 * @returns {Promise<string>}
 */
async function generateCareerAdvice(input) {
  const { branch, interests, goal } = input;

  const prompt = `
    You are the Elite Engineering Career Advisor for Pico Academy.
    Provide a professional, visionary, and highly detailed career roadmap for an engineering student.
    
    STUDENT BRANCH: ${branch}
    INTERESTS/SKILLS: ${interests}
    LONG-TERM GOAL: ${goal}
    
    REQUIREMENTS:
    1. Structure the response with clear phases (Phase 1: Foundations, Phase 2: Specialization, Phase 3: Market Readiness).
    2. Suggest specific technologies, certifications, and project ideas.
    3. Keep the tone inspiring and elite.
    4. Use professional formatting with Markdown (bolding, lists, etc.).
    5. Add a signature from "The Pico Career Matrix".
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Career Guidance Error:", error);
    return "The Career Matrix is currently recalibrating. Please try again shortly.";
  }
}

module.exports = { generateHint, generateCareerAdvice };

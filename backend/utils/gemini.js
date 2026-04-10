const axios = require('axios');
require('dotenv').config();

/**
 * Core function to call Gemini API with multi-version fallback strategy.
 * Tries stable v1 first, then fallback to v1beta.
 * Tries gemini-1.5-flash then gemini-pro.
 */
async function callGeminiShotgun(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is missing from environment.");

  // Strategies to try in order
  const strategies = [
    { version: 'v1', model: 'gemini-1.5-flash' },
    { version: 'v1beta', model: 'gemini-1.5-flash' },
    { version: 'v1', model: 'gemini-pro' },
    { version: 'v1beta', model: 'gemini-pro' }
  ];

  let lastError = null;

  for (const strategy of strategies) {
    try {
      const url = `https://generativelanguage.googleapis.com/${strategy.version}/models/${strategy.model}:generateContent?key=${apiKey}`;
      
      const payload = {
        contents: [{
          parts: [{ text: prompt }]
        }]
      };

      const response = await axios.post(url, payload, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 10000 // 10s timeout per attempt
      });

      if (response.data && response.data.candidates && response.data.candidates[0].content) {
        console.log(`✅ SUCCESS using ${strategy.version}/${strategy.model}`);
        return response.data.candidates[0].content.parts[0].text;
      }
    } catch (error) {
      console.warn(`⚠️ Attempt failed: ${strategy.version}/${strategy.model} - ${error.message}`);
      lastError = error;
      // Continue to next strategy...
    }
  }

  console.error("❌ ALL GEMINI STRATEGIES EXHAUSTED.");
  throw lastError || new Error("All AI models failed to respond.");
}

/**
 * Generates a personalized hint for a student based on their current problem and attempt.
 */
async function generateHint(context) {
  const { problemTitle, problemDesc, userCode, lastError } = context;

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
    return await callGeminiShotgun(prompt);
  } catch (error) {
    return "🦜 Pico: 'My logic buffers are a bit scrambled! Try re-checking your loops while I snack on some seeds.'";
  }
}

/**
 * Generates engineering career guidance based on user input.
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
    return await callGeminiShotgun(prompt);
  } catch (error) {
    console.error("Gemini Career Advice Error:", error);
    return "The Career Matrix is currently recalibrating. Please try again shortly.";
  }
}

module.exports = { generateHint, generateCareerAdvice };

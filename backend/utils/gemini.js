const axios = require('axios');
require('dotenv').config();

let workingModelCache = null;

/**
 * Advanced AI Discovery and Sanitization Engine (Deep Forge)
 * Removes hidden spaces and ensures safe URL transmission.
 */
async function callGeminiDeepForge(prompt) {
  // 1. Sanitize the API Key (Crucial for Render environment variables)
  const rawKey = process.env.GEMINI_API_KEY;
  if (!rawKey) throw new Error("GEMINI_API_KEY is missing from environment.");
  const apiKey = rawKey.trim(); // Remove leading/trailing newlines or spaces
  
  // 2. Multi-Path Strategy with Verified Identifiers
  const strategies = [
    { version: 'v1beta', model: 'gemini-flash-latest' },
    { version: 'v1', model: 'gemini-2.0-flash' },
    { version: 'v1', model: 'gemini-1.5-flash-latest' },
    { version: 'v1', model: 'gemini-1.5-flash' },
    { version: 'v1', model: 'gemini-pro' }
  ];

  let lastError = null;

  for (const strategy of strategies) {
    try {
      // Use encodeURIComponent to safe-pass key symbols like - and _
      const url = `https://generativelanguage.googleapis.com/${strategy.version}/models/${strategy.model}:generateContent?key=${encodeURIComponent(apiKey)}`;
      
      const response = await axios.post(url, {
        contents: [{ parts: [{ text: prompt }] }]
      }, { 
        headers: { 'Content-Type': 'application/json' },
        timeout: 12000 
      });

      if (response.data && response.data.candidates && response.data.candidates[0].content) {
        return response.data.candidates[0].content.parts[0].text;
      }
    } catch (error) {
      console.warn(`Deep Forge Attempt failed: ${strategy.version}/${strategy.model}`);
      lastError = error;
    }
  }

  // If all logic fails, attempt a low-level diagnostic to logs
  try {
    const diagUrl = `https://generativelanguage.googleapis.com/v1/models?key=${encodeURIComponent(apiKey)}`;
    const diagRes = await axios.get(diagUrl);
    console.log("Diagnostic Success - Models List retrieved. Logic should have worked. Check model names.");
  } catch (diagErr) {
    console.error("Diagnostic Failure - API Key rejected at fundamental level:", diagErr.message);
  }

  throw lastError || new Error("All AI strategies exhausted.");
}

/**
 * Generates a personalized hint.
 */
async function generateHint(context) {
  const { problemTitle, problemDesc, userCode, lastError } = context;
  const prompt = `Pico Parrot DSA Hint:\nProblem: ${problemTitle}\nCode: ${userCode}\nError: ${lastError}\nRules: Be witty, use emojis, don't give answer.`;
  
  try {
    return await callGeminiDeepForge(prompt);
  } catch (error) {
    return "🦜 Pico: 'My logic buffers are a bit scrambled! Let's check your logic while I snack on some seeds.'";
  }
}

/**
 * Generates career guidance.
 */
async function generateCareerAdvice(input) {
  const { branch, interests, goal } = input;
  const prompt = `Elite Engineering Roadmap:\nBranch: ${branch}\nSkills: ${interests}\nGoal: ${goal}\nProvide a 3-phase professional Markdown roadmap. Signature: "The Pico Career Matrix".`;

  try {
    return await callGeminiDeepForge(prompt);
  } catch (error) {
    console.error("Deep Forge Career Advice Error:", error.message);
    return "The Career Matrix is currently recalibrating systems. Please try again in 60 seconds.";
  }
}

module.exports = { generateHint, generateCareerAdvice };

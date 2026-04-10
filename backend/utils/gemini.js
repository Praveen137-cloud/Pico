const axios = require('axios');
require('dotenv').config();

let workingModelCache = null;

/**
 * Scans for a working model-version combination for the user's key.
 */
async function scanForWorkingModel(apiKey) {
  if (workingModelCache) return workingModelCache;

  console.log("🔍 STARTING AI MODEL SCAN...");
  
  const models = [
    'gemini-1.5-flash',
    'gemini-1.5-pro',
    'gemini-pro',
    'gemini-1.0-pro',
    'gemini-1.5-flash-8b'
  ];
  const versions = ['v1', 'v1beta'];

  for (const model of models) {
    for (const version of versions) {
      try {
        const url = `https://generativelanguage.googleapis.com/${version}/models/${model}:generateContent?key=${apiKey}`;
        const res = await axios.post(url, { contents: [{ parts: [{ text: 'hi' }] }] }, { timeout: 5000 });
        
        if (res.data && res.data.candidates) {
          console.log(`✅ FOUND WORKING AI PATH: ${version}/${model}`);
          workingModelCache = { version, model };
          return workingModelCache;
        }
      } catch (err) {
        // Skip and try next
      }
    }
  }

  console.error("❌ AI MODEL SCAN FAILED: NO WORKING PATHS FOUND.");
  throw new Error("Pico Matrix is offline. Please check your API key activation.");
}

/**
 * Core function to call Gemini API with self-healing scanner.
 */
async function callGemini(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY missing");

  try {
    const config = await scanForWorkingModel(apiKey);
    const url = `https://generativelanguage.googleapis.com/${config.version}/models/${config.model}:generateContent?key=${apiKey}`;
    
    const response = await axios.post(url, {
      contents: [{ parts: [{ text: prompt }] }]
    }, { timeout: 15000 });

    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Gemini Call Error:", error.message);
    // Clear cache to force rescan on next attempt if it was a transient error
    if (error.response && error.response.status === 404) workingModelCache = null;
    throw error;
  }
}

/**
 * Generates a personalized hint.
 */
async function generateHint(context) {
  const { problemTitle, problemDesc, userCode, lastError } = context;
  const prompt = `PARROT TUTOR HINT:\nProblem: ${problemTitle}\nDesc: ${problemDesc}\nCode: ${userCode}\nError: ${lastError}\nKeep it witty and helpful as Pico the Parrot.`;
  
  try {
    return await callGemini(prompt);
  } catch (error) {
    return "🦜 Pico: 'My logic buffers are a bit scrambled! Check your loops while I snack on seeds.'";
  }
}

/**
 * Generates career guidance.
 */
async function generateCareerAdvice(input) {
  const { branch, interests, goal } = input;
  const prompt = `ENGINEERING CAREER ROADMAP:\nBranch: ${branch}\nInterests: ${interests}\nGoal: ${goal}\nProvide a detailed 3-phase roadmap in professional Markdown.`;

  try {
    return await callGemini(prompt);
  } catch (error) {
    console.error("Career Advice Error:", error);
    return "The Career Matrix is currently recalibrating. Please try again shortly.";
  }
}

module.exports = { generateHint, generateCareerAdvice };

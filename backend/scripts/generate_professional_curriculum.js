const mongoose = require('mongoose');
const Subject = require('../models/Subject');
const curriculumData = require('./curriculum/library');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pico_dsa';

const picoQuotes = [
  "Welcome, puny human! Let's see if your slow CPU can handle this...",
  "🦜 Pico: 'Listen up, seed-brain! This is important.'",
  "Don't blink! Or you'll miss the complexity... not that you'd understand it anyway. 🦜",
  "Efficiency is King! And I am the King of Birds.",
  "Your code is as messy as my nest after a fruit party. Let's fix that!",
  "鸚鵡 (Yīngwǔ) means parrot in Mandarin. But it means 'Teacher' today!",
  "🦜 Pico: 'If I had a nickel for every time a human used O(N^2) incorrectly...'"
];

const subjects = [
  { name: 'Basics', icon: '🐣' },
  { name: 'Arrays', icon: '🗄️' },
  { name: 'Strings', icon: '🧵' },
  { name: 'Math', icon: '🧮' },
  { name: 'Sorting', icon: '📶' },
  { name: 'Recursion', icon: '🔄' },
  { name: 'Two Pointers', icon: '✌️' },
  { name: 'Hash Maps', icon: '🗺️' },
  { name: 'Stacks', icon: '🥞' },
  { name: 'Queues', icon: '👥' },
  { name: 'Linked Lists', icon: '🔗' },
  { name: 'Trees', icon: '🌳' },
  { name: 'Graphs', icon: '🕸️' },
  { name: 'DP', icon: '🏗️' },
  { name: 'Greedy', icon: '💰' },
  { name: 'Bitmasking', icon: '🎭' },
  { name: 'Heaps', icon: '🏔️' },
  { name: 'Tries', icon: '📚' },
  { name: 'Backtracking', icon: '🔙' },
  { name: 'Zoho Elite', icon: '🦁' }
];

function generateUnitLessons(subjectName, unitIdx) {
  const data = curriculumData[subjectName] || curriculumData['Basics']; // Fallback
  const lessons = [];
  
  // 5 Teaching Slides (Concept + Humor)
  for (let i = 0; i < 5; i++) {
    const concept = data.concepts[i % data.concepts.length];
    const quote = picoQuotes[Math.floor(Math.random() * picoQuotes.length)];
    
    lessons.push({
      type: 'teaching',
      questionText: `${quote}\n\n💠 **CONCEPT: ${concept.name}**\n${concept.point}`,
      explanation: "Pay attention! This concept is a core wing-feather of programming.",
      codeSnippet: concept.code || null
    });
  }

  // 5 Quiz Slides (Directly testing concepts)
  for (let i = 0; i < 5; i++) {
    const quiz = data.quizzes[i % data.quizzes.length];
    
    if (i % 2 === 0) {
      lessons.push({
        type: 'multiple_choice',
        questionText: `🦜 Pico: "Quiz Time! ${quiz.q}"`,
        options: quiz.options,
        correctAnswer: quiz.a,
        explanation: "Correct! You're flying high, fledgling!"
      });
    } else {
      lessons.push({
        type: 'match_following',
        questionText: `🦜 Pico: "Match the ${subjectName} terms correctly!"`,
        pairs: [
          { key: 'Best', value: 'O(log N)' },
          { key: 'Worst', value: 'O(N^2)' },
          { key: 'Space', value: 'O(1)' }
        ]
      });
    }
  }

  return lessons;
}

async function runGenerator() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('CONNECTED TO ELITE DB');

    for (const sub of subjects) {
      console.log(`GENERATING: ${sub.name}...`);
      
      const sections = [];
      const stageTitles = ["Foundation Flight", "Ascent Phase", "Cloud Mastery", "Summit Challenge"];
      
      for (let sIdx = 0; sIdx < 4; sIdx++) {
        const units = [];
        for (let uIdx = 1; uIdx <= 5; uIdx++) {
          units.push({
            title: `Unit ${uIdx}: ${sub.name} Advanced`,
            desc: `Master specialized ${sub.name} techniques.`,
            isUnlocked: true, // User requested ALL UNLOCKED
            xp: 30,
            lessons: generateUnitLessons(sub.name, uIdx)
          });
        }
        sections.push({
          title: `Stage ${sIdx + 1}: ${stageTitles[sIdx]}`,
          units: units
        });
      }

      await Subject.findOneAndUpdate(
        { name: sub.name },
        {
          name: sub.name,
          icon: sub.icon,
          sections: sections
        },
        { upsert: true, new: true }
      );
      console.log(`✅ ${sub.name} DEPLOYED!`);
    }

    console.log('ELITE CURRICULUM OVERHAUL COMPLETE!');
    process.exit(0);
  } catch (err) {
    console.error('GENERATION FAILED', err);
    process.exit(1);
  }
}

runGenerator();

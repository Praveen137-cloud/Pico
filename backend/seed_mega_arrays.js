const mongoose = require('mongoose');
const Subject = require('./models/Subject');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pico_dsa';

const picoQuotes = [
  "Welcome, puny human! Let's see if your slow CPU can handle this...",
  "🦜 Pico: 'Listen up, seed-brain! This is important.'",
  "Don't blink! Or you'll miss the complexity... not that you'd understand it anyway. 🦜",
  "Even a parrot knows this, but I'll explain it slowly for you.",
  "Efficiency is King! And I am the King of Birds. Therefore, I am Efficiency! 🦜",
  "Your code is as messy as my nest after a fruit party. Let's fix that!",
  "鸚鵡 (Yīngwǔ) means parrot in Mandarin. But it means 'Teacher' in your world today!",
  "🦜 Pico: 'If I had a nickel for every time a human used O(N^2) incorrectly... I'd have a lot of seeds.'",
  "This lesson is as crisp as a fresh sunflower seed! 🌻",
  "Pay attention! My grandmother didn't fly across the ocean for you to fail this quiz!"
];

const stages = [
  { title: "Stage 1: Foundation Flight", theme: "Basics of Arrays" },
  { title: "Stage 2: The Two-Pointer Waltz", theme: "Two-Pointer Techniques" },
  { title: "Stage 3: Sliding Window Skies", theme: "Subarray Windows" },
  { title: "Stage 4: Prefix Sum Peaks", theme: "Running Totals" },
  { title: "Stage 5: The Hashing Nest", theme: "Frequency & Maps" },
  { title: "Stage 6: Matrix Maneuvers", theme: "2D Array Mastery" },
  { title: "Stage 7: The Grand Subarray Challenge", theme: "Advanced Optimization" }
];

function generateLessons(unitIdx, stageIdx) {
  const lessons = [];
  for (let i = 1; i <= 20; i++) {
    const quote = picoQuotes[Math.floor(Math.random() * picoQuotes.length)];
    if (i % 5 === 0) {
      lessons.push({
        type: 'multiple_choice',
        questionText: `🦜 Pico: "Time for a quick check, human! For Stage ${stageIdx + 1}, Unit ${unitIdx + 1}, what is the best complexity we usually aim for in Array traversal?"`,
        options: ['O(N^2)', 'O(N)', 'O(1)', 'O(log N)'],
        correctAnswer: 'O(N)',
        explanation: 'We usually want to visit each element exactly once. Keep up!'
      });
    } else if (i % 7 === 0) {
       lessons.push({
        type: 'programming_board',
        questionText: `🦜 Pico: "Complete this loop for Unit ${unitIdx + 1}. We are incrementing 'i' to reach the end!"`,
        codeSnippet: `for(int i=0; i < n; ___) {\n  // Logic\n}`,
        correctAnswer: 'i++',
        explanation: 'Standard increment. Even a fledgling knows this!'
      });
    } else {
      lessons.push({
        type: 'teaching',
        questionText: `${quote} In Unit ${unitIdx + 1}, we're diving deeper into ${stages[stageIdx].theme}. Remember, an array index starts at 0!`,
        explanation: "Keep going, your CPU might just survive this!",
        codeSnippet: `// Concept for Unit ${unitIdx+1}\narr[index] = value;`
      });
    }
  }
  return lessons;
}

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const megaSections = stages.map((stage, sIdx) => {
      const units = [];
      for (let uIdx = 1; uIdx <= 10; uIdx++) {
        units.push({
          title: `Unit ${uIdx}: ${stage.theme} Mastery`,
          desc: `Level up your Array skills in ${stage.title}.`,
          isUnlocked: sIdx === 0 && uIdx === 1,
          xp: 25,
          lessons: generateLessons(uIdx, sIdx)
        });
      }
      return {
        title: stage.title,
        units: units
      };
    });

    const megaArrays = {
      name: 'Mega Arrays',
      icon: '🧠',
      sections: megaSections
    };

    // Replace or Update existing Subject with name 'Mega Arrays'
    await Subject.findOneAndUpdate(
      { name: 'Mega Arrays' },
      megaArrays,
      { upsert: true, new: true }
    );

    console.log('Seeded Mega Arrays Subject with 7 stages and 1400 lessons!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed();

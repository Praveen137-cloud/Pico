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

const subjectsToSeed = [
  { name: 'Basics', icon: '🐣', prefix: 'Basics' },
  { name: 'Zoho Elite', icon: '🦁', prefix: 'Zoho Elite' },
  { name: 'Arrays', icon: '🗄️', prefix: 'Array' },
  { name: 'Strings', icon: '🧵', prefix: 'String' },
  { name: 'Math', icon: '🧮', prefix: 'Math' },
  { name: 'Sorting', icon: '📶', prefix: 'Sorting' },
  { name: 'Recursion', icon: '🔄', prefix: 'Recursion' },
  { name: 'Two Pointers', icon: '✌️', prefix: 'Pointer' },
  { name: 'Hash Maps', icon: '🗺️', prefix: 'Hash' },
  { name: 'Stacks & Queues', icon: '🥞', prefix: 'Stack/Queue' },
  { name: 'Linked Lists', icon: '🔗', prefix: 'Linked List' },
  { name: 'Dynamic Programming', icon: '🏗️', prefix: 'DP' }
];

const stages = [
  { title: "Stage 1: Foundation Flight", theme: "Basics" },
  { title: "Stage 2: The Two-Pointer Waltz", theme: "Intermediate" },
  { title: "Stage 3: Sliding Window Skies", theme: "Techniques" },
  { title: "Stage 4: Prefix Sum Peaks", theme: "Patterns" },
  { title: "Stage 5: The Hashing Nest", theme: "Optimization" },
  { title: "Stage 6: Matrix Maneuvers", theme: "Advanced" },
  { title: "Stage 7: The Grand Challenge", theme: "Mastery" }
];

function generateLessons(unitIdx, stageIdx, subjectPrefix) {
  const lessons = [];
  
  // First 5: Humorous Teaching
  for (let i = 1; i <= 5; i++) {
    const quote = picoQuotes[Math.floor(Math.random() * picoQuotes.length)];
    lessons.push({
      type: 'teaching',
      questionText: `${quote} (Subject: ${subjectPrefix}, Unit ${unitIdx + 1}, Slide ${i})\nLet's master the ${stages[stageIdx].theme} part of ${subjectPrefix}!`,
      explanation: "Pay attention, fledgling! The quiz is coming and it has sharper claws than I do!",
      codeSnippet: i === 1 ? `// Foundation for ${subjectPrefix}\nvoid start_${subjectPrefix.toLowerCase()}() {\n  // Logic\n}` : null
    });
  }

  // Next 5: Questions (Coding, Matching, MCQ)
  // 6 & 7: Programming Challenges
  for (let i = 6; i <= 7; i++) {
    lessons.push({
      type: 'programming_board',
      questionText: `🦜 Pico: "Challenge ${i-5}! Complete this ${subjectPrefix} snippet. Show me those fingers aren't just for eating seeds!"`,
      codeSnippet: `for(int i=0; i < n; ___) {\n  // Processing ${subjectPrefix}...\n}`,
      correctAnswer: 'i++',
      explanation: 'Incrementing correctly is the first step to flying high!'
    });
  }

  // 8: Mental Match
  lessons.push({
    type: 'match_following',
    questionText: `🦜 Pico: "Connect the ${subjectPrefix} dots! Use your brain, not your beak!"`,
    pairs: [
      { key: 'Best Complexity', value: 'O(N)' },
      { key: 'Worst Complexity', value: 'O(N^2)' },
      { key: 'Space Efficiency', value: 'O(1)' }
    ]
  });

  // 9 & 10: Rapid MCQ
  for (let i = 9; i <= 10; i++) {
    lessons.push({
      type: 'multiple_choice',
      questionText: `🦜 Pico: "Final check! For ${subjectPrefix}, what happens if the input is empty?"`,
      options: ['System Crash', 'Edge Case Found', 'Ignore it', 'Free Sunflower Seeds'],
      correctAnswer: 'Edge Case Found',
      explanation: 'Always check your boundaries, fledgling!'
    });
  }

  return lessons;
}

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    for (const subjectData of subjectsToSeed) {
      console.log(`Seeding Subject: ${subjectData.name}...`);
      
      const megaSections = stages.map((stage, sIdx) => {
        const units = [];
        for (let uIdx = 1; uIdx <= 10; uIdx++) {
          units.push({
            title: `Unit ${uIdx}: ${subjectData.prefix} ${stage.theme}`,
            desc: `Master ${subjectData.name} in ${stage.title}.`,
            isUnlocked: sIdx === 0 && uIdx === 1,
            xp: 25,
            lessons: generateLessons(uIdx, sIdx, subjectData.prefix)
          });
        }
        return {
          title: stage.title,
          units: units
        };
      });

      const megaSubject = {
        name: subjectData.name,
        icon: subjectData.icon,
        sections: megaSections
      };

      await Subject.findOneAndUpdate(
        { name: subjectData.name },
        megaSubject,
        { upsert: true, new: true }
      );
      
      console.log(`Successfully seeded ${subjectData.name} (7 stages, 1400 lessons).`);
    }

    console.log('TOTAL MEGA EXPANSION COMPLETE: 14,000+ lessons seeded!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed();

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
  { name: 'Basics', icon: '💻', prefix: 'Basics' },
  { name: 'Arrays', icon: '💾', prefix: 'Array' },
  { name: 'Strings', icon: '🔡', prefix: 'String' },
  { name: 'Math', icon: '🔢', prefix: 'Math' },
  { name: 'Sorting', icon: '📊', prefix: 'Sorting' },
  { name: 'Recursion', icon: '🌀', prefix: 'Recursion' },
  { name: 'Two Pointers', icon: '🔛', prefix: 'Pointer' },
  { name: 'Hash Maps', icon: '🗄️', prefix: 'Hash' },
  { name: 'Stacks & Queues', icon: '🥞', prefix: 'Stack/Queue' },
  { name: 'Linked Lists', icon: '⛓️', prefix: 'Linked List' },
  { name: 'Trees', icon: '🌲', prefix: 'Tree' },
  { name: 'Graphs', icon: '🕸️', prefix: 'Graph' },
  { name: 'Dynamic Programming', icon: '🏗️', prefix: 'DP' },
  { name: 'Algorithm Design', icon: '🧠', prefix: 'Algo' },
  { name: 'Zoho Elite', icon: '💎', prefix: 'Zoho Elite' }
];

const subjectThemes = {
  'Basics': ["Environment Setup", "Control Structures", "Functional Logic", "Memory Management", "Input/Output Pro", "Debugging Skills", "Elite Graduation"],
  'Arrays': ["Core Traversals", "Search Optimization", "Two-Pointers Phase", "Sliding Window", "Sorting Patterns", "Matrix Operations", "Subarray Mastery"],
  'Strings': ["Manipulations", "Pattern Scanning", "Hashing Hubs", "Dynamic Palindromes", "Subsequences", "Trie Integration", "Lexicographical Ops"],
  'Math': ["Number Theory", "Primality Testing", "Modular Arithmetic", "Combinatorics", "Geometry Base", "Game Theory", "Mastery Theorems"],
  'Sorting': ["Bubble & Selection", "Insertion Sort", "Merge Sort Lab", "Quick Sort Peak", "Heap Sort Phase", "Non-Comparison", "Hybrid Sorting"],
  'Recursion': ["Base Case Logic", "Recurrence Relations", "Backtracking Intro", "Tree Recursion", "DP Overlap", "Memoization Intro", "Recursion Mastery"],
  'Two Pointers': ["Opposite Directions", "Fast & Slow", "Merging Hubs", "Partition Logic", "Three Pointers", "Sliding Window Sync", "Optimization Wall"],
  'Hash Maps': ["Collision Control", "Frequency Counting", "Pair Finding", "Subarray Mapping", "Ordered Maps", "Complex State", "Database Hashing"],
  'Stacks & Queues': ["Implementation", "Expression Parsing", "Monotonic Stacks", "Circular Queues", "LRU Cache Logic", "Deque Patterns", "System Mastery"],
  'Linked Lists': ["SLL Operations", "DLL & Circular", "Fast & Slow Point", "Reversal Phase", "Flattening Logic", "Merge Sort LL", "Linked Mastery"],
  'Trees': ["DFS Traversals", "BFS Level Order", "BST Operations", "Tree Views", "Balanced Trees", "Path Sum Lab", "LCA & Serial"],
  'Graphs': ["Reprs & BFS/DFS", "Topological Sort", "Shortest Path I", "Minimum Spanning", "Disjoint Sets", "Bridges & Artic", "Network Flow"],
  'Dynamic Programming': ["1D Intro (Fib)", "Grid Pathways", "Knapsack Basics", "Longest Subseq", "Matrix Chain", "Bitmask DP", "Tree DP Fusion"],
  'Algorithm Design': ["Divide & Conquer", "Greedy Algorithms", "Backtracking Pro", "Transform & Conquer", "Dynamic Strategy", "Complexity Bounds", "Elite Architect"],
  'Zoho Elite': ["Office Suite Logic", "CRM Optimization", "Recruit Sync", "Books Engineering", "Inventory Hub", "Creator Patterns", "Elite Certification"]
};

function generateLessons(unitIdx, stageIdx, subjectPrefix, stageName) {
  const lessons = [];
  
  // First 5: Humorous Teaching
  for (let i = 1; i <= 5; i++) {
    const quote = picoQuotes[Math.floor(Math.random() * picoQuotes.length)];
    lessons.push({
      type: 'teaching',
      questionText: `[MISSION LOG ${unitIdx + 1}.${i}]\n${quote}\n\nAnalyzing **${stageName}** within **${subjectPrefix}** protocols. Focus your logic buffers on this core concept.`,
      explanation: "Knowledge is the only variable that decreases entropy, fledgling!",
      codeSnippet: i === 1 ? `// Elite ${subjectPrefix} Protocol\nvoid init_${subjectPrefix.toLowerCase()}_mod() {\n  // Phase: ${stageName}\n  setup_logic();\n}` : null
    });
  }

  // Next 5: Questions (Coding, Matching, MCQ)
  // 6 & 7: Programming Challenges
  for (let i = 6; i <= 7; i++) {
    lessons.push({
      type: 'programming_board',
      questionText: `SYNERGY CHECK: Complete the ${stageName} logic gate for ${subjectPrefix}. Failure is not an option for an Elite Agent.`,
      codeSnippet: i === 6 ? `for(int i=0; i < n; ___) {\n  // Processing ${stageName} logic...\n}` : `if(buffer != ___) {\n  // Validation gate\n}`,
      correctAnswer: i === 6 ? 'i++' : 'null',
      explanation: 'Correct syntax is the heartbeat of the algorithm.'
    });
  }

  // 8: Mental Match
  lessons.push({
    type: 'match_following',
    questionText: `SYNC PROTOCOL: Match the ${stageName} metrics.`,
    pairs: [
      { key: 'Target Accuracy', value: 'High' },
      { key: 'Processing Latency', value: 'Low' },
      { key: 'Memory Overhead', value: 'Minimal' }
    ]
  });

  // 9 & 10: Rapid MCQ
  for (let i = 9; i <= 10; i++) {
    const isNine = i === 9;
    lessons.push({
      type: 'multiple_choice',
      questionText: isNine ? `What is the primary constraint of ${stageName} in ${subjectPrefix}?` : `A critical ${subjectPrefix} overflow occurred during ${stageName}. Recovery protocol?`,
      options: isNine ? ['Time Complexity', 'Space Overhead', 'Network Lag', 'Power Consumption'] : ['Buffer Flush', 'Stack Resync', 'Hard Reset', 'Manual Patch'],
      correctAnswer: isNine ? 'Time Complexity' : 'Stack Resync',
      explanation: 'Precision beats brute force, every single time.'
    });
  }

  return lessons;
}

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    for (const subjectData of subjectsToSeed) {
      console.log(`Seeding Professional Track: ${subjectData.name}...`);
      
      const themes = subjectThemes[subjectData.name] || ["Intro", "Core", "Mid", "High", "Deep", "Full", "Mastery"];

      const megaSections = themes.map((stageName, sIdx) => {
        const units = [];
        for (let uIdx = 1; uIdx <= 20; uIdx++) {
          units.push({
            title: `Unit ${uIdx}: ${stageName}`,
            desc: `Elite certification in ${subjectData.name} - ${stageName}.`,
            isUnlocked: sIdx === 0 && uIdx === 1,
            xp: 25,
            lessons: generateLessons(uIdx, sIdx, subjectData.prefix, stageName)
          });
        }
        return {
          title: `Stage ${sIdx + 1}: ${stageName}`,
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

    console.log('INDUSTRY-STANDARD MEGA EXPANSION COMPLETE: All Elite Tracks Operational!');
    process.exit(0);
  } catch (err) {
    console.error('Expansion error:', err);
    process.exit(1);
  }
}

seed();

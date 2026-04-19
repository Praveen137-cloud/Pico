const mongoose = require('mongoose');
const Subject = require('./models/Subject');
const User = require('./models/User');

const subjectSectionsMap = {
  'Arrays': ['Memory & Primitives', 'Two Pointer Basics', 'Sliding Window', 'In-Place Reversal', 'Prefix Sums', 'Matrix Traversal', 'Hash Map Logic', 'Optimization', 'Sorting Tricks', 'Interview Hard'],
  'Strings': ['String Primitives', 'ASCII & Chars', 'Anagrams', 'Palindromes', 'Substrings', 'Pattern Matching', 'KMP Algorithm', 'Tries & Strings', 'Rabin Karp', 'Interview Hard'],
  'Two Pointers': ['Opposite Ends', 'Same Direction', 'Slow & Fast', 'Sliding Window', 'Partitioning', 'Merging', 'Cycle Detection', '3Sum Patterns', 'Container Traversal', 'Interview Hard'],
  'Hash Maps': ['Dictionary Basics', 'Collision Handling', 'Sets & Uniqueness', 'Frequency Counting', 'Grouping', 'LRU Cache', 'Double Hashing', 'Subarrays Sum', 'String Hashing', 'Interview Hard'],
  'Recursion': ['Base Cases', 'Call Stack', 'Memoization', 'Divide & Conquer', 'Backtracking', 'Permutations', 'Combinations', 'Subset Sum', 'Grid Traversal', 'Interview Hard'],
  'Sorting': ['Bubble & Selection', 'Insertion Sort', 'Merge Sort', 'Quick Sort', 'Heap Sort', 'Counting Sort', 'Radix Sort', 'Bucket Sort', 'Custom Comparators', 'Interview Hard'],
  'Trees': ['Binary Trees', 'Inorder & Preorder', 'Postorder', 'BST Properties', 'Level Order', 'LCA', 'Heaps', 'Tries', 'Segment Trees', 'Interview Hard'],
  'Graphs': ['Adjacency Lists', 'BFS Basics', 'DFS Traversal', 'Cycle Detection', 'Topological Sort', 'Dijkstras Algorithm', 'Bellman Ford', 'MST Prim', 'Kruskal', 'Interview Hard']
};

const buildSection = (subjectName, title, sectionIndex, deepSeed = false) => {
  const units = [];
  
  // Create 20 units. For MVP, we'll name them sequentially, but if deepSeed is true we give Unit 1 a neat name.
  for (let i = 0; i < 20; i++) {
    const isUnlocked = (sectionIndex === 0 && i === 0);
    const unitTitle = (deepSeed && i === 0) ? `${subjectName} Coaching` : `Unit ${i + 1}`;
    
    let lessons = [];
    if (deepSeed && i === 0) {
      lessons = [
        {
          title: 'Coaching 1: Concept',
          type: 'teaching',
          questionText: `Let's master the foundation of ${subjectName}. The C language manages memory explicitly, which is crucial here.`,
        },
        {
          title: 'Coaching 2: Syntax Demo',
          type: 'teaching',
          questionText: 'Check out this standard initialization routine. Feel free to run it.',
          codeSnippet: '#include <stdio.h>\n\nint main() {\n    printf("Running basic %s setup!\\n", "logic");\n    return 0;\n}',
          language: 'c'
        },
        {
          title: 'Check In',
          type: 'multiple_choice',
          questionText: `What makes ${subjectName} a frequently asked topic in Zoho interviews?`,
          options: ['They are rarely used in real life', 'They require strict memory execution & optimal time complexity', 'They only work in C++'],
          correctAnswer: 'They require strict memory execution & optimal time complexity'
        },
        {
          title: 'Challenge 1: Complete It',
          type: 'code_fill_in',
          questionText: 'We removed the core printf statement. Fill it back in exactly!',
          codeSnippet: '#include <stdio.h>\n\nint main() {\n    \n    return 0;\n}',
          language: 'c',
          correctAnswer: 'printf'
        }
      ];
    }
    units.push({ title: unitTitle, isUnlocked, lessons });
  }
  return { title, units };
};

const buildSubject = (name, icon) => {
  // Pass deepSeed = true for the FIRST section of EVERY subject so it's testable!
  const sectionsContent = subjectSectionsMap[name] || subjectSectionsMap['Arrays'];
  const sections = sectionsContent.map((title, i) => buildSection(name, title, i, i === 0));
  return new Subject({ name, icon, sections });
};

const seedData = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/pico_dsa');

  console.log('Clearing database...');
  await Subject.deleteMany({});
  await User.deleteMany({});

  console.log('Seeding user...');
  const user = new User({
    name: 'Student',
    avatar: 'Parrot',
    xp: 0,
    lessonsCompleted: 0,
    streak: 0,
    progress: {}
  });
  await user.save();

  console.log('Seeding curriculum in C (with 1 test unit per subject)...');
  
  const subjects = [
    buildSubject('Arrays', '📊'),
    buildSubject('Strings', '📝'),
    buildSubject('Two Pointers', '👉'),
    buildSubject('Hash Maps', '🗺️'),
    buildSubject('Recursion', '🔄'),
    buildSubject('Sorting', '📉'),
    buildSubject('Trees', '🌲'),
    buildSubject('Graphs', '🕸️'),
  ];

  await Subject.insertMany(subjects);

  console.log('Database seeded successfully.');
  process.exit(0);
};

seedData().catch(err => {
  console.error(err);
  process.exit(1);
});

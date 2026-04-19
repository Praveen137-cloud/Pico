module.exports = {
  "DP": {
    icon: "🏗️",
    sections: [
      {
        title: "Stage 1: Dynamic Programming",
        units: [
          {
            title: "Unit 1: Memorization over Calculation",
            desc: "Those who forget the past are condemned to recalculate it.",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'Dynamic Programming (DP) sounds scary, but it just means: Save your answers so you don't have to do the math twice!'" },
              { type: 'teaching', questionText: "🦜 Pico: 'Memoization!'\n\nIf calculating `fibonacci(50)` takes years because it recalculates `fib(2)` millions of times... just save `fib(2)` in an array!'" },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'What is the primary goal of Dynamic Programming?'", options: ["Delete old memory", "Save results of overlapping subproblems", "Write faster loops", "Sort arrays faster"], correctAnswer: "Save results of overlapping subproblems", explanation: "Correct! Catching and saving the results of subproblems we've already solved prevents infinite redundant work." }
            ]
          }
        ]
      }
    ]
  },
  "Greedy": {
    icon: "💰",
    sections: [
      {
        title: "Stage 1: Immediate Gratification",
        units: [
          {
            title: "Unit 1: Local Optimums",
            desc: "Taking the best option right now.",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'Greedy algorithms don't think about the long term. They just make the choice that looks best RIGHT NOW!'" },
              { type: 'teaching', questionText: "🦜 Pico: 'Coin Change!'\n\nIf you need to give 65 cents in change, a Greedy algorithm grabs the biggest coin first: 50c, then 10c, then 5c. Done!'" },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'Do Greedy algorithms ALWAYS find the mathematically optimal absolute best solution for every problem?'", options: ["Yes, always", "No, they can be 'tricked' by local maximums", "Only on Tuesdays", "Yes, because they are greedy"], correctAnswer: "No, they can be 'tricked' by local maximums", explanation: "Correct! Greedy algorithms are fast, but sometimes making the 'best' immediate choice leads you away from the true global best solution." }
            ]
          }
        ]
      }
    ]
  },
  "Bitmasking": {
    icon: "🎭",
    sections: [
      {
        title: "Stage 1: The Machine Alphabet",
        units: [
          {
            title: "Unit 1: Bits and Bytes",
            desc: "Talking directly to the CPU.",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'CPUs don't read words. They read 1s and 0s. Bitmasking is manipulating those individual 1s and 0s!'" },
              { type: 'teaching', questionText: "🦜 Pico: 'The AND Operator (&)!'\n\n1 & 1 is 1. Anything else is 0. It is great for checking if a specific bit is turned on.'", codeSnippet: "int x = 5; // 0101\nint isOdd = x & 1; // 1 (True!)." },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'What is the fastest mathematical way to check if a number is Even or Odd?'", options: ["n % 2", "n & 1", "n / 2", "n | 1"], correctAnswer: "n & 1", explanation: "Correct! Performing a bitwise AND with 1 is a direct CPU-level check of the lowest bit. If it's 1, it's odd!" }
            ]
          }
        ]
      }
    ]
  },
  "Tries": {
    icon: "📚",
    sections: [
      {
        title: "Stage 1: Prefix Trees",
        units: [
          {
            title: "Unit 1: Auto-complete Engine",
            desc: "How search bars predict your words.",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'Ever wonder how Google guesses what you're typing instantly? They use a Trie (pronounced Try)!'" },
              { type: 'teaching', questionText: "🦜 Pico: 'Node per Letter!'\n\nA Trie is a tree where each node is a single letter. P -> I -> C -> O.'", codeSnippet: "struct TrieNode {\n  struct TrieNode* children[26];\n  bool isEndOfWord;\n};" },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'What is the primary use case for a Trie data structure?'", options: ["Sorting numbers", "Finding shortest path paths", "Prefix matching & Autocomplete", "Handling priority queues"], correctAnswer: "Prefix matching & Autocomplete", explanation: "Correct! Tries are specifically designed for extremely fast string and prefix lookups." }
            ]
          }
        ]
      }
    ]
  },
  "Backtracking": {
    icon: "🔙",
    sections: [
      {
        title: "Stage 1: The Maze Runner",
        units: [
          {
            title: "Unit 1: Retracing Steps",
            desc: "Trying every path, intelligently.",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'Backtracking is like walking through a maze. Pick a path. If it's a dead end, walk back and try the other path!'" },
              { type: 'teaching', questionText: "🦜 Pico: 'The Classic N-Queens!'\n\nHow do you place 8 queens on a chessboard so they can't attack each other? Place one, then try the next. If attacked, BACKTRACK and move the previous one!'" },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'Which algorithmic paradigm does Backtracking heavily rely on?'", options: ["Greedy", "Recursion", "Iterative While Loops", "Constant Time Maps"], correctAnswer: "Recursion", explanation: "Correct! Backtracking uses recursion to dive deep into a path, and returns (backtracks) when the base case fails." }
            ]
          }
        ]
      }
    ]
  },
  "Zoho Elite": {
    icon: "🦁",
    sections: [
      {
        title: "Stage 1: The Lair of the Lion",
        units: [
          {
            title: "Unit 1: Matrix Mechanics",
            desc: "Handling complex 2D arrays and patterns.",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'Zoho loves their pattern printing and 2D arrays. They want to see your brain twist!'" },
              { type: 'teaching', questionText: "🦜 Pico: 'String Expansion!'\n\nA classic Zoho question: Convert `a3b2` into `aaabb`. You need to read the character, then extract the multi-digit number after it!'" },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'What is the key trick to extracting a multi-digit number (like 34) from a character array inside a loop?'", options: ["ParseInt()", "num = num * 10 + (char - '0')", "Add them normally", "You can't"], correctAnswer: "num = num * 10 + (char - '0')", explanation: "Correct! You shift the previous total left by multiplying by 10, then add the numeric value of the new character." },
              { type: 'programming_board', questionText: "🦜 Pico: 'Write the character-to-number expansion logic.'", codeSnippet: "int val = ch - ___;" }
            ]
          }
        ]
      }
    ]
  }
};

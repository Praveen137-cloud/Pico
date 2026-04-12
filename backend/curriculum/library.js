const curriculumData = {
  "Basics": {
    icon: "🐣",
    sections: [
      {
        title: "Stage 1: Foundation Flight",
        units: [
          {
            title: "Unit 1: The Core of Programs",
            desc: "Learn how programs hold data and make decisions.",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'Welcome fledglings! A program is just instructions for a very fast, very obedient, but very dense bird (a computer).'" },
              { type: 'teaching', questionText: "🦜 Pico: 'Variables!'\n\nVariables are like tiny nests that hold exactly one thing. If you want to hold 10 seeds, you write: `int seeds = 10;`", codeSnippet: "int seeds = 10;\nprintf(\"I have %d seeds\", seeds);" },
              { type: 'teaching', questionText: "🦜 Pico: 'Data Types!'\n\nNests have shapes! An `int` holds whole numbers. A `float` holds decimals. A `char` holds a single letter.", codeSnippet: "int whole = 5;\nfloat decimal = 5.5;\nchar letter = 'A';" },
              { type: 'teaching', questionText: "🦜 Pico: 'Conditions!'\n\nIf you have a choice, you use conditionals. `if` this, `else` that.", codeSnippet: "if (seeds > 5) {\n  printf(\"Feast!\");\n} else {\n  printf(\"Hunt!\");\n}" },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'Quick check! Which nest type should I use for exactly 3.14 seeds?'", options: ["int", "char", "float", "boolean"], correctAnswer: "float", explanation: "Correct! 'float' is for floating-point numbers (decimals)." },
              { type: 'programming_board', questionText: "🦜 Pico: 'Help me write an IF statement to check if seeds are exactly 10.'", codeSnippet: "___ (seeds ___ 10) {\n  printf(\"Perfect number of seeds!\");\n}" }
            ]
          },
          {
            title: "Unit 2: The Loop Life",
            desc: "Don't repeat yourself. Let the machine do it.",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'Humans hate doing the same thing twice. Birds love loops! Let's loop.'" },
              { type: 'teaching', questionText: "🦜 Pico: 'The FOR Loop!'\n\nA FOR loop has 3 parts: start, condition, step. Fly around the tree 5 times!", codeSnippet: "for (int i = 0; i < 5; i++) {\n  fly();\n}" },
              { type: 'teaching', questionText: "🦜 Pico: 'The WHILE Loop!'\n\nWHILE loops run as long as something is true. Like 'while I am hungry, eat'.", codeSnippet: "while (hungry == 1) {\n  eat_seed();\n}" },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'If I want to repeat something infinitely, what loop could I use?'", options: ["for(;;)", "while(0)", "if(true)", "None"], correctAnswer: "for(;;)", explanation: "Yes! for(;;) or while(1) runs forever until you break out." }
            ]
          }
        ]
      }
    ]
  },
  "Arrays": {
    icon: "🗄️",
    sections: [
      {
        title: "Stage 1: Memory Blocks",
        units: [
          {
             title: "Unit 1: Contiguous Storage",
             desc: "Store multiple items in one giant nest row.",
             lessons: [
               { type: 'teaching', questionText: "🦜 Pico: 'Imagine 5 nests glued together. That is an array. One variable, many slots!'" },
               { type: 'teaching', questionText: "🦜 Pico: 'Zero-Indexing!'\n\nThe most important rule: The first nest in an array is Nest 0. Not Nest 1. If you forget this, I will peck you.'", codeSnippet: "int nests[5];\nnests[0] = 10; // First nest\nnests[4] = 5;  // Last nest" },
               { type: 'teaching', questionText: "🦜 Pico: 'OOB Error!'\n\nIf you have 5 nests and ask for nest[5], you just fell out of the tree. That's an Out Of Bounds error.'", codeSnippet: "int arr[5];\narr[5] = 10; // 💀 DANGER 💀" },
               { type: 'multiple_choice', questionText: "🦜 Pico: 'In an array declared as `int data[10];`, what is the last valid index?'", options: ["10", "9", "0", "-1"], correctAnswer: "9", explanation: "Exactly. 0 through 9 gives you 10 spots." }
             ]
          },
          {
             title: "Unit 2: Extreme Benchmarking",
             desc: "Finding maximum and minimum values safely.",
             lessons: [
               { type: 'teaching', questionText: "🦜 Pico: 'Finding Extremes!'\n\nIf you want to find the largest seed in an array, you need a benchmark to compare everything against.'" },
               { type: 'teaching', questionText: "🦜 Pico: 'The Benchmark Trap!'\n\nNever initialize your `max` variable with 0 if your array contains negative numbers! (-5 > 0 is FALSE). Always initialize with the FIRST array element!'" },
               { type: 'teaching', questionText: "🦜 Pico: 'The correct code looks like this.'", codeSnippet: "int max = arr[0]; // NOT 0\nfor (int i=1; i<size; i++) {\n  if (arr[i] > max) {\n    max = arr[i];\n  }\n}" },
               { type: 'programming_board', questionText: "🦜 Pico: 'Complete the loop to find the max minimum.'", codeSnippet: "int max = ___[0];\nfor(int i=1; i<N; i++) {\n  if(arr[i] > max) {\n    ___ = arr[i];\n  }\n}" },
               { type: 'multiple_choice', questionText: "🦜 Pico: 'Why NOT initialize your `max` variable to zero?'", options: ["It breaks if array is negative", "0 is unlucky", "Arrays don't have zeros", "It's slower"], correctAnswer: "It breaks if array is negative", explanation: "Exactly. If your array is [-5, -2, -9], and you start `max` at 0, your code will proudly say the largest number is 0! Even though 0 isn't in the array!" }
             ]
          }
        ]
      }
    ]
  },
  "Strings": {
    icon: "🧵",
    sections: [
      {
        title: "Stage 1: ASCII Adventures",
        units: [
          {
            title: "Unit 1: Characters Under the Hood",
            desc: "Understand what strings really are in memory.",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'Strings!'\n\nA string is just an Array of Characters. That's it! Nothing magical.'" },
              { type: 'teaching', questionText: "🦜 Pico: 'ASCII Values!'\n\nComputers only understand numbers. Every character is assigned a number. 'A' is 65, 'B' is 66, 'a' is 97.'", codeSnippet: "char letter = 'A';\nint val = (int)letter; // val is 65" },
              { type: 'teaching', questionText: "🦜 Pico: 'The Null Terminator!'\n\nHow does the computer know a string is over? It looks for a special invisible character at the end called the Null Terminator (`\\0`).'", codeSnippet: "char name[] = \"Pico\";\n// Memory: ['P', 'i', 'c', 'o', '\\0']\n// Size is 5, not 4!" },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'How many bytes are required to store the string \"Bird\" in C?'", options: ["4", "5", "8", "0"], correctAnswer: "5", explanation: "Correct! 4 letters + 1 Null Terminator (\\0) = 5 bytes." },
              { type: 'programming_board', questionText: "🦜 Pico: 'Complete the condition to loop through a string until it ends.'", codeSnippet: "for(int i=0; str[i] != ___; i++) {\n  printf(\"%c\", str[i]);\n}" }
            ]
          }
        ]
      }
    ]
  },
  "Two Pointers": {
    icon: "✌️",
    sections: [
      {
        title: "Stage 1: The Classic Technique",
        units: [
          {
            title: "Unit 1: The Squeeze",
            desc: "Master the most common Array algorithmic pattern.",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'Two Pointers!'\n\nSometimes, looking at an array from left-to-right isn't enough. We need to look at both ends at the same time!'" },
              { type: 'teaching', questionText: "🦜 Pico: 'The Setup!'\n\nWe place one pointer (L) at the start (index 0) and one pointer (R) at the end (index N-1).'", codeSnippet: "int L = 0;\nint R = n - 1;" },
              { type: 'teaching', questionText: "🦜 Pico: 'The Reversal!'\n\nWant to reverse an array? Swap the items at L and R, then move L forward and R backward! Stop when they cross.'", codeSnippet: "while(L < R) {\n  swap(arr[L], arr[R]);\n  L++;\n  R--;\n}" },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'When traversing from opposite ends, what is the best loop condition?'", options: ["while(L < R)", "while(L == R)", "while(L > R)", "for(;;)"], correctAnswer: "while(L < R)", explanation: "Yes! If L passes R or equals R, you've checked the whole array." },
              { type: 'programming_board', questionText: "🦜 Pico: 'Complete the Two Pointer logic to reverse an array.'", codeSnippet: "int L = 0, R = n - 1;\nwhile(L ___ R) {\n  swap(arr[L], arr[R]);\n  L___;\n  R___;\n}" }
            ]
          }
        ]
      }
    ]
  },
  "Hash Maps": {
    icon: "🗺️",
    sections: [
      {
        title: "Stage 1: Constant Time Lookups",
        units: [
          {
            title: "Unit 1: Key-Value Glory",
            desc: "Learn how to find data instantly without looping.",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'Hash Maps (Dictionaries)!'\n\nIf you want to find a definition in a real book, do you read page 1 to 500? No! You use the index. That's a Hash Map.'" },
              { type: 'teaching', questionText: "🦜 Pico: 'O(1) Time Complexity!'\n\nLooking up a value by its key in a Hash Map takes Constant Time O(1). It is instantly teleporting to the right nest.'", codeSnippet: "HashMap<String, Integer> map = new HashMap<>();\nmap.put(\"Pico\", 100); // Store\nint score = map.get(\"Pico\"); // Retrieve instantly!" },
              { type: 'teaching', questionText: "🦜 Pico: 'Frequency Counters!'\n\nThe most common interview use of Hash Maps is counting how many times an item appears.'", codeSnippet: "map[num] = map[num] + 1; // Count frequencies!" },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'What is the theoretical time complexity to retrieve a value from a Hash Map?'", options: ["O(1)", "O(log N)", "O(N)", "O(N^2)"], correctAnswer: "O(1)", explanation: "O(1)! Hash Maps compute a hash and immediately jump to the location." },
              { type: 'programming_board', questionText: "🦜 Pico: 'Use the map to count frequencies in an array.'", codeSnippet: "for(int x : arr) {\n  map[___]++;\n}" }
            ]
          }
        ]
      }
    ]
  }
};

module.exports = curriculumData;

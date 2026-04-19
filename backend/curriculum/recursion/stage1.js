const stage1 = [
  {
    "order": 1,
    "title": "Foundations of Recursion",
    "desc": "Understanding the 'Function calls itself' concept.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Welcome to the Infinite Mirror! Recursion is when a function calls ITSELF to solve a smaller version of the problem. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Think of a Matryoshka doll. Inside a big doll is a smaller doll, and so on, until you reach the smallest one! 🦜\"",
        "codeSnippet": "void openDoll(int size) {\n  if (size == 1) return; // Smallest doll!\n  openDoll(size - 1); // Open next smaller doll\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the core idea of recursion?",
        "options": [
          "A function calls itself",
          "A loop that never ends",
          "A way to sort arrays"
        ],
        "correctAnswer": "A function calls itself"
      },
      {
        "type": "match_following",
        "questionText": "Match the Concepts!",
        "pairs": [
          {
            "key": "Recursion",
            "value": "Self-calling"
          },
          {
            "key": "Iteration",
            "value": "Looping (for/while)"
          },
          {
            "key": "Subproblem",
            "value": "Smaller version"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Call the function again with size - 1.",
        "codeSnippet": "void recursion(int n) {\n  if(n <= 0) return;\n  ___(n - 1);\n}",
        "correctAnswer": "recursion"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It sounds circular, but because each call works on a SMALLER problem, we eventually reach the end! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if the problem doesn't get smaller?",
        "options": [
          "Infinite recursion / Crash",
          "It finishes faster",
          "Nothing"
        ],
        "correctAnswer": "Infinite recursion / Crash"
      },
      {
        "type": "code_fill_in",
        "questionText": "The keyword to go back after a call finish.",
        "codeSnippet": "if (done) ___ ;",
        "correctAnswer": "return"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You're entering a deeper world now, fledgling. Don't get lost! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you see me in the mirror?\"",
        "options": [
          "Pico... Pico... Pico...",
          "No.",
          "0"
        ],
        "correctAnswer": "Pico... Pico... Pico..."
      }
    ]
  },
  {
    "order": 2,
    "title": "The Call Stack",
    "desc": "How memory tracks nested function calls.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Stack of Bird Nests! Every time a function is called, the CPU creates a new 'frame' on the Stack. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This frame holds local variables and the return address. When the function returns, the frame is POPPED off! 🦜\"",
        "codeSnippet": "Stack [ Top ] -> current_call\n      [ Mid ] -> previous_call\n      [ Bot ] -> main()"
      },
      {
        "type": "multiple_choice",
        "questionText": "In recursion, which data structure tracks the calls?",
        "options": [
          "Stack (LIFO)",
          "Queue (FIFO)",
          "Array"
        ],
        "correctAnswer": "Stack (LIFO)"
      },
      {
        "type": "match_following",
        "questionText": "Match Stack Terms!",
        "pairs": [
          {
            "key": "Push",
            "value": "Call function"
          },
          {
            "key": "Pop",
            "value": "Return from function"
          },
          {
            "key": "Frame",
            "value": "Memory for 1 call"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Memory for the stack is limited. Too many calls lead to...",
        "codeSnippet": "Error: Stack ___ Error",
        "correctAnswer": "Overflow"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Each frame takes space. This is why depth is limited! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is recursion more memory-expensive than iteration?",
        "options": [
          "Yes (Due to stack frames)",
          "No",
          "Depends on Pico"
        ],
        "correctAnswer": "Yes (Due to stack frames)"
      },
      {
        "type": "code_fill_in",
        "questionText": "LIFO stands for Last In ___ Out.",
        "codeSnippet": "LIFO = Last In ___ Out",
        "correctAnswer": "First"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stack it high, but don't let it fall! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I on top of the stack?\"",
        "options": [
          "Always!",
          "No.",
          "0"
        ],
        "correctAnswer": "Always!"
      }
    ]
  },
  {
    "order": 3,
    "title": "The Base Case",
    "desc": "The emergency exit of recursion.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stop! The Base Case is the condition that tells the function to STOP calling itself and start returning. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Without a base case, the birds fly in circles forever until the stack crashes! 🦜\"",
        "codeSnippet": "if (n == 0) return; // Base Case\nrecursion(n - 1);   // Recursive Case"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if you forget the base case?",
        "options": [
          "Stack Overflow",
          "The code runs faster",
          "It returns 0 automatically"
        ],
        "correctAnswer": "Stack Overflow"
      },
      {
        "type": "match_following",
        "questionText": "Match the Cases!",
        "pairs": [
          {
            "key": "Base Case",
            "value": "Stop condition"
          },
          {
            "key": "Recursive Case",
            "value": "Keep going"
          },
          {
            "key": "Return Value",
            "value": "Climbing back up"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Write a base case for an array reaching its end (index `n`).",
        "codeSnippet": "if (index ___ n) return;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A valid recursive function MUST approach the base case with every call! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which is a valid base case for factorial(n)?",
        "options": [
          "if (n <= 1) return 1;",
          "if (n > 10) return 100;",
          "return factorial(n-1);"
        ],
        "correctAnswer": "if (n <= 1) return 1;"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case usually returns a ___ value.",
        "codeSnippet": "if(base) return ___ ;",
        "correctAnswer": "constant"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The base case is your anchor. Drop it early! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I your base case?\"",
        "options": [
          "You are the start and end!",
          "No.",
          "0"
        ],
        "correctAnswer": "You are the start and end!"
      }
    ]
  },
  {
    "order": 4,
    "title": "Direct vs Indirect",
    "desc": "Simple recursion vs the circular relay.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Direct Recursion is easy: A calls A. But Indirect Recursion is sneaky: A calls B, and B calls A! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It's like two birds passing a seed back and forth until one of them decides to eat it! 🦜\"",
        "codeSnippet": "void odd(int n) { even(n-1); }\nvoid even(int n) { odd(n-1); }"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is Indirect Recursion?",
        "options": [
          "A -> B -> A",
          "A -> A",
          "A -> B -> C"
        ],
        "correctAnswer": "A -> B -> A"
      },
      {
        "type": "match_following",
        "questionText": "Match the Types!",
        "pairs": [
          {
            "key": "Direct",
            "value": "One function"
          },
          {
            "key": "Indirect",
            "value": "Circular chain"
          },
          {
            "key": "Mutual",
            "value": "Another name for Indirect"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Finish the indirect call.",
        "codeSnippet": "void funcA(int n) { if(n>0) ___(n-1); }",
        "correctAnswer": "funcB"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Indirect recursion is rarer, but useful in complex state machines or parsing nested languages! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Do indirect recursive functions also need a base case?",
        "options": [
          "Yes, absolutely",
          "No, they stop each other",
          "Only if Pico is awake"
        ],
        "correctAnswer": "Yes, absolutely"
      },
      {
        "type": "code_fill_in",
        "questionText": "Mutual recursion between `f1` and `f2`.",
        "codeSnippet": "f1 -> f2 -> ___",
        "correctAnswer": "f1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Watch the loop! Don't get dizzy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are we spinning?\"",
        "options": [
          "WE ARE FLYING!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "WE ARE FLYING!"
      }
    ]
  },
  {
    "order": 5,
    "title": "Tail Recursion",
    "desc": "Efficiency for the elite bird.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Tail Recursion! If the recursive call is the VERY LAST thing the function does, we can save memory! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The compiler can REUSE the current frame instead of creating a new one. This is called TCO (Tail Call Optimization)! 🦜\"",
        "codeSnippet": "void tail(int n) {\n  if (n == 0) return;\n  print(n);\n  return tail(n-1); // Tail Call\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What makes a call 'Tail Recursive'?",
        "options": [
          "Nothing happens after the call",
          "It's at the top of the function",
          "It returns a constant"
        ],
        "correctAnswer": "Nothing happens after the call"
      },
      {
        "type": "match_following",
        "questionText": "Match the Examples!",
        "pairs": [
          {
            "key": "return f(n-1)",
            "value": "Tail Recursive"
          },
          {
            "key": "return n * f(n-1)",
            "value": "NOT Tail Recursive"
          },
          {
            "key": "1 + f(n-1)",
            "value": "NOT Tail Recursive"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Why is `n * f(n-1)` not tail recursive? Because we still need to...",
        "codeSnippet": "Multiply by ___",
        "correctAnswer": "n"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"To make factorial tail recursive, we pass the current result as an ACCUMULATOR! 🦜\"",
        "codeSnippet": "int fact(int n, int acc) {\n  if (n == 0) return acc;\n  return fact(n-1, acc * n);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of TCO?",
        "options": [
          "O(N)",
          "O(1)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Space complexity of optimized tail recursion?",
        "codeSnippet": "Space: O(___)",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Tail recursion is like iteration but fancier! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is my tail beautiful?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 6,
    "title": "Tracing Recursion",
    "desc": "The Tree Method for visualization.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stop tracing in your head! Use the Recursion Tree. Every call branches out into smaller calls. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For `fib(4)`, you call `fib(3)` and `fib(2)`. Then `fib(3)` calls more... it looks like a binary tree of bird nests! 🦜\"",
        "codeSnippet": "      f(4)\n     /    \\\n   f(3)   f(2)\n   /  \\   /  \\\n f(2) f(1) f(1) f(0)"
      },
      {
        "type": "multiple_choice",
        "questionText": "In a recursion tree, what do the nodes represent?",
        "options": [
          "Function calls",
          "Variable values",
          "The CPU"
        ],
        "correctAnswer": "Function calls"
      },
      {
        "type": "match_following",
        "questionText": "Match Tree Terms!",
        "pairs": [
          {
            "key": "Root",
            "value": "Initial call"
          },
          {
            "key": "Leaf",
            "value": "Base case"
          },
          {
            "key": "Branch",
            "value": "Recursive call"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Depth of the tree for `func(n)` calling `func(n-1)`.",
        "codeSnippet": "Depth = ___ ;",
        "correctAnswer": "n"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Counting the nodes tells you the TIME complexity. Summing the depth tells you the SPACE complexity! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Number of level-0 nodes in any recursion tree?",
        "options": [
          "1",
          "2",
          "N"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "code_fill_in",
        "questionText": "Visualization: ___ Tree.",
        "codeSnippet": "___ Tree",
        "correctAnswer": "Recursion"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Draw it out to see the future! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a tree?\"",
        "options": [
          "You are the forest!",
          "No.",
          "0"
        ],
        "correctAnswer": "You are the forest!"
      }
    ]
  },
  {
    "order": 7,
    "title": "Recursive Factorial",
    "desc": "The quintessential recursion example.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Factorial! N! = N * (N-1) * (N-2)... * 1. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recursive thought: N! is just N times (N-1)! And 0! is 1. 🦜\"",
        "codeSnippet": "int fact(int n) {\n  if (n == 0) return 1;\n  return n * fact(n-1);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 3! (3 factorial)?",
        "options": [
          "6",
          "3",
          "9"
        ],
        "correctAnswer": "6"
      },
      {
        "type": "match_following",
        "questionText": "Match the Steps!",
        "pairs": [
          {
            "key": "fact(3)",
            "value": "3 * fact(2)"
          },
          {
            "key": "fact(1)",
            "value": "1 * fact(0)"
          },
          {
            "key": "fact(0)",
            "value": "1 (Base Case)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The recursive return expression.",
        "codeSnippet": "return n * ___(n - 1);",
        "correctAnswer": "fact"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Time Complexity: O(N). Space Complexity: O(N) due to the call stack depth! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can factorial(5) be solved WITHOUT fact(4)?",
        "options": [
          "No",
          "Yes",
          "Depends on cache"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Value of 0!.",
        "codeSnippet": "fact(0) = ___ ;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Multiplier effect! Pure power! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"How many factorials did I eat?\"",
        "options": [
          "N!",
          "Zero.",
          "Infinity."
        ],
        "correctAnswer": "N!"
      }
    ]
  },
  {
    "order": 8,
    "title": "Recursive Sums",
    "desc": "Adding numbers 1 to N recursively.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Summation! Sum(N) = 1 + 2 + ... + N. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Think recursive: Sum(N) = N + Sum(N-1). Base case? Sum(1) = 1 (or Sum(0) = 0). 🦜\"",
        "codeSnippet": "int sum(int n) {\n  if (n <= 0) return 0;\n  return n + sum(n - 1);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is sum(4)?",
        "options": [
          "10",
          "8",
          "4"
        ],
        "correctAnswer": "10"
      },
      {
        "type": "match_following",
        "questionText": "Match the Sum Logic!",
        "pairs": [
          {
            "key": "sum(n)",
            "value": "n + sum(n-1)"
          },
          {
            "key": "sum(0)",
            "value": "0"
          },
          {
            "key": "Iteration",
            "value": "sum += i"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complete the recursive step.",
        "codeSnippet": "return n ___ sum(n - 1);",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Note: The 'climb back up' is where the actual addition happens after the base case hits! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Recursion depth for sum(100)?",
        "options": [
          "101",
          "100",
          "1"
        ],
        "correctAnswer": "101",
        "explanation": "From 100 down to 0."
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case return for sum.",
        "codeSnippet": "if (n == 0) return ___ ;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stacking the seeds! One by one! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Will you sum for me?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 9,
    "title": "The Golden Fibonacci",
    "desc": "Recursive beauty and its hidden costs.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fibonacci Sequences! 0, 1, 1, 2, 3, 5, 8... Each number is the sum of the two before it! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fib(N) = Fib(N-1) + Fib(N-2). This is MULTIPLE RECURSION—two calls per function! 🦜\"",
        "codeSnippet": "int fib(int n) {\n  if (n <= 1) return n;\n  return fib(n-1) + fib(n-2);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is Fib(5)?",
        "options": [
          "5",
          "3",
          "8"
        ],
        "correctAnswer": "5",
        "explanation": "0, 1, 1, 2, 3, 5..."
      },
      {
        "type": "match_following",
        "questionText": "Match the Fib Index!",
        "pairs": [
          {
            "key": "Fib(0)",
            "value": "0"
          },
          {
            "key": "Fib(1)",
            "value": "1"
          },
          {
            "key": "Fib(2)",
            "value": "1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The additive recursive step.",
        "codeSnippet": "return fib(n-1) ___ fib(n-2);",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Warning! Naive recursive Fibonacci is O(2^N). It's exponentially slow because it recalculates the same things! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of naive Fib(N)?",
        "options": [
          "O(2^N)",
          "O(N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(2^N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case for `n=0` or `n=1`.",
        "codeSnippet": "if (n <= 1) return ___ ;",
        "correctAnswer": "n"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A beautiful pattern with a heavy price. We'll learn to optimize it soon! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it golden?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 10,
    "title": "Master Point (Recursion 1)",
    "desc": "Foundations confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 1 COMPLETE! You've learned the stack, the base case, and the tree! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which case prevents infinite loops?",
        "options": [
          "Base Case",
          "Recursive Case",
          "Upper Case"
        ],
        "correctAnswer": "Base Case"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of naive recursive Factorial(N)?",
        "options": [
          "O(N)",
          "O(2^N)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are no longer afraid of the mirror. In Stage 2, we dive into Strings and Arrays! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 1",
            "value": "Dreamer"
          },
          {
            "key": "Stage 2",
            "value": "Explorer"
          },
          {
            "key": "Next",
            "value": "The Real World"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Total lessons so far.",
        "codeSnippet": "currentStage * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The calls are deep. The path is clear. Fly on! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ready for depth?",
        "options": [
          "SQUAWK YES!",
          "Maybe.",
          "No."
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "One last call?",
        "options": [
          "Call(self)",
          "Done.",
          "0"
        ],
        "correctAnswer": "Call(self)"
      }
    ]
  }
];

module.exports = stage1;

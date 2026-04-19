const stage7 = [
  {
    "order": 61,
    "title": "Pairing Heaps",
    "desc": "The multi-way winner.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pairing Power! A Pairing Heap is a multi-way tree where every node can have any number of children. No Balance factor, no marks - just raw Speed! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It's fundamentally a 'Heap-Ordered' tree. The root is ALWAYS the best bird in the forest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which structure is a Pairing Heap based on?",
        "options": [
          "Multi-way tree",
          "Binary tree",
          "Array"
        ],
        "correctAnswer": "Multi-way tree"
      },
      {
        "type": "match_following",
        "questionText": "Match Pairing Roles!",
        "pairs": [
          {
            "key": "Insert",
            "value": "O(1) - Just link it"
          },
          {
            "key": "Merge",
            "value": "O(1) - Just link it"
          },
          {
            "key": "Extract-Min",
            "value": "O(log N) - The work happens here"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complexity to merge two pairing heaps.",
        "codeSnippet": "O( ___ );",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
                "questionText": "🦜 Pico: \"Just like Fibonacci, Pairing heaps are lazy. They don't do any reorganization until you ask for the minimum! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does a Pairing Heap satisfy the 'Heap Property' at all times?",
        "options": [
          "Yes (Parent <= Children for Min-Heap)",
          "No",
          "Only and always"
        ],
        "correctAnswer": "Yes (Parent <= Children for Min-Heap)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Node structure requirement.",
        "codeSnippet": "Heap- ___ tree",
        "correctAnswer": "Ordered"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Simple and fast! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Ready to pair?\"",
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
    "order": 62,
    "title": "Two-Pass ExtractMin",
    "desc": "How the cleaning is done.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"When the root leaves, its' children form a forest. To unite them efficiently, we use TWO PASSES. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pass 1: Merge children in pairs from left to right (e.g. 1 & 2, 3 & 4...). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pass 2: Merge the resulting trees from right to left into a single tree! 🦜\"",
        "codeSnippet": "Pass1: LinkPairs(L -> R);\nPass2: LinkAll(R -> L);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why two passes instead of one?",
        "options": [
          "To keep the tree depth at O(log N) amortized",
          "One pass is impossible",
          "Pico likes redundancy"
        ],
        "correctAnswer": "To keep the tree depth at O(log N) amortized"
      },
      {
        "type": "match_following",
        "questionText": "Match the Passes!",
        "pairs": [
          {
            "key": "First Pass",
            "value": "Left to Right (Pairing)"
          },
          {
            "key": "Second Pass",
            "value": "Right to Left (Unifying)"
          },
          {
            "key": "Result",
            "value": "Amortized Efficiency"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Direction of the second pass.",
        "codeSnippet": "mergeFrom( ___ to Left);",
        "correctAnswer": "Right"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This strategy is what gives pairing heaps their elite performance in real-world benchmarks! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of the ExtractsMin operation?",
        "options": [
          "O(log N) amortized",
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(log N) amortized"
      },
      {
        "type": "code_fill_in",
        "questionText": "Pass operation name.",
        "codeSnippet": "T ___ -Pass",
        "correctAnswer": "wo"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Clean the nest with two sweeps! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"One pass or two?\"",
        "options": [
          "SQUAWK TWO!",
          "One.",
          "Zero."
        ],
        "correctAnswer": "SQUAWK TWO!"
      }
    ]
  },
  {
    "order": 63,
    "title": "Persistent Heap Intro",
    "desc": "Never forget a version.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Memory Birds! Persistence lets you keep EVERY version of the heap as it evolves. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Total Persistence means you can update ANY version to create a new branch of history! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Common use of Persistent data structures?",
        "options": [
          "Functional programming and Undo/Redo features",
          "Saving disk space",
          "Making things slower"
        ],
        "correctAnswer": "Functional programming and Undo/Redo features"
      },
      {
        "type": "match_following",
        "questionText": "Match Version Types!",
        "pairs": [
          {
            "key": "Partial Persistence",
            "value": "Read all, Modify latest"
          },
          {
            "key": "Full Persistence",
            "value": "Read all, Modify all"
          },
          {
            "key": "Immutable",
            "value": "Never changes"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Technique used to share nodes between versions.",
        "codeSnippet": "new_root = ___ (old_path);",
        "correctAnswer": "copy"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Binary Heaps in arrays are EXTREMELY hard to make persistent. Pointer-based heaps are the kings here! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is 'Shared Structure' important?",
        "options": [
          "To avoid copying the whole heap for every update",
          "To share with other birds",
          "Because it's easier"
        ],
        "correctAnswer": "To avoid copying the whole heap for every update"
      },
      {
        "type": "code_fill_in",
        "questionText": "Status of old versions.",
        "codeSnippet": "I ___",
        "correctAnswer": "mmutable"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"History is a tree! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Going back?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "Maybe."
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 64,
    "title": "Path Copying",
    "desc": "The cost of memory.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Persistence path! To insert a node persistently in a Leftist Heap: 1. Don't touch the original. 2. Copy the nodes on the path from root to insertion. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"3. The new path points to original (shared) subtrees where no changes happened! 🦜\"",
        "codeSnippet": "newNode(val, left, right) // returns new instance"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many nodes are copied during one persistent insertion (height H)?",
        "options": [
          "H (log N)",
          "N",
          "1"
        ],
        "correctAnswer": "H (log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Costs!",
        "pairs": [
          {
            "key": "Space",
            "value": "O(log N) per update"
          },
          {
            "key": "Time",
            "value": "O(log N) per update"
          },
          {
            "key": "Search",
            "value": "O(1) Access version"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Pointer destination for unchanged subtrees.",
        "codeSnippet": "new.left = ___ .left;",
        "correctAnswer": "old"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This allows you to create a 'New Heap' in O(log N) time and space, while keeping the old one 100% intact! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is original data modified?",
        "options": [
          "Never",
          "Always",
          "If it's large"
        ],
        "correctAnswer": "Never"
      },
      {
        "type": "code_fill_in",
        "questionText": "Name of this technique.",
        "codeSnippet": "P ___ Copying",
        "correctAnswer": "ath"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Cloning the path! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"One path or all?\"",
        "options": [
          "JUST THE PATH!",
          "All.",
          "None."
        ],
        "correctAnswer": "JUST THE PATH!"
      }
    ]
  },
  {
    "order": 65,
    "title": "Lazy Heaps",
    "desc": "Processing in the future.",
    "lessons": [
      {
        "type": "teaching",
                "questionText": "🦜 Pico: \"Lazy Evaluation! In languages like Haskell, heaps can be 'Lazy'. Work like 'Linking' or 'Merging' only happens when a bird actually asks for the result! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This means a 'Merge' might be O(1) now, with the O(log N) cost delayed until later. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What concept does Lazy Evaluation rely on?",
        "options": [
          "Thunks (Saved computations for later)",
          "Fast RAM",
          "Threads"
        ],
        "correctAnswer": "Thunks (Saved computations for later)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Lazy!",
        "pairs": [
          {
            "key": "Merge",
            "value": "Instant (Lazy promise)"
          },
          {
            "key": "ExtractMin",
            "value": "Forces evaluation"
          },
          {
            "key": "Language",
            "value": "Haskell"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Term for a deferred computation.",
        "codeSnippet": "\"TH\" + \"___\" ;",
        "correctAnswer": "UNK"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Lazy leftist heaps can achieve very consistent performance in multi-threaded environments! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Lazy Evaluation speed up the TOTAL work?",
        "options": [
          "No, it just spreads it out/defers it",
          "Yes",
          "Only in the morning"
        ],
        "correctAnswer": "No, it just spreads it out/defers it"
      },
      {
        "type": "code_fill_in",
        "questionText": "Wait until needed.",
        "codeSnippet": "L ___ Evaluation",
        "correctAnswer": "azy"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Don't rush the bird! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Ready to wait?\"",
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
    "order": 66,
    "title": "Persistent Leftist Merge",
    "desc": "Path-copying unification.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Persistent Merge! Just like standard merge, but every time you would 'swap' or 'link', you return a NEW node instead of modifying. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In a persistent leftist merge, what is the maximum number of new nodes created?",
        "options": [
          "Sum of rights spines (O(log H1 + log H2))",
          "N1 + N2",
          "1"
        ],
        "correctAnswer": "Sum of rights spines (O(log H1 + log H2))"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is the original heap H1 affected?",
        "options": [
          "NO! It's still valid in its' old memory",
          "Yes",
          "Deleted"
        ],
        "correctAnswer": "NO! It's still valid in its' old memory"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This makes Leftist heaps the perfect choice for persistent priority queues! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Persistence!",
        "pairs": [
          {
            "key": "Input",
            "value": "Two root pointers"
          },
          {
            "key": "Work",
            "value": "O(log N) new nodes"
          },
          {
            "key": "Output",
            "value": "Third root pointer"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Result of merging two version roots.",
        "codeSnippet": "v3_root = ___ (v1_root, v2_root) ;",
        "correctAnswer": "merge"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Branch your history! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can you tree-travel?\"",
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
    "order": 67,
    "title": "Heaps in Databases",
    "desc": "Storing bird history.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Big Bird Data! Databases use heaps for: 1. Sorting large result sets (Heapsort). 2. Buffer management (which page to eject). 3. Merging logs. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use a heap for Database Buffer Management (e.g. LRU vs Priority)?",
        "options": [
          "To always eject the 'least important' page first",
          "Because heaps are small",
          "They don't"
        ],
        "correctAnswer": "To always eject the 'least important' page first"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"When you run a 'ORDER BY' query, the database might use a Max-Heap to keep the top K results in memory! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match DB Heaps!",
        "pairs": [
          {
            "key": "ORDER BY Top K",
            "value": "Min-Heap size K"
          },
          {
            "key": "Log Merge",
            "value": "K-way Merge Heap"
          },
          {
            "key": "Write Cache",
            "value": "Buffer Priority"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The K in O(N log K) for Top K queries.",
        "codeSnippet": "limit = ___ ;",
        "correctAnswer": "K"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Efficient data flow! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is your query fast?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "Maybe."
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 68,
    "title": "Pairing vs Fibonacci",
    "desc": "Theory vs Reality.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Great Bird Debate! Theoretical time for Fibonacci (Dijkstra) is the best. But in REAL tests, Pairing Heaps often win! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why do Pairing Heaps win in practice?",
        "options": [
          "Lower constant factors and simpler memory access",
          "They are actually O(1)",
          "Pico magic"
        ],
        "correctAnswer": "Lower constant factors and simpler memory access"
      },
      {
        "type": "match_following",
        "questionText": "Match the Winner!",
        "pairs": [
          {
            "key": "Asymptotics",
            "value": "Fibonacci"
          },
          {
            "key": "Benchmarks",
            "value": "Pairing"
          },
          {
            "key": "Implementation",
            "value": "Binary (Easiest)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The O(log N) extract call in Pairing.",
        "codeSnippet": "root = ___ [0]; \nrebuild(forest);",
        "correctAnswer": "children"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Always test on real data before choosing your flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What makes Fibonacci 'heavy'?",
        "options": [
          "The list of roots and marks on every node",
          "The weight",
          "The name"
        ],
        "correctAnswer": "The list of roots and marks on every node"
      },
      {
        "type": "code_fill_in",
        "questionText": "Practicality winner.",
        "codeSnippet": "P ___ Heap",
        "correctAnswer": "airing"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Practical power! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you choose Pairing?\"",
        "options": [
          "SQUAWK YES!",
          "Fibonacci.",
          "Binary."
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 69,
    "title": "Persistent Problems",
    "desc": "Wait, what's that noise?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Watch out! Persistent heaps can use a LOT of memory if you make many small updates. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Garbage collection is required to clean up old versions that no bird is looking at anymore! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if you have 1,000,000 versions and only use the latest 2?",
        "options": [
          "Memory leak / waste (unless GC cleans up)",
          "It's fine",
          "Heap crashes"
        ],
        "correctAnswer": "Memory leak / waste (unless GC cleans up)"
      },
      {
        "type": "match_following",
        "questionText": "Match Resource Logic!",
        "pairs": [
          {
            "key": "Shared Node",
            "value": "Efficiency"
          },
          {
            "key": "Garbage Collection",
            "value": "History Purge"
          },
          {
            "key": "Redo Log",
            "value": "Recovery"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The mechanism that cleans up unused birds.",
        "codeSnippet": "GC = \"___\" ;",
        "correctAnswer": "Garbage Collector"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Modern functional languages (like Clojure) handle this automatically for you! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Persistence slow down SEARCH (peek)?",
        "options": [
          "No (Still O(1))",
          "Yes",
          "Only in elite mode"
        ],
        "correctAnswer": "No (Still O(1))"
      },
      {
        "type": "code_fill_in",
        "questionText": "The price of history.",
        "codeSnippet": "Memory ___",
        "correctAnswer": "Overhead"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Clean your feathers! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is history clean?\"",
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
    "order": 70,
    "title": "Master Point (Heaps 7)",
    "desc": "History hawk status confirmed.",
    "lessons": [
      {
        "type": "teaching",
                "questionText": "🦜 Pico: \"STAGE 7 COMPLETE! You've mastered Pairing speed, Persistent paths, and the lazy wait of the thunk! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which operation in Pairing Heaps uses a Two-Pass logic?",
        "options": [
          "ExtractMin",
          "Merge",
          "Insert"
        ],
        "correctAnswer": "ExtractMin"
      },
      {
        "type": "multiple_choice",
        "questionText": "Technique to make pointer-heaps persistent?",
        "options": [
          "Path Copying",
          "Array Shifting",
          "Hashing"
        ],
        "correctAnswer": "Path Copying"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a History Hawk! In Stage 8, we apply our heaps to Graphs: Flow, Spanning Trees, and Networks! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 7",
            "value": "History Hawk"
          },
          {
            "key": "Stage 8",
            "value": "Network Nightingale"
          },
          {
            "key": "Next",
            "value": "Heaps 8"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Time Points.",
        "codeSnippet": "7 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Unfold the map! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ready for Networks?",
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
        "questionText": "Final Version?",
        "options": [
          "Latest!",
          "Old.",
          "0"
        ],
        "correctAnswer": "Latest!"
      }
    ]
  }
];

module.exports = stage7;

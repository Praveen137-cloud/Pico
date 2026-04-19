const stage1 = [
  {
    "order": 1,
    "title": "Priority Queue Concept",
    "desc": "Beyond the basic line.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Priority Power! A Priority Queue is like an Emergency Room. The most urgent patient gets treated FIRST, no matter when they arrived! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Difference between a Queue and a Priority Queue?",
        "options": [
          "PQ serves the 'Highest Priority' first, Queue serves 'First Arrival' first",
          "There is no difference",
          "Queue is faster"
        ],
        "correctAnswer": "PQ serves the 'Highest Priority' first, Queue serves 'First Arrival' first"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Binary Heaps are the most efficient way to implement Priority Queues! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Queues!",
        "pairs": [
          {
            "key": "Queue",
            "value": "FIFO (First In First Out)"
          },
          {
            "key": "Priority Queue",
            "value": "Best Item Out"
          },
          {
            "key": "Binary Heap",
            "value": "Implementation engine"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Standard PQ operation to get the best item.",
        "codeSnippet": "item = pq. ___ ();",
        "correctAnswer": "poll"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Real world use: CPU scheduling or Task management! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If a bird has priority 10 and another has priority 1, which comes out first in a 'Max' Priority Queue?",
        "options": [
          "Priority 10 bird",
          "Priority 1 bird",
          "The first one to arrive"
        ],
        "correctAnswer": "Priority 10 bird"
      },
      {
        "type": "code_fill_in",
        "questionText": "Operation to add an item.",
        "codeSnippet": "pq. ___ (item);",
        "correctAnswer": "add"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Urgency is key! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you important?\"",
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
    "order": 2,
    "title": "Binary Heap Definition",
    "desc": "The structure of the nest.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Perfect Shape! A Binary Heap is a COMPLETE Binary Tree. This means every level is full, except possibly the last level, which is filled from LEFT to RIGHT. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This 'Completeness' ensures the tree is always BALANCED, making operations fast! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does 'Complete Binary Tree' mean?",
        "options": [
          "Filled level-by-level, left-to-right",
          "Perfectly symmetrical",
          "Every node has 2 children"
        ],
        "correctAnswer": "Filled level-by-level, left-to-right"
      },
      {
        "type": "match_following",
        "questionText": "Match Tree Terms!",
        "pairs": [
          {
            "key": "Root",
            "value": "Highest level (Max speed)"
          },
          {
            "key": "Leaf",
            "value": "Bottom level"
          },
          {
            "key": "Height",
            "value": "Distance from top"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The height of a heap with N nodes is always ___ (N).",
        "codeSnippet": "height = ___ (N);",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"No holes allowed in the nest! Every branch must fill left-to-right or the array indices won't work! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is a skewed, one-sided tree (like a linked list) a valid Heap?",
        "options": [
          "No, it must be complete",
          "Yes",
          "Only and always"
        ],
        "correctAnswer": "No, it must be complete"
      },
      {
        "type": "code_fill_in",
        "questionText": "Filling order of the last level.",
        "codeSnippet": "Left to ___",
        "correctAnswer": "Right"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Structure builds speed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you balanced?\"",
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
    "order": 3,
    "title": "Min-Heap vs Max-Heap",
    "desc": "The order of dominance.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Heap Property! In a Max-Heap, every parent is GREATER THAN OR EQUAL to its' children. The ROOT is the absolute largest bird! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"In a Min-Heap, every parent is LESS THAN OR EQUAL to its' children. The ROOT is the smallest worm! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In a Max-Heap, where is the second-largest element?",
        "options": [
          "In one of the root's children",
          "At the bottom leaf",
          "Randomly placed"
        ],
        "correctAnswer": "In one of the root's children"
      },
      {
        "type": "match_following",
        "questionText": "Match the Order!",
        "pairs": [
          {
            "key": "Max-Heap",
            "value": "Parent >= Children"
          },
          {
            "key": "Min-Heap",
            "value": "Parent <= Children"
          },
          {
            "key": "Root",
            "value": "The extreme value"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Max-Heap property check.",
        "codeSnippet": "if (A[parent] ___ A[child]) // Valid Max-Heap",
        "correctAnswer": ">="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Notice: Only the Parent/Child relationship is strict. SIBLINGS (birds on the same level) have no specific order relative to each other! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a Min-Heap have a larger value on level 3 than level 2?",
        "options": [
          "Always (Parent must be smaller)",
          "Never",
          "Only in elite mode"
        ],
        "correctAnswer": "Always (Parent must be smaller)"
      },
      {
        "type": "code_fill_in",
        "questionText": "The smallest value is at the ___ .",
        "codeSnippet": "Root",
        "correctAnswer": "Root"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Respect the hierarchy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Who is on top?\"",
        "options": [
          "THE ROOT!",
          "Me.",
          "You."
        ],
        "correctAnswer": "THE ROOT!"
      }
    ]
  },
  {
    "order": 4,
    "title": "Array Representation",
    "desc": "Nests in a line.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Efficiency Secret! Because the tree is 'Complete', we don't need pointers! We can store the whole heap in a simple ARRAY. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If the Root is at index 0, every node's children and parent can be found using simple math! 🦜\"",
        "codeSnippet": "Array: [100, 90, 80, 70, 60, 50, 40]"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use an array instead of linked nodes for Heaps?",
        "options": [
          "Saves memory and provides better cache performance",
          "It's easier to sort",
          "Arrays are smarter"
        ],
        "correctAnswer": "Saves memory and provides better cache performance"
      },
      {
        "type": "match_following",
        "questionText": "Match indices!",
        "pairs": [
          {
            "key": "Index 0",
            "value": "Root"
          },
          {
            "key": "Index 1, 2",
            "value": "Children of Root"
          },
          {
            "key": "Index 3, 4",
            "value": "Children of Index 1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Left child of node at index i.",
        "codeSnippet": "left = ___ * i + 1;",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This constant-time indexing makes navigation lightning fast! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Right child of node at index i?",
        "options": [
          "2 * i + 2",
          "2 * i + 1",
          "i + 1"
        ],
        "correctAnswer": "2 * i + 2"
      },
      {
        "type": "code_fill_in",
        "questionText": "Root index.",
        "codeSnippet": "___",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Math is the map! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can you find me?\"",
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
    "order": 5,
    "title": "Parent Formulas",
    "desc": "Climbing back up.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Climbing up! If you are at index `i`, your parent is at `floor((i - 1) / 2)`. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Example: Node 3 and Node 4 both have Parent at (3-1)/2 = 1 and (4-1)/2 = 1. 🦜\"",
        "codeSnippet": "parentIdx = (i - 1) / 2;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Who is the parent of node at index 6?",
        "options": [
          "Index 2",
          "Index 3",
          "Index 1"
        ],
        "correctAnswer": "Index 2"
      },
      {
        "type": "match_following",
        "questionText": "Match the Navigation!",
        "pairs": [
          {
            "key": "Down (Left)",
            "value": "2i + 1"
          },
          {
            "key": "Down (Right)",
            "value": "2i + 2"
          },
          {
            "key": "Up (Parent)",
            "value": "(i-1)/2"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The math for parent.",
        "codeSnippet": "return (i - ___) / 2;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Notice that Integer Division automatically handles the 'floor' part for us! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Parent of the Root (index 0)?",
        "options": [
          "Doesn't exist (-0.5 is invalid)",
          "Index 0",
          "Index -1"
        ],
        "correctAnswer": "Doesn't exist (-0.5 is invalid)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Parent of index 1.",
        "codeSnippet": "(1-1)/2 = ___",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Know your ancestors! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Who's your bird-mom?\"",
        "options": [
          "INDEX ZERO!",
          "No one.",
          "0"
        ],
        "correctAnswer": "INDEX ZERO!"
      }
    ]
  },
  {
    "order": 6,
    "title": "Insert: Bubble-Up",
    "desc": "Adding new birds.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Arrival! To insert a bird: 1. Place it at the NEXT available slot (end of array). 2. 'Bubble-Up' or 'Swim' by swapping with parent until property is restored! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This keeps the tree complete AND restores parent dominance. 🦜\"",
        "codeSnippet": "while(me > parent) {\n  swap(me, parent);\n  me = parent;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of a single insertion in a heap of size N?",
        "options": [
          "O(log N)",
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Insertion Steps!",
        "pairs": [
          {
            "key": "Step 1",
            "value": "Add to end of array"
          },
          {
            "key": "Step 2",
            "value": "Compare with parent"
          },
          {
            "key": "Step 3",
            "value": "Swap if larger (Max-Heap)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if bubbling should continue.",
        "codeSnippet": "while(i > 0 && A[___] < A[i])",
        "correctAnswer": "parentIdx"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A bird can only 'Bubble Up' to the root at most! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if the new bird is the smallest worm in a Max-Heap?",
        "options": [
          "It stays at the end (no swaps)",
          "It bubbles up",
          "It disappears"
        ],
        "correctAnswer": "It stays at the end (no swaps)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Another name for Bubble-Up.",
        "codeSnippet": "P + ___",
        "correctAnswer": "ERCOLATE UP"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Climb to your station! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can you swim?\"",
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
    "order": 7,
    "title": "Extract: Sink-Down",
    "desc": "The root bird leaves.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Departure! To remove the root: 1. Swap root with LAST element. 2. Remove last element. 3. 'Sink-Down' or 'Bubble-Down' the new root until property is restored! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Compare parent with LARGEST child and swap to maintain Max-Heap property. 🦜\"",
        "codeSnippet": "while(hasChild(i)) {\n  target = getLargerChild(i);\n  if(A[i] < A[target]) swap(i, target);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why swap with the LAST element before removing?",
        "options": [
          "To keep the tree complete (no holes)",
          "Because it's easier",
          "Pico said so"
        ],
        "correctAnswer": "To keep the tree complete (no holes)"
      },
      {
        "type": "match_following",
        "questionText": "Match Deletion Steps!",
        "pairs": [
          {
            "key": "Step 1",
            "value": "Swap Root with Last"
          },
          {
            "key": "Step 2",
            "value": "Pop Array End"
          },
          {
            "key": "Step 3",
            "value": "Sink-Down Root"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The child to swap with in Max-Heap.",
        "codeSnippet": "swapWith ___ child;",
        "correctAnswer": "LARGER"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Always swap with the LARGER child to ensure the new parent is greater than BOTH children! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of extractMax?",
        "options": [
          "O(log N)",
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Another name for Sink-Down.",
        "codeSnippet": "P + ___",
        "correctAnswer": "ERCOLATE DOWN"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Heavy birds sink! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you sinking?\"",
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
    "order": 8,
    "title": "Build-Heap (Heapify)",
    "desc": "Instant flock organization.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Organization! If you have N random birds in an array, how do you turn it into a heap? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Start from the last NON-leaf node and work backwards to the root, calling 'Sink-Down' on each node. 🦜\"",
        "codeSnippet": "for(i = N/2 - 1; i >= 0; i--) sink(i);"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of building a heap from N elements?",
        "options": [
          "O(N) - Linear magic!",
          "O(N log N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N) - Linear magic!"
      },
      {
        "type": "match_following",
        "questionText": "Match Heapify Logic!",
        "pairs": [
          {
            "key": "N/2 to N",
            "value": "Leaves (Already heaps!)"
          },
          {
            "key": "N/2 - 1",
            "value": "Last parent"
          },
          {
            "key": "Direction",
            "value": "Bottom-up"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The direction of the heapify loop.",
        "codeSnippet": "for (int i = start; i ___ 0; i--)",
        "correctAnswer": ">="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It's O(N) because most nodes are near the bottom and only sink a small distance! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why O(N) instead of O(N log N)?",
        "options": [
          "Mathematical sum of heights",
          "It's just faster",
          "Pico magic"
        ],
        "correctAnswer": "Mathematical sum of heights"
      },
      {
        "type": "code_fill_in",
        "questionText": "Starting index for heapify.",
        "codeSnippet": "n / ___ - 1",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Assemble the line! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it a heap?\"",
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
    "title": "Heap Performance",
    "desc": "Efficiency of the nest.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity Check! Peek (peek at root) is O(1). Insert is O(log N). Delete is O(log N). Build is O(N). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It's better than an Ordered Array (O(N) insert) or an Unordered Array (O(N) extractMax). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Best case to FIND the maximum element in a Max-Heap?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Speed!",
        "pairs": [
          {
            "key": "Get Extreme",
            "value": "O(1)"
          },
          {
            "key": "Maintenance",
            "value": "O(log N)"
          },
          {
            "key": "Full Build",
            "value": "O(N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Finding an ARBITRARY element (not root) in a heap.",
        "codeSnippet": "O( ___ ); // Not optimized",
        "correctAnswer": "N"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Heaps are NOT good for searching for a specific value. They are only good for getting the TOP value! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity of a binary heap?",
        "options": [
          "O(N) in-place",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N) in-place"
      },
      {
        "type": "code_fill_in",
        "questionText": "Search speed log base.",
        "codeSnippet": "log ___ n",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fast as a falcon! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you fast?\"",
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
    "title": "Master Point (Heaps 1)",
    "desc": "Heap fledgling status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 1 COMPLETE! You've mastered the shape, the math, and the bubble-up/sink-down logic of Heaps. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Formula for Parent of index i?",
        "options": [
          "(i-1)/2",
          "2i + 1",
          "i * 2"
        ],
        "correctAnswer": "(i-1)/2"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to build a heap from scratch?",
        "options": [
          "O(N)",
          "O(N log N)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Heap Fledgling! In Stage 2, we dive into Heap Sort and real-world priority problems! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 1",
            "value": "Heap Fledgling"
          },
          {
            "key": "Stage 2",
            "value": "Sort Scout"
          },
          {
            "key": "Next",
            "value": "Heaps 2"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Progress Points.",
        "codeSnippet": "1 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Ascend to the root! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Continue with Heaps?",
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
        "questionText": "Final Bubble?",
        "options": [
          "Up!",
          "Down.",
          "0"
        ],
        "correctAnswer": "Up!"
      }
    ]
  }
];

module.exports = stage1;
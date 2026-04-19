const stage4 = [
  {
    "order": 31,
    "title": "Leftist Heaps",
    "desc": "Imbalance as a feature.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Leftist Heaps! Unlike Binary Heaps which MUST be complete, Leftist heaps are intentionally imbalanced to make MERGING easy! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The core property is NPL (Null Path Length): The shortest distance to a NULL child. In a Leftist Heap, the NPL of a left child is always >= NPL of the right child! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the NPL of a leaf node (no children)?",
        "options": [
          "0",
          "1",
          "-1"
        ],
        "correctAnswer": "0"
      },
      {
        "type": "match_following",
        "questionText": "Match Leftist Terms!",
        "pairs": [
          {
            "key": "NPL(left)",
            "value": ">= NPL(right)"
          },
          {
            "key": "NPL(null)",
            "value": "-1"
          },
          {
            "key": "Shape",
            "value": "Heavily skewed left"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Formula: NPL(X) = 1 + ___ (NPL(left), NPL(right)).",
        "codeSnippet": "npl = 1 + ___ ;",
        "correctAnswer": "min"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The right path is always the shortest path. This allows us to merge two heaps by only walking down their right spines! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the max length of the RIGHT spine in a Leftist heap of size N?",
        "options": [
          "O(log N)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Property: NPL(L) ___ NPL(R).",
        "codeSnippet": ">=",
        "correctAnswer": ">="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stay left, my bird! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you leaning?\"",
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
    "order": 32,
    "title": "Leftist Merge",
    "desc": "Spine-based unification.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Merging Leftist! 1. Compare roots and pick the smaller as the new root. 2. Recursively merge the other heap with our RIGHT child! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"3. After merging, if NPL(left) < NPL(right), SWAP the children to restore the leftist property! 🦜\"",
        "codeSnippet": "if(left.npl < right.npl) swap(left, right);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why swap children in a Leftist Heap merge?",
        "options": [
          "To ensure the right spine remains the shortest path",
          "For visual balance",
          "Randomly"
        ],
        "correctAnswer": "To ensure the right spine remains the shortest path"
      },
      {
        "type": "match_following",
        "questionText": "Match Merge Actions!",
        "pairs": [
          {
            "key": "Compare Roots",
            "value": "Pick start point"
          },
          {
            "key": "Right Merge",
            "value": "Recursive join"
          },
          {
            "key": "Swap",
            "value": "Restore imbalance"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complexity of Leftist Merge.",
        "codeSnippet": "O( ___ N);",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Insertion and deletion are just special cases of MERGE. They are all O(log N)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Unlike Binary Heaps, can Leftist Heaps be implemented in a simple array?",
        "options": [
          "No (Require pointers due to imbalanced shape)",
          "Yes",
          "Always"
        ],
        "correctAnswer": "No (Require pointers due to imbalanced shape)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Path to merge down.",
        "codeSnippet": "The ___ path.",
        "correctAnswer": "right"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Merge the spines! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Swap time?\"",
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
    "order": 33,
    "title": "Skew Heaps",
    "desc": "Self-adjusting simplicity.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Skew Power! A Skew Heap is a self-adjusting version of a Leftist Heap. It doesn't store NPL values at all! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It always swaps left and right children during ہر merge, regardless of their size! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What extra data do Skew Heaps store in each node?",
        "options": [
          "Nothing! (Just value and 2 pointers)",
          "NPL value",
          "Size"
        ],
        "correctAnswer": "Nothing! (Just value and 2 pointers)"
      },
      {
        "type": "match_following",
        "questionText": "Match Skew Logic!",
        "pairs": [
          {
            "key": "Leftist",
            "value": "Conditional Swap (NPL)"
          },
          {
            "key": "Skew",
            "value": "Always Swap"
          },
          {
            "key": "Amortized",
            "value": "O(log N) average"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The core merge action.",
        "codeSnippet": "result.right = merge(h1.right, h2);\nswap(result.left, result.right);",
        "correctAnswer": "swap"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Skew heaps have O(log N) amortized complexity. Like Splay Trees, they balance themselves over many operations! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Worst case for a SINGLE skew heap operation?",
        "options": [
          "O(N)",
          "O(log N)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Complexity type.",
        "codeSnippet": "A + ___",
        "correctAnswer": "mortized"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Simple is strong! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you skewing?\"",
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
    "order": 34,
    "title": "d-Ary Heaps",
    "desc": "Widening the nest.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fat Heaps! A Binary Heap has 2 children per node. A d-Ary heap has 'd' children! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This makes the tree MUCH shorter (height = log_d N), at the cost of slower 'Sink-Down' (must check 'd' children). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "When is a 4-Ary heap better than a 2-Ary (Binary) heap?",
        "options": [
          "When we have many insertions/decrease-keys but few deletes",
          "Always",
          "Never"
        ],
        "correctAnswer": "When we have many insertions/decrease-keys but few deletes"
      },
      {
        "type": "match_following",
        "questionText": "Match d-Ary complexity!",
        "pairs": [
          {
            "key": "Insert",
            "value": "O(log_d N)"
          },
          {
            "key": "ExtractMin",
            "value": "O(d log_d N)"
          },
          {
            "key": "Height",
            "value": "Decreases as d grows"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Parent formula for k-th child of node i in d-ary heap.",
        "codeSnippet": "parent = (i - 1) / ___ ;",
        "correctAnswer": "d"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"3-Ary, 4-Ary, and even 1024-Ary heaps are used in specific data storage systems! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "First child index of node i in d-ary heap (starting from 0)?",
        "options": [
          "d * i + 1",
          "2 * i + 1",
          "d * i"
        ],
        "correctAnswer": "d * i + 1"
      },
      {
        "type": "code_fill_in",
        "questionText": "Complexity for extract min.",
        "codeSnippet": "d * log_ ___ N",
        "correctAnswer": "d"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Wide n' fast! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"How many kids?\"",
        "options": [
          "d CHILDREN!",
          "2.",
          "0"
        ],
        "correctAnswer": "d CHILDREN!"
      }
    ]
  },
  {
    "order": 35,
    "title": "Implicit Heaps",
    "desc": "The memory ghosts.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Implicit Structure! Standard Binary Heaps are 'Implicit' because the parent-child pointers are NOT stored. They are calculated. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This saves exactly N pointers of memory - huge efficiency for big datasets! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which heap implementation is 'Implicit'?",
        "options": [
          "Array-based Binary Heap",
          "Pointer-based Leftist Heap",
          "Fibonacci Heap"
        ],
        "correctAnswer": "Array-based Binary Heap"
      },
      {
        "type": "match_following",
        "questionText": "Match Implementation!",
        "pairs": [
          {
            "key": "Implicit",
            "value": "Arithmetic indexing"
          },
          {
            "key": "Explicit",
            "value": "Pointers to children"
          },
          {
            "key": "Memory",
            "value": "Lowest in Implicit"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The pointer overhead (bytes) saved per node in 64-bit systems.",
        "codeSnippet": "saved = 2 * ___ ;",
        "correctAnswer": "8"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Any d-Ary heap can also be implicit in an array! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why reach for explicit (pointer) heaps?",
        "options": [
          "When the heap is not complete/balanced (Mergable heaps)",
          "Never",
          "It's faster"
        ],
        "correctAnswer": "When the heap is not complete/balanced (Mergable heaps)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Pointer size.",
        "codeSnippet": "___ bits",
        "correctAnswer": "64"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Ghost pointers! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can you see them?\"",
        "options": [
          "SQUAWK NO!",
          "Yes.",
          "Maybe."
        ],
        "correctAnswer": "SQUAWK NO!"
      }
    ]
  },
  {
    "order": 36,
    "title": "Decrease-Key Deep Dive",
    "desc": "Promoting the bird faster.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Decrease Key! To make it O(1) as promised in Fibonacci heaps, we just CUT the node and move it to the root list. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"In a Binary Heap, it's O(log N) because the bird must swim up to its' new spot. 🦜\"",
        "codeSnippet": "heap[idx] = newValue;\npercolateUp(idx);"
      },
      {
        "type": "multiple_choice",
        "questionText": "In Dijkstra's algorithm, which operation happens more often?",
        "options": [
          "Decrease-Key (happens for many edges)",
          "Extract-Min (happens once per vertex)",
          "0"
        ],
        "correctAnswer": "Decrease-Key (happens for many edges)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Costs!",
        "pairs": [
          {
            "key": "Binary Heap",
            "value": "O(log N)"
          },
          {
            "key": "Fibonacci Heap",
            "value": "O(1) amortized"
          },
          {
            "key": "d-Ary Heap",
            "value": "O(log_d N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Action of decrease key.",
        "codeSnippet": "parent = getParent(i);\nif(A[i] < A[parent]) ___ (i, parent);",
        "correctAnswer": "swap"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"By increasing 'd', we make the tree shallower, speeding up Decrease-Key! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If d=N, the heap is a single flat array. Decrease-Key is:",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Complexity for binary.",
        "codeSnippet": "O(log ___ N)",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Move up in the world! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Ready to jump?\"",
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
    "order": 37,
    "title": "d-Ary Pros & Cons",
    "desc": "The Trade-off birdhouse.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Analysis! Increasing 'd' makes the tree flatter. Height goes down, so 'Insert' and 'Decrease-Key' get FASTER. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"BUT, Extract-Min gets SLOWER because you have to find the MIN among 'd' children at every level! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If your application does 1,000,000 Decrease-Keys but only 100 Extract-Mins, should you use a larger 'd'?",
        "options": [
          "SQUAWK YES!",
          "No",
          "Stay Binary"
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "match_following",
        "questionText": "Match d-Impact!",
        "pairs": [
          {
            "key": "d = 2",
            "value": "Standard balance"
          },
          {
            "key": "d = 100",
            "value": "Fast Insert, Slow Pop"
          },
          {
            "key": "d = N",
            "value": "Flat line"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "ExtractMin complexity with d children.",
        "codeSnippet": "O( ___ * log_d N);",
        "correctAnswer": "d"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A 4-ary heap is often a great compromise on current CPU architectures! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which cache effect benefits d-Ary heaps?",
        "options": [
          "Children are more likely to be on the same cache line",
          "None",
          "Faster RAM"
        ],
        "correctAnswer": "Children are more likely to be on the same cache line"
      },
      {
        "type": "code_fill_in",
        "questionText": "Optimal d choice.",
        "codeSnippet": "Depends on ___",
        "correctAnswer": "Workload"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Measure twice, heap once! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it a trade?\"",
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
    "order": 38,
    "title": "Persistent Heaps",
    "desc": "Time-traveling nests.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Time Birds! A Persistent Heap allows you to access OLD versions of the heap after updates. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"We achieve this by 'Path Copying': When a node changes, we copy the whole path from the root to that node. 🦜\"",
        "codeSnippet": "newNode = copy(oldNode); newNode.val = X;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Cost of a persistent update in a heap of height H?",
        "options": [
          "O(H) space and time",
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(H) space and time"
      },
      {
        "type": "match_following",
        "questionText": "Match Persistence!",
        "pairs": [
          {
            "key": "Path Copying",
            "value": "O(log N) overhead"
          },
          {
            "key": "Purely Functional",
            "value": "Immutable nodes"
          },
          {
            "key": "Version Control",
            "value": "Git for data structures"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The height of the copied path.",
        "codeSnippet": "O( ___ N);",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Leftist and Skew heaps are easiest to make persistent because they are already pointer-based! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you make an 'Implicit Array' heap persistent?",
        "options": [
          "No (Changing one element in array changes it for everyone)",
          "Yes",
          "Maybe"
        ],
        "correctAnswer": "No (Changing one element in array changes it for everyone)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Complexity per update.",
        "codeSnippet": "O(log ___ )",
        "correctAnswer": "n"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Save all the nests! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Going back in time?\"",
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
    "order": 39,
    "title": "Pairing Heaps",
    "desc": "The simple champion.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pairing Heaps! They are nearly as fast as Fibonacci heaps but WAY simpler to implement. No marked nodes, no complex mark logic! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"They are a multi-way tree structure where Extract-Min involves 'Pairing' all children and merging them! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is the complexity of Decrease-Key in Pairing Heaps settled?",
        "options": [
          "It's ongoing research (Between O(1) and O(log log N))",
          "It's O(1)",
          "It's O(N)"
        ],
        "correctAnswer": "It's ongoing research (Between O(1) and O(log log N))"
      },
      {
        "type": "match_following",
        "questionText": "Match Best Uses!",
        "pairs": [
          {
            "key": "Pairing Heap",
            "value": "Fastest in practice for many tasks"
          },
          {
            "key": "Fibonacci Heap",
            "value": "Theoretical champion"
          },
          {
            "key": "Binary Heap",
            "value": "Best for sorting/fixed size"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Number of children 'Paired' at once.",
        "codeSnippet": "pairs = children / ___ ;",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Many C++ and Java libraries actually use variants of Pairing heaps for their PriorityQueue! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does a pairing heap require a parent pointer?",
        "options": [
          "Yes (for Decrease-Key)",
          "No",
          "Only in elite mode"
        ],
        "correctAnswer": "Yes (for Decrease-Key)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Simplicity level.",
        "codeSnippet": "High",
        "correctAnswer": "High"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pair up! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you paired?\"",
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
    "order": 40,
    "title": "Master Point (Heaps 4)",
    "desc": "Wide-wing status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 4 COMPLETE! From Leftist skewing to d-Ary widening, your heap knowledge is massive. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which heap type always swaps children on merge regardless of NPL?",
        "options": [
          "Skew Heap",
          "Leftist Heap",
          "d-Ary Heap"
        ],
        "correctAnswer": "Skew Heap"
      },
      {
        "type": "multiple_choice",
        "questionText": "NPL stands for...?",
        "options": [
          "Null Path Length",
          "Node Power Level",
          "New Priority Line"
        ],
        "correctAnswer": "Null Path Length"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Wide-Wing Aviator! In Stage 5, we master Huffman Coding and the art of Heap-based compression! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 4",
            "value": "Wide-Wing Aviator"
          },
          {
            "key": "Stage 5",
            "value": "Huffman Hawk"
          },
          {
            "key": "Next",
            "value": "Heaps 5"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Knowledge Gained.",
        "codeSnippet": "4 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Spread your wings! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ready for Huffman?",
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
        "questionText": "Final Spine check?",
        "options": [
          "Right!",
          "Left.",
          "0"
        ],
        "correctAnswer": "Right!"
      }
    ]
  }
];

module.exports = stage4;

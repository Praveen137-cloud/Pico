const stage6 = [
  {
    "order": 51,
    "title": "Treaps (Tree + Heap)",
    "desc": "The ultimate hybrid nest.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Hybrid Power! A Treap is both a Binary Search Tree (on the key) AND a Heap (on a random priority)! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"By assigning every node a RANDOM priority and maintaining the Heap property, the tree stays BALANCED with high probability! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a Treap maintain on its' keys?",
        "options": [
          "Binary Search Tree property (Left < Root < Right)",
          "Heap Property",
          "No property"
        ],
        "correctAnswer": "Binary Search Tree property (Left < Root < Right)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Treap properties!",
        "pairs": [
          {
            "key": "Key",
            "value": "Binary Search Tree (BST)"
          },
          {
            "key": "Priority",
            "value": "Max-Heap"
          },
          {
            "key": "Balance",
            "value": "Randomized"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Action used to restore properties in a Treap.",
        "codeSnippet": "rotateLeft(node) or ___ (node);",
        "correctAnswer": "rotateRight"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Treaps give you O(log N) expectation for Search, Insert, and Delete with zero complex 'Rebalancing' logic! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if two nodes have the same key in a Treap?",
        "options": [
          "Usually not allowed or handled as a standard BST",
          "They must have same priority",
          "They merge"
        ],
        "correctAnswer": "Usually not allowed or handled as a standard BST"
      },
      {
        "type": "code_fill_in",
        "questionText": "Source of balance.",
        "codeSnippet": "R ___ Priority",
        "correctAnswer": "andom"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Best of both worlds! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you a Treap?\"",
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
    "order": 52,
    "title": "Treap Rotations",
    "desc": "Twisting the branches.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Spin cycle! To insert: 1. Insert as a normal BST leaf. 2. Give it a random priority. 3. ROTATE up while its' priority is > parent's priority! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Rotation moves a node UP while preserving the BST order of the keys. 🦜\"",
        "codeSnippet": "if(child.priority > parent.priority) rotate(child);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Does rotating a tree change the in-order traversal (BST order) of the keys?",
        "options": [
          "No (BST property is preserved)",
          "Yes",
          "Only and always"
        ],
        "correctAnswer": "No (BST property is preserved)"
      },
      {
        "type": "match_following",
        "questionText": "Match Rotation Directions!",
        "pairs": [
          {
            "key": "Right Rotation",
            "value": "Brings Left child up"
          },
          {
            "key": "Left Rotation",
            "value": "Brings Right child up"
          },
          {
            "key": "Goal",
            "value": "Restore Heap Order"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complexity of Treap rotation.",
        "codeSnippet": "O( ___ );",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Deletion: 1. Set node's priority to -INF. 2. Rotate it down until it's a leaf. 3. Cut it! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What priority is assigned to a node to make it 'sink' to the leaves?",
        "options": [
          "Negative Infinity (Lowest possible)",
          "Positive Infinity",
          "0"
        ],
        "correctAnswer": "Negative Infinity (Lowest possible)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Main operation used during insert.",
        "codeSnippet": "R ___",
        "correctAnswer": "otation"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Spin to win! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did you rotate?\"",
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
    "order": 53,
    "title": "Beaps (Bi-parental Heaps)",
    "desc": "Heaps with two bird-parents.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Beap Power! A Bi-parental Heap is a specialized structure where each node (except on edges) has TWO parents! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It is laid out in layers: Layer 1 has 1 node, Layer 2 has 2, Layer 3 has 3... Layer K has K nodes. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many parents does a central node in a Beap have?",
        "options": [
          "2",
          "1",
          "3"
        ],
        "correctAnswer": "2"
      },
      {
        "type": "match_following",
        "questionText": "Match Beap Layers!",
        "pairs": [
          {
            "key": "Layer 1",
            "value": "1 node (Root)"
          },
          {
            "key": "Layer 2",
            "value": "2 nodes"
          },
          {
            "key": "Layer 3",
            "value": "3 nodes"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Number of nodes in a Beap of H layers.",
        "codeSnippet": "N = H * (H + 1) / ___ ;",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Searching for an element in a Beap takes O(sqrt N)! It's like searching a sorted grid. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the search complexity in a Beap?",
        "options": [
          "O(sqrt N)",
          "O(log N)",
          "O(N)"
        ],
        "correctAnswer": "O(sqrt N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Bi-parental heap short name.",
        "codeSnippet": "B ___",
        "correctAnswer": "eap"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Double the guidance! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Who is your mommy?\"",
        "options": [
          "TWO BIRDS!",
          "One.",
          "None."
        ],
        "correctAnswer": "TWO BIRDS!"
      }
    ]
  },
  {
    "order": 54,
    "title": "Weak-Heaps",
    "desc": "Relaxing the rules.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Weak Birds! A Weak-Heap relaxes the Heap property to make sorting faster. Every node's Right child value is >= Node's own value. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It uses ONE EXTRA BIT per node (Reverse bit) to swap the meaning of Left/Right children without moving memory! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the primary goal of a Weak-Heap?",
        "options": [
          "Minimize the number of comparisons during Heap Sort",
          "Save space",
          "Make search O(1)"
        ],
        "correctAnswer": "Minimize the number of comparisons during Heap Sort"
      },
      {
        "type": "match_following",
        "questionText": "Match Weak Traits!",
        "pairs": [
          {
            "key": "Reverse Bit",
            "value": "Control child meaning"
          },
          {
            "key": "Comparisons",
            "value": "N log N - 1.1N"
          },
          {
            "key": "Root",
            "value": "Has no left child"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Comparison efficiency: Weak-Heaps use ___ comparisons than Binary Heaps.",
        "codeSnippet": "count = ___ ;",
        "correctAnswer": "fewer"
      },
      {
        "type": "teaching",
                "questionText": "🦜 Pico: \"A Weak-Heap sort is theoretically the most comparison-efficient heap-based sort! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does a Weak-Heap node have a strict parent-child Relationship on the left?",
        "options": [
          "Only the right child has a value check",
          "Yes",
          "Never"
        ],
        "correctAnswer": "Only the right child has a value check"
      },
      {
        "type": "code_fill_in",
        "questionText": "Bit used for swapping children.",
        "codeSnippet": "R ___ Bit",
        "correctAnswer": "everse"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Strength in weakness! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you weak?\"",
        "options": [
          "NO, JUST FAST!",
          "Yes.",
          "Maybe."
        ],
        "correctAnswer": "NO, JUST FAST!"
      }
    ]
  },
  {
    "order": 55,
    "title": "Double-Ended Heaps",
    "desc": "Both ends of the nest.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Dual Extreme! A Double-Ended Priority Queue (DEPQ) lets you extract both the MIN and the MAX in O(log N)! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Common implementations: Min-Max Heap, Interval Heap, or Dual Binary Heaps. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In a Min-Max Heap, what's special about the levels?",
        "options": [
          "They alternate: Min-Level, Max-Level, Min-Level...",
          "They are all same",
          "Random"
        ],
        "correctAnswer": "They alternate: Min-Level, Max-Level, Min-Level..."
      },
      {
        "type": "match_following",
        "questionText": "Match DEPQ types!",
        "pairs": [
          {
            "key": "Min-Max Heap",
            "value": "Alternating level properties"
          },
          {
            "key": "Interval Heap",
            "value": "Nodes store [min, max] pairs"
          },
          {
            "key": "Priority Deque",
            "value": "Abstract term"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complexity to get the Max in a Min-Max heap.",
        "codeSnippet": "O( ___ ); // Root's kids",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"In a Min-Max heap, the Root is the global MIN. Its' children are the candidates for global MAX! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Where is the global MAX in a Min-Max Heap?",
        "options": [
          "At one of the children of the root (Level 2)",
          "At the root",
          "At the leaves"
        ],
        "correctAnswer": "At one of the children of the root (Level 2)"
      },
      {
        "type": "code_fill_in",
        "questionText": "DEPQ full name.",
        "codeSnippet": "Double- ___ Priority Queue",
        "correctAnswer": "Ended"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Two extremes at once! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Min or Max?\"",
        "options": [
          "BOTH!",
          "Min.",
          "Max."
        ],
        "correctAnswer": "BOTH!"
      }
    ]
  },
  {
    "order": 56,
    "title": "Min-Max Percolation",
    "desc": "Bouncing between levels.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Deep Dive! When you insert into a Min-Max Heap, if you land on a MAX level, you must first check if you are LOWER than your parent (a min node)! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Then you bubble-up alternating levels: index -> grandpa -> great-grandpa! 🦜\"",
        "codeSnippet": "while(A[i] > A[grandpa]) swap(i, grandpa);"
      },
      {
        "type": "multiple_choice",
        "questionText": "During Bubble-Up in Min-Max heap, which node is compared next?",
        "options": [
          "The Grandparent node (2 levels up)",
          "The Parent node",
          "The Root"
        ],
        "correctAnswer": "The Grandparent node (2 levels up)"
      },
      {
        "type": "match_following",
        "questionText": "Match Min-Max Levels!",
        "pairs": [
          {
            "key": "Level 1 (0)",
            "value": "Min"
          },
          {
            "key": "Level 2 (1,2)",
            "value": "Max"
          },
          {
            "key": "Level 3 (3-6)",
            "value": "Min"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complexity of Min-Max insert.",
        "codeSnippet": "O( ___ N);",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It's still O(log N) because you only check every second level! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Total depth of a heap with 1000 nodes?",
        "options": [
          "9 (log2 1000)",
          "100",
          "500"
        ],
        "correctAnswer": "9 (log2 1000)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check for level type.",
        "codeSnippet": "floor(log2(i+1)) ___ 2",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Leapfrog the levels! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Grandpa, is that you?\"",
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
    "order": 57,
    "title": "Soft Heaps",
    "desc": "Speed through errors.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Corrupt Birds! A Soft Heap is a structure that achieves O(1) complexity for all operations by intentionally 'CORRUPTING' (increasing) the values of some elements! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It can lose some accuracy to gain massive speed. Used in the fastest current algorithms for Minimum Spanning Trees! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a Soft Heap do to keys?",
        "options": [
          "Artificially increases them (corrupts them)",
          "Negates them",
          "Deletes them"
        ],
        "correctAnswer": "Artificially increases them (corrupts them)"
      },
      {
        "type": "match_following",
        "questionText": "Match Soft Logic!",
        "pairs": [
          {
            "key": "Error Rate ε",
            "value": "Max corrupted fraction"
          },
          {
            "key": "Complexity",
            "value": "O(log 1/ε) per op"
          },
          {
            "key": "Use",
            "value": "Chazelle's MST algorithm"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Soft Heaps are mostly ___ .",
        "codeSnippet": "concept = \"___\" ;",
        "correctAnswer": "Theoretical"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"By grouping nodes into 'Lists', they process multiple items in one step! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is a Soft Heap 'Exact' (does it always return the true min)?",
        "options": [
          "No (It can be slightly wrong)",
          "Yes",
          "Always"
        ],
        "correctAnswer": "No (It can be slightly wrong)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Target accuracy parameter.",
        "codeSnippet": "Epsilon ( ___ )",
        "correctAnswer": "ε"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Embrace the error! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it soft?\"",
        "options": [
          "AND SUPERSPEED!",
          "No.",
          "Maybe."
        ],
        "correctAnswer": "AND SUPERSPEED!"
      }
    ]
  },
  {
    "order": 58,
    "title": "Selection with Heaps",
    "desc": "Finding the middle ground.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Median Search! We've seen 'Median in a Stream' (Two Heaps). But how do we find the K-th smallest in a FIXED array? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"QuickSelect is O(N) average. Can Heaps help? Yes! Build-Heap (O(N)) + K Extracts (K log N). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to find K-th smallest using a heap?",
        "options": [
          "O(N + K log N)",
          "O(N log N)",
          "O(K)"
        ],
        "correctAnswer": "O(N + K log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match selection speeds!",
        "pairs": [
          {
            "key": "K = 1",
            "value": "O(N) Build-Heap"
          },
          {
            "key": "K = N/2",
            "value": "Basically O(N log N)"
          },
          {
            "key": "K = N",
            "value": "Full Heap Sort"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The method used to organize the array initially.",
        "codeSnippet": "algorithm = \"___\" ;",
        "correctAnswer": "Heapify"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If K is small, the Heap method is much faster than full sorting! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which is better for K = 10 and N = 1,000,000?",
        "options": [
          "Heap Method (O(N))",
          "Full Sort (O(N log N))",
          "Wait 10 minutes"
        ],
        "correctAnswer": "Heap Method (O(N))"
      },
      {
        "type": "code_fill_in",
        "questionText": "Sorting name.",
        "codeSnippet": "K-th ___ Statistic",
        "correctAnswer": "Order"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Select the best! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Found the K-th?\"",
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
    "order": 59,
    "title": "Heap Memory Layout",
    "desc": "Cache me if you can.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Binary Heaps in an array are 'Cache-Friendly' relative to trees, but as N gets large, jumps between parent `i` and children `2i` skip many cache lines! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is why d-Ary heaps (like 4-Ary) are often faster in real hardware - more related data stays in the CPU cache! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens when a CPU looks for data NOT in its' cache?",
        "options": [
          "Cache Miss (Costly delay to fetch from RAM)",
          "CPU crashes",
          "Nothing"
        ],
        "correctAnswer": "Cache Miss (Costly delay to fetch from RAM)"
      },
      {
        "type": "match_following",
        "questionText": "Match Memory Terms!",
        "pairs": [
          {
            "key": "Cache Line",
            "value": "64 bytes of close data"
          },
          {
            "key": "Temporal Locality",
            "value": "Reuse data soon"
          },
          {
            "key": "Spatial Locality",
            "value": "Use nearby data"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Optimal d-Ary heap child count for modern L1 cache.",
        "codeSnippet": "d = ___ ;",
        "correctAnswer": "4"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Memory speed is the bottleneck for Heaps today, not CPU speed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is a 4-ary heap better for a cache line of size 64 bytes (assuming 8-byte numbers)?",
        "options": [
          "Children are grouped together (8*4=32 bytes) within one line",
          "It's not",
          "It's smaller"
        ],
        "correctAnswer": "Children are more likely to be on the same cache line"
      },
      {
        "type": "code_fill_in",
        "questionText": "Miss type.",
        "codeSnippet": "Cache ___",
        "correctAnswer": "Miss"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stay close to the cache! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it in the cache?\"",
        "options": [
          "I HOPE SO!",
          "No.",
          "0"
        ],
        "correctAnswer": "I HOPE SO!"
      }
    ]
  },
  {
    "order": 60,
    "title": "Master Point (Heaps 6)",
    "desc": "Treap titan status confirmed.",
    "lessons": [
      {
        "type": "teaching",
                "questionText": "🦜 Pico: \"STAGE 6 COMPLETE! You've mastered Treaps, Beaps, Weak-Heaps, and the dual world of Min-Max! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a Soft Heap intentionally generate to gain speed?",
        "options": [
          "Corrupted (Increased) Keys",
          "Fewer Nodes",
          "More Errors"
        ],
        "correctAnswer": "Corrupted (Increased) Keys"
      },
      {
        "type": "multiple_choice",
        "questionText": "Search complexity in a Beap?",
        "options": [
          "O(sqrt N)",
          "O(log N)",
          "O(1)"
        ],
        "correctAnswer": "O(sqrt N)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Treap Titan! In Stage 7, we tackle the realm of Probability: Bloom Filters and Heap-based sketches! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 6",
            "value": "Treap Titan"
          },
          {
            "key": "Stage 7",
            "value": "Probabilistic Pelican"
          },
          {
            "key": "Next",
            "value": "Heaps 7"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Knowledge Units.",
        "codeSnippet": "6 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Spin into the next stage! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ready for Probability?",
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
        "questionText": "Final Rotation?",
        "options": [
          "Left!",
          "Right.",
          "Done."
        ],
        "correctAnswer": "Right!"
      }
    ]
  }
];

module.exports = stage6;

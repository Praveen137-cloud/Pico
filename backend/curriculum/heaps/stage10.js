const stage10 = [
  {
    "order": 91,
    "title": "Project: Priority Scheduler",
    "desc": "Managing the bird CPU.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Final Climb! Let's build a Priority Scheduler. Each process has a priority and a processing time. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"We use a Max-Heap to always pick the most important bird to fly next! 🦜\"",
        "codeSnippet": "class Process { int priority; string name; };\nPriorityQueue<Process> scheduler;"
      },
      {
        "type": "multiple_choice",
        "questionText": "If a process with priority 100 enters the heap and the current root has priority 50, what happens?",
        "options": [
          "The new process becomes the root (bubbles up)",
          "It waits at the bottom",
          "It's ignored"
        ],
        "correctAnswer": "The new process becomes the root (bubbles up)"
      },
      {
        "type": "match_following",
        "questionText": "Match Scheduler Logic!",
        "pairs": [
          {
            "key": "Enqueue",
            "value": "New bird arrives (Insert)"
          },
          {
            "key": "Dispatch",
            "value": "Highest priority runs (ExtractMax)"
          },
          {
            "key": "Preemption",
            "value": "Replace current bird with root"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complexity of adding a new process.",
        "codeSnippet": "O( ___ N);",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Real-time systems use this to ensure urgent tasks never wait! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What attribute determines its' spot in the heap?",
        "options": [
          "Priority Score",
          "Alphabetical Name",
          "Random number"
        ],
        "correctAnswer": "Priority Score"
      },
      {
        "type": "code_fill_in",
        "questionText": "Scheduler tool.",
        "codeSnippet": "Priority ___",
        "correctAnswer": "Queue"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Control the flow! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it your turn?\"",
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
    "order": 92,
    "title": "Project: Rate Limiter",
    "desc": "Protecting the birdhouse.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"API Shield! A sliding window rate limiter stores timestamps of recent hits in a Min-Heap. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"To check if a new hit is allowed: 1. Remove all timestamps older than 1 minute (Root of Min-Heap). 2. Check heap size! 🦜\"",
        "codeSnippet": "while(pq.peek() < now - 60) pq.pop();\nif(pq.size() < LIMIT) pq.push(now);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use a Min-Heap for timestamps?",
        "options": [
          "The root is always the OLDEST timestamp (easiest to expire)",
          "To find the newest hit",
          "Because it's smaller"
        ],
        "correctAnswer": "The root is always the OLDEST timestamp (easiest to expire)"
      },
      {
        "type": "match_following",
        "questionText": "Match Limiter Actions!",
        "pairs": [
          {
            "key": "Peek",
            "value": "Check oldest hit"
          },
          {
            "key": "Pop",
            "value": "Remove expired hit"
          },
          {
            "key": "Push",
            "value": "Log new hit"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complexity of removing K expired hits.",
        "codeSnippet": "O(K ___ N);",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This ensures your server doesn't get overwhelmed by too many chirps at once! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Limit is 100 hits/min. Current heap size is 99. New hit?",
        "options": [
          "ALLOWED!",
          "Blocked.",
          "0"
        ],
        "correctAnswer": "ALLOWED!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Limiter type.",
        "codeSnippet": "Rate ___",
        "correctAnswer": "Limiter"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Guard the nest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can I enter?\"",
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
    "order": 93,
    "title": "Project: Log Merger",
    "desc": "Sorting a mountain of messages.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Scale it up! You have 100 log files (1GB each) sorted by timestamp. You want to merge them into one giant file. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a Min-Heap of size 100 to store the next entry from each file. 🦜\"",
        "codeSnippet": "pq.add(file[i].readLine());"
      },
      {
        "type": "multiple_choice",
        "questionText": "This is a real-world use of what algorithm?",
        "options": [
          "External K-way Merge",
          "Quick Sort",
          "Binary Search"
        ],
        "correctAnswer": "External K-way Merge"
      },
      {
        "type": "match_following",
        "questionText": "Match Merge Components!",
        "pairs": [
          {
            "key": "Files",
            "value": "Sorted source streams"
          },
          {
            "key": "Heap",
            "value": "Current best candidates"
          },
          {
            "key": "Output",
            "value": "Unified chronological log"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Maximum memory used (number of lines in heap) for 1000 files.",
        "codeSnippet": "lines = ___ ;",
        "correctAnswer": "1000"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This constant-memory merge is the backbone of big-data processing (e.g. MapReduce)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if one of the 100 files runs out of lines?",
        "options": [
          "The heap size shrinks to 99",
          "The program crashes",
          "Search stops"
        ],
        "correctAnswer": "The heap size shrinks to 99"
      },
      {
        "type": "code_fill_in",
        "questionText": "Sorting type (external).",
        "codeSnippet": "K-way ___",
        "correctAnswer": "Merge"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Infinite messages! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Merge complete?\"",
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
    "order": 94,
    "title": "A* Pathfinding",
    "desc": "The smartest flight path.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Smart Mapping! A* search is like Dijkstra's but it uses a Heuristic (educated guess) to focus on the target. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Priority Score = f(n) = g(n) + h(n). g is actual cost; h is estimated cost to goal! 🦜\"",
        "codeSnippet": "pq.add(new Node(u, g + h));"
      },
      {
        "type": "multiple_choice",
        "questionText": "What type of heap is used for the A* 'Open List'?",
        "options": [
          "Min-Heap (Smallest total score first)",
          "Max-Heap",
          "Stack"
        ],
        "correctAnswer": "Min-Heap (Smallest total score first)"
      },
      {
        "type": "match_following",
        "questionText": "Match A* Terms!",
        "pairs": [
          {
            "key": "g(n)",
            "value": "Distance from start"
          },
          {
            "key": "h(n)",
            "value": "Heuristic to end"
          },
          {
            "key": "Open List",
            "value": "The Priority Queue"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complexity of picking the next node.",
        "codeSnippet": "O(log ___);",
        "correctAnswer": "V"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A* is used in almost every video game to move characters across maps efficiently! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if h(n) is always 0?",
        "options": [
          "A* becomes Dijkstra's Algorithm",
          "A* becomes BFS",
          "It breaks"
        ],
        "correctAnswer": "A* becomes Dijkstra's Algorithm"
      },
      {
        "type": "code_fill_in",
        "questionText": "Algorithm name.",
        "codeSnippet": "A ___ Search",
        "correctAnswer": "Star"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Follow the star! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Path found?\"",
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
    "order": 95,
    "title": "Heapsort Pitfalls",
    "desc": "Don't fall from the branch.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Watch out! 1. Heapsort is slow on small datasets (QuickSort is faster). 2. It is NOT stable. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"3. Cache misses increase as the heap grows past the CPU L3 cache size! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is Heapsort unstable?",
        "options": [
          "Extraction swaps equal values across long distances",
          "It's random",
          "Pico says so"
        ],
        "correctAnswer": "Extraction swaps equal values across long distances"
      },
      {
        "type": "match_following",
        "questionText": "Match Sort Weaknesses!",
        "pairs": [
          {
            "key": "Heap Sort",
            "value": "Unstable, Poor cache"
          },
          {
            "key": "Quick Sort",
            "value": "Recursive depth, Worst-case O(N^2)"
          },
          {
            "key": "Merge Sort",
            "value": "O(N) Space"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complexity of heap building vs extracting.",
        "codeSnippet": "build = O(N); extract = O(N ___ N);",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Always check if your language's `sort()` uses Timsort or Quicksort before forcing a Manual Heap! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Best use case for Heapsort?",
        "options": [
          "Systems with tight memory limits (O(1) space)",
          "Small arrays",
          "Sorting strings"
        ],
        "correctAnswer": "Systems with tight memory limits (O(1) space)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Memory usage.",
        "codeSnippet": "I ___ -place",
        "correctAnswer": "n"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stay on the branch! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it stable?\"",
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
    "order": 96,
    "title": "Heap Debugging",
    "desc": "Finding the broken nest.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bug Hunt! A broken heap often means the 'Heap Invariant' (parent <= child) was violated! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a `checkHeap()` function to traverse the array and verify priorities for every node. 🦜\"",
        "codeSnippet": "for(i=0; i<size; i++) assert(A[i] <= A[2*i+1]);"
      },
      {
        "type": "multiple_choice",
        "questionText": "What usually causes a heap invariant violation?",
        "options": [
          "Changing an element's value without calling DecreaseKey/IncreaseKey",
          "Inserting a new node",
          "Extracting the root"
        ],
        "correctAnswer": "Changing an element's value without calling DecreaseKey/IncreaseKey"
      },
      {
        "type": "match_following",
        "questionText": "Match Debug Tools!",
        "pairs": [
          {
            "key": "Assert",
            "value": "Trap errors early"
          },
          {
            "key": "Visualizer",
            "value": "Draw the tree"
          },
          {
            "key": "Validator",
            "value": "Check NPL/Properties"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Common array index bug: parent of node `i`?.",
        "codeSnippet": "parent = (i - 1) / ___ ;",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Off-by-one errors with array indices (starting at 0 vs 1) are the most common heap bug! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If root is index 0, what is the right child of index 2?",
        "options": [
          "6 (2*2 + 2)",
          "5",
          "4"
        ],
        "correctAnswer": "6 (2*2 + 2)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Validation function.",
        "codeSnippet": "is ___",
        "correctAnswer": "Valid"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fix the foundation! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it valid?\"",
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
    "order": 97,
    "title": "Choosing the Flock",
    "desc": "Summary of choices.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Quick Ref! 1. Sorting? Binary Heap. 2. Dijkstra (Theoretical)? Fibonacci. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"3. Dijkstra (Real world)? Pairing. 4. Merging queues regularly? Binomial. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which heap should you choose for a simple app needing a PriorityQueue?",
        "options": [
          "Binary Heap (Standard Library)",
          "Fibonacci Heap",
          "Skew Heap"
        ],
        "correctAnswer": "Binary Heap (Standard Library)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Winner!",
        "pairs": [
          {
            "key": "Simplicity",
            "value": "Binary Heap"
          },
          {
            "key": "Speed per op",
            "value": "Fibonacci (Theory)"
          },
          {
            "key": "Practical speed",
            "value": "Pairing Heap"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complexity used to describe most heap operations.",
        "codeSnippet": "O( ___ n);",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Unless you are at Google scale, a Binary Heap is usually all the bird power you need! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does 'Amortized' O(1) mean it's ALWAYS faster than O(log N)?",
        "options": [
          "No (Higher constant factors can make it slower for small N)",
          "Yes",
          "Maybe"
        ],
        "correctAnswer": "No (Higher constant factors can make it slower for small N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Choice metric.",
        "codeSnippet": "Constant ___",
        "correctAnswer": "Factors"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Choose wisely! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did you choose?\"",
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
    "order": 98,
    "title": "Heap Certification I",
    "desc": "The test of the nest.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"EXAM TIME! Question 1: What is the height of a complete binary tree with N nodes? 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Height of tree?",
        "options": [
          "floor(log2 N)",
          "N / 2",
          "sqrt N"
        ],
        "correctAnswer": "floor(log2 N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Question 2: Complexity of Build-Heap using sinkDown?",
        "options": [
          "O(N)",
          "O(N log N)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Question 3: Minimum number of elements in a binary heap of height H? 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Minimum elements?",
        "options": [
          "2^H",
          "2^H - 1",
          "H"
        ],
        "correctAnswer": "2^H"
      },
      {
        "type": "match_following",
        "questionText": "Match Heap Ops!",
        "pairs": [
          {
            "key": "Insert",
            "value": "Swim Up"
          },
          {
            "key": "Extract",
            "value": "Sink Down"
          },
          {
            "key": "Search",
            "value": "O(N) - Linear scan"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Maximum number of kids in a 4-Ary heap node.",
        "codeSnippet": "kids = ___ ;",
        "correctAnswer": "4"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Almost there! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Question 4: Can a Min-Heap find Max in O(log N)?",
        "options": [
          "No (Need O(N) scan)",
          "Yes",
          "Only and always"
        ],
        "correctAnswer": "No (Need O(N) scan)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Invariant: Child ___ Parent (Min-Heap).",
        "codeSnippet": ">=",
        "correctAnswer": ">="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Finish strong! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Passed Part 1?",
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
    "order": 99,
    "title": "Heap Certification II",
    "desc": "Conquering the mountain.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"FINAL EXAM! Question 5: What is the NPL of a node with only a LEFT child? 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "NPL value?",
        "options": [
          "0 (Right child is null)",
          "1",
          "-1"
        ],
        "correctAnswer": "0 (Right child is null)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Question 6: Complexity of Fibonacci Decrease-Key (Amortized)?",
        "options": [
          "O(1)",
          "O(log N)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Question 7: Order of merge in a Binomial Heap of size 7? 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Trees included?",
        "options": [
          "B0, B1, B2 (bits 111)",
          "B1, B2, B3",
          "B7"
        ],
        "correctAnswer": "B0, B1, B2 (bits 111)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Advanced Heaps!",
        "pairs": [
          {
            "key": "Leftist",
            "value": "Imbalanced Merge"
          },
          {
            "key": "Skew",
            "value": "Amortized Simple"
          },
          {
            "key": "Treap",
            "value": "Randomized BST"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Optimized Dijkstra time with Fibonacci.",
        "codeSnippet": "O(E + V ___ V);",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The final climb! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which heap uses 'Reverse Bits' to avoid memory moves?",
        "options": [
          "Weak-Heap",
          "Binary Heap",
          "Fibonacci Heap"
        ],
        "correctAnswer": "Weak-Heap"
      },
      {
        "type": "code_fill_in",
        "questionText": "Total Titan Cert score.",
        "codeSnippet": "100%",
        "correctAnswer": "100%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"YOU DID IT! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Passed Part 2?",
        "options": [
          "TITAN STATUS!",
          "No.",
          "0"
        ],
        "correctAnswer": "TITAN STATUS!"
      }
    ]
  },
  {
    "order": 100,
    "title": "Master Point (Heaps 10)",
    "desc": "Heap Hierophant certified.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"LEGEND SECURED! You have completed the 100-Unit Titan Heaps Curriculum. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What rank have you achieved?",
        "options": [
          "Heap Hierophant",
          "Search Scout",
          "Bird Brain"
        ],
        "correctAnswer": "Heap Hierophant"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total lessons completed in this subject?",
        "options": [
          "100 Units (1000 Lessons!)",
          "100",
          "10"
        ],
        "correctAnswer": "100 Units (1000 Lessons!)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"SQUAWK! You are now a master of priority. Use your power to build the fastest, most elite applications in the forest! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "The Final Roll!",
        "pairs": [
          {
            "key": "Subject",
            "value": "Heaps"
          },
          {
            "key": "Status",
            "value": "MASTERED"
          },
          {
            "key": "Next",
            "value": "Mathbits 1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Total Titan Points.",
        "codeSnippet": "10 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fly free, Hierophant! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Final Mission Accomplished?",
        "options": [
          "SQUAWK YES!",
          "Yes.",
          "Elite."
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"THE END. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Close the nest?",
        "options": [
          "Done.",
          "Finish.",
          "0"
        ],
        "correctAnswer": "Done."
      }
    ]
  }
];

module.exports = stage10;

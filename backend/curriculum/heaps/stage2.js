const stage2 = [
  {
    "order": 11,
    "title": "Heap Sort Intro",
    "desc": "Sorting by extreme extraction.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sorting Mastery! Heap Sort uses a Max-Heap to sort an array. Since the root is always the LARGEST, we repeatedly extract it and move it to the end! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Process: 1. Build Max-Heap. 2. Swap Root with Last. 3. Shrink Heap size by 1. 4. Sink Root. Repeat! 🦜\"",
        "codeSnippet": "while(size > 1) {\n  swap(0, size-1);\n  size--;\n  sinkDown(0);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What type of heap is used for ascending order (Small to Large) sorting in-place?",
        "options": [
          "Max-Heap (Large items moved to end)",
          "Min-Heap",
          "Random Heap"
        ],
        "correctAnswer": "Max-Heap (Large items moved to end)"
      },
      {
        "type": "match_following",
        "questionText": "Match Sort Steps!",
        "pairs": [
          {
            "key": "Step A",
            "value": "Build Max-Heap (O(N))"
          },
          {
            "key": "Step B",
            "value": "Extract Max (O(log N))"
          },
          {
            "key": "Result",
            "value": "Sorted Array"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Total complexity of Heap Sort.",
        "codeSnippet": "Time = O(N ___ N);",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Heap Sort is O(N log N) in ALL cases: Best, Average, and Worst! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many extra memory cells (space) does in-place Heap Sort use?",
        "options": [
          "O(1) - Constant (In-place)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1) - Constant (In-place)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Operation during extraction.",
        "codeSnippet": "___ (0, size - 1)",
        "correctAnswer": "swap"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Extract the order! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you sorted?\"",
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
    "order": 12,
    "title": "Stability & Comparisons",
    "desc": "How Heap Sort stacks up.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stability Check! Heap Sort is NOT stable. Equal items might swap relative order during the Sink-Down process. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Comparison: Unlike QuickSort (O(N^2) worst case), Heap Sort is ALWAYS O(N log N). But QuickSort is usually faster in practice! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is Heap Sort typically slower than QuickSort in the average case?",
        "options": [
          "Poor Cache Locality (jumping around the array)",
          "Bad math",
          "It's recursive"
        ],
        "correctAnswer": "Poor Cache Locality (jumping around the array)"
      },
      {
        "type": "match_following",
        "questionText": "Match Sort Traits!",
        "pairs": [
          {
            "key": "Heap Sort",
            "value": "O(N log N) Worst, O(1) Space"
          },
          {
            "key": "Quick Sort",
            "value": "Fast Average, O(N^2) Worst"
          },
          {
            "key": "Merge Sort",
            "value": "Stable, O(N) Space"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Is Heap Sort stable?",
        "codeSnippet": "stable = ___ ;",
        "correctAnswer": "false"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Merge Sort is better for Linked Lists, but Heap Sort is great for fixed arrays with strict memory limits! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Heap Sort use recursion?",
        "options": [
          "Optional (Usually iterative sinkDown is used)",
          "Always",
          "Never"
        ],
        "correctAnswer": "Optional (Usually iterative sinkDown is used)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Worst case time complexity.",
        "codeSnippet": "O(N ___ N)",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Choose your weapon! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you stable?\"",
        "options": [
          "SQUAWK NO!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "SQUAWK NO!"
      }
    ]
  },
  {
    "order": 13,
    "title": "Top K Elements",
    "desc": "Finding the most elite birds.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Elite Hunt! To find the K largest elements in a giant stream of N items, DON'T sort the whole array. Use a Min-Heap of size K! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Process: 1. Keep a Min-Heap of size K. 2. If new bird > root, swap it in and sink-down. The root is always the smallest of the 'Elite' group! 🦜\"",
        "codeSnippet": "if (item > minHeap.peek()) {\n  minHeap.replaceRoot(item);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of finding Top K elements using this method?",
        "options": [
          "O(N log K)",
          "O(N log N)",
          "O(N * K)"
        ],
        "correctAnswer": "O(N log K)"
      },
      {
        "type": "match_following",
        "questionText": "Match Top K Logic!",
        "pairs": [
          {
            "key": "Goal",
            "value": "K Largest items"
          },
          {
            "key": "Tool",
            "value": "Min-Heap of size K"
          },
          {
            "key": "Logic",
            "value": "Discard small items"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The heap type for finding K LARGEST elements.",
        "codeSnippet": "HeapType = ___ ;",
        "correctAnswer": "Min-Heap"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Similarly, use a Max-Heap of size K to find the K smallest items! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is O(N log K) better than O(N log N)?",
        "options": [
          "If K is small (e.g. 10), it's basically linear O(N)!",
          "It's not",
          "Memory is the same"
        ],
        "correctAnswer": "If K is small (e.g. 10), it's basically linear O(N)!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Size of the heap.",
        "codeSnippet": "___",
        "correctAnswer": "K"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Join the elite! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you in the Top K?\"",
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
    "order": 14,
    "title": "Merging K Sorted Lists",
    "desc": "The multi-way combine.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"List Merge! You have K sorted lists (total N items). To merge them into one sorted list, use a Min-Heap of size K! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Process: 1. Put the first element of each list into the Min-Heap. 2. Extract min. 3. Add the NEXT element from that same list into the heap. Repeat! 🦜\"",
        "codeSnippet": "pq.add(new Node(list[i][0], i, 0));"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of merging K lists of total N elements?",
        "options": [
          "O(N log K)",
          "O(N log N)",
          "O(N * K)"
        ],
        "correctAnswer": "O(N log K)"
      },
      {
        "type": "match_following",
        "questionText": "Match Merge Parts!",
        "pairs": [
          {
            "key": "Heap Store",
            "value": "{value, listID, itemID}"
          },
          {
            "key": "Extract",
            "value": "Next smallest overall"
          },
          {
            "key": "Update",
            "value": "Advance source list pointer"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The method to add the next item.",
        "codeSnippet": "pq. ___ (getNext(minNode.listID));",
        "correctAnswer": "add"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is essential for external sorting (merging huge files from disk)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If K = 2, what does this algorithm become?",
        "options": [
          "Standard 2-way Merge (Merge Sort)",
          "Quick Sort",
          "0"
        ],
        "correctAnswer": "Standard 2-way Merge (Merge Sort)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Total number of extract operations.",
        "codeSnippet": "___",
        "correctAnswer": "N"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Merge the masses! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can you merge?\"",
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
    "order": 15,
    "title": "Median in a Stream",
    "desc": "The Two-Heap Balance.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Middle Bird! To track the median of a continuous stream of numbers, use TWO heaps: a Max-Heap for the 'Lower half' and a Min-Heap for the 'Higher half'. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Ensure the size difference between the two heaps is never more than 1. The median is either the larger heap's root or the average of both! 🦜\"",
        "codeSnippet": "MaxHeap (Lower) | MinHeap (Higher)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Where is the median if both heaps have the same size?",
        "options": [
          "(MaxHeap.root + MinHeap.root) / 2",
          "MaxHeap.root",
          "MinHeap.root"
        ],
        "correctAnswer": "(MaxHeap.root + MinHeap.root) / 2"
      },
      {
        "type": "match_following",
        "questionText": "Match Median Logic!",
        "pairs": [
          {
            "key": "Lower Half",
            "value": "Max-Heap (Top is near middle)"
          },
          {
            "key": "Upper Half",
            "value": "Min-Heap (Root is near middle)"
          },
          {
            "key": "Update",
            "value": "Keep sizes balanced"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complexity to get the median.",
        "codeSnippet": "O( ___ );",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Insertion takes O(log N). This is the fastest way to maintain a running median! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If MaxHeap has size 5 and MinHeap has size 4, median is:",
        "options": [
          "MaxHeap.root",
          "MinHeap.root",
          "Average"
        ],
        "correctAnswer": "MaxHeap.root"
      },
      {
        "type": "code_fill_in",
        "questionText": "The goal of size management.",
        "codeSnippet": "Balance the ___",
        "correctAnswer": "Heaps"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Balance in all things! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you in the middle?\"",
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
    "order": 16,
    "title": "PriorityQueue in Java",
    "desc": "Standard library secrets.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Java Birds! The `java.util.PriorityQueue` is a Min-Heap by default. Use `Collections.reverseOrder()` to make it a Max-Heap! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It is NOT thread-safe. Use `PriorityBlockingQueue` for concurrent birds! 🦜\"",
        "codeSnippet": "PriorityQueue<Integer> pq = new PriorityQueue<>(Comparator.reverseOrder());"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does `pq.poll()` do in Java?",
        "options": [
          "Removes and returns the root (extreme value)",
          "Peeks without removing",
          "Adds an item"
        ],
        "correctAnswer": "Removes and returns the root (extreme value)"
      },
      {
        "type": "match_following",
        "questionText": "Match Java Methods!",
        "pairs": [
          {
            "key": "offer(e)",
            "value": "Insert"
          },
          {
            "key": "poll()",
            "value": "Extract root"
          },
          {
            "key": "peek()",
            "value": "View root"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complexity of `pq.contains(item)` in Java.",
        "codeSnippet": "O( ___ ); // Requires a search",
        "correctAnswer": "N"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Remember, Java's PQ stores items in an array internally, just like we learned! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Java PQ allow NULL elements?",
        "options": [
          "No",
          "Yes",
          "Only and always"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "The interface implemented.",
        "codeSnippet": "Queue < ___ >",
        "correctAnswer": "E"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use the tools of the flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Ready to offer?\"",
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
    "order": 17,
    "title": "heapq in Python",
    "desc": "The list-based heap.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Python Snaps! The `heapq` module provides functions to transform a regular LIST into a Min-Heap in-place! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Logic: `heapify(list)` is O(N). `heappush` and `heappop` are O(log N). 🦜\"",
        "codeSnippet": "import heapq\nheapq.heapify(my_list)\nval = heapq.heappop(my_list)"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do you implement a Max-Heap in Python since `heapq` is Min-Heap only?",
        "options": [
          "Multiply values by -1 before pushing",
          "There is no way",
          "Use a different module"
        ],
        "correctAnswer": "Multiply values by -1 before pushing"
      },
      {
        "type": "match_following",
        "questionText": "Match Python Functions!",
        "pairs": [
          {
            "key": "nlargest(K, list)",
            "value": "Find Top K (O(N log K))"
          },
          {
            "key": "heappushpop",
            "value": "Push, then Pop (Efficient)"
          },
          {
            "key": "heapify",
            "value": "In-place build"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Function to extract the smallest.",
        "codeSnippet": "val = heapq. ___ (heap);",
        "correctAnswer": "heappop"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Python's `heapq` is a collection of helper functions, not a separate class! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Index of the root in python `heapq` list?",
        "options": [
          "0",
          "1",
          "-1"
        ],
        "correctAnswer": "0"
      },
      {
        "type": "code_fill_in",
        "questionText": "Import name.",
        "codeSnippet": "import ___",
        "correctAnswer": "heapq"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sleek and Pythonic! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Ready to pop?\"",
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
    "order": 18,
    "title": "Task Scheduling",
    "desc": "Real-world priority.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bird Jobs! Imagine a OS scheduler. Each task has a priority and a deadline. A Max-Heap ensures the CPU always picks the most important task next! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If a High Priority task arrives (Interrupt), it bubbles up and becomes the new root instantly! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What attribute determines the 'Priority' in a scheduler?",
        "options": [
          "A calculated Priority Value",
          "Length of name",
          "Arrival time"
        ],
        "correctAnswer": "A calculated Priority Value"
      },
      {
        "type": "match_following",
        "questionText": "Match Scheduler Parts!",
        "pairs": [
          {
            "key": "New Process",
            "value": "Heap Insert"
          },
          {
            "key": "Run Next",
            "value": "Heap ExtractMax"
          },
          {
            "key": "Wait Queue",
            "value": "The Heap itself"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Term for updating a task's priority.",
        "codeSnippet": "\"DECREASE\" + \"_\" + \"___\" ;",
        "correctAnswer": "KEY"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Decrease Key is an O(log N) operation that moves an element up or down if its' priority changes! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Wait... how do we find the task in the heap to update its' key?",
        "options": [
          "Need a separate Index Map (ID -> Array Index)",
          "Search the heap O(N)",
          "Guess"
        ],
        "correctAnswer": "Need a separate Index Map (ID -> Array Index)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Common name for this pattern.",
        "codeSnippet": "___ Scheduling",
        "correctAnswer": "Priority"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The CPU never sleeps! 🦜\""
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
    "order": 19,
    "title": "Dijkstra & Prim Hint",
    "desc": "Grabbing the closest neighbor.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Graph Hashing? No, Graph Heaping! Dijkstra's algorithm uses a Min-Priority Queue to always visit the 'closest' unvisited city next! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Without a Heap, Dijkstra's is O(V^2). With a Binary Heap, it becomes O(E log V)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use a Min-Heap in Dijkstra's?",
        "options": [
          "To find the vertex with the minimum distance",
          "To find the longest path",
          "Because it's easier"
        ],
        "correctAnswer": "To find the vertex with the minimum distance"
      },
      {
        "type": "match_following",
        "questionText": "Match Graph Heaps!",
        "pairs": [
          {
            "key": "Dijkstra",
            "value": "Shortest Path"
          },
          {
            "key": "Prim",
            "value": "Min Spanning Tree"
          },
          {
            "key": "Priority",
            "value": "Distances"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The E in O(E log V).",
        "codeSnippet": "num ___ ;",
        "correctAnswer": "Edges"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Every time an edge 'Relaxes', we might push a new score into the heap! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if an even better path is found to a vertex already in the heap?",
        "options": [
          "Insert again or Decrease Key!",
          "Ignore it",
          "Delete the vertex"
        ],
        "correctAnswer": "Insert again or Decrease Key!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Algorithm for shortest paths.",
        "codeSnippet": "D ___",
        "correctAnswer": "ijkstra"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Navigate the web! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Found the shortcut?\"",
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
    "order": 20,
    "title": "Master Point (Heaps 2)",
    "desc": "Sort scout status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 2 COMPLETE! You've mastered Heap Sort, Median streams, and Language libraries. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Worst-case complexity of Heap Sort?",
        "options": [
          "O(N log N)",
          "O(N^2)",
          "O(N)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Memory usage of in-place Heap Sort?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Sort Scout! In Stage 3, we dive into Advanced Heap structures: Binomial and Fibonacci! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 2",
            "value": "Sort Scout"
          },
          {
            "key": "Stage 3",
            "value": "Forest Falcon"
          },
          {
            "key": "Next",
            "value": "Heaps 3"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Sorted Secrets.",
        "codeSnippet": "2 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fly higher into the forest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ready for Advanced Heaps?",
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
        "questionText": "Final Extract?",
        "options": [
          "Sort!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Sort!"
      }
    ]
  }
];

module.exports = stage2;

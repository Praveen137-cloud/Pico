const stage9 = [
  {
    "order": 81,
    "title": "C++ STL Heaps",
    "desc": "The raw power of algorithm header.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"C++ Mastery! The STL provides a core set of functions in `<algorithm>` to turn any random-access container into a heap! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"`std::make_heap` builds it in O(N). `std::push_heap` Bubbles Up in O(log N). `std::pop_heap` Sinks Down in O(log N). 🦜\"",
        "codeSnippet": "#include <algorithm>\nstd::make_heap(v.begin(), v.end());\nv.push_back(10);\nstd::push_heap(v.begin(), v.end());"
      },
      {
        "type": "multiple_choice",
        "questionText": "By default, what type of heap does `std::make_heap` create?",
        "options": [
          "Max-Heap",
          "Min-Heap",
          "Balanced Heap"
        ],
        "correctAnswer": "Max-Heap"
      },
      {
        "type": "match_following",
        "questionText": "Match STL Actions!",
        "pairs": [
          {
            "key": "make_heap",
            "value": "Initial O(N) build"
          },
          {
            "key": "push_heap",
            "value": "Bubbles up last element"
          },
          {
            "key": "pop_heap",
            "value": "Swaps root to end & Sinks Down"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Function to actually remove the element after `pop_heap`.",
        "codeSnippet": "std::pop_heap(v.begin(), v.end());\nv. ___ ();",
        "correctAnswer": "pop_back"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"`std::pop_heap` only moves the largest element to the end. You MUST call `pop_back()` to actually remove it from the vector! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of `std::sort_heap`?",
        "options": [
          "O(N log N)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "STL header for heaps.",
        "codeSnippet": "#include < ___ >",
        "correctAnswer": "algorithm"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Low-level control! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did you make the heap?\"",
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
    "order": 82,
    "title": "std::priority_queue",
    "desc": "The container adapter.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Container Power! `std::priority_queue` is a wrapper that uses `std::make_heap` and its' friends internally. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It doesn't provide iterators. You can only see the TOP bird! 🦜\"",
        "codeSnippet": "std::priority_queue<int> pq;"
      },
      {
        "type": "multiple_choice",
        "questionText": "How to make a Min-Priority Queue in C++?",
        "options": [
          "std::priority_queue<int, vector<int>, greater<int>>",
          "std::priority_queue<int, vector<int>, less<int>>",
          "std::priority_queue<int, min_heap_tag>"
        ],
        "correctAnswer": "std::priority_queue<int, vector<int>, greater<int>>"
      },
      {
        "type": "match_following",
        "questionText": "Match C++ PQ methods!",
        "pairs": [
          {
            "key": "top()",
            "value": "Peek best"
          },
          {
            "key": "push(x)",
            "value": "Insert"
          },
          {
            "key": "pop()",
            "value": "Remove best"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Method to insert in-place.",
        "codeSnippet": "pq. ___ (10, \"Elite\");",
        "correctAnswer": "emplace"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Emplace is faster because it avoids creating a temporary object! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if you call `pop()` on an empty PQ?",
        "options": [
          "Undefined Behavior / Crash",
          "Nothing",
          "It returns 0"
        ],
        "correctAnswer": "Undefined Behavior / Crash"
      },
      {
        "type": "code_fill_in",
        "questionText": "Default comparison function.",
        "codeSnippet": "std:: ___ <T>",
        "correctAnswer": "less"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Safety first: check `empty()`! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it top-tier?\"",
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
    "order": 83,
    "title": "Python heapq Tips",
    "desc": "Squeezing bytes from snake nests.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Secret Snaps! Python's `heapq` is super fast because it's implemented in C. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Tip: To store objects, use a tuple: `(priority, data)`. Python sorts tuples element-by-element! 🦜\"",
        "codeSnippet": "heapq.heappush(heap, (5, 'Pico'))"
      },
      {
        "type": "multiple_choice",
        "questionText": "How does `heapq` handle ties in priorities (e.g. both are 5)?",
        "options": [
          "It compares the second element of the tuple",
          "It picks randomly",
          "It crashes"
        ],
        "correctAnswer": "It compares the second element of the tuple"
      },
      {
        "type": "match_following",
        "questionText": "Match Python Heapq Tricks!",
        "pairs": [
          {
            "key": "heapify(L)",
            "value": "Convert List to Heap O(N)"
          },
          {
            "key": "heappushpop",
            "value": "More efficient than Push + Pop"
          },
          {
            "key": "_heapify_max",
            "value": "Internal Max-Heap build"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Function to push and pop in one step.",
        "codeSnippet": "res = heapq. ___ (heap, val);",
        "correctAnswer": "heappushpop"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If you just want the K smallest elements, `heapq.nsmallest(K, L)` is faster than sorting! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does `heapq` maintain a stable order for equal elements?",
        "options": [
          "No",
          "Yes",
          "Only in elite mode"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Search K largest.",
        "codeSnippet": "heapq.n ___ (K, L)",
        "correctAnswer": "largest"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Scale the snake! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Found the smallest?\"",
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
    "order": 84,
    "title": "Java PriorityQueue Inside",
    "desc": "Growing the array.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Java Roots! `java.util.PriorityQueue` uses a standard dynamic array. When it gets full, it increases by 50% or 100%! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It is an UNBOUNDED queue. It will grow as much as your memory allows! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of `pq.add(x)` when it needs to resize?",
        "options": [
          "O(N) (Copying array)",
          "O(log N)",
          "O(1)"
        ],
        "correctAnswer": "O(N) (Copying array)"
      },
      {
        "type": "match_following",
        "questionText": "Match Java PQ traits!",
        "pairs": [
          {
            "key": "Initial Capacity",
            "value": "11 (Default)"
          },
          {
            "key": "Nulls",
            "value": "Throws NullPointerException"
          },
          {
            "key": "Remove(obj)",
            "value": "O(N) Search + Delete"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The interface implemented.",
        "codeSnippet": "class PriorityQueue ___ Queue { ... }",
        "correctAnswer": "extends"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use `peek()` to check the root without removing it. It returns `null` if the queue is empty! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Java's PriorityQueue thread-safe?",
        "options": [
          "No (Use PriorityBlockingQueue for threads!)",
          "Yes",
          "Only and always"
        ],
        "correctAnswer": "No (Use PriorityBlockingQueue for threads!)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Error on null add.",
        "codeSnippet": "NullPointer ___",
        "correctAnswer": "Exception"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Java Beans! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it full?\"",
        "options": [
          "IT GROWS!",
          "Yes.",
          "No."
        ],
        "correctAnswer": "IT GROWS!"
      }
    ]
  },
  {
    "order": 85,
    "title": "C# PriorityQueue (.NET 6+)",
    "desc": "The new bird on the block.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"New arrival! C# didn't have a standard PriorityQueue until .NET 6. Now it's here and it's fast! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It stores items and priorities separately for better performance. 🦜\"",
        "codeSnippet": "var pq = new PriorityQueue<string, int>();\npq.Enqueue(\"Elite\", 1);"
      },
      {
        "type": "multiple_choice",
        "questionText": "What arguments does `Enqueue` take in C#?",
        "options": [
          "(Element, Priority)",
          "(Priority, Element)",
          "(Element only)"
        ],
        "correctAnswer": "(Element, Priority)"
      },
      {
        "type": "match_following",
        "questionText": "Match C# methods!",
        "pairs": [
          {
            "key": "Enqueue",
            "value": "Insert"
          },
          {
            "key": "Dequeue",
            "value": "Extract root"
          },
          {
            "key": "Peek",
            "value": "View root"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The namespace used.",
        "codeSnippet": "using System.Collections. ___ ;",
        "correctAnswer": "Generic"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You can provide a `Comparer` in the constructor to change the order from Min to Max! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you iterate through the C# PriorityQueue in sorted order?",
        "options": [
          "No (Unordered iteration)",
          "Yes",
          "Sometimes"
        ],
        "correctAnswer": "No (Unordered iteration)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Method to add.",
        "codeSnippet": "E ___",
        "correctAnswer": "nqueue"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sharp and ready! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Ready to dequeue?\"",
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
    "order": 86,
    "title": "Malloc Bins & Heaps",
    "desc": "The memory allocator secret.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"System Depths! When you call `malloc` or `new`, the memory allocator must find a free block. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Many allocators (like dlmalloc) use Heaps or Treaps to organize free blocks by their size! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use a heap for free memory blocks?",
        "options": [
          "To quickly find the 'Best Fit' (closest size)",
          "To sort memory",
          "For encryption"
        ],
        "correctAnswer": "To quickly find the 'Best Fit' (closest size)"
      },
      {
        "type": "match_following",
        "questionText": "Match Allocator Terms!",
        "pairs": [
          {
            "key": "Best Fit",
            "value": "Find smallest block >= size"
          },
          {
            "key": "Worst Fit",
            "value": "Pick largest block"
          },
          {
            "key": "Fragmentation",
            "value": "Waste between birds"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The search operation in a block-heap.",
        "codeSnippet": "block = pq. ___ (requestSize);",
        "correctAnswer": "findMin"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Allocators must be EXTREMELY fast, so they often use bit-maps on top of heaps! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens when you `free(ptr)`?",
        "options": [
          "The block is inserted back into the free-heap / bin",
          "It disappears",
          "It's zeroed out"
        ],
        "correctAnswer": "The block is inserted back into the free-heap / bin"
      },
      {
        "type": "code_fill_in",
        "questionText": "Allocator name.",
        "codeSnippet": "m ___",
        "correctAnswer": "alloc"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The hidden nest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the memory free?\"",
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
    "order": 87,
    "title": "Heap Profiling",
    "desc": "Watching the birds work.",
    "lessons": [
      {
        "type": "teaching",
                "questionText": "🦜 Pico: \"Observability! How do you know if your heap is the bottleneck? Profiling! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Count the number of swaps and comparisons. If your heap is height H, each operation should be roughly H. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What tool helps you visualize memory layout (including the heap)?",
        "options": [
          "Debugger / Profiler (e.g. Valgrind, Instruments)",
          "Compiler",
          "Text editor"
        ],
        "correctAnswer": "Debugger / Profiler (e.g. Valgrind, Instruments)"
      },
      {
        "type": "match_following",
        "questionText": "Match Profile Stats!",
        "pairs": [
          {
            "key": "Throughput",
            "value": "Ops per second"
          },
          {
            "key": "Latency",
            "value": "Time per extract"
          },
          {
            "key": "Fragmentation",
            "value": "Memory overhead"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Standard term for a memory visualizer.",
        "codeSnippet": "tool = \"___\" ;",
        "correctAnswer": "Profiler"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sudden spikes in heap time might mean your array is resizing! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How to avoid resize spikes in Java/C++?",
        "options": [
          "Initialize with a large enough capacity",
          "Buy more RAM",
          "Use a different OS"
        ],
        "correctAnswer": "Initialize with a large enough capacity"
      },
      {
        "type": "code_fill_in",
        "questionText": "Profiling action.",
        "codeSnippet": "B ___ detection",
        "correctAnswer": "ottleneck"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Measure what matters! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did you profile?\"",
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
    "order": 88,
    "title": "Binary vs Binomial inside",
    "desc": "Library choice logic.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Why is `std::priority_queue` Binary and not Binomial? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Memory Layout! Binary Heaps are packed in an array - great cache locality. Binomial Heaps need pointers and multiple tree-headers. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which heap is more 'Compact' (less byte overhead)?",
        "options": [
          "Binary Heap (Array)",
          "Binomial Heap (Trees)",
          "0"
        ],
        "correctAnswer": "Binary Heap (Array)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Overhead!",
        "pairs": [
          {
            "key": "Array Heap",
            "value": "0 pointers / node"
          },
          {
            "key": "Pointer Heap",
            "value": "2-3 pointers / node"
          },
          {
            "key": "Performance",
            "value": "Cache wins for smaller N"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Pointer size in modern systems.",
        "codeSnippet": "size = ___ bytes;",
        "correctAnswer": "8"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For most apps, the O(N) merge vs O(log N) merge doesn't matter as much as the cache speed for regular Extract-Min! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "When should you switch to a Mergable (Binomial) library?",
        "options": [
          "Only when you NEED O(log N) merge (e.g. joining 2 huge queues)",
          "Always",
          "Never"
        ],
        "correctAnswer": "Only when you NEED O(log N) merge (e.g. joining 2 huge queues)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Memory layout type.",
        "codeSnippet": "C ___ Locality",
        "correctAnswer": "ache"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Hardware is physical! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Cache is king?\"",
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
    "order": 89,
    "title": "Concurrent Heaps",
    "desc": "Shared nests for many birds.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Thread Storm! If multiple threads access one heap, you need LOCKS. But locks create bottlenecks! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Concurrent Heaps often use 'Fine-grained Locking' (locking individual nodes) or 'Lock-free' skip-lists to maintain priority. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Problem with a single GIL (Global Interpreter Lock) for heaps?",
        "options": [
          "Only one bird can search/update at a time",
          "Memory corruption",
          "None"
        ],
        "correctAnswer": "Only one bird can search/update at a time"
      },
      {
        "type": "match_following",
        "questionText": "Match Thread Logic!",
        "pairs": [
          {
            "key": "Mutex",
            "value": "Full block"
          },
          {
            "key": "CAS",
            "value": "Compare-and-Swap (Lock-free)"
          },
          {
            "key": "BlockingQueue",
            "value": "Java thread-safe PQ"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Atomic operation used in lock-free heaps.",
        "codeSnippet": "atom. ___ (expected, newVal);",
        "correctAnswer": "compareExchange"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Randomized heaps (Treaps) are much easier to make lock-free than strict binary heaps! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use localized locks on nodes?",
        "options": [
          "To allow other threads to work on different parts of the heap",
          "To make it slower",
          "It's easier"
        ],
        "correctAnswer": "To allow other threads to work on different parts of the heap"
      },
      {
        "type": "code_fill_in",
        "questionText": "Thread safety type.",
        "codeSnippet": "C ___ -Safe",
        "correctAnswer": "oncurrent"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Birds in parallel! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can you lock?\"",
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
    "order": 90,
    "title": "Master Point (Heaps 9)",
    "desc": "Library lynx status confirmed.",
    "lessons": [
      {
        "type": "teaching",
                "questionText": "🦜 Pico: \"STAGE 9 COMPLETE! You've mastered C++ STL, Python tuples, Java dynamic growth, and the secrets of malloc bins. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By default, C++ `std::priority_queue` is a...?",
        "options": [
          "Max-Heap",
          "Min-Heap",
          "Fibonacci Heap"
        ],
        "correctAnswer": "Max-Heap"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which operation is needed in C++ after `std::pop_heap` to actually remove the element?",
        "options": [
          "v.pop_back()",
          "v.remove()",
          "v.empty()"
        ],
        "correctAnswer": "v.pop_back()"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Library Lynx! In the FINAL Stage 10, we build our own Advanced Heap Project and conquer the Titan certification! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 9",
            "value": "Library Lynx"
          },
          {
            "key": "Stage 10",
            "value": "Heap Hierophant"
          },
          {
            "key": "Next",
            "value": "Heaps 10"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Library Points.",
        "codeSnippet": "9 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Conquer the code! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ready for the Final Challenge?",
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
        "questionText": "Final Emplace?",
        "options": [
          "Yes!",
          "No.",
          "0"
        ],
        "correctAnswer": "Yes!"
      }
    ]
  }
];

module.exports = stage9;

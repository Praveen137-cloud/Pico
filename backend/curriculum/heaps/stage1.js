const stage1 = [
  {
    "order": 1,
    "title": "The Royal Heap",
    "desc": "Introduction to Heaps and Priority.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Triage! A Heap is a special Tree-based data structure where the most important bird always sits at the top! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Think of it as a vertical queue. It's a Complete Binary Tree, meaning every level is full except possibly the last, which is filled from left to right! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "A Heap is based on which underlying data structure?",
        "options": [
          "Complete Binary Tree",
          "Linked List",
          "Stack"
        ],
        "correctAnswer": "Complete Binary Tree"
      },
      {
        "type": "match_following",
        "questionText": "Match Heap basics!",
        "pairs": [
          {
            "key": "Complete Tree",
            "value": "Structure rule"
          },
          {
            "key": "Top node",
            "value": "Highest priority"
          },
          {
            "key": "Left-to-Right",
            "value": "Filling rule"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "A heap must be a ___ binary tree.",
        "codeSnippet": "Structure = ___ ;",
        "correctAnswer": "complete"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Complexity: Finding the top element is O(1). This is why Heaps are the gods of priority! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a Heap be used as a Queue?",
        "options": [
          "Yes (Priority Queue)",
          "No",
          "Only for birds"
        ],
        "correctAnswer": "Yes (Priority Queue)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Root index (usually).",
        "codeSnippet": "int root = index ___ ;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Priority first! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Who is at the top?\"",
        "options": [
          "The most important!",
          "No.",
          "0"
        ],
        "correctAnswer": "The most important!"
      }
    ]
  },
  {
    "order": 2,
    "title": "The Max-Heap Rule",
    "desc": "Understanding the Max-Heap property.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Strongest First! In a Max-Heap, every parent bird must be GREATER than or equal to its children. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"This means the absolute largest value in the entire forest is guaranteed to be at the root (index 0)! 🦜\"",
        "codeSnippet": "parent >= left_child\nparent >= right_child"
      },
      {
        "type": "multiple_choice",
        "questionText": "In a Max-Heap, where is the maximum value?",
        "options": [
          "At the root",
          "At the leaves",
          "In the middle"
        ],
        "correctAnswer": "At the root"
      },
      {
        "type": "match_following",
        "questionText": "Match Max-Heap logic!",
        "pairs": [
          {
            "key": "Root",
            "value": "Global maximum"
          },
          {
            "key": "Parent",
            "value": ">= Child"
          },
          {
            "key": "Property",
            "value": "Max-Heap"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Max-Heap condition for node `i`.",
        "codeSnippet": "heap[i] ___ childrenValues;",
        "correctAnswer": ">="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Complexity: O(1) to find Max. O(log N) to maintain the property after changes. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is [10, 8, 9, 2, 3] a Max-Heap?",
        "options": [
          "Yes",
          "No (8 < 2?)",
          "No (9 < 3?)"
        ],
        "correctAnswer": "Yes",
        "explanation": "10 > 8,9. 8 > 2,3."
      },
      {
        "type": "code_fill_in",
        "questionText": "Parent of index i.",
        "codeSnippet": "parentIndex = (i - 1) ___ 2;",
        "correctAnswer": "/"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Ascending power! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the biggest bird on top?\"",
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
    "title": "The Min-Heap Rule",
    "desc": "Understanding the Min-Heap property.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Lightest First! In a Min-Heap, every parent bird must be SMALLER than or equal to its children. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"This puts the absolute smallest value at the root. Perfect for finding the closest bird or the cheapest seed! 🦜\"",
        "codeSnippet": "parent <= left_child\nparent <= right_child"
      },
      {
        "type": "multiple_choice",
        "questionText": "In a Min-Heap, where is the minimum value?",
        "options": [
          "At the root",
          "At the bottom",
          "Random"
        ],
        "correctAnswer": "At the root"
      },
      {
        "type": "match_following",
        "questionText": "Match Min-Heap logic!",
        "pairs": [
          {
            "key": "Root",
            "value": "Global minimum"
          },
          {
            "key": "Parent",
            "value": "<= Child"
          },
          {
            "key": "Property",
            "value": "Min-Heap"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Min-Heap condition for node `i`.",
        "codeSnippet": "heap[i] ___ childrenValues;",
        "correctAnswer": "<="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(1) to find Min. Just like Max-Heaps, it is efficient and orderly! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is [1, 5, 3, 10, 8] a Min-Heap?",
        "options": [
          "Yes (1 < 5,3. 5 < 10,8)",
          "No",
          "0"
        ],
        "correctAnswer": "Yes (1 < 5,3. 5 < 10,8)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Left child of index i.",
        "codeSnippet": "leftChild = 2 * i ___ 1;",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Descending order! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the smallest bird on top?\"",
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
    "order": 4,
    "title": "Array Mapping",
    "desc": "Representing a complete binary tree in an array.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"No pointers needed! Because the tree is complete, we can map it to a simple array without wasting space! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"For node at index `i`: Left Child is `2*i + 1`, Right Child is `2*i + 2`, and Parent is `(i-1)/2`! 🦜\"",
        "codeSnippet": "left(i) = 2i + 1\nright(i) = 2i + 2\nparent(i) = (i-1)/2"
      },
      {
        "type": "multiple_choice",
        "questionText": "Index of the right child of node at index 3?",
        "options": [
          "8",
          "7",
          "6"
        ],
        "correctAnswer": "8",
        "explanation": "2*3 + 2 = 8"
      },
      {
        "type": "match_following",
        "questionText": "Match Array math!",
        "pairs": [
          {
            "key": "2i + 1",
            "value": "Left wing"
          },
          {
            "key": "2i + 2",
            "value": "Right wing"
          },
          {
            "key": "(i-1)/2",
            "value": "The parent source"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The formula for finding the parent of index `idx`.",
        "codeSnippet": "parentIdx = (idx - 1) ___ 2;",
        "correctAnswer": "/"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Fast and cache-friendly! No overhead for objects, just pure index math. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the parent of node at index 0?",
        "options": [
          "Doesn't exist (returns 0)",
          "1",
          "-1"
        ],
        "correctAnswer": "Doesn't exist (returns 0)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Find left child.",
        "codeSnippet": "int L = ___ * i + 1;",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Mapped excellence! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Can you navigate the array?\"",
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
    "title": "The Upward Climb (Insert)",
    "desc": "Inserting an element into a Heap (Up-Heapify).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Joining the Rank! To add a bird, put it at the very bottom (end of array) then let it climb until it finds its proper rank! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Up-Heapify (Percolate Up): Compare the new bird with its parent. If it violates the heap rule, SWAP and repeat! 🦜\"",
        "codeSnippet": "void upHeap(i) {\n  while(i > 0 && heap[parent(i)] < heap[i]) {\n    swap(heap[i], heap[parent(i)]);\n    i = parent(i);\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of inserting into a Heap of N elements?",
        "options": [
          "O(log N)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Insertion steps!",
        "pairs": [
          {
            "key": "Add to end",
            "value": "Maintain complete tree"
          },
          {
            "key": "Compare parent",
            "value": "Check property"
          },
          {
            "key": "Swap",
            "value": "Ascend to rank"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Direction of movement for a newly inserted element.",
        "codeSnippet": "Movement = ___ ;",
        "correctAnswer": "upwards"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(log N) because the tree is balanced and the maximum height is logarithmic! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if the new bird is smaller than its parent in a Max-Heap?",
        "options": [
          "It stays where it is",
          "It disappears",
          "It swaps anyway"
        ],
        "correctAnswer": "It stays where it is"
      },
      {
        "type": "code_fill_in",
        "questionText": "Swap with parent.",
        "codeSnippet": "swap(heap[i], heap[___]);",
        "correctAnswer": "(i-1)/2"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Rising to power! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did I reach the top?\"",
        "options": [
          "If I am the best!",
          "No.",
          "0"
        ],
        "correctAnswer": "If I am the best!"
      }
    ]
  },
  {
    "order": 6,
    "title": "The Downward Fall (Delete)",
    "desc": "Deleting the root element from a Heap (Down-Heapify).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Sovereign Exit! To remove the leader bird, copy the LAST bird in the forest to the root, remove the last bird, then let the new leader fall to its proper rank! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Down-Heapify (Sink): Compare the root with its children. Swap with the LARGER child (for Max-Heap) until the property is restored! 🦜\"",
        "codeSnippet": "void sink(i) {\n  largest = i;\n  if(L < n && heap[L] > heap[largest]) largest = L;\n  if(R < n && heap[R] > heap[largest]) largest = R;\n  if(largest != i) { swap(i, largest); sink(largest); }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of deleting the root from a Heap?",
        "options": [
          "O(log N)",
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Deletion steps!",
        "pairs": [
          {
            "key": "Swap root with last",
            "value": "Ready to remove"
          },
          {
            "key": "Pop last",
            "value": "Leader is gone"
          },
          {
            "key": "Sink the root",
            "value": "Restore property"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "In a Max-Heap Sink, which child do you swap with?",
        "codeSnippet": "Swap with the ___ child.",
        "correctAnswer": "larger"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(log N). Always swap with the larger child in a Max-Heap to ensure the new parent is greater than BOTH children! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why not swap with the smaller child in a Max-Heap?",
        "options": [
          "The smaller child might still be smaller than the other child",
          "It is forbidden",
          "Pico rule"
        ],
        "correctAnswer": "The smaller child might still be smaller than the other child"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check right child.",
        "codeSnippet": "if (R < n && heap[R] > heap[___]) largest = R;",
        "correctAnswer": "largest"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Falling to balance! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the order restored?\"",
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
    "title": "Peek and Stats",
    "desc": "Retrieving the top element and checking heap size.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Quick Glance! Checking who the leader is takes almost zero energy. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Peek: Returns `heap[0]`. O(1). Size: Returns the current number of birds in the array. O(1). 🦜\"",
        "codeSnippet": "int getMax() { return heap[0]; }\nint size() { return heap.size(); }"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of finding the maximum in a Max-Heap?",
        "options": [
          "O(1)",
          "O(log N)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Stats!",
        "pairs": [
          {
            "key": "getMax()",
            "value": "Peek at root"
          },
          {
            "key": "size()",
            "value": "Population count"
          },
          {
            "key": "pop()",
            "value": "Extraction"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Element returned by `heap[0]` in a Min-Heap.",
        "codeSnippet": "Result = ___ value;",
        "correctAnswer": "minimum"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Finding the champion is instant. Replacing them is the hard part! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If the heap is empty, what should peek return?",
        "options": [
          "Error or sentinel",
          "0",
          "1"
        ],
        "correctAnswer": "Error or sentinel"
      },
      {
        "type": "code_fill_in",
        "questionText": "Access root.",
        "codeSnippet": "return ___[0];",
        "correctAnswer": "heap"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Instant vision! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the leader visible?\"",
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
    "title": "The Logarithmic Canopy",
    "desc": "Understanding Heap Height.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Balanced Forest! Because every level must be full, the height of a heap is always the shortest possible for N nodes. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Height = `floor(log2(N))`. This means even with 1 MILLION birds, the height is only 19! 🦜\"",
        "codeSnippet": "Height = floor(log2(N))"
      },
      {
        "type": "multiple_choice",
        "questionText": "Height of a heap with 7 nodes?",
        "options": [
          "2",
          "3",
          "7"
        ],
        "correctAnswer": "2",
        "explanation": "log2(7) is approx 2.8. floor is 2. (0: root, 1: children, 2: leaves)"
      },
      {
        "type": "match_following",
        "questionText": "Match Height logic!",
        "pairs": [
          {
            "key": "N = 15",
            "value": "Height 3"
          },
          {
            "key": "N = 31",
            "value": "Height 4"
          },
          {
            "key": "Property",
            "value": "Perfect balance"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Max height of a heap with N nodes.",
        "codeSnippet": "Max Height = O( ___ );",
        "correctAnswer": "log N"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"The logarithmic height is what makes insertions and deletions so incredibly fast! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does heap height change during extraction?",
        "options": [
          "Yes (might decrease)",
          "No",
          "0"
        ],
        "correctAnswer": "Yes (might decrease)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Log base for height.",
        "codeSnippet": "h = floor(log ___ (N));",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Short and powerful! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the tree tall?\"",
        "options": [
          "Short elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "Short elite!"
      }
    ]
  },
  {
    "order": 9,
    "title": "The Priority Queue",
    "desc": "Priority Queue as an abstract data type.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Abstract Bird! A Priority Queue is an idea (ADT) where items are extracted by priority. A HEAP is the best way to implement it! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"In most languages, `PriorityQueue` is a Min-Heap or Max-Heap under the hood. 🦜\"",
        "codeSnippet": "pq.push(x);\npq.top();\npq.pop();"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the relationship between Heap and Priority Queue?",
        "options": [
          "Heap is an implementation of Priority Queue",
          "They are the same",
          "0"
        ],
        "correctAnswer": "Heap is an implementation of Priority Queue"
      },
      {
        "type": "match_following",
        "questionText": "Match Priority tools!",
        "pairs": [
          {
            "key": "Push",
            "value": "Insertion"
          },
          {
            "key": "Pop",
            "value": "Extraction of top"
          },
          {
            "key": "Priority",
            "value": "Ranking criteria"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Operation to remove the most important bird.",
        "codeSnippet": "pq. ___ ();",
        "correctAnswer": "pop"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use Max-PQ for scores and Min-PQ for times. The forest is all about priorities! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Default Priority Queue in C++ is?",
        "options": [
          "Max-Heap",
          "Min-Heap",
          "Random"
        ],
        "correctAnswer": "Max-Heap"
      },
      {
        "type": "code_fill_in",
        "questionText": "Push element.",
        "codeSnippet": "pq. ___ (val);",
        "correctAnswer": "push"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Organized flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Do you have priorities?\"",
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
    "title": "Stage 1 Graduation",
    "desc": "Heap Foundation Complete.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"STAGE 1 COMPLETE! You have decoded the Royal structure of Heaps! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Max, Min, Array Maps, and the Upward/Downward flows of balance. You are a priority master! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Max-Heap property?",
        "options": [
          "Parent >= Children",
          "Parent <= Children"
        ],
        "correctAnswer": "Parent >= Children"
      },
      {
        "type": "multiple_choice",
        "questionText": "Left child formula?",
        "options": [
          "2i + 1",
          "2i + 2"
        ],
        "correctAnswer": "2i + 1"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to find max?",
        "options": [
          "O(1)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Insertion complexity?",
        "options": [
          "O(log N)",
          "O(1)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Relationship between Heap/PQ?",
        "options": [
          "Heap implements PQ",
          "PQ implements Heap"
        ],
        "correctAnswer": "Heap implements PQ"
      },
      {
        "type": "match_following",
        "questionText": "Final Foundation Match!",
        "pairs": [
          {
            "key": "Heap",
            "value": "Ordered!"
          },
          {
            "key": "Priority",
            "value": "Sorted!"
          },
          {
            "key": "Pico",
            "value": "Salutes!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Next, we face the Intermediate Stage: Heapify, Heap-Sort, and the Medians of the Forest! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Are you ready to sort the world?\"",
        "options": [
          "BEYOND AND UP!",
          "Wait...",
          "0"
        ],
        "correctAnswer": "BEYOND AND UP!"
      }
    ]
  },
  {
    "order": 11,
    "title": "Instant Forest (Build-Heap)",
    "desc": "Converting an arbitrary array into a Heap efficiently.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Efficiency Alert! To turn a random group of birds into a Heap, we don't have to insert them one by one. There is a faster way! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Build-Heap: Start from the last non-leaf node and work your way up to the root, calling Heapify at each step. Complexity: O(N)! 🦜\"",
        "codeSnippet": "for(i = n/2 - 1; i >= 0; i--) heapify(i);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of the optimal Build-Heap algorithm?",
        "options": [
          "O(N)",
          "O(N log N)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Build-Heap pieces!",
        "pairs": [
          {
            "key": "n/2 - 1",
            "value": "Start node (last internal)"
          },
          {
            "key": "0",
            "value": "End node (root)"
          },
          {
            "key": "Bottom-Up",
            "value": "Direction"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "We call ___ on each internal node in reverse order.",
        "codeSnippet": "for(...) { ___ (i); }",
        "correctAnswer": "heapify"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Why O(N)? Because most nodes are near the bottom and only travel a short distance, while fewer nodes need long travels! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does inserting one-by-one also take O(N)?",
        "options": [
          "No (It takes O(N log N))",
          "Yes",
          "Pico rule"
        ],
        "correctAnswer": "No (It takes O(N log N))"
      },
      {
        "type": "code_fill_in",
        "questionText": "Loop starting point.",
        "codeSnippet": "for(int i = n/2 ___ 1; i >= 0; i--)",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Instant order! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the forest ready?\"",
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
    "title": "The Min-Fixer (Min-Heapify)",
    "desc": "Deep dive into the Min-Heapify operation.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Refining the Scale! If a bird at index `i` is too heavy (violates Min-Property), it must sink until it finds lighter balance. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Compare node `i` with its left and right children. Swap with the SMALLEST child and recurse down! 🦜\"",
        "codeSnippet": "void minHeapify(i) {\n  smallest = i;\n  if(L < n && heap[L] < heap[smallest]) smallest = L;\n  if(R < n && heap[R] < heap[smallest]) smallest = R;\n  if(smallest != i) { swap(i, smallest); minHeapify(smallest); }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "In Min-Heapify, which child do you swap with?",
        "options": [
          "The smallest child",
          "The largest child",
          "The left child only"
        ],
        "correctAnswer": "The smallest child"
      },
      {
        "type": "match_following",
        "questionText": "Match Min-Fixer tools!",
        "pairs": [
          {
            "key": "smallest = i",
            "value": "Initial assumption"
          },
          {
            "key": "heap[L] < heap[smallest]",
            "value": "Found better parent"
          },
          {
            "key": "Recursion",
            "value": "Fix entire path"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Target index for the next recursive call if swap happens.",
        "codeSnippet": "minHeapify( ___ );",
        "correctAnswer": "smallest"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"This ensures the minimum value bubbles UP correctly while keeping the rest of the forest in check! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of a single Heapify call?",
        "options": [
          "O(log N)",
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case condition.",
        "codeSnippet": "if (smallest ___ i) return;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Precise balance! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the min-heap fixed?\"",
        "options": [
          "Perfectly light!",
          "No.",
          "0"
        ],
        "correctAnswer": "Perfectly light!"
      }
    ]
  },
  {
    "order": 13,
    "title": "The Max-Fixer (Max-Heapify)",
    "desc": "Deep dive into the Max-Heapify operation.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Refining the Crown! For a Max-Heap, if a small bird is at the root, it must sink until its larger children take over! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Compare node `i` with its children. Swap with the LARGEST child and recurse down! 🦜\"",
        "codeSnippet": "void maxHeapify(i) {\n  largest = i;\n  if(L < n && heap[L] > heap[largest]) largest = L;\n  if(R < n && heap[R] > heap[largest]) largest = R;\n  if(largest != i) { swap(i, largest); maxHeapify(largest); }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "In Max-Heapify, which child do you swap with?",
        "options": [
          "The largest child",
          "The smallest",
          "Right child"
        ],
        "correctAnswer": "The largest child"
      },
      {
        "type": "match_following",
        "questionText": "Match Max-Fixer tools!",
        "pairs": [
          {
            "key": "largest = i",
            "value": "Initial assumption"
          },
          {
            "key": "heap[L] > heap[largest]",
            "value": "Found better leader"
          },
          {
            "key": "Recursion",
            "value": "Sinking the bird"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition for the right child to take over.",
        "codeSnippet": "if (R < n && heap[R] ___ heap[largest])",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(log N). This maintain the structural integrity of the elite canopy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Max-Heapify ensures that the parent of node `i` is?",
        "options": [
          ">= node i",
          "<= node i",
          "Equal to node i"
        ],
        "correctAnswer": ">= node i"
      },
      {
        "type": "code_fill_in",
        "questionText": "Swap logic.",
        "codeSnippet": "if(largest != i) ___ (heap[i], heap[largest]);",
        "correctAnswer": "swap"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Elite hierarchy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the max-heap fixed?\"",
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
    "title": "The Sort Prep (Heap-Sort I)",
    "desc": "Phase 1 of Heap-Sort: Building the Heap.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Sorting the Forest! To sort an array, first turn it into a Max-Heap to prepare its strongest birds for the count! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Phase 1: Perform Build-Heap (O(N)). Now, our largest values are ready at the root! 🦜\"",
        "codeSnippet": "for(i = n/2-1; i>=0; i--) maxHeapify(i);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which type of heap is used for sorting in Ascending order?",
        "options": [
          "Max-Heap",
          "Min-Heap",
          "Binary Tree"
        ],
        "correctAnswer": "Max-Heap"
      },
      {
        "type": "match_following",
        "questionText": "Match Sorting logic!",
        "pairs": [
          {
            "key": "Phase 1",
            "value": "Build Max-Heap"
          },
          {
            "key": "Phase 2",
            "value": "Swap and Shrink"
          },
          {
            "key": "Result",
            "value": "Sorted Array"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Build-Heap complexity in Phase 1.",
        "codeSnippet": "Complexity = O( ___ );",
        "correctAnswer": "N"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"By the end of Phase 1, the root is definitely the largest. But the rest isn't sorted yet! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "After Phase 1, is the entire array sorted?",
        "options": [
          "No",
          "Yes",
          "Pico rule"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Begin build loop.",
        "codeSnippet": "for(int i = ___ / 2 - 1; i >= 0; i--)",
        "correctAnswer": "n"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Ready for harvest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the heap built?\"",
        "options": [
          "Maximum extraction ready!",
          "No.",
          "0"
        ],
        "correctAnswer": "Maximum extraction ready!"
      }
    ]
  },
  {
    "order": 15,
    "title": "The Great Extraction (Heap-Sort II)",
    "desc": "Phase 2 of Heap-Sort: Swapping and Sinking.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Harvest! One by one, swap the largest bird (root) with the last bird in the forest, then shrink the forest and sink the root! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Phase 2: For each bird, swap `heap[0]` with `heap[i]`, then call `maxHeapify(0)` on a smaller size. O(N log N)! 🦜\"",
        "codeSnippet": "for(i = n-1; i > 0; i--) {\n  swap(heap[0], heap[i]);\n  maxHeapify(heap, i, 0);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total time complexity of Heap-Sort?",
        "options": [
          "O(N log N)",
          "O(N^2)",
          "O(N)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Extraction steps!",
        "pairs": [
          {
            "key": "Swap",
            "value": "Move Max to end"
          },
          {
            "key": "i--",
            "value": "Shrink boundaries"
          },
          {
            "key": "Heapify(0, i)",
            "value": "Restore structure"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The sorted part of the array grows from the ___ to the ___ during Heap-Sort.",
        "codeSnippet": "Direction = ___ to ___ ;",
        "correctAnswer": "back to front"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(N log N) is guaranteed. It is an In-Place sort with O(1) extra space! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Extra space used by Heap-Sort?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Correct the heap size for heapify.",
        "codeSnippet": "maxHeapify(array, ___, 0);",
        "correctAnswer": "i"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Sorted flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the array sorted?\"",
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
    "title": "Ranking Update",
    "desc": "Changing the priority of an existing node in a Heap.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Promotion or Demotion! What if a bird becomes more important? We must update its location! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Change Key: Update the value at index `i`. If new value is larger, call Up-Heapify. If smaller, call Down-Heapify! 🦜\"",
        "codeSnippet": "void update(i, val) {\n  if(val > heap[i]) { heap[i] = val; upHeap(i); }\n  else { heap[i] = val; sink(i); }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of updating a priority in a Heap?",
        "options": [
          "O(log N)",
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Update logic!",
        "pairs": [
          {
            "key": "Increase Val",
            "value": "Percolate Up"
          },
          {
            "key": "Decrease Val",
            "value": "Sink Down"
          },
          {
            "key": "O(log N)",
            "value": "Complexity"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Function used if the priority is INCREASED in a Max-Heap.",
        "codeSnippet": "If (priorityIncreased) ___ (i);",
        "correctAnswer": "upHeap"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"This is the backbone of Dijkstra’s Algorithm (Decrease-Key). Keeping ranks current is vital! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In a Min-Heap, if a value decreases, do we Up-Heap or Sink?",
        "options": [
          "Up-Heap (bubbles to top)",
          "Sink",
          "0"
        ],
        "correctAnswer": "Up-Heap (bubbles to top)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Set new value.",
        "codeSnippet": "heap[i] ___ newVal;",
        "correctAnswer": "="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Dynamic ranks! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the rank updated?\"",
        "options": [
          "Modern priority!",
          "No.",
          "0"
        ],
        "correctAnswer": "Modern priority!"
      }
    ]
  },
  {
    "order": 17,
    "title": "The Deep Delete",
    "desc": "Deleting an arbitrary node from a Heap.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Expulsion! To remove a specific bird (not just the root), we swap it with the last bird and restore order! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"1. Update its value to INFINITY (for Max-Heap). 2. Up-Heapify to the root. 3. Call `pop()`! Or just swap with last and check both directions. 🦜\"",
        "codeSnippet": "void deleteAny(i) {\n  swap(heap[i], heap.back());\n  heap.pop_back();\n  // Check if we need to sink or float!\n  sink(i); upHeap(i);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of deleting a node at index `i`?",
        "options": [
          "O(log N)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Deletion tools!",
        "pairs": [
          {
            "key": "Swap with last",
            "value": "Safe removal"
          },
          {
            "key": "pop_back()",
            "value": "Erase node"
          },
          {
            "key": "sink/upHeap",
            "value": "Fix balance"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Shortcut: Decrease to -inf then ___ for Min-Heap.",
        "codeSnippet": "pq. ___ ();",
        "correctAnswer": "pop"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"It is slightly more complex than root deletion because you might need to move the replacement node UP or DOWN! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can we delete from an empty heap?",
        "options": [
          "No (Underflow)",
          "Yes",
          "0"
        ],
        "correctAnswer": "No (Underflow)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Erase last.",
        "codeSnippet": "heap. ___ ();",
        "correctAnswer": "pop_back"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Clean forest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the node gone?\"",
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
    "title": "The K-th King (Largest)",
    "desc": "Finding the K-th largest element using a Heap.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Top K Rankings! How to find the 3rd or 10th largest bird in a massive flock? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use a Min-Heap of size K! Keep the K largest birds we've seen so far. If a new bird is larger than the root (the smallest of the top K), swap them! 🦜\"",
        "codeSnippet": "for(x : array) {\n  pq.push(x);\n  if(pq.size() > k) pq.pop();\n}\nreturn pq.top();"
      },
      {
        "type": "multiple_choice",
        "questionText": "To find K-th LARGEST, what type of heap of size K do you use?",
        "options": [
          "Min-Heap",
          "Max-Heap",
          "B-Tree"
        ],
        "correctAnswer": "Min-Heap"
      },
      {
        "type": "match_following",
        "questionText": "Match Top-K logic!",
        "pairs": [
          {
            "key": "Min-Heap size K",
            "value": "Store largest K"
          },
          {
            "key": "Root",
            "value": "The K-th largest"
          },
          {
            "key": "O(N log K)",
            "value": "Complexity"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complexity of finding K-th largest in array N.",
        "codeSnippet": "Complexity = O(N log ___ );",
        "correctAnswer": "K"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(N log K) is much faster than sorting O(N log N) if K is small! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result if pq.top() returns 10 in a size-3 min-heap?",
        "options": [
          "10 is the 3rd largest",
          "10 is the maximum",
          "0"
        ],
        "correctAnswer": "10 is the 3rd largest"
      },
      {
        "type": "code_fill_in",
        "questionText": "Maintain size.",
        "codeSnippet": "if (pq.size() ___ k) pq.pop();",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Elite selection! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did I find the king?\"",
        "options": [
          "The K-th elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "The K-th elite!"
      }
    ]
  },
  {
    "order": 19,
    "title": "The K-th Scale (Smallest)",
    "desc": "Finding the K-th smallest element using a Heap.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Small K! How to find the 5th smallest berry in the forest? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use a Max-Heap of size K! Keep the K smallest items. If a new item is SMALLER than the root (the largest of the bottom K), swap them! 🦜\"",
        "codeSnippet": "for(x : array) {\n  pq.push(x);\n  if(pq.size() > k) pq.pop();\n}\nreturn pq.top();"
      },
      {
        "type": "multiple_choice",
        "questionText": "To find K-th SMALLEST, which heap of size K do you use?",
        "options": [
          "Max-Heap",
          "Min-Heap",
          "0"
        ],
        "correctAnswer": "Max-Heap"
      },
      {
        "type": "match_following",
        "questionText": "Match Bottom-K logic!",
        "pairs": [
          {
            "key": "Max-Heap size K",
            "value": "Store smallest K"
          },
          {
            "key": "Root",
            "value": "The K-th smallest"
          },
          {
            "key": "Size check",
            "value": "Maintain K limit"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Root of the max-heap size K is the ___ largest of the K smallest.",
        "codeSnippet": "Role = ___ smallest bird;",
        "correctAnswer": "K-th"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Complexity: O(N log K). Perfect for filtering the bottom of the rankings! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is this faster than full sort?",
        "options": [
          "Yes (O(N log K) < O(N log N))",
          "No",
          "0"
        ],
        "correctAnswer": "Yes (O(N log K) < O(N log N))"
      },
      {
        "type": "code_fill_in",
        "questionText": "Heap type.",
        "codeSnippet": "priority_queue<int> max_pq; // for ___ smallest",
        "correctAnswer": "K-th"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Miniature focus! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did I find the berry?\"",
        "options": [
          "The smallest elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "The smallest elite!"
      }
    ]
  },
  {
    "order": 20,
    "title": "Heap Mastery I",
    "desc": "Reflecting on the foundations of Heaps.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"FOUNDATION MASTERY! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"You have conquered Build-Heap, Heap-Sort, Updating keys, and the elite K-th strategies. The priority forest is yours! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Build-Heap complexity?",
        "options": [
          "O(N)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Optimal K-th largest uses?",
        "options": [
          "Min-Heap size K",
          "Max-Heap size K"
        ],
        "correctAnswer": "Min-Heap size K"
      },
      {
        "type": "multiple_choice",
        "questionText": "Heap-Sort in-place?",
        "options": [
          "Yes",
          "No"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "multiple_choice",
        "questionText": "Max-Heapify root swap?",
        "options": [
          "With largest child",
          "With smallest child"
        ],
        "correctAnswer": "With largest child"
      },
      {
        "type": "multiple_choice",
        "questionText": "Decrease-key (Min-Heap)?",
        "options": [
          "Up-Heapify",
          "Sink-Down"
        ],
        "correctAnswer": "Up-Heapify"
      },
      {
        "type": "match_following",
        "questionText": "Master Final Match!",
        "pairs": [
          {
            "key": "Heapify",
            "value": "Restored!"
          },
          {
            "key": "Sort",
            "value": "Sorted!"
          },
          {
            "key": "Pico",
            "value": "Proud!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Stage 2: Advanced Heaps! We will merge heaps, find medians in real-time, and solve the elite K-way merge! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Ready for the advanced climb?\"",
        "options": [
          "BEYOND AND UP!",
          "Wait...",
          "0"
        ],
        "correctAnswer": "BEYOND AND UP!"
      }
    ]
  }
];

module.exports = stage1;
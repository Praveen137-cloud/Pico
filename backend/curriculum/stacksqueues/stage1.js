const stage1 = [
  {
    "order": 1,
    "title": "The Vertical Nest (Stack)",
    "desc": "Introduction to the Stack (LIFO principle).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Stack! Imagine a vertical stack of nests. You can only put a new bird on the TOP, and you can only take the TOP bird off first! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is LIFO: Last In, First Out. The last bird to arrive is the first one to fly away! 🦜\"",
        "codeSnippet": "stack.push(newBird);\nbird = stack.pop();"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does LIFO stand for?",
        "options": [
          "Last In, First Out",
          "Last In, Fast Out",
          "Left In, Front Out"
        ],
        "correctAnswer": "Last In, First Out"
      },
      {
        "type": "match_following",
        "questionText": "Match Stack Terms!",
        "pairs": [
          {
            "key": "Push",
            "value": "Add to Top"
          },
          {
            "key": "Pop",
            "value": "Remove from Top"
          },
          {
            "key": "Peek",
            "value": "Look at Top"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Add a value `x` to the stack.",
        "codeSnippet": "s.___ (x);",
        "correctAnswer": "push"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Think of a stack of plates or a tube of tennis balls. You can't reach the bottom without moving the top! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which end of the stack is used for both adding and removing?",
        "options": [
          "Top",
          "Bottom",
          "Middle"
        ],
        "correctAnswer": "Top"
      },
      {
        "type": "code_fill_in",
        "questionText": "Retrieve the top element without removing it.",
        "codeSnippet": "val = s.___();",
        "correctAnswer": "top"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"High and mighty! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I on top?\"",
        "options": [
          "The king of the stack!",
          "No.",
          "0"
        ],
        "correctAnswer": "The king of the stack!"
      }
    ]
  },
  {
    "order": 2,
    "title": "The Pecking Order (Queue)",
    "desc": "Introduction to the Queue (FIFO principle).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Queue! Unlike a stack, a queue is like a line at the bird-fountain. First bird in the line is the first to drink! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is FIFO: First In, First Out. Fairness in the flock! 🦜\"",
        "codeSnippet": "queue.push(newBird); // Enqueue\nbird = queue.front(); queue.pop(); // Dequeue"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does FIFO stand for?",
        "options": [
          "First In, First Out",
          "First In, Fast Out",
          "Front In, Front Out"
        ],
        "correctAnswer": "First In, First Out"
      },
      {
        "type": "match_following",
        "questionText": "Match Queue Terms!",
        "pairs": [
          {
            "key": "Enqueue",
            "value": "Add to Rear"
          },
          {
            "key": "Dequeue",
            "value": "Remove from Front"
          },
          {
            "key": "Front",
            "value": "The leader"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Remove the first bird from the queue.",
        "codeSnippet": "q.___ ();",
        "correctAnswer": "pop"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Adding happens at the BACK (Rear), and removing happens at the FRONT. Everyone gets their turn! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which end is used for adding a new element in a Queue?",
        "options": [
          "Rear (Back)",
          "Front",
          "Top"
        ],
        "correctAnswer": "Rear (Back)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check who is next in line.",
        "codeSnippet": "bird = q.___();",
        "correctAnswer": "front"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Wait your turn, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I first?\"",
        "options": [
          "Leading the flight!",
          "No.",
          "0"
        ],
        "correctAnswer": "Leading the flight!"
      }
    ]
  },
  {
    "order": 3,
    "title": "The Array Stack",
    "desc": "Implementing a Stack using a static array.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Building a stack inside an array! We use a TOP variable to track the highest nest occupied. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Initially, Top is -1. Push: Increment Top and store. Pop: Retrieve and Decrement Top. 🦜\"",
        "codeSnippet": "void push(int x) {\n  if (top == MAX-1) return; // Overflow\n  arr[++top] = x;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the \"Stack Overflow\" condition?",
        "options": [
          "Stack is full",
          "Stack is empty",
          "Pico fell off"
        ],
        "correctAnswer": "Stack is full"
      },
      {
        "type": "match_following",
        "questionText": "Match Array logic!",
        "pairs": [
          {
            "key": "top == -1",
            "value": "Underflow"
          },
          {
            "key": "top = MAX-1",
            "value": "Full"
          },
          {
            "key": "++top",
            "value": "Space for new"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Decrement the top index.",
        "codeSnippet": "___ top;",
        "correctAnswer": "--"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(1) for everything! But be careful—you can't grow the nest once the array is full! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for Peek in an array stack?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Access the top element.",
        "codeSnippet": "return arr[___];",
        "correctAnswer": "top"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Solid and steady! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is my array big enough?\"",
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
    "title": "The Flexible Stack (LL)",
    "desc": "Implementing a Stack using a Linked List.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"No limits! By using a Linked List, our stack can grow as long as there are seeds in the forest! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"PUSH is just inserting a node at the HEAD. POP is just deleting the HEAD node. 🦜\"",
        "codeSnippet": "newNode->next = topNode;\ntopNode = newNode;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Where does the \"Top\" pointer stay in a Linked List stack implementation?",
        "options": [
          "At the Head",
          "At the Tail",
          "In the middle"
        ],
        "correctAnswer": "At the Head"
      },
      {
        "type": "match_following",
        "questionText": "Match LL Stack steps!",
        "pairs": [
          {
            "key": "Push",
            "value": "Insert at Head"
          },
          {
            "key": "Pop",
            "value": "Delete from Head"
          },
          {
            "key": "Peek",
            "value": "Value of Head"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Make top point to its successor.",
        "codeSnippet": "topNode = topNode->___ ;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Wait, there is no overflow here! As long as you have memory, you have nests! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Advantage of LL Stack over Array Stack?",
        "options": [
          "Dynamic size",
          "Less memory",
          "Faster Peek"
        ],
        "correctAnswer": "Dynamic size"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check if stack is empty.",
        "codeSnippet": "if (___ == NULL) return true;",
        "correctAnswer": "topNode"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Infinite heights! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the top pointer?\"",
        "options": [
          "Guiding the growth!",
          "No.",
          "0"
        ],
        "correctAnswer": "Guiding the growth!"
      }
    ]
  },
  {
    "order": 5,
    "title": "Balanced Brackets",
    "desc": "Using a stack to check for valid parentheses.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Guardian! Are all brackets `(`, `[`, `{` closed correctly and in order? '{[()]}' is good, '{[(])}' is bad! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Push opening brackets into the Stack. When you see a closing bracket, POP and check if it matches the leader! 🦜\"",
        "codeSnippet": "if (s.empty() || s.top() != matchingChar) return false;\ns.pop();"
      },
      {
        "type": "multiple_choice",
        "questionText": "Result for input \"([)]\"?",
        "options": [
          "Invalid",
          "Valid",
          "Depends on Pico"
        ],
        "correctAnswer": "Invalid"
      },
      {
        "type": "match_following",
        "questionText": "Match Parentheses!",
        "pairs": [
          {
            "key": "(",
            "value": ")"
          },
          {
            "key": "[",
            "value": "]"
          },
          {
            "key": "{",
            "value": "}"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if stack is empty before popping.",
        "codeSnippet": "if (st.____) return false;",
        "correctAnswer": "empty"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"At the end, if the stack is EMPTY, the nesting is perfect. Complexity: O(N) time and O(N) space! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Final condition for validity?",
        "options": [
          "Stack is empty",
          "Stack is full",
          "Stack has 1 node"
        ],
        "correctAnswer": "Stack is empty"
      },
      {
        "type": "code_fill_in",
        "questionText": "Push opening bracket.",
        "codeSnippet": "if (c == '(') s.___('(');",
        "correctAnswer": "push"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Perfectly nested nests! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I balanced?\"",
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
    "title": "The Array Queue",
    "desc": "Implementing a Queue using an array.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Queue-building! We use two indices: FRONT (who is drinking) and REAR (last bird in line). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Enqueue: Increase Rear and store. Dequeue: Increase Front. 🦜\"",
        "codeSnippet": "arr[rear++] = x;\nval = arr[front++];"
      },
      {
        "type": "multiple_choice",
        "questionText": "Initial values for Front and Rear (empty queue)?",
        "options": [
          "0",
          "-1",
          "Infinity"
        ],
        "correctAnswer": "0"
      },
      {
        "type": "match_following",
        "questionText": "Match Index movement!",
        "pairs": [
          {
            "key": "Enqueue",
            "value": "Rear++"
          },
          {
            "key": "Dequeue",
            "value": "Front++"
          },
          {
            "key": "Empty",
            "value": "Front == Rear"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Increase the front index.",
        "codeSnippet": "front ___ ;",
        "correctAnswer": "++"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Wait! If we just keep moving both right, we eventually run out of space even if the queue is small. We need a CIRCULAR nest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Problem with simple array queue?",
        "options": [
          "Memory waste at front",
          "Slow Search",
          "Pico falls"
        ],
        "correctAnswer": "Memory waste at front"
      },
      {
        "type": "code_fill_in",
        "questionText": "Increment rear with modulo (circular).",
        "codeSnippet": "rear = (rear + 1) ___ size;",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Keep the line moving! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I at the rear?\"",
        "options": [
          "The end of the line!",
          "No.",
          "0"
        ],
        "correctAnswer": "The end of the line!"
      }
    ]
  },
  {
    "order": 7,
    "title": "The Circular Queue",
    "desc": "Solving the memory waste with a Circular Array.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Infinity Loop! When REAR hits the end, it jumps back to the START if there is room. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use the modulo (%) operator to keep the indices inside the array bounds. 🦜\"",
        "codeSnippet": "rear = (rear + 1) % MAX;\nfront = (front + 1) % MAX;"
      },
      {
        "type": "multiple_choice",
        "questionText": "How is REAR updated in a circular queue?",
        "options": [
          "(rear + 1) % size",
          "rear + 1",
          "rear % size"
        ],
        "correctAnswer": "(rear + 1) % size"
      },
      {
        "type": "match_following",
        "questionText": "Match Circular Conditions!",
        "pairs": [
          {
            "key": "Full",
            "value": "(rear + 1) % size == front"
          },
          {
            "key": "Empty",
            "value": "front == -1"
          },
          {
            "key": "Reset",
            "value": "front = rear = 0"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Modulo operator symbol.",
        "codeSnippet": "next = (current + 1) ___ capacity;",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a much more elite way to manage memory. No birds left behind! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is search faster in a circular queue than a normal queue?",
        "options": [
          "No (Both O(N))",
          "Yes",
          "Pico likes speed"
        ],
        "correctAnswer": "No (Both O(N))"
      },
      {
        "type": "code_fill_in",
        "questionText": "Identify the next front.",
        "codeSnippet": "front = (front + 1) ___ MAX;",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The wheel turns again! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I circular?\"",
        "options": [
          "Infinite rotation!",
          "No.",
          "0"
        ],
        "correctAnswer": "Infinite rotation!"
      }
    ]
  },
  {
    "order": 8,
    "title": "The LL Queue",
    "desc": "Implementing a Queue using a Linked List.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Dynamic Line! Two pointers: FRONT at the head and REAR at the tail. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"ENQUEUE: newNode at Tail->next, update Tail. DEQUEUE: Delete Head, update Front! 🦜\"",
        "codeSnippet": "rear->next = newNode; rear = newNode;\nfront = front->next;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for Enqueue and Dequeue in an LL Queue?",
        "options": [
          "O(1) for both",
          "O(1) and O(N)",
          "O(N)"
        ],
        "correctAnswer": "O(1) for both"
      },
      {
        "type": "match_following",
        "questionText": "Match LL Queue pointers!",
        "pairs": [
          {
            "key": "Front",
            "value": "Head (Removal)"
          },
          {
            "key": "Rear",
            "value": "Tail (Addition)"
          },
          {
            "key": "NULL",
            "value": "End"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Add a new node to the rear.",
        "codeSnippet": "rear->next = ___ ;",
        "correctAnswer": "newNode"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Just like the Stack, no pre-defined memory limits. Fly free, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if you dequeue the only node?",
        "options": [
          "Front and Rear both become NULL",
          "Rear remains points to old",
          "Error"
        ],
        "correctAnswer": "Front and Rear both become NULL"
      },
      {
        "type": "code_fill_in",
        "questionText": "Advance the front pointer.",
        "codeSnippet": "front = front->___;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One way flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the front pointer?\"",
        "options": [
          "Opening the path!",
          "No.",
          "0"
        ],
        "correctAnswer": "Opening the path!"
      }
    ]
  },
  {
    "order": 9,
    "title": "Modern Queues (Priority)",
    "desc": "Introduction to Priority Queues.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Elite VIP! In a Priority Queue, every bird has a ranking. The bird with the highest priority drinks first, no matter when it arrived! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Perfect for emergency cases where the king-bird gets served before the common fledgling! 🦜\"",
        "codeSnippet": "pq.push(bird, priority);\nbird = pq.top();"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which element is removed first in a Max-Priority Queue?",
        "options": [
          "The one with maximum priority",
          "The first arriving",
          "Random"
        ],
        "correctAnswer": "The one with maximum priority"
      },
      {
        "type": "match_following",
        "questionText": "Match PQ types!",
        "pairs": [
          {
            "key": "Max-Priority",
            "value": "Highest rank first"
          },
          {
            "key": "Min-Priority",
            "value": "Lowest rank first"
          },
          {
            "key": "Implementation",
            "value": "Heaps"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Keyword to get high priority element.",
        "codeSnippet": "best = pq.___();",
        "correctAnswer": "top"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Internally, we use HEAPS for this. We will master them later in the forest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of extraction in a Binary Heap PQ?",
        "options": [
          "O(log N)",
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Add bird with its value.",
        "codeSnippet": "pq.push(___);",
        "correctAnswer": "x"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Rank has its rewards! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I high priority?\"",
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
    "title": "The Double-Ended Nest (Deque)",
    "desc": "Introduction to Deques (Double Ended Queues).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Ultimate Flex! A Deque allows adding and removing birds from BOTH ends. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stack + Queue = Deque! It’s the swiss-army knife of linear structures. 🦜\"",
        "codeSnippet": "dq.push_front(x); dq.push_back(y);\ndq.pop_front(); dq.pop_back();"
      },
      {
        "type": "multiple_choice",
        "questionText": "What operations does a Deque support?",
        "options": [
          "Push/Pop at both ends",
          "Push only",
          "Pop only"
        ],
        "correctAnswer": "Push/Pop at both ends"
      },
      {
        "type": "match_following",
        "questionText": "Match Deque Actions!",
        "pairs": [
          {
            "key": "Push_Front",
            "value": "New Leader"
          },
          {
            "key": "Push_Back",
            "value": "New Caboose"
          },
          {
            "key": "Pop_Front",
            "value": "Remove Leader"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Add to the front.",
        "codeSnippet": "dq.___ (x);",
        "correctAnswer": "push_front"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Usually implemented as a DLL or a series of blocks. Extremely efficient for sliding window problems! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of push/pop in a C++ `std::deque`?",
        "options": [
          "O(1) amortized",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1) amortized"
      },
      {
        "type": "code_fill_in",
        "questionText": "Remove from back.",
        "codeSnippet": "dq.___();",
        "correctAnswer": "pop_back"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Flexibility in flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a deque?\"",
        "options": [
          "A master of both ends!",
          "No.",
          "0"
        ],
        "correctAnswer": "A master of both ends!"
      }
    ]
  },
  {
    "order": 11,
    "title": "Min-Stack Secret",
    "desc": "Designing a stack that can get the Minimum value in O(1).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Smallest Key! How to find the smallest bird in the stack without searching everyone? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use two stacks! The main stack stores data, and the MIN stack only stores the smallest seed seen so far! 🦜\"",
        "codeSnippet": "void push(int x) {\n  mainS.push(x);\n  if(minS.empty() || x <= minS.top()) minS.push(x);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the time complexity of getMin() in a MinStack?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match MinStack logic!",
        "pairs": [
          {
            "key": "Push",
            "value": "Check if <= min.top"
          },
          {
            "key": "Pop",
            "value": "Check if == min.top"
          },
          {
            "key": "Space",
            "value": "O(N) extra"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Keyword to get the minimum value.",
        "codeSnippet": "minVal = st.___();",
        "correctAnswer": "getMin"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Alternatively, store the min as a pair (value, currentMin) in a single stack. Simple and elite! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which is an advantage of the 2-stack approach?",
        "options": [
          "Saves space if mins repeat",
          "Faster search",
          "Easier to code"
        ],
        "correctAnswer": "Saves space if mins repeat"
      },
      {
        "type": "code_fill_in",
        "questionText": "Retrieve top of min stack.",
        "codeSnippet": "return minStack.___();",
        "correctAnswer": "top"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One eye on the data, one eye on the min! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the smallest?\"",
        "options": [
          "A giant in spirit!",
          "No.",
          "0"
        ],
        "correctAnswer": "A giant in spirit!"
      }
    ]
  },
  {
    "order": 12,
    "title": "The Queue from Stacks",
    "desc": "Implementing a Queue using two Stacks.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Reversal Magic! Can you make a fair Queue using two unfair Stacks? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use Stack A for Enqueue. When Dequeuing, if Stack B is empty, pour ALL of Stack A into Stack B. The order reverses, and the first bird is now on top! 🦜\"",
        "codeSnippet": "if(s2.empty()) {\n  while(!s1.empty()) { s2.push(s1.pop()); }\n}\nreturn s2.pop();"
      },
      {
        "type": "multiple_choice",
        "questionText": "When should you move elements from Stack 1 to Stack 2?",
        "options": [
          "Only when Stack 2 is empty during pop",
          "Every push",
          "Never"
        ],
        "correctAnswer": "Only when Stack 2 is empty during pop"
      },
      {
        "type": "match_following",
        "questionText": "Match roles!",
        "pairs": [
          {
            "key": "Stack 1",
            "value": "Input Buffer"
          },
          {
            "key": "Stack 2",
            "value": "Output Buffer"
          },
          {
            "key": "Move",
            "value": "Order Reversal"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Transfer condition.",
        "codeSnippet": "if (outbox.___()) { while(!inbox.empty()) ... }",
        "correctAnswer": "empty"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Amortized complexity is O(1). Each bird is moved exactly twice! Very efficient for a double-stack nest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the amortized cost per dequeue?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Move bird from in to out.",
        "codeSnippet": "outbox.push(inbox.___()); inbox.pop();",
        "correctAnswer": "top"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Two wrongs make a right! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I reversed twice?\"",
        "options": [
          "Straight as an arrow!",
          "No.",
          "0"
        ],
        "correctAnswer": "Straight as an arrow!"
      }
    ]
  },
  {
    "order": 13,
    "title": "The Stack from Queues",
    "desc": "Implementing a Stack using two Queues.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Fairness Flip! Designing a Stack using Queues. Harder than it looks! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Push: Add to Queue 2. Move ALL birds from Queue 1 to Queue 2. Swap the names of Q1 and Q2. Now the new bird is at the FRONT! 🦜\"",
        "codeSnippet": "q2.push(x);\nwhile(!q1.empty()) { q2.push(q1.pop()); }\nswap(q1, q2);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Push if Dequeue is O(1)?",
        "options": [
          "O(N)",
          "O(1)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Queue Stack types!",
        "pairs": [
          {
            "key": "Push Heavy",
            "value": "Push is O(N)"
          },
          {
            "key": "Pop Heavy",
            "value": "Pop is O(N)"
          },
          {
            "key": "Best",
            "value": "Depends on usage"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Swap the two queue roles.",
        "codeSnippet": "___ (q1, q2);",
        "correctAnswer": "swap"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A single queue can also work by rotating the front elements to the back N-1 times! A solo bird trick! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Pop in a Push-heavy implementation?",
        "options": [
          "O(1)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Pop from the primary queue.",
        "codeSnippet": "q1.___();",
        "correctAnswer": "pop"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Rotating the flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I rotated?\"",
        "options": [
          "Circle of trust!",
          "No.",
          "0"
        ],
        "correctAnswer": "Circle of trust!"
      }
    ]
  },
  {
    "order": 14,
    "title": "First Unique Character",
    "desc": "Using a queue to track stream uniqueness.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Unique Bird! In a stream of incoming birds \"aabcb\", who is the first bird that hasn't been doubled yet? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a Queue and a Frequency Map. If you see a bird, inc frequency and push to Queue. Pop from Queue until the Front is a unique bird! 🦜\"",
        "codeSnippet": "freq[c]++; q.push(c);\nwhile(!q.empty() && freq[q.front()] > 1) q.pop();"
      },
      {
        "type": "multiple_choice",
        "questionText": "First unique in \"abcac\"?",
        "options": [
          "b",
          "a",
          "c"
        ],
        "correctAnswer": "b"
      },
      {
        "type": "match_following",
        "questionText": "Match Uniqueness logic!",
        "pairs": [
          {
            "key": "Map",
            "value": "Count frequency"
          },
          {
            "key": "Queue",
            "value": "Order of arrival"
          },
          {
            "key": "Pop",
            "value": "Remove non-unique"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The check to see if the front bird is duplicated.",
        "codeSnippet": "while (!q.empty() && counts[q.front()] ___ 1)",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N) because every bird enters and leaves the queue at most once. Real-time unique tracker! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If queue is empty, result is?",
        "options": [
          "No unique character",
          "Error",
          "First char"
        ],
        "correctAnswer": "No unique character"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update counts.",
        "codeSnippet": "counts[c]___;",
        "correctAnswer": "++"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One of a kind! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I unique?\"",
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
    "title": "The Mirror Image (Queue Reverse)",
    "desc": "Reversing a Queue using a Stack.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Queue Flip! How to reverse the fountain line so the last bird becomes the first? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Transfer everyone from Queue to Stack (order reverses). Then transfer everyone from Stack back to Queue! 🦜\"",
        "codeSnippet": "while(!q.empty()) s.push(q.pop());\nwhile(!s.empty()) q.push(s.pop());"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why does using a Stack reverse the order?",
        "options": [
          "LIFO (Last In First Out)",
          "FIFO",
          "Magic seeds"
        ],
        "correctAnswer": "LIFO (Last In First Out)"
      },
      {
        "type": "match_following",
        "questionText": "Match Reverse Steps!",
        "pairs": [
          {
            "key": "Phase 1",
            "value": "Queue -> Stack"
          },
          {
            "key": "Phase 2",
            "value": "Reverse order in stack"
          },
          {
            "key": "Phase 3",
            "value": "Stack -> Queue"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Final move to return to the queue.",
        "codeSnippet": "while(!st.empty()) q.___ (st.pop());",
        "correctAnswer": "push"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recursion can also be used as a hidden stack for this trick. Complexity: O(N) time and O(N) space! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you reverse a Queue with only O(1) extra space?",
        "options": [
          "No",
          "Yes",
          "Pico can"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Push to stack.",
        "codeSnippet": "st.push(q.___());",
        "correctAnswer": "pop"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Backward into the future! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I flipped?\"",
        "options": [
          "A perfect mirror!",
          "No.",
          "0"
        ],
        "correctAnswer": "A perfect mirror!"
      }
    ]
  },
  {
    "order": 16,
    "title": "Sort the Stack",
    "desc": "Sorting a stack using another temporary stack.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Sorted Tower! We want the largest bird at the bottom and the smallest at the top. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pop from S1. While TempStack.top > current, pop TempStack back to S1. Push current to TempStack. 🦜\"",
        "codeSnippet": "while(!tmp.empty() && tmp.top() > curr) {\n  s1.push(tmp.pop());\n}\ntmp.push(curr);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of sorting a stack with this method?",
        "options": [
          "O(N^2)",
          "O(N)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N^2)"
      },
      {
        "type": "match_following",
        "questionText": "Match Sorting terms!",
        "pairs": [
          {
            "key": "Main Stack",
            "value": "Input"
          },
          {
            "key": "Temp Stack",
            "value": "Sorted Output"
          },
          {
            "key": "While loop",
            "value": "Find position"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition to move back from the sorted stack.",
        "codeSnippet": "while (!tmp.empty() && tmp.top() ___ curr)",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recursion can also sort a stack in O(N^2) using its internal call stack as the temp space! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If input is [5,1,3], what is the sorted temp stack?",
        "options": [
          "[1,3,5]",
          "[5,3,1]",
          "[1,5,3]"
        ],
        "correctAnswer": "[1,3,5]"
      },
      {
        "type": "code_fill_in",
        "questionText": "Place current in sorted stack.",
        "codeSnippet": "tmp.___ (curr);",
        "correctAnswer": "push"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Order from chaos! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in order?\"",
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
    "title": "The Rolling Stream (Queue sum)",
    "desc": "Finding the average of all birds in a sliding window.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sliding Average! What is the sum of the last 3 birds that flew past? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a Queue! Add new bird to sum and Queue. If Queue size > K, remove Front from sum and Queue! 🦜\"",
        "codeSnippet": "sum += next; q.push(next);\nif(q.size() > k) { sum -= q.pop(); }\nreturn sum / q.size();"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of calculating sliding average for N elements?",
        "options": [
          "O(N)",
          "O(N * K)",
          "O(K)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Stream Terms!",
        "pairs": [
          {
            "key": "Queue",
            "value": "The Window"
          },
          {
            "key": "Sum",
            "value": "Cumulative weight"
          },
          {
            "key": "Front",
            "value": "Oldest bird"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Remove the oldest from sum.",
        "codeSnippet": "sum -= q.___ ();",
        "correctAnswer": "pop"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a real-time analytics trick. O(1) update per new bird! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the sum of window [1,2,3] if new bird is 4 and K=3?",
        "options": [
          "9 (2+3+4)",
          "10",
          "6"
        ],
        "correctAnswer": "9 (2+3+4)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update window size check.",
        "codeSnippet": "if (q.size() ___ windowLimit)",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Streaming data, stable averages! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the window clear?\"",
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
    "title": "Design a Circular Deque",
    "desc": "Implementing an efficient Deque using a circular array.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Circular Deque! Front and Rear can both grow and shrink, wrapping around the array. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Front = (Front - 1 + Size) % Size. Rear = (Rear + 1) % Size. 🦜\"",
        "codeSnippet": "front = (front - 1 + cap) % cap;\nrear = (rear + 1) % cap;"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do you move the front pointer BACKWARDS in a circular array?",
        "options": [
          "(front - 1 + size) % size",
          "front - 1",
          "front % size"
        ],
        "correctAnswer": "(front - 1 + size) % size"
      },
      {
        "type": "match_following",
        "questionText": "Match Deque Wraps!",
        "pairs": [
          {
            "key": "Insert Front",
            "value": "Left-shift wrap"
          },
          {
            "key": "Insert Rear",
            "value": "Right-shift wrap"
          },
          {
            "key": "Full",
            "value": "size == capacity"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if deque is full.",
        "codeSnippet": "if (cnt ___ cap) return false;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(1) for all 4 operations. The ultimate linear container! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Initial state of an empty circular deque?",
        "options": [
          "Count = 0",
          "Count = -1",
          "Front = 1"
        ],
        "correctAnswer": "Count = 0"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update rear pointer.",
        "codeSnippet": "rear = (rear + 1) ___ size;",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Double ends, circular limits! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do I wrap around?\"",
        "options": [
          "Infinite flexibility!",
          "No.",
          "0"
        ],
        "correctAnswer": "Infinite rotation!"
      }
    ]
  },
  {
    "order": 19,
    "title": "Middle of Stack (O(1))",
    "desc": "Designing a stack with findMiddle in O(1) using DLL.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Deep Middle! Can we find the middle of the stack in constant time even after pushing and popping? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a Doubly Linked List for the stack and a MID pointer! When you push, move MID every 2 pushes. When you pop, move MID back every 2 pops! 🦜\"",
        "codeSnippet": "if(count % 2 == 0) mid = mid->prev;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is a normal array/stack bad for O(1) findMiddle?",
        "options": [
          "Cannot move middle pointer in O(1)",
          "Search is slow",
          "Pico falls"
        ],
        "correctAnswer": "Cannot move middle pointer in O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Middle Stack!",
        "pairs": [
          {
            "key": "Push",
            "value": "Update Mid Forward"
          },
          {
            "key": "Pop",
            "value": "Update Mid Backward"
          },
          {
            "key": "Structure",
            "value": "Doubly Linked List"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Move mid pointer back on pop.",
        "codeSnippet": "if (count % 2 == 1) mid = mid->___ ;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This combines DLL and Stack logic. Extremely efficient for large nest monitoring! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of finding middle with this design?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update count on push.",
        "codeSnippet": "count___;",
        "correctAnswer": "++"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Heart of the tower! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in the middle?\"",
        "options": [
          "Always centered!",
          "No.",
          "0"
        ],
        "correctAnswer": "Always centered!"
      }
    ]
  },
  {
    "order": 20,
    "title": "Stage 1 Graduation",
    "desc": "The Foundation of Linear Containers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 1 COMPLETE! You have conquered the towers and the fountains. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stacks, Queues, Deques, and Circular Wraps. You are a Master of the Peering Order! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Stack Principal?",
        "options": [
          "LIFO",
          "FIFO"
        ],
        "correctAnswer": "LIFO"
      },
      {
        "type": "multiple_choice",
        "questionText": "Queue Principal?",
        "options": [
          "FIFO",
          "LIFO"
        ],
        "correctAnswer": "FIFO"
      },
      {
        "type": "multiple_choice",
        "questionText": "MinStack complexity?",
        "options": [
          "O(1) search",
          "O(N) search"
        ],
        "correctAnswer": "O(1) search"
      },
      {
        "type": "multiple_choice",
        "questionText": "Queue from 2 Stacks amortized?",
        "options": [
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Circular Queue full index?",
        "options": [
          "(r+1)%s == f",
          "r+1 == f"
        ],
        "correctAnswer": "(r+1)%s == f"
      },
      {
        "type": "match_following",
        "questionText": "Final Foundation Match!",
        "pairs": [
          {
            "key": "Stack",
            "value": "Tower!"
          },
          {
            "key": "Queue",
            "value": "Line!"
          },
          {
            "key": "Pico",
            "value": "Salutes!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Next, we face the Intermediate Stage: Postfix, Prefix, and the Sliding Window King! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you ready to calculate?\"",
        "options": [
          "SQUAWK YES!",
          "Wait...",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  }
];

module.exports = stage1;
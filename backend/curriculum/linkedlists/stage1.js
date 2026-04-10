const stage1 = [
  {
    "order": 1,
    "title": "The Train of Nests",
    "desc": "Understanding what a Linked List truly is.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Imagine a line of nests, but they aren't stuck in the ground like an array. Each nest has a secret map to the NEXT nest! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a Linked List. Every Node has two parts: the DATA (the seed) and the NEXT pointer (the map). 🦜\"",
        "codeSnippet": "struct Node {\n  int data;\n  Node* next;\n};"
      },
      {
        "type": "multiple_choice",
        "questionText": "What are the two parts of a Linked List node?",
        "options": [
          "Data and Next pointer",
          "Index and Value",
          "Start and End"
        ],
        "correctAnswer": "Data and Next pointer"
      },
      {
        "type": "match_following",
        "questionText": "Match Node terms!",
        "pairs": [
          {
            "key": "Head",
            "value": "The First Nest"
          },
          {
            "key": "Tail",
            "value": "The Last Nest"
          },
          {
            "key": "NULL",
            "value": "The end of the line"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Access the data of the current node `p`.",
        "codeSnippet": "val = p ___ data;",
        "correctAnswer": "->"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Linked Lists can grow and shrink as much as you want! No more worrying about running out of space in your array-nest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Where does the NEXT of the tail node point to?",
        "options": [
          "NULL (or nullptr)",
          "The Head",
          "The 0th index"
        ],
        "correctAnswer": "NULL (or nullptr)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Create a new node in C++.",
        "codeSnippet": "Node* n = ___ Node();",
        "correctAnswer": "new"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Chain the nests, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a node?\"",
        "options": [
          "The master of the chain!",
          "No.",
          "0"
        ],
        "correctAnswer": "The master of the chain!"
      }
    ]
  },
  {
    "order": 2,
    "title": "The Great Journey",
    "desc": "Traversing a Linked List from start to finish.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Traversal! To find a specific nest, you must follow the maps one by one from the Head. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a temporary pointer. Move it until it reaches NULL. 🦜\"",
        "codeSnippet": "Node* temp = head;\nwhile (temp != NULL) {\n  cout << temp->data;\n  temp = temp->next;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the time complexity of traversing a list of size N?",
        "options": [
          "O(N)",
          "O(1)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Traversal Logic!",
        "pairs": [
          {
            "key": "while(temp != NULL)",
            "value": "The loop"
          },
          {
            "key": "temp = temp->next",
            "value": "The step"
          },
          {
            "key": "head",
            "value": "The start"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Step to the next node.",
        "codeSnippet": "curr = curr ___ ;",
        "correctAnswer": "->next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Unlike an array, you CANNOT jump to node 5. You must fly through 1, 2, 3, and 4 first! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you access a linked list element in O(1) time?",
        "options": [
          "No",
          "Yes",
          "Only if I’m strong"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check if current node is valid.",
        "codeSnippet": "while (curr ___ NULL)",
        "correctAnswer": "!="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One step at a time! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I at the end?\"",
        "options": [
          "Never! Still flying!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "Never! Still flying!"
      }
    ]
  },
  {
    "order": 3,
    "title": "Landing at the Front",
    "desc": "Inserting a new node at the beginning of the list.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Head Insertion! A new bird wants to be the leader of the flock. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Step 1: Point the NEW node's next to the current Head. Step 2: Make the NEW node the new Head! 🦜\"",
        "codeSnippet": "newNode->next = head;\nhead = newNode;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of inserting at the Head of a Linked List?",
        "options": [
          "O(1)",
          "O(N)",
          "O(Pointer)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Insertion order!",
        "pairs": [
          {
            "key": "newNode->next",
            "value": "Old Head"
          },
          {
            "key": "head pointer",
            "value": "New Node"
          },
          {
            "key": "Sequence",
            "value": "Vital!"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Point the new node to the old start.",
        "codeSnippet": "newNode->next = ___ ;",
        "correctAnswer": "head"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is much faster than an array, where you have to move EVERY bird to make room at the front! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is LL head insertion O(1)?",
        "options": [
          "No shifting required",
          "Pointer magic",
          "Pico said so"
        ],
        "correctAnswer": "No shifting required"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update the head pointer.",
        "codeSnippet": "___ = newNode;",
        "correctAnswer": "head"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"New leader, same flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the new Head?\"",
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
    "title": "The Caboose Connection",
    "desc": "Inserting a new node at the tail of the list.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Tail Insertion! Adding a new nest at the very end of the line. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Step 1: Travel all the way to the Tail. Step 2: Point Tail->next to the New Node! 🦜\"",
        "codeSnippet": "while(temp->next != NULL) temp = temp->next;\ntemp->next = newNode;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of tail insertion if you ONLY have a head pointer?",
        "options": [
          "O(N)",
          "O(1)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Tail Logic!",
        "pairs": [
          {
            "key": "temp->next == NULL",
            "value": "We found the tail"
          },
          {
            "key": "temp->next = newNode",
            "value": "The link"
          },
          {
            "key": "newNode->next = NULL",
            "value": "The new tail"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if the next node exists.",
        "codeSnippet": "while (curr->___ != NULL) curr = curr->next;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If you keep a separate TAIL pointer, this becomes O(1). Every elite bird keeps a tail pointer! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If list is empty, tail insertion is same as...?",
        "options": [
          "Head insertion",
          "Deletion",
          "Error"
        ],
        "correctAnswer": "Head insertion"
      },
      {
        "type": "code_fill_in",
        "questionText": "Assign new node to the old tail.",
        "codeSnippet": "tail->next = ___;",
        "correctAnswer": "newNode"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Longer and stronger! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I trailing?\"",
        "options": [
          "Leading from the back!",
          "No.",
          "0"
        ],
        "correctAnswer": "Leading from the back!"
      }
    ]
  },
  {
    "order": 5,
    "title": "The Mid-Flight Dock",
    "desc": "Inserting a node at a specific position.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Middle Insertion! Putting a nest between two existing ones. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Step 1: Find node at pos-1. Step 2: newNode->next = temp->next. Step 3: temp->next = newNode. 🦜\"",
        "codeSnippet": "newNode->next = temp->next;\ntemp->next = newNode;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of inserting at position K?",
        "options": [
          "O(K)",
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(K)"
      },
      {
        "type": "match_following",
        "questionText": "Match Link Order!",
        "pairs": [
          {
            "key": "newNode->next",
            "value": "temp->next"
          },
          {
            "key": "temp->next",
            "value": "newNode"
          },
          {
            "key": "Search",
            "value": "Find temp"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Loop to find position `k`.",
        "codeSnippet": "for(int i=1; i<___; i++) temp = temp->next;",
        "correctAnswer": "k"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Be careful! If you update `temp->next` BEFORE setting `newNode->next`, you will lose the rest of your necklace! A catastrophe! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if you lose the reference to the next node?",
        "options": [
          "Memory Leak / Lost data",
          "Nothing",
          "Automatic fix"
        ],
        "correctAnswer": "Memory Leak / Lost data"
      },
      {
        "type": "code_fill_in",
        "questionText": "Connect the new node to the future.",
        "codeSnippet": "node->next = prev->___;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bridging the gap! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in the middle?\"",
        "options": [
          "The heart of the chain!",
          "No.",
          "0"
        ],
        "correctAnswer": "The heart of the chain!"
      }
    ]
  },
  {
    "order": 6,
    "title": "Evicting the Leader",
    "desc": "Deleting the head node.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Head Deletion! The first bird flies away. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Step 1: Point temporary pointer to Head. Step 2: Head = Head->next. Step 3: Delete temp! 🦜\"",
        "codeSnippet": "Node* temp = head;\nhead = head->next;\ndelete temp;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of deleting the Head?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Deletion Flow!",
        "pairs": [
          {
            "key": "temp = head",
            "value": "Keep for deletion"
          },
          {
            "key": "head = head->next",
            "value": "Move leader"
          },
          {
            "key": "delete temp",
            "value": "Free memory"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The actual memory freeing keyword.",
        "codeSnippet": "___ temp;",
        "correctAnswer": "delete"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"In languages like Java or Python, you don't need step 3. The Garbage Collector bird picks up the mess for you! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens to the head if the list has only 1 node?",
        "options": [
          "Becomes NULL",
          "Stays same",
          "Error"
        ],
        "correctAnswer": "Becomes NULL"
      },
      {
        "type": "code_fill_in",
        "questionText": "Shift the head.",
        "codeSnippet": "head = ___->next;",
        "correctAnswer": "head"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Clean flight, clean memory! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I gone?\"",
        "options": [
          "Just moved ahead!",
          "SQUAWK NO!",
          "0"
        ],
        "correctAnswer": "Just moved ahead!"
      }
    ]
  },
  {
    "order": 7,
    "title": "Removing the Caboose",
    "desc": "Deleting the tail node.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Tail Deletion! The last nest is abandoned. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Step 1: Travel to the SECOND TO LAST node (tail precursor). Step 2: Delete tail. Step 3: Set precursor->next = NULL. 🦜\"",
        "codeSnippet": "while(temp->next->next != NULL) temp = temp->next;\ndelete temp->next;\ntemp->next = NULL;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of tail deletion with only a head pointer?",
        "options": [
          "O(N)",
          "O(1)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Precursor Logic!",
        "pairs": [
          {
            "key": "temp->next->next",
            "value": "Check 2 ahead"
          },
          {
            "key": "delete temp->next",
            "value": "The snap"
          },
          {
            "key": "NULL",
            "value": "The new end"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Verify the node TWO steps ahead is NULL.",
        "codeSnippet": "while (curr->next->___ != NULL)",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Even if you have a TAIL pointer, you MUST still travel from the Head to find its precursor. Tail deletion is always tricky! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does a tail pointer help make tail deletion O(1)?",
        "options": [
          "No (Still need precursor)",
          "Yes",
          "Only with seeds"
        ],
        "correctAnswer": "No (Still need precursor)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Set the new end.",
        "codeSnippet": "precursor->next = ___;",
        "correctAnswer": "NULL"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Snip for success! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the precursor?\"",
        "options": [
          "The chosen one!",
          "No.",
          "0"
        ],
        "correctAnswer": "The chosen one!"
      }
    ]
  },
  {
    "order": 8,
    "title": "The Seek and Find",
    "desc": "Searching for a value in a Linked List.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Where is the golden seed? Search through the nests until you find it! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Just like traversal! Check `curr->data` at every step. Return true if found! 🦜\"",
        "codeSnippet": "while(curr != NULL) {\n  if(curr->data == key) return true;\n  curr = curr->next;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is search in a Linked List faster than an Array?",
        "options": [
          "No (Both O(N))",
          "Yes",
          "Depends on Pico’s speed"
        ],
        "correctAnswer": "No (Both O(N))"
      },
      {
        "type": "match_following",
        "questionText": "Match Search Results!",
        "pairs": [
          {
            "key": "Found",
            "value": "Return true"
          },
          {
            "key": "End reached",
            "value": "Return false"
          },
          {
            "key": "Condition",
            "value": "data == key"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Data comparison code.",
        "codeSnippet": "if (curr->data ___ key)",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Binary Search doesn't work here because you can't jump to the middle! It’s all linear flight for us! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why can’t you do Binary Search easily on LL?",
        "options": [
          "No O(1) random access",
          "No sorted nodes",
          "List is too long"
        ],
        "correctAnswer": "No O(1) random access"
      },
      {
        "type": "code_fill_in",
        "questionText": "Iterate pointer.",
        "codeSnippet": "p = p->___;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Found you! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I hidden?\"",
        "options": [
          "Visible and Elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "Visible and Elite!"
      }
    ]
  },
  {
    "order": 9,
    "title": "The Mirror Chain (Reverse)",
    "desc": "Reversing a Linked List (Iterative).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Ultimate Flip! Change the direction of every single map. The tail becomes the head! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use three pointers: PREV, CURR, and NEXT. 🦜\"",
        "codeSnippet": "while (curr != NULL) {\n  next = curr->next;\n  curr->next = prev;\n  prev = curr;\n  curr = next;\n}\nhead = prev;"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many pointers are needed to reverse a LL iteratively?",
        "options": [
          "3",
          "2",
          "1"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "match_following",
        "questionText": "Match Reverse Pointers!",
        "pairs": [
          {
            "key": "Prev",
            "value": "The new path"
          },
          {
            "key": "Curr",
            "value": "The worker"
          },
          {
            "key": "Next",
            "value": "The anchor"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The core link reversal step.",
        "codeSnippet": "curr->next = ___ ;",
        "correctAnswer": "prev"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is the #1 interview question! Complexity: O(N) time and O(1) space. A masterpiece of pointer logic! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Final head after reversal?",
        "options": [
          "The old Prev",
          "The old Head",
          "The old Next"
        ],
        "correctAnswer": "The old Prev"
      },
      {
        "type": "code_fill_in",
        "questionText": "Store the future before breaking it.",
        "codeSnippet": "next = curr->___;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Backward is the new Forward! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I flipped?\"",
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
    "title": "The Middle Nest",
    "desc": "Finding the middle of a Linked List in one pass.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Tortoise and the Hare! How to find the exact middle without counting the whole list first? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Two pointers! The SLOW bird moves one nest at a time. The FAST bird moves TWO nests. When the Fast bird hits the end, the Slow bird is at the middle! 🦜\"",
        "codeSnippet": "while(fast != NULL && fast->next != NULL) {\n  slow = slow->next;\n  fast = fast->next->next;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Relative speed of the Hare vs Tortoise?",
        "options": [
          "Hare is 2x faster",
          "Equal",
          "Hare is 10x"
        ],
        "correctAnswer": "Hare is 2x faster"
      },
      {
        "type": "match_following",
        "questionText": "Match Pace!",
        "pairs": [
          {
            "key": "Slow",
            "value": "Step 1"
          },
          {
            "key": "Fast",
            "value": "Step 2"
          },
          {
            "key": "Goal",
            "value": "Middle"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Double step for the fast bird.",
        "codeSnippet": "fast = fast->next->___ ;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time but only ONE pass. Efficient, elegant, and very bird-like! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If list has 6 nodes, where does Tortoise end?",
        "options": [
          "Node 4 (2nd middle)",
          "Node 3",
          "Node 1"
        ],
        "correctAnswer": "Node 4 (2nd middle)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Condition for the Fast bird.",
        "codeSnippet": "while (fast && fast->___)",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fly fast, find the heart! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I at the center?\"",
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
    "order": 11,
    "title": "Cycle Scouting",
    "desc": "Detecting if a Linked List has a loop (Cycle).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Infinite Loop! What if the tail of the necklace points back to an earlier nest? We would fly in circles forever! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Floyd’s Cycle-Finding Algorithm! Use the Hare and the Tortoise again. If there is a loop, the fast bird will eventually lap the slow bird and they will match! 🦜\"",
        "codeSnippet": "while (fast != NULL && fast->next != NULL) {\n  slow = slow->next;\n  fast = fast->next->next;\n  if (slow == fast) return true;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Will the pointers ever meet if there is NO cycle?",
        "options": [
          "No",
          "Yes",
          "Only with seeds"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "match_following",
        "questionText": "Match Cycle Logic!",
        "pairs": [
          {
            "key": "slow == fast",
            "value": "Loop detected"
          },
          {
            "key": "fast == NULL",
            "value": "No loop"
          },
          {
            "key": "Hare",
            "value": "Fast Pointer"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The check to confirm a cycle.",
        "codeSnippet": "if (slow ___ fast) return true;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N). Space: O(1). This is much better than keeping a map of every nest you’ve visited! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens to the Tortoise if we don't have a cycle?",
        "options": [
          "Stops at end",
          "Explodes",
          "Turns into a Hare"
        ],
        "correctAnswer": "Stops at end"
      },
      {
        "type": "code_fill_in",
        "questionText": "Fast pointer jump.",
        "codeSnippet": "fast = fast->next->___ ;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Break the circle or fly the loop! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in a loop?\"",
        "options": [
          "A loop of excellence!",
          "No.",
          "0"
        ],
        "correctAnswer": "A loop of excellence!"
      }
    ]
  },
  {
    "order": 12,
    "title": "The Mirror Chain II",
    "desc": "Reversing a Linked List (Recursive).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Magic Echo! We can reverse the chain using recursion—by asking the next bird to reverse the REST of the list first! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Base Case: return the node if it's the last one. The Step: Point your next's next to YOURSELF, then set your next to NULL! 🦜\"",
        "codeSnippet": "Node* rest = reverse(head->next);\nhead->next->next = head;\nhead->next = NULL;\nreturn rest;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the base case for recursive reversal?",
        "options": [
          "List has 0 or 1 node",
          "List has 2 nodes",
          "List is infinite"
        ],
        "correctAnswer": "List has 0 or 1 node"
      },
      {
        "type": "match_following",
        "questionText": "Match Recursive Steps!",
        "pairs": [
          {
            "key": "Base Case",
            "value": "Return head"
          },
          {
            "key": "Step",
            "value": "head->next->next = head"
          },
          {
            "key": "Clean up",
            "value": "head->next = NULL"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Make the next node point back to you.",
        "codeSnippet": "head->next->___ = head;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N) time and O(N) space (due to the recursive stack). Iterative is leaner, but recursive is more mystical! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is space complexity O(N) for recursion?",
        "options": [
          "Call stack usage",
          "Heap data",
          "More seeds"
        ],
        "correctAnswer": "Call stack usage"
      },
      {
        "type": "code_fill_in",
        "questionText": "Termination check.",
        "codeSnippet": "if (!head || !___) return head;",
        "correctAnswer": "head->next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Listen to the echo of the chain! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is recursion beautiful?\"",
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
    "order": 13,
    "title": "Merging the Streams",
    "desc": "Merging two sorted Linked Lists.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Two flocks merging perfectly! If both lists are sorted, we can build a new sorted list in one pass. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Compare the leaders of both flocks. Pick the smaller one and append it to your new chain! 🦜\"",
        "codeSnippet": "if(l1->data < l2->data) {\n  curr->next = l1; l1 = l1->next;\n} else {\n  curr->next = l2; l2 = l2->next;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of merging two sorted lists (size N and M)?",
        "options": [
          "O(N + M)",
          "O(N * M)",
          "O(log N)"
        ],
        "correctAnswer": "O(N + M)"
      },
      {
        "type": "match_following",
        "questionText": "Match Merge Roles!",
        "pairs": [
          {
            "key": "Dummy Node",
            "value": "Start of new list"
          },
          {
            "key": "Curr Pointer",
            "value": "Tail of new list"
          },
          {
            "key": "Remainder",
            "value": "Append leftovers"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Append the remaining part of L1.",
        "codeSnippet": "if (l1 != NULL) curr->next = ___ ;",
        "correctAnswer": "l1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A dummy node is a bird's best friend! It helps you start the chain without checking if the Head exists yet! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if L1=[1,3,5] and L2=[2,4]?",
        "options": [
          "[1,2,3,4,5]",
          "[1,3,5,2,4]",
          "Error"
        ],
        "correctAnswer": "[1,2,3,4,5]"
      },
      {
        "type": "code_fill_in",
        "questionText": "Advance the merge pointer.",
        "codeSnippet": "curr = curr->___ ;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Two flows, one river! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are we merged?\"",
        "options": [
          "Perfectly balanced!",
          "No.",
          "0"
        ],
        "correctAnswer": "Perfectly balanced!"
      }
    ]
  },
  {
    "order": 14,
    "title": "The Doubly Nest",
    "desc": "Introduction to Doubly Linked Lists.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Looking Backward! A Doubly Linked List has two maps: NEXT and PREV. Every bird knows who is ahead AND who is behind! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This makes deletion at any node O(1) if you have the node pointer! No more searching for the precursor! 🦜\"",
        "codeSnippet": "struct Node {\n  int data;\n  Node* next;\n  Node* prev;\n};"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many pointers does a Doubly Linked List node have?",
        "options": [
          "2",
          "1",
          "3"
        ],
        "correctAnswer": "2"
      },
      {
        "type": "match_following",
        "questionText": "Match DLL Pointers!",
        "pairs": [
          {
            "key": "Next",
            "value": "Ahead"
          },
          {
            "key": "Prev",
            "value": "Behind"
          },
          {
            "key": "Head->Prev",
            "value": "NULL"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Backtrack to previous node.",
        "codeSnippet": "temp = temp ___ ;",
        "correctAnswer": "->prev"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The cost? More memory for the extra maps and more care when changing the links! Double the maps, double the work! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which is an advantage of DLL over SLL?",
        "options": [
          "Bidirectional traversal",
          "Less memory",
          "Faster Search"
        ],
        "correctAnswer": "Bidirectional traversal"
      },
      {
        "type": "code_fill_in",
        "questionText": "Link the new node backward.",
        "codeSnippet": "newNode->prev = ___ ;",
        "correctAnswer": "temp"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Eyes in the back of your head! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can I fly backward?\"",
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
    "title": "The Circular Chain",
    "desc": "Introduction to Circular Linked Lists.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Ouroboros! In a Circular list, the Tail points back to the Head. The necklace never ends! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"When traversing, stop when you reach the Head again, not NULL! 🦜\"",
        "codeSnippet": "do {\n  cout << temp->data;\n  temp = temp->next;\n} while(temp != head);"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the next of the tail in a Circular Linked List?",
        "options": [
          "Head",
          "NULL",
          "Random node"
        ],
        "correctAnswer": "Head"
      },
      {
        "type": "match_following",
        "questionText": "Match Circular Logic!",
        "pairs": [
          {
            "key": "Traversal",
            "value": "do-while loop"
          },
          {
            "key": "Termination",
            "value": "temp == head"
          },
          {
            "key": "Linkage",
            "value": "Infinite chain"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check for the end of a circular traversal.",
        "codeSnippet": "while (curr ___ head)",
        "correctAnswer": "!="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Used for round-robin scheduling where every bird gets a turn in order. Fair and circular! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does a Circular List have a NULL pointer?",
        "options": [
          "No",
          "Yes",
          "Depends on seeds"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Point the tail back.",
        "codeSnippet": "tail->next = ___;",
        "correctAnswer": "head"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The wheel turns! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I going in circles?\"",
        "options": [
          "The circle of life!",
          "No.",
          "0"
        ],
        "correctAnswer": "The circle of life!"
      }
    ]
  },
  {
    "order": 16,
    "title": "Removing Duplicates (Sorted)",
    "desc": "Cleaning a sorted list of redundant nodes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Duplicate Alert! In a sorted flock, if two neighboring nests have the same seeds, delete one! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If `curr->data == curr->next->data`, then `curr->next = curr->next->next`! 🦜\"",
        "codeSnippet": "if (curr->data == curr->next->data) {\n  Node* nextNext = curr->next->next;\n  delete curr->next;\n  curr->next = nextNext;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of removing duplicates from a SORTED Linked List?",
        "options": [
          "O(N)",
          "O(1)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Duplicate Cleanup!",
        "pairs": [
          {
            "key": "Neighbor match",
            "value": "Bypass link"
          },
          {
            "key": "No match",
            "value": "Move ahead"
          },
          {
            "key": "delete",
            "value": "Free bead"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Bypass the duplicate node.",
        "codeSnippet": "curr->next = curr->next->___ ;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Only one pass is needed because the duplicates are clumped together. Efficient nest management! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if list is empty?",
        "options": [
          "Return NULL",
          "Crashes",
          "Error"
        ],
        "correctAnswer": "Return NULL"
      },
      {
        "type": "code_fill_in",
        "questionText": "Verify next node exists before checking data.",
        "codeSnippet": "while (curr && curr->___)",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One seed per kind! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are there two of me?\"",
        "options": [
          "One of a kind!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "One of a kind!"
      }
    ]
  },
  {
    "order": 17,
    "title": "The N-th Bird from the End",
    "desc": "Finding the N-th node from the tail in one pass.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Looking Back! How to find the bird that is exactly 3 nests away from the Tail without counting the total first? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Two pointers! Move the FIRST bird N steps ahead. Then start the SECOND bird at the head. Move both at the same speed. When First hits NULL, Second is at the result! 🦜\"",
        "codeSnippet": "for(int i=0; i<n; i++) first = first->next;\nwhile(first != NULL) {\n  first = first->next;\n  second = second->next;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Initial gap between the two birds?",
        "options": [
          "N steps",
          "1 step",
          "0 steps"
        ],
        "correctAnswer": "N steps"
      },
      {
        "type": "match_following",
        "questionText": "Match N-th from End Logic!",
        "pairs": [
          {
            "key": "First pointer",
            "value": "The Scout"
          },
          {
            "key": "Second pointer",
            "value": "The Target"
          },
          {
            "key": "O(N)",
            "value": "One pass"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition for the shared flight.",
        "codeSnippet": "while ( scout != ___ )",
        "correctAnswer": "NULL"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a clever use of relative distance. The scout measures the lead, the second bird claims the prize! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If N=2 for [1,2,3,4,5], who is the target?",
        "options": [
          "4",
          "5",
          "3"
        ],
        "correctAnswer": "4"
      },
      {
        "type": "code_fill_in",
        "questionText": "Move bird 1 ahead N times.",
        "codeSnippet": "for(int i = 0; i < ___; i++)",
        "correctAnswer": "n"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Measuring from the tail while flying from the neck! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I at the end?\"",
        "options": [
          "Counting back!",
          "No.",
          "0"
        ],
        "correctAnswer": "Counting back!"
      }
    ]
  },
  {
    "order": 18,
    "title": "Palindrome Paths",
    "desc": "Checking if a Linked List is a palindrome.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Mirror Flock! Is the sequence of seeds same forward and backward? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Step 1: Find middle. Step 2: Reverse second half. Step 3: Compare both halves! 🦜\"",
        "codeSnippet": "slow = findMid(head);\nrev = reverse(slow);\nwhile(rev) {\n  if(head->data != rev->data) return false;\n  head = head->next; rev = rev->next;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Palindrome Linked List?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Palindrome Phases!",
        "pairs": [
          {
            "key": "Phase 1",
            "value": "Find Middle"
          },
          {
            "key": "Phase 2",
            "value": "Reverse Half"
          },
          {
            "key": "Phase 3",
            "value": "Compare"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check for data equality.",
        "codeSnippet": "if (p1->data ___ p2->data) return false;",
        "correctAnswer": "!="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(1) space if you reverse the second half in-place. Much better than a bulky stack or array! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is [1,2,2,1] a palindrome?",
        "options": [
          "Yes",
          "No",
          "If you say so"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Comparison loop end condition.",
        "codeSnippet": "while (___)",
        "correctAnswer": "right"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Symmetry in every link! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is my sequence flipped?\"",
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
    "title": "Intersection Detect",
    "desc": "Finding where two Linked Lists merge.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Shared Path! Two necklaces merging into one. Where is the first shared bead? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Offset Trick! Count lengths of both. Move the leader of the longer flock ahead by the difference. Then move both together! 🦜\"",
        "codeSnippet": "if(len1 > len2) head1 = move(head1, len1-len2);\nwhile(head1 != head2) { head1 = head1->next; head2 = head2->next; }"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for finding intersection point?",
        "options": [
          "O(N + M)",
          "O(N * M)",
          "O(log N)"
        ],
        "correctAnswer": "O(N + M)"
      },
      {
        "type": "match_following",
        "questionText": "Match Search Terms!",
        "pairs": [
          {
            "key": "Diff",
            "value": "Head start"
          },
          {
            "key": "head1 == head2",
            "value": "Intersection"
          },
          {
            "key": "Result",
            "value": "The merged node"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Move bird A if it is longer.",
        "codeSnippet": "for(int i=0; i<___; i++) headA = headA->next;",
        "correctAnswer": "diff"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The two-pointer trick (Switching heads) is even more elegant! When bird A hits NULL, start it at HeadB. When bird B hits NULL, start it at HeadA. They will meet at the merge! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Do merged lists always share the same tail?",
        "options": [
          "Yes",
          "No",
          "Depends on seeds"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Switch pointer to other head.",
        "codeSnippet": "ptrA = (ptrA == NULL) ? ___ : ptrA->next;",
        "correctAnswer": "headB"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Converging on the truth! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do our paths meet?\"",
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
    "title": "Stage 1 Graduation",
    "desc": "The Linked List Foundation Complete.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 1 COMPLETE! You have conquered the world of dynamic nodes and pointers. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Insertion, Deletion, Reversal, Cycle Detection, and Intersections. Your wings are ready for the Intermediate Deep Dive! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "SLL Node Parts?",
        "options": [
          "Data and Next",
          "Prev and Next"
        ],
        "correctAnswer": "Data and Next"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of reversing iterative?",
        "options": [
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Hare and Tortoise find?",
        "options": [
          "Middle or Cycle",
          "Last node"
        ],
        "correctAnswer": "Middle or Cycle"
      },
      {
        "type": "multiple_choice",
        "questionText": "Tail deletion complexity (Head only)?",
        "options": [
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Dummy node purpose?",
        "options": [
          "Simplifies edge cases",
          "Adds memory"
        ],
        "correctAnswer": "Simplifies edge cases"
      },
      {
        "type": "match_following",
        "questionText": "Final Foundation Match!",
        "pairs": [
          {
            "key": "Linked List",
            "value": "Dynamic!"
          },
          {
            "key": "Pico",
            "value": "Salutes!"
          },
          {
            "key": "Next",
            "value": "Intermediate!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Next, we face flattening, sorting, and cloning complex lists! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you ready to grow the chain?\"",
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
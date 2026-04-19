const stage2 = [
  {
    "order": 21,
    "title": "The Great Divide",
    "desc": "Partitioning a list around a value X.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Boundary Flight! We want to separate the flock: birds with seeds < X on the left, and everyone else on the right! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use two separate dummy heads! One for the 'Less' chain and one for the 'Greater' chain. Then link them at the end! 🦜\"",
        "codeSnippet": "while (head) {\n  if (head->val < x) { less->next = head; less = less->next; }\n  else { greater->next = head; greater = greater->next; }\n  head = head->next;\n}\ngreater->next = NULL;\nless->next = dummyGreater.next;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Main advantage of using two dummy heads for partitioning?",
        "options": [
          "Simplifies merging at the end",
          "Makes search faster",
          "Uses less memory"
        ],
        "correctAnswer": "Simplifies merging at the end"
      },
      {
        "type": "match_following",
        "questionText": "Match Partition Chains!",
        "pairs": [
          {
            "key": "Less",
            "value": "Values < X"
          },
          {
            "key": "Greater",
            "value": "Values >= X"
          },
          {
            "key": "Final step",
            "value": "Less.tail -> Greater.head"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Snap the end of the second list to prevent cycles.",
        "codeSnippet": "greater->next = ___ ;",
        "correctAnswer": "NULL"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N) time and O(1) extra space because we are just rearranging the existing nests! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is the relative order of elements preserved?",
        "options": [
          "Yes",
          "No",
          "Only if I fly fast"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Link the two lists.",
        "codeSnippet": "less->next = dummyGreater.___ ;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Separated, yet united! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I on the less side?\"",
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
    "order": 22,
    "title": "Group the Odd & Even",
    "desc": "Grouping nodes by their index (Odd index first, Even index second).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Alternating Flock! Let's group all the 1st, 3rd, 5th nests first, then all the 2nd, 4th, 6th nests! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use two pointers—ODD and EVEN. Jump through the necklace, connecting every other bead to its respective group! 🦜\"",
        "codeSnippet": "while (even && even->next) {\n  odd->next = even->next;\n  odd = odd->next;\n  even->next = odd->next;\n  even = even->next;\n}\nodd->next = evenHead;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Final step of Odd-Even grouping?",
        "options": [
          "Connect Odd Tail to Even Head",
          "Delete Even Head",
          "Reverse Odd"
        ],
        "correctAnswer": "Connect Odd Tail to Even Head"
      },
      {
        "type": "match_following",
        "questionText": "Match Group Movements!",
        "pairs": [
          {
            "key": "odd->next",
            "value": "even->next"
          },
          {
            "key": "even->next",
            "value": "odd->next"
          },
          {
            "key": "Complexity",
            "value": "O(N) time"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The jump for the even pointer.",
        "codeSnippet": "even->next = odd->___ ;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a beautiful pointer shuffle. All done in-place with O(1) extra space! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens to the Even Head pointer?",
        "options": [
          "Stored at start for final link",
          "Lost",
          "Decremented"
        ],
        "correctAnswer": "Stored at start for final link"
      },
      {
        "type": "code_fill_in",
        "questionText": "Final link code.",
        "codeSnippet": "odd->next = ___ ;",
        "correctAnswer": "evenHead"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Odd birds lead the flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I odd?\"",
        "options": [
          "Uniquely Elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "Uniquely Elite!"
      }
    ]
  },
  {
    "order": 23,
    "title": "The Circular Shift (Rotate)",
    "desc": "Rotating the Linked List to the right by K places.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Great Rotation! The tail bird becomes the head bird, and everything shifts K times! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"1: Find the length L and the tail. 2: Connect tail to head (Circular jump). 3: Travel L - (K % L) - 1 steps and break the circle! 🦜\"",
        "codeSnippet": "tail->next = head;\nk = k % len;\nfor(int i=0; i < len-k-1; i++) curr = curr->next;\nhead = curr->next;\ncurr->next = NULL;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Rotation of [1,2,3,4,5] by K=2?",
        "options": [
          "[4,5,1,2,3]",
          "[2,3,4,5,1]",
          "[4,5,1,2,3]"
        ],
        "correctAnswer": "[4,5,1,2,3]"
      },
      {
        "type": "match_following",
        "questionText": "Match Rotation Algebra!",
        "pairs": [
          {
            "key": "k % len",
            "value": "Handle large K"
          },
          {
            "key": "len - k",
            "value": "New Head distance"
          },
          {
            "key": "tail->next = head",
            "value": "Temp circle"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "How many steps to the break-point?",
        "codeSnippet": "steps = length ___ k;",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time. By making the list circular temporarily, we just need to find the new break point and the new head! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If K=10 and Length=5, what is the rotation?",
        "options": [
          "0 (No change)",
          "10",
          "5"
        ],
        "correctAnswer": "0 (No change)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Break the temporary circle.",
        "codeSnippet": "newTail->next = ___ ;",
        "correctAnswer": "NULL"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Round and round we go! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did I land in the same spot?\"",
        "options": [
          "If k % len == 0!",
          "No.",
          "0"
        ],
        "correctAnswer": "If k % len == 0!"
      }
    ]
  },
  {
    "order": 24,
    "title": "Targeting the Ghost (Nth End)",
    "desc": "Removing the N-th node from the end in one pass (Deletion Focus).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Snipping Hunt! Find the N-th bird from the end and remove it from the necklace completely! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use the Scout and Target pointers (from Unit 17), but start a PREV pointer behind the Target. When Scout hits NULL, jump PREV over Target! 🦜\"",
        "codeSnippet": "prev->next = target->next;\ndelete target;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Best way to handle deleting the Head node?",
        "options": [
          "Use a Dummy node at start",
          "Special IF check",
          "Pico cry"
        ],
        "correctAnswer": "Use a Dummy node at start"
      },
      {
        "type": "match_following",
        "questionText": "Match Pointer Roles!",
        "pairs": [
          {
            "key": "Scout",
            "value": "N steps lead"
          },
          {
            "key": "Target",
            "value": "The Victim"
          },
          {
            "key": "Dummy",
            "value": "Safety net"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Move bird 1 ahead N times.",
        "codeSnippet": "for(int i=0; i<___; i++) fast = fast->next;",
        "correctAnswer": "n"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"With a Dummy node, you never have to worry about the neck of the list being cut off. O(N) time, one pass! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If N is equal to length, who is removed?",
        "options": [
          "The Head",
          "The Tail",
          "No one"
        ],
        "correctAnswer": "The Head"
      },
      {
        "type": "code_fill_in",
        "questionText": "Connect the previous node to the next-next.",
        "codeSnippet": "p->next = p->next->___;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Snip for a cleaner flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the ghost gone?\"",
        "options": [
          "O(N) YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "O(N) YES!"
      }
    ]
  },
  {
    "order": 25,
    "title": "The Leapfrog (Swap Pairs)",
    "desc": "Swapping every two adjacent nodes in the list.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Social Swap! Every two birds trade places. [1,2,3,4] becomes [2,1,4,3]! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pointing magic! Point Dummy to Node 2, Node 2 to Node 1, and Node 1 to Node 3. Then move to the next pair! 🦜\"",
        "codeSnippet": "p->next = b; // b is node 2\na->next = b->next;\nb->next = a;\np = a;"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many total swaps for a list of 10 nodes?",
        "options": [
          "5",
          "10",
          "1"
        ],
        "correctAnswer": "5"
      },
      {
        "type": "match_following",
        "questionText": "Match Swapping sequence!",
        "pairs": [
          {
            "key": "A",
            "value": "First bird"
          },
          {
            "key": "B",
            "value": "Second bird"
          },
          {
            "key": "P",
            "value": "Previous link"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "A is Node 1, B is Node 2. Make A point to B’s successor.",
        "codeSnippet": "a->next = b->___ ;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Don't just swap the seeds (data)! Swap the nests (nodes themselves). That’s the elite way! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of swapping pairs?",
        "options": [
          "O(N)",
          "O(1)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Advance the previous pointer after a swap.",
        "codeSnippet": "prev = ___ ;",
        "correctAnswer": "a"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Two by two we trade! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did the pair swap?\"",
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
    "order": 26,
    "title": "Addition of the Birds",
    "desc": "Adding two numbers represented as Linked Lists (Reverse order).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Summator! [2,4,3] + [5,6,4] is 342 + 465 = 807. The result is [7,0,8]! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Walk through both lists. Add the digits + carry. If sum >= 10, carry = 1 and sum = sum % 10. 🦜\"",
        "codeSnippet": "sum = l1->val + l2->val + carry;\ncarry = sum / 10;\ncurr->next = new Node(sum % 10);"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the maximum carry between two digits?",
        "options": [
          "1",
          "9",
          "2"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "match_following",
        "questionText": "Match Addition Terms!",
        "pairs": [
          {
            "key": "Sum",
            "value": "l1 + l2 + carry"
          },
          {
            "key": "Digit",
            "value": "Sum % 10"
          },
          {
            "key": "Carry",
            "value": "Sum / 10"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Handle remainder l1 after l2 ends.",
        "codeSnippet": "val = (p1 != NULL) ? p1->val : ___ ;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(max(N, M)). Treat missing birds as zeros! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result of [9,9] + [1]?",
        "options": [
          "[0,0,1]",
          "[0,1]",
          "[1,0,0]"
        ],
        "correctAnswer": "[0,0,1]"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check for trailing carry at the end.",
        "codeSnippet": "if (___ > 0) curr->next = new Node(carry);",
        "correctAnswer": "carry"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Mathematics in the chain! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Does 1+1=2?\"",
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
    "order": 27,
    "title": "The Doubling Dare",
    "desc": "Multiplying a number in a Linked List by 2.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Double the seeds! [1,8,9] becomes [3,7,8] (189 * 2 = 378). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Reverse -> Double with carry -> Reverse back! Or use recursion to handle the carry from tail to head! 🦜\"",
        "codeSnippet": "int carry = doubleHelp(head);\nif (carry) { ... prepend 1 ... }"
      },
      {
        "type": "multiple_choice",
        "questionText": "If head.data = 5 and you double it, what is the new first node?",
        "options": [
          "1 (from carry)",
          "0",
          "5"
        ],
        "correctAnswer": "1 (from carry)"
      },
      {
        "type": "match_following",
        "questionText": "Match Doubling Rules!",
        "pairs": [
          {
            "key": "Digit",
            "value": "(val*2 + carry) % 10"
          },
          {
            "key": "Carry",
            "value": "(val*2 + carry) / 10"
          },
          {
            "key": "Prepend 1",
            "value": "Carry at Head"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Prepend a carry digit at the neck.",
        "codeSnippet": "newNode->next = head; ___ = newNode;",
        "correctAnswer": "head"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N) time. The reverse-double-reverse method is easiest, but solving in one pass with recursion is the high-flyer way! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result for [9]?",
        "options": [
          "[1,8]",
          "[18]",
          "[8,1]"
        ],
        "correctAnswer": "[1,8]"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive carry update.",
        "codeSnippet": "int carry = (node->val * 2 + ___) / 10;",
        "correctAnswer": "subCarry"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Double or nothing! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I double elite?\"",
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
    "order": 28,
    "title": "Island Chains (Components)",
    "desc": "Counting connected components of a subset in a Linked List.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Archipelago! Given a set G, find how many consecutive chains of nodes from G exist in the necklace! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A component starts if current data is in G AND (it's the head OR the previous node was NOT in G)! 🦜\"",
        "codeSnippet": "if (s.count(curr->val) && (prev == NULL || !s.count(prev->val))) count++;"
      },
      {
        "type": "multiple_choice",
        "questionText": "List: 0->1->2->3, G={0,1,3}. How many components?",
        "options": [
          "2 ({0,1} and {3})",
          "3",
          "1"
        ],
        "correctAnswer": "2 ({0,1} and {3})"
      },
      {
        "type": "match_following",
        "questionText": "Match Component Logic!",
        "pairs": [
          {
            "key": "In G",
            "value": "Potential member"
          },
          {
            "key": "Start",
            "value": "Prev not in G"
          },
          {
            "key": "Total",
            "value": "Isolated chains"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if current node value is in set `s`.",
        "codeSnippet": "if (s.find(curr->val) ___ s.end())",
        "correctAnswer": "!="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N) using a Hash Set for G. Just look for the transitions between 'In G' and 'Out of G'! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If G={all nodes}, how many components?",
        "options": [
          "1",
          "N",
          "0"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "code_fill_in",
        "questionText": "Increment component count.",
        "codeSnippet": "if (inG && !prevInG) ___ ;",
        "correctAnswer": "count++"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Islands in the necklace-sea! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I an island?\"",
        "options": [
          "A continent of wisdom!",
          "No.",
          "0"
        ],
        "correctAnswer": "A continent of wisdom!"
      }
    ]
  },
  {
    "order": 29,
    "title": "Flattening the Levels",
    "desc": "Flattening a multilevel Doubly Linked List with Child pointers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Hierarchy! Some nests have CHILDS that point to whole new levels of necklaces. Flatten them into a single-level flight! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"DFS Strategy! When you see a child, process it before moving to your neighbor (next). Recursive or Stack based flight! 🦜\"",
        "codeSnippet": "if (curr->child) {\n  Node* next = curr->next;\n  curr->next = flatten(curr->child);\n  // connect back-links and tail...\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which traversal is similar to flattening a multilevel list?",
        "options": [
          "Depth-First Search (DFS)",
          "Breadth-First Search (BFS)",
          "Random"
        ],
        "correctAnswer": "Depth-First Search (DFS)"
      },
      {
        "type": "match_following",
        "questionText": "Match Flattening Roles!",
        "pairs": [
          {
            "key": "Child",
            "value": "Next level down"
          },
          {
            "key": "Next",
            "value": "Neighbor"
          },
          {
            "key": "Prev",
            "value": "The back-map"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Sever the child connection after flattening.",
        "codeSnippet": "curr->child = ___ ;",
        "correctAnswer": "NULL"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(Total Nodes). Keep track of the tail so you can link it back to the old neighbor! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why set `child = NULL` at the end?",
        "options": [
          "Structure becomes 1D",
          "Looks cleaner",
          "Optimization"
        ],
        "correctAnswer": "Structure becomes 1D"
      },
      {
        "type": "code_fill_in",
        "questionText": "Link child head to current node.",
        "codeSnippet": "newNode->prev = ___ ;",
        "correctAnswer": "curr"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One level, one flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the world flat?\"",
        "options": [
          "For our chain, YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "For our chain, YES!"
      }
    ]
  },
  {
    "order": 30,
    "title": "The Mid-Merge (Merge Sort I)",
    "desc": "Finding the middle for Merge Sort applications.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Divide Step! To sort a giant necklace, we must split it exactly in half. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use the Hare and Tortoise! But be careful—you need to SEVER the connection at the middle to truly split the list! 🦜\"",
        "codeSnippet": "slow = findMid(head);\nNode* secondHalf = slow->next;\nslow->next = NULL;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the first step of Merge Sort on a Linked List?",
        "options": [
          "Split the list in half",
          "Merge sorted nodes",
          "Delete all"
        ],
        "correctAnswer": "Split the list in half"
      },
      {
        "type": "match_following",
        "questionText": "Match Split Logic!",
        "pairs": [
          {
            "key": "Slow",
            "value": "Midpoint"
          },
          {
            "key": "Slow->next = NULL",
            "value": "The Break"
          },
          {
            "key": "Recurse",
            "value": "Sort both"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Pointer to the start of the 2nd half.",
        "codeSnippet": "half2 = mid->___ ;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N log N) for the whole sort. It’s the only way to sort a list efficiently! Tomorrow, we merge them back together! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you use Quick Sort on a Linked List?",
        "options": [
          "Yes (Iterative is better)",
          "No",
          "Only for arrays"
        ],
        "correctAnswer": "Yes (Iterative is better)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Terminate the first half.",
        "codeSnippet": "mid->next = ___ ;",
        "correctAnswer": "NULL"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Splitting to conquer! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a divider?\"",
        "options": [
          "A conqueror!",
          "No.",
          "0"
        ],
        "correctAnswer": "A conqueror!"
      }
    ]
  },
  {
    "order": 31,
    "title": "Merge Sort Mastery",
    "desc": "Sorting a Linked List in O(N log N) time.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Grand Merger! Combine the power of splitting (Unit 30) and merging (Unit 13) to sort the whole list! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recurse until you have single nests, then merge them back together in perfect order. 🦜\"",
        "codeSnippet": "Node* mid = findMid(head);\nNode* left = mergeSort(head);\nNode* right = mergeSort(mid);\nreturn merge(left, right);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of Merge Sort on a Linked List?",
        "options": [
          "O(N log N)",
          "O(N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Sorting Steps!",
        "pairs": [
          {
            "key": "Divide",
            "value": "Find Mid and Split"
          },
          {
            "key": "Conquer",
            "value": "Recursive sort"
          },
          {
            "key": "Combine",
            "value": "Merge sorted lists"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Recursive base case return.",
        "codeSnippet": "if (!head || !head->next) return ___ ;",
        "correctAnswer": "head"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Space Complexity: O(log N) due to the call stack. This is the gold standard for sorting dynamic lists! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is Merge Sort preferred over Quick Sort for Linked Lists?",
        "options": [
          "No O(1) random access needed",
          "Faster pivots",
          "Pico likes merges"
        ],
        "correctAnswer": "No O(1) random access needed"
      },
      {
        "type": "code_fill_in",
        "questionText": "Merge the two sorted halves.",
        "codeSnippet": "return ___(h1, h2);",
        "correctAnswer": "merge"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Ordered flight, ordered mind! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I sorted?\"",
        "options": [
          "Perfectly arranged!",
          "No.",
          "0"
        ],
        "correctAnswer": "Perfectly arranged!"
      }
    ]
  },
  {
    "order": 32,
    "title": "The Deep Clone",
    "desc": "Cloning a Linked List with Next and RANDOM pointers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Doppelganger! Some nests have two maps: one to the next bird, and one to a RANDOM bird in the forest. How to copy the whole thing? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Step 1: Create a copy of each node and wedge it between the original and its next. 2: Set the copy's random pointer. 3: Extract the copy! 🦜\"",
        "codeSnippet": "newNode->random = curr->random->next;\ncurr->next = newNode->next;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of cloning with random pointers using the weaving method?",
        "options": [
          "O(N) time and O(1) space",
          "O(N^2)",
          "O(N) space"
        ],
        "correctAnswer": "O(N) time and O(1) space"
      },
      {
        "type": "match_following",
        "questionText": "Match Cloning Phases!",
        "pairs": [
          {
            "key": "Interweave",
            "value": "Original -> Copy -> Original"
          },
          {
            "key": "Random Step",
            "value": "copy->random = orig->random->next"
          },
          {
            "key": "Detach",
            "value": "Separate the chains"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Link the copy’s random pointer.",
        "codeSnippet": "curr->next->random = curr->random ___ next ;",
        "correctAnswer": "->"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"By weaving the copies INTO the original list, you don't need a Hash Map to find the new node addresses. Clever, right? 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you solve this with a Hash Map?",
        "options": [
          "Yes (O(N) space)",
          "No",
          "Only for arrays"
        ],
        "correctAnswer": "Yes (O(N) space)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Restore the original list next pointer.",
        "codeSnippet": "curr->next = ___ ;",
        "correctAnswer": "copy->next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Double the world, double the fun! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is there another me?\"",
        "options": [
          "A perfect replica!",
          "No.",
          "0"
        ],
        "correctAnswer": "A perfect replica!"
      }
    ]
  },
  {
    "order": 33,
    "title": "Spiral Order (Matrix-Link)",
    "desc": "Converting a Linked List into a spiral 2D matrix.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Vortex! Fill a matrix row-by-row, column-by-column in a spiral using seeds from your necklace. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use four boundaries: TOP, BOTTOM, LEFT, RIGHT. Fill each wall, then shrink the boundary! 🦜\"",
        "codeSnippet": "for(int j=left; j<=right && head; j++) matrix[top][j] = head->val;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Boundary change after filling the Top row?",
        "options": [
          "Top++",
          "Bottom--",
          "Left++"
        ],
        "correctAnswer": "Top++"
      },
      {
        "type": "match_following",
        "questionText": "Match Spiral Walls!",
        "pairs": [
          {
            "key": "Top",
            "value": "Left to Right"
          },
          {
            "key": "Right",
            "value": "Top to Bottom"
          },
          {
            "key": "Bottom",
            "value": "Right to Left"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if the list still has birds before filling.",
        "codeSnippet": "while (___ && top <= bottom)",
        "correctAnswer": "head"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If the flock runs out before the matrix is full, fill the rest with -1. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of filling an M x N matrix from a list?",
        "options": [
          "O(M * N)",
          "O(Length)",
          "O(1)"
        ],
        "correctAnswer": "O(M * N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Shrink the Right boundary.",
        "codeSnippet": "right ___ ;",
        "correctAnswer": "--"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Spiral into mastery! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I dizzy?\"",
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
    "order": 34,
    "title": "Intersection Detect (II)",
    "desc": "Finding where a cycle begins in a Linked List.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Loop Origin! We know there is a cycle (Unit 11), but where exactly does the tail bite the neck? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Step 1: Hare and Tortoise meet. Step 2: Start a new bird at the Head. Move both (Slow bird and Head bird) one step at a time. They will meet at the start! 🦜\"",
        "codeSnippet": "while (entry != slow) {\n  entry = entry->next;\n  slow = slow->next;\n}\nreturn entry;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Where does the cycle begin if the fast bird and slow bird meet for the first time?",
        "options": [
          "Depends on list structure",
          "At the meeting point",
          "At the head"
        ],
        "correctAnswer": "Depends on list structure"
      },
      {
        "type": "match_following",
        "questionText": "Match Cycle Detection!",
        "pairs": [
          {
            "key": "Ph 1",
            "value": "Floyd Meeting"
          },
          {
            "key": "Ph 2",
            "value": "Start search at head"
          },
          {
            "key": "Ph 3",
            "value": "Meeting at Loop Start"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The meeting condition for the entry pointer.",
        "codeSnippet": "while (ptr1 ___ ptr2)",
        "correctAnswer": "!="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The math is elegant: Distance(Head to Start) is equal to Distance(Meeting Point to Start). Magic of the flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of finding the loop start?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize entry pointer.",
        "codeSnippet": "Node* entry = ___;",
        "correctAnswer": "head"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Find the knot in the chain! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I at the knot?\"",
        "options": [
          "Untying it now!",
          "No.",
          "0"
        ],
        "correctAnswer": "Untying it now!"
      }
    ]
  },
  {
    "order": 35,
    "title": "The Reordering Shift",
    "desc": "Reordering [1,2,3,4] into [1,4,2,3].",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Weaving Flight! Take the first, then the last, then the second, then the second to last... 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"1: Find Mid. 2: Reverse 2nd half. 3: Interleave the two halves! 🦜\"",
        "codeSnippet": "mid = findMid(head); h2 = reverse(mid->next); mid->next = NULL;\nwhile(h2) {\n  tmp1 = h1->next; tmp2 = h2->next;\n  h1->next = h2; h2->next = tmp1;\n  h1 = tmp1; h2 = tmp2;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total steps to reorder the list?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Reorder steps!",
        "pairs": [
          {
            "key": "Phase 1",
            "value": "Find Middle"
          },
          {
            "key": "Phase 2",
            "value": "Reverse Back"
          },
          {
            "key": "Phase 3",
            "value": "Interleave"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Pointer adjustment: Node A -> Node B -> Node A_next.",
        "codeSnippet": "a->next = b; b->next = ___ ;",
        "correctAnswer": "nextA"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This combines everything: traversal, middle-finding, and reversal. A true intermediate graduation test! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is O(1) extra space possible for reordering?",
        "options": [
          "Yes",
          "No",
          "Only with a stack"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Cut the list in two.",
        "codeSnippet": "mid->next = ___ ;",
        "correctAnswer": "NULL"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Woven like a perfect nest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are we interleaved?\"",
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
    "order": 36,
    "title": "Swap Nodes (K-th)",
    "desc": "Swapping the K-th node from start and K-th from end.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Symmetrical Swap! Switch the 2nd bird and the 2nd-to-last bird in a flock of 5. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use the scout/target trick to find them. Then trade their seeds! 🦜\"",
        "codeSnippet": "swap(leftNode->val, rightNode->val);"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many pointers to find both nodes in one pass?",
        "options": [
          "3 (Scout, Left, Right)",
          "1",
          "5"
        ],
        "correctAnswer": "3 (Scout, Left, Right)"
      },
      {
        "type": "match_following",
        "questionText": "Match Swap Targets!",
        "pairs": [
          {
            "key": "Left",
            "value": "K steps from start"
          },
          {
            "key": "Scout",
            "value": "K steps lead"
          },
          {
            "key": "Right",
            "value": "End-Target"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition for the K-th from start pointer.",
        "codeSnippet": "for(int i=1; i<___; i++) left = left->next;",
        "correctAnswer": "k"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Just swapping values is easy. If they ask to swap the NODES themselves, you need to handle 8 different pointer links. A nightmare for crows! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Swapping values vs Swapping nodes?",
        "options": [
          "Value swap is O(1) space",
          "Node swap is same"
        ],
        "correctAnswer": "Value swap is O(1) space"
      },
      {
        "type": "code_fill_in",
        "questionText": "Find the node at K from end.",
        "codeSnippet": "while (fast->next) { fast = fast->next; ___ = slow->next; }",
        "correctAnswer": "slow"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Trade places in the sky! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did we trade?\"",
        "options": [
          "Equal and fair!",
          "No.",
          "0"
        ],
        "correctAnswer": "Equal and fair!"
      }
    ]
  },
  {
    "order": 37,
    "title": "The LRU Cache (Intro)",
    "desc": "Using a DLL for Least Recently Used cache logic.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Elite Memory! How to remember only the most recent birds you've seen? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a Doubly Linked List! Move every bird you see to the HEAD. If too many birds occupy the nest, evict the TAIL! 🦜\"",
        "codeSnippet": "removeNode(tail); prependNode(newNode);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Where are \"Most Recently Used\" items stored in LRU DLL?",
        "options": [
          "At the Head",
          "At the Tail",
          "In the middle"
        ],
        "correctAnswer": "At the Head"
      },
      {
        "type": "match_following",
        "questionText": "Match LRU Actions!",
        "pairs": [
          {
            "key": "GET",
            "value": "Move to Head"
          },
          {
            "key": "PUT (Full)",
            "value": "Evict Tail"
          },
          {
            "key": "PUT (New)",
            "value": "Head insertion"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Evict the oldest member.",
        "codeSnippet": "deleteNode(___);",
        "correctAnswer": "tail"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(1) for both Get and Put! You also need a Hash Map to find the bird-node in constant time. A powerful combo! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use a Doubly Linked List for LRU?",
        "options": [
          "Fast removal in O(1)",
          "Faster traversal",
          "Less memory"
        ],
        "correctAnswer": "Fast removal in O(1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Link map to the new node.",
        "codeSnippet": "map[key] = ___;",
        "correctAnswer": "newNode"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Remember what matters! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in your cache?\"",
        "options": [
          "Permanent resident!",
          "No.",
          "0"
        ],
        "correctAnswer": "Permanent resident!"
      }
    ]
  },
  {
    "order": 38,
    "title": "Double Add II",
    "desc": "Adding numbers given in standard order (Head = MSB).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Natural Addition! [7,2,4,3] + [5,6,4] = 7243 + 564. Head is the most significant digit! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use two STACKS to process birds from Tail to Head, or reverse the lists first! 🦜\"",
        "codeSnippet": "while(!s1.empty() || !s2.empty() || carry) {\n  sum = (s1.top?) + (s2.top?) + carry;\n  newNode->next = head; head = newNode;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Order of processing in Stack-based addition?",
        "options": [
          "Least Significant Digit first",
          "Most Significant first",
          "Random"
        ],
        "correctAnswer": "Least Significant Digit first"
      },
      {
        "type": "match_following",
        "questionText": "Match Stack logic!",
        "pairs": [
          {
            "key": "Push",
            "value": "Head to Tail"
          },
          {
            "key": "Pop",
            "value": "Tail to Head"
          },
          {
            "key": "Result",
            "value": "New Head Prepend"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The carry calculation.",
        "codeSnippet": "carry = sum ___ 10;",
        "correctAnswer": "/"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"By using stacks, we reverse the ORDER without reversing the nodes themselves. O(N) time, O(N) space! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Total length of [9,9] + [1]?",
        "options": [
          "3 ([1,0,0])",
          "2",
          "4"
        ],
        "correctAnswer": "3 ([1,0,0])"
      },
      {
        "type": "code_fill_in",
        "questionText": "Empty stack check.",
        "codeSnippet": "if (!s1.empty()) { sum += s1.___(); s1.pop(); }",
        "correctAnswer": "top"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Adding from the end, looking from the start! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I significant?\"",
        "options": [
          "The MOST!",
          "No.",
          "0"
        ],
        "correctAnswer": "The MOST!"
      }
    ]
  },
  {
    "order": 39,
    "title": "The Delete Trick",
    "desc": "Deleting a node without having the Head pointer.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Ghost Deletion! I give you a bird, but I don't show you the Head of the flock. Can you delete it? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"YES! Step 1: Copy the data from the NEXT bird into your current bird. Step 2: Delete the Next bird! 🦜\"",
        "codeSnippet": "node->val = node->next->val;\nnode->next = node->next->next;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can this trick delete the LAST node of the list?",
        "options": [
          "No",
          "Yes",
          "Pico can"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "match_following",
        "questionText": "Match Ghost logic!",
        "pairs": [
          {
            "key": "node->val",
            "value": "next->val"
          },
          {
            "key": "node->next",
            "value": "next->next"
          },
          {
            "key": "Requirement",
            "value": "Access to next"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Bypass the next duplicate node.",
        "codeSnippet": "node->next = node->next->___ ;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This essentially moves the 'soul' of the next bird into the current one, then kills the old body. Brutal bird-brain logic! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Ghost Deletion?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Copy next bird data.",
        "codeSnippet": "curr->val = curr->___->val;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Identity theft, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the next bird?\"",
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
    "order": 40,
    "title": "Stage 2 Graduation",
    "desc": "Intermediate Mastery Complete.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 2 COMPLETE! You have mastered the intermediate shuffles and weaves. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sorting, Cloning, Partitioning, and Cycles. You are a Pointer Professional! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Merge Sort complexity?",
        "options": [
          "O(N log N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Random pointer clone strategy?",
        "options": [
          "Interweave nodes",
          "Reverse the list"
        ],
        "correctAnswer": "Interweave nodes"
      },
      {
        "type": "multiple_choice",
        "questionText": "Cycle entrance meeting point?",
        "options": [
          "Head and Slow meet",
          "Hare meets fast"
        ],
        "correctAnswer": "Head and Slow meet"
      },
      {
        "type": "multiple_choice",
        "questionText": "Rotation with k > length?",
        "options": [
          "Use k % len",
          "Skip"
        ],
        "correctAnswer": "Use k % len"
      },
      {
        "type": "multiple_choice",
        "questionText": "Flattening multilevel order?",
        "options": [
          "Depth-First (Child first)",
          "Breadth-First"
        ],
        "correctAnswer": "Depth-First (Child first)"
      },
      {
        "type": "match_following",
        "questionText": "Final Intermediate Match!",
        "pairs": [
          {
            "key": "Pico",
            "value": "Salutes!"
          },
          {
            "key": "Intermediate",
            "value": "Finished!"
          },
          {
            "key": "Mastery",
            "value": "Awaits!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Next, we face the Master Stage: K-Group reversal, LRU Implementation, and the LFU King! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you ready to be a Master?\"",
        "options": [
          "SQUAWK YES!",
          "Working on it.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  }
];

module.exports = stage2;
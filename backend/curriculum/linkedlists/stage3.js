const stage3 = [
  {
    "order": 41,
    "title": "The K-Group Somersault",
    "desc": "Reversing nodes in groups of size K.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Elite Flip! We don't just reverse the whole chain. We reverse it in chunks of K! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Check if K nodes exist. If yes, reverse them. Then recursively call for the next group and connect them back! 🦜\"",
        "codeSnippet": "for(int i=0; i<k; i++) if(!curr) return head;\nNode* nextGroup = reverseKGroup(curr, k);\n// reverse current group...\nhead->next = nextGroup;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens to the last group if it has fewer than K nodes?",
        "options": [
          "Stays as is",
          "Reversed anyway",
          "Becomes NULL"
        ],
        "correctAnswer": "Stays as is"
      },
      {
        "type": "match_following",
        "questionText": "Match K-Group Logic!",
        "pairs": [
          {
            "key": "Check",
            "value": "Verify K exists"
          },
          {
            "key": "Reverse",
            "value": "Iterative flip"
          },
          {
            "key": "Link",
            "value": "Connect to next result"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Point the original head to the result of the next group.",
        "codeSnippet": "head->next = reverseKGroup(curr, ___);",
        "correctAnswer": "k"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a Google and Amazon favorite! It tests your recursion depth and your link-management skills! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Reverse K-Group?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize next pointer.",
        "codeSnippet": "next = curr->___;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Groups of gold, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in a K-group?\"",
        "options": [
          "The K-th power of elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "The K-th power of elite!"
      }
    ]
  },
  {
    "order": 42,
    "title": "The LRU Fortress",
    "desc": "Implementing a Least Recently Used Cache with DLL + Map.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Memory Vault! We need O(1) Get and Put for our cache. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A Hash Map finds the node address instantly. A Doubly Linked List keeps the order of use! 🦜\"",
        "codeSnippet": "if (map.count(key)) {\n  moveToHead(map[key]);\n  return map[key]->val;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is a Doubly Linked List required for O(1) removal?",
        "options": [
          "Can link neighbors in O(1)",
          "Faster traversal",
          "Pico likes double maps"
        ],
        "correctAnswer": "Can link neighbors in O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Cache Components!",
        "pairs": [
          {
            "key": "Map",
            "value": "O(1) Search"
          },
          {
            "key": "DLL",
            "value": "O(1) Reordering"
          },
          {
            "key": "Capacity",
            "value": "Eviction trigger"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Link neighbors together to bypass current node `n`.",
        "codeSnippet": "n->prev->next = n->___ ;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"When you access a bird, it flies to the Head. When the vault is full, the bird at the Tail (Least Recently Used) is evicted! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the time complexity of Put in an LRU?",
        "options": [
          "O(1)",
          "O(N)",
          "O(Capacity)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Eviction line.",
        "codeSnippet": "map.erase(tail->prev->___); deleteNode(tail->prev);",
        "correctAnswer": "key"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Remembering and forgetting in constant time! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the most recently used?\"",
        "options": [
          "Always at the Head!",
          "No.",
          "0"
        ],
        "correctAnswer": "Always at the Head!"
      }
    ]
  },
  {
    "order": 43,
    "title": "The LFU King",
    "desc": "Least Frequently Used Cache logic (DLL of DLLs).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Elite Filter! Evict the bird that was used the LEAST often. If there is a tie, evict the Least Recently Used! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a map of Frequency -> DLL. Every time a bird is used, its frequency increases and it flies to a HIGHER frequency necklace! 🦜\"",
        "codeSnippet": "freqMap[node->count].remove(node);\nnode->count++;\nfreqMap[node->count].add(node);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which item is evicted in LFU if all have the same frequency?",
        "options": [
          "The Least Recently Used (LRU)",
          "The Most Recently Used",
          "Randomly"
        ],
        "correctAnswer": "The Least Recently Used (LRU)"
      },
      {
        "type": "match_following",
        "questionText": "Match LFU Structures!",
        "pairs": [
          {
            "key": "Node Map",
            "value": "Key -> Node"
          },
          {
            "key": "Freq Map",
            "value": "Count -> DLL"
          },
          {
            "key": "minFreq",
            "value": "The eviction start"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update the minimum frequency tracker.",
        "codeSnippet": "if (freqMap[minFreq].isEmpty()) minFreq ___ ;",
        "correctAnswer": "++"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a God-mode structure. O(1) for everything, but very complex to maintain. Keep your links steady! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Get/Put in LFU?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Increment bird frequency.",
        "codeSnippet": "n->___++;",
        "correctAnswer": "count"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Survival of the most frequent! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"How frequent am I?\"",
        "options": [
          "Beyond calculation!",
          "Frequently elite.",
          "0"
        ],
        "correctAnswer": "Beyond calculation!"
      }
    ]
  },
  {
    "order": 44,
    "title": "The Great Merge (K-Lists)",
    "desc": "Merging K sorted Linked Lists efficiently.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Grand Convergence! K sorted flocks want to merge into one giant sorted stream. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a Min-Priority Queue (Min-Heap)! Put the head of every list into the heap. Pick the smallest, append it to your result, and push its neighbor! 🦜\"",
        "codeSnippet": "pq.push(head1); pq.push(head2);\nwhile(!pq.empty()) {\n  Node* top = pq.pop();\n  curr->next = top;\n  if(top->next) pq.push(top->next);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of merging K sorted lists of total size N?",
        "options": [
          "O(N log K)",
          "O(N * K)",
          "O(N)"
        ],
        "correctAnswer": "O(N log K)"
      },
      {
        "type": "match_following",
        "questionText": "Match Merge Terms!",
        "pairs": [
          {
            "key": "Min-Heap",
            "value": "Find smallest leader"
          },
          {
            "key": "pq.push",
            "value": "Add successor"
          },
          {
            "key": "Dummy Node",
            "value": "Result start"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Push the next bird of the winner into the heap.",
        "codeSnippet": "if (top->next) pq.push(___);",
        "correctAnswer": "top->next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The heap act as your scout, always telling you which nest to visit next. O(N log K) is the perfect flight path! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity for the priority queue?",
        "options": [
          "O(K)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(K)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize dummy head.",
        "codeSnippet": "Node* dummy = new Node(___);",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"United and sorted! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in the heap?\"",
        "options": [
          "At the top!",
          "No.",
          "0"
        ],
        "correctAnswer": "At the top!"
      }
    ]
  },
  {
    "order": 45,
    "title": "Reverse List II (Range)",
    "desc": "Reversing a portion of the Linked List from position L to R.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Specified Somersault! Reverse only nodes 2 through 4 in [1,2,3,4,5]. [1,4,3,2,5]! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Drive to L-1. Then perform a sub-reversal R-L times. Connect the neck and tail carefully! 🦜\"",
        "codeSnippet": "while (count < m) {\n  next = curr->next; curr->next = next->next;\n  next->next = prev->next; prev->next = next;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many nodes are reversed in total relative to N?",
        "options": [
          "O(R-L)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(R-L)"
      },
      {
        "type": "match_following",
        "questionText": "Match Range Steps!",
        "pairs": [
          {
            "key": "Travel",
            "value": "To index L-1"
          },
          {
            "key": "Reverse",
            "value": "R-L swaps"
          },
          {
            "key": "Connect",
            "value": "No memory lost"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Pointer to the node BEFORE the reversal range.",
        "codeSnippet": "prev = ___ ;",
        "correctAnswer": "pre"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time, O(1) space. By using one-pass link manipulation, you avoid creating a new necklace! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the role of the Dummy node here?",
        "options": [
          "Handles L=1 edge case",
          "Speeds up sort",
          "Adds luck"
        ],
        "correctAnswer": "Handles L=1 edge case"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update current bird.",
        "codeSnippet": "curr = ___ ;",
        "correctAnswer": "prev->next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Precision is perfection! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in the range?\"",
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
    "order": 46,
    "title": "Flattening the SLL",
    "desc": "Flattening a list where nodes have DOWN pointers to sorted lists.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Weighted Web! Every node has a NEXT neighbor and a DOWN neighbor. The DOWN list is also sorted! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use recursion! Flatten the next part of the map, then MERGE it with the down part! 🦜\"",
        "codeSnippet": "root->next = flatten(root->next);\nroot = merge(root, root->next);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which algorithm is essential for flattening sorted lists?",
        "options": [
          "Merge Sorted Lists",
          "Search",
          "Binary Sort"
        ],
        "correctAnswer": "Merge Sorted Lists"
      },
      {
        "type": "match_following",
        "questionText": "Match Flattening Flows!",
        "pairs": [
          {
            "key": "Next",
            "value": "Horizontal"
          },
          {
            "key": "Down",
            "value": "Vertical"
          },
          {
            "key": "Flatten",
            "value": "Recursive result"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Base case for recursive flattening.",
        "codeSnippet": "if (!root || !root->___) return root;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Result is a single vertical sorted list. Complexity: O(Total_Nodes), as we visit everyone! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is the final list sorted?",
        "options": [
          "Yes!",
          "No",
          "If Pico wants"
        ],
        "correctAnswer": "Yes!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Merge root with its horizontal counterpart.",
        "codeSnippet": "return ___(root, root->next);",
        "correctAnswer": "merge"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Depth before Breadth! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I flattened?\"",
        "options": [
          "Horizontal excellence!",
          "No.",
          "0"
        ],
        "correctAnswer": "Horizontal excellence!"
      }
    ]
  },
  {
    "order": 47,
    "title": "Sort and Detect",
    "desc": "Detecting if a list is sorted AND checking for complex cycles.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Healthy Flock check! Is the necklace sorted? And does it have any secret hidden loops? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sorted: `curr->val <= curr->next->val` for all. Cycles: Hare and Tortoise. Combine them in one pass! 🦜\"",
        "codeSnippet": "if (p->val > p->next->val) isSorted = false;\nif (slow == fast) hasLoop = true;"
      },
      {
        "type": "multiple_choice",
        "questionText": "If a list is SORTED and CIRCULAR, what is the connection?",
        "options": [
          "Tail connects to Head",
          "Tail points to NULL",
          "Sorted lists cannot loop"
        ],
        "correctAnswer": "Tail connects to Head"
      },
      {
        "type": "match_following",
        "questionText": "Match Validator Rules!",
        "pairs": [
          {
            "key": "Sorted",
            "value": "O(N) data check"
          },
          {
            "key": "Cycle",
            "value": "O(N) address check"
          },
          {
            "key": "Healthy",
            "value": "Both true"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check for sorted violation.",
        "codeSnippet": "if (curr->val ___ curr->next->val) return false;",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a basic sanity check for list-based data pipelines. Keep the flock safe! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of combined check?",
        "options": [
          "O(N)",
          "O(1)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Hare step.",
        "codeSnippet": "fast = fast->next->___ ;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stay straight, fly circular! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I healthy?\"",
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
    "order": 48,
    "title": "Browser History Master",
    "desc": "Designing a browser history using a Doubly Linked List.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Web Surfing! Back and Forward buttons. Every URL is a nest in a Doubly Linked List! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"VISIT: Create new node, cut all future history. BACK: Move pointer back. FORWARD: Move pointer ahead! 🦜\"",
        "codeSnippet": "curr->next = new Node(url); curr->next->prev = curr;\ncurr = curr->next;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is DLL better than a simple array for browser history?",
        "options": [
          "Easily delete future history on visit",
          "Uses less space",
          "Pico likes colons"
        ],
        "correctAnswer": "Easily delete future history on visit"
      },
      {
        "type": "match_following",
        "questionText": "Match Nav Actions!",
        "pairs": [
          {
            "key": "Visit",
            "value": "Nuke current->next"
          },
          {
            "key": "Back",
            "value": "Pointer = prev"
          },
          {
            "key": "Forward",
            "value": "Pointer = next"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Stop at the beginning of history.",
        "codeSnippet": "while (steps > 0 && curr->___ != NULL)",
        "correctAnswer": "prev"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(Steps) for move, O(1) for visit. This is how Chrome and Safari remember your flight path! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of visiting a new page?",
        "options": [
          "O(1)",
          "O(N)",
          "O(Steps)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Move forward K steps.",
        "codeSnippet": "while (k-- > 0 && curr->___)",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Navigate with wisdom! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did I go back?\"",
        "options": [
          "Back to the future!",
          "No.",
          "0"
        ],
        "correctAnswer": "Back to the future!"
      }
    ]
  },
  {
    "order": 49,
    "title": "The Skip List (Intro)",
    "desc": "Faster search in Linked Lists using probability layers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Elite Shortcut! What if some birds could jump 5 nests at once, while others jump 10? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A Skip List has layers of pointers. The top layers jump far! It gives you O(log N) search on a Linked List! 🦜\"",
        "codeSnippet": "while (curr->next->val < target) curr = curr->next;\ncurr = curr->down;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Average search complexity of a Skip List?",
        "options": [
          "O(log N)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Skip Layers!",
        "pairs": [
          {
            "key": "Layer 0",
            "value": "All nodes"
          },
          {
            "key": "Higher Layers",
            "value": "Shortcuts"
          },
          {
            "key": "Coin Flip",
            "value": "Promotion"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Move down to the next level.",
        "codeSnippet": "curr = curr->___ ;",
        "correctAnswer": "down"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It uses random coin flips to decide which birds get promoted to the fast-jump layer. A probabilistic miracle! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is a skip list easier to implement than a balanced BST?",
        "options": [
          "Yes",
          "No",
          "Depends on seeds"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check next jump value.",
        "codeSnippet": "if (next->val ___ target) moveAhead();",
        "correctAnswer": "<"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Skipping for speed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I skipping?\"",
        "options": [
          "Always leaping ahead!",
          "No.",
          "0"
        ],
        "correctAnswer": "Always leaping ahead!"
      }
    ]
  },
  {
    "order": 50,
    "title": "The Master Point",
    "desc": "Reflecting on the Master Stage.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"MASTER STAGE HALFWAY! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"K-Groups, LRU/LFU Fortresses, and Skip Lists. You are becoming a Pointer GOD. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for LRU Put?",
        "options": [
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "multiple_choice",
        "questionText": "LFU Tie-breaker logic?",
        "options": [
          "Use LRU",
          "Random"
        ],
        "correctAnswer": "Use LRU"
      },
      {
        "type": "multiple_choice",
        "questionText": "Merging K lists complexity?",
        "options": [
          "O(N log K)",
          "O(NK)"
        ],
        "correctAnswer": "O(N log K)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Ghost deletion complexity?",
        "options": [
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Skip List search time?",
        "options": [
          "O(log N)",
          "O(N)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "match_following",
        "questionText": "Master Pivot Match!",
        "pairs": [
          {
            "key": "Pointers",
            "value": "Solid!"
          },
          {
            "key": "Caches",
            "value": "Optimized!"
          },
          {
            "key": "Pico",
            "value": "Amazed!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Final 10 units of Linked Lists: XOR Lists, Splitters, and the Ultimate Graduation! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you ready for the final stretch?\"",
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
    "order": 51,
    "title": "The XOR Nest (Memory Save)",
    "desc": "Designing a Doubly Linked List with only ONE pointer field.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Memory Thief! What if we could have a Doubly Linked List (Back and Forward) using the space of only ONE pointer? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use the XOR operation! `node->next_prev = prev ^ next`. If you know where you came from, you can XOR your way to where you are going! 🦜\"",
        "codeSnippet": "next = prev ^ curr->npx;\nprev = curr;\ncurr = next;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does the `npx` field store in an XOR list?",
        "options": [
          "XOR of prev and next addresses",
          "Sum of data",
          "Random number"
        ],
        "correctAnswer": "XOR of prev and next addresses"
      },
      {
        "type": "match_following",
        "questionText": "Match XOR Logic!",
        "pairs": [
          {
            "key": "Start",
            "value": "0 ^ next"
          },
          {
            "key": "Mid",
            "value": "prev ^ next"
          },
          {
            "key": "Space",
            "value": "50% saved"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "XOR current address with next to get previous.",
        "codeSnippet": "prev = curr ^ next_prev_ptr ___ ;",
        "correctAnswer": "^"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a bit-manipulator’s dream. It’s not possible in high-level languages like Java or Python because they don’t let birds play with raw memory addresses! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is XOR list common in modern production apps?",
        "options": [
          "No (Hard to debug/GC)",
          "Yes (Everywhere)",
          "Only for Pico"
        ],
        "correctAnswer": "No (Hard to debug/GC)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Calculate next address.",
        "codeSnippet": "next = ___ ^ curr->npx;",
        "correctAnswer": "prev"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bit-level magic! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can you see my pointers?\"",
        "options": [
          "Encrypted in logic!",
          "No.",
          "0"
        ],
        "correctAnswer": "Encrypted in logic!"
      }
    ]
  },
  {
    "order": 52,
    "title": "The Prime Splitter",
    "desc": "Splitting a Linked List into K parts as evenly as possible.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Distributing the Flock! Split a list of N nodes into K equal-ish parts. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"1: Find Length. 2: Width = L / K. Remainder = L % K. The first 'Remainder' parts get an extra bird! 🦜\"",
        "codeSnippet": "int width = len / k, rem = len % k;\nfor(int i=0; i<k; i++) {\n  int currentWidth = width + (i < rem ? 1 : 0);\n  // cut list...\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "If Len=10 and K=3, what are the part sizes?",
        "options": [
          "4, 3, 3",
          "3, 3, 4",
          "3, 3, 3"
        ],
        "correctAnswer": "4, 3, 3"
      },
      {
        "type": "match_following",
        "questionText": "Match Splitting math!",
        "pairs": [
          {
            "key": "Width",
            "value": "len / k"
          },
          {
            "key": "Remainder",
            "value": "len % k"
          },
          {
            "key": "Pointer",
            "value": "NULL at cut"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition to give extra bird to early parts.",
        "codeSnippet": "currentWidth = width + (i < ___ ? 1 : 0);",
        "correctAnswer": "rem"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N). Each list becomes a separate colony in your result array! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if K is larger than Len?",
        "options": [
          "Some parts will be NULL",
          "Error",
          "Add dummy nodes"
        ],
        "correctAnswer": "Some parts will be NULL"
      },
      {
        "type": "code_fill_in",
        "questionText": "Cut the list link.",
        "codeSnippet": "prev->next = ___ ;",
        "correctAnswer": "NULL"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Shared fairly! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are we even?\"",
        "options": [
          "Bird-math says YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "Bird-math says YES!"
      }
    ]
  },
  {
    "order": 3,
    "title": "The Self-Organizing List",
    "desc": "Implementing a list that moves accessed nodes to the front.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Evolutionary Chain! Move every bird you visit to the Head so it's faster to find next time. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a heuristic. Over time, the most popular birds gather at the start of the necklace! 🦜\"",
        "codeSnippet": "if (curr->data == key) {\n  prev->next = curr->next;\n  curr->next = head;\n  head = curr;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which strategy moves the node one step closer each visit?",
        "options": [
          "Transpose",
          "Move-to-Front",
          "Delete"
        ],
        "correctAnswer": "Transpose"
      },
      {
        "type": "match_following",
        "questionText": "Match Self-Org Strategies!",
        "pairs": [
          {
            "key": "Move-to-Front",
            "value": "Jump to Head"
          },
          {
            "key": "Transpose",
            "value": "Swap with prev"
          },
          {
            "key": "Efficiency",
            "value": "Search time O(1) avg"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Bypass the found node to move it elsewhere.",
        "codeSnippet": "prev->next = curr->___ ;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Used in databases and caches to optimize search paths without heavy indices. A living structure! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Move-to-Front in SLL?",
        "options": [
          "O(Search_Time)",
          "O(1)",
          "O(N^2)"
        ],
        "correctAnswer": "O(Search_Time)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Set head pointer.",
        "codeSnippet": "head = ___ ;",
        "correctAnswer": "curr"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Adapting for speed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did I move up?\"",
        "options": [
          "Rising to the top!",
          "No.",
          "0"
        ],
        "correctAnswer": "Rising to the top!"
      }
    ]
  },
  {
    "order": 4,
    "title": "Cycle De-knotting",
    "desc": "Breaking a cycle in a Linked List.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Knot Snip! You found the cycle start (Unit 34). Now, how to set it free? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"1: Find start of cycle. 2: Travel from start around the loop until you hit the node pointing BACK to start. 3: Set its next to NULL! 🦜\"",
        "codeSnippet": "while (ptr->next != loopStart) ptr = ptr->next;\nptr->next = NULL;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if you don't break the cycle before deleting the list?",
        "options": [
          "Infinite loop or memory leak",
          "Nothing",
          "Automatic fix"
        ],
        "correctAnswer": "Infinite loop or memory leak"
      },
      {
        "type": "match_following",
        "questionText": "Match Snip Phases!",
        "pairs": [
          {
            "key": "Step 1",
            "value": "Find Loop Start"
          },
          {
            "key": "Step 2",
            "value": "Identify Tail"
          },
          {
            "key": "Step 3",
            "value": "Set next to NULL"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The break-point condition.",
        "codeSnippet": "while (curr->next != ___) curr = curr->next;",
        "correctAnswer": "loopStart"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N). Breaking cycles is vital for safety in the bird woods! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a list have multiple cycles?",
        "options": [
          "One start, but multiple reachable nodes",
          "No",
          "0"
        ],
        "correctAnswer": "One start, but multiple reachable nodes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Free the tail.",
        "codeSnippet": "tail->next = ___ ;",
        "correctAnswer": "NULL"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Free at last! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I straight now?\"",
        "options": [
          "Linear and elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "Linear and elite!"
      }
    ]
  },
  {
    "order": 5,
    "title": "The Swap Nodes Revisit",
    "desc": "Swapping values of nodes without changing pointers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Value Trade! Sometimes swapping the actual nests is too hard. Just trade the seeds! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Easy for integers, but be careful with giant objects. Copying can be slow! 🦜\"",
        "codeSnippet": "int temp = node1->val;\nnode1->val = node2->val;\nnode2->val = temp;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of value swapping?",
        "options": [
          "O(1)",
          "O(N)",
          "O(Data_Size)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Trade logic!",
        "pairs": [
          {
            "key": "Temp",
            "value": "Safe storage"
          },
          {
            "key": "A = B",
            "value": "Overwrite"
          },
          {
            "key": "B = Temp",
            "value": "Complete trade"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Swap function call.",
        "codeSnippet": "swap(node1->___, node2->val);",
        "correctAnswer": "val"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Values are temporary, pointers are forever! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is value swapping better than node swapping?",
        "options": [
          "Depends (Data size vs Link complexity)",
          "Always yes",
          "Always no"
        ],
        "correctAnswer": "Depends (Data size vs Link complexity)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Copy data.",
        "codeSnippet": "node1->val = node2->___;",
        "correctAnswer": "val"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Trading secrets! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did we trade?\"",
        "options": [
          "Mirror images!",
          "No.",
          "0"
        ],
        "correctAnswer": "Mirror images!"
      }
    ]
  },
  {
    "order": 56,
    "title": "The Constant Deletion",
    "desc": "Advanced: Deleting nodes in O(1) with pointers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Ultimate Efficiency! In a Doubly Linked List, deletion is O(1) if you have the pointer. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"In SLL, deletion is O(1) only via the 'Ghost' trick (Unit 39). 🦜\"",
        "codeSnippet": "p->prev->next = p->next;\np->next->prev = p->prev;\ndelete p;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Deletion complexity in DLL given pointer?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Fast Deletion!",
        "pairs": [
          {
            "key": "DLL",
            "value": "Actual O(1)"
          },
          {
            "key": "SLL",
            "value": "Shadow O(1)"
          },
          {
            "key": "Requirements",
            "value": "Pointers"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Link the back bird to the front bird.",
        "codeSnippet": "p->prev->next = p->___ ;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Keep your maps updated, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is SLL deletion usually O(N)?",
        "options": [
          "Need to find precursor",
          "Need to find head",
          "Too fast"
        ],
        "correctAnswer": "Need to find precursor"
      },
      {
        "type": "code_fill_in",
        "questionText": "Cleanup step.",
        "codeSnippet": "delete ___ ;",
        "correctAnswer": "p"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Quick and clean! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I gone?\"",
        "options": [
          "O(1) vanish!",
          "No.",
          "0"
        ],
        "correctAnswer": "O(1) vanish!"
      }
    ]
  },
  {
    "order": 57,
    "title": "The Zig-Zag Path",
    "desc": "Formatting a Linked List into Wave/Zig-Zag form.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pico’s Wave! [1,2,3,4] into [1 < 3 > 2 < 4]. Nodes should be a < b > c < d... 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One pass! If index is even and data > next, SWAP. If index is odd and data < next, SWAP! 🦜\"",
        "codeSnippet": "if (i%2 == 0 && p->val > p->next->val) swap(p, p->next);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Zig-Zag formatting?",
        "options": [
          "O(N)",
          "O(1)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Wave Rules!",
        "pairs": [
          {
            "key": "Even Index",
            "value": "Current < Next"
          },
          {
            "key": "Odd Index",
            "value": "Current > Next"
          },
          {
            "key": "Action",
            "value": "O(N) Swap"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Swap condition for odd peak.",
        "codeSnippet": "if (flag && p->val ___ p->next->val) swap(...);",
        "correctAnswer": "<"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a great variation of the wave array problem. Pure pointer manipulation mastery! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is the final list sorted?",
        "options": [
          "No",
          "Yes",
          "Pico likes sorting"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Toggle flag for wave.",
        "codeSnippet": "flag = ___ ;",
        "correctAnswer": "!flag"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Ride the wave! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I zig-zagging?\"",
        "options": [
          "Peak and valley!",
          "No.",
          "0"
        ],
        "correctAnswer": "Peak and valley!"
      }
    ]
  },
  {
    "order": 8,
    "title": "The Split-Merge Revisit",
    "desc": "Advanced: Splitting two circular lists.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Circular Divide! A giant circular necklace split into two smaller circular necklaces. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"1: Find Mid. 2: Set head2 = mid->next. 3: head2->tail = head2. 4: head1->tail = head1. 🦜\"",
        "codeSnippet": "mid = findMid(head);\nhead2 = mid->next;\ntail2->next = head2;\nmid->next = head1;"
      },
      {
        "type": "multiple_choice",
        "questionText": "If total nodes = 5, what are the sizes of the two split circular lists?",
        "options": [
          "3 and 2",
          "2 and 3",
          "1 and 4"
        ],
        "correctAnswer": "3 and 2"
      },
      {
        "type": "match_following",
        "questionText": "Match Circular Split!",
        "pairs": [
          {
            "key": "Mid",
            "value": "Break point"
          },
          {
            "key": "head2",
            "value": "mid->next"
          },
          {
            "key": "New Tail",
            "value": "Point to its own head"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Point head2’s tail back to head2.",
        "codeSnippet": "fast->next = ___ ;",
        "correctAnswer": "slow->next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Essentially finding the middle and then closing the loops on both halves. O(N) time! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Initial setup for slow/fast pointers in circular list?",
        "options": [
          "Both at head",
          "One at head, one at next",
          "Random"
        ],
        "correctAnswer": "Both at head"
      },
      {
        "type": "code_fill_in",
        "questionText": "Cut mid and loop back.",
        "codeSnippet": "slow->next = ___ ;",
        "correctAnswer": "head"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Two new loops created! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are we loops?\"",
        "options": [
          "Twice the fun!",
          "No.",
          "0"
        ],
        "correctAnswer": "Twice the fun!"
      }
    ]
  },
  {
    "order": 59,
    "title": "The Master Review",
    "desc": "Elite Linked List Review.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"THE ELITE STRETCH! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"XOR Lists, Circular Splitting, Multi-level Flattening, and Zig-Zags. You have seen everything in the world of Nodes! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Algorithm for O(log N) search?",
        "options": [
          "Skip List",
          "Standard LL"
        ],
        "correctAnswer": "Skip List"
      },
      {
        "type": "multiple_choice",
        "questionText": "LFU complexity?",
        "options": [
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "multiple_choice",
        "questionText": "XOR list pointer name?",
        "options": [
          "NPX",
          "Next"
        ],
        "correctAnswer": "NPX"
      },
      {
        "type": "multiple_choice",
        "questionText": "Flattening recursion type?",
        "options": [
          "Depth-First",
          "Breadth-First"
        ],
        "correctAnswer": "Depth-First"
      },
      {
        "type": "multiple_choice",
        "questionText": "Node deletion in DLL given pointer?",
        "options": [
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Master Final Match!",
        "pairs": [
          {
            "key": "Elite",
            "value": "Found!"
          },
          {
            "key": "Graduation",
            "value": "Soon!"
          },
          {
            "key": "Pico",
            "value": "Speechless!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Final unit: The Linked List Graduation! You are a God of Pointers! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you ready to graduate?\"",
        "options": [
          "SQUAWK YES!",
          "Wait...",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 60,
    "title": "Linked List Graduation",
    "desc": "The Subject Complete: God-Mode Master.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"GRADUATION DAY! You have completed all 60 units of the Linked List Academy. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"From the first Head to the XOR bit-manipulators, every link in the chain is yours. SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "LL Node definition?",
        "options": [
          "Data and Next Address",
          "Just Data"
        ],
        "correctAnswer": "Data and Next Address"
      },
      {
        "type": "multiple_choice",
        "questionText": "Search Complexity?",
        "options": [
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Reverse Iterative Space?",
        "options": [
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Loop Detection Algorithm?",
        "options": [
          "Floyd’s Cycle Find",
          "Binary Find"
        ],
        "correctAnswer": "Floyd’s Cycle Find"
      },
      {
        "type": "multiple_choice",
        "questionText": "Merge K Lists complexity?",
        "options": [
          "O(N log K)",
          "O(N)"
        ],
        "correctAnswer": "O(N log K)"
      },
      {
        "type": "multiple_choice",
        "questionText": "LRU Cache Search?",
        "options": [
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "multiple_choice",
        "questionText": "XOR List pointer?",
        "options": [
          "Next XOR Prev",
          "NULL"
        ],
        "correctAnswer": "Next XOR Prev"
      },
      {
        "type": "match_following",
        "questionText": "Subject Mastery Match!",
        "pairs": [
          {
            "key": "Subject",
            "value": "Complete!"
          },
          {
            "key": "Master",
            "value": "Found!"
          },
          {
            "key": "Next",
            "value": "STACKS & QUEUES!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Linked Lists are done. You have conquered the pointers. Next, we enter the Linear Fortress: STACKS & QUEUES! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you ready for the new fortress?\"",
        "options": [
          "SQUAWK YES!",
          "Fly high!",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  }
];

module.exports = stage3;
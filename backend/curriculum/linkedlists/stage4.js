const stage4 = [
  {
    "order": 61,
    "title": "Unit 61: XOR Linked Lists (Memory Efficient)",
    "desc": "Using bitwise logic to store two pointers in one slot.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.1] The Ghost Pointer",
        "explanation": "Ace: 'In C, memory is the ultimate resource. A standard Doubly Linked List uses 2 pointers (Prev/Next) per node. An XOR Linked List uses only ONE slot to store the XOR of Prev and Next.' Pico: 'Two birds, one nest! 🦜'",
        "codeSnippet": "struct Node {\n  int data;\n  struct Node* npx; /* XOR of next and prev */\n};",
        "encouragementText": "Ace: 'Constraint is the father of creative architecture.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do you calculate the Next pointer using the current node and the Previous pointer?",
        "options": ["current->npx + prev", "current->npx ^ prev", "current->npx - prev", "Pico rule"],
        "correctAnswer": "current->npx ^ prev",
        "explanation": "Because (Prev ^ Next) ^ Prev equals Next. XOR is its own inverse!"
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Traversing XOR Lists",
        "explanation": "Ace: 'To walk the list, you MUST keep track of the address of the previous node. If you lose the previous address, you cannot decrypt the NPX of the current node.' Pico: 'Don't forget where you came from! 🦜'",
        "encouragementText": "Pico: 'Watch your step! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Initializing the NPX of a new head node (Prev is NULL).",
        "codeSnippet": "new_node->npx = NULL ^ ___ ;",
        "correctAnswer": "next_node",
        "explanation": "The npx field for the head is just the address of the next node (since NULL is 0)."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Dereferencing Logic",
        "explanation": "Ace: 'In C, you cannot XOR actual pointers directly. You must cast them to `uintptr_t` first, then cast the result back to a pointer to access data.'",
        "encouragementText": "Ace: 'Casting is the bridge between values and addresses.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Main benefit of XOR Linked List?",
        "options": ["Faster search", "50% memory saving on pointers", "Easier to delete nodes", "Pico guess"],
        "correctAnswer": "50% memory saving on pointers",
        "explanation": "You store information about 2 directions in the space of 1 pointer."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The C Trap",
        "explanation": "Ace: 'Modern garbage collectors (like in Java/Python) hate XOR lists because they can't trace the obscured pointers. This is purely a low-level C optimization.'",
        "encouragementText": "Pico: 'C-power only! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Getting the Prev pointer during backward traversal.",
        "codeSnippet": "prev = current->npx ___ next;",
        "correctAnswer": "^",
        "explanation": "Symmetry! XOR results in the third component if you know any two."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Ghost Navigator",
        "explanation": "You have decoded the hidden pointers. The list is half the size, but twice the logic. Ace: 'The space is reclaimed.'",
        "encouragementText": "Pico: 'Pointers are invisible! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match XOR terms!",
        "pairs": [
          { "key": "npx", "value": "prev ^ next" },
          { "key": "uintptr_t", "value": "Pointer type for XOR" },
          { "key": "Head npx", "value": "Just next address" }
        ]
      }
    ]
  },
  {
    "order": 62,
    "title": "Unit 62: Circular Doubly Linked Lists (CDLL)",
    "desc": "The infinite loop: Closing the loop in both directions.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.2] The Ouroboros",
        "explanation": "Ace: 'A Circular Doubly Linked List connects the Tail's Next to the Head, and the Head's Prev to the Tail. It is the most flexible form of basic linked storage.' Pico: 'A loop that never ends! 🦜'",
        "codeSnippet": "head->prev = tail;\ntail->next = head;",
        "encouragementText": "Ace: 'Infinity is just a connection from the end back to the start.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In a CDLL, what is head->prev->next equal to?",
        "options": ["NULL", "Head", "Tail", "Pico rule"],
        "correctAnswer": "Head",
        "explanation": "head->prev is the Tail, and tail->next is the Head."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Insertion in CDLL",
        "explanation": "Ace: 'Inserting a new node at the head requires updating 4 pointers: the new node's prev/next, the old head's prev, and the tail's next.' Pico: '4-way handshake! 🦜'",
        "encouragementText": "Pico: 'Four birds one nest! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Setting tail->next for a new node 'N' being inserted as head.",
        "codeSnippet": "tail = head->prev;\ntail->next = ___ ;",
        "correctAnswer": "new_node",
        "explanation": "The tail must now point to the new starting node."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Deletion in CDLL",
        "explanation": "Ace: 'Deleting the last node (Tail) in an N-node CDLL is O(1) if you have a Pointer to Tail, because Tail->Prev is accessible immediately.'",
        "encouragementText": "Ace: 'Pre-calculation of the back-link is the speed of the master.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Application of CDLL?",
        "options": ["A playlist that repeats forever", "Browser tab history", "Both", "Pico guess"],
        "correctAnswer": "Both",
        "explanation": "Any scenario involving 'Next' and 'Previous' with a wrap-around feature benefit from CDLL."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Empty CDLL",
        "explanation": "Ace: 'An empty CDLL usually has `head = NULL`. A single-node CDLL points to ITSELF in both directions.'",
        "encouragementText": "Pico: 'Alone but connected! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Condition for a single-node list.",
        "codeSnippet": "if (head->next == ___ ) return true;",
        "correctAnswer": "head",
        "explanation": "If the next node is the node itself, the loop is size 1."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Loop Weaver",
        "explanation": "You have closed the circle. The end is the beginning. Ace: 'The circuit is complete.'",
        "encouragementText": "Pico: 'Infinite flight! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match CDLL properties!",
        "pairs": [
          { "key": "head->prev", "value": "Tail Address" },
          { "key": "tail->next", "value": "Head Address" },
          { "key": "Insertion", "value": "O(1) with head pointer" }
        ]
      }
    ]
  },
  {
    "order": 63,
    "title": "Unit 63: Flat Multi-level Lists",
    "desc": "Flattening nested linked structures into a single line.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.3] The Leveling",
        "explanation": "Ace: 'Imagine a list where each node has a `Next` pointer AND a `Child` pointer to another independent list. We want to flatten this into one long list.' Pico: 'Nests inside nests! 🦜'",
        "codeSnippet": "struct Node {\n  Node *next, *child;\n};",
        "encouragementText": "Ace: 'Hierarchy is just a folded line.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the best way to flatten a multi-level list such that the order is preserved level by level?",
        "options": ["Recursive DFS", "Use a Tail pointer and append children to the end of the main list (BFS-like)", "Sort it", "Pico rule"],
        "correctAnswer": "Use a Tail pointer and append children to the end of the main list (BFS-like)",
        "explanation": "By moving to the tail, we process levels sequentially."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Step Logic",
        "explanation": "Ace: '1. Maintain a `curr` and `tail` pointer. 2. If `curr` has a child, move it to `tail->next` and update `tail`. 3. Increment `curr`.' Pico: 'Walking and pulling! 🦜'",
        "encouragementText": "Pico: 'Sweep it up! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating tail after finding a child.",
        "codeSnippet": "tail->next = curr->child;\nwhile(tail->next) tail = ___ ;",
        "correctAnswer": "tail->next",
        "explanation": "Moving the tail pointer to the absolute end of the newly attached child list."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Recursive Flattening",
        "explanation": "Ace: 'If you want depth-first flattening (Child before Next), recursion is simpler, but you must be careful with pointer management of the tail.'",
        "encouragementText": "Ace: 'Order defines the structure of the flat result.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of flattening N total nodes using the tail-append method?",
        "options": ["O(N^2)", "O(N)", "O(log N)", "Pico guess"],
        "correctAnswer": "O(N)",
        "explanation": "Each node is visited and appended exactly once."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Practical use",
        "explanation": "Ace: 'This is common in document object models (DOM) or file system trees when linearizing data for storage.'",
        "encouragementText": "Pico: 'Lining up the files! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Cleaning up the child pointer after flattening.",
        "codeSnippet": "curr->child = ___ ;",
        "correctAnswer": "NULL",
        "explanation": "Once flattened, the 'vertical' child relationship is converted into a 'horizontal' next relationship."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Dimension Flattener",
        "explanation": "You have collapsed the hierarchy into a line. The vertical is now horizontal. Ace: 'The depth is bridged.'",
        "encouragementText": "Pico: 'Everything is flat! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Flattening terms!",
        "pairs": [
          { "key": "Child pointer", "value": "Vertical link" },
          { "key": "Tail pointer", "value": "Append target" },
          { "key": "O(N)", "value": "Total Flattening time" }
        ]
      }
    ]
  },
  {
    "order": 64,
    "title": "Unit 64: Skip Lists - Level Building",
    "desc": "The probabilistic fast-track: Why we stack lists on top of lists.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.4] The Express Lane",
        "explanation": "Ace: 'Search in a linked list is O(N). To speed it up, we stack layers where nodes skip over neighbors. This is a Skip List—a probabilistic alternative to BSTs.' Pico: 'Bird express lanes! 🦜'",
        "codeSnippet": "struct Node {\n  int val;\n  Node **forward; // Array of pointers for different levels\n};",
        "encouragementText": "Ace: 'Shortcuts are the geometry of speed.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How is the 'Height' of a new node decided in a Skip List?",
        "options": ["Sequentially", "Randomly (flip a coin)", "Based on prime numbers", "Pico rule"],
        "correctAnswer": "Randomly (flip a coin)",
        "explanation": "We keep increasing the level as long as we flip 'Heads', ensuring log N height on average."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Level Geometry",
        "explanation": "Ace: 'Level 0 has all nodes. Level 1 has roughly 50%. Level 2 has 25%. This power-of-2 distribution creates a hierarchy.' Pico: 'Fewer birds stay on the high branches! 🦜'",
        "encouragementText": "Pico: 'Climb high! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Random level generator function.",
        "codeSnippet": "int lvl = 0;\nwhile(rand() % 2 == 0 && lvl < MAX_LVL) ___ ;",
        "correctAnswer": "lvl++",
        "explanation": "Incrementing the node's height with each successful random 'flip'."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity check",
        "explanation": "Ace: 'With log N levels, the search complexity becomes O(log N), matching a Balanced BST, but it is much easier to implement!'",
        "encouragementText": "Ace: 'Probabilistic simplicity often beats deterministic complexity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Maximum levels for 1,000,000 elements?",
        "options": ["10", "20", "1,000", "Pico guess"],
        "correctAnswer": "20",
        "explanation": "log2(1,000,000) is ~20. More levels would just waste empty pointers."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Forward Array",
        "explanation": "Ace: 'In C, we use a pointer-to-pointer array `forward` of size `lvl + 1` to store the skipping links for each node.'",
        "encouragementText": "Pico: 'Multiple jump-points! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Allocation of forward pointers.",
        "codeSnippet": "n->forward = (Node**)malloc(sizeof(Node*) * ( ___ ));",
        "correctAnswer": "level + 1",
        "explanation": "A node with height H needs H+1 pointers (from level 0 to level H)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Level Builder",
        "explanation": "You have built the layers of speed. The birds can now skip the crowds. Ace: 'The lanes are open.'",
        "encouragementText": "Pico: 'High-speed flight! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Skip List terms!",
        "pairs": [
          { "key": "Level 0", "value": "Base List (All nodes)" },
          { "key": "Random Height", "value": "Coin Flip logic" },
          { "key": "log N", "value": "Average Search time" }
        ]
      }
    ]
  },
  {
    "order": 65,
    "title": "Unit 65: Skip Lists - Search & Insertion",
    "desc": "Executing the jump: Navigating the levels of a skip list.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.5] The Calculated Jump",
        "explanation": "Ace: 'To search in a Skip List, start at the top-most level of the header. Stay at current level as long as Next < Target. When Next >= Target, drop down one level and repeat.' Pico: 'Jumping branch to branch! 🦜'",
        "codeSnippet": "for(int i = max_lvl; i >= 0; i--) {\n  while(curr->forward[i]->val < target) curr = curr->forward[i];\n}",
        "encouragementText": "Ace: 'Visibility from height is the fastest way to ground-level truth.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What do we do when we reach Level 0 and curr->forward[0]->val == Target?",
        "options": ["Drop down", "Success! Return node", "Keep jumping", "Pico rule"],
        "correctAnswer": "Success! Return node",
        "explanation": "Level 0 is the final ground-truth layer where every element exists."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Insertion update",
        "explanation": "Ace: 'To insert a node, we first record the nodes that need their `forward` pointers updated (the nodes just before the insert position at each level).' Pico: 'Marking the jump-points! 🦜'",
        "encouragementText": "Pico: 'Update the markers! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating pointers after insertion.",
        "codeSnippet": "for(int i=0; i<=node_lvl; i++) {\n  new_node->forward[i] = update[i]->forward[i];\n  update[i]->forward[i] = ___ ;\n}",
        "correctAnswer": "new_node",
        "explanation": "Standard linked list insertion logic repeated for every level the node belongs to."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Deletion",
        "explanation": "Ace: 'Deletion is the inverse of insertion: Find the target, record update pointers, and bridge the gap at every level.'",
        "encouragementText": "Ace: 'Removal is the restoration of the previous shortcut.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is a Skip List memory-heavy compared to a standard List?",
        "options": ["No", "Yes (Average 2 pointers per node instead of 1)", "10x more", "Pico guess"],
        "correctAnswer": "Yes (Average 2 pointers per node instead of 1)",
        "explanation": "Sum of (1/2^i) series is 2. On average, each node has a height of 2 pointers."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Real-world databases",
        "explanation": "Ace: 'Redis and LevelDB use Skip Lists to implement sorted sets and internal indices.'",
        "encouragementText": "Pico: 'Pro birds use Skip Lists! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Moving to the next node on the BASE level.",
        "codeSnippet": "curr = curr-> ___ [0];",
        "correctAnswer": "forward",
        "explanation": "Level 0 is the standard linked list traversal."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Calculation Master",
        "explanation": "You have executed the jump. The target was found in record time. Ace: 'The search is optimal.'",
        "encouragementText": "Pico: 'Got it! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Skip actions!",
        "pairs": [
          { "key": "Search", "value": "Jump and Drop" },
          { "key": "Insert", "value": "Update array" },
          { "key": "MAX_LVL", "value": "Height limit" }
        ]
      }
    ]
  },
  {
    "order": 66,
    "title": "Unit 66: Unrolled Linked Lists",
    "desc": "Cache-friendly nodes: Storing arrays inside linked nodes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.6] The Hybrid Nest",
        "explanation": "Ace: 'Linked lists suffer from cache misses. Unrolled Linked Lists fix this by storing a small ARRAY of elements inside each node.' Pico: 'A big nest with many seeds! 🦜'",
        "codeSnippet": "struct Node {\n  int elements[8];\n  int count;\n  Node* next;\n};",
        "encouragementText": "Ace: 'Local density is the secret to cache performance.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is an Unrolled list faster for traversal than a normal list?",
        "options": ["Better sorting", "Fewer pointer dereferences and better CPU cache locality", "It's not", "Pico rule"],
        "correctAnswer": "Fewer pointer dereferences and better CPU cache locality",
        "explanation": "Inside a node, you process 8 elements in a single contiguous block of memory."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Split and Merge",
        "explanation": "Ace: 'When a node's array becomes too full during insertion, we split it into two nodes. When too empty after deletion, we merge with neighbor.' Pico: 'Sharing the seeds! 🦜'",
        "encouragementText": "Pico: 'Split the load! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Threshold for splitting a node of max size S.",
        "codeSnippet": "if (node->count > ___ ) split_node(node);",
        "correctAnswer": "S",
        "explanation": "Once we exceed the array capacity of the node, we must create a new link."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Memory management",
        "explanation": "Ace: 'Unrolled lists use less total memory for pointers because one NEXT pointer is shared by many elements.'",
        "encouragementText": "Ace: 'Efficiency is found in the communal sharing of metadata.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Insert complexity at the end?",
        "options": ["O(N)", "O(1) amortized if we know the tail", "O(log N)", "Pico guess"],
        "correctAnswer": "O(1) amortized if we know the tail",
        "explanation": "Most of the time you just add to the array; splits are rare."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Balancing arrays",
        "explanation": "Ace: 'Try to keep nodes roughly 50-80% full to prevent frequent splitting/merging while keeping cache performance high.'",
        "encouragementText": "Pico: 'Not too full, not too empty! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Accessing the i-th element of a node.",
        "codeSnippet": "val = node-> ___ [i];",
        "correctAnswer": "elements",
        "explanation": "Standard array indexing inside the node structure."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Cache Guardian",
        "explanation": "You have localized the data. The CPU can breathe again. Ace: 'The flow is dense.'",
        "encouragementText": "Pico: 'Warm cache! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Hybrid terms!",
        "pairs": [
          { "key": "Unrolled", "value": "Link + Array" },
          { "key": "Cache Miss", "value": "Pointer jump penalty" },
          { "key": "Split", "value": "Overflow handling" }
        ]
      }
    ]
  },
  {
    "order": 67,
    "title": "Unit 67: Lists with Random Pointers",
    "desc": "Cloning complex graphs in linear time.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.7] The Mirror Mesh",
        "explanation": "Ace: 'Imagine a list where each node has a `Next` pointer and a `Random` pointer to any node. How do you clone this perfectly in O(N)?' Pico: 'Shadow nodes! 🦜'",
        "codeSnippet": "struct Node {\n  Node *next, *random;\n};",
        "encouragementText": "Ace: 'Duplication requires the temporary entanglement of worlds.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "The O(1) space trick for cloning involves inserting copy nodes where?",
        "options": ["At the end", "Directly after their original nodes (interweaving)", "In a separate stack", "Pico rule"],
        "correctAnswer": "Directly after their original nodes (interweaving)",
        "explanation": "This allows easy access to the 'companion' node without a hash map."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Pointer Sync",
        "explanation": "Ace: 'If Original->Random is Y, then Original->Next->Random must be Y->Next. This is the magic of interweaving.' Pico: 'Parallel bird links! 🦜'",
        "encouragementText": "Pico: 'Copy the links! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Setting the random pointer of a copy node.",
        "codeSnippet": "curr->next->random = curr->random-> ___ ;",
        "correctAnswer": "next",
        "explanation": "The copy's random pointer points to the copy of the original's random target."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Extraction",
        "explanation": "Ace: 'Step 3: Separate the original list from the copy list by restoring the `next` pointers. This is a simple O(N) unweaving process.'",
        "encouragementText": "Ace: 'The final act of duplication is the separation of identity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of cloning with this interweaving method?",
        "options": ["O(N^2)", "O(N)", "O(log N)", "Pico guess"],
        "correctAnswer": "O(N)",
        "explanation": "Three linear passes: 1. Copy nodes, 2. Update randoms, 3. Unweave."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] General Application",
        "explanation": "Ace: 'This pattern is used to clone any complex graph with deep pointer relationships without extra memory.'",
        "encouragementText": "Pico: 'Clone army! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Unweaving current node's copy.",
        "codeSnippet": "curr->next = copy->next;\nif(copy->next) copy->next = ___ ;",
        "correctAnswer": "copy->next->next",
        "explanation": "Skipping over the original node to link to the next copy node."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Mirror Master",
        "explanation": "You have duplicated the complexity. The original and the twin are now distinct. Ace: 'The reflections are stable.'",
        "encouragementText": "Pico: 'Double birds! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Cloning steps!",
        "pairs": [
          { "key": "Interweaving", "value": "A -> A' -> B -> B'" },
          { "key": "Copy randoms", "value": "A'->rand = B' " },
          { "key": "Unweaving", "value": "Restore A->B and A'->B'" }
        ]
      }
    ]
  },
  {
    "order": 68,
    "title": "Unit 68: Move-to-Front (MTF) Self-Organizing",
    "desc": "The adaptive list: Learning from search patterns.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.8] The Popular Perch",
        "explanation": "Ace: 'In the Move-to-Front heuristic, every time you search for an item and find it, you move it to the HEAD of the list. This makes future searches for the same item much faster.' Pico: 'The favorites sit in the front row! 🦜'",
        "codeSnippet": "if(target_found) {\n  detach(target);\n  insert_head(target);\n}",
        "encouragementText": "Ace: 'Efficiency is the adaptation to frequency.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does MTF assume about the search pattern?",
        "options": ["Uniform randomness", "Temporal Locality (recent items are likely to be accessed again)", "Worst-case bias", "Pico rule"],
        "correctAnswer": "Temporal Locality (recent items are likely to be accessed again)",
        "explanation": "If a user just asked for 'Seed-A', they are very likely to ask for it again soon."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] List vs Array for MTF",
        "explanation": "Ace: 'MTF is perfect for lists because moving an item to the head is O(1) once found. In an array, it would require O(N) shifting.' Pico: 'The bird just hops to the front! 🦜'",
        "encouragementText": "Pico: 'Hoppy flight! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Detaching the node 'N' from its parent 'P'.",
        "codeSnippet": "P->next = N->next;\nN->next = ___ ;",
        "correctAnswer": "head",
        "explanation": "Making the found node point to the old head to complete the 'Move to Front'."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Static vs Dynamic",
        "explanation": "Ace: 'Even if you don't know search frequencies in advance, MTF eventually achieves a result within constant factor of the absolute optimal order.'",
        "encouragementText": "Ace: 'Self-organization is the quest for the unknown optimum.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Real-world use of MTF?",
        "options": ["Network packet filtering", "Symbol tables in compilers", "Cache replacement policies", "All of the above"],
        "correctAnswer": "All of the above",
        "explanation": "Any system with 'hot' data benefits from moving recently used items to the fast-access area."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] 2N Complexity",
        "explanation": "Ace: 'Math proves MTF is at most 2 times slower than the best possible static arrangement! Not bad for a simple rule.'",
        "encouragementText": "Pico: 'Double speed! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "New head assignment.",
        "codeSnippet": "head = ___ ;",
        "correctAnswer": "N",
        "explanation": "After moving to the front, the target becomes the new head of the list."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Adaptive Leader",
        "explanation": "You have taught the list to learn. The most needed bird is now the easiest to find. Ace: 'The order is optimized by usage.'",
        "encouragementText": "Pico: 'Smart list! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Self-Organize terms!",
        "pairs": [
          { "key": "MTF", "value": "Move recently found to front" },
          { "key": "Temporal Locality", "value": "Search Bias" },
          { "key": "O(1) Move", "value": "List Benefit" }
        ]
      }
    ]
  },
  {
    "order": 69,
    "title": "Unit 69: Count-based Self-Organizing Lists",
    "desc": "Sorting by popularity: The frequency heuristic.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.9] The Loyalty Rank",
        "explanation": "Ace: 'In the Count heuristic, each node stores its own access frequency. When you find a node, increment its count and move it forward until the list remains sorted by frequency.' Pico: 'Promotions based on bird-calls! 🦜'",
        "codeSnippet": "struct Node {\n  int data, count;\n  Node* next;\n};",
        "encouragementText": "Ace: 'Rank is earned through repeated utility.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which is more stable: MTF or Count?",
        "options": ["MTF", "Count", "Both equal", "Pico rule"],
        "correctAnswer": "Count",
        "explanation": "In MTF, a single rare search moves an item to the top. In Count, an item must be frequently accessed to reach and stay at the top."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Overhead",
        "explanation": "Ace: 'Count requires extra memory for the integer and involves reshuffling the list to maintain order.' Pico: 'More work, better long-term nest! 🦜'",
        "encouragementText": "Pico: 'Keep count! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Incrementing hit count.",
        "codeSnippet": "curr->count++;\nwhile(prev && prev->count ___ curr->count) swap_nodes(prev, curr);",
        "correctAnswer": "<",
        "explanation": "Moving the current node forward as long as its access count is higher than the node before it."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Comparison",
        "explanation": "Ace: 'If the access pattern changes suddenly, MTF adapts immediately. Count takes time to \"unlearn\" the old popular items.'",
        "encouragementText": "Ace: 'History is a strength or a weight depending on the rate of change.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if two nodes have the same count?",
        "options": ["The algorithm crashes", "Maintain their relative order (Stability)", "Delete them", "Pico guess"],
        "correctAnswer": "Maintain their relative order (Stability)",
        "explanation": "No need to move nodes if their frequencies are tied."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Transpose Heuristic",
        "explanation": "Ace: 'A middle-ground: Transpose. Just swap the found node with its immediate predecessor. It's slower to adapt but very stable!'",
        "encouragementText": "Pico: 'One step at a time! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Swapping with previous node.",
        "codeSnippet": "swap(prev->data, curr->data);\nswap(prev-> ___ , curr->count);",
        "correctAnswer": "count",
        "explanation": "When using the simple swap-data method, you must swap the frequency counts as well."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Rank Arbiter",
        "explanation": "You have built a meritocracy. The truly important nodes have earned their place at the top. Ace: 'The rank is earned.'",
        "encouragementText": "Pico: 'Top of the list! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Self-Organize methods!",
        "pairs": [
          { "key": "MTF", "value": "Fast but volatile" },
          { "key": "Count", "value": "Stable / Memory heavy" },
          { "key": "Transpose", "value": "Gradual adaptation" }
        ]
      }
    ]
  },
  {
    "order": 70,
    "title": "Unit 70: Stage 7 Graduation (The Node Architect)",
    "desc": "Claiming the node peak: Skip Lists and XORs are yours.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 7.10] The Summit of Chains",
        "explanation": "Ace: 'You have mastered the Ghost Pointer, the Infinite Circle, and the Express Lane. The simple chain has become a multidimensional web under your command.' Pico: 'Stage 7 Complete! We fly to the Memory and Performance next! 🦜'",
        "encouragementText": "Ace: 'Mastery in structure is the prerequisite for mastery in performance.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which structure should you use to search a linked list in O(log N)?",
        "options": ["Standard List", "XOR List", "Skip List", "Pico guess"],
        "correctAnswer": "Skip List",
        "explanation": "Skip lists provide logarithmic search by layering express lanes over a base list."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Depth Summary",
        "explanation": "10 units, 100 lessons. This stage has equipped you with the advanced structural tools for the Academic Atlas. Ace: 'Chain with purpose.'",
        "encouragementText": "Pico: '70% through the 1,000-lesson gauntlet! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "XOR Linked List requires which language's features to work effectively?",
        "options": ["Java", "C/C++", "Python", "Pico secret"],
        "correctAnswer": "C/C++",
        "explanation": "It relies on raw pointer manipulation and bitwise XOR operations on addresses."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from Skip Lists to Unrolled Lists and CDLL to Self-Organization in your mental buffers.' Pico: 'I'm a Node Master now! 🦜'",
        "encouragementText": "Ace: 'The link reflects the target through the lens of the shortcut.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Benefit of Unrolled Linked List?",
        "options": ["Better luck", "Cache Locality", "XOR power", "Pico guess"],
        "correctAnswer": "Cache Locality",
        "explanation": "Storing arrays in nodes reduces the penalty of CPU cache misses."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 70% through the ultimate journey. Your next target: **Stage 8: Memory & Performance (Lock-free/C focus)**. Ace: 'The metal awaits.'",
        "encouragementText": "Pico: 'Stage 8 seeds are waiting! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (node_architect == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Advanced Node Structures phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Node Architect",
        "explanation": "The links are optimized. The jumps are calculated. You are a Stage 7 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=61; i<=70; i++) verify_node_logic(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The seventh decile of the 1,000-lesson curriculum for Linked Lists is fully verified."
      }
    ]
  }
];

module.exports = stage4;

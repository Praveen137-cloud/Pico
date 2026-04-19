const stage6 = [
  {
    "order": 81,
    "title": "Unit 81: Persistent Stacks (Structural Sharing)",
    "desc": "The immutable bucket: Creating history without copying.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.1] The Ghost Stack",
        "explanation": "Ace: 'In a Persistent Stack, `push(X)` doesn't modify the existing stack; it returns a new pointer to a node X that points to the OLD head. Both versions coexist perfectly.' Pico: 'A tower that grows but never loses its old floors! 100% 🦜'",
        "codeSnippet": "Node* new_head = cons(val, old_head);",
        "encouragementText": "Ace: 'Stability is found in the absolute preservation of what was.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Structural Sharing' in a persistent stack?",
        "options": ["Sharing the same memory for all versions", "Multiple stack versions pointing to the same tail nodes", "A broken pointer", "Pico rule"],
        "correctAnswer": "Multiple stack versions pointing to the same tail nodes",
        "explanation": "Since nodes are immutable, they can be safely reused across multiple versions of the stack without interference."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Space Efficiency",
        "explanation": "Ace: 'Because we only create ONE new node per push, keeping 1,000 versions of a 1-million element stack only takes 1,001,000 nodes, not 1 billion.' Pico: 'Sharing the seed tower! 100% 🦜'",
        "encouragementText": "Pico: 'Share the seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Complexity to create version T+1 from version T.",
        "codeSnippet": "Time = O( ___ );",
        "correctAnswer": "1",
        "explanation": "We only allocate a single new node and link it to the previous head."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Immutable Core",
        "explanation": "Ace: 'The most important rule: NEVER change a `next` pointer once it is set. Persistence relies on nodes being carved in stone.'",
        "encouragementText": "Ace: 'Immutability is the shield against temporal entropy.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In a persistent stack, how do you 'Pop' an element?",
        "options": ["Delete the top node", "Return the `next` pointer of the current head (The new version is the old tail)", "Search for a new head", "Pico guess"],
        "correctAnswer": "Return the `next` pointer of the current head (The new version is the old tail)",
        "explanation": "You don't change anything; you just move your current 'view' to the next node in the chain."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Garbage Collection",
        "explanation": "Ace: 'In persistent systems, we use Reference Counting or Garbage Collection to clean up nodes only when NO versions point to them anymore.'",
        "encouragementText": "Pico: 'Cleanup the old nests! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Creating a persistent node.",
        "codeSnippet": "Node* n = (Node*)malloc(sizeof(Node));\nn->val = x;\nn->next = ___ ;",
        "correctAnswer": "old_head",
        "explanation": "The new head's next link is the previous version's head."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Persistent Pilot",
        "explanation": "You have unlocked the ability to walk back in time. Every version of your buffer is preserved. Ace: 'The past is secure.'",
        "encouragementText": "Pico: 'Memories everywhere! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Persistent terms!",
        "pairs": [
          { "key": "Structural Share", "value": "Reusing old nodes" },
          { "key": "Immutable", "value": "Read-only pointers" },
          { "key": "Version", "value": "A specific head pointer" }
        ]
      }
    ]
  },
  {
    "order": 82,
    "title": "Unit 82: The Banker's Queue",
    "desc": "Functional FIFO: Balancing two persistent stacks.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.2] The Balanced Bucher",
        "explanation": "Ace: 'Persistent Queues often use the Two-Stack method (Unit 65). Because the stacks are persistent, the whole queue is persistent. If the front stack is empty, we reverse the back stack- BUT we must do it carefully to maintain complexity.' Pico: 'Trading persistent buckets! 100% 🦜'",
        "codeSnippet": "Queue q2 = push(q1, x);",
        "encouragementText": "Ace: 'Balance is the product of symmetric costs.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of a persistent push in the Banker's Queue?",
        "options": ["O(1)", "O(1) amortized", "O(N)", "Pico rule"],
        "correctAnswer": "O(1) amortized",
        "explanation": "Like the standard two-stack queue, the amortized cost is O(1). However, the WORST-case of a single operation can be O(N) when a reversal happens."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Persistence Hazard",
        "explanation": "Ace: 'If you use a persistent queue and repeatedly trigger an O(N) reversal on the SAME version, amortized analysis fails! This is the 'Persistence Trap'.' Pico: 'Stuck in the same slow reversal! 100% 🦜'",
        "encouragementText": "Pico: 'Watch the trap! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Queue structure in the Banker model.",
        "codeSnippet": "struct Queue {\n  Node *front, *back;\n  int len_f, len_b;\n};",
        "correctAnswer": "len_b",
        "explanation": "We track lengths to know exactly when to trigger the rebalance."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Invariant",
        "explanation": "Ace: 'The Banker's Queue invariant: `len_back <= len_front`. If len_back exceeds len_front, we reverse back and append it to front. This ensures the output buffer is always ready.'",
        "encouragementText": "Ace: 'Design is the enforcement of structural truth.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if you use a persistent Banker's Queue in a single-threaded linear way?",
        "options": ["It works perfectly in O(1) amortized", "It is O(N) always", "It crashes", "Pico guess"],
        "correctAnswer": "It works perfectly in O(1) amortized",
        "explanation": "If you don't 'go back in time' to reuse an old heavy version, the amortized proof holds."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Real-time Rebalancing",
        "explanation": "Ace: 'To solve the Persistence Trap, we use Lazy Evaluation. Rebalance happens in small increments over many operations.'",
        "encouragementText": "Pico: 'Slow and steady! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Check for rebalance.",
        "codeSnippet": "if (q.len_b ___ q.len_f) return rebalance(q);",
        "correctAnswer": ">",
        "explanation": "Once the input stack is longer than the output stack, the balance is lost."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Functional Banker",
        "explanation": "You have synthesized the pipe from the buckets of history. The FIFO order is maintained through the lens of time. Ace: 'The balance is kept.'",
        "encouragementText": "Pico: 'I trust this bank! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Banker terms!",
        "pairs": [
          { "key": "len_f", "value": "Front buffer count" },
          { "key": "len_b", "value": "Back buffer count" },
          { "key": "Invariant", "value": "l_b <= l_f" }
        ]
      }
    ]
  },
  {
    "order": 83,
    "title": "Unit 83: Real-time Persistent Queues",
    "desc": "Okasaki and Hood-Melville: Achieving O(1) worst-case persistence.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.3] The Eternal Spring",
        "explanation": "Ace: 'How do you fix the O(N) reversal spike? You start the reversal 'Ahead of Time'. As soon as `len_back == len_front`, you start a background process (incremental reversal) that finishes just before the front is empty!' Pico: 'Starting the next flight before landing! 100% 🦜'",
        "codeSnippet": "rebalancing_state = start_inc_reverse(f, b);",
        "encouragementText": "Ace: 'Perfection is the synchronization of anticipation and demand.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of pop() in a Hood-Melville queue?",
        "options": ["O(N)", "Amortized O(1)", "O(1) WORST-CASE", "Pico rule"],
        "correctAnswer": "O(1) WORST-CASE",
        "explanation": "Because the reversal work is divided into tiny constant-time steps across all operations, no single operation ever takes O(N)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Lazy Evaluation",
        "explanation": "Ace: 'Chris Okasaki's approach uses 'Thunks' (suspended functions). The reversal only happens when the head is actually accessed.' Pico: 'Seeds that grow only when you look! 100% 🦜'",
        "encouragementText": "Pico: 'Lazy seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Advancing the incremental reversal.",
        "codeSnippet": "state = step(state);\nstate = ___ (state);",
        "correctAnswer": "step",
        "explanation": "Performing two steps of reversal for every one pop to ensure it finishes in time."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Purely Functional",
        "explanation": "Ace: 'These are the 'Holy Grail' of data structures in functional programming. They provide every guarantee with zero mutation and absolute speed.'",
        "encouragementText": "Ace: 'The most complex structures appear simple to the user.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is O(1) worst-case important for persistent structures?",
        "options": ["Better colors", "Interactive systems and real-time GUIs (Undo/Redo must be instant)", "Search speed", "Pico guess"],
        "correctAnswer": "Interactive systems and real-time GUIs (Undo/Redo must be instant)",
        "explanation": "You don't want a 'lag' frame whenever the user triggers a complex history operation."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Memoization",
        "explanation": "Ace: 'Once a lazy reversal step is calculated, its result is cached (memoized) for all future versions of that stack.'",
        "encouragementText": "Pico: 'Remember the nest! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Complexity of getting the front element.",
        "codeSnippet": "Time = O( ___ );",
        "correctAnswer": "1",
        "explanation": "Immediate access to the top of the already-prepared front stack."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Master of Time",
        "explanation": "You have smoothed the ripples of the infinite. The flow is now uniform across all moments. Ace: 'The worst-case is tamed.'",
        "encouragementText": "Pico: 'Smooth glide! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Real-time terms!",
        "pairs": [
          { "key": "Worst-case O(1)", "value": "Hood-Melville benefit" },
          { "key": "Incremental", "value": "Dividing the labor" },
          { "key": "Okasaki", "value": "Functional Master" }
        ]
      }
    ]
  },
  {
    "order": 84,
    "title": "Unit 84: History-aware Stacks (Undo/Redo)",
    "desc": "Persistence in practice: Implementing the ultimate edit engine.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.4] The Un-delete",
        "explanation": "Ace: 'Undo/Redo is just a stack of versions. Because we use Persistent Stacks, 'Undo' is just moving your current pointer back to the previous version's head. 'Redo' is moving it forward.' Pico: 'Flying back and forth in time! 100% 🦜'",
        "codeSnippet": "history_ptr = history_ptr->prev;",
        "encouragementText": "Ace: 'Mistakes are merely temporary states in a persistent world.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How would you handle a 'Branching' undo (where you undo, then do something NEW)?",
        "options": ["Delete history", "Store the history as a TREE of nodes where every branch is a viable timeline", "Error", "Pico rule"],
        "correctAnswer": "Store the history as a TREE of nodes where every branch is a viable timeline",
        "explanation": "Persistent stacks are naturally 'Version Trees'. You can explore multiple paths without ever destroying the others."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Memory Pressure",
        "explanation": "Ace: 'To prevent using too much RAM, we can set a 'History Limit'. When we exceed it, we drop the oldest nodes by decrementing their ref_counts.' Pico: 'Pruning old nests! 100% 🦜'",
        "encouragementText": "Pico: 'Clean up! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Moving to previous state T-1.",
        "codeSnippet": "curr_version = versions[ ___ ];",
        "correctAnswer": "T-1",
        "explanation": "Simply indexing into the array of persistent head pointers."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Command Pattern",
        "explanation": "Ace: 'Every action (Insert, Delete, Bold) is an object. The 'History Stack' stores these objects. To Undo, we apply the 'Inverse' operation.'",
        "encouragementText": "Ace: 'Action and reaction are the two sides of the persistent coin.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is undo O(1) and redo O(1)?",
        "options": ["Yes, just pointer moves", "No", "Only for small data", "Pico guess"],
        "correctAnswer": "Yes, just pointer moves",
        "explanation": "In a persistent structure, moving to a different version is a simple assignment."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Large state",
        "explanation": "Ace: 'If the state is a 1GB image, we only store the 'Diff' (the changed pixels) in the stack to save space.'",
        "encouragementText": "Pico: 'Small seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Applying a redo.",
        "codeSnippet": "if (can_redo) curr = versions[++ ___ ];",
        "correctAnswer": "history_idx",
        "explanation": "Incrementing the cursor to the next already-calculated state."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Archivist",
        "explanation": "You have built a world where no action is permanent. The past is always a pointer away. Ace: 'The timeline is yours.'",
        "encouragementText": "Pico: 'Go back! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match History terms!",
        "pairs": [
          { "key": "Undo", "value": "Prev Version" },
          { "key": "Redo", "value": "Next Version" },
          { "key": "Branch", "value": "Multiverse of edits" }
        ]
      }
    ]
  },
  {
    "order": 85,
    "title": "Unit 85: Versioned Priority Queues",
    "desc": "Sorting through time: How to keep priorities persistent.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.5] The Importance Tree",
        "explanation": "Ace: 'Persistent Priority Queues (usually implemented as Leftist Heaps or Skew Heaps) allow you to add and remove items while keeping old versions reachable.' Pico: 'A hierarchy that never forgets! 100% 🦜'",
        "codeSnippet": "Heap* new_h = merge(node, old_h);",
        "encouragementText": "Ace: 'Hierarchy is a versioned perspective on value.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is a standard Binary Heap (array) hard to make persistent?",
        "options": ["Too fast", "Updating one element requires copying the whole array (O(N)) because it's contiguous", "No links", "Pico rule"],
        "correctAnswer": "Updating one element requires copying the whole array (O(N)) because it's contiguous",
        "explanation": "Persistent structures MUST use linked nodes. Arrays are the enemy of structural sharing."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Leftist Heaps",
        "explanation": "Ace: 'Leftist heaps are binary trees where we keep the 'Right' path short. Merging two persistent trees takes O(log N) by only path-copying the right spine.' Pico: 'Thin branches are easy to copy! 100% 🦜'",
        "encouragementText": "Pico: 'Short paths! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Complexity to push into a persistent heap of size N.",
        "codeSnippet": "Time = O( ___ );",
        "correctAnswer": "log N",
        "explanation": "We only copy the nodes on the path to the root, which is logarithmic."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Skew Heaps",
        "explanation": "Ace: 'Skew heaps are even simpler; they just swap left and right children on every merge, achieving O(log N) amortized persistence with no extra state variables.'",
        "encouragementText": "Ace: 'Simple symmetry ensures complex balance.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Where are persistent PQs used?",
        "options": ["Dijkstra on versioned maps", "Game state rollback with events", "Both", "Pico guess"],
        "correctAnswer": "Both",
        "explanation": "Anywhere where you need to see 'What was the next best move in the previous state?'."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Melding",
        "explanation": "Ace: 'The core operation of these heaps is `meld(h1, h2)`. `push` and `pop` are both just special cases of meld.'",
        "encouragementText": "Pico: 'Meld them all! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Popping from persistent heap.",
        "codeSnippet": "new_root = meld(root->left, root-> ___ );",
        "correctAnswer": "right",
        "explanation": "Merging the two children of the deleted root to create the next version."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Priority Archivist",
        "explanation": "You have ordered the sequence of importance across time. Ace: 'The value is tracked.'",
        "encouragementText": "Pico: 'I remember what was important! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Heap terms!",
        "pairs": [
          { "key": "Meld", "value": "O(log N) Join" },
          { "key": "Leftist", "value": "Short Right Spine" },
          { "key": "Skew", "value": "Self-adjusting merge" }
        ]
      }
    ]
  },
  {
    "order": 86,
    "title": "Unit 86: Purely Functional Deques",
    "desc": "Okasaki style: O(1) persistent deques for the elite.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.6] The Ultimate Deque",
        "explanation": "Ace: 'A persistent deque is the peak of complexity. We use the 'Physicist's Method' or 'Banker's Method' to ensure that BOTH ends are O(1) even under full persistence.' Pico: 'Double-ended magic buckets! 100% 🦜'",
        "codeSnippet": "data Deque a = DQ [a] [a]",
        "encouragementText": "Ace: 'Power is the ability to move in all directions with equal ease.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do you handle the 'Persistence Trap' (repeatedly reversing) in a deque?",
        "options": ["You cannot", "Incremental rebalancing: Moving small chunks between 'front' and 'rear' on every operation", "Ignore it", "Pico rule"],
        "correctAnswer": "Incremental rebalancing: Moving small chunks between 'front' and 'rear' on every operation",
        "explanation": "By ensuring neither stack is ever 'Too thin' or 'Too heavy', we keep the costs uniform."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Structural Sharing",
        "explanation": "Ace: 'Every operation creates a few new nodes and reuse many old ones. Memory usage remains logarithmic over billions of versions.' Pico: 'Saving the bird cage! 100% 🦜'",
        "encouragementText": "Pico: 'Memory safe! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Pre-calculating a reversal step.",
        "codeSnippet": "new_rev_state = tick_reversal(state, ___ );",
        "correctAnswer": "2",
        "explanation": "Standard 2-to-1 ratio to ensure reversal finishes before the current buffer is empty."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Real-world libraries",
        "explanation": "Ace: 'In Haskell, this is done using the `Data.Sequence` Finger Tree, but purely functional queues/deques are the conceptual foundation.'",
        "encouragementText": "Ace: 'Abstraction is the mask of underlying rigor.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you use these in C?",
        "options": ["Yes, by implementing purely functional Node logic and reference counting", "No, only in Haskell", "Only if locked", "Pico guess"],
        "correctAnswer": "Yes, by implementing purely functional Node logic and reference counting",
        "explanation": "Algorithms are independent of language. C provides the raw control to build the most efficient versions."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Thread Safety",
        "explanation": "Ace: 'Persistent structures are NATURALLY thread-safe because they are immutable. Threads can share the same structure without any locks!'",
        "encouragementText": "Pico: 'No fighting! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Adding to the front of a persistent deque.",
        "codeSnippet": "return DQ(cons(x, front), ___ );",
        "correctAnswer": "back",
        "explanation": "Only the front stack is modified; the rear remains shared."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Symmetrical Sage",
        "explanation": "You have balanced the ends of time. The deque is a perfect circle of persistence. Ace: 'The symmetry is achieved.'",
        "encouragementText": "Pico: 'Happy flight! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Functional terms!",
        "pairs": [
          { "key": "DQ [a] [a]", "value": "Two-stack base" },
          { "key": "Incremental", "value": "Anti-reversal-spike" },
          { "key": "Finger Tree", "value": "Ultimate implementation" }
        ]
      }
    ]
  },
  {
    "order": 87,
    "title": "Unit 87: Lazy Queues (Streams)",
    "desc": "Queues that compute on demand: The power of the Thunk.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.7] The Sleeping Pipe",
        "explanation": "Ace: 'A Lazy Queue doesn't perform work until you ask for the `front()`. It stores a sequence of 'Lazy operations' (Streams). This allows for infinite queues!' Pico: 'Seeds that only appear when you're hungry! 100% 🦜'",
        "codeSnippet": "front() { force(my_lazy_data); }",
        "encouragementText": "Ace: 'Potential is the state of a suspended reality.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is a 'Thunk' in lazy evaluation?",
        "options": ["A sound", "A pointer to a function that calculates a value later", "A broken node", "Pico rule"],
        "correctAnswer": "A pointer to a function that calculates a value later",
        "explanation": "It 'freezes' the computation. Executing ('forcing') the thunk 'melts' it into an actual value."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Memoization",
        "explanation": "Ace: 'Crucial: Once a thunk is forced, it saves its result and becomes 'Rigid'. The next time you ask, it returns the result INSTANTLY.' Pico: 'Remembering the work! 100% 🦜'",
        "encouragementText": "Pico: 'Smart birds remember! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Evaluating a lazy node.",
        "codeSnippet": "if (!node->evaluated) node->val = ___ (node->thunk);",
        "correctAnswer": "force",
        "explanation": "Triggering the suspended logic to materialize the data."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Theoretical infinity",
        "explanation": "Ace: 'You can define a queue of ALL prime numbers. The queue is only as long as the number of elements you have popped.'",
        "encouragementText": "Ace: 'The infinite is manageable when it is lazy.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a lazy queue crash if you never pop from it?",
        "options": ["Yes", "No (No work is ever done)", "Maybe", "Pico guess"],
        "correctAnswer": "No (No work is ever done)",
        "explanation": "Since logic is suspended, an expensive (or infinite) calculation that is never accessed has zero cost."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Pipelines",
        "explanation": "Ace: 'Lazy queues are at the heart of `Stream` APIs in Java/Javascript. You can chain `map().filter().pop()` with zero intermediate memory.'",
        "encouragementText": "Pico: 'Streaming seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Popping from a lazy stream.",
        "codeSnippet": "return ___ (stream.rest);",
        "correctAnswer": "evaluate",
        "explanation": "Moving the focus to the next suspended node in the sequence."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Infinite Weaver",
        "explanation": "You have touched the edge of the eternal. The queue grows as you walk, never ending, never full. Ace: 'The potential is realized.'",
        "encouragementText": "Pico: 'Infinite path! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Lazy terms!",
        "pairs": [
          { "key": "Thunk", "value": "Frozen Logic" },
          { "key": "Force", "value": "Materializing Data" },
          { "key": "Memo", "value": "Result Caching" }
        ]
      }
    ]
  },
  {
    "order": 88,
    "title": "Unit 88: Persistent Buffer Pools",
    "desc": "Managing pooled memory across multiple versions.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.8] The Shared Reservoir",
        "explanation": "Ace: 'How do you combine a Memory Pool (Unit 71) with Persistence? You use a 'Reference Counted Pool'. Nodes are only freed back to the reservoir when they are not part of ANY persistent version.' Pico: 'Collecting all un-used nests at once! 100% 🦜'",
        "codeSnippet": "if (--node->ref == 0) return_to_pool(node);",
        "encouragementText": "Ace: 'Efficiency in the collective is found in the recycling of the past.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if you allocate from a persistent pool without reference counting?",
        "options": ["It works", "You will double-allocate memory that is still needed by an older version (Corruption)", "It's faster", "Pico rule"],
        "correctAnswer": "You will double-allocate memory that is still needed by an older version (Corruption)",
        "explanation": "If version 1 still needs node A, but version 2 'frees' it and reuses it for node B, version 1 is now ruined."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Atomic Increment",
        "explanation": "Ace: 'In the pool, `ref_count` MUST be atomic if multiple threads are creating versions simultaneously.' Pico: 'Safe counting! 100% 🦜'",
        "encouragementText": "Pico: 'One at a time! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Claiming a node for a new version.",
        "codeSnippet": "atomic_inc(&node-> ___ );\nnew_version->head = node;",
        "correctAnswer": "ref_count",
        "explanation": "We increase the 'Observer' count to protect the node from being recycled."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Snapshot Isolation",
        "explanation": "Ace: 'Persistent pools allow you to take a 'Snapshot' of your entire database of stacks. Even if the current version changes, the snapshot stays perfectly valid and accessible.'",
        "encouragementText": "Ace: 'The image of the past is frozen in the pool of the present.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Main benefit of persistent pools?",
        "options": ["Zero malloc() overhead across trillions of versions", "Better graphics", "XOR speed", "Pico guess"],
        "correctAnswer": "Zero malloc() overhead across trillions of versions",
        "explanation": "Since nodes are recycled within the pool, the OS is never involved in the frantic creation/destruction of history."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Locality",
        "explanation": "Ace: 'Nodes for a single version are often clustered together in the pool, maintaining high cache hit rates.'",
        "encouragementText": "Pico: 'Clustered seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Returning to free list.",
        "codeSnippet": "node->next = pool->free_head;\npool->free_head = ___ ;",
        "correctAnswer": "node",
        "explanation": "Recycling the node once its ref_count reaches zero."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Resource Archivist",
        "explanation": "You have mastered the balance of usage and history. The reservoir is deep and eternal. Ace: 'The resource is stable.'",
        "encouragementText": "Pico: 'Unlimited seeds! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Pool-History terms!",
        "pairs": [
          { "key": "Ref Count", "value": "Survival Signal" },
          { "key": "Snapshot", "value": "Immutable History" },
          { "key": "Recycling", "value": "Restoring to Free list" }
        ]
      }
    ]
  },
  {
    "order": 89,
    "title": "Unit 89: Structurally Shared Priority Queues",
    "desc": "Leftist heaps revisited: Merging timelines with priorities.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 9.9] The Divergent Peak",
        "explanation": "Ace: 'What if two different histories each have their own Priority Queue? You can MERGE them into a single persistent queue in O(log N). This is structural sharing across sets.' Pico: 'Two bird groups joining their high scores! 100% 🦜'",
        "codeSnippet": "pq3 = merge(pq1, pq2);",
        "encouragementText": "Ace: 'Union is the ultimate persistent operation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you merge two standard Binary Heaps (array-based) in O(log N)?",
        "options": ["Yes", "No (It takes O(N) to merge arrays)", "Only if small", "Pico rule"],
        "correctAnswer": "No (It takes O(N) to merge arrays)",
        "explanation": "This is why persistent PQs MUST be tree-based. Merging trees is fast; merging arrays is slow."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Skew Heaps",
        "explanation": "Ace: 'Skew heaps are perfect for this. Their merge function is just a recursive path-copy that swaps Left/Right at every level.'",
        "encouragementText": "Pico: 'Symmetry in time! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Merging two persistent skew-heap roots.",
        "codeSnippet": "if (h1->val < h2->val) swap(&h1, &h2);\nNode* res = copy(h1);\nres->right = merge(res->left, h2);\nres->left = h1-> ___ ;",
        "correctAnswer": "right",
        "explanation": "The skew merge recursive step: swapping subtrees to maintain amortized balance."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Versioned Scheduling",
        "explanation": "Ace: 'Used in branching simulation (like game AI). Each 'Thought' process has its own persistent PQ of actions. When they merge, the PQs merge instantly.'",
        "encouragementText": "Ace: 'Complexity is the summation of shared intent.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of merge in Leftist/Skew heaps?",
        "options": ["O(N)", "O(log N)", "O(1)", "Pico guess"],
        "correctAnswer": "O(log N)",
        "explanation": "Crucial for high-speed persistent sets."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Memory usage",
        "explanation": "Ace: 'A merge of size N and M only creates O(log(N+M)) new nodes. All others are shared!'",
        "encouragementText": "Pico: 'Save the RAM! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Top of the merged heap.",
        "codeSnippet": "return res-> ___ ;",
        "correctAnswer": "val",
        "explanation": "Accessing the highest priority element in the new union."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Union Master",
        "explanation": "You have joined the rivers of importance. The timelines are merged, and the peaks are synchronized. Ace: 'The union is firm.'",
        "encouragementText": "Pico: 'Strong together! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Merge terms!",
        "pairs": [
          { "key": "Path Copy", "value": "Creating new spine" },
          { "key": "Structural Share", "value": "Reusing sub-trees" },
          { "key": "O(log N)", "value": "Merge complexity" }
        ]
      }
    ]
  },
  {
    "order": 90,
    "title": "Unit 90: Stage 9 Graduation (The Functional Master)",
    "desc": "Claiming the persistence peak: Infinite streams and monoids are yours.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 9.10] The Summit of Persistence",
        "explanation": "Ace: 'You have mastered the Immortal Buffer. You can see through time and handle the infinite. You don't just store data; you preserve the evolution of logic itself.' Pico: 'Stage 9 Complete! Only 10 units left to the Singularity! 100% 🦜'",
        "encouragementText": "Ace: 'Persistence is the final immunity to the entropy of time.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does persistence guarantee for your old data pointers?",
        "options": ["They are deleted", "They remain valid and point to their original state", "They are randomized", "Pico guess"],
        "correctAnswer": "They remain valid and point to their original state",
        "explanation": "This is the core value proposition of functional data structures."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Depth Summary",
        "explanation": "10 units, 100 lessons. This stage has equipped you with the most advanced functional and persistent tools in the Atlas. Ace: 'Buffer without end.'",
        "encouragementText": "Pico: '90% through the 1,000-lesson gauntlet! 100 to go! 100% 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of a search in an infinite Stream?",
        "options": ["O(1)", "O(Infinity) potentially", "O(log N)", "Pico secret"],
        "correctAnswer": "O(Infinity) potentially",
        "explanation": "If the value doesn't exist, the lazy evaluated search will run forever! Always check your bounds."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from Stacks to Streams and Banker's Queues to Skew Heaps in your mental buffers.' Pico: 'I have the eternal mind! 100% 🦜'",
        "encouragementText": "Ace: 'The buffer reflects the sequence through the lens of immutability.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Benefit of Structural Sharing?",
        "options": ["Better luck", "Massive memory saving across versions", "XOR power", "Pico guess"],
        "correctAnswer": "Massive memory saving across versions",
        "explanation": "We only store what is UNIQUE to the new version; the rest is just pointers to the past."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 90% through the ultimate journey. Your final target: **Stage 10: Distributed Queues & Singularity**. Ace: 'The global pipe is calling.'",
        "encouragementText": "Pico: 'Final boss stage! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (functional_master == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Persistence & Functional phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Functional Master",
        "explanation": "The buffers are shared. The past is present. You are a Stage 9 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=81; i<=90; i++) verify_perfect_logic(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The ninth decile of the 1,000-lesson curriculum for Stacks & Queues is fully verified."
      }
    ]
  }
];

module.exports = stage6;

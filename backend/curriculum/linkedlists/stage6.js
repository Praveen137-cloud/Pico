const stage6 = [
  {
    "order": 81,
    "title": "Unit 81: Persistent Singly Linked Lists",
    "desc": "The immutable chain: Creating new versions without destroying the old.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 9.1] The Immutable Link",
        "explanation": "Ace: 'In functional programming, lists are immutable. When you add a node to the front, you don't modify the existing list; you create a new node that points to the OLD list. Both versions coexist perfectly.' Pico: 'A ghost list of the past! 🦜'",
        "codeSnippet": "Node* new_list = cons(new_val, old_list);",
        "encouragementText": "Ace: 'Stability is found in the absolute preservation of what was.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'cons' in functional programming?",
        "options": ["A consultant", "A function that constructs a new list from a value and an existing list", "A deletion", "Pico rule"],
        "correctAnswer": "A function that constructs a new list from a value and an existing list",
        "explanation": "It creates a new node (the head) and links it to the existing tail (the rest of the list)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Structural Sharing",
        "explanation": "Ace: 'Because we don't modify nodes, multiple versions of a list can share the same tail nodes in memory. This saves massive amounts of space.' Pico: 'Sharing the tail feathers! 🦜'",
        "encouragementText": "Pico: 'Share the seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Memory usage to add a node to the front of a persistent list of size N.",
        "codeSnippet": "SpaceAdded = O( ___ );",
        "correctAnswer": "1",
        "explanation": "We only create exactly one new node; the other N nodes are shared."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Side-effect Free",
        "explanation": "Ace: 'In a persistent world, the function `insert(list, value)` returns a NEW list pointer. The original `list` pointer remains valid and unchanged forever.'",
        "encouragementText": "Ace: 'Pure logic has no after-image.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you make a persistent list if you use standard head->next = new_node?",
        "options": ["Yes", "No (That is a destructive update)", "Only if the list is circular", "Pico guess"],
        "correctAnswer": "No (That is a destructive update)",
        "explanation": "To be persistent, you must NEVER modify an existing pointer."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Path Copying",
        "explanation": "Ace: 'If you want to modify the i-th node of a persistent list, you must copy all nodes from 0 to i. The copied path then links to the original i+1-th node.'",
        "encouragementText": "Pico: 'Copy cat! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating persistent list at index 0.",
        "codeSnippet": "Node* next_ver = cons(new_val, head-> ___ );",
        "correctAnswer": "next",
        "explanation": "Creating a new head that points to the rest of the old list."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Persistent Pilot",
        "explanation": "You have unlocked the ability to walk back in time. Every version of your data is preserved. Ace: 'The past is secure.'",
        "encouragementText": "Pico: 'Memories everywhere! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Persistent terms!",
        "pairs": [
          { "key": "cons", "value": "Construct list" },
          { "key": "Sharing", "value": "Shared tails" },
          { "key": "Immutable", "value": "No pointer updates" }
        ]
      }
    ]
  },
  {
    "order": 82,
    "title": "Unit 82: List Recursion (Fold & Reduce)",
    "desc": "Thinking functionally: Processing threads without loops.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 9.2] The Self-Repeating Web",
        "explanation": "Ace: 'In functional lists, we don't use `for` or `while`. We use Recursion. `FoldLeft` and `FoldRight` are the universal ways to summarize a list into a single value.' Pico: 'Repeating the bird call! 🦜'",
        "codeSnippet": "int sum(Node* n) {\n  return n == NULL ? 0 : n->val + sum(n->next);\n}",
        "encouragementText": "Ace: 'Repetition is the heartbeat of recursive logic.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Tail Call Optimization' (TCO)?",
        "options": ["A way to cut bird tails", "A compiler trick that turns recursion into a loop if the recursive call is the last action", "A memory error", "Pico rule"],
        "correctAnswer": "A compiler trick that turns recursion into a loop if the recursive call is the last action",
        "explanation": "This allows infinite recursion without ever blowing the stack!"
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] FoldLeft vs FoldRight",
        "explanation": "Ace: 'FoldLeft starts from the head and moves forward. FoldRight conceptually starts from the tail (it builds the result on the recursion return).' Pico: 'Swallow first, or swallow last! 🦜'",
        "encouragementText": "Pico: 'Chew your logic! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Base case for a recursive list search.",
        "codeSnippet": "if (node == NULL) return ___ ;",
        "correctAnswer": "NOT_FOUND",
        "explanation": "When we reach the end of the chain, the search is over."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] The Accumulator",
        "explanation": "Ace: 'To make recursion TCO-friendly, pass a running total (accumulator) as an argument. In C, this is the secret to high-performance recursive lists.'",
        "encouragementText": "Ace: 'Carry the torch forward to ensure the light never dies out.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Recursive Sum(3 -> 2 -> 1): 0 + 3 + 2 + 1. Which fold is this?",
        "options": ["FoldLeft", "Filter", "Map", "Pico guess"],
        "correctAnswer": "FoldLeft",
        "explanation": "It processes 3 first, then 2, then 1 in the order of the list."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Complexity",
        "explanation": "Ace: 'A recursive visit is O(N) time and O(N) stack space without TCO. With TCO, stack space becomes O(1).'",
        "encouragementText": "Pico: 'Stack saver! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "TCO-friendly sum function.",
        "codeSnippet": "int sum_acc(Node* n, int acc) {\n  return n == NULL ? acc : sum_acc(n->next, ___ );\n}",
        "correctAnswer": "acc + n->val",
        "explanation": "Passing the updated total into the next call ensures no work is left for the return path."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Recursive Sage",
        "explanation": "You have replaced the loop with the mirror. The list reflects upon itself to find the truth. Ace: 'The cycle is internal.'",
        "encouragementText": "Pico: 'Again and again! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Recursive terms!",
        "pairs": [
          { "key": "Base Case", "value": "The stop signal" },
          { "key": "TCO", "value": "Stack-safe recursion" },
          { "key": "Accumulator", "value": "Running state" }
        ]
      }
    ]
  },
  {
    "order": 83,
    "title": "Unit 83: Lazy Linked Lists (Streams)",
    "desc": "The infinite chain: Nodes that only exist when you look at them.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 9.3] The Eternal Spring",
        "explanation": "Ace: 'A Lazy List (Stream) stores a value and a THUNK (a function that generates the next node). You can have a list of ALL prime numbers; it only calculates the ones you actually visit.' Pico: 'Nests that appear when you land! 🦜'",
        "codeSnippet": "struct Stream {\n  int val;\n  Node* (*next_func)();\n};",
        "encouragementText": "Ace: 'Infinity is manageable if you only process the present moment.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is a 'Thunk'?",
        "options": ["A sound a bird makes", "A suspended computation waiting to be evaluated", "A broken pointer", "Pico rule"],
        "correctAnswer": "A suspended computation waiting to be evaluated",
        "explanation": "It 'freezes' the logic of 'how to find the next node' until the code actually calls for it."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Memoization",
        "explanation": "Ace: 'Once a lazy node is calculated, we save (memoize) it so any future access to the same node is instantaneous.' Pico: 'Brain seeds! 🦜'",
        "encouragementText": "Pico: 'Remember the nest! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Generating an infinite stream of 1s.",
        "codeSnippet": "Stream* ones() {\n  return cons(1, ___ );\n}",
        "correctAnswer": "ones",
        "explanation": "A self-referential function where the 'next' is a recursive call to itself."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Lazy evaluation",
        "explanation": "Ace: 'In C, you use function pointers to implement this. This allows you to handle datasets larger than memory, like real-time sensor logs or infinite mathematical sequences.'",
        "encouragementText": "Ace: 'The potential is infinite, but the cost is local.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Main benefit of Lazy Lists?",
        "options": ["Faster sorting", "Can represent infinite data structures", "Uses more memory", "Pico guess"],
        "correctAnswer": "Can represent infinite data structures",
        "explanation": "You can define a list of all integers without crashing the machine."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Pipeline Processing",
        "explanation": "Ace: 'You can chain operations: `stream.map(f).filter(p).take(5)`. Each node only goes through the pipeline when requested.'",
        "encouragementText": "Pico: 'One at a time! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Accessing the head of a stream.",
        "codeSnippet": "int v = head(s);\nStream* next_s = evaluate(s-> ___ );",
        "correctAnswer": "next_func",
        "explanation": "Calling the suspended function to bring the next node into reality."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Infinite Weaver",
        "explanation": "You have touched the edge of the eternal. The list grows as you walk, never ending, never full. Ace: 'The potential is realized.'"
      },
      {
        "type": "match_following",
        "questionText": "Match Lazy terms!",
        "pairs": [
          { "key": "Thunk", "value": "Frozen Logic" },
          { "key": "Memo", "value": "Cached Result" },
          { "key": "Stream", "value": "Infinite List" }
        ]
      }
    ]
  },
  {
    "order": 84,
    "title": "Unit 84: List Transformation (Map & Filter)",
    "desc": "Recursive mapping: Changing the list without mutation.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 9.4] The Prism",
        "explanation": "Ace: 'Map applies a function to every node, returning a new list of results. Filter returns a new list containing only nodes that satisfy a condition. No pointers were harmed in this operation.' Pico: 'Changing the seeds' color in mid-air! 🦜'",
        "codeSnippet": "Node* map(Node* n, func f) {\n  return n == NULL ? NULL : cons(f(n->val), map(n->next, f));\n}",
        "encouragementText": "Ace: 'Transformation is the product of universal application.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the size of the result list after `List.map(L, f)`?",
        "options": ["Size(L) / 2", "Exactly Size(L)", "Unknown", "Pico rule"],
        "correctAnswer": "Exactly Size(L)",
        "explanation": "Map creates a 1-to-1 correspondence between input and output nodes."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Filtering Logic",
        "explanation": "Ace: 'Filter is recursive too. If the current node fails the predicate, we skip it and return the result of filtering the Next node.' Pico: 'Throwing away the bad seeds! 🦜'",
        "encouragementText": "Pico: 'Pick the best! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Filtering step if condition 'p' is met.",
        "codeSnippet": "if (p(n->val)) return ___ (n->val, filter(n->next, p));\nelse return filter(n->next, p);",
        "correctAnswer": "cons",
        "explanation": "If the node is kept, we construct it into the new list."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Composition",
        "explanation": "Ace: 'You can chain these: `filter(map(list, square), isEven)`. Modern engines optimize this into a single pass to avoid intermediate list creation.'",
        "encouragementText": "Ace: 'Complexity is the summation of simple layers.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Does `map` modify the original list?",
        "options": ["Yes", "No (It returns a brand new persistent list)", "Maybe", "Pico guess"],
        "correctAnswer": "No (It returns a brand new persistent list)",
        "explanation": "The original list remains untouched, which is the heart of persistent functional data structures."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Higher-Order Functions",
        "explanation": "Ace: 'Map and Filter are HOFs because they take ANOTHER function as an argument.'",
        "encouragementText": "Pico: 'Functions in functions! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Double every element in a list.",
        "codeSnippet": "new_list = map(old_list, ___ );",
        "correctAnswer": "x => x * 2",
        "explanation": "Applying the doubling logic to every node in the chain."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Alchemist",
        "explanation": "You have turned one substance into another without breaking the first. Ace: 'The change is absolute.'",
        "encouragementText": "Pico: 'Transmutation complete! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Transformation terms!",
        "pairs": [
          { "key": "Map", "value": "1-to-1 conversion" },
          { "key": "Filter", "value": "Size reduction" },
          { "key": "HOF", "value": "Takes function as arg" }
        ]
      }
    ]
  },
  {
    "order": 85,
    "title": "Unit 85: Diffing Linked Lists",
    "desc": "Finding the change: How two chains differ.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 9.5] The Divergence",
        "explanation": "Ace: 'List Diffing compares two lists A and B to find the minimum set of edits (inserts/deletes) to turn A into B. This is the logic behind `git diff` for files (which are persistent lists of lines).' Pico: 'Spotting the missing seeds! 🦜'",
        "codeSnippet": "EditDistance(L1, L2) = ???",
        "encouragementText": "Ace: 'Knowledge is the recognition of what has changed.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What algorithm is commonly used for list diffing?",
        "options": ["Binary Search", "Longest Common Subsequence (LCS)", "Dijkstra", "Pico rule"],
        "correctAnswer": "Longest Common Subsequence (LCS)",
        "explanation": "By finding what the two lists share in the same order, we can identify what was added around it."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Myer's Diff Algorithm",
        "explanation": "Ace: 'Myer's algorithm finds the shortest edit script in O(ND) time. It is the gold standard for comparing two chains of data.' Pico: 'Fastest diff bird! 🦜'",
        "encouragementText": "Pico: 'Diff it! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Cost of a match (no edit) in LCS DP.",
        "codeSnippet": "if (L1[i] == L2[j]) dp[i][j] = dp[i-1][j-1] ___ 1;",
        "correctAnswer": "+",
        "explanation": "A match increases the length of the common subsequence by 1."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Tree vs List Diff",
        "explanation": "Ace: 'List diffing is O(N^2) in general, while tree diffing is O(N^3). Keeping data in a list makes it much easier to track history.'",
        "encouragementText": "Ace: 'Linearity is the simplified path of comparison.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Application of list diffing?",
        "options": ["Version control", "Bioinformatics (DNA comparison)", "React Virtual DOM sync", "All of the above"],
        "correctAnswer": "All of the above",
        "explanation": "Anywhere two sequences must be synchronized or compared."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Patching",
        "explanation": "Ace: 'A Patch is the result of a Diff. You apply the Patch to List A to reach List B without needing the full content of B.'",
        "encouragementText": "Pico: 'Small updates! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Base case: Diffing a list with an empty list.",
        "codeSnippet": "return list_of_all_ ___ ;",
        "correctAnswer": "deletes",
        "explanation": "To turn a list into an empty one, you must delete every element."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Difference Engine",
        "explanation": "You have seen what changed. The evolution of the chain is under your gaze. Ace: 'The change is tracked.'",
        "encouragementText": "Pico: 'I see the gap! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Diff terms!",
        "pairs": [
          { "key": "LCS", "value": "Shared sequence" },
          { "key": "Edit Script", "value": "Inserts/Deletes" },
          { "key": "Patch", "value": "Data update" }
        ]
      }
    ]
  },
  {
    "order": 86,
    "title": "Unit 86: Skip Lists as Persistent Indices",
    "desc": "Probabilistic versioning: Tracking high-speed history.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 9.6] The Time Shortcut",
        "explanation": "Ace: 'Standard persistence for lists is O(i) to update the i-th node. Persistent Skip Lists allow O(log N) updates while keeping the full history of the set.' Pico: 'Time-traveling express lanes! 🦜'",
        "codeSnippet": "Node* new_ver = update_skip_list(old_ver, key, val);",
        "encouragementText": "Ace: 'History is accessible because speed is preserved across time.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How does persistence work in a Multi-level structure like a skip list?",
        "options": ["Copy all levels", "Path-copy the O(log N) nodes affected by the update at every level", "It doesn't", "Pico rule"],
        "correctAnswer": "Path-copy the O(log N) nodes affected by the update at every level",
        "explanation": "Just like a persistent segment tree, we only duplicate what we change on the path to the node."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Level Persistence",
        "explanation": "Ace: 'Since each node has an array of pointers, we create a new array for the new version, pointing to old nodes where no change occurred.'",
        "encouragementText": "Pico: 'New pointers for new time! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Average memory to update a persistent skip list of size N.",
        "codeSnippet": "Space = O( ___ );",
        "correctAnswer": "log N",
        "explanation": "We only copy the nodes on the search path, which is logarithmic."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Database Snapshots",
        "explanation": "Ace: 'This is how high-speed databases (NoSQL) handle 'Snapshots'. You can query the database exactly as it looked at 5:01 PM because that version of the Skip List is still in memory.'",
        "encouragementText": "Ace: 'A point in time is a pointer in memory.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which is more space-efficient: Persistent List or Persistent Skip List?",
        "options": ["List (O(1) vs O(log N))", "Skip List", "Both same", "Pico guess"],
        "correctAnswer": "List (O(1) vs O(log N))",
        "explanation": "A simple list only copies 1 node to prepend; a skip list copies a whole path. But Skip List is much faster for searching!"
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Pointer Bloat",
        "explanation": "Ace: 'To prevent using too much RAM, Persistent Skip Lists often use 'Write-Ahead Logs' (WAL) to store changes before merging them into a new structural version.'",
        "encouragementText": "Pico: 'Don't waste the seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Accessing version T of data K.",
        "codeSnippet": "Node* res = search(roots[ ___ ], K);",
        "correctAnswer": "T",
        "explanation": "Using the root of the skip list version T to start the O(log N) search."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Chrono-Archivist",
        "explanation": "You have recorded the timeline with express precision. No past is lost; no speed is compromised. Ace: 'The archive is fast.'",
        "encouragementText": "Pico: 'Fast history! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match History terms!",
        "pairs": [
          { "key": "Root[T]", "value": "Entry to version T" },
          { "key": "Path Copy", "value": "Persistence technique" },
          { "key": "log N", "value": "Search & Update" }
        ]
      }
    ]
  },
  {
    "order": 87,
    "title": "Unit 87: Unrolled Persistence",
    "desc": "Memory density meets version control: Buffering changes in arrays.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 9.7] The Layered Block",
        "explanation": "Ace: 'To make an Unrolled list persistent, we copy the entire internal array when one element changes. This is efficient if the array size is small (e.g., 8-16 elements).' Pico: 'Copying the whole nest of seeds! 100% 🦜'",
        "codeSnippet": "Node* new_unrolled = copy_and_update(old_node, index, val);",
        "encouragementText": "Ace: 'Density is the buffer against persistent overhead.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is persistent unrolled list better for cache than persistent singly list?",
        "options": ["Fewer nodes", "Searching within the copied array block is extremely fast (L1 cache)", "It isn't", "Pico rule"],
        "correctAnswer": "Searching within the copied array block is extremely fast (L1 cache)",
        "explanation": "Even though you copy the block, once copied, processing it is purely local and sequential."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Block-Versioning",
        "explanation": "Ace: 'We only copy the node that changes. The NEW node's `next` pointer points to the OLD node's `next` original. Same structural sharing, just with bigger nodes.'",
        "encouragementText": "Pico: 'Big blocks share too! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Copying the array during update.",
        "codeSnippet": "new_node->elements = ___ (old_node->elements, sizeof(old_node->elements));\nnew_node->elements[i] = val;",
        "correctAnswer": "memcpy",
        "explanation": "Deep-copying the internal structure to Ensure independence between versions."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Snapshot isolation",
        "explanation": "Ace: 'This allows multiple read-only 'snapshots' of a heavy list. A background thread can modify the list without ANY locks, while readers see a consistent (old) version.'",
        "encouragementText": "Ace: 'Conflict is avoided by the existence of multiple realities.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Amortized cost of update in unrolled persistent list?",
        "options": ["O(BlockSize)", "O(1)", "O(N)", "Pico guess"],
        "correctAnswer": "O(BlockSize)",
        "explanation": "You must copy the array of size B every time you change an element."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Functional Arrays",
        "explanation": "Ace: 'This is the hidden logic behind many persistent vector implementations in languages like Clojure.'",
        "encouragementText": "Pico: 'Hidden magic! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Address of the next node (shared).",
        "codeSnippet": "new_node->next = old_node-> ___ ;",
        "correctAnswer": "next",
        "explanation": "The newly created version inherits the rest of the original chain."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Block Guardian",
        "explanation": "You have synthesized the machine and the mind. The cache and the history are one. Ace: 'The structure is dense and eternal.'",
        "encouragementText": "Pico: 'Block power! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Block terms!",
        "pairs": [
          { "key": "Deep Copy", "value": "Array persistence" },
          { "key": "Structural Share", "value": "Next pointer link" },
          { "key": "Snapshot", "value": "Point-in-time read" }
        ]
      }
    ]
  },
  {
    "order": 88,
    "title": "Unit 88: Finger Trees Foundations",
    "desc": "The ultimate linked structure: Deques with O(1) ends and O(log N) splits.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 9.8] The Pointing Hand",
        "explanation": "Ace: 'A Finger Tree is a purely functional, persistent deque. It's like a list that is recursively folded from BOTH ends. Adding/removing from either end is O(1) amortized.' Pico: 'A tree with fingers at the ends! 100% 🦜'",
        "codeSnippet": "data Tree = Empty | Single a | Deep (Digit a) (Tree (Node a)) (Digit a)",
        "encouragementText": "Ace: 'Symmetry is the architecture of balanced potential.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What are the 'Digits' at the ends of a Finger Tree?",
        "options": ["Numbers", "Small buffers (1-4 elements) of data", "Actual fingers", "Pico rule"],
        "correctAnswer": "Small buffers (1-4 elements) of data",
        "explanation": "They provide immediate O(1) access to the elements at the head and tail."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Recursive Inner Tree",
        "explanation": "Ace: 'If you exceed the Capacity of a Digit (e.g., 4 elements), you package 3 into a single Node and push it into the INNER tree. This recursion creates the log N depth.' Pico: 'Nesting the birds! 100% 🦜'",
        "encouragementText": "Pico: 'Recursive nests! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Complexity to add an element to the front AND back of a Finger Tree.",
        "codeSnippet": "Front = O(1), Back = O( ___ );",
        "correctAnswer": "1",
        "explanation": "Amortized O(1) because you rarely trigger the recursive inner push."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Sequence operations",
        "explanation": "Ace: 'Finger trees can be Split and Concatenated in O(log N). This makes them the ultimate structure for functional text editors and sequence libraries.'",
        "encouragementText": "Ace: 'The ends are just the beginning of the inner logic.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which language uses Finger Trees as its primary sequence type?",
        "options": ["Haskell (Data.Sequence)", "C", "Assembly", "Pico guess"],
        "correctAnswer": "Haskell (Data.Sequence)",
        "explanation": "It provides efficient persistent deques and splits across all data sizes."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Monoids",
        "explanation": "Ace: 'Finger Trees can store \"Monoids\" (like sums or max values) in their nodes, allowing binary search based on these properties in O(log N).'",
        "encouragementText": "Pico: 'Search at the ends! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Splitting a finger tree.",
        "codeSnippet": "pair<Tree, Tree> res = split(tree, ___ );",
        "correctAnswer": "predicate",
        "explanation": "Splitting based on a position or a value property."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Symmetrical Master",
        "explanation": "You have mastered the recursive hand. The list is now a tool of double-ended perfection. Ace: 'The balance is absolute.'",
        "encouragementText": "Pico: 'Both ends covered! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Finger terms!",
        "pairs": [
          { "key": "Digit", "value": "End buffer (O(1))" },
          { "key": "Inner Tree", "value": "Recursive spine" },
          { "key": "Concatenate", "value": "O(log N) join" }
        ]
      }
    ]
  },
  {
    "order": 89,
    "title": "Unit 89: Structurally Shared Deques",
    "desc": "Combining persistence with O(1) access to both ends.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 9.9] The Reversible Chain",
        "explanation": "Ace: 'How do you make a persistent deque in C without a full finger tree? Use two persistent singly lists (Front and Rear). Push to front list, push to rear. When one is empty, rebalance.' Pico: 'Two bird lines back to back! 100% 🦜'",
        "codeSnippet": "struct Deque {\n  Node *front, *rear;\n};",
        "encouragementText": "Ace: 'Unity is achieved by the balance of opposite directions.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the amortized cost of `pop_front` if the front list is empty?",
        "options": ["O(N) (Reversing the rear list into the front)", "O(1) amortized", "Impossible", "Pico rule"],
        "correctAnswer": "O(1) amortized",
        "explanation": "While reversing takes O(N), it only happens once for every N operations, making it O(1) on average."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Lazy Rebalancing",
        "explanation": "Ace: 'To ensure O(1) WORST-CASE (Real-time), we incrementally reverse the list in several steps instead of all at once.' Pico: 'Bit by bit! 100% 🦜'",
        "encouragementText": "Pico: 'Slow and steady! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Constructing Deque D with x at front.",
        "codeSnippet": "return Deque(cons(x, D.front), ___ );",
        "correctAnswer": "D.rear",
        "explanation": "The rear part remains shared; only the front list is updated persistently."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Bank's Physicist Method",
        "explanation": "Ace: 'We use potential functions and amortized analysis to PROVE that the dual-list deque remains efficient even under persistent usage.'",
        "encouragementText": "Ace: 'Proofs are the architecture of confidence.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is this persistent deque thread-safe?",
        "options": ["Yes (Immutable data is naturally thread-safe)", "No", "Only if locked", "Pico guess"],
        "correctAnswer": "Yes (Immutable data is naturally thread-safe)",
        "explanation": "Because no node is ever modified, multiple threads can read, share, and 'derive' new versions without any race conditions."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Okasaki's Deque",
        "explanation": "Ace: 'Chris Okasaki's research on purely functional data structures is the bible for these persistent chains.'",
        "encouragementText": "Pico: 'The bird bible! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Pushing to the rear.",
        "codeSnippet": "return Deque(D.front, ___ (x, D.rear));",
        "correctAnswer": "cons",
        "explanation": "Using the same cons logic on the rear-facing list."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Symmetrical Weaver",
        "explanation": "You have balanced the two flows into a single persistent union. The ends are now one. Ace: 'The union is efficient.'",
        "encouragementText": "Pico: 'Both ways! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Deque terms!",
        "pairs": [
          { "key": "Front List", "value": "Normal order" },
          { "key": "Rear List", "value": "Reversed order" },
          { "key": "Rebalance", "value": "O(N) periodic cost" }
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
        "explanation": "Ace: 'You have mastered the Immortal Chain. You can see through time and handle the infinite. You don't just link data; you link the past to the present with absolute mathematical certainty.' Pico: 'Stage 9 Complete! Only 10 units left to the Singularity! 🦜'",
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
        "explanation": "10 units, 100 lessons. This stage has equipped you with the most advanced functional and persistent tools in the Atlas. Ace: 'Chain without end.'",
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
        "explanation": "Ace: 'Prove you can transition from Cons to Lazy and Map to Finger Trees in your mental buffers.' Pico: 'I have the eternal mind! 100% 🦜'",
        "encouragementText": "Ace: 'The link reflects the sequence through the lens of immutability.'"
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
        "explanation": "You are 90% through the ultimate journey. Your final target: **Stage 10: Singularity & Distributed Lists**. Ace: 'The global chain is calling.'",
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
        "explanation": "The chains are shared. The past is present. You are a Stage 9 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=81; i<=90; i++) verify_perfect_logic(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The ninth decile of the 1,000-lesson curriculum for Linked Lists is fully verified."
      }
    ]
  }
];

module.exports = stage6;

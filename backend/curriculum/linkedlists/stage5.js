const stage5 = [
  {
    "order": 71,
    "title": "Unit 71: Pooled Memory Allocation",
    "desc": "Bypassing the standard heap: Creating custom pools for list nodes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.1] The Reservoir",
        "explanation": "Ace: 'Calling `malloc()` for every node is slow and causes fragmentation. A Memory Pool allocates a giant block of memory once and slices it into nodes on demand.' Pico: 'A big bag of seeds instead of buying one at a time! 🦜'",
        "codeSnippet": "Node* pool = (Node*)malloc(MAX_NODES * sizeof(Node));\nNode* free_list = pool;",
        "encouragementText": "Ace: 'Preparation is the antidote to overhead.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Memory Fragmentation'?",
        "options": ["Memory loss", "Scattered free holes in memory that are too small to use", "Fast allocation", "Pico rule"],
        "correctAnswer": "Scattered free holes in memory that are too small to use",
        "explanation": "Frequent small allocations (like nodes) leave gaps in the heap that can eventually prevent large allocations."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Free-List",
        "explanation": "Ace: 'Inside the pool, we link the unused nodes together in a stack-like structure called a Free-List. Allocation becomes a simple O(1) pop.' Pico: 'Recycling the empty nests! 🦜'",
        "encouragementText": "Pico: 'Eco-friendly birds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Allocating a node from the free-list.",
        "codeSnippet": "Node* n = free_list;\nfree_list = free_list-> ___ ;",
        "correctAnswer": "next",
        "explanation": "We move the free-list head to the next available block in the pool."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Locality Benefit",
        "explanation": "Ace: 'Because pooled nodes are physically adjacent in memory, the CPU pre-fetcher can load multiple nodes into the cache at once, significantly speeding up traversal.'",
        "encouragementText": "Ace: 'Physical proximity is logical speed.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do you 'Free' a node in a pooled system?",
        "options": ["Call free()", "Push it back onto the Free-List", "Delete it", "Pico guess"],
        "correctAnswer": "Push it back onto the Free-List",
        "explanation": "We don't return it to the OS; we keep it in our pool for the next allocation."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Pool Exhaustion",
        "explanation": "Ace: 'If the pool is empty, you must either allocate a new block (Chain of Pools) or return an error.'",
        "encouragementText": "Pico: 'Get more seeds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Returning node n to the free-list.",
        "codeSnippet": "n->next = free_list;\n___ = n;",
        "correctAnswer": "free_list",
        "explanation": "Pushing the returned node onto the top of the available stack."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Resource Manager",
        "explanation": "You have taken control of the heap. Every byte is accounted for and ready for speed. Ace: 'The overhead is gone.'",
        "encouragementText": "Pico: 'Purity in memory! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Pool terms!",
        "pairs": [
          { "key": "Allocation", "value": "Pop from Free-List" },
          { "key": "Deallocation", "value": "Push to Free-List" },
          { "key": "Fragmentation", "value": "Heap corruption" }
        ]
      }
    ]
  },
  {
    "order": 72,
    "title": "Unit 72: Reference Counting",
    "desc": "Automating memory management: The logic of self-deleting nodes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.2] The Echo",
        "explanation": "Ace: 'In C, forgetting to `free()` a node causes a Memory Leak. Reference Counting tracks how many pointers point to a node. When the count hits 0, the node deletes itself.' Pico: 'When no more birds care about the nest, it vanishes! 🦜'",
        "codeSnippet": "struct Node {\n  int data, ref_count;\n  struct Node* next;\n};",
        "encouragementText": "Ace: 'Accountability is the foundation of sustainability.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is a 'Circular Reference' problem in Ref Counting?",
        "options": ["A node pointing to itself", "Two nodes pointing to each other, preventing their count from ever reaching 0", "A fast loop", "Pico rule"],
        "correctAnswer": "Two nodes pointing to each other, preventing their count from ever reaching 0",
        "explanation": "This is the classic weakness of reference counting; cycles stay in memory forever."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Incremental Release",
        "explanation": "Ace: 'When a head node is deleted, its count drops to 0. It then decrements the count of its child (Next), which might also drop to 0, triggering a chain reaction of cleanup.' Pico: 'The Great Snapping! 🦜'",
        "encouragementText": "Pico: 'Cleanup crew! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Decrement and delete check.",
        "codeSnippet": "if (--node->ref_count ___ 0) free_node(node);",
        "correctAnswer": "==",
        "explanation": "The actual deletion only happens when the last observer disappears."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Smart Pointers",
        "explanation": "Ace: 'In C++, `std::shared_ptr` uses this exact mechanism. In C, you must manually call `retain()` and `release()` functions.'",
        "encouragementText": "Ace: 'Automation requires the initial design of discipline.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "When should you call `retain(node)`?",
        "options": ["When you delete a node", "When you assign a new pointer to point to it", "Every morning", "Pico guess"],
        "correctAnswer": "When you assign a new pointer to point to it",
        "explanation": "You 'claim' ownership of the node, increasing its protection."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Atomic Counters",
        "explanation": "Ace: 'In multi-threaded environments, `ref_count` must be modified using atomic increments to prevent race conditions.'",
        "encouragementText": "Pico: 'Safe counts! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Assigning a new pointer p to node n.",
        "codeSnippet": "if(p) release(p);\np = n;\nif(p) ___ (p);",
        "correctAnswer": "retain",
        "explanation": "Releasing the old object and retaining the new one to maintain valid counts."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Lifespan Watcher",
        "explanation": "You have automated the end. The memory lives as long as it is needed, and not a moment longer. Ace: 'The cycle is closed.'",
        "encouragementText": "Pico: 'No more leaks! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Ref Counting terms!",
        "pairs": [
          { "key": "Retain", "value": "Count++" },
          { "key": "Release", "value": "Count--" },
          { "key": "Cycle", "value": "Leak potential" }
        ]
      }
    ]
  },
  {
    "order": 73,
    "title": "Unit 73: Lock-free Lists (Atomic CAS)",
    "desc": "Conquering concurrency: Updating pointers without Mutexes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.3] The Unblocking Path",
        "explanation": "Ace: 'Traditional locking (Mutex) is slow and causes bottlenecks. Lock-free code uses Atomic CAS (Compare-and-Swap) to update pointers only if they haven't changed since we last checked.' Pico: 'No more stopping at red lights! 🦜'",
        "codeSnippet": "while(!atomic_compare_and_swap(&head, old_val, new_val));",
        "encouragementText": "Ace: 'True speed is found in the absence of waiting.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does CAS(addr, old, new) do if *addr != old?",
        "options": ["Updates it to new anyway", "Fails and returns false", "Crashes", "Pico rule"],
        "correctAnswer": "Fails and returns false",
        "explanation": "It means some other thread snuck in and changed the value. We must try again!"
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The ABA Problem",
        "explanation": "Ace: 'A huge trap in lock-free lists! If a node is deleted (A -> B) and then re-added (A), CAS thinks nothing changed, but the internal structure might be ruined.' Pico: 'A bird left and a twin arrived! 🦜'",
        "encouragementText": "Pico: 'Watch the birds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Setting new head in an atomic push.",
        "codeSnippet": "Node* old_head = head;\nnew_node->next = old_head;\nif (CAS(&head, ___ , new_node)) break;",
        "correctAnswer": "old_head",
        "explanation": "We only update the head if it is still the same node we just linked our 'next' to."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Hazard Pointers",
        "explanation": "Ace: 'To safely delete nodes in a lock-free list, we use Hazard Pointers. These are global pointers indicating: \"I am reading this node, DO NOT free it yet!\"'",
        "encouragementText": "Ace: 'Safety is a shared responsibility in a concurrent world.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In the lock-free model, what happens if a thread is delayed indefinitely?",
        "options": ["All threads stop", "Other threads continue (Wait-free / Lock-free property)", "System crashes", "Pico guess"],
        "correctAnswer": "Other threads continue (Wait-free / Lock-free property)",
        "explanation": "Since there are no locks, one stalled thread cannot block the progress of others."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Efficiency",
        "explanation": "Ace: 'Lock-free structures are vital for high-frequency trading and operating system kernels where every nanosecond counts.'",
        "encouragementText": "Pico: 'Fastest flight! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Infinite loop for CAS retry.",
        "codeSnippet": "for(;;) {\n  old_val = *addr;\n  if ( ___ (&addr, old_val, new_val)) break;\n}",
        "correctAnswer": "atomic_compare_exchange",
        "explanation": "The standard C11/C++11 atomic function used to implement lock-free logic."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Atomic Pilot",
        "explanation": "You have removed the gates. The threads move in harmony without pausing. Ace: 'The flow is unblocked.'",
        "encouragementText": "Pico: 'No waiting! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Concurrent terms!",
        "pairs": [
          { "key": "CAS", "value": "Check and set" },
          { "key": "ABA", "value": "Stale node hazard" },
          { "key": "Mutex", "value": "Blocking lock" }
        ]
      }
    ]
  },
  {
    "order": 74,
    "title": "Unit 74: Optimistic Synchronization",
    "desc": "Assuming success: Searching without locks and validating at the end.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.4] The Leap of Faith",
        "explanation": "Ace: 'Optimistic synchronization traverses the list with NO locks. Once the target is found, it locks only the node and its predecessor, then validates if they are still connected and not deleted.' Pico: 'Fly first, check the map later! 🦜'",
        "codeSnippet": "search();\nlock(pred); lock(curr);\nif(validate(pred, curr)) update();\nunlock(all);",
        "encouragementText": "Ace: 'Efficiency is often a bet on the common case.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does the `validate(pred, curr)` function check?",
        "options": ["Distance", "If pred still points to curr AND neither is deleted", "The node color", "Pico rule"],
        "correctAnswer": "If pred still points to curr AND neither is deleted",
        "explanation": "While we were searching without locks, another thread could have deleted the nodes we just arrived at."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Read-Heavy Load",
        "explanation": "Ace: 'This is extremely fast for searching because multiple threads can traverse the list simultaneously without any memory barriers.' Pico: 'Parallel bird watching! 🦜'",
        "encouragementText": "Pico: 'Watch together! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Condition for successful validation.",
        "codeSnippet": "return !pred->deleted && !curr->deleted && pred->next ___ curr;",
        "correctAnswer": "==",
        "explanation": "Confirmation that the structural link still exists exactly as it did during the search."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Writing Penalty",
        "explanation": "Ace: 'If a write fails validation, the thread MUST restart the search from the head. This makes it poor for high-contention write-heavy loads.'",
        "encouragementText": "Ace: 'Conflict is the price of optimism.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "When do you release the locks?",
        "options": ["Never", "Immediately after the update or validation failure", "At the end of the program", "Pico guess"],
        "correctAnswer": "Immediately after the update or validation failure",
        "explanation": "To allow other threads to perform their own updates as soon as possible."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Lock Granularity",
        "explanation": "Ace: 'This is 'Fine-grained' locking. We only lock a tiny portion of the list, rather than the whole thing.'",
        "encouragementText": "Pico: 'Tiny locks! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Locking the predecessor node.",
        "codeSnippet": "pred-> ___ .lock();",
        "correctAnswer": "mutex",
        "explanation": "Each node in a fine-grained list usually contains its own internal mutex."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Optimist",
        "explanation": "You have trusted the web to be stable. You only verify when it matters. Ace: 'The search is free.'",
        "encouragementText": "Pico: 'Keep the faith! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Sync terms!",
        "pairs": [
          { "key": "Optimistic", "value": "Lock after search" },
          { "key": "Pessimistic", "value": "Lock entire path" },
          { "key": "Validation", "value": "Integrity check" }
        ]
      }
    ]
  },
  {
    "order": 75,
    "title": "Unit 75: Lazy Synchronization",
    "desc": "Logical vs Physical Deletion: Speeding up list updates.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.5] The Ghost Node",
        "explanation": "Ace: 'Lazy Synchronization separates deletion into 2 steps: 1. Set a `deleted` flag (Logical). 2. Remove pointers (Physical). Searches can ignore nodes with the flag set without needing to lock.' Pico: 'Marking the nest for removal, but keeping the branches for now! 🦜'",
        "codeSnippet": "node->deleted = true; // Logical\npred->next = node->next; // Physical",
        "encouragementText": "Ace: 'Separation of intent from action is the key to non-blocking flow.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the main advantage of Lazy Sync over Optimistic?",
        "options": ["It uses less memory", "Validation is faster because you only check the 'deleted' flag instead of re-traversing", "It never fails", "Pico rule"],
        "correctAnswer": "Validation is faster because you only check the 'deleted' flag instead of re-traversing",
        "explanation": "You don't need to re-scan the entire list to see if a node is still 'reachable'; you just check its internal flag."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Read-only search",
        "explanation": "Ace: 'In Lazy sync, `contains(x)` doesn't need locks at all. It just looks for the key AND checks if `!node->deleted`.' Pico: 'Scanning without stopping! 🦜'",
        "encouragementText": "Pico: 'No brakes! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The logical check in search.",
        "codeSnippet": "if (curr->key == target && ___ ) return true;",
        "correctAnswer": "!curr->deleted",
        "explanation": "A node is only 'found' if it hasn't been logically marked for death."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Physical Cleanup",
        "explanation": "Ace: 'The thread that marked the node logically is usually responsible for the physical cleanup later, or it can be left for a background 'Sweeper'.' ",
        "encouragementText": "Ace: 'Labor is divided to maintain the pace of the observer.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Lazy Sync Wait-free?",
        "options": ["Yes", "No (Updates still need to lock the relevant nodes)", "Only for the root", "Pico guess"],
        "correctAnswer": "No (Updates still need to lock the relevant nodes)",
        "explanation": "While searches are non-blocking, writers must still synchronize to avoid pointer corruption."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Real-world usage",
        "explanation": "Ace: 'This is used in high-performance JVM Concurrent Linked Queues.'",
        "encouragementText": "Pico: 'Enterprise bird! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Marking a node for deletion.",
        "codeSnippet": "___ = true;",
        "correctAnswer": "curr->deleted",
        "explanation": "Step 1: The logical signal that the node is no longer part of the set."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Persistent Ghost",
        "explanation": "You have separated the word from the deed. The list moves on even as the past lingers. Ace: 'The state is decoupled.'",
        "encouragementText": "Pico: 'Ghost nodes! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Deletion phases!",
        "pairs": [
          { "key": "Logical", "value": "Flag set to True" },
          { "key": "Physical", "value": "Pointer update" },
          { "key": "Validation", "value": "!deleted check" }
        ]
      }
    ]
  },
  {
    "order": 76,
    "title": "Unit 76: C Smart Pointers (Manual Std/Unique)",
    "desc": "Simulating modern C++ features in raw C for safer lists.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.6] The Auto-Pilot",
        "explanation": "Ace: 'In C, we can simulate Smart Pointers using a structure that contains a pointer and a destructor function. This ensures that when the \\\"smart scope\\\" ends, the node is cleaned up.' Pico: 'Self-cleaning nests! 🦜'",
        "codeSnippet": "typedef struct {\n  Node* ptr;\n} UniquePtr;\nvoid destroy(UniquePtr* u) { if(u->ptr) free(u->ptr); }",
        "encouragementText": "Ace: 'Design your own safety when the environment lacks it.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'Rule of Three' in manual memory management?",
        "options": ["Fast, Cheap, Good", "Destructor, Copy Constructor, Assignment Operator", "Read, Write, Execute", "Pico rule"],
        "correctAnswer": "Destructor, Copy Constructor, Assignment Operator",
        "explanation": "If you need one to manage memory, you likely need all three to prevent double-frees or leaks."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Unique vs Shared",
        "explanation": "Ace: 'A Unique Pointer has EXACTLY one owner. In C, you model this by setting the old pointer to NULL after a transfer.' Pico: 'Only one bird gets the key! 🦜'",
        "encouragementText": "Pico: 'Mine only! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Transferring ownership (Move semantics) in C.",
        "codeSnippet": "dst->ptr = src->ptr;\nsrc->ptr = ___ ;",
        "correctAnswer": "NULL",
        "explanation": "The source 'gives up' the pointer so only one instance is responsible for freeing it."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Stack vs Heap",
        "explanation": "Ace: 'Store the Smart Pointer struct on the STACK, but point to a Node on the HEAP. When the stack frame returns, your cleanup logic triggers.'",
        "encouragementText": "Ace: 'The finite scope of the stack governs the infinite potential of the heap.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a UniquePtr be copied?",
        "options": ["Yes", "No (It must be MOVED to preserve single ownership)", "Only if small", "Pico guess"],
        "correctAnswer": "No (It must be MOVED to preserve single ownership)",
        "explanation": "Copying would create two owners, leading to a double-free when they both go out of scope."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] RAII",
        "explanation": "Ace: 'Resource Acquisition Is Initialization. In C, you use macros or specific function scopes to simulate this C++ pattern.'",
        "encouragementText": "Pico: 'Initialize then use! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Freeing the inner node.",
        "codeSnippet": "if (ptr != NULL) { \n  ___ (ptr); \n  ptr = NULL; \n}",
        "correctAnswer": "free",
        "explanation": "The actual C heap operation performed by the smart destructor."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Safety Engineer",
        "explanation": "You have built a safety net in the wilderness of C. The nodes are protected by the law of scope. Ace: 'The security is engineered.'",
        "encouragementText": "Pico: 'Safety first! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Pointer types!",
        "pairs": [
          { "key": "Unique", "value": "Single owner" },
          { "key": "Shared", "value": "Ref-counted" },
          { "key": "Raw", "value": "Manual danger" }
        ]
      }
    ]
  },
  {
    "order": 77,
    "title": "Unit 77: Cache Locality in Lists",
    "desc": "Optimization for modern CPUs: Aligning nodes with the cache line.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.7] The Speed of Silence",
        "explanation": "Ace: 'Nodes in a standard list are scattered. A Cache Line is usually 64 bytes. If we align our nodes to these 64-byte boundaries, we ensure minimum cache misses during access.' Pico: 'Staying in the same line! 🦜'",
        "codeSnippet": "struct Node {\n  int data;\n  char padding[60];\n} __attribute__((aligned(64)));",
        "encouragementText": "Ace: 'Alignment with the hardware is the ultimate optimization.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if a node spans across two cache lines?",
        "options": ["It is 2x faster", "It needs 2 cache fetches instead of 1, slowing down access", "It disappears", "Pico rule"],
        "correctAnswer": "It needs 2 cache fetches instead of 1, slowing down access",
        "explanation": "Unaligned memory is the enemy of high-performance structure design."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] False Sharing",
        "explanation": "Ace: 'If two different variables are on the same cache line, and two CPU cores update them, they waste time FIGHTING for the line. We use padding to avoid this.' Pico: 'Don't fight over the same branch! 🦜'",
        "encouragementText": "Pico: 'Personal space! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculating padding for 64-byte alignment of a 4-byte int.",
        "codeSnippet": "int data; \nchar padding[ ___ ];",
        "correctAnswer": "60",
        "explanation": "4 (int) + 60 = 64 bytes total."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Prefetching",
        "explanation": "Ace: 'Modern CPUs look ahead. By using `__builtin_prefetch()`, we can tell the CPU to start loading the NEXT node while we are still processing the CURRENT one.'",
        "encouragementText": "Ace: 'Anticipation is the speed of thought.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Does alignment use MORE or LESS memory?",
        "options": ["Less", "More (because of padding)", "Same", "Pico guess"],
        "correctAnswer": "More (because of padding)",
        "explanation": "We trade memory for speed. Modern systems have plenty of RAM but restricted cache bandwidth."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Data Layout",
        "explanation": "Ace: 'Sometimes, instead of an array of nodes, we use a structure of arrays (SoA) to keep the 'Next' pointers together for even faster scanning.'",
        "encouragementText": "Pico: 'Pointers in a row! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Attribute for alignment in GCC/Clang.",
        "codeSnippet": "___ (aligned(64))",
        "correctAnswer": "__attribute__",
        "explanation": "The compiler directive used to force memory alignment."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Cache Whisperer",
        "explanation": "You have spoken to the metal. The electrons move with zero friction. Ace: 'The alignment is perfect.'",
        "encouragementText": "Pico: 'I feel the speed! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Hardware terms!",
        "pairs": [
          { "key": "Cache Line", "value": "64-byte block" },
          { "key": "Alignment", "value": "Address % 64 == 0" },
          { "key": "Padding", "value": "Dummy bytes for space" }
        ]
      }
    ]
  },
  {
    "order": 78,
    "title": "Unit 78: Distributed Graph Links",
    "desc": "Linked nodes across machines: The RPC pointer.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.8] The Global Chain",
        "explanation": "Ace: 'What if Next is on another computer? We replace the memory address with a Global ID (URI). Accessing it requires a Network Call (RPC).' Pico: 'A long distance bird call! 🦜'",
        "codeSnippet": "struct RemoteNode {\n  int data;\n  string remote_uri; // \"pico://server2/node5\"\n};",
        "encouragementText": "Ace: 'Connection is not limited by physical distance.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the penalty of a Remote Pointer access compared to Local?",
        "options": ["10x", "1,000,000x (Microseconds vs Nanoseconds)", "Same", "Pico rule"],
        "correctAnswer": "1,000,000x (Microseconds vs Nanoseconds)",
        "explanation": "Network latency is the massive wall of distributed systems."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Caching Remote Nodes",
        "explanation": "Ace: 'To hide latency, we cache remote nodes locally. But then we have the problem of CAP Theorem: Consistency, Availability, or Partition Tolerance!' Pico: 'Which nest has the real seed? 🦜'",
        "encouragementText": "Pico: 'Pick the best bird! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Fetching a remote node.",
        "codeSnippet": "if (!is_local(next_ptr)) return ___ (next_ptr);",
        "correctAnswer": "rpc_fetch",
        "explanation": "A specialized function that makes a network request to retrieve the distant data."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Immutable Links",
        "explanation": "Ace: 'In distributed systems, links are often immutable (never change). This makes caching perfectly safe because once you download a node, it will never be outdated.'",
        "encouragementText": "Ace: 'Immutability is the secret to scaling across the stars.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Where are distributed linked lists used?",
        "options": ["Blockchain", "Distributed File Systems (IPFS)", "Large Scale Social Graphs", "All of the above"],
        "correctAnswer": "All of the above",
        "explanation": "Any massive dataset that doesn't fit on one disk becomes a distributed graph."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Hashing as Pointer",
        "explanation": "Ace: 'We often use the SHA-256 HASH of the data as the pointer (Content Addressing). This identifies the node by WHAT it is, not WHERE it is.'",
        "encouragementText": "Pico: 'Hash is the key! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Type of identifier for a remote node.",
        "codeSnippet": "string ___ = \"node_hash_abc123\";",
        "correctAnswer": "remote_id",
        "explanation": "Using a string-based ID instead of a numerical memory address."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Global Weaver",
        "explanation": "You have linked the world. The distance is a mere variable. Ace: 'The web is infinite.'",
        "encouragementText": "Pico: 'Connected forest! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Dist terms!",
        "pairs": [
          { "key": "RPC", "value": "Remote Call" },
          { "key": "Latency", "value": "Network delay" },
          { "key": "Immutable", "value": "Never changes" }
        ]
      }
    ]
  },
  {
    "order": 79,
    "title": "Unit 79: Pooled Deques",
    "desc": "Combining pool memory with the double-ended power of CDLL.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.9] The Ultimate Line",
        "explanation": "Ace: 'A Deque (Double Ended Queue) implemented via a Circular Doubly Linked List in a Memory Pool is the peak of basic list efficiency. Max speed, zero fragmentation, O(1) all ends.' Pico: 'The super-nest! 🦜'",
        "codeSnippet": "push_front(), push_back(), pop_front(), pop_back()",
        "encouragementText": "Ace: 'Synthesis is the combination of proven strengths into a single tool.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is a linked deque better than an array-based one for millions of elements?",
        "options": ["Faster access", "No O(N) realloc/resize operations", "Smaller size", "Pico rule"],
        "correctAnswer": "No O(N) realloc/resize operations",
        "explanation": "Arrays must be copied when they grow; linked lists just ask the pool for one more node."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Multi-threading Pool",
        "explanation": "Ace: 'We use Thread-Local storage for pools to ensure each CPU core has its own 'bag of seeds' without locking against other cores.' Pico: 'Private seed bags! 🦜'",
        "encouragementText": "Pico: 'Separate bags! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Popping from the front of the CDLL deque.",
        "codeSnippet": "Node* old_head = head;\nhead = head->next;\nlink(head, tail);\npool_free( ___ );",
        "correctAnswer": "old_head",
        "explanation": "Immediately returning the popped node to the pool for reuse."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Work Stealing",
        "explanation": "Ace: 'This structure is the foundation of 'Work Stealing' schedulers where one CPU core 'steals' a task from the BACK of another core's deque.'",
        "encouragementText": "Ace: 'Dynamics in load require flexibility in structure.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of push_front in a CDLL deque?",
        "options": ["O(N)", "O(1)", "O(log N)", "Pico guess"],
        "correctAnswer": "O(1)",
        "explanation": "Just update head and tail links! Constant time."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Boundary Check",
        "explanation": "Ace: 'When pool_size == 0, the deque must communicate with the global resource manager to expand its local reservoir.'",
        "encouragementText": "Pico: 'Refill! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Checking if deque is empty.",
        "codeSnippet": "if (count ___ 0) return true;",
        "correctAnswer": "==",
        "explanation": "Basic state tracking."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Performance Master",
        "explanation": "You have synthesized the peak. The chain is strong, fast, and light. Ace: 'The tool is perfect.'",
        "encouragementText": "Pico: 'S-Rank tool! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Deque terms!",
        "pairs": [
          { "key": "Double Ended", "value": "Front and Back" },
          { "key": "Pooled", "value": "Pre-allocated" },
          { "key": "Work-Steal", "value": "Multi-core logic" }
        ]
      }
    ]
  },
  {
    "order": 80,
    "title": "Unit 80: Stage 8 Graduation (The Performance Expert)",
    "desc": "Claiming the metal peak: CAS and Pools are yours.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 8.10] The Summit of Metal",
        "explanation": "Ace: 'You have looked past the high-level abstractions and into the machine. You have mastered memory, concurrency, and cache. You are not just a coder; you are an engineer.' Pico: 'Stage 8 Complete! We fly to the Persistence and Functional Lists next! 🦜'",
        "encouragementText": "Ace: 'Performance is the ultimate expression of structural understanding.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the primary tool for lock-free pointer updates?",
        "options": ["Mutex", "Atomic CAS", "Wait()", "Pico guess"],
        "correctAnswer": "Atomic CAS",
        "explanation": "Compare-and-Swap is the fundamental building block of non-blocking data structures."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Depth Summary",
        "explanation": "10 units, 100 lessons. This stage has equipped you with the engineering tools for the Academic Atlas. Ace: 'Link with speed.'",
        "encouragementText": "Pico: '80% through the 1,000-lesson gauntlet! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Benefit of a Memory Pool?",
        "options": ["More colors", "Zero fragmentation and fast O(1) allocation", "Infinite memory", "Pico secret"],
        "correctAnswer": "Zero fragmentation and fast O(1) allocation",
        "explanation": "By managing our own block, we bypass the heavy and complex OS heap logic."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from CAS to Pools and Latency to Locality in your mental buffers.' Pico: 'I have the metal soul! 🦜'",
        "encouragementText": "Ace: 'The logic reflects the machine through the lens of the atomic operation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which sync method is fastest for read-heavy workloads?",
        "options": ["Blocking Mutex", "Optimistic / Lazy Synchronization", "Single-threaded", "Pico guess"],
        "correctAnswer": "Optimistic / Lazy Synchronization",
        "explanation": "They allow multiple threads to read and traverse without touching any shared locks or cache-invalidating barriers."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 80% through the ultimate journey. Your next target: **Stage 9: Persistence & Functional Lists**. Ace: 'The immutable chain awaits.'",
        "encouragementText": "Pico: 'Stage 9 seeds are waiting! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (performance_expert == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Memory & Performance phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Performance Expert",
        "explanation": "The memory is pooled. The locks are removed. You are a Stage 8 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=71; i<=80; i++) verify_metal_logic(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The eighth decile of the 1,000-lesson curriculum for Linked Lists is fully verified."
      }
    ]
  }
];

module.exports = stage5;

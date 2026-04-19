const stage5 = [
  {
    "order": 71,
    "title": "Unit 71: Blocking Queues (Mutex & Signal)",
    "desc": "Orchestrating threads: Waiting for the buffer to fill or empty.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.1] The Gatekeeper",
        "explanation": "Ace: 'In multi-threaded systems, a Blocking Queue is the fundamental way to communicate safely. If the queue is empty, the Consumer thread SLEEPS until a Producer adds something. This saves CPU compared to busy-waiting.' Pico: 'Sleeping birds wake up when seeds arrive! 100% 🦜'",
        "codeSnippet": "lock(mutex);\nwhile(q.empty()) wait(cond, mutex);\nval = q.pop();\nunlock(mutex);",
        "encouragementText": "Ace: 'Patience is a resource managed by the signal.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why do we use `while(q.empty())` instead of `if(q.empty())` inside the lock?",
        "options": ["Just for fun", "To handle 'Spurious Wakeups' (where wait() returns even if no one signaled)", "Performance", "Pico rule"],
        "correctAnswer": "To handle 'Spurious Wakeups' (where wait() returns even if no one signaled)",
        "explanation": "Operating systems can wake a thread arbitrarily. Re-checking the condition ensures the queue is actually not empty before we try to pop."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Producer-Consumer Pattern",
        "explanation": "Ace: 'The Producer adds data and calls `signal()`. The Consumer waits and then processes. This decouples the speed of creation from the speed of consumption.' Pico: 'One bird cooks, one bird eats! 100% 🦜'",
        "encouragementText": "Pico: 'Tasty seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Signaling the waiting consumers after pushing data.",
        "codeSnippet": "q.push(val);\ncond. ___ ();",
        "correctAnswer": "signal",
        "explanation": "Waking up exactly one thread that is waiting for data to become available."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Bounded Blocking Queues",
        "explanation": "Ace: 'If the queue has a MAX size, the Producer must also wait if it's FULL. This provides 'Backpressure', preventing the system from running out of memory.'",
        "encouragementText": "Ace: 'Capacity is the boundary of stability.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if you forget to `unlock(mutex)` after a pop?",
        "options": ["The queue is faster", "Deadlock: No other thread can ever access the queue again", "Nothing", "Pico guess"],
        "correctAnswer": "Deadlock: No other thread can ever access the queue again",
        "explanation": "Locks must always be released to allow the system to progress."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Multiple Consumers",
        "explanation": "Ace: 'If you have Many consumers, use `broadcast()` to wake them all up, though usually `signal()` is enough to wake the next available worker.'",
        "encouragementText": "Pico: 'Wake up everyone! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Condition for producer to wait in a bounded queue.",
        "codeSnippet": "while(q.size() ___ MAX) wait(not_full, mtx);",
        "correctAnswer": "==",
        "explanation": "The producer must wait as long as the queue is at maximum capacity."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Thread Orchestrator",
        "explanation": "You have synchronized the flow of work. The threads move in a safe, predictable dance. Ace: 'The signal is loud.'",
        "encouragementText": "Pico: 'Ready to work! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Blocking terms!",
        "pairs": [
          { "key": "Mutex", "value": "Exclusive Access" },
          { "key": "Condition Var", "value": "Wait/Signal mechanism" },
          { "key": "Backpressure", "value": "Full queue handling" }
        ]
      }
    ]
  },
  {
    "order": 72,
    "title": "Unit 72: Lock-free Queues (Intro to CAS)",
    "desc": "Removing the bottleneck: Updating buffers with atomic instructions.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.2] The Atomic Flip",
        "explanation": "Ace: 'Locks are expensive. Lock-free queues use Compare-and-Swap (CAS). It's a CPU instruction that updates a memory location only if its current value matches what we expect.' Pico: 'Checking the seed count before adding more, in a split second! 100% 🦜'",
        "codeSnippet": "while(!CAS(&tail, expected, new_val)) retry();",
        "encouragementText": "Ace: 'True concurrency is achieved by the precision of the atomic moment.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the primary benefit of a Lock-free Queue?",
        "options": ["Easier to write", "Higher throughput (No thread sleep/context switch overhead)", "Uses less RAM", "Pico rule"],
        "correctAnswer": "Higher throughput (No thread sleep/context switch overhead)",
        "explanation": "Because threads never 'sleep' on a mutex, they spend all their time doing actual work."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Livelock",
        "explanation": "Ace: 'In lock-free code, threads don't Sleep, they Spin. If two threads keep failing CAS simultaneously, they might waste CPU forever. This is called Livelock.' Pico: 'Dizzy birds! 100% 🦜'",
        "encouragementText": "Pico: 'Stop spinning! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Standard signature of CAS.",
        "codeSnippet": "bool CAS(T* addr, T ___ , T new_val);",
        "correctAnswer": "expected",
        "explanation": "We compare the current memory content with our 'expected' value before swapping it with 'new_val'."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Memory Barriers",
        "explanation": "Ace: 'CPUs reorder instructions for speed. Lock-free code requires 'Memory Barriers' (Fences) to ensure that the data is ACTUALLY written before the pointer is updated.'",
        "encouragementText": "Ace: 'Visibility is the prerequisite for consistency.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In a lock-free queue, how do multiple producers avoid writing to the same slot?",
        "options": ["They take turns", "They use CAS to increment the 'Tail' pointer atomically", "They guess", "Pico guess"],
        "correctAnswer": "They use CAS to increment the 'Tail' pointer atomically",
        "explanation": "The machine ensures that only one thread 'wins' the right to the next slot."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Atomic Fetch-and-Add",
        "explanation": "Ace: 'Instruction like `atomic_add()` are simpler than CAS and are often used to increment counters in a thread-safe way.'",
        "encouragementText": "Pico: 'Add one! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Getting the next index in a circular lock-free buffer.",
        "codeSnippet": "idx = atomic_fetch_add(&index_counter, 1) ___ MAX_SIZE;",
        "correctAnswer": "%",
        "explanation": "Atomically getting a unique index and wrapping it around the buffer."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Atomic Pilot",
        "explanation": "You have unlocked the speed of the atom. The machine instructions are your tools. Ace: 'The update is instant.'",
        "encouragementText": "Pico: 'No waiting! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Atomic terms!",
        "pairs": [
          { "key": "CAS", "value": "Compare and Swap" },
          { "key": "Barrier", "value": "Instruction Ordering" },
          { "key": "Spinning", "value": "Retrying in a loop" }
        ]
      }
    ]
  },
  {
    "order": 73,
    "title": "Unit 73: The Michael-Scott Queue",
    "desc": "Advanced Concurrency: The industry standard for linked queues.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.3] The Two-Headed Dragon",
        "explanation": "Ace: 'Maged Michael and Michael Scott invented the gold standard for lock-free queues. It uses a Sentinel node so that Head and Tail never point to the same thing, allowing Producers and Consumers to work simultaneously without any conflict!' Pico: 'Two ends that don't bite each other! 100% 🦜'",
        "codeSnippet": "struct Queue {\n  Node *head, *tail;\n};",
        "encouragementText": "Ace: 'Independence is achieved through structural separation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the role of the 'Sentinel' (Dummy) node in the M-S Queue?",
        "options": ["To store extra data", "To ensure the queue is never truly empty, preventing head/tail collisions", "To look pretty", "Pico rule"],
        "correctAnswer": "To ensure the queue is never truly empty, preventing head/tail collisions",
        "explanation": "If head and tail are different, they can be updated by different threads using separate CAS operations without interference."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Helping Hand",
        "explanation": "Ace: 'In M-S Queue, if a Producer finds the tail is 'Lagging' (pointed to a node that isn't the last), it 'helps' by moving the tail forward before adding its own node.' Pico: 'Birds helping birds! 100% 🦜'",
        "encouragementText": "Pico: 'Teamwork! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Condition for an empty M-S Queue.",
        "codeSnippet": "return head ___ tail;",
        "correctAnswer": "==",
        "explanation": "In M-S, if head and tail both point to the Sentinel, the queue contains no real data."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] CAS Loop for Enqueue",
        "explanation": "Ace: 'Enqueue has two steps: 1. Link the new node to Tail->Next. 2. Move the Tail pointer to the new node. Both must handle interference from other threads.'",
        "encouragementText": "Ace: 'Persistence in the loop is the price of a lock-free world.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if a thread crashes during step 1 of Enqueue?",
        "options": ["The queue is broken forever", "Other threads will 'Help' and finish the move (Step 2)", "Nothing", "Pico guess"],
        "correctAnswer": "Other threads will 'Help' and finish the move (Step 2)",
        "explanation": "This is why M-S is so robust; the algorithm is designed so no thread can 'lock' the structure even if it dies."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Complexity",
        "explanation": "Ace: 'M-S Queue provides O(1) concurrent access. It is the core of Java's `ConcurrentLinkedQueue`.'",
        "encouragementText": "Pico: 'Enterprise bird! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Trying to link next node in Enqueue.",
        "codeSnippet": "if (CAS(&tail->next, NULL, newNode)) ___ ;",
        "correctAnswer": "break",
        "explanation": "If we successfully link the node, we have finished the first part of the operation."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Protocol Master",
        "explanation": "You have implemented the most powerful linked queue in the Atlas. Flow is now unstoppable. Ace: 'The dragon is tamed.'",
        "encouragementText": "Pico: 'Double heads! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match M-S terms!",
        "pairs": [
          { "key": "Sentinel", "value": "Placeholder node" },
          { "key": "Lagging Tail", "value": "Pointer needing help" },
          { "key": "Non-blocking", "value": "Resilient to crashes" }
        ]
      }
    ]
  },
  {
    "order": 74,
    "title": "Unit 74: ABA Problem & Versioning",
    "desc": "The ghost in the machine: Dealing with recycled memory in lock-free code.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.4] The Twin Illusion",
        "explanation": "Ace: 'The ABA Problem: Thread 1 sees value A. Thread 2 pops A, pushes B, pops B, and pushes A again. Thread 1 wakes up, sees A, and thinks NOTHING happened. But the internal pointers are now invalid!' Pico: 'A bird left and its twin arrived! 100% 🦜'",
        "codeSnippet": "if (curr_val == A) // But is it the SAME A?",
        "encouragementText": "Ace: 'Identity is more than equivalence of value.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the standard solution to the ABA problem?",
        "options": ["Better hardware", "Tagged Pointers (adding a version number/counter to the pointer)", "Locks", "Pico rule"],
        "correctAnswer": "Tagged Pointers (adding a version number/counter to the pointer)",
        "explanation": "By keeping a 'Change Count' that increments every push/pop, CAS(A, 1) will fail if the value is (A, 2), even if the address is identical."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Hazard Pointers",
        "explanation": "Ace: 'Another solution is Hazard Pointers. A thread 'Announces' that it's using a node. The memory manager is forbidden from recycling that node until the thread is finished.' Pico: 'Do not touch my nest! 100% 🦜'",
        "encouragementText": "Pico: 'Stay away! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "A Tagged Pointer structure.",
        "codeSnippet": "struct TaggedPointer {\n  Node* ptr;\n  unsigned int ___ ;\n};",
        "correctAnswer": "tag",
        "explanation": "The tag (or version) ensures uniqueness across time."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Double-CAS (DWCAS)",
        "explanation": "Ace: 'Some CPUs support 128-bit CAS that can update BOTH the pointer and the tag in a single atomic cycle. This is the ultimate weapon against ABA.'",
        "encouragementText": "Ace: 'Precision at the bit-level solves logic at the system-level.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Does the ABA problem happen in Garbage Collected languages like Java/Go?",
        "options": ["Yes", "Usually NO (because memory isn't recycled until all references are gone)", "Always", "Pico guess"],
        "correctAnswer": "Usually NO (because memory isn't recycled until all references are gone)",
        "explanation": "The GC ensures that 'A' is never reused while a thread still thinks it's valid. ABA is mostly a C/C++ problem."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Reference Counting",
        "explanation": "Ace: 'Atomic reference counting can also prevent recycled memory from causing issues, acting as a built-in Hazard mechanism.'",
        "encouragementText": "Pico: 'Count the birds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating tag during CAS.",
        "codeSnippet": "new_tag_ptr.tag = old_tag_ptr.tag ___ 1;",
        "correctAnswer": "+",
        "explanation": "Always incrementing the version prevents the ABA shadow."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Ghost Hunter",
        "explanation": "You have seen the hidden history of pointers. Recycled memory can no longer deceive you. Ace: 'The identity is absolute.'",
        "encouragementText": "Pico: 'I see you! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match ABA terms!",
        "pairs": [
          { "key": "ABA", "value": "Stale recognition" },
          { "key": "Tag", "value": "Version Counter" },
          { "key": "Hazard", "value": "Access Protection" }
        ]
      }
    ]
  },
  {
    "order": 75,
    "title": "Unit 75: SPSC Ring Buffer (LMAX Style)",
    "desc": "Single Producer Single Consumer: The fastest buffer in existence.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.5] The Dedicated Lane",
        "explanation": "Ace: 'A Single-Producer Single-Consumer (SPSC) Queue is special. Because there's only one thread at each end, you don't even need CAS! You only need a Memory Barrier (Fence) to ensure data visibility.' Pico: 'A private tunnel! 100% 🦜'",
        "codeSnippet": "buffer[tail] = data;\nstore_release(&tail, next_tail);",
        "encouragementText": "Ace: 'Simplicity is the highest form of performance.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is SPSC faster than MPMC (Multi-Producer)?",
        "options": ["Fewer lines of code", "No CAS-retries or contention (No 'Fighting' over the tail)", "Better colors", "Pico rule"],
        "correctAnswer": "No CAS-retries or contention (No 'Fighting' over the tail)",
        "explanation": "Since only one thread modifies 'tail', it never has to check if anyone else changed it."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Cache Line Padding",
        "explanation": "Ace: 'To prevent 'False Sharing', we must put Head and Tail pointers on DIFFERENT cache lines (separated by 64 bytes). Otherwise, they will fight over the same cache block.' Pico: 'Different branches! 100% 🦜'",
        "encouragementText": "Pico: 'Private space! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Spacing out pointers in a high-speed buffer.",
        "codeSnippet": "long head;\nlong padding[ ___ ];\nlong tail;",
        "correctAnswer": "8",
        "explanation": "8 longs * 8 bytes = 64 bytes. This ensures head and tail are in separate cache lines."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Acquire/Release Semantics",
        "explanation": "Ace: 'We use `memory_order_release` when updating the tail and `memory_order_acquire` when reading it. This 'handshake' ensures the consumer sees the data the producer just wrote.'",
        "encouragementText": "Ace: 'Visibility is a contractual agreement between CPU cores.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Where is SPSC used?",
        "options": ["Audio processing", "High-frequency trading pipes", "NIC drivers", "All of the above"],
        "correctAnswer": "All of the above",
        "explanation": "Any point-to-point data transmission where nanoseconds matter."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Lock-less",
        "explanation": "Ace: 'In SPSC, the 'Head' is only modified by the Consumer. The 'Tail' is only modified by the Producer. They only READ each other's pointer.'",
        "encouragementText": "Pico: 'I look, I don't touch! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Checking for space (Producer).",
        "codeSnippet": "if ((tail + 1) % MAX == ___ ) return FULL;",
        "correctAnswer": "head",
        "explanation": "Circular check using the un-modified head pointer."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Speed Demon",
        "explanation": "You have pushed the hardware to its absolute limit. No locks, no retries, just raw flow. Ace: 'The speed is maximum.'",
        "encouragementText": "Pico: 'Warp factor 9! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match SPSC terms!",
        "pairs": [
          { "key": "False Sharing", "value": "Cache contention" },
          { "key": "Release Fence", "value": "Data visibility" },
          { "key": "Wait-free", "value": "Guaranteed progress" }
        ]
      }
    ]
  },
  {
    "order": 76,
    "title": "Unit 76: MPMC Multicast Queues",
    "desc": "Broadcasting to the masses: One producer, many consumers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.6] The Town Crier",
        "explanation": "Ace: 'What if one producer needs to send the same data to 10 different consumers? A Multicast Queue keeps a separate 'Read Pointer' for every consumer. Data is only recycled when ALL consumers have read it.' Pico: 'One shout, many listeners! 100% 🦜'",
        "codeSnippet": "while(tail - heads[i] > MAX_SIZE) wait();",
        "encouragementText": "Ace: 'Communication is the synchronization of multiple observers to a single source.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Who moves the 'Global Tail' in a Multicast Queue?",
        "options": ["The Producer", "The slowest Consumer", "The OS", "Pico rule"],
        "correctAnswer": "The Producer",
        "explanation": "The Producer pushes and moves the tail forward. Each consumer follows behind with its own head pointer."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Slowest Bird",
        "explanation": "Ace: 'The most important rule: The Producer CANNOT overwrite data until the SLOWEST consumer has read it. This is why one slow thread can block the whole system!' Pico: 'Wait for the turtle bird! 100% 🦜'",
        "encouragementText": "Pico: 'Hurry up! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding the minimum head pointer among all consumers.",
        "codeSnippet": "min_h = heads[0];\nfor(h in heads) min_h = min(min_h, h);\nreturn ___ ;",
        "correctAnswer": "min_h",
        "explanation": "The minimum head defines the 'safe' region that the producer can wrap around into."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Sequence Numbers",
        "explanation": "Ace: 'Instead of pointers, we often use monotonically increasing 'Sequence Numbers'. Node at index 5 is valid if `node.seq == total_pushes / MAX_SIZE`.'",
        "encouragementText": "Ace: 'Time is the ultimate index of validity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Application of multicast queues?",
        "options": ["Stock market price feeds", "Live video streaming", "Logging systems", "All of the above"],
        "correctAnswer": "All of the above",
        "explanation": "Any scenario where 'One-to-Many' real-time data flow is required."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Cache Locality",
        "explanation": "Ace: 'In a multicast queue, consumers should read-ahead to minimize cache misses and keep up with the producer.'",
        "encouragementText": "Pico: 'Read fast! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating the consumer's local head.",
        "codeSnippet": "heads[my_id] ___ ;",
        "correctAnswer": "++",
        "explanation": "Incrementing the sequence tracking for the specific observer."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Broadcaster",
        "explanation": "You have synchronized the collective. The message is heard by all, in order. Ace: 'The signal is distributed.'",
        "encouragementText": "Pico: 'Everyone heard it! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Multicast terms!",
        "pairs": [
          { "key": "Read Pointer", "value": "Per-consumer state" },
          { "key": "Global Tail", "value": "Producer state" },
          { "key": "Contention", "value": "Many consumers hitting same line" }
        ]
      }
    ]
  },
  {
    "order": 77,
    "title": "Unit 77: Interrupt-Safe Queues",
    "desc": "The metal layer: Buffering between Hardware and Software.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.7] The Lightning Link",
        "explanation": "Ace: 'An Interrupt Service Routine (ISR) is code that runs when a hardware event happens (like a key press). You CANNOT use Mutexes in an ISR! You must use 'Interrupt-Safe' queues that use hardware-level primitives or atomic operations.' Pico: 'Catching the lightning! 100% 🦜'",
        "codeSnippet": "void ISR() { enqueue_atomic(data); }",
        "encouragementText": "Ace: 'Survival at the boundary requires the rejection of blocking behavior.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why can you not wait() on a condition variable inside an Interrupt?",
        "options": ["Interrupts don't have ears", "Interrupts have no thread context to sleep in; they must finish instantly", "It's illegal", "Pico rule"],
        "correctAnswer": "Interrupts have no thread context to sleep in; they must finish instantly",
        "explanation": "ISRs preempt the current thread. If they 'sleep', the whole system freezes forever. They must be Non-blocking."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Disabling Interrupts",
        "explanation": "Ace: 'When the Main App reads from the queue, it must TEMPORARILY disable interrupts to ensure the hardware doesn't update the pointers mid-read.' Pico: 'Silence for a second! 100% 🦜'",
        "encouragementText": "Pico: 'Quiet time! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Critical section for reading ISR-queue.",
        "codeSnippet": "cli(); // Disable INT\nval = q.pop();\n ___ (); // Re-enable INT",
        "correctAnswer": "sei",
        "explanation": "Cli (Clear Interrupts) and Sei (Set Interrupts) are standard assembly/C primitives for local atomic blocks."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Lock-free superiority",
        "explanation": "Ace: 'Wait-free SPSC queues are perfect for interrupts because they never need to disable global interrupts, allowing the high-frequency hardware to stay responsive.'",
        "encouragementText": "Ace: 'Responsiveness is the measure of system vitality.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is a 'Spurious Interrupt'?",
        "options": ["A fake signal", "Hardware firing an interrupt when no data is actually ready", "A broken pipe", "Pico guess"],
        "correctAnswer": "Hardware firing an interrupt when no data is actually ready",
        "explanation": "Your queue must be robust enough to handle 'Empty' signals even when the hardware says 'Wake up!'"
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Bottom Halves",
        "explanation": "Ace: 'In Linux, we do the minimum in the ISR (Top Half) and queue a 'Tasklet' (Bottom Half) to do the heavy work later.'",
        "encouragementText": "Pico: 'Do it later! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Checking if interrupts are currently enabled.",
        "codeSnippet": "if ( ___ ()) { // Check CPU flag\n  process_immediately();\n}",
        "correctAnswer": "interrupts_enabled",
        "explanation": "Querying the CPU state register."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Flash Master",
        "explanation": "You have touched the hardware layer. You move faster than the clock. Ace: 'The reaction is instant.'",
        "encouragementText": "Pico: 'Faster than lightning! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Metal terms!",
        "pairs": [
          { "key": "ISR", "value": "Hardware Response" },
          { "key": "cli/sei", "value": "Interrupt Masking" },
          { "key": "Non-blocking", "value": "The ISR requirement" }
        ]
      }
    ]
  },
  {
    "order": 78,
    "title": "Unit 78: Work-Stealing Deques",
    "desc": "Load balancing: Multi-core queues that share the burden.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.8] The Generous Bird",
        "explanation": "Ace: 'In a modern runtime (Go, Java), every CPU core has its own Local Deque. If Core 1 runs out of work, it 'Steals' a task from the BOTTOM of Core 2's deque! This uses the buffer to balance load across all cores.' Pico: 'Taking seeds from the busy bird! 100% 🦜'",
        "codeSnippet": "pop_tail_atomic(other_core_deque);",
        "encouragementText": "Ace: 'System efficiency is the product of local abundance meeting remote scarcity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why do we steal from the BOTTOM (Tail) instead of the TOP (Head)?",
        "options": ["It's easier to reach", "To minimize contention: The owner is busy at the Head, so the thief works at the Tail", "To be mean", "Pico rule"],
        "correctAnswer": "To minimize contention: The owner is busy at the Head, so the thief works at the Tail",
        "explanation": "Since they operate on different ends, they rarely need to lock against each other, maximizing core independence."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The LIFO preference",
        "explanation": "Ace: 'A core processes its own tasks LIFO (Stack-like) for better cache locality, but others steal FIFO (Queue-like) for better load spreading.' Pico: 'Eat the fresh seeds first! 100% 🦜'",
        "encouragementText": "Pico: 'Fresh seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Operation core owner performs on its own deque.",
        "codeSnippet": "task = deque. ___ ();",
        "correctAnswer": "pop_head",
        "explanation": "Executing the most recently added task for the best cache performance."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Chase-Lev Deque",
        "explanation": "Ace: 'The Chase-Lev algorithm is the most famous lock-free work-stealing deque. It uses a growing circular buffer and atomic fences to handle the steal/pop race.'",
        "encouragementText": "Ace: 'Balance is achieved through structured theft.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if a steal operation fails?",
        "options": ["The core shuts down", "It tries stealing from another random core", "It waits for 5 minutes", "Pico guess"],
        "correctAnswer": "It tries stealing from another random core",
        "explanation": "This 'Random Work Stealing' ensures that no single busy core becomes a permanent bottleneck."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Exponential Backoff",
        "explanation": "Ace: 'If all cores are empty, a thief should wait slightly longer between steal attempts to save battery/power.'",
        "encouragementText": "Pico: 'Nap time! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Determining if a core is 'Hungry' (Idle).",
        "codeSnippet": "if (my_deque. ___ ()) try_steal();",
        "correctAnswer": "empty",
        "explanation": "Idleness is the trigger for load balancing."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Load Balancer",
        "explanation": "You have empowered the machine to divide and conquer. No core is ever idle while work remains. Ace: 'The labor is shared.'",
        "encouragementText": "Pico: 'Team power! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Stealing terms!",
        "pairs": [
          { "key": "Head", "value": "Owner Access" },
          { "key": "Tail", "value": "Thief Access" },
          { "key": "LIFO", "value": "Local core behavior" }
        ]
      }
    ]
  },
  {
    "order": 79,
    "title": "Unit 79: Kernel Packet Rings",
    "desc": "High-throughput networking: How your OS handles the internet.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 8.9] The Net Pipe",
        "explanation": "Ace: 'In Linux (`af_packet`), the kernel and your app share a Ring Buffer (Zero-copy). The kernel fills nodes with internet packets, and your app reads them without a single expensive `read()` syscall.' Pico: 'Sharing the seed bag with the giant bird! 100% 🦜'",
        "codeSnippet": "struct packet_ring {\n  struct packet_node nodes[1024];\n};",
        "encouragementText": "Ace: 'Zero-copy is the elimination of bureaucratic overhead.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Zero-copy'?",
        "options": ["No work", "Moving data without physically copying it between memory regions", "Free RAM", "Pico rule"],
        "correctAnswer": "Moving data without physically copying it between memory regions",
        "explanation": "By sharing the same memory block, the kernel and app avoid the O(N) cost of copying millions of packets."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Packet Fragmentation",
        "explanation": "Ace: 'Sometimes a big packet is split across many nodes in the ring. The 'Next' pointer logic still applies: you must link them back together!' Pico: 'Building the puzzle! 100% 🦜'",
        "encouragementText": "Pico: 'Solve it! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Status bit indicating a packet is ready for user-space to read.",
        "codeSnippet": "while(node.status != ___ ) wait_for_hw();",
        "correctAnswer": "TP_STATUS_USER",
        "explanation": "Poll-based checking for the handover signal from the kernel."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] User-space Drivers",
        "explanation": "Ace: 'Tools like DPDK (Data Plane Development Kit) bypass the kernel entirely and talk to the NIC Ring Buffer directly. This allows processing 100 MILLION packets per second.'",
        "encouragementText": "Ace: 'Direct access is the path of the elite.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the biggest risk of user-space networking?",
        "options": ["Slow speed", "System crashing if the app crashes (the kernel isn't there to protect the hardware)", "Better colors", "Pico guess"],
        "correctAnswer": "System crashing if the app crashes (the kernel isn't there to protect the hardware)",
        "explanation": "Without the kernel as a middle-man, the application has the power—and the responsibility—of raw hardware control."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Circular logic",
        "explanation": "Ace: 'It's all fundamentally the Unit 67 Ring Buffer, just with 10Gbit/s requirements.'",
        "encouragementText": "Pico: 'Fast internet! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Moving to next packet in the ring.",
        "codeSnippet": "curr_p = (curr_p + 1) ___ ring->count;",
        "correctAnswer": "%",
        "explanation": "Infinite rotation through the shared memory block."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Packet Lord",
        "explanation": "You have mastered the data flow of the modern world. The internet flows through your shared buffers. Ace: 'The throughput is immense.'",
        "encouragementText": "Pico: 'Download completed! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Kernel terms!",
        "pairs": [
          { "key": "Zero-copy", "value": "Eliminating memory copies" },
          { "key": "Syscall", "value": "Expensive OS crossing" },
          { "key": "DPDK", "value": "User-space high-speed" }
        ]
      }
    ]
  },
  {
    "order": 80,
    "title": "Unit 80: Stage 8 Graduation (The Systems Engineer)",
    "desc": "Claiming the concurrent peak: CAS and OS flow are yours.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 8.10] The Summit of Concurrency",
        "explanation": "Ace: 'You have looked through the OS and into the hardware. You have mastered thread safety, lock-free logic, and kernel-level buffering. You are no longer just an app developer; you are a Systems Engineer.' Pico: 'Stage 8 Complete! We fly to the Persistence and Functional Structures next! 100% 🦜'",
        "encouragementText": "Ace: 'Engineering is the design of order in a chaotic, parallel world.'"
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
        "explanation": "10 units, 100 lessons. This stage has equipped you with the engineering tools for the Academic Atlas. Ace: 'Thread with care.'",
        "encouragementText": "Pico: '80% through the 1,000-lesson gauntlet! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Benefit of Work-Stealing?",
        "options": ["More colors", "Automatic load balancing across CPU cores", "Infinite memory", "Pico secret"],
        "correctAnswer": "Automatic load balancing across CPU cores",
        "explanation": "Idle cores pull work from busy ones, ensuring no hardware is wasted."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from Mutex to CAS and Metal to Work-Stealing in your mental buffers.' Pico: 'I have the parallel mind! 100% 🦜'",
        "encouragementText": "Ace: 'The parallel flows reflect the machine through the lens of the atomic operation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which sync method is fastest for single-producer single-consumer?",
        "options": ["Blocking Mutex", "Wait-free Memory Barriers (SPSC)", "Single-threaded", "Pico guess"],
        "correctAnswer": "Wait-free Memory Barriers (SPSC)",
        "explanation": "Since there is no contention, simple fences are enough to keep the threads in sync with maximum speed."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 80% through the ultimate journey. Your next target: **Stage 9: Persistence & Functional Structures**. Ace: 'The immutable buffer awaits.'",
        "encouragementText": "Pico: 'Stage 9 seeds are waiting! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (systems_engineer == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Concurrent & Systems phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Systems Engineer",
        "explanation": "The threads are safe. The metal is responsive. You are a Stage 8 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=71; i<=80; i++) verify_systems_logic(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The eighth decile of the 1,000-lesson curriculum for Stacks & Queues is fully verified."
      }
    ]
  }
];

module.exports = stage5;

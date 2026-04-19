const stage4 = [
  {
    "order": 61,
    "title": "Unit 61: Monotonic Stacks (Next Greater Element)",
    "desc": "Efficiency through order: Maintaining a decreasing sequence to find the next peak.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.1] The Peak Hunter",
        "explanation": "Ace: 'A Monotonic Stack is a stack that maintains its elements in a strictly increasing or decreasing order. This is the secret weapon for finding the \"Next Greater Element\" in O(N) time.' Pico: 'Watching the mountains grow! 🦜'",
        "codeSnippet": "while(!s.empty() && s.top() < curr) {\n  res[s.top_idx()] = curr;\n  s.pop();\n}\ns.push(curr_idx);",
        "encouragementText": "Ace: 'Order is the shortest path to discovering relativity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In a Monotonic Decreasing Stack, what do you do if the incoming element is GREATER than the top?",
        "options": ["Push it anyway", "Pop elements until the top is greater than the incoming element", "Throw it away", "Pico rule"],
        "correctAnswer": "Pop elements until the top is greater than the incoming element",
        "explanation": "To maintain the decreasing order, all smaller elements must be removed. These are the elements for which the current element is the 'Next Greater'."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Complexity check",
        "explanation": "Ace: 'Even though there is a while loop inside a for loop, every element is pushed and popped at most ONCE. This results in an O(N) amortized complexity.' Pico: 'One in, one out! 100% 🦜'",
        "encouragementText": "Pico: 'Fast as a bird! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Condition to maintain a strictly decreasing stack.",
        "codeSnippet": "while(!s.empty() && stack[top] ___ incoming) pop();",
        "correctAnswer": "<=",
        "explanation": "If the incoming element is greater than or equal to the top, the top must go to preserve the decreasing order."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Stack Contents",
        "explanation": "Ace: 'In most problems, we store the INDEX of the element in the stack, rather than the value itself. This allows us to calculate both the value and the distance to the next peak.'",
        "encouragementText": "Ace: 'Position is as important as magnitude.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does the stack look like after processing [5, 3, 2, 4] with a decreasing monotonic stack?",
        "options": ["[5, 3, 2]", "[5, 4]", "[4]", "Pico guess"],
        "correctAnswer": "[5, 4]",
        "explanation": "5 is pushed. 3 is pushed. 2 is pushed. 4 comes and pops 2 and 3. Then 4 is pushed."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Circular Next Greater",
        "explanation": "Ace: 'For a circular array, just run the loop twice (up to 2N). The stack will naturally handle the wrap-around.'",
        "encouragementText": "Pico: 'Around and around! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Index mapping for circular traversal.",
        "codeSnippet": "for(int i=0; i < 2*N; i++) {\n  int val = arr[i ___ N];\n}",
        "correctAnswer": "%",
        "explanation": "Using the modulo operator to cycle through the array twice."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Trend Observer",
        "explanation": "You have mastered the monotonic trend. The peaks and valleys are revealed. Ace: 'The sequence is ordered.'",
        "encouragementText": "Pico: 'Peak found! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Monotonic terms!",
        "pairs": [
          { "key": "Decreasing Stack", "value": "Next Greater Element" },
          { "key": "Increasing Stack", "value": "Next Smaller Element" },
          { "key": "Amortized O(N)", "value": "Single push/pop per item" }
        ]
      }
    ]
  },
  {
    "order": 62,
    "title": "Unit 62: Sliding Window Maximum",
    "desc": "The Monotonic Queue: Real-time range tracking.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.2] The Moving Eye",
        "explanation": "Ace: 'A Monotonic Queue (usually a Deque) tracks the maximum element in a sliding window. It keeps elements in decreasing order, ensuring the 'Front' is always the current maximum.' Pico: 'Only the biggest bird stays at the front! 100% 🦜'",
        "codeSnippet": "while(!dq.empty() && dq.back() < curr) dq.pop_back();\ndq.push_back(curr);",
        "encouragementText": "Ace: 'Authority in a moving frame requires constant pruning of the weak.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do you handle an element exiting the window in a Monotonic Queue?",
        "options": ["Ignore it", "If dq.front() == exiting_element, pop_front()", "Rebuild the queue", "Pico rule"],
        "correctAnswer": "If dq.front() == exiting_element, pop_front()",
        "explanation": "If the current maximum was the node that just left the window, we must remove it from the queue."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Priority Queue vs Monotonic Queue",
        "explanation": "Ace: 'A Priority Queue takes O(log K) to update. A Monotonic Queue takes O(1) amortized. It is superior for sliding windows!' Pico: 'Priority is slow, Mono is go! 100% 🦜'",
        "encouragementText": "Pico: 'Gotta go fast! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Pushing to the back of the sliding window queue.",
        "codeSnippet": "while(!dq.empty() && nums[dq.back()] <= nums[i]) {\n  dq. ___ ();\n}\ndq.push_back(i);",
        "correctAnswer": "pop_back",
        "explanation": "We remove elements that are smaller than the incoming one because they can never be the maximum in a window that contains the larger incoming element."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Window Boundaries",
        "explanation": "Ace: 'Verify the front index: if (dq.front() <= i - K) dq.pop_front(). This ensures the maximum is actually inside the current window of size K.'",
        "encouragementText": "Ace: 'Range is defined by the strict enforcement of time limits.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity of a Monotonic Queue for window size K?",
        "options": ["O(N)", "O(K)", "O(1)", "Pico guess"],
        "correctAnswer": "O(K)",
        "explanation": "At most, the queue holds all elements in the current window."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] 2D Sliding Window",
        "explanation": "Ace: 'Apply the monotonic queue per row, then per column on the results. You can find the max in every block of a spreadsheet in O(Width * Height)!'",
        "encouragementText": "Pico: 'Grid power! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Getting the current max.",
        "codeSnippet": "if (i >= K - 1) result.add(nums[dq. ___ ()]);",
        "correctAnswer": "front",
        "explanation": "The maximum is always maintained at the front of the monotonic queue."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Window Master",
        "explanation": "You have narrowed your focus to the strongest. The window moves, but the maximum is always yours. Ace: 'The tracking is absolute.'",
        "encouragementText": "Pico: 'Super vision! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Window terms!",
        "pairs": [
          { "key": "pop_back", "value": "Pruning smaller elements" },
          { "key": "pop_front", "value": "Removing old indices" },
          { "key": "front()", "value": "Current Maximum" }
        ]
      }
    ]
  },
  {
    "order": 63,
    "title": "Unit 63: Min/Max Stacks in O(1)",
    "desc": "Tracking global extremes without searching.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.3] The Extra Pointer",
        "explanation": "Ace: 'How do you get the MINIMUM element of a stack in O(1)? Standard push/pop only knows the top. A Min-Stack stores the 'Current Min' alongside every element.' Pico: 'A small bird riding on every big bird! 100% 🦜'",
        "codeSnippet": "struct Node {\n  int val, current_min;\n};",
        "encouragementText": "Ace: 'State is more than the sum of values; it is the context of the whole.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "When you push a new value X, how is the new 'current_min' calculated?",
        "options": ["Search the stack", "min(X, top.current_min)", "Set to X", "Pico rule"],
        "correctAnswer": "min(X, top.current_min)",
        "explanation": "The minimum of the whole stack is either the new element or the previous minimum."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Memory Trick",
        "explanation": "Ace: 'You can save space by using a second auxiliary stack that only stores values when a NEW minimum is reached.' Pico: 'Only pack the important seeds! 100% 🦜'",
        "encouragementText": "Pico: 'Smarter storage! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Pushing to the min-stack.",
        "codeSnippet": "s.push(x);\nif(min_s.empty() || x ___ min_s.top()) min_s.push(x);",
        "correctAnswer": "<=",
        "explanation": "We update the secondary stack only if the new value is less than or equal to the current minimum."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Mathematical Min-Stack",
        "explanation": "Ace: 'The Space Ninja trick: Store `2*X - min` instead of X. This allows O(1) tracking with ZERO extra memory, but it's prone to overflow.'",
        "encouragementText": "Ace: 'Math is a dense encoding of state.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens in a Min-Stack when you pop the minimum element?",
        "options": ["Error", "The auxiliary stack also pops, and the previous min is revealed", "Search for new min", "Pico guess"],
        "correctAnswer": "The auxiliary stack also pops, and the previous min is revealed",
        "explanation": "Since the min-stack tracks the minimum 'of that moment', popping it automatically restores the minimum of the previous moment."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Max-Stack",
        "explanation": "Ace: 'Exactly the same logic, just swap min() for max(). Useful for keeping track of the best score in a system.'",
        "encouragementText": "Pico: 'Keep the high score! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Getting the minimum value.",
        "codeSnippet": "return ___ .top();",
        "correctAnswer": "min_s",
        "explanation": "The current minimum is always at the top of the auxiliary stack."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Extreme Seer",
        "explanation": "You can see the smallest and largest with a single glance. No search is required. Ace: 'The context is preserved.'",
        "encouragementText": "Pico: 'I found the small one! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Min-Stack roles!",
        "pairs": [
          { "key": "Data Stack", "value": "Holds every element" },
          { "key": "Min Stack", "value": "Holds shrinking minima" },
          { "key": "O(1) getMin", "value": "Primary benefit" }
        ]
      }
    ]
  },
  {
    "order": 64,
    "title": "Unit 64: Stacks using Queues (The Swap Cost)",
    "desc": "Simulating LIFO with FIFO: A study in operational mapping.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.4] The Inversion",
        "explanation": "Ace: 'A queue is a pipe. A stack is a bucket. To turn a pipe into a bucket, you must re-circulate the data. To push(X), we add it to the queue and then rotate the entire queue so X is at the front.' Pico: 'Turning a tube into a tower! 100% 🦜'",
        "codeSnippet": "q.push(x);\nfor(int i=0; i < q.size()-1; i++) q.push(q.pop());",
        "encouragementText": "Ace: 'Equivalence is established through transformation of movement.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of push(X) in this stack-using-one-queue implementation?",
        "options": ["O(1)", "O(N)", "O(log N)", "Pico rule"],
        "correctAnswer": "O(N)",
        "explanation": "We must move N-1 elements from the front back to the end to ensure the new element is at the very front for popping."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Pop Complexity",
        "explanation": "Ace: 'Because we did the heavy lifting during Push, the `pop()` operation is now a perfect O(1). This is a 'Push-Efficient' trade-off.' Pico: 'Pay once, fly twice! 100% 🦜'",
        "encouragementText": "Pico: 'Fast pop! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Rotating the queue after push.",
        "codeSnippet": "int sz = q.size();\nfor(int i=0; i < sz - 1; i++) {\n  q.push(q. ___ ());\n}",
        "correctAnswer": "pop",
        "explanation": "Moving each existing element to the end of the queue."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Two-Queue Method",
        "explanation": "Ace: 'Alternatively, you can keep Push O(1) and make Pop O(N) by moving all but the last element into a secondary queue during popping.'",
        "encouragementText": "Ace: 'There is always a balance in cost; choose your burden wisely.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why would anyone do this?",
        "options": ["It is faster", "To prove functional completeness (you can build any buffer from any other)", "Pico likes it", "Pico guess"],
        "correctAnswer": "To prove functional completeness (you can build any buffer from any other)",
        "explanation": "It's a theoretical proof that Queue and Stack are equivalent in power."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Practical Constraints",
        "explanation": "Ace: 'In some hardware or limited platforms, you might only have one type of buffer primitive available. Adaptation is survival.'",
        "encouragementText": "Pico: 'Adapt or fly! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Checking top of the stack.",
        "codeSnippet": "return q. ___ ();",
        "correctAnswer": "front",
        "explanation": "In a push-heavy stack-via-queue, the top is actually the front of the queue."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Buffer Alchemist",
        "explanation": "You have turned one shape into another. The pipe now behaves like a bucket. Ace: 'The transformation is valid.'",
        "encouragementText": "Pico: 'Magic tube! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Stack-Queue terms!",
        "pairs": [
          { "key": "Rotation", "value": "Push O(N) strategy" },
          { "key": "Single Queue", "value": "Circular simulation" },
          { "key": "Front", "value": "Virtual Top" }
        ]
      }
    ]
  },
  {
    "order": 65,
    "title": "Unit 65: Queues using Stacks (Amortized)",
    "desc": "The Banker's Queue: Using two buckets to create a pipe.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.5] The Transfer",
        "explanation": "Ace: 'Implementing a queue with two stacks (InStack and OutStack) is very efficient. You push to InStack. When you need to pop, if OutStack is empty, move EVERYTHING from InStack to OutStack.' Pico: 'Pouring the seeds between buckets! 100% 🦜'",
        "codeSnippet": "push(x) { s_in.push(x); }\npop() { if(s_out.empty()) transfer(); return s_out.pop(); }",
        "encouragementText": "Ace: 'Amortization is the smoothing of high-cost events over a line of profit.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the amortized complexity of the `pop()` operation?",
        "options": ["O(N)", "O(1)", "O(log N)", "Pico rule"],
        "correctAnswer": "O(1)",
        "explanation": "Every element is moved from In to Out exactly once. Total work for N elements is 2N, making average work O(1)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Structural Inversion",
        "explanation": "Ace: 'When moving from In to Out, the order of elements is REVERSED. This double-reversal (Stack -> Stack -> Out) restores the original FIFO order!' Pico: 'Flipping the tower! 100% 🦜'",
        "encouragementText": "Pico: 'Flip it! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Transferring from s_in to s_out.",
        "codeSnippet": "while(!s_in.empty()) {\n  s_out.push(s_in. ___ ());\n}",
        "correctAnswer": "pop",
        "explanation": "Moving nodes one by one to reverse their sequence."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Functional Programming",
        "explanation": "Ace: 'This is the standard 'Banker's Queue' used in purely functional languages like Haskell to provide efficient persistent queues.'",
        "encouragementText": "Ace: 'The state of the past is preserved in the balance of the stacks.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if you push a new element WHILE s_out has elements?",
        "options": ["It goes to s_out", "It stays in s_in", "Error", "Pico guess"],
        "correctAnswer": "It stays in s_in",
        "explanation": "We only transfer when s_out is empty, ensuring we don't disturb the current FIFO order."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Peek operation",
        "explanation": "Ace: 'Just like pop(), `peek()` must trigger a transfer if the output buffer is empty.'",
        "encouragementText": "Pico: 'Look inside! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Total size of the queue.",
        "codeSnippet": "return s_in.size() ___ s_out.size();",
        "correctAnswer": "+",
        "explanation": "The queue data is distributed across both stacks."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Amortization Master",
        "explanation": "You have balanced the cost. The pipe is simulated with zero wasted movement. Ace: 'The sequence is FIFO.'",
        "encouragementText": "Pico: 'Bucket pipe! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Queue-Stack terms!",
        "pairs": [
          { "key": "InStack", "value": "Receives all Pushes" },
          { "key": "OutStack", "value": "Handles all Pops" },
          { "key": "Transfer", "value": "Mass Reversal" }
        ]
      }
    ]
  },
  {
    "order": 66,
    "title": "Unit 66: Segmented Stacks",
    "desc": "Bypassing the heap: Chaining memory blocks for infinite growth.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.6] The Connected Ponds",
        "explanation": "Ace: 'A standard stack uses a single array. When it fills up, you must reallocate (O(N)). A Segmented Stack uses a LINKED LIST of arrays (segments or chunks). You never copy data; you just add a new segment.' Pico: 'Linking the bird baths! 100% 🦜'",
        "codeSnippet": "struct Segment {\n  int data[1024];\n  Segment* prev;\n};",
        "encouragementText": "Ace: 'Continuity of logic does not require continuity of memory.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Main advantage of Segmented Stack over Dynamic Array?",
        "options": ["Faster indexing", "Worst-case O(1) push time (no huge copying spikes)", "Uses less memory", "Pico rule"],
        "correctAnswer": "Worst-case O(1) push time (no huge copying spikes)",
        "explanation": "Since you never resize and copy, adding an element always takes the same amount of time."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Memory Locality",
        "explanation": "Ace: 'Segmented stacks are cache-friendly because elements IN the same segment are contiguous, but the whole structure is flexible. It's the best of both worlds.' Pico: 'Local birds are close! 100% 🦜'",
        "encouragementText": "Pico: 'Comfortable nests! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Condition to allocate a new segment.",
        "codeSnippet": "if (current_segment->top ___ MAX_SIZE) {\n  add_new_segment(current_segment);\n}",
        "correctAnswer": "==",
        "explanation": "Once the current chunk is full, we extend the chain."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Deallocation",
        "explanation": "Ace: 'When the current segment is empty, we must pop the segment itself and return use the previous one. A common optimization is to 'Cache' one empty segment to avoid frequent malloc/free cycles.'",
        "encouragementText": "Ace: 'Pruning is the maintenance of sanity in architecture.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Application of Segmented Stacks?",
        "options": ["High-performance game engines", "Operating system kernel task-stacks", "Both", "Pico guess"],
        "correctAnswer": "Both",
        "explanation": "Anywhere where latency spikes (from copying) are unacceptable use segmented structures."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Indexing complexity",
        "explanation": "Ace: 'If you need random access to the i-th element, Segmented Stacks take O(i / SegmentSize), which is slower than an array O(1). Use them for LIFO mostly!'",
        "encouragementText": "Pico: 'Stay at the top! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Accessing the top segment's data.",
        "codeSnippet": "return curr_seg->data[curr_seg-> ___ ];",
        "correctAnswer": "top",
        "explanation": "Standard index access inside the local segment buffer."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Segment Architect",
        "explanation": "You have freed the stack from the limits of a single block. It can now grow as long as there is memory in the world. Ace: 'The chain is infinite.'",
        "encouragementText": "Pico: 'Bigger and bigger! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Segment terms!",
        "pairs": [
          { "key": "Chunk", "value": "Local array block" },
          { "key": "Malloc", "value": "Segment creation cost" },
          { "key": "Worst-case O(1)", "value": "Push benefit" }
        ]
      }
    ]
  },
  {
    "order": 67,
    "title": "Unit 67: Circular Buffer Optimization",
    "desc": "The modulo master: Handling overflows in static pipes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.7] The Carousel",
        "explanation": "Ace: 'In embedded systems, memory is fixed. A Circular Buffer (Ring Buffer) uses two pointers (Head/Tail) and wraps around using Modulo. When it's full, you either stop or OVERWRITE the oldest data.' Pico: 'A merry-go-round for seeds! 100% 🦜'",
        "codeSnippet": "tail = (tail + 1) % MAX_SIZE;",
        "encouragementText": "Ace: 'Finiteness is the parent of efficient reuse.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do you distinguish between 'Full' and 'Empty' if Head == Tail in both cases?",
        "options": ["You can't", "Leave one slot empty, or use a separate Size counter", "Guess", "Pico rule"],
        "correctAnswer": "Leave one slot empty, or use a separate Size counter",
        "explanation": "If Size == 0 it's empty. If (Tail + 1) % Max == Head, it's full. Or just keep a variable 'count'."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Bitwise Optimization",
        "explanation": "Ace: 'If the MAX_SIZE is a power of 2 (like 1024), you can replace the slow modulo (%) with a fast bitwise AND (&).' Pico: 'Bird brain speed! 100% 🦜'",
        "encouragementText": "Pico: 'Bit flip! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Wrapping index i with size 1024 (2^10).",
        "codeSnippet": "index = i ___ 1023;",
        "correctAnswer": "&",
        "explanation": "ANDing with (Size - 1) is a common high-performance trick for circular buffers."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Real-time Streaming",
        "explanation": "Ace: 'Circular buffers are the lifeblood of Audio/Video drivers. They ensure a steady flow by decoupling the Producer (Mic) from the Consumer (Speaker).'",
        "encouragementText": "Ace: 'Constant velocity is achieved through local oscillation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Overrun'?",
        "options": ["Running too fast", "Producer pushing data faster than Consumer can read, overwriting unread data", "Pico's favorite race", "Pico guess"],
        "correctAnswer": "Producer pushing data faster than Consumer can read, overwriting unread data",
        "explanation": "This leads to data loss (glitches in audio) and must be handled by blocking or flow-control."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] LMAX Disruptor",
        "explanation": "Ace: 'High-speed trading engines use a very advanced ring buffer pattern called the 'Disruptor' that avoids lock contention.'",
        "encouragementText": "Pico: 'Trading seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Checking for full buffer using 'size' variable.",
        "codeSnippet": "if (size ___ MAX_SIZE) return ERROR_FULL;",
        "correctAnswer": "==",
        "explanation": "Standard check before accepting new data."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Carousel Master",
        "explanation": "You have mastered the infinite circle of data. The buffer never breaks, only wraps. Ace: 'The cycle is stable.'",
        "encouragementText": "Pico: 'Spin it! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Circular terms!",
        "pairs": [
          { "key": "Modulo", "value": "Wrapping Logic" },
          { "key": "Overrun", "value": "Data Loss hazard" },
          { "key": "Head == Tail", "value": "Empty signal (count=0)" }
        ]
      }
    ]
  },
  {
    "order": 68,
    "title": "Unit 68: Priority Queues Foundations",
    "desc": "Sorting by urgency: The binary buffer.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.8] The Urgent Call",
        "explanation": "Ace: 'A Priority Queue (PQ) is a buffer where elements are popped based on 'Importance' rather than arrival time. It's the engine of OS scheduling and pathfinding.' Pico: 'VIP birds first! 100% 🦜'",
        "codeSnippet": "pq.push(val, priority);\nreturn pq.pop_max();",
        "encouragementText": "Ace: 'Value determines the sequence of priority.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of pop_max() in a Naive Unsorted Array implementation?",
        "options": ["O(1)", "O(N)", "O(log N)", "Pico rule"],
        "correctAnswer": "O(N)",
        "explanation": "You have to scan the whole array to find the largest item!"
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Sorted Array PQ",
        "explanation": "Ace: 'If you keep the array sorted, `pop_max()` becomes O(1), but `push(X)` becomes O(N) because you must shift elements.' Pico: 'Keeping a tidy line! 100% 🦜'",
        "encouragementText": "Pico: 'Tidy line! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Popping from a sorted max-pq (max is at index N-1).",
        "codeSnippet": "return arr[ ___ --];",
        "correctAnswer": "size",
        "explanation": "Taking the last element of a sorted array is the fastest O(1) way to get the max."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Binary Heap Teaser",
        "explanation": "Ace: 'Arrays are too slow for large PQs. Next, we will learn the Binary Heap, which achieves O(log N) for both push and pop.'",
        "encouragementText": "Ace: 'Balance is the key to combined efficiency.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Standard Priority Queue is usually a ______________ Heap.",
        "options": ["Min", "Max", "Middle", "Pico guess"],
        "correctAnswer": "Max",
        "explanation": "Most PQ libraries (like Java) have Max-Heap by default, but can be configured for Min-Heap."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Event Loops",
        "explanation": "Ace: 'Video games use PQs to schedule events that happen at a specific 'Time' T. The next event to run is the one with the smallest T.'",
        "encouragementText": "Pico: 'Game on! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Complexity of Finding Min in a Max-Heap.",
        "codeSnippet": "Time = O( ___ );",
        "correctAnswer": "N",
        "explanation": "A Max-heap only help you find the MAX quickly. To find the min, you must scan all the leaves (half the tree)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Priority Master",
        "explanation": "You have taught the queue to judge. The important are honored. Ace: 'The rank is respected.'",
        "encouragementText": "Pico: 'Me first! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match PQ performance!",
        "pairs": [
          { "key": "Unsorted Array", "value": "Push O(1), Pop O(N)" },
          { "key": "Sorted Array", "value": "Push O(N), Pop O(1)" },
          { "key": "Binary Heap", "value": "O(log N) both" }
        ]
      }
    ]
  },
  {
    "order": 69,
    "title": "Unit 69: The Two-Stack Deque",
    "desc": "Symmetry in storage: A purely functional double-ended queue.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.9] The Mirror Line",
        "explanation": "Ace: 'To build a Deque (Double-Ended Queue) using only stacks, we use TWO stacks back-to-back. One for the front, one for the back. If one runs out, we rebalance.' Pico: 'Two bird lines facing away! 100% 🦜'",
        "codeSnippet": "struct Deque {\n  Stack front_s, back_s;\n};",
        "encouragementText": "Ace: 'Symmetry is the resolution of directional complexity.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do you pop_front if front_s is empty?",
        "options": ["Error", "Move half of back_s to front_s (Amortized)", "Search back_s", "Pico rule"],
        "correctAnswer": "Move half of back_s to front_s (Amortized)",
        "explanation": "By moving only half, we preserve the O(1) amortized performance for both ends."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Reversal Trick",
        "explanation": "Ace: 'Moving from one stack to another reverses the order. This is perfect for flipping the \"Back\" into the \"Front\"!' Pico: 'The birds fly backwards! 100% 🦜'",
        "encouragementText": "Pico: 'Flip it good! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Pushing to the back of the deque.",
        "codeSnippet": "back_s. ___ (val);",
        "correctAnswer": "push",
        "explanation": "Standard stack push on the rear-facing buffer."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Functional Persistence",
        "explanation": "Ace: 'Because stacks can be persistent (using structural sharing), this two-stack deque is the standard way to implement purely functional deques.'",
        "encouragementText": "Ace: 'The ends are the reflection of the core logic.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of `size()` in this deque?",
        "options": ["O(1) if we track it", "O(N)", "O(log N)", "Pico guess"],
        "correctAnswer": "O(1) if we track it",
        "explanation": "Just (front_s.size + back_s.size)!"
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Worst-case O(1)",
        "explanation": "Ace: 'For real-time systems, we use incremental rebalancing (Hood-Melville) to avoid the O(N) spike, but it's much more complex.'",
        "encouragementText": "Pico: 'Slow but steady! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Popping from the front if front_s is NOT empty.",
        "codeSnippet": "return ___ .pop();",
        "correctAnswer": "front_s",
        "explanation": "Simple O(1) access when the buffer is already populated."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Symmetrical Master",
        "explanation": "You have balanced the two directions into a single union. The ends are now one. Ace: 'The union is efficient.'",
        "encouragementText": "Pico: 'Both ways! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Deque terms!",
        "pairs": [
          { "key": "front_s", "value": "Head operations" },
          { "key": "back_s", "value": "Tail operations" },
          { "key": "Rebalance", "value": "Maintaining dual buffers" }
        ]
      }
    ]
  },
  {
    "order": 70,
    "title": "Unit 70: Stage 7 Graduation (The Mechanic)",
    "desc": "Claiming the buffer peak: Monotonic and Segmented logic is yours.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 7.10] The Summit of Buffers",
        "explanation": "Ace: 'You have mastered the Peak Hunter, the Carousel, and the Amortized Pipe. You no longer see simple tubes; you see the complex mechanics of flow control.' Pico: 'Stage 7 Complete! We fly to the Concurrent and Systems Queues next! 100% 🦜'",
        "encouragementText": "Ace: 'Mastery in mechanics is the prerequisite for mastery in large-scale systems.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Sliding Window Maximum using Monotonic Queue?",
        "options": ["O(N log K)", "O(N)", "O(N^2)", "Pico guess"],
        "correctAnswer": "O(N)",
        "explanation": "Amortized linear time is the power of the monotonic structure."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Depth Summary",
        "explanation": "10 units, 100 lessons. This stage has equipped you with the advanced buffer tools for the Academic Atlas. Ace: 'Buffer with precision.'",
        "encouragementText": "Pico: '70% through the 1,000-lesson gauntlet! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which structure uses Modulo to wrap around memory?",
        "options": ["Segmented Stack", "Circular Buffer", "Monotonic Queue", "Pico secret"],
        "correctAnswer": "Circular Buffer",
        "explanation": "Ring buffers use modular arithmetic to reuse fixed memory slots."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from Monotonic logic to Amortized Stacks and Circular Buffers to Segmented memory in your mental buffers.' Pico: 'I'm a Buffer Master now! 100% 🦜'",
        "encouragementText": "Ace: 'The flow reflects the valve through the lens of the buffer.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Benefit of Segmented Stack?",
        "options": ["Better luck", "Worst-case O(1) push without copying", "XOR power", "Pico guess"],
        "correctAnswer": "Worst-case O(1) push without copying",
        "explanation": "Since you only link new chunks, there is never a pause to copy the whole stack."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 70% through the ultimate journey. Your next target: **Stage 8: Concurrent & Systems Queues**. Ace: 'The threads are waiting.'",
        "encouragementText": "Pico: 'Stage 8 seeds are waiting! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (buffer_mechanic == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Advanced Mechanics phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Mechanic",
        "explanation": "The flows are optimized. The thresholds are set. You are a Stage 7 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=61; i<=70; i++) verify_buffer_logic(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The seventh decile of the 1,000-lesson curriculum for Stacks & Queues is fully verified."
      }
    ]
  }
];

module.exports = stage4;

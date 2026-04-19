const stage1_part2 = [
  {
    order: 11,
    title: 'Min-Stack Secret',
    desc: 'Designing a stack that can get the Minimum value in O(1).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Smallest Key! How to find the smallest bird in the stack without searching everyone? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use two stacks! The main stack stores data, and the MIN stack only stores the smallest seed seen so far! 🦜"', codeSnippet: 'void push(int x) {\n  mainS.push(x);\n  if(minS.empty() || x <= minS.top()) minS.push(x);\n}' },
      { type: 'multiple_choice', questionText: 'What is the time complexity of getMin() in a MinStack?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
      { type: 'match_following', questionText: 'Match MinStack logic!', pairs: [{key: 'Push', value: 'Check if <= min.top'}, {key: 'Pop', value: 'Check if == min.top'}, {key: 'Space', value: 'O(N) extra'}] },
      { type: 'programming_board', questionText: 'Keyword to get the minimum value.', codeSnippet: 'minVal = st.___();', correctAnswer: 'getMin' },
      { type: 'teaching', questionText: '🦜 Pico: "Alternatively, store the min as a pair (value, currentMin) in a single stack. Simple and elite! 🦜"' },
      { type: 'multiple_choice', questionText: 'Which is an advantage of the 2-stack approach?', options: ['Saves space if mins repeat', 'Faster search', 'Easier to code'], correctAnswer: 'Saves space if mins repeat' },
      { type: 'code_fill_in', questionText: 'Retrieve top of min stack.', codeSnippet: 'return minStack.___();', correctAnswer: 'top' },
      { type: 'teaching', questionText: '🦜 Pico: "One eye on the data, one eye on the min! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the smallest?"', options: ['A giant in spirit!', 'No.', '0'], correctAnswer: 'A giant in spirit!' }
    ]
  },
  {
    order: 12,
    title: 'The Queue from Stacks',
    desc: 'Implementing a Queue using two Stacks.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Reversal Magic! Can you make a fair Queue using two unfair Stacks? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use Stack A for Enqueue. When Dequeuing, if Stack B is empty, pour ALL of Stack A into Stack B. The order reverses, and the first bird is now on top! 🦜"', codeSnippet: 'if(s2.empty()) {\n  while(!s1.empty()) { s2.push(s1.pop()); }\n}\nreturn s2.pop();' },
      { type: 'multiple_choice', questionText: 'When should you move elements from Stack 1 to Stack 2?', options: ['Only when Stack 2 is empty during pop', 'Every push', 'Never'], correctAnswer: 'Only when Stack 2 is empty during pop' },
      { type: 'match_following', questionText: 'Match roles!', pairs: [{key: 'Stack 1', value: 'Input Buffer'}, {key: 'Stack 2', value: 'Output Buffer'}, {key: 'Move', value: 'Order Reversal'}] },
      { type: 'programming_board', questionText: 'Transfer condition.', codeSnippet: 'if (outbox.___()) { while(!inbox.empty()) ... }', correctAnswer: 'empty' },
      { type: 'teaching', questionText: '🦜 Pico: "Amortized complexity is O(1). Each bird is moved exactly twice! Very efficient for a double-stack nest! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is the amortized cost per dequeue?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
      { type: 'code_fill_in', questionText: 'Move bird from in to out.', codeSnippet: 'outbox.push(inbox.___()); inbox.pop();', correctAnswer: 'top' },
      { type: 'teaching', questionText: '🦜 Pico: "Two wrongs make a right! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I reversed twice?"', options: ['Straight as an arrow!', 'No.', '0'], correctAnswer: 'Straight as an arrow!' }
    ]
  },
  {
    order: 13,
    title: 'The Stack from Queues',
    desc: 'Implementing a Stack using two Queues.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Fairness Flip! Designing a Stack using Queues. Harder than it looks! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Push: Add to Queue 2. Move ALL birds from Queue 1 to Queue 2. Swap the names of Q1 and Q2. Now the new bird is at the FRONT! 🦜"', codeSnippet: 'q2.push(x);\nwhile(!q1.empty()) { q2.push(q1.pop()); }\nswap(q1, q2);' },
      { type: 'multiple_choice', questionText: 'Complexity of Push if Dequeue is O(1)?', options: ['O(N)', 'O(1)', 'O(log N)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Queue Stack types!', pairs: [{key: 'Push Heavy', value: 'Push is O(N)'}, {key: 'Pop Heavy', value: 'Pop is O(N)'}, {key: 'Best', value: 'Depends on usage'}] },
      { type: 'programming_board', questionText: 'Swap the two queue roles.', codeSnippet: '___ (q1, q2);', correctAnswer: 'swap' },
      { type: 'teaching', questionText: '🦜 Pico: "A single queue can also work by rotating the front elements to the back N-1 times! A solo bird trick! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of Pop in a Push-heavy implementation?', options: ['O(1)', 'O(N)', 'O(1)'], correctAnswer: 'O(1)' },
      { type: 'code_fill_in', questionText: 'Pop from the primary queue.', codeSnippet: 'q1.___();', correctAnswer: 'pop' },
      { type: 'teaching', questionText: '🦜 Pico: "Rotating the flock! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I rotated?"', options: ['Circle of trust!', 'No.', '0'], correctAnswer: 'Circle of trust!' }
    ]
  },
  {
    order: 14,
    title: 'First Unique Character',
    desc: 'Using a queue to track stream uniqueness.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Unique Bird! In a stream of incoming birds "aabcb", who is the first bird that hasn\'t been doubled yet? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a Queue and a Frequency Map. If you see a bird, inc frequency and push to Queue. Pop from Queue until the Front is a unique bird! 🦜"', codeSnippet: 'freq[c]++; q.push(c);\nwhile(!q.empty() && freq[q.front()] > 1) q.pop();' },
      { type: 'multiple_choice', questionText: 'First unique in "abcac"?', options: ['b', 'a', 'c'], correctAnswer: 'b' },
      { type: 'match_following', questionText: 'Match Uniqueness logic!', pairs: [{key: 'Map', value: 'Count frequency'}, {key: 'Queue', value: 'Order of arrival'}, {key: 'Pop', value: 'Remove non-unique'}] },
      { type: 'programming_board', questionText: 'The check to see if the front bird is duplicated.', codeSnippet: 'while (!q.empty() && counts[q.front()] ___ 1)', correctAnswer: '>' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N) because every bird enters and leaves the queue at most once. Real-time unique tracker! 🦜"' },
      { type: 'multiple_choice', questionText: 'If queue is empty, result is?', options: ['No unique character', 'Error', 'First char'], correctAnswer: 'No unique character' },
      { type: 'code_fill_in', questionText: 'Update counts.', codeSnippet: 'counts[c]___;', correctAnswer: '++' },
      { type: 'teaching', questionText: '🦜 Pico: "One of a kind! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I unique?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 15,
    title: 'The Mirror Image (Queue Reverse)',
    desc: 'Reversing a Queue using a Stack.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Queue Flip! How to reverse the fountain line so the last bird becomes the first? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Transfer everyone from Queue to Stack (order reverses). Then transfer everyone from Stack back to Queue! 🦜"', codeSnippet: 'while(!q.empty()) s.push(q.pop());\nwhile(!s.empty()) q.push(s.pop());' },
      { type: 'multiple_choice', questionText: 'Why does using a Stack reverse the order?', options: ['LIFO (Last In First Out)', 'FIFO', 'Magic seeds'], correctAnswer: 'LIFO (Last In First Out)' },
      { type: 'match_following', questionText: 'Match Reverse Steps!', pairs: [{key: 'Phase 1', value: 'Queue -> Stack'}, {key: 'Phase 2', value: 'Reverse order in stack'}, {key: 'Phase 3', value: 'Stack -> Queue'}] },
      { type: 'programming_board', questionText: 'Final move to return to the queue.', codeSnippet: 'while(!st.empty()) q.___ (st.pop());', correctAnswer: 'push' },
      { type: 'teaching', questionText: '🦜 Pico: "Recursion can also be used as a hidden stack for this trick. Complexity: O(N) time and O(N) space! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can you reverse a Queue with only O(1) extra space?', options: ['No', 'Yes', 'Pico can'], correctAnswer: 'No' },
      { type: 'code_fill_in', questionText: 'Push to stack.', codeSnippet: 'st.push(q.___());', correctAnswer: 'pop' },
      { type: 'teaching', questionText: '🦜 Pico: "Backward into the future! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I flipped?"', options: ['A perfect mirror!', 'No.', '0'], correctAnswer: 'A perfect mirror!' }
    ]
  },
  {
    order: 16,
    title: 'Sort the Stack',
    desc: 'Sorting a stack using another temporary stack.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Sorted Tower! We want the largest bird at the bottom and the smallest at the top. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Pop from S1. While TempStack.top > current, pop TempStack back to S1. Push current to TempStack. 🦜"', codeSnippet: 'while(!tmp.empty() && tmp.top() > curr) {\n  s1.push(tmp.pop());\n}\ntmp.push(curr);' },
      { type: 'multiple_choice', questionText: 'Complexity of sorting a stack with this method?', options: ['O(N^2)', 'O(N)', 'O(N log N)'], correctAnswer: 'O(N^2)' },
      { type: 'match_following', questionText: 'Match Sorting terms!', pairs: [{key: 'Main Stack', value: 'Input'}, {key: 'Temp Stack', value: 'Sorted Output'}, {key: 'While loop', value: 'Find position'}] },
      { type: 'programming_board', questionText: 'Condition to move back from the sorted stack.', codeSnippet: 'while (!tmp.empty() && tmp.top() ___ curr)', correctAnswer: '>' },
      { type: 'teaching', questionText: '🦜 Pico: "Recursion can also sort a stack in O(N^2) using its internal call stack as the temp space! 🦜"' },
      { type: 'multiple_choice', questionText: 'If input is [5,1,3], what is the sorted temp stack?', options: ['[1,3,5]', '[5,3,1]', '[1,5,3]'], correctAnswer: '[1,3,5]' },
      { type: 'code_fill_in', questionText: 'Place current in sorted stack.', codeSnippet: 'tmp.___ (curr);', correctAnswer: 'push' },
      { type: 'teaching', questionText: '🦜 Pico: "Order from chaos! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I in order?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 17,
    title: 'The Rolling Stream (Queue sum)',
    desc: 'Finding the average of all birds in a sliding window.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Sliding Average! What is the sum of the last 3 birds that flew past? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a Queue! Add new bird to sum and Queue. If Queue size > K, remove Front from sum and Queue! 🦜"', codeSnippet: 'sum += next; q.push(next);\nif(q.size() > k) { sum -= q.pop(); }\nreturn sum / q.size();' },
      { type: 'multiple_choice', questionText: 'Complexity of calculating sliding average for N elements?', options: ['O(N)', 'O(N * K)', 'O(K)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Stream Terms!', pairs: [{key: 'Queue', value: 'The Window'}, {key: 'Sum', value: 'Cumulative weight'}, {key: 'Front', value: 'Oldest bird'}] },
      { type: 'programming_board', questionText: 'Remove the oldest from sum.', codeSnippet: 'sum -= q.___ ();', correctAnswer: 'pop' },
      { type: 'teaching', questionText: '🦜 Pico: "This is a real-time analytics trick. O(1) update per new bird! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is the sum of window [1,2,3] if new bird is 4 and K=3?', options: ['9 (2+3+4)', '10', '6'], correctAnswer: '9 (2+3+4)' },
      { type: 'code_fill_in', questionText: 'Update window size check.', codeSnippet: 'if (q.size() ___ windowLimit)', correctAnswer: '>' },
      { type: 'teaching', questionText: '🦜 Pico: "Streaming data, stable averages! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is the window clear?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 18,
    title: 'Design a Circular Deque',
    desc: 'Implementing an efficient Deque using a circular array.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Circular Deque! Front and Rear can both grow and shrink, wrapping around the array. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Front = (Front - 1 + Size) % Size. Rear = (Rear + 1) % Size. 🦜"', codeSnippet: 'front = (front - 1 + cap) % cap;\nrear = (rear + 1) % cap;' },
      { type: 'multiple_choice', questionText: 'How do you move the front pointer BACKWARDS in a circular array?', options: ['(front - 1 + size) % size', 'front - 1', 'front % size'], correctAnswer: '(front - 1 + size) % size' },
      { type: 'match_following', questionText: 'Match Deque Wraps!', pairs: [{key: 'Insert Front', value: 'Left-shift wrap'}, {key: 'Insert Rear', value: 'Right-shift wrap'}, {key: 'Full', value: 'size == capacity'}] },
      { type: 'programming_board', questionText: 'Check if deque is full.', codeSnippet: 'if (cnt ___ cap) return false;', correctAnswer: '==' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(1) for all 4 operations. The ultimate linear container! 🦜"' },
      { type: 'multiple_choice', questionText: 'Initial state of an empty circular deque?', options: ['Count = 0', 'Count = -1', 'Front = 1'], correctAnswer: 'Count = 0' },
      { type: 'code_fill_in', questionText: 'Update rear pointer.', codeSnippet: 'rear = (rear + 1) ___ size;', correctAnswer: '%' },
      { type: 'teaching', questionText: '🦜 Pico: "Double ends, circular limits! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Do I wrap around?"', options: ['Infinite flexibility!', 'No.', '0'], correctAnswer: 'Infinite rotation!' }
    ]
  },
  {
    order: 19,
    title: 'Middle of Stack (O(1))',
    desc: 'Designing a stack with findMiddle in O(1) using DLL.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Deep Middle! Can we find the middle of the stack in constant time even after pushing and popping? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a Doubly Linked List for the stack and a MID pointer! When you push, move MID every 2 pushes. When you pop, move MID back every 2 pops! 🦜"', codeSnippet: 'if(count % 2 == 0) mid = mid->prev;' },
      { type: 'multiple_choice', questionText: 'Why is a normal array/stack bad for O(1) findMiddle?', options: ['Cannot move middle pointer in O(1)', 'Search is slow', 'Pico falls'], correctAnswer: 'Cannot move middle pointer in O(1)' },
      { type: 'match_following', questionText: 'Match Middle Stack!', pairs: [{key: 'Push', value: 'Update Mid Forward'}, {key: 'Pop', value: 'Update Mid Backward'}, {key: 'Structure', value: 'Doubly Linked List'}] },
      { type: 'programming_board', questionText: 'Move mid pointer back on pop.', codeSnippet: 'if (count % 2 == 1) mid = mid->___ ;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "This combines DLL and Stack logic. Extremely efficient for large nest monitoring! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of finding middle with this design?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
      { type: 'code_fill_in', questionText: 'Update count on push.', codeSnippet: 'count___;', correctAnswer: '++' },
      { type: 'teaching', questionText: '🦜 Pico: "Heart of the tower! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I in the middle?"', options: ['Always centered!', 'No.', '0'], correctAnswer: 'Always centered!' }
    ]
  },
  {
    order: 20,
    title: 'Stage 1 Graduation',
    desc: 'The Foundation of Linear Containers.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "STAGE 1 COMPLETE! You have conquered the towers and the fountains. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Stacks, Queues, Deques, and Circular Wraps. You are a Master of the Peering Order! 🦜"' },
      { type: 'multiple_choice', questionText: 'Stack Principal?', options: ['LIFO', 'FIFO'], correctAnswer: 'LIFO' },
      { type: 'multiple_choice', questionText: 'Queue Principal?', options: ['FIFO', 'LIFO'], correctAnswer: 'FIFO' },
      { type: 'multiple_choice', questionText: 'MinStack complexity?', options: ['O(1) search', 'O(N) search'], correctAnswer: 'O(1) search' },
      { type: 'multiple_choice', questionText: 'Queue from 2 Stacks amortized?', options: ['O(1)', 'O(N)'], correctAnswer: 'O(1)' },
      { type: 'multiple_choice', questionText: 'Circular Queue full index?', options: ['(r+1)%s == f', 'r+1 == f'], correctAnswer: '(r+1)%s == f' },
      { type: 'match_following', questionText: 'Final Foundation Match!', pairs: [{key: 'Stack', value: 'Tower!'}, {key: 'Queue', value: 'Line!'}, {key: 'Pico', value: 'Salutes!'}] },
      { type: 'teaching', questionText: '🦜 Pico: "Next, we face the Intermediate Stage: Postfix, Prefix, and the Sliding Window King! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you ready to calculate?"', options: ['SQUAWK YES!', 'Wait...', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  }
];

module.exports = stage1_part2;

const stage1_part1 = [
  {
    order: 1,
    title: 'The Vertical Nest (Stack)',
    desc: 'Introduction to the Stack (LIFO principle).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Stack! Imagine a vertical stack of nests. You can only put a new bird on the TOP, and you can only take the TOP bird off first! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "This is LIFO: Last In, First Out. The last bird to arrive is the first one to fly away! 🦜"', codeSnippet: 'stack.push(newBird);\nbird = stack.pop();' },
      { type: 'multiple_choice', questionText: 'What does LIFO stand for?', options: ['Last In, First Out', 'Last In, Fast Out', 'Left In, Front Out'], correctAnswer: 'Last In, First Out' },
      { type: 'match_following', questionText: 'Match Stack Terms!', pairs: [{key: 'Push', value: 'Add to Top'}, {key: 'Pop', value: 'Remove from Top'}, {key: 'Peek', value: 'Look at Top'}] },
      { type: 'programming_board', questionText: 'Add a value `x` to the stack.', codeSnippet: 's.___ (x);', correctAnswer: 'push' },
      { type: 'teaching', questionText: '🦜 Pico: "Think of a stack of plates or a tube of tennis balls. You can\'t reach the bottom without moving the top! 🦜"' },
      { type: 'multiple_choice', questionText: 'Which end of the stack is used for both adding and removing?', options: ['Top', 'Bottom', 'Middle'], correctAnswer: 'Top' },
      { type: 'code_fill_in', questionText: 'Retrieve the top element without removing it.', codeSnippet: 'val = s.___();', correctAnswer: 'top' },
      { type: 'teaching', questionText: '🦜 Pico: "High and mighty! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I on top?"', options: ['The king of the stack!', 'No.', '0'], correctAnswer: 'The king of the stack!' }
    ]
  },
  {
    order: 2,
    title: 'The Pecking Order (Queue)',
    desc: 'Introduction to the Queue (FIFO principle).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Queue! Unlike a stack, a queue is like a line at the bird-fountain. First bird in the line is the first to drink! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "This is FIFO: First In, First Out. Fairness in the flock! 🦜"', codeSnippet: 'queue.push(newBird); // Enqueue\nbird = queue.front(); queue.pop(); // Dequeue' },
      { type: 'multiple_choice', questionText: 'What does FIFO stand for?', options: ['First In, First Out', 'First In, Fast Out', 'Front In, Front Out'], correctAnswer: 'First In, First Out' },
      { type: 'match_following', questionText: 'Match Queue Terms!', pairs: [{key: 'Enqueue', value: 'Add to Rear'}, {key: 'Dequeue', value: 'Remove from Front'}, {key: 'Front', value: 'The leader'}] },
      { type: 'programming_board', questionText: 'Remove the first bird from the queue.', codeSnippet: 'q.___ ();', correctAnswer: 'pop' },
      { type: 'teaching', questionText: '🦜 Pico: "Adding happens at the BACK (Rear), and removing happens at the FRONT. Everyone gets their turn! 🦜"' },
      { type: 'multiple_choice', questionText: 'Which end is used for adding a new element in a Queue?', options: ['Rear (Back)', 'Front', 'Top'], correctAnswer: 'Rear (Back)' },
      { type: 'code_fill_in', questionText: 'Check who is next in line.', codeSnippet: 'bird = q.___();', correctAnswer: 'front' },
      { type: 'teaching', questionText: '🦜 Pico: "Wait your turn, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I first?"', options: ['Leading the flight!', 'No.', '0'], correctAnswer: 'Leading the flight!' }
    ]
  },
  {
    order: 3,
    title: 'The Array Stack',
    desc: 'Implementing a Stack using a static array.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Building a stack inside an array! We use a TOP variable to track the highest nest occupied. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Initially, Top is -1. Push: Increment Top and store. Pop: Retrieve and Decrement Top. 🦜"', codeSnippet: 'void push(int x) {\n  if (top == MAX-1) return; // Overflow\n  arr[++top] = x;\n}' },
      { type: 'multiple_choice', questionText: 'What is the "Stack Overflow" condition?', options: ['Stack is full', 'Stack is empty', 'Pico fell off'], correctAnswer: 'Stack is full' },
      { type: 'match_following', questionText: 'Match Array logic!', pairs: [{key: 'top == -1', value: 'Underflow'}, {key: 'top = MAX-1', value: 'Full'}, {key: '++top', value: 'Space for new'}] },
      { type: 'programming_board', questionText: 'Decrement the top index.', codeSnippet: '___ top;', correctAnswer: '--' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(1) for everything! But be careful—you can\'t grow the nest once the array is full! 🦜"' },
      { type: 'multiple_choice', questionText: 'Time complexity for Peek in an array stack?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
      { type: 'code_fill_in', questionText: 'Access the top element.', codeSnippet: 'return arr[___];', correctAnswer: 'top' },
      { type: 'teaching', questionText: '🦜 Pico: "Solid and steady! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is my array big enough?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 4,
    title: 'The Flexible Stack (LL)',
    desc: 'Implementing a Stack using a Linked List.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "No limits! By using a Linked List, our stack can grow as long as there are seeds in the forest! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "PUSH is just inserting a node at the HEAD. POP is just deleting the HEAD node. 🦜"', codeSnippet: 'newNode->next = topNode;\ntopNode = newNode;' },
      { type: 'multiple_choice', questionText: 'Where does the "Top" pointer stay in a Linked List stack implementation?', options: ['At the Head', 'At the Tail', 'In the middle'], correctAnswer: 'At the Head' },
      { type: 'match_following', questionText: 'Match LL Stack steps!', pairs: [{key: 'Push', value: 'Insert at Head'}, {key: 'Pop', value: 'Delete from Head'}, {key: 'Peek', value: 'Value of Head'}] },
      { type: 'programming_board', questionText: 'Make top point to its successor.', codeSnippet: 'topNode = topNode->___ ;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "Wait, there is no overflow here! As long as you have memory, you have nests! 🦜"' },
      { type: 'multiple_choice', questionText: 'Advantage of LL Stack over Array Stack?', options: ['Dynamic size', 'Less memory', 'Faster Peek'], correctAnswer: 'Dynamic size' },
      { type: 'code_fill_in', questionText: 'Check if stack is empty.', codeSnippet: 'if (___ == NULL) return true;', correctAnswer: 'topNode' },
      { type: 'teaching', questionText: '🦜 Pico: "Infinite heights! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the top pointer?"', options: ['Guiding the growth!', 'No.', '0'], correctAnswer: 'Guiding the growth!' }
    ]
  },
  {
    order: 5,
    title: 'Balanced Brackets',
    desc: 'Using a stack to check for valid parentheses.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Guardian! Are all brackets `(`, `[`, `{` closed correctly and in order? \'{[()]}\' is good, \'{[(])}\' is bad! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Push opening brackets into the Stack. When you see a closing bracket, POP and check if it matches the leader! 🦜"', codeSnippet: 'if (s.empty() || s.top() != matchingChar) return false;\ns.pop();' },
      { type: 'multiple_choice', questionText: 'Result for input "([)]"?', options: ['Invalid', 'Valid', 'Depends on Pico'], correctAnswer: 'Invalid' },
      { type: 'match_following', questionText: 'Match Parentheses!', pairs: [{key: '(', value: ')'}, {key: '[', value: ']'}, {key: '{', value: '}'}] },
      { type: 'programming_board', questionText: 'Check if stack is empty before popping.', codeSnippet: 'if (st.____) return false;', correctAnswer: 'empty' },
      { type: 'teaching', questionText: '🦜 Pico: "At the end, if the stack is EMPTY, the nesting is perfect. Complexity: O(N) time and O(N) space! 🦜"' },
      { type: 'multiple_choice', questionText: 'Final condition for validity?', options: ['Stack is empty', 'Stack is full', 'Stack has 1 node'], correctAnswer: 'Stack is empty' },
      { type: 'code_fill_in', questionText: 'Push opening bracket.', codeSnippet: 'if (c == \'(\') s.___(\'(\');', correctAnswer: 'push' },
      { type: 'teaching', questionText: '🦜 Pico: "Perfectly nested nests! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I balanced?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 6,
    title: 'The Array Queue',
    desc: 'Implementing a Queue using an array.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Queue-building! We use two indices: FRONT (who is drinking) and REAR (last bird in line). 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Enqueue: Increase Rear and store. Dequeue: Increase Front. 🦜"', codeSnippet: 'arr[rear++] = x;\nval = arr[front++];' },
      { type: 'multiple_choice', questionText: 'Initial values for Front and Rear (empty queue)?', options: ['0', '-1', 'Infinity'], correctAnswer: '0' },
      { type: 'match_following', questionText: 'Match Index movement!', pairs: [{key: 'Enqueue', value: 'Rear++'}, {key: 'Dequeue', value: 'Front++'}, {key: 'Empty', value: 'Front == Rear'}] },
      { type: 'programming_board', questionText: 'Increase the front index.', codeSnippet: 'front ___ ;', correctAnswer: '++' },
      { type: 'teaching', questionText: '🦜 Pico: "Wait! If we just keep moving both right, we eventually run out of space even if the queue is small. We need a CIRCULAR nest! 🦜"' },
      { type: 'multiple_choice', questionText: 'Problem with simple array queue?', options: ['Memory waste at front', 'Slow Search', 'Pico falls'], correctAnswer: 'Memory waste at front' },
      { type: 'code_fill_in', questionText: 'Increment rear with modulo (circular).', codeSnippet: 'rear = (rear + 1) ___ size;', correctAnswer: '%' },
      { type: 'teaching', questionText: '🦜 Pico: "Keep the line moving! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I at the rear?"', options: ['The end of the line!', 'No.', '0'], correctAnswer: 'The end of the line!' }
    ]
  },
  {
    order: 7,
    title: 'The Circular Queue',
    desc: 'Solving the memory waste with a Circular Array.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Infinity Loop! When REAR hits the end, it jumps back to the START if there is room. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use the modulo (%) operator to keep the indices inside the array bounds. 🦜"', codeSnippet: 'rear = (rear + 1) % MAX;\nfront = (front + 1) % MAX;' },
      { type: 'multiple_choice', questionText: 'How is REAR updated in a circular queue?', options: ['(rear + 1) % size', 'rear + 1', 'rear % size'], correctAnswer: '(rear + 1) % size' },
      { type: 'match_following', questionText: 'Match Circular Conditions!', pairs: [{key: 'Full', value: '(rear + 1) % size == front'}, {key: 'Empty', value: 'front == -1'}, {key: 'Reset', value: 'front = rear = 0'}] },
      { type: 'programming_board', questionText: 'Modulo operator symbol.', codeSnippet: 'next = (current + 1) ___ capacity;', correctAnswer: '%' },
      { type: 'teaching', questionText: '🦜 Pico: "This is a much more elite way to manage memory. No birds left behind! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is search faster in a circular queue than a normal queue?', options: ['No (Both O(N))', 'Yes', 'Pico likes speed'], correctAnswer: 'No (Both O(N))' },
      { type: 'code_fill_in', questionText: 'Identify the next front.', codeSnippet: 'front = (front + 1) ___ MAX;', correctAnswer: '%' },
      { type: 'teaching', questionText: '🦜 Pico: "The wheel turns again! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I circular?"', options: ['Infinite rotation!', 'No.', '0'], correctAnswer: 'Infinite rotation!' }
    ]
  },
  {
    order: 8,
    title: 'The LL Queue',
    desc: 'Implementing a Queue using a Linked List.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Dynamic Line! Two pointers: FRONT at the head and REAR at the tail. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "ENQUEUE: newNode at Tail->next, update Tail. DEQUEUE: Delete Head, update Front! 🦜"', codeSnippet: 'rear->next = newNode; rear = newNode;\nfront = front->next;' },
      { type: 'multiple_choice', questionText: 'Time complexity for Enqueue and Dequeue in an LL Queue?', options: ['O(1) for both', 'O(1) and O(N)', 'O(N)'], correctAnswer: 'O(1) for both' },
      { type: 'match_following', questionText: 'Match LL Queue pointers!', pairs: [{key: 'Front', value: 'Head (Removal)'}, {key: 'Rear', value: 'Tail (Addition)'}, {key: 'NULL', value: 'End'}] },
      { type: 'programming_board', questionText: 'Add a new node to the rear.', codeSnippet: 'rear->next = ___ ;', correctAnswer: 'newNode' },
      { type: 'teaching', questionText: '🦜 Pico: "Just like the Stack, no pre-defined memory limits. Fly free, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: 'What happens if you dequeue the only node?', options: ['Front and Rear both become NULL', 'Rear remains points to old', 'Error'], correctAnswer: 'Front and Rear both become NULL' },
      { type: 'code_fill_in', questionText: 'Advance the front pointer.', codeSnippet: 'front = front->___;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "One way flight! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the front pointer?"', options: ['Opening the path!', 'No.', '0'], correctAnswer: 'Opening the path!' }
    ]
  },
  {
    order: 9,
    title: 'Modern Queues (Priority)',
    desc: 'Introduction to Priority Queues.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Elite VIP! In a Priority Queue, every bird has a ranking. The bird with the highest priority drinks first, no matter when it arrived! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Perfect for emergency cases where the king-bird gets served before the common fledgling! 🦜"', codeSnippet: 'pq.push(bird, priority);\nbird = pq.top();' },
      { type: 'multiple_choice', questionText: 'Which element is removed first in a Max-Priority Queue?', options: ['The one with maximum priority', 'The first arriving', 'Random'], correctAnswer: 'The one with maximum priority' },
      { type: 'match_following', questionText: 'Match PQ types!', pairs: [{key: 'Max-Priority', value: 'Highest rank first'}, {key: 'Min-Priority', value: 'Lowest rank first'}, {key: 'Implementation', value: 'Heaps'}] },
      { type: 'programming_board', questionText: 'Keyword to get high priority element.', codeSnippet: 'best = pq.___();', correctAnswer: 'top' },
      { type: 'teaching', questionText: '🦜 Pico: "Internally, we use HEAPS for this. We will master them later in the forest! 🦜"' },
      { type: 'multiple_choice', questionText: 'Time complexity of extraction in a Binary Heap PQ?', options: ['O(log N)', 'O(1)', 'O(N)'], correctAnswer: 'O(log N)' },
      { type: 'code_fill_in', questionText: 'Add bird with its value.', codeSnippet: 'pq.push(___);', correctAnswer: 'x' },
      { type: 'teaching', questionText: '🦜 Pico: "Rank has its rewards! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I high priority?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 10,
    title: 'The Double-Ended Nest (Deque)',
    desc: 'Introduction to Deques (Double Ended Queues).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Ultimate Flex! A Deque allows adding and removing birds from BOTH ends. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Stack + Queue = Deque! It’s the swiss-army knife of linear structures. 🦜"', codeSnippet: 'dq.push_front(x); dq.push_back(y);\ndq.pop_front(); dq.pop_back();' },
      { type: 'multiple_choice', questionText: 'What operations does a Deque support?', options: ['Push/Pop at both ends', 'Push only', 'Pop only'], correctAnswer: 'Push/Pop at both ends' },
      { type: 'match_following', questionText: 'Match Deque Actions!', pairs: [{key: 'Push_Front', value: 'New Leader'}, {key: 'Push_Back', value: 'New Caboose'}, {key: 'Pop_Front', value: 'Remove Leader'}] },
      { type: 'programming_board', questionText: 'Add to the front.', codeSnippet: 'dq.___ (x);', correctAnswer: 'push_front' },
      { type: 'teaching', questionText: '🦜 Pico: "Usually implemented as a DLL or a series of blocks. Extremely efficient for sliding window problems! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of push/pop in a C++ `std::deque`?', options: ['O(1) amortized', 'O(N)', 'O(log N)'], correctAnswer: 'O(1) amortized' },
      { type: 'code_fill_in', questionText: 'Remove from back.', codeSnippet: 'dq.___();', correctAnswer: 'pop_back' },
      { type: 'teaching', questionText: '🦜 Pico: "Flexibility in flight! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I a deque?"', options: ['A master of both ends!', 'No.', '0'], correctAnswer: 'A master of both ends!' }
    ]
  }
];

module.exports = stage1_part1;

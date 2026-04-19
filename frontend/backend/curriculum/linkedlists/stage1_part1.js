const stage1_part1 = [
  {
    order: 1,
    title: 'The Train of Nests',
    desc: 'Understanding what a Linked List truly is.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Imagine a line of nests, but they aren\'t stuck in the ground like an array. Each nest has a secret map to the NEXT nest! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "This is a Linked List. Every Node has two parts: the DATA (the seed) and the NEXT pointer (the map). 🦜"', codeSnippet: 'struct Node {\n  int data;\n  Node* next;\n};' },
      { type: 'multiple_choice', questionText: 'What are the two parts of a Linked List node?', options: ['Data and Next pointer', 'Index and Value', 'Start and End'], correctAnswer: 'Data and Next pointer' },
      { type: 'match_following', questionText: 'Match Node terms!', pairs: [{key: 'Head', value: 'The First Nest'}, {key: 'Tail', value: 'The Last Nest'}, {key: 'NULL', value: 'The end of the line'}] },
      { type: 'programming_board', questionText: 'Access the data of the current node `p`.', codeSnippet: 'val = p ___ data;', correctAnswer: '->' },
      { type: 'teaching', questionText: '🦜 Pico: "Linked Lists can grow and shrink as much as you want! No more worrying about running out of space in your array-nest! 🦜"' },
      { type: 'multiple_choice', questionText: 'Where does the NEXT of the tail node point to?', options: ['NULL (or nullptr)', 'The Head', 'The 0th index'], correctAnswer: 'NULL (or nullptr)' },
      { type: 'code_fill_in', questionText: 'Create a new node in C++.', codeSnippet: 'Node* n = ___ Node();', correctAnswer: 'new' },
      { type: 'teaching', questionText: '🦜 Pico: "Chain the nests, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I a node?"', options: ['The master of the chain!', 'No.', '0'], correctAnswer: 'The master of the chain!' }
    ]
  },
  {
    order: 2,
    title: 'The Great Journey',
    desc: 'Traversing a Linked List from start to finish.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Traversal! To find a specific nest, you must follow the maps one by one from the Head. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a temporary pointer. Move it until it reaches NULL. 🦜"', codeSnippet: 'Node* temp = head;\nwhile (temp != NULL) {\n  cout << temp->data;\n  temp = temp->next;\n}' },
      { type: 'multiple_choice', questionText: 'What is the time complexity of traversing a list of size N?', options: ['O(N)', 'O(1)', 'O(log N)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Traversal Logic!', pairs: [{key: 'while(temp != NULL)', value: 'The loop'}, {key: 'temp = temp->next', value: 'The step'}, {key: 'head', value: 'The start'}] },
      { type: 'programming_board', questionText: 'Step to the next node.', codeSnippet: 'curr = curr ___ ;', correctAnswer: '->next' },
      { type: 'teaching', questionText: '🦜 Pico: "Unlike an array, you CANNOT jump to node 5. You must fly through 1, 2, 3, and 4 first! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can you access a linked list element in O(1) time?', options: ['No', 'Yes', 'Only if I’m strong'], correctAnswer: 'No' },
      { type: 'code_fill_in', questionText: 'Check if current node is valid.', codeSnippet: 'while (curr ___ NULL)', correctAnswer: '!=' },
      { type: 'teaching', questionText: '🦜 Pico: "One step at a time! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I at the end?"', options: ['Never! Still flying!', 'Yes.', '0'], correctAnswer: 'Never! Still flying!' }
    ]
  },
  {
    order: 3,
    title: 'Landing at the Front',
    desc: 'Inserting a new node at the beginning of the list.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Head Insertion! A new bird wants to be the leader of the flock. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Step 1: Point the NEW node\'s next to the current Head. Step 2: Make the NEW node the new Head! 🦜"', codeSnippet: 'newNode->next = head;\nhead = newNode;' },
      { type: 'multiple_choice', questionText: 'Complexity of inserting at the Head of a Linked List?', options: ['O(1)', 'O(N)', 'O(Pointer)'], correctAnswer: 'O(1)' },
      { type: 'match_following', questionText: 'Match Insertion order!', pairs: [{key: 'newNode->next', value: 'Old Head'}, {key: 'head pointer', value: 'New Node'}, {key: 'Sequence', value: 'Vital!'}] },
      { type: 'programming_board', questionText: 'Point the new node to the old start.', codeSnippet: 'newNode->next = ___ ;', correctAnswer: 'head' },
      { type: 'teaching', questionText: '🦜 Pico: "This is much faster than an array, where you have to move EVERY bird to make room at the front! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why is LL head insertion O(1)?', options: ['No shifting required', 'Pointer magic', 'Pico said so'], correctAnswer: 'No shifting required' },
      { type: 'code_fill_in', questionText: 'Update the head pointer.', codeSnippet: '___ = newNode;', correctAnswer: 'head' },
      { type: 'teaching', questionText: '🦜 Pico: "New leader, same flock! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the new Head?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 4,
    title: 'The Caboose Connection',
    desc: 'Inserting a new node at the tail of the list.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Tail Insertion! Adding a new nest at the very end of the line. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Step 1: Travel all the way to the Tail. Step 2: Point Tail->next to the New Node! 🦜"', codeSnippet: 'while(temp->next != NULL) temp = temp->next;\ntemp->next = newNode;' },
      { type: 'multiple_choice', questionText: 'Complexity of tail insertion if you ONLY have a head pointer?', options: ['O(N)', 'O(1)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Tail Logic!', pairs: [{key: 'temp->next == NULL', value: 'We found the tail'}, {key: 'temp->next = newNode', value: 'The link'}, {key: 'newNode->next = NULL', value: 'The new tail'}] },
      { type: 'programming_board', questionText: 'Check if the next node exists.', codeSnippet: 'while (curr->___ != NULL) curr = curr->next;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "If you keep a separate TAIL pointer, this becomes O(1). Every elite bird keeps a tail pointer! 🦜"' },
      { type: 'multiple_choice', questionText: 'If list is empty, tail insertion is same as...?', options: ['Head insertion', 'Deletion', 'Error'], correctAnswer: 'Head insertion' },
      { type: 'code_fill_in', questionText: 'Assign new node to the old tail.', codeSnippet: 'tail->next = ___;', correctAnswer: 'newNode' },
      { type: 'teaching', questionText: '🦜 Pico: "Longer and stronger! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I trailing?"', options: ['Leading from the back!', 'No.', '0'], correctAnswer: 'Leading from the back!' }
    ]
  },
  {
    order: 5,
    title: 'The Mid-Flight Dock',
    desc: 'Inserting a node at a specific position.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Middle Insertion! Putting a nest between two existing ones. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Step 1: Find node at pos-1. Step 2: newNode->next = temp->next. Step 3: temp->next = newNode. 🦜"', codeSnippet: 'newNode->next = temp->next;\ntemp->next = newNode;' },
      { type: 'multiple_choice', questionText: 'Complexity of inserting at position K?', options: ['O(K)', 'O(1)', 'O(N)'], correctAnswer: 'O(K)' },
      { type: 'match_following', questionText: 'Match Link Order!', pairs: [{key: 'newNode->next', value: 'temp->next'}, {key: 'temp->next', value: 'newNode'}, {key: 'Search', value: 'Find temp'}] },
      { type: 'programming_board', questionText: 'Loop to find position `k`.', codeSnippet: 'for(int i=1; i<___; i++) temp = temp->next;', correctAnswer: 'k' },
      { type: 'teaching', questionText: '🦜 Pico: "Be careful! If you update `temp->next` BEFORE setting `newNode->next`, you will lose the rest of your necklace! A catastrophe! 🦜"' },
      { type: 'multiple_choice', questionText: 'What happens if you lose the reference to the next node?', options: ['Memory Leak / Lost data', 'Nothing', 'Automatic fix'], correctAnswer: 'Memory Leak / Lost data' },
      { type: 'code_fill_in', questionText: 'Connect the new node to the future.', codeSnippet: 'node->next = prev->___;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "Bridging the gap! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I in the middle?"', options: ['The heart of the chain!', 'No.', '0'], correctAnswer: 'The heart of the chain!' }
    ]
  },
  {
    order: 6,
    title: 'Evicting the Leader',
    desc: 'Deleting the head node.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Head Deletion! The first bird flies away. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Step 1: Point temporary pointer to Head. Step 2: Head = Head->next. Step 3: Delete temp! 🦜"', codeSnippet: 'Node* temp = head;\nhead = head->next;\ndelete temp;' },
      { type: 'multiple_choice', questionText: 'Complexity of deleting the Head?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
      { type: 'match_following', questionText: 'Match Deletion Flow!', pairs: [{key: 'temp = head', value: 'Keep for deletion'}, {key: 'head = head->next', value: 'Move leader'}, {key: 'delete temp', value: 'Free memory'}] },
      { type: 'programming_board', questionText: 'The actual memory freeing keyword.', codeSnippet: '___ temp;', correctAnswer: 'delete' },
      { type: 'teaching', questionText: '🦜 Pico: "In languages like Java or Python, you don\'t need step 3. The Garbage Collector bird picks up the mess for you! 🦜"' },
      { type: 'multiple_choice', questionText: 'What happens to the head if the list has only 1 node?', options: ['Becomes NULL', 'Stays same', 'Error'], correctAnswer: 'Becomes NULL' },
      { type: 'code_fill_in', questionText: 'Shift the head.', codeSnippet: 'head = ___->next;', correctAnswer: 'head' },
      { type: 'teaching', questionText: '🦜 Pico: "Clean flight, clean memory! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I gone?"', options: ['Just moved ahead!', 'SQUAWK NO!', '0'], correctAnswer: 'Just moved ahead!' }
    ]
  },
  {
    order: 7,
    title: 'Removing the Caboose',
    desc: 'Deleting the tail node.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Tail Deletion! The last nest is abandoned. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Step 1: Travel to the SECOND TO LAST node (tail precursor). Step 2: Delete tail. Step 3: Set precursor->next = NULL. 🦜"', codeSnippet: 'while(temp->next->next != NULL) temp = temp->next;\ndelete temp->next;\ntemp->next = NULL;' },
      { type: 'multiple_choice', questionText: 'Complexity of tail deletion with only a head pointer?', options: ['O(N)', 'O(1)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Precursor Logic!', pairs: [{key: 'temp->next->next', value: 'Check 2 ahead'}, {key: 'delete temp->next', value: 'The snap'}, {key: 'NULL', value: 'The new end'}] },
      { type: 'programming_board', questionText: 'Verify the node TWO steps ahead is NULL.', codeSnippet: 'while (curr->next->___ != NULL)', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "Even if you have a TAIL pointer, you MUST still travel from the Head to find its precursor. Tail deletion is always tricky! 🦜"' },
      { type: 'multiple_choice', questionText: 'Does a tail pointer help make tail deletion O(1)?', options: ['No (Still need precursor)', 'Yes', 'Only with seeds'], correctAnswer: 'No (Still need precursor)' },
      { type: 'code_fill_in', questionText: 'Set the new end.', codeSnippet: 'precursor->next = ___;', correctAnswer: 'NULL' },
      { type: 'teaching', questionText: '🦜 Pico: "Snip for success! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the precursor?"', options: ['The chosen one!', 'No.', '0'], correctAnswer: 'The chosen one!' }
    ]
  },
  {
    order: 8,
    title: 'The Seek and Find',
    desc: 'Searching for a value in a Linked List.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Where is the golden seed? Search through the nests until you find it! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Just like traversal! Check `curr->data` at every step. Return true if found! 🦜"', codeSnippet: 'while(curr != NULL) {\n  if(curr->data == key) return true;\n  curr = curr->next;\n}' },
      { type: 'multiple_choice', questionText: 'Is search in a Linked List faster than an Array?', options: ['No (Both O(N))', 'Yes', 'Depends on Pico’s speed'], correctAnswer: 'No (Both O(N))' },
      { type: 'match_following', questionText: 'Match Search Results!', pairs: [{key: 'Found', value: 'Return true'}, {key: 'End reached', value: 'Return false'}, {key: 'Condition', value: 'data == key'}] },
      { type: 'programming_board', questionText: 'Data comparison code.', codeSnippet: 'if (curr->data ___ key)', correctAnswer: '==' },
      { type: 'teaching', questionText: '🦜 Pico: "Binary Search doesn\'t work here because you can\'t jump to the middle! It’s all linear flight for us! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why can’t you do Binary Search easily on LL?', options: ['No O(1) random access', 'No sorted nodes', 'List is too long'], correctAnswer: 'No O(1) random access' },
      { type: 'code_fill_in', questionText: 'Iterate pointer.', codeSnippet: 'p = p->___;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "Found you! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I hidden?"', options: ['Visible and Elite!', 'No.', '0'], correctAnswer: 'Visible and Elite!' }
    ]
  },
  {
    order: 9,
    title: 'The Mirror Chain (Reverse)',
    desc: 'Reversing a Linked List (Iterative).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Ultimate Flip! Change the direction of every single map. The tail becomes the head! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use three pointers: PREV, CURR, and NEXT. 🦜"', codeSnippet: 'while (curr != NULL) {\n  next = curr->next;\n  curr->next = prev;\n  prev = curr;\n  curr = next;\n}\nhead = prev;' },
      { type: 'multiple_choice', questionText: 'How many pointers are needed to reverse a LL iteratively?', options: ['3', '2', '1'], correctAnswer: '3' },
      { type: 'match_following', questionText: 'Match Reverse Pointers!', pairs: [{key: 'Prev', value: 'The new path'}, {key: 'Curr', value: 'The worker'}, {key: 'Next', value: 'The anchor'}] },
      { type: 'programming_board', questionText: 'The core link reversal step.', codeSnippet: 'curr->next = ___ ;', correctAnswer: 'prev' },
      { type: 'teaching', questionText: '🦜 Pico: "This is the #1 interview question! Complexity: O(N) time and O(1) space. A masterpiece of pointer logic! 🦜"' },
      { type: 'multiple_choice', questionText: 'Final head after reversal?', options: ['The old Prev', 'The old Head', 'The old Next'], correctAnswer: 'The old Prev' },
      { type: 'code_fill_in', questionText: 'Store the future before breaking it.', codeSnippet: 'next = curr->___;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "Backward is the new Forward! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I flipped?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 10,
    title: 'The Middle Nest',
    desc: 'Finding the middle of a Linked List in one pass.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Tortoise and the Hare! How to find the exact middle without counting the whole list first? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Two pointers! The SLOW bird moves one nest at a time. The FAST bird moves TWO nests. When the Fast bird hits the end, the Slow bird is at the middle! 🦜"', codeSnippet: 'while(fast != NULL && fast->next != NULL) {\n  slow = slow->next;\n  fast = fast->next->next;\n}' },
      { type: 'multiple_choice', questionText: 'Relative speed of the Hare vs Tortoise?', options: ['Hare is 2x faster', 'Equal', 'Hare is 10x'], correctAnswer: 'Hare is 2x faster' },
      { type: 'match_following', questionText: 'Match Pace!', pairs: [{key: 'Slow', value: 'Step 1'}, {key: 'Fast', value: 'Step 2'}, {key: 'Goal', value: 'Middle'}] },
      { type: 'programming_board', questionText: 'Double step for the fast bird.', codeSnippet: 'fast = fast->next->___ ;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time but only ONE pass. Efficient, elegant, and very bird-like! 🦜"' },
      { type: 'multiple_choice', questionText: 'If list has 6 nodes, where does Tortoise end?', options: ['Node 4 (2nd middle)', 'Node 3', 'Node 1'], correctAnswer: 'Node 4 (2nd middle)' },
      { type: 'code_fill_in', questionText: 'Condition for the Fast bird.', codeSnippet: 'while (fast && fast->___)', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "Fly fast, find the heart! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I at the center?"', options: ['Always!', 'No.', '0'], correctAnswer: 'Always!' }
    ]
  }
];

module.exports = stage1_part1;

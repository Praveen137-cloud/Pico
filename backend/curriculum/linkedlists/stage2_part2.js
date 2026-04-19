const stage2_part2 = [
  {
    order: 31,
    title: 'Merge Sort Mastery',
    desc: 'Sorting a Linked List in O(N log N) time.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Grand Merger! Combine the power of splitting (Unit 30) and merging (Unit 13) to sort the whole list! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Recurse until you have single nests, then merge them back together in perfect order. 🦜"', codeSnippet: 'Node* mid = findMid(head);\nNode* left = mergeSort(head);\nNode* right = mergeSort(mid);\nreturn merge(left, right);' },
      { type: 'multiple_choice', questionText: 'Time complexity of Merge Sort on a Linked List?', options: ['O(N log N)', 'O(N)', 'O(N^2)'], correctAnswer: 'O(N log N)' },
      { type: 'match_following', questionText: 'Match Sorting Steps!', pairs: [{key: 'Divide', value: 'Find Mid and Split'}, {key: 'Conquer', value: 'Recursive sort'}, {key: 'Combine', value: 'Merge sorted lists'}] },
      { type: 'programming_board', questionText: 'Recursive base case return.', codeSnippet: 'if (!head || !head->next) return ___ ;', correctAnswer: 'head' },
      { type: 'teaching', questionText: '🦜 Pico: "Space Complexity: O(log N) due to the call stack. This is the gold standard for sorting dynamic lists! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why is Merge Sort preferred over Quick Sort for Linked Lists?', options: ['No O(1) random access needed', 'Faster pivots', 'Pico likes merges'], correctAnswer: 'No O(1) random access needed' },
      { type: 'code_fill_in', questionText: 'Merge the two sorted halves.', codeSnippet: 'return ___(h1, h2);', correctAnswer: 'merge' },
      { type: 'teaching', questionText: '🦜 Pico: "Ordered flight, ordered mind! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I sorted?"', options: ['Perfectly arranged!', 'No.', '0'], correctAnswer: 'Perfectly arranged!' }
    ]
  },
  {
    order: 32,
    title: 'The Deep Clone',
    desc: 'Cloning a Linked List with Next and RANDOM pointers.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Doppelganger! Some nests have two maps: one to the next bird, and one to a RANDOM bird in the forest. How to copy the whole thing? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Step 1: Create a copy of each node and wedge it between the original and its next. 2: Set the copy\'s random pointer. 3: Extract the copy! 🦜"', codeSnippet: 'newNode->random = curr->random->next;\ncurr->next = newNode->next;' },
      { type: 'multiple_choice', questionText: 'Complexity of cloning with random pointers using the weaving method?', options: ['O(N) time and O(1) space', 'O(N^2)', 'O(N) space'], correctAnswer: 'O(N) time and O(1) space' },
      { type: 'match_following', questionText: 'Match Cloning Phases!', pairs: [{key: 'Interweave', value: 'Original -> Copy -> Original'}, {key: 'Random Step', value: 'copy->random = orig->random->next'}, {key: 'Detach', value: 'Separate the chains'}] },
      { type: 'programming_board', questionText: 'Link the copy’s random pointer.', codeSnippet: 'curr->next->random = curr->random ___ next ;', correctAnswer: '->' },
      { type: 'teaching', questionText: '🦜 Pico: "By weaving the copies INTO the original list, you don\'t need a Hash Map to find the new node addresses. Clever, right? 🦜"' },
      { type: 'multiple_choice', questionText: 'Can you solve this with a Hash Map?', options: ['Yes (O(N) space)', 'No', 'Only for arrays'], correctAnswer: 'Yes (O(N) space)' },
      { type: 'code_fill_in', questionText: 'Restore the original list next pointer.', codeSnippet: 'curr->next = ___ ;', correctAnswer: 'copy->next' },
      { type: 'teaching', questionText: '🦜 Pico: "Double the world, double the fun! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is there another me?"', options: ['A perfect replica!', 'No.', '0'], correctAnswer: 'A perfect replica!' }
    ]
  },
  {
    order: 33,
    title: 'Spiral Order (Matrix-Link)',
    desc: 'Converting a Linked List into a spiral 2D matrix.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Vortex! Fill a matrix row-by-row, column-by-column in a spiral using seeds from your necklace. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use four boundaries: TOP, BOTTOM, LEFT, RIGHT. Fill each wall, then shrink the boundary! 🦜"', codeSnippet: 'for(int j=left; j<=right && head; j++) matrix[top][j] = head->val;' },
      { type: 'multiple_choice', questionText: 'Boundary change after filling the Top row?', options: ['Top++', 'Bottom--', 'Left++'], correctAnswer: 'Top++' },
      { type: 'match_following', questionText: 'Match Spiral Walls!', pairs: [{key: 'Top', value: 'Left to Right'}, {key: 'Right', value: 'Top to Bottom'}, {key: 'Bottom', value: 'Right to Left'}] },
      { type: 'programming_board', questionText: 'Check if the list still has birds before filling.', codeSnippet: 'while (___ && top <= bottom)', correctAnswer: 'head' },
      { type: 'teaching', questionText: '🦜 Pico: "If the flock runs out before the matrix is full, fill the rest with -1. 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of filling an M x N matrix from a list?', options: ['O(M * N)', 'O(Length)', 'O(1)'], correctAnswer: 'O(M * N)' },
      { type: 'code_fill_in', questionText: 'Shrink the Right boundary.', codeSnippet: 'right ___ ;', correctAnswer: '--' },
      { type: 'teaching', questionText: '🦜 Pico: "Spiral into mastery! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I dizzy?"', options: ['SQUAWK NO!', 'Yes.', '0'], correctAnswer: 'SQUAWK NO!' }
    ]
  },
  {
    order: 34,
    title: 'Intersection Detect (II)',
    desc: 'Finding where a cycle begins in a Linked List.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Loop Origin! We know there is a cycle (Unit 11), but where exactly does the tail bite the neck? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Step 1: Hare and Tortoise meet. Step 2: Start a new bird at the Head. Move both (Slow bird and Head bird) one step at a time. They will meet at the start! 🦜"', codeSnippet: 'while (entry != slow) {\n  entry = entry->next;\n  slow = slow->next;\n}\nreturn entry;' },
      { type: 'multiple_choice', questionText: 'Where does the cycle begin if the fast bird and slow bird meet for the first time?', options: ['Depends on list structure', 'At the meeting point', 'At the head'], correctAnswer: 'Depends on list structure' },
      { type: 'match_following', questionText: 'Match Cycle Detection!', pairs: [{key: 'Ph 1', value: 'Floyd Meeting'}, {key: 'Ph 2', value: 'Start search at head'}, {key: 'Ph 3', value: 'Meeting at Loop Start'}] },
      { type: 'programming_board', questionText: 'The meeting condition for the entry pointer.', codeSnippet: 'while (ptr1 ___ ptr2)', correctAnswer: '!=' },
      { type: 'teaching', questionText: '🦜 Pico: "The math is elegant: Distance(Head to Start) is equal to Distance(Meeting Point to Start). Magic of the flight! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of finding the loop start?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Initialize entry pointer.', codeSnippet: 'Node* entry = ___;', correctAnswer: 'head' },
      { type: 'teaching', questionText: '🦜 Pico: "Find the knot in the chain! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I at the knot?"', options: ['Untying it now!', 'No.', '0'], correctAnswer: 'Untying it now!' }
    ]
  },
  {
    order: 35,
    title: 'The Reordering Shift',
    desc: 'Reordering [1,2,3,4] into [1,4,2,3].',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Weaving Flight! Take the first, then the last, then the second, then the second to last... 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "1: Find Mid. 2: Reverse 2nd half. 3: Interleave the two halves! 🦜"', codeSnippet: 'mid = findMid(head); h2 = reverse(mid->next); mid->next = NULL;\nwhile(h2) {\n  tmp1 = h1->next; tmp2 = h2->next;\n  h1->next = h2; h2->next = tmp1;\n  h1 = tmp1; h2 = tmp2;\n}' },
      { type: 'multiple_choice', questionText: 'Total steps to reorder the list?', options: ['O(N)', 'O(N^2)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Reorder steps!', pairs: [{key: 'Phase 1', value: 'Find Middle'}, {key: 'Phase 2', value: 'Reverse Back'}, {key: 'Phase 3', value: 'Interleave'}] },
      { type: 'programming_board', questionText: 'Pointer adjustment: Node A -> Node B -> Node A_next.', codeSnippet: 'a->next = b; b->next = ___ ;', correctAnswer: 'nextA' },
      { type: 'teaching', questionText: '🦜 Pico: "This combines everything: traversal, middle-finding, and reversal. A true intermediate graduation test! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is O(1) extra space possible for reordering?', options: ['Yes', 'No', 'Only with a stack'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Cut the list in two.', codeSnippet: 'mid->next = ___ ;', correctAnswer: 'NULL' },
      { type: 'teaching', questionText: '🦜 Pico: "Woven like a perfect nest! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are we interleaved?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 36,
    title: 'Swap Nodes (K-th)',
    desc: 'Swapping the K-th node from start and K-th from end.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Symmetrical Swap! Switch the 2nd bird and the 2nd-to-last bird in a flock of 5. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use the scout/target trick to find them. Then trade their seeds! 🦜"', codeSnippet: 'swap(leftNode->val, rightNode->val);' },
      { type: 'multiple_choice', questionText: 'How many pointers to find both nodes in one pass?', options: ['3 (Scout, Left, Right)', '1', '5'], correctAnswer: '3 (Scout, Left, Right)' },
      { type: 'match_following', questionText: 'Match Swap Targets!', pairs: [{key: 'Left', value: 'K steps from start'}, {key: 'Scout', value: 'K steps lead'}, {key: 'Right', value: 'End-Target'}] },
      { type: 'programming_board', questionText: 'Condition for the K-th from start pointer.', codeSnippet: 'for(int i=1; i<___; i++) left = left->next;', correctAnswer: 'k' },
      { type: 'teaching', questionText: '🦜 Pico: "Just swapping values is easy. If they ask to swap the NODES themselves, you need to handle 8 different pointer links. A nightmare for crows! 🦜"' },
      { type: 'multiple_choice', questionText: 'Swapping values vs Swapping nodes?', options: ['Value swap is O(1) space', 'Node swap is same'], correctAnswer: 'Value swap is O(1) space' },
      { type: 'code_fill_in', questionText: 'Find the node at K from end.', codeSnippet: 'while (fast->next) { fast = fast->next; ___ = slow->next; }', correctAnswer: 'slow' },
      { type: 'teaching', questionText: '🦜 Pico: "Trade places in the sky! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Did we trade?"', options: ['Equal and fair!', 'No.', '0'], correctAnswer: 'Equal and fair!' }
    ]
  },
  {
    order: 37,
    title: 'The LRU Cache (Intro)',
    desc: 'Using a DLL for Least Recently Used cache logic.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Elite Memory! How to remember only the most recent birds you\'ve seen? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a Doubly Linked List! Move every bird you see to the HEAD. If too many birds occupy the nest, evict the TAIL! 🦜"', codeSnippet: 'removeNode(tail); prependNode(newNode);' },
      { type: 'multiple_choice', questionText: 'Where are "Most Recently Used" items stored in LRU DLL?', options: ['At the Head', 'At the Tail', 'In the middle'], correctAnswer: 'At the Head' },
      { type: 'match_following', questionText: 'Match LRU Actions!', pairs: [{key: 'GET', value: 'Move to Head'}, {key: 'PUT (Full)', value: 'Evict Tail'}, {key: 'PUT (New)', value: 'Head insertion'}] },
      { type: 'programming_board', questionText: 'Evict the oldest member.', codeSnippet: 'deleteNode(___);', correctAnswer: 'tail' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(1) for both Get and Put! You also need a Hash Map to find the bird-node in constant time. A powerful combo! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why use a Doubly Linked List for LRU?', options: ['Fast removal in O(1)', 'Faster traversal', 'Less memory'], correctAnswer: 'Fast removal in O(1)' },
      { type: 'code_fill_in', questionText: 'Link map to the new node.', codeSnippet: 'map[key] = ___;', correctAnswer: 'newNode' },
      { type: 'teaching', questionText: '🦜 Pico: "Remember what matters! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I in your cache?"', options: ['Permanent resident!', 'No.', '0'], correctAnswer: 'Permanent resident!' }
    ]
  },
  {
    order: 38,
    title: 'Double Add II',
    desc: 'Adding numbers given in standard order (Head = MSB).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Natural Addition! [7,2,4,3] + [5,6,4] = 7243 + 564. Head is the most significant digit! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use two STACKS to process birds from Tail to Head, or reverse the lists first! 🦜"', codeSnippet: 'while(!s1.empty() || !s2.empty() || carry) {\n  sum = (s1.top?) + (s2.top?) + carry;\n  newNode->next = head; head = newNode;\n}' },
      { type: 'multiple_choice', questionText: 'Order of processing in Stack-based addition?', options: ['Least Significant Digit first', 'Most Significant first', 'Random'], correctAnswer: 'Least Significant Digit first' },
      { type: 'match_following', questionText: 'Match Stack logic!', pairs: [{key: 'Push', value: 'Head to Tail'}, {key: 'Pop', value: 'Tail to Head'}, {key: 'Result', value: 'New Head Prepend'}] },
      { type: 'programming_board', questionText: 'The carry calculation.', codeSnippet: 'carry = sum ___ 10;', correctAnswer: '/' },
      { type: 'teaching', questionText: '🦜 Pico: "By using stacks, we reverse the ORDER without reversing the nodes themselves. O(N) time, O(N) space! 🦜"' },
      { type: 'multiple_choice', questionText: 'Total length of [9,9] + [1]?', options: ['3 ([1,0,0])', '2', '4'], correctAnswer: '3 ([1,0,0])' },
      { type: 'code_fill_in', questionText: 'Empty stack check.', codeSnippet: 'if (!s1.empty()) { sum += s1.___(); s1.pop(); }', correctAnswer: 'top' },
      { type: 'teaching', questionText: '🦜 Pico: "Adding from the end, looking from the start! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I significant?"', options: ['The MOST!', 'No.', '0'], correctAnswer: 'The MOST!' }
    ]
  },
  {
    order: 39,
    title: 'The Delete Trick',
    desc: 'Deleting a node without having the Head pointer.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Ghost Deletion! I give you a bird, but I don\'t show you the Head of the flock. Can you delete it? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "YES! Step 1: Copy the data from the NEXT bird into your current bird. Step 2: Delete the Next bird! 🦜"', codeSnippet: 'node->val = node->next->val;\nnode->next = node->next->next;' },
      { type: 'multiple_choice', questionText: 'Can this trick delete the LAST node of the list?', options: ['No', 'Yes', 'Pico can'], correctAnswer: 'No' },
      { type: 'match_following', questionText: 'Match Ghost logic!', pairs: [{key: 'node->val', value: 'next->val'}, {key: 'node->next', value: 'next->next'}, {key: 'Requirement', value: 'Access to next'}] },
      { type: 'programming_board', questionText: 'Bypass the next duplicate node.', codeSnippet: 'node->next = node->next->___ ;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "This essentially moves the \'soul\' of the next bird into the current one, then kills the old body. Brutal bird-brain logic! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of Ghost Deletion?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
      { type: 'code_fill_in', questionText: 'Copy next bird data.', codeSnippet: 'curr->val = curr->___->val;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "Identity theft, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the next bird?"', options: ['SQUAWK NO!', 'Yes.', '0'], correctAnswer: 'SQUAWK NO!' }
    ]
  },
  {
    order: 40,
    title: 'Stage 2 Graduation',
    desc: 'Intermediate Mastery Complete.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "STAGE 2 COMPLETE! You have mastered the intermediate shuffles and weaves. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Sorting, Cloning, Partitioning, and Cycles. You are a Pointer Professional! 🦜"' },
      { type: 'multiple_choice', questionText: 'Merge Sort complexity?', options: ['O(N log N)', 'O(N^2)'], correctAnswer: 'O(N log N)' },
      { type: 'multiple_choice', questionText: 'Random pointer clone strategy?', options: ['Interweave nodes', 'Reverse the list'], correctAnswer: 'Interweave nodes' },
      { type: 'multiple_choice', questionText: 'Cycle entrance meeting point?', options: ['Head and Slow meet', 'Hare meets fast'], correctAnswer: 'Head and Slow meet' },
      { type: 'multiple_choice', questionText: 'Rotation with k > length?', options: ['Use k % len', 'Skip'], correctAnswer: 'Use k % len' },
      { type: 'multiple_choice', questionText: 'Flattening multilevel order?', options: ['Depth-First (Child first)', 'Breadth-First'], correctAnswer: 'Depth-First (Child first)' },
      { type: 'match_following', questionText: 'Final Intermediate Match!', pairs: [{key: 'Pico', value: 'Salutes!'}, {key: 'Intermediate', value: 'Finished!'}, {key: 'Mastery', value: 'Awaits!'}] },
      { type: 'teaching', questionText: '🦜 Pico: "Next, we face the Master Stage: K-Group reversal, LRU Implementation, and the LFU King! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you ready to be a Master?"', options: ['SQUAWK YES!', 'Working on it.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  }
];

module.exports = stage2_part2;

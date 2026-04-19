const stage3_part2 = [
  {
    order: 51,
    title: 'The XOR Nest (Memory Save)',
    desc: 'Designing a Doubly Linked List with only ONE pointer field.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Memory Thief! What if we could have a Doubly Linked List (Back and Forward) using the space of only ONE pointer? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use the XOR operation! `node->next_prev = prev ^ next`. If you know where you came from, you can XOR your way to where you are going! 🦜"', codeSnippet: 'next = prev ^ curr->npx;\nprev = curr;\ncurr = next;' },
      { type: 'multiple_choice', questionText: 'What does the `npx` field store in an XOR list?', options: ['XOR of prev and next addresses', 'Sum of data', 'Random number'], correctAnswer: 'XOR of prev and next addresses' },
      { type: 'match_following', questionText: 'Match XOR Logic!', pairs: [{key: 'Start', value: '0 ^ next'}, {key: 'Mid', value: 'prev ^ next'}, {key: 'Space', value: '50% saved'}] },
      { type: 'programming_board', questionText: 'XOR current address with next to get previous.', codeSnippet: 'prev = curr ^ next_prev_ptr ___ ;', correctAnswer: '^' },
      { type: 'teaching', questionText: '🦜 Pico: "This is a bit-manipulator’s dream. It’s not possible in high-level languages like Java or Python because they don’t let birds play with raw memory addresses! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is XOR list common in modern production apps?', options: ['No (Hard to debug/GC)', 'Yes (Everywhere)', 'Only for Pico'], correctAnswer: 'No (Hard to debug/GC)' },
      { type: 'code_fill_in', questionText: 'Calculate next address.', codeSnippet: 'next = ___ ^ curr->npx;', correctAnswer: 'prev' },
      { type: 'teaching', questionText: '🦜 Pico: "Bit-level magic! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Can you see my pointers?"', options: ['Encrypted in logic!', 'No.', '0'], correctAnswer: 'Encrypted in logic!' }
    ]
  },
  {
    order: 52,
    title: 'The Prime Splitter',
    desc: 'Splitting a Linked List into K parts as evenly as possible.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Distributing the Flock! Split a list of N nodes into K equal-ish parts. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "1: Find Length. 2: Width = L / K. Remainder = L % K. The first \'Remainder\' parts get an extra bird! 🦜"', codeSnippet: 'int width = len / k, rem = len % k;\nfor(int i=0; i<k; i++) {\n  int currentWidth = width + (i < rem ? 1 : 0);\n  // cut list...\n}' },
      { type: 'multiple_choice', questionText: 'If Len=10 and K=3, what are the part sizes?', options: ['4, 3, 3', '3, 3, 4', '3, 3, 3'], correctAnswer: '4, 3, 3' },
      { type: 'match_following', questionText: 'Match Splitting math!', pairs: [{key: 'Width', value: 'len / k'}, {key: 'Remainder', value: 'len % k'}, {key: 'Pointer', value: 'NULL at cut'}] },
      { type: 'programming_board', questionText: 'Condition to give extra bird to early parts.', codeSnippet: 'currentWidth = width + (i < ___ ? 1 : 0);', correctAnswer: 'rem' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N). Each list becomes a separate colony in your result array! 🦜"' },
      { type: 'multiple_choice', questionText: 'What if K is larger than Len?', options: ['Some parts will be NULL', 'Error', 'Add dummy nodes'], correctAnswer: 'Some parts will be NULL' },
      { type: 'code_fill_in', questionText: 'Cut the list link.', codeSnippet: 'prev->next = ___ ;', correctAnswer: 'NULL' },
      { type: 'teaching', questionText: '🦜 Pico: "Shared fairly! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are we even?"', options: ['Bird-math says YES!', 'No.', '0'], correctAnswer: 'Bird-math says YES!' }
    ]
  },
  {
    order: 3,
    title: 'The Self-Organizing List',
    desc: 'Implementing a list that moves accessed nodes to the front.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Evolutionary Chain! Move every bird you visit to the Head so it\'s faster to find next time. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "This is a heuristic. Over time, the most popular birds gather at the start of the necklace! 🦜"', codeSnippet: 'if (curr->data == key) {\n  prev->next = curr->next;\n  curr->next = head;\n  head = curr;\n}' },
      { type: 'multiple_choice', questionText: 'Which strategy moves the node one step closer each visit?', options: ['Transpose', 'Move-to-Front', 'Delete'], correctAnswer: 'Transpose' },
      { type: 'match_following', questionText: 'Match Self-Org Strategies!', pairs: [{key: 'Move-to-Front', value: 'Jump to Head'}, {key: 'Transpose', value: 'Swap with prev'}, {key: 'Efficiency', value: 'Search time O(1) avg'}] },
      { type: 'programming_board', questionText: 'Bypass the found node to move it elsewhere.', codeSnippet: 'prev->next = curr->___ ;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "Used in databases and caches to optimize search paths without heavy indices. A living structure! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of Move-to-Front in SLL?', options: ['O(Search_Time)', 'O(1)', 'O(N^2)'], correctAnswer: 'O(Search_Time)' },
      { type: 'code_fill_in', questionText: 'Set head pointer.', codeSnippet: 'head = ___ ;', correctAnswer: 'curr' },
      { type: 'teaching', questionText: '🦜 Pico: "Adapting for speed! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Did I move up?"', options: ['Rising to the top!', 'No.', '0'], correctAnswer: 'Rising to the top!' }
    ]
  },
  {
    order: 4,
    title: 'Cycle De-knotting',
    desc: 'Breaking a cycle in a Linked List.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Knot Snip! You found the cycle start (Unit 34). Now, how to set it free? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "1: Find start of cycle. 2: Travel from start around the loop until you hit the node pointing BACK to start. 3: Set its next to NULL! 🦜"', codeSnippet: 'while (ptr->next != loopStart) ptr = ptr->next;\nptr->next = NULL;' },
      { type: 'multiple_choice', questionText: 'What happens if you don\'t break the cycle before deleting the list?', options: ['Infinite loop or memory leak', 'Nothing', 'Automatic fix'], correctAnswer: 'Infinite loop or memory leak' },
      { type: 'match_following', questionText: 'Match Snip Phases!', pairs: [{key: 'Step 1', value: 'Find Loop Start'}, {key: 'Step 2', value: 'Identify Tail'}, {key: 'Step 3', value: 'Set next to NULL'}] },
      { type: 'programming_board', questionText: 'The break-point condition.', codeSnippet: 'while (curr->next != ___) curr = curr->next;', correctAnswer: 'loopStart' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N). Breaking cycles is vital for safety in the bird woods! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can a list have multiple cycles?', options: ['One start, but multiple reachable nodes', 'No', '0'], correctAnswer: 'One start, but multiple reachable nodes' },
      { type: 'code_fill_in', questionText: 'Free the tail.', codeSnippet: 'tail->next = ___ ;', correctAnswer: 'NULL' },
      { type: 'teaching', questionText: '🦜 Pico: "Free at last! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I straight now?"', options: ['Linear and elite!', 'No.', '0'], correctAnswer: 'Linear and elite!' }
    ]
  },
  {
    order: 5,
    title: 'The Swap Nodes Revisit',
    desc: 'Swapping values of nodes without changing pointers.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Value Trade! Sometimes swapping the actual nests is too hard. Just trade the seeds! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Easy for integers, but be careful with giant objects. Copying can be slow! 🦜"', codeSnippet: 'int temp = node1->val;\nnode1->val = node2->val;\nnode2->val = temp;' },
      { type: 'multiple_choice', questionText: 'Complexity of value swapping?', options: ['O(1)', 'O(N)', 'O(Data_Size)'], correctAnswer: 'O(1)' },
      { type: 'match_following', questionText: 'Match Trade logic!', pairs: [{key: 'Temp', value: 'Safe storage'}, {key: 'A = B', value: 'Overwrite'}, {key: 'B = Temp', value: 'Complete trade'}] },
      { type: 'programming_board', questionText: 'Swap function call.', codeSnippet: 'swap(node1->___, node2->val);', correctAnswer: 'val' },
      { type: 'teaching', questionText: '🦜 Pico: "Values are temporary, pointers are forever! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is value swapping better than node swapping?', options: ['Depends (Data size vs Link complexity)', 'Always yes', 'Always no'], correctAnswer: 'Depends (Data size vs Link complexity)' },
      { type: 'code_fill_in', questionText: 'Copy data.', codeSnippet: 'node1->val = node2->___;', correctAnswer: 'val' },
      { type: 'teaching', questionText: '🦜 Pico: "Trading secrets! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Did we trade?"', options: ['Mirror images!', 'No.', '0'], correctAnswer: 'Mirror images!' }
    ]
  },
  {
    order: 56,
    title: 'The Constant Deletion',
    desc: 'Advanced: Deleting nodes in O(1) with pointers.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Ultimate Efficiency! In a Doubly Linked List, deletion is O(1) if you have the pointer. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "In SLL, deletion is O(1) only via the \'Ghost\' trick (Unit 39). 🦜"', codeSnippet: 'p->prev->next = p->next;\np->next->prev = p->prev;\ndelete p;' },
      { type: 'multiple_choice', questionText: 'Deletion complexity in DLL given pointer?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
      { type: 'match_following', questionText: 'Match Fast Deletion!', pairs: [{key: 'DLL', value: 'Actual O(1)'}, {key: 'SLL', value: 'Shadow O(1)'}, {key: 'Requirements', value: 'Pointers'}] },
      { type: 'programming_board', questionText: 'Link the back bird to the front bird.', codeSnippet: 'p->prev->next = p->___ ;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "Keep your maps updated, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why is SLL deletion usually O(N)?', options: ['Need to find precursor', 'Need to find head', 'Too fast'], correctAnswer: 'Need to find precursor' },
      { type: 'code_fill_in', questionText: 'Cleanup step.', codeSnippet: 'delete ___ ;', correctAnswer: 'p' },
      { type: 'teaching', questionText: '🦜 Pico: "Quick and clean! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I gone?"', options: ['O(1) vanish!', 'No.', '0'], correctAnswer: 'O(1) vanish!' }
    ]
  },
  {
    order: 57,
    title: 'The Zig-Zag Path',
    desc: 'Formatting a Linked List into Wave/Zig-Zag form.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Pico’s Wave! [1,2,3,4] into [1 < 3 > 2 < 4]. Nodes should be a < b > c < d... 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "One pass! If index is even and data > next, SWAP. If index is odd and data < next, SWAP! 🦜"', codeSnippet: 'if (i%2 == 0 && p->val > p->next->val) swap(p, p->next);' },
      { type: 'multiple_choice', questionText: 'Complexity of Zig-Zag formatting?', options: ['O(N)', 'O(1)', 'O(N log N)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Wave Rules!', pairs: [{key: 'Even Index', value: 'Current < Next'}, {key: 'Odd Index', value: 'Current > Next'}, {key: 'Action', value: 'O(N) Swap'}] },
      { type: 'programming_board', questionText: 'Swap condition for odd peak.', codeSnippet: 'if (flag && p->val ___ p->next->val) swap(...);', correctAnswer: '<' },
      { type: 'teaching', questionText: '🦜 Pico: "This is a great variation of the wave array problem. Pure pointer manipulation mastery! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is the final list sorted?', options: ['No', 'Yes', 'Pico likes sorting'], correctAnswer: 'No' },
      { type: 'code_fill_in', questionText: 'Toggle flag for wave.', codeSnippet: 'flag = ___ ;', correctAnswer: '!flag' },
      { type: 'teaching', questionText: '🦜 Pico: "Ride the wave! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I zig-zagging?"', options: ['Peak and valley!', 'No.', '0'], correctAnswer: 'Peak and valley!' }
    ]
  },
  {
    order: 8,
    title: 'The Split-Merge Revisit',
    desc: 'Advanced: Splitting two circular lists.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Circular Divide! A giant circular necklace split into two smaller circular necklaces. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "1: Find Mid. 2: Set head2 = mid->next. 3: head2->tail = head2. 4: head1->tail = head1. 🦜"', codeSnippet: 'mid = findMid(head);\nhead2 = mid->next;\ntail2->next = head2;\nmid->next = head1;' },
      { type: 'multiple_choice', questionText: 'If total nodes = 5, what are the sizes of the two split circular lists?', options: ['3 and 2', '2 and 3', '1 and 4'], correctAnswer: '3 and 2' },
      { type: 'match_following', questionText: 'Match Circular Split!', pairs: [{key: 'Mid', value: 'Break point'}, {key: 'head2', value: 'mid->next'}, {key: 'New Tail', value: 'Point to its own head'}] },
      { type: 'programming_board', questionText: 'Point head2’s tail back to head2.', codeSnippet: 'fast->next = ___ ;', correctAnswer: 'slow->next' },
      { type: 'teaching', questionText: '🦜 Pico: "Essentially finding the middle and then closing the loops on both halves. O(N) time! 🦜"' },
      { type: 'multiple_choice', questionText: 'Initial setup for slow/fast pointers in circular list?', options: ['Both at head', 'One at head, one at next', 'Random'], correctAnswer: 'Both at head' },
      { type: 'code_fill_in', questionText: 'Cut mid and loop back.', codeSnippet: 'slow->next = ___ ;', correctAnswer: 'head' },
      { type: 'teaching', questionText: '🦜 Pico: "Two new loops created! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are we loops?"', options: ['Twice the fun!', 'No.', '0'], correctAnswer: 'Twice the fun!' }
    ]
  },
  {
    order: 59,
    title: 'The Master Review',
    desc: 'Elite Linked List Review.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "THE ELITE STRETCH! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "XOR Lists, Circular Splitting, Multi-level Flattening, and Zig-Zags. You have seen everything in the world of Nodes! 🦜"' },
      { type: 'multiple_choice', questionText: 'Algorithm for O(log N) search?', options: ['Skip List', 'Standard LL'], correctAnswer: 'Skip List' },
      { type: 'multiple_choice', questionText: 'LFU complexity?', options: ['O(1)', 'O(N)'], correctAnswer: 'O(1)' },
      { type: 'multiple_choice', questionText: 'XOR list pointer name?', options: ['NPX', 'Next'], correctAnswer: 'NPX' },
      { type: 'multiple_choice', questionText: 'Flattening recursion type?', options: ['Depth-First', 'Breadth-First'], correctAnswer: 'Depth-First' },
      { type: 'multiple_choice', questionText: 'Node deletion in DLL given pointer?', options: ['O(1)', 'O(N)'], correctAnswer: 'O(1)' },
      { type: 'match_following', questionText: 'Master Final Match!', pairs: [{key: 'Elite', value: 'Found!'}, {key: 'Graduation', value: 'Soon!'}, {key: 'Pico', value: 'Speechless!'}] },
      { type: 'teaching', questionText: '🦜 Pico: "Final unit: The Linked List Graduation! You are a God of Pointers! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you ready to graduate?"', options: ['SQUAWK YES!', 'Wait...', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 60,
    title: 'Linked List Graduation',
    desc: 'The Subject Complete: God-Mode Master.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "GRADUATION DAY! You have completed all 60 units of the Linked List Academy. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "From the first Head to the XOR bit-manipulators, every link in the chain is yours. SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: 'LL Node definition?', options: ['Data and Next Address', 'Just Data'], correctAnswer: 'Data and Next Address' },
      { type: 'multiple_choice', questionText: 'Search Complexity?', options: ['O(N)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'multiple_choice', questionText: 'Reverse Iterative Space?', options: ['O(1)', 'O(N)'], correctAnswer: 'O(1)' },
      { type: 'multiple_choice', questionText: 'Loop Detection Algorithm?', options: ['Floyd’s Cycle Find', 'Binary Find'], correctAnswer: 'Floyd’s Cycle Find' },
      { type: 'multiple_choice', questionText: 'Merge K Lists complexity?', options: ['O(N log K)', 'O(N)'], correctAnswer: 'O(N log K)' },
      { type: 'multiple_choice', questionText: 'LRU Cache Search?', options: ['O(1)', 'O(N)'], correctAnswer: 'O(1)' },
      { type: 'multiple_choice', questionText: 'XOR List pointer?', options: ['Next XOR Prev', 'NULL'], correctAnswer: 'Next XOR Prev' },
      { type: 'match_following', questionText: 'Subject Mastery Match!', pairs: [{key: 'Subject', value: 'Complete!'}, {key: 'Master', value: 'Found!'}, {key: 'Next', value: 'STACKS & QUEUES!'}] },
      { type: 'teaching', questionText: '🦜 Pico: "Linked Lists are done. You have conquered the pointers. Next, we enter the Linear Fortress: STACKS & QUEUES! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you ready for the new fortress?"', options: ['SQUAWK YES!', 'Fly high!', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  }
];

module.exports = stage3_part2;

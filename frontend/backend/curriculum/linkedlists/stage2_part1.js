const stage2_part1 = [
  {
    order: 21,
    title: 'The Great Divide',
    desc: 'Partitioning a list around a value X.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Boundary Flight! We want to separate the flock: birds with seeds < X on the left, and everyone else on the right! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use two separate dummy heads! One for the \'Less\' chain and one for the \'Greater\' chain. Then link them at the end! 🦜"', codeSnippet: 'while (head) {\n  if (head->val < x) { less->next = head; less = less->next; }\n  else { greater->next = head; greater = greater->next; }\n  head = head->next;\n}\ngreater->next = NULL;\nless->next = dummyGreater.next;' },
      { type: 'multiple_choice', questionText: 'Main advantage of using two dummy heads for partitioning?', options: ['Simplifies merging at the end', 'Makes search faster', 'Uses less memory'], correctAnswer: 'Simplifies merging at the end' },
      { type: 'match_following', questionText: 'Match Partition Chains!', pairs: [{key: 'Less', value: 'Values < X'}, {key: 'Greater', value: 'Values >= X'}, {key: 'Final step', value: 'Less.tail -> Greater.head'}] },
      { type: 'programming_board', questionText: 'Snap the end of the second list to prevent cycles.', codeSnippet: 'greater->next = ___ ;', correctAnswer: 'NULL' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N) time and O(1) extra space because we are just rearranging the existing nests! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is the relative order of elements preserved?', options: ['Yes', 'No', 'Only if I fly fast'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Link the two lists.', codeSnippet: 'less->next = dummyGreater.___ ;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "Separated, yet united! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I on the less side?"', options: ['SQUAWK NO!', 'Yes.', '0'], correctAnswer: 'SQUAWK NO!' }
    ]
  },
  {
    order: 22,
    title: 'Group the Odd & Even',
    desc: 'Grouping nodes by their index (Odd index first, Even index second).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Alternating Flock! Let\'s group all the 1st, 3rd, 5th nests first, then all the 2nd, 4th, 6th nests! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use two pointers—ODD and EVEN. Jump through the necklace, connecting every other bead to its respective group! 🦜"', codeSnippet: 'while (even && even->next) {\n  odd->next = even->next;\n  odd = odd->next;\n  even->next = odd->next;\n  even = even->next;\n}\nodd->next = evenHead;' },
      { type: 'multiple_choice', questionText: 'Final step of Odd-Even grouping?', options: ['Connect Odd Tail to Even Head', 'Delete Even Head', 'Reverse Odd'], correctAnswer: 'Connect Odd Tail to Even Head' },
      { type: 'match_following', questionText: 'Match Group Movements!', pairs: [{key: 'odd->next', value: 'even->next'}, {key: 'even->next', value: 'odd->next'}, {key: 'Complexity', value: 'O(N) time'}] },
      { type: 'programming_board', questionText: 'The jump for the even pointer.', codeSnippet: 'even->next = odd->___ ;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "This is a beautiful pointer shuffle. All done in-place with O(1) extra space! 🦜"' },
      { type: 'multiple_choice', questionText: 'What happens to the Even Head pointer?', options: ['Stored at start for final link', 'Lost', 'Decremented'], correctAnswer: 'Stored at start for final link' },
      { type: 'code_fill_in', questionText: 'Final link code.', codeSnippet: 'odd->next = ___ ;', correctAnswer: 'evenHead' },
      { type: 'teaching', questionText: '🦜 Pico: "Odd birds lead the flight! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I odd?"', options: ['Uniquely Elite!', 'No.', '0'], correctAnswer: 'Uniquely Elite!' }
    ]
  },
  {
    order: 23,
    title: 'The Circular Shift (Rotate)',
    desc: 'Rotating the Linked List to the right by K places.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Great Rotation! The tail bird becomes the head bird, and everything shifts K times! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "1: Find the length L and the tail. 2: Connect tail to head (Circular jump). 3: Travel L - (K % L) - 1 steps and break the circle! 🦜"', codeSnippet: 'tail->next = head;\nk = k % len;\nfor(int i=0; i < len-k-1; i++) curr = curr->next;\nhead = curr->next;\ncurr->next = NULL;' },
      { type: 'multiple_choice', questionText: 'Rotation of [1,2,3,4,5] by K=2?', options: ['[4,5,1,2,3]', '[2,3,4,5,1]', '[4,5,1,2,3]'], correctAnswer: '[4,5,1,2,3]' },
      { type: 'match_following', questionText: 'Match Rotation Algebra!', pairs: [{key: 'k % len', value: 'Handle large K'}, {key: 'len - k', value: 'New Head distance'}, {key: 'tail->next = head', value: 'Temp circle'}] },
      { type: 'programming_board', questionText: 'How many steps to the break-point?', codeSnippet: 'steps = length ___ k;', correctAnswer: '-' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time. By making the list circular temporarily, we just need to find the new break point and the new head! 🦜"' },
      { type: 'multiple_choice', questionText: 'If K=10 and Length=5, what is the rotation?', options: ['0 (No change)', '10', '5'], correctAnswer: '0 (No change)' },
      { type: 'code_fill_in', questionText: 'Break the temporary circle.', codeSnippet: 'newTail->next = ___ ;', correctAnswer: 'NULL' },
      { type: 'teaching', questionText: '🦜 Pico: "Round and round we go! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Did I land in the same spot?"', options: ['If k % len == 0!', 'No.', '0'], correctAnswer: 'If k % len == 0!' }
    ]
  },
  {
    order: 24,
    title: 'Targeting the Ghost (Nth End)',
    desc: 'Removing the N-th node from the end in one pass (Deletion Focus).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Snipping Hunt! Find the N-th bird from the end and remove it from the necklace completely! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use the Scout and Target pointers (from Unit 17), but start a PREV pointer behind the Target. When Scout hits NULL, jump PREV over Target! 🦜"', codeSnippet: 'prev->next = target->next;\ndelete target;' },
      { type: 'multiple_choice', questionText: 'Best way to handle deleting the Head node?', options: ['Use a Dummy node at start', 'Special IF check', 'Pico cry'], correctAnswer: 'Use a Dummy node at start' },
      { type: 'match_following', questionText: 'Match Pointer Roles!', pairs: [{key: 'Scout', value: 'N steps lead'}, {key: 'Target', value: 'The Victim'}, {key: 'Dummy', value: 'Safety net'}] },
      { type: 'programming_board', questionText: 'Move bird 1 ahead N times.', codeSnippet: 'for(int i=0; i<___; i++) fast = fast->next;', correctAnswer: 'n' },
      { type: 'teaching', questionText: '🦜 Pico: "With a Dummy node, you never have to worry about the neck of the list being cut off. O(N) time, one pass! 🦜"' },
      { type: 'multiple_choice', questionText: 'If N is equal to length, who is removed?', options: ['The Head', 'The Tail', 'No one'], correctAnswer: 'The Head' },
      { type: 'code_fill_in', questionText: 'Connect the previous node to the next-next.', codeSnippet: 'p->next = p->next->___;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "Snip for a cleaner flight! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is the ghost gone?"', options: ['O(N) YES!', 'No.', '0'], correctAnswer: 'O(N) YES!' }
    ]
  },
  {
    order: 25,
    title: 'The Leapfrog (Swap Pairs)',
    desc: 'Swapping every two adjacent nodes in the list.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Social Swap! Every two birds trade places. [1,2,3,4] becomes [2,1,4,3]! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Pointing magic! Point Dummy to Node 2, Node 2 to Node 1, and Node 1 to Node 3. Then move to the next pair! 🦜"', codeSnippet: 'p->next = b; // b is node 2\na->next = b->next;\nb->next = a;\np = a;' },
      { type: 'multiple_choice', questionText: 'How many total swaps for a list of 10 nodes?', options: ['5', '10', '1'], correctAnswer: '5' },
      { type: 'match_following', questionText: 'Match Swapping sequence!', pairs: [{key: 'A', value: 'First bird'}, {key: 'B', value: 'Second bird'}, {key: 'P', value: 'Previous link'}] },
      { type: 'programming_board', questionText: 'A is Node 1, B is Node 2. Make A point to B’s successor.', codeSnippet: 'a->next = b->___ ;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "Don\'t just swap the seeds (data)! Swap the nests (nodes themselves). That’s the elite way! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of swapping pairs?', options: ['O(N)', 'O(1)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Advance the previous pointer after a swap.', codeSnippet: 'prev = ___ ;', correctAnswer: 'a' },
      { type: 'teaching', questionText: '🦜 Pico: "Two by two we trade! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Did the pair swap?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 26,
    title: 'Addition of the Birds',
    desc: 'Adding two numbers represented as Linked Lists (Reverse order).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Summator! [2,4,3] + [5,6,4] is 342 + 465 = 807. The result is [7,0,8]! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Walk through both lists. Add the digits + carry. If sum >= 10, carry = 1 and sum = sum % 10. 🦜"', codeSnippet: 'sum = l1->val + l2->val + carry;\ncarry = sum / 10;\ncurr->next = new Node(sum % 10);' },
      { type: 'multiple_choice', questionText: 'What is the maximum carry between two digits?', options: ['1', '9', '2'], correctAnswer: '1' },
      { type: 'match_following', questionText: 'Match Addition Terms!', pairs: [{key: 'Sum', value: 'l1 + l2 + carry'}, {key: 'Digit', value: 'Sum % 10'}, {key: 'Carry', value: 'Sum / 10'}] },
      { type: 'programming_board', questionText: 'Handle remainder l1 after l2 ends.', codeSnippet: 'val = (p1 != NULL) ? p1->val : ___ ;', correctAnswer: '0' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(max(N, M)). Treat missing birds as zeros! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result of [9,9] + [1]?', options: ['[0,0,1]', '[0,1]', '[1,0,0]'], correctAnswer: '[0,0,1]' },
      { type: 'code_fill_in', questionText: 'Check for trailing carry at the end.', codeSnippet: 'if (___ > 0) curr->next = new Node(carry);', correctAnswer: 'carry' },
      { type: 'teaching', questionText: '🦜 Pico: "Mathematics in the chain! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Does 1+1=2?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 27,
    title: 'The Doubling Dare',
    desc: 'Multiplying a number in a Linked List by 2.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Double the seeds! [1,8,9] becomes [3,7,8] (189 * 2 = 378). 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Reverse -> Double with carry -> Reverse back! Or use recursion to handle the carry from tail to head! 🦜"', codeSnippet: 'int carry = doubleHelp(head);\nif (carry) { ... prepend 1 ... }' },
      { type: 'multiple_choice', questionText: 'If head.data = 5 and you double it, what is the new first node?', options: ['1 (from carry)', '0', '5'], correctAnswer: '1 (from carry)' },
      { type: 'match_following', questionText: 'Match Doubling Rules!', pairs: [{key: 'Digit', value: '(val*2 + carry) % 10'}, {key: 'Carry', value: '(val*2 + carry) / 10'}, {key: 'Prepend 1', value: 'Carry at Head'}] },
      { type: 'programming_board', questionText: 'Prepend a carry digit at the neck.', codeSnippet: 'newNode->next = head; ___ = newNode;', correctAnswer: 'head' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N) time. The reverse-double-reverse method is easiest, but solving in one pass with recursion is the high-flyer way! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result for [9]?', options: ['[1,8]', '[18]', '[8,1]'], correctAnswer: '[1,8]' },
      { type: 'code_fill_in', questionText: 'Recursive carry update.', codeSnippet: 'int carry = (node->val * 2 + ___) / 10;', correctAnswer: 'subCarry' },
      { type: 'teaching', questionText: '🦜 Pico: "Double or nothing! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I double elite?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 28,
    title: 'Island Chains (Components)',
    desc: 'Counting connected components of a subset in a Linked List.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Archipelago! Given a set G, find how many consecutive chains of nodes from G exist in the necklace! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "A component starts if current data is in G AND (it\'s the head OR the previous node was NOT in G)! 🦜"', codeSnippet: 'if (s.count(curr->val) && (prev == NULL || !s.count(prev->val))) count++;' },
      { type: 'multiple_choice', questionText: 'List: 0->1->2->3, G={0,1,3}. How many components?', options: ['2 ({0,1} and {3})', '3', '1'], correctAnswer: '2 ({0,1} and {3})' },
      { type: 'match_following', questionText: 'Match Component Logic!', pairs: [{key: 'In G', value: 'Potential member'}, {key: 'Start', value: 'Prev not in G'}, {key: 'Total', value: 'Isolated chains'}] },
      { type: 'programming_board', questionText: 'Check if current node value is in set `s`.', codeSnippet: 'if (s.find(curr->val) ___ s.end())', correctAnswer: '!=' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N) using a Hash Set for G. Just look for the transitions between \'In G\' and \'Out of G\'! 🦜"' },
      { type: 'multiple_choice', questionText: 'If G={all nodes}, how many components?', options: ['1', 'N', '0'], correctAnswer: '1' },
      { type: 'code_fill_in', questionText: 'Increment component count.', codeSnippet: 'if (inG && !prevInG) ___ ;', correctAnswer: 'count++' },
      { type: 'teaching', questionText: '🦜 Pico: "Islands in the necklace-sea! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I an island?"', options: ['A continent of wisdom!', 'No.', '0'], correctAnswer: 'A continent of wisdom!' }
    ]
  },
  {
    order: 29,
    title: 'Flattening the Levels',
    desc: 'Flattening a multilevel Doubly Linked List with Child pointers.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Hierarchy! Some nests have CHILDS that point to whole new levels of necklaces. Flatten them into a single-level flight! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "DFS Strategy! When you see a child, process it before moving to your neighbor (next). Recursive or Stack based flight! 🦜"', codeSnippet: 'if (curr->child) {\n  Node* next = curr->next;\n  curr->next = flatten(curr->child);\n  // connect back-links and tail...\n}' },
      { type: 'multiple_choice', questionText: 'Which traversal is similar to flattening a multilevel list?', options: ['Depth-First Search (DFS)', 'Breadth-First Search (BFS)', 'Random'], correctAnswer: 'Depth-First Search (DFS)' },
      { type: 'match_following', questionText: 'Match Flattening Roles!', pairs: [{key: 'Child', value: 'Next level down'}, {key: 'Next', value: 'Neighbor'}, {key: 'Prev', value: 'The back-map'}] },
      { type: 'programming_board', questionText: 'Sever the child connection after flattening.', codeSnippet: 'curr->child = ___ ;', correctAnswer: 'NULL' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(Total Nodes). Keep track of the tail so you can link it back to the old neighbor! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why set `child = NULL` at the end?', options: ['Structure becomes 1D', 'Looks cleaner', 'Optimization'], correctAnswer: 'Structure becomes 1D' },
      { type: 'code_fill_in', questionText: 'Link child head to current node.', codeSnippet: 'newNode->prev = ___ ;', correctAnswer: 'curr' },
      { type: 'teaching', questionText: '🦜 Pico: "One level, one flock! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is the world flat?"', options: ['For our chain, YES!', 'No.', '0'], correctAnswer: 'For our chain, YES!' }
    ]
  },
  {
    order: 30,
    title: 'The Mid-Merge (Merge Sort I)',
    desc: 'Finding the middle for Merge Sort applications.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Divide Step! To sort a giant necklace, we must split it exactly in half. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use the Hare and Tortoise! But be careful—you need to SEVER the connection at the middle to truly split the list! 🦜"', codeSnippet: 'slow = findMid(head);\nNode* secondHalf = slow->next;\nslow->next = NULL;' },
      { type: 'multiple_choice', questionText: 'What is the first step of Merge Sort on a Linked List?', options: ['Split the list in half', 'Merge sorted nodes', 'Delete all'], correctAnswer: 'Split the list in half' },
      { type: 'match_following', questionText: 'Match Split Logic!', pairs: [{key: 'Slow', value: 'Midpoint'}, {key: 'Slow->next = NULL', value: 'The Break'}, {key: 'Recurse', value: 'Sort both'}] },
      { type: 'programming_board', questionText: 'Pointer to the start of the 2nd half.', codeSnippet: 'half2 = mid->___ ;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N log N) for the whole sort. It’s the only way to sort a list efficiently! Tomorrow, we merge them back together! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can you use Quick Sort on a Linked List?', options: ['Yes (Iterative is better)', 'No', 'Only for arrays'], correctAnswer: 'Yes (Iterative is better)' },
      { type: 'code_fill_in', questionText: 'Terminate the first half.', codeSnippet: 'mid->next = ___ ;', correctAnswer: 'NULL' },
      { type: 'teaching', questionText: '🦜 Pico: "Splitting to conquer! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I a divider?"', options: ['A conqueror!', 'No.', '0'], correctAnswer: 'A conqueror!' }
    ]
  }
];

module.exports = stage2_part1;

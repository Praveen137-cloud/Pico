const stage3_part1 = [
  {
    order: 41,
    title: 'The K-Group Somersault',
    desc: 'Reversing nodes in groups of size K.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Elite Flip! We don\'t just reverse the whole chain. We reverse it in chunks of K! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Check if K nodes exist. If yes, reverse them. Then recursively call for the next group and connect them back! 🦜"', codeSnippet: 'for(int i=0; i<k; i++) if(!curr) return head;\nNode* nextGroup = reverseKGroup(curr, k);\n// reverse current group...\nhead->next = nextGroup;' },
      { type: 'multiple_choice', questionText: 'What happens to the last group if it has fewer than K nodes?', options: ['Stays as is', 'Reversed anyway', 'Becomes NULL'], correctAnswer: 'Stays as is' },
      { type: 'match_following', questionText: 'Match K-Group Logic!', pairs: [{key: 'Check', value: 'Verify K exists'}, {key: 'Reverse', value: 'Iterative flip'}, {key: 'Link', value: 'Connect to next result'}] },
      { type: 'programming_board', questionText: 'Point the original head to the result of the next group.', codeSnippet: 'head->next = reverseKGroup(curr, ___);', correctAnswer: 'k' },
      { type: 'teaching', questionText: '🦜 Pico: "This is a Google and Amazon favorite! It tests your recursion depth and your link-management skills! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of Reverse K-Group?', options: ['O(N)', 'O(N^2)', 'O(log N)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Initialize next pointer.', codeSnippet: 'next = curr->___;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "Groups of gold, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I in a K-group?"', options: ['The K-th power of elite!', 'No.', '0'], correctAnswer: 'The K-th power of elite!' }
    ]
  },
  {
    order: 42,
    title: 'The LRU Fortress',
    desc: 'Implementing a Least Recently Used Cache with DLL + Map.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Memory Vault! We need O(1) Get and Put for our cache. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "A Hash Map finds the node address instantly. A Doubly Linked List keeps the order of use! 🦜"', codeSnippet: 'if (map.count(key)) {\n  moveToHead(map[key]);\n  return map[key]->val;\n}' },
      { type: 'multiple_choice', questionText: 'Why is a Doubly Linked List required for O(1) removal?', options: ['Can link neighbors in O(1)', 'Faster traversal', 'Pico likes double maps'], correctAnswer: 'Can link neighbors in O(1)' },
      { type: 'match_following', questionText: 'Match Cache Components!', pairs: [{key: 'Map', value: 'O(1) Search'}, {key: 'DLL', value: 'O(1) Reordering'}, {key: 'Capacity', value: 'Eviction trigger'}] },
      { type: 'programming_board', questionText: 'Link neighbors together to bypass current node `n`.', codeSnippet: 'n->prev->next = n->___ ;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "When you access a bird, it flies to the Head. When the vault is full, the bird at the Tail (Least Recently Used) is evicted! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is the time complexity of Put in an LRU?', options: ['O(1)', 'O(N)', 'O(Capacity)'], correctAnswer: 'O(1)' },
      { type: 'code_fill_in', questionText: 'Eviction line.', codeSnippet: 'map.erase(tail->prev->___); deleteNode(tail->prev);', correctAnswer: 'key' },
      { type: 'teaching', questionText: '🦜 Pico: "Remembering and forgetting in constant time! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the most recently used?"', options: ['Always at the Head!', 'No.', '0'], correctAnswer: 'Always at the Head!' }
    ]
  },
  {
    order: 43,
    title: 'The LFU King',
    desc: 'Least Frequently Used Cache logic (DLL of DLLs).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Elite Filter! Evict the bird that was used the LEAST often. If there is a tie, evict the Least Recently Used! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a map of Frequency -> DLL. Every time a bird is used, its frequency increases and it flies to a HIGHER frequency necklace! 🦜"', codeSnippet: 'freqMap[node->count].remove(node);\nnode->count++;\nfreqMap[node->count].add(node);' },
      { type: 'multiple_choice', questionText: 'Which item is evicted in LFU if all have the same frequency?', options: ['The Least Recently Used (LRU)', 'The Most Recently Used', 'Randomly'], correctAnswer: 'The Least Recently Used (LRU)' },
      { type: 'match_following', questionText: 'Match LFU Structures!', pairs: [{key: 'Node Map', value: 'Key -> Node'}, {key: 'Freq Map', value: 'Count -> DLL'}, {key: 'minFreq', value: 'The eviction start'}] },
      { type: 'programming_board', questionText: 'Update the minimum frequency tracker.', codeSnippet: 'if (freqMap[minFreq].isEmpty()) minFreq ___ ;', correctAnswer: '++' },
      { type: 'teaching', questionText: '🦜 Pico: "This is a God-mode structure. O(1) for everything, but very complex to maintain. Keep your links steady! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of Get/Put in LFU?', options: ['O(1)', 'O(N)', 'O(log N)'], correctAnswer: 'O(1)' },
      { type: 'code_fill_in', questionText: 'Increment bird frequency.', codeSnippet: 'n->___++;', correctAnswer: 'count' },
      { type: 'teaching', questionText: '🦜 Pico: "Survival of the most frequent! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "How frequent am I?"', options: ['Beyond calculation!', 'Frequently elite.', '0'], correctAnswer: 'Beyond calculation!' }
    ]
  },
  {
    order: 44,
    title: 'The Great Merge (K-Lists)',
    desc: 'Merging K sorted Linked Lists efficiently.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Grand Convergence! K sorted flocks want to merge into one giant sorted stream. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a Min-Priority Queue (Min-Heap)! Put the head of every list into the heap. Pick the smallest, append it to your result, and push its neighbor! 🦜"', codeSnippet: 'pq.push(head1); pq.push(head2);\nwhile(!pq.empty()) {\n  Node* top = pq.pop();\n  curr->next = top;\n  if(top->next) pq.push(top->next);\n}' },
      { type: 'multiple_choice', questionText: 'Time complexity of merging K sorted lists of total size N?', options: ['O(N log K)', 'O(N * K)', 'O(N)'], correctAnswer: 'O(N log K)' },
      { type: 'match_following', questionText: 'Match Merge Terms!', pairs: [{key: 'Min-Heap', value: 'Find smallest leader'}, {key: 'pq.push', value: 'Add successor'}, {key: 'Dummy Node', value: 'Result start'}] },
      { type: 'programming_board', questionText: 'Push the next bird of the winner into the heap.', codeSnippet: 'if (top->next) pq.push(___);', correctAnswer: 'top->next' },
      { type: 'teaching', questionText: '🦜 Pico: "The heap act as your scout, always telling you which nest to visit next. O(N log K) is the perfect flight path! 🦜"' },
      { type: 'multiple_choice', questionText: 'Space complexity for the priority queue?', options: ['O(K)', 'O(N)', 'O(1)'], correctAnswer: 'O(K)' },
      { type: 'code_fill_in', questionText: 'Initialize dummy head.', codeSnippet: 'Node* dummy = new Node(___);', correctAnswer: '0' },
      { type: 'teaching', questionText: '🦜 Pico: "United and sorted! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I in the heap?"', options: ['At the top!', 'No.', '0'], correctAnswer: 'At the top!' }
    ]
  },
  {
    order: 45,
    title: 'Reverse List II (Range)',
    desc: 'Reversing a portion of the Linked List from position L to R.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Specified Somersault! Reverse only nodes 2 through 4 in [1,2,3,4,5]. [1,4,3,2,5]! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Drive to L-1. Then perform a sub-reversal R-L times. Connect the neck and tail carefully! 🦜"', codeSnippet: 'while (count < m) {\n  next = curr->next; curr->next = next->next;\n  next->next = prev->next; prev->next = next;\n}' },
      { type: 'multiple_choice', questionText: 'How many nodes are reversed in total relative to N?', options: ['O(R-L)', 'O(N)', 'O(1)'], correctAnswer: 'O(R-L)' },
      { type: 'match_following', questionText: 'Match Range Steps!', pairs: [{key: 'Travel', value: 'To index L-1'}, {key: 'Reverse', value: 'R-L swaps'}, {key: 'Connect', value: 'No memory lost'}] },
      { type: 'programming_board', questionText: 'Pointer to the node BEFORE the reversal range.', codeSnippet: 'prev = ___ ;', correctAnswer: 'pre' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time, O(1) space. By using one-pass link manipulation, you avoid creating a new necklace! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is the role of the Dummy node here?', options: ['Handles L=1 edge case', 'Speeds up sort', 'Adds luck'], correctAnswer: 'Handles L=1 edge case' },
      { type: 'code_fill_in', questionText: 'Update current bird.', codeSnippet: 'curr = ___ ;', correctAnswer: 'prev->next' },
      { type: 'teaching', questionText: '🦜 Pico: "Precision is perfection! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I in the range?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 46,
    title: 'Flattening the SLL',
    desc: 'Flattening a list where nodes have DOWN pointers to sorted lists.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Weighted Web! Every node has a NEXT neighbor and a DOWN neighbor. The DOWN list is also sorted! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use recursion! Flatten the next part of the map, then MERGE it with the down part! 🦜"', codeSnippet: 'root->next = flatten(root->next);\nroot = merge(root, root->next);' },
      { type: 'multiple_choice', questionText: 'Which algorithm is essential for flattening sorted lists?', options: ['Merge Sorted Lists', 'Search', 'Binary Sort'], correctAnswer: 'Merge Sorted Lists' },
      { type: 'match_following', questionText: 'Match Flattening Flows!', pairs: [{key: 'Next', value: 'Horizontal'}, {key: 'Down', value: 'Vertical'}, {key: 'Flatten', value: 'Recursive result'}] },
      { type: 'programming_board', questionText: 'Base case for recursive flattening.', codeSnippet: 'if (!root || !root->___) return root;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "Result is a single vertical sorted list. Complexity: O(Total_Nodes), as we visit everyone! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is the final list sorted?', options: ['Yes!', 'No', 'If Pico wants'], correctAnswer: 'Yes!' },
      { type: 'code_fill_in', questionText: 'Merge root with its horizontal counterpart.', codeSnippet: 'return ___(root, root->next);', correctAnswer: 'merge' },
      { type: 'teaching', questionText: '🦜 Pico: "Depth before Breadth! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I flattened?"', options: ['Horizontal excellence!', 'No.', '0'], correctAnswer: 'Horizontal excellence!' }
    ]
  },
  {
    order: 47,
    title: 'Sort and Detect',
    desc: 'Detecting if a list is sorted AND checking for complex cycles.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Healthy Flock check! Is the necklace sorted? And does it have any secret hidden loops? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Sorted: `curr->val <= curr->next->val` for all. Cycles: Hare and Tortoise. Combine them in one pass! 🦜"', codeSnippet: 'if (p->val > p->next->val) isSorted = false;\nif (slow == fast) hasLoop = true;' },
      { type: 'multiple_choice', questionText: 'If a list is SORTED and CIRCULAR, what is the connection?', options: ['Tail connects to Head', 'Tail points to NULL', 'Sorted lists cannot loop'], correctAnswer: 'Tail connects to Head' },
      { type: 'match_following', questionText: 'Match Validator Rules!', pairs: [{key: 'Sorted', value: 'O(N) data check'}, {key: 'Cycle', value: 'O(N) address check'}, {key: 'Healthy', value: 'Both true'}] },
      { type: 'programming_board', questionText: 'Check for sorted violation.', codeSnippet: 'if (curr->val ___ curr->next->val) return false;', correctAnswer: '>' },
      { type: 'teaching', questionText: '🦜 Pico: "This is a basic sanity check for list-based data pipelines. Keep the flock safe! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of combined check?', options: ['O(N)', 'O(1)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Hare step.', codeSnippet: 'fast = fast->next->___ ;', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "Stay straight, fly circular! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I healthy?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 48,
    title: 'Browser History Master',
    desc: 'Designing a browser history using a Doubly Linked List.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Web Surfing! Back and Forward buttons. Every URL is a nest in a Doubly Linked List! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "VISIT: Create new node, cut all future history. BACK: Move pointer back. FORWARD: Move pointer ahead! 🦜"', codeSnippet: 'curr->next = new Node(url); curr->next->prev = curr;\ncurr = curr->next;' },
      { type: 'multiple_choice', questionText: 'Why is DLL better than a simple array for browser history?', options: ['Easily delete future history on visit', 'Uses less space', 'Pico likes colons'], correctAnswer: 'Easily delete future history on visit' },
      { type: 'match_following', questionText: 'Match Nav Actions!', pairs: [{key: 'Visit', value: 'Nuke current->next'}, {key: 'Back', value: 'Pointer = prev'}, {key: 'Forward', value: 'Pointer = next'}] },
      { type: 'programming_board', questionText: 'Stop at the beginning of history.', codeSnippet: 'while (steps > 0 && curr->___ != NULL)', correctAnswer: 'prev' },
      { type: 'teaching', questionText: '🦜 Pico: "O(Steps) for move, O(1) for visit. This is how Chrome and Safari remember your flight path! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of visiting a new page?', options: ['O(1)', 'O(N)', 'O(Steps)'], correctAnswer: 'O(1)' },
      { type: 'code_fill_in', questionText: 'Move forward K steps.', codeSnippet: 'while (k-- > 0 && curr->___)', correctAnswer: 'next' },
      { type: 'teaching', questionText: '🦜 Pico: "Navigate with wisdom! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Did I go back?"', options: ['Back to the future!', 'No.', '0'], correctAnswer: 'Back to the future!' }
    ]
  },
  {
    order: 49,
    title: 'The Skip List (Intro)',
    desc: 'Faster search in Linked Lists using probability layers.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Elite Shortcut! What if some birds could jump 5 nests at once, while others jump 10? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "A Skip List has layers of pointers. The top layers jump far! It gives you O(log N) search on a Linked List! 🦜"', codeSnippet: 'while (curr->next->val < target) curr = curr->next;\ncurr = curr->down;' },
      { type: 'multiple_choice', questionText: 'Average search complexity of a Skip List?', options: ['O(log N)', 'O(N)', 'O(1)'], correctAnswer: 'O(log N)' },
      { type: 'match_following', questionText: 'Match Skip Layers!', pairs: [{key: 'Layer 0', value: 'All nodes'}, {key: 'Higher Layers', value: 'Shortcuts'}, {key: 'Coin Flip', value: 'Promotion'}] },
      { type: 'programming_board', questionText: 'Move down to the next level.', codeSnippet: 'curr = curr->___ ;', correctAnswer: 'down' },
      { type: 'teaching', questionText: '🦜 Pico: "It uses random coin flips to decide which birds get promoted to the fast-jump layer. A probabilistic miracle! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is a skip list easier to implement than a balanced BST?', options: ['Yes', 'No', 'Depends on seeds'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Check next jump value.', codeSnippet: 'if (next->val ___ target) moveAhead();', correctAnswer: '<' },
      { type: 'teaching', questionText: '🦜 Pico: "Skipping for speed! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I skipping?"', options: ['Always leaping ahead!', 'No.', '0'], correctAnswer: 'Always leaping ahead!' }
    ]
  },
  {
    order: 50,
    title: 'The Master Point',
    desc: 'Reflecting on the Master Stage.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "MASTER STAGE HALFWAY! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "K-Groups, LRU/LFU Fortresses, and Skip Lists. You are becoming a Pointer GOD. 🦜"' },
      { type: 'multiple_choice', questionText: 'Time complexity for LRU Put?', options: ['O(1)', 'O(N)'], correctAnswer: 'O(1)' },
      { type: 'multiple_choice', questionText: 'LFU Tie-breaker logic?', options: ['Use LRU', 'Random'], correctAnswer: 'Use LRU' },
      { type: 'multiple_choice', questionText: 'Merging K lists complexity?', options: ['O(N log K)', 'O(NK)'], correctAnswer: 'O(N log K)' },
      { type: 'multiple_choice', questionText: 'Ghost deletion complexity?', options: ['O(1)', 'O(N)'], correctAnswer: 'O(1)' },
      { type: 'multiple_choice', questionText: 'Skip List search time?', options: ['O(log N)', 'O(N)'], correctAnswer: 'O(log N)' },
      { type: 'match_following', questionText: 'Master Pivot Match!', pairs: [{key: 'Pointers', value: 'Solid!'}, {key: 'Caches', value: 'Optimized!'}, {key: 'Pico', value: 'Amazed!'}] },
      { type: 'teaching', questionText: '🦜 Pico: "Final 10 units of Linked Lists: XOR Lists, Splitters, and the Ultimate Graduation! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you ready for the final stretch?"', options: ['BEYOND AND UP!', 'Wait...', '0'], correctAnswer: 'BEYOND AND UP!' }
    ]
  }
];

module.exports = stage3_part1;

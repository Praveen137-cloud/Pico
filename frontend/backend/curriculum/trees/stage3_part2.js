const stage3_part2 = [
  {
    order: 51,
    title: 'The Wide Horizon',
    desc: 'Calculating the maximum width of a binary tree.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Broadest Floor! What is the maximum number of birds that could fit in a single level, including the empty nests between them? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use Level-Order with indices! For every level, the width is `LastIndex - FirstIndex + 1`. To avoid overflow, subtract the first index of each level from all birds at that level! 🦜"', codeSnippet: 'unsigned long long first, last;\nfor(int i=0; i<sz; i++) {\n  unsigned long long curIdx = q.front().second - startIdx;\n  if(i == 0) first = curIdx;\n  if(i == sz-1) last = curIdx;\n  // push children with 2*curIdx + 1, 2*curIdx + 2\n}\nmaxWidth = max(maxWidth, last - first + 1);' },
      { type: 'multiple_choice', questionText: 'Complexity of finding Maximum Width?', options: ['O(N)', 'O(Width)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Width logic!', pairs: [{key: 'Index', value: '2*i + 1 and 2*i + 2'}, {key: 'Overflow', value: 'Subtract startIdx'}, {key: 'Last - First + 1', value: 'Level Width'}] },
      { type: 'programming_board', questionText: 'Index for the right child of index `i`.', codeSnippet: 'rightChildIdx = 2 * i ___ 2;', correctAnswer: '+' },
      { type: 'teaching', questionText: 'By Pico: "Even if there are NULLs between birds, the indices maintain the correct spacing. O(N) time and O(Width) space! 🦜"' },
      { type: 'multiple_choice', questionText: 'Maximum width of [1(2,3), (4,5), (6,7)]?', options: ['4', '3', '2'], correctAnswer: '4' },
      { type: 'code_fill_in', questionText: 'Calculate relative index.', codeSnippet: 'long long cur_id = q.front().second ___ first_idx_of_level;', correctAnswer: '-' },
      { type: 'teaching', questionText: 'By Pico: "Horizon to horizon! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Am I the widest?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 52,
    title: 'Path Sum Global (Max)',
    desc: 'Path Sum involving any node to any node (revisited).',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Infinite Trail! Finding the absolute maximum sum along any contiguous path in the tree. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "This is the elite version where nodes can have negative values. Remember: `max(0, ...)` is your best friend to prune bad branches! 🦜"', codeSnippet: 'int dfs(Node* node, int& res) {\n  if(!node) return 0;\n  int l = max(0, dfs(node->left, res));\n  int r = max(0, dfs(node->right, res));\n  res = max(res, node->val + l + r);\n  return node->val + max(l, r);\n}' },
      { type: 'multiple_choice', questionText: 'What if all node values are negative?', options: ['The max is the single largest node value', 'The max is 0', 'Error'], correctAnswer: 'The max is the single largest node value' },
      { type: 'match_following', questionText: 'Match Path Sum Global!', pairs: [{key: 'l + r + node', value: 'Current max path through node'}, {key: 'node + max(l, r)', value: 'Best path to contribute to parent'}, {key: 'N', value: 'Time Complexity'}] },
      { type: 'programming_board', questionText: 'Initialize results with the smallest possible integer.', codeSnippet: 'int maxSum = ___ ;', correctAnswer: 'INT_MIN' },
      { type: 'teaching', questionText: 'By Pico: "We return the best single branch to the parent, but update the global maximum with the best possible \'V\' shape path at this node! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result for a single node tree [-5]?', options: ['-5', '0', '-1'], correctAnswer: '-5' },
      { type: 'code_fill_in', questionText: 'Compare with current global max.', codeSnippet: '___ = max(globalMax, currentPath);', correctAnswer: 'globalMax' },
      { type: 'teaching', questionText: 'By Pico: "The peak of the summits! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I find the gold?"', options: ['Pure treasure!', 'No.', '0'], correctAnswer: 'Pure treasure!' }
    ]
  },
  {
    order: 53,
    title: 'Morris Traversal Intro',
    desc: 'O(1) space Inorder traversal using Threaded Binary Trees.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Ghostly Links! Can you traverse the entire forest in inorder without using a stack or recursion? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Yes! Create temporary links from the RIGHT-MOST node of a left sub-tree back to the current root. These are called threads! 🦜"', codeSnippet: 'if(!curr->left) { visit(curr); curr = curr->right; }\nelse {\n  pre = curr->left; while(pre->right && pre->right != curr) pre = pre->right;\n  if(!pre->right) { pre->right = curr; curr = curr->left; }\n  else { pre->right = NULL; visit(curr); curr = curr->right; }\n}' },
      { type: 'multiple_choice', questionText: 'Space complexity of Morris Traversal?', options: ['O(1)', 'O(N)', 'O(Height)'], correctAnswer: 'O(1)' },
      { type: 'match_following', questionText: 'Match Morris pieces!', pairs: [{key: 'Thread', value: 'Link to predecessor'}, {key: 'NULL thread', value: 'Cleanup after visiting'}, {key: 'O(N)', value: 'Time complexity'}] },
      { type: 'programming_board', questionText: 'Condition where a thread already exists.', codeSnippet: 'if (pre->right ___ curr)', correctAnswer: '==' },
      { type: 'teaching', questionText: 'By Pico: "Every node is visited at most 3 times. O(N) time but O(1) space. This is how the bird-brain works on limited memory! 🦜"' },
      { type: 'multiple_choice', questionText: 'In a single-node tree, how many times is it visited in Morris?', options: ['1', '2', '0'], correctAnswer: '1' },
      { type: 'code_fill_in', questionText: 'Break the thread.', codeSnippet: 'pre->right = ___ ;', correctAnswer: 'NULL' },
      { type: 'teaching', questionText: 'By Pico: "Threaded mastery! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Am I using extra space?"', options: ['Zero extra footprint!', 'No.', '0'], correctAnswer: 'Zero extra footprint!' }
    ]
  },
  {
    order: 54,
    title: 'K-th Smallest in BST',
    desc: 'Finding the K-th smallest node in O(log N) or O(N).',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Ranked Search! Who is the 3rd smallest bird in the forest? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use Inorder Traversal! Since Inorder of a BST is sorted, the K-th bird processed is your answer. 🦜"', codeSnippet: 'void inorder(Node* root, int& k, int& res) {\n  if(!root) return;\n  inorder(root->left, k, res);\n  if(--k == 0) { res = root->val; return; }\n  inorder(root->right, k, res);\n}' },
      { type: 'multiple_choice', questionText: 'Which traversal finds the K-th smallest in O(N) efficiently?', options: ['Inorder', 'Preorder', 'Postorder'], correctAnswer: 'Inorder' },
      { type: 'match_following', questionText: 'Match Ranked logic!', pairs: [{key: 'Left-first', value: 'Inorder start'}, {key: '--k == 0', value: 'Target found'}, {key: 'O(Height)', value: 'Space complexity'}] },
      { type: 'programming_board', questionText: 'Check if current bird is the K-th target.', codeSnippet: 'if (___ k == 0) result = root->val;', correctAnswer: '--' },
      { type: 'teaching', questionText: 'By Pico: "To do it in O(log N), every node must store the SIZE of its sub-tree. Then you can skip whole branches! 🦜"' },
      { type: 'multiple_choice', questionText: 'K-th largest in BST?', options: ['Reverse Inorder (Right-Root-Left)', 'Standard Inorder', '0'], correctAnswer: 'Reverse Inorder (Right-Root-Left)' },
      { type: 'code_fill_in', questionText: 'Recursive call for left side.', codeSnippet: 'traverse(root->___, k, ans);', correctAnswer: 'left' },
      { type: 'teaching', questionText: 'By Pico: "Ranked and ready! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Am I the K-th?"', options: ['Exactly the rank!', 'No.', '0'], correctAnswer: 'Exactly the rank!' }
    ]
  },
  {
    order: 55,
    title: 'Construct BST (Sorted Array)',
    desc: 'Building a Height-Balanced BST from a sorted array.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Sorted Seedlings! Turn [1, 2, 3, 4, 5, 6, 7] into a perfectly balanced tree. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Pick the MIDDLE seed as root. Recurse for the left half and right half! 🦜"', codeSnippet: 'Node* build(int l, int r) {\n  if(l > r) return NULL;\n  int m = l + (r-l)/2;\n  Node* root = new Node(nums[m]);\n  root->left = build(l, m-1);\n  root->right = build(m+1, r);\n  return root;\n}' },
      { type: 'multiple_choice', questionText: 'Why pick the middle element?', options: ['To keep the tree balanced', 'Because it is the largest', 'Pico rule'], correctAnswer: 'To keep the tree balanced' },
      { type: 'match_following', questionText: 'Match Array-BST pieces!', pairs: [{key: 'Mid', value: 'Root node'}, {key: 'l to mid-1', value: 'Left sub-tree'}, {key: 'mid+1 to r', value: 'Right sub-tree'}] },
      { type: 'programming_board', questionText: 'Constraint for the middle index split.', codeSnippet: 'mid = l + (r - l) ___ 2;', correctAnswer: '/' },
      { type: 'teaching', questionText: 'By Pico: "Complexity: O(N) time and O(log N) space. This creates a tree with minimum possible height! 🦜"' },
      { type: 'multiple_choice', questionText: 'Height of a balanced BST with 7 nodes?', options: ['3', '7', '1'], correctAnswer: '3' },
      { type: 'code_fill_in', questionText: 'Recursive call to build right side.', codeSnippet: 'root->right = build(mid + 1, ___);', correctAnswer: 'r' },
      { type: 'teaching', questionText: 'By Pico: "Perfectly poised! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Am I balanced?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 56,
    title: 'BST Range Sum',
    desc: 'Calculating the sum of all nodes in range [L, R].',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Range Harvest! Sum up all the seeds that have values between Low and High. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Pruning! If root < Low, don’t search left. If root > High, don’t search right. Sum valid birds and move on! 🦜"', codeSnippet: 'if(root->val >= low && root->val <= high) sum += root->val;\nif(root->val > low) sum += rangeSum(left);\nif(root->val < high) sum += rangeSum(right);' },
      { type: 'multiple_choice', questionText: 'Why skip the left branch if `root->val < low`?', options: ['BST property: all left nodes are also < low', 'Because Pico says so', 'To save memory'], correctAnswer: 'BST property: all left nodes are also < low' },
      { type: 'match_following', questionText: 'Match Range logic!', pairs: [{key: 'val < Low', value: 'Prune Left'}, {key: 'val > High', value: 'Prune Right'}, {key: 'val in range', value: 'Add to result'}] },
      { type: 'programming_board', questionText: 'Compare root value with the low bound.', codeSnippet: 'if (root->val ___ low) sum += dfs(root->left);', correctAnswer: '>' },
      { type: 'teaching', questionText: 'By Pico: "Complexity: O(N) in worst case, but O(Range) in practice if many nodes are pruned. Elite efficiency! 🦜"' },
      { type: 'multiple_choice', questionText: 'Range sum of [10(5,15)] for [6, 12]?', options: ['10', '15', '30'], correctAnswer: '10' },
      { type: 'code_fill_in', questionText: 'Check the high bound for right search.', codeSnippet: 'if (root->val < ___) sum += dfs(root->right);', correctAnswer: 'high' },
      { type: 'teaching', questionText: 'By Pico: "Selective gathering! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the sum correct?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 57,
    title: 'The Ancestor Check',
    desc: 'Determining if Node A is an ancestor of Node B.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Family Tree! Is bird A a grandparent or higher of bird B? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use Entry and Exit times! Bird A is an ancestor of B if `Entry[A] < Entry[B]` AND `Exit[A] > Exit[B]`. 🦜"', codeSnippet: 'void dfs(u) {\n  tin[u] = timer++;\n  for(v : adj[u]) dfs(v);\n  tout[u] = timer++;\n}' },
      { type: 'multiple_choice', questionText: 'Algorithm term for entry/exit time labels?', options: ['Discovery Times', 'Bird Tags', 'Nest IDs'], correctAnswer: 'Discovery Times' },
      { type: 'match_following', questionText: 'Match Ancestry times!', pairs: [{key: 'Entry[A] < Entry[B]', value: 'A started before B'}, {key: 'Exit[A] > Exit[B]', value: 'A finished after B'}, {key: 'O(N)', value: 'Complexity'}] },
      { type: 'programming_board', questionText: 'The property for A to be an ancestor of B.', codeSnippet: 'if (tin[a] <= tin[b] ___ tout[a] >= tout[b])', correctAnswer: '&&' },
      { type: 'teaching', questionText: 'By Pico: "This is a fundamental concept in Graphs also! O(N) to label, O(1) to check! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is the root an ancestor of every node?', options: ['Yes', 'No', 'If Pico likes it'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Mark the timer.', codeSnippet: 'tin[u] = ___++;', correctAnswer: 'timer' },
      { type: 'teaching', questionText: 'By Pico: "Trace the lineage! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Am I the elder?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 58,
    title: 'Binary Tree Coloring',
    desc: 'Game theory on trees: Can Player 1 win by picking a node?',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Strategy Game! Pick a node to cut the tree. You get all birds in that branch. Can you beat the opponent? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Three directions to win: 1. Your Left sub-tree. 2. Your Right sub-tree. 3. The REST of the tree (N - L - R - 1). 🦜"', codeSnippet: 'int l = count(target->left);\nint r = count(target->right);\nint rest = n - l - r - 1;\nif(l > n/2 || r > n/2 || rest > n/2) return true;' },
      { type: 'multiple_choice', questionText: 'Condition to win in tree coloring?', options: ['Pick a sub-tree with > 50% nodes', 'Pick the root', '0'], correctAnswer: 'Pick a sub-tree with > 50% nodes' },
      { type: 'match_following', questionText: 'Match Coloring areas!', pairs: [{key: 'L', value: 'Left children count'}, {key: 'R', value: 'Right children count'}, {key: 'n - L - R - 1', value: 'Everyone else'}] },
      { type: 'programming_board', questionText: 'Calculate the size of the rest of the tree.', codeSnippet: 'rest = totalNodes - l - r ___ 1;', correctAnswer: '-' },
      { type: 'teaching', questionText: 'By Pico: "O(N) time to find counts. Game theory meets tree traversal! 🦜"' },
      { type: 'multiple_choice', questionText: 'If N=11 and your Left sub-tree has 6 birds, can you win?', options: ['Yes (6 > 5.5)', 'No', '0'], correctAnswer: 'Yes (6 > 5.5)' },
      { type: 'code_fill_in', questionText: 'Count nodes in left branch.', codeSnippet: 'l = ___ (target->left);', correctAnswer: 'count' },
      { type: 'teaching', questionText: 'By Pico: "Checkmate in the canopy! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I win?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 59,
    title: 'The Master Review (Elite)',
    desc: 'Elite Trees Mastery Review.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "THE ELITE FINALE! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Maximum Width, Path Sum Global, Morris Traversal, and Ancestry Timestamps. You have touched the peak of hierarchical logic! 🦜"' },
      { type: 'multiple_choice', questionText: 'Morris Traversal space?', options: ['O(1)', 'O(Height)'], correctAnswer: 'O(1)' },
      { type: 'multiple_choice', questionText: 'Maximum Width index logic?', options: ['2*i + 1', 'i + 1'], correctAnswer: '2*i + 1' },
      { type: 'multiple_choice', questionText: 'K-th smallest in BST traversal?', options: ['Inorder', 'Postorder'], correctAnswer: 'Inorder' },
      { type: 'multiple_choice', questionText: 'Tree coloring win condition?', options: ['> N/2 nodes', '> 0'], correctAnswer: '> N/2 nodes' },
      { type: 'multiple_choice', questionText: 'Ancestry check using timer?', options: ['O(1)', 'O(N)'], correctAnswer: 'O(1)' },
      { type: 'match_following', questionText: 'Master Final Match!', pairs: [{key: 'Pico', value: 'Speechless!'}, {key: 'Hierarchical', value: 'Mastered!'}, {key: 'Tree DP', value: 'Unlocked!'}] },
      { type: 'teaching', questionText: 'By Pico: "Final unit: The Trees Academy Graduation! You are a God of the Forest! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Are you ready to graduate?"', options: ['SQUAWK YES!', 'Wait...', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 60,
    title: 'Trees Graduation',
    desc: 'The Subject Complete: God-Mode Master.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "GRADUATION DAY! You have completed all 60 units of the Trees Academy. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "From basic traversals to the complex O(1) Morris threads. You have mastered the hierarchical fortress! 🦜"' },
      { type: 'multiple_choice', questionText: 'Tree vs Graph?', options: ['No cycles in Trees', 'No edges in Trees'], correctAnswer: 'No cycles in Trees' },
      { type: 'multiple_choice', questionText: 'Binary Search Tree property?', options: ['Left < Root < Right', 'Left > Root'], correctAnswer: 'Left < Root < Right' },
      { type: 'multiple_choice', questionText: 'Tree DP return?', options: ['Choice state pair', 'Single int'], correctAnswer: 'Choice state pair' },
      { type: 'multiple_choice', questionText: 'BFS for Trees?', options: ['Level-Order', 'Preorder'], correctAnswer: 'Level-Order' },
      { type: 'multiple_choice', questionText: 'Threaded Tree benefit?', options: ['Space efficiency', 'Height reduction'], correctAnswer: 'Space efficiency' },
      { type: 'multiple_choice', questionText: 'LCA complexity in BT?', options: ['O(N)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'multiple_choice', questionText: 'Maximum Path Sum approach?', options: ['DFS with Global Max', 'Simple BFS'], correctAnswer: 'DFS with Global Max' },
      { type: 'match_following', questionText: 'Subject Mastery Match!', pairs: [{key: 'Subject', value: 'Complete!'}, {key: 'Forest', value: 'Mapped!'}, {key: 'Next', value: 'GRAPHS!'}] },
      { type: 'teaching', questionText: 'By Pico: "Trees are done. You have conquered the canopy. Next, we enter the interconnected web of logic: GRAPHS! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Are you ready for the network?"', options: ['SQUAWK YES!', 'Fly high!', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  }
];

module.exports = stage3_part2;

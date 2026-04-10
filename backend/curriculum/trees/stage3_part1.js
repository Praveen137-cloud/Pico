const stage3_part1 = [
  {
    order: 41,
    title: 'The Forest Codec',
    desc: 'Serializing and Deserializing a Binary Tree.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Deep Storage! How do you turn a living tree into a string of seeds to send across the sky, and then regrow it exactly as it was? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use Level-Order or DFS! Use a special character like `#` or `NULL` to mark empty nests. A string like "1,2,3,#,#,4,5" can reconstruct the entire forest! 🦜"', codeSnippet: 'string serialize(Node* root) {\n  if(!root) return "#";\n  return to_string(root->val) + "," + serialize(root->left) + "," + serialize(root->right);\n}' },
      { type: 'multiple_choice', questionText: 'Complexity of Tree Serialization?', options: ['O(N)', 'O(Height)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Codec pieces!', pairs: [{key: 'Serialize', value: 'Tree to String'}, {key: 'Deserialize', value: 'String to Tree'}, {key: '#', value: 'Empty nest marker'}] },
      { type: 'programming_board', questionText: 'Delimiter used to separate bird values in the string.', codeSnippet: 'res += to_string(node->val) + "___";', correctAnswer: ',' },
      { type: 'teaching', questionText: 'By Pico: "During deserialization, use a queue of the split string. Pop a seed, grow a node, and recurse for its children! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why is serialization important for trees?', options: ['For saving to DB/File', 'To make them taller', 'Pico rule'], correctAnswer: 'For saving to DB/File' },
      { type: 'code_fill_in', questionText: 'Recursive call to regrow the left branch.', codeSnippet: 'root->left = ___(q);', correctAnswer: 'deserialize' },
      { type: 'teaching', questionText: 'By Pico: "Data in flight! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Am I encoded?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 42,
    title: 'Max Path (Any-to-Any)',
    desc: 'Finding the maximum path sum between any two nodes.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Ultimate Highway! What is the largest sum of seeds you can find on a path that starts anywhere and ends anywhere? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "At every node, calculate `root + LeftMax + RightMax` and update a global max. But only return `root + max(Left, Right)` to the parent! 🦜"', codeSnippet: 'int dfs(Node* node, int& res) {\n  if(!node) return 0;\n  int l = max(0, dfs(node->left, res));\n  int r = max(0, dfs(node->right, res));\n  res = max(res, node->val + l + r);\n  return node->val + max(l, r);\n}' },
      { type: 'multiple_choice', questionText: 'Why do we return `node + max(L, R)` instead of `node + L + R` to the parent?', options: ['A path cannot branch in both directions up the tree', 'To save memory', 'Pico rule'], correctAnswer: 'A path cannot branch in both directions up the tree' },
      { type: 'match_following', questionText: 'Match Path logic!', pairs: [{key: 'max(0, ...)', value: 'Ignore negative branches'}, {key: 'node->val + l + r', value: 'Current peak path candidate'}, {key: 'Global res', value: 'The ultimate answer'}] },
      { type: 'programming_board', questionText: 'Condition to discard a branch that would decrease our sum.', codeSnippet: 'branchSum = ___ (0, dfs(branch));', correctAnswer: 'max' },
      { type: 'teaching', questionText: 'By Pico: "Complexity: O(N). This is a God-mode tree problem that tests your understanding of recursive return values vs global state! 🦜"' },
      { type: 'multiple_choice', questionText: 'If a node is -10 and its children return 20 and 30, what is the max path at this node?', options: ['40 (20 + 30 - 10)', '20', '30'], correctAnswer: '40 (20 + 30 - 10)' },
      { type: 'code_fill_in', questionText: 'Update the global record.', codeSnippet: 'res = max(res, node->val + ___ + r);', correctAnswer: 'l' },
      { type: 'teaching', questionText: 'By Pico: "Summit reached! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Am I the maximum?"', options: ['The ultimate path!', 'No.', '0'], correctAnswer: 'The ultimate path!' }
    ]
  },
  {
    order: 43,
    title: 'BST Recovery (O(1))',
    desc: 'Swapping two incorrect nodes in a BST in constant space.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Sabotage! Two birds have swapped nests in our sorted BST. Can you find and fix them in O(1) space? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use Morris Traversal (Level 10 Linked List concept)! While flying inorder, keep track of transitions where `prev > current`. 🦜"', codeSnippet: 'if(prev && prev->val > curr->val) {\n  if(!first) first = prev;\n  second = curr;\n}' },
      { type: 'multiple_choice', questionText: 'In an inorder traversal of a BST, any violation `prev > current` indicates?', options: ['The swapped nodes', 'The tree is empty', 'Pico rule'], correctAnswer: 'The swapped nodes' },
      { type: 'match_following', questionText: 'Match Recovery roles!', pairs: [{key: 'First', value: 'The first "bigger" bird'}, {key: 'Second', value: 'The last "smaller" bird'}, {key: 'Swap', value: 'Final fix'}] },
      { type: 'programming_board', questionText: 'Initial value for the tracking pointers.', codeSnippet: 'Node* first = ___; Code* second = NULL;', correctAnswer: 'NULL' },
      { type: 'teaching', questionText: 'By Pico: "Morris Traversal uses the tree’s own NULL pointers to create temporary back-links, allowing for O(1) space traversal! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of finding the swapped nodes with Morris?', options: ['O(N) time, O(1) space', 'O(N^2) time, O(1) space', 'O(N) space'], correctAnswer: 'O(N) time, O(1) space' },
      { type: 'code_fill_in', questionText: 'Final fix: swap the values.', codeSnippet: 'swap(first->val, second->___);', correctAnswer: 'val' },
      { type: 'teaching', questionText: 'By Pico: "Restored order! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Are they back in their nests?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 44,
    title: 'BST From Preorder (O(N))',
    desc: 'Constructing a BST from its preorder traversal in linear time.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Preorder Seedling! Construct a full BST from [8, 5, 1, 7, 10, 12] in one pass. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Pass a BOUND down! A bird can only land here if it is within (min, max). If not, it belongs to another branch. 🦜"', codeSnippet: 'Node* build(int& i, int bound) {\n  if(i == n || pre[i] > bound) return NULL;\n  Node* root = new Node(pre[i++]);\n  root->left = build(i, root->val);\n  root->right = build(i, bound);\n  return root;\n}' },
      { type: 'multiple_choice', questionText: 'Why is O(N) possible here while general construction is O(N log N)?', options: ['BST properties limit valid placement', 'Preorder is magic', 'Pico rule'], correctAnswer: 'BST properties limit valid placement' },
      { type: 'match_following', questionText: 'Match Bound logic!', pairs: [{key: 'Left bound', value: 'Current Root value'}, {key: 'Right bound', value: 'Previous Ancestor bound'}, {key: 'i++', value: 'Consume seed'}] },
      { type: 'programming_board', questionText: 'Base case for exceeding the parent’s limit.', codeSnippet: 'if (i == n || pre[i] ___ bound) return NULL;', correctAnswer: '>' },
      { type: 'teaching', questionText: 'By Pico: "One pass, no sorting, no maps. This is the peak of BST architecting! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result for [8, 5, 1]? Root 8, Left 5, 5’s Left 1?', options: ['Yes', 'No', '0'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Recursive call for right sub-tree.', codeSnippet: 'root->right = build(i, ___);', correctAnswer: 'bound' },
      { type: 'teaching', questionText: 'By Pico: "Perfect alignment! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Am I constructed?"', options: ['Linearly perfect!', 'No.', '0'], correctAnswer: 'Linearly perfect!' }
    ]
  },
  {
    order: 45,
    title: 'Vertical Order (Elite)',
    desc: 'Returning the tree grouped by vertical columns.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Vertical Scan! Group birds by their horizontal distance, sorted by level and value! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use a Map of Multisets or a sorted vector! Level-Order ensures we go top-down. Map ensures we go left-to-right. 🦜"', codeSnippet: 'map<int, vector<int>> res;\nqueue<pair<Node*, int>> q; q.push({root, 0});\nwhile(!q.empty()) {\n  auto p = q.pop();\n  res[p.hd].push_back(p.node->val);\n  // push children with hd-1, hd+1...\n}' },
      { type: 'multiple_choice', questionText: 'What if two nodes are at the same (HD, Level)?', options: ['Sort them by value (usually)', 'Pick first', 'Error'], correctAnswer: 'Sort them by value (usually)' },
      { type: 'match_following', questionText: 'Match Vertical pieces!', pairs: [{key: 'HD', value: 'The Column Coordinate'}, {key: 'Level', value: 'The Row Coordinate'}, {key: 'Multiset', value: 'Sorted values at same cell'}] },
      { type: 'programming_board', questionText: 'Coordinate increase for the right child.', codeSnippet: 'q.push({curr->right, hd ___ 1});', correctAnswer: '+' },
      { type: 'teaching', questionText: 'By Pico: "Complexity: O(N log N). This view is the definitive silhouette of the forest. 🦜"' },
      { type: 'multiple_choice', questionText: 'If root is at HD 0, its Right-Left grandchild is at HD?', options: ['0 (0+1-1)', '1', '-1'], correctAnswer: '0 (0+1-1)' },
      { type: 'code_fill_in', questionText: 'Add to column results.', codeSnippet: 'columnMap[horizontalDist].___ (node->val);', correctAnswer: 'push_back' },
      { type: 'teaching', questionText: 'By Pico: "Perfect columns! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Can you see the columns?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 46,
    title: 'Burning Tree',
    desc: 'Calculating time to burn the entire tree from a leaf.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Forest Fire! If a fire starts at a target nest, how long until every bird must fly away? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "1. Map all nodes to their parents (BFS). 2. Use BFS from the target to spread fire in THREE directions (Left, Right, Parent)! 🦜"', codeSnippet: 'while(!q.empty()) {\n  int sz = q.size();\n  for(int i=0; i<sz; i++) {\n    Node* curr = q.pop();\n    if(left && !vis[left]) q.push(left);\n    if(right && !vis[right]) q.push(right);\n    if(parent[curr] && !vis[parent[curr]]) q.push(parent[curr]);\n  }\n  time++;\n}' },
      { type: 'multiple_choice', questionText: 'Why do we need a parent map?', options: ['To spread the fire upwards', 'To save memory', 'Pico rule'], correctAnswer: 'To spread the fire upwards' },
      { type: 'match_following', questionText: 'Match Fire directions!', pairs: [{key: 'Up', value: 'Parent Pointer'}, {key: 'Down', value: 'Left/Right Children'}, {key: 'Visited', value: 'Prevent infinite burn'}] },
      { type: 'programming_board', questionText: 'Increment time for each layer of spreading fire.', codeSnippet: 'if (fireSpreads) burnTime ___ 1;', correctAnswer: '++' },
      { type: 'teaching', questionText: 'By Pico: "O(N) time and space. The distance to the furthest node from the fire-start is the answer! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of building the parent map?', options: ['O(N)', 'O(Height)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Follow parent link.', codeSnippet: 'if (___[curr] && !visited[parent])', correctAnswer: 'parentMap' },
      { type: 'teaching', questionText: 'By Pico: "Heat map complete! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did the forest burn?"', options: ['Every nest reached!', 'No.', '0'], correctAnswer: 'Every nest reached!' }
    ]
  },
  {
    order: 47,
    title: 'Complete Tree Count',
    desc: 'Counting nodes in a Complete Binary Tree in O(log^2 N).',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Packed Forest! In a Complete Binary Tree, we can count the birds FASTER than O(N). 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "If the leftmost and rightmost heights are the same, it is a Perfect tree: Count = `2^h - 1`. If not, recurse! 🦜"', codeSnippet: 'if(lh == rh) return (1 << lh) - 1;\nreturn 1 + countNodes(left) + countNodes(right);' },
      { type: 'multiple_choice', questionText: 'Complexity for counting Complete Tree nodes?', options: ['O(log^2 N)', 'O(N)', 'O(log N)'], correctAnswer: 'O(log^2 N)' },
      { type: 'match_following', questionText: 'Match Counting Logic!', pairs: [{key: 'Leftmost h', value: 'Fastest depth'}, {key: 'Rightmost h', value: 'Inner depth'}, {key: '(1<<h)-1', value: 'Perfect count'}] },
      { type: 'programming_board', questionText: 'Formula for total nodes in a perfect tree of height H.', codeSnippet: 'count = (1 ___ h) - 1;', correctAnswer: '<<' },
      { type: 'teaching', questionText: 'By Pico: "Because the tree is Complete, at least one sub-tree will always be Perfect at every level! 🦜"' },
      { type: 'multiple_choice', questionText: 'If left height = 4 and right height = 4, count is?', options: ['15 (2^4 - 1)', '7', '16'], correctAnswer: '15 (2^4 - 1)' },
      { type: 'code_fill_in', questionText: 'Recurse if not perfect.', codeSnippet: 'return 1 + ___ (root->left) + ... ;', correctAnswer: 'countNodes' },
      { type: 'teaching', questionText: 'By Pico: "Logarithmic precision! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I skip any birds?"', options: ['Only the math!', 'No.', '0'], correctAnswer: 'Only the math!' }
    ]
  },
  {
    order: 48,
    title: 'Robbing the Forest',
    desc: 'Tree Dynamic Programming (House Robber III).',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Seed Thief! You want to rob nests for the most seeds, but you CANNOT rob two adjacent nests (parent and child). 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Return two values at each node: {MaxIfRobbed, MaxIfNotRobbed}. If robbed: `root + child.notRobbed`. If not: `max(childRobbed, childNotRobbed)`. 🦜"', codeSnippet: 'pair<int, int> rob(Node* root) {\n  if(!root) return {0, 0};\n  auto l = rob(root->left);\n  auto r = rob(root->right);\n  int res1 = root->val + l.second + r.second;\n  int res2 = max(l.first, l.second) + max(r.first, r.second);\n  return {res1, res2};\n}' },
      { type: 'multiple_choice', questionText: 'Condition for robbing the current root?', options: ['Must not rob children', 'Must rob children', '0'], correctAnswer: 'Must not rob children' },
      { type: 'match_following', questionText: 'Match Robbery logic!', pairs: [{key: 'Robbed', value: 'root + children.notRobbed'}, {key: 'Not Robbed', value: 'max sums from children'}, {key: 'Result', value: 'max(pair)'}] },
      { type: 'programming_board', questionText: 'Max sum if we DON’T rob the current node.', codeSnippet: 'notRob = max(l.rob, l.notRob) ___ max(r.rob, r.notRob);', correctAnswer: '+' },
      { type: 'teaching', questionText: 'By Pico: "O(N) time and space. This is a classic "Choice" DP on a hierarchical structure. 🦜"' },
      { type: 'multiple_choice', questionText: 'If children have 10 and 20 seeds, and root has 5, which is better?', options: ['Rob children (30)', 'Rob root (5)', '0'], correctAnswer: 'Rob children (30)' },
      { type: 'code_fill_in', questionText: 'Return the choice pair.', codeSnippet: 'return {robMe, ___};', correctAnswer: 'dontRobMe' },
      { type: 'teaching', questionText: 'By Pico: "Optimal harvesting! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I rob it all?"', options: ['The biggest haul!', 'No.', '0'], correctAnswer: 'The biggest haul!' }
    ]
  },
  {
    order: 49,
    title: 'Distance K (Elite)',
    desc: 'Finding all nodes exactly distance K from a target node.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Radar Scan! Find every bird exactly K hops away from a specific target nest. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Just like Burning Tree! Map parents, then BFS 3-ways from the target until the level reached is K. 🦜"', codeSnippet: 'while(!q.empty()) {\n  if(currLevel == k) return q.toVector();\n  // expand 3-ways...\n}' },
      { type: 'multiple_choice', questionText: 'Time complexity for Distance K finding?', options: ['O(N)', 'O(Height^2)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Radar steps!', pairs: [{key: 'Up', value: 'Parent map'}, {key: 'Down', value: 'Left/Right'}, {key: 'K-limit', value: 'Stop condition'}] },
      { type: 'programming_board', questionText: 'Stop BFS when level matches K.', codeSnippet: 'if (currentDistance ___ k) return result;', correctAnswer: '==' },
      { type: 'teaching', questionText: 'By Pico: "This handles targets that are deep in the tree. The fire spreads through the family links! 🦜"' },
      { type: 'multiple_choice', questionText: 'How many directions can fire spread from an internal node?', options: ['3 (L, R, P)', '2', '1'], correctAnswer: '3 (L, R, P)' },
      { type: 'code_fill_in', questionText: 'BFS traversal loop.', codeSnippet: 'while (!q.___())', correctAnswer: 'empty' },
      { type: 'teaching', questionText: 'By Pico: "Targets locked! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did I find everyone?"', options: ['Full radius cover!', 'No.', '0'], correctAnswer: 'Full radius cover!' }
    ]
  },
  {
    order: 50,
    title: 'Elite Master Checkpoint',
    desc: 'Reflecting on the God-Mode stage.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "ELITE STAGE HALFWAY! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Codecs, Max Paths, Morris Traversal, and Tree DP. You are speaking the language of the forest gods! 🦜"' },
      { type: 'multiple_choice', questionText: 'Morris Traversal space?', options: ['O(1)', 'O(N)'], correctAnswer: 'O(1)' },
      { type: 'multiple_choice', questionText: 'Max Path Sum complexity?', options: ['O(N)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'multiple_choice', questionText: 'Vertical order sort?', options: ['HD, then Level', 'Value only'], correctAnswer: 'HD, then Level' },
      { type: 'multiple_choice', questionText: 'Complete Tree count complexity?', options: ['O(log^2 N)', 'O(N)'], correctAnswer: 'O(log^2 N)' },
      { type: 'multiple_choice', questionText: 'Tree DP robber choice?', options: ['Robbed/NotRobbed pair', 'Simple int'], correctAnswer: 'Robbed/NotRobbed pair' },
      { type: 'match_following', questionText: 'Master Final Match!', pairs: [{key: 'Pico', value: 'Speechless!'}, {key: 'Trees', value: 'Conquered!'}, {key: 'God-Mode', value: 'Unlocked!'}] },
      { type: 'teaching', questionText: 'By Pico: "Final 10 units: Path Sum Global, Maximum Width, and the Ultimate Graduation! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Are you ready for the final stretch?"', options: ['BEYOND AND UP!', 'Wait...', '0'], correctAnswer: 'BEYOND AND UP!' }
    ]
  }
];

module.exports = stage3_part1;

const stage2_part1 = [
  {
    order: 21,
    title: 'The Balanced Scale',
    desc: 'Checking if a Binary Tree is height-balanced (AVL concept).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Level Woods! A tree is height-balanced if for EVERY node, the height difference between Left and Right is at most 1. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Return the height if balanced, else return -1. If any child returns -1, the whole branch is broken! 🦜"', codeSnippet: 'int check(Node* root) {\n  if(!root) return 0;\n  int lh = check(root->left); if(lh == -1) return -1;\n  int rh = check(root->right); if(rh == -1) return -1;\n  if(abs(lh - rh) > 1) return -1;\n  return 1 + max(lh, rh);\n}' },
      { type: 'multiple_choice', questionText: 'Maximum allowed height difference in a balanced tree?', options: ['1', '0', '2'], correctAnswer: '1' },
      { type: 'match_following', questionText: 'Match Balance Logic!', pairs: [{key: 'lh - rh > 1', value: 'Imbalanced'}, {key: '-1', value: 'Failure signal'}, {key: '1 + max', value: 'Height return'}] },
      { type: 'programming_board', questionText: 'Function to calculate absolute difference.', codeSnippet: 'if (___ (lh - rh) > 1) return -1;', correctAnswer: 'abs' },
      { type: 'teaching', questionText: '🦜 Pico: "This is far more efficient than calling height() for every node. O(N) time in one pass! 🦜"' },
      { type: 'multiple_choice', questionText: 'Complexity of height-balance check in one pass?', options: ['O(N)', 'O(Height^2)', 'O(log N)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Check right branch.', codeSnippet: 'int rh = ___(root->right);', correctAnswer: 'check' },
      { type: 'teaching', questionText: '🦜 Pico: "Stability in the branches! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I balanced?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 22,
    title: 'Tree Span (Diameter)',
    desc: 'Finding the longest distance between any two nodes in a tree.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Longest Flight! What is the maximum distance between any two birds in the tree? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "The Diameter might pass through the root, or it might be entirely in one sub-tree. Diameter = `max(lh + rh, leftDiam, rightDiam)`. 🦜"', codeSnippet: 'int diameter(Node* root, int& res) {\n  if(!root) return 0;\n  int lh = diameter(root->left, res);\n  int rh = diameter(root->right, res);\n  res = max(res, lh + rh);\n  return 1 + max(lh, rh);\n}' },
      { type: 'multiple_choice', questionText: 'Does the diameter of a tree always pass through the root?', options: ['No', 'Yes', 'Only if it’s a BST'], correctAnswer: 'No' },
      { type: 'match_following', questionText: 'Match Diameter pieces!', pairs: [{key: 'lh + rh', value: 'Path through root'}, {key: 'res', value: 'Global maximum'}, {key: 'Height', value: 'Return for parent'}] },
      { type: 'programming_board', questionText: 'Update the global diameter maximum.', codeSnippet: 'res = max(res, lh ___ rh);', correctAnswer: '+' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time. By returning height while updating a global max diameter, you avoid visiting nodes twice! 🦜"' },
      { type: 'multiple_choice', questionText: 'Diameter of a single-node tree?', options: ['0', '1', '2'], correctAnswer: '0' },
      { type: 'code_fill_in', questionText: 'Recursive call for left side.', codeSnippet: 'int lh = diameter(root->___, res);', correctAnswer: 'left' },
      { type: 'teaching', questionText: '🦜 Pico: "The furthest horizons! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the distant bird?"', options: ['A long-range flyer!', 'No.', '0'], correctAnswer: 'A long-range flyer!' }
    ]
  },
  {
    order: 23,
    title: 'Canopy View (Left)',
    desc: 'Finding the nodes visible from the left side.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Looking East! Which birds can you see if you stand to the absolute LEFT of the forest? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "The first bird encountered at each LEVEL is the left-view bird. Use Level-Order traversal or DFS with a Level counter! 🦜"', codeSnippet: 'void leftView(Node* root, int level, int& maxLevel) {\n  if(!root) return;\n  if(level > maxLevel) { cout << root->data; maxLevel = level; }\n  leftView(root->left, level+1, maxLevel);\n  leftView(root->right, level+1, maxLevel);\n}' },
      { type: 'multiple_choice', questionText: 'Condition to print a node in Left View?', options: ['First time we hit this level depth', 'If it has no parents', 'If it is the root'], correctAnswer: 'First time we hit this level depth' },
      { type: 'match_following', questionText: 'Match View logic!', pairs: [{key: 'Level', value: 'Current depth'}, {key: 'maxLevel', value: 'Deepest seen so far'}, {key: 'DFS', value: 'Left-first'}] },
      { type: 'programming_board', questionText: 'Update the maximum level reached.', codeSnippet: 'if (level > maxLevel) { ___ = level; }', correctAnswer: 'maxLevel' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N). By visiting the left child before the right, we ensure the leftmost bird claims the level first! 🦜"' },
      { type: 'multiple_choice', questionText: 'Left view for [1(2,3), (NULL,4)]?', options: ['1, 2, 4', '1, 2, 3', '2, 4'], correctAnswer: '1, 2, 4' },
      { type: 'code_fill_in', questionText: 'Inc depth for children.', codeSnippet: 'leftView(root->left, ___ , maxLevel);', correctAnswer: 'level + 1' },
      { type: 'teaching', questionText: '🦜 Pico: "Shadows on the left! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Can you see me?"', options: ['I’m on the edge!', 'No.', '0'], correctAnswer: 'I’m on the edge!' }
    ]
  },
  {
    order: 24,
    title: 'Canopy View (Right)',
    desc: 'Finding the nodes visible from the right side.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Looking West! Which birds can you see if you stand to the absolute RIGHT? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Just like Left View, but visit the RIGHT child first at every level! 🦜"', codeSnippet: 'void rightView(Node* root, int level, int& maxLevel) {\n  if(!root) return;\n  if(level > maxLevel) { cout << root->data; maxLevel = level; }\n  rightView(root->right, level+1, maxLevel);\n  rightView(root->left, level+1, maxLevel);\n}' },
      { type: 'multiple_choice', questionText: 'Which child is visited first for Right View in DFS?', options: ['Right', 'Left', 'Random'], correctAnswer: 'Right' },
      { type: 'match_following', questionText: 'Match View Rules!', pairs: [{key: 'Right-First', value: 'Right View'}, {key: 'Left-First', value: 'Left View'}, {key: 'O(N)', value: 'Complexity'}] },
      { type: 'programming_board', questionText: 'Print the data only if it is the first of its level.', codeSnippet: 'if (level ___ maxLevel) { printf(...); maxLevel = level; }', correctAnswer: '>' },
      { type: 'teaching', questionText: '🦜 Pico: "It is the mirror image of the left view logic. O(N) time and O(Height) space. 🦜"' },
      { type: 'multiple_choice', questionText: 'Right view for [1(2,3)]?', options: ['1, 3', '1, 2', '3, 2'], correctAnswer: '1, 3' },
      { type: 'code_fill_in', questionText: 'Right recursive call first.', codeSnippet: 'rightView(root->___, level + 1, ml);', correctAnswer: 'right' },
      { type: 'teaching', questionText: '🦜 Pico: "Sunbeams on the right! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the rightmost?"', options: ['Visible and elite!', 'No.', '0'], correctAnswer: 'Visible and elite!' }
    ]
  },
  {
    order: 25,
    title: 'Canopy View (Top)',
    desc: 'Finding the nodes visible from above.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Bird’s Eye View! Looking down from the clouds. We see birds organized by VERTICAL DISTANCE. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use Level-Order with a Horizontal Distance (HD). Root is 0, Left is -1, Right is +1. Only store the FIRST bird seen at each HD! 🦜"', codeSnippet: 'map<int, int> topViewMap;\nqueue<pair<Node*, int>> q; q.push({root, 0});\nwhile(!q.empty()) {\n  auto p = q.pop();\n  if(topViewMap.find(p.hd) == topViewMap.end()) topViewMap[p.hd] = p.node->data;\n  // push children with hd-1 and hd+1...\n}' },
      { type: 'multiple_choice', questionText: 'Horizontal Distance of the Root’s Left child’s Right child?', options: ['0', '-1', '1'], correctAnswer: '0', explanation: '0 - 1 + 1 = 0' },
      { type: 'match_following', questionText: 'Match Top View Logic!', pairs: [{key: 'HD - 1', value: 'Left Child'}, {key: 'HD + 1', value: 'Right Child'}, {key: 'Map', value: 'First bird at HD'}] },
      { type: 'programming_board', questionText: 'Store the bird only if HD is new to the map.', codeSnippet: 'if (topView.find(hd) ___ topView.end())', correctAnswer: '==' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N log N) if using a map, or O(N) with a hash map. This view shows the silhouette of the canopy! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why use Level-Order instead of DFS for Top View?', options: ['Ensures we see the top-most bird at each HD first', 'Saves space', 'Pico rule'], correctAnswer: 'Ensures we see the top-most bird at each HD first' },
      { type: 'code_fill_in', questionText: 'Increment HD for right child.', codeSnippet: 'q.push({curr->right, hd ___ 1});', correctAnswer: '+' },
      { type: 'teaching', questionText: '🦜 Pico: "Flying above the rest! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I at the peak?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 26,
    title: 'Canopy View (Bottom)',
    desc: 'Finding the nodes visible from below.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Looking up! Which birds are at the absolute bottom of their vertical columns? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Same as Top View (HD and Level-Order), but OVERWRITE the map entry every time! The LAST bird seen at each HD wins! 🦜"', codeSnippet: 'map<int, int> bottomViewMap;\nwhile(!q.empty()) {\n  auto p = q.pop();\n  bottomViewMap[p.hd] = p.node->data;\n  // children...\n}' },
      { type: 'multiple_choice', questionText: 'Difference between Top and Bottom view logic?', options: ['Top: First seen wins | Bottom: Last seen wins', 'Top: DFS | Bottom: BFS', 'None'], correctAnswer: 'Top: First seen wins | Bottom: Last seen wins' },
      { type: 'match_following', questionText: 'Match Bottom logic!', pairs: [{key: 'HD', value: 'Horizontal column'}, {key: 'Overwrite', value: 'Get lowest bird'}, {key: 'BFS', value: 'Layer by layer'}] },
      { type: 'programming_board', questionText: 'Update the map with the current node.', codeSnippet: 'bottomView[hd] ___ curr->data;', correctAnswer: '=' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N). From below, only the birds at the very tips of the vertical columns are visible. 🦜"' },
      { type: 'multiple_choice', questionText: 'Bottom view for [1(2,3)]?', options: ['2, 1, 3 (Wait, 1 is overwritten by 2/3?)', '2, 3', '2, 1, 3'], correctAnswer: '2, 3', explanation: 'If we assume vertical columns, 1 is at 0, 2 is at -1, 3 is at 1. But wait, in bottom view, 1 is overwritten by... nothing, unless someone is below it at HD 0!' },
      { type: 'code_fill_in', questionText: 'Map update.', codeSnippet: 'res[hd] = ___ ;', correctAnswer: 'curr->data' },
      { type: 'teaching', questionText: '🦜 Pico: "The floor of the forest! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Can you see me from below?"', options: ['I’m the bottom bird!', 'No.', '0'], correctAnswer: 'I’m the bottom bird!' }
    ]
  },
  {
    order: 27,
    title: 'Lowest Common Ancestor (BT)',
    desc: 'Finding the first shared parent of two nodes in a Binary Tree.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Family Roots! Where do the paths of two birds first meet as they fly toward the root? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Recurse! If root is NULL or is one of the birds, return root. Search Left and Right. If both branches return a bird, the current root is the LCA! 🦜"', codeSnippet: 'Node* LCA(Node* root, Node* p, Node* q) {\n  if(!root || root == p || root == q) return root;\n  Node* L = LCA(root->left, p, q);\n  Node* R = LCA(root->right, p, q);\n  if(L && R) return root;\n  return L ? L : R;\n}' },
      { type: 'multiple_choice', questionText: 'Complexity of finding LCA in a Binary Tree?', options: ['O(N)', 'O(log N)', 'O(log Height)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match LCA scenarios!', pairs: [{key: 'L and R non-NULL', value: 'Root is LCA'}, {key: 'One is NULL', value: 'Return the other'}, {key: 'Both NULL', value: 'Return NULL'}] },
      { type: 'programming_board', questionText: 'Return the current bird if it is one of the targets.', codeSnippet: 'if (root == p ___ root == q) return root;', correctAnswer: '||' },
      { type: 'teaching', questionText: '🦜 Pico: "By returning the bird we found up the chain, we can identify the meeting point instantly. O(N) time! 🦜"' },
      { type: 'multiple_choice', questionText: 'LCA of 2 and 3 in [1(2,3)]?', options: ['1', '2', '3'], correctAnswer: '1' },
      { type: 'code_fill_in', questionText: 'Recursive call for right LCA.', codeSnippet: 'R = LCA(root->___, p, q);', correctAnswer: 'right' },
      { type: 'teaching', questionText: '🦜 Pico: "Meeting at the crossroads! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are we family?"', options: ['Common roots!', 'No.', '0'], correctAnswer: 'Common roots!' }
    ]
  },
  {
    order: 28,
    title: 'Lowest Common Ancestor (BST)',
    desc: 'Fast LCA search in a Binary Search Tree.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Elite Ancestry! In a BST, we can find the LCA without checking every nest. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "If both birds are SMALLER than root, go Left. If both are LARGER, go Right. Otherwise, the current root IS the LCA! 🦜"', codeSnippet: 'Node* LCA(Node* root, int p, int q) {\n  if(p < root->data && q < root->data) return LCA(root->left, p, q);\n  if(p > root->data && q > root->data) return LCA(root->right, p, q);\n  return root;\n}' },
      { type: 'multiple_choice', questionText: 'Complexity of LCA in a balanced BST?', options: ['O(log N)', 'O(N)', 'O(1)'], correctAnswer: 'O(log N)' },
      { type: 'match_following', questionText: 'Match BST LCA rules!', pairs: [{key: 'P < R && Q < R', value: 'LCA in Left'}, {key: 'P > R && Q > R', value: 'LCA in Right'}, {key: 'Split', value: 'Current is LCA'}] },
      { type: 'programming_board', questionText: 'Condition where the current node is the meeting point.', codeSnippet: 'If (p <= root->data && q ___ root->data) return root;', correctAnswer: '>=' },
      { type: 'teaching', questionText: '🦜 Pico: "O(Height) time. The organization of the forest makes the search direct and fast! 🦜"' },
      { type: 'multiple_choice', questionText: 'LCA of 5 and 15 in BST root 10?', options: ['10', '5', '15'], correctAnswer: '10' },
      { type: 'code_fill_in', questionText: 'Recursive call to search left.', codeSnippet: 'return LCA(root->___, p, q);', correctAnswer: 'left' },
      { type: 'teaching', questionText: '🦜 Pico: "Quick lineage! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Did I find it fast?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 29,
    title: 'Construction (In-Pre)',
    desc: 'Building a Binary Tree from Inorder and Preorder traversals.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Tree Builder! Given Preorder: [1, 2, 4, 3, 5] and Inorder: [4, 2, 1, 3, 5], rebuild the forest. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "1: Preorder[0] is ROOT. 2: Find Root in Inorder to split Left/Right. 3: Recurse! 🦜"', codeSnippet: 'root = new Node(pre[pIdx++]);\nint m = find(in, root->val);\nroot->left = build(in, pre, inStart, m-1);\nroot->right = build(in, pre, m+1, inEnd);' },
      { type: 'multiple_choice', questionText: 'Which traversal always gives the Root order?', options: ['Preorder', 'Inorder', 'Postorder'], correctAnswer: 'Preorder' },
      { type: 'match_following', questionText: 'Match Builder Logic!', pairs: [{key: 'Preorder[0]', value: 'Root'}, {key: 'Inorder Split', value: 'Child boundaries'}, {key: 'Map', value: 'O(1) Inorder find'}] },
      { type: 'programming_board', questionText: 'Find the root index `m` in the inorder array.', codeSnippet: 'm = map[___];', correctAnswer: 'root->val' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N) if using a hash map to find inorder indices. O(Height) space. 🦜"' },
      { type: 'multiple_choice', questionText: 'Can we build a unique tree from Inorder and Postorder?', options: ['Yes', 'No', 'If Pico helps'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Increment preorder index global.', codeSnippet: 'pIdx___;', correctAnswer: '++' },
      { type: 'teaching', questionText: '🦜 Pico: "Architect of the woods! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is the tree reborn?"', options: ['Perfectly reconstructed!', 'No.', '0'], correctAnswer: 'Perfectly reconstructed!' }
    ]
  },
  {
    order: 30,
    title: 'Intermediate Master Point',
    desc: 'Reflecting on the Intermediate Tree stage.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "INTERMEDIATE STAGE COMPLETE! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Views, Balance, Diameter, and Ancestry. You are seeing the forest clearly now! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is the complexity of Height-Balance check (Optimized)?', options: ['O(N)', 'O(N^2)'], correctAnswer: 'O(N)' },
      { type: 'multiple_choice', questionText: 'Which view overwrites the map?', options: ['Bottom', 'Top'], correctAnswer: 'Bottom' },
      { type: 'multiple_choice', questionText: 'LCA in BST complexity?', options: ['O(log N)', 'O(N)'], correctAnswer: 'O(log N)' },
      { type: 'multiple_choice', questionText: 'Inorder of BST property?', options: ['Sorted', 'Random'], correctAnswer: 'Sorted' },
      { type: 'multiple_choice', questionText: 'Preorder sequence hint?', options: ['Root-Left-Right', 'Left-Right-Root'], correctAnswer: 'Root-Left-Right' },
      { type: 'match_following', questionText: 'Master Pivot Match!', pairs: [{key: 'Silhouettes', value: 'Viewed!'}, {key: 'Ancestry', value: 'Found!'}, {key: 'Pico', value: 'Salutes!'}] },
      { type: 'teaching', questionText: '🦜 Pico: "Final 10 units of Intermediate Trees: Construction from Postorder, Path Sums, and the Symmetrical Woods! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you ready for the final climb?"', options: ['BEYOND AND UP!', 'Wait...', '0'], correctAnswer: 'BEYOND AND UP!' }
    ]
  }
];

module.exports = stage2_part1;

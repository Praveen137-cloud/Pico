const stage1_part1 = [
  {
    order: 1,
    title: 'The Infinite Branch (Trees)',
    desc: 'Introduction to Tree data structures.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Expanding the Forest! Think of a tree as a family of nests. One ROOT at the top, and branches that split into children below! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Unlike stacks or queues, trees are hierarchical. A node can have multiple children, but only ONE parent! 🦜"', codeSnippet: 'struct Node {\n  int data;\n  vector<Node*> children;\n};' },
      { type: 'multiple_choice', questionText: 'What is the top-most node of a tree called?', options: ['Root', 'Stem', 'Cap'], correctAnswer: 'Root' },
      { type: 'match_following', questionText: 'Match Tree Terms!', pairs: [{key: 'Leaf', value: 'No children'}, {key: 'Edge', value: 'Connection link'}, {key: 'Parent', value: 'One level above'}] },
      { type: 'programming_board', questionText: 'Term for nodes with the same parent.', codeSnippet: 'Birds in the same nest are called ___;', correctAnswer: 'siblings' },
      { type: 'teaching', questionText: '🦜 Pico: "Trees are everywhere—from your computer folders to the way we classify species in the forest! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can a tree have a cycle?', options: ['No (Cycles mean it is a graph)', 'Yes', 'Only on weekends'], correctAnswer: 'No (Cycles mean it is a graph)' },
      { type: 'code_fill_in', questionText: 'Initialize a node with data.', codeSnippet: 'newNode->data = ___;', correctAnswer: 'val' },
      { type: 'teaching', questionText: '🦜 Pico: "Growing tall! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the root?"', options: ['The king of the forest!', 'No.', '0'], correctAnswer: 'The king of the forest!' }
    ]
  },
  {
    order: 2,
    title: 'Dual-Path (Binary Trees)',
    desc: 'Introduction to Binary Trees.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Binary Split! A binary tree is a special nest where each bird can have at most TWO children: Left and Right. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "This simple split allows for extremely fast searching and sorting as the tree grows. 🦜"', codeSnippet: 'struct Node {\n  int data;\n  Node* left;\n  Node* right;\n};' },
      { type: 'multiple_choice', questionText: 'Maximum number of children in a Binary Tree?', options: ['2', '1', 'Unlimited'], correctAnswer: '2' },
      { type: 'match_following', questionText: 'Match Binary Parts!', pairs: [{key: 'Left', value: 'First child'}, {key: 'Right', value: 'Second child'}, {key: 'NULL', value: 'Empty branch'}] },
      { type: 'programming_board', questionText: 'Pointer to the left child of a node `n`.', codeSnippet: 'n->___ ;', correctAnswer: 'left' },
      { type: 'teaching', questionText: '🦜 Pico: "Every branch is a potential sub-tree. Recursion is the natural language of trees! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can a node in a binary tree have only one child?', options: ['Yes', 'No', 'If it’s the root'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Check if current node is a leaf.', codeSnippet: 'if (n->left == NULL && n->___ == NULL)', correctAnswer: 'right' },
      { type: 'teaching', questionText: '🦜 Pico: "Symmetry in the branches! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I a binary bird?"', options: ['Always two options!', 'No.', '0'], correctAnswer: 'Always two options!' }
    ]
  },
  {
    order: 3,
    title: 'Inorder Exploration',
    desc: 'Depth-First Search: Left -> Root -> Right.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Inorder Flight! We visit the LEFT sub-tree first, then the ROOT, then the RIGHT sub-tree. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "In a Binary Search Tree, Inorder traversal gives you the birds in SORTED order! 🦜"', codeSnippet: 'void inorder(Node* root) {\n  if(!root) return;\n  inorder(root->left);\n  cout << root->data << " ";\n  inorder(root->right);\n}' },
      { type: 'multiple_choice', questionText: 'Inorder sequence for [Root=10, Left=5, Right=15]?', options: ['5, 10, 15', '10, 5, 15', '15, 10, 5'], correctAnswer: '5, 10, 15' },
      { type: 'match_following', questionText: 'Match Inorder steps!', pairs: [{key: 'Step 1', value: 'Recurse Left'}, {key: 'Step 2', value: 'Process Current'}, {key: 'Step 3', value: 'Recurse Right'}] },
      { type: 'programming_board', questionText: 'Recursive call to visit the left side.', codeSnippet: 'inorder(root->___);', correctAnswer: 'left' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N) time and O(Height) space for the recursive call-stack! 🦜"' },
      { type: 'multiple_choice', questionText: 'Inorder of a BST is always?', options: ['Sorted', 'Reversed', 'Random'], correctAnswer: 'Sorted' },
      { type: 'code_fill_in', questionText: 'Process the root data.', codeSnippet: 'visit(root->___);', correctAnswer: 'data' },
      { type: 'teaching', questionText: '🦜 Pico: "Orderly and peaceful! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I inorder?"', options: ['Following the path!', 'No.', '0'], correctAnswer: 'Following the path!' }
    ]
  },
  {
    order: 4,
    title: 'Preorder Command',
    desc: 'Depth-First Search: Root -> Left -> Right.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Preorder Command! We visit the ROOT first, then the children. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Great for copying the tree or creating a prefix expression from an expression tree! 🦜"', codeSnippet: 'void preorder(Node* root) {\n  if(!root) return;\n  cout << root->data << " ";\n  preorder(root->left);\n  preorder(root->right);\n}' },
      { type: 'multiple_choice', questionText: 'Preorder sequence for [Root=1, Left=2, Right=3]?', options: ['1, 2, 3', '2, 1, 3', '3, 2, 1'], correctAnswer: '1, 2, 3' },
      { type: 'match_following', questionText: 'Match Preorder steps!', pairs: [{key: 'Step 1', value: 'Process Current'}, {key: 'Step 2', value: 'Recurse Left'}, {key: 'Step 3', value: 'Recurse Right'}] },
      { type: 'programming_board', questionText: 'Recursive call to visit the right side.', codeSnippet: 'preorder(root->___);', correctAnswer: 'right' },
      { type: 'teaching', questionText: '🦜 Pico: "Again, O(N) time. The root always comes first in every sub-flight! 🦜"' },
      { type: 'multiple_choice', questionText: 'Which traversal is used for prefix notation?', options: ['Preorder', 'Inorder', 'Postorder'], correctAnswer: 'Preorder' },
      { type: 'code_fill_in', questionText: 'Base case for recursion.', codeSnippet: 'if (root == ___) return;', correctAnswer: 'NULL' },
      { type: 'teaching', questionText: '🦜 Pico: "Leading the flock! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I preorder?"', options: ['The first choice!', 'No.', '0'], correctAnswer: 'The first choice!' }
    ]
  },
  {
    order: 5,
    title: 'Postorder Cleanup',
    desc: 'Depth-First Search: Left -> Right -> Root.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Postorder Cleanup! We visit both children first, and then the ROOT. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Perfect for deleting a tree or calculating the total size of branches! 🦜"', codeSnippet: 'void postorder(Node* root) {\n  if(!root) return;\n  postorder(root->left);\n  postorder(root->right);\n  cout << root->data << " ";\n}' },
      { type: 'multiple_choice', questionText: 'Postorder sequence for [Root=10, Left=5, Right=15]?', options: ['5, 15, 10', '10, 5, 15', '5, 10, 15'], correctAnswer: '5, 15, 10' },
      { type: 'match_following', questionText: 'Match Postorder steps!', pairs: [{key: 'Step 1', value: 'Recurse Left'}, {key: 'Step 2', value: 'Recurse Right'}, {key: 'Step 3', value: 'Process Current'}] },
      { type: 'programming_board', questionText: 'Root processing index.', codeSnippet: 'Postorder visits the root ____ ;', correctAnswer: 'last' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time. This ensures you know everything about the children before you decide anything about the parent! 🦜"' },
      { type: 'multiple_choice', questionText: 'Which traversal is used for postfix notation?', options: ['Postorder', 'Inorder', 'Preorder'], correctAnswer: 'Postorder' },
      { type: 'code_fill_in', questionText: 'Left recursive call.', codeSnippet: 'postorder(root->___);', correctAnswer: 'left' },
      { type: 'teaching', questionText: '🦜 Pico: "Watching the nest grow! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I postorder?"', options: ['The final word!', 'No.', '0'], correctAnswer: 'The final word!' }
    ]
  },
  {
    order: 6,
    title: 'Tree Altitude (Height)',
    desc: 'Calculating the height and depth of a tree.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "How high do the nests go? The Height is the longest path from the Root to a Leaf bird. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Height = `1 + max(Height(Left), Height(Right))`. A single root has height 1 (or 0, depending on the woods). 🦜"', codeSnippet: 'int height(Node* root) {\n  if(!root) return 0;\n  return 1 + max(height(root->left), height(root->right));\n}' },
      { type: 'multiple_choice', questionText: 'Height of an empty tree?', options: ['0', '1', '-1'], correctAnswer: '0' },
      { type: 'match_following', questionText: 'Match Altitude logic!', pairs: [{key: 'Base Case', value: 'Return 0'}, {key: 'max()', value: 'Compare branches'}, {key: '1 +', value: 'Count current level'}] },
      { type: 'programming_board', questionText: 'Function to find the taller branch.', codeSnippet: 'h = 1 + ___ (hl, hr);', correctAnswer: 'max' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N) because we must visit every nest to check its height. 🦜"' },
      { type: 'multiple_choice', questionText: 'Height of a tree with only Root?', options: ['1', '0', '2'], correctAnswer: '1' },
      { type: 'code_fill_in', questionText: 'Recursive call for right height.', codeSnippet: 'hr = height(root->___);', correctAnswer: 'right' },
      { type: 'teaching', questionText: '🦜 Pico: "Reaching for the sky! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the max height?"', options: ['Leading the canopy!', 'No.', '0'], correctAnswer: 'Leading the canopy!' }
    ]
  },
  {
    order: 7,
    title: 'The Search Tree (BST)',
    desc: 'Introduction to Binary Search Trees.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Organized Forest! In a Binary Search Tree, smaller birds go LEFT, and bigger birds go RIGHT. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "This organization lets you find any bird in O(log N) time if the tree is balanced! 🦜"', codeSnippet: 'bool search(Node* root, int x) {\n  if(!root) return false;\n  if(root->data == x) return true;\n  if(x < root->data) return search(root->left, x);\n  return search(root->right, x);\n}' },
      { type: 'multiple_choice', questionText: 'Where does 5 go relative to a root of 10 in a BST?', options: ['Left', 'Right', 'Bottom'], correctAnswer: 'Left' },
      { type: 'match_following', questionText: 'Match BST Rules!', pairs: [{key: 'Smaller', value: 'Go Left'}, {key: 'Larger', value: 'Go Right'}, {key: 'Search', value: 'Binary division'}] },
      { type: 'programming_board', questionText: 'Condition to search the right side.', codeSnippet: 'if (x ___ root->data) return search(root->right, x);', correctAnswer: '>' },
      { type: 'teaching', questionText: '🦜 Pico: "This is exactly like Binary Search in an array, but inside a living tree! 🦜"' },
      { type: 'multiple_choice', questionText: 'Minimum value in a BST?', options: ['Left-most node', 'Right-most node', 'Root'], correctAnswer: 'Left-most node' },
      { type: 'code_fill_in', questionText: 'Initialize a new node.', codeSnippet: 'if (root == NULL) return ___(val);', correctAnswer: 'newNode' },
      { type: 'teaching', questionText: '🦜 Pico: "Strategic placement! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I in the right sub-tree?"', options: ['Only if I’m bigger!', 'No.', '0'], correctAnswer: 'Only if I’m bigger!' }
    ]
  },
  {
    order: 8,
    title: 'BST Cultivation',
    desc: 'Inserting into a Binary Search Tree.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Planting new seeds! Insertion in a BST must follow the same Left/Right rules. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Follow the path until you hit an empty nest (NULL), then place the new bird there! 🦜"', codeSnippet: 'Node* insert(Node* root, int x) {\n  if(!root) return new Node(x);\n  if(x < root->data) root->left = insert(root->left, x);\n  else root->right = insert(root->right, x);\n  return root;\n}' },
      { type: 'multiple_choice', questionText: 'Time complexity for insertion in a balanced BST?', options: ['O(log N)', 'O(N)', 'O(1)'], correctAnswer: 'O(log N)' },
      { type: 'match_following', questionText: 'Match Insertion Flows!', pairs: [{key: 'Base Case', value: 'Place new node'}, {key: 'Greater', value: 'Recurse Right'}, {key: 'Links', value: 'Update parent pointers'}] },
      { type: 'programming_board', questionText: 'Connect the new node to the left child.', codeSnippet: 'root->left = ___(root->left, val);', correctAnswer: 'insert' },
      { type: 'teaching', questionText: '🦜 Pico: "In the worst case (a skewed tree), insertion becomes O(N). We will learn to BALANCE the forest later! 🦜"' },
      { type: 'multiple_choice', questionText: 'Does BST allow duplicate keys?', options: ['Usually No', 'Always Yes', 'Pico rule'], correctAnswer: 'Usually No' },
      { type: 'code_fill_in', questionText: 'Set result to parent.', codeSnippet: 'return ___;', correctAnswer: 'root' },
      { type: 'teaching', questionText: '🦜 Pico: "A growing habitat! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I the newest node?"', options: ['Just arrived!', 'No.', '0'], correctAnswer: 'Just arrived!' }
    ]
  },
  {
    order: 9,
    title: 'Tree Blueprints',
    desc: 'Array vs Linked List representation.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Blueprint Basics! How do we actually store trees in the bird-brain computer? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Linked List (Standard): Nodes with pointers. Array: Root at `i`, Left at `2i+1`, Right at `2i+2`! 🦜"', codeSnippet: 'LeftChild(i) = 2*i + 1;\nRightChild(i) = 2*i + 2;\nParent(i) = (i-1) / 2;' },
      { type: 'multiple_choice', questionText: 'In an array representation, if parent is at index 0, where is the right child?', options: ['2', '1', 'Root'], correctAnswer: '2' },
      { type: 'match_following', questionText: 'Match Representations!', pairs: [{key: 'Linked List', value: 'Flexible & Dynamic'}, {key: 'Array', value: 'Space-waste if skewed'}, {key: 'Heaps', value: 'Always use arrays'}] },
      { type: 'programming_board', questionText: 'Math to find the parent index in an array.', codeSnippet: 'parent = (i ___ 1) / 2;', correctAnswer: '-' },
      { type: 'teaching', questionText: '🦜 Pico: "Arrays are only good for FULL or COMPLETE binary trees. Otherwise, there are many empty nests (NULLs) in the middle! 🦜"' },
      { type: 'multiple_choice', questionText: 'Indices for Left/Right of index 5?', options: ['11 and 12', '10 and 11', '6 and 7'], correctAnswer: '11 and 12' },
      { type: 'code_fill_in', questionText: 'Calculate left child index.', codeSnippet: 'lc = ___ * i + 1;', correctAnswer: '2' },
      { type: 'teaching', questionText: '🦜 Pico: "Mapping the woods! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I in the array?"', options: ['Index-perfect!', 'No.', '0'], correctAnswer: 'Index-perfect!' }
    ]
  },
  {
    order: 10,
    title: 'Master Point (Foundation)',
    desc: 'Reflecting on the Tree Basics.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "FOUNDATION HALFWAY! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Root, Leaf, Left, Right, and the three DFS flights (In, Pre, Post). 🦜"' },
      { type: 'multiple_choice', questionText: 'Which traversal is Root-first?', options: ['Preorder', 'Postorder'], correctAnswer: 'Preorder' },
      { type: 'multiple_choice', questionText: 'Which traversal is Root-last?', options: ['Postorder', 'Inorder'], correctAnswer: 'Postorder' },
      { type: 'multiple_choice', questionText: 'BST Search complexity (balanced)?', options: ['O(log N)', 'O(N)'], correctAnswer: 'O(log N)' },
      { type: 'multiple_choice', questionText: 'Array Right child of `i`?', options: ['2i+2', '2i+1'], correctAnswer: '2i+2' },
      { type: 'multiple_choice', questionText: 'Height calculation base?', options: ['1 + max(L, R)', 'L + R'], correctAnswer: '1 + max(L, R)' },
      { type: 'match_following', questionText: 'Master Pivot Match!', pairs: [{key: 'Pointers', value: 'Solid!'}, {key: 'Traversals', value: 'Mapped!'}, {key: 'Pico', value: 'Amazed!'}] },
      { type: 'teaching', questionText: '🦜 Pico: "Final 10 units of Foundation: Mirrored Nests, Identical Twins, and the BFS Level-Order Flight! SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Are you ready to climb higher?"', options: ['BEYOND AND UP!', 'Wait...', '0'], correctAnswer: 'BEYOND AND UP!' }
    ]
  }
];

module.exports = stage1_part1;

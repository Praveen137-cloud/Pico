const curriculumData = {
  "Basics": {
    "icon": "🐣",
    "concepts": [
      { "name": "Variable Mastery", "point": "Variables store data. Think of them as labeled boxes in your birdhouse.", "code": "int seeds = 10;" },
      { "name": "Conditional Logic", "point": "If-statements act like forks in the road. If (fruit) then (eat)!", "code": "if (seeds > 0) { eat(); }" },
      { "name": "The Loop Life", "point": "Repeat actions without getting dizzy. For-loops are your flight path.", "code": "for (int i=0; i<10; i++) { flap(); }" },
       // ... Many more will be added by the generator logic
    ],
    "quizzes": [
      { "q": "What stores an integer in C?", "a": "int", "options": ["int", "char", "float", "bird"] },
      { "q": "Syntax for 'If'?", "a": "if(condition)", "options": ["if condition", "if(condition)", "when(condition)", "fly(if)"] }
    ]
  },
  "Arrays": {
     "icon": "🗄️",
     "concepts": [
        { "name": "Contiguous Memory", "point": "Arrays are like a row of bird nests, all perfectly lined up and touching.", "code": "int nests[5];" },
        { "name": "Indexing starts at 0", "point": "In Array-land, the first nest is actually nest 0. Don't fall out!", "code": "nests[0] = 1;" },
        { "name": "Linear Search", "point": "Searching for a seed? Start at 0 and go to N. It's safe but slow.", "code": "for(int i=0; i<N; i++) if(A[i]==X) return i;" }
     ],
     "quizzes": [
        { "q": "Array index starts at?", "a": "0", "options": ["1", "0", "-1", "NaN"] },
        { "q": "Search complexity of an unsorted array?", "a": "O(N)", "options": ["O(1)", "O(log N)", "O(N)", "O(N^2)"] }
     ]
  },
  "Linked Lists": {
     "icon": "🔗",
     "concepts": [
        { "name": "Node Dynamics", "point": "Linked lists are nodes held together by pointers—like birds holding talons.", "code": "struct Node { int data; struct Node* next; };" },
        { "name": "The NULL terminator", "point": "The last bird points to NULL. That's the end of the flight path.", "code": "current->next = NULL;" },
        { "name": "Insertion O(1)", "point": "Adding a bird to the front is instant. Just update the talon grip!", "code": "new_node->next = head; head = new_node;" }
     ],
     "quizzes": [
        { "q": "Node points to?", "a": "Next Node", "options": ["Prev Node", "Next Node", "NULL only", "Array"] },
        { "q": "Linked list access complexity?", "a": "O(N)", "options": ["O(1)", "O(log N)", "O(N)", "O(N^2)"] }
     ]
  },
  "Trees": {
     "icon": "🌳",
     "concepts": [
        { "name": "Root & Branches", "point": "Trees have a Root (Top) and Leaves (Bottom). Unlike real trees, we start from the top!", "code": "struct Node* root = createNode(10);" },
        { "name": "Binary Search Tree", "point": "Left is smaller, Right is larger. It's the ultimate filing cabinet.", "code": "if(val < node->data) search(node->left, val);" }
     ],
     "quizzes": [
        { "q": "Root of a tree is at?", "a": "The Top", "options": ["The Bottom", "The Top", "The Middle", "The Leaves"] },
        { "q": "BST search complexity?", "a": "O(log N)", "options": ["O(1)", "O(log N)", "O(N)", "O(N^2)"] }
     ]
  },
  "Graphs": {
     "icon": "🕸️",
     "concepts": [
        { "name": "Vertices & Edges", "point": "A graph is a network of nodes (Vertices) and connections (Edges).", "code": "Graph G = (V, E);" },
        { "name": "BFS Exploration", "point": "Explore level by level. It's like finding a seed by searching every nest in order.", "code": "queue.push(root); while(!queue.empty()){...}" }
     ],
     "quizzes": [
        { "q": "What defines a graph edge?", "a": "A connection", "options": ["A node", "A connection", "A loop", "A color"] },
        { "q": "BFS uses what structure?", "a": "Queue", "options": ["Stack", "Queue", "Array", "Tree"] }
     ]
  },
  "Recursion": {
     "icon": "🔄",
     "concepts": [
        { "name": "Base Case", "point": "Without a base case, recursion is a never-ending loop of fruit parties.", "code": "if (n == 0) return 1;" },
        { "name": "Recursive Call", "point": "A function calls itself. It's like a bird dreaming it's a bird dreaming.", "code": "return n * factorial(n-1);" }
     ],
     "quizzes": [
        { "q": "Essential for stopping recursion?", "a": "Base Case", "options": ["Loop", "Base Case", "Return 0", "Birdhouse"] },
        { "q": "Recursion uses what system structure?", "a": "Stack", "options": ["Queue", "Stack", "Heap", "Array"] }
     ]
  },
  "Zoho Elite": {
     "icon": "🦁",
     "concepts": [
        { "name": "Real Interview: String Expansion", "point": "Expand a3b2 to aaabb. It's a classic Zoho challenge!", "code": "while(isdigit(s[i])) count = count*10 + (s[i]-'0');" },
        { "q": "Pattern: Snake Matrix", "point": "Print numbers in a snake pattern. It's all about index logic.", "code": "if(row%2 == 0) for(int j=0; j<N; j++);" }
     ],
     "quizzes": [
        { "q": "Complexity of 'a3b2' expansion?", "a": "O(Total Chars)", "options": ["O(1)", "O(N)", "O(Total Chars)", "O(N^2)"] },
        { "q": "Zoho often asks for which structure?", "a": "Patterns/Matrices", "options": ["Graphs", "DP", "Patterns/Matrices", "Tries"] }
     ]
  }
  // ... (Library will be expanded by the script)
};

module.exports = curriculumData;

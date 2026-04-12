module.exports = {
  "Linked Lists": {
    icon: "🔗",
    sections: [
      {
        title: "Stage 1: Pointers in Action",
        units: [
          {
            title: "Unit 1: The Node Chain",
            desc: "Understanding nodes and memory mapping.",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'Arrays are rigid blocks of memory. Linked Lists are flexible! They are scattered pieces of memory linked by arrows.'" },
              { type: 'teaching', questionText: "🦜 Pico: 'The Node!'\n\nA Node holds two things: The Data (num), and a Pointer (arrow) to the next Node.'", codeSnippet: "struct Node {\n  int data;\n  struct Node* next;\n};" },
              { type: 'teaching', questionText: "🦜 Pico: 'The Head and Tail!'\n\nThe first node is called the HEAD. If you lose the Head, you lose the entire list! The last node points to NULL.'", codeSnippet: "head -> [10] -> [20] -> [30] -> NULL" },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'What happens if you accidentally delete the HEAD pointer before saving a reference to the next node?'", options: ["Nothing happens", "The list reverses", "Memory Leak / List Lost", "The program fixes it"], correctAnswer: "Memory Leak / List Lost", explanation: "Correct! If nothing points to the list, the memory is lost forever in space." },
              { type: 'programming_board', questionText: "🦜 Pico: 'What does the last node point to?'", codeSnippet: "tailNode->next = ___;" }
            ]
          }
        ]
      }
    ]
  },
  "Trees": {
    icon: "🌳",
    sections: [
      {
        title: "Stage 1: Branching Out",
        units: [
          {
            title: "Unit 1: Binary Trees",
            desc: "Hierarchical data structures.",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'Real trees start at the bottom. Computer trees start at the top!'" },
              { type: 'teaching', questionText: "🦜 Pico: 'The Root and Leaves!'\n\nThe top node is the ROOT. Nodes with no children are LEAVES. A Binary Tree means each node has at most 2 children.'", codeSnippet: "      [ROOT]\n     /      \\\n  [Left]   [Right]" },
              { type: 'teaching', questionText: "🦜 Pico: 'Binary Search Trees (BST)!'\n\nIn a BST, everything on the left is SMALLER than the root, and everything on the right is LARGER.'", codeSnippet: "       [10]\n      /    \\\n    [5]    [15]" },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'In a valid Binary Search Tree with a root of 50, where would the number 60 be placed?'", options: ["Left subtree", "Right subtree", "Above the root", "Anywhere"], correctAnswer: "Right subtree", explanation: "Correct! 60 > 50, so it must go to the Right subtree." },
              { type: 'programming_board', questionText: "🦜 Pico: 'Fill in the code for a Binary Tree node structure.'", codeSnippet: "struct Node {\n  int data;\n  struct Node* ___;\n  struct Node* ___;\n};" }
            ]
          }
        ]
      }
    ]
  },
  "Graphs": {
    icon: "🕸️",
    sections: [
      {
        title: "Stage 1: The Network",
        units: [
          {
            title: "Unit 1: Vertices and Edges",
            desc: "Modeling real-world connections.",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'A Graph is a set of Vertices (nodes) connected by Edges (lines). Like cities connected by roads!'" },
              { type: 'teaching', questionText: "🦜 Pico: 'Directed vs Undirected!'\n\nIf an edge has an arrow (one-way road), it's DIRECTED. If it's a plain line (two-way road), it's UNDIRECTED.'", codeSnippet: "[A] -> [B] // Directed\n[A] -- [B] // Undirected" },
              { type: 'teaching', questionText: "🦜 Pico: 'Breadth First Search (BFS)!'\n\nBFS explores the graph layer by layer, like a ripple in a pond. It uses a Queue!'", codeSnippet: "queue.enqueue(startNode);\nwhile(!queue.isEmpty()) {\n  // explore\n}" },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'Which data structure is required to implement Breadth First Search (BFS)?'", options: ["Stack", "Array", "Linked List", "Queue"], correctAnswer: "Queue", explanation: "Correct! A Queue ensures you explore nodes in the exact order you discovered them (FIFO)." },
              { type: 'programming_board', questionText: "🦜 Pico: 'What's the acronym for moving layer-by-layer through a graph?'", codeSnippet: "String algo = \"___\"; // Breadth First Search" }
            ]
          }
        ]
      }
    ]
  },
  "Heaps": {
    icon: "🏔️",
    sections: [
      {
        title: "Stage 1: Priority Access",
        units: [
          {
            title: "Unit 1: The Max Heap",
            desc: "Keeping the largest elements at the top.",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'A Heap is a special tree where the ROOT is always the largest (Max Heap) or smallest (Min Heap) item!'" },
              { type: 'teaching', questionText: "🦜 Pico: 'Priority Queues!'\n\nHeaps are often used to implement Priority Queues. It's like the emergency room: whoever needs help most jumps to the front of the line!'", codeSnippet: "PriorityQueue<Integer> pq = new PriorityQueue<>();\npq.add(10);\npq.add(50); // 50 jumps to the front if Max Priority!" },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'In a Max Heap, where is the absolute largest element located?'", options: ["A leaf node", "The right child", "The root", "The left child"], correctAnswer: "The root", explanation: "Correct! The defining property of a Max Heap is that the parent is always greater than its children, putting the absolute max at the root." }
            ]
          }
        ]
      }
    ]
  }
};

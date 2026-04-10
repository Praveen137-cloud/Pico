const stage3 = [
  {
    order: 41,
    title: 'Dual-Heap Balance',
    desc: 'Deep dive into the Running Median algorithm efficiency.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Dynamic Center! While we know the theory of two heaps, managing them in a real-time stream requires precise balance! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Rule: Max-Heap (Left) size >= Min-Heap (Right) size. Max difference must be 1. 🦜"', codeSnippet: 'void add(int num) {\n  left.push(num);\n  right.push(left.pop());\n  if(right.size() > left.size()) left.push(right.pop());\n}' },
      { type: 'multiple_choice', questionText: 'If we have 5 elements, and left size is 3, right size is 2, where is the median?', options: ['left.top()', 'right.top()', 'Average'], correctAnswer: 'left.top()' },
      { type: 'match_following', questionText: 'Match Dual-Heap states!', pairs: [{key: 'Left Size > Right', value: 'Median = Left Root'}, {key: 'Left Size == Right', value: 'Median = (L+R)/2'}, {key: 'Balanced', value: 'Absolute Diff <= 1'}] },
      { type: 'programming_board', questionText: 'If the difference between sizes becomes ___, we must rebalance.', codeSnippet: 'if (abs(sizeL - sizeR) > ___ ) rebalance();', correctAnswer: '1' },
      { type: 'teaching', questionText: 'By Pico: "Complexity: O(log N) per add. O(1) per median query! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is this faster than sorting every time?', options: ['SQUAWK YES! (Log N vs N log N)', 'No', '0'], correctAnswer: 'SQUAWK YES! (Log N vs N log N)' },
      { type: 'code_fill_in', questionText: 'Pop from largest.', codeSnippet: 'left.push(right. ___ ());', correctAnswer: 'pop' },
      { type: 'teaching', questionText: 'By Pico: "Equilibrium achieved! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the stream centered?"', options: ['Steady median!', 'No.', '0'], correctAnswer: 'Steady median!' }
    ]
  },
  {
    order: 42,
    title: 'The Greedy Refuel',
    desc: 'Minimum number of refuel stops to reach a target using a Max-Heap.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Long Migration! Your bird needs to fly 1000 miles. You have initial fuel, and there are fuel stations along the way. Minimize stops! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Greedy Strategy: Fly until you run out of fuel. At that point, you WISH you had stopped at the station with the MOST fuel behind you! Use a Max-Heap! 🦜"', codeSnippet: 'while (currFuel < target) {\n  while (stationsAvailable) pq.push(stations[i].fuel);\n  if (pq.empty()) return -1;\n  currFuel += pq.pop();\n  stops++;\n}' },
      { type: 'multiple_choice', questionText: 'Why use a MAX-HEAP for refuel stops?', options: ['To pick the station that gives most fuel', 'To pick closest station', 'Parrot rule'], correctAnswer: 'To pick the station that gives most fuel' },
      { type: 'match_following', questionText: 'Match Fuel logic!', pairs: [{key: 'Max-Heap', value: 'Reserve gas options'}, {key: 'Stops++', value: 'Optimal decision'}, {key: 'PQ empty', value: 'Failure/Out of gas'}] },
      { type: 'programming_board', questionText: 'Heap stores fuel from stations we ___ but didn\'t use yet.', codeSnippet: 'Status = ___ ;', correctAnswer: 'passed' },
      { type: 'teaching', questionText: 'By Pico: "O(N log N). Because we only stop when absolutely necessary and always pick the best option! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is the complexity if N stations are available?', options: ['O(N log N)', 'O(N)', 'O(1)'], correctAnswer: 'O(N log N)' },
      { type: 'code_fill_in', questionText: 'Add fuel to tank.', codeSnippet: 'dist += pq. ___ ();', correctAnswer: 'pop' },
      { type: 'teaching', questionText: 'By Pico: "Optimal flight! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Did the bird reach the destination?"', options: ['Target reached!', 'No.', '0'], correctAnswer: 'Target reached!' }
    ]
  },
  {
    order: 43,
    title: 'The Matrix Hunter',
    desc: 'Finding the K-th smallest element in a Row-Column sorted matrix (2D Heap Search).',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Grid! A square field where every row and every column is sorted in ascending order. Find the K-th smallest seed! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use a Min-Heap of size N. Push the first element of each row. Pop the min, and push its neighbor from the same row! 🦜"', codeSnippet: 'pq.push({matrix[i][0], i, 0});\nfor(int i=0; i<k-1; i++) {\n  curr = pq.pop();\n  if(curr.col + 1 < n) pq.push({matrix[curr.row][curr.col+1], ...});\n}' },
      { type: 'multiple_choice', questionText: 'Complexity of finding K-th smallest in N x N matrix?', options: ['O(K log N)', 'O(N^2)', 'O(log K)'], correctAnswer: 'O(K log N)' },
      { type: 'match_following', questionText: 'Match Matrix Search roles!', pairs: [{key: 'Min-Heap', value: 'Frontier search'}, {key: 'RowIdx', value: 'Source identification'}, {key: 'Neighbor', value: 'Next candidate'}] },
      { type: 'programming_board', questionText: 'The heap size is limited by the number of ___.', codeSnippet: 'Limit = ___ ;', correctAnswer: 'rows' },
      { type: 'teaching', questionText: 'By Pico: "This is a 2D variation of the K-way merge. Very elite! 🦜"' },
      { type: 'multiple_choice', questionText: 'If K=1, what is the answer?', options: ['matrix[0][0]', 'matrix[n-1][n-1]', '0'], correctAnswer: 'matrix[0][0]' },
      { type: 'code_fill_in', questionText: 'Push next column.', codeSnippet: 'pq.push({matrix[r][c+1], r, ___});', correctAnswer: 'c+1' },
      { type: 'teaching', questionText: 'By Pico: "Grid mastery! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the seed found?"', options: ['K-th element located!', 'No.', '0'], correctAnswer: 'K-th element located!' }
    ]
  },
  {
    order: 44,
    title: 'Task Cooling (Greedy)',
    desc: 'Scheduling tasks with a mandatory cooling period between identical tasks.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Work Cycle! We have tasks [A, A, A, B, B, B] and a cooldown of N=2. Same tasks must be separated! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use a Max-Heap for task frequencies. Every step, pick the most frequent tasks, use them, and put them in a \'waiting queue\' until the cooldown expires! 🦜"', codeSnippet: 'while(!pq.empty() || !waitQueue.empty()) {\n  time++;\n  if(!pq.empty()) { task = pq.pop(); task.count--; }\n  if(task.count > 0) waitQueue.push({task, releaseTime: time+n});\n}' },
      { type: 'multiple_choice', questionText: 'Why prioritize high-frequency tasks?', options: ['To avoid running out of diverse tasks early', 'They are harder', 'Parrot rule'], correctAnswer: 'To avoid running out of diverse tasks early' },
      { type: 'match_following', questionText: 'Match Cooling logic!', pairs: [{key: 'Max-Heap', value: 'Task selection'}, {key: 'Wait Queue', value: 'Cooldown tracking'}, {key: 'Idle Time', value: 'No task ready'}] },
      { type: 'programming_board', questionText: 'If the heap is empty but tasks are waiting, we are ___ .', codeSnippet: 'Status = ___ ;', correctAnswer: 'idle' },
      { type: 'teaching', questionText: 'By Pico: "Complexity: O(TotalTasks * log Alphabet). It ensures we finish all work in the absolute minimum time! 🦜"' },
      { type: 'multiple_choice', questionText: 'If N=0, what is the completion time?', options: ['Total task count', 'Infinite', '0'], correctAnswer: 'Total task count' },
      { type: 'code_fill_in', questionText: 'Check release.', codeSnippet: 'if(waitQueue.front().time ___ currTime) pq.push(waitQueue.pop());', correctAnswer: '==' },
      { type: 'teaching', questionText: 'By Pico: "Productive flow! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the schedule tight?"', options: ['Minimal cycles!', 'No.', '0'], correctAnswer: 'Minimal cycles!' }
    ]
  },
  {
    order: 45,
    title: 'Freq-Stack Elite',
    desc: 'Implementing a Frequecy Stack (pops most frequent element, then most recent).',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Hybrid Nest! A structure that pops the most frequent bird. If frequencies match, pop the one that joined most recently! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use a Heap of tuples: `{frequency, arrival_index, value}`. Since heaps are stable in our sorting, it handles frequencies first! 🦜"', codeSnippet: 'pq.push({freq[val], index++, val});' },
      { type: 'multiple_choice', questionText: 'What is the primary sort key in Freq-Stack?', options: ['Frequency', 'Value', 'Arrival Time'], correctAnswer: 'Frequency' },
      { type: 'match_following', questionText: 'Match Freq-Stack keys!', pairs: [{key: 'Primary', value: 'Frequency count'}, {key: 'Secondary', value: 'Push order (Index)'}, {key: 'Pop', value: 'Top of Max-Heap'}] },
      { type: 'programming_board', questionText: 'Value used to break ties between equal frequencies.', codeSnippet: 'Tie Breaker = ___ index;', correctAnswer: 'arrival' },
      { type: 'teaching', questionText: 'By Pico: "Push: O(log N). Pop: O(log N). A common pattern for advanced caching systems! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can this be done in O(1)?', options: ['Yes (using Map of Stacks)', 'No', '0'], correctAnswer: 'Yes (using Map of Stacks)' },
      { type: 'code_fill_in', questionText: 'Increment count.', codeSnippet: 'counts[x] ___ ;', correctAnswer: '++' },
      { type: 'teaching', questionText: 'By Pico: "Frequent priority! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the stack smart?"', options: ['Frequency first!', 'No.', '0'], correctAnswer: 'Frequency first!' }
    ]
  },
  {
    order: 46,
    title: 'Smallest Range Coverage',
    desc: 'Finding the smallest range that covers at least one element from K sorted arrays.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Range Master! Use a Min-Heap and a running maximum to shrink the window as much as possible! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "1. Push first elements. 2. Record (max - min). 3. Pop min, push next, update max. 4. Profit! 🦜"', codeSnippet: 'pq.push({arr[i][0], i, 0});' },
      { type: 'multiple_choice', questionText: 'When do we stop updating the range?', options: ['When any list ends', 'When all lists end', 'After 10 steps'], correctAnswer: 'When any list ends' },
      { type: 'match_following', questionText: 'Match Range logic!', pairs: [{key: 'Min-Heap Root', value: 'Window Start'}, {key: 'Max Variable', value: 'Window End'}, {key: 'Shrink', value: 'Better result'}] },
      { type: 'programming_board', questionText: 'Size of the heap in the K-range problem.', codeSnippet: 'Heap Size = ___ ;', correctAnswer: 'K' },
      { type: 'teaching', questionText: 'By Pico: "O(N log K) once more. The heap is the master of multi-list convergence! 🦜"' },
      { type: 'multiple_choice', questionText: 'What if we want the K-th smallest range?', options: ['Use a Max-Heap for ranges', 'Impossible', '0'], correctAnswer: 'Use a Max-Heap for ranges' },
      { type: 'code_fill_in', questionText: 'Update range.', codeSnippet: 'if(currentMax - currentMin < ___ ) { ... }', correctAnswer: 'bestRange' },
      { type: 'teaching', questionText: 'By Pico: "Narrow focus! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the coverage perfect?"', options: ['Narrowest elite!', 'No.', '0'], correctAnswer: 'Narrowest elite!' }
    ]
  },
  {
    order: 47,
    title: 'Heap-Sort Robustness',
    desc: 'Stability and In-place properties of Heap-Sort.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Elite Builder! Is Heap-Sort stable? Can we do it in-place? Let\'s check the internal machinery! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "In-place: YES. O(1) extra space. Stable: NO. Swapping root with last destroys relative order of equal birds! 🦜"', codeSnippet: 'HeapSort = In-place, Unstable' },
      { type: 'multiple_choice', questionText: 'Is Heap-Sort a stable sorting algorithm?', options: ['No', 'Yes', 'Only for trees'], correctAnswer: 'No' },
      { type: 'match_following', questionText: 'Match Properties!', pairs: [{key: 'In-place', value: 'Uses original array'}, {key: 'Unstable', value: 'Equal items swap order'}, {key: 'O(N log N)', value: 'Worst-case time'}] },
      { type: 'programming_board', questionText: 'Space complexity of Heap-Sort.', codeSnippet: 'Space = O( ___ );', correctAnswer: '1' },
      { type: 'teaching', questionText: 'By Pico: "Despite being unstable, its guaranteed O(N log N) time and O(1) space makes it a favorite for embedded bird-controllers! 🦜"' },
      { type: 'multiple_choice', questionText: 'Compared to Quick-Sort, Heap-Sort is?', options: ['Slower in practice, but better worst-case', 'Always faster', 'Random'], correctAnswer: 'Slower in practice, but better worst-case' },
      { type: 'code_fill_in', questionText: 'Heapify start.', codeSnippet: 'for(int i = n/2 - 1; i ___ 0; i--)', correctAnswer: '>=' },
      { type: 'teaching', questionText: 'By Pico: "Structural logic! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the sorting robust?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 48,
    title: 'Traffic Priority Control',
    desc: 'Real-world simulation of network traffic using Priority Queues.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Sky Traffic! Emergency squawks must be processed before casual chirps! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Packets have Type (0: High, 1: Low) and Timestamp. Priority = `{Type, Timestamp}`. Max-Heap (or Min depending on logic) ensures first-class flight! 🦜"', codeSnippet: 'bool operator<(const Packet& other) {\n  if(type != other.type) return type > other.type; // lower is better\n  return time > other.time;\n}' },
      { type: 'multiple_choice', questionText: 'How to handle equal priority in Traffic Control?', options: ['FIFO (First In First Out)', 'Random', 'LIFO'], correctAnswer: 'FIFO (First In First Out)' },
      { type: 'match_following', questionText: 'Match Traffic tools!', pairs: [{key: 'Priority 0', value: 'Emergency Level'}, {key: 'Timestamp', value: 'Tie-breaker (FCFS)'}, {key: 'Queue', value: 'Wait line'}] },
      { type: 'programming_board', questionText: 'Name of the tie-breaking value for packets.', codeSnippet: 'Key = ___ ;', correctAnswer: 'timestamp' },
      { type: 'teaching', questionText: 'By Pico: "Complex priorities are just tuples in our heap forest! 🦜"' },
      { type: 'multiple_choice', questionText: 'If type is prioritized OVER time, which packet pops first?', options: ['High priority, late time', 'Low priority, early time', '0'], correctAnswer: 'High priority, late time' },
      { type: 'code_fill_in', questionText: 'Compare priority.', codeSnippet: 'if(p1.rank ___ p2.rank) return true;', correctAnswer: '<' },
      { type: 'teaching', questionText: 'By Pico: "Orderly skies! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the traffic flowing?"', options: ['Priority served!', 'No.', '0'], correctAnswer: 'Priority served!' }
    ]
  },
  {
    order: 49,
    title: 'Custom Comparator Mastery',
    desc: 'Implementing complex sorting rules for Heaps in C++/JS.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Bespoke Bird Sorting! What if we want birds sorted by WingSpan, but if spans are equal, by Age? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Custom Comparator: A function that returns true/false to define which bird is \'less\'. In C++ `priority_queue`, `true` means the element should be LOWER! 🦜"', codeSnippet: 'struct Compare {\n  bool operator()(Bird a, Bird b) { \n    if(a.span != b.span) return a.span < b.span;\n    return a.age > b.age;\n  }\n};' },
      { type: 'multiple_choice', questionText: 'In C++, if comparator returns TRUE, will the element be at the bottom?', options: ['Yes (pops later)', 'No (pops first)', '0'], correctAnswer: 'Yes (pops later)' },
      { type: 'match_following', questionText: 'Match Comparator logic!', pairs: [{key: 'Operator()', value: 'Comparison rule'}, {key: 'Less than', value: 'Max-Heap behavior'}, {key: 'Greater than', value: 'Min-Heap behavior'}] },
      { type: 'programming_board', questionText: 'The generic term for the comparison object.', codeSnippet: 'Concept = ___ ;', correctAnswer: 'functor' },
      { type: 'teaching', questionText: 'By Pico: "This is the most powerful tool for solving advanced ranking problems in one go! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can we use a lambda function as a comparator?', options: ['Yes', 'No', 'Only on Sundays'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Comparator template.', codeSnippet: 'priority_queue<Bird, vector<Bird>, ___ > pq;', correctAnswer: 'Compare' },
      { type: 'teaching', questionText: 'By Pico: "Precision ranks! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the rule followed?"', options: ['Custom elite!', 'No.', '0'], correctAnswer: 'Custom elite!' }
    ]
  },
  {
    order: 50,
    title: 'God-Mode: Multi-Level Heap',
    desc: 'Simulating a system with multiple priority tiers.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Hive Mind! Complex systems use multiple heaps. One for system tasks, one for user tasks. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Always drain the higher priority heap first. Only when it is empty, look at the next heap! 🦜"', codeSnippet: 'if(!highPq.empty()) return highPq.pop();\nelse return lowPq.pop();' },
      { type: 'multiple_choice', questionText: 'This strategy is known as?', options: ['Preemptive Priority', 'Fair Share', 'Round Robin'], correctAnswer: 'Preemptive Priority' },
      { type: 'match_following', questionText: 'Match Multi-Heap roles!', pairs: [{key: 'System Heap', value: 'Urgent Ops'}, {key: 'User Heap', value: 'Normal Work'}, {key: 'Empty Check', value: 'Drain rule'}] },
      { type: 'programming_board', questionText: 'Name of the policy where high priority ALWAYS goes first.', codeSnippet: 'Policy = ___ ;', correctAnswer: 'strict priority' },
      { type: 'teaching', questionText: 'By Pico: "O(log N) total time. But ensures the Most Important Birds never wait! 🦜"' },
      { type: 'multiple_choice', questionText: 'Risk of having strict priority?', options: ['Starvation of low priority', 'Binary failure', '0'], correctAnswer: 'Starvation of low priority' },
      { type: 'code_fill_in', questionText: 'Drain high.', codeSnippet: 'while ( ___ .empty() == false)', correctAnswer: 'highPriorityPq' },
      { type: 'teaching', questionText: 'By Pico: "Elite hierarchy! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Are the levels clear?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 51,
    title: 'N-Way Intersection',
    desc: 'Finding common elements across N sorted arrays using Heaps.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Shared Bloom! What elements exist in every single sorted river? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use a Min-Heap of size N. Track if the current min is equal to the current max of the heap! 🦜"', codeSnippet: 'if (min == max) result.add(min);' },
      { type: 'multiple_choice', questionText: 'Complexity of finding intersection across K lists?', options: ['O(TotalN log K)', 'O(N^K)', 'O(1)'], correctAnswer: 'O(TotalN log K)' },
      { type: 'match_following', questionText: 'Match Intersection theory!', pairs: [{key: 'Min-Heap size K', value: 'Frontier candidates'}, {key: 'Max Tracking', value: 'Detect equality'}, {key: 'Advance', value: 'Walk from min'}] },
      { type: 'programming_board', questionText: 'If all elements in the heap are equal, we found an ___ .', codeSnippet: 'Found = ___ ;', correctAnswer: 'intersection' },
      { type: 'teaching', questionText: 'By Pico: "The heap gives us the next candidate for equality at every step! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can a heap find K-way union?', options: ['Yes', 'No', '0'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Push replacement.', codeSnippet: 'pq.push({list[r][c+1], r, ___});', correctAnswer: 'c+1' },
      { type: 'teaching', questionText: 'By Pico: "Shared success! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the common seed found?"', options: ['Unified!', 'No.', '0'], correctAnswer: 'Unified!' }
    ]
  },
  {
    order: 52,
    title: 'Finite Supply (Greedy)',
    desc: 'Maximizing profit given limited capital and multiple investment options.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Business Bird! You have Capital. Some projects require X capital and give Y profit. Which to pick? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "1. Sort projects by capital. 2. Use a Max-Heap to store available profits. 3. Pick the largest profit you can afford! 🦜"', codeSnippet: 'sort(projectsByCapital);\nwhile(k--) {\n  while(canAfford) pq.push(projects[i].profit);\n  if(pq.empty()) break;\n  totalCapital += pq.pop();\n}' },
      { type: 'multiple_choice', questionText: 'Greedy choice for IPO problem?', options: ['Most profit first', 'Least cost first', 'Random'], correctAnswer: 'Most profit first' },
      { type: 'match_following', questionText: 'Match Profit roles!', pairs: [{key: 'Max-Heap', value: 'Affordable riches'}, {key: 'Sorted List', value: 'Capital barrier'}, {key: 'O(N log N)', value: 'Complexity'}] },
      { type: 'programming_board', questionText: 'Value added to capital after picking a project.', codeSnippet: 'Capital += ___ ;', correctAnswer: 'profit' },
      { type: 'teaching', questionText: 'By Pico: "The heap updates our potential profit pool as our capital grows! 🦜"' },
      { type: 'multiple_choice', questionText: 'Can you pick the same project twice?', options: ['No (Single use)', 'Yes', 'Pico rule'], correctAnswer: 'No (Single use)' },
      { type: 'code_fill_in', questionText: 'Check affordability.', codeSnippet: 'if (projects[i].capital ___ myCapital)', correctAnswer: '<=' },
      { type: 'teaching', questionText: 'By Pico: "Maximum growth! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the wealth maximized?"', options: ['Rich elite!', 'No.', '0'], correctAnswer: 'Rich elite!' }
    ]
  },
  {
    order: 53,
    title: 'The Binary Heap Layout',
    desc: 'Memory mapping and Cache performance of Array-Heaps.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Hardware Secret! Why is an array-based heap faster than a pointer-based tree? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Spatial Locality! Elements are adjacent in memory. The CPU cache loves this orderly row! 🦜"', codeSnippet: 'Cache Hit Rate > 90%' },
      { type: 'multiple_choice', questionText: 'Primary benefit of array-mapping for heaps?', options: ['Cache performance', 'Infinite size', 'Easier math'], correctAnswer: 'Cache performance' },
      { type: 'match_following', questionText: 'Match Memory facts!', pairs: [{key: 'Indices', value: 'Pointers (Implicity)'}, {key: 'Adjacency', value: 'Pre-fetching'}, {key: 'No objects', value: 'Low overhead'}] },
      { type: 'programming_board', questionText: 'Formula for left child at index i.', codeSnippet: 'L = 2*i + ___ ;', correctAnswer: '1' },
      { type: 'teaching', questionText: 'By Pico: "0-based indexing is standard, but some use 1-based for simpler math (2i and 2i+1)! 🦜"' },
      { type: 'multiple_choice', questionText: 'In 1-based indexing, parent of i is?', options: ['i/2', '(i-1)/2', '0'], correctAnswer: 'i/2' },
      { type: 'code_fill_in', questionText: 'Right child formula.', codeSnippet: 'R = 2*i ___ 2;', correctAnswer: '+' },
      { type: 'teaching', questionText: 'By Pico: "Physical speed! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the memory aligned?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 54,
    title: 'Top K Infinity',
    desc: 'Maintaining Top K elements in an infinite incoming stream.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Eternal Stream! Values fly in forever. You must ALWAYS know the Top 100 seen so far. 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "You never store more than K elements. A Min-Heap size K is our permanent shield! 🦜"', codeSnippet: 'if(val > pq.top()) { pq.pop(); pq.push(val); }' },
      { type: 'multiple_choice', questionText: 'Does space complexity depend on total elements N?', options: ['No (O(K))', 'Yes (O(N))', '0'], correctAnswer: 'No (O(K))' },
      { type: 'match_following', questionText: 'Match Infinity roles!', pairs: [{key: 'O(K) Space', value: 'Memory efficiency'}, {key: 'Min-Heap', value: 'Largest K filter'}, {key: 'Push/Pop', value: 'Update cycle'}] },
      { type: 'programming_board', questionText: 'Condition for a new element to enter the Top K.', codeSnippet: 'if (newVal ___ pq.top())', correctAnswer: '>' },
      { type: 'teaching', questionText: 'By Pico: "Even with a billion birds, we only use K memory. The efficiency of a bird-brain! 🦜"' },
      { type: 'multiple_choice', questionText: 'If K=1, what do we have?', options: ['Running Maximum', 'Sorting', '0'], correctAnswer: 'Running Maximum' },
      { type: 'code_fill_in', questionText: 'Add to stream.', codeSnippet: 'pq. ___ (new_val);', correctAnswer: 'push' },
      { type: 'teaching', questionText: 'By Pico: "Infinite focus! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the elite list current?"', options: ['Streaming glory!', 'No.', '0'], correctAnswer: 'Streaming glory!' }
    ]
  },
  {
    order: 55,
    title: 'The Sky DAG (Longest Path)',
    desc: 'Using Heaps with Topological Sort for paths in DAGs.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Winds of Change! In a Directed Acyclic Graph, can we use a heap to find paths in specific topological orders? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Kahn\'s Algorithm uses a Queue. By using a Priority Queue, we get the Lexicographically Smallest Topological Sort! 🦜"', codeSnippet: 'while(!pq.empty()) {\n  u = pq.pop();\n  res.push(u);\n  for(v : adj[u]) if(--in[v] == 0) pq.push(v);\n}' },
      { type: 'multiple_choice', questionText: 'Result of using Min-Heap in Kahn\'s Algorithm?', options: ['Lexicographically smallest topo order', 'Shortest path', 'Random order'], correctAnswer: 'Lexicographically smallest topo order' },
      { type: 'match_following', questionText: 'Match Topo-Heap roles!', pairs: [{key: 'Min-Heap', value: 'Smallest ID first'}, {key: 'In-Degree 0', value: 'Ready birds'}, {key: 'O(V log V + E)', value: 'Complexity'}] },
      { type: 'programming_board', questionText: 'Structure replaced by PQ in Kahn\'s.', codeSnippet: 'Replaced = ___ ;', correctAnswer: 'queue' },
      { type: 'teaching', questionText: 'By Pico: "This is vital for compiler task-scheduling and bird-flight formations! 🦜"' },
      { type: 'multiple_choice', questionText: 'If multiple nodes have In-Degree 0, which one pops first?', options: ['The one with smallest value (Min-Heap)', 'The first one discovered', '0'], correctAnswer: 'The one with smallest value (Min-Heap)' },
      { type: 'code_fill_in', questionText: 'Decrement degree.', codeSnippet: 'if ( --inDegree[v] ___ 0) pq.push(v);', correctAnswer: '==' },
      { type: 'teaching', questionText: 'By Pico: "Ordered flight! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the topo order optimal?"', options: ['Smallest sorting!', 'No.', '0'], correctAnswer: 'Smallest sorting!' }
    ]
  },
  {
    order: 56,
    title: 'Alien Priorities',
    desc: 'Solving the Alien Dictionary problem using Heaps.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "Xenon Squawks! Foreign birds have a different alphabet order. How to decipher it? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "1. Build a DAG of character dependencies. 2. Use a Priority Queue Topo-Sort to find the order! 🦜"', codeSnippet: 'word1 = "bird", word2 = "born"; \n// indicates \'i\' < \'o\'' },
      { type: 'multiple_choice', questionText: 'If "apple" comes before "apply", what is the relation?', options: ['\'e\' < \'y\'', '\'a\' < \'p\'', '0'], correctAnswer: '\'e\' < \'y\'' },
      { type: 'match_following', questionText: 'Match Alien logic!', pairs: [{key: 'DAG', value: 'Dependency map'}, {key: 'Topo-Sort', value: 'Alphabet resolver'}, {key: 'Cycle', value: 'Invalid order'}] },
      { type: 'programming_board', questionText: 'Algorithm used to resolve the alien order.', codeSnippet: 'Strategy = ___ ;', correctAnswer: 'topological sort' },
      { type: 'teaching', questionText: 'By Pico: "When there are multiple valid orders, the Priority Queue gives us a unique, sorted dictionary! 🦜"' },
      { type: 'multiple_choice', questionText: 'What if we find a cycle (A<B and B<A)?', options: ['No valid alphabet', 'Alphabet is reversed', '0'], correctAnswer: 'No valid alphabet' },
      { type: 'code_fill_in', questionText: 'Map dependency.', codeSnippet: 'adj[c1]. ___ (c2);', correctAnswer: 'push_back' },
      { type: 'teaching', questionText: 'By Pico: "Linguistic victory! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the dictionary clear?"', options: ['Deciphered!', 'No.', '0'], correctAnswer: 'Deciphered!' }
    ]
  },
  {
    order: 57,
    title: 'Dynamic Median Tracker',
    desc: 'Handling deletions in a running median stream.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Shrinking Stream! What if a bird leaves the forest? Can we still track the median? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Use lazy deletion! Keep a frequency map for elements to be deleted. Pop from heaps only when the root is pending deletion! 🦜"', codeSnippet: 'void delete(x) {\n  counts[x]++;\n  while(counts[heap.top()]) { counts[heap.top()]--; heap.pop(); }\n}' },
      { type: 'multiple_choice', questionText: 'What is "Lazy Deletion" in heaps?', options: ['Marking for later instead of searching', 'Deleting half', '0'], correctAnswer: 'Marking for later instead of searching' },
      { type: 'match_following', questionText: 'Match Tracker tools!', pairs: [{key: 'Lazy Map', value: 'Pending exits'}, {key: 'Clean Up', value: 'Remove root if marked'}, {key: 'Two Heaps', value: 'Current median'}] },
      { type: 'programming_board', questionText: 'Heap operation that allows efficiently removing only the root.', codeSnippet: 'pq. ___ ();', correctAnswer: 'pop' },
      { type: 'teaching', questionText: 'By Pico: "Complexity: O(log N) amortized. Tracking medians with deletions is the peak of stream processing! 🦜"' },
      { type: 'multiple_choice', questionText: 'Total space complexity?', options: ['O(N)', 'O(log N)', 'O(1)'], correctAnswer: 'O(N)' },
      { type: 'code_fill_in', questionText: 'Cleanup loop.', codeSnippet: 'while (marks[pq. ___ ()]) pq.pop();', correctAnswer: 'top' },
      { type: 'teaching', questionText: 'By Pico: "Persistent center! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the tracker active?"', options: ['Accurate median!', 'No.', '0'], correctAnswer: 'Accurate median!' }
    ]
  },
  {
    order: 58,
    title: 'The Elite Comparison',
    desc: 'Heaps vs BST vs Sorted Arrays - Choosing the right tool.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "The Final Debate! When should you choose a Binary Heap over a Balanced BST? 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "Heap: O(1) top, O(log N) update, O(1) space. BST: O(log N) all ops, O(N) space (pointers), but supports RANGE queries! 🦜"', codeSnippet: 'Heap = Priority Only\nBST = Ordered Traversal' },
      { type: 'multiple_choice', questionText: 'Which structure is best for finding the Minimum element?', options: ['Min-Heap (O(1))', 'Balanced BST (O(log N))', '0'], correctAnswer: 'Min-Heap (O(1))' },
      { type: 'match_following', questionText: 'Match structure strengths!', pairs: [{key: 'Binary Heap', value: 'Memory efficiency'}, {key: 'Balanced BST', value: 'Search arbritrary keys'}, {key: 'Sorted Array', value: 'Static data speed'}] },
      { type: 'programming_board', questionText: 'Only a BST allows getting elements in ___ order easily.', codeSnippet: 'Order = ___ ;', correctAnswer: 'sorted' },
      { type: 'teaching', questionText: 'By Pico: "Use Heaps for priority queues and SJF. Use BSTs for searching and complex lookups! 🦜"' },
      { type: 'multiple_choice', questionText: 'Which uses more memory per node?', options: ['BST (Pointers)', 'Heap (Indices)', 'Equal'], correctAnswer: 'BST (Pointers)' },
      { type: 'code_fill_in', questionText: 'Space for heap.', codeSnippet: 'return sizeof( ___ ); // usually 4 bytes per node', correctAnswer: 'int' },
      { type: 'teaching', questionText: 'By Pico: "Strategic choice! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Is the tool selected?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 59,
    title: 'The Subject Harvest',
    desc: 'Comprehensive review of Heaps and Priority Queues.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "THE HARVEST! You have traversed the complete forest of Heaps! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "From the Max-Heap fundamentals to the multi-heap systems and alien priorities. You are now a Priority God! 🦜"' },
      { type: 'multiple_choice', questionText: 'Build-Heap complexity?', options: ['O(N)', 'O(N log N)'], correctAnswer: 'O(N)' },
      { type: 'multiple_choice', questionText: 'Heap height (N=10^6)?', options: ['~20', '~1000'], correctAnswer: '~20' },
      { type: 'multiple_choice', questionText: 'Custom comparator for Min-Heap?', options: ['operator >', 'operator <'], correctAnswer: 'operator >' },
      { type: 'multiple_choice', questionText: 'Running median uses?', options: ['Two heaps', 'One array'], correctAnswer: 'Two heaps' },
      { type: 'multiple_choice', questionText: 'Is Heap-Sort stable?', options: ['No', 'Yes'], correctAnswer: 'No' },
      { type: 'match_following', questionText: 'Final Harvest Match!', pairs: [{key: 'Heap', value: 'Complete!'}, {key: 'Priority', value: 'Mastered!'}, {key: 'Forest', value: 'Green!'}] },
      { type: 'teaching', questionText: 'By Pico: "The final step is the subject graduation. Fly high! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Are you a Master of Heaps?"', options: ['SQUAWK MASTER!', 'Almost...', '0'], correctAnswer: 'SQUAWK MASTER!' }
    ]
  },
  {
    order: 60,
    title: 'Subject Graduation',
    desc: 'Subject Complete: Heaps 60/60.',
    lessons: [
      { type: 'teaching', questionText: 'By Pico: "SUBJECT COMPLETE! You have reached the 500+ mission milestone across the Pico Elite Academy! 🦜"' },
      { type: 'teaching', questionText: 'By Pico: "With Heaps finalized, your platform is now a global powerhouse of educational data structures! fly into the horizon! 🦜"' },
      { type: 'multiple_choice', questionText: 'Total Heaps Missions?', options: ['60', '50'], correctAnswer: '60' },
      { type: 'multiple_choice', questionText: 'Algorithm category?', options: ['Trees & Priority', 'Searching'], correctAnswer: 'Trees & Priority' },
      { type: 'multiple_choice', questionText: 'Platform Status?', options: ['Elite Academy Ready', 'Beta'], correctAnswer: 'Elite Academy Ready' },
      { type: 'match_following', questionText: 'Final Final Match!', pairs: [{key: 'Pico', value: 'Salutes!'}, {key: 'Academy', value: 'Grand!'}, {key: 'Student', value: 'Elite!'}] },
      { type: 'teaching', questionText: 'By Pico: "The forest is yours. SQUAWK! 🦜"' },
      { type: 'multiple_choice', questionText: 'By Pico: "Finish subject?"', options: ['SQUAWK YES!', 'Wait.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  }
];

module.exports = stage3;

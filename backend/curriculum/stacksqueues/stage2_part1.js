const stage2_part1 = [
  {
    order: 21,
    title: 'The Polish Evaluator (Postfix)',
    desc: 'Calculating results of Postfix expressions.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Postfix Notation! Instead of `2 + 3`, we say `2 3 +`. No parentheses needed, the stack knows what to do! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Walk through the tokens. If it\'s a bird (number), push to stack. If it\'s an operator, pop two birds, calculate, and push the result back! 🦜"', codeSnippet: 'for(string t : tokens) {\n  if(isdigit(t[0])) s.push(stoi(t));\n  else {\n    int b = s.pop(); int a = s.pop();\n    s.push(apply(a, b, t));\n  }\n}' },
      { type: 'multiple_choice', questionText: 'Result of "2 3 1 * +"?', options: ['5', '6', '1'], correctAnswer: '5' },
      { type: 'match_following', questionText: 'Match Postfix logic!', pairs: [{key: 'Operand', value: 'Push to Stack'}, {key: 'Operator', value: 'Pop 2 and Apply'}, {key: 'Final Result', value: 'Top of Stack'}] },
      { type: 'programming_board', questionText: 'Order of operations after popping `a` then `b`.', codeSnippet: 'result = b ___ a; // for non-commutative like division', correctAnswer: 'a / b' },
      { type: 'teaching', questionText: '🦜 Pico: "Wait! For subtraction and division, the first bird popped is the right-side operand (b), and the second is the left-side operand (a). 🦜"' },
      { type: 'multiple_choice', questionText: 'Why is Postfix called "Reverse Polish Notation"?', options: ['Created by Jan Łukasiewicz', 'It’s backward', 'Pico liked Poland'], correctAnswer: 'Created by Jan Łukasiewicz' },
      { type: 'code_fill_in', questionText: 'Push the calculated result.', codeSnippet: 's.___ (res);', correctAnswer: 'push' },
      { type: 'teaching', questionText: '🦜 Pico: "Math without boundaries! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I evaluated?"', options: ['Perfectly balanced!', 'No.', '0'], correctAnswer: 'Perfectly balanced!' }
    ]
  },
  {
    order: 22,
    title: 'Prefix Precedence',
    desc: 'Calculating results of Prefix expressions.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Prefix Notation! The operator comes BEFORE the birds: `+ 2 3`. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Trick: Scan from RIGHT to LEFT! If it\'s a bird, push. If it\'s an operator, pop two and push result. It’s just like Postfix in reverse! 🦜"', codeSnippet: 'for(int i=n-1; i>=0; i--) {\n  if(isOperand(expr[i])) s.push(expr[i] - \'0\');\n  else { op1 = s.pop(); op2 = s.pop(); s.push(calc(op1, op2, expr[i])); }\n}' },
      { type: 'multiple_choice', questionText: 'Scanning direction for Prefix evaluation?', options: ['Right to Left', 'Left to Right', 'Middle out'], correctAnswer: 'Right to Left' },
      { type: 'match_following', questionText: 'Match Prefix Logic!', pairs: [{key: 'Right to Left', value: 'Evaluate'}, {key: 'Operator first', value: 'Prefix'}, {key: 'Operand first', value: 'Postfix'}] },
      { type: 'programming_board', questionText: 'Loop to scan from the end.', codeSnippet: 'for (int i = n-1; i ___ 0; i--)', correctAnswer: '>=' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time. By scanning backward, we handle operands in the correct order for division and subtraction without any extra mirrors! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result of "+ * 2 3 5"?', options: ['11', '25', '10'], correctAnswer: '11' },
      { type: 'code_fill_in', questionText: 'Pop first operand.', codeSnippet: 'int v1 = s.___(); s.pop();', correctAnswer: 'top' },
      { type: 'teaching', questionText: '🦜 Pico: "Leading the way! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I prefix?"', options: ['Leading with logic!', 'No.', '0'], correctAnswer: 'Leading with logic!' }
    ]
  },
  {
    order: 23,
    title: 'The Great Translator',
    desc: 'Converting Postfix to Infix.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Translating Bird-Speech! Convert `A B +` into `(A + B)`. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Use a Stack of strings! When you see an operator, pop two strings, wrap them in parentheses with the operator in between, and push back! 🦜"', codeSnippet: 'string s2 = s.pop(); string s1 = s.pop();\nstring res = "(" + s1 + op + s2 + ")";\ns.push(res);' },
      { type: 'multiple_choice', questionText: 'Intermediate result of "AB+C*" during translation?', options: ['((A+B)*C)', '(A+B*C)', 'ABC+*'], correctAnswer: '((A+B)*C)' },
      { type: 'match_following', questionText: 'Match Translation steps!', pairs: [{key: 'Operand', value: 'Push String'}, {key: 'Operator', value: 'Form (S1+op+S2)'}, {key: 'Stack type', value: 'Stack<string>'}] },
      { type: 'programming_board', questionText: 'Wrap the expression in parentheses.', codeSnippet: 'res = ___ + s1 + op + s2 + ___ ;', correctAnswer: '"(", ")"' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N) time and space. Now humans can understand what the birds are calculating! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result for "ABC*+"?', options: ['(A+(B*C))', '((A+B)*C)', 'ABC*+'], correctAnswer: '(A+(B*C))' },
      { type: 'code_fill_in', questionText: 'String concatenation.', codeSnippet: 'string combined = "(" + s1 + ___ + s2 + ")";', correctAnswer: 'token' },
      { type: 'teaching', questionText: '🦜 Pico: "Clear communication! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Do I speak Infix?"', options: ['Fluently!', 'No.', '0'], correctAnswer: 'Fluently!' }
    ]
  },
  {
    order: 24,
    title: 'The Shunting-Yard (Infix to Postfix)',
    desc: 'Converting Infix to Postfix (Basics).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Shunting-Yard! Converting `A + B * C` into `A B C * +`. Use a stack for OPERATORS only! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Higher precedence operators (like *) stay on top. Lower precedence (+, -) pop everyone off before taking their place! 🦜"', codeSnippet: 'while(!s.empty() && prec(s.top()) >= prec(c)) {\n  res += s.pop();\n}\ns.push(c);' },
      { type: 'multiple_choice', questionText: 'Priority of "*" vs "+"?', options: ['* is higher', '+ is higher', 'Same'], correctAnswer: '* is higher' },
      { type: 'match_following', questionText: 'Match Shunting Rules!', pairs: [{key: 'Operand', value: 'Add to result'}, {key: '(', value: 'Push to stack'}, {key: ')', value: 'Pop until ('}] },
      { type: 'programming_board', questionText: 'Pop operators while their precedence is higher.', codeSnippet: 'while (!st.empty() && prec(st.top()) ___ prec(c))', correctAnswer: '>=' },
      { type: 'teaching', questionText: '🦜 Pico: "Parentheses `(` force themselves onto the stack, but they only leave when their twin `)` arrives. This is how compilers read your math! 🦜"' },
      { type: 'multiple_choice', questionText: 'PostFix for "A+B*C"?', options: ['ABC*+', '+*ABC', 'AB+C*'], correctAnswer: 'ABC*+' },
      { type: 'code_fill_in', questionText: 'Append operator to result string.', codeSnippet: 'res ___ st.top(); st.pop();', correctAnswer: '+=' },
      { type: 'teaching', questionText: '🦜 Pico: "Math rearranged! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I shunted?"', options: ['Perfectly sequenced!', 'No.', '0'], correctAnswer: 'Perfectly sequenced!' }
    ]
  },
  {
    order: 25,
    title: 'The Next Greater Bird',
    desc: 'Finding the next larger value for every element (Monotonic Stack).',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Next Greater Element! For every bird in the line, who is the first bird to its RIGHT that is bigger than it? [4, 5, 2, 10] -> [5, 10, 10, -1]! 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Monotonic Stack! Keep a stack of birds in decreasing order. If the new bird is BIGGER than the top, it\'s the answer for everyone it pops! 🦜"', codeSnippet: 'while(!s.empty() && arr[s.top()] < arr[i]) {\n  ans[s.pop()] = arr[i];\n}\ns.push(i);' },
      { type: 'multiple_choice', questionText: 'Complexity of finding NGE for all elements?', options: ['O(N)', 'O(N^2)', 'O(N log N)'], correctAnswer: 'O(N)' },
      { type: 'match_following', questionText: 'Match Monotonic logic!', pairs: [{key: 'Increasing', value: 'New bird pops smaller'}, {key: 'ans[j] = x', value: 'Assign answer'}, {key: 'Stack', value: 'Indices waiting for answer'}] },
      { type: 'programming_board', questionText: 'Check if current matches a popping condition.', codeSnippet: 'while (!st.empty() && arr[st.top()] ___ currentVal)', correctAnswer: '<' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time because each bird enters and leaves the tower exactly once. A fundamental trick! 🦜"' },
      { type: 'multiple_choice', questionText: 'NGE for [5, 4, 3, 2, 1]?', options: ['[-1, -1, -1, -1, -1]', '[4, 3, 2, 1, -1]', '0'], correctAnswer: '[-1, -1, -1, -1, -1]' },
      { type: 'code_fill_in', questionText: 'Default value for no greater element.', codeSnippet: 'vector<int> ans(n, ___);', correctAnswer: '-1' },
      { type: 'teaching', questionText: '🦜 Pico: "Looking ahead! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Who is greater than me?"', options: ['None! SQUAWK!', 'No.', '0'], correctAnswer: 'None! SQUAWK!' }
    ]
  },
  {
    order: 26,
    title: 'The Circular Search (NGE II)',
    desc: 'Finding NGE in a circular array.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Circular Monothon! The search doesn\'t stop at the end—it loops back to the beginning once. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Trick: Iterate from `0` to `2N-1` and use `% N` to access elements. This simulates the loop with just one pass-and-a-half! 🦜"', codeSnippet: 'for (int i = 0; i < 2 * n; i++) {\n  int num = nums[i % n];\n  while (!s.empty() && nums[s.top()] < num) ans[s.pop()] = num;\n  if (i < n) s.push(i);\n}' },
      { type: 'multiple_choice', questionText: 'NGE for [1, 2, 1] (Circular)?', options: ['[2, -1, 2]', '[2, -1, -1]', '[-1, -1, -1]'], correctAnswer: '[2, -1, 2]' },
      { type: 'match_following', questionText: 'Match Circular NGE!', pairs: [{key: '2 * N', value: 'Double Pass'}, {key: 'i < N', value: 'Push Only once'}, {key: 'num % N', value: 'Virtual index'}] },
      { type: 'programming_board', questionText: 'Modulo to map index to circular array.', codeSnippet: 'current = arr[i ___ n];', correctAnswer: '%' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N). The circularity is just a perspective, but the monotonic stack remains the engine! 🦜"' },
      { type: 'multiple_choice', questionText: 'Why do we only push in the first N steps?', options: ['Answers for all found in 2nd N', 'Save memory', 'Pico rule'], correctAnswer: 'Answers for all found in 2nd N' },
      { type: 'code_fill_in', questionText: 'Circular loop condition.', codeSnippet: 'for (int i = 0; i < ___ * n; i++)', correctAnswer: '2' },
      { type: 'teaching', questionText: '🦜 Pico: "The loop never ends... well, twice! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Did I loop back?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 27,
    title: 'Daily Temperatures',
    desc: 'How many days until a warmer bird arrives?',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "Temperature Flight! For every day [73, 74, 75, 71, 69, 72, 76, 73], how many days must you wait for a warmer one? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "This is just NGE, but you store the INDEX! The answer is `WarmerIndex - CurrentIndex`. 🦜"', codeSnippet: 'while(!s.empty() && temp[i] > temp[s.top()]) {\n  int prevIdx = s.pop();\n  ans[prevIdx] = i - prevIdx;\n}' },
      { type: 'multiple_choice', questionText: 'Days to wait after 73 if next is 74?', options: ['1', '0', '74-73'], correctAnswer: '1' },
      { type: 'match_following', questionText: 'Match Temp logic!', pairs: [{key: 'Wait Days', value: 'i - prevIdx'}, {key: 'ans[i]', value: '0 if no warmer'}, {key: 'Stack', value: 'Indices of colder'}] },
      { type: 'programming_board', questionText: 'Calculate the gap in days.', codeSnippet: 'ans[prev] = i ___ prev;', correctAnswer: '-' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N) time. The stack keeps track of all the cold birds waiting for their warm sunrise! 🦜"' },
      { type: 'multiple_choice', questionText: 'Result for [30, 40, 50, 60]?', options: ['[1, 1, 1, 0]', '[0, 0, 0, 0]', '[1, 2, 3, 0]'], correctAnswer: '[1, 1, 1, 0]' },
      { type: 'code_fill_in', questionText: 'Pop colder day.', codeSnippet: 'st.___();', correctAnswer: 'pop' },
      { type: 'teaching', questionText: '🦜 Pico: "Warmth is coming, fledgling! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I warm?"', options: ['Heating up!', 'No.', '0'], correctAnswer: 'Heating up!' }
    ]
  },
  {
    order: 28,
    title: 'The Stock Span',
    desc: 'Consecutive days price was <= current.',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Investor Bird! How many consecutive days (including today) has the price been LOWER than or equal to current? [100, 80, 60, 70, 60, 75, 85] -> [1, 1, 1, 2, 1, 4, 6]. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Reverse Monotonic Stack! Pop everyone SMALLER than current. The span is `CurrentIdx - TopIdx` (or CurrentIdx + 1 if stack is empty)! 🦜"', codeSnippet: 'int span = s.empty() ? i+1 : i - s.top();\ns.push(i);' },
      { type: 'multiple_choice', questionText: 'Stock span of 100 on day 0?', options: ['1', '0', '100'], correctAnswer: '1' },
      { type: 'match_following', questionText: 'Match Stock logic!', pairs: [{key: 'Span', value: 'i - s.top()'}, {key: 'Empty Stack', value: 'i + 1'}, {key: 'Stack', value: 'Previous Highs'}] },
      { type: 'programming_board', questionText: 'Pop while previous prices are smaller or equal.', codeSnippet: 'while (!st.empty() && prices[st.top()] ___ currentPrice)', correctAnswer: '<=' },
      { type: 'teaching', questionText: '🦜 Pico: "O(N). You only need to know when the last bird BIGGER than you flew. Everything in between is yours! 🦜"' },
      { type: 'multiple_choice', questionText: 'Span for [10, 20, 30]?', options: ['[1, 2, 3]', '[1, 1, 1]', '[3, 2, 1]'], correctAnswer: '[1, 2, 3]' },
      { type: 'code_fill_in', questionText: 'Index storage.', codeSnippet: 'st.push(___);', correctAnswer: 'i' },
      { type: 'teaching', questionText: '🦜 Pico: "Wealth of knowledge! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is my span growing?"', options: ['SQUAWK YES!', 'No.', '0'], correctAnswer: 'SQUAWK YES!' }
    ]
  },
  {
    order: 29,
    title: 'Validate Stack Sequences',
    desc: 'Could these push/pop sequences happen?',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Tower Auditor! If I push [1,2,3,4,5], can I pop [4,5,3,2,1]? 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Simulate it! For every bird pushed, check if the Top matches the next bird in the POP sequence. If yes, pop and repeat! 🦜"', codeSnippet: 'for(int x : pushed) {\n  s.push(x);\n  while(!s.empty() && s.top() == popped[j]) {\n    s.pop(); j++;\n  }\n}\nreturn s.empty();' },
      { type: 'multiple_choice', questionText: 'Is pushed=[1,2,3], popped=[3,2,1] valid?', options: ['Yes', 'No', 'If Pico sorts it'], correctAnswer: 'Yes' },
      { type: 'match_following', questionText: 'Match Sequence Logic!', pairs: [{key: 'Push', value: 'Force bird on'}, {key: 'Pop', value: 'Check top == popped[j]'}, {key: 'Valid', value: 'Stack is empty'}] },
      { type: 'programming_board', questionText: 'Check the condition for an immediate pop.', codeSnippet: 'while (!st.empty() && st.top() ___ popped[j])', correctAnswer: '==' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N). If the stack is not empty at the end, it was an impossible sequence. No cheating in the bird tower! 🦜"' },
      { type: 'multiple_choice', questionText: 'Is pushed=[1,2,3], popped=[1,3,2] valid?', options: ['Yes', 'No', '0'], correctAnswer: 'Yes' },
      { type: 'code_fill_in', questionText: 'Final validity check.', codeSnippet: 'return st.___();', correctAnswer: 'empty' },
      { type: 'teaching', questionText: '🦜 Pico: "Law of the tower! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Am I legal?"', options: ['Law-abiding elite!', 'No.', '0'], correctAnswer: 'Law-abiding elite!' }
    ]
  },
  {
    order: 30,
    title: 'Simplifying Paths',
    desc: 'Cleaning up Unix-style paths ("/a/./b/../../c/").',
    lessons: [
      { type: 'teaching', questionText: '🦜 Pico: "The Path Cleaner! Directions like `/home/../pico` should just be `/pico`. 🦜"' },
      { type: 'teaching', questionText: '🦜 Pico: "Split by `/`. If it\'s `..`, pop the stack (back up). If it\'s `.` or empty, skip. Else, push to stack! 🦜"', codeSnippet: 'if (part == "..") { if(!s.empty()) s.pop(); }\nelse if (part != "." && part != "") s.push(part);' },
      { type: 'multiple_choice', questionText: 'Simplified path for "/a/./b/../../c/"?', options: ['/c', '/a/c', '/a/b/c'], correctAnswer: '/c' },
      { type: 'match_following', questionText: 'Match Path Terms!', pairs: [{key: '..', value: 'Pop Stack'}, {key: '.', value: 'Stay Put'}, {key: '/', value: 'The Separator'}] },
      { type: 'programming_board', questionText: 'Combine names from stack with this separator.', codeSnippet: 'result += ___ + folder;', correctAnswer: '"/"' },
      { type: 'teaching', questionText: '🦜 Pico: "Complexity: O(N). Stacks are the reason your operating system knows where files are hidden! 🦜"' },
      { type: 'multiple_choice', questionText: 'What is the root path ("/") in a stack?', options: ['Empty stack', 'Top node', 'Pico’s nest'], correctAnswer: 'Empty stack' },
      { type: 'code_fill_in', questionText: 'Extract folder name.', codeSnippet: 'string folder = st.___(); st.pop();', correctAnswer: 'top' },
      { type: 'teaching', questionText: '🦜 Pico: "Short and sweet! 🦜"' },
      { type: 'multiple_choice', questionText: '🦜 Pico: "Is the path clear?"', options: ['Direct flight!', 'No.', '0'], correctAnswer: 'Direct flight!' }
    ]
  }
];

module.exports = stage2_part1;

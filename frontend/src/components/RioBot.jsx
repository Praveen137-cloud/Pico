import React, { useState, useEffect, useRef } from 'react';
import './RioBot.css';

const RIO_RESPONSES = {
  'array': 'Arrays are linear data structures that store elements in contiguous memory. They offer O(1) access time via index. Perfect for simple lists!',
  'linked list': 'A Linked List is a series of connected nodes, where each node contains data and a pointer to the next. Great for dynamic memory allocation!',
  'stack': 'Stacks follow the LIFO (Last-In-First-Out) principle. Use push() to add and pop() to remove. Think of a stack of plates!',
  'queue': 'Queues follow the FIFO (First-In-First-Out) principle. Use enqueue to add and dequeue to remove. Like standing in a line!',
  'tree': 'Trees are hierarchical structures. Binary Search Trees (BST) allow for O(log n) search, insertion, and deletion on average!',
  'graph': 'Graphs consist of nodes (vertices) and edges. They are used to represent networks, like social media friends or road maps!',
  'dp': 'Dynamic Programming is about breaking down complex problems into simpler subproblems and storing results to avoid redundant work (memoization)!',
  'hello': 'Hello Agent! I am Rio, your Elite Academy AI. How can I assist your training today?',
  'hi': 'Hi there! Ready to crush some algorithms? Ask me anything!',
  'who are you': 'I am Rio, the official assistant of Pico Elite Academy. I help agents master Data Structures and Algorithms.',
  'pico': 'Pico Elite Academy is a top-tier training platform for developers. You are currently in the Research Phase!',
  'streak': 'Streaks represent your consistency. Keep training daily to build your momentum and climb the leaderboard!',
  'xp': 'XP (Experience Points) are rewarded for completing modules. The more XP you have, the higher your rank in the Pico Leagues!',
  'help': "I can explain DSA topics (like Arrays or Trees), explain how XP works, or just give you some motivation! What's on your mind?"
};

const RioBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'rio', text: 'Greeting, Agent. I am Rio. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input.toLowerCase();
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      let responseText = "I'm still scanning my database for that specific topic, but I can tell you about Arrays, Trees, Stacks, or how the Pico Academy works! Ask me for 'help' to see more.";
      
      // Smart Keyword Detection
      for (const [key, val] of Object.entries(RIO_RESPONSES)) {
        if (currentInput.includes(key)) {
          responseText = val;
          break;
        }
      }

      setMessages(prev => [...prev, { role: 'rio', text: responseText }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className={`rio-bot-container ${isOpen ? 'expanded' : ''}`}>
      {isOpen ? (
        <div className="rio-chat-window">
          <div className="rio-header">
            <div className="rio-status">
              <span className="status-dot"></span>
              <strong>RIO</strong> <span className="title-tag">AI ASST</span>
            </div>
            <button className="rio-close" onClick={() => setIsOpen(false)}>×</button>
          </div>
          
          <div className="rio-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`rio-msg-bubble ${m.role}`}>
                {m.text}
              </div>
            ))}
            {isTyping && <div className="rio-msg-bubble rio typing">Rio is thinking...</div>}
          </div>

          <div className="rio-input-area">
            <input 
              type="text" 
              placeholder="Ask Rio anything..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="rio-send-btn" onClick={handleSend}>
              ➜
            </button>
          </div>
        </div>
      ) : (
        <div className="rio-launcher" onClick={() => setIsOpen(true)}>
          <div className="rio-avatar">🦜</div>
          <div className="rio-badge">RIO</div>
        </div>
      )}
    </div>
  );
};

export default RioBot;

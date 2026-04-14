import React, { useState, useEffect, useRef } from 'react';
import './PicoBot.css';
import LivingCharacter from './LivingCharacter';

const PICO_RESPONSES = {
  'array': 'Arrays are linear data structures that store elements in contiguous memory. They offer O(1) access time via index. Perfect for simple lists!',
  'linked list': 'A Linked List is a series of connected nodes, where each node contains data and a pointer to the next. Great for dynamic memory allocation!',
  'stack': 'Stacks follow the LIFO (Last-In-First-Out) principle. Use push() to add and pop() to remove. Think of a stack of plates!',
  'queue': 'Queues follow the FIFO (First-In-First-Out) principle. Use enqueue to add and dequeue to remove. Like standing in a line!',
  'tree': 'Trees are hierarchical structures. Binary Search Trees (BST) allow for O(log n) search, insertion, and deletion on average!',
  'graph': 'Graphs consist of nodes (vertices) and edges. They are used to represent networks, like social media friends or road maps!',
  'dp': 'Dynamic Programming is about breaking down complex problems into simpler subproblems and storing results to avoid redundant work (memoization)!',
  'hello': 'Hello Agent! I am Pico, your Elite Academy AI. How can I assist your training today?',
  'hi': 'Hi there! Ready to crush some algorithms? Ask me anything!',
  'who are you': 'I am Pico, the official assistant of Pico Elite Academy. I help agents master Data Structures and Algorithms.',
  'pico': 'Pico Elite Academy is a top-tier training platform for developers. You are currently in the Research Phase!',
  'streak': 'Streaks represent your consistency. Keep training daily to build your momentum and climb the leaderboard!',
  'xp': 'XP (Experience Points) are rewarded for completing modules. The more XP you have, the higher your rank in the Pico Leagues!',
  'help': "I can explain DSA topics (like Arrays or Trees), explain how XP works, or just give you some motivation! What's on your mind?"
};

const PicoBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'pico', text: 'Greeting, Agent. I am Pico. How can I help you today?' }
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
        for (const [key, val] of Object.entries(PICO_RESPONSES)) {
          if (currentInput.includes(key)) {
            responseText = val;
            break;
          }
        }

        setMessages(prev => [...prev, { role: 'pico', text: responseText }]);
        setIsTyping(false);
      }, 1200);
  };

  return (
    <div className={`pico-bot-container ${isOpen ? 'expanded' : ''}`}>
      {isOpen ? (
        <div className="pico-chat-window">
          <div className="pico-header">
            <div className="pico-status">
              <span className="status-dot"></span>
              <strong>PICO</strong> <span className="title-tag">AI ASST</span>
            </div>
            <button className="pico-close" onClick={() => setIsOpen(false)}>×</button>
          </div>
          
          <div className="pico-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`pico-msg-bubble ${m.role}`}>
                {m.text}
              </div>
            ))}
            {isTyping && <div className="pico-msg-bubble pico typing">Pico is thinking...</div>}
          </div>

          <div className="pico-input-area">
            <input 
              type="text" 
              placeholder="Ask Pico anything..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="pico-send-btn" onClick={handleSend}>
              ➜
            </button>
          </div>
        </div>
      ) : (
        <div className="pico-launcher legacy" onClick={() => setIsOpen(true)}>
          <div className="pico-bubble">
            <img src="/pico-bird.png" alt="Pico" className="pico-parrot-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PicoBot;

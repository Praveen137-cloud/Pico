import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { baseURL } from '../api';

const avatarMap = { Lion: '🦁', Tiger: '🐯', Elephant: '🐘', Giraffe: '🦒', Goat: '🐐', Parrot: '🦜', 'Electric Parrot': '⚡🦜' };

const Feed = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([]);

    const socket = io(baseURL);

    socket.on('connect', () => {
      setMessages(prev => [{ id: Date.now(), text: 'System: 🟢 Connection established to global datalink.', timestamp: new Date().toISOString() }, ...prev]);
    });

    socket.on('loreFeed', (data) => {
      setMessages(prev => {
        const newArr = [data, ...prev];
        return newArr.slice(0, 50);
      });
    });

    return () => { socket.disconnect(); };
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.headerBox}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 28 }}>📡</span>
          <div>
            <h2 style={styles.title}>The Lore</h2>
            <div style={{ color: 'var(--text-muted)', fontSize: 11, letterSpacing: 1 }}>GLOBAL ACTIVITY FEED</div>
          </div>
        </div>
        <div style={styles.liveIndicator}>
          <div style={styles.pulsingDot} />
          <span>LIVE</span>
        </div>
      </div>

      <div style={styles.feedContainer}>
        {messages.map((msg) => {
          const isSystem = typeof msg.text === 'string' && msg.text.startsWith('System:');
          const isReal = msg.isReal === true;
          const avatarEmoji = msg.avatar ? avatarMap[msg.avatar] || '🦜' : null;

          return (
            <div
              key={msg.id}
              style={{
                ...styles.messageCard,
                borderLeft: isReal
                  ? '4px solid #10B981'
                  : isSystem
                  ? '4px solid var(--theme-secondary)'
                  : '4px solid var(--theme-primary)',
                backgroundColor: isReal
                  ? 'rgba(16, 185, 129, 0.08)'
                  : isSystem
                  ? 'rgba(255,255,255,0.03)'
                  : 'rgba(31, 16, 16, 0.4)',
                animation: 'slideIn 0.3s ease-out forwards'
              }}
            >
              <div style={styles.msgHeader}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  {isReal && avatarEmoji && (
                    <span style={styles.avatarChip}>{avatarEmoji}</span>
                  )}
                  <span style={{ color: isReal ? '#10B981' : isSystem ? 'var(--theme-secondary)' : 'var(--text-muted)', fontWeight: 800, fontSize: 10 }}>
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  {isReal && (
                    <span style={styles.liveTag}>LIVE 🔴</span>
                  )}
                  {isSystem && <span style={styles.sysTag}>SYS</span>}
                </div>
              </div>
              <div style={{
                ...styles.msgText,
                color: isReal ? '#E2E8F0' : isSystem ? 'var(--theme-secondary)' : '#E2E8F0',
                fontStyle: isSystem ? 'italic' : 'normal',
                fontWeight: isReal ? 700 : 400
              }}>
                {msg.text}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ height: '100px' }} />

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blinkLive {
          0% { opacity: 1; }
          50% { opacity: 0.2; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

const styles = {
  page: { padding: '24px', display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto', backgroundColor: 'var(--bg-dark)' },
  headerBox: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', backgroundColor: 'var(--bg-card)', padding: '16px 20px', borderRadius: '12px', border: '1px solid var(--divider)' },
  title: { color: '#fff', fontSize: '22px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: 1, margin: 0 },
  liveIndicator: { display: 'flex', alignItems: 'center', gap: '8px', color: '#EF4444', fontWeight: 900, fontSize: 12, letterSpacing: 2 },
  pulsingDot: { width: '10px', height: '10px', backgroundColor: '#EF4444', borderRadius: '50%', animation: 'blinkLive 1.5s infinite', boxShadow: '0 0 10px #EF4444' },
  feedContainer: { display: 'flex', flexDirection: 'column', gap: '10px' },
  messageCard: { padding: '14px 16px', borderRadius: '6px', borderTop: '1px solid var(--divider)', borderRight: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)' },
  msgHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' },
  avatarChip: { fontSize: 16, lineHeight: 1 },
  liveTag: { backgroundColor: '#10B981', color: '#000', padding: '2px 7px', borderRadius: '4px', fontSize: '9px', fontWeight: 900 },
  sysTag: { backgroundColor: 'var(--theme-secondary)', color: '#000', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: 900 },
  msgText: { fontSize: '14px', lineHeight: '1.5' }
};

export default Feed;

import React, { useState, useEffect } from 'react';
import api from '../api';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const avatarMap = { Lion: '🦁', Tiger: '🐯', Elephant: '🐘', Giraffe: '🦒', Goat: '🐐', Parrot: '🦜', 'Electric Parrot': '⚡🦜' };

  useEffect(() => {
    api.get('/api/auth/leaderboard')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Leaderboard Fetch Error:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ padding: 40, color: '#fff', textAlign: 'center' }}>Loading Champions...</div>;

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <span style={{ fontSize: 40 }}>🏆</span>
        <h1 style={styles.title}>Global Hall of Fame</h1>
        <p style={styles.subtitle}>Only the sharpest parrots fly here.</p>
      </div>

      <div style={styles.list}>
        {users.map((user, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.rankBadge}>#{index + 1}</div>
            <div style={styles.avatar}>
               {user.avatar?.startsWith('http') ? (
                  <img src={user.avatar} alt="Avatar" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} />
               ) : (
                  avatarMap[user.avatar] || '🦜'
               )}
            </div>
            <div style={styles.userInfo}>
              <div style={styles.userName}>{user.name}</div>
              <div style={styles.userStreak}>🔥 {user.streak || 0} Day Streak</div>
            </div>
            <div style={styles.xpText}>{user.xp.toLocaleString()} XP</div>
          </div>
        ))}
        {users.length === 0 && (
          <div style={{ color: '#94A3B8', textAlign: 'center', padding: 40 }}>No data yet! Be the first!</div>
        )}
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

const styles = {
  page: { padding: '24px', backgroundColor: 'var(--bg-dark)', minHeight: '100vh', display: 'flex', flexDirection: 'column', gap: '32px' },
  header: { textAlign: 'center', backgroundColor: 'var(--bg-card)', padding: '40px 20px', borderRadius: '24px', border: '1px solid var(--divider)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' },
  title: { color: '#fff', fontSize: '28px', fontWeight: '900', margin: '12px 0 4px', textTransform: 'uppercase', letterSpacing: '1px' },
  subtitle: { color: 'var(--text-muted)', fontSize: '14px', fontWeight: '600' },
  list: { display: 'flex', flexDirection: 'column', gap: '12px' },
  card: { 
    display: 'flex', 
    alignItems: 'center', 
    backgroundColor: 'var(--bg-card)', 
    padding: '16px 20px', 
    borderRadius: '16px', 
    border: '1px solid var(--divider)', 
    animation: 'slideUp 0.4s ease-out forwards',
    transition: 'transform 0.2s',
    cursor: 'default'
  },
  rankBadge: { width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--theme-primary)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '14px', marginRight: '16px', boxShadow: '0 4px 12px var(--theme-primary)44' },
  avatar: { fontSize: '28px', marginRight: '16px' },
  userInfo: { flex: 1 },
  userName: { color: '#fff', fontSize: '16px', fontWeight: '800' },
  userStreak: { color: '#FFD700', fontSize: '11px', fontWeight: '700', marginTop: '2px' },
  xpText: { color: 'var(--theme-primary)', fontSize: '18px', fontWeight: '900', letterSpacing: '0.5px' }
};

export default Leaderboard;

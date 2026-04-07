import React, { useState, useEffect, useContext } from 'react';
import api from '../api';
import { AuthContext } from '../context/AuthContext';

const tiers = [
  { name: 'Bronze',  minXP: 0,    color: '#CD7F32', icon: '🥉' },
  { name: 'Silver',  minXP: 500,  color: '#C0C0C0', icon: '🥈' },
  { name: 'Gold',    minXP: 1000, color: '#FFD700', icon: '🥇' },
  { name: 'Diamond', minXP: 2500, color: '#00BFFF', icon: '💎' },
  { name: 'Master',  minXP: 5000, color: '#FF00FF', icon: '👑' }
];

const avatarMap = { Lion: '🦁', Tiger: '🐯', Elephant: '🐘', Giraffe: '🦒', Goat: '🐐', Parrot: '🦜', 'Electric Parrot': '⚡🦜' };

const getTier = (xp) => {
  for (let i = tiers.length - 1; i >= 0; i--) {
    if (xp >= tiers[i].minXP) return tiers[i];
  }
  return tiers[0];
};

// Weekly reset: next Sunday midnight
const getResetCountdown = () => {
  const now = new Date();
  const nextSunday = new Date(now);
  nextSunday.setDate(now.getDate() + (7 - now.getDay()));
  nextSunday.setHours(0, 0, 0, 0);
  const diff = nextSunday - now;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  return `${d}d ${h}h ${m}m`;
};

const League = () => {
  const { user: authUser } = useContext(AuthContext);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(getResetCountdown());

  useEffect(() => {
    api.get('/api/leaderboard')
      .then(res => {
        setLeaderboard(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Leaderboard error:', err);
        setLoading(false);
      });

    // Update countdown every minute
    const timer = setInterval(() => setCountdown(getResetCountdown()), 60000);
    return () => clearInterval(timer);
  }, []);

  const myEntry = leaderboard.find(p => p._id === authUser?._id);
  const myTier = getTier(myEntry?.xp || 0);

  return (
    <div style={styles.page}>
      {/* Hero Banner */}
      <div style={{ ...styles.hero, borderBottom: `4px solid ${myTier.color}`, boxShadow: `0 10px 40px -10px ${myTier.color}55` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 40 }}>{myTier.icon}</span>
          <div>
            <h2 style={styles.title}>The Arena</h2>
            <div style={{ ...styles.tierBadge, backgroundColor: myTier.color }}>
              {myTier.name} League
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ color: myTier.color, fontWeight: 900, fontSize: 28 }}>{myEntry?.xp ?? authUser?.xp ?? 0} XP</div>
          <div style={{ color: 'var(--text-muted)', fontSize: 12, marginTop: 4 }}>Rank #{myEntry?.rank ?? '—'}</div>
        </div>
      </div>

      {/* Season Timer */}
      <div style={styles.seasonBox}>
        <span style={{ color: 'var(--text-muted)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1 }}>⏳ Season Resets In</span>
        <span style={{ color: 'var(--theme-primary)', fontWeight: 900, fontSize: 16 }}>{countdown}</span>
      </div>

      {/* Tier Progress Bar */}
      <div style={styles.tierBarContainer}>
        {tiers.map((tier, i) => {
          const isActive = myTier.name === tier.name;
          return (
            <div key={tier.name} style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ ...styles.tierSegment, backgroundColor: isActive ? tier.color : 'var(--divider)', opacity: isActive ? 1 : 0.4 }} />
              <div style={{ fontSize: 9, marginTop: 4, color: isActive ? tier.color : 'var(--text-muted)', fontWeight: isActive ? 900 : 400 }}>{tier.name}</div>
            </div>
          );
        })}
      </div>

      {/* Leaderboard */}
      <div style={styles.leaderboardTitle}>Global Rankings</div>

      {loading ? (
        [...Array(10)].map((_, i) => (
          <div key={i} style={{ ...styles.playerRow, opacity: 0.3, animation: 'pulse 1.5s infinite' }}>
            <div style={{ ...styles.rankNum, background: 'var(--divider)', borderRadius: 4, width: 30, height: 20 }} />
            <div style={{ ...styles.avatarBox, background: 'var(--divider)', borderRadius: '50%', width: 40, height: 40 }} />
            <div style={{ flex: 1, background: 'var(--divider)', borderRadius: 4, height: 20 }} />
          </div>
        ))
      ) : leaderboard.length === 0 ? (
        <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: 40 }}>
          No players yet. Be the first to earn XP!
        </div>
      ) : (
        leaderboard.map((p, idx) => {
          const pTier = getTier(p.xp);
          const isMe = p._id === authUser?._id;
          const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`;
          const avatar = avatarMap[p.avatar] || '🦜';

          return (
            <div key={p._id} style={{
              ...styles.playerRow,
              borderColor: isMe ? 'var(--theme-primary)' : 'var(--divider)',
              backgroundColor: isMe ? 'rgba(255,255,255,0.05)' : 'var(--bg-card)',
              boxShadow: isMe ? `0 0 16px ${myTier.color}33` : '0 4px 6px rgba(0,0,0,0.2)'
            }}>
              <div style={{ ...styles.rankNum, color: idx < 3 ? '#FFD700' : 'var(--text-muted)' }}>{medal}</div>
              <div style={styles.avatarBox}>{avatar}</div>
              <div style={styles.playerInfo}>
                <span style={{ color: isMe ? 'var(--theme-primary)' : '#E2E8F0', fontWeight: isMe ? 900 : 700, fontSize: 14 }}>
                  {p.name} {isMe && <span style={{ fontSize: 10, opacity: 0.7 }}>(You)</span>}
                </span>
                <span style={{ color: pTier.color, fontSize: 10, fontWeight: 800, textTransform: 'uppercase' }}>
                  {pTier.icon} {pTier.name} · {p.lessonsCompleted} solved
                </span>
              </div>
              <div style={{ ...styles.playerXp, color: pTier.color }}>{p.xp} XP</div>
            </div>
          );
        })
      )}

      <div style={{ height: 100 }} />
    </div>
  );
};

const styles = {
  page: { padding: '20px', display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto', backgroundColor: 'var(--bg-dark)', gap: 12 },
  hero: { backgroundColor: 'var(--bg-card)', padding: '24px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 },
  title: { color: '#fff', fontSize: '28px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: 2, margin: 0 },
  tierBadge: { color: '#000', padding: '4px 16px', borderRadius: '24px', fontWeight: '900', textTransform: 'uppercase', fontSize: '12px', letterSpacing: 1, display: 'inline-block', marginTop: 6 },
  seasonBox: { backgroundColor: 'var(--bg-card)', border: '1px solid var(--divider)', borderRadius: 8, padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  tierBarContainer: { display: 'flex', gap: 4, alignItems: 'flex-start', marginBottom: 4 },
  tierSegment: { height: 6, borderRadius: 3, transition: 'all 0.3s' },
  leaderboardTitle: { color: '#fff', fontSize: '16px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: 1 },
  playerRow: { display: 'flex', alignItems: 'center', padding: '14px 16px', borderRadius: '8px', border: '2px solid', gap: '14px', transition: 'all 0.2s' },
  rankNum: { color: 'var(--text-muted)', fontSize: '16px', fontWeight: '900', width: '32px', textAlign: 'center', flexShrink: 0 },
  avatarBox: { fontSize: '22px', flexShrink: 0 },
  playerInfo: { display: 'flex', flexDirection: 'column', flex: 1, gap: '3px', minWidth: 0 },
  playerXp: { fontWeight: '800', fontSize: '15px', flexShrink: 0 }
};

export default League;

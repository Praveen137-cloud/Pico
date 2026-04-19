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
    // Corrected path to /api/auth/leaderboard
    api.get('/api/auth/leaderboard')
      .then(res => {
        setLeaderboard(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Leaderboard error:', err);
        setLoading(false);
      });

    const timer = setInterval(() => setCountdown(getResetCountdown()), 60000);
    return () => clearInterval(timer);
  }, []);

  const myEntry = leaderboard.find(p => p._id === authUser?._id);
  const userXP = myEntry?.xp ?? authUser?.xp ?? 0;
  const myTier = getTier(userXP);

  return (
    <div style={styles.page}>
      <div style={{ ...styles.hero, borderBottom: `4px solid ${myTier.color}`, boxShadow: `0 10px 40px -10px ${myTier.color}55` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 50 }}>{myTier.icon}</span>
          <div>
            <h2 style={styles.title}>The Elite Arena</h2>
            <div style={{ ...styles.tierBadge, backgroundColor: myTier.color }}>
              {myTier.name} League
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ color: myTier.color, fontWeight: 900, fontSize: 32 }}>{userXP.toLocaleString()} XP</div>
          <div style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 4, fontWeight: 700 }}>Global Standing</div>
        </div>
      </div>

      <div style={styles.seasonBox}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 20 }}>⏳</span>
          <span style={{ color: 'var(--text-muted)', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5 }}>Season Reset</span>
        </div>
        <span style={{ color: 'var(--theme-primary)', fontWeight: 900, fontSize: 18 }}>{countdown}</span>
      </div>

      <div style={styles.tierBarContainer}>
        {tiers.map((tier) => {
          const isActive = myTier.name === tier.name;
          return (
            <div key={tier.name} style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ ...styles.tierSegment, backgroundColor: isActive ? tier.color : '#2D3748', opacity: isActive ? 1 : 0.4, height: isActive ? 8 : 6 }} />
              <div style={{ fontSize: 10, marginTop: 6, color: isActive ? tier.color : 'var(--text-muted)', fontWeight: 900 }}>{tier.name}</div>
            </div>
          );
        })}
      </div>

      <div style={styles.rankListHeader}>
        <span>RANKING</span>
        <span>EXPERIENCE</span>
      </div>

      <div style={styles.leaderboard}>
        {loading ? (
          <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)', fontWeight: 800 }}>SYNCING DATALINK...</div>
        ) : leaderboard.length === 0 ? (
          <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: 60, fontWeight: 800 }}>No players in range. Start your ascent now!</div>
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
                backgroundColor: isMe ? 'rgba(29, 210, 139, 0.08)' : 'var(--bg-card)',
                transform: isMe ? 'scale(1.02)' : 'scale(1)',
                zIndex: isMe ? 2 : 1
              }}>
                <div style={styles.rankNum}>{medal}</div>
                <div style={styles.avatarBox}>{avatar}</div>
                <div style={styles.playerInfo}>
                  <div style={{ color: isMe ? 'var(--theme-primary)' : '#fff', fontWeight: 900, fontSize: 16 }}>
                    {p.name} {isMe && <span style={styles.meTag}>YOU</span>}
                  </div>
                  <div style={{ color: pTier.color, fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                    {pTier.name} League
                  </div>
                </div>
                <div style={{ ...styles.playerXp, color: pTier.color }}>{p.xp.toLocaleString()}</div>
              </div>
            );
          })
        )}
      </div>

      <div style={{ height: 100 }} />
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }
      `}</style>
    </div>
  );
};

const styles = {
  page: { padding: '24px', display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto', backgroundColor: 'var(--bg-dark)', gap: 16 },
  hero: { backgroundColor: 'var(--bg-card)', padding: '32px', borderRadius: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20, border: '1px solid var(--divider)' },
  title: { color: '#fff', fontSize: '30px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: 2, margin: 0 },
  tierBadge: { color: '#000', padding: '6px 20px', borderRadius: '30px', fontWeight: '900', textTransform: 'uppercase', fontSize: '12px', letterSpacing: 1.5, display: 'inline-block', marginTop: 8 },
  seasonBox: { backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--divider)', borderRadius: '16px', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  tierBarContainer: { display: 'flex', gap: 8, alignItems: 'center', margin: '8px 0' },
  tierSegment: { borderRadius: 4, transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)' },
  rankListHeader: { display: 'flex', justifyContent: 'space-between', padding: '0 16px', marginTop: 12, color: 'var(--text-muted)', fontSize: 11, fontWeight: 800, letterSpacing: 1.5 },
  leaderboard: { display: 'flex', flexDirection: 'column', gap: 12 },
  playerRow: { display: 'flex', alignItems: 'center', padding: '18px 20px', borderRadius: '16px', border: '1px solid', gap: '16px', transition: 'all 0.3s cubic-bezier(0.19, 1, 0.22, 1)' },
  rankNum: { color: '#fff', fontSize: '18px', fontWeight: '900', width: '40px', textAlign: 'center', flexShrink: 0 },
  avatarBox: { fontSize: '32px', flexShrink: 0 },
  playerInfo: { display: 'flex', flexDirection: 'column', flex: 1, gap: '4px', minWidth: 0 },
  playerXp: { fontWeight: '900', fontSize: '20px', flexShrink: 0, letterSpacing: 0.5 },
  meTag: { backgroundColor: 'var(--theme-primary)', color: '#000', fontSize: '9px', padding: '2px 6px', borderRadius: '4px', marginLeft: 8, verticalAlign: 'middle', letterSpacing: 1 }
};

export default League;

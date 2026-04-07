import React, { useState, useEffect, useContext } from 'react';
import api from '../api';
import { AuthContext } from '../context/AuthContext';
import { Target, Zap, Clock, Trophy, ChevronRight } from 'lucide-react';
import PreLoader from '../components/PreLoader';

const Missions = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Small delay for transition effect
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  const claimQuest = async (questId, xpReward) => {
    try {
      const res = await api.post('/api/quest/claim', { questId, xpReward });
      setUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const dailyQuests = [
    { id: 'quest_login', title: 'Daily Check-in', desc: 'Secure connection. Accessing The Arena.', xp: 50, icon: '🔑' },
    { id: 'quest_read', title: 'Intelligence Gathering', desc: 'Monitor the live lore broadcast feed.', xp: 100, icon: '📡' },
    { id: 'quest_streak', title: 'Streak Master', desc: 'Progress your coding streak at the Academy.', xp: 75, icon: '🔥' },
    { id: 'quest_problem', title: 'Algo Architect', desc: 'Finalize a training unit algorithm.', xp: 150, icon: '💻' },
    { id: 'quest_leaderboard', title: 'Climb the Ranks', desc: 'Compare your matrix performance on the leaderboard.', xp: 50, icon: '📈' },
    { id: 'quest_profile', title: 'Agent Identity', desc: 'Update your localized agent profile avatar.', xp: 100, icon: '👤' }
  ];

  if (isLoading) return <PreLoader />;

  return (
    <div style={styles.page}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <Target size={32} color="var(--theme-primary)" />
          <div style={{ marginLeft: 12 }}>
            <h1 style={styles.title}>Mission Control</h1>
            <p style={styles.subtitle}>PRIORITY OPERATIONS & DAILY OBJECTIVES</p>
          </div>
        </div>
        <div style={styles.statsPanel}>
          <div style={styles.miniStat}>
            <Zap size={14} color="var(--theme-primary)" />
            <span>{user?.xp || 0} XP</span>
          </div>
          <div style={styles.miniStat}>
            <Clock size={14} color="var(--theme-secondary)" />
            <span>{user?.streak || 0}d STREAK</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div style={styles.heroBanner}>
        <div style={styles.heroContent}>
          <h2 style={styles.heroTitle}>Agent Status: ACTIVE</h2>
          <p style={styles.heroDesc}>Complete your daily intelligence missions to earn XP and climb the Global Arena rankings.</p>
        </div>
        <div style={styles.heroBadge}>
          <Trophy size={40} color="var(--theme-primary)" />
        </div>
      </div>

      {/* Quests List */}
      <div style={styles.missionsList}>
        {dailyQuests.map((q, idx) => {
          const isClaimed = user?.questsClaimed?.includes(q.id);
          return (
            <div 
              key={q.id} 
              style={{
                ...styles.missionCard, 
                opacity: isClaimed ? 0.6 : 1,
                borderColor: isClaimed ? 'var(--divider)' : 'rgba(251, 191, 36, 0.3)',
                animationDelay: `${idx * 0.1}s`
              }}
              className="mission-card-animate"
            >
              <div style={styles.missionIconBox}>{q.icon}</div>
              <div style={styles.missionInfo}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={styles.missionName}>{q.title}</h3>
                  <span style={{ ...styles.xpBadge, color: isClaimed ? 'var(--text-muted)' : 'var(--theme-primary)' }}>
                    +{q.xp} XP
                  </span>
                </div>
                <p style={styles.missionDesc}>{q.desc}</p>
                <button 
                  style={{
                    ...styles.claimBtn,
                    backgroundColor: isClaimed ? 'var(--divider)' : 'var(--theme-primary)',
                    cursor: isClaimed ? 'default' : 'pointer'
                  }}
                  onClick={() => !isClaimed && claimQuest(q.id, q.xp)}
                  disabled={isClaimed}
                >
                  {isClaimed ? (
                    'OBJECTIVE COMPLETE ✓'
                  ) : (
                    <>
                      INITIALIZE MISSION <ChevronRight size={14} style={{ marginLeft: 4 }} />
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .mission-card-animate {
          animation: slideUp 0.5s ease-out forwards;
          opacity: 0;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{ height: 100 }} />
    </div>
  );
};

const styles = {
  page: { 
    padding: '24px', 
    backgroundColor: 'var(--bg-dark)', 
    minHeight: '100vh', 
    display: 'flex', 
    flexDirection: 'column', 
    gap: 20 
  },
  header: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: '16px',
    borderRadius: '12px',
    border: '1px solid var(--divider)'
  },
  headerLeft: { display: 'flex', alignItems: 'center' },
  title: { color: '#fff', fontSize: '24px', fontWeight: '900', margin: 0, letterSpacing: 1 },
  subtitle: { color: 'var(--text-muted)', fontSize: '10px', fontWeight: '800', margin: 0, letterSpacing: 2 },
  statsPanel: { display: 'flex', gap: 12 },
  miniStat: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: 6, 
    backgroundColor: 'rgba(255,255,255,0.05)', 
    padding: '6px 12px', 
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: '800',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.1)'
  },
  heroBanner: { 
    backgroundColor: 'var(--bg-card)', 
    padding: '24px', 
    borderRadius: '16px', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    border: '1px solid var(--divider)',
    backgroundImage: 'linear-gradient(45deg, rgba(251, 191, 36, 0.05) 0%, transparent 100%)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
  },
  heroContent: { flex: 1 },
  heroTitle: { color: 'var(--theme-primary)', fontSize: '18px', fontWeight: '900', margin: 0, letterSpacing: 1 },
  heroDesc: { color: 'var(--text-muted)', fontSize: '13px', marginTop: 8, lineHeight: '1.5', maxWidth: '80%' },
  heroBadge: { paddingLeft: 20 },
  missionsList: { display: 'flex', flexDirection: 'column', gap: 12 },
  missionCard: { 
    display: 'flex', 
    backgroundColor: 'var(--bg-card)', 
    padding: '16px', 
    borderRadius: '12px', 
    border: '1px solid', 
    gap: 16,
    transition: 'all 0.3s ease'
  },
  missionIconBox: { 
    fontSize: '28px', 
    width: '60px', 
    height: '60px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.05)'
  },
  missionInfo: { flex: 1, display: 'flex', flexDirection: 'column', gap: 4 },
  missionName: { color: '#fff', fontSize: '16px', fontWeight: '800', margin: 0 },
  missionDesc: { color: 'var(--text-muted)', fontSize: '12px', margin: '4px 0 12px 0', lineHeight: '1.4' },
  xpBadge: { fontSize: '12px', fontWeight: '900' },
  claimBtn: { 
    alignSelf: 'flex-start',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    color: '#000',
    fontWeight: '900',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: 1,
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.2s'
  }
};

export default Missions;

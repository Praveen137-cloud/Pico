import React, { useState, useEffect, useContext } from 'react';
import api from '../api';
import { AuthContext } from '../context/AuthContext';
import { useParams, useNavigate } from 'react-router-dom';

const Map = () => {
  const { subjectId, sectionId } = useParams();
  const { user: authUser, setUser } = useContext(AuthContext);
  const [stage, setStage] = useState(null);
  const [units, setUnits] = useState([]);
  const [subjectName, setSubjectName] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  const [toastType, setToastType] = useState('info');
  const navigate = useNavigate();

  // 1. Fetch Stage & Subject Info
  useEffect(() => {
    api.get('/api/curriculum/subjects')
      .then(res => {
        const subj = res.data.find(s => s._id === subjectId);
        if (subj) setSubjectName(subj.name);
      })
      .catch(err => console.error(err));

    api.get(`/api/curriculum/subjects/${subjectId}/stages`)
      .then(res => {
        const foundStage = res.data.find(s => s._id === sectionId);
        setStage(foundStage);
      })
      .catch(err => console.error(err));
  }, [subjectId, sectionId]);

  // 2. Fetch Units (Lazy Load 200 Units)
  useEffect(() => {
    if (!sectionId) return;
    api.get(`/api/curriculum/stages/${sectionId}/units`)
      .then(res => {
        setUnits(res.data);
      })
      .catch(err => console.error(err));
  }, [sectionId]);

  const getSubjectIcon = (name) => {
    const icons = {
      'Arrays': '🐘',
      'Linked Lists': '🦒',
      'Stacks & Queues': '🦓',
      'Recursion': '🦁',
      'Hashing': '🐆',
      'Trees': '🦅',
      'Graphs': '🐺',
      'Sorting': '🦌',
      'Dynamic Programming': '🐢',
      'Backtracking': '🦉'
    };
    return icons[name] || '📚';
  };

  if (!stage) return <div style={{ padding: 24, color: '#fff' }}>Initializing academic path...</div>;

  const totalUnits = units.length;
  // Progress Restore: Check authUser.completedUnits against fetched units
  const completedIds = authUser?.completedUnits?.map(id => id.toString()) || [];
  const completedCount = units.filter(u => completedIds.includes(u._id.toString())).length;
  const progressPct = totalUnits > 0 ? Math.round((completedCount / totalUnits) * 100) : 0;

  const handleUnitClick = (unit) => {
    navigate(`/lesson/${subjectId}/${sectionId}/${unit._id}`);
  };

  return (
    <div style={styles.page}>
      {/* Professional Grid Background Layer */}
      <div style={styles.wildlifeContainer}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <header style={styles.header}>
        <button style={styles.backBtn} onClick={() => navigate('/')}>←</button>
        <div style={{ flex: 1 }}>
          <div style={styles.subjectName}>{getSubjectIcon(subjectName)} {subjectName} ACADEMY</div>
          <div style={styles.sectionTitle}>{stage.title}</div>
        </div>
        <div style={styles.xpChip}>XP: {(authUser?.xp ?? 0)}</div>
      </header>

      {/* Section Progress Bar */}
      <div style={styles.progressContainer}>
        <div style={styles.progressHeader}>
          <span style={{ color: 'var(--text-muted)', fontSize: 12, fontWeight: 700 }}>
            PROGRESS
          </span>
          <span style={{ color: 'var(--theme-primary)', fontWeight: 900, fontSize: 13 }}>
            {completedCount} / {totalUnits} MODULES ANALYZED
          </span>
        </div>
        <div style={styles.progressTrack}>
          <div style={{
            ...styles.progressFill,
            width: `${progressPct}%`,
            backgroundColor: 'var(--theme-primary)',
            boxShadow: '0 0 12px var(--theme-primary)66'
          }} />
        </div>
      </div>

      <div style={styles.pathContainer}>
        <div style={styles.banner}>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 1.5 }}>Academic Research Module</div>
          <div style={{ color: '#fff', fontSize: 28, fontWeight: 900, marginTop: 4 }}>{stage.title}</div>
        </div>

        <div style={styles.nodesList}>
          {units.map((unit, index) => {
            // Zig-Zag Logic: Shift nodes left/right based on index
            const shift = index % 2 === 0 ? '40px' : '-40px';
            
            return (
              <div key={index} style={{ ...styles.nodeWrapper, transform: `translateX(${shift})` }}>
                {/* Periodically insert Gift Boxes (every 5 units) */}
                {index > 0 && index % 5 === 0 && (
                  <div style={{ ...styles.giftBoxContainer, transform: `translateX(${-parseFloat(shift)}px)` }}>
                     <div style={styles.giftLine} />
                     <div style={styles.giftBoxWrapper}>
                        <div style={styles.giftBoxGlow}></div>
                        <div style={styles.giftBox}>🎁</div>
                        <div style={styles.giftTag}>ELITE GIFT</div>
                     </div>
                     <div style={styles.giftLine} />
                  </div>
                )}

                <div
                  className={(unit.isUnlocked && !unit.isCompleted) ? 'animate-pulse' : ''}
                  style={{
                    ...styles.nodeCircle,
                    borderColor: unit.isUnlocked ? 'var(--theme-primary)' : 'var(--divider)',
                    backgroundColor: isDone ? '#1DD28B' : (unit.isUnlocked ? '#1E293B' : '#0F172A'),
                    opacity: unit.isUnlocked ? 1 : 0.5,
                    boxShadow: isDone ? '0 0 20px #1DD28Baa' : (unit.isUnlocked ? '0 0 15px rgba(29, 210, 139, 0.2)' : 'none')
                  }}
                  onClick={() => handleUnitClick(unit)}
                >
                  <span style={{ fontSize: isDone ? '28px' : '32px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                    {isDone ? '⭐' : (unit.isUnlocked ? '💠' : '🔒')}
                  </span>
                  
                  {/* Double XP Indicator */}
                  {index === 1 && unit.isUnlocked && (
                    <div style={styles.doubleXPBadge}>X2 XP</div>
                  )}
                </div>

                {/* XP Badge for completed units */}
                {unit.isCompleted && (
                  <div style={styles.xpBadge}>+{index === 1 ? '20' : '10'} XP CLAIMED</div>
                )}

                <div style={{ 
                  color: unit.isUnlocked ? '#fff' : '#718096', 
                  marginTop: 12, 
                  fontWeight: 900, 
                  textAlign: 'center', 
                  maxWidth: 140, 
                  fontSize: 14,
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: 0.5
                }}>
                  {unit.title}
                </div>

                {index < units.length - 1 && (
                  <div style={{
                    ...styles.pathLine,
                    backgroundColor: units[index + 1]?.isUnlocked ? 'var(--theme-primary)' : '#2D3748',
                    height: '60px',
                    transform: `rotate(${index % 2 === 0 ? '-15deg' : '15deg'}) translateY(-10px)`,
                    opacity: 0.6
                  }} />
                )}
              </div>
            );
          })}

          {units.length === 0 && (
            <div style={{ color: '#fff', textAlign: 'center', opacity: 0.5 }}>SYNCHRONIZING ACADEMIC CORE...</div>
          )}
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          ...styles.toast,
          backgroundColor: toastType === 'success' ? '#10B981' : 'var(--theme-primary)',
          boxShadow: toastType === 'success' ? '0 4px 24px rgba(16,185,129,0.5)' : '0 4px 12px rgba(0,0,0,0.3)'
        }}>
          {toastMessage}
        </div>
      )}

      <style>{`
        @keyframes toastIn {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes roam {
          0% { transform: translateX(-20px) scaleX(1); }
          50% { transform: translateX(20px) scaleX(-1); }
          100% { transform: translateX(-20px) scaleX(1); }
        }
        @keyframes graze {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(5px) rotate(5deg); }
        }
        @keyframes leafSway {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        .animate-pulse {
          animation: pulseGlow 2s infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px var(--theme-primary)66; }
          50% { box-shadow: 0 0 40px var(--theme-primary); }
        }
        @keyframes giftFloat {
          0%, 100% { transform: translateY(0) scale(1) rotate(0deg); }
          50% { transform: translateY(-15px) scale(1.1) rotate(5deg); }
        }
        @keyframes giftGlow {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.5); opacity: 0.6; }
          100% { transform: scale(1); opacity: 0.3; }
        }
        @keyframes missionGlow {
          0%, 100% { border-color: rgba(29, 210, 139, 0.5); }
          50% { border-color: rgba(255, 215, 0, 0.8); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

const styles = {
  page: { backgroundColor: 'var(--bg-dark)', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflowX: 'hidden' },
  wildlifeContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1,
    overflow: 'hidden'
  },
  header: { display: 'flex', alignItems: 'center', backgroundColor: '#10131C', padding: '16px', gap: '16px' },
  backBtn: { background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' },
  subjectName: { color: 'var(--text-muted)', fontSize: '12px', fontWeight: '600' },
  sectionTitle: { color: '#fff', fontSize: '18px', fontWeight: '800' },
  xpChip: { backgroundColor: 'rgba(255,215,0,0.15)', color: '#FFD700', padding: '6px 12px', borderRadius: '20px', fontWeight: 800, fontSize: 13, border: '1px solid rgba(255,215,0,0.3)' },
  progressContainer: { padding: '12px 24px', backgroundColor: '#10131C', borderBottom: '1px solid var(--divider)' },
  progressHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  progressTrack: { height: 8, borderRadius: 4, backgroundColor: 'var(--divider)', overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 4, transition: 'width 0.6s ease, background-color 0.4s ease' },
  pathContainer: { padding: '24px', display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center' },
  banner: { alignSelf: 'stretch', backgroundColor: 'var(--theme-primary)', padding: '24px', borderRadius: '16px', textAlign: 'center' },
  nodesList: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' },
  nodeWrapper: { display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' },
  nodeCircle: { borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', zIndex: 2, transition: 'transform 0.2s, box-shadow 0.2s' },
  xpBadge: { marginTop: 4, backgroundColor: 'rgba(255,215,0,0.2)', color: '#FFD700', fontSize: 10, fontWeight: 900, padding: '2px 8px', borderRadius: 12, border: '1px solid rgba(255,215,0,0.4)', letterSpacing: 0.5 },
  pathLine: { width: '4px', height: '40px', borderRadius: 2, marginTop: '8px', transition: 'background-color 0.4s' },
  trophyWrapper: { display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '16px' },
  trophy: { fontSize: '48px', transition: 'filter 0.4s' },
  badgeBanner: { marginTop: '40px', display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: 'rgba(255, 215, 0, 0.15)', padding: '20px 32px', borderRadius: '16px', border: '2px solid rgba(255, 215, 0, 0.4)', boxShadow: '0 0 30px rgba(255, 215, 0, 0.2)', animation: 'badgeShine 3s infinite linear' },
  badgeIcon: { fontSize: '40px', filter: 'drop-shadow(0 0 10px gold)' },
  badgeTitle: { color: '#FFD700', fontSize: '20px', fontWeight: '900', letterSpacing: '2px' },
  badgeSubtitle: { color: 'rgba(255, 215, 0, 0.7)', fontSize: '12px', fontWeight: '700' },
  toast: { position: 'fixed', bottom: '90px', left: '50%', transform: 'translateX(-50%)', color: '#fff', padding: '14px 28px', borderRadius: '28px', fontWeight: '700', zIndex: 100, whiteSpace: 'nowrap', animation: 'toastIn 0.3s ease-out', fontSize: 14 },
  
  // Mission Bar Styles
  missionBar: {
    position: 'fixed',
    top: '20px',
    left: '20px',
    right: '20px',
    backgroundColor: 'rgba(16, 19, 28, 0.95)',
    backdropFilter: 'blur(10px)',
    border: '2px solid var(--theme-primary)',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    zIndex: 1000,
    boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
    transition: 'all 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
    animation: 'missionGlow 3s infinite ease-in-out'
  },
  missionIcon: { fontSize: '32px' },
  missionLabel: { color: 'var(--theme-primary)', fontSize: '10px', fontWeight: '900', letterSpacing: '2px' },
  missionText: { color: '#fff', fontSize: '16px', fontWeight: '800' },
  missionProgress: { width: '40px', height: '40px', borderRadius: '50%', border: '4px solid rgba(255,255,255,0.1)', borderTopColor: 'var(--theme-primary)', position: 'relative' },
  missionProgressFill: { position: 'absolute', top: '-4px', left: '-4px', right: '-4px', bottom: '-4px', borderRadius: '50%', border: '4px solid transparent', borderTopColor: '#FFD700', animation: 'spin 2s linear infinite' },
  
  // Gift Box Styles
  giftBoxContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' },
  giftLine: { width: '4px', height: '30px', backgroundColor: 'var(--theme-primary)', opacity: 0.4 },
  giftBoxWrapper: { position: 'relative', margin: '15px 0' },
  giftBoxGlow: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80px', height: '80px', backgroundColor: 'var(--theme-primary)', borderRadius: '50%', filter: 'blur(25px)', animation: 'giftGlow 2s infinite ease-in-out' },
  giftBox: { fontSize: '50px', position: 'relative', zIndex: 2, animation: 'giftFloat 3s infinite ease-in-out', cursor: 'pointer' },
  giftTag: { position: 'absolute', top: '-10px', right: '-20px', backgroundColor: '#EC4899', color: '#fff', fontSize: '9px', fontWeight: '900', padding: '2px 8px', borderRadius: '4px', transform: 'rotate(15deg)', boxShadow: '0 4px 10px rgba(236,72,153,0.4)', zIndex: 3 },
  doubleXPBadge: { position: 'absolute', top: '-15px', right: '-15px', backgroundColor: '#FFD700', color: '#000', fontSize: '11px', fontWeight: '900', padding: '4px 8px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(255,215,0,0.5)', zIndex: 4, letterSpacing: '0.5px' }
};

export default Map;

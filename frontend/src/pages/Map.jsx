import React, { useState, useEffect, useContext } from 'react';
import api from '../api';
import { AuthContext } from '../context/AuthContext';
import { useParams, useNavigate } from 'react-router-dom';

const Map = () => {
  const { subjectId, sectionId } = useParams();
  const { user: authUser, setUser } = useContext(AuthContext);
  const [subject, setSubject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [toastType, setToastType] = useState('info'); // 'info' | 'success'
  const [isClaiming, setIsClaiming] = useState(false);
  const [showMissionBar, setShowMissionBar] = useState(false);
  const navigate = useNavigate();

  // Show mission bar on mount
  useEffect(() => {
    const timerDown = setTimeout(() => setShowMissionBar(true), 1000);
    const timerUp = setTimeout(() => setShowMissionBar(false), 5000);
    return () => { clearTimeout(timerDown); clearTimeout(timerUp); };
  }, []);

  // Subject Mastery Check
  useEffect(() => {
    if (!subject || !authUser || isClaiming) return;

    const allUnitsOverall = subject.sections.flatMap(s => s.units);
    const allCompleted = allUnitsOverall.every(u => u.isCompleted);
    const alreadyRewarded = authUser.completedSubjects && authUser.completedSubjects.includes(subject._id);

    if (allCompleted && !alreadyRewarded) {
      setIsClaiming(true);
      api.post(`/api/subjects/${subject._id}/complete`)
        .then(res => {
          if (res.data.success) {
            setUser(res.data.user);
            navigate('/celebration', { 
              state: { 
                type: 'subject', 
                subjectName: subject.name,
                xpReward: 500 
              } 
            });
          }
        })
        .catch(err => {
          console.error('Mastery check failed:', err);
          setIsClaiming(false);
        });
    }
  }, [subject, authUser, isClaiming, navigate, setUser]);

  useEffect(() => {
    api.get('/api/subjects')
      .then(res => {
        const subj = res.data.find(s => s._id === subjectId);
        setSubject(subj);
      })
      .catch(err => console.error(err));
  }, [subjectId]);

  if (!subject) return <div style={{ padding: 24, color: '#fff' }}>Loading path...</div>;

  const section = subject.sections.find(s => s._id === sectionId);
  if (!section) return <div style={{ padding: 24, color: '#fff' }}>Section not found.</div>;

  const totalUnits = section.units.length;
  const completedCount = section.units.filter(u => u.isCompleted).length;
  const progressPct = totalUnits > 0 ? Math.round((completedCount / totalUnits) * 100) : 0;
  const isComplete = completedCount === totalUnits && totalUnits > 0;

  // Global completion check for the Zoho Warrior Badge
  // We check if the user has completed a significant portion of the core curriculum
  const isZohoWarrior = (authUser?.completedUnits?.length || 0) >= 40;

  const handleUnitClick = (unit, index) => {
    if (!unit.isUnlocked) return;

    if (unit.lessons && unit.lessons.length > 0) {
      navigate(`/lesson/${subjectId}/${sectionId}/${unit._id}`);
    } else {
      setToastType('info');
      setToastMessage('Coming soon: Content is being cooked for this unit!');
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  const wildlife = [
    { icon: '🦌', top: '15%', left: '10%', anim: 'roam 15s infinite linear' },
    { icon: '🐄', top: '45%', right: '15%', anim: 'graze 8s infinite ease-in-out' },
    { icon: '🌿', top: '75%', left: '20%', anim: 'leafSway 4s infinite ease-in-out' },
    { icon: '🦌', top: '85%', right: '10%', anim: 'roam 18s infinite linear reverse' },
    { icon: '🌿', top: '25%', right: '25%', anim: 'leafSway 5s infinite ease-in-out' },
    { icon: '🐄', top: '65%', left: '5%', anim: 'graze 10s infinite ease-in-out' },
  ];

  return (
    <div style={styles.page}>
      {/* Nature & Wildlife Background Layer */}
      <div style={styles.wildlifeContainer}>
        {wildlife.map((w, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: w.top,
            left: w.left,
            right: w.right,
            fontSize: '32px',
            animation: w.anim,
            opacity: 0.4,
            filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))',
            pointerEvents: 'none',
            userSelect: 'none'
          }}>
            {w.icon}
          </div>
        ))}
      </div>

      {/* Daily Mission Bar - Top Overlay */}
      <div style={{
        ...styles.missionBar,
        transform: showMissionBar ? 'translateY(0)' : 'translateY(-140%)',
        opacity: showMissionBar ? 1 : 0
      }}>
        <div style={styles.missionIcon}>🎯</div>
        <div style={{ flex: 1 }}>
          <div style={styles.missionLabel}>DAILY MISSION ACTIVE</div>
          <div style={styles.missionText}>Complete Unit 2 to earn Double XP!</div>
        </div>
        <div style={styles.missionProgress}>
          <div style={styles.missionProgressFill}></div>
        </div>
      </div>

      <header style={styles.header}>
        <button style={styles.backBtn} onClick={() => navigate('/')}>←</button>
        <div style={{ flex: 1 }}>
          <div style={styles.subjectName}>{subject.name}</div>
          <div style={styles.sectionTitle}>{section.title}</div>
        </div>
        <div style={styles.xpChip}>+{(authUser?.xp ?? 0)} XP</div>
      </header>

      {/* Section Progress Bar */}
      <div style={styles.progressContainer}>
        <div style={styles.progressHeader}>
          <span style={{ color: 'var(--text-muted)', fontSize: 12, fontWeight: 700 }}>
            PROGRESS
          </span>
          <span style={{ color: isComplete ? '#10B981' : 'var(--theme-primary)', fontWeight: 900, fontSize: 13 }}>
            {completedCount} / {totalUnits} units {isComplete ? '✅' : ''}
          </span>
        </div>
        <div style={styles.progressTrack}>
          <div style={{
            ...styles.progressFill,
            width: `${progressPct}%`,
            backgroundColor: isComplete ? '#10B981' : 'var(--theme-primary)',
            boxShadow: isComplete ? '0 0 12px #10B981aa' : '0 0 12px var(--theme-primary)66'
          }} />
        </div>
      </div>

      <div style={styles.pathContainer}>
        <div style={styles.banner}>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 1.5 }}>Path to Mastery</div>
          <div style={{ color: '#fff', fontSize: 28, fontWeight: 900, marginTop: 4 }}>{section.title}</div>
        </div>

        <div style={styles.nodesList}>
          {section.units.map((unit, index) => {
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
                    backgroundColor: unit.isUnlocked ? 'var(--theme-primary)' : '#1A202C',
                    width: unit.isUnlocked ? '90px' : '70px',
                    height: unit.isUnlocked ? '90px' : '70px',
                    boxShadow: unit.isUnlocked 
                      ? `0 0 30px ${unit.isCompleted ? '#10B981' : 'var(--theme-primary)'}66, inset 0 0 15px rgba(255,255,255,0.2)` 
                      : '0 8px 16px rgba(0,0,0,0.4)',
                    cursor: unit.isUnlocked ? 'pointer' : 'not-allowed',
                    border: unit.isUnlocked ? `3px solid ${unit.isCompleted ? '#10B981' : '#fff'}` : '3px solid transparent',
                    position: 'relative',
                    background: unit.isUnlocked 
                      ? `radial-gradient(circle at 30% 30%, ${unit.isCompleted ? '#34D399' : 'var(--theme-primary)'}, ${unit.isCompleted ? '#059669' : '#107c58'})`
                      : '#2D3748'
                  }}
                  onClick={() => handleUnitClick(unit, index)}
                >
                  <span style={{ fontSize: unit.isUnlocked ? '32px' : '24px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                    {unit.isCompleted ? '⭐' : (unit.isUnlocked ? '🦜' : '🔒')}
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

                {index < section.units.length - 1 && (
                  <div style={{
                    ...styles.pathLine,
                    backgroundColor: section.units[index + 1]?.isUnlocked ? 'var(--theme-primary)' : '#2D3748',
                    height: '60px',
                    transform: `rotate(${index % 2 === 0 ? '-15deg' : '15deg'}) translateY(-10px)`,
                    opacity: 0.6
                  }} />
                )}
              </div>
            );
          })}

          {section.units.length === 0 && (
            <div style={{ color: '#fff' }}>No units in this section yet.</div>
          )}

          {section.units.length > 0 && (
            <div style={styles.trophyWrapper}>
              <div style={{
                ...styles.trophy,
                filter: isComplete ? 'drop-shadow(0 0 16px gold)' : 'grayscale(0.7) opacity(0.5)'
              }}>🏆</div>
              <div style={{ color: isComplete ? '#FFD700' : 'var(--text-muted)', marginTop: 8, fontWeight: 700, fontSize: 14 }}>
                {isComplete ? 'Section Complete!' : 'Finish the Section!'}
              </div>
            </div>
          )}

          {isZohoWarrior && (
            <div style={styles.badgeBanner}>
              <div style={styles.badgeIcon}>🏅</div>
              <div>
                <div style={styles.badgeTitle}>ZOHO WARRIOR</div>
                <div style={styles.badgeSubtitle}>Core Curriculum Mastered</div>
              </div>
            </div>
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

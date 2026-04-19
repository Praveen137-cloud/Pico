import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useNavigate, useLocation } from 'react-router-dom';
import LivingCharacter from '../components/LivingCharacter';

const celebrationSfx = 'https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3';

const Celebration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { subjectId, sectionId, type, subjectName, xpReward, score, totalQuestions, timeSpent } = location.state || {};
  const [showConfetti, setShowConfetti] = useState(true);

  const isMastery = type === 'subject';

  useEffect(() => {
    // Play sound upon entering
    const audio = new Audio(celebrationSfx);
    audio.play().catch(e => console.log('Audio error:', e));

    // Play giggle sound for the mascot
    const giggle = new Audio('https://assets.mixkit.co/active_storage/sfx/2658/2658-preview.mp3');
    giggle.volume = 0.5;
    giggle.play().catch(() => {});

    // Stop confetti after 7 seconds for mastery
    const timer = setTimeout(() => setShowConfetti(false), isMastery ? 7000 : 5000);
    return () => clearTimeout(timer);
  }, [isMastery]);

  return (
    <div style={styles.page}>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={isMastery} numberOfPieces={isMastery ? 800 : 500} />}
      
      <header style={styles.header}>
        <button 
          style={styles.backBtn} 
          onClick={() => (subjectId && sectionId) ? navigate(`/map/${subjectId}/${sectionId}`) : navigate('/home')}
        >&larr;</button>
      </header>

      <div style={styles.content}>
        <div style={styles.icon}>{isMastery ? '👑' : '🎉'}</div>
        <h1 style={styles.title}>
          {isMastery ? `${subjectName} Mastered!` : 'Unit Complete!'}
        </h1>
        <div style={styles.birdHeroWrapper} className="laughing-mascot">
          <LivingCharacter 
            character="pico" 
            state="happy" 
            size={220} 
          />
        </div>
        
        <div style={{...styles.messageBox, border: isMastery ? '2px solid gold' : '1px solid var(--theme-primary)', color: isMastery ? 'gold' : 'var(--theme-primary)'}}>
          {isMastery 
            ? `Tremendous! Every unit in ${subjectName} has been fully mastered! You are a Pico Legend!`
            : "Awesome work! You're making great progress!"}
        </div>

        <div style={{...styles.xpCard, borderColor: isMastery ? 'gold' : '#F59E0B'}}>
          <div style={{color: 'var(--text-muted)', fontSize: '14px', fontWeight: 'bold'}}>Mastery Reward</div>
          <div style={{color: isMastery ? 'gold' : '#F59E0B', fontSize: '48px', fontWeight: '800'}}>+{xpReward || 10} XP</div>
        </div>

        {/* Stats Row Hidden per User Request: scores were inaccurate */}
      </div>

      <div style={styles.footer}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '500px' }}>
          {isMastery && (
            <button 
              style={{...styles.btnPrimary, backgroundColor: 'gold', color: '#000'}} 
              onClick={() => navigate('/certificate', { state: { subjectName } })}
            >
              📜 Claim Elite Certificate
            </button>
          )}
          <button 
            style={styles.btnPrimary} 
            onClick={() => (subjectId && sectionId) ? navigate(`/map/${subjectId}/${sectionId}`) : navigate('/home')}
          >
            { (subjectId && sectionId) ? 'Back to Map' : 'Back to Lessons' }
          </button>
        </div>
      </div>
      <style>{`
        @keyframes picoVictoryDance {
          0%, 100% { transform: translateY(0) scale(1.1) rotate(0deg); filter: drop-shadow(0 0 40px rgba(0, 242, 255, 0.4)); }
          25% { transform: translateY(-30px) scale(1.3) rotate(-5deg); filter: drop-shadow(0 0 60px rgba(0, 242, 255, 0.6)); }
          50% { transform: translateY(0) scale(1.1) rotate(5deg); filter: drop-shadow(0 0 40px rgba(0, 242, 255, 0.4)); }
          75% { transform: translateY(-15px) scale(1.2) rotate(0deg); filter: drop-shadow(0 0 50px rgba(0, 242, 255, 0.5)); }
        }
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 10px #F59E0B; }
          50% { text-shadow: 0 0 30px #F59E0B; }
        }
        @keyframes laughJitter {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .xp-display {
           animation: textGlow 2s infinite ease-in-out;
        }
        .laughing-mascot {
           animation: laughJitter 0.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

const styles = {
  page: { 
    minHeight: '100vh', 
    background: 'radial-gradient(circle at 50% 50%, #101827 0%, #050505 100%)', 
    display: 'flex', 
    flexDirection: 'column',
    overflow: 'hidden'
  },
  header: { padding: '16px' },
  backBtn: { background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' },
  content: { 
    flex: 1, 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    padding: '10px 20px', 
    textAlign: 'center', 
    justifyContent: 'center',
    gap: '12px',
    maxHeight: 'calc(100vh - 160px)'
  },
  icon: { fontSize: '40px', marginBottom: '4px' },
  title: { color: 'var(--theme-primary)', fontSize: 'clamp(20px, 6vw, 32px)', fontWeight: '900', marginBottom: '2px', letterSpacing: '1px', textTransform: 'uppercase' },
  messageBox: { 
    width: '100%', 
    maxWidth: '450px', 
    padding: '12px', 
    borderRadius: '16px', 
    background: 'rgba(0, 242, 255, 0.05)',
    border: '1px solid rgba(0, 242, 255, 0.2)', 
    color: '#fff', 
    fontWeight: '600', 
    marginBottom: '8px',
    backdropFilter: 'blur(10px)',
    fontSize: 'clamp(12px, 3.5vw, 16px)'
  },
  xpCard: { 
    width: '100%', 
    maxWidth: '450px', 
    background: 'rgba(245, 158, 11, 0.05)', 
    border: '2px solid #F59E0B', 
    borderRadius: '20px', 
    padding: '16px 24px', 
    marginBottom: '8px',
    boxShadow: '0 0 20px rgba(245, 158, 11, 0.1)'
  },
  statsRow: { width: '100%', maxWidth: '500px', display: 'flex', gap: '16px', marginBottom: '32px' },
  statBox: { flex: 1, backgroundColor: 'var(--bg-card)', padding: '16px', borderRadius: '12px' },
  footer: { padding: '16px', display: 'flex', justifyContent: 'center' },
  btnPrimary: { width: '100%', maxWidth: '450px', backgroundColor: 'var(--theme-primary)', color: '#0F172A', padding: '12px', borderRadius: '12px', border: 'none', fontWeight: '700', fontSize: '16px', cursor: 'pointer' },
  birdHeroWrapper: {
    width: 'clamp(120px, 35vw, 200px)',
    height: 'clamp(120px, 35vw, 200px)',
    marginBottom: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    animation: 'picoVictoryDance 2s infinite var(--spring-bounce)',
    mixBlendMode: 'screen'
  }
};

export default Celebration;

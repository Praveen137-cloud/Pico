import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useNavigate, useLocation } from 'react-router-dom';

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
          onClick={() => (subjectId && sectionId) ? navigate(`/map/${subjectId}/${sectionId}`) : navigate('/')}
        >&larr;</button>
      </header>

      <div style={styles.content}>
        <div style={styles.icon}>{isMastery ? '👑' : '🎉'}</div>
        <h1 style={styles.title}>
          {isMastery ? `${subjectName} Mastered!` : 'Lesson Complete!'}
        </h1>
        <div style={styles.birdHeroWrapper}>
          <img src="/pico-bird.png" alt="Pico Hero" style={styles.picoBirdHero} />
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
            onClick={() => (subjectId && sectionId) ? navigate(`/map/${subjectId}/${sectionId}`) : navigate('/')}
          >
            { (subjectId && sectionId) ? 'Back to Map' : 'Back to Lessons' }
          </button>
        </div>
      </div>
      <style>{`
        @keyframes picoHeroBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
      `}</style>
    </div>
  );
};

const styles = {
  page: { minHeight: '100vh', backgroundColor: 'var(--bg-dark)', display: 'flex', flexDirection: 'column' },
  header: { padding: '16px' },
  backBtn: { background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' },
  content: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', textAlign: 'center' },
  icon: { fontSize: '64px', marginBottom: '16px' },
  title: { color: 'var(--theme-primary)', fontSize: '28px', fontWeight: '800', marginBottom: '24px' },
  messageBox: { width: '100%', maxWidth: '500px', padding: '16px', borderRadius: '12px', border: '1px solid var(--theme-primary)', color: 'var(--theme-primary)', fontWeight: '600', marginBottom: '32px' },
  xpCard: { width: '100%', maxWidth: '500px', backgroundColor: 'var(--bg-card)', border: '2px solid #F59E0B', borderRadius: '12px', padding: '24px', marginBottom: '16px' },
  statsRow: { width: '100%', maxWidth: '500px', display: 'flex', gap: '16px', marginBottom: '32px' },
  statBox: { flex: 1, backgroundColor: 'var(--bg-card)', padding: '16px', borderRadius: '12px' },
  footer: { padding: '24px', display: 'flex', justifyContent: 'center' },
  btnPrimary: { width: '100%', maxWidth: '500px', backgroundColor: 'var(--theme-primary)', color: '#0F172A', padding: '16px', borderRadius: '12px', border: 'none', fontWeight: '700', fontSize: '18px', cursor: 'pointer' },
  birdHeroWrapper: {
    width: '180px',
    height: '180px',
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    animation: 'picoHeroBounce 2s infinite ease-in-out'
  },
  picoBirdHero: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    mixBlendMode: 'multiply'
  }
};

export default Celebration;

import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useNavigate, useLocation } from 'react-router-dom';

const celebrationSfx = 'https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3';

const Celebration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { subjectId, sectionId } = location.state || {};
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Play sound upon entering
    const audio = new Audio(celebrationSfx);
    audio.play().catch(e => console.log('Audio error:', e));

    // Stop confetti after 5 seconds to reduce CPU
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.page}>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={500} />}
      
      <header style={styles.header}>
        <button 
          style={styles.backBtn} 
          onClick={() => (subjectId && sectionId) ? navigate(`/map/${subjectId}/${sectionId}`) : navigate('/')}
        >&larr;</button>
      </header>

      <div style={styles.content}>
        <div style={styles.icon}>🎉</div>
        <h1 style={styles.title}>Lesson Complete!</h1>
        <div style={{fontSize: '64px', marginBottom: '24px'}}>🦜</div>
        
        <div style={styles.messageBox}>
          Awesome work! You're making great progress!
        </div>

        <div style={styles.xpCard}>
          <div style={{color: 'var(--text-muted)', fontSize: '14px', fontWeight: 'bold'}}>XP Earned</div>
          <div style={{color: '#F59E0B', fontSize: '32px', fontWeight: '800'}}>+10</div>
        </div>

        <div style={styles.statsRow}>
          <div style={styles.statBox}>
            <div style={{color: 'var(--text-muted)'}}>Score</div>
            <div style={{color: '#fff', fontSize: '24px', fontWeight: '700'}}>3/3</div>
          </div>
          <div style={styles.statBox}>
            <div style={{color: 'var(--text-muted)'}}>Time</div>
            <div style={{color: '#fff', fontSize: '24px', fontWeight: '700'}}>45s</div>
          </div>
        </div>
      </div>

      <div style={styles.footer}>
        <button 
          style={styles.btnPrimary} 
          onClick={() => (subjectId && sectionId) ? navigate(`/map/${subjectId}/${sectionId}`) : navigate('/')}
        >
          { (subjectId && sectionId) ? 'Back to Map' : 'Back to Lessons' }
        </button>
      </div>
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
  btnPrimary: { width: '100%', maxWidth: '500px', backgroundColor: 'var(--theme-primary)', color: '#0F172A', padding: '16px', borderRadius: '12px', border: 'none', fontWeight: '700', fontSize: '18px', cursor: 'pointer' }
};

export default Celebration;

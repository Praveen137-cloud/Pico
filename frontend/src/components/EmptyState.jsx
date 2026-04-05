import React from 'react';

const EmptyState = ({ subjectName }) => {
  return (
    <div style={styles.container}>
      <div style={styles.iconWrapper}>
        <div style={styles.spiderWeb}>🕸️</div>
        <div style={styles.spider}>🕷️</div>
      </div>
      
      <div style={styles.textWrapper}>
        <h2 style={styles.title}>WORK IN PROGRESS</h2>
        <p style={styles.subtitle}>
          The Pico Spider is weaving the **{subjectName}** lessons right now!
        </p>
      </div>

      <div style={styles.badge}>
        <span style={styles.badgeText}>COMING SOON</span>
      </div>

      <style>{`
        @keyframes webPulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.6; }
          50% { transform: scale(1.1) rotate(5deg); opacity: 0.8; }
        }
        @keyframes spiderSwing {
          0%, 100% { transform: translateY(0) rotate(-10deg); }
          50% { transform: translateY(20px) rotate(10deg); }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 24px',
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderRadius: '16px',
    border: '2px dashed rgba(255,255,255,0.1)',
    margin: '20px',
  },
  iconWrapper: {
    position: 'relative',
    fontSize: '80px',
    marginBottom: '24px',
  },
  spiderWeb: {
    animation: 'webPulse 4s infinite ease-in-out',
    filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.2))',
  },
  spider: {
    position: 'absolute',
    top: '40px',
    right: '-10px',
    fontSize: '40px',
    animation: 'spiderSwing 3s infinite ease-in-out',
  },
  textWrapper: {
    maxWidth: '400px',
  },
  title: {
    color: '#fff',
    fontSize: '24px',
    fontWeight: '900',
    letterSpacing: '4px',
    marginBottom: '12px',
    textTransform: 'uppercase',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '15px',
    lineHeight: '1.6',
    fontWeight: '500',
  },
  badge: {
    marginTop: '32px',
    backgroundColor: 'rgba(255, 68, 68, 0.15)',
    padding: '8px 20px',
    borderRadius: '20px',
    border: '1px solid rgba(255, 68, 68, 0.3)',
  },
  badgeText: {
    color: '#FF4444',
    fontSize: '12px',
    fontWeight: '900',
    letterSpacing: '2px',
  }
};

export default EmptyState;

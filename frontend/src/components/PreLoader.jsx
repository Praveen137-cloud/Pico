import React from 'react';

const PreLoader = () => {
  return (
    <div style={styles.overlay}>
      <div style={styles.content}>
        <div style={styles.iconContainer}>
          <div style={styles.picoBird}>🦜</div>
          <div style={styles.theGoat}>🐐</div>
        </div>
        
        <div style={styles.textContainer}>
          <h1 style={styles.title}>PREPARING THE ARENA</h1>
          <p style={styles.subtitle}>Pico & The Goat are gathering knowledge...</p>
        </div>

        <div style={styles.progressTrack}>
          <div style={styles.progressFill} />
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 68, 68, 0.4); }
          50% { box-shadow: 0 0 40px rgba(255, 68, 68, 0.8); }
        }
        @keyframes loadingFill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#0A0C14',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
  },
  iconContainer: {
    display: 'flex',
    gap: '40px',
    fontSize: '80px',
  },
  picoBird: {
    animation: 'bounce 1s infinite ease-in-out',
    filter: 'drop-shadow(0 0 15px #FF4444)',
  },
  theGoat: {
    animation: 'bounce 1s infinite ease-in-out 0.2s',
    filter: 'drop-shadow(0 0 15px #FFD700)',
  },
  textContainer: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '28px',
    fontWeight: '900',
    letterSpacing: '4px',
    margin: 0,
    textTransform: 'uppercase',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: '14px',
    fontWeight: '600',
    marginTop: '8px',
  },
  progressTrack: {
    width: '300px',
    height: '6px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '3px',
    overflow: 'hidden',
    marginTop: '16px',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FF4444',
    width: '0%',
    animation: 'loadingFill 2s infinite ease-in-out',
    boxShadow: '0 0 10px #FF4444',
  },
};

export default PreLoader;

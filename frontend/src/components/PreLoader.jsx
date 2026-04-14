import React, { useEffect, useState } from 'react';
import { wakeBackend } from '../utils/wakeUp';

const PreLoader = ({ onReady }) => {
  const [statusMessage, setStatusMessage] = useState('PREPARING THE ARENA');
  const [isWaking, setIsWaking] = useState(false);

  useEffect(() => {
    let mounted = true;

    const performWakeUp = async () => {
      // ⏱️ Start a series of status updates to keep the user engaged
      const statusInterval = setInterval(() => {
        if (!mounted) return;
        const messages = [
          'SIGNAL WEAK... RE-ESTABLISHING LINK',
          'CALIBRATING SYNC...',
          'BYPASSING FIREWALL...',
          'CONNECTING TO CORE...',
          'OPTIMIZING DATA FLOW...',
          'STILL WAITING FOR ENGINE RESPONSE...'
        ];
        setStatusMessage(prev => {
          const idx = messages.indexOf(prev);
          return messages[(idx + 1) % messages.length] || messages[0];
        });
        setIsWaking(true);
      }, 8000);

      const success = await wakeBackend();
      clearInterval(statusInterval);

      if (mounted) {
        if (success) {
          setStatusMessage('ENGINE ONLINE. ENTERING MATRIX...');
          setTimeout(() => {
            if (mounted && onReady) onReady();
          }, 800);
        } else {
          setStatusMessage('CRITICAL LATENCY DETECTED. RETRY SYNC.');
        }
      }
    };

    performWakeUp();
    return () => { mounted = false; };
  }, [onReady]);

  return (
    <>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <div style={styles.iconContainer}>
            <img src="/pico-bird.png" alt="Pico" style={styles.picoBirdImg} />
            <div style={styles.theGoat}>🐐</div>
          </div>
          
          <div style={styles.textContainer}>
            <h1 style={styles.title}>
              {isWaking ? 'ENGINE INITIALIZING' : 'PREPARING THE ARENA'}
            </h1>
            <p style={styles.subtitle}>{statusMessage}</p>
          </div>

          <div style={styles.progressTrack}>
            <div style={styles.progressFill} />
          </div>

          {(statusMessage.includes('LATENCY') || isWaking) && (
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={() => window.location.reload()}
                style={styles.retryBtn}
              >
                REFRESH LINK
              </button>
              {statusMessage.includes('WAITING') && (
                <button 
                  onClick={() => window.open('mailto:support@pico.api', '_blank')}
                  style={{ ...styles.retryBtn, borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.5)' }}
                >
                  REPORT DELAY
                </button>
              )}
            </div>
          )}
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
    </>
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
  picoBirdImg: {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
    animation: 'bounce 1s infinite ease-in-out',
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
  retryBtn: {
    marginTop: '20px',
    padding: '12px 24px',
    backgroundColor: 'transparent',
    border: '1px solid #FF4444',
    color: '#FF4444',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '900',
    letterSpacing: '1px',
    transition: 'all 0.2s',
  }
};

export default PreLoader;

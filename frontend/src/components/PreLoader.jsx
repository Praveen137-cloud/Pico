import React, { useEffect, useState } from 'react';
import { wakeBackend } from '../utils/wakeUp';

const PreLoader = ({ onReady }) => {
  const [logs, setLogs] = useState(['[SYSTEM] BOOT SEQUENCE INITIATED...']);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    const performWakeUp = async () => {
      const bootMessages = [
        '[V-SYNC] ESTABLISHING NEURAL LINK...',
        '[CORE] MOUNTING DATABASES [OK]',
        '[SECURITY] FIREWALL BYPASS: SUCCESS',
        '[NETWORK] OPENING WEBSOCKET PROTOCOLS...',
        '[ASSETS] PRE-FETCHING MODELS & TEXTURES...',
        '[ENGINE] ALL SYSTEMS NOMINAL. AWAITING TICK...'
      ];

      let msgIndex = 0;
      const statusInterval = setInterval(() => {
        if (!mounted) return;
        if (msgIndex < bootMessages.length) {
          setLogs(prev => [...prev, bootMessages[msgIndex]]);
          msgIndex++;
        }
      }, 1500);

      const success = await wakeBackend();
      
      if (mounted) {
        clearInterval(statusInterval);
        if (success) {
          setLogs(prev => [...prev, '[SYSTEM] ENGINE ONLINE. MATRIX INITIALIZED.']);
          setIsReady(true);
          setTimeout(() => {
            if (mounted && onReady) onReady();
          }, 1200);
        } else {
          setLogs(prev => [...prev, '[ERROR] CRITICAL LATENCY TIMEOUT. RETRYING SYNC...']);
        }
      }
    };

    performWakeUp();
    return () => { mounted = false; };
  }, [onReady]);

  return (
    <>
      <div style={styles.overlay} className={isReady ? 'hyperspace-exit' : ''}>
        <div style={styles.terminalContainer}>
          <div style={styles.terminalHeader}>
            <div style={styles.terminalDot} />
            <div style={{...styles.terminalDot, backgroundColor: '#FDB813'}} />
            <div style={{...styles.terminalDot, backgroundColor: '#27C93F'}} />
            <span style={{marginLeft: 10, fontSize: 12, color: '#555'}}>pico_elite_boot.exe</span>
          </div>
          <div style={styles.terminalBody}>
            {logs.map((log, i) => (
              <div key={i} style={styles.logLine}>
                <span style={styles.logArrow}>&gt;</span> {log}
              </div>
            ))}
            {!isReady && (
              <div style={styles.logLine}>
                <span style={styles.logArrow}>&gt;</span> <span style={styles.cursor}>_</span>
              </div>
            )}
            
            {logs.some(l => l && typeof l === 'string' && l.includes('ERROR')) && (
              <div style={{ marginTop: '20px' }}>
                <button 
                  onClick={() => window.location.reload()}
                  style={styles.retryBtn}
                >
                  [REBOOT SYSTEM]
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .hyperspace-exit {
          animation: hyperspace 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
          pointer-events: none;
        }
        @keyframes hyperspace {
          0% { transform: scale(1) translateZ(0); opacity: 1; filter: brightness(1); }
          40% { transform: scale(1.1) translateZ(50px); filter: brightness(1.5); }
          100% { transform: scale(0) translateZ(-1000px) rotate(10deg); opacity: 0; filter: blur(20px) brightness(3); }
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
    backgroundColor: '#050505',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  terminalContainer: {
    width: '90%',
    maxWidth: '600px',
    backgroundColor: '#0a0a0a',
    border: '1px solid #333',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 0 30px rgba(0, 255, 0, 0.1)',
  },
  terminalHeader: {
    backgroundColor: '#1a1a1a',
    padding: '10px 15px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #333',
  },
  terminalDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#FF5F56',
    marginRight: '8px',
  },
  terminalBody: {
    padding: '20px',
    minHeight: '300px',
    color: '#00FF41',
    fontFamily: '"Fira Code", monospace, Consolas',
    fontSize: '14px',
    lineHeight: '1.6',
  },
  logLine: {
    animation: 'slideUpFade 0.3s ease-out',
    marginBottom: '8px',
  },
  logArrow: {
    color: '#008F11',
    marginRight: '8px',
  },
  cursor: {
    animation: 'blink 1s step-end infinite',
  },
  retryBtn: {
    padding: '8px 16px',
    backgroundColor: 'transparent',
    border: '1px solid #00FF41',
    color: '#00FF41',
    cursor: 'pointer',
    fontFamily: 'monospace',
    marginTop: '16px',
  }
};

export default PreLoader;

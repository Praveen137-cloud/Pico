import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Diagnostics = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const checkShield = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get('/api/auth/service-status');
      setStatus(res.data);
    } catch (err) {
      console.error('Core diagnostic failed:', err);
      setError(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkShield();
  }, []);

  return (
    <div id="safe-diag-root" style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: '#000',
      color: '#0f0',
      padding: '20px',
      fontFamily: 'Courier New, monospace',
      zIndex: 999999, // Ensure it's above EVERYTHING
      overflowY: 'auto',
      display: 'block' // Force display
    }}>
      <h1 style={{ borderBottom: '2px solid #0f0', paddingBottom: '10px' }}>
        🛡️ PICO SYSTEM SAFE-MODE DIAGNOSTICS
      </h1>
      
      <div style={{ margin: '20px 0', padding: '15px', border: '1px dashed #0f0' }}>
        <p>AGENT: PRAVEEN [SYSTEM_ADMIN]</p>
        <p>TIMESTAMP: {new Date().toISOString()}</p>
        <p>SCAN_TYPE: SMTP & DB INTEGRITY</p>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <p style={{ fontSize: '24px' }}>⏳ SCANNING BIOMETRICS...</p>
        </div>
      ) : error ? (
        <div style={{ color: '#f00', border: '1px solid #f00', padding: '20px' }}>
          <h3>❌ CRITICAL_ERROR_DETECTED</h3>
          <p>{error}</p>
          <button onClick={checkShield} style={{
            background: '#f00', color: '#fff', border: 'none', padding: '10px', marginTop: '10px', cursor: 'pointer'
          }}>RE-ATTEMPT SCAN</button>
        </div>
      ) : (
        <div style={{ lineHeight: '1.8' }}>
          <p>📡 EMAIL SERVICE: <span style={{ color: status.emailService === 'READY' ? '#0f0' : '#f00' }}>
            {status.emailService === 'READY' ? '✅ ONLINE' : '❌ OFFLINE'}
          </span></p>
          
          {status.emailError && (
            <p style={{ color: '#f00' }}>- ERROR_LOG: {status.emailError}</p>
          )}

          <p>🗄️ DATABASE: <span style={{ color: status.envStatus.MONGODB === 'CONNECTED' ? '#0f0' : '#f00' }}>
            {status.envStatus.MONGODB === 'CONNECTED' ? '✅ SYNCED' : '❌ DISCONNECTED'}
          </span></p>

          <h3 style={{ marginTop: '30px' }}>🔐 ENVIRONMENT_MANIFEST:</h3>
          <ul>
            <li>EMAIL_USER: {status.envStatus.EMAIL_USER ? 'FOUND' : 'MISSING'}</li>
            <li>EMAIL_PASS: {status.envStatus.EMAIL_PASS ? 'FOUND' : 'MISSING'}</li>
            <li>JWT_SECRET: {status.envStatus.JWT_SECRET ? 'FOUND' : 'MISSING'}</li>
          </ul>
          
          <div style={{ marginTop: '40px', fontSize: '12px', color: '#666' }}>
            NOTICE: This is an unstyled Safe-Mode render to bypass UI conflicts.
          </div>
          
          <button onClick={() => window.location.href = '/home'} style={{
            background: '#0f0', color: '#000', border: 'none', padding: '10px 20px', marginTop: '20px', cursor: 'pointer', fontWeight: 'bold'
          }}>RETURN TO HQ</button>
        </div>
      )}
    </div>
  );
};

export default Diagnostics;

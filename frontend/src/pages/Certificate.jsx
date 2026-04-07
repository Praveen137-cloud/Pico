import React, { useContext, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Certificate = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const certRef = useRef();

  const { subjectName } = location.state || { subjectName: 'DSA Mastery' };
  const dateStr = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', month: 'long', day: 'numeric' 
  });

  const handleDownload = () => {
    // In a real app, we'd use html2canvas or similar.
    // For now, we provide a "Save as Image" prompt hint.
    window.print();
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <button style={styles.backBtn} onClick={() => navigate(-1)}>← GO BACK</button>
        <button style={styles.downloadBtn} onClick={handleDownload}>SAVE CERTIFICATE</button>
      </header>

      <div style={styles.certContainer} ref={certRef}>
        <div style={styles.borderLayer}>
          <div style={styles.glassLayer}>
            <div style={styles.innerContent}>
              <div style={styles.badge}>🦜</div>
              <h1 style={styles.title}>CERTIFICATE OF MASTERY</h1>
              <p style={styles.subtitle}>OFFICIALLY AWARDED BY PICO ELITE</p>
              
              <div style={styles.divider} />
              
              <p style={styles.presentedTo}>PROUDLY PRESENTED TO</p>
              <h2 style={styles.userName}>{user?.name?.toUpperCase() || 'ELITE STUDENT'}</h2>
              
              <p style={styles.forCompleting}>For successfully completing the comprehensive training in</p>
              <h3 style={styles.subjectName}>{subjectName}</h3>
              
              <div style={styles.statsRow}>
                <div style={styles.statBox}>
                  <div style={styles.statLabel}>COMPLEXITY LEVEL</div>
                  <div style={styles.statValue}>ELITE</div>
                </div>
                <div style={styles.statBox}>
                  <div style={styles.statLabel}>DATE ISSUED</div>
                  <div style={styles.statValue}>{dateStr}</div>
                </div>
              </div>

              <div style={styles.sealContainer}>
                <div style={styles.seal}>
                  <div style={styles.sealInner}>PICO<br/>ELITE</div>
                </div>
                <div style={styles.signatureBox}>
                  <div style={styles.signature}>🦜 Pico</div>
                  <div style={styles.signLabel}>Master Sensei</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <p style={styles.hint}>Tip: Use the "Save Certificate" button to print or save this as a PDF/Image!</p>
    </div>
  );
};

const styles = {
  page: { backgroundColor: '#0B0F19', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px' },
  header: { display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '800px', marginBottom: '40px' },
  backBtn: { background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '12px', padding: '10px 20px', fontWeight: '800', cursor: 'pointer' },
  downloadBtn: { backgroundColor: '#6366F1', color: '#fff', border: 'none', borderRadius: '12px', padding: '10px 20px', fontWeight: '800', cursor: 'pointer', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)' },
  certContainer: { width: '100%', maxWidth: '900px', aspectRatio: '1.414/1', background: 'linear-gradient(135deg, #1E293B, #0F172A)', padding: '20px', borderRadius: '12px', boxShadow: '0 30px 60px rgba(0,0,0,0.8)', position: 'relative', overflow: 'hidden' },
  borderLayer: { border: '8px double rgba(255,215,0,0.3)', height: '100%', borderRadius: '8px', padding: '20px' },
  glassLayer: { backgroundColor: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', height: '100%', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  innerContent: { textAlign: 'center', padding: '40px', color: '#fff' },
  badge: { fontSize: '80px', marginBottom: '20px', filter: 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.5))' },
  title: { fontSize: '40px', fontWeight: '900', letterSpacing: '4px', margin: '0 0 4px 0', background: 'linear-gradient(to right, #fff, #6366F1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  subtitle: { fontSize: '12px', letterSpacing: '2px', color: 'rgba(255,255,255,0.5)', fontWeight: '800', marginBottom: '40px' },
  divider: { height: '2px', width: '100px', backgroundColor: '#6366F1', margin: '0 auto 40px auto' },
  presentedTo: { fontSize: '14px', letterSpacing: '3px', color: '#94A3B8', fontWeight: '700', marginBottom: '16px' },
  userName: { fontSize: '48px', fontWeight: '900', margin: '0 0 32px 0', borderBottom: '1px solid rgba(255,255,255,0.2)', display: 'inline-block', padding: '0 40px 10px 40px' },
  forCompleting: { fontSize: '16px', color: '#94A3B8', fontStyle: 'italic', marginBottom: '12px' },
  subjectName: { fontSize: '32px', fontWeight: '900', color: '#fff', marginBottom: '40px' },
  statsRow: { display: 'flex', justifyContent: 'center', gap: '60px', marginBottom: '40px' },
  statBox: { textAlign: 'center' },
  statLabel: { fontSize: '10px', letterSpacing: '1px', color: 'rgba(255,255,255,0.4)', fontWeight: '800', marginBottom: '4px' },
  statValue: { fontSize: '16px', fontWeight: '900', color: '#fff' },
  sealContainer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' },
  seal: { width: '100px', height: '100px', border: '4px solid rgba(255,215,0,0.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFD700', fontWeight: '900', fontSize: '14px', textAlign: 'center', transform: 'rotate(-15deg)' },
  sealInner: { border: '1px solid rgba(255,215,0,0.4)', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  signatureBox: { textAlign: 'center' },
  signature: { fontFamily: '"Dancing Script", cursive, sans-serif', fontSize: '32px', borderBottom: '1px solid rgba(255,255,255,0.3)', marginBottom: '4px' },
  signLabel: { fontSize: '12px', color: 'rgba(255,255,255,0.5)' },
  hint: { color: 'rgba(255,255,255,0.4)', marginTop: '40px', fontSize: '13px' }
};

export default Certificate;

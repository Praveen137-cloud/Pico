import React, { useState } from 'react';

const TieredHint = ({ hints, codeSnippet }) => {
  const [tier, setTier] = useState(0); // 0: None, 1: Nudge, 2: Detailed, 3: Code

  const handleNextTier = () => {
    if (tier < 3) setTier(tier + 1);
  };

  const nudge = hints && hints.length > 0 ? hints[0] : "🦜 Pico: 'Try thinking about the loop bounds!'";
  const detailed = hints && hints.length > 1 ? hints[1] : "Think about how each element is accessed and what the exit condition should be.";

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 24 }}>💡</span>
          <span style={styles.title}>Pico's Guidance System</span>
        </div>
        {tier < 3 && (
          <button style={styles.actionBtn} onClick={handleNextTier}>
            {tier === 0 ? 'GET HINT' : 'NEED MORE?'}
          </button>
        )}
      </div>

      {tier >= 1 && (
        <div style={styles.hintBox}>
          <div style={styles.label}>NUDGE</div>
          <div style={styles.text}>{nudge}</div>
        </div>
      )}

      {tier >= 2 && (
        <div style={{ ...styles.hintBox, borderLeftColor: '#6366F1' }}>
          <div style={{ ...styles.label, color: '#6366F1' }}>DETAILED</div>
          <div style={styles.text}>{detailed}</div>
        </div>
      )}

      {tier >= 3 && codeSnippet && (
        <div style={{ ...styles.hintBox, borderLeftColor: '#EC4899' }}>
          <div style={{ ...styles.label, color: '#EC4899' }}>SPOILER SNIPPET</div>
          <pre style={styles.code}>{codeSnippet}</pre>
        </div>
      )}

      {tier === 0 && (
        <div style={styles.emptyText}>Locked in the birdhouse. Click "Get Hint" for a nudge!</div>
      )}
    </div>
  );
};

const styles = {
  container: { backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid var(--divider)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  title: { color: '#fff', fontWeight: '900', fontSize: '14px', textTransform: 'uppercase', letterSpacing: 1 },
  actionBtn: { backgroundColor: 'var(--theme-primary)', color: '#000', border: 'none', padding: '6px 14px', borderRadius: '12px', fontWeight: '900', fontSize: '11px', cursor: 'pointer', transition: 'transform 0.2s' },
  hintBox: { paddingLeft: '16px', borderLeft: '4px solid var(--theme-primary)', animation: 'slideIn 0.3s ease-out' },
  label: { color: 'var(--theme-primary)', fontSize: '10px', fontWeight: '900', marginBottom: '4px', letterSpacing: 1 },
  text: { color: '#E2E8F0', fontSize: '14px', lineHeight: '1.5' },
  code: { backgroundColor: '#000', padding: '12px', borderRadius: '8px', fontSize: '12px', marginTop: '8px', overflowX: 'auto', color: '#10B981', border: '1px solid #10B98144' },
  emptyText: { color: 'var(--text-muted)', fontSize: '13px', fontStyle: 'italic', textAlign: 'center', padding: '10px 0' }
};

export default TieredHint;

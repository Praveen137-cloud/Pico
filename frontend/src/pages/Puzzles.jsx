import React, { useState } from 'react';

const Puzzles = () => {
  const [selectedPuzzle, setSelectedPuzzle] = useState(null);

  const puzzles = [
    {
      id: 1,
      title: "The Ant Pyramid",
      riddle: "3 ants are on the vertices of an equilateral triangle. Each ant starts moving along an edge of the triangle to another vertex. What is the probability that none of the ants collide?",
      answer: "The ants can only avoid collision if they all move clockwise (CW) or all move counter-clockwise (CCW). Since each ant has 2 choices, there are 2^3 = 8 total combinations. Only 2 combinations (CW-CW-CW or CCW-CCW-CCW) are collision-free. Probability = 2/8 = 1/4 or 25%."
    },
    {
      id: 2,
      title: "The Burning Ropes",
      riddle: "You have two ropes. Each rope takes exactly 60 minutes to burn from one end to the other, but they burn unevenly. How can you measure exactly 45 minutes using only these two ropes and a lighter?",
      answer: "1. Light both ends of Rope A and one end of Rope B simultaneously.\n2. Rope A will finish in 30 minutes. At this point, Rope B will have 30 minutes of burn time left.\n3. Light the other end of Rope B exactly when Rope A finishes.\n4. Since Rope B was already burning from one end, lighting the second end will make it burn twice as fast, finishing the remaining 30 mins in 15 mins. Total = 30 + 15 = 45 mins."
    },
    {
      id: 3,
      title: "The Bridge at Night",
      riddle: "4 people need to cross a bridge at night. They have one torch. The bridge can only hold 2 people at a time. The people take 1, 2, 5, and 10 minutes to cross. When 2 cross, they move at the speed of the slowest. What is the minimum time needed?",
      answer: "17 Minutes: (1&2 go, 1 returns) + (5&10 go, 2 returns) + (1&2 go again). 2+1+10+2+2 = 17 mins."
    }
  ];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>PUZZLE SANCTUARY</h1>
        <p style={styles.subtitle}>Master the logic riddles of the Zoho Elite Round.</p>
      </header>

      <div style={styles.grid}>
        {puzzles.map((p) => (
          <div key={p.id} style={styles.card} onClick={() => setSelectedPuzzle(selectedPuzzle === p.id ? null : p.id)}>
            <div style={styles.cardHeader}>
              <span style={styles.index}>#0{p.id}</span>
              <h3 style={styles.cardTitle}>{p.title}</h3>
            </div>
            
            <p style={styles.riddleText}>{p.riddle}</p>
            
            {selectedPuzzle === p.id && (
              <div style={styles.answerBlock}>
                <div style={styles.revealTitle}>REVEALED LOGIC</div>
                <p style={styles.answerText}>{p.answer}</p>
              </div>
            )}

            <button style={styles.revealBtn}>
              {selectedPuzzle === p.id ? 'HIDE LOGIC' : 'REVEAL LOGIC'}
            </button>
          </div>
        ))}
      </div>

      <div style={styles.footer}>
        <div style={styles.warningBox}>
          ⚔️ <strong>WARRIOR TIP:</strong> Zoho interviewers watch your **thought process**, not just the correct answer. Explain your logic out loud!
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: { backgroundColor: '#07090F', minHeight: '100vh', padding: '24px', paddingTop: '80px', color: '#fff' },
  header: { textAlign: 'center', marginBottom: '40px' },
  title: { fontSize: '32px', fontWeight: '900', letterSpacing: '6px', color: '#FF4444', textShadow: '0 0 20px rgba(255,68,68,0.5)' },
  subtitle: { color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontWeight: '600', marginTop: '12px' },
  grid: { display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '600px', margin: '0 auto' },
  card: { backgroundColor: '#10131C', border: '2px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', cursor: 'pointer', transition: 'all 0.2s ease', position: 'relative' },
  cardHeader: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' },
  index: { color: '#FF4444', fontWeight: '900', fontSize: '12px', letterSpacing: '1px' },
  cardTitle: { color: '#fff', fontSize: '18px', fontWeight: '800' },
  riddleText: { color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', fontSize: '14px' },
  revealBtn: { marginTop: '20px', backgroundColor: 'transparent', border: '1px solid #FF4444', color: '#FF4444', padding: '8px 16px', borderRadius: '4px', fontWeight: '900', fontSize: '11px', cursor: 'pointer', letterSpacing: '1px' },
  answerBlock: { marginTop: '24px', padding: '16px', backgroundColor: 'rgba(255,68,68,0.05)', borderRadius: '8px', borderLeft: '4px solid #FF4444', animation: 'fadeIn 0.3s' },
  revealTitle: { color: '#FF4444', fontSize: '11px', fontWeight: '900', marginBottom: '8px', letterSpacing: '1px' },
  answerText: { color: '#fff', fontSize: '13px', lineHeight: '1.5' },
  footer: { marginTop: '48px', display: 'flex', justifyContent: 'center' },
  warningBox: { backgroundColor: 'rgba(255,215,0,0.1)', color: '#FFD700', padding: '16px 24px', borderRadius: '8px', border: '1px solid rgba(255,215,0,0.3)', maxWidth: '500px', textAlign: 'center', fontSize: '13px' }
};

export default Puzzles;

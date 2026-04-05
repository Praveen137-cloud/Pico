import React from 'react';

const subjectsList = [
  { name: 'Arrays', icon: '🗄️', color: 'var(--theme-primary)' },
  { name: 'Strings', icon: '🧬', color: 'var(--theme-secondary)' },
  { name: 'Two Pointers', icon: '🎯', color: 'var(--theme-primary)' },
  { name: 'Hash Maps', icon: '💎', color: 'var(--theme-secondary)' },
  { name: 'Recursion', icon: '🌀', color: 'var(--theme-primary)' },
  { name: 'Sorting', icon: '⚔️', color: 'var(--theme-secondary)' },
  { name: 'Trees', icon: '🛡️', color: 'var(--theme-secondary)' },
  { name: 'Graphs', icon: '🕸️', color: 'var(--theme-primary)' },
  { name: 'Zoho Basics (C)', icon: '⚙️', color: 'var(--theme-secondary)' },
];

const SubjectNav = ({ activeSubject, onSelect }) => {
  return (
    <div style={styles.container}>
      {subjectsList.map((subj) => {
        const isActive = activeSubject === subj.name;
        return (
          <div 
            key={subj.name} 
            style={{
              ...styles.tab, 
              borderColor: isActive ? subj.color : 'transparent',
              background: isActive ? `linear-gradient(180deg, #1F1010, ${subj.color}33)` : '#1F1010',
              boxShadow: isActive ? `0 0 15px ${subj.color}66` : 'none',
              transform: isActive ? 'scale(1.05) skewX(-5deg)' : 'scale(1) skewX(-5deg)'
            }}
            onClick={() => onSelect(subj.name)}
          >
            <div style={{ transform: 'skewX(5deg)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span style={{...styles.icon, filter: isActive ? `drop-shadow(0 0 8px ${subj.color})` : 'grayscale(80%)'}}>{subj.icon}</span>
              <span style={{...styles.name, color: isActive ? subj.color : 'var(--text-muted)'}}>{subj.name}</span>
            </div>
          </div>
        )
      })}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '12px',
    padding: '16px 24px',
    overflowX: 'auto',
    backgroundColor: 'var(--bg-header)',
    borderBottom: '2px solid var(--divider)',
    scrollbarWidth: 'none',
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 18px',
    borderRadius: '4px', // Hard gaming edges
    border: '2px solid',
    cursor: 'pointer',
    minWidth: '85px',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  icon: {
    fontSize: '28px',
    transition: 'all 0.3s',
  },
  name: {
    fontSize: '11px',
    whiteSpace: 'nowrap',
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    transition: 'color 0.3s'
  }
};

export default SubjectNav;

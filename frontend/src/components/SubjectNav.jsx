import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Plus, X } from 'lucide-react';

const SubjectNav = ({ activeSubject, onSelect }) => {
  const { subjects } = useContext(AuthContext);
  const [showAll, setShowAll] = useState(false);

  // Helper to get consistent icons/colors for subjects
  const getSubjectMeta = (name) => {
    const meta = {
      'Arrays': { icon: '🗄️', color: '#6366F1' },
      'Strings': { icon: '🧬', color: '#A855F7' },
      'Two Pointers': { icon: '🎯', color: '#EC4899' },
      'Hash Maps': { icon: '💎', color: '#10B981' },
      'Recursion': { icon: '🌀', color: '#F59E0B' },
      'Sorting': { icon: '⚔️', color: '#3B82F6' },
      'Math': { icon: '🔢', color: '#8B5CF6' },
      'Stacks & Queues': { icon: '🥞', color: '#EF4444' },
      'Linked Lists': { icon: '🔗', color: '#06B6D4' },
      'Dynamic Programming': { icon: '🧠', color: '#F43F5E' },
      'Basics': { icon: '⚙️', color: '#94A3B8' },
      'Zoho Elite': { icon: '👑', color: '#FBBF24' }
    };
    return meta[name] || { icon: '📚', color: '#6366F1' };
  };

  const topSubjects = subjects.slice(0, 5);

  return (
    <>
      <div style={styles.container}>
        {topSubjects.map((subj) => {
          const isActive = activeSubject === subj.name;
          const meta = getSubjectMeta(subj.name);
          return (
            <div 
              key={subj._id} 
              style={{
                ...styles.tab, 
                borderColor: isActive ? meta.color : 'transparent',
                background: isActive ? `linear-gradient(180deg, #1F1010, ${meta.color}33)` : 'rgba(255,255,255,0.02)',
                boxShadow: isActive ? `0 0 20px ${meta.color}55` : 'none',
                transform: isActive ? 'scale(1.05) translateY(-2px)' : 'scale(1)'
              }}
              onClick={() => onSelect(subj.name)}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                <span style={{...styles.icon, filter: isActive ? `drop-shadow(0 0 10px ${meta.color})` : 'grayscale(100%)', opacity: isActive ? 1 : 0.6}}>
                  {meta.icon}
                </span>
                <span style={{...styles.name, color: isActive ? '#fff' : 'rgba(255,255,255,0.4)'}}>
                  {subj.name}
                </span>
              </div>
            </div>
          )
        })}
        
        {/* The PLUS Button */}
        <div 
          style={{...styles.tab, border: '2px dashed rgba(255,255,255,0.2)', backgroundColor: 'transparent', minWidth: '60px'}}
          onClick={() => setShowAll(true)}
        >
          <Plus color="rgba(255,255,255,0.5)" size={24} />
          <span style={{...styles.name, fontSize: '9px', marginTop: '4px'}}>ALL</span>
        </div>
      </div>

      {/* Global Subject Selector Overlay */}
      {showAll && (
        <div style={styles.modalOverlay}>
           <div style={styles.modalContent} className="extreme-card">
              <div style={styles.modalHeader}>
                <h2 style={{margin: 0, fontSize: '24px', fontWeight: 900, color: 'var(--theme-primary)'}}>SELECT SUBJECT</h2>
                <button style={styles.closeBtn} onClick={() => setShowAll(false)}><X size={24}/></button>
              </div>
              <div style={styles.grid}>
                 {subjects.map(subj => {
                   const meta = getSubjectMeta(subj.name);
                   const isSel = activeSubject === subj.name;
                   return (
                     <div 
                       key={subj._id} 
                       style={{
                         ...styles.gridItem, 
                         borderColor: isSel ? meta.color : 'rgba(255,255,255,0.05)',
                         backgroundColor: isSel ? `${meta.color}22` : 'rgba(255,255,255,0.02)'
                       }}
                       onClick={() => { onSelect(subj.name); setShowAll(false); }}
                     >
                        <span style={{fontSize: '32px', marginBottom: '8px'}}>{meta.icon}</span>
                        <span style={{fontWeight: 800, fontSize: '13px'}}>{subj.name}</span>
                     </div>
                   )
                 })}
              </div>
           </div>
        </div>
      )}
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '12px',
    padding: '16px 20px',
    overflowX: 'auto',
    backgroundColor: 'transparent',
    borderBottom: '1px solid var(--divider)',
    scrollbarWidth: 'none',
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 14px',
    borderRadius: '12px',
    border: '2px solid',
    cursor: 'pointer',
    minWidth: '80px',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  icon: {
    fontSize: '24px',
    transition: 'all 0.3s',
  },
  name: {
    fontSize: '10px',
    whiteSpace: 'nowrap',
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    transition: 'color 0.3s'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(5, 7, 10, 0.98)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '40px 20px',
    backdropFilter: 'blur(15px)',
    overflowY: 'auto'
  },
  modalContent: {
    width: '100%',
    maxWidth: '550px',
    backgroundColor: 'rgba(20, 24, 35, 0.8)',
    padding: '24px',
    borderRadius: '24px',
    border: '1.5px solid rgba(0, 242, 255, 0.3)',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
    position: 'relative'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    paddingBottom: '16px',
    borderBottom: '1px solid rgba(255,255,255,0.1)'
  },
  closeBtn: {
    background: 'rgba(255,255,255,0.1)',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
    gap: '12px'
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 10px',
    borderRadius: '16px',
    border: '1.5px solid',
    cursor: 'pointer',
    transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
    textAlign: 'center'
  }
};

export default SubjectNav;

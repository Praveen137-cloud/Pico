import { AuthContext } from '../context/AuthContext';

const SubjectNav = ({ activeSubject, onSelect }) => {
  const { subjects } = React.useContext(AuthContext);

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

  return (
    <div style={styles.container}>
      {subjects.map((subj) => {
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

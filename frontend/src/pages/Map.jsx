import React, { useState, useEffect, useContext, useRef } from 'react';
import api from '../api';
import { AuthContext } from '../context/AuthContext';
import { useParams, useNavigate } from 'react-router-dom';
import AdSenseBanner from '../components/AdSenseBanner';
import './Map.css';

const Map = () => {
  const { subjectId, sectionId } = useParams();
  const { user: authUser, refreshUser } = useContext(AuthContext);
  const [stage, setStage] = useState(null);
  const [units, setUnits] = useState([]);
  const [subjectName, setSubjectName] = useState('');
  const navigate = useNavigate();
  const activeNodeRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // 0. Force Sync Progress from Server
  useEffect(() => {
    refreshUser?.();
  }, []);

  // 1. Fetch Stage & Subject Info
  useEffect(() => {
    api.get('/api/curriculum/subjects')
      .then(res => {
        const subj = res.data.find(s => s._id === subjectId);
        if (subj) setSubjectName(subj.name);
      })
      .catch(err => console.error(err));

    api.get(`/api/curriculum/subjects/${subjectId}/stages`)
      .then(res => {
        const foundStage = res.data.find(s => s._id === sectionId);
        setStage(foundStage);
      })
      .catch(err => console.error(err));
  }, [subjectId, sectionId]);

  // 2. Fetch Units
  useEffect(() => {
    if (!sectionId) return;
    api.get(`/api/curriculum/stages/${sectionId}/units`)
      .then(res => {
        setUnits(res.data);
      })
      .catch(err => console.error(err));
  }, [sectionId]);

  // 3. Scroll Persistence
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Restore position
    const savedPos = localStorage.getItem(`scroll_map_${sectionId}`);
    if (savedPos) {
      container.scrollTop = parseInt(savedPos);
    } else {
      // If no saved position, auto-scroll to current unit
      if (activeNodeRef.current) {
        setTimeout(() => {
          activeNodeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 800);
      }
    }

    const handleScroll = () => {
      localStorage.setItem(`scroll_map_${sectionId}`, container.scrollTop.toString());
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [units, sectionId]);

  const completedIds = authUser?.completedUnits?.map(id => id.toString()) || [];
  const completedCount = units.filter(u => completedIds.includes(u._id.toString())).length;
  const totalUnits = units.length;
  const progressPct = totalUnits > 0 ? Math.round((completedCount / totalUnits) * 100) : 0;

  // 4. Auto-Scroll to Current Unit (whenever progress changes or on initial load)
  useEffect(() => {
    if (units.length > 0 && activeNodeRef.current) {
      // Force scroll to current node if they just returned from a lesson (detected by lack of user scroll or recent update)
      const forceScroll = !localStorage.getItem(`scroll_map_${sectionId}`);
      
      if (forceScroll) {
        setTimeout(() => {
          activeNodeRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }, 1000);
      }
    }
  }, [units, sectionId, completedCount]); // Trigger on completedCount change

  const getSubjectIcon = (name) => {
    const icons = {
      'Basics': '🥚',
      'Arrays': '🍬',
      'Strings': '🔡',
      'Linked Lists': '🍭',
      'Stacks & Queues': '🍬',
      'Trees': '🥨',
      'Graphs': '🍦',
      'Dynamic Programming': '🏗️',
      'Algorithm Design': '🎨',
      'Math & Bit Manipulation': '🔢',
      'Sorting & Searching': '🔍',
      'Recursion & Backtracking': '🌀',
      'Hashing & Sets': '🗄️',
      'Advanced Data Structures': '💎',
      'Zoho Elite': '🦁'
    };
    return icons[name] || '🍪';
  };

  if (!stage) return (
    <div className="map-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: '#FFF8E1', fontSize: 24, fontWeight: 900 }}>ENTERING TOFFEE CITY...</div>
    </div>
  );

  const isChocolateTheme = (subjectName || '').toLowerCase().includes('arrays');
  let foundActive = false;

  return (
    <div className={`map-page ${isChocolateTheme ? 'theme-chocolate' : 'cyber-mesh-bg'}`}>
      <div className="adventure-path-overlay" />

      <header style={styles.header}>
        <button style={styles.backBtn} onClick={() => navigate('/home')}>← BACK TO HQ</button>
        <div style={{ flex: 1, paddingLeft: 10 }}>
          <div style={styles.subjectName}>{getSubjectIcon(subjectName)} {subjectName.toUpperCase()} RESEARCH</div>
          <div style={styles.sectionTitle}>{stage.title}</div>
        </div>
      </header>

      {/* Progress Bar (Chocolate Filling style) */}
      <div className="progress-section" style={styles.progressContainer}>
        <div style={styles.progressHeader}>
          <span style={{ color: '#BCAAA4', fontSize: 11, fontWeight: 900 }}>TOFFEE PROGRESS</span>
          <span style={{ color: '#FFB300', fontWeight: 900, fontSize: 13 }}>{completedCount}/{totalUnits} TOFFEES COLLECTED</span>
        </div>
        <div style={styles.progressTrack}>
          <div style={{
            ...styles.progressFill,
            width: `${progressPct}%`,
            backgroundColor: '#FFB300',
            boxShadow: '0 0 20px #FFB300aa'
          }} />
        </div>
      </div>

      <div className="scroll-container" ref={scrollContainerRef}>
        <div style={styles.banner}>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 2 }}>Welcome to the</div>
          <div style={{ color: '#FFF8E1', fontSize: 28, fontWeight: 900, textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>{stage.title}</div>
          <div style={{ color: '#FFB300', fontSize: 14, fontWeight: 900, marginTop: 10 }}>{progressPct}% COMPLETED</div>
        </div>

        <div style={styles.nodesList}>
          {units.map((unit, index) => {
            const shift = index % 2 === 0 ? '60px' : '-60px';
            const isDone = completedIds.includes(unit._id.toString());
            const isUnlocked = unit.isUnlocked ?? true;
            
            // First incomplete node becomes the scroll target
            const isCurrent = !isDone && isUnlocked && !foundActive;
            if (isCurrent) foundActive = true;

            const icon = isDone ? '⭐' : (isUnlocked ? (isChocolateTheme ? '🍬' : '🍬') : '🔒');

            return (
              <div 
                key={unit._id} 
                className="entrance-anim"
                style={{ 
                  ...styles.nodeWrapper, 
                  transform: `translateX(${shift})`, 
                  marginBottom: '60px',
                  animationDelay: `${index * 0.1}s` 
                }}
                ref={isCurrent ? activeNodeRef : null}
              >
                <div 
                  className={`adventure-node btn-chunky ${!isUnlocked ? 'locked' : ''} ${isDone ? 'completed' : 'cyan'}`}
                  onClick={() => isUnlocked && navigate(`/lesson/${subjectId}/${sectionId}/${unit._id}`)}
                >
                  <span style={{ fontSize: '32px' }}>
                    {icon}
                  </span>

                  {isCurrent && (
                    <div className="current-node-pulse" />
                  )}
                </div>

                <div className="node-label">
                  {unit.title}
                </div>

                {index < units.length - 1 && (
                  <div className={`trail-line ${isDone ? 'active' : ''}`} style={{
                    transform: `translateX(${index % 2 === 0 ? '-30px' : '30px'}) rotate(${index % 2 === 0 ? '-45deg' : '45deg'})`,
                  }} />
                )}
              </div>
            );
          })}
        </div>

        <AdSenseBanner slot="map_footer_ads" style={{ maxWidth: '400px', margin: '40px auto' }} />
        <div style={{ height: 150 }} />
      </div>
    </div>
  );
};

const styles = {
  header: { 
    display: 'flex', 
    alignItems: 'center', 
    backgroundColor: '#3E2723', 
    padding: '20px 24px', 
    gap: '12px', 
    borderBottom: '4px solid #4E342E',
    position: 'relative',
    zIndex: 20,
    boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
  },
  backBtn: {
    background: '#4E342E',
    border: '2px solid #5D4037',
    color: '#FFB300',
    padding: '8px 20px',
    borderRadius: '16px',
    fontSize: '11px',
    fontWeight: '900',
    cursor: 'pointer',
    letterSpacing: '1.5px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
    transition: 'all 0.3s'
  },
  subjectName: { color: '#BCAAA4', fontSize: '10px', fontWeight: '800', letterSpacing: '2px' },
  sectionTitle: { color: '#FFF8E1', fontSize: '22px', fontWeight: '900', marginTop: 2 },
  xpChip: { 
    backgroundColor: 'rgba(255,179,0,0.15)', 
    color: '#FFB300', 
    padding: '10px 18px', 
    borderRadius: '25px', 
    fontWeight: 900, 
    fontSize: 12, 
    border: '2px solid #FFB300',
    boxShadow: '0 0 15px rgba(255,179,0,0.2)'
  },
  progressContainer: { padding: '12px 24px 20px', backgroundColor: '#3E2723', position: 'relative', zIndex: 20 },
  progressHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  progressTrack: { height: 14, borderRadius: 10, backgroundColor: '#2D1B19', overflow: 'hidden', border: '2px solid #4E342E' },
  progressFill: { height: '100%', borderRadius: 10, transition: 'width 1.2s cubic-bezier(0.19, 1, 0.22, 1)' },
  banner: { width: '90%', maxWidth: 500, backgroundColor: '#4E342E', padding: '40px 30px', borderRadius: '30px', textAlign: 'center', marginBottom: 80, border: '4px solid #5D4037', boxShadow: '0 15px 40px rgba(0,0,0,0.6)' },
  nodesList: { width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' },
  nodeWrapper: { display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2 },
  currentIndicator: {
    position: 'absolute',
    top: '-40px',
    backgroundColor: '#FFB300',
    color: '#3E2723',
    fontSize: '11px',
    fontWeight: '900',
    padding: '6px 14px',
    borderRadius: '10px',
    whiteSpace: 'nowrap',
    boxShadow: '0 8px 16px rgba(255,179,0,0.4)',
    border: '2px solid #FFF8E1'
  }
};

export default Map;

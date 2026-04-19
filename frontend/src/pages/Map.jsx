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

  useEffect(() => {
    refreshUser?.();
  }, [sectionId]); // Re-sync progress whenever the map section changes

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
  }, [subjectId, sectionId, authUser?.completedUnits?.length]); // 🔄 Re-fetch status if progress changes!

  // 2. Fetch Units (HARDENED SYNC)
  useEffect(() => {
    if (!sectionId) return;

    // 🔥 Diagnostic Log: Verify local vs remote session
    console.log('[MAP SYNC] authUser completed IDs:', authUser?.completedUnits?.length || 0);

    // 🔥 CACHE BUSTING: Add a timestamp query param to force the server to respond fresh
    api.get(`/api/curriculum/stages/${sectionId}/units?cb=${Date.now()}`)
      .then(res => {
        setUnits(res.data);
        console.log(`[MAP SYNC] Rendered ${res.data.length} units for section ${sectionId}`);
      })
      .catch(err => console.error('[MAP SYNC] Units Load Error:', err));
  }, [sectionId, authUser?.id, authUser?.completedUnits?.length]); // 🔄 Re-fetch units when user progress updates!

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
  }, [units, sectionId, completedCount]);

  const getSubjectIcon = (name) => {
    const entry = Object.entries({
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
    }).find(([key]) => name.toLowerCase().includes(key.toLowerCase()));
    return entry ? entry[1] : '🍪';
  };

  if (!stage) return (
    <div className="map-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: '#FFF8E1', fontSize: 24, fontWeight: 900 }}>ENTERING TOFFEE CITY...</div>
    </div>
  );

  let foundActive = false;

  return (
    <div className="map-page">
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
            const unitIdRaw = unit?._id?.toString()?.trim()?.toLowerCase() || '';
            const isDone = completedIds.some(id => id.trim().toLowerCase() === unitIdRaw);
            
            // Console Debug for Admin
            if (authUser?.role === 'admin' && index === 0) {
              console.log(`[MAP_DIAG] First Node ID: ${unitIdRaw}, Completed: ${isDone}`);
            }
            const isUnlocked = unit.isUnlocked ?? true;
            
            // First incomplete node becomes the scroll target
            const isCurrent = !isDone && isUnlocked && !foundActive;
            if (isCurrent) foundActive = true;

            const icon = isDone ? '⭐' : (isUnlocked ? '🍬' : '🔒');

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
                  className={`adventure-node ${!isUnlocked ? 'locked' : ''} ${isDone ? 'completed' : ''}`}
                  onClick={() => isUnlocked && navigate(`/lesson/${subjectId}/${sectionId}/${unit._id}`)}
                >
                  {isDone && (
                    <>
                      <div className="node-wing-left" />
                      <div className="node-wing-right" />
                    </>
                  )}

                  <span style={{ fontSize: '32px', zIndex: 10, position: 'relative' }}>
                    {icon}
                  </span>

                  {isCurrent && (
                    <>
                      <div className="expanding-ripples" />
                      <div className="current-node-pulse" />
                      <div style={styles.currentIndicator}>NEXT BITE</div>
                    </>
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
  progressContainer: { padding: '12px 24px 20px', backgroundColor: '#3E2723', position: 'relative', zIndex: 20 },
  progressHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  progressTrack: { height: 14, borderRadius: 10, backgroundColor: '#2D1B19', overflow: 'hidden', border: '2px solid #4E342E' },
  progressFill: { height: '100%', borderRadius: 10, transition: 'width 1.2s cubic-bezier(0.19, 1, 0.22, 1)' },
  banner: { width: '90%', maxWidth: 500, backgroundColor: '#4E342E', padding: '40px 30px', borderRadius: '30px', textAlign: 'center', marginBottom: 40, border: '4px solid #5D4037', boxShadow: '0 15px 40px rgba(0,0,0,0.6)' },
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

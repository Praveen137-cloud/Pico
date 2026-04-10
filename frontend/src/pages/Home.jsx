import React, { useState, useEffect, useContext } from 'react';
import api from '../api';
import SubjectNav from '../components/SubjectNav';
import PreLoader from '../components/PreLoader';
import EmptyState from '../components/EmptyState';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Home.css';

const Home = () => {
  const { subjects, setSubjects, user, setUser } = useContext(AuthContext);
  const [activeSubject, setActiveSubject] = useState('Arrays');
  const [stages, setStages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVibrating, setIsVibrating] = useState(false);
  const [isHoveringDonate, setIsHoveringDonate] = useState(false);
  const navigate = useNavigate();

  // 0. Sync Active Subject with User Profile
  useEffect(() => {
    if (user && user.lastVisitedSubject) {
      setActiveSubject(user.lastVisitedSubject);
    }
  }, [user]);

  // 1. Fetch Subject List
  useEffect(() => {
    api.get('/api/curriculum/subjects')
      .then(res => {
        setSubjects(res.data);
      })
      .catch(err => console.error(err));
  }, [setSubjects]);

  // 2. Fetch Stages for Active Subject
  useEffect(() => {
    if (subjects.length === 0) return;
    
    const subject = subjects.find(s => s.name === activeSubject);
    if (!subject) return;

    setIsLoading(true);
    api.get(`/api/curriculum/subjects/${subject._id}/stages`)
      .then(res => {
        setStages(res.data);
        setTimeout(() => setIsLoading(false), 800); // Professional transition
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, [activeSubject, subjects]);

  const currentSubjectData = subjects.find(s => s.name === activeSubject);

  const getSeasonInfo = () => {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return { name: 'Spring Blossom', icon: '🌸', color: '#F472B6', desc: 'The petals of progress are falling. Harness the bloom!' };
    if (month >= 5 && month <= 7) return { name: 'Summer Blaze', icon: '☀️', color: '#FBBF24', desc: 'The sun is at its peak. Burn through the logic!' };
    if (month >= 8 && month <= 10) return { name: 'Autumn Harvest', icon: '🍂', color: '#FB923C', desc: 'Reap the rewards of your summer study!' };
    return { name: 'Winter Frost', icon: '❄️', color: '#60A5FA', desc: 'Cool heads prevail in the deep freeze of code.' };
  };

  const season = getSeasonInfo();

  const handleSelectSubject = (subj) => {
    setActiveSubject(subj);
    localStorage.setItem('lastActiveSubject', subj);
    
    // Professional Haptic Feedback Simulation
    setIsVibrating(true);
    setTimeout(() => setIsVibrating(false), 200); 
  };

  const getSubjectIcon = (name) => {
    const icons = {
      'Basics': '🥚',
      'Arrays': '🍫',
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
    return icons[name] || '💻';
  };

  if (isLoading) return <PreLoader />;

  return (
    <div style={styles.page}>
      <div style={styles.topSticky}>
        <div className="top-stats-bar">
          <div className="stats-group">
            <div style={{display: 'flex', alignItems: 'center', gap: 6}}>
               <span style={{fontSize: 18}}>🔥</span>
               <span style={{fontWeight: 800, fontSize: 13, letterSpacing: 1}}>{user?.streak || 0} DAY STREAK</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 6}}>
               <span style={{fontSize: 18}}>⚡</span>
               <span style={{fontWeight: 800, fontSize: 13, letterSpacing: 1}}>{user?.xp || 0} XP</span>
            </div>
            {/* Version Badge for verification */}
            <div style={{
              backgroundColor: 'var(--theme-primary)', 
              color: '#000', 
              padding: '2px 8px', 
              borderRadius: '4px', 
              fontSize: '10px', 
              fontWeight: '900',
              marginLeft: '12px',
              animation: 'pulse 2s infinite'
            }}>
              DEPLOY v2.2: BUILD STABLE
            </div>
          </div>
          <a 
            href="upi://pay?pa=praveenkumar63811@oksbi&pn=Praveen%20Kumar&cu=INR&tn=Supporting%20Pico"
            className="donate-btn-header"
            style={{
              transform: isHoveringDonate ? 'scale(1.05)' : 'scale(1)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
            onMouseEnter={() => setIsHoveringDonate(true)}
            onMouseLeave={() => setIsHoveringDonate(false)}
          >
            <span style={{fontSize: 16}}>💝</span> SUPPORT PICO
          </a>
        </div>
        <SubjectNav activeSubject={activeSubject} onSelect={handleSelectSubject} />
      </div>

      {/* Professional Academic Banner */}
      <div className="season-banner" style={{borderColor: season.color, minHeight: '130px', padding: '32px 24px 24px 24px', display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <div style={{...styles.seasonBadge, backgroundColor: season.color, position: 'absolute', top: 0, left: 0, borderBottomRightRadius: '12px'}}>
          {season.icon} {season.name} QUARTER
        </div>
        
        <div style={{...styles.bannerHeader, marginTop: '12px'}}>
           <div style={styles.logoText}>PICO ELITE ACADEMY</div>
           <div style={styles.seasonTitle} className="season-title">{getSubjectIcon(activeSubject)} {activeSubject} Research Phase</div>
           <div style={styles.seasonDesc} className="season-desc">Advanced theoretical exploration of {activeSubject} structures.</div>
        </div>
      </div>
      
      <div style={styles.curriculumContainer} className="curriculum-container">
        {stages.length > 0 ? (
          stages.map((stage, index) => {
            const total = stage.unitCount || 0;
            const completed = stage.completedCount || 0;
            const progress = total > 0 ? (completed / total) * 100 : 0;

            return (
              <div key={index} className={`extreme-card ${isVibrating ? 'vibrate-active' : ''}`} style={styles.sectionCard}>
                <div style={styles.sectionHeader}>
                  <div style={styles.badgeWrapper}>
                    <div style={styles.sectionNum}>STAGE {index + 1}</div>
                  </div>
                  <h2 style={styles.sectionTitle}>{stage.title}</h2>
                </div>
                
                <div style={styles.progressContainer}>
                  <div style={styles.progressBarWrapper}>
                    <div style={{ ...styles.progressBar, width: `${progress}%` }} />
                  </div>
                  <span style={styles.unitCount}>{completed}/{total} MISSIONS</span>
                </div>
                
                <button 
                  style={styles.openPathBtn}
                  onClick={() => navigate(`/map/${subjects.find(s => s.name === activeSubject)._id}/${stage._id}`)}
                >
                  INITIALIZE MODULE
                </button>
              </div>
            );
          })
        ) : (
          <div style={{color: 'var(--text-muted)', textAlign: 'center', marginTop: 40, fontWeight: 800, letterSpacing: 2}}>
            INITIALIZING CORE DATA...
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  page: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  topSticky: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'rgba(11, 15, 25, 0.9)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--divider)',
  },
  topStatsBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    background: 'rgba(255,255,255,0.03)',
    color: '#fff'
  },
  seasonBanner: {
    margin: '16px',
    padding: '24px',
    backgroundColor: 'rgba(15, 18, 30, 0.8)',
    backdropFilter: 'blur(10px)',
    border: '1px solid',
    borderRadius: '24px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
    minHeight: '160px'
  },
  bannerHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    zIndex: 10
  },
  logoText: {
    fontSize: '14px',
    fontWeight: '900',
    color: 'var(--theme-primary)',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    opacity: 0.8
  },
  seasonBadge: {
    padding: '4px 12px',
    fontSize: '10px',
    fontWeight: '900',
    letterSpacing: '1px',
    color: '#000',
    borderRadius: '8px',
    textTransform: 'uppercase'
  },
  seasonContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  seasonTitle: {
    fontSize: 'calc(18px + 1vw)',
    fontWeight: '900',
    color: '#fff',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    lineHeight: '1.2'
  },
  seasonDesc: {
    fontSize: '12px',
    color: 'var(--text-muted)',
    marginTop: '4px',
    lineHeight: '1.4'
  },
  seasonBonus: {
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.05)',
    minWidth: '80px'
  },
  curriculumContainer: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    paddingBottom: '24px'
  },
  sectionCard: {
    backgroundColor: 'rgba(30, 41, 59, 0.4)',
    backdropFilter: 'blur(16px)',
    borderRadius: '24px',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    border: '1px solid rgba(255,255,255,0.1)',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.02)',
    transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  badgeWrapper: {
    backgroundColor: '#6366F1',
    alignSelf: 'flex-start',
    padding: '6px 14px',
    borderRadius: '12px',
    marginBottom: '4px',
    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)'
  },
  sectionHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  sectionNum: {
    color: '#fff',
    fontSize: '11px',
    letterSpacing: '1.5px',
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  sectionTitle: {
    fontSize: '26px',
    fontWeight: '900',
    color: '#fff',
    letterSpacing: '-0.5px',
    textShadow: '0 4px 12px rgba(0,0,0,0.3)'
  },
  progressContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  progressBarWrapper: {
    height: '14px',
    flex: 1,
    backgroundColor: 'var(--bg-dark)',
    borderRadius: '2px',
    border: '1px solid var(--divider)',
    overflow: 'hidden'
  },
  progressBar: {
    height: '100%',
    width: '40%', // mockup value
    background: 'repeating-linear-gradient(45deg, var(--theme-primary), var(--theme-primary) 10px, var(--theme-secondary) 10px, var(--theme-secondary) 20px)',
    backgroundSize: '100px 100px',
    animation: 'diagonalStripes 3s linear infinite'
  },
  unitCount: {
    color: 'var(--theme-primary)',
    fontSize: '13px',
    fontWeight: '800',
    letterSpacing: '1px'
  },
  openPathBtn: {
    background: 'linear-gradient(135deg, #6366F1, #A855F7)',
    color: '#fff',
    border: 'none',
    padding: '16px',
    borderRadius: '16px',
    fontWeight: '900',
    letterSpacing: '2px',
    cursor: 'pointer',
    marginTop: '-8px',
    boxShadow: '0 10px 25px rgba(99, 102, 241, 0.4)',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    animation: 'buttonGlow 3s infinite',
  },
  donateBtn: {
    background: 'linear-gradient(135deg, #FF4E50, #FC913A)',
    color: '#fff',
    border: 'none',
    padding: '6px 14px',
    borderRadius: '20px',
    fontWeight: '900',
    fontSize: '11px',
    letterSpacing: '1px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 4px 15px rgba(255, 78, 80, 0.3)',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
  }
};

export default Home;

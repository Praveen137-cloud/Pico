import React, { useState, useEffect, useContext } from 'react';
import api from '../api';
import SubjectNav from '../components/SubjectNav';
import PreLoader from '../components/PreLoader';
import EmptyState from '../components/EmptyState';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { subjects, setSubjects, user, setUser } = useContext(AuthContext);
  const [activeSubject, setActiveSubject] = useState(localStorage.getItem('lastActiveSubject') || 'Arrays');
  const [isLoading, setIsLoading] = useState(subjects.length === 0);
  const navigate = useNavigate();

  useEffect(() => {
    if (subjects.length === 0) {
      api.get('/api/subjects')
        .then(res => {
          setSubjects(res.data);
          // Artificial delay for smooth animation transition
          setTimeout(() => setIsLoading(false), 2000);
        })
        .catch(err => {
          console.error(err);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [subjects, setSubjects]);

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
  };

  if (isLoading) return <PreLoader />;

  return (
    <div style={styles.page}>
      <div style={styles.topSticky}>
        <div style={styles.topStatsBar}>
          <div style={{display: 'flex', alignItems: 'center', gap: 6}}>
             <span style={{fontSize: 18}}>🔥</span>
             <span style={{fontWeight: 800, fontSize: 13, letterSpacing: 1}}>{user?.streak || 0} DAY STREAK</span>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 6}}>
             <span style={{fontSize: 18}}>⚡</span>
             <span style={{fontWeight: 800, fontSize: 13, letterSpacing: 1}}>{user?.xp || 0} XP</span>
          </div>
        </div>
        <SubjectNav activeSubject={activeSubject} onSelect={handleSelectSubject} />
      </div>

      {/* Seasonal Event Banner */}
      <div style={{...styles.seasonBanner, borderColor: season.color}}>
        <div style={{...styles.seasonBadge, backgroundColor: season.color}}>
          {season.icon} {season.name} EVENT ACTIVE
        </div>
        <div style={styles.seasonContent}>
          <div style={{flex: 1}}>
            <div style={styles.seasonTitle}>{season.name} Phase I</div>
            <div style={styles.seasonDesc}>{season.desc}</div>
          </div>
          <div style={styles.seasonBonus}>
            <div style={{fontSize: 10, color: 'rgba(255,255,255,0.6)', fontWeight: 800}}>EVENT BONUS</div>
            <div style={{fontSize: 20, color: season.color, fontWeight: 900}}>+5 XP</div>
          </div>
        </div>
      </div>
      
      <div style={styles.curriculumContainer}>
        {currentSubjectData ? (
          currentSubjectData.sections.length > 0 ? (
            currentSubjectData.sections.map((section, index) => (
              <div key={index} style={styles.sectionCard}>
                <div style={styles.sectionHeader}>
                  <div style={styles.badgeWrapper}>
                    <div style={styles.sectionNum}>STAGE {index + 1}</div>
                  </div>
                  <h2 style={styles.sectionTitle}>{section.title}</h2>
                </div>
                
                <div style={styles.progressContainer}>
                  <div style={styles.progressBarWrapper}>
                    <div style={{
                      ...styles.progressBar,
                      width: section.units.length > 0
                        ? `${Math.round((section.units.filter(u => u.isCompleted).length / section.units.length) * 100)}%`
                        : '0%'
                    }} />
                  </div>
                  <span style={styles.unitCount}>
                    {section.units.filter(u => u.isCompleted).length}/{section.units.length} DONE
                  </span>
                </div>
                
                {section.units.length > 0 && (
                 <button 
                   style={styles.openPathBtn}
                   onClick={() => navigate(`/map/${currentSubjectData._id}/${section._id}`)}
                 >
                   💥 INITIALIZE
                 </button>
                )}
              </div>
            ))
          ) : (
            <div style={{color: 'var(--text-muted)', textAlign: 'center', marginTop: 40, fontWeight: 800, letterSpacing: 2}}>
              CLASSIFIED CONTENT ENCRYPTED...
            </div>
          )
        ) : (
          <EmptyState subjectName={activeSubject} />
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
    padding: '36px 16px 16px 16px',
    backgroundColor: '#0F121E',
    border: '1px solid',
    borderRadius: '12px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
    minHeight: '120px'
  },
  seasonBadge: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '2px 10px',
    fontSize: '9px',
    fontWeight: '900',
    letterSpacing: '1px',
    color: '#000',
    borderRadius: '0 0 8px 0',
    textTransform: 'uppercase'
  },
  seasonContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  seasonTitle: {
    fontSize: '22px',
    fontWeight: '900',
    color: '#fff',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginTop: '4px'
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
    backgroundColor: 'var(--bg-card)',
    borderRadius: '4px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    border: '2px solid var(--divider)',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
  },
  badgeWrapper: {
    backgroundColor: 'var(--theme-primary)',
    alignSelf: 'flex-start',
    padding: '4px 12px',
    borderRadius: '4px',
    transform: 'skewX(-10deg)',
    marginBottom: '8px'
  },
  sectionHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  sectionNum: {
    color: '#fff',
    fontSize: '11px',
    letterSpacing: '2px',
    fontWeight: '900',
    transform: 'skewX(10deg)'
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '900',
    color: '#fff',
    textTransform: 'uppercase',
    textShadow: '0 2px 5px rgba(0,0,0,0.8)'
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
    background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))',
    color: '#000',
    border: '1px solid var(--theme-secondary)',
    padding: '14px',
    borderRadius: '4px',
    fontWeight: '900',
    letterSpacing: '2px',
    cursor: 'pointer',
    marginTop: '-8px',
    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)',
    transition: 'all 0.2s',
    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
  }
};

export default Home;

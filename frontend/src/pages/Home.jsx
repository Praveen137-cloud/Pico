import './Home.css';

const Home = () => {
  const { subjects, setSubjects, user, setUser } = useContext(AuthContext);
  const [activeSubject, setActiveSubject] = useState(localStorage.getItem('lastActiveSubject') || 'Arrays');
  const [isLoading, setIsLoading] = useState(subjects.length === 0);
  const [isVibrating, setIsVibrating] = useState(false);
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
    
    // Trigger "Extreme Gaming" vibration effect
    setIsVibrating(true);
    setTimeout(() => setIsVibrating(false), 400); // Vibrate duration
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
      <div className="season-banner" style={{borderColor: season.color}}>
        <div style={styles.electricBirdContainer}>
           <img src="/funny-parrot.png" className="electric-bird" style={styles.electricBirdImg} alt="Funny Pico" />
           <div style={styles.logoText}>PICO ELITE</div>
        </div>
        <div style={{...styles.seasonBadge, backgroundColor: season.color}}>
          {season.icon} {season.name} EVENT ACTIVE
        </div>
        <div className="season-content">
          <div className="season-header-left">
            <div style={styles.seasonTitle} className="season-title">{season.name} Phase I</div>
            <div style={styles.seasonDesc} className="season-desc">{season.desc}</div>
          </div>
          <div style={styles.seasonBonus} className="season-bonus">
            <div style={{fontSize: 10, color: 'rgba(255,255,255,0.6)', fontWeight: 800}} className="bonus-label">EVENT BONUS</div>
            <div style={{fontSize: 20, color: season.color, fontWeight: 900}}>+5 XP</div>
          </div>
        </div>
      </div>
      
      <div style={styles.curriculumContainer} className="curriculum-container">
        {currentSubjectData ? (
          currentSubjectData.sections.length > 0 ? (
            currentSubjectData.sections.map((section, index) => (
              <div key={index} className={`extreme-card ${isVibrating ? 'vibrate-active' : ''}`} style={styles.sectionCard}>
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
    padding: '60px 16px 16px 16px',
    backgroundColor: 'rgba(15, 18, 30, 0.8)',
    backdropFilter: 'blur(10px)',
    border: '1px solid',
    borderRadius: '24px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
    minHeight: '160px'
  },
  electricBirdContainer: {
    position: 'absolute',
    top: '10px',
    left: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    zIndex: 10
  },
  electricBirdImg: {
    width: '50px',
    height: '50px',
    objectFit: 'contain',
    filter: 'drop-shadow(0 0 15px rgba(0, 242, 255, 0.8))'
  },
  logoText: {
    fontSize: '18px',
    fontWeight: '900',
    color: '#fff',
    letterSpacing: '3px',
    textShadow: '0 0 10px rgba(0,242,255,0.5)'
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
  }
};

export default Home;

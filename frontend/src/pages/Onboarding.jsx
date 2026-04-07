import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import TypingEffect from '../components/TypingEffect';
import { Layout, Rocket, Brain, Code, Target, Trophy, Disc, Layers, BookOpen } from 'lucide-react';
import './Onboarding.css';

const Onboarding = () => {
  const { authUser, subjects, setAuthUser } = useContext(AuthContext);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
     // If user already has a preference, skip onboarding
     if (authUser && authUser.lastVisitedSubject && authUser.lastVisitedSubject !== 'Arrays') {
        // navigate('/'); // Uncomment if we want strict skip, but user might want to re-select
     }
  }, [authUser, navigate]);

  const getSubjectIcon = (name) => {
    const icons = {
      'Arrays': <Layers />,
      'Strings': <Disc />,
      'Two Pointers': <Target />,
      'Hash Maps': <Brain />,
      'Recursion': <Rocket />,
      'Sorting': <Trophy />,
      'Math': <Code />,
      'Stacks & Queues': <Layers />,
      'Linked Lists': <Layout />,
      'Dynamic Programming': <Brain />,
      'Basics': <BookOpen />,
      'Zoho Elite': <Trophy />
    };
    return icons[name] || <BookOpen />;
  };

  const handleSelect = async (subjectName) => {
    setSelectedSubject(subjectName);
    try {
      const res = await api.put('/api/auth/last-subject', {
        userId: authUser._id,
        subjectName: subjectName
      });
      
      if (res.data.success) {
         // Update local auth state
         setAuthUser({ ...authUser, lastVisitedSubject: subjectName, onboardingCompleted: true });
         // Give a small delay for the "vibe" before navigating
         setTimeout(() => navigate('/'), 800);
      }
    } catch (err) {
      console.error('Onboarding preference update failed', err);
      navigate('/'); // Backup
    }
  };

  if (!subjects || subjects.length === 0) {
     return (
       <div className="onboarding-page">
         <div className="onboarding-content">
            <h2 style={{color: 'var(--theme-primary)', fontWeight: 900}}>SCANNING ELITE CURRICULUM...</h2>
         </div>
       </div>
     );
  }

  return (
    <div className="onboarding-page">
      <div className="onboarding-content">
         <div className="onboarding-mascot">
            <img src="/funny-parrot.png" alt="Pico Mascot" className="mascot-animation" />
         </div>
         
         <h1 className="onboarding-title">
            <TypingEffect 
              text="Your preferred subject:" 
              speed={50} 
              onComplete={() => setShowOptions(true)} 
            />
         </h1>

         <div className={`onboarding-grid ${showOptions ? 'show' : ''}`}>
            {subjects.map(subj => (
               <div 
                 key={subj._id} 
                 className={`onboarding-card ${selectedSubject === subj.name ? 'selected' : ''}`}
                 onClick={() => handleSelect(subj.name)}
               >
                  <div className="card-icon">{getSubjectIcon(subj.name)}</div>
                  <span className="card-label">{subj.name}</span>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Onboarding;

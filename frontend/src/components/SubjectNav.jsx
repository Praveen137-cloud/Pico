import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../api';
import './SubjectNav.css';

const SubjectNav = ({ activeSubject, onSelect }) => {
  const { subjects, user, setUser } = useContext(AuthContext);

  const getSubjectMeta = (name) => {
    const meta = Object.entries({
      'Basics': { icon: '⌨️', color: '#94A3B8' },
      'Arrays': { icon: '▦', color: '#6366F1' },
      'Strings': { icon: 'Aa', color: '#C084FC' },
      'Math': { icon: '∑', color: '#10B981' },
      'Sorting': { icon: '↕', color: '#F59E0B' },
      'Recursion': { icon: '∞', color: '#3B82F6' },
      'Two Pointers': { icon: '⟷', color: '#F43F5E' },
      'Hash Maps': { icon: '#', color: '#06B6D4' },
      'Stacks & Queues': { icon: '⊞', color: '#EF4444' },
      'Linked Lists': { icon: '⬡', color: '#FB923C' },
      'Trees': { icon: '⌃', color: '#A855F7' },
      'Graphs': { icon: '⬡', color: '#2DD4BF' },
      'Dynamic Programming': { icon: '◈', color: '#ED40AF' },
      'Algorithm Design': { icon: 'Ω', color: '#F97316' },
      'Advanced': { icon: '◆', color: '#FBBF24' },
      'Zoho': { icon: '⬟', color: '#FBBF24' }
    }).find(([key]) => name && typeof name === 'string' && name.toLowerCase().includes(key.toLowerCase()));
    
    return meta ? meta[1] : { icon: '⊕', color: '#94A3B8' };
  };

  const handleSubjectClick = async (subjectName) => {
    onSelect(subjectName);
    
    // Update Preference in DB
    try {
      if (user) {
        await api.put('/api/auth/last-subject', {
          userId: user._id,
          subjectName: subjectName
        });
        // Update local state
        setUser({ ...user, lastVisitedSubject: subjectName });
      }
    } catch (err) {
      console.error('Failed to update last visited subject', err);
    }
  };

  // DUOLINGO SORTING: Put last visited subject FIRST
  const sortedSubjects = [...subjects].sort((a, b) => {
     if (a.name === user?.lastVisitedSubject) return -1;
     if (b.name === user?.lastVisitedSubject) return 1;
     return 0;
  });

  return (
    <div className="subject-nav-container">
      {sortedSubjects.map((subj) => {
        const isActive = activeSubject === subj.name;
        const meta = getSubjectMeta(subj.name);
        return (
          <div 
            key={subj._id} 
            className={`subject-tab ${isActive ? 'active' : ''}`}
            style={{
              borderColor: isActive ? meta.color : 'transparent',
              background: isActive ? `linear-gradient(180deg, #1F1010, ${meta.color}33)` : 'rgba(255,255,255,0.02)',
              boxShadow: isActive ? `0 0 20px ${meta.color}55` : 'none'
            }}
            onClick={() => handleSubjectClick(subj.name)}
          >
            <div className="subject-tab-content">
              <span className="subject-icon" style={{filter: isActive ? `drop-shadow(0 0 10px ${meta.color})` : 'grayscale(100%)', opacity: isActive ? 1 : 0.6}}>
                {meta.icon}
              </span>
              <span className="subject-name" style={{color: isActive ? '#fff' : 'rgba(255,255,255,0.4)'}}>
                {subj.name}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default SubjectNav;

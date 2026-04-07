import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Code2, Trophy, BookOpen, Brain, Laptop, User, Target, Award } from 'lucide-react';

const Navigation = () => {
  return (
    <nav style={styles.container}>
      <div style={styles.dock}>
        <NavLink to="/" style={({ isActive }) => (isActive ? { ...styles.navItem, ...styles.active } : styles.navItem)}>
          {({ isActive }) => (
            <>
              <div style={isActive ? styles.iconWrapperActive : styles.iconWrapper}>
                <Home size={24} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
              <span style={isActive ? styles.labelActive : styles.label}>HQ</span>
            </>
          )}
        </NavLink>
        <NavLink to="/code" style={({ isActive }) => (isActive ? { ...styles.navItem, ...styles.active } : styles.navItem)}>
          {({ isActive }) => (
            <>
              <div style={isActive ? styles.iconWrapperActive : styles.iconWrapper}>
                <Code2 size={24} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
              <span style={isActive ? styles.labelActive : styles.label}>Forge</span>
            </>
          )}
        </NavLink>
        <NavLink to="/league" style={({ isActive }) => (isActive ? { ...styles.navItem, ...styles.active } : styles.navItem)}>
          {({ isActive }) => (
            <>
              <div style={isActive ? styles.iconWrapperActive : styles.iconWrapper}>
                <Trophy size={24} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
              <span style={isActive ? styles.labelActive : styles.label}>Arena</span>
            </>
          )}
        </NavLink>
        <NavLink to="/missions" style={({ isActive }) => (isActive ? { ...styles.navItem, ...styles.active } : styles.navItem)}>
          {({ isActive }) => (
            <>
              <div style={isActive ? styles.iconWrapperActive : styles.iconWrapper}>
                <Target size={24} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
              <span style={isActive ? styles.labelActive : styles.label}>Missions</span>
            </>
          )}
        </NavLink>
        <NavLink to="/pyqs" style={({ isActive }) => (isActive ? { ...styles.navItem, ...styles.active } : styles.navItem)}>
          {({ isActive }) => (
            <>
              <div style={isActive ? styles.iconWrapperActive : styles.iconWrapper}>
                <Award size={24} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
              <span style={isActive ? styles.labelActive : styles.label}>PYQs</span>
            </>
          )}
        </NavLink>
        <NavLink to="/feed" style={({ isActive }) => (isActive ? { ...styles.navItem, ...styles.active } : styles.navItem)}>
          {({ isActive }) => (
            <>
              <div style={isActive ? styles.iconWrapperActive : styles.iconWrapper}>
                <BookOpen size={24} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
              <span style={isActive ? styles.labelActive : styles.label}>Lore</span>
            </>
          )}
        </NavLink>
        <NavLink to="/puzzles" style={({ isActive }) => (isActive ? { ...styles.navItem, ...styles.active } : styles.navItem)}>
          {({ isActive }) => (
            <>
              <div style={isActive ? styles.iconWrapperActive : styles.iconWrapper}>
                <Brain size={24} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
              <span style={isActive ? styles.labelActive : styles.label}>Puzzles</span>
            </>
          )}
        </NavLink>
        <NavLink to="/basics" style={({ isActive }) => (isActive ? { ...styles.navItem, ...styles.active } : styles.navItem)}>
          {({ isActive }) => (
            <>
              <div style={isActive ? styles.iconWrapperActive : styles.iconWrapper}>
                <Laptop size={24} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
              <span style={isActive ? styles.labelActive : styles.label}>Training</span>
            </>
          )}
        </NavLink>
        <NavLink to="/profile" style={({ isActive }) => (isActive ? { ...styles.navItem, ...styles.active } : styles.navItem)}>
          {({ isActive }) => (
            <>
              <div style={isActive ? styles.iconWrapperActive : styles.iconWrapper}>
                <User size={24} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
              <span style={isActive ? styles.labelActive : styles.label}>Avatar</span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'center',
    padding: '0 16px 20px 16px',
    zIndex: 1000,
    pointerEvents: 'none' 
  },
  dock: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end', // align bottoms
    width: '100%',
    maxWidth: '650px',
    backgroundColor: 'rgba(31, 16, 16, 0.85)',
    backdropFilter: 'blur(10px)',
    padding: '4px 12px',
    borderRadius: '24px',
    border: '1px solid rgba(251, 191, 36, 0.2)',
    boxShadow: '0 10px 25px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
    pointerEvents: 'auto'
  },
  navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    width: '45px',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  },
  active: {
    transform: 'translateY(-12px)'
  },
  iconWrapper: {
    padding: '8px',
    borderRadius: '50%',
    transition: 'all 0.3s',
  },
  iconWrapperActive: {
    padding: '12px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))',
    boxShadow: '0 5px 15px rgba(251, 191, 36, 0.6), inset 0px 2px 5px rgba(255,255,255,0.4)',
    marginBottom: '4px'
  },
  label: {
    fontSize: '9px',
    fontWeight: '700',
    color: '#9CA3AF',
    marginTop: '2px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  labelActive: {
    fontSize: '10px',
    fontWeight: '900',
    color: 'var(--theme-primary)',
    textTransform: 'uppercase',
    textShadow: '0 2px 4px rgba(0,0,0,0.8)',
    letterSpacing: '0.5px'
  }
};

export default Navigation;

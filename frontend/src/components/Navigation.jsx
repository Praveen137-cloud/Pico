import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Code2, Trophy, BookOpen, Brain, Laptop, User, Target, Award } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="nav-dock">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          {({ isActive }) => (
            <>
              <div className={isActive ? 'icon-wrapper-active' : 'icon-wrapper'}>
                <Home size={isActive ? 24 : 20} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
              <span className={isActive ? 'nav-label-active' : 'nav-label'}>HQ</span>
            </>
          )}
        </NavLink>
        <NavLink to="/code" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          {({ isActive }) => (
            <>
              <div className={isActive ? 'icon-wrapper-active' : 'icon-wrapper'}>
                <Code2 size={isActive ? 24 : 20} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
              <span className={isActive ? 'nav-label-active' : 'nav-label'}>Forge</span>
            </>
          )}
        </NavLink>
        <NavLink to="/league" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          {({ isActive }) => (
            <>
              <div className={isActive ? 'icon-wrapper-active' : 'icon-wrapper'}>
                <Trophy size={isActive ? 24 : 20} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
              <span className={isActive ? 'nav-label-active' : 'nav-label'}>Arena</span>
            </>
          )}
        </NavLink>
        <NavLink to="/missions" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          {({ isActive }) => (
            <>
              <div className={isActive ? 'icon-wrapper-active' : 'icon-wrapper'}>
                <Target size={isActive ? 24 : 20} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
              <span className={isActive ? 'nav-label-active' : 'nav-label'}>Missions</span>
            </>
          )}
        </NavLink>
        <NavLink to="/pyqs" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          {({ isActive }) => (
            <>
              <div className={isActive ? 'icon-wrapper-active' : 'icon-wrapper'}>
                <Award size={isActive ? 24 : 20} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
              <span className={isActive ? 'nav-label-active' : 'nav-label'}>PYQs</span>
            </>
          )}
        </NavLink>
        <NavLink to="/feed" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          {({ isActive }) => (
            <>
              <div className={isActive ? 'icon-wrapper-active' : 'icon-wrapper'}>
                <BookOpen size={isActive ? 24 : 20} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
              <span className={isActive ? 'nav-label-active' : 'nav-label'}>Lore</span>
            </>
          )}
        </NavLink>
        <NavLink to="/puzzles" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          {({ isActive }) => (
            <>
              <div className={isActive ? 'icon-wrapper-active' : 'icon-wrapper'}>
                <Brain size={isActive ? 24 : 20} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
              <span className={isActive ? 'nav-label-active' : 'nav-label'}>Puzz</span>
            </>
          )}
        </NavLink>
        <NavLink to="/basics" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          {({ isActive }) => (
            <>
              <div className={isActive ? 'icon-wrapper-active' : 'icon-wrapper'}>
                <Laptop size={isActive ? 24 : 20} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
              <span className={isActive ? 'nav-label-active' : 'nav-label'}>Train</span>
            </>
          )}
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          {({ isActive }) => (
            <>
              <div className={isActive ? 'icon-wrapper-active' : 'icon-wrapper'}>
                <User size={isActive ? 24 : 20} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
              <span className={isActive ? 'nav-label-active' : 'nav-label'}>Avatar</span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;


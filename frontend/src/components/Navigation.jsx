import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Code2, Trophy, Target, Menu, X, User, Award, BookOpen, Brain, Laptop } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { to: '/profile', icon: <User size={24}/>, label: 'Avatar / Profile' },
    { to: '/pyqs', icon: <Award size={24}/>, label: 'PYQs (Interview)' },
    { to: '/feed', icon: <BookOpen size={24}/>, label: 'Lore (Feed)' },
    { to: '/puzzles', icon: <Brain size={24}/>, label: 'Puzzles' },
    { to: '/basics', icon: <Laptop size={24}/>, label: 'Training (Basics)' },
  ];

  return (
    <>
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
                <span className={isActive ? 'nav-label-active' : 'nav-label'}>Tasks</span>
              </>
            )}
          </NavLink>
          
          {/* Menu Button */}
          <div className="nav-item" onClick={() => setIsMenuOpen(true)}>
             <div className="icon-wrapper">
               <Menu size={20} color="#9CA3AF" />
             </div>
             <span className="nav-label">Menu</span>
          </div>
        </div>
      </nav>

      {/* Fullscreen Navigation Menu Overlay */}
      {isMenuOpen && (
        <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}>
           <div className="menu-content extreme-card" onClick={e => e.stopPropagation()}>
              <div className="menu-header">
                 <h2 className="menu-title">COMMAND CENTER</h2>
                 <button className="menu-close" onClick={() => setIsMenuOpen(false)}><X size={28}/></button>
              </div>
              <div className="menu-grid">
                 {menuItems.map(item => (
                   <NavLink 
                    key={item.to} 
                    to={item.to} 
                    className="menu-item-link"
                    onClick={() => setIsMenuOpen(false)}
                   >
                      <div className="menu-item-icon">{item.icon}</div>
                      <span className="menu-item-label">{item.label}</span>
                   </NavLink>
                 ))}
              </div>
           </div>
        </div>
      )}
    </>
  );
};

export default Navigation;


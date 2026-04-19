import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Home, Code2, Trophy, Target, Menu, X, User, Award, BookOpen, Brain, Laptop, ShieldCheck, Compass, Users } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = React.useContext(AuthContext);

  const menuItems = [
    { to: '/profile', icon: <User size={22}/>, title: 'Profile' },
    { to: '/career-guidance', icon: <Compass size={22}/>, title: 'Career' },
    { to: '/pyqs', icon: <Award size={22}/>, title: 'PYQs' },
    { to: '/feed', icon: <BookOpen size={22}/>, title: 'Lore' },
    { to: '/puzzles', icon: <Brain size={22}/>, title: 'Puzzles' },
    { to: '/basics', icon: <Laptop size={22}/>, title: 'Training' },
    { to: '/social', icon: <Users size={22}/>, title: 'Social' },
  ];

  if (user && user.role === 'admin') {
    menuItems.unshift({ to: '/admin', icon: <ShieldCheck size={22} color="#FFD700" />, title: 'Admin' });
  }

  return (
    <>
      <nav className="nav-container">
        <div className="nav-dock">
          <NavLink to="/home" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            {({ isActive }) => (
              <div className={isActive ? 'icon-wrapper-active' : 'icon-wrapper'}>
                <Home size={isActive ? 24 : 20} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
            )}
          </NavLink>
          <NavLink to="/code" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            {({ isActive }) => (
              <div className={isActive ? 'icon-wrapper-active' : 'icon-wrapper'}>
                <Code2 size={isActive ? 24 : 20} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
            )}
          </NavLink>
          <NavLink to="/league" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            {({ isActive }) => (
              <div className={isActive ? 'icon-wrapper-active' : 'icon-wrapper'}>
                <Trophy size={isActive ? 24 : 20} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
            )}
          </NavLink>
          <NavLink to="/missions" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            {({ isActive }) => (
              <div className={isActive ? 'icon-wrapper-active' : 'icon-wrapper'}>
                <Target size={isActive ? 24 : 20} color={isActive ? '#0E0707' : '#9CA3AF'} />
              </div>
            )}
          </NavLink>
          
          {/* Menu Button - icon only */}
          <div className="nav-item" onClick={() => setIsMenuOpen(true)}>
             <div className="icon-wrapper">
               <Menu size={20} color="#9CA3AF" />
             </div>
          </div>
        </div>
      </nav>

      {/* Icon-Only Quick Menu Overlay */}
      {isMenuOpen && (
        <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}>
           <div className="menu-drawer extreme-card" onClick={e => e.stopPropagation()}>
              <div className="menu-drag-handle"></div>
              <div className="menu-header">
                 <h2 className="menu-title">QUICK ACCESS</h2>
                 <button className="menu-close-btn" onClick={() => setIsMenuOpen(false)}>✕</button>
              </div>
              {/* Icon-only grid — no text labels */}
              <div className="menu-icon-grid">
                 {menuItems.map(item => (
                   <NavLink 
                    key={item.to} 
                    to={item.to} 
                    className={({ isActive }) => `menu-icon-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                    title={item.title}
                   >
                      {item.icon}
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


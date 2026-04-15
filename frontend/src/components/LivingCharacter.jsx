import React from 'react';

const LivingCharacter = ({ 
  character = 'ace', 
  state = 'idle', 
  size = 150, 
  style = {},
  onClick 
}) => {
  const assets = {
    ace: '/ace.png',
    pico: '/pico-bird.png',
    electric: '/happy-lion.png'
  };

  return (
    <div 
      className={`living-character-wrapper char-${character} state-${state} spring-pop`}
      onClick={onClick}
      style={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: onClick ? 'pointer' : 'default',
        position: 'relative',
        ...style
      }}
    >
      <img 
        src={assets[character] || assets.ace} 
        alt={character}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          filter: character === 'ace' ? 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.2))' : 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.2))',
          transformOrigin: 'bottom center'
        }}
      />
      
      {/* Subtle Aura (Non-Jumping) */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '110%',
        height: '110%',
        background: character === 'ace' 
          ? 'radial-gradient(circle, rgba(0,255,255,0.05) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(255,179,0,0.05) 0%, transparent 70%)',
        zIndex: -1,
        borderRadius: '50%'
      }} />
    </div>
  );
};

export default LivingCharacter;

import React from 'react';

const LivingCharacter = ({ 
  character = 'ace', 
  state = 'idle', 
  size = 150, 
  style = {},
  onClick 
}) => {
  const assets = {
    ace: '/pico-bird.png', // Fall back to the bird
    pico: '/pico-bird.png',
    electric: '/pico-bird.png'
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
      {/* White circle underlay to preserve bird colors through multiply blend on dark background */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '65%',
        height: '65%',
        background: '#fff',
        borderRadius: '50%',
        filter: 'blur(8px)',
        zIndex: 0
      }} />

      <img 
        src={assets[character] || assets.ace} 
        alt={character}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          mixBlendMode: 'multiply',
          position: 'relative',
          zIndex: 1,
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

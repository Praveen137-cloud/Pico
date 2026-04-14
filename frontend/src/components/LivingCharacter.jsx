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
    electric: '/electric-bird.png'
  };

  const getAnimation = () => {
    switch (state) {
      case 'talking': return 'character-talking 0.5s infinite';
      case 'happy': return 'character-happy 1s infinite alternate';
      case 'thinking': return 'character-thinking 2s infinite ease-in-out';
      case 'levitating': return 'character-levitating 3s infinite ease-in-out';
      default: return 'character-idle 4s infinite ease-in-out';
    }
  };

  return (
    <div 
      className={`living-character-wrapper char-${character} state-${state}`}
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
          animation: getAnimation(),
          filter: character === 'ace' ? 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.4))' : 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.2))'
        }}
      />
      
      {/* Dynamic Glow Aura */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '120%',
        height: '120%',
        background: character === 'ace' 
          ? 'radial-gradient(circle, rgba(0,255,255,0.1) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(255,255,100,0.1) 0%, transparent 70%)',
        zIndex: -1,
        borderRadius: '50%',
        animation: 'aura-pulse 4s infinite alternate'
      }} />

      <style>{`
        @keyframes character-idle {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-5px) scale(1.02); }
        }
        @keyframes character-talking {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05) translateY(-2px); }
        }
        @keyframes character-happy {
          0% { transform: translateY(0) rotate(0); }
          25% { transform: translateY(-15px) rotate(5deg); }
          75% { transform: translateY(-15px) rotate(-5deg); }
          100% { transform: translateY(0) rotate(0); }
        }
        @keyframes character-thinking {
           0%, 100% { transform: rotate(0); }
           50% { transform: rotate(-10deg) translateX(-5px); }
        }
        @keyframes character-levitating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes aura-pulse {
          0% { opacity: 0.3; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default LivingCharacter;

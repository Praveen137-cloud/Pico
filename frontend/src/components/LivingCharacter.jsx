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
      case 'talking': return 'character-talking 0.6s infinite var(--spring-bounce)';
      case 'happy': return 'character-happy 0.8s infinite var(--spring-bounce)';
      case 'thinking': return 'character-thinking 2s infinite ease-in-out';
      case 'levitating': return 'character-levitating 3s infinite ease-in-out';
      case 'celebrating': return 'character-cheer 0.5s infinite var(--spring-bounce)';
      case 'shocked': return 'character-shock 0.4s 1 ease-out';
      default: return 'character-idle 6s infinite ease-in-out';
    }
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
          animation: getAnimation(),
          filter: character === 'ace' ? 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.4))' : 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.3))',
          transformOrigin: 'bottom center'
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
          ? 'radial-gradient(circle, rgba(0,255,255,0.15) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(255,179,0,0.15) 0%, transparent 70%)',
        zIndex: -1,
        borderRadius: '50%',
        animation: 'aura-pulse 4s infinite alternate'
      }} />

      <style>{`
        @keyframes character-idle {
          0%, 100% { transform: translateY(0) scale(1) rotate(0); }
          25% { transform: translateY(-8px) scale(1.04) rotate(2deg); }
          50% { transform: translateY(0) scale(1.02) rotate(0); }
          75% { transform: translateY(-8px) scale(1.04) rotate(-2deg); }
        }
        @keyframes character-talking {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.12) translateY(-10px) rotate(-1deg); }
        }
        @keyframes character-happy {
          0% { transform: translateY(0) scale(1); }
          30% { transform: translateY(-40px) scale(1.2) rotate(8deg); }
          60% { transform: translateY(-40px) scale(1.2) rotate(-8deg); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes character-thinking {
           0%, 100% { transform: rotate(0) scale(1); }
           50% { transform: rotate(-10deg) translateX(-12px) scale(0.92); }
        }
        @keyframes character-levitating {
          0%, 100% { transform: translateY(0) rotate(0) scale(1); }
          50% { transform: translateY(-50px) rotate(10deg) scale(1.05); }
        }
        @keyframes character-cheer {
          0%, 100% { transform: scale(1) rotate(0) translateY(0); }
          25% { transform: scale(1.25) rotate(15deg) translateY(-20px); }
          75% { transform: scale(1.25) rotate(-15deg) translateY(-20px); }
        }
        @keyframes character-shock {
          0% { transform: scale(1); filter: brightness(1); }
          10% { transform: scale(1.3) translateY(-10px); filter: brightness(2); }
          100% { transform: scale(1); filter: brightness(1); }
        }
        @keyframes aura-pulse {
          0% { opacity: 0.2; transform: translate(-50%, -50%) scale(0.7); }
          100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default LivingCharacter;

import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const DigitalBackground = () => {
  const { user } = useContext(AuthContext);
  const isPremium = user?.isPremium;

  const currentOverlayGrad = isPremium 
    ? 'linear-gradient(rgba(255, 215, 0, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.08) 1px, transparent 1px)'
    : 'linear-gradient(rgba(0, 242, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 255, 0.03) 1px, transparent 1px)';

  const currentVignette = isPremium
    ? 'radial-gradient(circle at center, transparent 0%, rgba(13, 9, 0, 0.95) 100%)'
    : 'radial-gradient(circle at center, transparent 0%, rgba(5, 7, 10, 0.8) 100%)';

  const currentStars = isPremium
    ? 'radial-gradient(1px 1px at 20px 30px, #FFD700, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #FFD700, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #FFD700, rgba(0,0,0,0)), radial-gradient(3px 3px at 90px 40px, #FFF, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #FFD700, rgba(0,0,0,0)), radial-gradient(3px 3px at 160px 120px, #FFF, rgba(0,0,0,0))'
    : 'radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 160px 120px, #fff, rgba(0,0,0,0))';

  return (
    <div style={{...styles.container, backgroundColor: isPremium ? '#0D0900' : '#05070A'}}>
      <div style={{...styles.stars, background: currentStars, animation: isPremium ? 'floatDiamonds 80s linear infinite' : 'starFloat 100s linear infinite'}} />
      <div style={{...styles.overlay, background: currentOverlayGrad}} />
      <div style={{...styles.vignette, background: currentVignette}} />
      
      {/* Floating Diamonds for Premium */}
      {isPremium && (
        <div style={styles.floatingDiamondsContainer}>
          <span className="diamond-p1" style={styles.diamondP1}>💎</span>
          <span className="diamond-p2" style={styles.diamondP2}>💎</span>
          <span className="diamond-p3" style={styles.diamondP3}>💎</span>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
    backgroundColor: '#05070A',
    overflow: 'hidden',
  },
  stars: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '200%',
    background: 'radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 160px 120px, #fff, rgba(0,0,0,0))',
    backgroundRepeat: 'repeat',
    backgroundSize: '200px 200px',
    animation: 'starFloat 100s linear infinite',
    opacity: 0.3,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(rgba(0, 242, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 255, 0.03) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
  },
  vignette: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none'
  },
  floatingDiamondsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    overflow: 'hidden'
  },
  diamondP1: {
    position: 'absolute',
    left: '10%',
    fontSize: '24px',
    opacity: 0.1,
    animation: 'floatDiamonds 25s linear infinite'
  },
  diamondP2: {
    position: 'absolute',
    left: '50%',
    fontSize: '36px',
    opacity: 0.05,
    animation: 'floatDiamonds 40s linear infinite 12s'
  },
  diamondP3: {
    position: 'absolute',
    left: '85%',
    fontSize: '18px',
    opacity: 0.15,
    animation: 'floatDiamonds 30s linear infinite 5s'
  }
};

export default DigitalBackground;

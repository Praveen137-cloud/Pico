import React from 'react';

const DigitalBackground = () => {
  return (
    <div style={styles.container}>
      <div style={styles.stars} />
      <div style={styles.overlay} />
      <div style={styles.vignette} />
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
    background: 'radial-gradient(circle at center, transparent 0%, rgba(5, 7, 10, 0.8) 100%)',
  }
};

export default DigitalBackground;

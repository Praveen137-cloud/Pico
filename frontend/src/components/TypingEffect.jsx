import React, { useState, useEffect, useContext } from 'react';
import { AudioContext } from '../App';

const clickSound = 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3';

/**
 * A simple typing effect component.
 * @param {string} text - The text to animate.
 * @param {number} speed - Milliseconds between characters.
 * @param {function} onComplete - Callback when typing finishes.
 */
const TypingEffect = ({ text, speed = 30, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const audioContextState = useContext(AudioContext);

  useEffect(() => {
    // Reset when text changes
    setDisplayedText('');
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
        
        // Mechanical ASMR Hack
        if (!audioContextState?.bgmMuted && index % 2 === 0) {
           const beep = new Audio(clickSound);
           beep.volume = 0.15;
           beep.play().catch(()=>{});
        }
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [index, text, speed, onComplete]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;

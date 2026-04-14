import axios from 'axios';
import { baseURL } from '../api';

let isEngineReady = false;
let isWaking = false;
const listeners = new Set();

export const getIsEngineReady = () => isEngineReady;

export const resetEngineStatus = () => {
  isEngineReady = false;
  isWaking = false;
  console.log('[WakeUp] Engine status reset. Ready for re-sync.');
};

export const subscribeToEngineStatus = (callback) => {
  listeners.add(callback);
  return () => listeners.delete(callback);
};

const notifyListeners = (status) => {
  isEngineReady = status;
  listeners.forEach(cb => cb(status));
};

/**
 * Plays a subtle digital chime when the engine comes online.
 */
const playSuccessSound = () => {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, audioContext.currentTime); // A5
    oscillator.frequency.exponentialRampToValueAtTime(1320, audioContext.currentTime + 0.1); // E6

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.3);
  } catch (err) {
    console.warn('[WakeUp] Sound synthesis failed:', err);
  }
};

/**
 * Pings the backend health check route with retries.
 * Best used in PreLoader or root App component.
 */
export const wakeBackend = async (maxRetries = 30, interval = 2000) => {
  if (isEngineReady) return true;
  if (isWaking) {
    // Wait for the existing loop to finish
    while (isWaking) {
      await new Promise(r => setTimeout(r, 500));
    }
    return isEngineReady;
  }

  isWaking = true;
  console.log(`[WakeUp] Attempting to wake the Pico Engine (Mode: Robust) at ${baseURL}...`);
  
  try {
    for (let i = 0; i < maxRetries; i++) {
      try {
        // Use a short timeout for the ping itself
        const res = await axios.get(`${baseURL}/api/status`, { timeout: 3000 });
        if (res.status === 200) {
          console.log('[WakeUp] Pico Engine is online! 🚀');
          playSuccessSound();
          notifyListeners(true);
          return true;
        }
      } catch (err) {
        if (i % 5 === 0) console.warn(`[WakeUp] Syncing... (${i + 1}/${maxRetries}). Engine is waking up.`);
      }
      
      // Wait before the next retry
      await new Promise(resolve => setTimeout(resolve, interval));
    }
  } finally {
    isWaking = false;
  }

  console.error('[WakeUp] Failed to wake engine after maximum retries.');
  return false;
};

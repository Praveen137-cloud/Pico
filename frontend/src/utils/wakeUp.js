import axios from 'axios';
import { baseURL } from '../api';

let isEngineReady = false;
let isWaking = false;
const listeners = new Set();

export const getIsEngineReady = () => isEngineReady;

export const subscribeToEngineStatus = (callback) => {
  listeners.add(callback);
  return () => listeners.delete(callback);
};

const notifyListeners = (status) => {
  isEngineReady = status;
  listeners.forEach(cb => cb(status));
};

/**
 * Pings the backend health check route with retries.
 * Best used in PreLoader or root App component.
 */
export const wakeBackend = async (maxRetries = 15, interval = 1500) => {
  if (isEngineReady) return true;
  if (isWaking) {
    // Wait for the existing loop to finish
    while (isWaking) {
      await new Promise(r => setTimeout(r, 500));
    }
    return isEngineReady;
  }

  isWaking = true;
  console.log(`[WakeUp] Attempting to wake the Pico Engine at ${baseURL}...`);
  
  try {
    for (let i = 0; i < maxRetries; i++) {
      try {
        // Use a short timeout for the ping itself
        const res = await axios.get(`${baseURL}/api/status`, { timeout: 3000 });
        if (res.status === 200) {
          console.log('[WakeUp] Pico Engine is online! 🚀');
          notifyListeners(true);
          return true;
        }
      } catch (err) {
        console.warn(`[WakeUp] Attempt ${i + 1}/${maxRetries} failed. Engine might be sleeping...`);
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

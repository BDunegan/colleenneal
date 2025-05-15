/**
 * ImagePreloader Component
 * 
 * Handles preloading of critical images to improve initial page load performance.
 * This component should be included in the RootLayout to ensure images are preloaded
 * before they're needed.
 */
'use client';

import { useEffect } from 'react';

// List of critical images to preload
const CRITICAL_IMAGES = [
  '/hero.jpg',           // Hero background image
  '/logo.png',           // Site logo
];

export default function ImagePreloader() {
  useEffect(() => {
    // Preload images after the page content has loaded
    const preloadImages = () => {
      CRITICAL_IMAGES.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    // Use requestIdleCallback for browsers that support it,
    // or setTimeout as a fallback
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(preloadImages);
    } else {
      setTimeout(preloadImages, 1000);
    }

    // Cleanup function
    return () => {
      if ('requestIdleCallback' in window && 'cancelIdleCallback' in window) {
        // TypeScript needs this check for cancelIdleCallback
        const cancel = window.cancelIdleCallback as (id: number) => void;
        // This is just a precaution, we can't actually cancel the specific callback
        // since we don't store the ID
      }
    };
  }, []);

  // This component doesn't render anything visible
  return null;
} 
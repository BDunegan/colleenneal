/**
 * Main Container Component
 * 
 * A simple flex container used in the root layout to ensure
 * the footer is pushed to the bottom of the viewport, even on short pages.
 */
'use client';

import React from 'react';

export default function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      {children}
    </div>
  );
} 
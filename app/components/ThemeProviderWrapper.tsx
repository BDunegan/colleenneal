/**
 * Theme Provider Wrapper Component
 * 
 * Wraps the styled-components ThemeProvider in a Client Component.
 * This is necessary because ThemeProvider uses React Context, which 
 * cannot be directly used within Server Components like the root layout
 * in Next.js App Router.
 */
'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/lib/theme';

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
} 
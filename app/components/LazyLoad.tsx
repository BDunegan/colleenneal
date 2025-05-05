/**
 * LazyLoad Component
 * 
 * Implements lazy loading for below-the-fold components using the Intersection Observer API.
 * Falls back to a simple delay-based loading if Intersection Observer is not supported.
 */
'use client';

import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const LazyLoadContainer = styled.div`
  min-height: 100px; // Minimum height to prevent layout shift
  width: 100%;
`;

interface LazyLoadProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  fallbackDelay?: number;
}

export default function LazyLoad({
  children,
  threshold = 0.1,
  rootMargin = '50px',
  fallbackDelay = 1000,
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Fallback for browsers that don't support Intersection Observer
    if (!('IntersectionObserver' in window)) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, fallbackDelay);

      return () => clearTimeout(timer);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, fallbackDelay]);

  return (
    <LazyLoadContainer ref={containerRef}>
      {isVisible ? children : null}
    </LazyLoadContainer>
  );
} 
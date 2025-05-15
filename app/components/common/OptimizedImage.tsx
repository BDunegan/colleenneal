/**
 * OptimizedImage Component
 * 
 * A wrapper around Next.js Image component with optimized defaults for better performance.
 * Automatically handles responsive sizing, lazy loading, and placeholder generation.
 */
'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'placeholder' | 'blurDataURL'> {
  lowQualityPlaceholder?: boolean;
}

// Simple color placeholder for non-critical images
const COLOR_PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

export default function OptimizedImage({ 
  src, 
  alt,
  width,
  height,
  quality = 75,
  loading,
  sizes = '100vw',
  lowQualityPlaceholder = true,
  priority = false,
  ...rest 
}: OptimizedImageProps) {
  // Don't use placeholder for priority images
  const usePlaceholder = !priority && lowQualityPlaceholder;
  
  // Determine loading strategy:
  // - Priority images should never be lazy loaded
  // - Otherwise, use the provided loading value or default to 'lazy'
  const loadingStrategy = priority ? undefined : (loading || 'lazy');
  
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
      loading={loadingStrategy}
      sizes={sizes}
      placeholder={usePlaceholder ? 'blur' : undefined}
      blurDataURL={usePlaceholder ? COLOR_PLACEHOLDER : undefined}
      priority={priority}
      {...rest}
    />
  );
} 
/**
 * About Us Preview Component (Home Page)
 * 
 * Provides a brief introduction to Colleen Neal and links to the full About Us page.
 */
'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { theme } from '@/lib/theme';
import OptimizedImage from '../common/OptimizedImage';

const AboutPreviewContainer = styled.section`
  padding: 3rem 1rem;
  background-color: #f8f8f8; /* Light background */
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
`;

const PreviewText = styled.p`
  font-size: 1.05rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto 1.5rem auto;
  line-height: 1.7;
`;

const AboutLink = styled(Link)`
  display: inline-block;
  background-color: ${theme.colors.primary};
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #005fa3; /* Darker blue */
    text-decoration: none;
  }
`;

const AboutImage = styled.div`
  margin-bottom: 1.5rem;
`;

export default function AboutUsPreview() {
  return (
    <AboutPreviewContainer>
      <SectionTitle>Meet Colleen Neal, LPC</SectionTitle>
      <PreviewText>
        With over 15 years of experience, Colleen offers compassionate and effective counseling tailored to your unique journey.
        Learn more about her background, approach, and commitment to supporting your mental health.
      </PreviewText>
      <AboutLink href="/about-us">Learn More About Colleen</AboutLink>
    </AboutPreviewContainer>
  );
} 
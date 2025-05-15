/**
 * Hero Section Component (Home Page)
 * 
 * Displays the main title, introductory quote, and a CTA button
 * over a full-viewport background image.
 */
'use client';

import React from 'react';
import styled from 'styled-components';
import { theme } from '@/lib/theme';
import Link from 'next/link';
import Image from 'next/image';
import Quote from '../common/Quote';

const HeroContainer = styled.section`
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  z-index: 2;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  max-width: 800px;
  padding: 2rem;
  color: white;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

    @media (min-width: 768px) {
      font-size: 3.5rem;
    }
  }

  .cta-button {
    display: inline-block;
    background-color: ${theme.colors.secondary};
    color: white;
    padding: 1rem 2.2rem;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    margin-top: 2rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: #4cae4c;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      text-decoration: none;
    }
  }
`;

const StyledQuote = styled(Quote)`
  margin: 1.5rem 0;
  text-align: center;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function HeroSection() {
  return (
    <HeroContainer>
      <HeroImage>
        <Image
          src="/hero.jpg"
          alt="Professional counseling office"
          fill
          priority
          quality={90}
          style={{ objectFit: 'cover' }}
        />
      </HeroImage>
      <HeroOverlay />
      <HeroContent>
        <h1>Exceptional Counseling and Therapy Services</h1>
        <StyledQuote 
          text="The best and most beautiful things in the world cannot be seen or even touched – they must be felt with the heart"
          author="Helen Keller"
        />
        <Link href="/contact" className="cta-button">
          Request an Appointment
        </Link>
      </HeroContent>
    </HeroContainer>
  );
} 
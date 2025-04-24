/**
 * Hero Section Component (Home Page)
 * 
 * Displays the main title, introductory quote, hero image, and a CTA button.
 * Uses a flex layout that adjusts for different screen sizes.
 */
'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { theme } from '@/lib/theme';
import Link from 'next/link';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 1rem;
  background-color: #f0f7ff; /* Light blue background */

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    padding: 4rem 2rem;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    flex: 1;
  }

  h1 {
    font-size: 2.2rem;
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  blockquote {
    font-size: 1.1rem;
    font-style: italic;
    color: #555;
    margin: 1.5rem 0;
    border-left: 3px solid ${theme.colors.secondary};
    padding-left: 1rem;
  }

  cite {
    display: block;
    text-align: right;
    font-size: 0.9rem;
    color: #777;
    margin-top: 0.5rem;
  }

  .cta-button {
    display: inline-block;
    background-color: ${theme.colors.secondary};
    color: white;
    padding: 0.8rem 1.8rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    margin-top: 1.5rem;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #4cae4c; /* Darker green on hover */
      text-decoration: none;
    }
  }
`;

const HeroImageContainer = styled.div`
  max-width: 500px;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    flex: 1;
  }
`;

export default function HeroSection() {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Exceptional Counseling and Therapy Services</h1>
        <blockquote>
          "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style."
          <cite>– Maya Angelou</cite>
        </blockquote>
        {/* Optional: Add a small introductory sentence here if desired */}
        <Link href="/contact" className="cta-button">
          Request an Appointment
        </Link>
      </HeroContent>
      <HeroImageContainer>
        <Image
          src="/hero.jpg"
          alt="Couple talking during a therapy session"
          width={500}
          height={350}
          priority
        />
      </HeroImageContainer>
    </HeroContainer>
  );
} 
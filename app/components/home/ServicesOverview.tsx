/**
 * Services Overview Component (Home Page)
 * 
 * Displays a preview of key service areas with images and links to the main
 * counseling page for more details. Uses a responsive grid layout.
 */
'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import OptimizedImage from '../common/OptimizedImage';
import { theme } from '@/lib/theme';

const OverviewContainer = styled.section`
  padding: 3rem 1rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${theme.colors.primary};
  margin-bottom: 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  text-align: left;

  h3 {
    font-size: 1.3rem;
    color: ${theme.colors.primary};
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 0.95rem;
    color: #555;
    margin-bottom: 1rem;
  }

  .learn-more-link {
    color: ${theme.colors.secondary};
    font-weight: 600;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
  }
`;

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '5px',
  marginBottom: '1rem'
};

export default function ServicesOverview() {
  return (
    <OverviewContainer>
      <SectionTitle>Explore Our Services</SectionTitle>
      <ServicesGrid>
        <ServiceCard>
          <OptimizedImage 
            src="/counseling.jpg"
            alt="Professional counseling session in a comfortable office setting" 
            width={400}
            height={300}
            style={imageStyle}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
          <h3>Counseling Services</h3>
          <p>Personalized therapy sessions to help you navigate life's challenges and achieve emotional well-being.</p>
          <Link href="/counseling" className="learn-more-link">Learn More &rarr;</Link>
        </ServiceCard>
        <ServiceCard>
          <OptimizedImage 
            src="/treatment.jpg"
            alt="Therapist discussing treatment options with client" 
            width={400}
            height={300}
            style={imageStyle}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
          <h3>Treatment Preferences</h3>
          <p>Utilizing evidence-based approaches tailored to your specific needs and goals. Find the right fit for you.</p>
          <Link href="/counseling#treatment-preferences" className="learn-more-link">Explore Approaches &rarr;</Link>
        </ServiceCard>
        <ServiceCard>
          <OptimizedImage 
            src="/specialty.jpg"
            alt="Supportive therapy environment with professional counselor" 
            width={400}
            height={300}
            style={imageStyle}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
          <h3>Specialty Areas</h3>
          <p>Expertise in addressing anxiety, depression, relationship issues, stress management, and more.</p>
          <Link href="/counseling#specialty-areas" className="learn-more-link">View Specialties &rarr;</Link>
        </ServiceCard>
      </ServicesGrid>
    </OverviewContainer>
  );
} 
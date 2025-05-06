/**
 * About Content Component (/about-us page)
 * 
 * Provides detailed information about Colleen Neal, including:
 * - Education and Experience
 * - Credentials and Memberships
 * - A personal note
 * - Call-to-action buttons
 */
'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { theme } from '@/lib/theme';
import PageWithQuote from '../common/PageWithQuote';

// Reusable styled components from Counseling page (consider abstracting later)
const PageContainer = styled.div`
  padding: 2rem 1rem;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.primary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${theme.colors.primary};
  margin-bottom: 1.5rem;
  border-bottom: 2px solid ${theme.colors.secondary};
  padding-bottom: 0.5rem;
`;

// Container for main text content, handles list styling
const ContentText = styled.div`
  font-size: 1.05rem;
  line-height: 1.7;
  color: #444;

  ul {
    list-style: disc;
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    // Nested lists might need additional margin adjustments
    ul {
        margin-top: 0.5rem;
    }
  }
  li {
      margin-bottom: 0.5rem;
  }
`;

// Reusable CTA button style
const CTAButton = styled(Link)`
  display: inline-block;
  background-color: ${theme.colors.secondary};
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1.5rem;
  transition: background-color 0.2s ease;
  text-align: center;

  &:hover {
    background-color: #4cae4c; // Darker green on hover
    text-decoration: none; // Ensure no underline on hover
  }
`;

export default function AboutContent() {
  return (
    <PageWithQuote title="Learn More About Colleen Neal, LPC">
      <Section>
        <SectionTitle>Education and Experience</SectionTitle>
        <ContentText>
          <p>
            Colleen Neal brings a wealth of knowledge and experience to her counseling practice. Her dedication to helping others is rooted in a strong educational foundation and years of practical application in diverse settings.
          </p>
          {/* Using nested lists for credentials/memberships */}
          <ul>
            <li><strong>MS in Counseling:</strong> University of Houston–Clear Lake (2005)</li>
            <li><strong>Professional Experience:</strong> 27 years in education, including 11 years as a dedicated school counselor.</li>
            <li><strong>Credentials:</strong>
              <ul>
                <li>Licensed Professional Counselor (LPC) in Texas</li>
                <li>National Certified Counselor (NCC)</li>
              </ul>
            </li>
            <li><strong>Memberships:</strong>
              <ul>
                <li>Texas Counseling Association (TCA)</li>
                <li>American Counseling Association (ACA)</li>
              </ul>
            </li>
          </ul>
        </ContentText>
      </Section>

      <Section>
        <SectionTitle>LPC Mentorships</SectionTitle>
        <ContentText>
          <p>
            Approved mentor for new counselors.
          </p>
        </ContentText>
      </Section>

      <Section>
        <SectionTitle>A Personal Note</SectionTitle>
        <ContentText>
          <p>
            Beyond her professional qualifications, Colleen is relatable and understands the complexities of life. She is married and has two daughters, bringing a grounded, real-world perspective to her therapeutic relationships.
          </p>
        </ContentText>
      </Section>

      <Section style={{ textAlign: 'center' }}>
        <SectionTitle>Ready to Connect?</SectionTitle>
        <ContentText>
          <p>Learn how Colleen can support you on your journey to well-being.</p>
        </ContentText>
        <CTAButton href="/counseling">Explore Our Services</CTAButton>
        <span style={{ margin: '0 1rem' }}>or</span>
        <CTAButton href="/contact" style={{ backgroundColor: theme.colors.primary }}>Contact Us</CTAButton>
      </Section>
    </PageWithQuote>
  );
} 
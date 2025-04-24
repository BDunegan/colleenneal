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

const Quote = styled.blockquote`
  font-size: 1.2rem;
  font-style: italic;
  color: #555;
  margin: 0 auto 2.5rem auto;
  border-left: 3px solid ${theme.colors.secondary};
  padding-left: 1.5rem;
  max-width: 700px;
  text-align: center;

  cite {
    display: block;
    text-align: right;
    font-size: 1rem;
    color: #777;
    margin-top: 0.8rem;
  }
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
    <PageContainer>
      <PageTitle>Learn More About Colleen Neal, LPC</PageTitle>
      <Quote>
        "What lies behind us and what lies before us are tiny matters compared to what lies within us."
        <cite>– Ralph Waldo Emerson</cite>
      </Quote>

      <Section>
        <SectionTitle>Education & Experience</SectionTitle>
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
        <SectionTitle>Personal Note</SectionTitle>
        <ContentText>
          <p>
            Beyond her professional qualifications, Colleen is relatable and understands the complexities of life. She is married and has two daughters, bringing a grounded, real-world perspective to her therapeutic relationships.
          </p>
        </ContentText>
      </Section>

      {/* Call to Action Section */}
      <Section style={{ textAlign: 'center' }}>
        <SectionTitle>Ready to Connect?</SectionTitle>
        <ContentText>
          <p>Learn how Colleen can support you on your journey to well-being.</p>
        </ContentText>
        {/* Primary CTA */}
        <CTAButton href="/counseling">Explore Our Services</CTAButton>
        <span style={{ margin: '0 1rem' }}>or</span>
        {/* Secondary CTA - styled slightly differently */}
        <CTAButton href="/contact" style={{ backgroundColor: theme.colors.primary }}>Contact Us</CTAButton>
      </Section>

    </PageContainer>
  );
} 
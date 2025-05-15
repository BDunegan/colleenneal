/**
 * Contact Snapshot Component (Home Page)
 * 
 * Displays a welcoming call-to-action with contact information and a link to the full Contact page.
 * Uses a warm, inviting design to encourage visitors to reach out.
 */
'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { theme } from '@/lib/theme';

const ContactSnapshotContainer = styled.section`
  padding: 4rem 1rem;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, #1a5276 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.05);
    opacity: 0.1;
    pointer-events: none;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: white;
  margin-bottom: 1.2rem;
  font-weight: 700;
  position: relative;
`;

const ContactText = styled.p`
  font-size: 1.15rem;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  position: relative;
`;

const ContactDetails = styled.div`
    margin-bottom: 2.5rem;
    position: relative;
    
    p {
        margin-bottom: 0.8rem;
        font-size: 1.1rem;
    }
    
    a {
        color: white;
        font-weight: 600;
        text-decoration: none;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.1);
        transition: all 0.2s ease;

        &:hover {
            background-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-1px);
        }
    }
`;

const ContactLink = styled(Link)`
  display: inline-block;
  background-color: white;
  color: ${theme.colors.primary};
  padding: 1rem 2.2rem;
  border: 2px solid white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: transparent;
    color: white;
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

export default function ContactSnapshot() {
  return (
    <ContactSnapshotContainer>
      <SectionTitle>Begin Your Journey to Wellness</SectionTitle>
      <ContactText>
        Taking the first step towards better mental health is a sign of strength. 
        Whether you're seeking support for yourself or a loved one, I'm here to provide 
        a safe, confidential space for healing and growth. Let's work together to create 
        positive change in your life.
      </ContactText>
      <ContactDetails>
        <p>
          <a href="mailto:colleenneal.lpc@gmail.com">colleenneal.lpc@gmail.com</a>
        </p>
        <p>
          <a href="tel:281-508-2566">281-508-2566</a>
        </p>
      </ContactDetails>
      <ContactLink href="/contact">Schedule Your First Session</ContactLink>
    </ContactSnapshotContainer>
  );
} 
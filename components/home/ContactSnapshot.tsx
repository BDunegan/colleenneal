/**
 * Contact Snapshot Component (Home Page)
 * 
 * Displays key contact information (email, phone) and a link to the full Contact page.
 * Uses a distinct background color to stand out.
 */
'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { theme } from '@/lib/theme';

const ContactSnapshotContainer = styled.section`
  padding: 3rem 1rem;
  background-color: ${theme.colors.primary}; /* Use primary color */
  color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: white;
  margin-bottom: 1rem;
`;

const ContactText = styled.p`
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ContactDetails = styled.div`
    margin-bottom: 2rem;
    p {
        margin-bottom: 0.5rem;
        font-size: 1rem;
    }
    a {
        color: white;
        font-weight: 600;
        text-decoration: underline;

        &:hover {
            text-decoration: none;
        }
    }
`;

const ContactLink = styled(Link)`
  display: inline-block;
  background-color: white;
  color: ${theme.colors.primary};
  padding: 0.8rem 1.8rem;
  border: 2px solid white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background-color: transparent;
    color: white;
    text-decoration: none;
  }
`;

export default function ContactSnapshot() {
  return (
    <ContactSnapshotContainer>
      <SectionTitle>Ready to Start Your Journey?</SectionTitle>
      <ContactText>
        Reach out today to schedule a consultation or ask any questions you may have. We're here to help.
      </ContactText>
      <ContactDetails>
        <p>Email: <a href="mailto:colleenneal.lpc@gmail.com">colleenneal.lpc@gmail.com</a></p>
        <p>Phone: <a href="tel:281-508-2566">281-508-2566</a></p>
      </ContactDetails>
      <ContactLink href="/contact">Go to Full Contact Page</ContactLink>
    </ContactSnapshotContainer>
  );
} 
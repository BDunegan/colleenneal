/**
 * Footer Component
 * 
 * Displays site-wide footer information including contact details,
 * policy links, payment methods, and copyright notice.
 * Uses a responsive grid layout.
 */
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image
import styled from 'styled-components';
import { theme } from '@/lib/theme'; // Import theme

const FooterContainer = styled.footer`
  background-color: #f8f8f8; /* Light grey background for footer */
  color: #555; /* Slightly lighter text color */
  padding: 2rem 1rem; /* Mobile padding */
  border-top: 1px solid #ddd;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr; /* Single column on mobile */
  gap: 1.5rem;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on tablet */
    padding: 2.5rem 2rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr); /* Four columns on desktop */
  }
`;

const FooterSection = styled.div`
  h4 {
    color: ${theme.colors.primary};
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }

  a {
    color: #555; /* Match footer text color */
    &:hover {
      color: ${theme.colors.primary};
      text-decoration: underline;
    }
  }
`;

const PolicyLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  a {
    font-size: 0.85rem;
  }
`;

const PaymentLogos = styled.div`
  /* Styles for the payment logos container */
  margin-bottom: 0.5rem; /* Reduced margin */
  img {
      max-width: 100%; /* Ensure image scales down */
      height: auto; /* Maintain aspect ratio */
      max-height: 40px; /* Limit height */
  }
`;

const Copyright = styled.p`
    margin-top: 1rem;
    font-size: 0.8rem;
    color: #777;
    grid-column: 1 / -1; /* Span all columns */
    text-align: center;
    border-top: 1px solid #eee;
    padding-top: 1rem;
`;

export default function Footer() {
  // Get current year dynamically for copyright
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      {/* Request Service Section */}
      <FooterSection>
        {/* Using Link for internal navigation */}
        <h4><Link href="/contact">Request Service</Link></h4>
        <p>Serving the Greater Clear Lake Area</p>
        <p>Phone: <a href="tel:281-508-2566">281-508-2566</a></p>
      </FooterSection>

      {/* Contact Information Section */}
      <FooterSection>
        <h4>Contact Information</h4>
        <p>16864 Royal Crest Drive,<br/>Houston, TX 77058</p>
        <p>Email: <a href="mailto:colleenneal.lpc@gmail.com">colleenneal.lpc@gmail.com</a></p>
        <p>Phone: <a href="tel:281-508-2566">281-508-2566</a></p>
      </FooterSection>

      {/* Policies Section */}
      <FooterSection>
        <h4>Policies</h4>
        <PolicyLinks>
          {/* Assuming these pages exist or will be created */}
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
          {/* Add other policy links here - using placeholder links */}
          <Link href="/notice-of-privacy-practices">Notice of Privacy Practices</Link>
          <Link href="/accessibility">Accessibility Policy</Link>
        </PolicyLinks>
      </FooterSection>

      {/* Payment Methods Section */}
      <FooterSection>
        <h4>Payment Methods</h4>
        <PaymentLogos>
          <Image
            src="/cards.png"
            alt="Payment Methods Accepted: Visa, Mastercard, American Express, Discover, PayPal"
            width={250}
            height={40}
          />
          <p style={{fontSize: '0.8rem', fontStyle: 'italic', marginTop: '0.5rem'}}>Other payment options may be available.</p>
        </PaymentLogos>
      </FooterSection>

      {/* Copyright Notice (Spans Full Width) */}
       <Copyright>&copy; {currentYear} Colleen Neal Therapy. All Rights Reserved.</Copyright>
    </FooterContainer>
  );
} 
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
import Image from 'next/image';
import styled from 'styled-components';
import { theme } from '@/lib/theme';
import { SITE_CONSTANTS, PolicyLink, ImageProps } from '@/lib/constants';

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  color: #555;
  padding: 2rem 1rem;
  border-top: 1px solid #ddd;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 2.5rem 2rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FooterSection = styled.div`
  h2 {
    color: ${theme.colors.primary};
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }

  a {
    color: #555;
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
  margin-bottom: 0.5rem;
  img {
    max-width: 100%;
    height: auto;
    max-height: ${SITE_CONSTANTS.IMAGES.PAYMENT_CARDS.HEIGHT}px;
  }
`;

const Copyright = styled.p`
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #777;
  grid-column: 1 / -1;
  text-align: center;
  border-top: 1px solid #eee;
  padding-top: 1rem;
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const paymentCardsImageProps: ImageProps = {
    src: "/cards.png",
    alt: "Accepted Payment Methods: Visa, Mastercard, American Express, Discover, PayPal",
    width: SITE_CONSTANTS.IMAGES.PAYMENT_CARDS.WIDTH,
    height: SITE_CONSTANTS.IMAGES.PAYMENT_CARDS.HEIGHT,
    className: "payment-cards",
    quality: 90,
    priority: false,
    sizes: "(max-width: 768px) 100vw, 50vw"
  };

  return (
    <FooterContainer>
      <FooterSection>
        <h2><Link href="/contact">Request Service</Link></h2>
        <p>Serving the {SITE_CONSTANTS.CONTACT.AREA}</p>
        <p>Phone: <a href={`tel:${SITE_CONSTANTS.CONTACT.PHONE}`}>{SITE_CONSTANTS.CONTACT.PHONE}</a></p>
      </FooterSection>

      <FooterSection>
        <h2>Contact Information</h2>
        <p>{SITE_CONSTANTS.CONTACT.ADDRESS}</p>
        <p>Email: <a href={`mailto:${SITE_CONSTANTS.CONTACT.EMAIL}`}>{SITE_CONSTANTS.CONTACT.EMAIL}</a></p>
        <p>Phone: <a href={`tel:${SITE_CONSTANTS.CONTACT.PHONE}`}>{SITE_CONSTANTS.CONTACT.PHONE}</a></p>
      </FooterSection>

      <FooterSection>
        <strong>Data Collection:</strong> We only collect the personal information you voluntarily provide when you send us an email via the contact form. That information is used solely to respond to your inquiry and is never sold or shared with third parties.<br/>
      </FooterSection>

      <FooterSection>
        <h2>Payment Methods</h2>
        <PaymentLogos>
          <Image {...paymentCardsImageProps} />
          <p style={{fontSize: '0.8rem', fontStyle: 'italic', marginTop: '0.5rem'}}>
            Other payment options may be available.
          </p>
        </PaymentLogos>
      </FooterSection>

      <Copyright>
        &copy; {currentYear} Colleen Neal Therapy. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
} 
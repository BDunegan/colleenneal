/**
 * Header Component
 * 
 * Displays the site navigation, logo, and contact information.
 * Includes mobile-first responsive navigation (hamburger menu).
 */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import styled from 'styled-components';
import { theme } from '@/lib/theme'; // Import theme

const HeaderContainer = styled.header`
  background-color: ${theme.colors.background};
  padding: 0.8rem 1rem; /* Adjusted padding for mobile */
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* Needed for absolute positioning of mobile menu */

  @media (min-width: 768px) { /* Tablet and up */
    padding: 1rem 2rem;
  }
`;

const LogoContainer = styled.div`
  display: flex; // Align image and text if needed
  align-items: center;
  gap: 0.5rem; // Space between logo and text

  a {
    text-decoration: none;
    display: flex; // Make link wrap image and text together
    align-items: center;
    gap: 0.5rem;
  }

  .logo-image {
    height: 40px; // Adjust height as needed
    width: auto; // Maintain aspect ratio
  }

  .logo-text-container {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 1.1rem; /* Adjust size */
    margin: 0;
    color: ${theme.colors.primary};
    line-height: 1.2;
  }
  p {
    font-size: 0.75rem; /* Adjust size */
    color: #666;
    margin: 0;
  }

  @media (min-width: 768px) {
    .logo-image {
      height: 50px; // Slightly larger on desktop
    }
    h2 {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
    @media (min-width: 992px) {
    h2 {
      font-size: 1.6rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const DesktopNav = styled.nav`
  display: none; /* Hidden on mobile */
  gap: 1.5rem;
  align-items: center;

  a {
    text-decoration: none;
    color: ${theme.colors.text};
    font-weight: 500;
    padding: 0.5rem 0;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      display: block;
      margin-top: 5px;
      right: 0;
      background: ${theme.colors.primary};
      transition: width 0.2s ease;
      -webkit-transition: width 0.2s ease;
    }

    &:hover:after {
      width: 100%;
      left: 0;
      background-color: ${theme.colors.primary};
    }

    &:hover {
      color: ${theme.colors.primary};
      text-decoration: none;
    }
  }

  @media (min-width: 768px) { /* Visible on tablet and up */
    display: flex;
  }
`;

const MobileNavToggle = styled.button`
  display: block; /* Visible on mobile */
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0.5rem;
  color: ${theme.colors.primary};

  @media (min-width: 768px) { /* Hidden on tablet and up */
    display: none;
  }
`;

const MobileMenu = styled.nav<{ $isOpen: boolean }>`
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  top: 100%; /* Position below header */
  left: 0;
  right: 0;
  background-color: ${theme.colors.background};
  border-bottom: 1px solid #eee;
  padding: 1rem;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);

  a {
    color: ${theme.colors.text};
    padding: 0.8rem 1rem;
    text-decoration: none;
    display: block;
    text-align: center;
    font-weight: 500;

    &:hover {
      background-color: #f9f9f9;
      color: ${theme.colors.primary};
      text-decoration: none;
    }
  }

  @media (min-width: 768px) { /* Hidden on tablet and up */
    display: none;
  }
`;

const ContactInfo = styled.div`
  display: none; /* Optionally hide on smallest screens if too cluttered */
  text-align: right;
  font-size: 0.9rem;
  color: #555;

  p {
    margin: 0;
  }

  @media (min-width: 992px) { /* Show on larger screens */
    display: block;
  }
`;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
      setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Colleen Neal, LPC Logo"
            width={150}
            height={50}
            className="logo-image"
            priority
          />
          {/* Optional: Keep text next to logo if desired, otherwise remove below */}
          {/* <div className="logo-text-container">
            <h2>Colleen Neal, LPC</h2>
            <p>Serving the Greater Clear Lake Area</p>
          </div> */}
        </Link>
      </LogoContainer>

      {/* Desktop Navigation */}
      <DesktopNav>
        <Link href="/">Home</Link>
        <Link href="/counseling">Our Services</Link>
        <Link href="/about-us">About</Link>
        <Link href="/contact">Contact</Link>
      </DesktopNav>

      <ContactInfo>
        <p>281-508-2566</p>
      </ContactInfo>

      {/* Mobile Navigation Toggle (Hamburger) */}
      <MobileNavToggle onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '\u2715' : '\u2630'} {/* Close (X) or Hamburger icon */}
      </MobileNavToggle>

      {/* Mobile Menu */}
      <MobileMenu $isOpen={isMobileMenuOpen}>
        <Link href="/" onClick={handleLinkClick}>Home</Link>
        <Link href="/counseling" onClick={handleLinkClick}>Our Services</Link>
        <Link href="/about-us" onClick={handleLinkClick}>About</Link>
        <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
        <a href="tel:281-508-2566" onClick={handleLinkClick} style={{ marginTop: '1rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
          281-508-2566
        </a>
      </MobileMenu>
    </HeaderContainer>
  );
} 
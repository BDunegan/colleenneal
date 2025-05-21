/**
 * Header Component
 * 
 * Displays the site navigation, logo, and contact information.
 * Includes mobile-first responsive navigation (hamburger menu).
 */
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { theme } from '@/lib/theme';
import { SITE_CONSTANTS, NavItem, ImageProps } from '@/lib/constants';

const HeaderContainer = styled.header`
  background-color: ${theme.colors.background};
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 1100;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    min-width: 0;
  }

  .logo-image {
    height: ${SITE_CONSTANTS.IMAGES.LOGO.MOBILE_HEIGHT}px;
    width: auto;
    max-width: 160px;
    min-width: 0;
    object-fit: contain;
  }

  @media (min-width: 768px) {
    .logo-image {
      height: ${SITE_CONSTANTS.IMAGES.LOGO.HEIGHT}px;
      max-width: none;
    }
  }
`;

const DesktopNav = styled.nav`
  display: none;
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

  @media (min-width: 768px) {
    display: flex;
  }
`;

const MobileNavToggle = styled.button`
  display: block;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  color: ${theme.colors.primary};
  position: relative;
  z-index: 1001;
  margin-left: 8px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.nav<{ $isOpen: boolean }>`
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.background};
  padding: 5rem 1rem 1rem 1rem;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  animation: ${props => props.$isOpen ? 'slideIn' : 'slideOut'} 0.3s ease-in-out;

  @keyframes slideIn {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100%);
    }
  }

  a {
    color: ${theme.colors.text};
    padding: 1rem;
    text-decoration: none;
    display: block;
    text-align: center;
    font-weight: 500;
    font-size: 1.2rem;
    border-bottom: 1px solid #eee;
    transition: all 0.2s ease;

    &:hover {
      background-color: #f9f9f9;
      color: ${theme.colors.primary};
      text-decoration: none;
      transform: translateX(5px);
    }

    &:last-child {
      margin-top: 1rem;
      background-color: ${theme.colors.primary};
      color: white;
      border-radius: 5px;
      border: none;

      &:hover {
        background-color: #005fa3;
        transform: translateY(-2px);
      }
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const ContactInfo = styled.div`
  display: none;
  text-align: right;
  font-size: 0.9rem;
  color: #555;

  p {
    margin: 0;
  }

  @media (min-width: 992px) {
    display: block;
  }
`;

const MobileMenuWrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const logoImageProps: ImageProps = {
    src: "/logo.png",
    alt: "Colleen Neal, LPC - Professional Counseling Services in Clear Lake Area",
    width: SITE_CONSTANTS.IMAGES.LOGO.WIDTH,
    height: SITE_CONSTANTS.IMAGES.LOGO.HEIGHT,
    priority: true,
    className: "logo-image",
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link href="/">
          <Image {...logoImageProps} />
        </Link>
      </LogoContainer>

      <DesktopNav>
        {SITE_CONSTANTS.NAV_ITEMS.map((item: NavItem) => (
          <Link key={item.path} href={item.path}>
            {item.label}
          </Link>
        ))}
      </DesktopNav>

      <ContactInfo>
        <p>{SITE_CONSTANTS.CONTACT.PHONE}</p>
      </ContactInfo>

      <MobileMenuWrapper>
        {isMounted && (
          <>
            <MobileNavToggle onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
              {isMobileMenuOpen ? '\u2715' : '\u2630'}
            </MobileNavToggle>

            <MobileMenu $isOpen={isMobileMenuOpen}>
              {SITE_CONSTANTS.NAV_ITEMS.map((item: NavItem) => (
                <Link key={item.path} href={item.path} onClick={handleLinkClick}>
                  {item.label}
                </Link>
              ))}
              <a 
                href={`tel:${SITE_CONSTANTS.CONTACT.PHONE}`} 
                onClick={handleLinkClick}
              >
                Call Now: {SITE_CONSTANTS.CONTACT.PHONE}
              </a>
            </MobileMenu>
          </>
        )}
      </MobileMenuWrapper>
    </HeaderContainer>
  );
} 
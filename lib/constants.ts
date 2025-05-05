export const SITE_CONSTANTS = {
  // Contact Information
  CONTACT: {
    PHONE: "281-508-2566",
    EMAIL: "colleenneal.lpc@gmail.com",
    ADDRESS: "16864 Royal Crest Drive, Houston, TX 77058",
    AREA: "Greater Clear Lake Area",
  },
  
  // Social Media
  SOCIAL: {
    FACEBOOK: "https://www.facebook.com/colleennealtherapy",
    TWITTER: "https://twitter.com/colleenneal",
  },
  
  // Image Dimensions
  IMAGES: {
    LOGO: {
      WIDTH: 150,
      HEIGHT: 50,
      MOBILE_WIDTH: 120,
      MOBILE_HEIGHT: 40,
    },
    PAYMENT_CARDS: {
      WIDTH: 250,
      HEIGHT: 40,
    },
    OG_IMAGE: {
      WIDTH: 1200,
      HEIGHT: 630,
    },
  },
  
  // Navigation
  NAV_ITEMS: [
    { label: "Home", path: "/" },
    { label: "Our Services", path: "/counseling" },
    { label: "About", path: "/about-us" },
    { label: "Contact", path: "/contact" },
  ],
  
  // Policy Links
  POLICY_LINKS: [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms of Use", path: "/terms-of-use" },
    { label: "Notice of Privacy Practices", path: "/notice-of-privacy-practices" },
    { label: "Accessibility Policy", path: "/accessibility" },
  ],
} as const;

// TypeScript interfaces for props
export interface NavItem {
  label: string;
  path: string;
}

export interface PolicyLink {
  label: string;
  path: string;
}

export interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  area: string;
}

export interface SocialLinks {
  facebook: string;
  twitter: string;
} 
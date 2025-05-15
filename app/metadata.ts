import { Metadata, Viewport } from 'next';

// Base URL for the site
export const siteConfig = {
  name: "Colleen Neal Therapy",
  description: "Professional counseling and therapy services in the Greater Clear Lake Area. Specializing in anxiety, depression, relationship counseling, and family therapy.",
  url: "https://www.colleenneal.com",
  ogImage: "https://www.colleenneal.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/colleenneal",
    facebook: "https://www.facebook.com/colleennealtherapy",
  },
  contact: {
    phone: "281-508-2566",
    email: "colleenneal.lpc@gmail.com",
    address: "16864 Royal Crest Drive, Houston, TX 77058",
  },
  social: {
    twitter: "@colleenneal",
    facebook: "colleennealtherapy",
  },
  business: {
    type: "LocalBusiness",
    name: "Colleen Neal Therapy",
    description: "Professional counseling and therapy services",
    address: {
      streetAddress: "16864 Royal Crest Drive",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77058",
      addressCountry: "US"
    },
    geo: {
      latitude: "29.5635",
      longitude: "-95.1234"
    },
    telephone: "+12815082566",
    email: "colleenneal.lpc@gmail.com",
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-17:00",
    sameAs: [
      "https://www.facebook.com/colleennealtherapy",
      "https://twitter.com/colleenneal"
    ]
  }
};

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

// Default metadata for all pages
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "therapy",
    "counseling",
    "mental health",
    "Clear Lake",
    "Houston",
    "LPC",
    "licensed professional counselor",
    "anxiety",
    "depression",
    "relationship counseling",
    "family therapy",
    "professional counselor",
    "mental health services",
    "therapy sessions",
    "emotional support",
    "behavioral health",
    "psychological services",
    "mental wellness",
    "therapeutic services"
  ],
  authors: [{ name: "Colleen Neal", url: siteConfig.url }],
  creator: "Colleen Neal",
  publisher: "Colleen Neal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.social.twitter,
    site: siteConfig.social.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification", // Add your Google verification code
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: "health",
  classification: "professional services",
  referrer: "origin-when-cross-origin",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
  },
  applicationName: siteConfig.name,
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
};

// Helper function to generate page-specific metadata
export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
  path,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  path?: string;
} = {}): Metadata {
  const pageUrl = path ? `${siteConfig.url}${path}` : siteConfig.url;
  
  return {
    ...defaultMetadata,
    title: title ? `${title} | ${siteConfig.name}` : defaultMetadata.title,
    description: description || defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title ? `${title} | ${siteConfig.name}` : defaultMetadata.openGraph?.title,
      description: description || defaultMetadata.openGraph?.description,
      url: pageUrl,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title || siteConfig.name,
            },
          ]
        : defaultMetadata.openGraph?.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title ? `${title} | ${siteConfig.name}` : defaultMetadata.twitter?.title,
      description: description || defaultMetadata.twitter?.description,
      images: image ? [image] : defaultMetadata.twitter?.images,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : defaultMetadata.robots,
    alternates: {
      canonical: pageUrl,
    },
  };
} 
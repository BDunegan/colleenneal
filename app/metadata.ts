import { Metadata } from 'next';

// Base URL for the site
export const siteConfig = {
  name: "Colleen Neal Therapy",
  description: "Exceptional Counseling and Therapy Services in the Greater Clear Lake Area.",
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
    creator: "@colleenneal",
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
};

// Helper function to generate page-specific metadata
export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    ...defaultMetadata,
    title: title ? `${title} | ${siteConfig.name}` : defaultMetadata.title,
    description: description || defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title ? `${title} | ${siteConfig.name}` : defaultMetadata.openGraph?.title,
      description: description || defaultMetadata.openGraph?.description,
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
  };
} 
/**
 * Root Layout Component
 * 
 * Defines the main HTML structure, applies global styles and fonts,
 * sets up styled-components registry and theme provider, and renders
 * the Header, Footer, and page content (children).
 */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Global CSS styles
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS globally

// Core components
import Header from './components/Header';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';

// Providers
import StyledComponentsRegistry from '@/lib/registry';
import ThemeProviderWrapper from './components/ThemeProviderWrapper';

// SEO Configuration
import { defaultMetadata } from './metadata';

// Font setup using next/font
const geistSans = Geist({
  variable: "--font-geist-sans", // CSS variable for easy use in CSS/styled-components
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Export metadata for SEO
export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children, // Represents the content of the specific page being rendered
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply font variables to the body */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Styled Components Registry: Necessary for Next.js App Router */}
        <StyledComponentsRegistry>
          {/* Theme Provider: Makes theme available to all styled-components */}
          <ThemeProviderWrapper>
            {/* Main Container: Ensures footer sticks to bottom */}
            <MainContainer>
              <Header />
              {/* Render the active page's content */}
              <main className="main-content">{children}</main>
              <Footer />
            </MainContainer>
          </ThemeProviderWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

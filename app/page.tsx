/**
 * Home Page (Route: /)
 * 
 * Assembles the main sections for the home page view.
 * Implements lazy loading for below-the-fold components.
 */
import dynamic from 'next/dynamic';
import HeroSection from "./components/home/HeroSection";
import LazyLoad from "./components/LazyLoad";
import LoadingState from "./components/common/LoadingState";

// Dynamically import heavy components
const ServicesOverview = dynamic(() => import('./components/home/ServicesOverview'), {
  loading: () => <LoadingState message="Loading services..." />
});

const AboutUsPreview = dynamic(() => import('./components/home/AboutUsPreview'), {
  loading: () => <LoadingState message="Loading about section..." />
});

const FindUs = dynamic(() => import('./components/home/FindUs'), {
  loading: () => <LoadingState message="Loading location..." />
});

const ContactSnapshot = dynamic(() => import('./components/home/ContactSnapshot'), {
  loading: () => <LoadingState message="Loading contact information..." />
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <LazyLoad>
        <ServicesOverview />
      </LazyLoad>
      <LazyLoad>
        <AboutUsPreview />
      </LazyLoad>
      <LazyLoad>
        <FindUs />
      </LazyLoad>
      <LazyLoad>
        <ContactSnapshot />
      </LazyLoad>
    </>
  );
}

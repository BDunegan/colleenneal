/**
 * Home Page (Route: /)
 * 
 * Assembles the main sections for the home page view.
 * Implements lazy loading for below-the-fold components.
 */
import HeroSection from "./components/home/HeroSection";
import ServicesOverview from "./components/home/ServicesOverview";
import AboutUsPreview from "./components/home/AboutUsPreview";
import FindUs from "./components/home/FindUs";
import ContactSnapshot from "./components/home/ContactSnapshot";
import LazyLoad from "./components/LazyLoad";

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

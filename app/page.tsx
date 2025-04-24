/**
 * Home Page (Route: /)
 * 
 * Assembles the main sections for the home page view.
 */
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import AboutUsPreview from "@/components/home/AboutUsPreview";
import FindUs from "@/components/home/FindUs";
import ContactSnapshot from "@/components/home/ContactSnapshot";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AboutUsPreview />
      <FindUs />
      <ContactSnapshot />
    </>
  );
}

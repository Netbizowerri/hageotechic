import { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import TrustBar from '../components/sections/TrustBar';
import ServicesGrid from '../components/sections/ServicesGrid';
import AboutSnapshot from '../components/sections/AboutSnapshot';
import StatsSection from '../components/sections/StatsSection';
import ClientsSection from '../components/sections/ClientsSection';
import WhyUsSection from '../components/sections/WhyUsSection';
import CTABanner from '../components/ui/CTABanner';

export default function Home() {
  // SEO title update
  useEffect(() => {
    document.title = "Hageotechic Limited — Nigeria's HVAC-R & Cold Room Experts";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="home-view-container" className="relative">
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <AboutSnapshot />
      <StatsSection />
      <ClientsSection />
      <WhyUsSection />
      <CTABanner />
    </div>
  );
}

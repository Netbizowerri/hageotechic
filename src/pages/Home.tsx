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
  useEffect(() => {
    document.title = "HAGeotech | Daikin-Certified VRV/VRF, Chiller & Cold Room Experts Nigeria";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', "Nigeria's Daikin-certified VRV/VRF specialists. Expert chiller, cold room, AHU & industrial cooling servicing nationwide. Trusted by Fan Milk Danone. Get a quote today.");
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

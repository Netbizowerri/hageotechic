import { servicesData } from '../../data/services';
import ServiceCard from '../ui/ServiceCard';
import { motion } from 'motion/react';
import { Network } from 'lucide-react';

export default function ServicesGrid() {
  return (
    <section id="services-grid-section" className="py-20 bg-[#F2F4FF] relative overflow-hidden">
      {/* Visual decorative accents */}
      <div className="absolute right-0 top-1/2 w-[350px] h-[350px] bg-[#00AEEF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 font-sans">
          <div className="inline-flex items-center gap-2 bg-[#0B2545]/5 border border-[#0B2545]/10 rounded-xs px-3 py-1 mb-4">
            <Network className="w-3.5 h-3.5 text-[#00AEEF]" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#0B2545] font-bold">
              Engineering Domain
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0B2545] uppercase tracking-tight leading-none mb-4">
            Complete Cooling Solutions, Nationwide
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Industrial thermal stabilization, rapid corrective diagnostics, and scheduled preventive SLAs to keep your commercial cold chain operating flawlessly.
          </p>
        </div>

        {/* 3x2 / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.shortDescription}
              slug={service.slug}
              iconName={service.icon}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

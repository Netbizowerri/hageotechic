import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/layout/PageHero';
import { servicesData } from '../data/services';
import QuoteForm from '../components/forms/QuoteForm';
import { CheckCircle2, ChevronRight, Snowflake, Wind, Droplet, Cpu, Thermometer, Zap, AlertTriangle, ArrowLeft } from 'lucide-react';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();

  // Look up matching service data block
  const service = servicesData.find((item) => item.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} Specifications | Hageotechic Limited`;
    } else {
      document.title = "Service Subdivision Not Found | Hageotechic Limited";
    }
    window.scrollTo(0, 0);
  }, [service]);

  // Fallback map for custom icon render
  const getIcon = (itemSlug: string) => {
    switch (itemSlug) {
      case 'cold-rooms': return Snowflake;
      case 'hvac': return Wind;
      case 'chillers': return Droplet;
      case 'vrf-vrv': return Cpu;
      case 'refrigeration': return Thermometer;
      case 'energy': return Zap;
      default: return Snowflake;
    }
  };

  // Safe Guard fallback in case route parameter is missing/faulty
  if (!service) {
    return (
      <div id="service-not-found-view" className="relative bg-transparent py-20 min-h-[calc(100vh-76px)] flex items-center justify-center font-sans">
        <div className="max-w-md mx-auto px-4 text-center bg-[#0B2545]/40 border border-white/10 rounded-xs p-8">
          <div className="inline-flex justify-center p-4 bg-white/5 text-[#00AEEF] border border-white/10 rounded-xs mb-6">
            <AlertTriangle className="w-10 h-10" />
          </div>
          <h2 className="font-display font-bold text-xl text-white uppercase tracking-tight">
            Service Division Not Found
          </h2>
          <p className="text-xs text-slate-400 mt-3 leading-relaxed">
            The requested cooling subdivision parameter does not match any authenticated Hageotechic operational sector.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              to="/services"
              className="px-6 py-3 bg-[#00AEEF] hover:bg-white hover:text-black text-black rounded-xs text-xs font-mono font-bold transition-all transition-colors uppercase tracking-wider"
            >
              Browse Active Services
            </Link>
            <Link to="/" className="text-xs text-[#00AEEF] hover:text-white font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 mt-2">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home Landing
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Active Icon
  const IconHeader = getIcon(service.slug);

  return (
    <div id={`service-detail-view-${service.slug}`} className="relative bg-transparent">
      <PageHero
        title={service.title}
        subtitle={service.shortDescription}
        category="Hageotechic Corporate Asset Specification"
      />

      <section className="py-16 md:py-24 bg-[#F2F4FF] font-sans border-t border-[#0B2545]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back navigation line */}
          <div className="mb-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[10px] text-[#0B2545] hover:text-[#00AEEF] font-mono font-bold uppercase tracking-wider transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              Back to Services Directory
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Content Column (60% / 7 Cols on desktop): Technical features blueprint details */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Detailed Context Narrative */}
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#00AEEF] font-bold block mb-1">
                  Scope Overview
                </span>
                <h2 className="font-display font-black text-2xl text-[#0B2545] uppercase tracking-tight leading-none mb-4">
                  Engineering Standards & Operational Domain
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed block">
                  {service.description}
                </p>
              </div>

              {/* Core Features list checkpoints */}
              <div>
                <h3 className="font-display font-black text-base text-[#0B2545] uppercase pb-2 border-b border-[#0B2545]/10 mb-4">
                  Key Technical Specifications
                </h3>
                <div className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 items-start bg-white hover:border-[#00AEEF]/50 p-4 rounded-xs border border-[#0B2545]/10 transition-all shadow-md"
                    >
                      <div className="p-1 bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 rounded-xs shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed block">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related clients & Supported strategic OEM brands row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                
                {/* Related Clients */}
                {service.relatedClients && (
                  <div className="bg-white border border-[#0B2545]/10 rounded-xs p-5 shadow-md">
                    <h4 className="font-display font-black text-xs text-[#0B2545] uppercase tracking-wider mb-2">
                      Corporate Track Record
                    </h4>
                    <span className="text-[10px] text-slate-500 block mb-3 leading-snug">
                       Clients maintaining active SLAs for this subdivision domain.
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {service.relatedClients.map((client, cIdx) => (
                        <li key={cIdx} className="flex items-center gap-1.5 font-bold">
                          <ChevronRight className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                          {client}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Supported OEM Manufactures */}
                {service.supportedBrands && (
                  <div className="bg-white border border-[#0B2545]/10 rounded-xs p-5 shadow-md">
                    <h4 className="font-display font-black text-xs text-[#0B2545] uppercase tracking-wider mb-2">
                      Supported Manufacturers
                    </h4>
                    <span className="text-[10px] text-slate-500 block mb-3 leading-snug">
                      OEM partners whose replacement components are securely buffered.
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.supportedBrands.map((brand, bIdx) => (
                        <span
                          key={bIdx}
                          className="bg-[#0B2545]/5 text-[#0B2545] font-mono text-[9px] font-bold px-2 py-0.5 rounded-xs border border-[#0B2545]/10 shadow-sm"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Quality statement banner block */}
              <div className="bg-[#0B2545] border border-[#0B2545] rounded-xs p-6 relative overflow-hidden text-white shadow-xl">
                <div className="absolute right-0 top-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />
                <h4 className="font-mono font-bold text-sm text-[#00AEEF] uppercase">
                  The Hageotechic SLA Assurance
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed mt-2 block">
                  All reactive repair services are catalogued with precise digital telemetry. For contract clients, we maintain a 3-month spare parts buffer locally in Lagos to circumvent supply chain constraints, enforcing a strict 0 downtime target.
                </p>
              </div>

            </div>

            {/* Right Widget Column (40% / 5 Cols on desktop): Interactive Quote form */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <QuoteForm />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

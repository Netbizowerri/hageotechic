import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/layout/PageHero';
import { servicesData } from '../data/services';
import { Network, Snowflake, Wind, Droplet, Cpu, Thermometer, Zap, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import CTABanner from '../components/ui/CTABanner';

export default function Services() {
  useEffect(() => {
    document.title = "Our Services | VRV/VRF, Chillers, Cold Rooms, AHU & Cooling Solutions";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', "Daikin-certified VRV installation, chiller maintenance, cold room servicing, AHU repair, industrial cooling, and commercial AC across Nigeria.");
    window.scrollTo(0, 0);
  }, []);

  // Icon mapping helper for direct rendering
  const getIcon = (slug: string) => {
    switch (slug) {
      case 'cold-rooms': return Snowflake;
      case 'hvac': return Wind;
      case 'chillers': return Droplet;
      case 'vrf-vrv': return Cpu;
      case 'refrigeration': return Thermometer;
      case 'energy': return Zap;
      default: return Snowflake;
    }
  };

  return (
    <div id="services-view-root" className="relative">
      <PageHero
        title="Complete Cooling Solutions, Nationwide"
        subtitle="Explore our six core engineering subdivisions spanning cold chain assets, hotel HVAC, process water chillers, and precision electrical automation."
        category="Technical Services Portfolio"
      />

      {/* Services deep dive list */}
      <section className="py-20 bg-[#F2F4FF] font-sans border-t border-[#0B2545]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-16">
            {servicesData.map((service, index) => {
              const IconComp = getIcon(service.slug);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-[#0B2545]/10 pb-16 last:border-0 last:pb-0 scroll-mt-24`}
                >
                  {/* Left block (service text/details) - shifts left/right based on even/odd index for layout rhythm */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="inline-flex items-center gap-2 bg-[#00AEEF]/10 border border-[#00AEEF]/25 rounded-xs px-3 py-1 mb-4">
                      <IconComp className="w-3.5 h-3.5 text-[#00AEEF]" />
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#00AEEF] font-bold">
                        Service subdivision {index + 1}
                      </span>
                    </div>

                    <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0B2545] uppercase tracking-tight leading-none mb-4">
                      {service.title}
                    </h2>

                    <div className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 space-y-3">
                      {service.description.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>

                    {/* Features list bullet points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex gap-2 items-start">
                          <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                          <span className="text-[11px] text-slate-600 leading-tight block">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Supported brands/manufacturers listed below details */}
                    {service.supportedBrands && (
                      <div className="flex flex-wrap items-center gap-2 mb-6">
                        <span className="font-mono text-[10px] text-slate-500 font-bold uppercase shrink-0 mr-1">
                          Supported Brands:
                        </span>
                        {service.supportedBrands.map((brand, bIndex) => (
                          <span
                            key={bIndex}
                            className="bg-white text-[#0B2545] font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-xs border border-[#0B2545]/10"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#00AEEF] hover:text-[#0B2545] transition-colors font-bold"
                    >
                      View Specification Specs
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                  </div>

                  {/* Right block (blueprint/specification graphic card) */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-[#0B2545] rounded-xs p-6 border border-[#0B2545] shadow-xl relative overflow-hidden bg-tech-grid text-white">
                      {/* Decorative corners */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#00AEEF]/30" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#00AEEF]/30" />

                      <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                        <span className="font-mono text-[9px] text-slate-300 uppercase tracking-wider font-semibold">
                          System Diagram specs
                        </span>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      </div>

                      <div className="space-y-4 font-mono text-[11px] text-slate-200 py-3">
                        <div className="flex justify-between items-center text-xs text-[#00AEEF] font-bold uppercase">
                          <span>Subdivision Tag</span>
                          <span className="text-[#00AEEF] font-black">{service.slug.toUpperCase()}</span>
                        </div>
                        
                        <div className="p-3.5 bg-white/5 border border-white/10 rounded-xs">
                          <span className="text-slate-350 text-[10px] block mb-1">Contractual SLA Response</span>
                          <span className="text-white font-bold">Within 24 Hours Nationwide</span>
                        </div>

                        <div className="p-3.5 bg-white/5 border border-white/10 rounded-xs">
                          <span className="text-slate-350 text-[10px] block mb-1">Parts Buffer Standard</span>
                          <span className="text-white font-bold">3-Month Guaranteed Active Log</span>
                        </div>
                      </div>

                      <div className="pt-4 mt-2 border-t border-white/5 flex justify-between items-center text-[10px] text-slate-400 font-mono font-bold">
                        <span>OEM Certified</span>
                        <span>HQ: Mafoluku, Lagos</span>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Preventive Maintenance & SLA CTA */}
      <section className="py-16 bg-[#0B2545] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/25 rounded-xs px-3 py-1 mb-4">
            <ShieldCheck className="w-4 h-4 text-brand-accent" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-brand-accent font-bold">
              SLA-Backed Protection
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight leading-none mb-4">
            Preventive Maintenance & SLA Programs
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto mb-8">
            Don't wait for a breakdown. Get guaranteed response times, original spare parts, and regular scheduled inspections backed by contractual SLAs.
          </p>
          <Link
            to="/preventive-maintenance-sla"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-white hover:text-[#0B2545] text-white px-8 py-4 rounded-xs text-xs uppercase tracking-widest font-bold transition-all"
          >
            Learn About Our SLA Plans
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

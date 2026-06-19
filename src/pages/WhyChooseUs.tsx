import { useEffect } from 'react';
import PageHero from '../components/layout/PageHero';
import { ShieldCheck, Snowflake, Trophy, Compass, Clock, Database, BarChart3, HelpCircle } from 'lucide-react';
import CTABanner from '../components/ui/CTABanner';

export default function WhyChooseUs() {
  useEffect(() => {
    document.title = "Our Operational Pillars & Safety | Hageotechic Limited";
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      icon: Trophy,
      title: 'Nationwide Coverage & Mobility',
      tagline: '40+ expert refrigeration engineers on standby.',
      desc: 'With central dispatching hubs in Lagos, Abuja, Port Harcourt, and Kano, we deploy standard tools, thermal diagnostics equipment, and certified mechanics to secure facility systems in all 36 Nigerian states.'
    },
    {
      icon: BarChart3,
      title: 'Failure Mode & Criticality Assessment (FMCA)',
      tagline: 'Proactive stress analysis at client sign-up.',
      desc: 'Instead of waiting for a motor to fuse, we conduct exhaustive vibration testing, thermal imagings, oil acid checks, and leak-sweeps at contract initiation. This establishes baseline telemetry metrics to safeguard your asset.'
    },
    {
      icon: Database,
      title: '3-Month strategic Spares Buffer',
      tagline: 'Defeating port blockages and currency delays.',
      desc: 'A broken condenser fan or burnt motor cannot wait. We maintain an intensive, proprietary inventory of genuine Copeland, Daikin, and Bitzer components permanently in our local warehouse vaults to execute rapid retrofits.'
    },
    {
      icon: Clock,
      title: 'Just-In-Time (JIT) Resolution Protocols',
      tagline: 'Strict response deadlines backed by legal agreements.',
      desc: 'We operate under highly demanding corporate SLA contracts. With live phone and email communication pathways directly to the engineering room, our teams initiate field troubleshooting within hours of log entries.'
    },
    {
      icon: Snowflake,
      title: 'Zero Downtime Culture',
      tagline: 'Shifting the paradigm to proactive prevention.',
      desc: 'By initiating scheduled weekly and monthly preventive cycles, we catch motor degradation, cooling level drops, and fan fatigue way before severe physical failures can trigger supply downtime.'
    },
    {
      icon: Compass,
      title: 'Fully Catalogued Parts DB',
      tagline: 'Instant transparent quote rates.',
      desc: 'We store a live pricing repository for genuine components. This guarantees immediate, transparent bills of material, completely avoiding the sluggish sourcing lag of conventional maintenance providers.'
    }
  ];

  return (
    <div id="why-us-page" className="relative">
      <PageHero
        title="Why Nigeria's Corporate Giants Trust Us"
        subtitle="Explore the six absolute engineering pillars that secure over ₦5 billion in cold-chain assets and hotel HVAC-R networks nationwide."
        category="Hageotechic Framework"
      />

      <section className="py-20 bg-[#F2F4FF] font-sans border-t border-[#0B2545]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section subtitle block */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-xs px-3 py-1 mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#00AEEF] font-bold">
                Operational Supremacy
              </span>
            </div>
            <h2 className="font-display font-black text-3xl text-[#0B2545] uppercase tracking-tight leading-none mb-4">
              Six Pillars of Reliability
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
              We stand apart from general repair freelancers. Our crew leverages strict corporate blueprints, audited OEM databases, and strategic hardware buffer inventories.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#0B2545]/10 rounded-xs p-6 flex flex-col justify-between hover:border-[#00AEEF]/40 hover:shadow-lg transition-all duration-300 shadow-md"
                >
                  <div>
                    {/* Top row */}
                    <div className="flex justify-between items-start mb-6 border-b border-[#0B2545]/10 pb-4">
                      <div className="inline-flex items-center justify-center p-3 bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 rounded-xs">
                        <Icon className="w-5 h-5 text-[#00AEEF]" />
                      </div>
                      <span className="font-mono text-[10px] text-[#00AEEF] font-bold">
                        PILLAR 0{idx + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="font-display font-black text-sm text-[#0B2545] uppercase tracking-tight mb-2">
                      {pillar.title}
                    </h3>
                    <p className="font-mono text-[10px] text-[#00AEEF] mt-1 tracking-wide uppercase font-bold">
                      {pillar.tagline}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mt-3.5 font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Philosophy Banner */}
          <div className="mt-16 bg-[#0B2545] border border-[#0B2545] rounded-xs p-8 relative overflow-hidden bg-tech-grid shadow-xl text-white">
            <div className="absolute right-0 top-0 w-48 h-48 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-3xl relative z-10">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#00AEEF] font-bold block mb-2">
                Executive Ideology
              </span>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase tracking-tight">
                "Zero Breakdown" Philosophy — Secure Your Operations
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed mt-3">
                Thermal failures are not simple hardware nuisances. For an ice-cream manufacturer or bulk fish importer, a single hour of temperature loss triggers millions in spoiled inventory. For a five-star hotel or navy ship, chiller failure breaks operational credibility instantly. Our entire workflow exists to diagnose and treat fault vectors before they can mutate into actual system breakdowns.
              </p>
            </div>
          </div>

        </div>
      </section>

      <CTABanner />
    </div>
  );
}

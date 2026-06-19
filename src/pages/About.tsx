import { useEffect } from 'react';
import PageHero from '../components/layout/PageHero';
import { ShieldCheck, Snowflake, Users, Settings, Target, Compass } from 'lucide-react';
import CTABanner from '../components/ui/CTABanner';

export default function About() {
  useEffect(() => {
    document.title = "Our Founding History & Philosophy | Hageotechic Limited";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="about-page-view" className="relative">
      <PageHero
        title="Established 2017. Trusted by Multinationals."
        subtitle="The story of how we became Nigeria's most rigorous industrial cooling maintenance enterprise."
        category="Hageotechic Corporate Story"
      />

      {/* Main Body narrative */}
      <section className="py-16 md:py-24 bg-[#F2F4FF] font-sans border-t border-[#0B2545]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left sidebar: Corporate stats at a glance */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              <div className="bg-white border border-[#0B2545]/10 rounded-xs p-6 space-y-6 shadow-md">
                <h3 className="font-display font-black text-base text-[#0B2545] border-b border-[#0B2545]/10 pb-3 uppercase tracking-wider">
                  At A Glance
                </h3>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 rounded-xs shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-slate-500 font-semibold">Technical Workforce</span>
                    <strong className="block text-sm text-[#0B2545]">40+ Full-time Engineers</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 rounded-xs shrink-0">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-slate-500 font-semibold">Buffer Warehouses</span>
                    <strong className="block text-sm text-[#0B2545]">3-Month Spare Reserve</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 rounded-xs shrink-0">
                    <Snowflake className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-slate-500 font-semibold">Total Installations</span>
                    <strong className="block text-sm text-[#0B2545]">Over ₦5 Billion Executed</strong>
                  </div>
                </div>
              </div>

              {/* Strategic statement card */}
              <div className="bg-[#0B2545] border border-[#0B2545] rounded-xs p-6 relative overflow-hidden text-white shadow-xl">
                <div className="absolute right-0 bottom-0 w-24 h-24 bg-brand-accent/5 rounded-full blur-xl pointer-events-none" />
                <h4 className="font-mono font-bold text-xs text-[#00AEEF] uppercase tracking-wider mb-2">
                  Rapid Assembly Guarantee
                </h4>
                <p className="font-sans text-xs text-slate-200 leading-relaxed">
                  We maintain direct procurement accounts with Bitzer and Copeland to dispatch core compressor replacement parts within 24 hours nationwide.
                </p>
              </div>
            </div>

            {/* Right main body content */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Block 1: History */}
              <div className="prose max-w-none text-slate-600 font-sans text-xs sm:text-sm leading-relaxed space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#00AEEF] font-bold block mb-1">
                  Our Founding (2017)
                </span>
                <h3 className="font-display font-black text-2xl text-[#0B2545] uppercase tracking-tight leading-none mb-4">
                  Securing Critical Cold Chain Assets Since Day One
                </h3>
                <p>
                  Hageotechic Limited was incorporated in 2017 to bridge the massive gap in reliable, high-spec industrial cooling asset maintenance across West Africa. In a market plagued by counterfeit spare parts and reactive repairs, Hageotechic introduced a culture of proactive Failure Mode Analysis and strict adherence to original manufacturer parameters.
                </p>
                <p>
                  Our early successes in optimizing complex refrigeration lines caught the attention of prime commercial organizations. In 2018, we secured the **exclusive pan-Nigeria cold room maintenance contract for Fan Milk / Danone**. This massive responsibility became the cornerstone of our national logistics footprint, leading us to manage over ₦2 billion in dairy processing cold infrastructure.
                </p>
              </div>

              {/* Block 2: Expansion & Hotel Work */}
              <div className="prose max-w-none text-slate-600 font-sans text-xs sm:text-sm leading-relaxed space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#00AEEF] font-bold block mb-1">
                  Evolution & Diversification
                </span>
                <h3 className="font-display font-black text-xl text-[#0B2545] uppercase tracking-tight leading-none mb-4">
                  From Food Supplies to Premium Hospitality & Defense
                </h3>
                <p>
                  Building on our reputation with Fan Milk Danone and UAC Supreme Ice Cream, we expanded our industrial portfolio to cover corporate central air and HVAC. We undertook master contracts with **Intercontinental Hotel, Protea Hotel, and Bellissimo Hotel**, keeping complex multi-circuit chillers running without a minute of operational downtime.
                </p>
                <p>
                  Our advanced engineering capacity was eventually commissioned by the **Nigerian Navy**. We provided specialized marine ventilation and heavy compressor diagnostics for flagship navy vessels, including **NNS Ambe, NNS Aradu, and NNS Obuma**, proving Hageotechic's ability to maintain systems in the most critical and challenging maritime environments.
                </p>
              </div>

              {/* Block 3: Vision & Mission Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 font-sans">
                <div className="bg-white border border-[#0B2545]/10 rounded-xs p-6 flex flex-col justify-between shadow-md">
                  <div className="p-3 bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 rounded-xs inline-flex w-fit mb-4">
                    <Compass className="w-5 h-5 shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-sm text-[#0B2545] uppercase tracking-tight">
                      Corporate Vision
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2 animate-none">
                      To be and be recognized as Africa's most reliable and innovative cooling solutions company.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-[#0B2545]/10 rounded-xs p-6 flex flex-col justify-between shadow-md">
                  <div className="p-3 bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 rounded-xs inline-flex w-fit mb-4">
                    <Target className="w-5 h-5 shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-sm text-[#0B2545] uppercase tracking-tight">
                      Corporate Mission
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2 animate-none">
                      Delivering high-quality, energy-efficient, and cost-effective HVAC & refrigeration solutions that support our clients' business growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Block 4: Strategic Partners Statement */}
              <div className="bg-[#0B2545] border border-[#0B2545] rounded-xs p-6 flex items-start gap-4 font-sans text-white shadow-xl">
                <ShieldCheck className="w-6 h-6 text-[#00AEEF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-mono font-bold text-sm text-[#00AEEF] uppercase">
                    Strategic OEM Alliance Policy
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed mt-2">
                    We strictly forbid the utilization of gray-market or non-certified replica components. By maintaining direct wholesale accounts with York, Daikin, Carrier, LG, Bitzer, and Copeland, we ensure every valve, fan belt, and compressor piston matches factory specifications, preserving your asset's long-term depreciation schedule.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

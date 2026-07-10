import { useEffect } from 'react';
import PageHero from '../components/layout/PageHero';
import { ShieldCheck, Snowflake, Users, Settings, Award, Star, Package, Clock } from 'lucide-react';
import CTABanner from '../components/ui/CTABanner';

export default function About() {
  useEffect(() => {
    document.title = "About HAGeotech | 40+ Certified Technicians — Nigeria's Most Qualified Cooling Team";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', "Daikin International-certified for VRV systems. Trained on Copeland, Bitzer & Frascold compressors. Qualified on York, Daikin, Trane & Carrier chillers. Over 40 technicians nationwide.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="about-page-view" className="relative">
      <PageHero
        title="40+ Certified Technicians. Nigeria's Most Qualified Cooling Team."
        subtitle="Daikin International-certified · Compressor specialists · Big 4 chiller-trained"
        category="About HAGeotech"
      />

      <section className="py-16 md:py-24 bg-[#F2F4FF] font-sans border-t border-[#0B2545]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left sidebar: Certifications */}
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
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-slate-500 font-semibold">Daikin Certification</span>
                    <strong className="block text-sm text-[#0B2545]">VRV Systems — One of Few in Nigeria</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 rounded-xs shrink-0">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-slate-500 font-semibold">Compressor Certifications</span>
                    <strong className="block text-sm text-[#0B2545]">Copeland · Bitzer · Frascold</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 rounded-xs shrink-0">
                    <Snowflake className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-slate-500 font-semibold">Big 4 Chiller Brands</span>
                    <strong className="block text-sm text-[#0B2545]">York · Daikin · Trane · Carrier</strong>
                  </div>
                </div>
              </div>

              <div className="bg-[#0B2545] border border-[#0B2545] rounded-xs p-6 relative overflow-hidden text-white shadow-xl">
                <div className="absolute right-0 bottom-0 w-24 h-24 bg-brand-accent/5 rounded-full blur-xl pointer-events-none" />
                <h4 className="font-mono font-bold text-xs text-[#00AEEF] uppercase tracking-wider mb-2">
                  Original Spare Parts Stocked
                </h4>
                <p className="font-sans text-xs text-slate-200 leading-relaxed">
                  We stock original spare parts and manage full inventory for our clients' systems, so repairs and maintenance don't get delayed waiting on parts.
                </p>
              </div>
            </div>

            {/* Right main body content */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Block 1: Who We Are */}
              <div className="prose max-w-none text-slate-600 font-sans text-xs sm:text-sm leading-relaxed space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#00AEEF] font-bold block mb-1">
                  Who We Are
                </span>
                <h3 className="font-display font-black text-2xl text-[#0B2545] uppercase tracking-tight leading-none mb-4">
                  Nigeria's Most Qualified Cooling Team
                </h3>
                <p>
                  HAGeotech brings together one of the largest and most highly trained HVAC teams in Nigeria — over 40 qualified technicians and engineers, backed by additional freelance technicians and labor for larger projects.
                </p>
                <p>
                  We're trusted by major brands including Fan Milk Danone for cold room servicing nationwide.
                </p>
              </div>

              {/* Block 2: Certifications */}
              <div className="space-y-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#00AEEF] font-bold block mb-1">
                  Our Certifications
                </span>
                <h3 className="font-display font-black text-xl text-[#0B2545] uppercase tracking-tight leading-none mb-4">
                  What Sets Us Apart
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-[#0B2545]/10 rounded-xs p-5 shadow-md">
                    <div className="p-2 bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 rounded-xs inline-flex mb-3">
                      <Award className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-sm text-[#0B2545] uppercase">Daikin International VRV</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">One of the few companies in Nigeria certified directly by Daikin International for VRV systems.</p>
                  </div>
                  <div className="bg-white border border-[#0B2545]/10 rounded-xs p-5 shadow-md">
                    <div className="p-2 bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 rounded-xs inline-flex mb-3">
                      <Settings className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-sm text-[#0B2545] uppercase">Compressor Certified</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">Certified on Copeland, Bitzer, and Frascold semi-hermetic compressors used in cold room systems.</p>
                  </div>
                  <div className="bg-white border border-[#0B2545]/10 rounded-xs p-5 shadow-md">
                    <div className="p-2 bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 rounded-xs inline-flex mb-3">
                      <Star className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-sm text-[#0B2545] uppercase">Big 4 Chiller & AHU</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">Trained and qualified on York, Daikin, Trane, and Carrier — the industry's leading chiller and AHU brands.</p>
                  </div>
                  <div className="bg-white border border-[#0B2545]/10 rounded-xs p-5 shadow-md">
                    <div className="p-2 bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 rounded-xs inline-flex mb-3">
                      <Package className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-sm text-[#0B2545] uppercase">Inventory & Parts</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">We stock original spare parts and manage full inventory for our clients' systems to prevent delays.</p>
                  </div>
                </div>
              </div>

              {/* Block 3: Our Approach */}
              <div className="space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#00AEEF] font-bold block mb-1">
                  Our Approach
                </span>
                <h3 className="font-display font-black text-xl text-[#0B2545] uppercase tracking-tight leading-none mb-4">
                  Preventive Maintenance Model
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We operate a preventive maintenance model — regularly servicing equipment before problems happen, responding on time according to agreed SLAs, and keeping your temperatures within required standards at all times.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To keep your systems running reliably, we stock original spare parts and manage inventory directly, so repairs and maintenance don't get delayed waiting on parts. We also maintain additional freelance technicians and labor support for larger projects.
                </p>
              </div>

              {/* Block 4: Fan Milk Trust Badge */}
              <div className="bg-[#0B2545] border border-[#0B2545] rounded-xs p-6 flex items-start gap-4 font-sans text-white shadow-xl">
                <ShieldCheck className="w-6 h-6 text-[#00AEEF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-mono font-bold text-sm text-[#00AEEF] uppercase">
                    Trusted by Fan Milk Danone
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed mt-2">
                    We're proud to service cold rooms nationwide for Fan Milk Danone, one of Nigeria's leading food and beverage brands — a testament to the quality and reliability of our technical team.
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

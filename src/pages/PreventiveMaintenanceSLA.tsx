import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/layout/PageHero';
import { CheckCircle2, Clock, ShieldCheck, Package, FileText, Thermometer, MessageCircle, Mail, ArrowRight } from 'lucide-react';

export default function PreventiveMaintenanceSLA() {
  useEffect(() => {
    document.title = "Preventive Maintenance & SLA | HAGeotech Nigeria";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', "SLA-backed preventive maintenance for cold rooms, chillers, AHUs, and VRV/VRF systems. Guaranteed response times, original spare parts, nationwide coverage.");
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Clock,
      title: 'Regular Scheduled Inspections',
      desc: 'Routine servicing and inspections before problems start — not after they happen.'
    },
    {
      icon: ShieldCheck,
      title: 'Guaranteed SLA Response Times',
      desc: 'Agreed response times you can rely on, backed by contractual SLAs with escalation procedures.'
    },
    {
      icon: Thermometer,
      title: 'Temperature Monitoring',
      desc: 'Continuous monitoring to ensure your systems stay within required standards at all times.'
    },
    {
      icon: Package,
      title: 'Original Spare Parts Stocked',
      desc: 'Original parts stocked and ready so repairs aren\'t delayed waiting on procurement.'
    },
    {
      icon: FileText,
      title: 'Detailed Maintenance Records',
      desc: 'Comprehensive records for every visit so you always know the health of your equipment.'
    }
  ];

  return (
    <div id="sla-page" className="relative">
      <PageHero
        title="Preventive Maintenance Programs"
        subtitle="Reliable, On-Time, SLA-Backed — Keep Your Cooling Systems Running"
        category="Preventive Maintenance & SLA"
      />

      <section className="py-16 md:py-24 bg-[#F2F4FF] font-sans border-t border-[#0B2545]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-10">

              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#00AEEF] font-bold block mb-1">
                  Why Preventive Maintenance?
                </span>
                <h2 className="font-display font-black text-2xl text-[#0B2545] uppercase tracking-tight leading-none mb-4">
                  Don't Wait for a Breakdown
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Unwanted breakdowns cost businesses money — especially when it comes to cold rooms, chillers, and cooling systems that protect valuable stock or keep operations running. That's why HAGeotech operates a preventive maintenance model, not just a call-when-it-breaks service.
                </p>
              </div>

              <div>
                <h3 className="font-display font-black text-base text-[#0B2545] uppercase pb-2 border-b border-[#0B2545]/10 mb-4">
                  How Our Preventive Maintenance Works
                </h3>
                <div className="space-y-4">
                  {features.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={idx}
                        className="flex gap-3 items-start bg-white hover:border-[#00AEEF]/50 p-4 rounded-xs border border-[#0B2545]/10 transition-all shadow-md"
                      >
                        <div className="p-2 bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 rounded-xs shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-sm text-[#0B2545]">{feature.title}</h4>
                          <p className="text-xs text-slate-600 leading-relaxed mt-1">{feature.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-[#0B2545] border border-[#0B2545] rounded-xs p-6 relative overflow-hidden text-white shadow-xl">
                <div className="absolute right-0 top-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />
                <h4 className="font-mono font-bold text-sm text-[#00AEEF] uppercase">
                  Trusted by Fan Milk Danone
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed mt-2">
                  We currently manage preventive maintenance contracts for major clients including Fan Milk Danone, servicing cold rooms nationwide.
                </p>
              </div>

            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
              <div className="bg-white border border-[#0B2545]/10 rounded-xs p-6 shadow-md">
                <h3 className="font-display font-black text-base text-[#0B2545] border-b border-[#0B2545]/10 pb-3 uppercase tracking-wider">
                  Who This Is For
                </h3>
                <div className="mt-4 space-y-3">
                  {[
                    'Cold storage & food & beverage companies',
                    'Manufacturing plants',
                    'Hotels & hospitality',
                    'Hospitals & healthcare Facilities',
                    'Office buildings & commercial facilities',
                    'Any facility relying on chillers, cold rooms, AHUs, or VRV/VRF systems'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-[#0B2545]/10 rounded-xs p-6 shadow-md">
                <h3 className="font-display font-black text-sm text-[#0B2545] uppercase mb-3">
                  Get an SLA-Backed Plan Today
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/2349165827282?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20HVAC%2Fcold%20room%20servicing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-5 py-3 rounded-xs text-xs uppercase tracking-widest font-bold transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="mailto:info@hageotech.com.ng"
                    className="w-full flex items-center justify-center gap-2 bg-[#0B2545] hover:bg-[#1B4F8A] text-white px-5 py-3 rounded-xs text-xs uppercase tracking-widest font-bold transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    Email Us
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowUpRight, CheckCircle2, Award, Briefcase } from 'lucide-react';

export default function AboutSnapshot() {
  return (
    <section id="about-snapshot-section" className="py-20 bg-transparent relative overflow-hidden border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (40% / 5 Cols on desktop): Technical Blueprint Asset Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient blur sphere */}
            <div className="absolute w-72 h-72 bg-brand-accent/5 rounded-full blur-[60px]" />

            <div className="relative bg-[#0B2545]/20 rounded-xs p-6 md:p-8 w-full border border-white/10 shadow-xl overflow-hidden bg-tech-grid">
              {/* Technical indicators */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#00AEEF]/40" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#00AEEF]/40" />

              <span className="font-mono text-[9px] tracking-widest text-[#00AEEF] uppercase font-bold block mb-1">
                Engineering Assessment
              </span>
              <h3 className="font-display font-bold text-lg text-white mb-4 uppercase">
                OEM Integrity Audit Model
              </h3>

              {/* Progress metrics and verification loops */}
              <div className="space-y-4 font-mono text-[11px] text-gray-300">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xs space-y-2">
                  <div className="flex justify-between font-bold text-[#00AEEF]">
                    <span>Preventive SLA Compliance</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-[#060F1E] h-1.5 rounded-none overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="bg-brand-accent h-full animate-pulse"
                    />
                  </div>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-xs space-y-1.5">
                  <span className="text-gray-400 font-bold">Pan-Nigeria Contract Coverage</span>
                  <div className="flex items-center gap-1.5 text-white">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span>Fan Milk / Danone Cold Storage (Since 2018)</span>
                  </div>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-xs space-y-1">
                  <span className="text-gray-400 font-bold">OEM Strategic Alignments</span>
                  <p className="text-[10px] text-gray-400">
                    York, Daikin, Copeland, Bitzer, Sabroe, LG, Carrier
                  </p>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#00AEEF]">
                <span>Est. Lagos, 2017</span>
                <span className="flex items-center gap-1 font-bold text-brand-accent">
                  <ShieldCheck className="w-3.5 h-3.5" /> Checked OEM Parts Only
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (60% / 7 Cols on desktop): Context Copy and Key Proofs */}
          <div className="lg:col-span-7 flex flex-col items-start font-sans">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xs px-3 py-1 mb-4">
              <Award className="w-3.5 h-3.5 text-brand-accent" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-brand-accent font-bold">
                Corporate Track Record
              </span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight leading-none mb-4">
              Established 2017. <br className="hidden sm:inline" />
              Trusted by Multinationals.
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
              Hageotechic Limited has operated at the absolute pinnacle of the West African cooling systems market since 2017. With a core track record of executing over ₦5 billion in installation and preventive maintenance projects, we provide uninterrupted technical support to premium corporations and governmental bureaus across Nigeria.
            </p>

            {/* Core Snapshot Proof Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full">
              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-xs text-white leading-tight">
                    Exclusive Pan-Nigeria SLA
                  </h4>
                  <p className="font-sans text-[11px] text-slate-400 mt-1 leading-normal">
                    Undertaking all cold storage & chiller servicing for Fan Milk / Danone since 2018.
                  </p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-xs text-white leading-tight">
                    Premium Hotel Systems
                  </h4>
                  <p className="font-sans text-[11px] text-slate-400 mt-1 leading-normal">
                    Complete HVAC management for Intercontinental, Protea, and Bellissimo Hotels.
                  </p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-xs text-white leading-tight">
                    Genuine OEM Spares Only
                  </h4>
                  <p className="font-sans text-[11px] text-slate-400 mt-1 leading-normal">
                    Strict adherence to original equipment specs to prolong industrial apparatus lifespans.
                  </p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-xs text-white leading-tight">
                    National Navy Specialist
                  </h4>
                  <p className="font-sans text-[11px] text-slate-400 mt-1 leading-normal">
                    Commissioned for critical engineering on naval flagship vessels (NNS Ambe, NNS Aradu, NNS Obuma).
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button Link */}
            <div className="mt-8">
              <Link
                to="/about"
                className="font-mono text-[10px] uppercase tracking-wider text-brand-accent hover:text-white inline-flex items-center gap-1.5 group pb-1 border-b border-white/15 hover:border-brand-accent transition-colors duration-200 font-bold"
              >
                Read Our Full Story
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

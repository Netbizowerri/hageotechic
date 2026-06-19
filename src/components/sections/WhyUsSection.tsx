import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Globe, Library, Database, Zap, ArrowUpRight, HelpCircle } from 'lucide-react';

export default function WhyUsSection() {
  const pillars = [
    {
      icon: Globe,
      title: 'Nationwide Coverage',
      desc: 'Mobile teams of 40+ expert cold-chain engineers answering calls across all 36 Nigerian states.'
    },
    {
      icon: Database,
      title: '3-Month Spares Reserve',
      desc: 'Maintaining massive quantities of OEM compressors, fans, and gas stocks to bypass import lag.'
    },
    {
      icon: Library,
      title: 'FMCA Methodology',
      desc: 'Executing comprehensive Failure Mode & Criticality Assessments at the initiation of every contract.'
    },
    {
      icon: Zap,
      title: 'Zero Breakdown Philosophy',
      desc: 'Assertive, rapid-scheduling preventive sweeps ensuring zero runtime thermal loss.'
    }
  ];

  return (
    <section id="why-choose-us-snapshot" className="py-20 bg-[#060F1E] relative overflow-hidden bg-tech-grid border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left font-sans">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xs px-3 py-1 mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#00AEEF] font-bold">
                Operational Framework
              </span>
            </div>
            <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight leading-none mb-4">
              Standards Safeguarding Supply Chains
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-405 text-slate-400 leading-relaxed">
              We do not believe in reactive patchworks. We deploy structured, OEM-certified protocols designed specifically to avoid system disruptions from the first day.
            </p>
          </div>

          <Link
            to="/why-choose-us"
            className="font-mono text-[10px] uppercase tracking-wider text-[#00AEEF] hover:text-white inline-flex items-center gap-1.5 pb-1 border-b border-white/15 hover:border-[#00AEEF] shrink-0 transition-colors duration-200 font-bold"
          >
            Why Choose Hageotechic? Full Breakdown
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.15 }}
                className="bg-[#0B2545]/20 border border-white/10 rounded-xs p-6 flex flex-col justify-between transition-all duration-300 shadow-xl hover:border-[#00AEEF]/40"
              >
                <div>
                  {/* Icon container */}
                  <div className="inline-flex items-center justify-center p-3.5 bg-white/5 text-[#00AEEF] border border-white/10 rounded-xs mb-4">
                    <Icon className="w-5 h-5 text-[#00AEEF]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-sm text-white uppercase tracking-tight mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs text-slate-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

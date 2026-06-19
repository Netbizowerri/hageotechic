import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Mail } from 'lucide-react';

export default function CTABanner() {
  return (
    <section 
      id="cta-gradient-banner"
      className="relative overflow-hidden py-16 md:py-24 bg-[#0B2545]/20 border-t border-b border-white/10 text-white"
    >
      {/* Background blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-10 bottom-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center font-sans">
        {/* Verification icon */}
        <div className="inline-flex items-center justify-center p-3 bg-white/5 border border-white/15 rounded-xs mb-6">
          <ShieldCheck className="w-8 h-8 text-[#00AEEF]" />
        </div>

        {/* Header */}
        <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight max-w-2xl mx-auto leading-none mb-4">
          Ready to Protect Your Cooling Systems?
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
          Get a professional maintenance assessment, rapid OEM response assurance, and a custom SLA proposal today.
        </p>

        {/* CTA Button list */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
          <motion.div whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="px-6 py-3.5 bg-[#00AEEF] hover:bg-[#1B4F8A] text-white rounded-xs font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-[#00AEEF]/20 transition-all"
            >
              Request Proposal
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          
          <a
            href="mailto:hageotechic@gmail.com"
            className="px-6 py-3.5 bg-transparent hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-xs font-mono text-xs uppercase tracking-widest text-white font-bold flex items-center gap-2 transition-all"
          >
            <Mail className="w-4 h-4 text-[#00AEEF]" />
            Email Engineering Desk
          </a>
        </div>
        
        {/* Footnote reassurance */}
        <p className="font-mono text-[10px] tracking-widest text-[#00AEEF] mt-8 uppercase font-bold">
          Zero downtime target · 3-Month strategic spares reserve nationwide
        </p>
      </div>
    </section>
  );
}

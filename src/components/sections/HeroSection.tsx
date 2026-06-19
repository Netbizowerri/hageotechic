import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Settings, Activity, ShieldCheck, Award, Users } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="homepage-hero"
      className="relative min-h-[calc(100vh-76px)] bg-[#060F1E] flex items-center overflow-hidden py-16 md:py-24"
    >
      {/* Background Image Layer with Right-reveal Fade Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="https://i.ibb.co/93vrx7PL/HAGEO-2.jpg"
          alt="Hageotechic Corporate Operations"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-right-top"
        />
        {/* Sleek multi-stop linear gradient: solid dark background on the left transitioning to translucent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060F1E] via-[#060F1E]/95 via-[#060F1E]/85 to-[#060F1E]/30" />
      </div>

      {/* Immersive radial gradient blurs */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#00AEEF]/10 rounded-full blur-[160px] pointer-events-none z-1" />
      <div className="absolute left-[-100px] top-10 w-[300px] h-[300px] bg-[#00AEEF]/5 rounded-full blur-[120px] pointer-events-none z-1" />

      {/* Blueprint background grid lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-1">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-[#00AEEF]/40" />
        <div className="absolute left-[30%] top-0 bottom-0 w-px bg-[#00AEEF]/25" />
        <div className="absolute left-[70%] top-0 bottom-0 w-px bg-[#00AEEF]/25" />
        <div className="absolute top-[20%] left-0 right-0 h-px bg-[#00AEEF]/25" />
        <div className="absolute top-[60%] left-0 right-0 h-px bg-[#00AEEF]/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
          >
            {/* Nationwide authority tag */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-4"
            >
              <span className="h-px w-12 bg-[#00AEEF]"></span>
              <span className="text-[#00AEEF] text-xs font-bold tracking-[0.3em] uppercase font-mono">
                Nigeria's Premier Cooling Partner
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white tracking-tighter uppercase leading-[0.95]"
            >
              Trusted <span className="text-[#00AEEF]">Cooling</span> <br />
              Systems Expert
            </motion.h1>

            {/* Subtitle specification row */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg text-slate-400 mt-6 leading-relaxed font-light max-w-lg"
            >
              HVAC-R · Cold Rooms · VRF/VRV · Chillers. Providing industrial, commercial and residential maintenance with zero-downtime philosophy across Nigeria since 2017.
            </motion.p>

            {/* Quick trust line */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-[#00AEEF] shadow-[0_0_8px_#00AEEF]"></div>
              <span className="text-[10px] text-slate-300 font-bold font-mono tracking-widest uppercase">
                Over ₦5 Billion in Executed Projects
              </span>
            </motion.div>

            {/* Call to action list */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-4 w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto text-center px-8 py-4 bg-[#00AEEF] text-white text-xs uppercase tracking-widest font-bold shadow-lg shadow-[#00AEEF]/20 rounded-xs transition-all hover:bg-[#1B4F8A] active:scale-97 flex items-center justify-center gap-2"
              >
                Request Proposal
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/clients"
                className="w-full sm:w-auto text-center px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 rounded-xs font-sans text-xs uppercase tracking-widest text-white font-bold transition-colors flex items-center justify-center gap-1"
              >
                Explore Projects
              </Link>
            </motion.div>

          </motion.div>

          {/* Right Column: Abstract Blueprint Tech Matrix & Floating Stats */}
          <div className="lg:col-span-5 relative w-full border-l border-white/10 bg-[#0B2545]/30 min-h-[440px] sm:min-h-[460px] rounded-xs overflow-hidden exclude-size-overrides">
            <div className="absolute inset-0 flex flex-col justify-between">
              
              {/* Stat 1: Glass background card */}
              <div className="border-b border-white/5 p-6 sm:p-8 flex flex-col justify-end h-1/3">
                <div className="p-4 sm:p-5 bg-white/5 backdrop-blur-xl border border-white/10 relative overflow-hidden rounded-xs">
                  <div className="absolute top-3 right-4 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                    <span className="text-[9px] uppercase tracking-widest text-[#00AEEF] font-black font-mono">
                      Live Statistics
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white tracking-tight leading-none mb-1.5">₦5B+</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold leading-tight">
                    Total Projects Executed
                  </div>
                </div>
              </div>

              {/* Stat 2 Grid */}
              <div className="border-b border-white/5 grid grid-cols-2 h-1/3">
                <div className="border-r border-white/5 p-6 sm:p-8 flex flex-col justify-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-white tracking-tight leading-none mb-1.5">40+</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold leading-tight">
                    Technical Engineers
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-[#00AEEF] uppercase tracking-tight leading-none mb-1.5">100%</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold leading-tight">
                    SLA Fulfillment
                  </div>
                </div>
              </div>

              {/* Nationwide guarantees / items */}
              <div className="p-6 sm:p-8 flex flex-col justify-center gap-3 bg-gradient-to-br from-transparent to-[#00AEEF]/10 h-1/3">
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] shadow-[0_0_8px_#00AEEF]"></div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white font-mono font-bold">
                    Nationwide Support 24/7
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1B4F8A]"></div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-300 font-mono font-bold">
                    100% OEM Strategic Spares
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  category?: string;
}

export default function PageHero({ title, subtitle, category = 'Hageotechic Engineering' }: PageHeroProps) {
  return (
    <section 
      id="page-hero-container"
      className="relative bg-[#060F1E] overflow-hidden py-16 md:py-24 border-b border-[#0B2545]/30"
    >
      {/* Background Image Layer with Right-reveal Fade Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="https://i.ibb.co/93vrx7PL/HAGEO-2.jpg"
          alt="Hageotechic Corporate Operations"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-right-top"
        />
        {/* Sleek multi-stop linear gradient matching home hero */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060F1E] via-[#060F1E]/95 via-[#060F1E]/85 to-[#060F1E]/30" />
      </div>

      {/* Aesthetic blur gradients */}
      <div className="absolute right-0 top-0 w-[400px] h-[300px] bg-[#00AEEF]/5 rounded-full blur-[120px] pointer-events-none z-1" />
      <div className="absolute left-10 bottom-0 w-[300px] h-[200px] bg-[#00AEEF]/3 rounded-full blur-[90px] pointer-events-none z-1" />

      {/* Blueprint design lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-1">
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-[#00AEEF]/30" />
        <div className="absolute left-[85%] top-0 bottom-0 w-px bg-[#00AEEF]/30" />
        <div className="absolute top-[30%] left-0 right-0 h-px bg-[#00AEEF]/30" />
        <div className="absolute bottom-[20%] left-0 right-0 h-px bg-[#00AEEF]/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Category Chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-brand-secondary/30 border border-brand-accent/30 rounded-full px-3 py-1 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-brand-accent font-semibold">
              {category}
            </span>
          </motion.div>

          {/* Page Display Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
          >
            {title}
          </motion.h1>

          {/* Subheading sentence */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm sm:text-base md:text-lg text-gray-300 mt-4 leading-relaxed font-light"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

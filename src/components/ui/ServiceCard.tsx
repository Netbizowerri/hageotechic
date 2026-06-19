import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Snowflake, Wind, Droplet, Cpu, ThermometerSnowflake, Zap, ArrowRight } from 'lucide-react';
import { ComponentType } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  iconName: string;
  imageUrl?: string;
  key?: any;
}

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Snowflake: Snowflake,
  Wind: Wind,
  Droplet: Droplet,
  Cpu: Cpu,
  ThermometerSnowflake: ThermometerSnowflake,
  Zap: Zap,
};

export default function ServiceCard({ title, description, slug, iconName, imageUrl }: ServiceCardProps) {
  const IconSelector = iconMap[iconName] || Snowflake;

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.15 } }}
      className="group relative flex flex-col justify-between bg-[#060F1E] hover:bg-[#060F1E]/90 border border-white/10 hover:border-[#00AEEF]/30 rounded-xs p-5 transition-all duration-300 overflow-hidden shadow-md"
    >
      {/* Decorative vertical bar on hover */}
      <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-transparent group-hover:bg-[#00AEEF] transition-all duration-300" />
      
      <div>
        {/* Solution Image Thumbnail */}
        {imageUrl && (
          <div className="w-full h-44 overflow-hidden mb-5 rounded-xs relative bg-[#0B2545]/40 border border-white/5">
            <img
              src={imageUrl}
              alt={title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060F1E]/60 via-transparent to-transparent opacity-80" />
          </div>
        )}

        <div className="flex items-start justify-between gap-4 mb-4">
          {/* Technical Label */}
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#00AEEF] block uppercase font-bold mt-1">
            Hageotechic Unit
          </span>

          {/* Dynamic Icon Container */}
          <div className="inline-flex items-center justify-center p-2.5 bg-white/5 text-[#00AEEF] border border-white/10 rounded-xs group-hover:bg-[#00AEEF] group-hover:text-black transition-all duration-300 shrink-0">
            <IconSelector className="w-4 h-4 shrink-0" />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-black text-lg text-white uppercase tracking-tight mb-2 group-hover:text-[#00AEEF] transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="font-sans text-xs text-slate-400 leading-relaxed pr-2">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
        <Link
          to={`/services/${slug}`}
          className="font-mono text-[10px] uppercase tracking-wider text-slate-300 group-hover:text-[#00AEEF] inline-flex items-center gap-1.5 transition-colors font-bold"
        >
          Technical Specifications
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#00AEEF]" />
        </Link>
      </div>
    </motion.div>
  );
}

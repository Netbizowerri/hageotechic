import { motion } from 'motion/react';
import { Shield, Calendar, Layers, DollarSign } from 'lucide-react';

interface ClientCardProps {
  name: string;
  scope: string;
  value: string;
  duration?: string;
  industry: string;
  lightTheme?: boolean;
  key?: any;
}

export default function ClientCard({ name, scope, value, duration, industry, lightTheme = false }: ClientCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.15 }}
      className={`${
        lightTheme
          ? 'bg-white border border-[#0B2545]/10 shadow-md hover:border-[#00AEEF]/50'
          : 'bg-[#0B2545]/30 border border-white/10 hover:border-[#00AEEF]/30'
      } rounded-xs p-6 transition-all duration-300 flex flex-col justify-between`}
    >
      <div>
        {/* Header sector */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className={`inline-block ${
            lightTheme
              ? 'bg-[#0B2545]/5 text-[#0B2545] border-[#0B2545]/10'
              : 'bg-white/5 text-[#00AEEF] border border-white/10'
          } text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-xs border`}>
            {industry}
          </span>
          <div className={`${
            lightTheme
              ? 'bg-[#00AEEF]/10 border border-[#00AEEF]/20 text-[#00AEEF]'
              : 'text-[#00AEEF] bg-white/5 border border-white/5'
          } flex items-center justify-center p-1.5 rounded-xs`}>
            <Shield className="w-4 h-4" />
          </div>
        </div>

        {/* Client Name */}
        <h3 className={`font-display font-black text-lg sm:text-xl ${
          lightTheme ? 'text-[#0B2545]' : 'text-white'
        } uppercase tracking-tight mb-3`}>
          {name}
        </h3>

        {/* Project Scope Statement */}
        <div className="flex gap-2.5 items-start mb-4">
          <Layers className={`w-4 h-4 ${lightTheme ? 'text-[#00AEEF]' : 'text-[#00AEEF]'} shrink-0 mt-0.5`} />
          <p className={`font-sans text-xs ${lightTheme ? 'text-slate-600' : 'text-slate-400'} leading-relaxed`}>
            {scope}
          </p>
        </div>
      </div>

      {/* Footer details (meta + price tier) */}
      <div className={`pt-4 border-t ${lightTheme ? 'border-[#0B2545]/5' : 'border-white/5'} mt-4 space-y-3`}>
        {duration && (
          <div className={`flex items-center gap-2 text-[11px] ${lightTheme ? 'text-slate-500' : 'text-slate-400'} font-sans`}>
            <Calendar className={`w-3.5 h-3.5 ${lightTheme ? 'text-slate-400' : 'text-slate-500'}`} />
            <span>Active Contract: <strong className={lightTheme ? 'text-[#0B2545]' : 'text-white'}>{duration}</strong></span>
          </div>
        )}

        {/* Execution worth badge */}
        <div className={`flex items-center justify-between ${
          lightTheme ? 'bg-[#0B2545]/5 border-[#0B2545]/5' : 'bg-white/5 border-white/5'
        } rounded-xs px-3 py-2.5 border`}>
          <div className="flex items-center gap-1">
            <DollarSign className="w-3.5 h-3.5 text-[#00AEEF]" />
            <span className={`text-[10px] uppercase font-mono tracking-wider ${lightTheme ? 'text-slate-500 font-bold' : 'text-slate-400 font-bold'}`}>
              Executed Volume
            </span>
          </div>
          <span className={`font-mono text-xs font-bold ${
            lightTheme
              ? 'text-white bg-[#0B2545] border-none'
              : 'text-[#00AEEF] bg-[#0B2545]/50 border border-white/10'
          } px-2.5 py-0.5 rounded-xs`}>
            {value}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

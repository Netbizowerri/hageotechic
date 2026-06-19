import StatCounter from '../ui/StatCounter';
import { HelpCircle } from 'lucide-react';

export default function StatsSection() {
  return (
    <section 
      id="stats-headline-banner"
      className="bg-[#060F1E] py-20 relative overflow-hidden bg-tech-grid border-b border-white/10"
    >
      {/* Background radial accent flare */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-primary/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 font-sans">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xs px-3 py-1 mb-4">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#00AEEF] font-bold">
              Audited Corporate Assets
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase mt-2 leading-none tracking-tight">
            Engineered For Absolute Integrity
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed">
            By analyzing physical fail points and maintaining strategic backup assets, we secure Nigeria's most sensitive thermal supply-chain networks.
          </p>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCounter
            prefix="₦"
            endValue={5}
            suffix="B+"
            label="Total Projects Executed"
            subLabel="Across continuous industrial operations since 2017"
          />
          <StatCounter
            endValue={40}
            suffix="+"
            label="Qualified HVAC Experts"
            subLabel="Mobile field specialists deployed active nationwide"
          />
          <StatCounter
            endValue={3}
            suffix=" Months"
            label="Spare Parts Buffer"
            subLabel="Strategic backup warehouses for contractual clients"
          />
          <StatCounter
            endValue={100}
            suffix="%"
            label="SLA Fulfilment Commitment"
            subLabel="Enforcing strict preventative checks with zero-lag logs"
          />
        </div>

        {/* Technical clarification subscript */}
        <p className="text-center text-gray-400 font-mono text-[10px] mt-10 uppercase flex items-center justify-center gap-1.5 opacity-80">
          <HelpCircle className="w-3.5 h-3.5 text-brand-accent" />
          Statistics audited and compiled in compliance with OEM manufacturer criteria
        </p>

      </div>
    </section>
  );
}

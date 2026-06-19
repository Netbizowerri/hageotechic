import { Link } from 'react-router-dom';
import { clientsData } from '../../data/clients';
import ClientCard from '../ui/ClientCard';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function ClientsSection() {
  // Filter for the 3 major featured clients as specified
  const featuredClients = clientsData.slice(0, 3);

  return (
    <section id="featured-clients-section" className="py-20 bg-[#F2F4FF] relative overflow-hidden border-t border-[#0B2545]/5">
      {/* Decorative gradients */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-[#00AEEF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6 font-sans">
          <div className="max-w-xl text-left">
            <div className="inline-flex items-center gap-2 bg-[#0B2545]/5 border border-[#0B2545]/10 rounded-xs px-3 py-1 mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#0B2545] font-bold">
                Multinational Approvals
              </span>
            </div>
            <h2 className="font-display font-black text-3xl text-[#0B2545] uppercase tracking-tight leading-none mb-4">
              SLA Executions Under High Pressure
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Managing complex, multi-million colder systems demands institutional competence. We are proud to prevent failures for Nigeria's largest brands.
            </p>
          </div>

          <Link
            to="/clients"
            className="group font-mono text-[10px] uppercase tracking-wider text-[#0B2545] hover:text-white inline-flex items-center gap-1.5 shrink-0 transition-all bg-white hover:bg-[#0B2545] border border-[#0B2545]/10 rounded-xs px-5 py-3 shadow-md font-bold"
          >
            See All Clients & Projects
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredClients.map((client) => (
            <ClientCard
              key={client.id}
              name={client.name}
              scope={client.scope}
              value={client.value}
              duration={client.duration}
              industry={client.industry}
              lightTheme={true}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

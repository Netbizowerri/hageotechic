import { useEffect } from 'react';
import PageHero from '../components/layout/PageHero';
import { clientsData } from '../data/clients';
import { brandsData } from '../data/manufacturers';
import ClientCard from '../components/ui/ClientCard';
import BrandBadge from '../components/ui/BrandBadge';
import { Award, Briefcase, HeartHandshake, ShieldCheck, CheckCircle2 } from 'lucide-react';
import CTABanner from '../components/ui/CTABanner';

export default function Clients() {
  useEffect(() => {
    document.title = "Our Clients | HAGeotech — Trusted by Fan Milk Danone & Nigeria's Top Brands";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', "Trusted by Fan Milk Danone, UAC Supreme Ice Cream, Intercontinental Hotel, Coca-Cola, P&G, and more for HVAC and cold room servicing nationwide.");
    window.scrollTo(0, 0);
  }, []);

  // Filter lists for cleaner structuring
  const featuredClients = clientsData.filter((client) => client.isFeatured);
  const regularClients = clientsData.filter((client) => !client.isFeatured);

  const vrfBrands = brandsData.filter((b) => b.category === 'vrf');
  const chillerBrands = brandsData.filter((b) => b.category === 'chiller');
  const oemPartners = brandsData.filter((b) => b.category === 'oem');

  return (
    <div id="clients-page-view" className="relative">
      <PageHero
        title="Projects That Speak for Themselves"
        subtitle="Over ₦5 billion in executed projects across Nigeria's most demanding industrial, commercial, and national defense sectors."
        category="Hageotechic Portfolios"
      />

      {/* Section 1: Major Cold Room portfolios */}
      <section className="py-20 bg-[#F2F4FF] border-b border-[#0B2545]/10 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-xs px-3 py-1 mb-4">
              <Award className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#00AEEF] font-bold">
                Pioneer Executions
              </span>
            </div>
            <h2 className="font-display font-black text-3xl text-[#0B2545] uppercase tracking-tight leading-none mb-4">
              Major Cold Storage Anchors
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              These high-performance assets require continuous, strict parameter monitoring, complex compressor overhauls, and prompt emergency SLAs.
            </p>
          </div>

          {/* Cards Grid */}
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

      {/* Section 2: Other Commercial Chiller & VRF clients */}
      <section className="py-20 bg-[#060F1E] border-b border-white/10 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xs px-3 py-1 mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#00AEEF] font-bold">
                Commercial and Governmental
              </span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none mb-4">
              Additional Corporate & Marine Executions
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Maintaining large-scale water towers, central HVAC systems, and dynamic cooling lines to guarantee zero business disruption.
            </p>
          </div>

          {/* Table / List layout */}
          <div className="bg-[#0B2545]/20 border border-white/10 rounded-xs overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/5 text-left text-xs font-sans">
                <thead className="bg-[#060F1E]">
                  <tr>
                    <th className="px-6 py-4 text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">Client Name</th>
                    <th className="px-6 py-4 text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">Technical Scope</th>
                    <th className="px-6 py-4 text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">Industry Sector</th>
                    <th className="px-6 py-4 text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold text-right">Contract Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  {regularClients.map((client) => (
                    <tr key={client.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-bold text-white text-sm uppercase">
                        {client.name}
                      </td>
                      <td className="px-6 py-4 whitespace-normal max-w-sm font-light">
                        {client.scope}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="bg-white/5 text-[#00AEEF] font-mono text-[9px] font-bold px-2.5 py-1 rounded-xs border border-white/10">
                          {client.industry}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right font-mono font-bold text-[#00AEEF] uppercase">
                        {client.value.includes('On-going') || client.value.includes('Contractual') ? 'Active SLA' : 'Completed contract'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Section 3: Supported OEM Manufacturers Grouping */}
      <section className="py-20 bg-[#F2F4FF] font-sans border-t border-[#0B2545]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-xs px-3 py-1 mb-4">
              <HeartHandshake className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#00AEEF] font-bold">
                Manufacturer Support Network
              </span>
            </div>
            <h2 className="font-display font-black text-3xl text-[#0B2545] uppercase tracking-tight leading-none mb-4">
              Certified Systems Support
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
              Our engineering crews are trained directly on these core technologies to replace seals, overhaul cylinders, and rebuild motors correctly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Column A: VRF/VRV */}
            <div className="bg-white border border-[#0B2545]/10 rounded-xs p-6 shadow-md">
              <h3 className="font-display font-black text-sm text-[#0B2545] border-b border-[#0B2545]/10 pb-3 mb-5 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#00AEEF] rounded-full animate-pulse" />
                VRF / VRV Systems
              </h3>
              <div className="flex flex-wrap gap-2">
                {vrfBrands.map((b) => (
                  <BrandBadge key={b.name} name={b.name} category={b.category} lightTheme={true} />
                ))}
              </div>
            </div>

            {/* Column B: Chillers */}
            <div className="bg-white border border-[#0B2545]/10 rounded-xs p-6 shadow-md">
              <h3 className="font-display font-black text-sm text-[#0B2545] border-b border-[#0B2545]/10 pb-3 mb-5 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#00AEEF] rounded-full animate-pulse" />
                Heavy Chillers
              </h3>
              <div className="flex flex-wrap gap-2">
                {chillerBrands.map((b) => (
                  <BrandBadge key={b.name} name={b.name} category={b.category} lightTheme={true} />
                ))}
              </div>
            </div>

            {/* Column C: OEM Core Partners */}
            <div className="bg-white border border-[#0B2545]/10 rounded-xs p-6 shadow-md">
              <h3 className="font-display font-black text-sm text-[#0B2545] border-b border-[#0B2545]/10 pb-3 mb-5 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#00AEEF] rounded-full animate-pulse" />
                OEM Strategic Spares
              </h3>
              <div className="flex flex-wrap gap-2">
                {oemPartners.map((b) => (
                  <BrandBadge key={b.name} name={b.name} category={b.category} lightTheme={true} />
                ))}
              </div>
            </div>

          </div>

          {/* Spare Parts Buffer Statement */}
          <div className="mt-12 bg-[#0B2545] border border-[#0B2545] rounded-xs p-6 flex flex-col sm:flex-row items-center gap-4 text-white shadow-xl">
            <ShieldCheck className="w-10 h-10 text-[#00AEEF] shrink-0" />
            <div className="text-center sm:text-left">
              <h4 className="font-mono font-bold text-sm text-[#00AEEF] uppercase">Strategic 3-Month Spare Parts Buffer Lock</h4>
              <p className="text-[11px] text-slate-200 leading-normal mt-1">
                To bypass logistics delays in local Nigerian ports, Hageotechic Limited buffers complete backup inventories of Copeland condensers, Bitzer replacement coils, and Sabroe components directly in our secure warehouses.
              </p>
            </div>
          </div>

        </div>
      </section>

      <CTABanner />

    </div>
  );
}

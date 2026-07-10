import { Link } from 'react-router-dom';
import { Snowflake, Mail, Phone, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-[#060F1E] text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Core Mission */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#00AEEF] flex items-center justify-center rounded-xs rotate-45 transition-transform duration-500 group-hover:rotate-[225deg]">
                <div className="w-6 h-6 border-2 border-white -rotate-45 flex items-center justify-center font-display font-black text-xs italic uppercase text-white">
                  H
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-base tracking-tighter text-white uppercase">
                  HAGEOTECHIC
                </span>
                <span className="font-sans text-[8px] tracking-[0.2em] text-[#00AEEF] uppercase font-semibold">
                  Engineered Excellence
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed mt-2">
              Nigeria's Daikin-certified VRV/VRF specialists. Expert chiller, cold room, AHU & industrial cooling servicing nationwide. Trusted by Fan Milk Danone.
            </p>
            <div className="bg-[#0B2545]/30 border border-white/10 p-3.5 rounded-xs mt-2">
              <span className="text-[10px] font-mono text-brand-accent uppercase tracking-wider block mb-1 font-bold">
                Servicing All of Nigeria
              </span>
              <p className="text-[11px] text-gray-300 italic leading-relaxed">
                Daikin International-certified · Copeland, Bitzer & Frascold compressor certified · Big 4 chiller brands: York, Daikin, Trane & Carrier
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (Services) */}
          <div>
            <h3 className="font-display font-semibold text-sm text-white uppercase tracking-wider mb-5 border-l-2 border-brand-accent pl-3">
              Cooling Services
            </h3>
            <ul className="space-y-3 text-xs text-gray-400">
              <li>
                <Link to="/services/vrf-vrv" className="hover:text-brand-accent transition-colors flex items-center gap-1 group">
                  VRV & VRF Daikin Service
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services/chillers" className="hover:text-brand-accent transition-colors flex items-center gap-1 group">
                  Chiller Maintenance & Repair
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services/cold-rooms" className="hover:text-brand-accent transition-colors flex items-center gap-1 group">
                  Cold Room Installation & Service
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services/hvac" className="hover:text-brand-accent transition-colors flex items-center gap-1 group">
                  AHU Servicing
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services/refrigeration" className="hover:text-brand-accent transition-colors flex items-center gap-1 group">
                  Industrial Cooling Systems
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services/energy" className="hover:text-brand-accent transition-colors flex items-center gap-1 group">
                  Commercial & Residential AC
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Navigation */}
          <div>
            <h3 className="font-display font-semibold text-sm text-white uppercase tracking-wider mb-5 border-l-2 border-brand-accent pl-3">
              Corporate Overview
            </h3>
            <ul className="space-y-3 text-xs text-gray-400">
              <li>
                <Link to="/" className="hover:text-brand-accent transition-colors">Home Landing</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-accent transition-colors">About HAGeotech</Link>
              </li>
              <li>
                <Link to="/clients" className="hover:text-brand-accent transition-colors">Executions & Client Portfolio</Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="hover:text-brand-accent transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link to="/preventive-maintenance-sla" className="hover:text-brand-accent transition-colors">Preventive Maintenance & SLA</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-accent transition-colors font-medium text-brand-accent flex items-center gap-1">
                  Request Custom SLA Proposal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-semibold text-sm text-white uppercase tracking-wider mb-1 border-l-2 border-brand-accent pl-3">
              Headquarters Office
            </h3>
            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  14 Rafiu Street, Mafoluku, Lagos, Nigeria
                </span>
              </div>
              <div className="flex flex-col gap-1.5 pt-1">
                <span className="text-[10px] uppercase font-mono text-gray-500 tracking-wider">Hotlines</span>
                <div className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                  <div className="flex flex-col font-mono text-gray-300">
                    <a href="tel:08023331355" className="hover:text-brand-accent">0802 333 1355</a>
                    <a href="tel:08037325222" className="hover:text-brand-accent">0803 732 5222</a>
                    <a href="tel:09165827282" className="hover:text-brand-accent">0916 582 7282</a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                <a href="mailto:info@hageotech.com.ng" className="hover:text-brand-accent font-mono text-gray-300">
                  info@hageotech.com.ng
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href="https://wa.me/2349165827282" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] font-mono text-gray-300">
                  WhatsApp: 0916 582 7282
                </a>
              </div>
            </div>
            
            {/* SLA Badge */}
            <div className="border border-white/10 bg-[#0B2545]/30 rounded-xs p-3 text-center mt-1">
              <span className="font-mono text-[9px] tracking-wider text-brand-accent block font-bold mb-0.5">
                SERVICING ALL OF NIGERIA
              </span>
              <span className="text-[10px] text-gray-300">
                Lagos / Abuja / Port Harcourt / Kano
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright & specifications block */}
         <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
           <div>
             <span className="font-mono text-gray-400 font-semibold uppercase tracking-wider">
               Hageotechic Limited 
             </span>
             <span className="mx-2">|</span>
             <span>© {currentYear} All Rights Reserved.</span>
           </div>
           <div className="flex items-center gap-6">
             <span className="font-mono text-[10px]">₦5B+ projects maintenance-executed</span>
             <span className="font-mono text-[10px]">40+ qualified HVAC engineers</span>
           </div>
         </div>
      </div>
    </footer>
  );
}

import { useEffect } from 'react';
import PageHero from '../components/layout/PageHero';
import QuoteForm from '../components/forms/QuoteForm';
import { MapPin, Phone, Mail, Clock, MessageCircle, ShieldCheck } from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    document.title = "Contact HAGeotech | Get a Quote for HVAC & Cold Room Services";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', "Contact HAGeotech for HVAC, cold room, chiller, VRV/VRF, and industrial cooling services nationwide. Call 08023331355 or email info@hageotech.com.ng.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="contact-page-wrapper" className="relative bg-transparent">
      <PageHero
        title="We Are Ready to Optimize Your Assets"
        subtitle="Request custom maintenance SLA proposals, schedule diagnostic audits, or report an emergency supply outage. Our dispatch is nationwide."
        category="Contact Engineering"
      />

      <section className="py-16 md:py-24 bg-[#F2F4FF] font-sans border-t border-[#0B2545]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column (5 Cols): Real physical addresses, phone numbers, email & business hours */}
            <div className="lg:col-span-5 space-y-8">
              
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#00AEEF] font-bold block mb-1">
                  Contact Coordinates
                </span>
                <h2 className="font-display font-black text-2xl text-[#0B2545] uppercase tracking-tight leading-none mb-4">
                  Hageotechic Limited Headquarters
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Connect directly with our corporate operations desk or request an on-site mechanical audit at your facility.
                </p>
              </div>

              {/* Layout coordinates list */}
              <div className="space-y-5">
                
                {/* Physical Location */}
                <div className="flex gap-4 items-start bg-white border border-[#0B2545]/10 p-4 rounded-xs leading-normal shadow-md">
                  <div className="p-3 bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 rounded-xs shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-xs text-[#0B2545] uppercase font-mono tracking-wider">
                      Headquarters Address
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      14 Rafiu Street, Mafoluku, Lagos, Nigeria.
                    </p>
                  </div>
                </div>

                {/* Telephone Hotlines */}
                <div className="flex gap-4 items-start bg-white border border-[#0B2545]/10 p-4 rounded-xs leading-normal shadow-md">
                  <div className="p-3 bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 rounded-xs shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-xs text-[#0B2545] uppercase font-mono tracking-wider">
                      Direct Hotlines
                    </h4>
                    <div className="font-mono text-xs mt-1 flex flex-col gap-0.5 text-slate-600">
                      <a href="tel:08023331355" className="hover:text-[#00AEEF] text-[#0B2545] font-bold transition-colors font-sans">0802 333 1355</a>
                      <a href="tel:08037325222" className="hover:text-[#00AEEF] transition-colors">0803 732 5222</a>
                      <a href="tel:09165827282" className="hover:text-[#00AEEF] transition-colors">0916 582 7282</a>
                    </div>
                  </div>
                </div>

                {/* Corporate email */}
                <div className="flex gap-4 items-start bg-white border border-[#0B2545]/10 p-4 rounded-xs leading-normal shadow-md">
                  <div className="p-3 bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 rounded-xs shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-xs text-[#0B2545] uppercase font-mono tracking-wider">
                      Engineering Desk Email
                    </h4>
                    <p className="font-mono text-xs mt-1">
                      <a href="mailto:info@hageotech.com.ng" className="hover:text-[#00AEEF] text-[#0B2545] font-bold transition-colors">
                        info@hageotech.com.ng
                      </a>
                    </p>
                    <p className="font-mono text-xs mt-1">
                      <a href="mailto:hageotechic@gmail.com" className="hover:text-[#00AEEF] text-slate-500 transition-colors text-[10px]">
                        hageotechic@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4 items-start bg-white border border-[#0B2545]/10 p-4 rounded-xs leading-normal shadow-md">
                  <div className="p-3 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-xs shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-xs text-[#0B2545] uppercase font-mono tracking-wider">
                      WhatsApp
                    </h4>
                    <p className="font-mono text-xs mt-1">
                      <a href="https://wa.me/2349165827282?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20HVAC%2Fcold%20room%20servicing" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] text-[#0B2545] font-bold transition-colors">
                        Chat with us on WhatsApp
                      </a>
                    </p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Click to send a pre-filled quote request</p>
                  </div>
                </div>

                {/* Active office hours */}
                <div className="flex gap-4 items-start bg-white border border-[#0B2545]/10 p-4 rounded-xs leading-normal shadow-md">
                  <div className="p-3 bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 rounded-xs shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-xs text-[#0B2545] uppercase font-mono tracking-wider">
                      Business hours
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans">
                      Monday — Friday: <strong className="text-[#0B2545] font-bold">8:00 AM — 5:00 PM</strong> <br />
                      Saturday & Sunday: <em className="text-[#00AEEF] font-bold font-mono text-[10px] uppercase">Emergency SLA response only</em>
                    </p>
                  </div>
                </div>

              </div>

              {/* Service response guarantee badge */}
              <div className="bg-[#0B2545] border border-[#0B2545] rounded-xs p-5 flex items-start gap-4 text-white shadow-xl">
                <ShieldCheck className="w-6 h-6 text-[#00AEEF] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-200 leading-relaxed font-sans">
                  <strong className="text-white font-bold">24-Hour Emergency Response</strong>: Active contractual SLA agreement holders bypass normal ticketing queues. Direct SMS and phone logs will trigger mobilizations of specialized engineers from our Lagos, Abuja, or PH hubs.
                </p>
              </div>

            </div>

            {/* Right Column (7 Cols): Custom reactive Formspree Form */}
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

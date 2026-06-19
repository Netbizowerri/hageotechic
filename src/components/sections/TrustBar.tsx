import { ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  const partners = [
    'Fan Milk Danone',
    'UAC Foods',
    'Chivita / CHI Ltd',
    'Procter & Gamble',
    'Coca-Cola Hellenic',
    'Intercontinental Hotel',
    'Protea Hotel',
    'Bellissimo Hotel',
    'The Nigerian Navy',
    'Supreme Ice Cream',
    'Aava Brands',
  ];

  // Double the list to ensure zero visual gaps during continuous scroll
  const scrollingPartners = [...partners, ...partners];

  return (
    <section 
      id="trust-ticker-section"
      className="bg-[#0B2545]/30 text-white border-y border-white/10 relative z-30 overflow-hidden py-6"
    >
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center flex items-center justify-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#00AEEF] font-bold">
          Trusted by Nigeria's Most Demanding Organizations
        </span>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex items-center overflow-x-hidden pt-1 select-none">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#060F1E] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#060F1E] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-10 whitespace-nowrap py-1">
          {scrollingPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 px-6 py-2 bg-[#0B2545]/40 border border-white/10 rounded-xs hover:border-[#00AEEF]/45 transition-colors cursor-default"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
              <span className="font-display text-sm font-bold tracking-tight text-white/95 uppercase">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

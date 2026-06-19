interface BrandBadgeProps {
  name: string;
  category: 'vrf' | 'chiller' | 'oem';
  lightTheme?: boolean;
  key?: any;
}

export default function BrandBadge({ name, category, lightTheme = false }: BrandBadgeProps) {
  // Styles based on categories
  const categoryStyles = {
    vrf: lightTheme
      ? 'bg-[#00AEEF]/5 text-[#0B2545] border-[#0B2545]/15 hover:border-[#00AEEF]/40 hover:bg-white'
      : 'bg-[#0B2545]/40 text-[#00AEEF] border-white/10 hover:border-[#00AEEF]/40',
    chiller: lightTheme
      ? 'bg-[#0B2545]/5 text-[#0B2545] border-[#0B2545]/15 hover:border-[#00AEEF]/40 hover:bg-white'
      : 'bg-[#0B2545]/40 text-blue-300 border-white/10 hover:border-[#00AEEF]/40',
    oem: lightTheme
      ? 'bg-[#0B2545]/10 text-[#0B2545] border-[#00AEEF]/25 hover:border-[#00AEEF]/40 hover:bg-white'
      : 'bg-[#0B2545]/60 text-emerald-400 border-[#00AEEF]/15 hover:border-[#00AEEF]/40',
  };

  const labels = {
    vrf: 'VRF/VRV System',
    chiller: 'Chiller Tech',
    oem: 'Strategic OEM',
  };

  return (
    <div
      className={`inline-flex flex-col items-start px-4 py-3 rounded-xs border transition-all duration-200 cursor-default font-sans shadow-xs ${categoryStyles[category]}`}
    >
      <span className="text-[9px] uppercase font-mono tracking-wider opacity-70 font-semibold mb-0.5">
        {labels[category]}
      </span>
      <span className="text-xs font-bold font-sans">
        {name}
      </span>
    </div>
  );
}

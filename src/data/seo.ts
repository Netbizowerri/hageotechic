export const siteMetadata = {
  titleSuffix: ' | HAGeotech Nigeria',
  defaultTitle: 'HAGeotech | Daikin-Certified VRV/VRF, Chiller & Cold Room Experts Nigeria',
  defaultDescription: "Nigeria's Daikin-certified VRV/VRF specialists. Expert chiller, cold room, AHU & industrial cooling servicing nationwide. Trusted by Fan Milk Danone. Get a quote today.",
  siteUrl: 'https://hageotechic.vercel.app/',
};

export interface PageMeta {
  title: string;
  description?: string;
}

export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: "HAGeotech | Daikin-Certified VRV/VRF, Chiller & Cold Room Experts Nigeria",
    description: "Nigeria's Daikin-certified VRV/VRF specialists. Expert chiller, cold room, AHU & industrial cooling servicing nationwide. Trusted by Fan Milk Danone. Get a quote today.",
  },
  about: {
    title: "About HAGeotech | 40+ Certified Technicians — Nigeria's Most Qualified Cooling Team",
    description: "Daikin International-certified for VRV systems. Trained on Copeland, Bitzer & Frascold compressors. Qualified on York, Daikin, Trane & Carrier chillers. Over 40 technicians nationwide.",
  },
  services: {
    title: "Our Services | VRV/VRF, Chillers, Cold Rooms, AHU & Cooling Solutions",
    description: "Daikin-certified VRV installation, chiller maintenance, cold room servicing, AHU repair, industrial cooling, and commercial AC across Nigeria.",
  },
  clients: {
    title: "Our Clients | HAGeotech — Trusted by Fan Milk Danone & Nigeria's Top Brands",
    description: "Trusted by Fan Milk Danone, UAC Supreme Ice Cream, Intercontinental Hotel, Coca-Cola, P&G, and more for HVAC and cold room servicing nationwide.",
  },
  whyChooseUs: {
    title: "Why Choose HAGeotech | Certified Technicians, SLA-Backed Service",
    description: "Daikin-certified VRV specialists, trained on leading compressor and chiller brands. 40+ technicians, original spare parts, and SLA-guaranteed response times.",
  },
  contact: {
    title: "Contact HAGeotech | Get a Quote for HVAC & Cold Room Services",
    description: "Contact HAGeotech for HVAC, cold room, chiller, VRV/VRF, and industrial cooling services nationwide. Call 08023331355 or email info@hageotech.com.ng.",
  },
  sla: {
    title: "Preventive Maintenance & SLA | HAGeotech Nigeria",
    description: "SLA-backed preventive maintenance for cold rooms, chillers, AHUs, and VRV/VRF systems. Guaranteed response times, original spare parts, nationwide coverage.",
  },
};

import coldRoomImg from '@/src/assets/images/cold_room_industrial_1781787767342.jpg';
import hvacImg from '@/src/assets/images/hvac_cent_systems_1781787782471.jpg';
import chillerImg from '@/src/assets/images/industrial_chiller_1781787800726.jpg';
import vrfImg from '@/src/assets/images/vrf_climate_sys_1781787814607.jpg';
import refrigerationImg from '@/src/assets/images/commercial_refrig_1781787828335.jpg';
import electricalImg from '@/src/assets/images/electrical_control_1781787842889.jpg';

export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  supportedBrands?: string[];
  relatedClients?: string[];
  icon: string; // Lucide icon name
  imageUrl?: string;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: 'vrf-vrv',
    title: 'VRV & VRF Service',
    shortDescription: 'Daikin-certified VRV installation, maintenance & repair — plus VRF systems from all major brands.',
    description: 'HAGeotech is one of the very few HVAC companies in Nigeria trained and certified directly by Daikin International for VRV (Variable Refrigerant Volume) systems — Daikin\'s own trademarked technology. This means our technicians are factory-trained to install, maintain, and repair Daikin VRV systems to international standards, not just general AC knowledge.\n\nWe also service VRF (Variable Refrigerant Flow) systems — the general industry term for this technology used by other major brands. So whether your building runs on a Daikin VRV system or a VRF system from another manufacturer, HAGeotech has the expertise to install, maintain, and repair it.\n\nIf your building runs on any variable refrigerant system, we\'re one of the most qualified teams in Nigeria to keep it running.',
    features: [
      'Daikin VRV system installation, maintenance, and repair to international factory standards.',
      'VRF (Variable Refrigerant Flow) system servicing for all major brands.',
      'Multi-zone climate controller programming and BMS network integration.',
      'Inverter compressor repair, replacement, and premium performance diagnostics.',
      'Preventive scheduled filtration cleaning and operational sensor verification.',
      'Eco-friendly refrigerant recovery, charging, and pressure regulation.'
    ],
    supportedBrands: ['Daikin (VRV)', 'Mitsubishi Electric', 'LG', 'Samsung', 'Toshiba', 'Carrier'],
    relatedClients: ['UAC Supreme Ice Cream', 'Protea Hotel', 'Aava Brands'],
    icon: 'Cpu',
    imageUrl: vrfImg
  },
  {
    slug: 'chillers',
    title: 'Chiller Maintenance & Repair',
    shortDescription: 'Industrial and commercial chiller maintenance, repair, and preventive servicing nationwide.',
    description: 'We provide expert maintenance, servicing, and repair for industrial and commercial chillers across Nigeria. Whether it\'s routine preventive maintenance to keep your chiller running efficiently, or emergency breakdown repair, our certified technicians get the job done right.\n\nWe work with chillers used in factories, cold storage, offices, hospitals, and other commercial facilities nationwide.\n\nWe\'re trained and qualified on the industry\'s leading brands — York, Daikin, Trane, and Carrier — so no matter which brand your equipment is, our technicians know how to service it properly.',
    features: [
      'Routine preventive maintenance for industrial and commercial chillers.',
      'Emergency breakdown repair with rapid response nationwide.',
      'Water-cooled and air-cooled central chiller diagnostics and servicing.',
      'Condenser tube bundles and heat exchanger maintenance and cleaning.',
      'Retrofitting existing chiller equipment with environmentally friendly refrigerants.',
      '24/7 priority SLA response with dedicated on-site chiller engineering personnel.'
    ],
    supportedBrands: ['York', 'Trane', 'Carrier', 'LG', 'Toshiba', 'Panasonic', 'Somotex', 'Thermocool', 'Sabroe'],
    relatedClients: ['Fan Milk Danone', 'UAC Supreme Ice Cream', 'Intercontinental Hotel', 'P&G'],
    icon: 'Droplet',
    imageUrl: chillerImg
  },
  {
    slug: 'cold-rooms',
    title: 'Cold Room Installation & Service',
    shortDescription: 'Nationwide cold room installation, maintenance, and service — trusted by Fan Milk Danone.',
    description: 'HAGeotech installs, maintains, and services cold rooms across Nigeria for businesses that depend on reliable cold storage — from food and beverage companies to pharmaceuticals and logistics.\n\nWe\'re proud to service cold rooms nationwide for Fan Milk Danone, one of Nigeria\'s leading food and beverage brands. Whether you need a new cold room installed or an existing one maintained, we deliver dependable, professional service you can trust.\n\nOur technicians are trained on Copeland, Bitzer, and Frascold semi-hermetic compressors — the industry-standard compressors used in cold room systems — ensuring your equipment is serviced correctly by qualified specialists.',
    features: [
      'Cold room installation, design, and commissioning for food, pharma, and logistics.',
      'Compressor supply, repair, and complete overhauls (Copeland, Bitzer, Frascold).',
      'High-performance condenser and evaporator supply and optimization.',
      'Precision thermal insulation, paneled wall alignment, and airtight sealing.',
      'Advanced digital temperature monitoring, calibration, and automation control panels.',
      'Nationwide preventive maintenance checklists with rapid response emergency SLAs.'
    ],
    supportedBrands: ['Copeland', 'Bitzer', 'Frascold', 'York', 'Daikin'],
    relatedClients: ['Fan Milk Danone', 'UAC Supreme Ice Cream', 'CHI Ltd (Chivita)'],
    icon: 'Snowflake',
    imageUrl: coldRoomImg
  },
  {
    slug: 'hvac',
    title: 'AHU Servicing',
    shortDescription: 'Air Handling Unit maintenance, cleaning, repair, and preventive servicing across Nigeria.',
    description: 'Air Handling Units (AHUs) are the heart of a building\'s ventilation and air conditioning system. We provide full AHU servicing — cleaning, repairs, and preventive maintenance — to keep air quality and cooling performance at their best.\n\nOur team services AHUs for offices, hospitals, hotels, factories, and industrial facilities across Nigeria. We\'re trained and qualified on the industry\'s leading brands — York, Daikin, Trane, and Carrier.',
    features: [
      'Full AHU cleaning, coil washing, and filter replacement services.',
      'Fan motor, belt, and pulley inspection, alignment, and replacement.',
      'Damper actuator calibration and control system verification.',
      'Condensate drain line cleaning and bio-growth prevention.',
      'Vibration analysis and bearing condition monitoring.',
      'Preventive maintenance programs with guaranteed SLA response times.'
    ],
    supportedBrands: ['York', 'Trane', 'Carrier', 'Daikin', 'LG', 'Panasonic'],
    relatedClients: ['Intercontinental Hotel', 'Protea Hotel', 'Bellissimo Hotel', 'Coca-Cola', 'P&G'],
    icon: 'Wind',
    imageUrl: hvacImg
  },
  {
    slug: 'refrigeration',
    title: 'Industrial Cooling Systems',
    shortDescription: 'Large-scale industrial cooling solutions for factories, warehouses, and production facilities.',
    description: 'We design, install, and maintain industrial cooling systems for factories, warehouses, and production facilities across Nigeria. From large-scale chillers to complete cooling systems, we help industrial businesses keep operations running smoothly without costly downtime.\n\nWe\'re also proficient in dehumidifiers and air handling units for factories, hotels, and commercial and residential buildings.',
    features: [
      'Industrial cooling system design, installation, and commissioning.',
      'Dehumidifier servicing and maintenance for factories and commercial spaces.',
      'Large-scale chiller integration for production facility cooling.',
      'Air handling unit support for industrial ventilation requirements.',
      'Emergency standby support with rapid troubleshooting for zero operational downtime.',
      'Preventive maintenance programs with guaranteed SLA compliance.'
    ],
    supportedBrands: ['York', 'Trane', 'Carrier', 'Daikin', 'Bitzer', 'Copeland'],
    relatedClients: ['Fan Milk Danone', 'UAC Supreme Ice Cream', 'P&G', 'Coca-Cola'],
    icon: 'ThermometerSnowflake',
    imageUrl: refrigerationImg
  },
  {
    slug: 'energy',
    title: 'Commercial & Residential Air Conditioning',
    shortDescription: 'Split units, ducted systems, and full commercial AC installation, servicing, and repair.',
    description: 'From split units in homes to full commercial AC systems in offices and retail spaces, HAGeotech provides installation, servicing, and repair for all types of air conditioning. We handle both small residential jobs and larger commercial contracts with the same level of professional care.\n\nOur technicians are trained to service all major AC brands, ensuring your comfort systems run efficiently year-round.',
    features: [
      'Split unit AC installation, servicing, and repair for homes and offices.',
      'Ducted and central air conditioning system design and installation.',
      'Commercial AC system maintenance for retail spaces and office buildings.',
      'VRV/VRF-based multi-split solutions for larger commercial premises.',
      'Compressor diagnostics, repair, and replacement for all AC types.',
      'Preventive maintenance schedules to extend equipment lifespan.'
    ],
    supportedBrands: ['Daikin', 'LG', 'Panasonic', 'Samsung', 'Toshiba', 'Carrier'],
    relatedClients: ['Intercontinental Hotel', 'Protea Hotel', 'Bellissimo Hotel', 'Aava Brands'],
    icon: 'Zap',
    imageUrl: electricalImg
  }
];

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
    slug: 'cold-rooms',
    title: 'Cold Room Maintenance & Installation',
    shortDescription: 'Industrial cold rooms, compressor overhauls, condenser & evaporator supply.',
    description: 'We are Nigeria’s leading authority on industrial cold rooms and cold chain infrastructures. Having executed over ₦2 billion in cold room solutions for multinational corporations like Fan Milk/Danone and UAC Supreme Ice Cream, we specialize in high-precision installations, rapid diagnostics, and comprehensive preventative maintenance that ensures 100% uptime for high-value cold storage.',
    features: [
      'Industrial and commercial cold storage room design and complete installations.',
      'Compressor supply, repair, and complete overhauls (Copeland, Bitzer, Sabroe).',
      'High-performance condenser and evaporator supply and optimization.',
      'Precision thermal insulation, paneled wall alignment, and airtight sealing.',
      'Advanced digital temperature monitoring, calibration, and automation control panels.',
      'Nationwide preventive maintenance checklists with rapid response emergency SLAs.'
    ],
    supportedBrands: ['Copeland', 'Bitzer', 'Sabroe', 'York', 'Daikin'],
    relatedClients: ['Fan Milk Danone', 'UAC Supreme Ice Cream', 'CHI Ltd (Chivita)'],
    icon: 'Snowflake',
    imageUrl: coldRoomImg
  },
  {
    slug: 'hvac',
    title: 'HVAC Solutions',
    shortDescription: 'Complete Heating, Ventilation & Air Conditioning systems for industrial & commercial buildings.',
    description: 'Our corporate HVAC work encompasses advanced heating, ventilation, and premium air conditioning architectures. We design, service, and maintain comprehensive comfort-cooling infrastructures for premium hotel systems (Intercontinental Hotel, Protea Hotel, Bellissimo Hotel) and demanding industrial plants (P&G, Coca-Cola), utilizing genuine OEM parts only.',
    features: [
      'Comprehensive central air conditioning design, implementation, and maintenance.',
      'Advanced mechanical ventilation, air filtration, and indoor air quality controls.',
      'Clean room HVAC deployments for manufacturing and pharmaceutical facilities.',
      'Direct expansion (DX) central air systems and heavy package unit replacements.',
      'Ductwork fabrication, balancing, air flow optimization, and thermal insulation.',
      'Thermal load assessments and energy audits to minimize operational expenditure.'
    ],
    supportedBrands: ['York', 'Trane', 'Carrier', 'LG', 'Daikin', 'Panasonic'],
    relatedClients: ['Intercontinental Hotel', 'Protea Hotel', 'Bellissimo Hotel', 'Coca-Cola', 'P&G'],
    icon: 'Wind',
    imageUrl: hvacImg
  },
  {
    slug: 'chillers',
    title: 'Chiller Systems',
    shortDescription: 'Industrial process and comfort water chiller systems repair and Maintenance.',
    description: 'We provide heavy industrial chiller solutions designed to handle high cooling capacities with meticulous temperature stability. Our professional team maintains complex water-cooled and air-cooled centrifugal, screw, and scroll chiller plants across manufacturing facilities, premium hospitality spaces, and national government assets.',
    features: [
      'Water-cooled and air-cooled central chiller installations and decommissioning.',
      'Routine diagnostic inspections (vibration analysis, oil testing, tube descaling).',
      'Electronic expansion valve controls calibration and micro-controller support.',
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
    slug: 'vrf-vrv',
    title: 'VRF/VRV Systems',
    shortDescription: 'Multi-split, variable refrigerant volume systems featuring cutting-edge smart zoning.',
    description: 'Variable Refrigerant Flow (VRV) and Variable Refrigerant Volume (VRV) systems offer unparalleled zoning versatility, premium efficiency, and quiet operation for mid-to-large-scale real estate, office complexes, and luxury residential applications. We are certified master installers of leading standard VRF technologies.',
    features: [
      'Variable Refrigerant Volume (VRV/VRF) system selection, load modeling, and layout design.',
      'Refrigerant branch selector box installation, leak-testing, and high-pressure nitrogen sweeps.',
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
    slug: 'refrigeration',
    title: 'Refrigeration Systems Maintenance',
    shortDescription: 'Commercial showcases, blast freezers, and industrial transport refrigeration units.',
    description: 'We safeguard critical supply chains across Lagos and wider Nigeria by maintaining flawless industrial and commercial refrigeration units. From supermarkets and restaurant chains to industrial marine operations (Nigerian Naval vessels NNS Ambe, NNS Aradu, NNS Obuma) and bulk fish imports, we prevent catastrophic spoilage.',
    features: [
      'Industrial blast freezer maintenance, coil cleaning, and thermostat calibration.',
      'Commercial ice-maker, showcase freezer, and display unit rapid repairs.',
      'Refrigeration unit deployments on maritime vessels, naval ships, and fishing trawlers.',
      'Solenoid valve, filter drier, and thermostatic expansion valve diagnostics.',
      'Door seal, gasket, and automated defrost heater replacements.',
      'Emergency standby support with rapid troubleshooting for zero operational downtime.'
    ],
    supportedBrands: ['Copeland', 'Bitzer', 'LG', 'Panasonic', 'Sabroe'],
    relatedClients: ['Nigerian Naval Ships (NNS Ambe, NNS Aradu, NNS Obuma)', 'Chivita', 'Fan Milk Danone'],
    icon: 'ThermometerSnowflake',
    imageUrl: refrigerationImg
  },
  {
    slug: 'energy',
    title: 'Energy-Efficient Cooling & Electrical Panels',
    shortDescription: 'Electrical control panels, load balancing, and eco-friendly cooling retrofits.',
    description: 'Modern cooling operations demand highly integrated electricity control mechanisms. We manufacture, service, and calibrate industrial electrical panels, automated switchgears, and power distribution systems designed to protect precious compressor motors and optimize overall HVAC-R power efficiency.',
    features: [
      'Custom main distribution boards (MDB) and control panels for chillers & cold rooms.',
      'Variable Frequency Drive (VFD) installation and tuning for soft motor startups.',
      'Automated phase-failure, over-voltage, and under-voltage protection systems.',
      'Power factor correction (PFC) panels and harmonic filter installations.',
      'BMS and SCADA integration for comprehensive remote electrical telemetries.',
      'Thermal imaging of components to detect potential hot-spots and prevent physical failure.'
    ],
    supportedBrands: ['LG', 'Samsung', 'Daikin', 'Carrier', 'Bitzer'],
    relatedClients: ['Fan Milk Danone', 'UAC Supreme Ice Cream', 'CHI Ltd (Chivita)'],
    icon: 'Zap',
    imageUrl: electricalImg
  }
];

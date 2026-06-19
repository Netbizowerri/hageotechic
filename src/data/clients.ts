export interface ClientDetail {
  id: string;
  name: string;
  scope: string;
  value: string;
  duration?: string;
  isFeatured: boolean;
  industry: string;
}

export const clientsData: ClientDetail[] = [
  {
    id: 'fan-milk',
    name: 'Fan Milk Danone',
    scope: 'Exclusive pan-Nigeria cold room maintenance, AC systems, and water chiller overhauls.',
    value: 'Over ₦2.0 Billion',
    duration: 'Since 2018 (Continuous Contract)',
    isFeatured: true,
    industry: 'FMCG / Dairy Processing'
  },
  {
    id: 'uac',
    name: 'UAC Supreme Ice Cream',
    scope: 'Nationwide industrial cold rooms, AC installations, chillers, and multi-zone VRF systems.',
    value: 'Over ₦800 Million',
    duration: 'Since 2017 (Continuous Contract)',
    isFeatured: true,
    industry: 'FMCG / Food Processing'
  },
  {
    id: 'chivita-navy',
    name: 'Chivita, Ships & Fish Importers',
    scope: 'Industrial cold rooms, bulk chillers, central air conditioning, and marine cooling systems.',
    value: 'Over ₦1.5 Billion',
    duration: 'Continuous Projects',
    isFeatured: true,
    industry: 'Cold Chain / Maritime & Defense'
  },
  {
    id: 'nigerian-navy',
    name: 'The Nigerian Navy',
    scope: 'Specialized cooling systems, marine ventilation & refrigeration for military vessels: NNS Ambe, NNS Aradu, and NNS Obuma.',
    value: 'Multi-million Project Contracts',
    duration: 'Project-Specific SLAs',
    isFeatured: false,
    industry: 'Government & National Defense'
  },
  {
    id: 'intercontinental',
    name: 'Intercontinental Hotel Lagos',
    scope: 'Preventive HVAC diagnostics, multi-circuit water chiller servicing, and tower repairs.',
    value: 'On-going Maintenance SLA',
    duration: 'Since 2019',
    isFeatured: false,
    industry: 'Hospitality / Luxury Hotels'
  },
  {
    id: 'coca-cola',
    name: 'Coca-Cola Hellenic',
    scope: 'Process chiller maintenance, syrup cooling loop parameters optimization & panel service.',
    value: 'Technical Maintenance Partner',
    duration: 'Contractual Partner',
    isFeatured: false,
    industry: 'FMCG / Beverage Manufacture'
  },
  {
    id: 'pg',
    name: 'Procter & Gamble (P&G)',
    scope: 'Industrial facility ventilation systems, compressor replacements, and cooling line maintenance.',
    value: 'Contractual Specialist',
    duration: 'Since 2020',
    isFeatured: false,
    industry: 'FMCG / Personal Care Products'
  },
  {
    id: 'protea',
    name: 'Protea Hotel',
    scope: 'Central dynamic VRF zoning system maintenance, cooling tower overhaul, and localized split setup.',
    value: 'Annual HVAC SLA Partner',
    duration: 'Continuous Partnership',
    isFeatured: false,
    industry: 'Hospitality / Premium Hotels'
  },
  {
    id: 'bellissimo',
    name: 'Bellissimo Hotel & Suites',
    scope: 'Total comfort ventilation, multi-split VRV servicing, and building management integration.',
    value: 'Facility-wide Maintenance contract',
    duration: 'Since 2021',
    isFeatured: false,
    industry: 'Hospitality / Boutique Lodging'
  }
];

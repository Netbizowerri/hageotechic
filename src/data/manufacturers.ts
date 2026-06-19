export interface BrandInfo {
  name: string;
  category: 'vrf' | 'chiller' | 'oem';
}

export const brandsData: BrandInfo[] = [
  // VRF/VRV
  { name: 'Daikin (VRV)', category: 'vrf' },
  { name: 'Mitsubishi Electric', category: 'vrf' },
  { name: 'LG', category: 'vrf' },
  { name: 'Samsung', category: 'vrf' },
  { name: 'Toshiba', category: 'vrf' },
  { name: 'Carrier', category: 'vrf' },

  // Chillers
  { name: 'York', category: 'chiller' },
  { name: 'Trane', category: 'chiller' },
  { name: 'Carrier', category: 'chiller' },
  { name: 'LG', category: 'chiller' },
  { name: 'Toshiba', category: 'chiller' },
  { name: 'Panasonic', category: 'chiller' },
  { name: 'Somotex', category: 'chiller' },
  { name: 'Thermocool', category: 'chiller' },
  { name: 'Sabroe', category: 'chiller' },

  // Strategic OEM Partners
  { name: 'Copeland', category: 'oem' },
  { name: 'Bitzer', category: 'oem' },
  { name: 'LG', category: 'oem' },
  { name: 'Panasonic', category: 'oem' },
  { name: 'Sabroe', category: 'oem' },
  { name: 'York', category: 'oem' },
  { name: 'Daikin', category: 'oem' }
];

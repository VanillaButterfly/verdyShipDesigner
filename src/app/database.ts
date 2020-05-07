export const hulls = [
  {
    name: 'Converted Cruiser Hull',
    slots: ['deck1','deck2','aa','radar','caconveng','sec','locked','locked','locked','locked','locked','locked','locked','locked'],
    stats: {
      naval_speed: 20,
      naval_range: 4000,
      max_organisation: 40,
      max_strength: 125,
      reliability: 0.65,
      supply_consumption: 0.3,
      manpower: 1000,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 87,
      surface_visibility: 30,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 5,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 2700,
      steel: 3,
      chromium: 1
    }
  },
  {
    name: 'Converted Battleship Hull',
    slots: ['deck1','deck2','aa','radar','bbconveng','sec','locked','cv1','locked','locked','locked','locked','locked','locked'],
    stats: {
      naval_speed: 23,
      naval_range: 4000,
      max_organisation: 40,
      max_strength: 325,
      reliability: 0.65,
      supply_consumption: 0.3,
      manpower: 5000,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 87,
      surface_visibility: 30,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 5,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 2700,
      steel: 4,
      chromium: 1
    }
  },
  {
    name: '1936 Carrier Hull',
    slots: ['deck1','deck2','aa','radar','cveng','sec','locked','cv1','locked','locked','locked','locked','locked','locked'],
    stats: {
      naval_speed: 26,
      naval_range: 3000,
      max_organisation: 40,
      max_strength: 250,
      reliability: 0.7,
      supply_consumption: 0.3,
      manpower: 4500,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 87,
      surface_visibility: 30,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 5,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 2450,
      steel: 3,
      chromium: 1
    }
  },
  {
    name: '1940 Carrier Hull',
    slots: ['deck1','deck2','aa','radar','cveng','sec','locked','cv2','cv1','locked','locked','locked','locked','locked'],
    stats: {
      naval_speed: 26,
      naval_range: 4000,
      max_organisation: 40,
      max_strength: 325,
      reliability: 0.75,
      supply_consumption: 0.3,
      manpower: 5000,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 87,
      surface_visibility: 30,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 5,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 2600,
      steel: 4,
      chromium: 1
    }
  },
  {
    name: '1944 Carrier Hull',
    slots: ['deck1','deck2','aa','radar','cveng','sec','locked','cv2','cv1','cv1','locked','locked','locked','locked'],
    stats: {
      naval_speed: 26,
      naval_range: 5000,
      max_organisation: 40,
      max_strength: 350,
      reliability: 0.8,
      supply_consumption: 0.3,
      manpower: 5500,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 87,
      surface_visibility: 30,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 5,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 3250,
      steel: 4,
      chromium: 2
    }
  },
  {
    name: 'Pre-Dreadnought Hull',
    slots: ['bbgun','mandaa','mandfcs','radar','bbeng','sec','bbarmor','bb1','bb2','bb3','locked','locked','locked','locked'],
    stats: {
      naval_speed: 13,
      naval_range: 2250,
      max_organisation: 40,
      max_strength: 300,
      reliability: 0.65,
      supply_consumption: 0.14, // Side effect of CA/CL supply consumption stuff, see heavy gun data
      manpower: 3200,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 67,
      surface_visibility: 20,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 1,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 3000,
      steel: 1,
      chromium: 1
    }
  },
  {
    name: 'Early Heavy Ship Hull',
    slots: ['bbgun','aa','fcs','radar','bbeng','sec','bbarmor','bb4','bb5','bb5','bb4','locked','locked','locked'],
    stats: {
      naval_speed: 20,
      naval_range: 3000,
      max_organisation: 40,
      max_strength: 350,
      reliability: 0.8,
      supply_consumption: 0.14, // Side effect of CA/CL supply consumption stuff, see heavy gun data
      manpower: 4000,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 67,
      surface_visibility: 20,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 1,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 3300,
      steel: 1,
      chromium: 1
    }
  },
  {
    name: '1936 Heavy Ship Hull',
    slots: ['bbgun','aa','fcs','radar','bbeng','sec','bbarmor','bb4','bb6','bb6','bb6','locked','locked','locked'],
    stats: {
      naval_speed: 22,
      naval_range: 3500,
      max_organisation: 40,
      max_strength: 370,
      reliability: 0.85,
      supply_consumption: 0.14, // Side effect of CA/CL supply consumption stuff, see heavy gun data
      manpower: 5200,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 67,
      surface_visibility: 20,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 1,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 3400,
      steel: 1,
      chromium: 1
    }
  },
  {
    name: '1940 Heavy Ship Hull',
    slots: ['bbgun','aa','fcs','radar','bbeng','sec','bbarmor','bb4','bb6','bb6','bb6','bb7','locked','locked'],
    stats: {
      naval_speed: 24,
      naval_range: 4000,
      max_organisation: 40,
      max_strength: 400,
      reliability: 0.9,
      supply_consumption: 0.14, // Side effect of CA/CL supply consumption stuff, see heavy gun data
      manpower: 6000,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 67,
      surface_visibility: 20,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 1,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 3500,
      steel: 1,
      chromium: 1
    }
  },
  {
    name: '1944 Heavy Ship Hull',
    slots: ['bbgun','aa','fcs','radar','bbeng','sec','bbarmor','bb4','bb6','bb6','bb6','bb6','locked','locked'],
    stats: {
      naval_speed: 26,
      naval_range: 4500,
      max_organisation: 40,
      max_strength: 450,
      reliability: 0.95,
      supply_consumption: 0.14, // Side effect of CA/CL supply consumption stuff, see heavy gun data
      manpower: 6000,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 67,
      surface_visibility: 20,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 1,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 3600,
      steel: 1,
      chromium: 1
    }
  },
  {
    name: 'Super Heavy Battleship Hull',
    slots: ['shbbgun','aa','mandfcs','radar','bbeng','sec','shbbarmor','shbb1','shbb1','shbb2','shbb2','shbb2','shbb3','shbb3'],
    stats: {
      naval_speed: 22,
      naval_range: 4500,
      max_organisation: 40,
      max_strength: 700,
      reliability: 0.8,
      supply_consumption: 0.2,
      manpower: 9000,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 75,
      surface_visibility: 20,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 1,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 5500,
      steel: 1,
      chromium: 1
    }
  },
  {
    name: 'Coastal Defense Ship',
    slots: ['protectedcruisergun','aa','mandfcshyd','radarhyd','cruisereng','sec','cruiserarmor','bb1','bb5','bb5','cruiser1','locked','locked','locked'],
    stats: {
      naval_speed: 15,
      naval_range: 1500,
      max_organisation: 40,
      max_strength: 100,
      reliability: 0.8,
      supply_consumption: 0.04,
      manpower: 1800,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 20,
      surface_visibility: 20,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 1,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 3500,
      steel: 3
    }
  },
  {
    name: 'Early Cruiser Hull',
    slots: ['cruisergun','aa','mandfcshyd','radarhyd','cruisereng','sec','cruiserarmor','cruiser2','cruiser2','cruiser3','locked','locked','locked','locked'],
    stats: {
      naval_speed: 20,
      naval_range: 2500,
      max_organisation: 40,
      max_strength: 100,
      reliability: 0.8,
      supply_consumption: 0.04,
      manpower: 600,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 20,
      surface_visibility: 15,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 1,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 1800,
      steel: 1
    }
  },
  {
    name: '1936 Cruiser Hull',
    slots: ['cruisergun','aa','mandfcshyd','radarhyd','cruisereng','sec','cruiserarmor','cruiser4','cruiser2','cruiser2','cruiser3','locked','locked','locked'],
    stats: {
      naval_speed: 25,
      naval_range: 3000,
      max_organisation: 40,
      max_strength: 110,
      reliability: 0.85,
      supply_consumption: 0.04,
      manpower: 800,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 20,
      surface_visibility: 15,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 1,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 1900,
      steel: 2
    }
  },
  {
    name: '1940 Cruiser Hull',
    slots: ['cruisergun','aa','mandfcshyd','radarhyd','cruisereng','sec','cruiserarmor','cruiser4','cruiser5','cruiser5','cruiser3','cruiser3','locked','locked'],
    stats: {
      naval_speed: 27,
      naval_range: 4000,
      max_organisation: 40,
      max_strength: 120,
      reliability: 0.9,
      supply_consumption: 0.04,
      manpower: 1200,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 20,
      surface_visibility: 15,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 1,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 2000,
      steel: 2
    }
  },
  {
    name: '1944 Cruiser Hull',
    slots: ['cruisergun','aa','mandfcshyd','radarhyd','cruisereng','sec','cruiserarmor','cruiser4','cruiser5','cruiser5','cruiser3','cruiser3','locked','locked'],
    stats: {
      naval_speed: 28,
      naval_range: 4500,
      max_organisation: 40,
      max_strength: 130,
      reliability: 0.95,
      supply_consumption: 0.04,
      manpower: 1400,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 20,
      surface_visibility: 15,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 1,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 2100,
      steel: 3
    }
  },
  {
    name: 'Torpedo Cruiser',
    slots: ['cruisergun','aa','mandfcshyd','radarhyd','cruisereng','sec','cruiserarmor','cruiser6','cruiser6','cruiser6','cruiser7','cruiser8','locked','locked'],
    stats: {
      naval_speed: 25,
      naval_range: 4000,
      max_organisation: 40,
      max_strength: 140,
      reliability: 0.9,
      supply_consumption: 0.04,
      manpower: 960,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 20,
      surface_visibility: 15,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 1,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 1700,
      steel: 3
    }
  },
  {
    name: 'Panzerschiff',
    slots: ['bbgun','aa','mandfcshyd','radarhyd','cruisereng','sec','cruiserarmor','bb1','bb5','bb5','cruiser9','locked','locked','locked'],
    stats: {
      naval_speed: 20,
      naval_range: 7500,
      max_organisation: 40,
      max_strength: 220,
      reliability: 0.8,
      supply_consumption: 0.04, // Side effect of CA/CL supply consumption stuff, see heavy gun data
      manpower: 1800,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 20,
      surface_visibility: 22,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 1,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 3500,
      steel: 3
    }
  },
  {
    name: 'Early Destroyer Hull',
    slots: ['ddgun','aa','fcshyd','radarhyd','torp','ddeng','locked','dd1','dd1','locked','locked','locked','locked','locked'],
    stats: {
      naval_speed: 25,
      naval_range: 1500,
      max_organisation: 40,
      max_strength: 25,
      reliability: 0.8,
      supply_consumption: 0.01,
      manpower: 250,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 1,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 0,
      surface_visibility: 10,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 1,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 400,
      steel: 2
    },
    description: 'This hull will fit old obsolete WWI era vessels, smol and weak escortish DDs, failed designs, or anything remotely Italian'
  },
  {
    name: '1936 Destroyer Hull',
    slots: ['ddgun','aa','fcshyd','radarhyd','torp','ddeng','locked','dd2','dd2','locked','locked','locked','locked','locked'],
    stats: {
      naval_speed: 25,
      naval_range: 1800,
      max_organisation: 40,
      max_strength: 40,
      reliability: 0.85,
      supply_consumption: 0.01,
      manpower: 325,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 1,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 0,
      surface_visibility: 10,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 1,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 500,
      steel: 2
    },
    description: 'Basically, Fubuki. Except IG Fubuki is an Early Hull for paradox reasons.'
  },
  {
    name: '1940 Destroyer Hull',
    slots: ['ddgun','aa','fcshyd','radarhyd','torp','ddeng','locked','dd3','dd2','dd2','locked','locked','locked','locked'],
    stats: {
      naval_speed: 25,
      naval_range: 2000,
      max_organisation: 40,
      max_strength: 50,
      reliability: 0.9,
      supply_consumption: 0.01,
      manpower: 400,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 1,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 0,
      surface_visibility: 10,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 1,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 550,
      steel: 3
    },
    description: 'You get a Fletcher ! And you get a Fletcher ! Everybody gets a Fletcher !'
  },
  {
    name: '1944 Destroyer Hull',
    slots: ['ddgun','aa','fcshyd','radarhyd','torp','ddeng','locked','dd3','dd2','dd2','dd2','locked','locked','locked'],
    stats: {
      naval_speed: 25,
      naval_range: 2500,
      max_organisation: 40,
      max_strength: 60,
      reliability: 0.92,
      supply_consumption: 0.01,
      manpower: 500,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 1,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 0,
      surface_visibility: 10,
      surface_detection: 20,
      sub_visibility: 0,
      sub_detection: 1,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 600,
      steel: 4,
      chromium: 1
    },
    description: 'If for some reasons you are playing Spain and are specifically trying to recreate its abandonned Project 148A... congratulations, you are at the right hull. Also your goals are weird.'
  },
  {
    name: 'Early Submarine Hull',
    slots: ['subtorp','subeng','locked','locked','locked','locked','locked','sub1','locked','locked','locked','locked','locked','locked'],
    stats: {
      naval_speed: 14,
      naval_range: 2500,
      max_organisation: 40,
      max_strength: 10,
      reliability: 0.6,
      supply_consumption: 0.01,
      manpower: 200,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 1,
      surface_visibility: 1,
      surface_detection: 20,
      sub_visibility: 25,
      sub_detection: 0,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 220,
      steel: 1
    }
  },
  {
    name: '1936 Submarine Hull',
    slots: ['subtorp','subeng','locked','locked','locked','locked','locked','sub2','locked','locked','locked','locked','locked','locked'],
    stats: {
      naval_speed: 14,
      naval_range: 4000,
      max_organisation: 40,
      max_strength: 20,
      reliability: 0.7,
      supply_consumption: 0.01,
      manpower: 200,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 1,
      surface_visibility: 1,
      surface_detection: 20,
      sub_visibility: 20,
      sub_detection: 0,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 250,
      steel: 2
    }
  },
  {
    name: '1940 Submarine Hull',
    slots: ['subtorp','subeng','locked','locked','locked','locked','locked','sub1','sub3','sub1','locked','locked','locked','locked'],
    stats: {
      naval_speed: 15,
      naval_range: 5000,
      max_organisation: 40,
      max_strength: 30,
      reliability: 0.75,
      supply_consumption: 0.01,
      manpower: 200,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 1,
      surface_visibility: 1,
      surface_detection: 20,
      sub_visibility: 15,
      sub_detection: 0,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 320,
      steel: 2
    }
  },
  {
    name: '1944 Submarine Hull',
    slots: ['subtorp','subeng','locked','locked','locked','locked','locked','sub1','sub3','sub1','locked','locked','locked','locked'],
    stats: {
      naval_speed: 16,
      naval_range: 6000,
      max_organisation: 40,
      max_strength: 35,
      reliability: 0.8,
      supply_consumption: 0.01,
      manpower: 200,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 1,
      surface_visibility: 1,
      surface_detection: 20,
      sub_visibility: 12,
      sub_detection: 0,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 450,
      steel: 3,
      chromium: 1
    }
  },
  {
    name: 'Cruiser Submarine',
    slots: ['subtorp','subeng','locked','locked','locked','locked','locked','sub4','sub3','sub4','locked','locked','locked','locked'],
    stats: {
      naval_speed: 11,
      naval_range: 5000,
      max_organisation: 40,
      max_strength: 30,
      reliability: 0.75,
      supply_consumption: 0.01,
      manpower: 200,
      carrier_size: 0,
      lg_attack: 0,
      lg_armor_piercing: 0,
      hg_attack: 0,
      hg_armor_piercing: 0,
      torpedo_attack: 0,
      sub_attack: 0,
      armor_value: 0,
      anti_air_attack: 0,
      fuel_consumption: 1,
      surface_visibility: 1,
      surface_detection: 20,
      sub_visibility: 20,
      sub_detection: 0,
      mines_planting: 0,
      mines_sweeping: 0,
      build_cost_ic: 390,
      steel: 2
    }
  },
];

export const slots = [
  {
    name: 'Locked Slot',
    id: 'locked',
    categories: ['all'],
    description: 'Sorry, this slot is unavailable. Hire researchers to invent more physical space on your hulls.'
  },
  {
    name: 'Deck Space 1',
    id: 'deck1',
    categories: ['ship_deck_space']
  },
  {
    name: 'Deck Space 2',
    id: 'deck2',
    categories: ['all','ship_deck_space','ship_carrier_armor']
  },
  {
    name: 'Battery',
    id: 'bbgun',
    categories: ['ship_heavy_battery']
  },
  {
    name: 'Battery',
    id: 'shbbgun',
    categories: ['ship_super_heavy_battery']
  },
  {
    name: 'Battery',
    id: 'cruisergun',
    categories: ['ship_light_battery','ship_medium_battery']
  },
  {
    name: 'Battery',
    id: 'protectedcruisergun',
    categories: ['ship_medium_battery','ship_heavy_battery']
  },
  {
    name: 'Battery',
    id: 'ddgun',
    categories: ['ship_light_battery'],
    description: 'The Naval Treaties stipulates that every warship must have a firearm on board, otherwise it is illegal. Do not question the logic of the treaties and pick a gun, even if it is the worst gun in existence.'
  },
  {
    name: 'Anti-Air',
    id: 'aa',
    categories: ['all','ship_anti_air'],
    description: 'This place is specifically reserved for very smol guns. Even if you put one, you will still need a bigger gun, because smol guns are too cute to count towards the treaties'
  },
  {
    name: 'Anti-Air',
    id: 'mandaa',
    categories: ['ship_anti_air']
  },
  {
    name: 'Fire Control System',
    id: 'fcs',
    categories: ['all','ship_fire_control_system']
  },
  {
    name: 'Fire Control System',
    id: 'mandfcs',
    categories: ['ship_fire_control_system']
  },
  {
    name: 'Fire Control System',
    id: 'fcshyd',
    categories: ['all','ship_fire_control_system','ship_sonar'],
    description: 'Here, you can put a tool that will help your sailors aim better than in the enemys general direction. Or you can put a sonar, for some reasons.'
  },
  {
    name: 'Fire Control System',
    id: 'mandfcshyd',
    categories: ['ship_fire_control_system','ship_sonar']
  },
  {
    name: 'Radar/Sonar',
    id: 'radar',
    categories: ['all','ship_radar']
  },
  {
    name: 'Radar/Sonar',
    id: 'radarhyd',
    categories: ['all','ship_radar','ship_sonar'],
    description: 'This is where cutting-edge detection tools go - so, as high as possible. You can also put a sonar there. Maybe so that it can emit soundwaves to repel the seagulls, I dunno.'
  },
  {
    name: 'Engine',
    id: 'cveng',
    categories: ['carrier_ship_engine']
  },
  {
    name: 'Engine',
    id: 'caconveng',
    categories: ['carrier_ship_engine','cruiser_ship_engine']
  },
  {
    name: 'Engine',
    id: 'bbconveng',
    categories: ['carrier_ship_engine','heavy_ship_engine']
  },
  {
    name: 'Engine',
    id: 'bbeng',
    categories: ['heavy_ship_engine']
  },
  {
    name: 'Engine',
    id: 'cruisereng',
    categories: ['cruiser_ship_engine']
  },
  {
    name: 'Engine',
    id: 'ddeng',
    categories: ['light_ship_engine'],
    description: 'You need stuff that heats water to an absurd degree, so as to make your ship go forward : this is where it goes. You cannot build a ship without one of these, because otherwise it is called a coastal battery.'
  },
  {
    name: 'Engine',
    id: 'subeng',
    categories: ['sub_ship_engine']
  },
  {
    name: 'Secondaries',
    id: 'sec',
    categories: ['all','ship_secondaries']
  },
  {
    name: 'Torpedoes',
    id: 'torp',
    categories: ['all','ship_torpedo'],
    description: 'Metal Fish Tank goes here. If you are playing Japan, it is mandatory. Nah, just kiddin. But it should be.'
  },
  {
    name: 'Torpedoes',
    id: 'subtorp',
    categories: ['ship_torpedo_sub']
  },
  {
    name: 'Armor',
    id: 'bbarmor',
    categories: ['ship_heavy_armor']
  },
  {
    name: 'Armor',
    id: 'shbbarmor',
    categories: ['ship_super_heavy_armor']
  },
  {
    name: 'Armor',
    id: 'cruiserarmor',
    categories: ['all','ship_cruiser_armor']
  },
  {
    name: 'Hull Slot',
    id: 'cv1',
    categories: ['all','ship_secondaries','ship_deck_space','ship_carrier_armor']
  },
  {
    name: 'Hull Slot',
    id: 'cv2',
    categories: ['all','ship_anti_air','ship_deck_space','ship_carrier_armor']
  },
  {
    name: 'Hull Slot',
    id: 'bb1',
    categories: ['all','ship_anti_air']
  },
  {
    name: 'Hull Slot',
    id: 'bb2',
    categories: ['all','ship_anti_air','ship_secondaries','ship_airplane_launcher','ship_torpedo']
  },
  {
    name: 'Hull Slot',
    id: 'bb3',
    categories: ['all','ship_anti_air','ship_airplane_launcher']
  },
  {
    name: 'Hull Slot',
    id: 'bb4',
    categories: ['all','ship_anti_air','ship_heavy_battery']
  },
  {
    name: 'Hull Slot',
    id: 'bb5',
    categories: ['all','ship_anti_air','ship_secondaries','ship_airplane_launcher']
  },
  {
    name: 'Hull Slot',
    id: 'bb6',
    categories: ['all','ship_anti_air','ship_secondaries','ship_airplane_launcher','ship_heavy_battery']
  },
  {
    name: 'Hull Slot',
    id: 'bb7',
    categories: ['all','ship_anti_air','ship_airplane_launcher','ship_heavy_battery']
  },
  {
    name: 'Hull Slot',
    id: 'shbb1',
    categories: ['all','ship_anti_air','ship_super_heavy_battery']
  },
  {
    name: 'Hull Slot',
    id: 'shbb2',
    categories: ['all','ship_anti_air','ship_secondaries']
  },
  {
    name: 'Hull Slot',
    id: 'shbb3',
    categories: ['all','ship_anti_air','ship_secondaries','ship_airplane_launcher','ship_super_heavy_battery']
  },
  {
    name: 'Hull Slot',
    id: 'cruiser1',
    categories: ['all','ship_anti_air','ship_torpedo','ship_medium_battery','ship_airplane_launcher']
  },
  {
    name: 'Hull Slot',
    id: 'cruiser2',
    categories: ['all','ship_anti_air','ship_torpedo','ship_light_battery','ship_medium_battery','ship_secondaries','ship_airplane_launcher','ship_mine_layer']
  },
  {
    name: 'Hull Slot',
    id: 'cruiser3',
    categories: ['all','ship_anti_air','ship_light_battery','ship_medium_battery','ship_depth_charge','ship_airplane_launcher','ship_mine_layer']
  },
  {
    name: 'Hull Slot',
    id: 'cruiser4',
    categories: ['all','ship_anti_air','ship_light_battery','ship_medium_battery']
  },
  {
    name: 'Hull Slot',
    id: 'cruiser5',
    categories: ['all','ship_anti_air','ship_torpedo','ship_light_battery','ship_medium_battery','ship_secondaries','ship_airplane_launcher']
  },
  {
    name: 'Hull Slot',
    id: 'cruiser6',
    categories: ['all','ship_anti_air','ship_torpedo']
  },
  {
    name: 'Hull Slot',
    id: 'cruiser7',
    categories: ['all','ship_anti_air','ship_torpedo','ship_mine_layer','ship_airplane_launcher']
  },
  {
    name: 'Hull Slot',
    id: 'cruiser8',
    categories: ['all','ship_anti_air','ship_depth_charge']
  },
  {
    name: 'Hull Slot',
    id: 'cruiser9',
    categories: ['all','ship_anti_air','ship_torpedo','ship_airplane_launcher','ship_mine_layer']
  },
  {
    name: 'Hull Slot',
    id: 'dd1',
    categories: ['all','ship_anti_air','ship_depth_charge','ship_torpedo','ship_mine_layer','ship_mine_warfare']
  },
  {
    name: 'Hull Slot',
    id: 'dd2',
    categories: ['all','ship_anti_air','ship_depth_charge','ship_torpedo','ship_mine_layer','ship_mine_warfare','ship_light_battery']
  },
  {
    name: 'Hull Slot',
    id: 'dd3',
    categories: ['all','ship_anti_air','ship_depth_charge','ship_light_battery']
  },
  {
    name: 'Hull Slot',
    id: 'sub1',
    categories: ['all','ship_torpedo_sub','ship_mine_layer_sub']
  },
  {
    name: 'Hull Slot',
    id: 'sub2',
    categories: ['all','ship_torpedo_sub','ship_mine_layer_sub','ship_radar']
  },
  {
    name: 'Hull Slot',
    id: 'sub3',
    categories: ['all','ship_radar','ship_sub_snorkel']
  },
  {
    name: 'Hull Slot',
    id: 'sub4',
    categories: ['all','ship_torpedo_sub','ship_mine_layer_sub','ship_airplane_launcher','ship_extra_fuel_tank']
  },
];

export const equipments = [
  {
    name: 'Nothing',
    id: 'nowt',
    category: 'all',
    description: 'Most reliable piece of equipment in existence. Quite litteraly never breaks down.'
  },
//DD main battery
  {
    name: 'Light Battery I',
    id: 'ship_light_battery_1',
    category: 'ship_light_battery',
    lg_attack : {
        add: 1
    },
    lg_armor_piercing : {
        avg: 1
    },
    naval_speed: {
        per: -0.01
    },
    build_cost_ic : {
        add: 90
    },
    description: 'Next to this thing, the Japanese 127mm Type 89 is a monster.'
  },
  {
    name: 'Light Battery II',
    id: 'ship_light_battery_2',
    category: 'ship_light_battery',
    lg_attack : {
        add: 1.5
    },
    lg_armor_piercing : {
        avg: 2
    },
    naval_speed: {
        per: -0.01
    },
    build_cost_ic : {
        add: 120
    },
    description: '120mm and 127mm hu ? How original. Definitly novel, never-seen before calibers'
  },
  {
    name: 'Light Battery III',
    id: 'ship_light_battery_3',
    category: 'ship_light_battery',
    lg_attack : {
        add: 2
    },
    lg_armor_piercing : {
        avg: 2.5
    },
    naval_speed: {
        per: -0.01
    },
    build_cost_ic : {
        add: 150
    },
    description: 'Friendly reminder that the US 5/38 Mark 13 was used on EVERY US DD from Farragut to Gearing. So technically the US should only have access to one DD gun technology...'
  },
  {
    name: 'Light Battery IV',
    id: 'ship_light_battery_4',
    category: 'ship_light_battery',
    lg_attack : {
        add: 3
    },
    lg_armor_piercing : {
        avg: 2.5
    },
    naval_speed: {
        per: -0.02
    },
    build_cost_ic : {
        add: 175
    },
    steel : {
        add: 1
    },
    description: 'Just pick the dual-purpose one. Seriously, can you even quote a late-war single-purpose DD main gun ? Like, did that even exist ?'
  },
  {
    name: 'DP Light Battery',
    id: 'dp_light_battery',
    category: 'ship_light_battery',
    lg_attack : {
        add: 3
    },
    lg_armor_piercing : {
        avg: 2
    },
    anti_air_attack : {
        add: 3
    },
    naval_speed: {
        per: -0.02
    },
    build_cost_ic : {
        add: 300
    },
    steel : {
        add: 1
    },
    description: 'The only main gun DP. Because clearly every Dual-Purpose gun had the same performance, from the late 20s japanese 127mm design to the post-war Bofors M50...'
  },
//BB main battery
  {
    name: 'Heavy Battery I',
    id: 'ship_heavy_battery_1',
    category: 'ship_heavy_battery',
    hg_attack : {
        add: 11
    },
    hg_armor_piercing : {
        avg: 31
    },
    supply_consumption : { // Increasing CA supply consumption beacause it is so much fun
        avg: 0.06
    },
    naval_speed: {
        per: -0.05
    },
    build_cost_ic : {
        add: 1275
    },
    steel : {
        add: 1
    }
  },
  {
    name: 'Heavy Battery II',
    id: 'ship_heavy_battery_2',
    category: 'ship_heavy_battery',
    hg_attack : {
        add: 12
    },
    hg_armor_piercing : {
        avg: 36
    },
    supply_consumption : { // Increasing CA supply consumption beacause it is so much fun
        avg: 0.06
    },
    naval_speed: {
        per: -0.08
    },
    build_cost_ic : {
        add: 1350
    },
    steel : {
        add: 1
    }
  },
  {
    name: 'Heavy Battery III',
    id: 'ship_heavy_battery_3',
    category: 'ship_heavy_battery',
    hg_attack : {
        add: 13
    },
    hg_armor_piercing : {
        avg: 40
    },
    supply_consumption : { // Increasing CA supply consumption beacause it is so much fun
        avg: 0.06
    },
    naval_speed: {
        per: -0.09
    },
    build_cost_ic : {
        add: 1450
    },
    steel : {
        add: 1
    }
  },
  {
    name: 'Heavy Battery IV',
    id: 'ship_heavy_battery_4',
    category: 'ship_heavy_battery',
    hg_attack : {
        add: 15
    },
    hg_armor_piercing : {
        avg: 43
    },
    supply_consumption : { // Increasing CA supply consumption beacause it is so much fun
        avg: 0.06
    },
    naval_speed: {
        per: -0.10
    },
    build_cost_ic : {
        add: 1650
    },
    steel : {
        add: 1
    },
    chromium : {
        add: 1
    }
  },
  {
    name: 'Super Heavy Battery',
    id: 'ship_super_heavy_battery_1',
    category: 'ship_super_heavy_battery',
    hg_attack : {
        add: 16
    },
    hg_armor_piercing : {
        avg: 50
    },
    naval_speed: {
        per: -0.10
    },
    build_cost_ic : {
        add: 1800
    },
    steel : {
        add: 1
    },
    chromium : {
        add: 1
    }
  },
//Cruiser main battery
  {
    name: 'Heavy Cruiser Battery I',
    id: 'ship_medium_battery_1',
    category: 'ship_medium_battery',
    hg_attack : {
        add: 6.75
    },
    hg_armor_piercing : {
        avg: 18
    },
    supply_consumption : { // Increasing CA supply consumption beacause it is so much fun
        avg: 0.06
    },
    surface_visibility : {
        add: 3.5
    },
    max_strength: {
        per: 0.4
    },
    naval_speed: {
        per: -0.04
    },
    build_cost_ic : {
        add: 750
    },
    steel : {
        add: 1
    }
  },
  {
    name: 'Heavy Cruiser Battery II',
    id: 'ship_medium_battery_2',
    category: 'ship_medium_battery',
    hg_attack : {
        add: 7.25
    },
    hg_armor_piercing : {
        avg: 21
    },
    supply_consumption : { // Increasing CA supply consumption beacause it is so much fun
        avg: 0.06
    },
    surface_visibility : {
        add: 3.5
    },
    max_strength: {
        per: 0.4
    },
    naval_speed: {
        per: -0.06
    },
    build_cost_ic : {
        add: 800
    },
    steel : {
        add: 1
    }
  },
  {
    name: 'Heavy Cruiser Battery III',
    id: 'ship_medium_battery_3',
    category: 'ship_medium_battery',
    hg_attack : {
        add: 7.75
    },
    hg_armor_piercing : {
        avg: 24
    },
    supply_consumption : { // Increasing CA supply consumption beacause it is so much fun
        avg: 0.06
    },
    surface_visibility : {
        add: 3.5
    },
    max_strength: {
        per: 0.4
    },
    naval_speed: {
        per: -0.07
    },
    build_cost_ic : {
        add: 825
    },
    steel : {
        add: 2
    }
  },
  {
    name: 'Heavy Cruiser Battery IV',
    id: 'ship_medium_battery_4',
    category: 'ship_medium_battery',
    hg_attack : {
        add: 9
    },
    hg_armor_piercing : {
        avg: 27
    },
    supply_consumption : { // Increasing CA supply consumption beacause it is so much fun
        avg: 0.06
    },
    surface_visibility : {
        add: 3.5
    },
    max_strength: {
        per: 0.4
    },
    naval_speed: {
        per: -0.08
    },
    build_cost_ic : {
        add: 900
    },
    steel : {
        add: 2
    }
  },
  {
    name: 'Light Cruiser Battery I',
    id: 'ship_light_medium_battery_1',
    category: 'ship_medium_battery',
    lg_attack : {
        add: 4
    },
    lg_armor_piercing : {
        avg: 5.5
    },
    max_strength: {
        avg: 20
    },
    naval_speed: {
        per: -0.03
    },
    build_cost_ic : {
        add: 225
    }
  },
  {
    name: 'Light Cruiser Battery II',
    id: 'ship_light_medium_battery_2',
    category: 'ship_medium_battery',
    lg_attack : {
        add: 5
    },
    lg_armor_piercing : {
        avg: 7
    },
    max_strength: {
        avg: 20
    },
    naval_speed: {
        per: -0.04
    },
    build_cost_ic : {
        add: 275
    }
  },
  {
    name: 'Light Cruiser Battery III',
    id: 'ship_light_medium_battery_3',
    category: 'ship_medium_battery',
    lg_attack : {
        add: 6
    },
    lg_armor_piercing : {
        avg: 8
    },
    max_strength: {
        avg: 20
    },
    naval_speed: {
        per: -0.04
    },
    build_cost_ic : {
        add: 300
    },
    steel : {
        add: 1
    }
  },
  {
    name: 'Light Cruiser Battery IV',
    id: 'ship_light_medium_battery_4',
    category: 'ship_medium_battery',
    lg_attack : {
        add: 7.5
    },
    lg_armor_piercing : {
        avg: 9
    },
    max_strength: {
        avg: 20
    },
    naval_speed: {
        per: -0.05
    },
    build_cost_ic : {
        add: 350
    },
    steel : {
        add: 1
    }
  },
//Secondary battery
  {
    name: 'Secondary Battery I',
    id: 'ship_secondaries_1',
    category: 'ship_secondaries',
    lg_attack : {
        add: 3
    },
    lg_armor_piercing : {
        avg: 5.5
    },
    naval_speed: {
        per: -0.02
    },
    build_cost_ic : {
        add: 180
    }
  },
  {
    name: 'Secondary Battery II',
    id: 'ship_secondaries_2',
    category: 'ship_secondaries',
    lg_attack : {
        add: 4
    },
    lg_armor_piercing : {
        avg: 7
    },
    naval_speed: {
        per: -0.02
    },
    build_cost_ic : {
        add: 240
    }
  },
  {
    name: 'DP Secondary Battery',
    id: 'dp_ship_secondaries',
    category: 'ship_secondaries',
    lg_attack : {
        add: 4.5
    },
    lg_armor_piercing : {
        avg: 8
    },
    anti_air_attack : {
        add: 2.5
    },
    naval_speed: {
        per: -0.03
    },
    build_cost_ic : {
        add: 290
    }
  },
//AA Guns
  {
    name: 'Anti-Air I',
    id: 'ship_anti_air_1',
    category: 'ship_anti_air',
    anti_air_attack : {
        add: 1.5,
        per: 0.1
    },
    naval_speed: {
        per: -0.01
    },
    build_cost_ic : {
        add: 90,
        per: 0.025
    },
    description: 'No, no, I never said this gun can shot planes. I said it can shot AT planes. That is different.'
  },
  {
    name: 'Anti-Air II',
    id: 'ship_anti_air_2	',
    category: 'ship_anti_air',
    anti_air_attack : {
        add: 2,
        per: 0.1
    },
    naval_speed: {
        per: -0.01
    },
    build_cost_ic : {
        add: 120,
        per: 0.025
    },
    description: 'What ? Are you excepting a witty comment for every piece of equipment ? Sorry, but despite trying to shoot them, AAII is just too... plain for me to have something to say about it.'
  },
  {
    name: 'Anti-Air III',
    id: 'ship_anti_air_3',
    category: 'ship_anti_air',
    anti_air_attack : {
        add: 3,
        per: 0.125
    },
    naval_speed: {
        per: -0.01
    },
    build_cost_ic : {
        add: 150,
        per: 0.025
    },
    description: 'Ah, yes, Anti-Air III. For most nations, this would actually translate to : if we squeeze the AAII guns, we can fit some more inbetween. Anti-Air Warfare in all its subtility...'
  },
  {
    name: 'Anti-Air IV',
    id: 'ship_anti_air_4',
    category: 'ship_anti_air',
    anti_air_attack : {
        add: 4,
        per: 0.15
    },
    naval_speed: {
        per: -0.01
    },
    build_cost_ic : {
        add: 190,
        per: 0.025
    },
    description: 'Just sayin, but having a balanced AA suite is more important than having the biggest AA guns possible. Otherwise Yamato would be the best AA ship in existance...'
  },
//Fire Control System
  {
    name: 'Fire Control 0',
    id: 'ship_fire_control_system_0',
    category: 'ship_fire_control_system',
    lg_attack : {
        per: 0.05
    },
    hg_attack: {
        per: 0.05
    },
    build_cost_ic : {
        add: 60
    },
    description: 'Fire Control 0 is basically a guy standing on deck giving commands like : shoot a little bit more to the left...'
  },
  {
    name: 'Fire Control I',
    id: 'ship_fire_control_system_1',
    category: 'ship_fire_control_system',
    lg_attack : {
        per: 0.1
    },
    hg_attack: {
        per: 0.1
    },
    anti_air_attack: {
        per: 0.1
    },
    reliability: {
        per: -0.05
    },
    build_cost_ic : {
        add: 90
    },
    description: 'Yay, optics. They are often mocked but remember that radars did not become truly efficient in fire control until at least 1943.'
  },
  {
    name: 'Fire Control II',
    id: 'ship_fire_control_system_2',
    category: 'ship_fire_control_system',
    lg_attack : {
        per: 0.15
    },
    hg_attack: {
        per: 0.15
    },
    anti_air_attack: {
        per: 0.15
    },
    reliability: {
        per: -0.075
    },
    build_cost_ic : {
        add: 120
    },
    description: 'The admiralty tables are here to do all the calculations for you so your shot is well aimed ! Of course, it does not counter dispertion, so if your guns are crappy, well, too bad for you !'
  },
  {
    name: 'Fire Control III',
    id: 'ship_fire_control_system_3',
    category: 'ship_fire_control_system',
    lg_attack : {
        per: 0.2
    },
    hg_attack: {
        per: 0.2
    },
    anti_air_attack: {
        per: 0.2
    },
    reliability: {
        per: -0.1
    },
    build_cost_ic : {
        add: 180
    },
    description: 'Be thankful. The combined effort of British and American scientists is what gave birth to these weird tennis mini-games on radar equipment, which would eventually evolve into computers and video games.'
  },
//Radar
  {
    name: 'Radar I',
    id: 'ship_radar_1',
    category: 'ship_radar',
    surface_detection : {
        add: 5
    },
    build_cost_ic : {
        add: 80
    },
    description: 'With this radar, you will be able to know that something is nearby ! Not what or where it is, tho. Might be an enemy ship. Might be an island. Might be nothing. It is a surprise !'
  },
  {
    name: 'Radar II',
    id: 'ship_radar_2',
    category: 'ship_radar',
    surface_detection : {
        add: 7
    },
    sub_detection : {
        add: 2
    },
    build_cost_ic : {
        add: 110
    },
    description: 'This one is better : you can get a general direction. What it detects may still be nothing tho. I mean, what did you expect, the technology is young, it is still buggy'
  },
  {
    name: 'Radar III',
    id: 'ship_radar_3',
    category: 'ship_radar',
    surface_detection : {
        add: 12
    },
    sub_detection : {
        add: 6
    },
    lg_attack : {
        per: 0.05
    },
    hg_attack : {
        per: 0.05
    },
    anti_air_attack : {
        per: 0.05
    },
    build_cost_ic : {
        add: 140
    },
    description: 'Yes okay this one is more accurate. But you still do not have an IFF so do not go accidentally blind-shooting your allies. Not that this would ever happen... right ?'
  },
  {
    name: 'Radar IV',
    id: 'ship_radar_3',
    category: 'ship_radar',
    surface_detection : {
        add: 18
    },
    sub_detection : {
        add: 14
    },
    lg_attack : {
        per: 0.1
    },
    hg_attack : {
        per: 0.1
    },
    anti_air_attack : {
        per: 0.1
    },
    build_cost_ic : {
        add: 170
    },
    description: 'Okay cool. Now you have a usable radar ! Just one thing to do now : teach you crew how to use it, because trust me, they have NO IDEA what this flashing screen is'
  },
//DD Engine
  {
    name: 'Light Engine I',
    id: 'light_ship_engine_1',
    category: 'light_ship_engine',
    naval_speed : {
        add: 5,
        per: 0.21
    },
    fuel_consumption : {
        add: 7
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 90
    },
    description: 'Wait, engine, like, boilers ? What about the turbines ? Amazing boilers are useless if your turbines are lame...'
  },
  {
    name: 'Light Engine II',
    id: 'light_ship_engine_2',
    category: 'light_ship_engine',
    naval_speed : {
        add: 5,
        per: 0.32
    },
    fuel_consumption : {
        add: 8
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 120
    },
    description: 'You should be able to put multiple boilers per ship. Also, type of engine should not be restricted by class. After all, Katsuragi was propelled by Kagero boilers...'
  },
  {
    name: 'Light Engine III',
    id: 'light_ship_engine_3',
    category: 'light_ship_engine',
    naval_speed : {
        add: 5,
        per: 0.42
    },
    fuel_consumption : {
        add: 10
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 150
    },
    description: 'Okay, cool, we are getting more power. That is not all there is to it tho. What about consumption ? Also, why is the reliability malus the same on every engine ? Some were studied specifically to be more durable...'
  },
  {
    name: 'Light Engine IV',
    id: 'light_ship_engine_4',
    category: 'light_ship_engine',
    naval_speed : {
        add: 5,
        per: 0.47
    },
    fuel_consumption : {
        add: 10
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 170
    },
    description: 'Do not accidentally lose the technology after implementing it on one vessel because it was so complex that you have no idea how to recreate it again. Just saying, some people did that...'
  },
//Submarine Engine
  {
    name: 'Submarine Engine I',
    id: 'sub_ship_engine_1',
    category: 'sub_ship_engine',
    naval_speed : {
        add: 5,
        per: 0.05
    },
    fuel_consumption : {
        add: 7
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 90
    }
  },
  {
    name: 'Submarine Engine II',
    id: 'sub_ship_engine_2',
    category: 'sub_ship_engine',
    naval_speed : {
        add: 5,
        per: 0.1
    },
    fuel_consumption : {
        add: 8
    },
    sub_visibility : {
        per: -0.05
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 120
    }
  },
  {
    name: 'Submarine Engine III',
    id: 'sub_ship_engine_3',
    category: 'sub_ship_engine',
    naval_speed : {
        add: 5,
        per: 0.15
    },
    fuel_consumption : {
        add: 10
    },
    sub_visibility : {
        per: -0.1
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 150
    }
  },
  {
    name: 'Submarine Engine IV',
    id: 'sub_ship_engine_4',
    category: 'sub_ship_engine',
    naval_speed : {
        add: 5,
        per: 0.2
    },
    fuel_consumption : {
        add: 10
    },
    sub_visibility : {
        per: -0.15
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 170
    }
  },
//Cruiser Engine
  {
    name: 'Cruiser Engine I',
    id: 'cruiser_ship_engine_1',
    category: 'cruiser_ship_engine',
    naval_speed : {
        add: 5,
        per: 0.2
    },
    fuel_consumption : {
        add: 12
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 400
    }
  },
  {
    name: 'Cruiser Engine II',
    id: 'cruiser_ship_engine_2',
    category: 'cruiser_ship_engine',
    naval_speed : {
        add: 6,
        per: 0.3
    },
    fuel_consumption : {
        add: 16
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 480
    }
  },
  {
    name: 'Cruiser Engine III',
    id: 'cruiser_ship_engine_3',
    category: 'cruiser_ship_engine',
    naval_speed : {
        add: 7,
        per: 0.35
    },
    fuel_consumption : {
        add: 20
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 550
    }
  },
  {
    name: 'Cruiser Engine IV',
    id: 'cruiser_ship_engine_4',
    category: 'cruiser_ship_engine',
    naval_speed : {
        add: 7,
        per: 0.4
    },
    fuel_consumption : {
        add: 24
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 670
    }
  },
//BB Engine
  {
    name: 'Heavy Engine I',
    id: 'heavy_ship_engine_1',
    category: 'heavy_ship_engine',
    naval_speed : {
        add: 7,
        per: 0.2
    },
    fuel_consumption : {
        add: 20
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 1800
    }
  },
  {
    name: 'Heavy Engine II',
    id: 'heavy_ship_engine_2',
    category: 'heavy_ship_engine',
    naval_speed : {
        add: 10,
        per: 0.3
    },
    fuel_consumption : {
        add: 25
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 2200
    }
  },
  {
    name: 'Heavy Engine III',
    id: 'heavy_ship_engine_3',
    category: 'heavy_ship_engine',
    naval_speed : {
        add: 11,
        per: 0.4
    },
    fuel_consumption : {
        add: 30
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 2600
    }
  },
  {
    name: 'Heavy Engine IV',
    id: 'heavy_ship_engine_4',
    category: 'heavy_ship_engine',
    naval_speed : {
        add: 12,
        per: 0.45
    },
    fuel_consumption : {
        add: 35
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 3000
    }
  },
//CV Engine
  {
    name: 'Carrier Engine I',
    id: 'carrier_ship_engine_1',
    category: 'carrier_ship_engine',
    naval_speed : {
        add: 5,
        per: 0.2
    },
    fuel_consumption : {
        add: 12
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 400
    }
  },
  {
    name: 'Carrier Engine II',
    id: 'carrier_ship_engine_2',
    category: 'carrier_ship_engine',
    naval_speed : {
        add: 5,
        per: 0.3
    },
    fuel_consumption : {
        add: 16
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 480
    }
  },
  {
    name: 'Carrier Engine III',
    id: 'carrier_ship_engine_3',
    category: 'carrier_ship_engine',
    naval_speed : {
        add: 5,
        per: 0.4
    },
    fuel_consumption : {
        add: 20
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 550
    }
  },
  {
    name: 'Carrier Engine IV',
    id: 'carrier_ship_engine_4',
    category: 'carrier_ship_engine',
    naval_speed : {
        add: 5,
        per: 0.45
    },
    fuel_consumption : {
        add: 24
    },
    reliability : {
        per: -0.2
    },
    build_cost_ic : {
        add: 670
    }
  },
//Torpedo tubes
  {
    name: 'Torpedo Launcher I',
    id: 'ship_torpedo_1',
    category: 'ship_torpedo',
    torpedo_attack : {
        add: 18
    },
    naval_speed : {
        per: -0.01
    },
    build_cost_ic : {
        add: 90
    },
    description: 'The great gamechanger of naval warfare ! Except that by now it has lost its title to aviation. Oh well.'
  },
  {
    name: 'Torpedo Launcher II',
    id: 'ship_torpedo_2',
    category: 'ship_torpedo',
    torpedo_attack : {
        add: 27
    },
    naval_speed : {
        per: -0.01
    },
    build_cost_ic : {
        add: 120
    },
    description: 'What ? That is literally just the same thing but with more tubes. I should have copy-pasted the description of model I'
  },
  {
    name: 'Torpedo Launcher III',
    id: 'ship_torpedo_3',
    category: 'ship_torpedo',
    torpedo_attack : {
        add: 36
    },
    naval_speed : {
        per: -0.01
    },
    build_cost_ic : {
        add: 150
    },
    description: 'If I had to choose, I would give a special turreted launcher tech to the Japanese. No, not because they need it. Just out of pure national bias.'
  },
  {
    name: 'Torpedo Launcher IV',
    id: 'ship_torpedo_4',
    category: 'ship_torpedo',
    torpedo_attack : {
        add: 45
    },
    naval_speed : {
        per: -0.01
    },
    build_cost_ic : {
        add: 180
    },
    description: 'Honestly, the torpedo technology is far more important than the launcher one... Having more tubes means you can make more attacks, that is all. You are not supposed to need 10 torp hits to sink a ship... Unless you are Russian.'
  },
  {
    name: 'Torpedo Tubes I',
    id: 'ship_torpedo_sub_1',
    category: 'ship_torpedo_sub',
    torpedo_attack : {
        add: 14
    },
    build_cost_ic : {
        add: 80
    }
  },
  {
    name: 'Torpedo Tubes II',
    id: 'ship_torpedo_sub_2',
    category: 'ship_torpedo_sub',
    torpedo_attack : {
        add: 18
    },
    build_cost_ic : {
        add: 100
    }
  },
  {
    name: 'Torpedo Tubes III',
    id: 'ship_torpedo_sub_3',
    category: 'ship_torpedo_sub',
    torpedo_attack : {
        add: 22
    },
    build_cost_ic : {
        add: 120
    }
  },
  {
    name: 'Torpedo Tubes IV',
    id: 'ship_torpedo_sub_4',
    category: 'ship_torpedo_sub',
    torpedo_attack : {
        add: 28
    },
    build_cost_ic : {
        add: 140
    }
  },
//Mine warfare
  {
    name: 'Minelaying Rails',
    id: 'ship_mine_layer_1',
    category: 'ship_mine_layer',
    mines_planting : {
        add: 1
    },
    naval_speed : {
        per: -0.02
    },
    build_cost_ic : {
        add: 90
    },
    description: 'This little piece of equipment is the perfect way to say to your enemies : this area is MINE !... okay, that one was easy'
  },
  {
    name: 'Minelaying Tubes',
    id: 'ship_mine_layer_sub',
    category: 'ship_mine_layer_sub',
    mines_planting : {
        add: 1
    },
    build_cost_ic : {
        add: 90
    }
  },
  {
    name: 'Minesweeping Gear',
    id: 'ship_mine_sweeper_1',
    category: 'ship_mine_warfare',
    mines_sweeping : {
        add: 1
    },
    naval_speed : {
        per: -0.02
    },
    build_cost_ic : {
        add: 30
    },
    description: 'Gear here means parvanes and guns to shot at the mines that surface. So, should Minesweeping Gear give some AA ? Or AA guns some minesweeping...?'
  },
//Anti-Submarine warfare
  {
    name: 'Depth Charge I',
    id: 'ship_depth_charge_1',
    category: 'ship_depth_charge',
    sub_attack : {
        add: 8
    },
    naval_speed : {
        per: -0.02
    },
    build_cost_ic : {
        add: 90
    },
    description: 'It is a box filled with something that explodes. As basic as it gets'
  },
  {
    name: 'Depth Charge II',
    id: 'ship_depth_charge_2',
    category: 'ship_depth_charge',
    sub_attack : {
        add: 12
    },
    naval_speed : {
        per: -0.02
    },
    build_cost_ic : {
        add: 120
    },
    description: 'It is still a box filled with something that explodes. Still as basic as it gets'
  },
  {
    name: 'Depth Charge III',
    id: 'ship_depth_charge_3',
    category: 'ship_depth_charge',
    sub_attack : {
        add: 16
    },
    naval_speed : {
        per: -0.02
    },
    build_cost_ic : {
        add: 150
    },
    description: '... Gee, the depth charge concept does not change much, it is and will remain an explosive box ! It is the way one launchs it that changes everything !'
  },
  {
    name: 'Depth Charge IV',
    id: 'ship_depth_charge_4',
    category: 'ship_depth_charge',
    sub_attack : {
        add: 20
    },
    naval_speed : {
        per: -0.02
    },
    build_cost_ic : {
        add: 180
    },
    description: 'If you are still using regular depth charges in 1944 you do not deserve any stat improvement.'
  },
//Snorkel
  {
    name: 'Schornchel I',
    id: 'ship_sub_snorkel_1',
    category: 'ship_sub_snorkel',
    sub_visibility : {
        per: -0.1
    },
    build_cost_ic : {
        add: 50
    }
  },
  {
    name: 'Schornchel II',
    id: 'ship_sub_snorkel_2',
    category: 'ship_sub_snorkel',
    sub_visibility : {
        per: -0.2
    },
    build_cost_ic : {
        add: 70
    }
  },
//Catapult
  {
    name: 'Floatplane Catapult I',
    id: 'ship_airplane_launcher_1',
    category: 'ship_airplane_launcher',
    surface_detection : {
        add: 7
    },
    sub_detection : {
        add: 2.5
    },
    naval_speed : {
        per: -0.01
    },
    build_cost_ic : {
        add: 150
    },
    description: 'A good operation name. Especialy if France is your best friend.'
  },
  {
    name: 'Floatplane Catapult II',
    id: 'ship_airplane_launcher_2',
    category: 'ship_airplane_launcher',
    surface_detection : {
        add: 10
    },
    sub_detection : {
        add: 3.5
    },
    naval_speed : {
        per: -0.01
    },
    build_cost_ic : {
        add: 170
    }
  },
//Hangar
  {
    name: 'Hangar Space',
    id: 'ship_deck_space',
    category: 'ship_deck_space',
    carrier_size_formula : {
        add: 20
    },
    manpower : {
        add: 500
    },
    naval_speed : {
        per: -0.05
    },
    build_cost_ic : {
        add: 2000
    },
    steel : {
        add: 1
    }
  },
//Fuel tank
  {
    name: 'Extra Fuel Tanks',
    id: 'ship_extra_fuel_tank',
    category: 'ship_extra_fuel_tank',
    naval_range : {
        add: 1000
    },
    build_cost_ic : {
        per: 0.05
    }
  },
//Sonar
  {
    name: 'Sonar I',
    id: 'ship_sonar_1',
    category: 'ship_sonar',
    sub_detection : {
        add: 4
    },
    build_cost_ic : {
        add: 40
    },
    description: 'Well, technically it is NOT a sonar, but I guess it is meant to detect stuff underwater so close enough.'
  },
  {
    name: 'Sonar II',
    id: 'ship_sonar_2',
    category: 'ship_sonar',
    sub_detection : {
        add: 7
    },
    build_cost_ic : {
        add: 60
    },
    description: 'Insert joke about this being the only redeeming quality of British escort vessels'
  },
//BB Armor
  {
    name: 'Battleship Armor I',
    id: 'ship_armor_bb_1',
    category: 'ship_heavy_armor',
    surface_visibility : {
        add: 10
    },
    armor_value : {
        add: 26
    },
    max_strength : {
        per: 0.05
    },
    naval_speed : {
        per: -0.2
    },
    build_cost_ic : {
        per: 0.2
    },
    steel : {
        add: 1
    }
  },
  {
    name: 'Battleship Armor II',
    id: 'ship_armor_bb_2',
    category: 'ship_heavy_armor',
    surface_visibility : {
        add: 10
    },
    armor_value : {
        add: 31
    },
    max_strength : {
        per: 0.1
    },
    naval_speed : {
        per: -0.2
    },
    build_cost_ic : {
        per: 0.2
    },
    steel : {
        add: 1
    }
  },
  {
    name: 'Battleship Armor III',
    id: 'ship_armor_bb_3',
    category: 'ship_heavy_armor',
    surface_visibility : {
        add: 10
    },
    armor_value : {
        add: 40
    },
    max_strength : {
        per: 0.15
    },
    naval_speed : {
        per: -0.2
    },
    build_cost_ic : {
        per: 0.2
    },
    steel : {
        add: 2
    },
    chromium : {
        add: 1
    }
  },
  {
    name: 'Super Heavy Armor',
    id: 'ship_armor_shbb',
    category: 'ship_super_heavy_armor',
    surface_visibility : {
        add: 10
    },
    armor_value : {
        add: 55
    },
    max_strength : {
        per: 0.1
    },
    naval_speed : {
        per: -0.25
    },
    build_cost_ic : {
        per: 0.25
    },
    steel : {
        add: 2
    },
    chromium : {
        add: 1
    }
  },
  {
    name: 'Battlecruiser Armor I',
    id: 'ship_armor_bc_1',
    category: 'ship_heavy_armor',
    surface_visibility : {
        add: 8
    },
    armor_value : {
        add: 20
    },
    supply_consumption : { // CC have different supply values for PDX reasons
        avg: -0.08
    },
    max_strength : {
        per: 0.05
    },
    naval_speed : {
        per: -0.1
    },
    build_cost_ic : {
        per: 0.075
    }
  },
  {
    name: 'Battlecruiser Armor II',
    id: 'ship_armor_bc_2',
    category: 'ship_heavy_armor',
    surface_visibility : {
        add: 8
    },
    armor_value : {
        add: 25
    },
    supply_consumption : { // CC have different supply values for PDX reasons
        avg: -0.08
    },
    max_strength : {
        per: 0.1
    },
    naval_speed : {
        per: -0.1
    },
    build_cost_ic : {
        per: 0.075
    },
    steel : {
        add: 1
    }
  },
  {
    name: 'Battlecruiser Armor III',
    id: 'ship_armor_bc_3',
    category: 'ship_heavy_armor',
    surface_visibility : {
        add: 8
    },
    armor_value : {
        add: 30
    },
    supply_consumption : { // CC have different supply values for PDX reasons
        avg: -0.08
    },
    max_strength : {
        per: 0.15
    },
    naval_speed : {
        per: -0.1
    },
    build_cost_ic : {
        per: 0.075
    },
    steel : {
        add: 1
    },
    chromium : {
        add: 1
    }
  },
//Cruiser Armor
  {
    name: 'Cruiser Armor I',
    id: 'ship_armor_cruiser_1',
    category: 'ship_cruiser_armor',
    armor_value : {
        add: 6
    },
    naval_speed : {
        per: -0.05
    },
    build_cost_ic : {
        per: 0.1
    }
  },
  {
    name: 'Cruiser Armor II',
    id: 'ship_armor_cruiser_2',
    category: 'ship_cruiser_armor',
    armor_value : {
        add: 8
    },
    max_strength : {
        per: 0.05
    },
    naval_speed : {
        per: -0.075
    },
    build_cost_ic : {
        per: 0.15
    },
    steel : {
        add: 1
    }
  },
  {
    name: 'Cruiser Armor III',
    id: 'ship_armor_cruiser_3',
    category: 'ship_cruiser_armor',
    armor_value : {
        add: 10
    },
    max_strength : {
        per: 0.1
    },
    naval_speed : {
        per: -0.1
    },
    build_cost_ic : {
        per: 0.2
    },
    steel : {
        add: 1
    },
    chromium : {
        add: 1
    }
  },
  {
    name: 'Cruiser Armor IV',
    id: 'ship_armor_cruiser_4',
    category: 'ship_cruiser_armor',
    armor_value : {
        add: 12
    },
    max_strength : {
        per: 0.15
    },
    naval_speed : {
        per: -0.125
    },
    build_cost_ic : {
        per: 0.25
    },
    steel : {
        add: 2
    },
    chromium : {
        add: 1
    }
  },
//CV Armor
  {
    name: 'Flight Deck Armor',
    id: 'ship_carrier_armor',
    category: 'ship_armor_carrier_deck',
    armor_value : {
        add: 5
    },
    max_strength : {
        add: 25
    },
    naval_speed : {
        per: -0.05
    },
    build_cost_ic : {
        per: 0.1
    },
    steel : {
        add: 1
    }
  },
];

export const stats = [
  {
    name: 'Naval Speed',
    id: 'naval_speed',
    description: 'Not to be mistaken with non-naval speed, which designates the speed at which your boat goes when out of the water, which isn not indicated for obvious reasons.'
  },
  {
    name: 'Naval Range',
    id: 'naval_range',
    description: 'How far from a friendly port your boat goes. They could have called that oil quantity and have it factor with consumption but people would have not understood I guess.'
  },
  {
    name: 'Max Organisation',
    id: 'max_organisation',
    description: 'Captain, the crew says they are bored with this fight ! - Oh, well let us retreat and find a more interesting one then.'
  },
  {
    name: 'Max Strength',
    id: 'max_strength',
    description: 'Ships should not have hit points.'
  },
  {
    name: 'Reliability',
    id: 'reliability',
    description: 'Something is always broken aboard a ship. But if it is the ice cream machine you can bet your ass we are returning home for repairs. True story.'
  },
  {
    name: 'Supply Consumption',
    id: 'supply_consumption',
    description: 'Some ships gobble oil so fast I would not put it past them to burp while underway.'
  },
  {
    name: 'Manpower',
    id: 'manpower',
    description: 'According to the game you need 200 guys to man a coastal submarine and NINE THOUSAND IN A SUPER HEAVY BB WHAT THE EFF WHERE DO THEY GET THEIR NUMBERS'
  },
  {
    name: 'Carrier Size',
    id: 'carrier_size',
    description: 'Are you a carrier ? No ? Then why are you here, this stat is obviously not for you.'
  },
  {
    name: 'Light Attack',
    id: 'lg_attack',
    description: 'Estimates the damage potential of one salvo with your smol guns.'
  },
  {
    name: 'Light Armor Piercing',
    id: 'lg_armor_piercing',
    description: 'How thick a plate can your smol shells go through. We will assume everybody uses Commons, so that it is much simpler.'
  },
  {
    name: 'Heavy Attack',
    id: 'hg_attack',
    description: 'How much explosive power you broadside have. But only with guns bigger than 155mm.'
  },
  {
    name: 'Heavy Armor Piercing',
    id: 'hg_armor_piercing'
  },
  {
    name: 'Torpedo Attack',
    id: 'torpedo_attack'
  },
  {
    name: 'Submarine Attack',
    id: 'sub_attack'
  },
  {
    name: 'Armor Value',
    id: 'armor_value'
  },
  {
    name: 'Anti Air Attack',
    id: 'anti_air_attack',
    description: 'How much pepper you can put in the air to bother mosquitoes.'
  },
  {
    name: 'Fuel Consumption',
    id: 'fuel_consumption'
  },
  {
    name: 'Surface Visibility',
    id: 'surface_visibility'
  },
  {
    name: 'Surface Detection',
    id: 'surface_detection'
  },
  {
    name: 'Submarine Visibility',
    id: 'sub_visibility'
  },
  {
    name: 'Submarine Detection',
    id: 'sub_detection'
  },
  {
    name: 'Mines Planting',
    id: 'mines_planting'
  },
  {
    name: 'Mines Sweeping',
    id: 'mines_sweeping'
  },
  {
    name: 'Build Cost',
    id: 'build_cost_ic'
  },
  {
    name: 'Steel Cost',
    id: 'steel'
  },
  {
    name: 'Chromium Cost',
    id: 'chromium'
  },
];

export const designers = [
  {
	name : 'no designer',
  },
  {
    name : 'Pacific fleet naval manufacturer',
    naval_range : [
	  ['per', 0.25, 'CV'],
	  ['per', 0.25, 'BB'],
	  ['per', 0.25, 'BC'],
	  ['per', 0.25, 'CA'],
	  ['per', 0.25, 'CL'],
	  ['per', 0.25, 'DD'],
	  ['per', 0.25, 'SS']
    ],
    carrier_size : [
      ['per', 0.25, 'CV']
    ],
    armor_value : [
	  ['per', -0.15, 'CV']
    ]
  },
  {
    name : 'Atlantic fleet naval manufacturer',
    armor_value : [
	  ['per', 0.5, 'CV'],
	  ['per', 0.1, 'BB'],
	  ['per', 0.1, 'BC'],
	  ['per', 0.1, 'CA']
    ],
    max_strength : [
      ['per', 0.1, 'CV']
    ],
    hg_attack : [
	  ['per', 0.1, 'BB'],
	  ['per', 0.1, 'BC'],
	  ['per', 0.1, 'CA']
    ]
  },
  {
    name : 'Battlefleet designer',
    armor_value : [
	  ['per', 0.15, 'BB'],
	  ['per', 0.15, 'BC'],
	  ['per', 0.15, 'CA']
    ],
    hg_attack : [
	  ['per', 0.15, 'BB'],
	  ['per', 0.15, 'BC'],
	  ['per', 0.15, 'CA']
    ],
    torpedo_attack : [
	  ['per', 0.25, 'CL'],
	  ['per', 0.25, 'DD']
    ],
    sub_detection : [
	  ['per', -0.25, 'CL'],
	  ['per', -0.25, 'DD']
    ]
  },
  {
    name : 'Raiding fleet naval manufacturer',
    surface_visibility : [
	  ['per', -0.1, 'CV'],
	  ['per', -0.1, 'BB'],
	  ['per', -0.1, 'BC'],
	  ['per', -0.1, 'CA'],
	  ['per', -0.1, 'CL'],
	  ['per', -0.1, 'DD'],
	  ['per', -0.1, 'SS']
    ],
    naval_speed : [
      ['per', 0.1, 'CV'],
      ['per', 0.1, 'BB'],
      ['per', 0.1, 'BC'],
      ['per', 0.1, 'CA'],
      ['per', 0.1, 'CL'],
      ['per', 0.1, 'DD'],
      ['per', 0.1, 'SS']
    ],
    carrier_size : [
	  ['per', -0.1, 'CV']
    ],
    hg_attack : [
	  ['per', -0.1, 'BB'],
	  ['per', -0.1, 'BC'],
	  ['per', -0.1, 'CA']
    ],
    sub_visibility : [
	  ['per', -0.1, 'SS']
    ]
  },
  {
    name : 'Convoy escort fleet naval manufacturer',
    build_cost_ic : [
      ['per', 0.1, 'CL'],
      ['per', 0.1, 'DD']
    ],
    naval_range : [
	  ['per', 0.3, 'CL'],
	  ['per', 0.3, 'DD']
    ],
    naval_speed : [
	  ['per', 0.1, 'CL'],
	  ['per', 0.1, 'DD']
    ],
    sub_detection : [
	  ['per', 0.1, 'CL'],
	  ['per', 0.1, 'DD']
    ]
  },
  {
    name : 'Coastal defence fleet naval manufacturer',
    build_cost_ic : [
	  ['per', -0.25, 'CV'],
	  ['per', -0.25, 'BB'],
	  ['per', -0.25, 'BC'],
	  ['per', -0.25, 'CA'],
	  ['per', -0.25, 'CL'],
	  ['per', -0.25, 'DD'],
	  ['per', -0.25, 'SS']
    ],
    naval_range : [
      ['per', -0.5, 'CV'],
      ['per', -0.5, 'BB'],
      ['per', -0.5, 'BC'],
      ['per', -0.5, 'CA'],
      ['per', -0.5, 'CL'],
      ['per', -0.5, 'DD'],
      ['per', -0.5, 'SS']
    ],
    carrier_size : [
	  ['per', -0.2, 'CV']
    ],
    hg_attack : [
	  ['per', -0.2, 'BB'],
	  ['per', -0.2, 'BC'],
	  ['per', -0.2, 'CA']
    ],
    armor_value : [
	  ['per', -0.2, 'BB'],
	  ['per', -0.2, 'BC'],
	  ['per', -0.2, 'CA']
    ]
  },
  {
    name : 'Mediterranean fleet naval manufacturer',
    naval_range : [
	  ['per', -0.25, 'BB'],
	  ['per', -0.25, 'BC'],
	  ['per', -0.25, 'CA'],
	  ['per', -0.25, 'CL'],
	  ['per', -0.25, 'DD']
    ],
    naval_speed : [
	  ['per', 0.1, 'BB'],
	  ['per', 0.1, 'BC'],
	  ['per', 0.1, 'CA'],
	  ['per', 0.1, 'CL'],
	  ['per', 0.1, 'DD']
    ]
  }
];

export const doctrines = [
  {
    name : 'No Doctrine'
  },
  {
    name : 'Fleet in Being',
    max_organisation : [
      ['add', 30, 'CV'],
      ['add', 60, 'BB'],
      ['add', 40, 'BC'],
      ['add', 40, 'CA'],
      ['add', 20, 'CL'],
      ['add', 60, 'DD'],
	  ['add', 40, 'SS']
    ],
    surface_detection : [
	  ['per', 0.1, 'CL'],
	  ['per', 0.1, 'DD'],
	  ['per', 0.25, 'SS']
    ],
    sub_detection : [
      ['per', 0.5, 'CV'],
      ['per', 0.35, 'CL'],
      ['per', 0.3, 'DD']
    ],
    armor_value : [
	  ['per', 0.1, 'BB'],
	  ['per', 0.1, 'BC'],
	  ['per', 0.1, 'CA']
    ],
    hg_attack : [
	  ['per', 0.1, 'BB'],
	  ['per', 0.1, 'BC'],
	  ['per', 0.1, 'CA']
    ],
    anti_air_attack : [
	  ['per', 0.1, 'CV'],
	  ['per', 0.1, 'BB'],
	  ['per', 0.1, 'BC'],
	  ['per', 0.1, 'CA'],
	  ['per', 0.1, 'CL'],
	  ['per', 0.1, 'DD']
    ]
  },
  {
    name : 'Trade Interdiction',
    max_organisation : [
      ['add', 60, 'CV'],
      ['add', 50, 'BB'],
      ['add', 40, 'BC'],
      ['add', 40, 'CA'],
      ['add', 30, 'CL'],
      ['add', 10, 'DD'],
	  ['add', 50, 'SS']
    ],
    surface_detection : [
	  ['per', 0.25, 'BB'],
	  ['per', 0.4, 'BC'],
	  ['per', 0.3, 'CA'],
	  ['per', 0.3, 'CL'],
	  ['per', 0.5, 'SS']
    ],
    sub_detection : [
      ['per', 0.05, 'DD']
    ],
    surface_visibility : [
	  ['per', -0.25, 'BB'],
	  ['per', -0.2, 'BC'],
	  ['per', -0.1, 'CL']
    ],
    armor_value : [
	  ['per', 0.1, 'BB'],
	  ['per', 0.1, 'BC'],
	  ['per', 0.1, 'CA']
    ],
    torpedo_attack : [
	  ['per', 0.1, 'SS']
    ],
    max_strength : [
	  ['per', 0.2, 'SS']
    ]
  },
  {
    name : 'Base Strike',
    max_organisation : [
      ['add', 120, 'CV'],
      ['add', 20, 'BB'],
      ['add', 60, 'CL'],
	  ['add', 50, 'DD'],
	  ['add', 40, 'SS']
    ],
    surface_detection : [
      ['per', 0.25, 'CL'],
	  ['per', 0.25, 'SS']
    ],
    sub_detection : [
      ['per', 0.25, 'DD']
    ],
    armor_value : [
	  ['per', 0.1, 'BB'],
	  ['per', 0.1, 'BC'],
	  ['per', 0.1, 'CA']
    ]
  }
];

export const classes = [
  {
    name : 'CV',
    hull : ['Converted Cruiser Hull','Converted Battleship Hull','1936 Carrier Hull','1940 Carrier Hull','1944 Carrier Hull'],
    condition : [],
    exclusion : [],
  },
  {
    name : 'BB',
    hull : ['Pre-Dreadnought Hull','Early Heavy Ship Hull','1936 Heavy Ship Hull','1940 Heavy Ship Hull','1944 Heavy Ship Hull','Super Heavy Battleship Hull'],
    condition : [],
    exclusion : ['Battlecruiser Armor I','Battlecruiser Armor II','Battlecruiser Armor III'],
  },
  {
    name : 'BC',
    hull : ['Pre-Dreadnought Hull','Early Heavy Ship Hull','1936 Heavy Ship Hull','1940 Heavy Ship Hull','1944 Heavy Ship Hull'],
    condition : ['Battlecruiser Armor I','Battlecruiser Armor II','Battlecruiser Armor III'],
    exclusion : [],
  },
  {
    name : 'CA',
    hull : ['Coastal Defense Ship','Early Cruiser Hull','1936 Cruiser Hull','1940 Cruiser Hull','1944 Cruiser Hull','Torpedo Cruiser','Panzerschiff'],
    condition : ['Heavy Battery I','Heavy Battery II','Heavy Battery III','Heavy Battery IV','Heavy Cruiser Battery I','Heavy Cruiser Battery II','Heavy Cruiser Battery III','Heavy Cruiser Battery IV'],
    exclusion : [],
  },
  {
    name : 'CL',
    hull : ['Coastal Defense Ship','Early Cruiser Hull','1936 Cruiser Hull','1940 Cruiser Hull','1944 Cruiser Hull','Torpedo Cruiser'],
    condition : [],
    exclusion : ['Heavy Battery I','Heavy Battery II','Heavy Battery III','Heavy Battery IV','Heavy Cruiser Battery I','Heavy Cruiser Battery II','Heavy Cruiser Battery III','Heavy Cruiser Battery IV'],
  },
  {
    name : 'DD',
    hull : ['Early Destroyer Hull','1936 Destroyer Hull','1940 Destroyer Hull','1944 Destroyer Hull'],
    condition : [],
    exclusion : [],
  },
  {
    name : 'SS',
    hull : ['Early Submarine Hull','1936 Submarine Hull','1940 Submarine Hull','1944 Submarine Hull','Cruiser Submarine'],
    condition : [],
    exclusion : [],
  }
];

export const techs = [
  {
    name : 'magnetic_detonator',
    torpedo_attack : [
	  ['per', 0.2, 'CA'],
	  ['per', 0.2, 'CL'],
	  ['per', 0.2, 'DD'],
	  ['per', 0.2, 'SS']
    ]
  },
  {
    name : 'homing_torpedo',
    torpedo_attack : [
	  ['per', 0.2, 'CA'],
	  ['per', 0.2, 'CL'],
	  ['per', 0.2, 'DD'],
	  ['per', 0.2, 'SS']
    ]
  },
  {
    name : 'basic_light_shell',
    lg_attack : [
	  ['per', 0.05, 'CV'],
	  ['per', 0.05, 'BB'],
	  ['per', 0.05, 'BC'],
	  ['per', 0.05, 'CA'],
	  ['per', 0.05, 'CL'],
	  ['per', 0.05, 'DD']
    ],
    lg_armor_piercing : [
	  ['per', 0.05, 'CV'],
	  ['per', 0.05, 'BB'],
	  ['per', 0.05, 'BC'],
	  ['per', 0.05, 'CA'],
	  ['per', 0.05, 'CL'],
	  ['per', 0.05, 'DD']
    ]
  },
  {
    name : 'improved_light_shell',
    lg_attack : [
	  ['per', 0.05, 'CV'],
	  ['per', 0.05, 'BB'],
	  ['per', 0.05, 'BC'],
	  ['per', 0.05, 'CA'],
	  ['per', 0.05, 'CL'],
	  ['per', 0.05, 'DD']
    ],
    lg_armor_piercing : [
	  ['per', 0.05, 'CV'],
	  ['per', 0.05, 'BB'],
	  ['per', 0.05, 'BC'],
	  ['per', 0.05, 'CA'],
	  ['per', 0.05, 'CL'],
	  ['per', 0.05, 'DD']
    ]
  },
  {
    name : 'basic_medium_shell',
    lg_attack : [
	  ['per', 0.05, 'CL']
    ],
    lg_armor_piercing : [
	  ['per', 0.05, 'CL']
    ],
    hg_attack : [
	  ['per', 0.05, 'CA']
    ],
    hg_armor_piercing : [
	  ['per', 0.05, 'CA']
    ]
  },
  {
    name : 'improved_medium_shell',
    lg_attack : [
	  ['per', 0.05, 'CL']
    ],
    lg_armor_piercing : [
	  ['per', 0.05, 'CL']
    ],
    hg_attack : [
	  ['per', 0.05, 'CA']
    ],
    hg_armor_piercing : [
	  ['per', 0.05, 'CA']
    ]
  },
  {
    name : 'basic_heavy_shell',
    hg_attack : [
	  ['per', 0.05, 'BB'],
	  ['per', 0.05, 'BC']
    ],
    hg_armor_piercing : [
	  ['per', 0.05, 'BB'],
	  ['per', 0.05, 'BC']
    ]
  },
  {
    name : 'improved_heavy_shell',
    hg_attack : [
	  ['per', 0.05, 'BB'],
	  ['per', 0.05, 'BC']
    ],
    hg_armor_piercing : [
	  ['per', 0.05, 'BB'],
	  ['per', 0.05, 'BC']
    ]
  },
  {
    name : 'bracket_shooting',
    lg_attack : [
	  ['per', 0.05, 'BB'],
	  ['per', 0.05, 'BC']
    ],
    hg_attack : [
	  ['per', 0.05, 'BB'],
	  ['per', 0.05, 'BC']
    ]
  },
  {
    name : 'ladder_shooting',
    lg_attack : [
	  ['per', 0.1, 'BB'],
	  ['per', 0.1, 'BC'],
	  ['per', 0.05, 'CA']
    ],
    hg_attack : [
	  ['per', 0.1, 'BB'],
	  ['per', 0.1, 'BC'],
	  ['per', 0.05, 'CA']
    ]
  },
  {
    name : 'shell_dyes',
    lg_attack : [
	  ['per', 0.15, 'BB'],
	  ['per', 0.15, 'BC'],
	  ['per', 0.1, 'CA'],
	  ['per', 0.05, 'CL'],
	  ['per', 0.05, 'DD']
    ],
    hg_attack : [
	  ['per', 0.15, 'BB'],
	  ['per', 0.15, 'BC'],
	  ['per', 0.1, 'CA']
    ]
  },
  {
    name : 'improved_submarine_mine_laying',
    mines_planting : [
	  ['add', 0.2, 'SS']
    ]
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {

/*Variable Definition*/

  // Currently selected hull, by number id
  set = 0;

  /*Hull IDs
    0 - Early DD
    1 - 36 DD
    2 - 40 DD
    3 - 44 DD

    4 - Coastal Defense Ship
    5 - Early Cruiser
    6 - 36 Cruiser
    7 - 40 Cruiser
    8 - 44 Cruiser
    9 - Torpedo Cruiser
    10 - Panzerschiff

    11 - Pre-Dreadnought
    12 - Early BB
    13 - 36 BB
    14 - 40 BB
    15 - 44 BB
    16 - SH BB

    17 - Early SS
    18 - 36 SS
    19 - 40 SS
    20 - 44 SS
    21 - Cruiser Submarine

    22 - Converted Cruiser
    23 - Converted BB
    24 - 36 CV
    25 - 40 CV
    26 - 44 CV

  */

  //Base stats table per hull in hull index order. Refer to the above commentary for hull index, or to the return() function if said commentary is not up-to-date
  naval_speed = [
    25, 25, 25, 25,
    15, 20, 25, 27, 28, 25, 20,
    13, 20, 22, 24, 26, 22,
    14, 14, 15, 16, 11,
    20, 23, 26, 26, 26
  ];

  naval_range = [
    1500, 1800, 2000, 2500,
    1500, 2500, 3000, 4000, 4500, 4000, 7500,
    2250, 3000, 3500, 4000, 4500, 4500,
    2500, 4000, 5000, 6000, 5000,
    4000, 4000, 3000, 4000, 5000
  ];
  
  max_organisation = [
    40, 40, 40, 40,
    40, 40, 40, 40, 40, 40, 40,
    40, 40, 40, 40, 40, 40,
    40, 40, 40, 40, 40,
    40, 40, 40, 40, 40
  ];
  
  max_strength = [
    25, 40, 50, 60,
    100, 100, 110, 120, 130, 140, 220,
    300, 350, 370, 400, 450, 700,
    10, 20, 30, 35, 30,
    125, 325, 250, 325, 350
  ];
  
  reliability = [
    0.8, 0.85, 0.9, 0.92,
    0.8, 0.8, 0.85, 0.9, 0.95, 0.9, 0.8,
    0.65, 0.8, 0.85, 0.9, 0.95, 0.8,
    0.6, 0.7, 0.75, 0.8, 0.75,
    0.65, 0.65, 0.7, 0.75, 0.8
  ];
  
  supply_consumption = [
    0.01, 0.01, 0.01, 0.01,
    0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, // Woraround for CA and CL having different supply values
    0.14, 0.14, 0.14, 0.14, 0.14, 0.14,       // Side effect of previous line
    0.01, 0.01, 0.01, 0.01, 0.01,
    0.3, 0.3, 0.3, 0.3, 0.3
  ];
  
  manpower = [
    250, 325, 400, 500,
    1800, 600, 800, 1200, 1400, 960, 1800,
    3200, 4000, 5200, 6000, 6000, 9000,
    200, 200, 200, 200, 200,
    1000, 5000, 4500, 5000, 5500
  ];
  
  carrier_size = [
    0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  lg_attack = [
    0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  lg_armor_piercing = [
    0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  hg_attack = [
    0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  hg_armor_piercing = [
    0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  torpedo_attack = [
    0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  sub_attack = [
    1, 1, 1, 1,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  armor_value = [
    0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  anti_air_attack = [
    0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  fuel_consumption = [
    0, 0, 0, 0,
    20, 20, 20, 20, 20, 20, 20,
    67, 67, 67, 67, 67, 75,
    1, 1, 1, 1, 1,
    87, 87, 87, 87, 87
  ];
  
  surface_visibility = [
    10, 10, 10, 10,
    20, 15, 15, 15, 15, 15, 22,
    20, 20, 20, 20, 20, 20,
    1, 1, 1, 1, 1,
    30, 30, 30, 30, 30
  ];
  
  surface_detection = [
    20, 20, 20, 20,
    20, 20, 20, 20, 20, 20, 20,
    20, 20, 20, 20, 20, 20,
    20, 20, 20, 20, 20,
    20, 20, 20, 20, 20
  ];
  
  sub_visibility = [
    0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    25, 20, 15, 12, 20,
    0, 0, 0, 0, 0
  ];
  
  sub_detection = [
    1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1,
    0, 0, 0, 0, 0,
    5, 5, 5, 5, 5
  ];
  
  mines_planting = [
    0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  mines_sweeping = [
    0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  build_cost_ic = [
    400, 500, 550, 600,
    3500, 1800, 1900, 2000, 2100, 1700, 3500,
    3000, 3300, 3400, 3500, 3600, 5500,
    220, 250, 320, 450, 390,
    2700, 2700, 2450, 2600, 325
  ];
  
  steel = [
    2, 2, 3, 4,
    3, 1, 2, 2, 3, 3, 3,
    1, 1, 1, 1, 1, 1,
    1, 2, 2, 3, 2,
    3, 4, 3, 4, 4
  ];
  
  chromium = [
    0, 0, 0, 1,
    0, 0, 0, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 1,
    0, 0, 0, 1, 0,
    1, 1, 1, 1, 2
  ];

  //Stat Addition per equipment piece
  add = {
    naval_speed : {Light_Engine_1:5, Light_Engine_2:5, Light_Engine_3:5, Light_Engine_4:5,
      Submarine_Engine_1:5, Submarine_Engine_2:5, Submarine_Engine_3:5, Submarine_Engine_4:5,
      Cruiser_Engine_1:5, Cruiser_Engine_2:6, Cruiser_Engine_3:7, Cruiser_Engine_4:7,
      Heavy_Engine_1:7, Heavy_Engine_2:10, Heavy_Engine_3:11, Heavy_Engine_4:12,
      Carrier_Engine_1:5, Carrier_Engine_2:5, Carrier_Engine_3:5, Carrier_Engine_4:5},
    naval_range : {Extra_Fuel_Tank:1000},
    max_organisation : {Fleet_in_Being_Doctrine:{CV:30, BB:60, BC:40, CA:40, CL:20, DD:60, SS:40},
      Trade_Interdiction_Doctrine:{CV:60, BB:50, BC:40, CA:40, CL:30, DD:10, SS:50},
      Base_Strike_Doctrine:{CV:120, BB:20, CL:60, DD:50, SS:40}},
    max_strength : {Carrier_Armor:25},
    reliability : {},
    supply_consumption : {},
    manpower : {Hangar_Space:500},
    carrier_size : {Hangar_Space:20},
    lg_attack : {Light_Battery_1:1, Light_Battery_2:1.5, Light_Battery_3:2, Light_Battery_4:3, DP_Light_Battery:3, 
      Light_Cruiser_Battery_1:4, Light_Cruiser_Battery_2:5, Light_Cruiser_Battery_3:6, Light_Cruiser_Battery_4:7.5,
      Secondary_Battery_1:3, Secondary_Battery_2:4, DP_Secondary_Battery:4.5},
    lg_armor_piercing : {},
    hg_attack : {Heavy_Battery_1:11, Heavy_Battery_2:12, Heavy_Battery_3:13, Heavy_Battery_4:15, SH_Battery:16, 
      Heavy_Cruiser_Battery_1:6.75, Heavy_Cruiser_Battery_2:7.25, Heavy_Cruiser_Battery_3:7.75, Heavy_Cruiser_Battery_4:9},
    hg_armor_piercing : {},
    torpedo_attack : {Torpedo_Launcher_1:18, Torpedo_Launcher_2:27, Torpedo_Launcher_3:36, Torpedo_Launcher_4:45,
      Torpedo_Tubes_1:14, Torpedo_Tubes_2:18, Torpedo_Tubes_3:22, Torpedo_Tubes_4:28},
    sub_attack : {Depth_Charge_1:8, Depth_Charge_2:12, Depth_Charge_3:16, Depth_Charge_4:20},
    armor_value : {Battleship_Armor_1:26, Battleship_Armor_2:31, Battleship_Armor_3:40, SH_Battleship_Armor:55,
      Battlecruiser_Armor_1:20, Battlecruiser_Armor_2:25, Battlecruiser_Armor_3:30,
      Cruiser_Armor_1:6, Cruiser_Armor_2:8, Cruiser_Armor_3:10, Cruiser_Armor_4:12,
      Carrier_Armor:5},
    anti_air_attack : {DP_Light_Battery:3,
      DP_Secondary_Battery:2.5,
      Anti_Air_1:1.5, Anti_Air_2:2, Anti_Air_3:3, Anti_Air_4:4},
    fuel_consumption : {Light_Engine_1:7, Light_Engine_2:8, Light_Engine_3:10, Light_Engine_4:10,
      Submarine_Engine_1:7, Submarine_Engine_2:8, Submarine_Engine_3:10, Submarine_Engine_4:10,
      Cruiser_Engine_1:12, Cruiser_Engine_2:16, Cruiser_Engine_3:20, Cruiser_Engine_4:24,
      Heavy_Engine_1:20, Heavy_Engine_2:25, Heavy_Engine_3:30, Heavy_Engine_4:35,
      Carrier_Engine_1:12, Carrier_Engine_2:16, Carrier_Engine_3:20, Carrier_Engine_4:24},
    surface_visibility : {Heavy_Cruiser_Battery_1:3.5, Heavy_Cruiser_Battery_2:3.5, Heavy_Cruiser_Battery_3:3.5, Heavy_Cruiser_Battery_4:3.5,
      Battleship_Armor_1:10, Battleship_Armor_2:10, Battleship_Armor_3:10, SH_Battleship_Armor:10,
      Battlecruiser_Armor_1:8, Battlecruiser_Armor_2:8, Battlecruiser_Armor_3:8},
    surface_detection : {Radar_1:5, Radar_2:7, Radar_3:12, Radar_4:18,
      Floatplane_Catapult_1:7, Floatplane_Catapult_2:10},
    sub_visibility : {},
    sub_detection : {Radar_2:2, Radar_3:6, Radar_4:14,
      Floatplane_Catapult_1:2.5, Floatplane_Catapult_2:3.5,
      Sonar_1:4, Sonar_2:7},
    mines_planting : {Minelaying_Rails:1, Minelaying_Tubes:1},
    mines_sweeping : {Minesweeping_Gears:1},
    build_cost_ic : {Light_Battery_1:90, Light_Battery_2:120, Light_Battery_3:150, Light_Battery_4:175, DP_Light_Battery:300, 
      Heavy_Battery_1:1275, Heavy_Battery_2:1350, Heavy_Battery_3:1450, Heavy_Battery_4:1650, SH_Battery:1800, 
      Heavy_Cruiser_Battery_1:750, Heavy_Cruiser_Battery_2:800, Heavy_Cruiser_Battery_3:825, Heavy_Cruiser_Battery_4:900, 
      Light_Cruiser_Battery_1:225, Light_Cruiser_Battery_2:275, Light_Cruiser_Battery_3:300, Light_Cruiser_Battery_4:350,
      Secondary_Battery_1:180, Secondary_Battery_2:240, DP_Secondary_Battery:290,
      Anti_Air_1:90, Anti_Air_2:120, Anti_Air_3:150, Anti_Air_4:190,
      Fire_Control_0:60, Fire_Control_1:90, Fire_Control_2:120, Fire_Control_3:180,
      Radar_1:80, Radar_2:110, Radar_3:140, Radar_4:170,
      Light_Engine_1:90, Light_Engine_2:120, Light_Engine_3:150, Light_Engine_4:170,
      Submarine_Engine_1:90, Submarine_Engine_2:120, Submarine_Engine_3:150, Submarine_Engine_4:170,
      Cruiser_Engine_1:400, Cruiser_Engine_2:480, Cruiser_Engine_3:550, Cruiser_Engine_4:670,
      Heavy_Engine_1:1800, Heavy_Engine_2:2200, Heavy_Engine_3:2600, Heavy_Engine_4:3000,
      Carrier_Engine_1:400, Carrier_Engine_2:480, Carrier_Engine_3:550, Carrier_Engine_4:670,
      Torpedo_Launcher_1:90, Torpedo_Launcher_2:120, Torpedo_Launcher_3:150, Torpedo_Launcher_4:180,
      Torpedo_Tubes_1:80, Torpedo_Tubes_2:100, Torpedo_Tubes_3:120, Torpedo_Tubes_4:140,
      Minelaying_Rails:90, Minelaying_Tubes:90, Minesweeping_Gears:30,
      Depth_Charge_1:90, Depth_Charge_2:120, Depth_Charge_3:150, Depth_Charge_4:180,
      Snorkel_1:50, Snorkel_2:70,
      Floatplane_Catapult_1:150, Floatplane_Catapult_2:170,
      Hangar_Space:2000,
      Sonar_1:40, Sonar_2:60},
    steel : {Light_Battery_4:1, DP_Light_Battery:1, 
      Heavy_Battery_1:1, Heavy_Battery_2:1, Heavy_Battery_3:1, Heavy_Battery_4:1, SH_Battery:1, 
      Heavy_Cruiser_Battery_1:1, Heavy_Cruiser_Battery_2:1, Heavy_Cruiser_Battery_3:2, Heavy_Cruiser_Battery_4:2,
      Light_Cruiser_Battery_3:1, Light_Cruiser_Battery_4:1,
      Hangar_Space:1,
      Battleship_Armor_1:1, Battleship_Armor_2:1, Battleship_Armor_3:1, SH_Battleship_Armor:2,
      Battlecruiser_Armor_2:1, Battlecruiser_Armor_2:1,
      Cruiser_Armor_2:1, Cruiser_Armor_3:1, Cruiser_Armor_4:2,
      Carrier_Armor:1},
    chromium : {Heavy_Battery_4:1, SH_Battery:1,
      Battleship_Armor_3:1, SH_Battleship_Armor:1,
      Battlecruiser_Armor_3:1,
      Cruiser_Armor_3:1, Cruiser_Armor_4:1}
  }

  //Stat Average per equipment piece
  avg = {
    naval_speed : {},
    naval_range : {},
    max_organisation : {},
    max_strength : {Light_Cruiser_Battery_1:20, Light_Cruiser_Battery_2:20, Light_Cruiser_Battery_3:20, Light_Cruiser_Battery_4:20},
    reliability : {},
    supply_consumption : {Heavy_Battery_1:0.06, Heavy_Battery_2:0.06, Heavy_Battery_3:0.06, Heavy_Battery_4:0.06,             // Woraround for CA and CL having different supply values
      Heavy_Cruiser_Battery_1:0.06, Heavy_Cruiser_Battery_2:0.06, Heavy_Cruiser_Battery_3:0.06, Heavy_Cruiser_Battery_4:0.06, // Woraround for CA and CL having different supply values
      Battlecruiser_Armor_1:-0.08, Battlecruiser_Armor_2:-0.08, Battlecruiser_Armor_3:-0.08},                                 // Woraround for BB and BC having different supply values
    manpower : {},
    carrier_size : {},
    lg_attack : {},
    lg_armor_piercing : {Light_Battery_1:1, Light_Battery_2:2, Light_Battery_3:2.5, Light_Battery_4:2.5, DP_Light_Battery:2,
      Light_Cruiser_Battery_1:5.5, Light_Cruiser_Battery_2:7, Light_Cruiser_Battery_3:8, Light_Cruiser_Battery_4:9,
      Secondary_Battery_1:5.5, Secondary_Battery_2:7, DP_Secondary_Battery:8},
    hg_attack : {},
    hg_armor_piercing : {Heavy_Battery_1:31, Heavy_Battery_2:36, Heavy_Battery_3:40, Heavy_Battery_4:43, SH_Battery:50, 
      Heavy_Cruiser_Battery_1:18, Heavy_Cruiser_Battery_2:21, Heavy_Cruiser_Battery_3:24, Heavy_Cruiser_Battery_4:27},
    torpedo_attack : {},
    sub_attack : {},
    armor_value : {},
    anti_air_attack : {},
    fuel_consumption : {},
    surface_visibility : {},
    surface_detection : {},
    sub_visibility : {},
    sub_detection : {},
    mines_planting : {},
    mines_sweeping : {},
    build_cost_ic : {},
    steel : {},
    chromium : {}
  }

  //Stat Percentage per equipment piece
  per = {
    naval_speed : {Raiding_fleet_Designer:{CV:0.1, BB:0.1, BC:0.1, CA:0.1, CL:0.1, DD:0.1, SS:0.1},
      Convoy_escort_fleet_Designer:{CL:0.1, DD:0.1},
      Mediterranean_fleet_Designer:{BB:0.1, BC:0.1, CA:0.1, CL:0.1, DD:0.1},
      Light_Battery_1:-0.01, Light_Battery_2:-0.01, Light_Battery_3:-0.01, Light_Battery_4:-0.02, DP_Light_Battery:-0.02, 
      Heavy_Battery_1:-0.05, Heavy_Battery_2:-0.08, Heavy_Battery_3:-0.09, Heavy_Battery_4:-0.10, SH_Battery:-0.10, 
      Heavy_Cruiser_Battery_1:-0.04, Heavy_Cruiser_Battery_2:-0.06, Heavy_Cruiser_Battery_3:-0.07, Heavy_Cruiser_Battery_4:-0.08,
      Light_Cruiser_Battery_1:-0.03, Light_Cruiser_Battery_2:-0.04, Light_Cruiser_Battery_3:-0.04, Light_Cruiser_Battery_4:-0.05,
      Secondary_Battery_1:-0.02, Secondary_Battery_2:-0.02, DP_Secondary_Battery:-0.03,
      Anti_Air_1:-0.01, Anti_Air_2:-0.01, Anti_Air_3:-0.01, Anti_Air_4:-0.01,
      Light_Engine_1:0.21, Light_Engine_2:0.32, Light_Engine_3:0.42, Light_Engine_4:0.47,
      Submarine_Engine_1:0.05, Submarine_Engine_2:0.1, Submarine_Engine_3:0.15, Submarine_Engine_4:0.2,
      Cruiser_Engine_1:0.2, Cruiser_Engine_2:0.3, Cruiser_Engine_3:0.35, Cruiser_Engine_4:0.4,
      Heavy_Engine_1:0.2, Heavy_Engine_2:0.3, Heavy_Engine_3:0.4, Heavy_Engine_4:0.45,
      Carrier_Engine_1:0.2, Carrier_Engine_2:0.3, Carrier_Engine_3:0.4, Carrier_Engine_4:0.45,
      Torpedo_Launcher_1:-0.01, Torpedo_Launcher_2:-0.01, Torpedo_Launcher_3:-0.01, Torpedo_Launcher_4:-0.01,
      Minelaying_Rails:-0.02, Minesweeping_Gears:-0.02,
      Depth_Charge_1:-0.02, Depth_Charge_2:-0.02, Depth_Charge_3:-0.02, Depth_Charge_4:-0.02,
      Floatplane_Catapult_1:-0.01, Floatplane_Catapult_2:-0.01,
      Hangar_Space:-0.05,
      Battleship_Armor_1:-0.2, Battleship_Armor_2:-0.2, Battleship_Armor_3:-0.2, SH_Battleship_Armor:-0.25,
      Battlecruiser_Armor_1:-0.1, Battlecruiser_Armor_2:-0.1, Battlecruiser_Armor_3:-0.1,
      Cruiser_Armor_1:-0.05, Cruiser_Armor_2:-0.075, Cruiser_Armor_3:-0.1, Cruiser_Armor_4:-0.125,
      Carrier_Armor:-0.05},
    naval_range : {Pacific_fleet_Designer:{CV:0.25, BB:0.25, BC:0.25, CA:0.25, CL:0.25, DD:0.25, SS:0.25},
      Convoy_escort_fleet_Designer:{CL:0.3, DD:0.3},
      Coastal_defence_fleet_Designer:{CV:-0.5, BB:-0.5, BC:-0.5, CA:-0.5, CL:-0.5, DD:-0.5, SS:-0.5},
      Mediterranean_fleet_Designer:{BB:-0.25, BC:-0.25, CA:-0.25, CL:-0.25, DD:-0.25},
      Romanian_coastal_defence_fleet_Designer:{CA:-0.5, CL:-0.5, DD:-0.5},
      Romanian_Black_Sea_dominance_Designer:{BB:-0.5, BC:-0.5, CA:-0.5, CL:-0.5}},
    max_organisation : {},
    max_strength : {Trade_Interdiction_Doctrine:{SS:0.2},
      Atlantic_fleet_Designer:{CV:0.1},
      Heavy_Cruiser_Battery_1:0.4, Heavy_Cruiser_Battery_2:0.4, Heavy_Cruiser_Battery_3:0.4, Heavy_Cruiser_Battery_4:0.4,
      Battleship_Armor_1:0.05, Battleship_Armor_2:0.1, Battleship_Armor_3:0.15, SH_Battleship_Armor:0.1,
      Battlecruiser_Armor_1:0.05, Battlecruiser_Armor_2:0.1, Battlecruiser_Armor_3:0.15,
      Cruiser_Armor_2:0.05, Cruiser_Armor_3:0.1, Cruiser_Armor_4:0.15},
    reliability : {Fire_Control_1:-0.05, Fire_Control_2:-0.075, Fire_Control_3:-0.1,
      Light_Engine_1:-0.2, Light_Engine_2:-0.2, Light_Engine_3:-0.2, Light_Engine_4:-0.2,
      Submarine_Engine_1:-0.2, Submarine_Engine_2:-0.2, Submarine_Engine_3:-0.2, Submarine_Engine_4:-0.2,
      Cruiser_Engine_1:-0.2, Cruiser_Engine_2:-0.2, Cruiser_Engine_3:-0.2, Cruiser_Engine_4:-0.2,
      Heavy_Engine_1:-0.2, Heavy_Engine_2:-0.2, Heavy_Engine_3:-0.2, Heavy_Engine_4:-0.2,
      Carrier_Engine_1:-0.2, Carrier_Engine_2:-0.2, Carrier_Engine_3:-0.2, Carrier_Engine_4:-0.2},
    supply_consumption : {},
    manpower : {},
    carrier_size : {Pacific_fleet_Designer:{CV:0.25},
      Raiding_fleet_Designer:{CV:-0.1},
      Coastal_defence_fleet_Designer:{CV:-0.2}},
    lg_attack : {Romanian_coastal_defence_fleet_Designer:{CA:0.1, CL:0.1, DD:0.1},
      Fire_Control_0:0.05, Fire_Control_1:0.1, Fire_Control_2:0.15, Fire_Control_3:0.2,
      Radar_3:0.05, Radar_4:0.1},
    lg_armor_piercing : {},
    hg_attack : {Fleet_in_Being_Doctrine:{BB:0.1, BC:0.1, CA:0.1},
      Atlantic_fleet_Designer:{BB:0.1, BC:0.1, CA:0.1},
      Battlefleet_Designer:{BB:0.15, BC:0.15, CA:0.15},
      Raiding_fleet_Designer:{BB:-0.1, BC:-0.1, CA:-0.1},
      Coastal_defence_fleet_Designer:{BB:-0.2, BC:-0.2, CA:-0.2},
      Romanian_Black_Sea_dominance_Designer:{BB:0.2, BC:0.2, CA:0.2},
      Fire_Control_0:0.05, Fire_Control_1:0.1, Fire_Control_2:0.15, Fire_Control_3:0.2,
      Radar_3:0.05, Radar_4:0.1},
    hg_armor_piercing : {},
    torpedo_attack : {Trade_Interdiction_Doctrine:{SS:0.1},
      Battlefleet_Designer:{Cl:0.25, DD:0.25}},
    sub_attack : {},
    armor_value : {Fleet_in_Being_Doctrine:{BB:0.1, BC:0.1, CA:0.1},
      Trade_Interdiction_Doctrine:{BB:0.1, BC:0.1, CA:0.1},
      Base_Strike_Doctrine:{BB:0.1, BC:0.1, CA:0.1},
      Pacific_fleet_Designer:{CV:-0.15},
      Atlantic_fleet_Designer:{CV:0.5, BB:0.1, BC:0.1, CA:0.1},
      Battlefleet_Designer:{BB:0.15, BC:0.15, CA:0.15},
      Coastal_defence_fleet_Designer:{BB:-0.2, BC:-0.2, CA:-0.2},
      Romanian_Black_Sea_dominance_Designer:{BB:0.2, BC:0.2, CA:0.2, CL:0.2}},
    anti_air_attack : {Fleet_in_Being_Doctrine:{CV:0.1, BB:0.1, BC:0.1, CA:0.1, CL:0.1, DD:0.1},
      Anti_Air_1:0.1, Anti_Air_2:0.1, Anti_Air_3:0.125, Anti_Air_4:0.15,
      Fire_Control_1:0.1, Fire_Control_2:0.15, Fire_Control_3:0.2,
      Radar_3:0.05, Radar_4:0.1},
    fuel_consumption : {},
    surface_visibility : {Trade_Interdiction_Doctrine:{BB:-0.25, BC:-0.25, CL:-0.1},
      Raiding_fleet_Designer:{CV:-0.1, BB:-0.1, BC:-0.1, CA:-0.1, CL:-0.1, DD:-0.1, SS:-0.1}},
    surface_detection : {Fleet_in_Being_Doctrine:{CL:0.1, DD:0.1, SS:0.25},
      Trade_Interdiction_Doctrine:{BB:0.25, BC:0.4, CA:0.3, CL:0.3, SS:0.5},
      Base_Strike_Doctrine:{CL:0.25, SS:0.25}},
    sub_visibility : {Raiding_fleet_Designer:{SS:-0.1},
      Submarine_Engine_2:-0.05, Submarine_Engine_3:-0.1, Submarine_Engine_4:-0.015,
      Snorkel_1:-0.1, Snorkel_2:-0.2,},
    sub_detection : {Fleet_in_Being_Doctrine:{CV:0.5, CL:0.35, DD:0.3},
      Trade_Interdiction_Doctrine:{DD:0.05},
      Base_Strike_Doctrine:{DD:0.25},
      Battlefleet_Designer:{CL:-0.25, DD:-0.25},
      Convoy_escort_fleet_Designer:{CL:0.1, DD:0.1}},
    mines_planting : {},
    mines_sweeping : {},
    build_cost_ic : {Convoy_escort_fleet_Designer:{CL:0.1, DD:0.1},
      Coastal_defence_fleet_Designer:{CV:-0.25, BB:-0.25, BC:-0.25, CA:-0.25, CL:-0.25, DD:-0.25, SS:-0.25},
      Romanian_coastal_defence_fleet_Designer:{CA:-0.2, CL:-0.2, DD:-0.2},
      Anti_Air_1:0.025, Anti_Air_2:0.025, Anti_Air_3:0.025, Anti_Air_4:0.025,
      Extra_Fuel_Tank:0.05,
      Battleship_Armor_1:0.2, Battleship_Armor_2:0.2, Battleship_Armor_3:0.2, SH_Battleship_Armor:0.25,
      Battlecruiser_Armor_1:0.075, Battlecruiser_Armor_2:0.075, Battlecruiser_Armor_3:0.075,
      Cruiser_Armor_1:0.1, Cruiser_Armor_2:0.15, Cruiser_Armor_3:0.2, Cruiser_Armor_4:0.25,
      Carrier_Armor:0.1},
    steel : {},
    chromium : {}
  }
  

  /* 
  End of variable definition. Start of the constructor 
  */

  constructor() {
    super();
  }

/*Called Functions*/

  // Test function for any call by html objects
  func() {
    alert("clicked")
  }

  // Test function to log the value of a select object
  func1() {
    var d = document.getElementById("selectTest").value
    console.log(d)
  }

  // Swapper is called by the Swap Hull button and reloads the html elements corresponding to the hull currently selected in selectTest. Swapper does NOT reload the page
  swapper(){
    console.log(this.set)
    this.set = document.getElementById("selectTest").value
    render(<App />, document.getElementById('root'));
  }

  // ClassCheck returns a string of two characters that correspond to the class of the vessel
  ClassChecker(){

    var equ = {}
    var slotid = ""
    var s = "";
    for(var i = 1; i < 15; i++){
      slotid = "slot".concat(i.toString());
      s = document.getElementById(slotid).value
      if(Object.keys(equ).indexOf(s)!=-1){
        equ[s] = equ[s] + 1;
      } else {
        equ[s] = 1;
      }
    }

    if(this.set>=0 && this.set<4){
      return("DD")
    }
    if(this.set>=4 && this.set<11){
      if(Object.keys(equ).indexOf("Heavy_Cruiser_Battery_1") != -1 || Object.keys(equ).indexOf("Heavy_Cruiser_Battery_2") != -1 || Object.keys(equ).indexOf("Heavy_Cruiser_Battery_3") != -1 || Object.keys(equ).indexOf("Heavy_Cruiser_Battery_4") != -1 || 
      Object.keys(equ).indexOf("Heavy_Battery_1") != -1 || Object.keys(equ).indexOf("Heavy_Battery_2") != -1 || Object.keys(equ).indexOf("Heavy_Battery_3") != -1 || Object.keys(equ).indexOf("Heavy_Battery_4") != -1){
        return("CA")
      } else {
        return("CL")
      }
    }
    if(this.set>=11 && this.set<17){
      if(Object.keys(equ).indexOf("Battlecruiser_Armor_1") != -1 || Object.keys(equ).indexOf("Battlecruiser_Armor_2") != -1 || Object.keys(equ).indexOf("Battlecruiser_Armor_3") != -1){
        return("BC")
      } else {
        return("BB")
      }
    }
    if(this.set>=17 && this.set<22){
      return("SS")
    }
    if(this.set>=22 && this.set<27){
      return("CV")
    }
  }


  // Refresh recalculates the stats. It may be called at any point and should be called immediately after each change, ideally, but can also be called manually
  refresh(){

    // Pull out the base stats of the currently selected Hull

    var finalstat = {};

    finalstat["naval_speed"] = this.naval_speed[this.set];
    finalstat["naval_range"] = this.naval_range[this.set];
    finalstat["max_organisation"] = this.max_organisation[this.set];
    finalstat["max_strength"] = this.max_strength[this.set];
    finalstat["reliability"] = this.reliability[this.set];
    finalstat["supply_consumption"] = this.supply_consumption[this.set];
    finalstat["manpower"] = this.manpower[this.set];
    finalstat["carrier_size"] = this.carrier_size[this.set];
    finalstat["lg_attack"] = this.lg_attack[this.set];
    finalstat["lg_armor_piercing"] = this.lg_armor_piercing[this.set];
    finalstat["hg_attack"] = this.hg_attack[this.set];
    finalstat["hg_armor_piercing"] = this.hg_armor_piercing[this.set];
    finalstat["torpedo_attack"] = this.torpedo_attack[this.set];
    finalstat["sub_attack"] = this.sub_attack[this.set];
    finalstat["armor_value"] = this.armor_value[this.set];
    finalstat["anti_air_attack"] = this.anti_air_attack[this.set];
    finalstat["fuel_consumption"] = this.fuel_consumption[this.set];
    finalstat["surface_visibility"] = this.surface_visibility[this.set];
    finalstat["surface_detection"] = this.surface_detection[this.set];
    finalstat["sub_visibility"] = this.sub_visibility[this.set];
    finalstat["sub_detection"] = this.sub_detection[this.set];
    finalstat["mines_planting"] = this.mines_planting[this.set];
    finalstat["mines_sweeping"] = this.mines_sweeping[this.set];
    finalstat["build_cost_ic"] = this.build_cost_ic[this.set];
    finalstat["steel"] = this.steel[this.set];
    finalstat["chromium"] = this.chromium[this.set];

    // Gather the mounted equipment and count them in a dictionary of which a key is an equipment id and the associated value is the number of times it is mounted

    var equ = {}
    var slotid = ""
    var s = "";
    for(var i = 1; i < 15; i++){
      slotid = "slot".concat(i.toString());
      s = document.getElementById(slotid).value
      if(Object.keys(equ).indexOf(s)!=-1){
        equ[s] = equ[s] + 1;
      } else {
        equ[s] = 1;
      }
    }

    // Search the add table for equipment ids present in equ and modifies the stats accordingly

    //iterates on all the keys of add ; that is, each existing stat
    for(var statid of Object.keys(this.add)){
      var line = this.add[statid]

      //iterates on all the keys of equ ; that is, each mounted equipment piece
      for(var equid of Object.keys(equ)){

        //checks to see if the current equipment piece modifies the currenty examined stat
        if(Object.keys(line).indexOf(equid) != -1){

          var mod = line[equid];

          //apply the stat change as many times as the equipment piece is mounted on the hull
          for(var i = 0; i < equ[equid]; i++){
            finalstat[statid] = finalstat[statid] + mod;
          }

        }
      }
    }

    // Search the avg table for equipment ids present in equ and modifies the stats accordingly

    //iterates on all the keys of avg ; that is, each existing stat
    for(var statid of Object.keys(this.avg)){
      var line = this.avg[statid]

      //If the initial value is not 0, it will count towards the average ; otherwise, it will be ignored
      var tempavgstat = [];
      if(finalstat[statid] != 0){
        tempavgstat.push(finalstat[statid])
      }

      //iterates on all the keys of equ ; that is, each mounted equipment piece
      for(var equid of Object.keys(equ)){

        //checks to see if the current equipment piece modifies the currenty examined stat
        if(Object.keys(line).indexOf(equid) != -1){

          var mod = line[equid];

          //Remember the stat change as many times as the equipment piece is mounted on the hull
          for(var i = 0; i < equ[equid]; i++){
            tempavgstat.push(mod);
          }

        }
      }

      //Averages all the remembered stat change and saves the new value in finalstat
      if(tempavgstat.length!=0){
        var finalValue = 0;
        for(var j = 0; j < tempavgstat.length; j++){
          finalValue = finalValue + tempavgstat[j];
        }
        finalValue = finalValue / tempavgstat.length
        finalstat[statid] = finalValue
      }

    }

    // Search the per table for equipment ids present in equ and modifies the stats accordingly

    //iterates on all the keys of per ; that is, each existing stat
    for(var statid of Object.keys(this.per)){
      var line = this.per[statid]
      var rememberedValue = finalstat[statid];

      //iterates on all the keys of equ ; that is, each mounted equipment piece
      for(var equid of Object.keys(equ)){

        //checks to see if the current equipment piece modifies the currenty examined stat
        if(Object.keys(line).indexOf(equid) != -1){

          var mod = line[equid]*rememberedValue;

          //apply the stat change as many times as the equipment piece is mounted on the hull
          for(var i = 0; i < equ[equid]; i++){
            finalstat[statid] = finalstat[statid] + mod;
          }

        }
      }
    }

    // Search through add and per again to apply doctrine and designer effect if applicable

    var cla = this.ClassChecker();
    var des = document.getElementById("desi").value
    var doc = document.getElementById("doct").value

    //iterates on all the keys of add ; that is, each existing stat
    for(var statid of Object.keys(this.add)){
      var line = this.add[statid]
      
      //checks to see if the current designer piece modifies the currenty examined stat
      if(Object.keys(line).indexOf(des) != -1){

        var mod = line[des];

        //Check the relevant modifier for the class of the concerned vessel, and applies it, if any
        if(Object.keys(mod).indexOf(cla) != -1){
          finalstat[statid] = finalstat[statid] + mod[cla];
        }

      }

      //checks to see if the current doctrine piece modifies the currenty examined stat
      if(Object.keys(line).indexOf(doc) != -1){

        var mod = line[doc];

        //Check the relevant modifier for the class of the concerned vessel, and applies it, if any
        if(Object.keys(mod).indexOf(cla) != -1){
          finalstat[statid] = finalstat[statid] + mod[cla];
        }

      }
    }

    //iterates on all the keys of per ; that is, each existing stat
    for(var statid of Object.keys(this.per)){
      var line = this.per[statid]
      var rememberedValue = finalstat[statid];
      
      //checks to see if the current designer piece modifies the currenty examined stat
      if(Object.keys(line).indexOf(des) != -1){

        var mod = line[des];

        //Check the relevant modifier for the class of the concerned vessel, and applies it, if any
        if(Object.keys(mod).indexOf(cla) != -1){
          finalstat[statid] = finalstat[statid] + (mod[cla]*rememberedValue);
        }

      }

      //checks to see if the current doctrine piece modifies the currenty examined stat
      if(Object.keys(line).indexOf(doc) != -1){
    

        var mod = line[doc];

        //Check the relevant modifier for the class of the concerned vessel, and applies it, if any
        if(Object.keys(mod).indexOf(cla) != -1){
          finalstat[statid] = finalstat[statid] + (mod[cla]*rememberedValue);
        }

      }
    }

    // Writes all the values into the html for the user to see

    document.getElementById('naval_speed').innerHTML = finalstat["naval_speed"];
    document.getElementById('naval_range').innerHTML = finalstat["naval_range"];
    document.getElementById('max_organisation').innerHTML = finalstat["max_organisation"];
    document.getElementById('max_strength').innerHTML = finalstat["max_strength"];
    document.getElementById('reliability').innerHTML = finalstat["reliability"];
    document.getElementById('supply_consumption').innerHTML = finalstat["supply_consumption"];
    document.getElementById('manpower').innerHTML = finalstat["manpower"];
    document.getElementById('carrier_size').innerHTML = finalstat["carrier_size"];
    document.getElementById('lg_attack').innerHTML = finalstat["lg_attack"];
    document.getElementById('lg_armor_piercing').innerHTML = finalstat["lg_armor_piercing"];
    document.getElementById('hg_attack').innerHTML = finalstat["hg_attack"];
    document.getElementById('hg_armor_piercing').innerHTML = finalstat["hg_armor_piercing"];
    document.getElementById('torpedo_attack').innerHTML = finalstat["torpedo_attack"];
    document.getElementById('sub_attack').innerHTML = finalstat["sub_attack"];
    document.getElementById('armor_value').innerHTML = finalstat["armor_value"];
    document.getElementById('anti_air_attack').innerHTML = finalstat["anti_air_attack"];
    document.getElementById('fuel_consumption').innerHTML = finalstat["fuel_consumption"];
    document.getElementById('surface_visibility').innerHTML = finalstat["surface_visibility"];
    document.getElementById('surface_detection').innerHTML = finalstat["surface_detection"];
    document.getElementById('sub_visibility').innerHTML = finalstat["sub_visibility"];
    document.getElementById('sub_detection').innerHTML = finalstat["sub_detection"];
    document.getElementById('mines_planting').innerHTML = finalstat["mines_planting"];
    document.getElementById('mines_sweeping').innerHTML = finalstat["mines_sweeping"];
    document.getElementById('build_cost_ic').innerHTML = finalstat["build_cost_ic"];
    document.getElementById('steel').innerHTML = finalstat["steel"];
    document.getElementById('chromium').innerHTML = finalstat["chromium"];
  }

  // Default render function that returns the html of the page. This function should NEVER BE CALLED ; to reload the page according to its return value, use: render(<App />, document.getElementById('root'))
  render() {

    var emptydiv = 
      <div>
      </div>
    ;

    var a =
      <div>
        <select id="selectTest">
          <option value="0">Early DD Hull</option>
          <option value="1">1936 DD Hull</option>
          <option value="2">1940 DD Hull</option>
          <option value="3">1944 DD Hull</option>
          <option value="4">Coastal Defense Ship</option>
          <option value="5">Early Cruiser Hull</option>
          <option value="6">1936 Cruiser Hull</option>
          <option value="7">1940 Cruiser Hull</option>
          <option value="8">1944 Cruiser Hull</option>
          <option value="9">Torpedo Cruiser</option>
          <option value="10">Panzerschiff</option>
          <option value="11">Pre-Dreadnought</option>
          <option value="12">Early BB Hull</option>
          <option value="13">1936 BB Hull</option>
          <option value="14">1940 BB Hull</option>
          <option value="15">1944 BB Hull</option>
          <option value="16">SH BB Hull</option>
          <option value="17">Early SS Hull</option>
          <option value="18">1936 SS Hull</option>
          <option value="19">1940 SS Hull</option>
          <option value="20">1944 SS Hull</option>
          <option value="21">Cruiser Submarine</option>
          <option value="22">Converted Cruiser Hull</option>
          <option value="23">Converted BB Hull</option>
          <option value="24">1936 CV Hull</option>
          <option value="25">1940 CV Hull</option>
          <option value="26">1944 CV Hull</option>
        </select>
        <button onClick={() => this.swapper()}> Swap hull </button>

        <br/>
        <br/>
      </div>
    ;

    var b =
      <div>
        <p>
        <label>Naval Speed : </label>
        <label id='naval_speed'></label>
        <label> | </label>

        <label>Naval Range : </label>
        <label id='naval_range'></label>
        <label> | </label>

        <label>Max Organization : </label>
        <label id='max_organisation'></label>
        <label> | </label>

        <label>Max Strength : </label>
        <label id='max_strength'></label>
        <label> | </label>

        <label>Reliability : </label>
        <label id='reliability'></label>
        <label> | </label>

        <label>Supply Consumption : </label>
        <label id='supply_consumption'></label>
        <label> | </label>

        <label>Manpower : </label>
        <label id='manpower'></label>
        <label> | </label>

        <label>Carrier Size : </label>
        <label id='carrier_size'></label>
        <label> | </label>
        </p>

        <p>
        <label>Light Attack : </label>
        <label id='lg_attack'></label>
        <label> | </label>

        <label>Light Armor Piercing : </label>
        <label id='lg_armor_piercing'></label>
        <label> | </label>

        <label>Heavy Attack : </label>
        <label id='hg_attack'></label>
        <label> | </label>

        <label>Heavy Armor Piercing : </label>
        <label id='hg_armor_piercing'></label>
        <label> | </label>

        <label>Torpedo Attack : </label>
        <label id='torpedo_attack'></label>
        <label> | </label>

        <label>Submarine Attack : </label>
        <label id='sub_attack'></label>
        <label> | </label>

        <label>Armor Value : </label>
        <label id='armor_value'></label>
        <label> | </label>

        <label>Anti Air Attack : </label>
        <label id='anti_air_attack'></label>
        <label> | </label>
        </p>

        <p>
        <label>Fuel Consumption : </label>
        <label id='fuel_consumption'></label>
        <label> | </label>

        <label>Surface Visibility : </label>
        <label id='surface_visibility'></label>
        <label> | </label>

        <label>Surface Detection : </label>
        <label id='surface_detection'></label>
        <label> | </label>

        <label>Submarine Visibility : </label>
        <label id='sub_visibility'></label>
        <label> | </label>

        <label>Submarine Detection : </label>
        <label id='sub_detection'></label>
        <label> | </label>

        <label>Mines Planting : </label>
        <label id='mines_planting'></label>
        <label> | </label>

        <label>Mines Sweeping : </label>
        <label id='mines_sweeping'></label>
        <label> | </label>

        <label>Build Cost : </label>
        <label id='build_cost_ic'></label>
        <label> | </label>
        </p>

        <label>Steel Cost : </label>
        <label id='steel'></label>
        <label> | </label>

        <label>Chromium Cost : </label>
        <label id='chromium'></label>
        <label> | </label>

        <p>
          <select id="doct">
          <option value="No_Doctrine">No doctrine</option>
          <option value="Trade_Interdiction_Doctrine">Trade interdiction</option>
          <option value="Fleet_in_Being_Doctrine">Fleet in being</option>
          <option value="Base_Strike_Doctrine">Base strike</option>
          </select>

          <select id="desi">
          <option value="No_Designer">No designer</option>
          <option value="Pacific_fleet_Designer">Pacific fleet designer</option>
          <option value="Atlantic_fleet_Designer">Atlantic fleet designer</option>
          <option value="Battlefleet_Designer">Battlefleet designer</option>
          <option value="Raiding_fleet_Designer">Raiding fleet designer</option>
          <option value="Convoy_escort_fleet_Designer">Convoy escort fleet designer</option>
          <option value="Coastal_defence_fleet_Designer">Coastal defence fleet designer</option>
          <option value="Mediterranean_fleet_Designer">Mediterranean fleet designer</option>
          <option value="Romanian_coastal_defence_fleet_Designer">Galati shipyard</option>
          <option value="Romanian_Black_Sea_dominance_Designer">Braila shipyards</option>
          </select>
        </p>

        <p><button onClick={() => this.refresh()}> Refresh Stats </button></p>
      </div>
    ;

    /* 
    HULL LIST WITH THEIR SLOTS AND ALL ; KEEP SEPARATE FROM REST OF THE CODE OR ITS GONNA BECOME UNREADABLY UGLY
    */

    //Hull inclusion template
    if (this.set == -2){
      var s = 
        <div></div>
      ;
    }

    //Early DD
    if(this.set == 0){
      var s =
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Minesweeping_Gears">Minesweeping Gears</option>
          <option value="Depth_Charge_1">Depth Charge 1</option>
          <option value="Depth_Charge_2">Depth Charge 2</option>
          <option value="Depth_Charge_3">Depth Charge 3</option>
          <option value="Depth_Charge_4">Depth Charge 4</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Minesweeping_Gears">Minesweeping Gears</option>
          <option value="Depth_Charge_1">Depth Charge 1</option>
          <option value="Depth_Charge_2">Depth Charge 2</option>
          <option value="Depth_Charge_3">Depth Charge 3</option>
          <option value="Depth_Charge_4">Depth Charge 4</option>
        </select>
        <select id="slot10">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot11">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="Empty">Empty</option>
          <option value="Fire_Control_0">Fire Control 0</option>
          <option value="Fire_Control_1">Fire Control 1</option>
          <option value="Fire_Control_2">Fire Control 2</option>
          <option value="Fire_Control_3">Fire Control 3</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="Empty">Empty</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
        </select>
        <select id="slot6">
          <option value="Light_Engine_1">Light Engine 1</option>
          <option value="Light_Engine_2">Light Engine 2</option>
          <option value="Light_Engine_3">Light Engine 3</option>
          <option value="Light_Engine_4">Light Engine 4</option>
        </select>
        <select id="slot7">
          <option value="Locked">Locked</option>
        </select>
      </div>
      ;
    }

    //1936 DD
    if(this.set == 1){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Minesweeping_Gears">Minesweeping Gears</option>
          <option value="Depth_Charge_1">Depth Charge 1</option>
          <option value="Depth_Charge_2">Depth Charge 2</option>
          <option value="Depth_Charge_3">Depth Charge 3</option>
          <option value="Depth_Charge_4">Depth Charge 4</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Minesweeping_Gears">Minesweeping Gears</option>
          <option value="Depth_Charge_1">Depth Charge 1</option>
          <option value="Depth_Charge_2">Depth Charge 2</option>
          <option value="Depth_Charge_3">Depth Charge 3</option>
          <option value="Depth_Charge_4">Depth Charge 4</option>
        </select>
        <select id="slot10">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot11">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="Empty">Empty</option>
          <option value="Fire_Control_0">Fire Control 0</option>
          <option value="Fire_Control_1">Fire Control 1</option>
          <option value="Fire_Control_2">Fire Control 2</option>
          <option value="Fire_Control_3">Fire Control 3</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="Empty">Empty</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
        </select>
        <select id="slot6">
          <option value="Light_Engine_1">Light Engine 1</option>
          <option value="Light_Engine_2">Light Engine 2</option>
          <option value="Light_Engine_3">Light Engine 3</option>
          <option value="Light_Engine_4">Light Engine 4</option>
        </select>
        <select id="slot7">
          <option value="Locked">Locked</option>
        </select>
      </div>
      ;
    }

    //1940 DD
    if (this.set == 2){
      var s =
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Depth_Charge_1">Depth Charge 1</option>
          <option value="Depth_Charge_2">Depth Charge 2</option>
          <option value="Depth_Charge_3">Depth Charge 3</option>
          <option value="Depth_Charge_4">Depth Charge 4</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Minesweeping_Gears">Minesweeping Gears</option>
          <option value="Depth_Charge_1">Depth Charge 1</option>
          <option value="Depth_Charge_2">Depth Charge 2</option>
          <option value="Depth_Charge_3">Depth Charge 3</option>
          <option value="Depth_Charge_4">Depth Charge 4</option>
        </select>
        <select id="slot10">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Minesweeping_Gears">Minesweeping Gears</option>
          <option value="Depth_Charge_1">Depth Charge 1</option>
          <option value="Depth_Charge_2">Depth Charge 2</option>
          <option value="Depth_Charge_3">Depth Charge 3</option>
          <option value="Depth_Charge_4">Depth Charge 4</option>
        </select>
        <select id="slot11">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="Empty">Empty</option>
          <option value="Fire_Control_0">Fire Control 0</option>
          <option value="Fire_Control_1">Fire Control 1</option>
          <option value="Fire_Control_2">Fire Control 2</option>
          <option value="Fire_Control_3">Fire Control 3</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="Empty">Empty</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
        </select>
        <select id="slot6">
          <option value="Light_Engine_1">Light Engine 1</option>
          <option value="Light_Engine_2">Light Engine 2</option>
          <option value="Light_Engine_3">Light Engine 3</option>
          <option value="Light_Engine_4">Light Engine 4</option>
        </select>
        <select id="slot7">
          <option value="Locked">Locked</option>
        </select>
      </div>
      ;
    }

    //1944 DD
    if (this.set == 3){
      var s =
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Depth_Charge_1">Depth Charge 1</option>
          <option value="Depth_Charge_2">Depth Charge 2</option>
          <option value="Depth_Charge_3">Depth Charge 3</option>
          <option value="Depth_Charge_4">Depth Charge 4</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Minesweeping_Gears">Minesweeping Gears</option>
          <option value="Depth_Charge_1">Depth Charge 1</option>
          <option value="Depth_Charge_2">Depth Charge 2</option>
          <option value="Depth_Charge_3">Depth Charge 3</option>
          <option value="Depth_Charge_4">Depth Charge 4</option>
        </select>
        <select id="slot10">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Minesweeping_Gears">Minesweeping Gears</option>
          <option value="Depth_Charge_1">Depth Charge 1</option>
          <option value="Depth_Charge_2">Depth Charge 2</option>
          <option value="Depth_Charge_3">Depth Charge 3</option>
          <option value="Depth_Charge_4">Depth Charge 4</option>
        </select>
        <select id="slot11">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Minesweeping_Gears">Minesweeping Gears</option>
          <option value="Depth_Charge_1">Depth Charge 1</option>
          <option value="Depth_Charge_2">Depth Charge 2</option>
          <option value="Depth_Charge_3">Depth Charge 3</option>
          <option value="Depth_Charge_4">Depth Charge 4</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="Empty">Empty</option>
          <option value="Fire_Control_0">Fire Control 0</option>
          <option value="Fire_Control_1">Fire Control 1</option>
          <option value="Fire_Control_2">Fire Control 2</option>
          <option value="Fire_Control_3">Fire Control 3</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="Empty">Empty</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
        </select>
        <select id="slot6">
          <option value="Light_Engine_1">Light Engine 1</option>
          <option value="Light_Engine_2">Light Engine 2</option>
          <option value="Light_Engine_3">Light Engine 3</option>
          <option value="Light_Engine_4">Light Engine 4</option>
        </select>
        <select id="slot7">
          <option value="Locked">Locked</option>
        </select>
      </div>
      ;
    }

    //Coastal Defense Ship
    if (this.set == 4){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot10">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot11">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="Fire_Control_0">Fire Control 0</option>
          <option value="Fire_Control_1">Fire Control 1</option>
          <option value="Fire_Control_2">Fire Control 2</option>
          <option value="Fire_Control_3">Fire Control 3</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="Cruiser_Engine_1">Cruiser Engine 1</option>
          <option value="Cruiser_Engine_2">Cruiser Engine 2</option>
          <option value="Cruiser_Engine_3">Cruiser Engine 3</option>
          <option value="Cruiser_Engine_4">Cruiser Engine 4</option>
        </select>
        <select id="slot6">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
          <option value="Empty">Empty</option>
          <option value="Cruiser_Armor_1">Cruiser Armor 1</option>
          <option value="Cruiser_Armor_2">Cruiser Armor 2</option>
          <option value="Cruiser_Armor_3">Cruiser Armor 3</option>
          <option value="Cruiser_Armor_4">Cruiser Armor 4</option>
        </select>
      </div>
      ;
    }

    //Early Cruiser
    if (this.set == 5){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot10">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Depth_Charge_1">Depth Charge 1</option>
          <option value="Depth_Charge_2">Depth Charge 2</option>
          <option value="Depth_Charge_3">Depth Charge 3</option>
          <option value="Depth_Charge_4">Depth Charge 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot11">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="Fire_Control_0">Fire Control 0</option>
          <option value="Fire_Control_1">Fire Control 1</option>
          <option value="Fire_Control_2">Fire Control 2</option>
          <option value="Fire_Control_3">Fire Control 3</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="Cruiser_Engine_1">Cruiser Engine 1</option>
          <option value="Cruiser_Engine_2">Cruiser Engine 2</option>
          <option value="Cruiser_Engine_3">Cruiser Engine 3</option>
          <option value="Cruiser_Engine_4">Cruiser Engine 4</option>
        </select>
        <select id="slot6">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
          <option value="Empty">Empty</option>
          <option value="Cruiser_Armor_1">Cruiser Armor 1</option>
          <option value="Cruiser_Armor_2">Cruiser Armor 2</option>
          <option value="Cruiser_Armor_3">Cruiser Armor 3</option>
          <option value="Cruiser_Armor_4">Cruiser Armor 4</option>
        </select>
      </div>
      ;
    }

    //1936 Cruiser
    if (this.set == 6){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">DP Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot10">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot11">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Depth_Charge_1">Depth Charge 1</option>
          <option value="Depth_Charge_2">Depth Charge 2</option>
          <option value="Depth_Charge_3">Depth Charge 3</option>
          <option value="Depth_Charge_4">Depth Charge 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="Fire_Control_0">Fire Control 0</option>
          <option value="Fire_Control_1">Fire Control 1</option>
          <option value="Fire_Control_2">Fire Control 2</option>
          <option value="Fire_Control_3">Fire Control 3</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="Cruiser_Engine_1">Cruiser Engine 1</option>
          <option value="Cruiser_Engine_2">Cruiser Engine 2</option>
          <option value="Cruiser_Engine_3">Cruiser Engine 3</option>
          <option value="Cruiser_Engine_4">Cruiser Engine 4</option>
        </select>
        <select id="slot6">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
          <option value="Empty">Empty</option>
          <option value="Cruiser_Armor_1">Cruiser Armor 1</option>
          <option value="Cruiser_Armor_2">Cruiser Armor 2</option>
          <option value="Cruiser_Armor_3">Cruiser Armor 3</option>
          <option value="Cruiser_Armor_4">Cruiser Armor 4</option>
        </select>
      </div>
      ;
    }

    //1940 Cruiser
    if (this.set == 7){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot10">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot11">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Depth_Charge_1">Depth Charge 1</option>
          <option value="Depth_Charge_2">Depth Charge 2</option>
          <option value="Depth_Charge_3">Depth Charge 3</option>
          <option value="Depth_Charge_4">Depth Charge 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot12">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Depth_Charge_1">Depth Charge 1</option>
          <option value="Depth_Charge_2">Depth Charge 2</option>
          <option value="Depth_Charge_3">Depth Charge 3</option>
          <option value="Depth_Charge_4">Depth Charge 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="Fire_Control_0">Fire Control 0</option>
          <option value="Fire_Control_1">Fire Control 1</option>
          <option value="Fire_Control_2">Fire Control 2</option>
          <option value="Fire_Control_3">Fire Control 3</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="Cruiser_Engine_1">Cruiser Engine 1</option>
          <option value="Cruiser_Engine_2">Cruiser Engine 2</option>
          <option value="Cruiser_Engine_3">Cruiser Engine 3</option>
          <option value="Cruiser_Engine_4">Cruiser Engine 4</option>
        </select>
        <select id="slot6">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
          <option value="Empty">Empty</option>
          <option value="Cruiser_Armor_1">Cruiser Armor 1</option>
          <option value="Cruiser_Armor_2">Cruiser Armor 2</option>
          <option value="Cruiser_Armor_3">Cruiser Armor 3</option>
          <option value="Cruiser_Armor_4">Cruiser Armor 4</option>
        </select>
      </div>
      ;
    }

    //1944 Cruiser
    if (this.set == 8){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot10">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot11">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Depth_Charge_1">Depth Charge 1</option>
          <option value="Depth_Charge_2">Depth Charge 2</option>
          <option value="Depth_Charge_3">Depth Charge 3</option>
          <option value="Depth_Charge_4">Depth Charge 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot12">
          <option value="Empty">Empty</option>
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Depth_Charge_1">Depth Charge 1</option>
          <option value="Depth_Charge_2">Depth Charge 2</option>
          <option value="Depth_Charge_3">Depth Charge 3</option>
          <option value="Depth_Charge_4">Depth Charge 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="Fire_Control_0">Fire Control 0</option>
          <option value="Fire_Control_1">Fire Control 1</option>
          <option value="Fire_Control_2">Fire Control 2</option>
          <option value="Fire_Control_3">Fire Control 3</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="Cruiser_Engine_1">Cruiser Engine 1</option>
          <option value="Cruiser_Engine_2">Cruiser Engine 2</option>
          <option value="Cruiser_Engine_3">Cruiser Engine 3</option>
          <option value="Cruiser_Engine_4">Cruiser Engine 4</option>
        </select>
        <select id="slot6">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
          <option value="Empty">Empty</option>
          <option value="Cruiser_Armor_1">Cruiser Armor 1</option>
          <option value="Cruiser_Armor_2">Cruiser Armor 2</option>
          <option value="Cruiser_Armor_3">Cruiser Armor 3</option>
          <option value="Cruiser_Armor_4">Cruiser Armor 4</option>
        </select>
      </div>
      ;
    }

    //Torpedo Cruiser
    if (this.set == 9){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
        </select>
        <select id="slot10">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
        </select>
        <select id="slot11">
          <option value="Empty">Empty</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot12">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Depth_Charge_1">Depth Charge 1</option>
          <option value="Depth_Charge_2">Depth Charge 2</option>
          <option value="Depth_Charge_3">Depth Charge 3</option>
          <option value="Depth_Charge_4">Depth Charge 4</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Light_Battery_1">Light Battery 1</option>
          <option value="Light_Battery_2">Light Battery 2</option>
          <option value="Light_Battery_3">Light Battery 3</option>
          <option value="Light_Battery_4">Light Battery 4</option>
          <option value="DP_Light_Battery">DP Light Battery</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="Fire_Control_0">Fire Control 0</option>
          <option value="Fire_Control_1">Fire Control 1</option>
          <option value="Fire_Control_2">Fire Control 2</option>
          <option value="Fire_Control_3">Fire Control 3</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="Cruiser_Engine_1">Cruiser Engine 1</option>
          <option value="Cruiser_Engine_2">Cruiser Engine 2</option>
          <option value="Cruiser_Engine_3">Cruiser Engine 3</option>
          <option value="Cruiser_Engine_4">Cruiser Engine 4</option>
        </select>
        <select id="slot6">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
          <option value="Empty">Empty</option>
          <option value="Cruiser_Armor_1">Cruiser Armor 1</option>
          <option value="Cruiser_Armor_2">Cruiser Armor 2</option>
          <option value="Cruiser_Armor_3">Cruiser Armor 3</option>
          <option value="Cruiser_Armor_4">Cruiser Armor 4</option>
        </select>
      </div>
      ;
    }

    //Panzerschiff
    if (this.set == 10){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot10">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot11">
          <option value="Empty">Empty</option>
          <option value="Heavy_Cruiser_Battery_1">Heavy Cruiser Battery 1</option>
          <option value="Heavy_Cruiser_Battery_2">Heavy Cruiser Battery 2</option>
          <option value="Heavy_Cruiser_Battery_3">Heavy Cruiser Battery 3</option>
          <option value="Heavy_Cruiser_Battery_4">Heavy Cruiser Battery 4</option>
          <option value="Light_Cruiser_Battery_1">Light Cruiser Battery 1</option>
          <option value="Light_Cruiser_Battery_2">Light Cruiser Battery 2</option>
          <option value="Light_Cruiser_Battery_3">Light Cruiser Battery 3</option>
          <option value="Light_Cruiser_Battery_4">Light Cruiser Battery 4</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Minelaying_Rails">Minelaying Rails</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="Fire_Control_0">Fire Control 0</option>
          <option value="Fire_Control_1">Fire Control 1</option>
          <option value="Fire_Control_2">Fire Control 2</option>
          <option value="Fire_Control_3">Fire Control 3</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
          <option value="Sonar_1">Sonar 1</option>
          <option value="Sonar_2">Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="Cruiser_Engine_1">Cruiser Engine 1</option>
          <option value="Cruiser_Engine_2">Cruiser Engine 2</option>
          <option value="Cruiser_Engine_3">Cruiser Engine 3</option>
          <option value="Cruiser_Engine_4">Cruiser Engine 4</option>
        </select>
        <select id="slot6">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
          <option value="Empty">Empty</option>
          <option value="Cruiser_Armor_1">Cruiser Armor 1</option>
          <option value="Cruiser_Armor_2">Cruiser Armor 2</option>
          <option value="Cruiser_Armor_3">Cruiser Armor 3</option>
          <option value="Cruiser_Armor_4">Cruiser Armor 4</option>
        </select>
      </div>
      ;
    }

    //Pre-Dreadnought
    if (this.set == 11){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Torpedo_Launcher_1">Torpedo Launcher 1</option>
          <option value="Torpedo_Launcher_2">Torpedo Launcher 2</option>
          <option value="Torpedo_Launcher_3">Torpedo Launcher 3</option>
          <option value="Torpedo_Launcher_4">Torpedo Launcher 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot10">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot11">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="Empty">Empty</option>
          <option value="Fire_Control_0">Fire Control 0</option>
          <option value="Fire_Control_1">Fire Control 1</option>
          <option value="Fire_Control_2">Fire Control 2</option>
          <option value="Fire_Control_3">Fire Control 3</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
        </select>
        <select id="slot5">
          <option value="Heavy_Engine_1">Heavy Engine 1</option>
          <option value="Heavy_Engine_2">Heavy Engine 2</option>
          <option value="Heavy_Engine_3">Heavy Engine 3</option>
          <option value="Heavy_Engine_4">Heavy Engine 4</option>
        </select>
        <select id="slot6">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
          <option value="Battleship_Armor_1">Battleship Armor 1</option>
          <option value="Battleship_Armor_2">Battleship Armor 2</option>
          <option value="Battleship_Armor_3">Battleship Armor 3</option>
          <option value="Battlecruiser_Armor_1">Battlecruiser Armor 1</option>
          <option value="Battlecruiser_Armor_2">Battlecruiser Armor 2</option>
          <option value="Battlecruiser_Armor_3">Battlecruiser Armor 3</option>
        </select>
      </div>
      ;
    }

    //Early BB
    if (this.set == 12){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot10">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot11">
          <option value="Empty">Empty</option>
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="Empty">Empty</option>
          <option value="Fire_Control_0">Fire Control 0</option>
          <option value="Fire_Control_1">Fire Control 1</option>
          <option value="Fire_Control_2">Fire Control 2</option>
          <option value="Fire_Control_3">Fire Control 3</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
        </select>
        <select id="slot5">
          <option value="Heavy_Engine_1">Heavy Engine 1</option>
          <option value="Heavy_Engine_2">Heavy Engine 2</option>
          <option value="Heavy_Engine_3">Heavy Engine 3</option>
          <option value="Heavy_Engine_4">Heavy Engine 4</option>
        </select>
        <select id="slot6">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
          <option value="Battleship_Armor_1">Battleship Armor 1</option>
          <option value="Battleship_Armor_2">Battleship Armor 2</option>
          <option value="Battleship_Armor_3">Battleship Armor 3</option>
          <option value="Battlecruiser_Armor_1">Battlecruiser Armor 1</option>
          <option value="Battlecruiser_Armor_2">Battlecruiser Armor 2</option>
          <option value="Battlecruiser_Armor_3">Battlecruiser Armor 3</option>
        </select>
      </div>
      ;
    }

    //1936 BB
    if (this.set == 13){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot10">
          <option value="Empty">Empty</option>
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot11">
          <option value="Empty">Empty</option>
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="Empty">Empty</option>
          <option value="Fire_Control_0">Fire Control 0</option>
          <option value="Fire_Control_1">Fire Control 1</option>
          <option value="Fire_Control_2">Fire Control 2</option>
          <option value="Fire_Control_3">Fire Control 3</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
        </select>
        <select id="slot5">
          <option value="Heavy_Engine_1">Heavy Engine 1</option>
          <option value="Heavy_Engine_2">Heavy Engine 2</option>
          <option value="Heavy_Engine_3">Heavy Engine 3</option>
          <option value="Heavy_Engine_4">Heavy Engine 4</option>
        </select>
        <select id="slot6">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
          <option value="Battleship_Armor_1">Battleship Armor 1</option>
          <option value="Battleship_Armor_2">Battleship Armor 2</option>
          <option value="Battleship_Armor_3">Battleship Armor 3</option>
          <option value="Battlecruiser_Armor_1">Battlecruiser Armor 1</option>
          <option value="Battlecruiser_Armor_2">Battlecruiser Armor 2</option>
          <option value="Battlecruiser_Armor_3">Battlecruiser Armor 3</option>
        </select>
      </div>
      ;
    }

    //1940 BB
    if (this.set == 14){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot10">
          <option value="Empty">Empty</option>
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot11">
          <option value="Empty">Empty</option>
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot12">
          <option value="Empty">Empty</option>
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="Empty">Empty</option>
          <option value="Fire_Control_0">Fire Control 0</option>
          <option value="Fire_Control_1">Fire Control 1</option>
          <option value="Fire_Control_2">Fire Control 2</option>
          <option value="Fire_Control_3">Fire Control 3</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
        </select>
        <select id="slot5">
          <option value="Heavy_Engine_1">Heavy Engine 1</option>
          <option value="Heavy_Engine_2">Heavy Engine 2</option>
          <option value="Heavy_Engine_3">Heavy Engine 3</option>
          <option value="Heavy_Engine_4">Heavy Engine 4</option>
        </select>
        <select id="slot6">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
          <option value="Battleship_Armor_1">Battleship Armor 1</option>
          <option value="Battleship_Armor_2">Battleship Armor 2</option>
          <option value="Battleship_Armor_3">Battleship Armor 3</option>
          <option value="Battlecruiser_Armor_1">Battlecruiser Armor 1</option>
          <option value="Battlecruiser_Armor_2">Battlecruiser Armor 2</option>
          <option value="Battlecruiser_Armor_3">Battlecruiser Armor 3</option>
        </select>
      </div>
      ;
    }

    //1944 BB
    if (this.set == 15){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot10">
          <option value="Empty">Empty</option>
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot11">
          <option value="Empty">Empty</option>
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot12">
          <option value="Empty">Empty</option>
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Heavy_Battery_1">Heavy Battery 1</option>
          <option value="Heavy_Battery_2">Heavy Battery 2</option>
          <option value="Heavy_Battery_3">Heavy Battery 3</option>
          <option value="Heavy_Battery_4">Heavy Battery 4</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="Empty">Empty</option>
          <option value="Fire_Control_0">Fire Control 0</option>
          <option value="Fire_Control_1">Fire Control 1</option>
          <option value="Fire_Control_2">Fire Control 2</option>
          <option value="Fire_Control_3">Fire Control 3</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
        </select>
        <select id="slot5">
          <option value="Heavy_Engine_1">Heavy Engine 1</option>
          <option value="Heavy_Engine_2">Heavy Engine 2</option>
          <option value="Heavy_Engine_3">Heavy Engine 3</option>
          <option value="Heavy_Engine_4">Heavy Engine 4</option>
        </select>
        <select id="slot6">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
          <option value="Battleship_Armor_1">Battleship Armor 1</option>
          <option value="Battleship_Armor_2">Battleship Armor 2</option>
          <option value="Battleship_Armor_3">Battleship Armor 3</option>
          <option value="Battlecruiser_Armor_1">Battlecruiser Armor 1</option>
          <option value="Battlecruiser_Armor_2">Battlecruiser Armor 2</option>
          <option value="Battlecruiser_Armor_3">Battlecruiser Armor 3</option>
        </select>
      </div>
      ;
    }

    //SH BB
    if (this.set == 16){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="SH_Battery">Super Heavy Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="SH_Battery">Super Heavy Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot10">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot11">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot12">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot13">
          <option value="Empty">Empty</option>
          <option value="SH_Battery">Super Heavy Battery</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>
        <select id="slot14">
          <option value="Empty">Empty</option>
          <option value="SH_Battery">Super Heavy Battery</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="SH_Battery">Super Heavy Battery</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="Empty">Empty</option>
          <option value="Fire_Control_0">Fire Control 0</option>
          <option value="Fire_Control_1">Fire Control 1</option>
          <option value="Fire_Control_2">Fire Control 2</option>
          <option value="Fire_Control_3">Fire Control 3</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
        </select>
        <select id="slot5">
          <option value="Heavy_Engine_1">Heavy Engine 1</option>
          <option value="Heavy_Engine_2">Heavy Engine 2</option>
          <option value="Heavy_Engine_3">Heavy Engine 3</option>
          <option value="Heavy_Engine_4">Heavy Engine 4</option>
        </select>
        <select id="slot6">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
          <option value="SH_Battleship_Armor">Super Heavy Battleship Armor</option>
        </select>
      </div>
      ;
    }

    //Early SS
    if (this.set == 17){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Torpedo_Tubes_1">Torpedo Tubes 1</option>
          <option value="Torpedo_Tubes_2">Torpedo Tubes 2</option>
          <option value="Torpedo_Tubes_3">Torpedo Tubes 3</option>
          <option value="Torpedo_Tubes_4">Torpedo Tubes 4</option>
          <option value="Minelaying_Tubes">Minelaying Tubes</option>
        </select>
        <select id="slot9">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot10">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot11">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Torpedo_Tubes_1">Torpedo Tubes 1</option>
          <option value="Torpedo_Tubes_2">Torpedo Tubes 2</option>
          <option value="Torpedo_Tubes_3">Torpedo Tubes 3</option>
          <option value="Torpedo_Tubes_4">Torpedo Tubes 4</option>
        </select>
        <select id="slot2">
          <option value="Submarine_Engine_1">Submarine Engine 1</option>
          <option value="Submarine_Engine_2">Submarine Engine 2</option>
          <option value="Submarine_Engine_3">Submarine Engine 3</option>
          <option value="Submarine_Engine_4">Submarine Engine 4</option>
        </select>
        <select id="slot3">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot4">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot5">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot6">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot7">
          <option value="Locked">Locked</option>
        </select>
      </div>
      ;
    }

    //1936 SS
    if (this.set == 18){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
          <option value="Torpedo_Tubes_1">Torpedo Tubes 1</option>
          <option value="Torpedo_Tubes_2">Torpedo Tubes 2</option>
          <option value="Torpedo_Tubes_3">Torpedo Tubes 3</option>
          <option value="Torpedo_Tubes_4">Torpedo Tubes 4</option>
          <option value="Minelaying_Tubes">Minelaying Tubes</option>
        </select>
        <select id="slot9">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot10">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot11">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Torpedo_Tubes_1">Torpedo Tubes 1</option>
          <option value="Torpedo_Tubes_2">Torpedo Tubes 2</option>
          <option value="Torpedo_Tubes_3">Torpedo Tubes 3</option>
          <option value="Torpedo_Tubes_4">Torpedo Tubes 4</option>
        </select>
        <select id="slot2">
          <option value="Submarine_Engine_1">Submarine Engine 1</option>
          <option value="Submarine_Engine_2">Submarine Engine 2</option>
          <option value="Submarine_Engine_3">Submarine Engine 3</option>
          <option value="Submarine_Engine_4">Submarine Engine 4</option>
        </select>
        <select id="slot3">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot4">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot5">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot6">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot7">
          <option value="Locked">Locked</option>
        </select>
      </div>
      ;
    }

    //1940 SS
    if (this.set == 19){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Torpedo_Tubes_1">Torpedo Tubes 1</option>
          <option value="Torpedo_Tubes_2">Torpedo Tubes 2</option>
          <option value="Torpedo_Tubes_3">Torpedo Tubes 3</option>
          <option value="Torpedo_Tubes_4">Torpedo Tubes 4</option>
          <option value="Minelaying_Tubes">Minelaying Tubes</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
          <option value="Snorkel_1">Snorkel 1</option>
          <option value="Snorkel_2">Snorkel 2</option>
        </select>
        <select id="slot10">
          <option value="Empty">Empty</option>
          <option value="Torpedo_Tubes_1">Torpedo Tubes 1</option>
          <option value="Torpedo_Tubes_2">Torpedo Tubes 2</option>
          <option value="Torpedo_Tubes_3">Torpedo Tubes 3</option>
          <option value="Torpedo_Tubes_4">Torpedo Tubes 4</option>
          <option value="Minelaying_Tubes">Minelaying Tubes</option>
        </select>
        <select id="slot11">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Torpedo_Tubes_1">Torpedo Tubes 1</option>
          <option value="Torpedo_Tubes_2">Torpedo Tubes 2</option>
          <option value="Torpedo_Tubes_3">Torpedo Tubes 3</option>
          <option value="Torpedo_Tubes_4">Torpedo Tubes 4</option>
        </select>
        <select id="slot2">
          <option value="Submarine_Engine_1">Submarine Engine 1</option>
          <option value="Submarine_Engine_2">Submarine Engine 2</option>
          <option value="Submarine_Engine_3">Submarine Engine 3</option>
          <option value="Submarine_Engine_4">Submarine Engine 4</option>
        </select>
        <select id="slot3">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot4">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot5">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot6">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot7">
          <option value="Locked">Locked</option>
        </select>
      </div>
      ;
    }

    //1944 SS
    if (this.set == 20){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Torpedo_Tubes_1">Torpedo Tubes 1</option>
          <option value="Torpedo_Tubes_2">Torpedo Tubes 2</option>
          <option value="Torpedo_Tubes_3">Torpedo Tubes 3</option>
          <option value="Torpedo_Tubes_4">Torpedo Tubes 4</option>
          <option value="Minelaying_Tubes">Minelaying Tubes</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
          <option value="Snorkel_1">Snorkel 1</option>
          <option value="Snorkel_2">Snorkel 2</option>
        </select>
        <select id="slot10">
          <option value="Empty">Empty</option>
          <option value="Torpedo_Tubes_1">Torpedo Tubes 1</option>
          <option value="Torpedo_Tubes_2">Torpedo Tubes 2</option>
          <option value="Torpedo_Tubes_3">Torpedo Tubes 3</option>
          <option value="Torpedo_Tubes_4">Torpedo Tubes 4</option>
          <option value="Minelaying_Tubes">Minelaying Tubes</option>
        </select>
        <select id="slot11">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Torpedo_Tubes_1">Torpedo Tubes 1</option>
          <option value="Torpedo_Tubes_2">Torpedo Tubes 2</option>
          <option value="Torpedo_Tubes_3">Torpedo Tubes 3</option>
          <option value="Torpedo_Tubes_4">Torpedo Tubes 4</option>
        </select>
        <select id="slot2">
          <option value="Submarine_Engine_1">Submarine Engine 1</option>
          <option value="Submarine_Engine_2">Submarine Engine 2</option>
          <option value="Submarine_Engine_3">Submarine Engine 3</option>
          <option value="Submarine_Engine_4">Submarine Engine 4</option>
        </select>
        <select id="slot3">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot4">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot5">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot6">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot7">
          <option value="Locked">Locked</option>
        </select>
      </div>
      ;
    }

    //Cruiser Submarine
    if (this.set == 21){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Torpedo_Tubes_1">Torpedo Tubes 1</option>
          <option value="Torpedo_Tubes_2">Torpedo Tubes 2</option>
          <option value="Torpedo_Tubes_3">Torpedo Tubes 3</option>
          <option value="Torpedo_Tubes_4">Torpedo Tubes 4</option>
          <option value="Minelaying_Tubes">Minelaying Tubes</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
          <option value="Extra_Fuel_Tank">Extra Fuel Tank</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
          <option value="Snorkel_1">Snorkel 1</option>
          <option value="Snorkel_2">Snorkel 2</option>
        </select>
        <select id="slot10">
          <option value="Empty">Empty</option>
          <option value="Torpedo_Tubes_1">Torpedo Tubes 1</option>
          <option value="Torpedo_Tubes_2">Torpedo Tubes 2</option>
          <option value="Torpedo_Tubes_3">Torpedo Tubes 3</option>
          <option value="Torpedo_Tubes_4">Torpedo Tubes 4</option>
          <option value="Minelaying_Tubes">Minelaying Tubes</option>
          <option value="Floatplane_Catapult_1">Floatplane Catapult 1</option>
          <option value="Floatplane_Catapult_2">Floatplane Catapult 2</option>
          <option value="Extra_Fuel_Tank">Extra Fuel Tank</option>
        </select>
        <select id="slot11">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Torpedo_Tubes_1">Torpedo Tubes 1</option>
          <option value="Torpedo_Tubes_2">Torpedo Tubes 2</option>
          <option value="Torpedo_Tubes_3">Torpedo Tubes 3</option>
          <option value="Torpedo_Tubes_4">Torpedo Tubes 4</option>
        </select>
        <select id="slot2">
          <option value="Submarine_Engine_1">Submarine Engine 1</option>
          <option value="Submarine_Engine_2">Submarine Engine 2</option>
          <option value="Submarine_Engine_3">Submarine Engine 3</option>
          <option value="Submarine_Engine_4">Submarine Engine 4</option>
        </select>
        <select id="slot3">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot4">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot5">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot6">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot7">
          <option value="Locked">Locked</option>
        </select>
      </div>
      ;
    }

    // Converted Cruiser
    if (this.set == 22){
      var s = 
      <div>
        <select id="slot8">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot9">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot10">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot11">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Hangar_Space">Hangar Space</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Hangar_Space">Hangar Space</option>
          <option value="Carrier_Armor">Carrier Armor</option>
        </select>
        <select id="slot3">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
        </select>
        <select id="slot5">
          <option value="Cruiser_Engine_1">Cruiser Engine 1</option>
          <option value="Cruiser_Engine_2">Cruiser Engine 2</option>
          <option value="Cruiser_Engine_3">Cruiser Engine 3</option>
          <option value="Cruiser_Engine_4">Cruiser Engine 4</option>
          <option value="Carrier_Engine_1">Carrier Engine 1</option>
          <option value="Carrier_Engine_2">Carrier Engine 2</option>
          <option value="Carrier_Engine_3">Carrier Engine 3</option>
          <option value="Carrier_Engine_4">Carrier Engine 4</option>
        </select>
        <select id="slot6">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
          <option value="Locked">Locked</option>
        </select>
      </div>
      ;
    }

    //Converted Battleship
    if (this.set == 23){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Hangar_Space">Hangar Space</option>
          <option value="Carrier_Armor">Carrier Armor</option>
        </select>
        <select id="slot9">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot10">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot11">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Hangar_Space">Hangar Space</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Hangar_Space">Hangar Space</option>
          <option value="Carrier_Armor">Carrier Armor</option>
        </select>
        <select id="slot3">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
        </select>
        <select id="slot5">
          <option value="Heavy_Engine_1">Heavy Engine 1</option>
          <option value="Heavy_Engine_2">Heavy Engine 2</option>
          <option value="Heavy_Engine_3">Heavy Engine 3</option>
          <option value="Heavy_Engine_4">Heavy Engine 4</option>
          <option value="Carrier_Engine_1">Carrier Engine 1</option>
          <option value="Carrier_Engine_2">Carrier Engine 2</option>
          <option value="Carrier_Engine_3">Carrier Engine 3</option>
          <option value="Carrier_Engine_4">Carrier Engine 4</option>
        </select>
        <select id="slot6">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
          <option value="Locked">Locked</option>
        </select>
      </div>
      ;
    }

    //1936 CV
    if (this.set == 24){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Hangar_Space">Hangar Space</option>
          <option value="Carrier_Armor">Carrier Armor</option>
        </select>
        <select id="slot9">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot10">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot11">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Hangar_Space">Hangar Space</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Hangar_Space">Hangar Space</option>
          <option value="Carrier_Armor">Carrier Armor</option>
        </select>
        <select id="slot3">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
        </select>
        <select id="slot5">
          <option value="Carrier_Engine_1">Carrier Engine 1</option>
          <option value="Carrier_Engine_2">Carrier Engine 2</option>
          <option value="Carrier_Engine_3">Carrier Engine 3</option>
          <option value="Carrier_Engine_4">Carrier Engine 4</option>
        </select>
        <select id="slot6">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
          <option value="Locked">Locked</option>
        </select>
      </div>
      ;
    }

    //1940 CV
    if (this.set == 25){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Hangar_Space">Hangar Space</option>
          <option value="Carrier_Armor">Carrier Armor</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Hangar_Space">Hangar Space</option>
          <option value="Carrier_Armor">Carrier Armor</option>
        </select>
        <select id="slot10">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot11">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Hangar_Space">Hangar Space</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Hangar_Space">Hangar Space</option>
          <option value="Carrier_Armor">Carrier Armor</option>
        </select>
        <select id="slot3">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
        </select>
        <select id="slot5">
          <option value="Carrier_Engine_1">Carrier Engine 1</option>
          <option value="Carrier_Engine_2">Carrier Engine 2</option>
          <option value="Carrier_Engine_3">Carrier Engine 3</option>
          <option value="Carrier_Engine_4">Carrier Engine 4</option>
        </select>
        <select id="slot6">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
          <option value="Locked">Locked</option>
        </select>
      </div>
      ;
    }

    //1944 CV
    if (this.set == 26){
      var s = 
      <div>
        <select id="slot8">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
          <option value="Hangar_Space">Hangar Space</option>
          <option value="Carrier_Armor">Carrier Armor</option>
        </select>
        <select id="slot9">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Hangar_Space">Hangar Space</option>
          <option value="Carrier_Armor">Carrier Armor</option>
        </select>
        <select id="slot10">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
          <option value="Hangar_Space">Hangar Space</option>
          <option value="Carrier_Armor">Carrier Armor</option>
        </select>
        <select id="slot11">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot12">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot13">
          <option value="Locked">Locked</option>
        </select>
        <select id="slot14">
          <option value="Locked">Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="Hangar_Space">Hangar Space</option>
        </select>
        <select id="slot2">
          <option value="Empty">Empty</option>
          <option value="Hangar_Space">Hangar Space</option>
          <option value="Carrier_Armor">Carrier Armor</option>
        </select>
        <select id="slot3">
          <option value="Empty">Empty</option>
          <option value="Anti_Air_1">Anti-Air 1</option>
          <option value="Anti_Air_2">Anti-Air 2</option>
          <option value="Anti_Air_3">Anti-Air 3</option>
          <option value="Anti_Air_4">Anti-Air 4</option>
        </select>
        <select id="slot4">
          <option value="Empty">Empty</option>
          <option value="Radar_1">Radar 1</option>
          <option value="Radar_2">Radar 2</option>
          <option value="Radar_3">Radar 3</option>
          <option value="Radar_4">Radar 4</option>
        </select>
        <select id="slot5">
          <option value="Carrier_Engine_1">Carrier Engine 1</option>
          <option value="Carrier_Engine_2">Carrier Engine 2</option>
          <option value="Carrier_Engine_3">Carrier Engine 3</option>
          <option value="Carrier_Engine_4">Carrier Engine 4</option>
        </select>
        <select id="slot6">
          <option value="Empty">Empty</option>
          <option value="Secondary_Battery_1">Secondary Battery 1</option>
          <option value="Secondary_Battery_2">Secondary Battery 2</option>
          <option value="DP_Secondary_Battery">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
          <option value="Locked">Locked</option>
        </select>
      </div>
      ;
    }

    /* 
    END OF HULL LIST WITH THEIR SLOTS AND ALL ; KEEP SEPARATE FROM REST OF THE CODE OR ITS GONNA BECOME UNREADABLY UGLY
    */

    //console.log(emptydiv)
    var newrea = {}
    for(var elt of Object.keys(emptydiv)){
      if(elt == "props"){
        newrea["props"] = {children : [a,s,b]}
      } else{
        newrea[elt] = emptydiv[elt]
      }
    }
    //console.log(newrea);

    return (newrea);
  }
}

render(<App />, document.getElementById('root'));

import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
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

    4 - Early C
    5 - 36 C
    6 - 40 C
    7 - 44 C

    8 - Early BB
    9 - 36 BB
    10 - 40 BB
    11 - 44 BB

    12 - Early SS
    13 - 36 SS
    14 - 40 SS
    15 - 44 SS

    16 - Conv C
    17 - Conv BB
    18 - 36 CV
    19 - 40 CV
    20 - 44 CV

    21 - Pre-Dreadnought
    22 - Super-Heavy BB
    23 - Coastal Defense Ship
    24 - Torpedo Cruiser
    25 - Panzerschiff
    26 - Cruiser Submarine
  */

  //Base stats table per hull in hull index order. Refer to the above commentary for hull index, or to the return() function if said commentary is not up-to-date
  naval_speed = [
    25, 25, 25, 25,
    20, 25, 27, 28,
    20, 22, 24, 26,
    14, 14, 15, 16,
    20, 23, 26, 26, 26
  ];

  naval_range = [
    1500, 1800, 2000, 2500,
    2500, 3000, 4000, 4500,
    3000, 3500, 4000, 4500,
    2500, 4000, 5000, 6000,
    4000, 4000, 3000, 4000, 5000
  ];
  
  max_organisation = [
    40, 40, 40, 40,
    40, 40, 40, 40,
    40, 40, 40, 40,
    40, 40, 40, 40,
    40, 40, 40, 40, 40
  ];
  
  max_strength = [
    25, 40, 50, 60,
    100, 110, 120, 130,
    350, 370, 400, 450,
    10, 20, 30, 35,
    125, 325, 250, 325, 350
  ];
  
  reliability = [
    0.8, 0.85, 0.9, 0.92,
    0.8, 0.85, 0.9, 0.95,
    0.8, 0.85, 0.9, 0.95,
    0.6, 0.7, 0.75, 0.8,
    0.65, 0.65, 0.7, 0.75, 0.8
  ];
  
  supply_consumption = [
    0.01, 0.01, 0.01, 0.01,
    0.04, 0.04, 0.04, 0.04,
    0.14, 0.14, 0.14, 0.14,
    0.01, 0.01, 0.01, 0.01,
    0.3, 0.3, 0.3, 0.3, 0.3
  ];
  
  manpower = [
    250, 325, 400, 500,
    600, 800, 1200, 1400,
    4000, 5200, 6000, 6000,
    200, 200, 200, 200,
    1000, 5000, 4500, 5000, 5500
  ];
  
  carrier_size = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  lg_attack = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  lg_armor_piercing = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  hg_attack = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  hg_armor_piercing = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  torpedo_attack = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  sub_attack = [
    1, 1, 1, 1,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  armor_value = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  anti_air_attack = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  fuel_consumption = [
    0, 0, 0, 0,
    20, 20, 20, 20,
    67, 67, 67, 67,
    1, 1, 1, 1,
    87, 87, 87, 87, 87
  ];
  
  surface_visibility = [
    10, 10, 10, 10,
    15, 15, 15, 15,
    20, 20, 20, 20,
    1, 1, 1, 1,
    30, 30, 30, 30, 30
  ];
  
  surface_detection = [
    20, 20, 20, 20,
    20, 20, 20, 20,
    20, 20, 20, 20,
    20, 20, 20, 20,
    20, 20, 20, 20, 20
  ];
  
  sub_visibility = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    25, 20, 15, 12,
    0, 0, 0, 0, 0
  ];
  
  sub_detection = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    1, 1, 1, 1,
    0, 0, 0, 0,
    5, 5, 5, 5, 5
  ];
  
  mines_planting = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  mines_sweeping = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  
  build_cost_ic = [
    400, 500, 550, 600,
    1800, 1900, 2000, 2100,
    3300, 3400, 3500, 3600,
    220, 250, 320, 450,
    2700, 2700, 2450, 2600, 325
  ];
  
  steel = [
    2, 2, 3, 4,
    1, 2, 2, 3,
    1, 1, 1, 1,
    1, 2, 2, 3,
    3, 4, 3, 4, 4
  ];
  
  chromium = [
    0, 0, 0, 1,
    0, 0, 0, 0,
    1, 1, 1, 1,
    0, 0, 0, 1,
    1, 1, 1, 1, 2
  ];

  //Stat Addition per equipment piece
  add = {
    nlsd : {le1:5, le2:5, le3:5, le4:5,
      se1:5, se2:5, se3:5, se4:5,
      ce1:5, ce2:6, ce3:7, ce4:7,
      he1:7, he2:10, he3:11, he4:12,
      ve1:5, ve2:5, ve3:5, ve4:5},
    nlre : {eft:1000},
    mxon : {Ofib:{CV:30, BB:60, BC:40, CA:40, CL:20, DD:60, SS:40},
      Otri:{CV:60, BB:50, BC:40, CA:40, CL:30, DD:10, SS:50},
      Obas:{CV:120, BB:20, CL:60, DD:50, SS:40}},
    mxsh : {va:25},
    rety : {},
    sycn : {},
    maer : {hs:500},
    crse : {hs:20},
    ltak : {lb1:1, lb2:1.5, lb3:2, lb4:3, lbdp:3, 
      lcb1:4, lcb2:5, lcb3:6, lcb4:7.5,
      sb1:3, sb2:4, sbdp:4.5},
    ltap : {},
    hyak : {hb1:11, hb2:12, hb3:13, hb4:15, hbs:16, 
      hcb1:6.75, hcb2:7.25, hcb3:7.75, hcb4:9},
    hyap : {},
    toak : {tl1:18, tl2:27, tl3:36, tl4:45,
      tt1:14, tt2:18, tt3:22, tt4:28},
    seak : {dc1:8, dc2:12, dc3:16, dc4:20},
    arve : {ha1:26, ha2:31, ha3:40, has:55,
      na1:20, na2:25, na3:30,
      ca1:6, ca2:8, ca3:10, ca4:12,
      va:5},
    aaak : {lbdp:3,
      sbdp:2.5,
      aa1:1.5, aa2:2, aa3:3, aa4:4},
    flcn : {le1:7, le2:8, le3:10, le4:10,
      se1:7, se2:8, se3:10, se4:10,
      ce1:12, ce2:16, ce3:20, ce4:24,
      he1:20, he2:25, he3:30, he4:35,
      ve1:12, ve2:16, ve3:20, ve4:24},
    sfvy : {hcb1:3.5, hcb2:3.5, hcb3:3.5, hcb4:3.5,
      ha1:10, ha2:10, ha3:10, has:10,
      na1:8, na2:8, na3:8},
    sfdn : {ra1:5, ra2:7, ra3:12, ra4:18,
      pc1:7, pc2:10},
    smvy : {},
    smdn : {ra2:2, ra3:6, ra4:14,
      pc1:2.5, pc2:3.5,
      so1:4, so2:7},
    mspg : {mr:1, mt:1},
    mssg : {mg:1},
    bdct : {lb1:90, lb2:120, lb3:150, lb4:175, lbdp:300, 
      hb1:1275, hb2:1350, hb3:1450, hb4:1650, hbs:1800, 
      hcb1:750, hcb2:800, hcb3:825, hcb4:900, 
      lcb1:225, lcb2:275, lcb3:300, lcb4:350,
      sb1:180, sb2:240, sbdp:290,
      aa1:90, aa2:120, aa3:150, aa4:190,
      fc1:60, fc2:90, fc3:120, fc4:180,
      ra1:80, ra2:110, ra3:140, ra4:170,
      le1:90, le2:120, le3:150, le4:170,
      se1:90, se2:120, se3:150, se4:170,
      ce1:400, ce2:480, ce3:550, ce4:670,
      he1:1800, he2:2200, he3:2600, he4:3000,
      ve1:400, ve2:480, ve3:550, ve4:670,
      tl1:90, tl2:120, tl3:150, tl4:180,
      tt1:80, tt2:100, tt3:120, tt4:140,
      mr:90, mt:90, mg:30,
      dc1:90, dc2:120, dc3:150, dc4:180,
      sk1:50, sk2:70,
      pc1:150, pc2:170,
      hs:2000,
      so1:40, so2:60},
    slct : {lb4:1, lbdp:1, 
      hb1:1, hb2:1, hb3:1, hb4:1, hbs:1, 
      hcb1:1, hcb2:1, hcb3:2, hcb4:2,
      lcb3:1, lcb4:1,
      hs:1,
      ha1:1, ha2:1, ha3:1, has:2,
      na2:1, na2:1,
      ca2:1, ca3:1, ca4:2,
      va:1},
    cmct : {hb4:1, hbs:1,
      ha3:1, has:1,
      na3:1,
      ca3:1, ca4:1}
  }

  //Stat Average per equipment piece
  avg = {
    nlsd : {},
    nlre : {},
    mxon : {},
    mxsh : {lcb1:20, lcb2:20, lcb3:20, lcb4:20},
    rety : {},
    sycn : {hb1:0.06, hb2:0.06, hb3:0.06, hb4:0.06, 
      hcb1:0.06, hcb2:0.06, hcb3:0.06, hcb4:0.06,
      na1:-0.08, na2:-0.08, na3:-0.08},
    maer : {},
    crse : {},
    ltak : {},
    ltap : {lb1:1, lb2:2, lb3:2.5, lb4:2.5, lbdp:2,
      lcb1:5.5, lcb2:7, lcb3:8, lcb4:9,
      sb1:5.5, sb2:7, sbdp:8},
    hyak : {},
    hyap : {hb1:31, hb2:36, hb3:40, hb4:43, hbs:50, 
      hcb1:18, hcb2:21, hcb3:24, hcb4:27},
    toak : {},
    seak : {},
    arve : {},
    aaak : {},
    flcn : {},
    sfvy : {},
    sfdn : {},
    smvy : {},
    smdn : {},
    mspg : {},
    mssg : {},
    bdct : {},
    slct : {},
    cmct : {}
  }

  //Stat Percentage per equipment piece
  per = {
    nlsd : {Ira:{CV:0.1, BB:0.1, BC:0.1, CA:0.1, CL:0.1, DD:0.1, SS:0.1},
      Ice:{CL:0.1, DD:0.1},
      Ime:{BB:0.1, BC:0.1, CA:0.1, CL:0.1, DD:0.1},
      lb1:-0.01, lb2:-0.01, lb3:-0.01, lb4:-0.02, lbdp:-0.02, 
      hb1:-0.05, hb2:-0.08, hb3:-0.09, hb4:-0.10, hbs:-0.10, 
      hcb1:-0.04, hcb2:-0.06, hcb3:-0.07, hcb4:-0.08,
      lcb1:-0.03, lcb2:-0.04, lcb3:-0.04, lcb4:-0.05,
      sb1:-0.02, sb2:-0.02, sbdp:-0.03,
      aa1:-0.01, aa2:-0.01, aa3:-0.01, aa4:-0.01,
      le1:0.21, le2:0.32, le3:0.42, le4:0.47,
      se1:0.05, se2:0.1, se3:0.15, se4:0.2,
      ce1:0.2, ce2:0.3, ce3:0.35, ce4:0.4,
      he1:0.2, he2:0.3, he3:0.4, he4:0.45,
      ve1:0.2, ve2:0.3, ve3:0.4, ve4:0.45,
      tl1:-0.01, tl2:-0.01, tl3:-0.01, tl4:-0.01,
      mr:-0.02, mg:-0.02,
      dc1:-0.02, dc2:-0.02, dc3:-0.02, dc4:-0.02,
      pc1:-0.01, pc2:-0.01,
      hs:-0.05,
      ha1:-0.2, ha2:-0.2, ha3:-0.2, has:-0.25,
      na1:-0.1, na2:-0.1, na3:-0.1,
      ca1:-0.05, ca2:-0.075, ca3:-0.1, ca4:-0.125,
      va:-0.05},
    nlre : {Ipa:{CV:0.25, BB:0.25, BC:0.25, CA:0.25, CL:0.25, DD:0.25, SS:0.25},
      Ice:{CL:0.3, DD:0.3},
      Icd:{CV:-0.5, BB:-0.5, BC:-0.5, CA:-0.5, CL:-0.5, DD:-0.5, SS:-0.5},
      Ime:{BB:-0.25, BC:-0.25, CA:-0.25, CL:-0.25, DD:-0.25}},
    mxon : {},
    mxsh : {Otri:{SS:0.2},
      Iat:{CV:0.1},
      hcb1:0.4, hcb2:0.4, hcb3:0.4, hcb4:0.4,
      ha1:0.05, ha2:0.1, ha3:0.15, has:0.1,
      na1:0.05, na2:0.1, na3:0.15,
      ca2:0.05, ca3:0.1, ca4:0.15},
    rety : {fc2:-0.05, fc3:-0.075, fc4:-0.1,
      le1:-0.2, le2:-0.2, le3:-0.2, le4:-0.2,
      se1:-0.2, se2:-0.2, se3:-0.2, se4:-0.2,
      ce1:-0.2, ce2:-0.2, ce3:-0.2, ce4:-0.2,
      he1:-0.2, he2:-0.2, he3:-0.2, he4:-0.2,
      ve1:-0.2, ve2:-0.2, ve3:-0.2, ve4:-0.2},
    sycn : {},
    maer : {},
    crse : {Ipa:{CV:0.25},
      Ira:{CV:-0.1},
      Icd:{CV:-0.2}},
    ltak : {fc1:0.05, fc2:0.1, fc3:0.15, fc4:0.2,
      ra3:0.05, ra4:0.1},
    ltap : {},
    hyak : {Ofib:{BB:0.1, BC:0.1, CA:0.1},
      Iat:{BB:0.1, BC:0.1, CA:0.1},
      Ibd:{BB:0.15, BC:0.15, CA:0.15},
      Ira:{BB:-0.1, BC:-0.1, CA:-0.1},
      Icd:{BB:-0.2, BC:-0.2, CA:-0.2},
      fc1:0.05, fc2:0.1, fc3:0.15, fc4:0.2,
      ra3:0.05, ra4:0.1},
    hyap : {},
    toak : {Otri:{SS:0.1},
      Ibd:{Cl:0.25, DD:0.25}},
    seak : {},
    arve : {Ofib:{BB:0.1, BC:0.1, CA:0.1},
      Otri:{BB:0.1, BC:0.1, CA:0.1},
      Obas:{BB:0.1, BC:0.1, CA:0.1},
      Ipa:{CV:-0.15},
      Iat:{CV:0.5, BB:0.1, BC:0.1, CA:0.1},
      Ibd:{BB:0.15, BC:0.15, CA:0.15},
      Icd:{BB:-0.2, BC:-0.2, CA:-0.2}},
    aaak : {Ofib:{CV:0.1, BB:0.1, BC:0.1, CA:0.1, CL:0.1, DD:0.1},
      aa1:0.1, aa2:0.1, aa3:0.125, aa4:0.15,
      fc2:0.1, fc3:0.15, fc4:0.2,
      ra3:0.05, ra4:0.1},
    flcn : {},
    sfvy : {Otri:{BB:-0.25, BC:-0.25, CL:-0.1},
      Ira:{CV:-0.1, BB:-0.1, BC:-0.1, CA:-0.1, CL:-0.1, DD:-0.1, SS:-0.1}},
    sfdn : {Ofib:{CL:0.1, DD:0.1, SS:0.25},
      Otri:{BB:0.25, BC:0.4, CA:0.3, CL:0.3, SS:0.5},
      Obas:{CL:0.25, SS:0.25}},
    smvy : {Ira:{SS:-0.1},
      se2:-0.05, se3:-0.1, se4:-0.015,
      sk1:-0.1, sk2:-0.2,},
    smdn : {Ofib:{CV:0.5, CL:0.35, DD:0.3},
      Otri:{DD:0.05},
      Obas:{DD:0.25},
      Ibd:{CL:-0.25, DD:-0.25},
      Ice:{CL:0.1, DD:0.1}},
    mspg : {},
    mssg : {},
    bdct : {Ice:{CL:0.1, DD:0.1},
      Icd:{CV:-0.25, BB:-0.25, BC:-0.25, CA:-0.25, CL:-0.25, DD:-0.25, SS:-0.25},
      aa1:0.025, aa2:0.025, aa3:0.025, aa4:0.025,
      eft:0.05,
      ha1:0.2, ha2:0.2, ha3:0.2, has:0.25,
      na1:0.075, na2:0.075, na3:0.075,
      ca1:0.1, ca2:0.15, ca3:0.2, ca4:0.25,
      va:0.1},
    slct : {},
    cmct : {}
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
    if(this.set>=4 && this.set<8){
      if(Object.keys(equ).indexOf("hcb1") != -1 || Object.keys(equ).indexOf("hcb2") != -1 || Object.keys(equ).indexOf("hcb3") != -1 || Object.keys(equ).indexOf("hcb4") != -1){
        return("CA")
      } else {
        return("CL")
      }
    }
    if(this.set>=8 && this.set<12){
      if(Object.keys(equ).indexOf("na1") != -1 || Object.keys(equ).indexOf("na2") != -1 || Object.keys(equ).indexOf("na3") != -1){
        return("BC")
      } else {
        return("BB")
      }
    }
    if(this.set>=12 && this.set<16){
      return("SS")
    }
    if(this.set>=16 && this.set<21){
      return("CV")
    }
  }


  // Refresh recalculates the stats. It may be called at any point and should be called immediately after each change, ideally, but can also be called manually
  refresh(){

    // Pull out the base stats of the currently selected Hull

    var finalstat = {};

    finalstat["nlsd"] = this.naval_speed[this.set];
    finalstat["nlre"] = this.naval_range[this.set];
    finalstat["mxon"] = this.max_organisation[this.set];
    finalstat["mxsh"] = this.max_strength[this.set];
    finalstat["rety"] = this.reliability[this.set];
    finalstat["sycn"] = this.supply_consumption[this.set];
    finalstat["maer"] = this.manpower[this.set];
    finalstat["crse"] = this.carrier_size[this.set];
    finalstat["ltak"] = this.lg_attack[this.set];
    finalstat["ltap"] = this.lg_armor_piercing[this.set];
    finalstat["hyak"] = this.hg_attack[this.set];
    finalstat["hyap"] = this.hg_armor_piercing[this.set];
    finalstat["toak"] = this.torpedo_attack[this.set];
    finalstat["seak"] = this.sub_attack[this.set];
    finalstat["arve"] = this.armor_value[this.set];
    finalstat["aaak"] = this.anti_air_attack[this.set];
    finalstat["flcn"] = this.fuel_consumption[this.set];
    finalstat["sfvy"] = this.surface_visibility[this.set];
    finalstat["sfdn"] = this.surface_detection[this.set];
    finalstat["smvy"] = this.sub_visibility[this.set];
    finalstat["smdn"] = this.sub_detection[this.set];
    finalstat["mspg"] = this.mines_planting[this.set];
    finalstat["mssg"] = this.mines_sweeping[this.set];
    finalstat["bdct"] = this.build_cost_ic[this.set];
    finalstat["slct"] = this.steel[this.set];
    finalstat["cmct"] = this.chromium[this.set];

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

    document.getElementById('nlsd').innerHTML = finalstat["nlsd"];
    document.getElementById('nlre').innerHTML = finalstat["nlre"];
    document.getElementById('mxon').innerHTML = finalstat["mxon"];
    document.getElementById('mxsh').innerHTML = finalstat["mxsh"];
    document.getElementById('rety').innerHTML = finalstat["rety"];
    document.getElementById('sycn').innerHTML = finalstat["sycn"];
    document.getElementById('maer').innerHTML = finalstat["maer"];
    document.getElementById('crse').innerHTML = finalstat["crse"];
    document.getElementById('ltak').innerHTML = finalstat["ltak"];
    document.getElementById('ltap').innerHTML = finalstat["ltap"];
    document.getElementById('hyak').innerHTML = finalstat["hyak"];
    document.getElementById('hyap').innerHTML = finalstat["hyap"];
    document.getElementById('toak').innerHTML = finalstat["toak"];
    document.getElementById('seak').innerHTML = finalstat["seak"];
    document.getElementById('arve').innerHTML = finalstat["arve"];
    document.getElementById('aaak').innerHTML = finalstat["aaak"];
    document.getElementById('flcn').innerHTML = finalstat["flcn"];
    document.getElementById('sfvy').innerHTML = finalstat["sfvy"];
    document.getElementById('sfdn').innerHTML = finalstat["sfdn"];
    document.getElementById('smvy').innerHTML = finalstat["smvy"];
    document.getElementById('smdn').innerHTML = finalstat["smdn"];
    document.getElementById('mspg').innerHTML = finalstat["mspg"];
    document.getElementById('mssg').innerHTML = finalstat["mssg"];
    document.getElementById('bdct').innerHTML = finalstat["bdct"];
    document.getElementById('slct').innerHTML = finalstat["slct"];
    document.getElementById('cmct').innerHTML = finalstat["cmct"];
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
          <option value="0" >Early DD Hull</option>
          <option value="1" >1936 DD Hull</option>
          <option value="2" >1940 DD Hull</option>
          <option value="3" >1944 DD Hull</option>
          <option value="4" >Early C Hull</option>
          <option value="5" >1936 C Hull</option>
          <option value="6" >1940 C Hull</option>
          <option value="7" >1944 C Hull</option>
          <option value="8" >Early BB Hull</option>
          <option value="9" >1936 BB Hull</option>
          <option value="10" >1940 BB Hull</option>
          <option value="11" >1944 BB Hull</option>
          <option value="12" >Early SS Hull</option>
          <option value="13" >1936 SS Hull</option>
          <option value="14" >1940 SS Hull</option>
          <option value="15" >1944 SS Hull</option>
          <option value="16" >Converted C Hull</option>
          <option value="17" >Converted BB Hull</option>
          <option value="18" >1936 CV Hull</option>
          <option value="19" >1940 CV Hull</option>
          <option value="20" >1944 CV Hull</option>
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
        <label id='nlsd'></label>
        <label> | </label>

        <label>Naval Range : </label>
        <label id='nlre'></label>
        <label> | </label>

        <label>Max Organization : </label>
        <label id='mxon'></label>
        <label> | </label>

        <label>Max Strength : </label>
        <label id='mxsh'></label>
        <label> | </label>

        <label>Reliability : </label>
        <label id='rety'></label>
        <label> | </label>

        <label>Supply Consumption : </label>
        <label id='sycn'></label>
        <label> | </label>

        <label>Manpower : </label>
        <label id='maer'></label>
        <label> | </label>

        <label>Carrier Size : </label>
        <label id='crse'></label>
        <label> | </label>
        </p>

        <p>
        <label>Light Attack : </label>
        <label id='ltak'></label>
        <label> | </label>

        <label>Light Armor Piercing : </label>
        <label id='ltap'></label>
        <label> | </label>

        <label>Heavy Attack : </label>
        <label id='hyak'></label>
        <label> | </label>

        <label>Heavy Armor Piercing : </label>
        <label id='hyap'></label>
        <label> | </label>

        <label>Torpedo Attack : </label>
        <label id='toak'></label>
        <label> | </label>

        <label>Submarine Attack : </label>
        <label id='seak'></label>
        <label> | </label>

        <label>Armor Value : </label>
        <label id='arve'></label>
        <label> | </label>

        <label>Anti Air Attack : </label>
        <label id='aaak'></label>
        <label> | </label>
        </p>

        <p>
        <label>Fuel Consumption : </label>
        <label id='flcn'></label>
        <label> | </label>

        <label>Surface Visibility : </label>
        <label id='sfvy'></label>
        <label> | </label>

        <label>Surface Detection : </label>
        <label id='sfdn'></label>
        <label> | </label>

        <label>Submarine Visibility : </label>
        <label id='smvy'></label>
        <label> | </label>

        <label>Submarine Detection : </label>
        <label id='smdn'></label>
        <label> | </label>

        <label>Mines Planting : </label>
        <label id='mspg'></label>
        <label> | </label>

        <label>Mines Sweeping : </label>
        <label id='mssg'></label>
        <label> | </label>

        <label>Build Cost : </label>
        <label id='bdct'></label>
        <label> | </label>
        </p>

        <label>Steel Cost : </label>
        <label id='slct'></label>
        <label> | </label>

        <label>Chromium Cost : </label>
        <label id='cmct'></label>
        <label> | </label>

        <p>
          <select id="doct">
          <option value="Onod">No Doctrine</option>
          <option value="Otri">Trade Interdiction</option>
          <option value="Ofib">Fleet in Being</option>
          <option value="Obas">Base Strike</option>
          </select>

          <select id="desi">
          <option value="Ino">No Designer</option>
          <option value="Ipa">Pacific fleet naval manufacturer</option>
          <option value="Iat">Atlantic fleet naval manufacturer</option>
          <option value="Ibd">Battlefleet designer</option>
          <option value="Ira">Raiding fleet naval manufacturer</option>
          <option value="Ice">Convoy escort fleet naval manufacturer</option>
          <option value="Icd">Coastal defence fleet naval manufacturer</option>
          <option value="Ime">Mediterranean fleet naval manufacturer</option>
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
          <option value="na">Empty</option>
          <option value="aa1" >Anti-Air 1</option>
          <option value="aa2" >Anti-Air 2</option>
          <option value="aa3" >Anti-Air 3</option>
          <option value="aa4" >Anti-Air 4</option>
          <option value="tl1" >Torpedo Launcher 1</option>
          <option value="tl2" >Torpedo Launcher 2</option>
          <option value="tl3" >Torpedo Launcher 3</option>
          <option value="tl4" >Torpedo Launcher 4</option>
          <option value="mr" >Minelaying Rails</option>
          <option value="mg" >Minesweeping Gears</option>
          <option value="dc1" >Depth Charge 1</option>
          <option value="dc2" >Depth Charge 2</option>
          <option value="dc3" >Depth Charge 3</option>
          <option value="dc4" >Depth Charge 4</option>
        </select>
        <select id="slot9">
          <option value="na">Empty</option>
          <option value="aa1" >Anti-Air 1</option>
          <option value="aa2" >Anti-Air 2</option>
          <option value="aa3" >Anti-Air 3</option>
          <option value="aa4" >Anti-Air 4</option>
          <option value="tl1" >Torpedo Launcher 1</option>
          <option value="tl2" >Torpedo Launcher 2</option>
          <option value="tl3" >Torpedo Launcher 3</option>
          <option value="tl4" >Torpedo Launcher 4</option>
          <option value="mr" >Minelaying Rails</option>
          <option value="mg" >Minesweeping Gears</option>
          <option value="dc1" >Depth Charge 1</option>
          <option value="dc2" >Depth Charge 2</option>
          <option value="dc3" >Depth Charge 3</option>
          <option value="dc4" >Depth Charge 4</option>
        </select>
        <select id="slot10">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot11">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot12">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot13">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot14">
          <option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="lb1" >Light Battery 1</option>
          <option value="lb2" >Light Battery 2</option>
          <option value="lb3" >Light Battery 3</option>
          <option value="lb4" >Light Battery 4</option>
          <option value="lbdp" >DP Light Battery</option>
        </select>
        <select id="slot2">
          <option value="na">Empty</option>
          <option value="aa1" >Anti-Air 1</option>
          <option value="aa2" >Anti-Air 2</option>
          <option value="aa3" >Anti-Air 3</option>
          <option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="na">Empty</option>
          <option value="fc1" >Fire Control 0</option>
          <option value="fc2" >Fire Control 1</option>
          <option value="fc3" >Fire Control 2</option>
          <option value="fc4" >Fire Control 3</option>
          <option value="so1" >Sonar 1</option>
          <option value="so2" >Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="na">Empty</option>
          <option value="ra1" >Radar 1</option>
          <option value="ra2" >Radar 2</option>
          <option value="ra3" >Radar 3</option>
          <option value="ra4" >Radar 4</option>
          <option value="so1" >Sonar 1</option>
          <option value="so2" >Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="na">Empty</option>
          <option value="tl1" >Torpedo Launcher 1</option>
          <option value="tl2" >Torpedo Launcher 2</option>
          <option value="tl3" >Torpedo Launcher 3</option>
          <option value="tl4" >Torpedo Launcher 4</option>
        </select>
        <select id="slot6">
          <option value="le1" >Light Engine 1</option>
          <option value="le2" >Light Engine 2</option>
          <option value="le3" >Light Engine 3</option>
          <option value="le4" >Light Engine 4</option>
        </select>
        <select id="slot7">
          <option value="lo" >Locked</option>
        </select>
      </div>
      ;
    }

    //1936 DD
    if(this.set == 1){
      var s = 
      <div>
        <select id="slot8">
          <option value="na">Empty</option>
          <option value="lb1" >Light Battery 1</option>
          <option value="lb2" >Light Battery 2</option>
          <option value="lb3" >Light Battery 3</option>
          <option value="lb4" >Light Battery 4</option>
          <option value="lbdp" >DP Light Battery</option>
          <option value="aa1" >Anti-Air 1</option>
          <option value="aa2" >Anti-Air 2</option>
          <option value="aa3" >Anti-Air 3</option>
          <option value="aa4" >Anti-Air 4</option>
          <option value="tl1" >Torpedo Launcher 1</option>
          <option value="tl2" >Torpedo Launcher 2</option>
          <option value="tl3" >Torpedo Launcher 3</option>
          <option value="tl4" >Torpedo Launcher 4</option>
          <option value="mr" >Minelaying Rails</option>
          <option value="mg" >Minesweeping Gears</option>
          <option value="dc1" >Depth Charge 1</option>
          <option value="dc2" >Depth Charge 2</option>
          <option value="dc3" >Depth Charge 3</option>
          <option value="dc4" >Depth Charge 4</option>
        </select>
        <select id="slot9">
          <option value="na">Empty</option>
          <option value="lb1" >Light Battery 1</option>
          <option value="lb2" >Light Battery 2</option>
          <option value="lb3" >Light Battery 3</option>
          <option value="lb4" >Light Battery 4</option>
          <option value="lbdp" >DP Light Battery</option>
          <option value="aa1" >Anti-Air 1</option>
          <option value="aa2" >Anti-Air 2</option>
          <option value="aa3" >Anti-Air 3</option>
          <option value="aa4" >Anti-Air 4</option>
          <option value="tl1" >Torpedo Launcher 1</option>
          <option value="tl2" >Torpedo Launcher 2</option>
          <option value="tl3" >Torpedo Launcher 3</option>
          <option value="tl4" >Torpedo Launcher 4</option>
          <option value="mr" >Minelaying Rails</option>
          <option value="mg" >Minesweeping Gears</option>
          <option value="dc1" >Depth Charge 1</option>
          <option value="dc2" >Depth Charge 2</option>
          <option value="dc3" >Depth Charge 3</option>
          <option value="dc4" >Depth Charge 4</option>
        </select>
        <select id="slot10">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot11">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot12">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot13">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot14">
          <option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="lb1" >Light Battery 1</option>
          <option value="lb2" >Light Battery 2</option>
          <option value="lb3" >Light Battery 3</option>
          <option value="lb4" >Light Battery 4</option>
          <option value="lbdp" >DP Light Battery</option>
        </select>
        <select id="slot2">
          <option value="na">Empty</option>
          <option value="aa1" >Anti-Air 1</option>
          <option value="aa2" >Anti-Air 2</option>
          <option value="aa3" >Anti-Air 3</option>
          <option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="na">Empty</option>
          <option value="fc1" >Fire Control 0</option>
          <option value="fc2" >Fire Control 1</option>
          <option value="fc3" >Fire Control 2</option>
          <option value="fc4" >Fire Control 3</option>
          <option value="so1" >Sonar 1</option>
          <option value="so2" >Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="na">Empty</option>
          <option value="ra1" >Radar 1</option>
          <option value="ra2" >Radar 2</option>
          <option value="ra3" >Radar 3</option>
          <option value="ra4" >Radar 4</option>
          <option value="so1" >Sonar 1</option>
          <option value="so2" >Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="na">Empty</option>
          <option value="tl1" >Torpedo Launcher 1</option>
          <option value="tl2" >Torpedo Launcher 2</option>
          <option value="tl3" >Torpedo Launcher 3</option>
          <option value="tl4" >Torpedo Launcher 4</option>
        </select>
        <select id="slot6">
          <option value="le1" >Light Engine 1</option>
          <option value="le2" >Light Engine 2</option>
          <option value="le3" >Light Engine 3</option>
          <option value="le4" >Light Engine 4</option>
        </select>
        <select id="slot7">
          <option value="lo" >Locked</option>
        </select>
      </div>
      ;
    }


    //1940 DD
    if (this.set == 2){
      var s =
        <div>
        <select id="slot8">
          <option value="na">Empty</option>
          <option value="lb1" >Light Battery 1</option>
          <option value="lb2" >Light Battery 2</option>
          <option value="lb3" >Light Battery 3</option>
          <option value="lb4" >Light Battery 4</option>
          <option value="lbdp" >DP Light Battery</option>
          <option value="aa1" >Anti-Air 1</option>
          <option value="aa2" >Anti-Air 2</option>
          <option value="aa3" >Anti-Air 3</option>
          <option value="aa4" >Anti-Air 4</option>
          <option value="dc1" >Depth Charge 1</option>
          <option value="dc2" >Depth Charge 2</option>
          <option value="dc3" >Depth Charge 3</option>
          <option value="dc4" >Depth Charge 4</option>
        </select>
        <select id="slot9">
          <option value="na">Empty</option>
          <option value="lb1" >Light Battery 1</option>
          <option value="lb2" >Light Battery 2</option>
          <option value="lb3" >Light Battery 3</option>
          <option value="lb4" >Light Battery 4</option>
          <option value="lbdp" >DP Light Battery</option>
          <option value="aa1" >Anti-Air 1</option>
          <option value="aa2" >Anti-Air 2</option>
          <option value="aa3" >Anti-Air 3</option>
          <option value="aa4" >Anti-Air 4</option>
          <option value="tl1" >Torpedo Launcher 1</option>
          <option value="tl2" >Torpedo Launcher 2</option>
          <option value="tl3" >Torpedo Launcher 3</option>
          <option value="tl4" >Torpedo Launcher 4</option>
          <option value="mr" >Minelaying Rails</option>
          <option value="mg" >Minesweeping Gears</option>
          <option value="dc1" >Depth Charge 1</option>
          <option value="dc2" >Depth Charge 2</option>
          <option value="dc3" >Depth Charge 3</option>
          <option value="dc4" >Depth Charge 4</option>
        </select>
        <select id="slot10">
          <option value="na">Empty</option>
          <option value="lb1" >Light Battery 1</option>
          <option value="lb2" >Light Battery 2</option>
          <option value="lb3" >Light Battery 3</option>
          <option value="lb4" >Light Battery 4</option>
          <option value="lbdp" >DP Light Battery</option>
          <option value="aa1" >Anti-Air 1</option>
          <option value="aa2" >Anti-Air 2</option>
          <option value="aa3" >Anti-Air 3</option>
          <option value="aa4" >Anti-Air 4</option>
          <option value="tl1" >Torpedo Launcher 1</option>
          <option value="tl2" >Torpedo Launcher 2</option>
          <option value="tl3" >Torpedo Launcher 3</option>
          <option value="tl4" >Torpedo Launcher 4</option>
          <option value="mr" >Minelaying Rails</option>
          <option value="mg" >Minesweeping Gears</option>
          <option value="dc1" >Depth Charge 1</option>
          <option value="dc2" >Depth Charge 2</option>
          <option value="dc3" >Depth Charge 3</option>
          <option value="dc4" >Depth Charge 4</option>
        </select>
        <select id="slot11">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot12">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot13">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot14">
          <option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="lb1" >Light Battery 1</option>
          <option value="lb2" >Light Battery 2</option>
          <option value="lb3" >Light Battery 3</option>
          <option value="lb4" >Light Battery 4</option>
          <option value="lbdp" >DP Light Battery</option>
        </select>
        <select id="slot2">
          <option value="na">Empty</option>
          <option value="aa1" >Anti-Air 1</option>
          <option value="aa2" >Anti-Air 2</option>
          <option value="aa3" >Anti-Air 3</option>
          <option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="na">Empty</option>
          <option value="fc1" >Fire Control 0</option>
          <option value="fc2" >Fire Control 1</option>
          <option value="fc3" >Fire Control 2</option>
          <option value="fc4" >Fire Control 3</option>
          <option value="so1" >Sonar 1</option>
          <option value="so2" >Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="na">Empty</option>
          <option value="ra1" >Radar 1</option>
          <option value="ra2" >Radar 2</option>
          <option value="ra3" >Radar 3</option>
          <option value="ra4" >Radar 4</option>
          <option value="so1" >Sonar 1</option>
          <option value="so2" >Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="na">Empty</option>
          <option value="tl1" >Torpedo Launcher 1</option>
          <option value="tl2" >Torpedo Launcher 2</option>
          <option value="tl3" >Torpedo Launcher 3</option>
          <option value="tl4" >Torpedo Launcher 4</option>
        </select>
        <select id="slot6">
          <option value="le1" >Light Engine 1</option>
          <option value="le2" >Light Engine 2</option>
          <option value="le3" >Light Engine 3</option>
          <option value="le4" >Light Engine 4</option>
        </select>
        <select id="slot7">
          <option value="lo" >Locked</option>
        </select>
      </div>
      ;
    }


    //1944 DD
    if (this.set == 3){
      var s =
        <div>
        <select id="slot8">
          <option value="na">Empty</option>
          <option value="lb1" >Light Battery 1</option>
          <option value="lb2" >Light Battery 2</option>
          <option value="lb3" >Light Battery 3</option>
          <option value="lb4" >Light Battery 4</option>
          <option value="lbdp" >DP Light Battery</option>
          <option value="aa1" >Anti-Air 1</option>
          <option value="aa2" >Anti-Air 2</option>
          <option value="aa3" >Anti-Air 3</option>
          <option value="aa4" >Anti-Air 4</option>
          <option value="dc1" >Depth Charge 1</option>
          <option value="dc2" >Depth Charge 2</option>
          <option value="dc3" >Depth Charge 3</option>
          <option value="dc4" >Depth Charge 4</option>
        </select>
        <select id="slot9">
          <option value="na">Empty</option>
          <option value="lb1" >Light Battery 1</option>
          <option value="lb2" >Light Battery 2</option>
          <option value="lb3" >Light Battery 3</option>
          <option value="lb4" >Light Battery 4</option>
          <option value="lbdp" >DP Light Battery</option>
          <option value="aa1" >Anti-Air 1</option>
          <option value="aa2" >Anti-Air 2</option>
          <option value="aa3" >Anti-Air 3</option>
          <option value="aa4" >Anti-Air 4</option>
          <option value="tl1" >Torpedo Launcher 1</option>
          <option value="tl2" >Torpedo Launcher 2</option>
          <option value="tl3" >Torpedo Launcher 3</option>
          <option value="tl4" >Torpedo Launcher 4</option>
          <option value="mr" >Minelaying Rails</option>
          <option value="mg" >Minesweeping Gears</option>
          <option value="dc1" >Depth Charge 1</option>
          <option value="dc2" >Depth Charge 2</option>
          <option value="dc3" >Depth Charge 3</option>
          <option value="dc4" >Depth Charge 4</option>
        </select>
        <select id="slot10">
          <option value="na">Empty</option>
          <option value="lb1" >Light Battery 1</option>
          <option value="lb2" >Light Battery 2</option>
          <option value="lb3" >Light Battery 3</option>
          <option value="lb4" >Light Battery 4</option>
          <option value="lbdp" >DP Light Battery</option>
          <option value="aa1" >Anti-Air 1</option>
          <option value="aa2" >Anti-Air 2</option>
          <option value="aa3" >Anti-Air 3</option>
          <option value="aa4" >Anti-Air 4</option>
          <option value="tl1" >Torpedo Launcher 1</option>
          <option value="tl2" >Torpedo Launcher 2</option>
          <option value="tl3" >Torpedo Launcher 3</option>
          <option value="tl4" >Torpedo Launcher 4</option>
          <option value="mr" >Minelaying Rails</option>
          <option value="mg" >Minesweeping Gears</option>
          <option value="dc1" >Depth Charge 1</option>
          <option value="dc2" >Depth Charge 2</option>
          <option value="dc3" >Depth Charge 3</option>
          <option value="dc4" >Depth Charge 4</option>
        </select>
        <select id="slot11">
          <option value="na">Empty</option>
          <option value="lb1" >Light Battery 1</option>
          <option value="lb2" >Light Battery 2</option>
          <option value="lb3" >Light Battery 3</option>
          <option value="lb4" >Light Battery 4</option>
          <option value="lbdp" >DP Light Battery</option>
          <option value="aa1" >Anti-Air 1</option>
          <option value="aa2" >Anti-Air 2</option>
          <option value="aa3" >Anti-Air 3</option>
          <option value="aa4" >Anti-Air 4</option>
          <option value="tl1" >Torpedo Launcher 1</option>
          <option value="tl2" >Torpedo Launcher 2</option>
          <option value="tl3" >Torpedo Launcher 3</option>
          <option value="tl4" >Torpedo Launcher 4</option>
          <option value="mr" >Minelaying Rails</option>
          <option value="mg" >Minesweeping Gears</option>
          <option value="dc1" >Depth Charge 1</option>
          <option value="dc2" >Depth Charge 2</option>
          <option value="dc3" >Depth Charge 3</option>
          <option value="dc4" >Depth Charge 4</option>
        </select>
        <select id="slot12">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot13">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot14">
          <option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="lb1" >Light Battery 1</option>
          <option value="lb2" >Light Battery 2</option>
          <option value="lb3" >Light Battery 3</option>
          <option value="lb4" >Light Battery 4</option>
          <option value="lbdp" >DP Light Battery</option>
        </select>
        <select id="slot2">
          <option value="na">Empty</option>
          <option value="aa1" >Anti-Air 1</option>
          <option value="aa2" >Anti-Air 2</option>
          <option value="aa3" >Anti-Air 3</option>
          <option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="na">Empty</option>
          <option value="fc1" >Fire Control 0</option>
          <option value="fc2" >Fire Control 1</option>
          <option value="fc3" >Fire Control 2</option>
          <option value="fc4" >Fire Control 3</option>
          <option value="so1" >Sonar 1</option>
          <option value="so2" >Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="na">Empty</option>
          <option value="ra1" >Radar 1</option>
          <option value="ra2" >Radar 2</option>
          <option value="ra3" >Radar 3</option>
          <option value="ra4" >Radar 4</option>
          <option value="so1" >Sonar 1</option>
          <option value="so2" >Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="na">Empty</option>
          <option value="tl1" >Torpedo Launcher 1</option>
          <option value="tl2" >Torpedo Launcher 2</option>
          <option value="tl3" >Torpedo Launcher 3</option>
          <option value="tl4" >Torpedo Launcher 4</option>
        </select>
        <select id="slot6">
          <option value="le1" >Light Engine 1</option>
          <option value="le2" >Light Engine 2</option>
          <option value="le3" >Light Engine 3</option>
          <option value="le4" >Light Engine 4</option>
        </select>
        <select id="slot7">
          <option value="lo" >Locked</option>
        </select>
      </div>
      ;
    }

    //Early Cruiser
    if (this.set == 4){
      var s = 
        <div><select id="slot8">
        <option value="na">Empty</option>
		<option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
<option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="tl1" >Torpedo Launcher 1</option>
<option value="tl2" >Torpedo Launcher 2</option>
<option value="tl3" >Torpedo Launcher 3</option>
<option value="tl4" >Torpedo Launcher 4</option>
<option value="mr" >Minelaying Rails</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot9">
        <option value="na">Empty</option>
          <option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
<option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="tl1" >Torpedo Launcher 1</option>
<option value="tl2" >Torpedo Launcher 2</option>
<option value="tl3" >Torpedo Launcher 3</option>
<option value="tl4" >Torpedo Launcher 4</option>
<option value="mr" >Minelaying Rails</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot10">
        <option value="na">Empty</option>
<option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="mr" >Minelaying Rails</option>
<option value="dc1" >Depth Charge 1</option>
<option value="dc2" >Depth Charge 2</option>
<option value="dc3" >Depth Charge 3</option>
<option value="dc4" >Depth Charge 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot11">
<option value="lo" >Locked</option>
        </select>
        <select id="slot12">
<option value="lo" >Locked</option>
        </select>
        <select id="slot13">
<option value="lo" >Locked</option>
        </select>
        <select id="slot14">
<option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
        </select>
        <select id="slot2">
		<option value="na">Empty</option>
          <option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="fc1" >Fire Control 0</option>
<option value="fc2" >Fire Control 1</option>
<option value="fc3" >Fire Control 2</option>
<option value="fc4" >Fire Control 3</option>
<option value="so1" >Sonar 1</option>
<option value="so2" >Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="na">Empty</option>
		  <option value="ra1" >Radar 1</option>
<option value="ra2" >Radar 2</option>
<option value="ra3" >Radar 3</option>
<option value="ra4" >Radar 4</option>
<option value="so1" >Sonar 1</option>
<option value="so2" >Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="ce1" >Cruiser Engine 1</option>
<option value="ce2" >Cruiser Engine 2</option>
<option value="ce3" >Cruiser Engine 3</option>
<option value="ce4" >Cruiser Engine 4</option>
        </select>
        <select id="slot6">
        <option value="na">Empty</option>
          <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
        <option value="na">Empty</option>
<option value="ca1" >Cruiser Armor 1</option>
<option value="ca2" >Cruiser Armor 2</option>
<option value="ca3" >Cruiser Armor 3</option>
<option value="ca4" >Cruiser Armor 4</option>
        </select>
      </div>
      ;
    }

    //1936 Cruiser
    if (this.set == 5){
      var s = 
        <div><select id="slot8">
        <option value="na">Empty</option>
		<option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot9">
        <option value="na">Empty</option>
          <option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
<option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="tl1" >Torpedo Launcher 1</option>
<option value="tl2" >Torpedo Launcher 2</option>
<option value="tl3" >Torpedo Launcher 3</option>
<option value="tl4" >Torpedo Launcher 4</option>
<option value="mr" >Minelaying Rails</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot10">
        <option value="na">Empty</option>
<option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
<option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="tl1" >Torpedo Launcher 1</option>
<option value="tl2" >Torpedo Launcher 2</option>
<option value="tl3" >Torpedo Launcher 3</option>
<option value="tl4" >Torpedo Launcher 4</option>
<option value="mr" >Minelaying Rails</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot11">
        <option value="na">Empty</option>
<option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="mr" >Minelaying Rails</option>
<option value="dc1" >Depth Charge 1</option>
<option value="dc2" >Depth Charge 2</option>
<option value="dc3" >Depth Charge 3</option>
<option value="dc4" >Depth Charge 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot12">
<option value="lo" >Locked</option>
        </select>
        <select id="slot13">
<option value="lo" >Locked</option>
        </select>
        <select id="slot14">
<option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
        </select>
        <select id="slot2">
		<option value="na">Empty</option>
          <option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="fc1" >Fire Control 0</option>
<option value="fc2" >Fire Control 1</option>
<option value="fc3" >Fire Control 2</option>
<option value="fc4" >Fire Control 3</option>
<option value="so1" >Sonar 1</option>
<option value="so2" >Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="na">Empty</option>
		  <option value="ra1" >Radar 1</option>
<option value="ra2" >Radar 2</option>
<option value="ra3" >Radar 3</option>
<option value="ra4" >Radar 4</option>
<option value="so1" >Sonar 1</option>
<option value="so2" >Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="ce1" >Cruiser Engine 1</option>
<option value="ce2" >Cruiser Engine 2</option>
<option value="ce3" >Cruiser Engine 3</option>
<option value="ce4" >Cruiser Engine 4</option>
        </select>
        <select id="slot6">
        <option value="na">Empty</option>
          <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
        <option value="na">Empty</option>
<option value="ca1" >Cruiser Armor 1</option>
<option value="ca2" >Cruiser Armor 2</option>
<option value="ca3" >Cruiser Armor 3</option>
<option value="ca4" >Cruiser Armor 4</option>
        </select>
      </div>
      ;
    }

    //1940 Cruiser
    if (this.set == 6){
      var s = 
        <div><select id="slot8">
        <option value="na">Empty</option>
		<option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot9">
        <option value="na">Empty</option>
          <option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
<option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="tl1" >Torpedo Launcher 1</option>
<option value="tl2" >Torpedo Launcher 2</option>
<option value="tl3" >Torpedo Launcher 3</option>
<option value="tl4" >Torpedo Launcher 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot10">
        <option value="na">Empty</option>
<option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
<option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="tl1" >Torpedo Launcher 1</option>
<option value="tl2" >Torpedo Launcher 2</option>
<option value="tl3" >Torpedo Launcher 3</option>
<option value="tl4" >Torpedo Launcher 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot11">
        <option value="na">Empty</option>
<option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="mr" >Minelaying Rails</option>
<option value="dc1" >Depth Charge 1</option>
<option value="dc2" >Depth Charge 2</option>
<option value="dc3" >Depth Charge 3</option>
<option value="dc4" >Depth Charge 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot12">
        <option value="na">Empty</option>
<option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="mr" >Minelaying Rails</option>
<option value="dc1" >Depth Charge 1</option>
<option value="dc2" >Depth Charge 2</option>
<option value="dc3" >Depth Charge 3</option>
<option value="dc4" >Depth Charge 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot13">
<option value="lo" >Locked</option>
        </select>
        <select id="slot14">
<option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
        </select>
        <select id="slot2">
		<option value="na">Empty</option>
          <option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="fc1" >Fire Control 0</option>
<option value="fc2" >Fire Control 1</option>
<option value="fc3" >Fire Control 2</option>
<option value="fc4" >Fire Control 3</option>
<option value="so1" >Sonar 1</option>
<option value="so2" >Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="na">Empty</option>
		  <option value="ra1" >Radar 1</option>
<option value="ra2" >Radar 2</option>
<option value="ra3" >Radar 3</option>
<option value="ra4" >Radar 4</option>
<option value="so1" >Sonar 1</option>
<option value="so2" >Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="ce1" >Cruiser Engine 1</option>
<option value="ce2" >Cruiser Engine 2</option>
<option value="ce3" >Cruiser Engine 3</option>
<option value="ce4" >Cruiser Engine 4</option>
        </select>
        <select id="slot6">
        <option value="na">Empty</option>
          <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
        <option value="na">Empty</option>
<option value="ca1" >Cruiser Armor 1</option>
<option value="ca2" >Cruiser Armor 2</option>
<option value="ca3" >Cruiser Armor 3</option>
<option value="ca4" >Cruiser Armor 4</option>
        </select>
      </div>
      ;
    }

    //1944 Cruiser
    if (this.set == 7){
      var s = 
        <div><select id="slot8">
        <option value="na">Empty</option>
		<option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot9">
        <option value="na">Empty</option>
          <option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
<option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="tl1" >Torpedo Launcher 1</option>
<option value="tl2" >Torpedo Launcher 2</option>
<option value="tl3" >Torpedo Launcher 3</option>
<option value="tl4" >Torpedo Launcher 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot10">
        <option value="na">Empty</option>
<option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
<option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="tl1" >Torpedo Launcher 1</option>
<option value="tl2" >Torpedo Launcher 2</option>
<option value="tl3" >Torpedo Launcher 3</option>
<option value="tl4" >Torpedo Launcher 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot11">
        <option value="na">Empty</option>
<option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="mr" >Minelaying Rails</option>
<option value="dc1" >Depth Charge 1</option>
<option value="dc2" >Depth Charge 2</option>
<option value="dc3" >Depth Charge 3</option>
<option value="dc4" >Depth Charge 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot12">
        <option value="na">Empty</option>
<option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="mr" >Minelaying Rails</option>
<option value="dc1" >Depth Charge 1</option>
<option value="dc2" >Depth Charge 2</option>
<option value="dc3" >Depth Charge 3</option>
<option value="dc4" >Depth Charge 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot13">
<option value="lo" >Locked</option>
        </select>
        <select id="slot14">
<option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="lb1" >Light Battery 1</option>
<option value="lb2" >Light Battery 2</option>
<option value="lb3" >Light Battery 3</option>
<option value="lb4" >Light Battery 4</option>
<option value="lbdp" >DP Light Battery</option>
<option value="hcb1">Heavy Cruiser Battery 1</option>
<option value="hcb2">Heavy Cruiser Battery 2</option>
<option value="hcb3">Heavy Cruiser Battery 3</option>
<option value="hcb4">Heavy Cruiser Battery 4</option>
<option value="lcb1">Light Cruiser Battery 1</option>
<option value="lcb2">Light Cruiser Battery 2</option>
<option value="lcb3">Light Cruiser Battery 3</option>
<option value="lcb4">Light Cruiser Battery 4</option>
        </select>
        <select id="slot2">
		<option value="na">Empty</option>
          <option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="fc1" >Fire Control 0</option>
<option value="fc2" >Fire Control 1</option>
<option value="fc3" >Fire Control 2</option>
<option value="fc4" >Fire Control 3</option>
<option value="so1" >Sonar 1</option>
<option value="so2" >Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="na">Empty</option>
		  <option value="ra1" >Radar 1</option>
<option value="ra2" >Radar 2</option>
<option value="ra3" >Radar 3</option>
<option value="ra4" >Radar 4</option>
<option value="so1" >Sonar 1</option>
<option value="so2" >Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="ce1" >Cruiser Engine 1</option>
<option value="ce2" >Cruiser Engine 2</option>
<option value="ce3" >Cruiser Engine 3</option>
<option value="ce4" >Cruiser Engine 4</option>
        </select>
        <select id="slot6">
        <option value="na">Empty</option>
          <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
        <option value="na">Empty</option>
<option value="ca1" >Cruiser Armor 1</option>
<option value="ca2" >Cruiser Armor 2</option>
<option value="ca3" >Cruiser Armor 3</option>
<option value="ca4" >Cruiser Armor 4</option>
        </select>
      </div>
      ;
    }

    //Early Heavy Ship
    if (this.set == 8){
      var s = 
        <div><select id="slot8">
		<option value="na">Empty</option>
		<option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot9">
          <option value="na">Empty</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot10">
<option value="na">Empty</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot11">
<option value="na">Empty</option>
		<option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot12">
<option value="lo" >Locked</option>
        </select>
        <select id="slot13">
<option value="lo" >Locked</option>
        </select>
        <select id="slot14">
<option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
        </select>
        <select id="slot2">
          <option value="na">Empty</option>
		  <option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="na">Empty</option>
		  <option value="fc1" >Fire Control 0</option>
<option value="fc2" >Fire Control 1</option>
<option value="fc3" >Fire Control 2</option>
<option value="fc4" >Fire Control 3</option>
<option value="so1" >Sonar 1</option>
<option value="so2" >Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="na">Empty</option>
		  <option value="ra1" >Radar 1</option>
<option value="ra2" >Radar 2</option>
<option value="ra3" >Radar 3</option>
<option value="ra4" >Radar 4</option>
<option value="so1" >Sonar 1</option>
<option value="so2" >Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="he1" >Heavy Engine 1</option>
<option value="he2" >Heavy Engine 2</option>
<option value="he3" >Heavy Engine 3</option>
<option value="he4" >Heavy Engine 4</option>
        </select>
        <select id="slot6">
          <option value="na">Empty</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
<option value="ha1" >Battleship Armor 1</option>
<option value="ha2" >Battleship Armor 2</option>
<option value="ha3" >Battleship Armor 3</option>
<option value="na1" >Battlecruiser Armor 1</option>
<option value="na2" >Battlecruiser Armor 2</option>
<option value="na3" >Battlecruiser Armor 3</option>
        </select>
      </div>
      ;
    }

    //1936 Heavy Ship

    if (this.set == 9){
      var s = 
        <div><select id="slot8">
		<option value="na">Empty</option>
		<option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot9">
          <option value="na">Empty</option>
		  <option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot10">
<option value="na">Empty</option>
		  <option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot11">
<option value="na">Empty</option>
		  <option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot12">
<option value="lo" >Locked</option>
        </select>
        <select id="slot13">
<option value="lo" >Locked</option>
        </select>
        <select id="slot14">
<option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
        </select>
        <select id="slot2">
          <option value="na">Empty</option>
		  <option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="na">Empty</option>
		  <option value="fc1" >Fire Control 0</option>
<option value="fc2" >Fire Control 1</option>
<option value="fc3" >Fire Control 2</option>
<option value="fc4" >Fire Control 3</option>
<option value="so1" >Sonar 1</option>
<option value="so2" >Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="na">Empty</option>
		  <option value="ra1" >Radar 1</option>
<option value="ra2" >Radar 2</option>
<option value="ra3" >Radar 3</option>
<option value="ra4" >Radar 4</option>
<option value="so1" >Sonar 1</option>
<option value="so2" >Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="he1" >Heavy Engine 1</option>
<option value="he2" >Heavy Engine 2</option>
<option value="he3" >Heavy Engine 3</option>
<option value="he4" >Heavy Engine 4</option>
        </select>
        <select id="slot6">
          <option value="na">Empty</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
<option value="ha1" >Battleship Armor 1</option>
<option value="ha2" >Battleship Armor 2</option>
<option value="ha3" >Battleship Armor 3</option>
<option value="na1" >Battlecruiser Armor 1</option>
<option value="na2" >Battlecruiser Armor 2</option>
<option value="na3" >Battlecruiser Armor 3</option>
        </select>
      </div>
      ;
    }

    //1940 Heavy Ship
    if (this.set == 10){
      var s = 
        <div><select id="slot8">
		<option value="na">Empty</option>
		<option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot9">
          <option value="na">Empty</option>
		  <option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot10">
<option value="na">Empty</option>
		  <option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot11">
<option value="na">Empty</option>
		  <option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot12">
<option value="na">Empty</option>
		  <option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot13">
<option value="lo" >Locked</option>
        </select>
        <select id="slot14">
<option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
        </select>
        <select id="slot2">
          <option value="na">Empty</option>
		  <option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="na">Empty</option>
		  <option value="fc1" >Fire Control 0</option>
<option value="fc2" >Fire Control 1</option>
<option value="fc3" >Fire Control 2</option>
<option value="fc4" >Fire Control 3</option>
<option value="so1" >Sonar 1</option>
<option value="so2" >Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="na">Empty</option>
		  <option value="ra1" >Radar 1</option>
<option value="ra2" >Radar 2</option>
<option value="ra3" >Radar 3</option>
<option value="ra4" >Radar 4</option>
<option value="so1" >Sonar 1</option>
<option value="so2" >Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="he1" >Heavy Engine 1</option>
<option value="he2" >Heavy Engine 2</option>
<option value="he3" >Heavy Engine 3</option>
<option value="he4" >Heavy Engine 4</option>
        </select>
        <select id="slot6">
          <option value="na">Empty</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
<option value="ha1" >Battleship Armor 1</option>
<option value="ha2" >Battleship Armor 2</option>
<option value="ha3" >Battleship Armor 3</option>
<option value="na1" >Battlecruiser Armor 1</option>
<option value="na2" >Battlecruiser Armor 2</option>
<option value="na3" >Battlecruiser Armor 3</option>
        </select>
      </div>
      ;
    }

    //1944 Heavy Ship
    if (this.set == 11){
      var s = 
        <div><select id="slot8">
		<option value="na">Empty</option>
		<option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot9">
          <option value="na">Empty</option>
		  <option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot10">
<option value="na">Empty</option>
		  <option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot11">
<option value="na">Empty</option>
		  <option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot12">
<option value="na">Empty</option>
		  <option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="pc1" >Floatplane Catapult 1</option>
<option value="pc2" >Floatplane Catapult 2</option>
        </select>
        <select id="slot13">
<option value="lo" >Locked</option>
        </select>
        <select id="slot14">
<option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="hb1">Heavy Battery 1</option>
<option value="hb2">Heavy Battery 2</option>
<option value="hb3">Heavy Battery 3</option>
<option value="hb4">Heavy Battery 4</option>
        </select>
        <select id="slot2">
          <option value="na">Empty</option>
		  <option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot3">
          <option value="na">Empty</option>
		  <option value="fc1" >Fire Control 0</option>
<option value="fc2" >Fire Control 1</option>
<option value="fc3" >Fire Control 2</option>
<option value="fc4" >Fire Control 3</option>
<option value="so1" >Sonar 1</option>
<option value="so2" >Sonar 2</option>
        </select>
        <select id="slot4">
          <option value="na">Empty</option>
		  <option value="ra1" >Radar 1</option>
<option value="ra2" >Radar 2</option>
<option value="ra3" >Radar 3</option>
<option value="ra4" >Radar 4</option>
<option value="so1" >Sonar 1</option>
<option value="so2" >Sonar 2</option>
        </select>
        <select id="slot5">
          <option value="he1" >Heavy Engine 1</option>
<option value="he2" >Heavy Engine 2</option>
<option value="he3" >Heavy Engine 3</option>
<option value="he4" >Heavy Engine 4</option>
        </select>
        <select id="slot6">
          <option value="na">Empty</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
<option value="ha1" >Battleship Armor 1</option>
<option value="ha2" >Battleship Armor 2</option>
<option value="ha3" >Battleship Armor 3</option>
<option value="na1" >Battlecruiser Armor 1</option>
<option value="na2" >Battlecruiser Armor 2</option>
<option value="na3" >Battlecruiser Armor 3</option>
        </select>
      </div>
      ;
    }

    //Early Submarine
    if (this.set == 12){
      var s = 
        <div><select id="slot8">
		<option value="na">Empty</option>
		<option value="tt1" >Torpedo Tubes 1</option>
<option value="tt2" >Torpedo Tubes 2</option>
<option value="tt3" >Torpedo Tubes 3</option>
<option value="tt4" >Torpedo Tubes 4</option>
<option value="mt" >Minelaying Tubes</option>
        </select>
        <select id="slot9">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot10">
<option value="lo" >Locked</option>
        </select>
        <select id="slot11">
<option value="lo" >Locked</option>
        </select>
        <select id="slot12">
<option value="lo" >Locked</option>
        </select>
        <select id="slot13">
<option value="lo" >Locked</option>
        </select>
        <select id="slot14">
<option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="tt1" >Torpedo Tubes 1</option>
<option value="tt2" >Torpedo Tubes 2</option>
<option value="tt3" >Torpedo Tubes 3</option>
<option value="tt4" >Torpedo Tubes 4</option>
        </select>
        <select id="slot2">
          <option value="se1" >Submarine Engine 1</option>
<option value="se2" >Submarine Engine 2</option>
<option value="se3" >Submarine Engine 3</option>
<option value="se4" >Submarine Engine 4</option>
        </select>
        <select id="slot3">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot4">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot5">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot6">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot7">
<option value="lo" >Locked</option>
        </select>
      </div>
      ;
    }

    //1936 Submarine
    if (this.set == 13){
      var s = 
        <div><select id="slot8">
		<option value="na">Empty</option>
		<option value="ra1" >Radar 1</option>
<option value="ra2" >Radar 2</option>
<option value="ra3" >Radar 3</option>
<option value="ra4" >Radar 4</option>
		<option value="tt1" >Torpedo Tubes 1</option>
<option value="tt2" >Torpedo Tubes 2</option>
<option value="tt3" >Torpedo Tubes 3</option>
<option value="tt4" >Torpedo Tubes 4</option>
<option value="mt" >Minelaying Tubes</option>
        </select>
        <select id="slot9">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot10">
<option value="lo" >Locked</option>
        </select>
        <select id="slot11">
<option value="lo" >Locked</option>
        </select>
        <select id="slot12">
<option value="lo" >Locked</option>
        </select>
        <select id="slot13">
<option value="lo" >Locked</option>
        </select>
        <select id="slot14">
<option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="tt1" >Torpedo Tubes 1</option>
<option value="tt2" >Torpedo Tubes 2</option>
<option value="tt3" >Torpedo Tubes 3</option>
<option value="tt4" >Torpedo Tubes 4</option>
        </select>
        <select id="slot2">
          <option value="se1" >Submarine Engine 1</option>
<option value="se2" >Submarine Engine 2</option>
<option value="se3" >Submarine Engine 3</option>
<option value="se4" >Submarine Engine 4</option>
        </select>
        <select id="slot3">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot4">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot5">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot6">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot7">
<option value="lo" >Locked</option>
        </select>
      </div>
      ;
    }

    //1940 Submarine
    if (this.set == 14){
      var s = 
        <div><select id="slot8">
		<option value="na">Empty</option>
		<option value="tt1" >Torpedo Tubes 1</option>
<option value="tt2" >Torpedo Tubes 2</option>
<option value="tt3" >Torpedo Tubes 3</option>
<option value="tt4" >Torpedo Tubes 4</option>
<option value="mt" >Minelaying Tubes</option>
        </select>
        <select id="slot9">
		<option value="na">Empty</option>
          <option value="ra1" >Radar 1</option>
<option value="ra2" >Radar 2</option>
<option value="ra3" >Radar 3</option>
<option value="ra4" >Radar 4</option>
<option value="sk1" >Snorkel 1</option>
<option value="sk2" >Snorkel 2</option>
        </select>
        <select id="slot10">
<option value="na">Empty</option>
		<option value="tt1" >Torpedo Tubes 1</option>
<option value="tt2" >Torpedo Tubes 2</option>
<option value="tt3" >Torpedo Tubes 3</option>
<option value="tt4" >Torpedo Tubes 4</option>
<option value="mt" >Minelaying Tubes</option>
        </select>
        <select id="slot11">
<option value="lo" >Locked</option>
        </select>
        <select id="slot12">
<option value="lo" >Locked</option>
        </select>
        <select id="slot13">
<option value="lo" >Locked</option>
        </select>
        <select id="slot14">
<option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="tt1" >Torpedo Tubes 1</option>
<option value="tt2" >Torpedo Tubes 2</option>
<option value="tt3" >Torpedo Tubes 3</option>
<option value="tt4" >Torpedo Tubes 4</option>
        </select>
        <select id="slot2">
          <option value="se1" >Submarine Engine 1</option>
<option value="se2" >Submarine Engine 2</option>
<option value="se3" >Submarine Engine 3</option>
<option value="se4" >Submarine Engine 4</option>
        </select>
        <select id="slot3">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot4">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot5">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot6">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot7">
<option value="lo" >Locked</option>
        </select>
      </div>
      ;
    }

    //1944 Submarine
    if (this.set == 15){
      var s = 
        <div><select id="slot8">
		<option value="na">Empty</option>
		<option value="tt1" >Torpedo Tubes 1</option>
<option value="tt2" >Torpedo Tubes 2</option>
<option value="tt3" >Torpedo Tubes 3</option>
<option value="tt4" >Torpedo Tubes 4</option>
<option value="mt" >Minelaying Tubes</option>
        </select>
        <select id="slot9">
		<option value="na">Empty</option>
          <option value="ra1" >Radar 1</option>
<option value="ra2" >Radar 2</option>
<option value="ra3" >Radar 3</option>
<option value="ra4" >Radar 4</option>
<option value="sk1" >Snorkel 1</option>
<option value="sk2" >Snorkel 2</option>
        </select>
        <select id="slot10">
<option value="na">Empty</option>
		<option value="tt1" >Torpedo Tubes 1</option>
<option value="tt2" >Torpedo Tubes 2</option>
<option value="tt3" >Torpedo Tubes 3</option>
<option value="tt4" >Torpedo Tubes 4</option>
<option value="mt" >Minelaying Tubes</option>
        </select>
        <select id="slot11">
<option value="lo" >Locked</option>
        </select>
        <select id="slot12">
<option value="lo" >Locked</option>
        </select>
        <select id="slot13">
<option value="lo" >Locked</option>
        </select>
        <select id="slot14">
<option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="tt1" >Torpedo Tubes 1</option>
<option value="tt2" >Torpedo Tubes 2</option>
<option value="tt3" >Torpedo Tubes 3</option>
<option value="tt4" >Torpedo Tubes 4</option>
        </select>
        <select id="slot2">
          <option value="se1" >Submarine Engine 1</option>
<option value="se2" >Submarine Engine 2</option>
<option value="se3" >Submarine Engine 3</option>
<option value="se4" >Submarine Engine 4</option>
        </select>
        <select id="slot3">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot4">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot5">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot6">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot7">
<option value="lo" >Locked</option>
        </select>
      </div>
      ;
    }

    // Converted Cruiser
    if (this.set == 16){
      var s = 
        <div><select id="slot8">
		<option value="lo" >Locked</option>
        </select>
        <select id="slot9">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot10">
<option value="lo" >Locked</option>
        </select>
        <select id="slot11">
<option value="lo" >Locked</option>
        </select>
        <select id="slot12">
<option value="lo" >Locked</option>
        </select>
        <select id="slot13">
<option value="lo" >Locked</option>
        </select>
        <select id="slot14">
<option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="hs" >Hangar Space</option>
        </select>
        <select id="slot2">
		<option value="na">Empty</option>
          <option value="hs" >Hangar Space</option>
        </select>
        <select id="slot3">
          <option value="na">Empty</option>
		  <option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot4">
          <option value="na">Empty</option>
		  <option value="ra1" >Radar 1</option>
<option value="ra2" >Radar 2</option>
<option value="ra3" >Radar 3</option>
<option value="ra4" >Radar 4</option>
        </select>
        <select id="slot5">
          <option value="ce1" >Cruiser Engine 1</option>
<option value="ce2" >Cruiser Engine 2</option>
<option value="ce3" >Cruiser Engine 3</option>
<option value="ce4" >Cruiser Engine 4</option>
<option value="ve1" >Carrier Engine 1</option>
<option value="ve2" >Carrier Engine 2</option>
<option value="ve3" >Carrier Engine 3</option>
<option value="ve4" >Carrier Engine 4</option>
        </select>
        <select id="slot6">
          <option value="na">Empty</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
<option value="lo" >Locked</option>
        </select>
      </div>
      ;
    }

    //Converted Battleship
    if (this.set == 17){
      var s = 
        <div><select id="slot8">
		<option value="na">Empty</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="hs" >Hangar Space</option>
        </select>
        <select id="slot9">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot10">
<option value="lo" >Locked</option>
        </select>
        <select id="slot11">
<option value="lo" >Locked</option>
        </select>
        <select id="slot12">
<option value="lo" >Locked</option>
        </select>
        <select id="slot13">
<option value="lo" >Locked</option>
        </select>
        <select id="slot14">
<option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="hs" >Hangar Space</option>
        </select>
        <select id="slot2">
		<option value="na">Empty</option>
          <option value="hs" >Hangar Space</option>
        </select>
        <select id="slot3">
          <option value="na">Empty</option>
		  <option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot4">
          <option value="na">Empty</option>
		  <option value="ra1" >Radar 1</option>
<option value="ra2" >Radar 2</option>
<option value="ra3" >Radar 3</option>
<option value="ra4" >Radar 4</option>
        </select>
        <select id="slot5">
          <option value="he1" >Heavy Engine 1</option>
<option value="he2" >Heavy Engine 2</option>
<option value="he3" >Heavy Engine 3</option>
<option value="he4" >Heavy Engine 4</option>
<option value="ve1" >Carrier Engine 1</option>
<option value="ve2" >Carrier Engine 2</option>
<option value="ve3" >Carrier Engine 3</option>
<option value="ve4" >Carrier Engine 4</option>
        </select>
        <select id="slot6">
          <option value="na">Empty</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
<option value="lo" >Locked</option>
        </select>
      </div>
      ;
    }

    //1936 CV
    if (this.set == 18){
      var s = 
        <div><select id="slot8">
		<option value="na">Empty</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="hs" >Hangar Space</option>
        </select>
        <select id="slot9">
          <option value="lo" >Locked</option>
        </select>
        <select id="slot10">
<option value="lo" >Locked</option>
        </select>
        <select id="slot11">
<option value="lo" >Locked</option>
        </select>
        <select id="slot12">
<option value="lo" >Locked</option>
        </select>
        <select id="slot13">
<option value="lo" >Locked</option>
        </select>
        <select id="slot14">
<option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="hs" >Hangar Space</option>
        </select>
        <select id="slot2">
		<option value="na">Empty</option>
          <option value="hs" >Hangar Space</option>
        </select>
        <select id="slot3">
          <option value="na">Empty</option>
		  <option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot4">
          <option value="na">Empty</option>
		  <option value="ra1" >Radar 1</option>
<option value="ra2" >Radar 2</option>
<option value="ra3" >Radar 3</option>
<option value="ra4" >Radar 4</option>
        </select>
        <select id="slot5">
<option value="ve1" >Carrier Engine 1</option>
<option value="ve2" >Carrier Engine 2</option>
<option value="ve3" >Carrier Engine 3</option>
<option value="ve4" >Carrier Engine 4</option>
        </select>
        <select id="slot6">
          <option value="na">Empty</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
<option value="lo" >Locked</option>
        </select>
      </div>
      ;
    }

    //1940 CV
    if (this.set == 19){
      var s = 
        <div><select id="slot8">
		<option value="na">Empty</option>
		  <option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="hs" >Hangar Space</option>
        </select>
        <select id="slot9">
          <option value="na">Empty</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="hs" >Hangar Space</option>
        </select>
        <select id="slot10">
<option value="lo" >Locked</option>
        </select>
        <select id="slot11">
<option value="lo" >Locked</option>
        </select>
        <select id="slot12">
<option value="lo" >Locked</option>
        </select>
        <select id="slot13">
<option value="lo" >Locked</option>
        </select>
        <select id="slot14">
<option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="hs" >Hangar Space</option>
        </select>
        <select id="slot2">
		<option value="na">Empty</option>
          <option value="hs" >Hangar Space</option>
        </select>
        <select id="slot3">
          <option value="na">Empty</option>
		  <option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot4">
          <option value="na">Empty</option>
		  <option value="ra1" >Radar 1</option>
<option value="ra2" >Radar 2</option>
<option value="ra3" >Radar 3</option>
<option value="ra4" >Radar 4</option>
        </select>
        <select id="slot5">
<option value="ve1" >Carrier Engine 1</option>
<option value="ve2" >Carrier Engine 2</option>
<option value="ve3" >Carrier Engine 3</option>
<option value="ve4" >Carrier Engine 4</option>
        </select>
        <select id="slot6">
          <option value="na">Empty</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
<option value="lo" >Locked</option>
        </select>
      </div>
      ;
    }

    //1944 CV
    if (this.set == 20){
      var s = 
        <div><select id="slot8">
		<option value="na">Empty</option>
		  <option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
<option value="hs" >Hangar Space</option>
        </select>
        <select id="slot9">
          <option value="na">Empty</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="hs" >Hangar Space</option>
        </select>
        <select id="slot10">
<option value="na">Empty</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
<option value="hs" >Hangar Space</option>
        </select>
        <select id="slot11">
<option value="lo" >Locked</option>
        </select>
        <select id="slot12">
<option value="lo" >Locked</option>
        </select>
        <select id="slot13">
<option value="lo" >Locked</option>
        </select>
        <select id="slot14">
<option value="lo" >Locked</option>
        </select>

        <br></br>

        <select id="slot1">
          <option value="hs" >Hangar Space</option>
        </select>
        <select id="slot2">
		<option value="na">Empty</option>
          <option value="hs" >Hangar Space</option>
        </select>
        <select id="slot3">
          <option value="na">Empty</option>
		  <option value="aa1" >Anti-Air 1</option>
<option value="aa2" >Anti-Air 2</option>
<option value="aa3" >Anti-Air 3</option>
<option value="aa4" >Anti-Air 4</option>
        </select>
        <select id="slot4">
          <option value="na">Empty</option>
		  <option value="ra1" >Radar 1</option>
<option value="ra2" >Radar 2</option>
<option value="ra3" >Radar 3</option>
<option value="ra4" >Radar 4</option>
        </select>
        <select id="slot5">
<option value="ve1" >Carrier Engine 1</option>
<option value="ve2" >Carrier Engine 2</option>
<option value="ve3" >Carrier Engine 3</option>
<option value="ve4" >Carrier Engine 4</option>
        </select>
        <select id="slot6">
          <option value="na">Empty</option>
		  <option value="sb1">Secondary Battery 1</option>
<option value="sb2">Secondary Battery 2</option>
<option value="sbdp">Dual Purpose Secondary Battery</option>
        </select>
        <select id="slot7">
<option value="lo" >Locked</option>
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

import { Component } from '@angular/core';

import { hulls } from '../database';
import { slots } from '../database';
import { equipments } from '../database';
import { stats } from '../database';
import { doctrines } from '../database';
import { classes } from '../database';
import { designers } from '../database';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ShipComponent {
  hulls = [];
  slots = [];
  equipments = equipments;
  equipBySlot = [];
  slotByHull = [];
  equipBySlotByHull = [];
  index = 0;
  stats = stats;
  statslist = {};
  statslistretain = {};
  statsname = [];
  statsid = [];
  affectedstatslist = {};

  selectedEquipsList = [];
  statsEquipsList = [];

  docts = [];
  lastdoct = "";
  classlist = [];

  desilist = [];
  lastdesi = "";

  constructor() {
    this.slots = slots;
    this.hulls = hulls;
    this.stats = stats;
    this.equipBySlot = [];
    this.slotByHull = [];
    this.equipBySlotByHull = [];
    this.statslist = {};
    this.statslistretain = {};
    this.statsname = [];
    this.statsid = [];
    this.affectedstatslist = {};

    this.selectedEquipsList = [];
    this.statsEquipsList = [];

    this.docts = doctrines;
    this.classlist = classes;
    this.lastdoct = "No Doctrine";
    this.lastdesi = "No Designer";

    this.desilist = designers;

    console.log(this.classlist);

    /*for(var val of this.slots){
      if(this.hulls[2].slots.indexOf(val.id) > -1){
        this.slots_DD40.push(val);
      }
    }*/

    for(var val3 of this.hulls){
      var temp = [];
      for(var val5 of val3.slots){
        for(var val4 of this.slots){
          if(val5 == val4.id){
            temp.push(val4);
          }
        }
      }
      this.slotByHull.push(temp);
      temp = [];
    }
    console.log(this.slotByHull)

    for(var val1 of this.slots){
      this.equipBySlot.push([]);
      for(var val2 of this.equipments){
        if(val1.categories.indexOf(val2.category) > -1){
          var temp = this.equipBySlot.pop();
          temp.push(val2);
          this.equipBySlot.push(temp);
          //this.equipBySlot[this.equipBySlot.length-1] = this.equipBySlot[this.equipBySlot.length-1].push(val2); 
        }
      }
    }
    //console.log(this.equipBySlot)

    for(var val7 of this.slotByHull){
      var temp1 = [];
      for(var val8 of val7){
        temp1.push([]);
        for(var val9 of this.equipments){
          if(val8.categories.indexOf(val9.category) > -1){
            var temp = temp1.pop();
            temp.push(val9);
            temp1.push(temp);
          }
        }
      }
      this.equipBySlotByHull.push(temp1);
    }
    //console.log(this.equipBySlotByHull)

    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    if(vars['x'] == undefined){
      vars['x'] = 0;
    }
    //console.log(vars['x'])

    this.index = vars['x'];

    for(var val10 of this.stats){
      this.statslist[val10.id] = hulls[this.index].stats[val10.id];
      this.statsname.push(val10.name);
      this.statsid.push(val10.id);

      var tempBase = hulls[this.index].stats[val10.id];
      this.statsEquipsList.push({base:tempBase,add:[],per:[],avg:[]});
    }
    //console.log(this.statsname);
    //console.log(this.statslist);

    this.affectedstatslist = this.statslist;

    for(var count = 0; count<14; count++){
      this.selectedEquipsList.push(this.equipments[0]);
    }

    /*for(var count2 = 0; count2<this.stats.length; count2++){
      var tempBase = this.statslist[this.stats[count2].id]
      this.statsEquipsList.push({base:tempBase,add:[],per:[],avg:[]});
    }*/

    //console.log(hulls[this.index]);

    console.log("stats logging");
    console.log(this.stats);
    console.log(this.statslist);

    for(var val0 of this.stats){
      this.statslistretain[val0.id] = this.statslist[val0.id];
    }

    console.log(this.statslistretain);
    console.log("stats logging end");

  }

  public selector(tool, num){
    //console.log(tool);
    //console.log(num);
    for(var val11 of this.equipments){
      if(val11.id == tool){
        this.selectedEquipsList[num] = val11;
      }
    }
    console.log(this.selectedEquipsList);

    this.statsEquipsList = [];
    for(var val10 of this.stats){
      var tempBase = hulls[this.index].stats[val10.id];
      this.statsEquipsList.push({base:tempBase,add:[],per:[],avg:[]});
    }

    for(var val12 of this.stats){
      for(var val13 of this.selectedEquipsList){
        if(val13[val12.id] != undefined){
          //var strFormula = val12.id + "_formula";

          console.log(val13[val12.id]);

          if(val13[val12.id]["add"] != undefined){
            this.statsEquipsList[this.stats.indexOf(val12)]["add"].push(val13[val12.id]["add"]);
          }
          if(val13[val12.id]["per"] != undefined){
            this.statsEquipsList[this.stats.indexOf(val12)]["per"].push(val13[val12.id]["per"]);
          }
          if(val13[val12.id]["avg"] != undefined){
            this.statsEquipsList[this.stats.indexOf(val12)]["avg"].push(val13[val12.id]["avg"]);
          }


          //this.statsEquipsList[this.stats.indexOf(val12)][val13[strFormula]].push(val13[val12.id]);
        }
      }
    }

    console.log(this.statsEquipsList);

    this.updateStats();

  }

  public updateStats(){
    var justFollow = 0;

    for(var val14 of this.statsEquipsList){
      var newBase = 0;

      if(val14.avg.length != 0){
        var div = val14.avg.length;
        if(val14.base != 0){
          newBase = newBase + val14.base;
          div = div + 1;
        }
        for(var val15 of val14.avg){
          newBase = newBase + val15;
        }
        newBase = newBase/div;
      } else {
        newBase = newBase + val14.base;
        if(val14.add.length != 0){
          for(var val16 of val14.add){
            newBase = newBase + val16;
          }
        }
      }

      if(val14.per.length != 0){
        var perAddTab = [];
        for(var val17 of val14.per){
          var basePer = val17*newBase;
          perAddTab.push(basePer);
        }
        for(var val18 of perAddTab){
          newBase = newBase + val18;
        }
      }

      this.statslist[this.stats[justFollow].id] = newBase;

      justFollow = justFollow + 1;

    }
    console.log(this.statslist);
    console.log(this.statslistretain);
    for(var val0 of this.stats){
      this.statslistretain[val0.id] = this.statslist[val0.id];
    }
    console.log(this.statslistretain);
  }
  
  public getclass(){

    //console.log(this.selectedEquipsList);

    var curhull = hulls[this.index];
    var temp = "";
    var finalClass = "Invalid Class";
    for(var val20 of this.classlist){
      if(val20.hull.indexOf(curhull.name)>-1){
        if(val20.condition.length == 0){
          temp = val20.name;
        } else {

          for(var val21 of this.selectedEquipsList){
            if(val20.condition.indexOf(val21.name)>-1){
              temp = val20.name;
            }
          }

        }
        if(val20.exclusion.length == 0){
          finalClass = temp;
        } else {
          var tester = true;
          for(var val22 of this.selectedEquipsList){
            if(val20.exclusion.indexOf(val22.name)>-1){
              tester = false;
            }
          }
          if(tester){
            finalClass = temp;
          }
        }
      }
    }

    return finalClass;
  }

  public coupledselector(){
    for(var val0 of this.stats){
      this.statslist[val0.id] = this.statslistretain[val0.id];
    }

    console.log(this.getclass());
    var newstat = [];

    for(var val23 of this.stats){
        var tempBase = this.statslist[val23.id];
        newstat.push({base:tempBase,add:[],per:[],avg:[]});
      }

    //Registers Doctrine Changes

    for(var val19 of this.docts){
      if(val19.name==this.lastdoct){
        console.log(val19);

        var step = 0
        for(var val24 of this.stats){
          var curname = val24.id;
          if(val19[curname] != undefined){
            console.log(curname);
            for(var val25 of val19[curname]){
              if(val25[2] == this.getclass()){
                console.log(val25);
                newstat[step][val25[0]].push(val25[1]);
              }
            }
          }

          step = step+1;
        }

      }
    }
      //Registers Designer Changes

      for(var val19 of this.desilist){
      if(val19.name==this.lastdesi){
        console.log(val19);

        var step = 0
        for(var val24 of this.stats){
          var curname = val24.id;
          if(val19[curname] != undefined){
            console.log(curname);
            for(var val25 of val19[curname]){
              if(val25[2] == this.getclass()){
                console.log(val25);
                newstat[step][val25[0]].push(val25[1]);
              }
            }
          }

          step = step+1;
        }

      }

    }

    console.log(newstat);
    this.updateStatsModifier(newstat);
  }

  public doctselector(doct){
    this.lastdoct = doct;
    this.coupledselector();
  }

  public desiselector(desi){
    this.lastdesi = desi;
    this.coupledselector();
  }

  public updateStatsModifier(list){
    var justFollow = 0;

    for(var val14 of list){
      var newBase = 0;

      if(val14.avg.length != 0){
        var div = val14.avg.length;
        if(val14.base != 0){
          newBase = newBase + val14.base;
          div = div + 1;
        }
        for(var val15 of val14.avg){
          newBase = newBase + val15;
        }
        newBase = newBase/div;
      } else {
        newBase = newBase + val14.base;
        if(val14.add.length != 0){
          for(var val16 of val14.add){
            newBase = newBase + val16;
          }
        }
      }

      if(val14.per.length != 0){
        var perAddTab = [];
        for(var val17 of val14.per){
          var basePer = val17*newBase;
          perAddTab.push(basePer);
        }
        for(var val18 of perAddTab){
          newBase = newBase + val18;
        }
      }

      this.statslist[this.stats[justFollow].id] = newBase;

      justFollow = justFollow + 1;

    }
    console.log(this.statslist);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
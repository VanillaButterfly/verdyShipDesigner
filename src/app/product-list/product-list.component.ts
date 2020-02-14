import { Component } from '@angular/core';

import { hulls } from '../database';
import { slots } from '../database';
import { equipments } from '../database';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ShipComponent {
  hulls = [];
  slots = [];
  equipments = equipments;
  slots_DD40 = [];
  equipBySlot = [];

  constructor() {
    this.slots = slots;
    this.hulls = hulls;
    for(var val of this.slots){
      if(this.hulls[2].slots.indexOf(val.id) > -1){
        this.slots_DD40.push(val);
      }
    }
    for(var val1 of this.slots_DD40){
      this.equipBySlot.push([]);
      console.log(this.equipBySlot);
      for(var val2 of this.equipments){
        if(val1.categories.indexOf(val2.category) > -1){
          var temp = this.equipBySlot.pop();
          temp.push(val2);
          this.equipBySlot.push(temp);
          //this.equipBySlot[this.equipBySlot.length-1] = this.equipBySlot[this.equipBySlot.length-1].push(val2); 
        }
      }
    }


  }
  

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
import { Component, OnInit } from '@angular/core';

import { hulls } from '../database';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  hulls = hulls;
  value;
  hullnum = [];

  constructor() { 

    for(var val1 of this.hulls){
      this.hullnum.push("window.location.href = 'https://github-6eoaag.stackblitz.io/?x=" + hulls.indexOf(val1) + "';")
    }

  }

  public goToUrl(i:number): void {
    console.log(i);
    window.location.href = "https://github-6eoaag.stackblitz.io/?x=" + i;
  }

  ngOnInit() {
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
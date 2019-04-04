import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { RestraurantService } from "../service/restraurant.service";

@Component({
  selector: 'restraurant-list',
  templateUrl: './restraurant.list.component.html',
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class RestraurantList implements OnInit { 

    public restraurantList: any[] = [];
    public selectedRestraurant = {};
    public isLandscape = true;
    public selectedIndex = 0;

    public selectedRestraurantName = "Hopdoddy Burger Bar";

    constructor(private _restraurantService: RestraurantService, private router: Router) { 
      this.isLandscape = window.innerWidth > window.innerHeight;
    }

    ngOnInit() {
        this._restraurantService.getRestraurantData().then((data) => {
          this.restraurantList = data;
        });
    }

    onResize() {
      this.isLandscape = window.innerWidth > window.innerHeight;
    }

    landscapeClick(restraurantInfo: any) {
      this.selectedRestraurant = restraurantInfo;
      this.restraurantList.forEach((data, index) => {
        if(data.name == restraurantInfo.name) {
          this.selectedRestraurantName = data.name;
        }
      })
    }

    portaitClick(restraurantInfo: any) {
      this.router.navigateByUrl('/info/' + restraurantInfo.name);
    }
}

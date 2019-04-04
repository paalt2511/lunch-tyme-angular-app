import { Component, OnInit } from '@angular/core';
import { RestraurantService } from "../service/restraurant.service";

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  { 

  restraurantList: any = [];

  constructor(private _restraurantService: RestraurantService) { }  

  ngOnInit() {
    this._restraurantService.getRestraurantData().then((data) => {
      this._restraurantService.setRestraurantList(data);
    })
  }

  deleteRestraurant(index: number) {
    this.restraurantList.splice(index, 1)
  }
}

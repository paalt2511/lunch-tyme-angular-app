import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'restraurant-details',
  templateUrl: './restraurant.list.details.component.html',
  styleUrls: ["./restraurant.list.details.component.scss"]
})
export class RestraurantDetails  { 

    @Input() details: any;
    @Output() restraurantChange = new EventEmitter();

    onRestraurantClick= function (restraurantInfo: any) {
      this.restraurantChange.emit(restraurantInfo);
    };

    constructor(private router: Router) { }
}

import { Component } from "@angular/core";
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: "header-component",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {

    isRoot: boolean;

    constructor(private _location: Location,
                private _router: Router) { }

    ngOnInit() {
        this._router.events.subscribe(event => {
          if (this._location.path() !== '') {
            this.isRoot = false;
          } else {
            this.isRoot = true;
          }
        });
      }

    onMapClick() {
    }

    onBackClick() {
        this._location.back();
    }
}
import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { RestraurantService } from '../service/restraurant.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: "restraurant-info",
    templateUrl: "./restraurant.info.component.html",
    styleUrls: ["./restraurant.info.component.scss"]
})
export class RestraurantInfo implements OnInit {
    constructor(private _restraurantService: RestraurantService, private route: ActivatedRoute) { }

    @Input() selectedRestraurantName: string;

    restraurantDetails: any[] = []
    restraurantName: string = "";
    lat: number;
    lng: number;

    ngOnInit() {
        this.updateRestraurantDetails();
    }

    ngOnChanges() {
        this.updateRestraurantDetails();
    }

    updateRestraurantDetails() {
        this._restraurantService.getRestraurantData().then((data: any) => {
            this.restraurantDetails = data.filter((restraurant: any) => {
                return restraurant["name"] == (this.selectedRestraurantName ? this.selectedRestraurantName: this.route.snapshot.params['name'])
            })[0];
            this.lat = this.restraurantDetails["location"]["lat"];
            this.lng = this.restraurantDetails["location"]["lng"];
        })
    }
}
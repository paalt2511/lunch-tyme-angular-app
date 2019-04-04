import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestraurantService {

  private _restraurantList: any = [];

  constructor(private http: Http) { }

  getRestraurantData(): Promise<any> {

    var promiseData = new Promise((resolve, reject)=>{

      if(this._restraurantList.length > 0) {
        resolve(this._restraurantList)
      } else {
        this.http.get("http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json").subscribe((data: any) => {
          this._restraurantList = JSON.parse(data._body).restaurants;
          resolve(this._restraurantList);
        })
      }
    });

    return promiseData;
  }
  

  setRestraurantList(data: any) {
    this._restraurantList = data
  }
}
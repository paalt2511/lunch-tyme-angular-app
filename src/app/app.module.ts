import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { HomeComponent }  from './home/home.component';
import { RestraurantList }  from './RestraurantList/restraurant.list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RestraurantDetails } from './restraurantListDetails/restraurant.list.details.component';
import { RestraurantInfo } from "./retraurantInfo/restraurant.info.component";
import { AgmCoreModule } from '@agm/core';

import { RestraurantService } from './service/restraurant.service';


var appRoutes: Routes = [
  {
    path: "",
    component: RestraurantList
  }, {
    path: "details",
    component: RestraurantInfo
  }, {
    path: "info/:name",
    component: RestraurantInfo
  }
]

@NgModule({
  declarations: [
    HomeComponent, RestraurantList, HeaderComponent, FooterComponent, RestraurantDetails, RestraurantInfo 
  ],
  imports: [
    BrowserModule, 
    HttpModule, 
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBd3VfJXIPuelPsqELuuXY_a0rTSVly5Mc'
    })
  ],
  providers: [RestraurantService],
  bootstrap: [HomeComponent]
})
export class AppModule { }

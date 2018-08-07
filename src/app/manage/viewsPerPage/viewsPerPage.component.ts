import { Component } from '@angular/core';

@Component({
  selector: 'views-component',
  templateUrl: './viewsPerPage.component.html',
})

export class ViewsPerPageComponent  {

  homePageViews: number=0;
  shopViews:number=0;
  //TODO: get number of views from db
  constructor(homePageViews: number, shopViews: number){
    this.homePageViews=homePageViews;
    this.shopViews=shopViews;
  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'inner-component',
  templateUrl: './homepage.component.html',
})

export class HomepageComponent  {
  views: number;

  constructor(views: number){
    //TODO: get number of views from db
    this.views=views+1;
    //TODO: set number of views to db

    //aboudi ha bulbul

  }


}


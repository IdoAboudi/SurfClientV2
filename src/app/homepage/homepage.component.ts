import { Component } from '@angular/core';

@Component({
  selector: 'inner-component',
  templateUrl: './homepage.component.html',
})

export class HomepageComponent  {
  message: string = 'You are in the homepage'
}

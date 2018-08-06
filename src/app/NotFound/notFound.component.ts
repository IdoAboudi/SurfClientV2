import { Component } from '@angular/core';

@Component({
  selector: 'inner-component',
  templateUrl: './notFound.component.html',
})

export class NotFoundComponent  {
  message: string = 'Not Found'
}

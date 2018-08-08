import { Component } from '@angular/core';

@Component({
  selector: 'bar-chart',
  templateUrl: './barChartPageViews.component.html',
})

export class BarChartPageViewsComponent {

  public colors=['red','blue','green'];
  public  dataColumns = [1];

  public  barChartData = [{
    id: 0,
    label: 'label1',
    value1: 10,
    value2: 10,
    value3: 10,
  },{
    id: 1,
    label: 'label2',
    value1: 10,
    value2: 10,
    value3: 10,
  }]


}

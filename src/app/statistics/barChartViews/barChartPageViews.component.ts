import { Component } from '@angular/core';
import {ProductService} from '../../services/products.service';
import {Product} from '../../models/Product';

@Component({
  selector: 'bar-chart',
  templateUrl: './barChartPageViews.component.html',
})

export class BarChartPageViewsComponent {

  constructor(private _productsService: ProductService) {}

  public colors=['red','blue','green','pink','orange','yellow','brown','black','purple'];
  public showGraph = true;
  public  barChartData = [];
  public products: Product[] = [];


  ngOnInit(){
      this.products = this._productsService.getReadyProducts();
      if(this.products.length === 0){
        this.showGraph = false;
        this._productsService.getAllProducts().subscribe((products) => {
          this.initChartData();
        });
        return;
      }
      this.initChartData();
      // this.barChartData = products.map(p =>  p);
  }

  initChartData(){
    this.barChartData = this.products.map((p,i) => {
      return {
        id: i,
        label: p.name,
        value: p.viewed || 1,
        color: this.colors[i % 9]
      }
    }).sort((p1,p2) => {
      return p1.value - p2.value;
    }).slice(0,10);

  }


}

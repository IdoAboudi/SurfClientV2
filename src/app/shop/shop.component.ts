import { Component } from '@angular/core';
import {ProductService} from '../services/products.service';
import {Product} from '../models/Product';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'inner-component',
  templateUrl: './shop.component.html',
})

export class ShopComponent  {
  products: Array<Product>;
  filteredProducts: Array<Product>;
  propsList: string[]=['name','price','address'];
  selectedValue: string = "";
  selectedFiled: string = "name";

  constructor(private _productService: ProductService){

  }

  ngOnInit() {
      this._productService.getAllProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  ngOnDestroy(){
  }

  searchByValue(){
    console.log(`searching by ${this.selectedFiled} ${this.selectedValue}`)
    this.filteredProducts = this.products.filter(x => {
      if(x[this.selectedFiled]){
        return x[this.selectedFiled].includes(this.selectedValue)
      } else return false;
    });
  }

}

@Pipe({
  name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    console.log(`filtering by field ${field} value ${value}`);
    if (!items) return [];
    return items.filter(it => it[field].includes(value))
  }
}

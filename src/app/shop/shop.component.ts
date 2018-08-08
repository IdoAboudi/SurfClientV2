import { Component } from '@angular/core';
import {ProductService} from '../services/products.service';
import {Product} from '../models/Product';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import { Injectable, Pipe, PipeTransform } from '@angular/core';
import {SocketHandlerService} from '../socket-handler.service';

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
  contact: string = "Contact"

  constructor(private _productService: ProductService,private SocketHandlerService: SocketHandlerService){

  }

  ngOnInit() {

      this._productService.getAllProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
        // this.SocketHandlerService.sendEnteredComn("Shop");
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

  getContact(item: Product) {
    console.log(`working ${JSON.stringify(item.viewed)}`);
    item.contact=""+item.phone;
    item.viewed = item.viewed ? item.viewed + 1 : 1

      setTimeout(()=>{
        item.contact="Press for contact customer"
      },10000)

    this.SocketHandlerService.sendViewProduct(item);
    // this._productService.updateProduct(item).subscribe(response => {
    //   if(response.status != 200) {
    //     console.error(`Update failed ${response.status}`);
    //   }
    // });



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

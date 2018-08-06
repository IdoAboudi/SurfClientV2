import { Component } from '@angular/core';
import {ProductService} from "../services/products.service";
import {Product} from "../models/Product";
import {functions} from '../helpers/functions'
import {UpdateComponent} from "./update/update.component";
import {Router} from "@angular/router";

@Component({
  selector: 'inner-component',
  templateUrl: './manage.component.html',
})

export class ManageComponent  {
  message: string = 'This is the manage component';
  products: Product[] = [];

  constructor(private _productService: ProductService, private _router: Router) {}

  ngOnInit(){
    this._productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }


  editProduct(product: Product){
    this._router.navigateByUrl('/edit');
  }

  deleteProduct(product: Product){
    this._productService.deleteProduct(product._id).subscribe(response => {
      if(response.success){
        window.alert('Deleted product of id ' + product._id)
        functions.removeIf(this.products,arrProduct => arrProduct._id === product._id);
      }
    });
  }
}

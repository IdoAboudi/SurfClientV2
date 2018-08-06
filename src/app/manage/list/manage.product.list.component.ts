import {ProductService} from "../../services/products.service";
import {Product} from "../../models/Product";
import {functions} from "../../helpers/functions";
import {NavigationExtras, Router} from "@angular/router";
import {Component} from "@angular/core";

@Component({
  selector: 'inner-component',
  templateUrl: './manage.product.list.component.html',
})

export class ManageProductListComponent{
  products: Product[] = [];

  constructor(private _productService: ProductService, private _router: Router) {}

  ngOnInit(){
    this._productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  editProduct(product: Product){
    this._router.navigate(['manage/edit',product._id],);
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


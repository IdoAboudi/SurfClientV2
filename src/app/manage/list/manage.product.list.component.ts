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
  filteredProducts: Product[] = [];
  selectedFiled = "name";
  selectedValue = "";
  propsList = ['name','price','address'];

  constructor(private _productService: ProductService, private _router: Router) {}

  ngOnInit(){
    this._productService.getAllProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = products;
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

  searchByValue(){
    console.log(`searching by ${this.selectedFiled} ${this.selectedValue}`)
    this.filteredProducts = this.products.filter(x => {
      if(x[this.selectedFiled]){
        return x[this.selectedFiled].includes(this.selectedValue)
      } else return false;
    });
  }
}


import {Component, ViewChild} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductService} from "../../services/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import {Address} from 'ngx-google-places-autocomplete/objects/address';



@Component({
  selector: 'update-component',
  templateUrl: './update.component.html',
})

export class UpdateComponent  {

  product: Product;
  productId: string;
  constructor(private _productService: ProductService, private activatedRoute: ActivatedRoute, private _router: Router){}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
      this._productService.getOneProduct(this.productId).subscribe(product => {
        this.product = product
      });
    })
  }

  @ViewChild("placesRef") placesRef : GooglePlaceDirective;

  public handleAddressChange(address: Address) {
    // Do some stuff
    this.product.address = address.formatted_address;
    this.product.lat = address.geometry.location.lat();
    this.product.lng = address.geometry.location.lng();
  }

  execUpdate(){
    //the product is being sent with the same id and different details so it is updated
    this._productService.updateProduct(this.product).subscribe(response => {
      if(response.status != 200) {
        console.error(`Update failed ${response.status}`);
      }
      this._router.navigate(['manage','list']);
    });

  }
}

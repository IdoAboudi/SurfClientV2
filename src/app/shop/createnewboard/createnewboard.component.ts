import { Component } from '@angular/core';
import {ProductService} from '../../services/products.service';
import {Product} from '../../models/Product';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import { FormsModule }   from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'inner-component',
  templateUrl: './createnewboard.component.html',

})


export class CreateNewBoardComponent  {
  constructor(private _productService: ProductService, private _router: Router){}
  submitted: boolean = false;
  model=new Product();

  ngOnDestroy(){
  }

  onSubmit()
  {
    if(!this.submitted){
      this.submitted = true;
      this._productService.insertProduct(this.model).subscribe((response) => {
        if(response.status != 200){
          console.error(`Error inserting product ${response.statusText}`);
        }

        this._router.navigate(['shop']);
      });
    }
  }
}


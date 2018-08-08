import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ManageComponent }  from './manage.component';
import {ProductService} from '../services/products.service';
import {AppComponent} from "../app.component";
import {RouterModule, Routes} from "@angular/router";
import {UpdateComponent} from "./update/update.component";
import {ManageProductListComponent} from "./list/manage.product.list.component";
import {FormsModule} from "@angular/forms";
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import {CanActivateViaAuthGuard} from '../login/CanActivateViaAuthGuard';
import {AuthService} from '../services/auth.service';



@NgModule({
  imports:      [ BrowserModule, FormsModule, GooglePlaceModule ],
  declarations: [ UpdateComponent, ManageProductListComponent],
  providers: [CanActivateViaAuthGuard, AuthService],
  bootstrap:    [ AppComponent ],
  exports: []
})

export class ManageModule {
}

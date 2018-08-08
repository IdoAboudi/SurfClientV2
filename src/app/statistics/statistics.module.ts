import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../app.component';
import {FormsModule} from '@angular/forms';
import {ManageProductListComponent} from '../manage/list/manage.product.list.component';
import {UpdateComponent} from '../manage/update/update.component';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import {MapsComponent} from './map/maps/maps.component';
import {ProductService} from '../services/products.service';
import { StatisticsComponent } from './statistics.component';
import {BarChartPageViewsComponent} from './barChartViews/barChartPageViews.component';

@NgModule({
  imports:      [ CommonModule,BrowserModule, FormsModule, GooglePlaceModule ],
  declarations: [ MapsComponent, StatisticsComponent,BarChartPageViewsComponent ],
  providers: [ProductService],
  bootstrap:    [ AppComponent ],
  exports: []
})
export class StatisticsModule { }

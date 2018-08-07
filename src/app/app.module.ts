import {NgModule, ViewChild} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './NotFound/notFound.component';
import {CreateNewBoardComponent} from './shop/createnewboard/createnewboard.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ProductService} from './services/products.service';
import {HttpModule} from '@angular/http';
import {ManageComponent} from "./manage/manage.component";
import {ManageModule} from "./manage/manage.module";
import {UpdateComponent} from "./manage/update/update.component";
import {ManageProductListComponent} from "./manage/list/manage.product.list.component";
import {FormsModule} from "@angular/forms";
import {ShopComponent} from "./shop/shop.component";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {WeatherComponent} from './weather/weather.component';
import {WeatherService} from './services/weather.service';
import {CameraComponent} from './camera/camera.component';
import { MapsComponent } from './statistics/map/maps/maps.component';

const appRoutes: Routes = [
  {
    path: '', redirectTo: 'shop', pathMatch: 'full'
  },{
    path: 'manage', component: ManageComponent,
    children: [
      {
        path: 'list', component: ManageProductListComponent
      },
      {
        path: 'edit/:id', component: UpdateComponent
      }
    ]
  },
  {
    path: 'shop', component: ShopComponent
  },
  {
    path: 'create', component: CreateNewBoardComponent
  },
  {
    path: 'camera', component: CameraComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];


@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot(appRoutes),
                  HttpModule,
                  ManageModule,
                  FormsModule, GooglePlaceModule
  ],
  declarations: [ AppComponent, ShopComponent, NotFoundComponent, HomepageComponent,CreateNewBoardComponent , ManageComponent, WeatherComponent, CameraComponent, MapsComponent],
  providers: [ProductService, WeatherService],
  bootstrap:    [ AppComponent ],
  exports: [GooglePlaceModule]
})

export class AppModule {
}

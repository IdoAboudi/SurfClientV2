import { Component } from '@angular/core';
import {ProductService} from '../services/products.service';
import {Product} from '../models/Product';
import {WeatherService} from "../services/weather.service";

@Component({
  selector: 'weather-component',
  templateUrl: './weather.component.html',
})

export class WeatherComponent  {

  wave: string = 'TLV Wave Height: 0.5';

  constructor(private _weatherService: WeatherService){
  }

  ngOnInit() {
    this._weatherService.getTelAviv().subscribe((weather)=>{
      this.wave = weather;
    })

  }

  ngOnDestroy(){
  }

}

import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/Product';
import {ProductService} from '../../../services/products.service';

declare var google: any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  products: Array<Product>;
  constructor(private _productsService: ProductService) { }

  ngOnInit() {
    this._productsService.getAllProducts().subscribe(products => {
      this.products = products;
      if(this.products.length > 0){
        var mapProp = {
          center: new google.maps.LatLng(products[0].lat || 0, products[0].lng || 0),
          zoom: 1,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        var map = new google.maps.Map(document.getElementById("gmap"), mapProp);
        products.forEach(p => {
          if(p.lat && p.lng){
            console.log(`lat ${p.lat} lng ${p.lng}`);
            let infoWindow = new google.maps.InfoWindow({content: p.address})
            let latlng = new google.maps.LatLng(p.lat,p.lng);
            var newMarker = new google.maps.Marker({
              position: latlng,
              map: map
            });
            newMarker.addListener('click',()=>{infoWindow.open(map,newMarker)});
          }
        })
      }

    })

  }

}

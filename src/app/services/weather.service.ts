import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService{


  //this loads the http client into the service automatically
  constructor(private http: Http) {
  }

  getTelAviv() {
    let headers: Headers = new Headers();
    headers.set('Authorization','34a5fbc2-97c2-11e8-8a3b-0242ac130004-34a5fd16-97c2-11e8-8a3b-0242ac130004');
    //don't forget the 'z'
    return this.http.get('https://apiz.stormglass.io/point?lat=32.1&lng=34.4',{
      headers: headers
    })
    // ...and calling .json() on the response to return data
      .map((res: Response) => {
        let weather = res.json();
        return weather.hours[0].waveHeight[1].value;
      });
    //...errors if any
  }
}

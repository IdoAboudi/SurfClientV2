import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService{

  isUserLoggedIn: boolean = false;
  result;
  private loginUrl = 'http://localhost:8080/api/login/:username/:password';
  constructor(private http: Http){
  }

  isLoggedIn(){
    return this.isUserLoggedIn;
  }

  login(user: string,pass: string, callback: (boolean) => void){
    this.result = this.http.get(this.loginUrl.replace(":username",user).replace(":password",pass));

    this.result.subscribe((res) => {
      console.log(`service subscriber`);
      if(res.text() === 'TRUE'){
        this.isUserLoggedIn = true;
        callback(true);
      } else {
        this.isUserLoggedIn = false;
        callback(false);
      }
    });

    return this.result;
  }
}

import {Injectable} from '@angular/core';

@Injectable()
export class AuthService{

  isUserLoggedIn: boolean = false

  isLoggedIn(){
    return this.isUserLoggedIn;
  }

  login(user: string,pass: string){
    console.log(`auth service got ${user} pass ${pass}`);
    if(user=="user" && pass=="s"){
      console.log(`equals`);
      this.isUserLoggedIn = true
      return true;
    } else return false;
  }
}

import {Component, Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'login-user',
  templateUrl: './loginAdmin.component.html',
})

export class LoginAdminComponent{
  user: string;
  pass: string;

  constructor(private authService: AuthService, private _router: Router){}


  validUser(){
console.log(`valid user`);
    if(this.authService.login(this.user,this.pass)) {
      console.log(`equals`);
      this._router.navigate(['manage/list']);
    }
    else
      this._router.navigate(['login']);
  }
}



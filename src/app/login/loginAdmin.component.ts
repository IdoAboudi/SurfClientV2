import {Component, Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'login-user',
  templateUrl: './loginAdmin.component.html',
})

export class LoginAdminComponent {
  user: string;
  pass: string;

  constructor(private authService: AuthService, private _router: Router) {
  }

  ngOnInit(){
    if(this.authService.isUserLoggedIn){
      this._router.navigate(['manage/list']);
    }
  }


  validUser() {
    this.authService.login(this.user, this.pass, (res) => {
      if (res) {
        this._router.navigate(['manage/list']);
      } else {
        window.alert(`Wrong Password ! Try again.`);
        this._router.navigate(['login']);
      }
    })
  }
}



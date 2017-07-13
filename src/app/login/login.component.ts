import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userLogin: Login;

  public loginArray: Login[] =[
    { login: 'ann', password: '111'},
    { login: 'add', password: '222'}];

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

onSubmit(formValue): void {
    this.userLogin = formValue;
    this.loginArray.forEach( item => {
    if (item.login === this.userLogin.login && item.password === this.userLogin.password) {
      this._authService.checkAuth(true);
      this._router.navigate(['users']);
      } else {
      alert('incorrect login or password');
    }
  });

}
}

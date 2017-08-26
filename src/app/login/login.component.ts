import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import { Router } from '@angular/router';
import { AuthenticationService } from '../authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 /* public userLogin: Login;

  public loginArray: Login[] =[
    { login: 'ann', password: '111'}];

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
*/

  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;

    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          // login successful
          this.router.navigate(['/']);
        } else {
          // login failed
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }
}

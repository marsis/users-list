import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterLink } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

  private login: boolean;

  constructor(private _router: Router) { }


 public canActivate(): boolean{
if (localStorage.getItem('currentUser')) {
  // logged in so return true
  return true;
  }
  // not logged in so redirect to login page
    this._router.navigate(['/login']);
    return false;
}

 public checkAuth(login) {
    this.login = login;
  }

}

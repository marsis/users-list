import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterLink } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

  private login: boolean;

  constructor(private _router: Router) { }


  canActivate(): boolean{
console.log(this.login);
  return this.login;
}


  checkAuth(login) {
    this.login = login;
  }

}
/*

 canActivate(): boolean {
 let active = false;
 if (this._authService.checkAuth()) {
 active = true;
 } else {
 this._router.navigate( ['/login'], { skipLocationChange: true } );
 }
 return active;
 }
 */
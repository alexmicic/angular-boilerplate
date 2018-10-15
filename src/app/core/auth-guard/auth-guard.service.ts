import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate() {
    // TODO: Add if logged in condition here
    if( true ) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}

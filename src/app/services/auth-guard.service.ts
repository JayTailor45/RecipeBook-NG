import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';

@NgModule()
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, private authService: AuthService) { }
  
  canActivate() {
    if(this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}

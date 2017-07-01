import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
}                           from '@angular/router';
import { LoginService }      from './login.service';



@Injectable()
export class LoginGuardaService implements CanActivate, CanActivateChild, CanLoad {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.loginService.estadoLogin) { return true; }

    // Store the attempted URL for redirecting
    this.loginService.redirectUrl = url;
    console.log(this.loginService.estadoLogin);
    console.log(this.loginService.redirectUrl);

    this.router.navigate(['/login-module']);

  

   
    return false;
  }
}
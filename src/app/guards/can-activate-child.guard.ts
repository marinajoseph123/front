import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateChildGuard implements CanActivateChild {
  constructor(private router : Router , private global:GlobalService){}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token = localStorage.getItem('token')
      if(token) {
        // this.global.navbarFlag= true
        this.router.navigateByUrl('users')
        return false
      }
      return true;
  }
  
}

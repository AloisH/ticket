import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IsSignGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Observable<boolean>((obs) => {
      this.auth.authStatus$.subscribe((authStatus) => {
        if (!authStatus.isPageLoaded) {
          return;
        }

        if (!authStatus.isAuthenticated) {
          this.router.navigateByUrl('/login');
        }
        obs.next(authStatus.isAuthenticated);
      });
    });
  }
}

import { ApiAuthService, LoginDto } from '@ticket/frontend/core/api';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { LocalStorageHelper, LocalStorageKey } from '@ticket/frontend/core/local-storage';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

export interface AuthStatus {
  isAuthenticated: boolean;
  isPageLoaded: boolean;
}

interface RefreshToken {
  exp: number;
  iat: number;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  public authStatus$: BehaviorSubject<AuthStatus>;

  constructor(private readonly apiAuth: ApiAuthService, private router: Router) {
    this.authStatus$ = new BehaviorSubject<AuthStatus>({ isAuthenticated: false, isPageLoaded: false });
    this.onLoadingWebsite();
  }

  private onLoadingWebsite(): void {
    try {
      const refreshToken = LocalStorageHelper.get<string>(LocalStorageKey.REFRESH_TOKEN);
      const jwtDecoded: RefreshToken = jwt_decode(refreshToken);
      if (this.isJwtExpired(jwtDecoded)) {
        this.resetTokens();
        this.authStatus$.next({ isAuthenticated: false, isPageLoaded: true });
        return;
      }

      this.refreshTokens();
    } catch (err) {
      this.resetTokens();
      this.authStatus$.next({ isAuthenticated: false, isPageLoaded: true });
    }
  }

  public login(loginDto: LoginDto) {
    this.apiAuth.login(loginDto).subscribe((tokens) => {
      this.setTokens(tokens.accessToken, tokens.refreshToken);
      this.authStatus$.next({ isAuthenticated: true, isPageLoaded: true });
      this.router.navigateByUrl('/');
    });
  }

  public logout() {
    this.resetTokens();
    this.authStatus$.next({ isAuthenticated: false, isPageLoaded: true });
    this.router.navigateByUrl('/login');
  }

  private refreshTokens(): void {
    this.apiAuth
      .refresh()
      .pipe(
        catchError((err) => {
          this.resetTokens();
          this.authStatus$.next({ isAuthenticated: false, isPageLoaded: true });
          this.router.navigateByUrl('/login');
          return throwError(() => err);
        })
      )
      .subscribe((tokens) => {
        this.setTokens(tokens.accessToken, tokens.refreshToken);
        this.authStatus$.next({ isAuthenticated: true, isPageLoaded: true });
      });
  }

  private setTokens(accessToken: string, refreshToken: string): void {
    LocalStorageHelper.set(LocalStorageKey.ACCESS_TOKEN, accessToken);
    LocalStorageHelper.set(LocalStorageKey.REFRESH_TOKEN, refreshToken);
  }

  private resetTokens(): void {
    LocalStorageHelper.remove(LocalStorageKey.ACCESS_TOKEN);
    LocalStorageHelper.remove(LocalStorageKey.REFRESH_TOKEN);
  }

  private isJwtExpired(token: RefreshToken): boolean {
    // We need to multiply by 1000 because of the jwt token is in seconds and Date.now() is in milliseconds
    return token.exp * 1000 < Date.now();
  }
}

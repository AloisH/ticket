import { ApiAuthService, TokenDto } from '@ticket/frontend/core/api';
import { BehaviorSubject, Observable, catchError, delay, switchMap, tap, throwError } from 'rxjs';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { LocalStorageHelper, LocalStorageKey } from '@ticket/frontend/core/local-storage';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshing$ = new BehaviorSubject<boolean>(false);

  constructor(private readonly apiAuth: ApiAuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = this.createReqWithTokens(req);

    return next.handle(req).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse && !req.url.includes('/api/auth/refresh') && err.status === 401) {
          return this.handle401Error(req, next);
        }

        return throwError(() => err);
      })
    );
  }

  private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.isRefreshing$.value) {
      return this.handleTokenIsRefreshing(req, next);
    }

    this.isRefreshing$.next(true);
    return this.apiAuth.refresh().pipe(
      tap((res: TokenDto) => {
        LocalStorageHelper.set(LocalStorageKey.ACCESS_TOKEN, res.accessToken);
        LocalStorageHelper.set(LocalStorageKey.REFRESH_TOKEN, res.refreshToken);
      }),
      catchError((err) => {
        this.isRefreshing$.next(false);
        if (err.status === '403') {
          this.handle403Error();
        }

        return throwError(() => err);
      }),
      switchMap(() => {
        this.isRefreshing$.next(false);
        req = this.createReqWithTokens(req);
        return next.handle(req);
      })
    );
  }

  private handle403Error(): void {
    LocalStorageHelper.remove(LocalStorageKey.ACCESS_TOKEN);
    LocalStorageHelper.remove(LocalStorageKey.REFRESH_TOKEN);
    this.router.navigate(['/login']);
  }

  private handleTokenIsRefreshing(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing$.value) {
      req = this.createReqWithTokens(req);
      return next.handle(req);
    }

    // wait 100ms and try again
    return new Observable().pipe(
      delay(100),
      switchMap(() => this.handleTokenIsRefreshing(req, next))
    );
  }

  private createReqWithTokens(req: HttpRequest<any>): HttpRequest<any> {
    const token = this.getCorrectToken(req);

    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private getCorrectToken(req: HttpRequest<any>): string | null {
    try {
      let token = LocalStorageHelper.get<string>(LocalStorageKey.ACCESS_TOKEN);
      if (req.url.includes('/api/auth/refresh')) {
        token = LocalStorageHelper.get(LocalStorageKey.REFRESH_TOKEN);
      }

      return token;
    } catch (e) {
      return null;
    }
  }
}

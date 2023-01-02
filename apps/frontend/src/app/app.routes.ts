import { LoginPageComponent } from '@ticket/frontend/feature/login-page';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    component: LoginPageComponent,
    // TODO: Add canActivate guard
  },
];

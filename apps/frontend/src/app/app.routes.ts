import { IsNotSignGuard, IsSignGuard } from '@ticket/frontend/core/auth';

import { AppComponent } from './app.component';
import { LoginPageComponent } from '@ticket/frontend/feature/login-page';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [IsNotSignGuard],
  },
  {
    path: '',
    component: AppComponent,
    canActivate: [IsSignGuard],
  },
];

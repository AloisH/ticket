import { IsNotSignGuard, IsSignGuard } from '@ticket/frontend/core/auth';

import { GlobalFrameComponent } from '@ticket/frontend/core/global-frame';
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
    component: GlobalFrameComponent,
    canActivate: [IsSignGuard],
  },
];

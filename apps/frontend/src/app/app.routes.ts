import { IsNotSignGuard, IsSignGuard } from '@ticket/frontend/core/auth';

import { LoginPageComponent } from '@ticket/frontend/feature/login-page';
import { NavbarComponent } from '@ticket/frontend/ui/navbar';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [IsNotSignGuard],
  },
  {
    path: '',
    component: NavbarComponent,
    canActivate: [IsSignGuard],
    children: [
      {
        path: '',
        component: NavbarComponent,
      },
      {
        path: 'ticket',
        component: NavbarComponent,
      },
      {
        path: 'me',
        component: NavbarComponent,
      },
    ],
  },
];

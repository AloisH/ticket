import { IsNotSignGuard, IsSignGuard } from '@ticket/frontend/core/auth';

import { DashboardPageComponent } from '@ticket/frontend/feature/dashboard-page';
import { LoginPageComponent } from '@ticket/frontend/feature/login-page';
import { MePageComponent } from '@ticket/frontend/feature/me-page';
import { NavbarComponent } from '@ticket/frontend/ui/navbar';
import { Route } from '@angular/router';
import { TicketPageComponent } from '@ticket/frontend/feature/ticket-page';

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
        component: DashboardPageComponent,
      },
      {
        path: 'ticket',
        component: TicketPageComponent,
      },
      {
        path: 'me',
        component: MePageComponent,
      },
    ],
  },
];

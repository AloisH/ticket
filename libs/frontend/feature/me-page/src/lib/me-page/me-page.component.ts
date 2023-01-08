import { ApiUserService, UserDto } from '@ticket/frontend/core/api';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '@ticket/frontend/core/auth';

@Component({
  selector: 'ticket-me-page',
  templateUrl: './me-page.component.html',
  styleUrls: ['./me-page.component.scss'],
})
export class MePageComponent implements OnInit {
  user?: UserDto;

  constructor(private readonly apiUserService: ApiUserService, private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.apiUserService.findMe().subscribe((user) => {
      this.user = user;
    });
  }

  logout() {
    this.authService.logout();
  }
}

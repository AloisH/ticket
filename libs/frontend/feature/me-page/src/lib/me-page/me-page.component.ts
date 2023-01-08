import { ApiUserService, UserDto } from '@ticket/frontend/core/api';
import { Component, OnInit } from '@angular/core';
import { UpdateMeUserForm, updateMeUserFormField } from './me-page.formly';

import { AuthService } from '@ticket/frontend/core/auth';
import { ModalService } from '@ticket/frontend/ui/modal';

@Component({
  selector: 'ticket-me-page',
  templateUrl: './me-page.component.html',
  styleUrls: ['./me-page.component.scss'],
})
export class MePageComponent implements OnInit {
  user?: UserDto;

  constructor(
    private readonly modalService: ModalService,
    private readonly apiUserService: ApiUserService,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.apiUserService.findMe().subscribe((user) => {
      this.user = user;
    });
  }

  logout() {
    this.authService.logout();
  }

  openEditUserModal() {
    this.modalService.createFormModal({
      title: 'Modifier mon profil',
      fields: updateMeUserFormField,
      submitBtnText: 'Modifier',
      submit: this.submit(),
    });
  }

  submit() {
    return (updateUser: UpdateMeUserForm) => {
      this.apiUserService.updateMe(updateUser).subscribe((user) => {
        this.user = user;
      });
    };
  }
}

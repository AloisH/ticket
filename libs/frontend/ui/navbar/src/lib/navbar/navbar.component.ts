import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ticket-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/'],
      },
      {
        label: 'Mes tickets',
        icon: 'pi pi-fw pi-ticket',
        routerLink: ['/ticket'],
      },
      {
        label: 'Mon profil',
        icon: 'pi pi-fw pi-user',
        routerLink: ['/me'],
      },
    ];
  }
}

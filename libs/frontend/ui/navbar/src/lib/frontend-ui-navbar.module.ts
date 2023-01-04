import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, MenubarModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class FrontendUiNavbarModule {}

import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FrontendUiFormModule } from '@ticket/frontend/ui/form';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FrontendUiFormModule, ButtonModule],
  declarations: [LoginPageComponent],
})
export class FrontendFeatureLoginPageModule {}

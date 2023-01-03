import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FrontendCoreApiModule } from '@ticket/frontend/core/api';
import { FrontendUiFormModule } from '@ticket/frontend/ui/form';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FrontendUiFormModule, ButtonModule, FrontendCoreApiModule],
  declarations: [LoginPageComponent],
})
export class FrontendFeatureLoginPageModule {}

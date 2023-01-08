import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FrontendUiModalModule } from '@ticket/frontend/ui/modal';
import { MePageComponent } from './me-page/me-page.component';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [CommonModule, ButtonModule, CardModule, FrontendUiModalModule, InputTextModule],
  declarations: [MePageComponent],
  exports: [MePageComponent],
})
export class FrontendFeatureMePageModule {}

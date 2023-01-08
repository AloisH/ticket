import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FrontendUiModalModule } from '@ticket/frontend/ui/modal';
import { MePageComponent } from './me-page/me-page.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, ButtonModule, CardModule, FrontendUiModalModule],
  declarations: [MePageComponent],
  exports: [MePageComponent],
})
export class FrontendFeatureMePageModule {}

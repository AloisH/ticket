import { CommonModule } from '@angular/common';
import { MePageComponent } from './me-page/me-page.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [MePageComponent],
  exports: [MePageComponent],
})
export class FrontendFeatureMePageModule {}

import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [DashboardPageComponent],
  exports: [DashboardPageComponent],
})
export class FrontendFeatureDashboardPageModule {}

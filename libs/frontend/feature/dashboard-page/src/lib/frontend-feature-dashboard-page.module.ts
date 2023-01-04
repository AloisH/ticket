import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [DashboardPageComponent],
  exports: [DashboardPageComponent],
})
export class FrontendFeatureDashboardPageModule {}

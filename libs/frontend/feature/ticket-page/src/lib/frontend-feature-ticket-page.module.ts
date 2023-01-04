import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TicketPageComponent } from './ticket-page/ticket-page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TicketPageComponent],
  exports: [TicketPageComponent],
})
export class FrontendFeatureTicketPageModule {}

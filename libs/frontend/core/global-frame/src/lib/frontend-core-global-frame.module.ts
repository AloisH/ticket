import { CommonModule } from '@angular/common';
import { GlobalFrameComponent } from './global-frame/global-frame.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [GlobalFrameComponent],
  exports: [GlobalFrameComponent],
})
export class FrontendCoreGlobalFrameModule {}

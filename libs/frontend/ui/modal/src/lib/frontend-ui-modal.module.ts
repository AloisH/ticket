import { BaseModalComponent } from './base-modal/base-modal.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FormModalComponent } from './form-modal/form-modal.component';
import { FrontendUiFormModule } from '@ticket/frontend/ui/form';
import { ModalService } from './modal.service';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FrontendUiFormModule, DialogModule, ButtonModule],
  providers: [ModalService],
  declarations: [BaseModalComponent, FormModalComponent],
  exports: [BaseModalComponent, FormModalComponent],
})
export class FrontendUiModalModule {}

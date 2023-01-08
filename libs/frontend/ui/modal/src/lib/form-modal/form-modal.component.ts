import { Component, OnInit } from '@angular/core';

import { BaseModalComponent } from '../base-modal/base-modal.component';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { UntypedFormGroup } from '@angular/forms';

export interface ModalFormData {
  title: string;
  fields: FormlyFieldConfig[];
  submitBtnText?: string;
  submit?: (model: any) => void;
}

@Component({
  selector: 'ticket-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent extends BaseModalComponent implements OnInit {
  form = new UntypedFormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [];
  submitBtnText?: string;

  ngOnInit(): void {
    this.fields = this.data.fields;
    this.submitBtnText = this.data.submitBtnText;
    this.title = this.data.title;
  }

  submit(): void {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    this.data.submit(this.model);
    this.model = {};
    this.close();
  }
}

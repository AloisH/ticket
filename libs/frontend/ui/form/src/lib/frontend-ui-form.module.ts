import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FieldWrapperComponent } from './field-wrapper/field-wrapper.component';
import { FormType } from './form.enum';
import { FormlyModule } from '@ngx-formly/core';
import { InputComponent } from './input/input.component';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormlyModule.forRoot({
      wrappers: [{ name: FormType.FieldWrapper, component: FieldWrapperComponent }],
      types: [{ name: FormType.Input, component: InputComponent, wrappers: [FormType.FieldWrapper] }],
    }),
  ],
  declarations: [InputComponent, FieldWrapperComponent],
  exports: [FormlyModule, ReactiveFormsModule, FormsModule],
})
export class FrontendUiFormModule {}

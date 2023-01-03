import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormType } from '@ticket/frontend/ui/form';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'ticket-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: FormType.Input,
      props: {
        label: 'Email',
        required: true,
      },
    },
  ];
}

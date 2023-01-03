import {
  ActivatedForm,
  LoginForm,
  SetPasswordForm,
  activatedFormField,
  loginFormField,
  setPasswordFormField,
} from './login-page.formly';

import { ApiAuthService } from '@ticket/frontend/core/api';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

enum LoginPageState {
  Activated,
  Login,
  SetPassword,
}

@Component({
  selector: 'ticket-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  state: LoginPageState = LoginPageState.Activated;
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[];

  constructor(private readonly apiAuth: ApiAuthService) {
    this.fields = activatedFormField;
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    switch (this.state) {
      case LoginPageState.Activated:
        this.onActivated();
        break;
      case LoginPageState.Login:
        this.onLogin();
        break;
      case LoginPageState.SetPassword:
        this.onPasswordSet();
        break;
      default:
        throw new Error('Not implemented');
    }
  }

  onActivated() {
    this.apiAuth.activated(this.model as ActivatedForm).subscribe((activated) => {
      if (activated) {
        this.fields = loginFormField;
        this.state = LoginPageState.Login;
      } else {
        this.fields = setPasswordFormField;
        this.state = LoginPageState.SetPassword;
      }
    });
  }

  onLogin() {
    this.apiAuth.login(this.model as LoginForm).subscribe((tokenDto) => {
      console.log(tokenDto);
    });
  }

  onPasswordSet() {
    const formResult = this.model as SetPasswordForm;
    this.apiAuth.setPassword({ email: formResult.email, password: formResult.password }).subscribe((passwordSet) => {
      if (passwordSet) {
        this.model = { email: formResult.email, password: '' };
        this.fields = loginFormField;
        this.state = LoginPageState.Login;
      }
    });
  }
}

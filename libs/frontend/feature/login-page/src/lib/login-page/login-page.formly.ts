import { FormType } from '@ticket/frontend/ui/form';
import { FormlyFieldConfig } from '@ngx-formly/core';

export interface ActivatedForm {
  email: string;
}

export const activatedFormField: FormlyFieldConfig[] = [
  {
    key: 'email',
    type: FormType.Input,
    props: {
      label: 'Email',
      required: true,
    },
  },
];

export interface LoginForm {
  email: string;
  password: string;
}

export const loginFormField: FormlyFieldConfig[] = [
  {
    key: 'email',
    type: FormType.Input,
    props: {
      label: 'Email',
      required: true,
      disabled: true,
    },
  },
  {
    key: 'password',
    type: FormType.Input,
    props: {
      label: 'Mot de passe',
      required: true,
      type: 'password',
    },
  },
];

export interface SetPasswordForm {
  email: string;
  password: string;
  confirmPassword: string;
}

export const setPasswordFormField: FormlyFieldConfig[] = [
  {
    key: 'email',
    type: FormType.Input,
    props: {
      label: 'Email',
      required: true,
      disabled: true,
    },
  },
  {
    key: 'password',
    type: FormType.Input,
    props: {
      label: 'Mot de passe',
      required: true,
      type: 'password',
    },
  },
  {
    key: 'confirmPassword',
    type: FormType.Input,
    props: {
      label: 'Répeter Mot de passe',
      required: true,
      type: 'password',
    },
  },
];

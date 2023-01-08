import { FormType } from '@ticket/frontend/ui/form';
import { FormlyFieldConfig } from '@ngx-formly/core';

export interface UpdateMeUserForm {
  firstName: string;
  lastName: string;
}

export const updateMeUserFormField: FormlyFieldConfig[] = [
  {
    key: 'firstName',
    type: FormType.Input,
    props: {
      label: 'Prénom',
      required: true,
    },
  },
  {
    key: 'lastName',
    type: FormType.Input,
    props: {
      label: 'Nom',
      required: true,
    },
  },
];

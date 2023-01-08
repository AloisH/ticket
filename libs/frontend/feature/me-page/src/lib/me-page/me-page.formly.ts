import { FormType } from '@ticket/frontend/ui/form';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { UserDto } from '@ticket/frontend/core/api';

export interface UpdateMeUserForm {
  firstName: string;
  lastName: string;
}

export function updateMeUserFormField(user?: UserDto): FormlyFieldConfig[] {
  return [
    {
      key: 'firstName',
      type: FormType.Input,
      defaultValue: user?.firstName,
      props: {
        label: 'Prénom',
        required: true,
      },
    },
    {
      key: 'lastName',
      type: FormType.Input,
      defaultValue: user?.lastName,
      props: {
        label: 'Nom',
        required: true,
      },
    },
  ];
}

import { FormType } from '@ticket/frontend/ui/form';
import { FormlyFieldConfig } from '@ngx-formly/core';

export interface CreateCategoryForm {
  name: string;
}

export const createCategoryFormField: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: FormType.Input,
    props: {
      label: 'Nom',
      required: true,
    },
  },
  {
    key: 'iconName',
    type: FormType.Input,
    props: {
      label: 'Icon',
      required: false,
    },
  },
];

export interface createTicketForm {
  status: string;
  content: string;
}

export const createTicketFormField: FormlyFieldConfig[] = [
  {
    key: 'status',
    type: FormType.Input,
    props: {
      label: 'Status',
      required: true,
    },
  },
  {
    key: 'content',
    type: FormType.Input,
    props: {
      label: 'Content',
      required: true,
    },
  },
];

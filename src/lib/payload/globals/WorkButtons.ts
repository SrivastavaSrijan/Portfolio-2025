import type { GlobalConfig } from 'payload';

export const WorkButtons: GlobalConfig = {
  slug: 'work-buttons',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'buttons',
      type: 'array',
      label: 'buttons',
      required: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'Button URL',
          required: true,
        },
      ],
    },
  ],
};

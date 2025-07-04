import { revalidateAll } from '../utils';

import type { GlobalConfig } from 'payload';

export const Journal: GlobalConfig = {
  slug: 'journal',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateAll],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
  ],
};

import { revalidateAll } from '../utils';

import type { GlobalConfig } from 'payload';

export const Hero: GlobalConfig = {
  slug: 'hero',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateAll],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Your Name',
      required: true,
      defaultValue: 'Srijan.',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Your Title',
      required: true,
      defaultValue: 'frontend / fullstack',
    },
    {
      name: 'taglines',
      type: 'array',
      label: 'Taglines (will be animated)',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { text: 'building digital products with empathy.' },
        { text: 'crafting elegant solutions to complex problems.' },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description Sentences',
      required: true,
    },
  ],
};

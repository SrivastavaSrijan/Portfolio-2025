import { revalidateAll } from '../utils';

import type { GlobalConfig } from 'payload';

export const Skills: GlobalConfig = {
  slug: 'skills',
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
      defaultValue: 'Services & Skills',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'skills',
      type: 'array',
      label: 'Skills',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Skill Name',
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Skill Subtitle',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          required: true,
          label: 'Skill Description',
        },
      ],
    },
  ],
};

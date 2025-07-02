import type { GlobalConfig } from 'payload';
import { revalidateComponent } from '@/lib/actions/revalidation';
import { ServerActionComponents } from '@/lib/config/server';

export const Hero: GlobalConfig = {
  slug: 'hero',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [() => revalidateComponent(ServerActionComponents.Hero)],
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

import type { GlobalConfig } from 'payload';
import { api } from '@/lib/graphql/server/Api';

export const Journal: GlobalConfig = {
  slug: 'journal',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [() => api.revalidateAll()],
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

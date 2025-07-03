import type { CollectionConfig } from 'payload';
import { api } from '@/lib/graphql/server/Api';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [() => api.revalidateAll()],
    afterDelete: [() => api.revalidateAll()],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
};

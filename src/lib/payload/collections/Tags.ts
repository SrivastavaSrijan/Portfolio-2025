import type { CollectionConfig } from 'payload';
import { api } from '@/lib/graphql/server/Api';

export const Tags: CollectionConfig = {
  slug: 'tags',
  labels: {
    singular: 'Tag',
    plural: 'Tags',
  },
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [() => api.revalidateAll()],
    afterDelete: [() => api.revalidateAll()],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
};

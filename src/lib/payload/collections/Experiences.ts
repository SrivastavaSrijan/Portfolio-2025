import type { CollectionConfig } from 'payload';
import { api } from '@/lib/graphql/server/Api';

export const Experiences: CollectionConfig = {
  slug: 'experiences',
  labels: {
    singular: 'Experience',
    plural: 'Experiences',
  },
  admin: {
    useAsTitle: 'title',
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
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
    },
    {
      name: 'startDate',
      type: 'date',
    },
    {
      name: 'endDate',
      type: 'date',
    },
    {
      name: 'summary',
      type: 'richText',
      required: true,
    },

    {
      name: 'slug',
      type: 'text',
      unique: true,
    },
    {
      name: 'thumbnailImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
      required: true,
    },
  ],
};

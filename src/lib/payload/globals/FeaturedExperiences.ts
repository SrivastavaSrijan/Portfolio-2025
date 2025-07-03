import type { GlobalConfig } from 'payload';
import { api } from '@/lib/graphql/server/Api';

export const FeaturedExperiences: GlobalConfig = {
  slug: 'featured-experiences',
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
      defaultValue: 'Work',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      type: 'relationship',
      name: 'experiences',
      label: 'Experiences',
      relationTo: 'experiences',
      hasMany: true,
      required: true,
      minRows: 1,
      maxRows: 6,
    },
  ],
};

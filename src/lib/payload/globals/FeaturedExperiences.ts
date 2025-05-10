import type { GlobalConfig } from 'payload';

export const FeaturedExperiences: GlobalConfig = {
  slug: 'featured-experiences',
  access: {
    read: () => true,
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

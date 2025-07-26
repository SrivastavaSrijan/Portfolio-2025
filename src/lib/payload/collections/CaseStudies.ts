import { revalidateAll } from '../utils';

import type { CollectionConfig } from 'payload';

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  labels: {
    singular: 'Case Study',
    plural: 'Case Studies',
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateAll],
    afterDelete: [revalidateAll],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'experience',
      type: 'relationship',
      relationTo: 'experiences',
      required: true,
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
      required: true,
    },
    {
      name: 'summary',
      type: 'richText',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'illustration',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
    },
    {
      name: 'featured',
      type: 'checkbox',
    },
    {
      name:"links",
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
      required: false,
      minRows: 1,
      maxRows: 5,
      defaultValue: [],
    }
  ],
};

import type { GlobalConfig } from 'payload';

import { ServerActionComponents } from '@/lib/config/server';
import { revalidateComponent } from '@/lib/actions/revalidation';

export const FeaturedCaseStudies: GlobalConfig = {
  slug: 'featured-case-studies',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [() => revalidateComponent(ServerActionComponents.FeaturedCaseStudies)],
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
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      type: 'relationship',
      name: 'caseStudies',
      label: 'Case Studies',
      relationTo: 'case-studies',
      hasMany: true,
      required: true,
      minRows: 1,
      maxRows: 5,
    },
  ],
};

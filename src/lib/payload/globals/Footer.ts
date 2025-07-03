import type { GlobalConfig } from 'payload';
import { ServerActionComponents } from '@/lib/config/server';
import { revalidateComponent } from '@/lib/graphql/server';

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [() => revalidateComponent(ServerActionComponents.Footer)],
  },
  fields: [
    {
      type: 'text',
      name: 'title1',
      label: 'Section Title 1',
      required: true,
      defaultValue: "Let's",
    },
    {
      type: 'text',
      name: 'title2',
      label: 'Section Title 2',
      required: true,
      defaultValue: 'Talk',
    },
    {
      type: 'text',
      name: 'description',
      label: 'Section Description',
      required: true,
      defaultValue:
        "If you'd like to talk about a potential opportunity, or just want to say hi, feel free to reach out.",
    },
    {
      type: 'text',
      name: 'buttonText',
      label: 'Button Text',
      required: true,
      defaultValue: 'Schedule a call',
    },
    {
      type: 'text',
      name: 'bottomText',
      label: 'Bottom Text',
      required: true,
      defaultValue: 'hello@srijansrivastava.com',
    },
  ],
};

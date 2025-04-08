import type { CollectionConfig } from 'payload';

const ContactForms: CollectionConfig = {
  slug: 'contact-forms',
  admin: {
    useAsTitle: 'email',
    description: 'Contact form submissions',
  },
  access: {
    read: () => true,
    create: () => true,
    update: ({ req: { user } }) => Boolean(user?.id),
    delete: ({ req: { user } }) => Boolean(user?.id),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        {
          label: 'New',
          value: 'new',
        },
        {
          label: 'In Progress',
          value: 'in-progress',
        },
        {
          label: 'Resolved',
          value: 'resolved',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
};

export default ContactForms;

import type { GlobalConfig } from 'payload';

const Skills: GlobalConfig = {
  slug: 'skills',
  access: {
    read: () => true,
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
      name: 'skills',
      type: 'array',
      label: 'Skills',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Skill Name',
        },
        {
          name: 'description',
          type: 'richText',
          required: true,
          label: 'Skill Description',
        },
      ],
    },
  ],
};
export default Skills;

import { revalidateAll } from '../utils';

import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateAll],
    afterDelete: [revalidateAll],
  },
  upload: {
    // Auto-convert everything to WebP
    formatOptions: {
      format: 'webp',
      options: {
        quality: 85,
      },
    },
    // Generate sizes with different fit strategies
    imageSizes: [
      {
        name: 'icon',
        width: 64,
        height: 64,
        fit: 'inside', // Square icons should be cropped
        position: 'attention', // Use Sharp's smart cropping
        formatOptions: {
          format: 'webp',
          options: { quality: 80 },
        },
      },
      {
        name: 'thumbnail',
        width: 300,
        fit: 'inside', // Preserve aspect ratio, fit inside bounds
        withoutEnlargement: true,
        formatOptions: {
          format: 'webp',
          options: { quality: 80 },
        },
      },
      {
        name: 'card',
        width: 800,
        fit: 'inside', // Preserve aspect ratio
        withoutEnlargement: true,
        formatOptions: {
          format: 'webp',
          options: { quality: 85 },
        },
      },
      {
        name: 'feature',
        width: 1200,
        fit: 'inside', // Preserve aspect ratio
        withoutEnlargement: true,
        formatOptions: {
          format: 'webp',
          options: { quality: 90 },
        },
      },
      {
        name: 'hero',
        width: 1920,
        fit: 'inside', // Preserve aspect ratio
        withoutEnlargement: true,
        formatOptions: {
          format: 'webp',
          options: { quality: 90 },
        },
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description: 'Alt text for accessibility and SEO',
      },
    },
    {
      name: 'caption',
      type: 'text',
      admin: {
        description: 'Optional caption for the image',
      },
    },
    {
      name: 'blurDataURL',
      type: 'text',
      admin: {
        description: 'Base64 encoded blur placeholder (auto-generated)',
        readOnly: true,
      },
    },
  ],
};

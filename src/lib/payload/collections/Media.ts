import type { Media as MediaType } from '@/payload-types';
import { revalidateAll } from '../utils';
import type { CollectionAfterChangeHook, CollectionConfig } from 'payload';

export const generateDataURL: CollectionAfterChangeHook<MediaType> = async ({ doc, req }) => {
  // Only trigger for new uploads
  if (!doc.blurDataURL && doc.url) {
    try {
      // Call the API endpoint to process the image
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/media/process`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: doc.id }),
      });

      if (!response.ok) {
        console.error('Failed to trigger image processing:', await response.text());
      }
    } catch (error) {
      console.error('Error triggering image processing:', error);
    }
  }
  return doc;
};

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [generateDataURL, revalidateAll],
    afterDelete: [revalidateAll],
  },
  upload: {
    // Keep your existing upload config but with some changes
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

import type { CollectionAfterChangeHook } from 'payload';
import type { Media } from '@/payload-types';

/**
 * Generate blur data URL from a buffer using plaiceholder
 */
export async function generateBlurDataURLFromBuffer(buffer: Buffer): Promise<string | null> {
  try {
    // Try to use plaiceholder for high-quality blur generation
    const { getPlaiceholder } = await import('plaiceholder');

    const { base64 } = await getPlaiceholder(buffer, { size: 24 });
    return base64;
  } catch (error) {
    console.warn(
      'Plaiceholder not available, using simple blur fallback:',
      error instanceof Error ? error.message : String(error)
    );
    // Fallback to simple SVG-based blur
    return '';
  }
}

/**
 * Hook that generates blur data URL after media upload/change
 */
export const generateBlurDataURLHook: CollectionAfterChangeHook<Media> = async ({
  doc,
  req,
  operation,
}) => {
  // Only process images on create operation
  if (operation !== 'create' || !doc.filename || !doc.mimeType?.startsWith('image/')) {
    return doc;
  }

  // Skip if we already have a blur data URL
  if (doc.blurDataURL) {
    return doc;
  }

  try {
    // For new uploads, we need to fetch the image from the URL
    if (doc.url) {
      const response = await fetch(`${process.env.BASE_URL}${doc.url}`);
      const buffer = Buffer.from(await response.arrayBuffer());

      // Generate the blur data URL
      const blurDataURL = await generateBlurDataURLFromBuffer(buffer);

      if (blurDataURL) {
        // Update the document with the blur data URL
        const updatedDoc = await req.payload.update({
          collection: 'media',
          id: doc.id,
          data: {
            blurDataURL,
          },
        });

        return updatedDoc;
      }
    }
  } catch (error) {
    console.error('Error generating blur data URL in hook:', error);
    // Don't fail the upload if blur generation fails
  }

  return doc;
};

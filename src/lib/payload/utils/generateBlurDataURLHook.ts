import type { CollectionAfterChangeHook } from 'payload';
import type { Media } from '@/payload-types';

/**
 * Generate blur data URL from a buffer using plaiceholder
 */
export async function generateBlurDataURLFromBuffer(buffer: Buffer): Promise<string | null> {
  try {
    // First get the image dimensions to calculate aspect ratio
    const sharp = (await import('sharp')).default;
    const { width, height } = await sharp(buffer).metadata();

    if (!width || !height) throw new Error('Could not determine image dimensions');

    // Use plaiceholder with correct aspect ratio
    const { getPlaiceholder } = await import('plaiceholder');

    // Generate a correctly proportioned placeholder
    const { base64: originalBase64 } = await getPlaiceholder(buffer, {
      size: 10,
      saturation: 0.7,
      brightness: 0.7,
      autoOrient: true,
    });

    // Create a custom SVG with proper aspect ratio and stronger blur
    const aspectRatio = width / height;
    const svgWidth = 100;
    const svgHeight = Math.round(svgWidth / aspectRatio);

    const svgWithBlur = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${svgWidth} ${svgHeight}'>
      <filter id='b' color-interpolation-filters='sRGB'>
        <feGaussianBlur stdDeviation='12'/>
      </filter>
      <image width='100%' height='100%' x='0' y='0' preserveAspectRatio='xMidYMid slice' 
        style='filter: url(#b);' href='${originalBase64}'/>
    </svg>`;

    return `data:image/svg+xml;base64,${Buffer.from(svgWithBlur).toString('base64')}`;
  } catch (error) {
    console.warn(
      'Error generating blur placeholder:',
      error instanceof Error ? error.message : String(error)
    );
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

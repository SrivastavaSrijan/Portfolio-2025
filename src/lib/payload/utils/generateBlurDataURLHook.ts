import p from 'payload';
import config from '../../../payload.config';
import type { CollectionAfterChangeHook } from 'payload';
import type { Media } from '@/payload-types';
import dotenv from 'dotenv';
dotenv.config({ quiet: true });

/**
 * Generate blur data URL from a buffer using plaiceholder
 */
export async function generateBlurDataURLFromBuffer(buffer: Buffer): Promise<string | null> {
  try {
    // Add buffer validation
    console.debug('Buffer received, size:', buffer.length);
    console.debug('Buffer first few bytes:', buffer.slice(0, 20).toString('hex'));

    // First get the image dimensions to calculate aspect ratio
    const sharp = (await import('sharp')).default;

    // Add more detailed Sharp debugging
    const sharpInstance = sharp(buffer);
    const metadata = await sharpInstance.metadata();
    console.debug('Sharp metadata:', metadata);

    const { width, height } = metadata;

    if (!width || !height) throw new Error('Could not determine image dimensions');

    // Convert to a more compatible format first if it's WebP
    let processedBuffer = buffer;
    if (metadata.format === 'webp') {
      console.debug('Converting WebP to JPEG for processing...');
      processedBuffer = await sharp(buffer).jpeg({ quality: 90 }).toBuffer();
    }

    // Use plaiceholder with the processed buffer
    const { getPlaiceholder } = await import('plaiceholder');

    // Generate a correctly proportioned placeholder
    const { base64: originalBase64 } = await getPlaiceholder(processedBuffer, {
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
export const generateBlurDataURLHook: CollectionAfterChangeHook<Media> = async ({ doc }) => {
  try {
    // For new uploads, we need to fetch the image from the URL
    if (doc.url && !doc.blurDataURL) {
      const payload = await p.init({
        config,
      });

      const response = await fetch(`${process.env.BASE_URL}${doc.url}`);
      console.debug('Response status:', response.status);
      console.debug('Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      // Get the response as arrayBuffer first, then convert
      const arrayBuffer = await response.arrayBuffer();
      console.debug('ArrayBuffer size:', arrayBuffer.byteLength);

      const buffer = Buffer.from(arrayBuffer);
      console.debug('Buffer created, size:', buffer.length);

      // Generate the blur data URL
      const blurDataURL = await generateBlurDataURLFromBuffer(buffer);
      console.debug('Blur data URL generated:', blurDataURL ? 'Success' : 'Failed');

      if (blurDataURL) {
        // Update the document with the blur data URL
        const updatedDoc = await payload.update({
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

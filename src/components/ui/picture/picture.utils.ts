/**
 * Simplified image utilities for the Picture component
 * Blur data URLs are now generated server-side by Payload hooks
 */

import type { Media } from '@/payload-types';
import type { MediaFragmentFragment } from '@/lib/graphql/__generated__/graphql';

// Create a unified media type
export type MediaSource = Media | MediaFragmentFragment | string | null | undefined;
export type ImageSize = keyof NonNullable<Media['sizes']>;

// Define a clean return type for extracted image data
export interface ExtractedImageData {
  url: string | undefined;
  alt: string;
  width: number | undefined;
  height: number | undefined;
  objectPosition: string;
  iconUrl: string | undefined;
  blurDataURL: string | undefined;
}

/**
 * Extract image data from any media source
 */
export function extractImageData(
  media: MediaSource,
  size: ImageSize = 'card',
  altOverride?: string,
  widthOverride?: number,
  heightOverride?: number
): ExtractedImageData {
  // Default values
  const result: ExtractedImageData = {
    url: undefined,
    alt: altOverride || '',
    width: widthOverride,
    height: heightOverride,
    objectPosition: 'center',
    iconUrl: undefined,
    blurDataURL: undefined,
  };

  // Handle string URLs
  if (typeof media === 'string') {
    result.url = media;
    return result;
  }

  // Handle null/undefined media
  if (!media) {
    return result;
  }

  // Get optimized size or fallback to original
  const optimizedSize = media.sizes?.[size];
  result.url = optimizedSize?.url || media.url || undefined;
  result.alt = altOverride || media.alt || '';
  result.iconUrl = media.sizes?.icon?.url || undefined;
  result.blurDataURL = media.blurDataURL || undefined;

  // Calculate focal point
  if (typeof media.focalX === 'number' && typeof media.focalY === 'number') {
    result.objectPosition = `${media.focalX}% ${media.focalY}%`;
  }

  // Use provided dimensions or get from media
  if (!widthOverride && !heightOverride) {
    result.width = optimizedSize?.width || media.width || undefined;
    result.height = optimizedSize?.height || media.height || undefined;
  }

  return result;
}

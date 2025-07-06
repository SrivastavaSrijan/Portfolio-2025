'use client';

import Image, { type ImageProps } from 'next/image';
import { useState, type ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { extractImageData, type MediaSource, type ImageSize } from './picture.utils';

interface PictureProps extends Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> {
  // Required props
  media: MediaSource;

  // Optional props with sensible defaults
  imageSize?: ImageSize;
  alt?: string;

  // Wrapper props for fill images
  wrapperProps?: ComponentProps<'div'>;

  // Override Next.js Image dimensions if needed
  width?: number;
  height?: number;
}

export default function Picture({
  media,
  imageSize = 'card',
  alt,
  className,
  wrapperProps,
  width,
  height,
  fill,
  priority = false,
  placeholder = 'blur',
  ...restImageProps
}: PictureProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Extract all image data with one clean function call
  const {
    url,
    alt: extractedAlt,
    width: extractedWidth,
    height: extractedHeight,
    objectPosition,
    blurDataURL,
  } = extractImageData(media, imageSize, alt, width, height);

  // Use extracted dimensions
  const finalWidth = width || extractedWidth;
  const finalHeight = height || extractedHeight;

  // Early return if no image
  if (!url) return null;

  const handleLoadComplete = () => setIsLoading(false);
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Error state
  if (hasError) {
    const errorContent = (
      <div
        className={cn(
          'flex items-center justify-center rounded border bg-muted text-muted-foreground',
          className
        )}
      >
        <span className="text-sm">Failed to load image</span>
      </div>
    );

    if (fill) {
      return (
        <div {...wrapperProps} className={cn('relative', wrapperProps?.className)}>
          {errorContent}
        </div>
      );
    }

    return errorContent;
  }

  // Shimmer component for when we don't have blur data and image is loading
  const Shimmer = () => <div className={cn('absolute inset-0 animate-pulse rounded bg-muted')} />;

  // Image props
  const imageProps: ImageProps = {
    src: url,
    alt: extractedAlt,
    className: cn('transition-opacity duration-300', className),
    onLoad: handleLoadComplete,
    onError: handleError,
    priority,
    // Use blur placeholder if available, otherwise no placeholder
    placeholder: blurDataURL ? 'blur' : 'empty',
    blurDataURL: blurDataURL || undefined,
    style: {
      objectPosition,
      ...(isLoading && blurDataURL && { filter: 'blur(1rem)' }),
      ...restImageProps.style,
    },
    ...restImageProps,
  };

  // Fill image with wrapper
  if (fill) {
    return (
      <div {...wrapperProps} className={cn('relative overflow-hidden', wrapperProps?.className)}>
        <Image {...imageProps} fill />
        {isLoading && !blurDataURL && <Shimmer />}
      </div>
    );
  }

  // Fixed size image
  return (
    <div className="relative">
      <Image {...imageProps} width={finalWidth} height={finalHeight} />
      {isLoading && !blurDataURL && <Shimmer />}
    </div>
  );
}

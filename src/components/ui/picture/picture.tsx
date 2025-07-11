'use client';

import Image, { type ImageProps } from 'next/image';
import { useState, useRef, useEffect, type ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { extractImageData, type MediaSource, type ImageSize } from './picture.utils';
import { useInView, animate } from 'motion/react';

const initialFilterStyle = 'blur(0.5rem) saturate(0.7)';
const finalFilterStyle = 'blur(0px) saturate(1)';
const initialScale = 1.05;
const finalScale = 1;
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

  // Whether to animate the image when it enters the viewport
  animateOnView?: boolean;
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
  animateOnView = true,
  ...restImageProps
}: PictureProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Create refs for the image and wrapper
  const imageRef = useRef<HTMLImageElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Check if the component is in view
  const isInView = useInView(wrapperRef, { once: true, amount: 'some' });

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

  // Animation effect when image is loaded and in viewport
  useEffect(() => {
    if (!animateOnView || hasError) return;
    if (!isLoading && isInView) {
      const imgElement = imageRef.current;

      if (imgElement) {
        animate(
          imgElement,
          {
            scale: [initialScale, finalScale],
            filter: [initialFilterStyle, finalFilterStyle],
          },
          {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }
        );
      }
    }
  }, [isLoading, isInView, animateOnView, hasError]);

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

  // Common image props
  const imageProps: ImageProps = {
    src: url,
    alt: extractedAlt,
    className: cn('transition-opacity duration-300', className),
    onLoad: handleLoadComplete,
    onError: handleError,
    priority,
    placeholder: blurDataURL ? 'blur' : 'empty',
    blurDataURL: blurDataURL || undefined,
    style: {
      objectPosition,
      ...(animateOnView && {
        // Set initial state for the animation
        transform: `scale(${initialScale})`,
        filter: initialFilterStyle,
      }),
      ...restImageProps.style,
    },
    ...restImageProps,
  };

  // Fill image with wrapper
  if (fill) {
    return (
      <div
        ref={wrapperRef}
        {...wrapperProps}
        className={cn('relative overflow-hidden', wrapperProps?.className)}
      >
        <Image {...imageProps} fill ref={imageRef} />
        {isLoading && !blurDataURL && <Shimmer />}
      </div>
    );
  }

  // Fixed size image
  return (
    <div ref={wrapperRef} className="relative">
      <Image {...imageProps} width={finalWidth} height={finalHeight} ref={imageRef} />
      {isLoading && !blurDataURL && <Shimmer />}
    </div>
  );
}

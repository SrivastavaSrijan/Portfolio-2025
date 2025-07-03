'use client';
import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from './skeleton';

interface ImageWithShimmerProps extends ImageProps {
  shimmerClassName?: string;
  wrapperClassName?: string;
}

export const ImageWithShimmer = ({
  className,
  shimmerClassName,
  wrapperClassName,
  alt,
  ...props
}: ImageWithShimmerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn('relative overflow-hidden', wrapperClassName)}>
      {isLoading && <Skeleton className={cn('absolute inset-0 h-full w-full', shimmerClassName)} />}
      {!hasError && (
        <Image
          {...props}
          alt={alt}
          className={cn(
            'transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100',
            className
          )}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      )}
      {hasError && (
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 text-sm',
            className
          )}
        >
          Failed to load image
        </div>
      )}
    </div>
  );
};

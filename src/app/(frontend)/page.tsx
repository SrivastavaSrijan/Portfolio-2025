import { Suspense } from 'react';
import { Hero, Skills } from '@/components/sections';
import { Skeleton } from '@/components/ui';
import { Navbar } from '@/components/fragments';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="home @container flex min-h-screen flex-col bg-background">
      <Navbar />
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
        <Skills />
      </Suspense>
    </div>
  );
}

// Simple skeleton loader for the hero section during suspense
function HeroSkeleton() {
  return (
    <div className="flex h-full flex-grow flex-col gap-7 px-5 py-5 md:gap-15 md:px-20 md:py-10">
      {/* Name skeleton */}
      <div className="mb-6 flex flex-col gap-3 md:mb-0 md:gap-10">
        <Skeleton className="h-14 w-40 md:h-24 md:w-64" variant="brand" />
        <Skeleton className="h-14 w-40 md:h-24 md:w-64" variant="brand" />
      </div>
      {/* Title skeletons */}
      <div className="flex flex-col gap-1 md:gap-2">
        <Skeleton className="h-10 w-56 md:h-16 md:w-84" variant="brand" />
        <Skeleton className="h-10 w-64 md:h-16 md:w-96" variant="brand" />
      </div>
      {/* Description skeleton */}
      <div className="gap-2 md:gap-5">
        <div className="space-y-2">
          <Skeleton className="h-6 w-3/6" variant="brand" />
          <Skeleton className="h-6 w-5/6" variant="brand" />
          <Skeleton className="h-6 w-4/5" variant="brand" />
        </div>
      </div>
      {/* Button skeleton */}
      <div className="mt-10 flex flex-row flex-wrap gap-3 md:mt-32">
        <Skeleton className="h-6 w-24" variant="brand" />
        <span className="md:basis flex basis-full md:hidden" />
        <span className="flex-1" />
        <div className="flex w-full flex-row-reverse justify-between gap-3 md:w-fit">
          {new Array(3).fill(null).map((_value, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: acceptable
            <Skeleton className="h-6 w-24" variant="brand" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

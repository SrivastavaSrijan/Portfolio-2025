import { Suspense } from 'react';
import { Hero } from '@/components/sections';
import { Navbar, Skeleton } from '@/components/ui';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="home @container flex min-h-screen flex-col bg-background">
      <Navbar />
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
    </div>
  );
}

// Simple skeleton loader for the hero section during suspense
function HeroSkeleton() {
  return (
    <div className="flex h-full flex-grow flex-col gap-7 px-5 py-5 md:gap-15 md:px-20 md:py-10">
      {/* Name skeleton */}
      <div className="mb-6 flex flex-wrap items-end gap-1 md:mb-0 md:gap-10">
        <Skeleton className="h-14 w-40 md:h-24 md:w-64" variant="brand" />
      </div>
      {/* Title skeletons */}
      <div className="flex flex-col gap-1 md:gap-2">
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
      <div className="mt-10 flex flex-row md:mt-32">
        <Skeleton className="h-6 w-24" variant="brand" />
      </div>
    </div>
  );
}

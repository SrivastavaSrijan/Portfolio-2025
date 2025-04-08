import { Suspense } from 'react';
import { Hero } from '@/components/sections';
import { Navbar, Skeleton } from '@/components/ui';

export default function HomePage() {
  return (
    <div className="home bg-background min-h-screen flex flex-col @container">
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
    <div className="flex flex-col md:px-20 md:py-10 md:gap-15 py-5 px-5 gap-7 flex-grow h-full">
      {/* Name skeleton */}
      <div className="flex flex-wrap items-end md:gap-10 gap-1 md:mb-0 mb-6">
        <Skeleton className="h-14 w-40 md:h-24 md:w-64" variant="brand" />
      </div>

      {/* Title skeletons */}
      <div className="flex flex-col md:gap-2 gap-1">
        <Skeleton className="h-10 w-64 md:h-16 md:w-96" variant="brand" />
      </div>

      {/* Description skeleton */}
      <div className="md:gap-5 gap-2">
        <div className="space-y-2">
          <Skeleton className="h-6 w-3/6" variant="brand" />
          <Skeleton className="h-6 w-5/6" variant="brand" />
          <Skeleton className="h-6 w-4/5" variant="brand" />
        </div>
      </div>

      {/* Button skeleton */}
      <div className="flex flex-row md:mt-32 mt-10">
        <Skeleton className="h-6 w-24" variant="brand" />
      </div>
    </div>
  );
}

import { Suspense } from 'react';
import { FeaturedCaseStudies, Hero, Skills } from '@/components/sections';
import { Skeleton } from '@/components/ui';
import type { Metadata } from 'next';
import { createMetadata } from '@/lib/config/metadata';
import { query } from '@/lib/apollo/apolloClient';
import { GetHeroMetaDocument, type GetHeroMetaQuery } from '@/lib/graphql/__generated__/hooks';

export const dynamic = 'force-dynamic';
// export const revalidate = 60;
// export const fetchCache = 'force-no-store';

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await query<GetHeroMetaQuery>({
    query: GetHeroMetaDocument,
  });
  const remoteMetadata = data?.Hero?.meta ?? {};
  return createMetadata(remoteMetadata);
}

export default function HomePage() {
  return (
    <div className="home @container flex min-h-screen flex-col bg-background">
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
        <Skills />
        <FeaturedCaseStudies />
      </Suspense>
    </div>
  );
}

// Simple skeleton loader for the hero section during suspense
function HeroSkeleton() {
  return (
    <div className="mx-auto flex h-full min-h-[calc(100vh-52px)] w-full max-w-[1440px] flex-grow flex-col gap-7 px-5 py-5 md:min-h-[calc(100vh-94px)] md:gap-8 md:px-20 md:py-10">
      {/* Name skeleton */}
      <div className="mb-6 flex w-full flex-row gap-3 md:mb-0 md:gap-10">
        <Skeleton className="h-14 w-9/12" variant="brand" />
        <Skeleton className="h-14 w-3/12" variant="brand" />
      </div>
      {/* Title skeletons */}
      <div className="flex flex-col gap-1 md:gap-2">
        <Skeleton className="h-10 w-56 md:h-16 md:w-6/12" variant="brand" />
        <Skeleton className="h-10 w-64 md:h-16 md:w-6/12" variant="brand" />
      </div>
      <span className="flex-1" />
      {/* Description skeleton */}
      <div className="gap-2 md:gap-5">
        <div className="space-y-2">
          <Skeleton className="h-6 w-3/6" variant="brand" />
          <Skeleton className="h-6 w-5/6" variant="brand" />
          <Skeleton className="h-6 w-4/5" variant="brand" />
        </div>
      </div>
      <span className="flex-1" />
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

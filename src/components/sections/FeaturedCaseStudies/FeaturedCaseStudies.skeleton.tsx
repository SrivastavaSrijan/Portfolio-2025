import { Skeleton } from '../../ui';

export function FeaturedCaseStudiesSkeleton() {
  return (
    <div className="flex flex-col gap-10 bg-white px-4 py-10 md:gap-15 md:px-20 md:py-20">
      <div className="flex flex-col gap-1 md:gap-2">
        <Skeleton className="mx-auto h-6 w-32" />
        <Skeleton className="mx-auto h-12 w-96 md:h-16" />
        <Skeleton className="mx-auto mt-2 h-4 w-80 md:mt-3" />
      </div>
      <div className="flex flex-col gap-6 md:gap-10">
        {['case-study-skeleton-1', 'case-study-skeleton-2', 'case-study-skeleton-3'].map((key) => (
          <div key={key} className="flex flex-col gap-4 md:gap-6">
            <Skeleton className="h-64 w-full md:h-80" />
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>
      <Skeleton className="mx-auto h-12 w-48" />
    </div>
  );
}

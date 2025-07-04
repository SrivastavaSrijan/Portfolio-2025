import { Skeleton } from '../../ui';

export function FeaturedCaseStudiesSkeleton() {
  return (
    <div className="flex flex-col gap-10 bg-white px-4 py-10 lg:gap-15 lg:px-20 lg:py-20">
      <div className="flex flex-col gap-1 lg:gap-2">
        <Skeleton className="mx-auto h-6 w-32" />
        <Skeleton className="mx-auto h-12 w-96 lg:h-16" />
        <Skeleton className="mx-auto mt-2 h-4 w-80 lg:mt-3" />
      </div>
      <div className="flex flex-col gap-6 lg:gap-10">
        {['case-study-skeleton-1', 'case-study-skeleton-2', 'case-study-skeleton-3'].map((key) => (
          <div
            key={key}
            className="mx-auto flex w-full max-w-196 flex-col gap-4 rounded-4xl lg:gap-6"
          >
            <Skeleton className="h-64 w-full rounded-4xl lg:h-128" />
          </div>
        ))}
      </div>
      <Skeleton className="mx-auto h-12 w-48" />
    </div>
  );
}

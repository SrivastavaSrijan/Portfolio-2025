import { Skeleton } from '../../ui';

/**
 * CaseStudy Skeleton Component - Loading state for case study
 */
export function CaseStudySkeleton() {
  return (
    <div className="flex flex-col">
      <div className="bg-accent px-4 py-4 lg:px-20 lg:pb-20">
        <div className="flex flex-col gap-5 lg:gap-5">
          <div className="flex flex-row items-center gap-2">
            <Skeleton className="h-4 w-24" variant="brand" />
          </div>
          <Skeleton className="h-12 w-3/4 lg:h-16" variant="brand" />
          <div className="flex flex-row items-center gap-2">
            <Skeleton className="h-4 w-4 rounded-full" variant="brand" />
            <Skeleton className="h-4 w-32" variant="brand" />
          </div>
        </div>
      </div>
      {/* Illustration skeleton */}
      <Skeleton className="h-20 w-full rounded-none lg:h-144" variant="brand" />
      <div className="bg-white">
        <div className="mx-auto flex flex-col gap-5 px-4 py-10 lg:max-w-205 lg:px-4 lg:py-20">
          {/* Content skeleton */}
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" variant="default" />
            <Skeleton className="h-4 w-5/6" variant="default" />
            <Skeleton className="h-4 w-4/5" variant="default" />
            <Skeleton className="h-4 w-full" variant="default" />
            <Skeleton className="h-4 w-3/4" variant="default" />
          </div>
        </div>
      </div>
    </div>
  );
}

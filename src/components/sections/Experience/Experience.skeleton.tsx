import { Skeleton } from '@/components/ui';

/**
 * Experience Skeleton Component - Loading state for experience
 */
export function ExperienceSkeleton() {
  const experienceDetails = ['Role', 'Duration', 'Start Date'];
  const caseStudiesPlaceholders = ['case-study-1', 'case-study-2'];

  return (
    <div className="flex flex-col">
      <div className="bg-accent px-4 py-4 lg:px-20 lg:pb-20">
        <div className="flex flex-col gap-5 lg:gap-5">
          <Skeleton className="h-12 w-3/4 lg:h-16" variant="brand" />
          <div className="flex w-full flex-col gap-4">
            {experienceDetails.map((detail) => (
              <div key={detail} className="flex flex-row items-center gap-2">
                <Skeleton className="h-4 w-1/4" variant="brand" />
                <Skeleton className="h-4 w-2/4" variant="brand" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Cover image skeleton */}
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
      {/* Case studies skeleton */}
      <div className="bg-white">
        <div className="mx-auto flex flex-col gap-5 px-4 py-10 lg:max-w-300 lg:px-4 lg:py-20">
          <Skeleton className="h-8 w-48" variant="default" />
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
            {caseStudiesPlaceholders.map((placeholder) => (
              <div key={placeholder} className="space-y-4">
                <Skeleton className="h-48 w-full" variant="default" />
                <Skeleton className="h-6 w-3/4" variant="default" />
                <Skeleton className="h-4 w-full" variant="default" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

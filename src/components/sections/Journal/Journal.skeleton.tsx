import { Skeleton } from '../../ui';

/**
 * Journal Skeleton Component - Loading state for journal
 */
export function JournalSkeleton() {
  const filterGroups = ['group-1', 'group-2', 'group-3', 'group-4', 'group-5', 'group-6'];
  const caseStudyPlaceholders = ['case-study-1', 'case-study-2', 'case-study-3', 'case-study-4'];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between gap-8 bg-accent px-4 py-4 lg:flex-col lg:gap-6 lg:px-20 lg:pb-20">
        <div className="flex flex-col gap-1 lg:flex-2/3 lg:gap-2">
          <Skeleton className="h-6 w-24" variant="brand" />
          <Skeleton className="h-12 w-3/4 lg:h-16" variant="brand" />
          <Skeleton className="mt-5 h-16 max-w-2xl" variant="brand" />
        </div>
        {/* Filter skeleton */}
        <div className="flex flex-row gap-4">
          {filterGroups.map((group) => (
            <Skeleton key={group} className="h-6 w-20" variant="brand" />
          ))}
        </div>
      </div>
      {/* Case studies skeleton */}
      <div className="grid grid-cols-1 gap-5 bg-white px-4 py-5 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-10">
        {caseStudyPlaceholders.map((placeholder) => (
          <div key={placeholder} className="space-y-4">
            <Skeleton className="h-64 w-full rounded-4xl lg:h-256" />
            <div className="flex flex-col gap-2 px-2">
              <Skeleton className="h-6 w-3/4" variant="default" />
              <Skeleton className="h-4 w-1/4" variant="default" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

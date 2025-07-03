import { Skeleton } from '../../ui';

/**
 * Journal Skeleton Component - Loading state for journal
 */
export function JournalSkeleton() {
  const filterGroups = ['group-1', 'group-2', 'group-3'];
  const caseStudyPlaceholders = ['case-study-1', 'case-study-2', 'case-study-3', 'case-study-4'];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between gap-8 bg-accent px-4 py-4 md:flex-row md:gap-6 md:px-20 md:pb-20">
        <div className="flex flex-col gap-1 md:flex-2/3 md:gap-2">
          <Skeleton className="h-6 w-24" variant="brand" />
          <Skeleton className="h-12 w-3/4 md:h-16" variant="brand" />
          <Skeleton className="mt-5 h-16 max-w-2xl" variant="brand" />
        </div>
        {/* Filter skeleton */}
        <div className="flex flex-1/3 flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Skeleton className="h-4 w-20" variant="brand" />
          </div>
          {filterGroups.map((group) => (
            <div key={group} className="flex flex-col gap-1">
              <div className="grid grid-cols-3 gap-2">
                {['tag-1', 'tag-2', 'tag-3'].map((tag) => (
                  <Skeleton key={`${group}-${tag}`} className="h-6 w-full" variant="brand" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Case studies skeleton */}
      <div className="grid grid-cols-1 gap-5 bg-white px-4 py-5 md:grid-cols-2 md:gap-10 md:px-8 md:py-10">
        {caseStudyPlaceholders.map((placeholder) => (
          <div key={placeholder} className="space-y-4">
            <Skeleton className="h-90 w-full rounded-4xl! md:h-256" />
            <Skeleton className="h-6 w-3/4" variant="default" />
            <Skeleton className="h-4 w-full" variant="default" />
          </div>
        ))}
      </div>
    </div>
  );
}

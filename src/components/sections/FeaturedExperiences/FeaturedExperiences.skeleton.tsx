import { Skeleton } from '../../ui';

export function FeaturedExperiencesSkeleton() {
  return (
    <div className="bg-white p-4 md:p-20">
      <div className="flex flex-col gap-5 rounded-2xl border-1 border-black-500 bg-blue-black-50 px-6 py-12 shadow-sm md:flex-row md:gap-15 md:px-16 md:py-16">
        {/* Header section skeleton */}
        <div className="flex flex-1/3 flex-col gap-2 border-black-500 border-b-1 pr-5 pb-4 md:border-r-1 md:border-b-0 md:pr-10">
          <Skeleton className="h-5 w-32 bg-white/20" />
          <Skeleton className="h-8 w-48 bg-white/20 md:h-10" />
          <Skeleton className="mt-2 h-4 w-full bg-white/20 md:mt-3" />
          <Skeleton className="h-4 w-3/4 bg-white/20" />
        </div>

        {/* Experiences list skeleton */}
        <div className="flex flex-2/3 flex-col gap-2 pt-3 md:gap-7 md:pt-0">
          {[
            'featured-experience-skeleton-1',
            'featured-experience-skeleton-2',
            'featured-experience-skeleton-3',
          ].map((key) => (
            <div
              key={key}
              className="flex w-full flex-col gap-1 rounded-lg p-3 md:flex-row md:items-center md:gap-10"
            >
              <Skeleton className="h-[60px] w-[156px] rounded-md bg-white/20 md:w-[200px]" />
              <div className="flex flex-row items-center justify-center gap-5">
                <div className="flex flex-1 flex-col gap-1">
                  <Skeleton className="h-5 w-40 bg-white/20 md:h-6" />
                  <Skeleton className="h-3 w-24 bg-white/20 md:h-4" />
                </div>
                <Skeleton className="h-8 w-8 rounded bg-white/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

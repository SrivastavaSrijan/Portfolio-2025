import { Skeleton } from '../../ui';

export function FeaturedExperiencesSkeleton() {
  return (
    <div className="bg-white p-4 lg:p-20">
      <div className="flex flex-col gap-5 rounded-2xl border-1 border-black-500 bg-blue-black-50 px-6 py-12 shadow-sm lg:flex-row lg:gap-15 lg:px-16 lg:py-16">
        {/* Header section skeleton */}
        <div className="flex flex-1/3 flex-col gap-2 border-black-500 border-b-1 pr-5 pb-4 lg:border-r-1 lg:border-b-0 lg:pr-10">
          <Skeleton className="h-5 w-32 " />
          <Skeleton className="h-8 w-48 lg:h-10" />
          <Skeleton className="mt-2 h-4 w-full lg:mt-3" />
          <Skeleton className="h-4 w-3/4 " />
        </div>

        {/* Experiences list skeleton */}
        <div className="flex flex-2/3 flex-col gap-2 pt-3 lg:gap-7 lg:pt-0">
          {[
            'featured-experience-skeleton-1',
            'featured-experience-skeleton-2',
            'featured-experience-skeleton-3',
          ].map((key) => (
            <div
              key={key}
              className="flex w-full flex-col gap-1 rounded-lg p-3 lg:flex-row lg:items-center lg:gap-10"
            >
              <Skeleton className="h-[60px] w-[156px] rounded-md lg:w-[200px]" />
              <div className="flex flex-row items-center justify-center gap-5">
                <div className="flex flex-1 flex-col gap-1">
                  <Skeleton className="h-5 w-40 lg:h-6" />
                  <Skeleton className="h-3 w-24 lg:h-4" />
                </div>
                <Skeleton className="h-8 w-8 rounded " />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

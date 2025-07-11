import { Skeleton } from '@/components/ui';

export function FeaturedExperiencesSkeleton() {
  return (
    <div className="bg-white p-4 lg:p-20">
      <div className="flex flex-col gap-5 rounded-2xl border-1 border-black-500 bg-blue-black-50 px-6 py-8 shadow-sm lg:flex-row lg:items-center lg:gap-15 lg:px-12 lg:py-12">
        {/* Header section skeleton */}
        <div className="flex flex-1/3 flex-col gap-2 border-black-500 border-b-1 pr-5 pb-4 lg:border-r-1 lg:border-b-0 lg:pr-10">
          <Skeleton className="h-5 w-32 " />
          <Skeleton className="h-8 w-48 lg:h-10" />
        </div>

        {/* Experiences list skeleton */}
        <div className="flex h-full flex-2/3 flex-col gap-10 pt-3 lg:flex-row lg:gap-15 lg:pt-0">
          {[
            'featured-experience-skeleton-1',
            'featured-experience-skeleton-2',
            'featured-experience-skeleton-3',
          ].map((key) => (
            <div
              key={key}
              className="flex w-full cursor-pointer flex-row items-center justify-between rounded-lg transition-colors hover:bg-white/5"
            >
              <Skeleton className="h-[60px] w-[156px] rounded-md lg:w-[200px]" />
              <Skeleton className="flex h-[20px] w-[64px] rounded-md lg:hidden" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

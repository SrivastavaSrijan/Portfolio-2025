import { Skeleton } from '@/components/ui';

export function HeroSkeleton() {
  return (
    <div className="mx-auto flex h-full min-h-[calc(50vh-52px)] w-full max-w-[1440px] flex-grow flex-col gap-7 px-5 py-5 lg:min-h-[calc(100vh-94px)] lg:gap-8 lg:px-20 lg:py-10">
      {/* Name skeleton */}
      <div className="mb-6 flex w-full flex-row gap-3 lg:mb-0 lg:gap-10">
        <Skeleton className="h-14 w-9/12" variant="brand" />
        <Skeleton className="h-14 w-3/12" variant="brand" />
      </div>
      {/* Title skeletons */}
      <div className="flex flex-col gap-1 lg:gap-2">
        <Skeleton className="h-10 w-56 lg:h-16 lg:w-6/12" variant="brand" />
        <Skeleton className="h-10 w-64 lg:h-16 lg:w-6/12" variant="brand" />
      </div>
      <span className="flex-1" />
      {/* Description skeleton */}
      <div className="gap-2 lg:gap-5">
        <div className="space-y-2">
          <Skeleton className="h-6 w-3/6" variant="brand" />
          <Skeleton className="h-6 w-5/6" variant="brand" />
          <Skeleton className="h-6 w-4/5" variant="brand" />
        </div>
      </div>
      <span className="flex-1" />
      {/* Button skeleton */}
      <div className="mt-10 flex flex-row flex-wrap gap-3 lg:mt-32">
        <Skeleton className="h-6 w-24" variant="brand" />
        <span className="lg:basis flex basis-full lg:hidden" />
        <span className="flex-1" />
        <div className="flex w-full flex-row-reverse justify-between gap-3 lg:w-fit">
          {new Array(3).fill(null).map((_value, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: acceptable
            <Skeleton className="h-6 w-24" variant="brand" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

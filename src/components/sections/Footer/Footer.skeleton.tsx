import { Skeleton } from '../../ui';

export function FooterSkeleton() {
  return (
    <footer>
      <div className="bg-accent">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 bg-accent px-5 py-18 md:gap-10 md:px-60 md:py-20">
          {/* Title skeleton */}
          <div className="flex w-fit flex-col items-center gap-3 text-center md:flex-row md:gap-10">
            <Skeleton className="h-16 w-32 bg-white/20 md:h-20 md:w-48" />
            <Skeleton className="h-16 w-16 rounded-full bg-white/20" />
            <Skeleton className="h-16 w-32 bg-white/20 md:h-20 md:w-48" />
          </div>

          {/* Description skeleton */}
          <Skeleton className="h-6 w-80 bg-white/20 md:h-8 md:w-96" />

          {/* Button skeleton */}
          <Skeleton className="h-12 w-40 rounded-lg bg-white/20" />
        </div>
      </div>
      <div className="bg-primary">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-10 md:gap-10 md:px-20 md:py-28">
          {/* Bottom text skeleton */}
          <Skeleton className="h-10 w-3/4 bg-white/20 md:h-16" />

          {/* Work buttons skeleton */}
          <div className="flex flex-wrap gap-2">
            {['work-button-skeleton-1', 'work-button-skeleton-2', 'work-button-skeleton-3'].map(
              (key) => (
                <Skeleton key={key} className="h-10 w-24 rounded bg-white/20" />
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

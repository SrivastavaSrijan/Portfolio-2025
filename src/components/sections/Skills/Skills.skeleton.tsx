import { Skeleton } from '../../ui/skeleton';

export function SkillsSkeleton() {
  return (
    <div className="bg-primary">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-5 md:gap-8 md:px-96 md:py-20">
        <div className="flex flex-col items-start gap-1 md:mx-auto md:gap-2">
          <Skeleton className="h-4 w-16 md:h-6 md:w-24" />
          <Skeleton className="h-8 w-48 md:h-12 md:w-72" />
        </div>
        <div className="flex flex-col gap-2 md:gap-2">
          {[1, 2, 3, 4].map((id) => (
            <div key={`skill-skeleton-${id}`} className="rounded-md border border-accent">
              <div className="p-4">
                <Skeleton className="h-5 w-32 md:h-7 md:w-48" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Skeleton } from '../../ui/skeleton';

export function SkillsSkeleton() {
  return (
    <div className="bg-primary">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-5 lg:gap-8 lg:px-96 lg:py-20">
        <div className="flex flex-col items-start gap-1 lg:mx-auto lg:gap-2">
          <Skeleton className="h-4 w-16 lg:h-6 lg:w-24" />
          <Skeleton className="h-8 w-48 lg:h-12 lg:w-72" />
        </div>
        <div className="flex flex-col gap-2 lg:gap-2">
          {[1, 2, 3, 4].map((id) => (
            <div key={`skill-skeleton-${id}`} className="border-b border-b-accent">
              <div className="p-4">
                <Skeleton className="h-5 w-32 lg:h-7 lg:w-128" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

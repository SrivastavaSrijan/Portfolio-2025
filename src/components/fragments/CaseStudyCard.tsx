import type { GetFeaturedCaseStudiesQuery } from '@/lib/graphql/__generated__/hooks';
import { Button, Card, CardAction, CardContent, CardDescription } from '../ui';
import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Routes } from '@/lib/config/config/routes';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type CaseStudyBySlugData = NonNullable<
  GetFeaturedCaseStudiesQuery['FeaturedCaseStudy']
>['caseStudies'][number];
interface CaseStudyCardProps extends CaseStudyBySlugData {
  grid?: boolean;
}

export const CaseStudyCard = ({
  title,
  tags,
  slug,
  illustration,
  grid = false,
}: CaseStudyCardProps) => {
  return (
    <div
      className={cn(
        !grid && 'max-w-256 md:rounded-[42px]',
        'relative mx-auto flex w-full flex-col items-center justify-center overflow-hidden'
      )}
    >
      <div className="relative h-40 w-full md:h-208">
        {illustration?.url && (
          <Image
            fill
            src={illustration?.url}
            alt={title}
            className={cn(
              !grid && 'rounded-4xl',
              'relative h-full w-full object-cover md:rounded-none'
            )}
          />
        )}
      </div>
      <Card
        className={cn(
          !grid && 'md:bottom-4 md:w-[calc(100%-48px)] md:rounded-4xl',
          'bottom-0 w-full rounded-none bg-white md:absolute'
        )}
      >
        <CardContent className="flex items-center justify-between gap-3">
          <CardDescription className="flex flex-col gap-2">
            <h3 className="font-medium text-accent text-xl md:text-2xl">{title}</h3>
            <div className="flex flex-row gap-3">
              {(tags ?? []).map((tag) => (
                <span
                  key={tag.tag}
                  className={cn(
                    'rounded-full border-1 border-accent px-2 py-1 text-accent text-xs'
                  )}
                >
                  {tag.tag}
                </span>
              ))}
            </div>
          </CardDescription>
          <CardAction className={cn('flex h-full flex-col gap-2 self-center')}>
            <Link href={{ pathname: `${Routes.CaseStudies}/${slug}` }} className="w-full">
              <Button className="h-12 rounded-full" size="lg" variant="outlined" color="accent">
                <ArrowUpRightIcon />
              </Button>
            </Link>
          </CardAction>
        </CardContent>
      </Card>
    </div>
  );
};

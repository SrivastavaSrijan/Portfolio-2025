import type { GetFeaturedCaseStudiesQuery } from '@/lib/graphql/__generated__/hooks';
import { Button, Card, CardAction, CardContent, CardDescription } from '../ui';
import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Routes } from '@/lib/graphql/config/routes';
import Image from 'next/image';

type CaseStudyCardProps = NonNullable<
  GetFeaturedCaseStudiesQuery['FeaturedCaseStudy']
>['caseStudies'][number];

export const CaseStudyCard = ({ title, tags, slug, illustration }: CaseStudyCardProps) => {
  return (
    <div className="relative mx-auto flex w-full max-w-256 flex-col items-center justify-center overflow-hidden md:rounded-[42px]">
      <div className="relative h-40 w-full md:h-208 ">
        {illustration?.url && (
          <Image
            fill
            src={illustration?.url}
            alt={title}
            className="relative h-full w-full rounded-4xl object-cover md:rounded-none"
          />
        )}
      </div>
      <Card className="bottom-0 w-full rounded-none bg-white md:absolute md:bottom-4 md:w-[calc(100%-48px)] md:rounded-4xl">
        <CardContent className="flex items-center justify-between">
          <CardDescription className="flex flex-col gap-2">
            <h3 className="font-medium text-accent text-xl md:text-2xl">{title}</h3>
            <div className="flex flex-row gap-3">
              {(tags ?? []).map((tag) => (
                <span
                  key={tag.tag}
                  className="rounded-full border-1 border-accent px-2 py-1 text-accent text-xs"
                >
                  {tag.tag}
                </span>
              ))}
            </div>
          </CardDescription>
          <CardAction className="flex h-full flex-col gap-2 self-center">
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

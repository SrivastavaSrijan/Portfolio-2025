'use client';
import { Button, Card, CardAction, CardContent, CardDescription, Picture } from '@/components/ui';
import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Routes } from '@/lib/config/routes';
import { cn } from '@/lib/utils';
import * as m from 'motion/react-m';
import type { Variants } from 'motion/react';
import { RichText } from './RichText';
import type { PayloadEntity, PayloadFetchTypeMap } from '@/lib/graphql/server';

type CaseStudyBySlugData =
  PayloadFetchTypeMap[PayloadEntity.FeaturedCaseStudies]['result']['caseStudies'][number];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: index * 0.05,
    },
  }),
};

interface CaseStudyCardProps extends CaseStudyBySlugData {
  grid?: boolean;
  index: number;
}

export const CaseStudyCard = ({
  title,
  tags,
  slug,
  illustration,
  summary,
  index,
}: CaseStudyCardProps) => {
  return (
    <Link href={{ pathname: `${Routes.CaseStudies}/${slug}` }} className="w-full">
      <div
        className={cn(
          'relative mx-auto flex w-full max-w-256 flex-col items-center justify-center overflow-hidden lg:rounded-[42px]'
        )}
      >
        {illustration && (
          <Picture
            media={illustration}
            imageSize="card"
            alt={title}
            fill
            priority={index === 0 || index === 1}
            className={cn('h-full w-full rounded-4xl object-cover lg:rounded-none')}
            wrapperProps={{ className: 'relative h-40 w-full lg:h-208' }}
          />
        )}
        <m.div
          variants={cardVariants}
          whileInView="visible"
          viewport={{ once: true, amount: 'some' }}
          custom={index}
          initial="hidden"
          className={cn(
            'bottom-0 w-full rounded-none bg-white shadow-md lg:absolute lg:bottom-4 lg:w-[calc(100%-48px)] lg:rounded-4xl'
          )}
        >
          <Card>
            <CardContent className="flex items-center justify-between gap-3 px-2">
              <CardDescription className="flex flex-col gap-4 lg:gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-accent text-xl lg:text-2xl">{title}</h3>
                  <RichText data={summary} className="text-accent text-xs lg:text-sm" />
                </div>
                <div className="flex flex-row flex-wrap gap-2 lg:gap-3">
                  {(tags ?? []).map((tag) => (
                    <span
                      key={tag.id}
                      className={cn(
                        'line-clamp-1 rounded-full border-1 border-accent px-2 py-1 text-accent text-xs'
                      )}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </CardDescription>
              <CardAction className={cn('flex h-full flex-col gap-2 self-center')}>
                <Button className="h-12 rounded-full" size="lg" variant="outlined" color="accent">
                  <ArrowUpRightIcon />
                </Button>
              </CardAction>
            </CardContent>
          </Card>
        </m.div>
      </div>
    </Link>
  );
};

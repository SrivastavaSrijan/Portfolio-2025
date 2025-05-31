'use client';
import type { GetFeaturedCaseStudiesQuery } from '@/lib/graphql/__generated__/hooks';
import { Button, Card, CardAction, CardContent, CardDescription } from '../ui';
import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Routes } from '@/lib/config/config/routes';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion, type Variants } from 'framer-motion';
import { useRef } from 'react';

type CaseStudyBySlugData = NonNullable<
  GetFeaturedCaseStudiesQuery['FeaturedCaseStudy']
>['caseStudies'][number];
interface CaseStudyCardProps extends CaseStudyBySlugData {
  grid?: boolean;
  index: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
};

export const CaseStudyCard = ({ title, tags, slug, illustration }: CaseStudyCardProps) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className={cn(
        'relative mx-auto flex w-full max-w-256 flex-col items-center justify-center overflow-hidden md:rounded-[42px]'
      )}
    >
      <div className="relative h-40 w-full md:h-208">
        {illustration?.url && (
          <Image
            fill
            src={illustration?.url}
            alt={title}
            className={cn('relative h-full w-full rounded-4xl object-cover md:rounded-none')}
          />
        )}
      </div>
      <motion.div
        variants={cardVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={0}
        initial="hidden"
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1,
        }}
        className={cn(
          'bottom-0 w-full rounded-none bg-white shadow-md md:absolute md:bottom-4 md:w-[calc(100%-48px)] md:rounded-4xl'
        )}
      >
        <Card>
          <CardContent className="flex items-center justify-between gap-3">
            <CardDescription className="flex flex-col gap-2">
              <h3 className="font-medium text-accent text-xl md:text-2xl">{title}</h3>
              <div className="flex flex-row flex-wrap gap-3">
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
              <Link href={{ pathname: `${Routes.CaseStudies}/${slug}` }} className="w-full">
                <Button className="h-12 rounded-full" size="lg" variant="outlined" color="accent">
                  <ArrowUpRightIcon />
                </Button>
              </Link>
            </CardAction>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

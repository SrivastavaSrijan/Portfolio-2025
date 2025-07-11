import { CaseStudyCard } from '@/components/shared/CaseStudyCard';
import { Button } from '@/components/ui';
import { ArrowUpRightIcon } from 'lucide-react';
import { Routes } from '@/lib/config/routes';
import Link from 'next/link';
import type { FeaturedCaseStudiesUIProps } from './FeaturedCaseStudies.utils';

export function FeaturedCaseStudiesUI({
  title,
  subtitle,
  description,
  caseStudies,
}: FeaturedCaseStudiesUIProps) {
  return (
    <div className="flex flex-col gap-10 bg-white px-4 py-10 lg:gap-15 lg:px-20 lg:py-20">
      <div className="flex flex-col gap-1 lg:gap-2">
        <h3 className="text-center text-accent text-lg">{subtitle}</h3>
        <h2 className="text-center font-semibold text-4xl text-accent lg:text-6xl">{title}</h2>
        <p className="mt-2 text-center text-blue-black-500 text-sm lg:mt-3 lg:text-base">
          {description}
        </p>
      </div>
      {caseStudies && caseStudies.length > 0 && (
        <div className="flex flex-col gap-6 lg:gap-10">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={caseStudy.slug} index={index} {...caseStudy} />
          ))}
        </div>
      )}
      <Link href={Routes.CaseStudies} className="contents">
        <Button variant="outlined" color="accent" className="mx-auto w-fit">
          All case studies
          <ArrowUpRightIcon />
        </Button>
      </Link>
    </div>
  );
}

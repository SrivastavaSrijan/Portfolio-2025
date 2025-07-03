import { CaseStudyCard } from '../../fragments/CaseStudyCard';
import { Button } from '../../ui';
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
    <div className="flex flex-col gap-10 bg-white px-4 py-10 md:gap-15 md:px-20 md:py-20">
      <div className="flex flex-col gap-1 md:gap-2">
        <h3 className="text-center text-accent text-lg">{subtitle}</h3>
        <h2 className="text-center font-semibold text-4xl text-accent md:text-6xl">{title}</h2>
        <p className="mt-2 text-center text-blue-black-500 text-sm md:mt-3 md:text-base">
          {description}
        </p>
      </div>
      {caseStudies && caseStudies.length > 0 && (
        <div className="flex flex-col gap-6 md:gap-10">
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

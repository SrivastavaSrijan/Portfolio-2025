'use client';

import { useGetFeaturedCaseStudiesSuspenseQuery } from '@/lib/graphql/__generated__/hooks';
import { CaseStudyCard } from '../fragments';

export const FeaturedCaseStudies = () => {
  const { data } = useGetFeaturedCaseStudiesSuspenseQuery();
  const { title, subtitle, description, caseStudies } = data?.FeaturedCaseStudy ?? {};
  return (
    <div className="flex flex-col gap-10 bg-white px-4 py-10 md:gap-15 md:px-20 md:py-20">
      <div className="flex flex-col gap-1 md:gap-2">
        <h3 className="text-center text-accent text-lg">{subtitle}</h3>
        <h2 className="text-center font-semibold text-4xl text-accent md:text-6xl">{title}</h2>
        <p className="mt-2 text-center text-blue-black text-sm md:mt-3 md:text-base">
          {description}
        </p>
      </div>
      {caseStudies && caseStudies.length > 0 && (
        <div className="flex flex-col gap-6 md:gap-10">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} {...caseStudy} />
          ))}
        </div>
      )}
    </div>
  );
};

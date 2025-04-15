'use client';
import { useGetCaseStudiesSuspenseQuery } from '@/lib/graphql/__generated__/hooks';
import { CaseStudyCard, CaseStudyFilter } from '.';

export const Journal = () => {
  const { data } = useGetCaseStudiesSuspenseQuery();
  const caseStudies = data?.CaseStudies?.docs ?? [];
  const { title, description, subtitle } = data?.Journal ?? {};

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between gap-8 bg-accent px-4 py-4 md:flex-row md:gap-6 md:px-20 md:pb-20">
        <div className="flex flex-col gap-1 md:flex-2/3 md:gap-2">
          <h2>{subtitle}</h2>
          <h1 className="font-semibold text-4xl text-white md:text-display-4">{title}</h1>
          <p className="mt-5 max-w-2xl text-white">{description}</p>
        </div>
        <CaseStudyFilter />
      </div>
      {caseStudies && caseStudies.length > 0 && (
        <div className="grid grid-cols-1 gap-6 bg-white md:grid-cols-2 md:gap-10">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} {...caseStudy} grid />
          ))}
        </div>
      )}
    </div>
  );
};

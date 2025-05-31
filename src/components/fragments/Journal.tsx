'use client';
import { useGetJournalData } from '@/lib/hooks/data/useGetJournalData';
import { CaseStudyCard, CaseStudyFilter } from '.';

export const Journal = () => {
  const { title, caseStudies, description, subtitle, paginatedTags, handleTagClick, selectedTag } =
    useGetJournalData();
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between gap-8 bg-accent px-4 py-4 md:flex-row md:gap-6 md:px-20 md:pb-20">
        <div className="flex flex-col gap-1 md:flex-2/3 md:gap-2">
          <h2>{subtitle}</h2>
          <h1 className="font-semibold text-4xl text-brand md:text-display-4">{title}</h1>
          <p className="mt-5 max-w-2xl text-brand">{description}</p>
        </div>
        <CaseStudyFilter tags={paginatedTags} onClick={handleTagClick} selectedTag={selectedTag} />
      </div>
      {caseStudies && caseStudies.length > 0 && (
        <div className="grid grid-cols-1 gap-5 bg-white px-4 py-5 md:grid-cols-2 md:gap-10 md:px-8 md:py-10">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={caseStudy.slug} {...caseStudy} grid index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

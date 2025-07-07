import { CaseStudyCard, CaseStudyFilter } from '../../fragments';
import type { JournalUIProps } from './Journal.utils';

/**
 * Journal UI Component - Pure UI component that receives typed data
 * This component handles all the visual rendering and client-side interactions
 */
export function JournalUI({ journal, caseStudies, paginatedTags, selectedTag }: JournalUIProps) {
  const { title, description, subtitle } = journal;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between gap-8 bg-accent px-4 py-4 lg:flex-row lg:gap-6 lg:px-20 lg:pb-20">
        <div className="flex flex-col gap-1 lg:flex-2/3 lg:gap-2">
          <h2>{subtitle}</h2>
          <h1 className="font-semibold text-4xl text-brand lg:text-display-4">{title}</h1>
          <p className="mt-5 max-w-2xl text-brand">{description}</p>
        </div>
        <CaseStudyFilter paginatedTags={paginatedTags} selectedTag={selectedTag} />
      </div>
      {caseStudies && caseStudies.length > 0 && (
        <div className="grid grid-cols-1 gap-5 bg-white px-4 py-5 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-10">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={caseStudy.slug} {...caseStudy} grid index={index} />
          ))}
        </div>
      )}
    </div>
  );
}

import dayjs from 'dayjs';
import { RichText } from '../../fragments/RichText';
import { cn } from '@/lib/utils';
import { CaseStudyCard } from '../../fragments/CaseStudyCard';
import type { ExperienceUIProps } from './Experience.utils';
import { Picture } from '@/components/ui';

/**
 * Experience UI Component - Pure UI component that receives typed GraphQL data
 * This component handles all the visual rendering
 */
export function ExperienceUI({ experience, caseStudies }: ExperienceUIProps) {
  const { summary, coverImage, tags, title, endDate, role, startDate } = experience;

  const duration = (endDate ? dayjs(endDate) : dayjs()).diff(dayjs(startDate), 'months');
  const startDateFormatted = dayjs(startDate).format('MMM YYYY');
  const endDateFormatted = endDate ? dayjs(endDate).format('MMM YYYY') : 'Present';

  return (
    <div className="flex flex-col">
      <div className="bg-accent px-4 py-4 lg:px-20 lg:pb-20">
        <div className="flex flex-col gap-5 lg:gap-5">
          <h1 className="font-semibold text-4xl text-brand lg:text-display-4">{title}</h1>
          <div className="flex w-full flex-col gap-4 px-2 py-2 text-brand lg:px-5 lg:py-4">
            {[
              { label: 'Role', value: role },
              { label: 'Duration', value: `${duration} months` },
              { label: 'Start Date', value: startDateFormatted },
              { label: 'End Date', value: endDateFormatted },
              ...(tags?.length > 0
                ? [
                    {
                      label: 'Technologies',
                      value: (
                        <div className="flex flex-row flex-wrap justify-end gap-2">
                          {(tags ?? []).map(({ name: tagName, id: tagId }) => (
                            <span
                              key={tagId}
                              className={cn(
                                'line-clamp-1 rounded-full border-1 border-brand px-2 py-1 text-brand text-xs'
                              )}
                            >
                              {tagName}
                            </span>
                          ))}
                        </div>
                      ),
                    },
                  ]
                : []),
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between border-brand border-b-1 pb-2">
                <span className="font-semibold">{label}</span>
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
      {coverImage && (
        <Picture
          media={coverImage}
          imageSize="feature"
          alt={title}
          fill
          className="object-cover"
          wrapperProps={{ className: 'relative h-60 w-full' }}
        />
      )}
      <div className="bg-white px-4 py-5 lg:px-8 lg:py-10">
        <div className="mx-auto lg:max-w-3xl">
          <RichText className="text-accent" data={summary} />
          <hr className="mt-5 sm:border-accent/20 lg:border-0" />
        </div>
      </div>

      <div className="flex flex-col gap-5 bg-white px-4 py-5 lg:gap-10 lg:px-20 lg:py-10">
        <h2 className="text-4xl text-accent lg:text-5xl">Related Case Studies</h2>
        {caseStudies && caseStudies.length > 0 && (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={caseStudy.slug} {...caseStudy} grid index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

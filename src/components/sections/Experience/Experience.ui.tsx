import Image from 'next/image';
import dayjs from 'dayjs';
import { RichText } from '../../fragments/RichText';
import { cn } from '@/lib/utils';
import { CaseStudyCard } from '../../fragments/CaseStudyCard';
import type { ExperienceUIProps } from './Experience.utils';

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
      <div className="bg-accent px-4 py-4 md:px-20 md:pb-20">
        <div className="flex flex-col gap-5 md:gap-5">
          <h1 className="font-semibold text-4xl text-brand md:text-display-4">{title}</h1>
          <div className="flex w-full flex-col gap-4 px-2 py-2 text-brand md:px-5 md:py-4">
            {[
              { label: 'Role', value: role },
              { label: 'Duration', value: `${duration} months` },
              { label: 'Start Date', value: startDateFormatted },
              { label: 'End Date', value: endDateFormatted },
              ...(tags?.length > 0
                ? [
                    {
                      label: 'Tags',
                      value: tags.map((tag) => tag.name).join(', '),
                    },
                  ]
                : []),
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-row items-center gap-2">
                <p className="font-medium text-sm md:text-base">{label}:</p>
                <p className="text-sm md:text-base">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {coverImage?.url && (
        <Image
          priority
          quality={100}
          width={1440}
          height={576}
          src={coverImage?.url}
          alt="Cover Image"
          className="h-40 w-full object-cover md:h-144"
        />
      )}
      <div className="bg-white">
        <div className="mx-auto flex flex-col gap-5 px-4 py-10 text-accent text-sm md:max-w-205 md:px-4 md:py-20 md:text-base md:[&_p]:px-2 ">
          <RichText data={summary} />
        </div>
      </div>
      {caseStudies.length > 0 && (
        <div className="bg-white">
          <div className="mx-auto flex flex-col gap-5 px-4 py-10 md:max-w-300 md:px-4 md:py-20">
            <h2 className="font-semibold text-2xl text-accent md:text-4xl">Case Studies</h2>
            <div
              className={cn(
                'grid gap-5 md:gap-10',
                caseStudies.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
              )}
            >
              {caseStudies.map((caseStudy, index) => (
                <CaseStudyCard key={caseStudy.slug} {...caseStudy} grid index={index} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

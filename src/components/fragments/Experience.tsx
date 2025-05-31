'use client';

import { useGetExperienceBySlugSuspenseQuery } from '@/lib/graphql/__generated__/hooks';
import { NotFound } from './404';
import Image from 'next/image';
import dayjs from 'dayjs';
import { RichText } from './RichText';

interface ExperienceProps {
  slug: string;
}
export const Experience = ({ slug }: ExperienceProps) => {
  const { data } = useGetExperienceBySlugSuspenseQuery({
    variables: { slug },
  });
  const { docs = [] } = data?.Experiences ?? {};
  if (!docs || docs.length === 0) {
    return <NotFound />;
  }
  const { id, summary, coverImage, caseStudies, title, endDate, role, startDate } = docs[0];
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
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between border-brand border-b-1 pb-2">
                <span className="font-semibold">{label}</span>
                <span className="">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative h-60 w-full object-cover">
        {coverImage?.url && <Image src={coverImage.url} alt={title} fill objectFit="cover" />}
      </div>
      <div className="bg-white px-4 py-5 md:px-8 md:py-10">
        <div className="mx-auto md:max-w-3xl">
          <RichText className="text-accent" data={summary} />
        </div>
      </div>
    </div>
  );
};

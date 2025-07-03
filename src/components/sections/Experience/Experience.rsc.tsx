import { Suspense } from 'react';
import { fetchExperienceData, fetchCaseStudiesByParams } from '@/lib/graphql/server';
import { ExperienceUI } from './Experience.ui';
import { ExperienceSkeleton } from './Experience.skeleton';
import { NotFound } from '../../fragments/404';
import type { ExperienceWrapperProps } from './Experience.utils';

/**
 * Experience Server Component - Clean and simple
 */
async function ExperienceServer({ slug }: ExperienceWrapperProps) {
  try {
    const experience = await fetchExperienceData(slug);
    const { caseStudies } = await fetchCaseStudiesByParams({ experience: [experience.id] });

    return <ExperienceUI experience={experience} caseStudies={caseStudies} />;
  } catch (error) {
    console.error('Error fetching experience:', error);
    return <NotFound />;
  }
}

/**
 * Experience component with Suspense boundary
 */
export default function Experience(props: ExperienceWrapperProps) {
  return (
    <Suspense fallback={<ExperienceSkeleton />}>
      <ExperienceServer {...props} />
    </Suspense>
  );
}

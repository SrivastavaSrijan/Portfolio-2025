import { Suspense } from 'react';
import { api, PayloadEntity } from '@/lib/graphql/server';

import { ExperienceUI } from './Experience.ui';
import { ExperienceSkeleton } from './Experience.skeleton';
import { NotFound } from '../../fragments/404';
import type { ExperienceWrapperProps } from './Experience.utils';

/**
 * Experience Server Component - Clean and simple
 */
async function ExperienceServer({ slug }: ExperienceWrapperProps) {
  try {
    const experience = await api.get(PayloadEntity.Experience, {
      slug,
    });
    if (!experience) {
      throw new Error('Internal Server Error', { cause: [PayloadEntity.Experience] });
    }
    const { caseStudies } = await api.get(PayloadEntity.CaseStudiesByParams, {
      experience: [experience.id],
    });
    if (!caseStudies) {
      throw new Error('Internal Server Error', {
        cause: [PayloadEntity.CaseStudiesByParams],
      });
    }
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

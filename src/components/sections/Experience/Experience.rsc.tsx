import { Suspense } from 'react';
import { api, PayloadEntity } from '@/lib/graphql/server';

import { ExperienceUI } from './Experience.ui';
import { ExperienceSkeleton } from './Experience.skeleton';
import { NotFound } from '@/components/shared/404';
import type { ExperienceWrapperProps } from './Experience.utils';

/**
 * Experience Server Component - Clean and simple
 */
async function ExperienceServer({ slug }: ExperienceWrapperProps) {
  const experience = await api.get(PayloadEntity.Experience, {
    variables: { slug },
  });

  if (!experience) {
    return <NotFound />;
  }

  const caseStudiesData = await api.get(PayloadEntity.CaseStudiesByParams, {
    variables: { experience: [experience.id] },
  });

  if (!caseStudiesData) {
    return <NotFound />;
  }

  return <ExperienceUI experience={experience} caseStudies={caseStudiesData.caseStudies} />;
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

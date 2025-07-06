import { Suspense } from 'react';
import { api, PayloadEntity } from '@/lib/graphql/server';

import { FeaturedExperiencesUI } from './FeaturedExperiences.ui';
import { FeaturedExperiencesSkeleton } from './FeaturedExperiences.skeleton';
import type { FeaturedExperiencesWrapperProps } from './FeaturedExperiences.utils';

/**
 * FeaturedExperiences Server Component - Clean and simple
 */
async function FeaturedExperiencesServer(_props: FeaturedExperiencesWrapperProps) {
  const data = await api.get(PayloadEntity.FeaturedExperiences);

  if (!data) {
    return <FeaturedExperiencesSkeleton />;
  }

  return <FeaturedExperiencesUI {...data} />;
}

/**
 * FeaturedExperiences with Suspense boundary
 */
export default function FeaturedExperiences(props: FeaturedExperiencesWrapperProps) {
  return (
    <Suspense fallback={<FeaturedExperiencesSkeleton />}>
      <FeaturedExperiencesServer {...props} />
    </Suspense>
  );
}

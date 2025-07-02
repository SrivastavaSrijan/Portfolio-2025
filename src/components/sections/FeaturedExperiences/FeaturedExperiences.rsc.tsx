import { Suspense } from 'react';
import { fetchFeaturedExperiencesData } from '@/lib/actions/revalidation';
import { FeaturedExperiencesUI } from './FeaturedExperiences.ui';
import { FeaturedExperiencesSkeleton } from './FeaturedExperiences.skeleton';
import type { FeaturedExperiencesWrapperProps } from './FeaturedExperiences.utils';

/**
 * FeaturedExperiences Server Component - Clean and simple
 */
async function FeaturedExperiencesServer(_props: FeaturedExperiencesWrapperProps) {
  const data = await fetchFeaturedExperiencesData();
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

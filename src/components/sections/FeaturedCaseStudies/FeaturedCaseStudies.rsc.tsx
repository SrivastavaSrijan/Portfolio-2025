import { Suspense } from 'react';
import { fetchFeaturedCaseStudiesData } from '@/lib/actions/revalidation';
import { FeaturedCaseStudiesUI } from './FeaturedCaseStudies.ui';
import { FeaturedCaseStudiesSkeleton } from './FeaturedCaseStudies.skeleton';
import type { FeaturedCaseStudiesWrapperProps } from './FeaturedCaseStudies.utils';

/**
 * FeaturedCaseStudies Server Component - Clean and simple
 */
async function FeaturedCaseStudiesServer(_props: FeaturedCaseStudiesWrapperProps) {
  const data = await fetchFeaturedCaseStudiesData();
  return <FeaturedCaseStudiesUI {...data} />;
}

/**
 * FeaturedCaseStudies with Suspense boundary
 */
export default function FeaturedCaseStudies(props: FeaturedCaseStudiesWrapperProps) {
  return (
    <Suspense fallback={<FeaturedCaseStudiesSkeleton />}>
      <FeaturedCaseStudiesServer {...props} />
    </Suspense>
  );
}

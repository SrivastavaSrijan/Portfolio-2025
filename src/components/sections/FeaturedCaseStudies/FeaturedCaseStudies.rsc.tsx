import { Suspense } from 'react';
import { api, PayloadEntity } from '@/lib/graphql/server';

import { FeaturedCaseStudiesUI } from './FeaturedCaseStudies.ui';
import { FeaturedCaseStudiesSkeleton } from './FeaturedCaseStudies.skeleton';
import type { FeaturedCaseStudiesWrapperProps } from './FeaturedCaseStudies.utils';

/**
 * FeaturedCaseStudies Server Component - Clean and simple
 */
async function FeaturedCaseStudiesServer(_props: FeaturedCaseStudiesWrapperProps) {
  try {
    const data = await api.get(PayloadEntity.FeaturedCaseStudies);
    if (!data) {
      throw new Error('Internal Server Error', {
        cause: [PayloadEntity.FeaturedCaseStudies],
      });
    }
    return <FeaturedCaseStudiesUI {...data} />;
  } catch {
    return <FeaturedCaseStudiesSkeleton />;
  }
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

import { Suspense } from 'react';
import { api, PayloadEntity } from '@/lib/graphql/server';

import { CaseStudyUI } from './CaseStudy.ui';
import { CaseStudySkeleton } from './CaseStudy.skeleton';
import { NotFound } from '../../fragments/404';
import type { CaseStudyWrapperProps } from './CaseStudy.utils';

/**
 * CaseStudy Server Component - Clean and simple
 */
async function CaseStudyServer({ slug }: CaseStudyWrapperProps) {
  try {
    const data = await api.get(PayloadEntity.CaseStudy, { slug });
    if (!data) {
      throw new Error('Internal Server Error', { cause: [PayloadEntity.CaseStudy] });
    }
    return <CaseStudyUI {...data} />;
  } catch (error) {
    console.error('Error fetching case study:', error);
    return <NotFound />;
  }
}

/**
 * CaseStudy component with Suspense boundary
 */
export default function CaseStudy(props: CaseStudyWrapperProps) {
  return (
    <Suspense fallback={<CaseStudySkeleton />}>
      <CaseStudyServer {...props} />
    </Suspense>
  );
}

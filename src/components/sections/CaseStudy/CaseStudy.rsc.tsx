import { Suspense } from 'react';
import { fetchCaseStudyData } from '@/lib/actions/revalidation';
import { CaseStudyUI } from './CaseStudy.ui';
import { CaseStudySkeleton } from './CaseStudy.skeleton';
import { NotFound } from '../../fragments/404';
import type { CaseStudyWrapperProps } from './CaseStudy.utils';

/**
 * CaseStudy Server Component - Clean and simple
 */
async function CaseStudyServer({ slug }: CaseStudyWrapperProps) {
  try {
    const data = await fetchCaseStudyData(slug);
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

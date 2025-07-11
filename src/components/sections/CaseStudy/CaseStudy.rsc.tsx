import { Suspense } from 'react';
import { api, PayloadEntity } from '@/lib/graphql/server';

import { CaseStudyUI } from './CaseStudy.ui';
import { CaseStudySkeleton } from './CaseStudy.skeleton';
import { NotFound } from '@/components/shared/404';
import type { CaseStudyWrapperProps } from './CaseStudy.utils';

/**
 * CaseStudy Server Component - Clean and simple
 */
async function CaseStudyServer({ slug }: CaseStudyWrapperProps) {
  const data = await api.get(PayloadEntity.CaseStudy, { variables: { slug } });
  const tagIds = data?.tags?.map((tag) => tag.id) || [];
  const caseStudyData = await api.get(PayloadEntity.CaseStudiesByParams, {
    variables: {
      ...(!!tagIds.length && { tagIds }),
    },
  });
  if (!data) {
    return <NotFound />;
  }

  return <CaseStudyUI caseStudy={data} relatedCaseStudies={caseStudyData?.caseStudies ?? []} />;
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

import { Suspense } from 'react';
import { api, PayloadEntity } from '@/lib/graphql/server';

import { CaseStudyUI } from './CaseStudy.ui';
import { CaseStudySkeleton } from './CaseStudy.skeleton';
import { NotFound } from '@/components/shared/404';
import type { CaseStudyWrapperProps } from './CaseStudy.utils';

/** Max related case studies shown in the carousel */
const MAX_RELATED = 6;

/**
 * CaseStudy Server Component - Clean and simple
 */
async function CaseStudyServer({ slug }: CaseStudyWrapperProps) {
  const data = await api.get(PayloadEntity.CaseStudy, { variables: { slug } });
  if (!data) {
    return <NotFound />;
  }

  // Find related case studies by shared tag. Rank by number of shared tags
  // (more overlap = more related), exclude the current case study, cap the list.
  const currentTagIds = new Set<number>((data.tags ?? []).map((t) => t.id));

  const caseStudyData = currentTagIds.size
    ? await api.get(PayloadEntity.CaseStudiesByParams, {
        variables: { tagIds: [...currentTagIds] },
      })
    : null;

  const relatedCaseStudies = (caseStudyData?.caseStudies ?? [])
    .filter((cs) => cs.slug !== slug)
    .map((cs) => ({
      cs,
      overlap: (cs.tags ?? []).reduce(
        (n, t) => (currentTagIds.has(t.id) ? n + 1 : n),
        0
      ),
    }))
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, MAX_RELATED)
    .map(({ cs }) => cs);

  return <CaseStudyUI caseStudy={data} relatedCaseStudies={relatedCaseStudies} />;
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

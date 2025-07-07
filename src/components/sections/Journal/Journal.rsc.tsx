import { Suspense } from 'react';
import { api, PayloadEntity } from '@/lib/graphql/server';

import { JournalUI } from './Journal.ui';
import { JournalSkeleton } from './Journal.skeleton';
import type { JournalWrapperProps } from './Journal.utils';
import { map } from 'lodash';

/**
 * Journal Server Component - Clean and simple
 * Now supports static generation for known tag combinations
 */
async function JournalServer({ selectedTag }: JournalWrapperProps) {
  // Fetch case studies based on filters
  const caseStudyData = await api.get(PayloadEntity.CaseStudiesByParams, {
    variables: {
      ...(!!selectedTag?.id && { tagIds: [selectedTag.id] }),
    },
  });

  const allTagsData = await api.get(PayloadEntity.AllTags);

  if (!caseStudyData || !allTagsData) {
    return <JournalSkeleton />;
  }

  const tags = map(allTagsData, 'name');

  return <JournalUI {...caseStudyData} tags={tags} selectedTag={selectedTag} />;
}

/**
 * Journal component with Suspense boundary
 */
export default function Journal(props: JournalWrapperProps) {
  return (
    <Suspense fallback={<JournalSkeleton />}>
      <JournalServer {...props} />
    </Suspense>
  );
}

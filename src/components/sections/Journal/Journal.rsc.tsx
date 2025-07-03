import { Suspense } from 'react';
import { api, PayloadEntity } from '@/lib/graphql/server';

import { JournalUI } from './Journal.ui';
import { JournalSkeleton } from './Journal.skeleton';
import { chunk, intersectionBy, uniqBy } from 'lodash';
import { isStringArrayParam } from '@/lib/utils';
import type { JournalWrapperProps } from './Journal.utils';

/**
 * Journal Server Component - Clean and simple
 */
async function JournalServer({ searchParams }: JournalWrapperProps) {
  try {
    // Fetch all tags
    const allTagsData = await api.get(PayloadEntity.AllTags);
    if (!allTagsData) {
      throw new Error('Internal Server Error', { cause: [PayloadEntity.AllTags] });
    }
    const allTags = uniqBy(allTagsData.flatMap((doc) => doc.tags).filter(Boolean), 'id');

    // Process search params
    const tags = searchParams?.tags;
    const tagNames = isStringArrayParam(tags) ? tags : [tags];

    // Convert tag names to objects for intersectionBy
    const tagNamesAsObjects = tagNames.map((name) => ({ name }));

    // Use intersectionBy to find matching tags by 'name' property
    const matchingTags = intersectionBy(allTags, tagNamesAsObjects, 'name');
    const tagIds = matchingTags.map(({ id }) => id);

    // Fetch case studies based on filters
    const { caseStudies, journal } = await api.get(PayloadEntity.CaseStudiesByParams, {
      ...(!!tagIds.length && { tagIds }),
    });
    if (!caseStudies || !journal) {
      throw new Error('Internal Server Error', {
        cause: [PayloadEntity.CaseStudiesByParams],
      });
    }

    return (
      <JournalUI
        title={journal?.title ?? undefined}
        subtitle={journal?.subtitle ?? undefined}
        description={journal?.description ?? undefined}
        caseStudies={caseStudies}
        paginatedTags={chunk(
          allTags.map(({ name }) => name),
          3
        )}
        selectedTag={tags ?? null}
      />
    );
  } catch (error) {
    console.error('Error fetching journal data:', error);
    // Return empty state on error
    return <JournalUI caseStudies={[]} paginatedTags={[]} selectedTag={null} />;
  }
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

import { Suspense } from 'react';
import { api, PayloadEntity } from '@/lib/graphql/server';

import { JournalUI } from './Journal.ui';
import { JournalSkeleton } from './Journal.skeleton';
import { chunk, intersectionBy, uniqBy } from 'lodash';
import { isStringArrayParam } from '@/lib/utils';
import type { JournalWrapperProps } from './Journal.utils';

/**
 * Journal Server Component - Clean and simple
 * Now supports static generation for known tag combinations
 */
async function JournalServer({ searchParams }: JournalWrapperProps) {
  // Fetch all tags
  const allTagsData = await api.get(PayloadEntity.AllTags);
  if (!allTagsData) {
    // Return empty state if we can't fetch tags
    return <JournalUI caseStudies={[]} paginatedTags={[]} selectedTag={null} />;
  }
  const allTags = uniqBy(allTagsData.flatMap((doc) => doc.tags).filter(Boolean), 'id');

  // Process search params - handle static generation case
  const tags = searchParams?.tags;
  const tagNames = tags ? (isStringArrayParam(tags) ? tags : [tags]) : [];

  // Convert tag names to objects for intersectionBy only if we have tags
  let tagIds: string[] = [];
  if (tagNames.length > 0) {
    const tagNamesAsObjects = tagNames.map((name) => ({ name }));
    const matchingTags = intersectionBy(allTags, tagNamesAsObjects, 'name');
    tagIds = matchingTags.map(({ id }) => String(id));
  }

  // Fetch case studies based on filters
  const data = await api.get(PayloadEntity.CaseStudiesByParams, {
    ...(!!tagIds.length && { tagIds }),
  });

  if (!data) {
    // Return empty state if we can't fetch case studies data
    return (
      <JournalUI
        caseStudies={[]}
        paginatedTags={chunk(
          allTags.map(({ name }) => name),
          3
        )}
        selectedTag={tags ?? null}
      />
    );
  }

  const { caseStudies, journal } = data;

  return (
    <JournalUI
      title={journal?.title ?? undefined}
      subtitle={journal?.subtitle ?? undefined}
      description={journal?.description ?? undefined}
      caseStudies={caseStudies || []}
      paginatedTags={chunk(
        allTags.map(({ name }) => name),
        3
      )}
      selectedTag={tags ?? null}
    />
  );
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

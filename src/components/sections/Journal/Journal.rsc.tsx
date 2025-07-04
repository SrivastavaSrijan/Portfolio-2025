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
  try {
    // Fetch all tags
    const allTagsData = await api.get(PayloadEntity.AllTags);
    if (!allTagsData) {
      throw new Error('Internal Server Error', { cause: [PayloadEntity.AllTags] });
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
      throw new Error('Internal Server Error', { cause: [PayloadEntity.CaseStudiesByParams] });
    }
    const { caseStudies, journal } = data;
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

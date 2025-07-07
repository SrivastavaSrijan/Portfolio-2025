import { Journal } from '@/components/sections';
import { createMetadata } from '@/lib/config/metadata';
import { api, PayloadEntity } from '@/lib/graphql/server';
import { uniqBy } from 'lodash';
import { notFound } from 'next/navigation';

import type { Metadata } from 'next';

export const revalidate = 3600;

// Generate static params for all known tags
export async function generateStaticParams() {
  const allTagsData = await api.get(PayloadEntity.AllTags);

  if (!allTagsData) {
    // Error already logged in api.get, return empty array for ISR fallback
    return [];
  }

  const allTags = uniqBy(allTagsData.flatMap((doc) => doc.tags).filter(Boolean), 'id');
  const tagNames = allTags.map(({ name }) => name);

  return tagNames.map((tag) => ({ tag: tag }));
}

interface JournalTagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateMetadata({ params }: JournalTagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const remoteMetadata = await api.get(PayloadEntity.JournalMeta, { fetchPolicy: 'no-cache' });
  if (!remoteMetadata) {
    return createMetadata({});
  }

  const metadata = createMetadata(remoteMetadata);

  // Customize metadata for the specific tag
  return {
    ...metadata,
    title: `${metadata.title} - ${tag}`,
  };
}

export default async function JournalTagPage({ params }: JournalTagPageProps) {
  const { tag: encodedTag } = await params;
  const tag = decodeURIComponent(encodedTag);

  // Verify the tag exists
  const allTagsData = await api.get(PayloadEntity.AllTags);
  if (!allTagsData) {
    notFound();
  }

  const allTags = uniqBy(allTagsData.flatMap((doc) => doc.tags).filter(Boolean), 'id');
  const tagExists = allTags.some(({ name }) => name === tag);

  if (!tagExists) {
    notFound();
  }

  // Convert dynamic route param to searchParams format for the Journal component
  return <Journal searchParams={{ tags: tag }} />;
}

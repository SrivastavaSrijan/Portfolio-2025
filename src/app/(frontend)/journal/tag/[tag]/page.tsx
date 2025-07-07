import { Journal } from '@/components/sections';
import { createMetadata } from '@/lib/config/metadata';
import { api, PayloadEntity } from '@/lib/graphql/server';
import { kebabCase } from 'lodash';
import { notFound } from 'next/navigation';

import type { Metadata } from 'next';

export const revalidate = 3600;

// Generate static params for all known tags
export async function generateStaticParams() {
  const allTagsData = await api.get(PayloadEntity.AllTags);

  if (!allTagsData) {
    return [];
  }

  return allTagsData.map(({ name }) => ({ tag: kebabCase(name) }));
}

interface JournalTagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateMetadata(): Promise<Metadata> {
  const remoteMetadata = await api.get(PayloadEntity.JournalMeta, {
    fetchPolicy: 'no-cache',
  });
  if (!remoteMetadata) {
    return createMetadata({});
  }

  return createMetadata(remoteMetadata);
}

export default async function JournalTagPage({ params }: JournalTagPageProps) {
  const { tag: encodedTag } = await params;
  const tag = decodeURIComponent(encodedTag);

  // Verify the tag exists
  const allTagsData = await api.get(PayloadEntity.AllTags);
  if (!allTagsData) {
    notFound();
  }

  const selectedTag = allTagsData.find(({ name }) => kebabCase(name) === kebabCase(tag)) ?? null;

  if (!selectedTag) {
    notFound();
  }

  return <Journal selectedTag={selectedTag} />;
}

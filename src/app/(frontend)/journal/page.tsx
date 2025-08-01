import { Journal } from '@/components/sections';
import { createMetadata } from '@/lib/config/metadata';
import { api, PayloadEntity } from '@/lib/graphql/server';

import type { Metadata } from 'next';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const remoteMetadata = await api.get(PayloadEntity.JournalMeta, { fetchPolicy: 'no-cache' });
  if (!remoteMetadata) {
    return createMetadata({});
  }
  return createMetadata(remoteMetadata);
}

export default async function CaseStudies() {
  return <Journal />;
}

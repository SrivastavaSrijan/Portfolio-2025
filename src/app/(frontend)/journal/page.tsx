import { Journal } from '@/components/sections';
import { createMetadata } from '@/lib/config/metadata';
import { fetchJournalMetadata } from '@/lib/graphql/server';
import type { Metadata } from 'next';

export const revalidate = 3600;

interface CaseStudiesPageProps {
  searchParams: Promise<{
    tags?: string;
  }>;
}

export async function generateMetadata(): Promise<Metadata> {
  const remoteMetadata = await fetchJournalMetadata();
  return createMetadata(remoteMetadata);
}

export default async function CaseStudies({ searchParams }: CaseStudiesPageProps) {
  const { tags } = await searchParams;
  return <Journal searchParams={{ tags }} />;
}

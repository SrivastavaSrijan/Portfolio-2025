import { Journal } from '@/components/sections';
import { createMetadata } from '@/lib/config/metadata';
import { fetchJournalMetadata } from '@/lib/actions/revalidation';
import type { GetServerSideProps, Metadata } from 'next';

export const dynamic = 'force-dynamic';

interface CaseStudiesPageProps extends GetServerSideProps {
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

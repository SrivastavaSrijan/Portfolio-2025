import { Journal } from '@/components/sections';
import { query } from '@/lib/apollo/apolloClient';
import { createMetadata } from '@/lib/config/metadata';
import {
  GetJournalMetaDocument,
  type GetJournalMetaQuery,
} from '@/lib/graphql/__generated__/hooks';
import type { GetServerSideProps, Metadata } from 'next';

export const dynamic = 'force-dynamic';

interface CaseStudiesPageProps extends GetServerSideProps {
  searchParams: Promise<{
    tags?: string;
  }>;
}

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await query<GetJournalMetaQuery>({
    query: GetJournalMetaDocument,
    context: {
      fetchOptions: {
        next: {
          revalidate: 3600,
          tags: ['hero-meta'],
        },
      },
    },
  });
  const remoteMetadata = data?.Journal?.meta ?? {};

  return createMetadata(remoteMetadata);
}

export default async function CaseStudies({ searchParams }: CaseStudiesPageProps) {
  const { tags } = await searchParams;
  return <Journal searchParams={{ tags }} />;
}

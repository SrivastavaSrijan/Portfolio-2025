import { Journal } from '@/components/fragments';
import { query } from '@/lib/apollo/apolloClient';
import { createMetadata } from '@/lib/config/metadata';
import {
  GetJournalMetaDocument,
  type GetJournalMetaQuery,
} from '@/lib/graphql/__generated__/hooks';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';
// export const revalidate = 60;
// export const fetchCache = 'force-no-store';

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await query<GetJournalMetaQuery>({
    query: GetJournalMetaDocument,
  });
  const remoteMetadata = data?.Journal?.meta ?? {};

  return createMetadata(remoteMetadata);
}
export default async function CaseStudies() {
  return <Journal />;
}

import {
  GetCaseStudyBySlugMetaDocument,
  type GetCaseStudyBySlugMetaQuery,
} from '@/lib/graphql/__generated__/hooks';
import { isStringParam } from '@/lib/utils';

import { query } from '@/lib/apollo/apolloClient';
import { createMetadata } from '@/lib/config/metadata';
import type { GetServerSideProps, Metadata } from 'next';
import { CaseStudy, NotFound } from '@/components/fragments';

interface CaseStudyBySlugProps extends GetServerSideProps {
  params: Promise<{
    slug: string;
  }>;
}
export async function generateMetadata({ params }: CaseStudyBySlugProps): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await query<GetCaseStudyBySlugMetaQuery>({
    query: GetCaseStudyBySlugMetaDocument,
    variables: {
      slug,
    },
  });
  const remoteMetadata = data?.CaseStudies?.docs?.[0]?.meta ?? {};
  return createMetadata(remoteMetadata);
}

export default async function CaseStudies({ params }: CaseStudyBySlugProps) {
  const { slug } = await params;
  if (!isStringParam(slug)) {
    return <NotFound />;
  }
  return <CaseStudy slug={slug} />;
}

import {
  GetCaseStudyBySlugMetaDocument,
  type GetCaseStudyBySlugMetaQuery,
} from '@/lib/graphql/__generated__/hooks';
import { isStringParam } from '@/lib/utils';

import client from '@/lib/apollo';
import { createMetadata } from '@/lib/config/metadata';
import type { Metadata } from 'next';
import { NotFound } from '@/components/fragments';
import { CaseStudy } from '@/components/sections';

export const revalidate = 3600;
interface CaseStudyBySlugProps {
  params: Promise<{
    slug: string;
  }>;
}
export async function generateMetadata({ params }: CaseStudyBySlugProps): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await client.query<GetCaseStudyBySlugMetaQuery>({
    query: GetCaseStudyBySlugMetaDocument,
    variables: {
      slug,
    },
    context: {
      fetchOptions: {
        next: {
          revalidate: 3600,
          tags: ['journal-slug-meta'],
        },
      },
    },
  });
  const remoteMetadata = data?.CaseStudies?.docs?.[0]?.meta ?? {};
  return createMetadata(remoteMetadata);
}

export default async function CaseStudyBySlug({ params }: CaseStudyBySlugProps) {
  const { slug } = await params;
  if (!isStringParam(slug)) {
    return <NotFound />;
  }
  return <CaseStudy slug={slug} />;
}

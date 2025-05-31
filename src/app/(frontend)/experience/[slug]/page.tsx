import {
  GetExperienceBySlugMetaDocument,
  type GetExperienceBySlugMetaQuery,
} from '@/lib/graphql/__generated__/hooks';
import { isStringParam } from '@/lib/utils';

import { query } from '@/lib/apollo/apolloClient';
import { createMetadata } from '@/lib/config/metadata';
import type { GetServerSideProps, Metadata } from 'next';
import { Experience, NotFound } from '@/components/fragments';

export const dynamic = 'force-dynamic';
// export const revalidate = 60;
// export const fetchCache = 'force-no-store';

interface ExperienceBySlugProps extends GetServerSideProps {
  params: Promise<{
    slug: string;
  }>;
}
export async function generateMetadata({ params }: ExperienceBySlugProps): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await query<GetExperienceBySlugMetaQuery>({
    query: GetExperienceBySlugMetaDocument,
    variables: {
      slug,
    },
  });
  const remoteMetadata = data?.Experiences?.docs?.[0]?.meta ?? {};
  return createMetadata(remoteMetadata);
}

export default async function ExperienceBySlug({ params }: ExperienceBySlugProps) {
  const { slug } = await params;
  if (!isStringParam(slug)) {
    return <NotFound />;
  }
  return <Experience slug={slug} />;
}

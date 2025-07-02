import {
  GetExperienceBySlugMetaDocument,
  type GetExperienceBySlugMetaQuery,
} from '@/lib/graphql/__generated__/hooks';
import { isStringParam } from '@/lib/utils';

import { query } from '@/lib/apollo/apolloClient';
import { createMetadata } from '@/lib/config/metadata';
import type { Metadata } from 'next';
import { NotFound } from '@/components/fragments';
import { Experience } from '@/components/sections';

export const revalidate = 3600;
interface ExperienceBySlugProps {
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
    context: {
      fetchOptions: {
        next: {
          revalidate: 3600,
          tags: ['hero-meta'],
        },
      },
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

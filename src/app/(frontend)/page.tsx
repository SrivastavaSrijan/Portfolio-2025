import { FeaturedCaseStudies, Hero, Skills, FeaturedExperiences } from '@/components/sections';
import type { Metadata } from 'next';
import { createMetadata } from '@/lib/config/metadata';
import { query } from '@/lib/apollo/apolloClient';
import { GetHeroMetaDocument, type GetHeroMetaQuery } from '@/lib/graphql/__generated__/hooks';
import { ServerConfig } from '@/lib/config/server';

export const revalidate = ServerConfig.RevalidationTime;

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await query<GetHeroMetaQuery>({
    query: GetHeroMetaDocument,
    context: {
      fetchOptions: {
        next: {
          revalidate: 3600,
          tags: ['hero-meta'],
        },
      },
    },
  });

  const remoteMetadata = data?.Hero?.meta ?? {};
  return createMetadata(remoteMetadata);
}

export default function HomePage() {
  return (
    <div className="home @container flex min-h-screen flex-col bg-background">
      <Hero />
      <Skills />
      <FeaturedCaseStudies />
      <FeaturedExperiences />
    </div>
  );
}

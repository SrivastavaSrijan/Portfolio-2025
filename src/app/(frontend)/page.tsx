import { FeaturedCaseStudies, Hero, Skills, FeaturedExperiences } from '@/components/sections';
import type { Metadata } from 'next';
import { createMetadata } from '@/lib/config/metadata';
import client from '@/lib/apollo';
import { GetHeroMetaDocument, type GetHeroMetaQuery } from '@/lib/graphql/__generated__/hooks';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await client.query<GetHeroMetaQuery>({
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

import { Suspense } from 'react';
import { FeaturedCaseStudies, Hero, Skills, FeaturedExperiences } from '@/components/sections';
import type { Metadata } from 'next';
import { createMetadata } from '@/lib/config/metadata';
import { query } from '@/lib/apollo/apolloClient';
import { GetHeroMetaDocument, type GetHeroMetaQuery } from '@/lib/graphql/__generated__/hooks';

// Enable static generation with revalidation
export const revalidate = 3600; // Revalidate every hour

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
      <Suspense fallback={<div>Loading skills...</div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div>Loading case studies...</div>}>
        <FeaturedCaseStudies />
      </Suspense>
      <Suspense fallback={<div>Loading experiences...</div>}>
        <FeaturedExperiences />
      </Suspense>
    </div>
  );
}

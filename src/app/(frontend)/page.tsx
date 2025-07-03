import { FeaturedCaseStudies, Hero, Skills, FeaturedExperiences } from '@/components/sections';
import type { Metadata } from 'next';
import { createMetadata } from '@/lib/config/metadata';
import { fetchHeroMetadata } from '@/lib/graphql/server';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const remoteMetadata = await fetchHeroMetadata();
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

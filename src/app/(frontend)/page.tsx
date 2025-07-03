import { FeaturedCaseStudies, Hero, Skills, FeaturedExperiences } from '@/components/sections';
import type { Metadata } from 'next';
import { createMetadata } from '@/lib/config/metadata';
import { api, PayloadEntity } from '@/lib/graphql/server';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const remoteMetadata = await api.get(PayloadEntity.HeroMeta);
  if (!remoteMetadata) {
    throw new Error('Internal Server Error', { cause: [PayloadEntity.HeroMeta] });
  }
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

import { isStringParam } from '@/lib/utils';
import { createMetadata } from '@/lib/config/metadata';
import { api, PayloadEntity } from '@/lib/graphql/server';

import type { Metadata } from 'next';
import { NotFound } from '@/components/fragments';
import { Experience } from '@/components/sections';

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  // During build time, the Payload server might not be running
  // Return empty array to allow fallback to ISR
  try {
    const experiences = await api.get(PayloadEntity.AllExperiences);
    if (!experiences) {
      throw new Error('Internal Server Error', { cause: [PayloadEntity.AllExperiences] });
    }
    return experiences.map((experience) => ({
      slug: experience.slug,
    }));
  } catch {
    // Error already logged in server action
    return [];
  }
}

interface ExperienceBySlugProps {
  params: Promise<{
    slug: string;
  }>;
}
export async function generateMetadata({ params }: ExperienceBySlugProps): Promise<Metadata> {
  const { slug } = await params;
  const remoteMetadata = await api.get(PayloadEntity.ExperienceMeta, { slug });
  if (!remoteMetadata) {
    return createMetadata({});
  }
  return createMetadata(remoteMetadata);
}

export default async function ExperienceBySlug({ params }: ExperienceBySlugProps) {
  const { slug } = await params;
  if (!isStringParam(slug)) {
    return <NotFound />;
  }
  return <Experience slug={slug} />;
}

import { isStringParam } from '@/lib/utils';
import { createMetadata } from '@/lib/config/metadata';
import { fetchExperienceMetadata } from '@/lib/actions/revalidation';
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
  const remoteMetadata = await fetchExperienceMetadata(slug);
  return createMetadata(remoteMetadata);
}

export default async function ExperienceBySlug({ params }: ExperienceBySlugProps) {
  const { slug } = await params;
  if (!isStringParam(slug)) {
    return <NotFound />;
  }
  return <Experience slug={slug} />;
}

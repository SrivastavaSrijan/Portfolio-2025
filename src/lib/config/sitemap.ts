import type { MetadataRoute } from 'next';
import { Routes, FullURLs } from '@/lib/config/routes';

export type SitemapEntry = MetadataRoute.Sitemap[number];

export interface SitemapEntryWithDate {
  url: string;
  lastModified: Date;
  changeFrequency: SitemapEntry['changeFrequency'];
  priority: number;
}

export const createSitemapEntry = (
  path: string,
  lastModified: string | Date = new Date(),
  changeFrequency: SitemapEntry['changeFrequency'] = 'monthly',
  priority = 0.7
): SitemapEntryWithDate => ({
  url: `${FullURLs.root}${path}`,
  lastModified: new Date(lastModified),
  changeFrequency,
  priority,
});

export const createStaticPages = (): SitemapEntryWithDate[] => [
  createSitemapEntry('/', new Date(), 'weekly', 1.0),
  createSitemapEntry(Routes.CaseStudies, new Date(), 'weekly', 0.8),
];

export const createCaseStudyPages = (
  caseStudies: ReadonlyArray<{ readonly slug?: string | null; readonly updatedAt?: unknown }>
): SitemapEntryWithDate[] =>
  caseStudies
    .filter((study): study is { readonly slug: string; readonly updatedAt: string } =>
      Boolean(study.slug && study.updatedAt)
    )
    .map((study) =>
      createSitemapEntry(`${Routes.CaseStudies}/${study.slug}`, study.updatedAt, 'monthly', 0.7)
    );

export const createExperiencePages = (
  experiences: ReadonlyArray<{ readonly slug?: string | null; readonly updatedAt?: unknown }>
): SitemapEntryWithDate[] =>
  experiences
    .filter((exp): exp is { readonly slug: string; readonly updatedAt: string } =>
      Boolean(exp.slug && exp.updatedAt)
    )
    .map((exp) =>
      createSitemapEntry(`${Routes.Experiences}/${exp.slug}`, exp.updatedAt, 'monthly', 0.6)
    );

export const createTagPages = (
  tags: ReadonlyArray<{ readonly name: string; readonly slug?: string | null }>
): SitemapEntryWithDate[] =>
  tags
    .filter((tag): tag is { readonly name: string; readonly slug: string } =>
      Boolean(tag.slug || tag.name)
    )
    .map((tag) =>
      createSitemapEntry(Routes.CaseStudiesByTag(tag.slug || tag.name), new Date(), 'weekly', 0.5)
    );

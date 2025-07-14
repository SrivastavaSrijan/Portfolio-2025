import type { MetadataRoute } from 'next';
import { Routes, FullURLs } from '@/lib/config/routes';
import type { PayloadEntity, PayloadFetchTypeMap } from '../graphql/server';

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
  caseStudies: PayloadFetchTypeMap[PayloadEntity.AllCaseStudies]['result']
): SitemapEntryWithDate[] =>
  caseStudies
    .filter(
      (study): study is typeof study & { slug: string; updatedAt: string } =>
        typeof study.slug === 'string' && typeof study.updatedAt === 'string'
    )
    .map((study) =>
      createSitemapEntry(Routes.CaseStudiesBySlug(study.slug), study.updatedAt, 'monthly', 0.7)
    );

export const createExperiencePages = (
  experiences: PayloadFetchTypeMap[PayloadEntity.AllExperiences]['result']
): SitemapEntryWithDate[] =>
  experiences
    .filter(
      (exp): exp is typeof exp & { slug: string; updatedAt: string } =>
        typeof exp.slug === 'string' && typeof exp.updatedAt === 'string'
    )
    .map((exp) =>
      createSitemapEntry(Routes.ExperiencesBySlug(exp.slug), exp.updatedAt, 'monthly', 0.6)
    );

export const createTagPages = (
  tags: PayloadFetchTypeMap[PayloadEntity.AllTags]['result']
): SitemapEntryWithDate[] =>
  tags
    .filter((tag): tag is typeof tag & { slug: string } => typeof tag.slug === 'string')
    .map((tag) => createSitemapEntry(Routes.CaseStudiesByTag(tag.slug), new Date(), 'weekly', 0.5));

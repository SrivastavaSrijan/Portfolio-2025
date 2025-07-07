import type { MetadataRoute } from 'next';
import { api, PayloadEntity } from '@/lib/graphql/server';
import {
  createStaticPages,
  createCaseStudyPages,
  createExperiencePages,
  createTagPages,
} from '@/lib/config/sitemap';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Fetch all data in parallel
    const [caseStudies, experiences, allTagsData] = await Promise.all([
      api.get(PayloadEntity.AllCaseStudies),
      api.get(PayloadEntity.AllExperiences),
      api.get(PayloadEntity.AllTags),
    ]);

    // Create static pages
    const staticPages = createStaticPages();

    // Create case study pages
    const caseStudyPages = caseStudies ? createCaseStudyPages(caseStudies) : [];

    // Create experience pages
    const experiencePages = experiences ? createExperiencePages(experiences) : [];

    const tagPages = createTagPages(allTagsData);

    return [...staticPages, ...caseStudyPages, ...experiencePages, ...tagPages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return minimal sitemap on error
    return createStaticPages();
  }
}

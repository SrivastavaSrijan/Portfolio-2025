'use server';

import { revalidateTag } from 'next/cache';
import {
  GetHeroDocument,
  GetSkillsDocument,
  GetFeaturedCaseStudiesDocument,
  GetFeaturedExperiencesDocument,
  GetFooterDocument,
  GetCaseStudyBySlugDocument,
  GetExperienceBySlugDocument,
  GetCaseStudiesByParamsDocument,
  GetAllTagsDocument,
  GetHeroMetaDocument,
  GetCaseStudyBySlugMetaDocument,
  GetExperienceBySlugMetaDocument,
  GetJournalMetaDocument,
  type GetHeroQuery,
  type GetSkillsQuery,
  type GetFeaturedCaseStudiesQuery,
  type GetFeaturedExperiencesQuery,
  type GetFooterQuery,
  type GetCaseStudyBySlugQuery,
  type GetExperienceBySlugQuery,
  type GetCaseStudiesByParamsQuery,
  type GetAllTagsQuery,
  type GetHeroMetaQuery,
  type GetCaseStudyBySlugMetaQuery,
  type GetExperienceBySlugMetaQuery,
  type GetJournalMetaQuery,
} from '@/lib/graphql/__generated__/hooks';
import { ServerActionComponents, ServerConfig } from '../config/server';
import { query } from '../apollo/server';

/**
 * Revalidate a component by tag
 */
export async function revalidateComponent(component: ServerActionComponents) {
  revalidateTag(component);
  return { success: true, tag: component, timestamp: new Date().toISOString() };
}
/**
 * Fetch data for Hero component with proper typing
 */
export async function fetchHeroData() {
  const { data } = await query<GetHeroQuery>({
    query: GetHeroDocument,
    context: {
      fetchOptions: {
        next: {
          revalidate: ServerConfig.RevalidationTime,
          tags: [ServerActionComponents.Hero],
        },
      },
    },
  });
  if (!data?.Hero) throw new Error('Hero data not found');
  return data.Hero;
}

/**
 * Fetch data for Skills component with proper typing
 */
export async function fetchSkillsData() {
  const { data } = await query<GetSkillsQuery>({
    query: GetSkillsDocument,
    context: {
      fetchOptions: {
        next: {
          revalidate: ServerConfig.RevalidationTime,
          tags: [ServerActionComponents.Skills],
        },
      },
    },
  });
  if (!data?.Skill) throw new Error('Skills data not found');
  return data.Skill;
}

/**
 * Fetch data for FeaturedCaseStudies component with proper typing
 */
export async function fetchFeaturedCaseStudiesData() {
  const { data } = await query<GetFeaturedCaseStudiesQuery>({
    query: GetFeaturedCaseStudiesDocument,
    context: {
      fetchOptions: {
        next: {
          revalidate: ServerConfig.RevalidationTime,
          tags: [ServerActionComponents.FeaturedCaseStudies],
        },
      },
    },
  });
  if (!data?.FeaturedCaseStudy) throw new Error('FeaturedCaseStudies data not found');
  return data.FeaturedCaseStudy;
}

/**
 * Fetch data for FeaturedExperiences component with proper typing
 */
export async function fetchFeaturedExperiencesData() {
  const { data } = await query<GetFeaturedExperiencesQuery>({
    query: GetFeaturedExperiencesDocument,
    context: {
      fetchOptions: {
        next: {
          revalidate: ServerConfig.RevalidationTime,
          tags: [ServerActionComponents.FeaturedExperiences],
        },
      },
    },
  });
  if (!data?.FeaturedExperience) throw new Error('FeaturedExperiences data not found');
  return data.FeaturedExperience;
}

/**
 * Fetch data for Footer component with proper typing
 */
export async function fetchFooterData() {
  const { data } = await query<GetFooterQuery>({
    query: GetFooterDocument,
    context: {
      fetchOptions: {
        next: {
          revalidate: ServerConfig.RevalidationTime,
          tags: [ServerActionComponents.Footer],
        },
      },
    },
  });
  if (!data?.Footer) throw new Error('Footer data not found');
  return data.Footer;
}

/**
 * Fetch data for a single Case Study by slug with proper typing
 */
export async function fetchCaseStudyData(slug: string) {
  const { data } = await query<GetCaseStudyBySlugQuery>({
    query: GetCaseStudyBySlugDocument,
    variables: { slug },
    context: {
      fetchOptions: {
        next: {
          revalidate: ServerConfig.RevalidationTime,
          tags: [ServerActionComponents.CaseStudy, `slug:${slug}`],
        },
      },
    },
  });
  if (!data?.CaseStudies?.docs?.length)
    throw new Error(`Case Study data not found for slug: ${slug}`);
  return data.CaseStudies.docs[0];
}

/**
 * Fetch data for a single Experience by slug with proper typing
 */
export async function fetchExperienceData(slug: string) {
  const { data } = await query<GetExperienceBySlugQuery>({
    query: GetExperienceBySlugDocument,
    variables: { slug },
    context: {
      fetchOptions: {
        next: {
          revalidate: ServerConfig.RevalidationTime,
          tags: [ServerActionComponents.Experience, `slug:${slug}`],
        },
      },
    },
  });
  if (!data?.Experiences?.docs?.length)
    throw new Error(`Experience data not found for slug: ${slug}`);
  return data.Experiences.docs[0];
}

/**
 * Fetch data for Case Studies by parameters with proper typing
 */
export async function fetchCaseStudiesByParams(params: {
  tagIds?: unknown[];
  experience?: unknown[];
}) {
  const { data } = await query<GetCaseStudiesByParamsQuery>({
    query: GetCaseStudiesByParamsDocument,
    variables: params,
    context: {
      fetchOptions: {
        next: {
          revalidate: ServerConfig.RevalidationTime,
          tags: [ServerActionComponents.CaseStudiesByParams, JSON.stringify(params)],
        },
      },
    },
  });
  return {
    caseStudies: data?.CaseStudies?.docs ?? [],
    journal: data?.Journal,
  };
}

/**
 * Fetch data for all tags with proper typing
 */
export async function fetchAllTagsData() {
  const { data } = await query<GetAllTagsQuery>({
    query: GetAllTagsDocument,
    context: {
      fetchOptions: {
        next: {
          revalidate: ServerConfig.RevalidationTime,
          tags: [ServerActionComponents.AllTags],
        },
      },
    },
  });
  if (!data?.CaseStudies?.docs) throw new Error('Tags data not found');
  return data.CaseStudies.docs;
}

/**
 * METADATA FETCH FUNCTIONS
 * These functions fetch metadata for generating Next.js metadata in RSC pages
 */

/**
 * Fetch metadata for Hero/HomePage
 */
export async function fetchHeroMetadata() {
  const { data } = await query<GetHeroMetaQuery>({
    query: GetHeroMetaDocument,
    context: {
      fetchOptions: {
        next: {
          revalidate: ServerConfig.RevalidationTime,
          tags: ['hero-meta'],
        },
      },
    },
  });
  if (!data?.Hero?.meta) throw new Error('Hero metadata not found');
  return data.Hero.meta;
}

/**
 * Fetch metadata for Journal page
 */
export async function fetchJournalMetadata() {
  const { data } = await query<GetJournalMetaQuery>({
    query: GetJournalMetaDocument,
    context: {
      fetchOptions: {
        next: {
          revalidate: ServerConfig.RevalidationTime,
          tags: ['journal-meta'],
        },
      },
    },
  });
  if (!data?.Journal?.meta) throw new Error('Journal metadata not found');
  return data.Journal.meta;
}

/**
 * Fetch metadata for a single Case Study by slug
 */
export async function fetchCaseStudyMetadata(slug: string) {
  const { data } = await query<GetCaseStudyBySlugMetaQuery>({
    query: GetCaseStudyBySlugMetaDocument,
    variables: { slug },
    context: {
      fetchOptions: {
        next: {
          revalidate: ServerConfig.RevalidationTime,
          tags: ['case-study-meta', `slug:${slug}`],
        },
      },
    },
  });
  if (!data?.CaseStudies?.docs?.length || !data.CaseStudies.docs[0]?.meta) {
    throw new Error(`Case Study metadata not found for slug: ${slug}`);
  }
  return data.CaseStudies.docs[0].meta;
}

/**
 * Fetch metadata for a single Experience by slug
 */
export async function fetchExperienceMetadata(slug: string) {
  const { data } = await query<GetExperienceBySlugMetaQuery>({
    query: GetExperienceBySlugMetaDocument,
    variables: { slug },
    context: {
      fetchOptions: {
        next: {
          revalidate: ServerConfig.RevalidationTime,
          tags: ['experience-meta', `slug:${slug}`],
        },
      },
    },
  });
  if (!data?.Experiences?.docs?.length || !data.Experiences.docs[0]?.meta) {
    throw new Error(`Experience metadata not found for slug: ${slug}`);
  }
  return data.Experiences.docs[0].meta;
}

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
  GetWorkButtonsDocument,
  GetAllExperiencesSlugsDocument,
  GetAllCaseStudiesSlugsDocument,
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
  type GetWorkButtonsQuery,
  type GetAllExperiencesSlugsQuery,
  type GetAllCaseStudiesSlugsQuery,
  type GetCaseStudiesByParamsQueryVariables,
} from '@/lib/graphql/__generated__/hooks';
import { ServerActionComponents, ServerConfig } from '../../config/server';
import { getClient } from '../../apollo/server';
import { handleError, logServerActionError } from './error';

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
  try {
    const { query } = getClient();
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
  } catch (error) {
    const serverError = handleError(error, 'fetchHeroData');
    logServerActionError(serverError, 'fetchHeroData');
    throw serverError;
  }
}

/**
 * Fetch data for Skills component with proper typing
 */
export async function fetchSkillsData() {
  try {
    const { query } = getClient();
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
  } catch (error) {
    const serverError = handleError(error, 'fetchSkillsData');
    logServerActionError(serverError, 'fetchSkillsData');
    throw serverError;
  }
}

/**
 * Fetch data for FeaturedCaseStudies component with proper typing
 */
export async function fetchFeaturedCaseStudiesData() {
  try {
    const { query } = getClient();
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
  } catch (error) {
    const serverError = handleError(error, 'fetchFeaturedCaseStudiesData');
    logServerActionError(serverError, 'fetchFeaturedCaseStudiesData');
    throw serverError;
  }
}

/**
 * Fetch data for FeaturedExperiences component with proper typing
 */
export async function fetchFeaturedExperiencesData() {
  try {
    const { query } = getClient();
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
  } catch (error) {
    const serverError = handleError(error, 'fetchFeaturedExperiencesData');
    logServerActionError(serverError, 'fetchFeaturedExperiencesData');
    throw serverError;
  }
}

/**
 * Fetch data for Footer component with proper typing
 */
export async function fetchFooterData() {
  try {
    const { query } = getClient();
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
  } catch (error) {
    const serverError = handleError(error, 'fetchFooterData');
    logServerActionError(serverError, 'fetchFooterData');
    throw serverError;
  }
}

/**
 * Fetch data for a single Case Study by slug with proper typing
 */
export async function fetchCaseStudyData(slug: string) {
  try {
    const { query } = getClient();
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
  } catch (error) {
    const serverError = handleError(error, 'fetchCaseStudyData');
    logServerActionError(serverError, 'fetchCaseStudyData');
    throw serverError;
  }
}

/**
 * Fetch data for a single Experience by slug with proper typing
 */
export async function fetchExperienceData(slug: string) {
  try {
    const { query } = getClient();
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
  } catch (error) {
    const serverError = handleError(error, 'fetchExperienceData');
    logServerActionError(serverError, 'fetchExperienceData');
    throw serverError;
  }
}

/**
 * Fetch data for Case Studies by parameters with proper typing
 */
export async function fetchCaseStudiesByParams(params: GetCaseStudiesByParamsQueryVariables) {
  try {
    const { query } = getClient();
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
  } catch (error) {
    const serverError = handleError(error, 'fetchCaseStudiesByParams');
    logServerActionError(serverError, 'fetchCaseStudiesByParams');
    throw serverError;
  }
}

/**
 * Fetch data for all tags with proper typing
 */
export async function fetchAllTagsData() {
  try {
    const { query } = getClient();
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
  } catch (error) {
    const serverError = handleError(error, 'fetchAllTagsData');
    logServerActionError(serverError, 'fetchAllTagsData');
    throw serverError;
  }
}

/**
 * METADATA FETCH FUNCTIONS
 * These functions fetch metadata for generating Next.js metadata in RSC pages
 */

/**
 * Fetch metadata for Hero/HomePage
 */
export async function fetchHeroMetadata() {
  try {
    const { query } = getClient();
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
  } catch (error) {
    const serverError = handleError(error, 'fetchHeroMetadata');
    logServerActionError(serverError, 'fetchHeroMetadata');
    throw serverError;
  }
}

/**
 * Fetch metadata for Journal page
 */
export async function fetchJournalMetadata() {
  try {
    const { query } = getClient();
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
  } catch (error) {
    const serverError = handleError(error, 'fetchJournalMetadata');
    logServerActionError(serverError, 'fetchJournalMetadata');
    throw serverError;
  }
}

/**
 * Fetch metadata for a single Case Study by slug
 */
export async function fetchCaseStudyMetadata(slug: string) {
  try {
    const { query } = getClient();
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
  } catch (error) {
    const serverError = handleError(error, 'fetchCaseStudyMetadata');
    logServerActionError(serverError, 'fetchCaseStudyMetadata');
    throw serverError;
  }
}

/**
 * Fetch metadata for a single Experience by slug
 */
export async function fetchExperienceMetadata(slug: string) {
  try {
    const { query } = getClient();
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
  } catch (error) {
    const serverError = handleError(error, 'fetchExperienceMetadata');
    logServerActionError(serverError, 'fetchExperienceMetadata');
    throw serverError;
  }
}

/**
 * Fetch data for WorkButtons component with proper typing
 */
export async function fetchWorkButtonsData() {
  try {
    const { query } = getClient();
    const { data } = await query<GetWorkButtonsQuery>({
      query: GetWorkButtonsDocument,
      context: {
        fetchOptions: {
          next: {
            revalidate: ServerConfig.RevalidationTime,
            tags: [ServerActionComponents.WorkButtons],
          },
        },
      },
    });
    if (!data?.WorkButton) throw new Error('WorkButtons data not found');
    return data.WorkButton;
  } catch (error) {
    const serverError = handleError(error, 'fetchWorkButtonsData');
    logServerActionError(serverError, 'fetchWorkButtonsData');
    throw serverError;
  }
}

/**
 * Fetch all experiences for static generation
 */
export async function fetchAllExperiencesData() {
  try {
    const { query } = getClient();
    const { data } = await query<GetAllExperiencesSlugsQuery>({
      query: GetAllExperiencesSlugsDocument,
      context: {
        fetchOptions: {
          next: {
            revalidate: ServerConfig.RevalidationTime,
            tags: [ServerActionComponents.AllExperiences],
          },
        },
      },
    });
    return data?.Experiences?.docs ?? [];
  } catch (error) {
    const serverError = handleError(error, 'fetchAllExperiencesData');
    logServerActionError(serverError, 'fetchAllExperiencesData');
    throw serverError;
  }
}

/**
 * Fetch all case studies for static generation
 */
export async function fetchAllCaseStudiesData() {
  try {
    const { query } = getClient();
    const { data } = await query<GetAllCaseStudiesSlugsQuery>({
      query: GetAllCaseStudiesSlugsDocument,
      context: {
        fetchOptions: {
          next: {
            revalidate: ServerConfig.RevalidationTime,
            tags: [ServerActionComponents.AllCaseStudies],
          },
        },
      },
    });
    return data?.CaseStudies?.docs ?? [];
  } catch (error) {
    const serverError = handleError(error, 'fetchAllCaseStudiesData');
    logServerActionError(serverError, 'fetchAllCaseStudiesData');
    throw serverError;
  }
}

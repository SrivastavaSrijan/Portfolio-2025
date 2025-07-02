'use server';

import { revalidateTag } from 'next/cache';
import { query } from '@/lib/apollo/apolloClient';
import {
  GetHeroDocument,
  GetSkillsDocument,
  GetFeaturedCaseStudiesDocument,
  GetFeaturedExperiencesDocument,
  GetFooterDocument,
  type GetHeroQuery,
  type GetSkillsQuery,
  type GetFeaturedCaseStudiesQuery,
  type GetFeaturedExperiencesQuery,
  type GetFooterQuery,
} from '@/lib/graphql/__generated__/hooks';
import { ServerActionComponents, ServerConfig } from '../config/server';

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

import type { DocumentNode } from '@apollo/client';
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
  type GetCaseStudyBySlugQueryVariables,
  type GetExperienceBySlugQueryVariables,
  type GetCaseStudyBySlugMetaQueryVariables,
  type GetExperienceBySlugMetaQueryVariables,
} from '@/lib/graphql/__generated__/hooks';
import { PayloadEntity } from './enums';

// Simple, direct type mapping with proper non-null assertions
export type PayloadFetchTypeMap = {
  [PayloadEntity.Hero]: {
    query: GetHeroQuery;
    result: NonNullable<GetHeroQuery['Hero']>;
  };
  [PayloadEntity.Skills]: {
    query: GetSkillsQuery;
    result: NonNullable<GetSkillsQuery['Skill']>;
  };
  [PayloadEntity.FeaturedCaseStudies]: {
    query: GetFeaturedCaseStudiesQuery;
    result: NonNullable<GetFeaturedCaseStudiesQuery['FeaturedCaseStudy']>;
  };
  [PayloadEntity.FeaturedExperiences]: {
    query: GetFeaturedExperiencesQuery;
    result: NonNullable<GetFeaturedExperiencesQuery['FeaturedExperience']>;
  };
  [PayloadEntity.Footer]: {
    query: GetFooterQuery;
    result: NonNullable<GetFooterQuery['Footer']>;
  };
  [PayloadEntity.WorkButtons]: {
    query: GetWorkButtonsQuery;
    result: NonNullable<GetWorkButtonsQuery['WorkButton']>;
  };
  [PayloadEntity.CaseStudy]: {
    query: GetCaseStudyBySlugQuery;
    result: NonNullable<NonNullable<GetCaseStudyBySlugQuery['CaseStudies']>['docs'][0]>;
    variables: GetCaseStudyBySlugQueryVariables;
  };
  [PayloadEntity.Experience]: {
    query: GetExperienceBySlugQuery;
    result: NonNullable<NonNullable<GetExperienceBySlugQuery['Experiences']>['docs'][0]>;
    variables: GetExperienceBySlugQueryVariables;
  };
  [PayloadEntity.CaseStudiesByParams]: {
    query: GetCaseStudiesByParamsQuery;
    result: {
      caseStudies: NonNullable<GetCaseStudiesByParamsQuery['CaseStudies']>['docs'];
      journal: NonNullable<GetCaseStudiesByParamsQuery['Journal']>;
    };
    variables: GetCaseStudiesByParamsQueryVariables;
  };
  [PayloadEntity.AllTags]: {
    query: GetAllTagsQuery;
    result: NonNullable<GetAllTagsQuery['CaseStudies']>['docs'];
  };
  [PayloadEntity.AllExperiences]: {
    query: GetAllExperiencesSlugsQuery;
    result: NonNullable<GetAllExperiencesSlugsQuery['Experiences']>['docs'];
  };
  [PayloadEntity.AllCaseStudies]: {
    query: GetAllCaseStudiesSlugsQuery;
    result: NonNullable<GetAllCaseStudiesSlugsQuery['CaseStudies']>['docs'];
  };
  [PayloadEntity.HeroMeta]: {
    query: GetHeroMetaQuery;
    result: NonNullable<GetHeroMetaQuery['Hero']>['meta'];
  };
  [PayloadEntity.JournalMeta]: {
    query: GetJournalMetaQuery;
    result: NonNullable<GetJournalMetaQuery['Journal']>['meta'];
  };
  [PayloadEntity.CaseStudyMeta]: {
    query: GetCaseStudyBySlugMetaQuery;
    result: NonNullable<
      NonNullable<NonNullable<GetCaseStudyBySlugMetaQuery['CaseStudies']>['docs'][0]>['meta']
    >;
    variables: GetCaseStudyBySlugMetaQueryVariables;
  };
  [PayloadEntity.ExperienceMeta]: {
    query: GetExperienceBySlugMetaQuery;
    result: NonNullable<
      NonNullable<NonNullable<GetExperienceBySlugMetaQuery['Experiences']>['docs'][0]>['meta']
    >;
    variables: GetExperienceBySlugMetaQueryVariables;
  };
  [PayloadEntity.Journal]: {
    query: GetJournalMetaQuery;
    result: NonNullable<GetJournalMetaQuery['Journal']>;
  };
};

// Individual config type for each component
type ConfigFor<T extends keyof PayloadFetchTypeMap> = {
  document: DocumentNode;
  extractData: (data: PayloadFetchTypeMap[T]['query']) => PayloadFetchTypeMap[T]['result'] | null;
  tags: string[];
} & ('variables' extends keyof PayloadFetchTypeMap[T]
  ? { variables: PayloadFetchTypeMap[T]['variables'] }
  : // biome-ignore lint/complexity/noBannedTypes: Empty object type needed for conditional type
    {});

/**
 * Configuration map for all server actions
 */
export const PayloadFetchConfig: {
  [K in keyof PayloadFetchTypeMap]: ConfigFor<K>;
} = {
  [PayloadEntity.Hero]: {
    document: GetHeroDocument,
    extractData: (data: GetHeroQuery) => {
      return data.Hero ?? null;
    },
    tags: [PayloadEntity.Hero],
  },

  [PayloadEntity.Skills]: {
    document: GetSkillsDocument,
    extractData: (data: GetSkillsQuery) => {
      return data.Skill ?? null;
    },
    tags: [PayloadEntity.Skills],
  },

  [PayloadEntity.FeaturedCaseStudies]: {
    document: GetFeaturedCaseStudiesDocument,
    extractData: (data: GetFeaturedCaseStudiesQuery) => {
      return data.FeaturedCaseStudy ?? null;
    },
    tags: [PayloadEntity.FeaturedCaseStudies],
  },

  [PayloadEntity.FeaturedExperiences]: {
    document: GetFeaturedExperiencesDocument,
    extractData: (data: GetFeaturedExperiencesQuery) => {
      return data.FeaturedExperience ?? null;
    },
    tags: [PayloadEntity.FeaturedExperiences],
  },

  [PayloadEntity.Footer]: {
    document: GetFooterDocument,
    extractData: (data: GetFooterQuery) => {
      return data.Footer ?? null;
    },
    tags: [PayloadEntity.Footer],
  },

  [PayloadEntity.WorkButtons]: {
    document: GetWorkButtonsDocument,
    extractData: (data: GetWorkButtonsQuery) => {
      return data.WorkButton ?? null;
    },
    tags: [PayloadEntity.WorkButtons],
  },

  [PayloadEntity.CaseStudy]: {
    document: GetCaseStudyBySlugDocument,
    extractData: (data: GetCaseStudyBySlugQuery) => {
      return data.CaseStudies?.docs?.[0] ?? null;
    },
    variables: { slug: '' },
    tags: [PayloadEntity.CaseStudy],
  },

  [PayloadEntity.Experience]: {
    document: GetExperienceBySlugDocument,
    extractData: (data: GetExperienceBySlugQuery) => {
      return data.Experiences?.docs?.[0] ?? null;
    },
    variables: { slug: '' },
    tags: [PayloadEntity.Experience],
  },

  [PayloadEntity.CaseStudiesByParams]: {
    document: GetCaseStudiesByParamsDocument,
    extractData: (data: GetCaseStudiesByParamsQuery) => {
      if (!data.Journal) {
        return null;
      }
      return {
        caseStudies: data.CaseStudies?.docs ?? [],
        journal: data.Journal,
      };
    },
    variables: {},
    tags: [PayloadEntity.CaseStudiesByParams],
  },

  [PayloadEntity.AllTags]: {
    document: GetAllTagsDocument,
    extractData: (data: GetAllTagsQuery) => data.CaseStudies?.docs ?? [],
    tags: [PayloadEntity.AllTags],
  },

  [PayloadEntity.AllExperiences]: {
    document: GetAllExperiencesSlugsDocument,
    extractData: (data: GetAllExperiencesSlugsQuery) => data.Experiences?.docs ?? [],
    tags: [PayloadEntity.AllExperiences],
  },

  [PayloadEntity.AllCaseStudies]: {
    document: GetAllCaseStudiesSlugsDocument,
    extractData: (data: GetAllCaseStudiesSlugsQuery) => data.CaseStudies?.docs ?? [],
    tags: [PayloadEntity.AllCaseStudies],
  },

  [PayloadEntity.HeroMeta]: {
    document: GetHeroMetaDocument,
    extractData: (data: GetHeroMetaQuery) => {
      return data.Hero?.meta ?? null;
    },
    tags: [PayloadEntity.HeroMeta],
  },

  [PayloadEntity.JournalMeta]: {
    document: GetJournalMetaDocument,
    extractData: (data: GetJournalMetaQuery) => {
      return data.Journal?.meta ?? null;
    },
    tags: [PayloadEntity.JournalMeta],
  },

  [PayloadEntity.CaseStudyMeta]: {
    document: GetCaseStudyBySlugMetaDocument,
    extractData: (data: GetCaseStudyBySlugMetaQuery) => {
      return data.CaseStudies?.docs?.[0]?.meta ?? null;
    },
    variables: { slug: '' },
    tags: [PayloadEntity.CaseStudyMeta],
  },

  [PayloadEntity.ExperienceMeta]: {
    document: GetExperienceBySlugMetaDocument,
    extractData: (data: GetExperienceBySlugMetaQuery) => {
      return data.Experiences?.docs?.[0]?.meta ?? null;
    },
    variables: { slug: '' },
    tags: [PayloadEntity.ExperienceMeta],
  },

  [PayloadEntity.Journal]: {
    document: GetJournalMetaDocument,
    extractData: (data: GetJournalMetaQuery) => {
      return data.Journal ?? null;
    },
    tags: [PayloadEntity.Journal],
  },
};

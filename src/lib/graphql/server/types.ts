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

export enum PayloadEntity {
  Hero = 'hero',
  Skills = 'skills',
  FeaturedCaseStudies = 'featured-case-studies',
  FeaturedExperiences = 'featured-experiences',
  Footer = 'footer',
  WorkButtons = 'work-buttons',
  Journal = 'journal',
  CaseStudy = 'case-studies',
  Experience = 'experiences',
  CaseStudiesByParams = 'case-studies-by-params',
  AllTags = 'all-tags',
  AllExperiences = 'all-experiences',
  AllCaseStudies = 'all-case-studies',
  // Metadata tags
  HeroMeta = 'hero-meta',
  JournalMeta = 'journal-meta',
  CaseStudyMeta = 'case-study-meta',
  ExperienceMeta = 'experience-meta',
}

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
  extractData: (data: PayloadFetchTypeMap[T]['query']) => PayloadFetchTypeMap[T]['result'];
  tags: string[];
} & ('variables' extends keyof PayloadFetchTypeMap[T]
  ? { variables: PayloadFetchTypeMap[T]['variables'] }
  : // biome-ignore lint/complexity/noBannedTypes: <explanation>
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
      if (!data.Hero) {
        throw new Error('Hero data is null or undefined');
      }
      return data.Hero;
    },
    tags: [PayloadEntity.Hero],
  },

  [PayloadEntity.Skills]: {
    document: GetSkillsDocument,
    extractData: (data: GetSkillsQuery) => {
      if (!data.Skill) {
        throw new Error('Skills data is null or undefined');
      }
      return data.Skill;
    },
    tags: [PayloadEntity.Skills],
  },

  [PayloadEntity.FeaturedCaseStudies]: {
    document: GetFeaturedCaseStudiesDocument,
    extractData: (data: GetFeaturedCaseStudiesQuery) => {
      if (!data.FeaturedCaseStudy) {
        throw new Error('FeaturedCaseStudies data is null or undefined');
      }
      return data.FeaturedCaseStudy;
    },
    tags: [PayloadEntity.FeaturedCaseStudies],
  },

  [PayloadEntity.FeaturedExperiences]: {
    document: GetFeaturedExperiencesDocument,
    extractData: (data: GetFeaturedExperiencesQuery) => {
      if (!data.FeaturedExperience) {
        throw new Error('FeaturedExperiences data is null or undefined');
      }
      return data.FeaturedExperience;
    },
    tags: [PayloadEntity.FeaturedExperiences],
  },

  [PayloadEntity.Footer]: {
    document: GetFooterDocument,
    extractData: (data: GetFooterQuery) => {
      if (!data.Footer) {
        throw new Error('Footer data is null or undefined');
      }
      return data.Footer;
    },
    tags: [PayloadEntity.Footer],
  },

  [PayloadEntity.WorkButtons]: {
    document: GetWorkButtonsDocument,
    extractData: (data: GetWorkButtonsQuery) => {
      if (!data.WorkButton) {
        throw new Error('WorkButtons data is null or undefined');
      }
      return data.WorkButton;
    },
    tags: [PayloadEntity.WorkButtons],
  },

  [PayloadEntity.CaseStudy]: {
    document: GetCaseStudyBySlugDocument,
    extractData: (data: GetCaseStudyBySlugQuery) => {
      const caseStudy = data.CaseStudies?.docs?.[0];
      if (!caseStudy) {
        throw new Error('CaseStudy not found or data is null');
      }
      return caseStudy;
    },
    variables: { slug: '' },
    tags: [PayloadEntity.CaseStudy],
  },

  [PayloadEntity.Experience]: {
    document: GetExperienceBySlugDocument,
    extractData: (data: GetExperienceBySlugQuery) => {
      const experience = data.Experiences?.docs?.[0];
      if (!experience) {
        throw new Error('Experience not found or data is null');
      }
      return experience;
    },
    variables: { slug: '' },
    tags: [PayloadEntity.Experience],
  },

  [PayloadEntity.CaseStudiesByParams]: {
    document: GetCaseStudiesByParamsDocument,
    extractData: (data: GetCaseStudiesByParamsQuery) => {
      if (!data.Journal) {
        throw new Error('Journal data is null or undefined');
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
      const meta = data.Hero?.meta;
      if (!meta) {
        throw new Error('HeroMeta is null or undefined');
      }
      return meta;
    },
    tags: [PayloadEntity.HeroMeta],
  },

  [PayloadEntity.JournalMeta]: {
    document: GetJournalMetaDocument,
    extractData: (data: GetJournalMetaQuery) => {
      const meta = data.Journal?.meta;
      if (!meta) {
        throw new Error('JournalMeta is null or undefined');
      }
      return meta;
    },
    tags: [PayloadEntity.JournalMeta],
  },

  [PayloadEntity.CaseStudyMeta]: {
    document: GetCaseStudyBySlugMetaDocument,
    extractData: (data: GetCaseStudyBySlugMetaQuery) => {
      const meta = data.CaseStudies?.docs?.[0]?.meta;
      if (!meta) {
        throw new Error('CaseStudyMeta not found or is null');
      }
      return meta;
    },
    variables: { slug: '' },
    tags: [PayloadEntity.CaseStudyMeta],
  },

  [PayloadEntity.ExperienceMeta]: {
    document: GetExperienceBySlugMetaDocument,
    extractData: (data: GetExperienceBySlugMetaQuery) => {
      const meta = data.Experiences?.docs?.[0]?.meta;
      if (!meta) {
        throw new Error('ExperienceMeta not found or is null');
      }
      return meta;
    },
    variables: { slug: '' },
    tags: [PayloadEntity.ExperienceMeta],
  },

  [PayloadEntity.Journal]: {
    document: GetJournalMetaDocument,
    extractData: (data: GetJournalMetaQuery) => {
      if (!data.Journal) {
        throw new Error('Journal data is null or undefined');
      }
      return data.Journal;
    },
    tags: [PayloadEntity.Journal],
  },
};

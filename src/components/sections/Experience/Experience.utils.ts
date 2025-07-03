import type { PayloadFetchTypeMap, PayloadEntity } from '@/lib/graphql/server/types';

// Extract the exact Experience data type from the PayloadFetchTypeMap
export type ExperienceData = PayloadFetchTypeMap[PayloadEntity.Experience]['result'];

// Extract the case studies data type from the PayloadFetchTypeMap
export type ExperienceCaseStudies =
  PayloadFetchTypeMap[PayloadEntity.CaseStudiesByParams]['result']['caseStudies'];

// The UI component receives the exact data shape from GraphQL
export interface ExperienceUIProps {
  experience: ExperienceData;
  caseStudies: ExperienceCaseStudies;
}

// Wrapper component props
export interface ExperienceWrapperProps {
  slug: string;
}

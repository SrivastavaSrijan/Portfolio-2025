import type { PayloadFetchTypeMap, PayloadEntity } from '@/lib/graphql/server';

type ExperienceData = PayloadFetchTypeMap[PayloadEntity.Experience]['result'];

type ExperienceCaseStudies =
  PayloadFetchTypeMap[PayloadEntity.CaseStudiesByParams]['result']['caseStudies'];

export interface ExperienceUIProps {
  experience: ExperienceData;
  caseStudies: ExperienceCaseStudies;
}

export interface ExperienceWrapperProps {
  slug: string;
}

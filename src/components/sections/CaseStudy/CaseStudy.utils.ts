import type { PayloadFetchTypeMap, PayloadEntity } from '@/lib/graphql/server';

type CaseStudyData = PayloadFetchTypeMap[PayloadEntity.CaseStudy]['result'];
export type CaseStudyUIProps = {
  caseStudy: CaseStudyData;
  relatedCaseStudies: PayloadFetchTypeMap[PayloadEntity.CaseStudiesByParams]['result']['caseStudies'];
};
export interface CaseStudyWrapperProps {
  slug: string;
}

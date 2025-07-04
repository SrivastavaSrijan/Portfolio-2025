import type { PayloadFetchTypeMap, PayloadEntity } from '@/lib/graphql/server';

// Extract the exact CaseStudy data type from the PayloadFetchTypeMap
export type CaseStudyData = PayloadFetchTypeMap[PayloadEntity.CaseStudy]['result'];

// The UI component receives the exact data shape from GraphQL
export type CaseStudyUIProps = CaseStudyData;

// Wrapper component props
export interface CaseStudyWrapperProps {
  slug: string;
}

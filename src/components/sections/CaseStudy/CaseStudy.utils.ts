import type { PayloadFetchTypeMap, PayloadEntity } from '@/lib/graphql/server';

type CaseStudyData = PayloadFetchTypeMap[PayloadEntity.CaseStudy]['result'];
export type CaseStudyUIProps = CaseStudyData;
export interface CaseStudyWrapperProps {
  slug: string;
}

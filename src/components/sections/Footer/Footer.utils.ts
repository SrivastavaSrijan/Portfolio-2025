import type { GetWorkButtonsQuery } from '@/lib/graphql/__generated__/hooks';
import type { PayloadFetchTypeMap, PayloadEntity } from '@/lib/graphql/server';

// Extract the exact Footer data type from the PayloadFetchTypeMap
export type FooterData = PayloadFetchTypeMap[PayloadEntity.Footer]['result'];

// The UI component receives the exact data shape from GraphQL plus WorkButtons
export type FooterUIProps = FooterData & {
  workButtons?: NonNullable<GetWorkButtonsQuery['WorkButton']>['buttons'];
};

// Wrapper component props - currently none needed
export type FooterWrapperProps = Record<string, never>;

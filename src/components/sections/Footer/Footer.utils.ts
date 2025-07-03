import type { GetFooterQuery, GetWorkButtonsQuery } from '@/lib/graphql/__generated__/hooks';

// Extract the exact Footer data type from the GraphQL query
export type FooterData = NonNullable<GetFooterQuery['Footer']>;

// The UI component receives the exact data shape from GraphQL plus WorkButtons
export type FooterUIProps = FooterData & {
  workButtons?: NonNullable<GetWorkButtonsQuery['WorkButton']>['buttons'];
};

// Wrapper component props - currently none needed
export type FooterWrapperProps = Record<string, never>;

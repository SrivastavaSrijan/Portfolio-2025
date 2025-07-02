import type { GetFooterQuery } from '@/lib/graphql/__generated__/hooks';

// Extract the exact Footer data type from the GraphQL query
export type FooterData = NonNullable<GetFooterQuery['Footer']>;

// The UI component receives the exact data shape from GraphQL
export type FooterUIProps = FooterData;

// Wrapper component props - currently none needed
export type FooterWrapperProps = Record<string, never>;

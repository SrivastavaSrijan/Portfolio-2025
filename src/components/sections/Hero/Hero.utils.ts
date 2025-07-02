import type { GetHeroQuery } from '@/lib/graphql/__generated__/hooks';

// Extract the exact Hero data type from the GraphQL query
export type HeroData = NonNullable<GetHeroQuery['Hero']>;

// The UI component receives the exact data shape from GraphQL
export type HeroUIProps = HeroData;

// Wrapper component props - currently none needed
export type HeroWrapperProps = Record<string, never>;

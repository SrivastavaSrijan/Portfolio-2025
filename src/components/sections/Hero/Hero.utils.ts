import type { GetHeroQuery, GetWorkButtonsQuery } from '@/lib/graphql/__generated__/hooks';

// Extract the exact Hero data type from the GraphQL query
export type HeroData = NonNullable<GetHeroQuery['Hero']>;

// The UI component receives the exact data shape from GraphQL plus WorkButtons
export type HeroUIProps = HeroData & {
  workButtons?: NonNullable<GetWorkButtonsQuery['WorkButton']>['buttons'];
};

// Wrapper component props - currently none needed
export type HeroWrapperProps = Record<string, never>;

import type { CodegenConfig } from '@graphql-codegen/cli';
const config: CodegenConfig = {
  schema: 'http://localhost:3002/api/graphql',
  documents: ['src/lib/graphql/**/*.graphql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/lib/graphql/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' },
      },
    },
    './src/lib/graphql/__generated__/hooks.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
        skipTypename: false,
        dedupeFragments: true,
        reactApolloVersion: 3,
        useTypeImports: true,
        onlyOperationTypes: false,
        immutableTypes: true,
      },
    },
  },
};
export default config;

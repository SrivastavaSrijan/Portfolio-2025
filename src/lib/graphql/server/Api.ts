import type { DocumentNode, FetchPolicy, OperationVariables } from '@apollo/client';
import { getClient } from '../../apollo/server';
import { handleError, logError } from './error';
import { PayloadFetchConfig, type PayloadFetchTypeMap } from './types';

const ServerConfig = {
  RevalidationTime: 1800, // Default revalidation time in seconds
};

export interface FetchOptions {
  tags?: string[];
  revalidate?: number;
  variables?: OperationVariables;
  fetchPolicy?: FetchPolicy;
}

interface GetConfigFor<T extends keyof PayloadFetchTypeMap> {
  variables?: PayloadFetchTypeMap[T] extends { variables: infer V } ? Partial<V> : undefined;
  fetchPolicy?: FetchPolicy;
}

/**
 * Generic GraphQL fetcher with built-in error handling, caching, and revalidation
 */
export class Api {
  private static instance: Api;

  private constructor() {}

  static getInstance(): Api {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  /**
   * Generic fetch function that handles all the boilerplate
   */
  async fetch<TData = unknown, TVariables extends OperationVariables = OperationVariables>(
    document: DocumentNode,
    options: FetchOptions = {},
    functionName = 'api.get'
  ): Promise<TData | null> {
    try {
      const { query } = getClient();
      const {
        tags = [],
        revalidate = ServerConfig.RevalidationTime,
        variables,
        fetchPolicy,
      } = options;

      const result = await query<TData, TVariables>({
        query: document,
        variables: variables as TVariables,
        context: {
          fetchOptions: {
            next: {
              revalidate,
              tags,
            },
          },
        },
        ...(fetchPolicy && { fetchPolicy }),
        errorPolicy: 'all', // Return partial data even with errors
      });

      return result.data;
    } catch (error) {
      const serverError = handleError(error, functionName);
      logError(serverError, functionName);
      return null;
    }
  }

  /**
   * Fetch data for a specific component using the SERVER_ACTION_CONFIG
   */
  async get<T extends keyof PayloadFetchTypeMap>(
    component: T,
    { variables: additionalVariables, fetchPolicy }: GetConfigFor<T> = {}
  ): Promise<PayloadFetchTypeMap[T]['result']> {
    const config = PayloadFetchConfig[component];

    // Merge default variables with additional variables
    const variables =
      'variables' in config
        ? {
            ...config.variables,
            ...additionalVariables,
          }
        : additionalVariables;

    const rawData = await this.fetch<PayloadFetchTypeMap[T]['query']>(
      config.document,
      {
        tags: [...config.tags],
        variables,
        ...(fetchPolicy && { fetchPolicy }),
      },
      `api.getComponent(${String(component)})`
    );
    if (!rawData) {
      return null;
    }
    return config.extractData(rawData);
  }
}

// Export singleton instance
export const api = Api.getInstance();

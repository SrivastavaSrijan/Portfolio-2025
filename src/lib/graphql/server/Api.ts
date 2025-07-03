import type { DocumentNode, OperationVariables } from '@apollo/client';
import { revalidateTag } from 'next/cache';
import { getClient } from '../../apollo/server';
import { handleError, logError } from './error';
import { PayloadFetchConfig, type PayloadFetchTypeMap } from './types';
import { PayloadEntity } from '.';

const ServerConfig = {
  RevalidationTime: 1800, // Default revalidation time in seconds
};

export interface FetchOptions {
  tags?: string[];
  revalidate?: number;
  variables?: OperationVariables;
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
  ): Promise<TData> {
    try {
      const { query } = getClient();
      const { tags = [], revalidate = ServerConfig.RevalidationTime, variables } = options;

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
      });

      return result.data;
    } catch (error) {
      const serverError = handleError(error, functionName);
      logError(serverError, functionName);
      return Promise.reject(serverError);
    }
  }

  /**
   * Revalidate specific component tags
   */
  async revalidate(...components: PayloadEntity[]): Promise<void> {
    for (const component of components) {
      revalidateTag(component);
    }
  }

  /**
   * Revalidate everything - the nuclear option for portfolio sites
   */
  async revalidateAll(): Promise<{ success: boolean; revalidatedTags: number; timestamp: string }> {
    const allTags = Object.values(PayloadEntity);

    for (const tag of allTags) {
      revalidateTag(tag);
    }

    return {
      success: true,
      revalidatedTags: allTags.length,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Fetch data for a specific component using the SERVER_ACTION_CONFIG
   */
  async get<T extends keyof PayloadFetchTypeMap>(
    component: T,
    additionalVariables?: Record<string, unknown>
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
      },
      `api.getComponent(${String(component)})`
    );

    return config.extractData(rawData);
  }
}

// Export singleton instance
export const api = Api.getInstance();

/**
 * Server Action Error Types
 */
export enum ServerErrorType {
  GRAPHQL_ERROR = 'GRAPHQL_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  NOT_FOUND = 'NOT_FOUND',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

/**
 * Server Action Error Class
 */
export class FetchError extends Error {
  public readonly type: ServerErrorType;
  public readonly originalError?: Error;

  constructor(
    message: string,
    type: ServerErrorType = ServerErrorType.UNKNOWN_ERROR,
    originalError?: Error
  ) {
    super(message);
    this.name = 'ServerActionError';
    this.type = type;
    this.originalError = originalError;
  }
}

/**
 * Error Handler for Server Actions
 */
export function handleError(error: unknown, context: string): FetchError {
  // If it's already a ServerActionError, return it
  if (error instanceof FetchError) {
    return error;
  }

  // If it's a regular Error
  if (error instanceof Error) {
    // Check if it's an Apollo GraphQL error
    if (error.name === 'ApolloError' || error.message.includes('GraphQL')) {
      return new FetchError(
        `GraphQL error in ${context}: ${error.message}`,
        ServerErrorType.GRAPHQL_ERROR,
        error
      );
    }

    // Check if it's a network error
    if (error.message.includes('fetch') || error.message.includes('network')) {
      return new FetchError(
        `Network error in ${context}: ${error.message}`,
        ServerErrorType.NETWORK_ERROR,
        error
      );
    }

    // Check if it's a not found error
    if (error.message.includes('not found') || error.message.includes('404')) {
      return new FetchError(
        `Not found error in ${context}: ${error.message}`,
        ServerErrorType.NOT_FOUND,
        error
      );
    }

    // Generic error
    return new FetchError(
      `Error in ${context}: ${error.message}`,
      ServerErrorType.UNKNOWN_ERROR,
      error
    );
  }

  // If it's not an Error object, create a generic error
  return new FetchError(
    `Unknown error in ${context}: ${String(error)}`,
    ServerErrorType.UNKNOWN_ERROR
  );
}

/**
 * Logger for Server Action Errors
 */
export function logError(error: FetchError, context: string): void {
  const logLevel = error.type === ServerErrorType.NOT_FOUND ? 'warn' : 'error';

  console[logLevel](`[Server Action Error] ${context}:`, {
    type: error.type,
    message: error.message,
    originalError: error.originalError?.message,
    stack: error.originalError?.stack,
  });
}

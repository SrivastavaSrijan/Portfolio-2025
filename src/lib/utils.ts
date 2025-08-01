import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function isString(value: unknown): value is string {
  return typeof value === 'string' || value instanceof String;
}

export const isElementInViewport = (bottom: number) => {
  const { innerHeight } = window;
  const { top } = document.documentElement.getBoundingClientRect();
  return bottom <= innerHeight + top;
};

export type DeepRequired<T> = { [K in keyof T]: DeepRequired<T[K]> } & Required<T>;
export type DeepNonNullable<T> = {
  [K in keyof T]: DeepNonNullable<T[K]>;
} & NonNullable<T>;
export type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

export const isStringParam = (param: unknown): param is string => {
  return isString(param);
};

export const isStringArrayParam = (param: unknown): param is string[] => {
  return Array.isArray(param) && param.every((item) => isString(item));
};
// Utility type to modify the __typename field to accept any string
export type WithFlexibleTypename<T> = {
  [K in keyof T]: K extends '__typename' ? string : T[K];
};

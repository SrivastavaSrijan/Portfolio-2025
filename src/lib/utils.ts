import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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

export const isStringParam = (param: unknown): param is string => {
  return typeof param === 'string';
};

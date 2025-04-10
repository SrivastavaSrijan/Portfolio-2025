import type { DefaultNodeTypes } from '@payloadcms/richtext-lexical';
import { type JSXConvertersFunction, LinkJSXConverter } from '@payloadcms/richtext-lexical/react';
import { internalDocToHref } from './InternalLink';
import { headingConverter } from './HeadingConverter';
import { listConverter } from './ListConverter';
import { linkConverter } from './LinkConverter';

type NodeTypes = DefaultNodeTypes;

export const jsxConverter: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  ...headingConverter,
  ...listConverter,
  ...linkConverter,
  // Additional converters can be added here
});

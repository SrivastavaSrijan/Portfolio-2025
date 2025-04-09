import type { DefaultNodeTypes } from '@payloadcms/richtext-lexical';
import { type JSXConvertersFunction, LinkJSXConverter } from '@payloadcms/richtext-lexical/react';
import { internalDocToHref } from './InternalLink';
import { headingConverter } from './HeadingConverter';
import { listConverter } from './ListConverter';
import { richTextConverter } from './RichTextConverter';

type NodeTypes = DefaultNodeTypes;

export const jsxConverter: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  ...headingConverter,
  ...listConverter,
  ...richTextConverter,
  // Additional converters can be added here
});

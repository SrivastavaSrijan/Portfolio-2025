import type { DefaultNodeTypes } from '@payloadcms/richtext-lexical';
import { type JSXConvertersFunction, LinkJSXConverter } from '@payloadcms/richtext-lexical/react';
import { internalDocToHref } from './InternalLink';
import { headingConverter } from './HeadingConverter';

type NodeTypes = DefaultNodeTypes;

export const jsxConverter: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  ...headingConverter,
  // Add custom styling for lists
  // Additional block converters
  blocks: {
    ...defaultConverters.blocks,
    // You can add custom block converters here
  },
});

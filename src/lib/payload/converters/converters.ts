import type { DefaultNodeTypes } from '@payloadcms/richtext-lexical';
import { type JSXConvertersFunction, LinkJSXConverter } from '@payloadcms/richtext-lexical/react';
import { internalDocToHref } from './internalDocToHref';
import { HeadingConverter } from './HeadingConverter';
import { ListConverter } from './ListConverter';
import { LinkConverter } from './LinkConverter';
import { ParagraphConverter } from './ParagraphConverter';

type NodeTypes = DefaultNodeTypes;

export const JSXConverter: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  ...ParagraphConverter,
  ...HeadingConverter,
  ...ListConverter,
  ...LinkConverter,
  // Additional converters can be added here
});

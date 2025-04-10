import type { SerializedLinkNode } from '@payloadcms/richtext-lexical';

export const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }): string => {
  // Handle case when doc field is missing
  if (!linkNode.fields.doc) {
    return linkNode.fields.url || '#';
  }

  const { value, relationTo } = linkNode.fields.doc;

  // Handle both string IDs and object references
  const slug = typeof value === 'string' ? value : value || '';

  // Map relationTo to URL paths
  const relationMap: Record<string, string> = {
    posts: '/posts',
    projects: '/projects',
    users: '/users',
    pages: '',
  };

  const basePath = relationMap[relationTo] || '';
  return `${basePath}/${slug}`;
};

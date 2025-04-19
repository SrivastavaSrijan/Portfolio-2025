import type { JSXConverters } from '@payloadcms/richtext-lexical/react';
import type { SerializedListItemNode, SerializedListNode } from '@payloadcms/richtext-lexical';

export const ListConverter: JSXConverters<SerializedListNode | SerializedListItemNode> = {
  list: ({ node, nodesToJSX }) => {
    const ListTag = node.listType === 'number' ? 'ol' : 'ul';
    let className = '';
    switch (node.listType) {
      case 'number':
        className =
          'list-decimal mt-2 mb-6 pl-4 space-y-1 marker:text-brand dark:marker:text-accent';
        break;
      case 'check':
        className = 'mb-6 pl-3 space-y-3';
        break;
      default:
        className =
          'list-disc mb-6 mt-2 pl-4 md:space-y-1 space-y-0.5 marker:text-brand dark:marker:text-accent';
        break;
    }

    return <ListTag className={className}>{nodesToJSX({ nodes: node.children })}</ListTag>;
  },
  listitem: ({ node, nodesToJSX }) => {
    // Instead of using parent, we'll check the checkable property
    const isCheckList = node.checked !== undefined;

    if (isCheckList) {
      return (
        <li className="flex items-start">
          <span
            className={`mr-2 flex h-6 shrink-0 items-center justify-center rounded-md border ${node.checked ? 'border-primary bg-primary' : 'border-gray-300 dark:border-gray-600'}`}
          >
            {node.checked && <span className="text-white">✓</span>}
          </span>
          <span className="">{nodesToJSX({ nodes: node.children })}</span>
        </li>
      );
    }

    return <li className="pl-0.5 md:pl-1">{nodesToJSX({ nodes: node.children })}</li>;
  },
};

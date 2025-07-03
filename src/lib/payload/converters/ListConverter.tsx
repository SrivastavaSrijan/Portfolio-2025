import type { JSXConverters } from '@payloadcms/richtext-lexical/react';
import type { SerializedListItemNode, SerializedListNode } from '@payloadcms/richtext-lexical';
import type { OlHTMLAttributes } from 'react';

export const ListConverter: JSXConverters<SerializedListNode | SerializedListItemNode> = {
  list: ({ node, nodesToJSX, parent }) => {
    const ListTag = node.listType === 'number' ? 'ol' : 'ul';

    // Calculate nesting level by counting parent lists
    let nestingLevel = 0;
    let currentParent = parent;
    while (currentParent) {
      if ('type' in currentParent && currentParent.type === 'list') {
        nestingLevel++;
      }
      if (currentParent.parent) {
        currentParent = currentParent.parent;
      } else {
        break;
      }
    }

    // Define marker styles for each level
    const orderedStyles: { type: OlHTMLAttributes<string>['type']; style: string }[] = [
      { type: '1', style: 'list-decimal' }, // Level 1: 1, 2, 3...
      { type: 'a', style: 'list-[lower-alpha]' }, // Level 2: a, b, c...
      { type: 'i', style: 'list-[lower-roman]' }, // Level 3: i, ii, iii...
    ];

    const unorderedStyles = [
      'list-disc', // Level 1: filled circles
      'list-[circle]', // Level 2: hollow circles
      'list-[square]', // Level 3: squares
    ];

    // Use modulo to cycle through styles for deeper nesting
    let markerStyle = '';
    let listType: OlHTMLAttributes<string>['type'];

    if (node.listType === 'number') {
      const styleIndex = nestingLevel % orderedStyles.length;
      listType = orderedStyles[styleIndex].type;
      markerStyle = orderedStyles[styleIndex].style;
    } else {
      markerStyle = unorderedStyles[nestingLevel % unorderedStyles.length];
    }

    // Adjust spacing based on nesting
    const isNested = nestingLevel > 0;
    const className = isNested
      ? `${markerStyle} px-4 lg:px-8 mt-1 mb-1 space-y-0.5 marker:text-brand dark:marker:text-accent`
      : `${markerStyle} px-4 lg:px-8 mt-2 mb-6 space-y-1 marker:text-brand dark:marker:text-accent`;

    return (
      <ListTag type={listType} className={className}>
        {nodesToJSX({ nodes: node.children })}
      </ListTag>
    );
  },

  listitem: ({ node, nodesToJSX }) => {
    const isCheckList = node.checked !== undefined;

    // Check if this list item contains a nested list
    const hasNestedList = node.children.some((child) => 'type' in child && child.type === 'list');

    // For list items that contain a nested list, remove the marker
    const markerClass = hasNestedList ? 'list-none' : '';

    if (isCheckList) {
      return (
        <li className="flex items-start">
          <span
            className={`mr-2 flex h-6 shrink-0 items-center justify-center rounded-md border ${node.checked ? 'border-primary bg-primary' : 'border-gray-300 dark:border-gray-600'}`}
          >
            {node.checked && <span className="text-white">✓</span>}
          </span>
          <span className="w-full">{nodesToJSX({ nodes: node.children })}</span>
        </li>
      );
    }

    return (
      <li className={`pl-0.5 lg:pl-1 ${markerClass}`}>{nodesToJSX({ nodes: node.children })}</li>
    );
  },
};

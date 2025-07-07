import Link from 'next/link';
import { Button } from '../ui';
import { cn } from '@/lib/utils';
import { Routes } from '@/lib/config/routes';
import { kebabCase } from 'lodash';
import type { TagData } from '@/lib/graphql/server/types';

interface CaseStudyFilterProps {
  paginatedTags: string[][];
  selectedTag?: TagData | null;
}
export const CaseStudyFilter = ({ paginatedTags, selectedTag }: CaseStudyFilterProps) => {
  // Check if the tag is selected based on the current route
  const isSelected = (tag: string) =>
    selectedTag ? kebabCase(tag) === kebabCase(selectedTag?.name) : false;
  return (
    <div className="flex flex-1/3 flex-col gap-2">
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-base">Categories</p>
        <hr className="border-brand" />
      </div>
      {paginatedTags.map((tags, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: page number
        <div className="flex flex-col gap-1" key={index}>
          <div className="grid grid-cols-3 gap-2">
            {tags.map((tag, index) => (
              <Link
                href={
                  isSelected(tag) ? Routes.CaseStudies : Routes.CaseStudiesByTag(kebabCase(tag))
                }
                key={tag}
                passHref
                className="contents"
              >
                <Button
                  variant="text"
                  color="brand"
                  size="sm"
                  // biome-ignore lint/suspicious/noArrayIndexKey:tag index
                  key={index}
                  className={cn(
                    {
                      'justify-start': index === 0,
                      'justify-center': index === 1,
                      'justify-end': index === 2,
                    },
                    'line-clamp-1 block overflow-hidden truncate text-ellipsis whitespace-nowrap text-wrap px-0 text-left font-normal',
                    'underline decoration-2 decoration-transparent hover:decoration-brand',
                    isSelected(tag) ? 'underline decoration-brand' : ''
                  )}
                >
                  {tag}
                </Button>
              </Link>
            ))}
          </div>
          <hr className="border-brand" />
        </div>
      ))}
    </div>
  );
};

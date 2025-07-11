import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Routes } from '@/lib/config/routes';
import { kebabCase } from 'lodash';
import type { PayloadEntity, PayloadFetchTypeMap } from '@/lib/graphql/server';
import { Button } from '@/components/ui';

interface CaseStudyFilterProps {
  tags: string[];
  selectedTag?: PayloadFetchTypeMap[PayloadEntity.AllTags]['result'][number] | null;
}

export const CaseStudyFilter = ({ tags, selectedTag }: CaseStudyFilterProps) => {
  // Check if the tag is selected based on the current route
  const isSelected = (tag: string) =>
    selectedTag ? kebabCase(tag) === kebabCase(selectedTag?.name) : false;
  return (
    <div className="-mb-2 scrollbar flex snap-x snap-mandatory flex-row gap-2 overflow-x-auto scroll-smooth pb-2 md:snap-none">
      {tags.map((tag, index) => (
        <Link
          href={isSelected(tag) ? Routes.CaseStudies : Routes.CaseStudiesByTag(kebabCase(tag))}
          key={tag}
          passHref
          className="contents"
        >
          <Button
            variant={isSelected(tag) ? 'contained' : 'outlined'}
            color="brand"
            size="sm"
            // biome-ignore lint/suspicious/noArrayIndexKey:tag index
            key={index}
            className={cn('line-clamp-1 flex-shrink-0 snap-start', {
              'justify-start': index === 0,
              'justify-center': index === 1,
              'justify-end': index === 2,
            })}
          >
            {tag}
          </Button>
        </Link>
      ))}
    </div>
  );
};

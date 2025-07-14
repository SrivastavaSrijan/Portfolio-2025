import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Routes } from '@/lib/config/routes';
import { Button } from '@/components/ui';
import type { AllTagsData, TagData } from '../Journal.utils';

interface CaseStudyFilterProps {
  tags: AllTagsData;
  selectedTag?: TagData;
}

export const CaseStudyFilter = ({ tags, selectedTag }: CaseStudyFilterProps) => {
  // Check if the tag is selected based on the current route
  const isSelected = (slug: string) => (selectedTag ? selectedTag?.slug === slug : false);
  return (
    <div className="-mb-2 scrollbar flex snap-x snap-mandatory flex-row gap-2 overflow-x-auto scroll-smooth pb-2 md:snap-none">
      {tags.map(({ name, slug }, index) => (
        <Link
          href={isSelected(slug) ? Routes.CaseStudies : Routes.CaseStudiesByTag(slug)}
          key={slug}
          passHref
          className="contents"
        >
          <Button
            variant={isSelected(slug) ? 'contained' : 'outlined'}
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
            {name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

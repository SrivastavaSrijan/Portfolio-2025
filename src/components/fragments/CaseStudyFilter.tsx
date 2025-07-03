import Link from 'next/link';
import { Button } from '../ui';
import { cn } from '@/lib/utils';
import { Routes } from '@/lib/config/routes';

interface CaseStudyFilterProps {
  tags: string[][];
  selectedTag: string | null;
}
export const CaseStudyFilter = ({ tags: tagsPage, selectedTag }: CaseStudyFilterProps) => {
  return (
    <div className="flex flex-1/3 flex-col gap-2">
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-base">Categories</p>
        <hr className="border-brand" />
      </div>
      {tagsPage.map((tags, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: page number
        <div className="flex flex-col gap-1" key={index}>
          <div className="grid grid-cols-3 gap-2">
            {tags.map((tag, index) => (
              <Link
                href={selectedTag !== tag ? Routes.CaseStudiesByTag(tag) : Routes.CaseStudies}
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
                    selectedTag === tag ? 'underline decoration-brand' : ''
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

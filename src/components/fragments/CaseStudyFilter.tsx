import { Button } from '../ui';
import { cn } from '@/lib/utils';

interface CaseStudyFilterProps {
  tags: string[][];
  onClick: (tag: string) => void;
  selectedTag: string | null;
}
export const CaseStudyFilter = ({ tags: tagsPage, onClick, selectedTag }: CaseStudyFilterProps) => {
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
                  'block overflow-hidden text-ellipsis whitespace-nowrap px-0 text-left font-normal',
                  'underline decoration-2 decoration-transparent hover:decoration-brand',
                  selectedTag === tag ? 'underline decoration-brand' : ''
                )}
                onClick={() => onClick(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
          <hr className="border-brand" />
        </div>
      ))}
    </div>
  );
};

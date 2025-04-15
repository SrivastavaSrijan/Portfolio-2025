'use client';

import { useGetAllTagsSuspenseQuery } from '@/lib/graphql/__generated__/hooks';
import { Button } from '../ui';
import { useRouter } from 'next/navigation';
import { Routes } from '@/lib/config/config/routes';

export const CaseStudyFilter = () => {
  const router = useRouter();
  const { data } = useGetAllTagsSuspenseQuery();
  const { docs = [] } = data?.CaseStudies ?? {};
  const tags = docs.flatMap((doc) => doc.tags?.map((t) => t?.tag)).filter(Boolean) as string[];
  const paginatedByThree = Array.from(new Set(tags)).reduce((acc, tag, index) => {
    const pageIndex = Math.floor(index / 3);
    if (!acc[pageIndex]) {
      acc[pageIndex] = [];
    }
    acc[pageIndex].push(tag);
    return acc;
  }, [] as string[][]);

  const handleClick = (selectedTag: string) => {
    router.push(`${Routes.CaseStudies}?tag=${selectedTag}`);
  };

  return (
    <div className="flex flex-1/3 flex-col gap-2">
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-base">Categories</p>
        <hr className="border-white" />
      </div>
      {paginatedByThree.map((tags, index) => (
        <div className="flex flex-col gap-1" key={index}>
          <div className="grid grid-cols-3 gap-2">
            {tags.map((tag) => (
              <Button
                variant="text"
                color="brand"
                key={tag}
                className="justify-start px-0 text-base"
                onClick={() => handleClick(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
          <hr className="border-white" />
        </div>
      ))}
    </div>
  );
};

'use client';
import { useGetCaseStudyBySlugSuspenseQuery } from '@/lib/graphql/__generated__/hooks';
import Image from 'next/image';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { NotFound } from './404';
import { Undo2, Clock } from 'lucide-react';
import { RichText } from './RichText';
import Link from 'next/link';
import { Routes } from '@/lib/config/config/routes';
import { Button } from '../ui';
dayjs.extend(relativeTime);

interface CaseStudyProps {
  slug: string;
}
export const CaseStudy = ({ slug }: CaseStudyProps) => {
  const { data } = useGetCaseStudyBySlugSuspenseQuery({ variables: { slug } });
  const { docs = [] } = data?.CaseStudies ?? {};
  if (!docs || docs.length === 0) {
    return <NotFound />;
  }
  const { title, content, updatedAt, illustration } = docs[0];

  return (
    <div className="flex flex-col">
      <div className="bg-accent px-4 py-4 md:px-20 md:pb-20">
        <div className="flex flex-col gap-5 md:gap-5">
          <div className="flex flex-row items-center gap-2">
            <Undo2 className="h-3 w-3 rotate-180 scale-x-[-1]" />
            <Link href={Routes.CaseStudies}>
              <Button
                type="button"
                variant="link"
                color="brand"
                size="sm"
                className="cursor-pointertext-xs"
              >
                Back to blog
              </Button>
            </Link>
          </div>
          <h1 className="font-semibold text-4xl text-white md:text-display-4">{title}</h1>
          <div className="flex flex-row items-center gap-2 text-black-400">
            <Clock className=" h-4 w-4" />{' '}
            <p className="text-black-400 text-xs md:text-base">{dayjs(updatedAt).fromNow()}</p>
          </div>
        </div>
      </div>
      {illustration?.url && (
        <Image
          priority
          quality={100}
          width={1440}
          height={576}
          src={illustration?.url}
          alt="Illustration"
          className="h-40 w-full object-cover md:h-144"
        />
      )}
      <div className="bg-white">
        <div className="mx-auto flex flex-col gap-5 px-4 py-10 text-accent text-sm md:max-w-205 md:px-4 md:py-20 md:text-base [&_p]:px-2 md:[&_p]:px-4 ">
          <RichText data={content} />
        </div>
      </div>
    </div>
  );
};

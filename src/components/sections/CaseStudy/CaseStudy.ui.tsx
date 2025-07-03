import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Undo2, Clock } from 'lucide-react';
import { RichText } from '../../fragments/RichText';
import Link from 'next/link';
import { Routes } from '@/lib/config/routes';
import { Button } from '../../ui';
import { ImageWithShimmer } from '../../ui/ImageWithShimmer';
import type { CaseStudyUIProps } from './CaseStudy.utils';

dayjs.extend(relativeTime);

/**
 * CaseStudy UI Component - Pure UI component that receives typed GraphQL data
 * This component handles all the visual rendering and animations
 */
export function CaseStudyUI({ title, content, updatedAt, illustration }: CaseStudyUIProps) {
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
        <ImageWithShimmer
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
        <div className="mx-auto flex flex-col gap-5 px-4 py-10 text-accent text-sm md:max-w-205 md:px-4 md:py-20 md:text-base md:[&_p]:px-2 ">
          <RichText data={content} />
        </div>
      </div>
    </div>
  );
}

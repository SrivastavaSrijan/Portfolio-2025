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
      <div className="bg-accent px-4 py-4 lg:px-20 lg:pb-20">
        <div className="flex flex-col gap-5 lg:gap-5">
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
          <h1 className="font-semibold text-4xl text-white lg:text-display-4">{title}</h1>
          <div className="flex flex-row items-center gap-2 text-black-400">
            <Clock className=" h-4 w-4" />{' '}
            <p className="text-black-400 text-xs lg:text-base">{dayjs(updatedAt).fromNow()}</p>
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
          className="h-40 w-full object-cover lg:h-144"
          variant="brand"
        />
      )}
      <div className="bg-white">
        <div className="mx-auto flex flex-col gap-5 px-4 py-10 text-accent text-sm lg:max-w-205 lg:px-4 lg:py-20 lg:text-base lg:[&_p]:px-2 ">
          <RichText data={content} />
        </div>
      </div>
    </div>
  );
}

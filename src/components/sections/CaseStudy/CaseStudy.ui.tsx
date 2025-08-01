import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Undo2, Clock, ArrowUpRight } from 'lucide-react';
import { RichText } from '@/components/shared/RichText';
import Link from 'next/link';
import { Routes } from '@/lib/config/routes';
import { Button, Picture } from '@/components/ui';
import type { CaseStudyUIProps } from './CaseStudy.utils';
import { RelatedCaseStudies } from './components/RelatedCaseStudies';
import { cn } from '@/lib/utils';

dayjs.extend(relativeTime);

/**
 * CaseStudy UI Component - Pure UI component that receives typed GraphQL data
 * This component handles all the visual rendering and animations
 */
export function CaseStudyUI({ caseStudy, relatedCaseStudies }: CaseStudyUIProps) {
  const { title, content, updatedAt, illustration, links = [], tags = [] } = caseStudy;
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
          {!!links?.length && (
            <div className="flex w-full flex-col gap-4 px-2 py-2 text-brand lg:px-5 lg:py-4">
              {[
                ...links.map(({ label, url }) => ({
                  label,
                  value: (
                    <Link
                      target="_blank"
                      key={`${url}_${label}`}
                      href={url ?? '#'}
                      className="flex items-center gap-2 text-brand underline-offset-4 hover:underline"
                    >
                      Check it out
                      <ArrowUpRight className="h-4 w-4 text-brand" />
                    </Link>
                  ),
                })),
                ...(tags?.length > 0
                  ? [
                      {
                        label: 'Technologies',
                        value: (
                          <div className="flex flex-row flex-wrap justify-end gap-2">
                            {(tags ?? []).map(({ name: tagName, id: tagId }) => (
                              <span
                                key={tagId}
                                className={cn(
                                  'line-clamp-1 rounded-full border-1 border-brand px-2 py-1 text-brand text-xs'
                                )}
                              >
                                {tagName}
                              </span>
                            ))}
                          </div>
                        ),
                      },
                    ]
                  : []),
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-row justify-between border-brand border-b-1 pb-2 "
                >
                  <span className="font-semibold">{label}</span>
                  {value}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {illustration && (
        <Picture
          media={illustration}
          imageSize="hero"
          alt="Illustration"
          priority
          animateOnView={false}
          className="h-40 w-full object-cover lg:h-144"
        />
      )}
      <div className="bg-white">
        <div className="mx-auto flex flex-col gap-5 px-4 py-10 text-accent text-sm lg:max-w-205 lg:px-4 lg:py-20 lg:text-base lg:[&_p]:px-2 ">
          <RichText data={content} />
        </div>
      </div>
      {relatedCaseStudies && relatedCaseStudies.length > 0 && (
        <RelatedCaseStudies relatedCaseStudies={relatedCaseStudies} />
      )}
    </div>
  );
}

import { CaseStudyCard } from '@/components/shared';
import type { CaseStudyUIProps } from '../CaseStudy.utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';

export const RelatedCaseStudies = ({
  relatedCaseStudies,
}: Pick<CaseStudyUIProps, 'relatedCaseStudies'>) => {
  return (
    <div className="flex w-full flex-1 flex-col gap-12 overflow-hidden bg-white px-4 py-4 lg:gap-20 lg:px-20 lg:py-20">
      <Carousel className="w-full">
        <CarouselContent>
          {relatedCaseStudies.map((caseStudy, index) => (
            <CarouselItem className="basis-full lg:basis-1/2" key={caseStudy.slug}>
              <CaseStudyCard index={index} {...caseStudy} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="contained" color="brand" />
        <CarouselNext variant="contained" color="brand" />
      </Carousel>
    </div>
  );
};

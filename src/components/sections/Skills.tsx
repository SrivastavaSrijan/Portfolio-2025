'use client';
import { useGetSkillsSuspenseQuery } from '@/lib/graphql/__generated__/hooks';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui';
import { RichText } from '../fragments/RichText';

export const Skills = () => {
  const { data } = useGetSkillsSuspenseQuery();
  const { skills = [], title, subtitle } = data?.Skill ?? {};

  return (
    <div className="bg-primary">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-5 md:gap-8 md:px-96 md:py-20">
        <div className="flex flex-col items-start gap-1 md:mx-auto md:gap-2 ">
          <h3 className="text-accent text-xs md:text-lg">{subtitle}</h3>
          <h2 className="w-full font-medium text-4xl text-accent md:text-center md:text-display-6">
            {title}
          </h2>
        </div>
        <Accordion
          type="multiple"
          className="flex w-full flex-col gap-2 text-accent *:border-accent md:gap-2"
        >
          {skills.map(({ name, description }, index) => (
            <AccordionItem value={name || index?.toString()} key={name || index}>
              <AccordionTrigger className="[&>svg]:text-accent [&>svg]:hover:text-accent">
                <div className="flex flex-col gap-1 font-medium text-sm md:gap-2 md:text-2xl">
                  <h4>{name}</h4>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="-mx-1 md:-mx-1.5 text-xs md:text-base">
                  <RichText data={description} />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

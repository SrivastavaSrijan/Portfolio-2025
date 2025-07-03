import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui';
import { RichText } from '../../fragments/RichText';
import type { SkillsUIProps } from './Skills.utils';

export function SkillsUI({ title, subtitle, skills }: SkillsUIProps) {
  return (
    <div className="bg-primary">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-5 lg:gap-8 lg:px-96 lg:py-20">
        <div className="flex flex-col items-start gap-1 lg:mx-auto lg:gap-2 ">
          <h3 className="text-accent text-xs lg:text-lg">{subtitle}</h3>
          <h2 className="w-full font-medium text-4xl text-accent lg:text-center lg:text-display-6">
            {title}
          </h2>
        </div>
        <Accordion
          type="multiple"
          className="flex w-full flex-col gap-2 text-accent *:border-accent lg:gap-2"
        >
          {skills.map(({ name, description }, index) => (
            <AccordionItem value={name || index?.toString()} key={name || index}>
              <AccordionTrigger className="[&>svg]:text-accent [&>svg]:hover:text-accent">
                <div className="flex flex-col gap-1 font-medium text-sm lg:gap-2 lg:text-2xl">
                  <h4>{name}</h4>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-xs lg:text-base">
                  {description && <RichText data={description} />}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

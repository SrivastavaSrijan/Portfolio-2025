import { ProfileToggle, WorkButtons } from '../../fragments';
import { Button } from '../../ui';
import { ContactForm } from '../../fragments/ContactForm';
import type { FooterUIProps } from './Footer.utils';

export function FooterUI({
  bottomText,
  buttonText,
  description,
  title1,
  title2,
  workButtons,
}: FooterUIProps) {
  return (
    <footer>
      <div className="bg-accent">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 bg-accent px-5 py-18 lg:gap-10 lg:px-60 lg:py-20">
          <h2 className="flex w-fit flex-col items-center gap-3 text-center font-medium text-6xl text-white lg:flex-row lg:gap-10 lg:text-display-1">
            {title1}
            <ProfileToggle initialAnimComplete /> {title2}
          </h2>
          <p className="tex-medium text-center text-lg lg:text-2xl">{description} </p>

          <ContactForm>
            <Button variant="contained" size="lg" color="brand">
              {buttonText}
            </Button>
          </ContactForm>
        </div>
      </div>
      <div className="bg-primary">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-10 lg:gap-10 lg:px-20 lg:py-28">
          <p className="font-semibold text-3xl text-accent lg:text-display-4">{bottomText}</p>
          <WorkButtons buttons={workButtons} invert />
        </div>
      </div>
    </footer>
  );
}

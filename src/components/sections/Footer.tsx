'use client';
import { useGetFooterSuspenseQuery } from '@/lib/graphql/__generated__/hooks';
import { ProfileToggle, WorkButtons } from '../fragments';
import { Button } from '../ui';
import { ContactForm } from '../fragments/ContactForm';

export const Footer = () => {
  const { data } = useGetFooterSuspenseQuery();
  const { bottomText, buttonText, description, title1, title2 } = data?.Footer ?? {};

  return (
    <footer>
      <div className="bg-accent">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 bg-accent px-5 py-18 md:gap-10 md:px-60 md:py-20">
          <h2 className="flex w-fit flex-col items-center gap-3 text-center font-medium text-6xl text-white md:flex-row md:gap-10 md:text-display-1">
            {title1}
            <ProfileToggle initialAnimComplete /> {title2}
          </h2>
          <p className="tex-medium text-center text-lg md:text-2xl">{description} </p>

          <ContactForm>
            <Button variant="contained" size="lg" color="brand">
              {buttonText}
            </Button>
          </ContactForm>
        </div>
      </div>
      <div className="bg-primary">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-10 md:gap-10 md:px-20 md:py-28">
          <p className="font-semibold text-3xl text-accent md:text-display-4">{bottomText}</p>
          <WorkButtons invert />
        </div>
      </div>
    </footer>
  );
};

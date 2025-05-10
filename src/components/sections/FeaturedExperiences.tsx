'use client';
import { useGetFeaturedExperiencesSuspenseQuery } from '@/lib/graphql/__generated__/hooks';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FeaturedExperience } from '../fragments';

export const FeaturedExperiences = () => {
  const { data } = useGetFeaturedExperiencesSuspenseQuery();
  const { experiences, subtitle, title, description } = data?.FeaturedExperience ?? {};

  const [selectedExperienceId, setSelectedExperienceId] = useState<number | null>(null);

  const selectedExperience = (experiences ?? []).find(
    (experience) => experience.id === selectedExperienceId
  );

  return (
    <div className="bg-white p-4 md:p-20">
      <div className="flex flex-col gap-5 rounded-r-2xl rounded-l-2xl border-1 border-black-500 bg-blue-black-50 px-6 py-12 md:flex-row md:gap-15 md:px-16 md:py-16">
        <div className="flex flex-1/3 flex-col gap-1 border-black-500 border-b-1 pr-5 pb-2 md:border-r-1 md:border-b-0 md:pr-10">
          <h3 className="text-left text-accent text-lg">{title}</h3>
          <h2 className="text-left font-semibold text-2xl text-accent md:text-4xl">{subtitle}</h2>
          <p className="mt-2 text-center text-sm text-white md:mt-3 md:text-base">{description}</p>
        </div>

        <div className="flex flex-2/3 flex-row gap-4 md:gap-6">
          <div className="flex flex-col gap-5 md:gap-10">
            {experiences?.map((experience) => {
              const { id, title: experienceTitle, thumbnailImage } = experience;
              return (
                <div key={id} className="flex flex-col gap-2">
                  <motion.div
                    className="cursor-pointer grayscale-100"
                    whileHover={{
                      scale: 1.05,
                      opacity: 1,
                      filter: 'grayscale(0)',
                      transition: { type: 'spring', damping: 10, stiffness: 100 },
                    }}
                    onClick={() => setSelectedExperienceId(id)}
                  >
                    <div className="relative flex h-[64px] w-[256px] items-start overflow-hidden rounded-md">
                      <Image
                        alt={experienceTitle}
                        fill
                        className="object-contain"
                        src={thumbnailImage?.url ?? ''}
                      />
                    </div>
                  </motion.div>
                  <AnimatePresence mode="wait">
                    <FeaturedExperience experience={experience} />
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

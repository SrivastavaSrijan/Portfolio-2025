export const Routes = {
  CaseStudies: '/journal',
  CaseStudiesBySlug: (slug: string) => `${Routes.CaseStudies}/${slug}`,
  Experiences: '/experience',
  CaseStudiesByTag: (tag: string) => `${Routes.CaseStudies}/tag/${tag}`,
  ExperiencesBySlug: (slug: string) => `${Routes.Experiences}/${slug}`,
};

export const FullURLs = {
  root: 'https://www.srijansrivastava.com',
  get CaseStudies() {
    return `${this.root}${Routes.CaseStudies}`;
  },
  get Experience() {
    return `${this.root}${Routes.Experiences}`;
  },
};

export const Routes = {
  CaseStudies: '/journal',
  Experiences: '/experience',
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

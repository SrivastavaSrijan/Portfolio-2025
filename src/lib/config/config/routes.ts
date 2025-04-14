export const Routes = {
  CaseStudies: '/case-study',
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

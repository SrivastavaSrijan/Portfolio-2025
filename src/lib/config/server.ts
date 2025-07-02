export const ServerConfig = {
  RevalidationTime: 3600, // 1 hour
};

/**
 * Component identifiers - matches Payload slugs
 */
export enum ServerActionComponents {
  Hero = 'hero',
  Skills = 'skills',
  FeaturedCaseStudies = 'featured-case-studies',
  FeaturedExperiences = 'featured-experiences',
  Footer = 'footer',
  WorkButtons = 'work-buttons',
  Journal = 'journal',
}

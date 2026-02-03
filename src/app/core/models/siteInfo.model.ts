interface SocialLinks {
  twitter?: string;
  github?: string;
  linkedin?: string;
  youtube?: string;
}

export default interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  social: SocialLinks;
}

import { Injectable } from '@angular/core';
import SiteInfo from '../models/siteInfo.model';

@Injectable({
  providedIn: 'root',
})
export class SiteService {
  siteInfomation!: SiteInfo;

  constructor() {
    this.seedSiteInfo();
  }
  seedSiteInfo() {
    this.siteInfomation = {
      name: 'عدسة',
      tagline: 'عالم التصوير الفوتوغرافي',
      description:
        'مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.',
      email: 'hello@adasah.com',
      social: {
        twitter: 'https://twitter.com/adasah',
        github: 'https://github.com/adasah',
        linkedin: 'https://linkedin.com/company/adasah',
        youtube: 'https://youtube.com/@adasah',
      },
    };
  }
}

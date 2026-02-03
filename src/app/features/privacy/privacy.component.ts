import { Component, inject } from '@angular/core';
import { PrivacyPolicy } from '../../shared/components/privacy-policy/privacy-policy.component';
import { RouterModule } from '@angular/router';
import { SiteService } from '../../core/services/site.service';

@Component({
  selector: 'app-privacy',
  imports: [PrivacyPolicy, RouterModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css',
})
export class Privacy {
  private siteService: SiteService = inject(SiteService);

  email: string = this.siteService.siteInfomation.email;
}

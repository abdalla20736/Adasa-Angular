import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SiteService } from '../../core/services/site.service';
import { Policy } from '../../shared/components/term-policy/term-policy.component';

@Component({
  selector: 'app-terms',
  imports: [Policy, RouterModule],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css',
})
export class Terms {
  private siteService: SiteService = inject(SiteService);

  email: string = this.siteService.siteInfomation.email;
}

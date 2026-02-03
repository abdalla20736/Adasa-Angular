import { SiteService } from '../../../core/services/site.service';
import { RouterModule } from '@angular/router';
import siteInfo from '../../../core/models/siteInfo.model';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class Footer {
  private siteService: SiteService = inject(SiteService);

  siteInformation: siteInfo = this.siteService.siteInfomation;
}

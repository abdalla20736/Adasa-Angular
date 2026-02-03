import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SiteService } from '../../../core/services/site.service';
import siteInfo from '../../../core/models/siteInfo.model';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class Navbar implements OnInit {
  private siteService = inject(SiteService);

  siteInformation!: siteInfo;
  isNavbarOpen: boolean = false;
  ngOnInit(): void {
    this.siteInformation = this.siteService.siteInfomation;
  }

  onToggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}

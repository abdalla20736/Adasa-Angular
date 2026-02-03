import { PostService } from '../../core/services/post.service';
import { Author } from '../../core/models/author.model';
import { Component, inject } from '@angular/core';
import { GlassCard } from '../../shared/components/glass-card/glass-card.component';
import { Badge } from '../../shared/components/badge/badge.component';
import { RouterLink } from '@angular/router';
import { SiteService } from '../../core/services/site.service';

@Component({
  selector: 'app-about',
  imports: [GlassCard, Badge, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class About {
  private postService = inject(PostService);
  private siteService = inject(SiteService);
  authors: Author[] = this.postService.posts.map((p) => p.author);
  email: string = this.siteService.siteInfomation.email;
}

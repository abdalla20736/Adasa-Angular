import { Component, Input } from '@angular/core';
import { Post } from '../../../core/models/post.model';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-post-card',
  imports: [RouterModule, DatePipe],
  templateUrl: './blog-post-card.component.html',
  styleUrl: './blog-post-card.component.css',
})
export class BlogPostCard {
  @Input() post!: Post;
}

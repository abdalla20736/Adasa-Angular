import { Component, Input } from '@angular/core';
import { Post } from '../../../core/models/post.model';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-post-view',
  imports: [DatePipe, RouterModule],
  templateUrl: './blog-post-view.component.html',
  styleUrl: './blog-post-view.component.css',
})
export class BlogPostView {
  @Input() post!: Post;
}

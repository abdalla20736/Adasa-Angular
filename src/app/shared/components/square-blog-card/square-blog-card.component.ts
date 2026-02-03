import { Component, Input } from '@angular/core';
import { Post } from '../../../core/models/post.model';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-square-blog-card',
  imports: [RouterModule, DatePipe],
  templateUrl: './square-blog-card.component.html',
  styleUrl: './square-blog-card.component.css',
})
export class SquareBlogCard {
  @Input() post!: Post;
}

import { PostService } from '../../../core/services/post.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Post } from '../../../core/models/post.model';
import { DatePipe, SlicePipe } from '@angular/common';
import { ArticleContent } from '../../../shared/components/article-content/article-content.component';

@Component({
  selector: 'app-blog-details',
  imports: [DatePipe, RouterLink, ArticleContent, SlicePipe],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
})
export class BlogDetails {
  private postService = inject(PostService);
  post!: Post;
  posts: Post[] = this.postService.posts.filter((p) => p.category === 'بورتريه');
  constructor(private route: ActivatedRoute) {}

  content!: string;
  sections!: { title: string; paragraph: string }[];

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      this.postService.getPostBySlug(slug).subscribe((post) => {
        this.post = post;
      });
    });
    this.postService.getPostBySlug(slug);

    this.content = this.post.content.split('#')[0].trim();
    this.sections = this.post.content
      .split('\n## ')
      .slice(1)
      .map((section) => {
        const [title, ...body] = section.split('\n\n');
        return {
          title: title.trim(),
          paragraph: body.join(' ').trim(),
        };
      }) as { title: string; paragraph: string }[];
  }
}

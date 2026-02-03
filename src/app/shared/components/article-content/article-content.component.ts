import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-content',
  imports: [],
  templateUrl: './article-content.component.html',
  styleUrl: './article-content.component.css',
})
export class ArticleContent {
  @Input() title!: string;
  @Input() paragraph!: string;
}

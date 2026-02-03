import { CategoryService } from '../../../core/services/category.service';
import { Category } from '../../../core/models/category.model';
import { Component, inject, ViewChild, ElementRef, OnInit } from '@angular/core';

import { Badge } from '../../../shared/components/badge/badge.component';

import { Post } from '../../../core/models/post.model';

import { SlicePipe } from '@angular/common';
import { SquareBlogCard } from '../../../shared/components/square-blog-card/square-blog-card.component';
import { BlogPostView } from '../../../shared/components/blog-post-view/blog-post-view.component';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-blog',
  imports: [Badge, SlicePipe, SquareBlogCard, BlogPostView, FormsModule],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css',
})
export class Blog {
  private categoryService: CategoryService = inject(CategoryService);
  private postService: PostService = inject(PostService);

  @ViewChild('blogSection') blogSection!: ElementRef;

  posts: Post[] = this.postService.posts;
  categories: Category[] = this.categoryService.categories;
  searchText: string = '';
  activeCategory: string = '';
  isFiltered!: boolean;
  isList: boolean = true;
  currentPage: number = 0;
  pageSize: number = 6;
  totalPages: number = Math.ceil(this.posts.length / this.pageSize);

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.activeCategory = params.get('category') ?? '';
      this.filterPosts();
    });
  }
  ngOnInit() {}
  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  previousPage() {
    if (!this.pages || this.pages.length === 0) return;

    if (this.currentPage <= 0) return;

    this.goToPage(this.currentPage - 1);
  }

  nextPage() {
    if (!this.pages || this.pages.length === 0) return;

    const lastPageIndex = this.pages.length - 1;
    if (this.currentPage >= lastPageIndex) return;

    this.goToPage(this.currentPage + 1);
  }
  goToPage(page: number) {
    this.currentPage = page;

    if (this.blogSection) {
      this.blogSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  changeView(isList: boolean) {
    this.isList = isList;
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
    this.filterPosts();
  }

  filterPosts() {
    console.log(this.searchText);
    const searchTerm = this.searchText.toLowerCase();

    this.posts = this.postService.posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm);

      const matchesCategory = this.activeCategory ? post.category === this.activeCategory : true;

      return matchesCategory && matchesSearch;
    });
    this.totalPages = Math.ceil(this.posts.length / this.pageSize);
    this.currentPage = 0;
  }

  clearFilters() {
    this.searchText = '';
    this.activeCategory = '';

    this.posts = this.postService.posts;
    this.isFiltered = false;
  }
}

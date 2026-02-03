import { Routes } from '@angular/router';

export const blogRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./blog-page/blog-page.component').then((m) => m.Blog),
  },
  {
    path: ':slug',
    loadComponent: () => import('./blog-details/blog-details.component').then((m) => m.BlogDetails),
  },
];

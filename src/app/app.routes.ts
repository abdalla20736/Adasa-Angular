import { Routes } from '@angular/router';
import { blogRoutes } from './features/blog/blog.routes';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.Home),
  },
  {
    path: 'blog',
    children: blogRoutes,
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then((m) => m.About),
  },
  {
    path: 'privacy',
    loadComponent: () => import('./features/privacy/privacy.component').then((m) => m.Privacy),
  },
  {
    path: 'terms',
    loadComponent: () => import('./features/terms/terms.component').then((m) => m.Terms),
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found.component').then((m) => m.NotFound),
  },
];

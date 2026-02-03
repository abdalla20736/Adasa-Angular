import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories!: Category[];

  constructor() {
    this.seedCategories();
  }
  seedCategories() {
    this.categories = [
      { name: 'إضاءة', count: 3, color: 'emerald' },
      { name: 'بورتريه', count: 3, color: 'purple' },
      { name: 'مناظر طبيعية', count: 2, color: 'blue' },
      { name: 'تقنيات', count: 5, color: 'orange' },
      { name: 'معدات', count: 3, color: 'emerald' },
    ];
  }
}

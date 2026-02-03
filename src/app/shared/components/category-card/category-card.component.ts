import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-card',
  imports: [RouterLink, RouterModule],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css',
})
export class CategoryCard {
  @Input() blogsQuantity!: number;
  @Input() title!: string;
  @Input() icon!: string;
  @Input() link!: string;
  @Input() param!: string;
}

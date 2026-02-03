import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-policy',
  imports: [],
  templateUrl: './term-policy.component.html',
  styleUrl: './term-policy.component.css',
})
export class Policy {
  @Input() title!: string;
  @Input() index: number = 0;
  @Input() paragraph!: string;
  @Input() titleHeaderDesc!: string;
  @Input() paragraphsDesc: string[] = [];
  @Input() email!: string;
}

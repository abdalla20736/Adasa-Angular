import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css',
})
export class PrivacyPolicy {
  @Input() title!: string;
  @Input() index: number = 0;
  @Input() paragraph!: string;
  @Input() paragraphsDesc: string[] = [];
  @Input() paragraphsHeaders: string[] = [];
  @Input() email!: string;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grass-card',
  imports: [],
  templateUrl: './glass-card.component.html',
  styleUrl: './glass-card.component.css',
})
export class GlassCard {
  @Input() icon!: string;
  @Input() value!: string;
  @Input() desc!: string;
}

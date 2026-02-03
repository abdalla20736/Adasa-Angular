import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
})
export class Badge {
  @Input() icon!: boolean;
  @Input() text!: string;
  @Input() textColor!: string;
}

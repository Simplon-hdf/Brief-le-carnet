import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-interimaire-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-interimaire-component.html'
})
export class CardInterimaireComponent {
  @Input() data: any;
  isExpanded = false;
  toggleExpanded() { this.isExpanded = !this.isExpanded; }
}

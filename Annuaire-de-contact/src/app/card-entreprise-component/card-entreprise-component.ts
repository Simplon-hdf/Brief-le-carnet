import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-entreprise-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-entreprise-component.html'
})
export class CardEntrepriseComponent {
  @Input() data: any;
  isExpanded = false;
  toggleExpanded() { this.isExpanded = !this.isExpanded; }
}

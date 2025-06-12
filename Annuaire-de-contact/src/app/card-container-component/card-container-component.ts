import { Component, OnInit } from '@angular/core';
import { CardEntrepriseComponent } from '../card-entreprise-component/card-entreprise-component';
import { CardInterimaireComponent } from '../card-interimaire-component/card-interimaire-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [CardEntrepriseComponent, CardInterimaireComponent, CommonModule],
  templateUrl: './card-container-component.html'
})
export class CardContainerComponent implements OnInit {
  donnees: any[] = [];
  filtre: 'tous' | 'entreprise' | 'interimaire' = 'tous';

  ngOnInit() {
    const data = localStorage.getItem('contacts');
    if (data) {
      this.donnees = JSON.parse(data);
    }
  }

  filtrer(type: 'tous' | 'entreprise' | 'interimaire') {
    this.filtre = type;
  }

  getFiltered() {
    if (this.filtre === 'tous') return this.donnees;
    return this.donnees.filter(d => d.type === this.filtre);
  }
}

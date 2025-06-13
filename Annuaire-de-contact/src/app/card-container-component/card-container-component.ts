import { Component, OnInit } from '@angular/core';
import { CardEntrepriseComponent } from '../card-entreprise-component/card-entreprise-component';
import { CardInterimaireComponent } from '../card-interimaire-component/card-interimaire-component';
import { CommonModule } from '@angular/common';
import { SqliteService, User } from '../services/sqlite.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [CardEntrepriseComponent, CardInterimaireComponent, CommonModule, FormsModule],
  templateUrl: './card-container-component.html'
})
export class CardContainerComponent implements OnInit {
  donnees: User[] = [];
  filtre: 'tous' | 'entreprise' | 'interimaire' = 'tous';
  searchTerm = ''; // Declare the searchTerm property here
  loading = true;

  constructor(private sqliteService: SqliteService) {}

  async ngOnInit() {
    this.donnees = await this.sqliteService.getAllContacts();
    this.loading = false;
  }

  filtrer(type: 'tous' | 'entreprise' | 'interimaire') {
    this.filtre = type;
  }

  getFiltered() {
  let filteredData = this.donnees;
  if (this.filtre !== 'tous') {
    filteredData = filteredData.filter(d => d.type === this.filtre);
  }
  if (this.searchTerm) {
    filteredData = filteredData.filter(d => {
      const searchTermLower = this.searchTerm.toLowerCase();
      return Object.values(d).some(value => 
        String(value).toLowerCase().includes(searchTermLower)
      );
    });
  }
  return filteredData;
}
}

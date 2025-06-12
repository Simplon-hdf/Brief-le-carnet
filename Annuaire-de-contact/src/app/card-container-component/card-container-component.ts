import { Component } from '@angular/core';
import { CardEntrepriseComponent } from '../card-entreprise-component/card-entreprise-component';
import { CardInterimaireComponent } from '../card-interimaire-component/card-interimaire-component';


@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [CardEntrepriseComponent, CardInterimaireComponent],
  templateUrl: './card-container-component.html'
})
export class CardContainerComponent {
  donnees = [
    {
      type: 'interimaire',
      nom: 'Alice',
      prenom: 'Dupont',
      photo: null,
      age: 27,
      telephone: '0606060606',
      email: 'alice@email.fr',
      adressePostal: '11 rue de Paris',
      codePostal: '75001',
      metier: 'Serveuse',
      description: 'Expérience en restauration rapide.',
    },
    {
      type: 'entreprise',
      nom: 'EntrepriseX',
      photo: null,
      email: 'contact@entreprisex.fr',
      telephone: '0155555555',
      adressePostal: '9 avenue Victor Hugo',
      codePostal: '75016',
      metier: 'Chef de Projet',
      description: 'Nous recrutons dans la tech.',
      descriptionPoste: 'CDI, équipe dynamique.',
    }
  ];

  filtre: 'tous' | 'entreprise' | 'interimaire' = 'tous';

  filtrer(type: 'tous' | 'entreprise' | 'interimaire') {
    this.filtre = type;
  }

  getFiltered() {
    if (this.filtre === 'tous') return this.donnees;
    return this.donnees.filter(d => d.type === this.filtre);
  }
}

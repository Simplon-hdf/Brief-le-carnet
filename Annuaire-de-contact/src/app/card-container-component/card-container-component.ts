import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-container-component',
  imports: [CommonModule],
  templateUrl: './card-container-component.html',
  styleUrl: './card-container-component.css'
})
export class CardContainerComponent {

  filtre: 'tous' | 'entreprise' | 'interimaire' = 'tous';

    entreprises = [
    {
      nom: 'TechCorp',
      type: 'entreprise',
      photo: 'assets/pexels-olly-774909.jpg',
      email: 'contact@techcorp.com',
      telephone: '0123456789',
      adressePostal: '10 rue de Paris',
      codePostal: '75001',
      metier: 'Recrutement développeur',
      description: 'Entreprise innovante dans la tech, spécialisée dans le développement web.'
    }
  ];
}

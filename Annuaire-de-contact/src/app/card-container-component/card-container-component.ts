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

  interims = [
    {
      nom: 'Durand',
      prenom: 'Lucie',
      type: 'interimaire',
      photo: 'assets/pexels-olly-774909.jpg',
      age: 28,
      email: 'lucie.durand@email.com',
      telephone: '0623456789',
      adressePostal: '45 avenue Jean Jaurès',
      codePostal: '69003',
      metier: 'Assistante administrative',
      description: 'Lucie a 5 ans d’expérience dans l’administration et la gestion de dossiers.'
    }
  ];

    filtrer(type: 'tous' | 'entreprise' | 'interimaire') {
    this.filtre = type;
  }
}

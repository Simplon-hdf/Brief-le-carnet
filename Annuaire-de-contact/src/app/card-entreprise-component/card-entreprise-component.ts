import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-entreprise-component',
  imports: [CommonModule,],
  templateUrl: './card-entreprise-component.html',
  styleUrl: './card-entreprise-component.css'
})
export class CardEntrepriseComponent {
  isExpanded = false;

  donneForm = {
    type: 'Entreprise',
    nom: 'TechCorp',
    photo: 'assets/pexels-olly-774909.jpg',
    email: 'contact@techcorp.com',
    telephone: '0123456789',
    adressePostal: '10 rue de Paris',
    codePostal: '75001',
    metier: 'Recrutement développeur',
    description: 'Entreprise innovante dans la tech, spécialisée dans le développement web.'
  };

  testPng = this.donneForm.photo;

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }
}
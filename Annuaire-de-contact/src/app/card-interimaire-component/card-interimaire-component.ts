import { Component } from '@angular/core';

@Component({
  selector: 'app-card-interimaire-component',
  imports: [],
  templateUrl: './card-interimaire-component.html',
  styleUrl: './card-interimaire-component.css'
})
export class CardInterimaireComponent {

  isExpanded = false;

donneForm = {
  type: 'Intérimaire',
  nom: 'Durand',
  prenom: 'Lucie',
  photo: 'assets/pexels-olly-774909.jpg',
  age: 28,
  email: 'lucie.durand@email.com',
  telephone: '0623456789',
  adressePostal: '45 avenue Jean Jaurès',
  codePostal: '69003',
  metier: 'Assistante administrative',
  description: 'Lucie possède 5 ans d’expérience dans l’administration, la gestion des dossiers et la coordination RH.'
};

  testPng = this.donneForm.photo;

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }
}

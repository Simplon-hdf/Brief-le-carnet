import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserFormComponent } from "../user-form-component/user-form-component";

@Component({
  selector: 'app-card-entreprise-component',
  imports: [CommonModule, UserFormComponent],
  templateUrl: './card-entreprise-component.html',
  styleUrl: './card-entreprise-component.css'
})
export class CardEntrepriseComponent {
//test image
testPng = 'assets/pexels-olly-774909.jpg'; 

  isExpanded = false;
  toggleExpanded = !this.isExpanded;

donneForm = {
  type: 'entreprise',
  nom: 'TechCorp',
  photo: 'assets/pexels-olly-774909.jpg',
  telephone: '0145678910',
  email: 'contact@techcorp.com',
  adressePostal: '10 avenue de la République',
  codePostal: '69000',
  metier: 'Recherche développeurs Angular',
  description: 'Entreprise innovante dans le domaine des technologies cloud.'
};
}
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
  description: 'Lucie possède 5 ans d\'expérience dans l\'administration, la gestion des dossiers et la coordination RH. Elle a travaillé dans divers environnements professionnels, allant de la PME au grand groupe, ce qui lui a permis de développer une grande capacité d\'adaptation. Dotée d\'un excellent relationnel, elle sait gérer les priorités, assurer un suivi rigoureux des procédures internes et maintenir une communication fluide avec les équipes. Elle maîtrise les outils bureautiques, les logiciels de gestion administrative (Sage, Cegid), et elle est également familière avec les plateformes RH (gestion des congés, planning, onboarding). Toujours ponctuelle, impliquée, et proactive, Lucie est aussi force de proposition pour améliorer les processus internes et fluidifier la circulation de l\'information entre les différents services. Elle est à la recherche d\'une mission dans un environnement stimulant où elle pourra continuer à mettre à profit ses compétences et évoluer professionnellement.'
};

  testPng = this.donneForm.photo;

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }
}

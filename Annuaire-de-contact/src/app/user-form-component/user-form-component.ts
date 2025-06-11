import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './user-form-component.html',
  styleUrl: './user-form-component.css'
})
export class UserFormComponent {
  donneForm = {
    type: 'interimaire',
    nom : '',
    prenom : '',
    photo : null as File | null,
    age : null as number | null,
    telephone : '',
    email: '',
    adressePostal : '',
    codePostal : '',
    metier : '',
    description : ''
  };

  photoPrevieuw: string | ArrayBuffer | null = null

  pictures(event:any) {
    const image = event.target.files[0];
    if (image) {
      this.donneForm.photo = image;
    }
  }

  envoie(): void{
    console.log('Formulaire soumis :', this.donneForm);
    alert('Formulaire soumis avec succès !');
  }

  typeFormulaire: 'entreprise' | 'interimaire' = 'interimaire';

}

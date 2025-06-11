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
    nom : '',
    prenom : '',
    photo : null as File | null,
    age : null as number | null,
    telephone : '',
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

  envoie(){
    console.log('Formulaire soumis :', this.donneForm);
  }

  typeContact: 'entreprise' | 'interimaire' = 'interimaire';

}

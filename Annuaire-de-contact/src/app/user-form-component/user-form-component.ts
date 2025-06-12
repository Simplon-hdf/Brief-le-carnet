import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form-component.html',
  styleUrls: ['./user-form-component.css']
})
export class UserFormComponent {
  donneForm = {
    type: 'interimaire',
    nom: '',
    prenom: '',
    photo: null as File | null,
    age: null as number | null,
    telephone: '',
    email: '',
    adressePostal: '',
    codePostal: '',
    metier: '',
    description: '',
  };

  photoPreview: string | ArrayBuffer | null = null;

  onPhotoSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.donneForm.photo = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.photoPreview = e.target?.result ?? null;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (!this.donneForm.nom || !this.donneForm.email) {
      alert("Les champs nom et email sont obligatoires.");
      return;
    }
    console.log('Formulaire soumis :', this.donneForm);
    alert('Formulaire soumis avec succès !');
  }
}

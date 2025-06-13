import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SqliteService, User } from '../services/sqlite.service';

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

  constructor(private sqliteService: SqliteService) {}

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

  async onSubmit() {
    if (!this.donneForm.nom || !this.donneForm.email) {
      alert("Les champs nom et email sont obligatoires.");
      return;
    }

    
    let cheminPhoto = '';
    if (this.donneForm.photo && this.donneForm.nom) {
      const ext = this.donneForm.photo.name.split('.').pop();
      cheminPhoto = `assets/${this.donneForm.nom.toLowerCase().replace(/\s/g, '-')}-${Date.now()}.${ext}`;
      // ⚠️ On ne peut PAS copier le fichier réellement côté navigateur sur assets !
      // Donc tu affiches juste le preview, et on stocke le chemin pour le dev/maquette ou si tu as un upload serveur.
    }

    const user: Omit<User, 'id' | 'createdAt'> = {
      ...this.donneForm,
      photo: cheminPhoto,
      age: this.donneForm.age ? +this.donneForm.age : null,
    } as any;

    try {
      await this.sqliteService.addContact(user);
      alert('Contact enregistré !');
      this.resetForm();
    } catch (err: any) {
      alert(err.message || 'Erreur lors de l\'ajout');
    }
  }

  resetForm() {
    this.donneForm = {
      type: 'interimaire',
      nom: '',
      prenom: '',
      photo: null,
      age: null,
      telephone: '',
      email: '',
      adressePostal: '',
      codePostal: '',
      metier: '',
      description: '',
    };
    this.photoPreview = null;
  }
}

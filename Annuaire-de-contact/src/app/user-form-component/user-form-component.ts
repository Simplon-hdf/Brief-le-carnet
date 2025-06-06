import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form-component',
  imports: [FormsModule,],
  templateUrl: './user-form-component.html',
  styleUrl: './user-form-component.css'
})
export class UserFormComponent {
  donneForm = {
    nom : '',
    prenom : '',
    photo : null,
    age : null,
    telephone : '',
    adresse : '',
    metier : '',
    description : ''
  };

  pictures(event:any) {
    const image = event.target.file[0];
    if (image) {
      this.donneForm.photo = image;
    }
  }
}

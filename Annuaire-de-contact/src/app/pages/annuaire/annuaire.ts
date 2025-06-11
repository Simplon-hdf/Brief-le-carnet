import { Component } from '@angular/core';
import { UserFormComponent } from "../../user-form-component/user-form-component";
import { HeaderComponent } from "../../header-component/header-component";
import { FooterComponent } from "../../footer-component/footer-component";
import { ContactManagerComponent } from '../../contact-manager/contact-manager';
import { ContactList } from '../../contact-list/contact-list';

@Component({
  selector: 'app-annuaire',
  imports: [UserFormComponent, HeaderComponent, FooterComponent, ContactManagerComponent, ContactList],
  templateUrl: './annuaire.html',
  styleUrl: './annuaire.css'
})
export class Annuaire {

}

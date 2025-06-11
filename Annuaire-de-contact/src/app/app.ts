import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header-component/header-component";
import { FooterComponent } from './footer-component/footer-component';
import { ContactManagerComponent } from './contact-manager/contact-manager';
import { ContactList } from './contact-list/contact-list';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    ContactManagerComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Annuaire-de-contact';
}

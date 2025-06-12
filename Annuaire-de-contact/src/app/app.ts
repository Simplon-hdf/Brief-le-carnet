import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header-component/header-component";
import { FooterComponent } from './footer-component/footer-component';
import { UserFormComponent } from "./user-form-component/user-form-component";
import { ContactManagerComponent } from './contact-manager/contact-manager';
import { HomePage } from './pages/home-page/home-page';

@Component({
  selector: 'app-root',
  
  imports: [RouterOutlet, ContactList, HeaderComponent,FooterComponent,ContactManagerComponent, HomePage],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Annuaire-de-contact';
}

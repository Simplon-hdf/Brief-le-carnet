import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactList } from "./contact-list/contact-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Annuaire-de-contact';
}

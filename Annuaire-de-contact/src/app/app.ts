import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header-component/header-component";
import { SearchBar } from "./search-bar/search-bar";
import { ContactList } from "./contact-list/contact-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactList, HeaderComponent, SearchBar],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Annuaire-de-contact';
}

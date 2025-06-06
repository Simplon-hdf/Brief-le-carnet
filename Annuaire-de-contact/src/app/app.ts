import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { HeaderComponent } from './header-component/header-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Annuaire-de-contact';
}

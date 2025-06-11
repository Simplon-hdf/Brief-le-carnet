import { Component } from '@angular/core';
import { Annuaire } from '../annuaire/annuaire';
import { CardEntrepriseComponent } from "../../card-entreprise-component/card-entreprise-component";
import { CardInterimaireComponent } from "../../card-interimaire-component/card-interimaire-component";

@Component({
  selector: 'app-home-page',
  imports: [Annuaire, CardEntrepriseComponent, CardInterimaireComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}

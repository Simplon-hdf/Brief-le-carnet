import { Component } from '@angular/core';
import { UserFormComponent } from "../../user-form-component/user-form-component";
import { HeaderComponent } from "../../header-component/header-component";
import { FooterComponent } from "../../footer-component/footer-component";

@Component({
  selector: 'app-annuaire',
  imports: [UserFormComponent, HeaderComponent, FooterComponent],
  templateUrl: './annuaire.html',
  styleUrl: './annuaire.css'
})
export class Annuaire {

}

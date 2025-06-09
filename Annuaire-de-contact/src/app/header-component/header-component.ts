import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {
  logo = '../../assets/logo.svg';

  isAdmin: boolean = false;

  switchAdmin() {
  this.isAdmin = !this.isAdmin;

  const body = document.body;
  body.classList.remove('bg-white', 'bg-slate-900', 'text-gray-900', 'text-white');
  body.classList.add('transition-colors', 'duration-300');
  
  if (this.isAdmin) {
    body.classList.add('bg-slate-500');
  } else {
    body.classList.add('bg-white');
  }
}
}
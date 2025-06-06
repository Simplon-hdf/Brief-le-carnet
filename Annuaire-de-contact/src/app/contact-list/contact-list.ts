import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  imports: [CommonModule],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css'
})
export class ContactList {
  contacts = [
    { name: 'Loïc', email: 'loïc@machin.com', num: '07 56 98 45 25' },
    { name: 'Cédric', email: 'cédric@truc.com', num: '06 59 48 52 63' },
    { name: 'Amine', email: 'amine@cirque.com', num: '06 98 85 45 69' },
    { name: 'Bob', email: 'bob@foudubus.com', num: '07 97 28 96 78' },
    { name: 'Xavier', email: 'xavier@foudelagare.com', num: '06 65 45 12 36' },
  ];
  filteredContacts = [...this.contacts];
}

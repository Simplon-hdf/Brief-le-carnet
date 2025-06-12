import { Component, OnInit } from '@angular/core';
import { SqliteService, User } from '../services/sqlite.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
  standalone: true,
  imports: [CommonModule]
})
export class ContactList implements OnInit {
  contacts: User[] = [];
  filteredContacts: User[] = [];
  searchTerm: string = '';
  loading: boolean = false;

  constructor(private sqliteService: SqliteService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  async loadContacts() {
    this.loading = true;
    this.contacts = await this.sqliteService.getAllContacts();
    this.filteredContacts = this.contacts;
    this.loading = false;
  }

  async filterContacts(term: string) {
    this.searchTerm = term;
    if (!term.trim()) {
      this.filteredContacts = this.contacts;
    } else {
      this.filteredContacts = await this.sqliteService.searchContacts(term);
    }
  }
}

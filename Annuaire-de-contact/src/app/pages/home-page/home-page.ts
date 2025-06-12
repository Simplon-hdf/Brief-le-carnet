import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SqliteService, User } from '../../services/sqlite.service';
import { CardContainerComponent } from '../../card-container-component/card-container-component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardContainerComponent
  ],
  templateUrl: './home-page.html',
  styleUrls: []
})
export class HomePage implements OnInit {
  contacts: User[] = [];
  displayedContacts: User[] = [];
  isLoading = false;
  currentView: string = 'contacts';
  
  searchTerm: string = '';

  constructor(
    private contactService: SqliteService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.loadContacts();
  }

  async loadContacts() {
    try {
      this.isLoading = true;
      this.contacts = await this.contactService.getAllContacts();
      this.displayedContacts = [...this.contacts];
    } catch (error) {
      console.error('Erreur lors du chargement des contacts:', error);
    } finally {
      this.isLoading = false;
    }
  }

  async onSearch() {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      this.displayedContacts = [...this.contacts];
      return;
    }
    this.displayedContacts = this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(term) ||
      contact.email.toLowerCase().includes(term) ||
      (contact.phone && contact.phone.includes(term))
    );
  }

  editContact(contact: User) {
    this.router.navigate(['/contact', 'edit', contact.id]);
  }

  async deleteContact(contactId: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce contact ?')) {
      try {
        await this.contactService.deleteContact(contactId);
        await this.loadContacts();
      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
        alert('Erreur lors de la suppression du contact');
      }
    }
  }

  addNewContact() {
    this.router.navigate(['/contact', 'new']);
  }

  switchView(view: 'contacts' | 'annuaire' | 'entreprises' | 'interimaires' | 'form') {
    this.currentView = view;
    if (view === 'contacts') {
      this.loadContacts();
    }
  }

  isActiveView(view: string): boolean {
    return this.currentView === view;
  }

  async refreshData() {
    await this.loadContacts();
  }

  getTotalContacts(): number {
    return this.contacts.length;
  }

  getRecentContacts(): User[] {
    return this.contacts
      .sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateB - dateA;
      })
      .slice(0, 5);
  }
}

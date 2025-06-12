import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SqliteService, User } from '../services/sqlite.service';

@Component({
  selector: 'app-contact-manager',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-manager.html',
  styleUrls: []
})

export class ContactManagerComponent implements OnInit {
  contacts: User[] = [];
  displayedContacts: User[] = [];
  currentContact: any = {
    name: '',
    email: '',
    phone: ''
  };
  
  isEditing = false;
  editingId: number | null = null;
  searchTerm = '';
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private sqliteService: SqliteService) {}

  async ngOnInit() {
    await this.initializeDatabase();
    await this.loadContacts();
  }

  private async initializeDatabase() {
    try {
      await this.sqliteService.initialize();
    } catch (error: any) {
      this.errorMessage = 'Erreur d\'initialisation: ' + error.message;
      console.error('Initialization error:', error);
    }
  }

  async loadContacts() {
    try {
      this.isLoading = true;
      this.contacts = await this.sqliteService.getAllContacts();
      this.displayedContacts = [...this.contacts];
    } catch (error: any) {
      this.errorMessage = 'Erreur de chargement: ' + error.message;
      console.error('Error loading contacts:', error);
    } finally {
      this.isLoading = false;
    }
  }

  async onSubmit() {
    if (!this.currentContact['name']?.trim() || !this.currentContact['email']?.trim()) {
      this.errorMessage = 'Le nom et l\'email sont obligatoires.';
      return;
    }

    try {
      this.isLoading = true;
      this.clearMessages();

      const contactData = {
        name: this.currentContact['name'].trim(),
        email: this.currentContact['email'].trim(),
        phone: this.currentContact['phone']?.trim() || ''
      };

      if (this.isEditing && this.editingId) {
        await this.sqliteService.updateContact(this.editingId, contactData);
        this.successMessage = 'Contact modifié avec succès !';
      } else {
        await this.sqliteService.addContact(contactData);
        this.successMessage = 'Contact ajouté avec succès !';
      }

      await this.loadContacts();
      this.resetForm();
      this.onSearch();

    } catch (error: any) {
      this.errorMessage = 'Erreur lors de la sauvegarde: ' + error.message;
      console.error('Error saving contact:', error);
    } finally {
      this.isLoading = false;
    }
  }

  editContact(contact: User) {
    this.currentContact = {
      name: contact.name,
      email: contact.email,
      phone: contact.phone || ''
    };
    this.isEditing = true;
    this.editingId = contact.id!;
  }

  async deleteContact(id: number) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce contact ?')) {
      return;
    }

    try {
      this.isLoading = true;
      await this.sqliteService.deleteContact(id);
      this.successMessage = 'Contact supprimé avec succès !';
      await this.loadContacts();
      this.onSearch();
    } catch (error: any) {
      this.errorMessage = 'Erreur lors de la suppression: ' + error.message;
      console.error('Error deleting contact:', error);
    } finally {
      this.isLoading = false;
    }
  }

  async onSearch() {
    if (!this.searchTerm.trim()) {
      this.displayedContacts = [...this.contacts];
      return;
    }

    try {
      this.displayedContacts = await this.sqliteService.searchContacts(this.searchTerm);
    } catch (error: any) {
      this.errorMessage = 'Erreur lors de la recherche: ' + error.message;
      console.error('Error searching contacts:', error);
    }
  }

  resetForm() {
    this.currentContact = {
      name: '',
      email: '',
      phone: ''
    };
    this.isEditing = false;
    this.editingId = null;
    this.clearMessages();
  }

  private clearMessages() {
    this.errorMessage = '';
    this.successMessage = '';
  }
}

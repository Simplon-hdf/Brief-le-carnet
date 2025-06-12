import { Injectable } from '@angular/core';
import initSqlJs, { Database, SqlJsStatic } from 'sql.js';

export interface User {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  createdAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SqliteService {
  private SQL: SqlJsStatic | null = null;
  private db: Database | null = null;
  private isInitialized = false;

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      this.SQL = await initSqlJs({
        locateFile: (file: string) => `assets/sql-js/${file}`
      });

      // Load database from localStorage or create new one
      const savedDb = localStorage.getItem('contacts-db');
      
      if (savedDb) {
        const uint8Array = new Uint8Array(
          atob(savedDb).split('').map(c => c.charCodeAt(0))
        );
        this.db = new this.SQL.Database(uint8Array);
      } else {
        this.db = new this.SQL.Database();
        this.createTables();
      }

      this.isInitialized = true;
      console.log('SQLite initialized successfully');
    } catch (error) {
      console.error('Error initializing SQLite:', error);
      throw error;
    }
  }

  private createTables(): void {
    if (!this.db) return;

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        phone TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `;

    try {
      this.db.run(createTableQuery);
      this.saveDatabase();
      console.log('Tables created successfully');
    } catch (error) {
      console.error('Error creating tables:', error);
      throw error;
    }
  }

  private saveDatabase(): void {
    if (!this.db) return;

    try {
      const data = this.db.export();
      const base64String = btoa(String.fromCharCode(...data));
      localStorage.setItem('contacts-db', base64String);
    } catch (error) {
      console.error('Error saving database:', error);
    }
  }

  async getAllContacts(): Promise<User[]> {
    if (!this.isInitialized) await this.initialize();
    if (!this.db) throw new Error('Database not initialized');

    try {
      const stmt = this.db.prepare('SELECT * FROM contacts ORDER BY name');
      const contacts: User[] = [];

      while (stmt.step()) {
        const row = stmt.getAsObject();
        contacts.push({
          id: row['id'] as number,
          name: row['name'] as string,
          email: row['email'] as string,
          phone: row['phone'] as string,
          createdAt: row['createdAt'] as string
        });
      }

      stmt.free();
      return contacts;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  }

  async getContactById(id: number): Promise<User | null> {
    if (!this.isInitialized) await this.initialize();
    if (!this.db) throw new Error('Database not initialized');

    try {
      const stmt = this.db.prepare('SELECT * FROM contacts WHERE id = ?');
      stmt.bind([id]);

      if (stmt.step()) {
        const row = stmt.getAsObject();
        const contact: User = {
          id: row['id'] as number,
          name: row['name'] as string,
          email: row['email'] as string,
          phone: row['phone'] as string,
          createdAt: row['createdAt'] as string
        };
        stmt.free();
        return contact;
      }

      stmt.free();
      return null;
    } catch (error) {
      console.error('Error fetching contact:', error);
      throw error;
    }
  }

  async addContact(contact: Omit<User, 'id'>): Promise<User> {
    if (!this.isInitialized) await this.initialize();
    if (!this.db) throw new Error('Database not initialized');

    try {
      const stmt = this.db.prepare(`
        INSERT INTO contacts (name, email, phone) 
        VALUES (?, ?, ?)
      `);
      
      stmt.run([contact.name, contact.email, contact.phone || null]);
      
      // Récupérer l'ID du dernier insert
      const lastId = this.db.exec("SELECT last_insert_rowid() as id")[0].values[0][0] as number;
      
      stmt.free();
      this.saveDatabase();

      return {
        id: lastId,
        ...contact
      };
    } catch (error: any) {
      console.error('Error adding contact:', error);
      if (error.message.includes('UNIQUE constraint failed')) {
        throw new Error('Email already exists');
      }
      throw error;
    }
  }

  async updateContact(id: number, contact: Omit<User, 'id'>): Promise<void> {
    if (!this.isInitialized) await this.initialize();
    if (!this.db) throw new Error('Database not initialized');

    try {
      const stmt = this.db.prepare(`
        UPDATE contacts 
        SET name = ?, email = ?, phone = ?
        WHERE id = ?
      `);
      
      stmt.run([contact.name, contact.email, contact.phone || null, id]);
      stmt.free();

      this.saveDatabase();
    } catch (error: any) {
      console.error('Error updating contact:', error);
      if (error.message.includes('UNIQUE constraint failed')) {
        throw new Error('Email already exists');
      }
      throw error;
    }
  }

  async deleteContact(id: number): Promise<void> {
    if (!this.isInitialized) await this.initialize();
    if (!this.db) throw new Error('Database not initialized');

    try {
      const stmt = this.db.prepare('DELETE FROM contacts WHERE id = ?');
      stmt.run([id]);
      stmt.free();

      this.saveDatabase();
    } catch (error) {
      console.error('Error deleting contact:', error);
      throw error;
    }
  }

  async searchContacts(searchTerm: string): Promise<User[]> {
    if (!this.isInitialized) await this.initialize();
    if (!this.db) throw new Error('Database not initialized');

    try {
      const stmt = this.db.prepare(`
        SELECT * FROM contacts 
        WHERE name LIKE ? OR email LIKE ? OR phone LIKE ?
        ORDER BY name
      `);
      
      const term = `%${searchTerm}%`;
      const contacts: User[] = [];

      stmt.bind([term, term, term]);
      while (stmt.step()) {
        const row = stmt.getAsObject();
        contacts.push({
          id: row['id'] as number,
          name: row['name'] as string,
          email: row['email'] as string,
          phone: row['phone'] as string,
          createdAt: row['createdAt'] as string
        });
      }

      stmt.free();
      return contacts;
    } catch (error) {
      console.error('Error searching contacts:', error);
      throw error;
    }
  }
}

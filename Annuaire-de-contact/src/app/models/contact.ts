export interface contacts {
  id?: number;
  type?: 'entreprise' | 'interimaire';
  nom: string;
  prenom?: string;
  photo?: string;
  age?: number;
  telephone?: string;
  email: string;
  adressePostal?: string;
  codePostal?: string;
  metier?: string;
  description?: string;
  posteRecherche?: string;
  createdAt?: string;
}

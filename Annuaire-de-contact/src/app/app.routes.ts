import { Routes } from '@angular/router';
import { Annuaire } from './pages/annuaire/annuaire';

export const routes: Routes = [
    { path: '', redirectTo: '/annuaire', pathMatch: 'full' },
    {path:'annuaire', component:Annuaire}
];

import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EnTete } from './composants/en-tete/en-tete';
import { ListeCours } from './composants/liste-cours/liste-cours';
import { PiedPage } from './composants/pied-page/pied-page';
import { DetailCours } from './composants/detail-cours/detail-cours';
import { Cours } from './models/cours';
import { Session } from './services/session';

@Component({
  imports: [EnTete, PiedPage, RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  session = inject(Session); 
  private router = inject(Router);
  coursSelectionne: Cours | null = null;
 
  onSelectionCours(c: Cours) {
    this.coursSelectionne = c;
  }

  deconnecter() { 
    this.session.deconnecter(); 
    this.router.navigateByUrl('/'); 
  }

}

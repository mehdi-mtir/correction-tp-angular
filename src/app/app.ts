import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EnTete } from './composants/en-tete/en-tete';
import { PiedPage } from './composants/pied-page/pied-page';
import { Cours } from './models/cours';
import { Session } from './services/session';
import { Inscriptions } from './services/inscriptions';

@Component({
  imports: [EnTete, PiedPage, RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  inscriptions = inject(Inscriptions);
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

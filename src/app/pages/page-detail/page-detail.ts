import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cours } from '../../models/cours';
import { DetailCours } from '../../composants/detail-cours/detail-cours';
import { Catalogue } from '../../services/catalogue';
 
@Component({
  selector: 'app-page-detail',
  imports: [DetailCours, RouterLink],
  templateUrl: './page-detail.html',
  styleUrl: './page-detail.css',
})
export class PageDetail {
  private catalogue = inject(Catalogue);
  // Rempli automatiquement avec le :id de l'URL (c'est une chaîne de caractères)
  @Input() id = '';
 
  /*get cours(): Cours | undefined {
    return COURS.find(c => c.id === Number(this.id));
  }*/

  get cours(): Cours | undefined {
    return this.catalogue.trouver(Number(this.id));
    }
}

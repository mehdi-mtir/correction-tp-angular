import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Cours } from '../../models/cours';
import { COURS } from '../../data/cours';
import { RouterLink } from '@angular/router';
import { Catalogue } from '../../services/catalogue';

@Component({
  imports: [RouterLink],
  selector: 'app-liste-cours',
  styleUrl: './liste-cours.css',
  templateUrl: './liste-cours.html',
})
export class ListeCours {
  private catalogue = inject(Catalogue);
  @Output() coursSelectionne = new EventEmitter<Cours>();
  coursActif: Cours | null = null;

  cours: Cours[] = this.catalogue.lister();

  selectionner(c: Cours) {
    this.coursActif = c;
    this.coursSelectionne.emit(c);
  }


}

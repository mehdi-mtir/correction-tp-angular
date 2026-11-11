import { Component, EventEmitter, Output } from '@angular/core';
import { Cours, COURS } from '../../models/cours';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-liste-cours',
  styleUrl: './liste-cours.css',
  templateUrl: './liste-cours.html',
})
export class ListeCours {
  @Output() coursSelectionne = new EventEmitter<Cours>();
  coursActif: Cours | null = null;

  cours : Cours[] = [...COURS];

  selectionner(c: Cours) {
    this.coursActif = c;
    this.coursSelectionne.emit(c);
  }


}

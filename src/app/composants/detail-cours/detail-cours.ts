import { Component, Input } from '@angular/core';
import { Cours } from '../../models/cours';

@Component({
  imports: [],
  selector: 'app-detail-cours',
  styleUrl: './detail-cours.css',
  templateUrl: './detail-cours.html',
})
export class DetailCours {
  @Input() cours: Cours | null = null;
}

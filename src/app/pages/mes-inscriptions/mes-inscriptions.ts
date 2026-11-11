import { Component, inject } from '@angular/core';
import { Session } from '../../services/session';

@Component({
  imports: [],
  selector: 'app-mes-inscriptions',
  styleUrl: './mes-inscriptions.css',
  templateUrl: './mes-inscriptions.html',
})
export class MesInscriptions {
  session = inject(Session);
}

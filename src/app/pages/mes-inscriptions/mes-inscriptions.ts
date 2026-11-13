import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Session } from '../../services/session';
import { Catalogue } from '../../services/catalogue';
import { Inscriptions } from '../../services/inscriptions';
@Component({
  selector: 'app-mes-inscriptions',
  imports: [DatePipe, RouterLink],
  templateUrl: './mes-inscriptions.html',
  styleUrl: './mes-inscriptions.css',
})

export class MesInscriptions {
  session = inject(Session);
  catalogue = inject(Catalogue);
  inscriptions = inject(Inscriptions);
}
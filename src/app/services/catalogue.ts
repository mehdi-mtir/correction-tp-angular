import { Injectable } from '@angular/core';
import { COURS } from '../data/cours';
import { Cours } from '../models/cours';

@Injectable({ providedIn: 'root' })
export class Catalogue {
    constructor() {
        console.log('Service Catalogue créé');
    }

    lister(): Cours[] {
        return COURS;
    }

    trouver(id: number): Cours | undefined {
        return COURS.find(c => c.id === id);
    }
}
import { Injectable, signal } from '@angular/core'; 

@Injectable(
    { providedIn: 'root' }
) 

export class Session { 
    connecte = signal(false); 
    nom = signal('');
    
    constructor() {
        console.log('Service Session créé');
    }

    connecter(nom: string) { 
        this.nom.set(nom); 
        this.connecte.set(true); 
    } 
    
    deconnecter() { 
        this.nom.set(''); 
        this.connecte.set(false); 
    } 
}
import { Component, Input, OnInit, inject } from '@angular/core'; 
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { RouterLink } from '@angular/router'; 
import {Cours } from '../../models/cours';
import {COURS} from '../../data/cours';
import { Session } from '../../services/session'; 
import { nomComplet } from '../../validators/nom-complet';
import { Inscriptions } from '../../services/inscriptions';

@Component({ 
  selector: 'app-inscription', 
  imports: [ReactiveFormsModule, RouterLink], 
  //providers: [Inscriptions],
  templateUrl: './inscription.html', 
  styleUrl: './inscription.css', 
})

export class Inscription implements OnInit { 
  private session = inject(Session); 
  private inscriptions = inject(Inscriptions);
  @Input() id = ''; // reçoit le :id de l'URL 
  confirmation = ''; 
  
  form = new FormGroup({ 
    nom: new FormControl('', [Validators.required, nomComplet]), 
    email: new FormControl('', [Validators.required, Validators.email]), 
    telephone: new FormControl('', [Validators.pattern(/^[0-9]{8}$/)]), 
    niveau: new FormControl('', [Validators.required]), 
    motivation: new FormControl('', [Validators.required, Validators.minLength(20)]), 
    conditions: new FormControl(false, [Validators.requiredTrue]), }
  ); 
    
  get cours(): Cours | undefined { 
    return COURS.find(c => c.id === Number(this.id)); 
  } 

  /*envoyer() {
    console.log(this.form);
  }*/

  /*envoyer() { 
    //console.log(this.form);
    if (this.form.invalid) { 
      this.form.markAllAsTouched(); // fait apparaître toutes les erreurs 
      return; 
    } 
    const { nom, email } = this.form.value;
    this.confirmation = 
      `Merci ${nom} ! Votre inscription à « ${this.cours?.titre} » est enregistrée. ` 
      + 
      `Un message de confirmation sera envoyé à ${email}.`; 
    console.log('Inscription :', this.form.value); 
    this.form.reset(); 
  }*/

  envoyer() {
    const cours = this.cours;
    if (this.form.invalid || !cours) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    this.inscriptions.ajouter({
      coursId: cours.id,
      nom: v.nom ?? '',
      email: v.email ?? '',
      niveau: v.niveau ?? '',
      date: new Date(),
    });
    this.confirmation = `Merci ${v.nom} ! Votre inscription à « ${cours.titre} » est enregistrée.`;
    this.form.reset();
  }
  
  ngOnInit() { 
    // Pré-remplit le nom avec celui de l'utilisateur connecté 
    // this.form.patchValue({ nom: this.session.nom() }); 
  } 

  get nom() { return this.form.controls.nom; } 
  get email() { return this.form.controls.email; } 
  get telephone() { return this.form.controls.telephone; } 
  get niveau() { return this.form.controls.niveau; } 
  get motivation() { return this.form.controls.motivation; } 
  get conditions() { return this.form.controls.conditions; }
}
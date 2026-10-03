import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-en-tete',
  styleUrl: './en-tete.css',
  templateUrl: './en-tete.html',
})
export class EnTete {
  urlImage1 = "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/250px-Angular_gradient_logo.png";
  urlImage2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdXkwudxK6mzKnvkBNWHrdhBwUkXjFMeQz3Ws5hU36kgUqIB3NlrQHlu-1&s=10";
  urlImage = this.urlImage1;
  titre = 'Application de gestion de Catalogue de cours';

  changeLogo() {
    this.urlImage = this.urlImage === this.urlImage1 ? this.urlImage2 : this.urlImage1;
  }
}

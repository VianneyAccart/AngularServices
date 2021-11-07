import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../shared/models/Cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[];

  constructor(private cocktailService: CocktailService) {
    this.cocktails = new Array();
  }

  ngOnInit(): void {
    // J'utilise la méthode getCocktails() issue de CocktailServices préalablement importé dans le constructor
    // Je subscribe pour récupérer les données, ici datas (un tableau d'objets issu de cocktails.json)
    this.cocktailService.getCocktails().subscribe(
      (datas: any) => {
        // Pour chaque objet (data) de mon tableau cocktails.json (datas)
        datas.forEach((data: any) => {
          // J'ajoute à cocktails (variable locale de type Cocktail)...
          this.cocktails.push(
            // ... un nouveau cocktail avec les arguments attendus
            new Cocktail(data.name, data.price, data.img)
          );
        });
      },
      // Si le processus ne fonctionne pas, affiche moi l'erreur dans la console
      (error) => {
        console.log(error);
      }
    );
  }
}

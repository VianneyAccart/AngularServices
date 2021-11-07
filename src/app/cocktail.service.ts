import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktails: any[]

  constructor() {
    this.cocktails = [
      {name : "Martini", price : 5, img : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/15-09-26-RalfR-WLC-0095.jpg/280px-15-09-26-RalfR-WLC-0095.jpg"},
      {name : "Mojito fraises", price : 7, img : "https://www.atelierdeschefs.com/media/recette-e24638-virgin-mojito-fraises-et-framboises.jpg"},
      {name : "Morito", price : 2, img : "https://static.750g.com/images/600-600/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg"},
    ]
   }

  getCocktails(): any[] {
    return this.cocktails;
  }
}

import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  cocktails: any

  constructor(public cocktail: CocktailService) { } // Injection du service CocktailService

  ngOnInit(): void {
    this.cocktails = this.cocktail.getCocktails() // Récupère les cocktails du service
  }

}

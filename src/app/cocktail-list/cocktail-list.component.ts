import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../shared/models/Cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})

export class CocktailListComponent implements OnInit {

  cocktails: Cocktail[] = new Array();

  private service: CocktailService;

  constructor(param_service: CocktailService) {
    this.service = param_service;
    this.cocktails = new Array();
  }

  ngOnInit(): void {
    this.service.getCocktails().subscribe(

    )
  }
}

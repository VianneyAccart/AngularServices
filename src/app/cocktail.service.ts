import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from './shared/models/Cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor(private httpClient: HttpClient) {}

  // Récupère les informations du fichier cocktails.json avec le typage Cocktail
  getCocktails(): Observable<Cocktail[]> {
    return this.httpClient.get<Cocktail[]>('assets/cocktails.json');
  }
}

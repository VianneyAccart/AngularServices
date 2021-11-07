import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from './shared/models/Cocktail.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  cocktails: Cocktail[];
  private service: HttpClient;

  constructor(param_service: HttpClient) {
    this.cocktails = new Array();
    this.service = param_service;
  }

  getCocktails(): Observable<any> {
    const obs1: Observable<any> = this.service.get('/assets/cocktails.json');
    const treatment = (param_data: any) => {
      // Insérer un new Cocktail ?
      return (
        param_data.name as string,
        param_data.price as number,
        param_data.img as string
      );
    };

    return obs1.pipe(map(treatment));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private httpClient: HttpClient) { }

  getImageOfTheDay(): Observable<any> {
    return this.httpClient.get<any>("https://api.nasa.gov/planetary/apod?api_key=atW5SIWgsULpm8d71E1cBHo8mgh1DMlYhHdiJntJ")
  }
}

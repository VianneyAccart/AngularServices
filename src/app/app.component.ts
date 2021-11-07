import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  imgOfTheDay: string | undefined
  imgTitle: string | undefined
  imgUrl: string | undefined
  imgDate: string | undefined
  imgExplanation: string | undefined

  constructor(private nasaService: NasaService){
  }

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe((image: any) => {
      this.imgOfTheDay = image.hdurl;
      this.imgTitle = image.title;
      this.imgUrl = image.url;
      this.imgDate = image.date;
      this.imgExplanation = image.explanation;
    })
  }
  
}

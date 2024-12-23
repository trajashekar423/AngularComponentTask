import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carouselItems: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCarouselData();
  }

  loadCarouselData(): void {
    this.http.get<any[]>('/assets/carousel-data.json').subscribe(
      (data) => {
        this.carouselItems = data;
      },
      (error) => {
        console.error('Error loading carousel data', error);
      }
    );
  }
}

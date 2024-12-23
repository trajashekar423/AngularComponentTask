import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  accordionData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAccordionData();
  }

  loadAccordionData(): void {
    this.http.get<any[]>('/assets/accordion-data.json').subscribe(
      (data) => {
        this.accordionData = data;
      },
      (error) => {
        console.error('Error loading accordion data', error);
      }
    );
  }
}

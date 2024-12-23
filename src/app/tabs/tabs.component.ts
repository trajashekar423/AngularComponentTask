import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  tabs: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadTabsData();
  }

  loadTabsData(): void {
    this.http.get<any[]>('/assets/tabs-data.json').subscribe(
      (data) => {
        this.tabs = data;
      },
      (error) => {
        console.error('Error loading tabs data', error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarItems: any[] = []; // Holds the navbar data

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadNavbarData();
  }

  loadNavbarData(): void {
    this.http.get<any[]>('/assets/navbar-data.json').subscribe(
      (data) => {
        console.log('Navbar data loaded:', data); // Debug log
        this.navbarItems = data;
      },
      (error) => {
        console.error('Error loading navbar data', error);
      }
    );
  }
}

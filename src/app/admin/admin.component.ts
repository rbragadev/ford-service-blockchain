import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  currentRoute!: string;

  activeTab1: number = 0;
  activeTab2: number = 5;

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
    this.currentRoute = this.router.url;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-client-car-list',
  templateUrl: './client-car-list.component.html',
  styleUrls: ['./client-car-list.component.css'],
})
export class ClientCarListComponent {
  public cars = [
    { model: 'Territory', brand: 'Ford' },
    { model: 'Gol', brand: 'Volkswagen' },
    { model: 'HB20', brand: 'Hyundai' },
  ];
}

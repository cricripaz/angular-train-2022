import { Component } from '@angular/core';
import {CarService} from "./car.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hola ';

  constructor(private carService: CarService) {}
  ngOnInit() {
    this.carService.getAllCars().subscribe((res) => {
      console.log('RESPONSE: ', res);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

     CarName = '';
     CarStatus = false;
     cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Bentli', 'Lada'];
     dates = [
       new Date(2025, 3, 4),
       new Date(2024, 4, 4),
       new Date(2023, 5, 4),
       new Date(2022, 6, 4),
       new Date(2021, 7, 4),
       new Date(2020, 8, 4)
     ];
      constructor () {

      }
      addCar() {
        this.CarStatus = true;
        this.cars.push(this.CarName);
        this.CarName = '';
      }
}


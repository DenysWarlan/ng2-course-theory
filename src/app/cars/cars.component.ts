import { Component, OnInit } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  carName = '';
  carYear = 2015;

  cars: [{ name: string, year: number }] = [{
    name: 'Ford',
    year: 2015
  }];

  addCar() {
    this.cars.push({
      name: this.carName,
      year: this.carYear
    });
    this.carName = ' ';
    this.carYear = 2015;
  }
}

